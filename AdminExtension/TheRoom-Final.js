(function(window, document) {
    window.theRoom = (function(window, document) {
        var options = {
            inspector: null,
            namespace: "theroom",
            bgcolor: "rgba(255,0,0,0.5)",
            transitionSpeed: 200,
            useInline: true,
            showInfo: true,
            template: "",
            onStart: null,
            onStarting: null,
            onStop: null,
            onStopping: null,
            onClick: null,
            exceptions: ["head", "meta", "link", "style", "title", "script"]
        };
        var utils = (function() {
            var objectToCss = function(obj) {
                var css = "";
                if (typeof obj === "object" && obj) {
                    css += "{";
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key) && obj[key]) {
                            css += key + ": " + obj[key] + ";";
                        }
                    }
                    css += "}";
                }
                return css;
            };
            return {
                objectToCss: objectToCss
            };
        }
        )();
        var getInspector = function() {
            if (!options.inspector) {
                options.inspector = createInspector();
            }
            return options.inspector;
        };
        var prepareInspectorStyles = function(top, left, width, height) {
            var _styles = {
                "transition": ("all " + options.transitionSpeed + "ms"),
                "position": "absolute",
                "top": (top || 0) + "px",
                "left": (left || 0) + "px",
                "width": (width || 0) + "px",
                "height": (height || 0) + "px",
                "pointer-events": "none",
                "z-index": "2147483647",
                "background-color": options.bgcolor
            };
            var styles = utils.objectToCss(_styles);
            return styles;
        };
        var createInspector = function() {
            var inspector = document.createElement("div");
            inspector.id = options.namespace;
            var inspectorStyles = prepareInspectorStyles();
            if (typeof options.useInline === "boolean" && options.useInline) {
                inspector.style = inspectorStyles.replace(/(\{|\})/g, "");
            } else {
                var styleEl = document.createElement("style");
                styleEl.type = "text/css";
                inspectorStyles = ("#" + options.namespace + inspectorStyles);
                if (styleEl.styleSheet) {
                    styleEl.styleSheet.cssText = inspectorStyles;
                } else {
                    styleEl.appendChild(document.createTextNode(inspectorStyles));
                }
                document.getElementsByTagName("head")[0].appendChild(styleEl);
            }
            document.getElementsByTagName("body")[0].appendChild(inspector);
            return inspector;
        };
        var getSelectorQuery = function() {
            var query = "*";
            if (options.exceptions.length) {
                for (var i = 0; i < options.exceptions.length; i++) {
                    query += ":not(" + options.exceptions[i] + ")";
                }
            }
            return query;
        };
        var applyNewOptions = function(opts) {
            if (!opts)
                return;
            for (var opt in opts) {
                if (opts.hasOwnProperty(opt)) {
                    options[opt] = opts[opt];
                }
            }
        };
        var eventEmitter = function(event) {
            var target = event.target;
            if (target.id === options.namespace)
                return;
            switch (event.type) {
            case "click":
                eventController("onClick", target);
                break;
            case "mouseover":
                var pos = target.getBoundingClientRect();
                var scrollTop = window.scrollY || document.documentElement.scrollTop;
                var width = pos.width;
                var height = pos.height;
                var top = Math.max(0, pos.top + scrollTop);
                var left = pos.left;
                var inspectorStyles = prepareInspectorStyles(top, left, width, height).replace(/(\{|\})/g, "");
                options.inspector.setAttribute("style", inspectorStyles);
                if (typeof options.showInfo === "boolean" && options.showInfo) {
                    var detailsEl = options.inspector.querySelector("#" + options.namespace + "-info");
                    if (detailsEl) {
                        detailsEl.querySelector("#" + options.namespace + "-tag").innerText = target.tagName;
                        detailsEl.querySelector("#" + options.namespace + "-id").innerText = (target.id ? ("#" + target.id) : "");
                        detailsEl.querySelector("#" + options.namespace + "-class").innerText = (target.className ? ("." + target.className.split(/\s+/).join(".")) : "");
                    }
                }
                break;
            }
        };
        var engine = function(type) {
            if (!type)
                return;
            switch (type) {
            case "start":
                document.querySelector("body").addEventListener("click", eventEmitter);
                if (typeof options.showInfo === "boolean" && options.showInfo && typeof options.template === "string" && options.template) {
                    options.inspector.innerHTML = options.template;
                }
                break;
            case "stop":
                document.querySelector("body").removeEventListener("click", eventEmitter);
                break;
            }
            var query = getSelectorQuery();
            var allNodes = document.querySelectorAll(query);
            for (var i = 0; i < allNodes.length; i++) {
                if (type === "stop") {
                    allNodes[i].removeEventListener("mouseover", eventEmitter);
                } else if (type === "start") {
                    allNodes[i].addEventListener("mouseover", eventEmitter);
                }
            }
        };
        var eventController = function(type, element) {
            if (!options[type] || typeof options[type] !== "function")
                return;
            switch (type) {
            case "onStart":
                options.onStart.call();
                break;
            case "onStarting":
                options.onStarting.call();
                break;
            case "onStop":
                options.onStop.call();
                break;
            case "onStopping":
                options.onStopping.call();
                break;
            case "onClick":
                options.onClick.call(undefined, element);
                break;
            }
        };
        var start = function(opts) {
            applyNewOptions(opts);
            eventController("onStarting");
            var inspector = getInspector();
            engine("start");
            eventController("onStart");
        };
        var stop = function() {
            eventController("onStopping");
            engine("stop");
            getInspector().remove();
            options.inspector = null;
            eventController("onStop");
        };
        return {
            start: start,
            stop: stop
        };
    }
    )(window, document);
}
)(window, document);
