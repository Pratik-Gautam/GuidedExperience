using Microsoft.Ajax.Utilities;
using Microsoft.SharePoint.Client;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;


namespace GuidedExperienceAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class GuideFileGenController : ApiController
    {

        public HttpResponseMessage PostGuideFileData([FromBody] dynamic guideFile)
        {
            HttpResponseMessage message = null;
            try
            {
                if (guideFile.Count>0)
                {
                    SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["AzureSQL"].ConnectionString);
                    con.Open();

                    foreach (var item in guideFile)
                    {
                        String query = "INSERT INTO GuidedExperienceData (GuidedExpData, CreatedByUser) VALUES ('" + item.Value.ToString() + "','Pratik Gautam' );";
                        SqlCommand cmd = new SqlCommand(query, con);
                        cmd.ExecuteNonQuery();
                    }

                    con.Close();
                }
                message = Request.CreateResponse(HttpStatusCode.OK, "Step Creation Process Started!");
                return message;
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
