/*!
 * Custom jQuery Build for Jekyll Blog
 * Includes: Core, CSS, DOM manipulation, Events, AJAX, Effects
 * Optimized for performance and size
 */

(function(global, factory) {
    "use strict";
    if (typeof module === "object" && typeof module.exports === "object") {
      module.exports = global.document ?
        factory(global, true) :
        function(w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
    } else {
      factory(global);
    }
  })(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    "use strict";
  
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
      return arr.flat.call(array);
    } : function(array) {
      return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
  
    var isFunction = function isFunction(obj) {
      return typeof obj === "function" && typeof obj.nodeType !== "number" &&
        typeof obj.item !== "function";
    };
  
    var isWindow = function isWindow(obj) {
      return obj != null && obj === obj.window;
    };
  
    var document = window.document;
    var preservedScriptAttributes = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
  
    function DOMEval(code, node, doc) {
      doc = doc || document;
      var i, val,
        script = doc.createElement("script");
      script.text = code;
      if (node) {
        for (i in preservedScriptAttributes) {
          val = node[i] || node.getAttribute && node.getAttribute(i);
          if (val) {
            script.setAttribute(i, val);
          }
        }
      }
      doc.head.appendChild(script).parentNode.removeChild(script);
    }
  
    function toType(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ?
        class2type[toString.call(obj)] || "object" :
        typeof obj;
    }
  
    var jQuery = function(selector, context) {
      return new jQuery.fn.init(selector, context);
    };
  
    jQuery.fn = jQuery.prototype = {
      jquery: "3.7.1-custom",
      constructor: jQuery,
      length: 0,
      toArray: function() {
        return slice.call(this);
      },
      get: function(num) {
        if (num == null) {
          return slice.call(this);
        }
        return num < 0 ? this[num + this.length] : this[num];
      },
      pushStack: function(elems) {
        var ret = jQuery.merge(this.constructor(), elems);
        ret.prevObject = this;
        return ret;
      },
      each: function(callback) {
        return jQuery.each(this, callback);
      },
      map: function(callback) {
        return this.pushStack(jQuery.map(this, function(elem, i) {
          return callback.call(elem, i, elem);
        }));
      },
      slice: function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i) {
          return (i + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i) {
          return i % 2;
        }));
      },
      eq: function(i) {
        var len = this.length,
          j = +i + (i < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      push: push,
      sort: arr.sort,
      splice: arr.splice
    };
  
    jQuery.extend = jQuery.fn.extend = function() {
      var options, name, src, copy, copyIsArray, clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
  
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i] || {};
        i++;
      }
  
      if (typeof target !== "object" && !isFunction(target)) {
        target = {};
      }
  
      if (i === length) {
        target = this;
        i--;
      }
  
      for (; i < length; i++) {
        if ((options = arguments[i]) != null) {
          for (name in options) {
            copy = options[name];
  
            if (name === "__proto__" || target === copy) {
              continue;
            }
  
            if (deep && copy && (jQuery.isPlainObject(copy) ||
                (copyIsArray = Array.isArray(copy)))) {
              src = target[name];
  
              if (copyIsArray && !Array.isArray(src)) {
                clone = [];
              } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                clone = {};
              } else {
                clone = src;
              }
              copyIsArray = false;
  
              target[name] = jQuery.extend(deep, clone, copy);
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    };
  
    jQuery.extend({
      expando: "jQuery" + ("3.7.1-custom" + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function(msg) {
        throw new Error(msg);
      },
      noop: function() {},
      isPlainObject: function(obj) {
        var proto, Ctor;
        if (!obj || toString.call(obj) !== "[object Object]") {
          return false;
        }
        proto = getProto(obj);
        if (!proto) {
          return true;
        }
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },
      isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
          return false;
        }
        return true;
      },
      globalEval: function(code, options, doc) {
        DOMEval(code, { nonce: options && options.nonce }, doc);
      },
      each: function(obj, callback) {
        var length, i = 0;
        if (isArrayLike(obj)) {
          length = obj.length;
          for (; i < length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
              break;
            }
          }
        }
        return obj;
      },
      makeArray: function(arr, results) {
        var ret = results || [];
        if (arr != null) {
          if (isArrayLike(Object(arr))) {
            jQuery.merge(ret,
              typeof arr === "string" ?
              [arr] : arr
            );
          } else {
            push.call(ret, arr);
          }
        }
        return ret;
      },
      inArray: function(elem, arr, i) {
        return arr == null ? -1 : indexOf.call(arr, elem, i);
      },
      merge: function(first, second) {
        var len = +second.length,
          j = 0,
          i = first.length;
  
        for (; j < len; j++) {
          first[i++] = second[j];
        }
        first.length = i;
        return first;
      },
      grep: function(elems, callback, invert) {
        var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;
  
        for (; i < length; i++) {
          callbackInverse = !callback(elems[i], i);
          if (callbackInverse !== callbackExpect) {
            matches.push(elems[i]);
          }
        }
        return matches;
      },
      map: function(elems, callback, arg) {
        var length, value,
          i = 0,
          ret = [];
  
        if (isArrayLike(elems)) {
          length = elems.length;
          for (; i < length; i++) {
            value = callback(elems[i], i, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        } else {
          for (i in elems) {
            value = callback(elems[i], i, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        }
        return flat(ret);
      },
      guid: 1,
      support: support
    });
  
    if (typeof Symbol === "function") {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
  
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      });
  
    function isArrayLike(obj) {
      var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);
  
      if (isFunction(obj) || isWindow(obj)) {
        return false;
      }
      return type === "array" || length === 0 ||
        typeof length === "number" && length > 0 && (length - 1) in obj;
    }
  
    // DOM Manipulation
    var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);
  
    (function() {
      var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");
  
      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "t");
  
      div.appendChild(input);
  
      support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
  
      div.innerHTML = "<textarea>x</textarea>";
      support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  
      div.innerHTML = "<option></option>";
      support.option = !!div.lastChild;
    })();
  
    // CSS module
    var camelCase = function(string) {
      return string.replace(/[-]([a-z])/g, function(_, letter) {
        return letter.toUpperCase();
      });
    };
  
    jQuery.fn.extend({
      css: function(name, value) {
        return access(this, function(elem, name, value) {
          var styles, len,
            map = {},
            i = 0;
  
          if (Array.isArray(name)) {
            styles = getStyles(elem);
            len = name.length;
  
            for (; i < len; i++) {
              map[name[i]] = jQuery.css(elem, name[i], false, styles);
            }
  
            return map;
          }
  
          return value !== undefined ?
            jQuery.style(elem, name, value) :
            jQuery.css(elem, name);
        }, name, value, arguments.length > 1);
      }
    });
  
    // AJAX module
    jQuery.extend({
      ajax: function(url, options) {
        var key,
          type,
          finalDataType,
          responseHeadersString,
          responseHeaders,
          transport,
          completed,
          done = jQuery.Deferred();
  
        // If url is an object, simulate pre-1.5 signature
        if (typeof url === "object") {
          options = url;
          url = undefined;
        }
  
        // Force options to be an object
        options = options || {};
  
        var s = jQuery.ajaxSetup({}, options);
  
        var xhr = s.xhr();
  
        xhr.open(s.type, s.url, s.async, s.username, s.password);
  
        if (s.mimeType && xhr.overrideMimeType) {
          xhr.overrideMimeType(s.mimeType);
        }
  
        // X-Requested-With header
        if (!s.crossDomain && !s.headers["X-Requested-With"]) {
          s.headers["X-Requested-With"] = "XMLHttpRequest";
        }
  
        // Set headers
        for (key in s.headers) {
          xhr.setRequestHeader(key, s.headers[key]);
        }
  
        // Callback
        var callback = function() {
          if (xhr.readyState === 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300 || status === 304) {
              done.resolve(xhr.responseText);
            } else {
              done.reject(xhr);
            }
          }
        };
  
        xhr.onreadystatechange = callback;
  
        xhr.send(s.data);
  
        return done.promise();
      }
    });
  
    // Event module
    jQuery.event = {
      global: {},
      add: function(elem, types, handler, data, selector) {
        var eventHandle, events, t, handleObj,
          elemData = jQuery._data(elem);
  
        if (!elemData) {
          return;
        }
  
        // Make sure that the handler has a unique ID
        if (!handler.guid) {
          handler.guid = jQuery.guid++;
        }
  
        // Init the element's event structure
        events = elemData.events = elemData.events || {};
  
        // If no eventHandle, create one
        eventHandle = elemData.handle = elemData.handle || function(e) {
          return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
            jQuery.event.dispatch.apply(eventHandle.elem, arguments) :
            undefined;
        };
  
        // Add elem as a property of the handle function
        eventHandle.elem = elem;
  
        // Handle multiple events separated by a space
        types = types.split(" ");
        t = types.length;
        while (t--) {
          handleObj = {
            handler: handler,
            data: data,
            selector: selector
          };
  
          events[types[t]] = events[types[t]] || [];
          events[types[t]].push(handleObj);
        }
      },
      remove: function(elem, types, handler, selector, mappedTypes) {
        var j, origCount, tmp,
          events, t, handleObj,
          elemData = jQuery._data(elem);
  
        if (!elemData || !(events = elemData.events)) {
          return;
        }
  
        // Handle multiple events separated by a space
        types = types.split(" ");
        t = types.length;
        while (t--) {
          tmp = events[types[t]] || [];
          j = tmp.length;
          while (j--) {
            handleObj = tmp[j];
            if ((!handler || handler.guid === handleObj.handler.guid) &&
              (!selector || selector === handleObj.selector)) {
              tmp.splice(j, 1);
            }
          }
        }
      }
    };
  
    jQuery.fn.extend({
      on: function(types, selector, data, fn) {
        return on(this, types, selector, data, fn);
      },
      off: function(types, selector, fn) {
        return on(this, types, selector, null, fn, true);
      }
    });
  
    function on(elem, types, selector, data, fn, off) {
      var origFn, type;
  
      // Types can be a map of types/handlers
      if (typeof types === "object") {
        // ( types-Object, selector, data )
        if (typeof selector !== "string") {
          // ( types-Object, data )
          data = data || selector;
          selector = undefined;
        }
        for (type in types) {
          on(elem, type, selector, data, types[type], off);
        }
        return elem;
      }
  
      if (data == null && fn == null) {
        // ( types, fn )
        fn = selector;
        data = selector = undefined;
      } else if (fn == null) {
        if (typeof selector === "string") {
          // ( types, selector, fn )
          fn = data;
          data = undefined;
        } else {
          // ( types, data, fn )
          fn = data;
          data = selector;
          selector = undefined;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return elem;
      }
  
      return elem.each(function() {
        if (off) {
          jQuery.event.remove(this, types, fn, selector);
        } else {
          jQuery.event.add(this, types, fn, data, selector);
        }
      });
    }
  
    function returnFalse() {
      return false;
    }
  
    // DOM Ready
    jQuery.fn.ready = function(fn) {
      jQuery.ready.promise().done(fn);
      return this;
    };
  
    jQuery.extend({
      isReady: false,
      readyWait: 1,
      ready: function(wait) {
        if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
          return;
        }
        jQuery.isReady = true;
        if (wait !== true && --jQuery.readyWait > 0) {
          return;
        }
        jQuery.readyList.resolveWith(document, [jQuery]);
      }
    });
  
    jQuery.ready.promise = function(obj) {
      if (!jQuery.readyList) {
        jQuery.readyList = jQuery.Deferred();
        if (document.readyState === "complete") {
          window.setTimeout(jQuery.ready);
        } else {
          document.addEventListener("DOMContentLoaded", completed);
          window.addEventListener("load", completed);
        }
      }
      return jQuery.readyList.promise(obj);
    };
  
    function completed() {
      document.removeEventListener("DOMContentLoaded", completed);
      window.removeEventListener("load", completed);
      jQuery.ready();
    }
  
    // Basic selector function
    var rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
  
    jQuery.find = function(selector, context) {
      var match, elem;
      context = context || document;
  
      // Quick matching for ID, tag, or class
      if ((match = rquickExpr.exec(selector))) {
        if (match[1]) {
          return [document.getElementById(match[1])];
        } else if (match[2]) {
          return context.getElementsByTagName(match[2]);
        } else if (match[3]) {
          return context.getElementsByClassName(match[3]);
        }
      }
  
      return context.querySelectorAll(selector);
    };
  
    var init = jQuery.fn.init = function(selector, context) {
      var match, elem;
  
      // HANDLE: $(""), $(null), $(undefined), $(false)
      if (!selector) {
        return this;
      }
  
      // Handle HTML strings
      if (typeof selector === "string") {
        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
          // Assume that strings that start and end with <> are HTML
          match = [null, selector, null];
        } else {
          match = rquickExpr.exec(selector);
        }
  
        // Match html or make sure no context is specified for #id
        if (match && (match[1] || !context)) {
          // HANDLE: $(html) -> $(array)
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context;
            jQuery.merge(this, jQuery.parseHTML(
              match[1],
              context && context.nodeType ? context.ownerDocument || context : document,
              true
            ));
            return this;
          } else {
            elem = document.getElementById(match[1]);
            if (elem) {
              this[0] = elem;
              this.length = 1;
            }
            return this;
          }
        } else {
          return jQuery.find(selector, context);
        }
      } else if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this;
      } else if (isFunction(selector)) {
        return jQuery.ready !== undefined ?
          jQuery.ready(selector) :
          selector(jQuery);
      }
  
      return jQuery.makeArray(selector, this);
    };
  
    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;
  
    // Simple DOM manipulation
    jQuery.fn.extend({
      html: function(value) {
        return access(this, function(value) {
          var elem = this[0] || {},
            i = 0,
            l = this.length;
  
          if (value === undefined && elem.nodeType === 1) {
            return elem.innerHTML;
          }
  
          // See if we can take a shortcut and just use innerHTML
          if (typeof value === "string" && !/<script|<style|<link/i.test(value)) {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                elem.innerHTML = value;
              }
            }
          } else {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                // Remove element nodes and prevent memory leaks
                jQuery(elem).empty();
                
                // Add the new content
                if (typeof value === "string") {
                  elem.textContent = value;
                } else {
                  append.call(jQuery(elem), value);
                }
              }
            }
          }
  
          return this;
        }, null, value, arguments.length);
      },
      text: function(value) {
        return access(this, function(value) {
          return value === undefined ?
            jQuery.text(this) :
            this.empty().each(function() {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                this.textContent = value;
              }
            });
        }, null, value, arguments.length);
      },
      append: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.appendChild(elem);
          }
        });
      },
      prepend: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      empty: function() {
        var elem,
          i = 0;
  
        for (; (elem = this[i]) != null; i++) {
          if (elem.nodeType === 1) {
            // Prevent memory leaks
            jQuery.cleanData(elem.getElementsByTagName("*"));
            
            // Remove any remaining nodes
            elem.textContent = "";
          }
        }
  
        return this;
      },
      remove: function(selector) {
        var elem,
          i = 0;
  
        for (; (elem = this[i]) != null; i++) {
          if (!selector || jQuery.filter(selector, [elem]).length > 0) {
            if (elem.parentNode) {
              elem.parentNode.removeChild(elem);
            }
          }
        }
  
        return this;
      }
    });
  
    function manipulationTarget(elem, content) {
      return elem.nodeType === 9 ?
        elem.documentElement :
        elem;
    }
  
    function append() {
      var i = 0,
        l = arguments.length,
        elem, nodes;
  
      for (; i < l; i++) {
        elem = arguments[i];
        nodes = jQuery.makeArray(elem);
        
        for (var j = 0; j < nodes.length; j++) {
          this[0].appendChild(nodes[j]);
        }
      }
    }
  
    function domManip(collection, args, callback) {
      // Flatten any nested arrays
      args = flat(args);
  
      var fragment, first, scripts, hasScripts, node, doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0];
  
      // We can't cloneNode fragments that contain checked, in WebKit
      if (l > 1 && typeof value === "string" &&
        !support.checkClone && /<|&#?\w+;/.test(value)) {
        return collection.each(function(index) {
          var self = collection.eq(index);
          args[0] = value.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "<$1></$2>");
          callback.apply(self, args);
        });
      }
  
      if (l) {
        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, false);
        first = fragment.firstChild;
  
        if (fragment.childNodes.length === 1) {
          fragment = first;
        }
  
        // Require either new content or an interest in ignored elements to invoke the callback
        if (first || hasScripts) {
          scripts = jQuery.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length;
  
          // Use the original fragment for the last item
          // instead of the first because it can end up
          // being emptied incorrectly in certain situations
          for (; i < l; i++) {
            node = fragment;
  
            if (i !== iNoClone) {
              node = jQuery.clone(node, true, true);
  
              // Keep references to cloned scripts for later restoration
              if (hasScripts) {
                // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }
  
            callback.call(collection[i], node, i);
          }
  
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
  
            // Reenable scripts
            jQuery.map(scripts, restoreScript);
          }
        }
      }
  
      return collection;
    }
  
    function buildFragment(elems, context, scripts, selection, ignored) {
      var elem, tmp, tag, wrap, attached, j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;
  
      for (; i < l; i++) {
        elem = elems[i];
  
        if (elem || elem === 0) {
          // Add nodes directly
          if (toType(elem) === "object") {
            // Support: Android <=4.0 only, PhantomJS 1 only
            // push.apply(_, arraylike) throws on ancient WebKit
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!/<|&#?\w+;/.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag = (/<([a-z][^\/\0>\x20\t\r\n\f]*)/i.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = jQuery.htmlPrefilter(elem);
            
            tmp.innerHTML = wrap[1] + wrap[0] + wrap[2];
            
            // Descend through wrappers to the right content
            j = wrap[0];
            while (j--) {
              tmp = tmp.lastChild;
            }
            
            // Support: Android <=4.0 only, PhantomJS 1 only
            // push.apply(_, arraylike) throws on ancient WebKit
            jQuery.merge(nodes, tmp.childNodes);
            
            // Remember the top-level container
            tmp = fragment.firstChild;
            
            // Ensure the created nodes are orphaned
            tmp.textContent = "";
          }
        }
      }
  
      // Remove wrapper from fragment
      fragment.textContent = "";
  
      i = 0;
      while ((elem = nodes[i++])) {
        // Skip elements already in the context collection
        if (selection && jQuery.inArray(elem, selection) > -1) {
          if (ignored) {
            ignored.push(elem);
          }
          continue;
        }
  
        attached = jQuery.contains(elem.ownerDocument, elem);
  
        // Append to fragment
        tmp = getAll(fragment.appendChild(elem), "script");
  
        // Preserve script evaluation history
        if (attached) {
          setGlobalEval(tmp);
        }
  
        // Capture executables
        if (scripts) {
          j = 0;
          while ((elem = tmp[j++])) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }
  
      return fragment;
    }
  
    jQuery.htmlPrefilter = function(html) {
      return [0, html, ""];
    };
  
    function disableScript(elem) {
      elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
      return elem;
    }
  
    function restoreScript(elem) {
      if ((elem.type || "").slice(0, 5) === "true/") {
        elem.type = elem.type.slice(5);
      } else {
        elem.removeAttribute("type");
      }
      return elem;
    }
  
    function setGlobalEval(elems) {
      var i = 0,
        l = elems.length;
  
      for (; i < l; i++) {
        jQuery._data(elems[i], "globalEval", true);
      }
    }
  
    function getAll(context, tag) {
      var ret = typeof context.getElementsByTagName !== "undefined" ?
        context.getElementsByTagName(tag || "*") :
        typeof context.querySelectorAll !== "undefined" ?
        context.querySelectorAll(tag || "*") :
        [];
  
      return tag === undefined || tag && jQuery.nodeName(context, tag) ?
        jQuery.merge([context], ret) :
        ret;
    }
  
    // Helper functions for DOM manipulation
    function access(elems, fn, key, value, chainable) {
      var i = 0,
        len = elems.length,
        bulk = key == null;
  
    
    // Effects Module
jQuery.fn.extend({
    show: function(speed, easing, callback) {
      return animate(this, true, speed, easing, callback);
    },
    hide: function(speed, easing, callback) {
      return animate(this, false, speed, easing, callback);
    },
    toggle: function(speed, easing, callback) {
      return this.each(function() {
        var state = jQuery(this).css('display') === 'none' ? true : false;
        animate(jQuery(this), state, speed, easing, callback);
      });
    },
    fadeIn: function(speed, easing, callback) {
      return this.animate({opacity: 'show'}, speed, easing, callback);
    },
    fadeOut: function(speed, easing, callback) {
      return this.animate({opacity: 'hide'}, speed, easing, callback);
    },
    animate: function(properties, speed, easing, callback) {
      return animateFn(this, properties, speed, easing, callback);
    }
  });
  
  function animate(elements, show, speed, easing, callback) {
    var opts = {
      height: show ? 'show' : 'hide',
      width: show ? 'show' : 'hide',
      opacity: show ? 'show' : 'hide'
    };
    return animateFn(elements, opts, speed, easing, callback);
  }
  
  function animateFn(elements, properties, speed, easing, callback) {
    var opt = jQuery.speed(speed, easing, callback);
    opt.complete = opt.old || opt.complete;
    opt.easing = easing || 'swing';
    
    return elements.each(function() {
      var elem = jQuery(this);
      for(var prop in properties) {
        var start = parseFloat(jQuery.css(elem[0], prop)),
            end = typeof properties[prop] === 'string' ? 
              properties[prop] === 'show' ? elem.css(prop, '').css(prop) :
              properties[prop] === 'hide' ? 0 : parseFloat(properties[prop]) :
              parseFloat(properties[prop]);
        
        jQuery({value: start}).animate({value: end}, {
          duration: opt.duration,
          easing: opt.easing,
          step: function(val) {
            elem.css(prop, val + (typeof end === 'number' && prop !== 'opacity' ? 'px' : ''));
          },
          complete: opt.complete
        });
      }
    });
  }
  
  // Enhanced AJAX
  jQuery.ajaxSetup({
    timeout: 30000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  });
  
  jQuery.extend({
    post: function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax({
        url: url,
        type: 'POST',
        dataType: type,
        data: data,
        success: callback
      });
    },
    get: function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax({
        url: url,
        type: 'GET',
        dataType: type,
        data: data,
        success: callback
      });
    }
  });
  
  // Enhanced Event Delegation
  jQuery.event.addDelegate = function(selector, type, handler) {
    return this.on(type, selector, handler);
  };
  
  jQuery.fn.extend({
    delegate: function(selector, eventType, handler) {
      return this.on(eventType, selector, handler);
    },
    undelegate: function(selector, eventType, handler) {
      return arguments.length === 0 ? 
        this.off() : 
        this.off(eventType, selector, handler);
    }
  });
  
  // Data Module
  jQuery.fn.extend({
    data: function(key, value) {
      if (value === undefined) {
        return this[0] ? jQuery.data(this[0], key) : undefined;
      }
      return this.each(function() {
        jQuery.data(this, key, value);
      });
    },
    removeData: function(key) {
      return this.each(function() {
        jQuery.removeData(this, key);
      });
    }
  });
  
  // Utility Functions
  jQuery.extend({
    parseJSON: JSON.parse,
    parseXML: function(data) {
      var xmlDoc;
      try {
        xmlDoc = (new DOMParser()).parseFromString(data, "text/xml");
      } catch(e) {
        xmlDoc = undefined;
      }
      if (!xmlDoc || xmlDoc.getElementsByTagName("parsererror").length) {
        jQuery.error("Invalid XML: " + data);
      }
      return xmlDoc;
    },
    contains: function(a, b) {
      var adown = a.nodeType === 9 ? a.documentElement : a,
          bup = b && b.parentNode;
      return a === bup || !!(bup && bup.nodeType === 1 && adown.contains(bup));
    }
  });
  
  // Initialize jQuery
  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }
  
  return jQuery;
  }));