using System.Web;
using System.Web.Optimization;

namespace GuidedExperience
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            
            // Bootstrap Tour Bundle
            bundles.Add(new StyleBundle("~/content/bootstraptourcss").Include(
                      "~/BootstrapTour/css/bootstrap-tour-standalone.min.css"));

            bundles.Add(new ScriptBundle("~/bundles/bootstraptour").Include(
                      "~/BootstrapTour/js/bootstrap-tour-standalone.min.js",
                      "~/BootstrapTour/app/app.js"));

            // Hopscotch Bundle
            bundles.Add(new StyleBundle("~/content/Hopscotchcss").Include(
                     "~/Hopscotch/css/hopscotch.min.css",
                     "~/Hopscotch/css/flat-ui.css"));

            bundles.Add(new ScriptBundle("~/bundles/hopscotch").Include(
                      "~/Hopscotch/js/hopscotch.js",
                      "~/Hopscotch/app/hopscotchapp.js"));

            // JoyRide Bundle
            bundles.Add(new StyleBundle("~/content/joyridecss").Include(
                    "~/Joyride/css/solo.joyride.css"));

            bundles.Add(new ScriptBundle("~/bundles/joyridejquery").Include(
                      "~/Joyride/js/jquery.js"));

            bundles.Add(new ScriptBundle("~/bundles/joyride").Include(
                      "~/Joyride/js/solo.joyride.js"));

            bundles.Add(new ScriptBundle("~/bundles/Selector").Include(
                      "~/Selector/jquery.dom-outline-1.0.js",
                      "~/Selector/SelectorCode.js"));
        }
    }
}
