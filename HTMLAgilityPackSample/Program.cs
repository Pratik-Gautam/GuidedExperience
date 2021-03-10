using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using HtmlAgilityPack;

namespace HTMLAgilityPackSample
{
    class Program
    {
        static void Main(string[] args)
        {
            WebDataScrap();


        }

        public static void WebDataScrap()
        {
            try
            {
                //Get the content of the URL from the Web
                const string url = "websiteurl";
                var web = new HtmlWeb();
                HtmlDocument doc = web.Load(url);

                Console.WriteLine(doc.DocumentNode.OuterHtml);
                Console.ReadKey();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occured:\r\n{ex.Message}");
            }
        }
    }
}
