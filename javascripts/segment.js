//Code for Segment Analytics (segment.com)
(function() {
    var analytics = window.analytics = window.analytics || [];
    if (!analytics.initialize)
        if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
        else {
            analytics.invoked = !0;
            analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "group", "track", "ready", "alias", "page", "once", "off", "on"];
            analytics.factory = function(t) {
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    e.unshift(t);
                    analytics.push(e);
                    return analytics
                }
            };
            for (var t = 0; t < analytics.methods.length; t++) {
                var e = analytics.methods[t];
                analytics[e] = analytics.factory(e)
            }
            analytics.load = function(t) {
                var e = document.createElement("script");
                e.type = "text/javascript";
                e.async = true;
                e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(e, n)
            };
            analytics.SNIPPET_VERSION = "3.0.1";

            //switch these for dev // production.
            // analytics.load("duhCFWFVnJujW1xmCQQ93jVRGXBqW2gh"); //DEV KEY
            analytics.load("y2TiuwaPhoIo0JzEtOWGBtJQkm0ECH5G"); //PRODUCTION KEY

            //This isn't default Segment code. I wrote this bit to identify the page that a user is on.
            var page_title = document.body.getAttribute("data-page-title");

            if(page_title === null){
                //something went wrong lol
                analytics.page();
            } else {
                analytics.page(page_title);
            }

        }
})();