!function(e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).bugsnag = e();
  }
}(function() {
  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function n() {
    return Q((Math.random() * ue << 0).toString(se), ae);
  }
  function r() {
    return oe = oe < ue ? oe : 0, ++oe - 1;
  }
  function i() {
    return "c" + new Date().getTime().toString(se) + Q(r().toString(se), ae) + ie() + (n() + n());
  }
  function o(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function a(e) {
    switch (Object.prototype.toString.call(e)) {
     case "[object Error]":
     case "[object Exception]":
     case "[object DOMException]":
      return !0;

     default:
      return e instanceof Error;
    }
  }
  function s(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function u(e) {
    var t = [ e.tagName ];
    if (e.id && t.push("#" + e.id), e.className && e.className.length && t.push("." + e.className.split(" ").join(".")), 
    !document.querySelectorAll || !Array.prototype.indexOf) return t.join("");
    try {
      if (1 === document.querySelectorAll(t.join("")).length) return t.join("");
    } catch (r) {
      return t.join("");
    }
    if (e.parentNode.childNodes.length > 1) {
      var n = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
      t.push(":nth-child(" + n + ")");
    }
    return 1 === document.querySelectorAll(t.join("")).length ? t.join("") : e.parentNode ? u(e.parentNode) + " > " + t.join("") : t.join("");
  }
  function c(e, t) {
    var n = "(...)";
    return e && e.length <= t ? e : e.slice(0, t - n.length) + n;
  }
  function l() {
    if (!ct(ft(), this[st])) {
      var e = {
        status: this.status,
        request: this[ut] + " " + this[st]
      };
      this.status >= 400 ? lt.leaveBreadcrumb("XMLHttpRequest failed", e, ot) : lt.leaveBreadcrumb("XMLHttpRequest succeeded", e, ot);
    }
  }
  function f() {
    ct(ft(), this[st]) || lt.leaveBreadcrumb("XMLHttpRequest error", {
      request: this[ut] + " " + this[st]
    }, ot);
  }
  function d(e) {
    return "[Throws: " + (e ? e.message : "?") + "]";
  }
  function p(e, t) {
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
    return !1;
  }
  function h(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  }
  function g(e, t) {
    try {
      return e[t];
    } catch (n) {
      return d(n);
    }
  }
  function m(e) {
    function t(e, i) {
      function o() {
        return i > Bt && r > _t;
      }
      if (r++, i === undefined && (i = 0), i > Rt) return Mt;
      if (o()) return Mt;
      if (null === e || "object" != typeof e) return e;
      if (p(n, e)) return "[Circular]";
      if (n.push(e), "function" == typeof e.toJSON) try {
        r--;
        var a = t(e.toJSON(), i);
        return n.pop(), a;
      } catch (m) {
        return d(m);
      }
      if (h(e)) {
        for (var s = [], u = 0, c = e.length; u < c; u++) {
          if (o()) {
            s.push(Mt);
            break;
          }
          s.push(t(e[u], i + 1));
        }
        return n.pop(), s;
      }
      var l = {};
      try {
        for (var f in e) if (Object.prototype.hasOwnProperty.call(e, f)) {
          if (o()) {
            l[f] = Mt;
            break;
          }
          l[f] = t(g(e, f), i + 1);
        }
      } catch (y) {}
      return n.pop(), l;
    }
    var n = [], r = 0;
    return t(e);
  }
  var y, v = function(e, t, n) {
    for (var r = n, i = 0, o = e.length; i < o; i++) r = t(r, e[i], i, e);
    return r;
  }, b = function(e, t) {
    return v(e, function(e, n, r, i) {
      return t(n, r, i) ? e.concat(n) : e;
    }, []);
  }, w = function(e, t) {
    return v(e, function(e, n, r, i) {
      return e.concat(t(n, r, i));
    }, []);
  }, x = function(e, t) {
    return v(e, function(e, n) {
      return !0 === e || n === t;
    }, !1);
  }, S = !{
    toString: null
  }.propertyIsEnumerable("toString"), T = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], C = function(e) {
    return e < 10 ? "0" + e : e;
  }, E = {
    map: w,
    reduce: v,
    filter: b,
    includes: x,
    keys: function(e) {
      var t = [], n = void 0;
      for (n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
      if (!S) return t;
      for (var r = 0, i = T.length; r < i; r++) Object.prototype.hasOwnProperty.call(e, T[r]) && t.push(T[r]);
      return t;
    },
    isArray: function(e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    },
    isoDate: function() {
      var e = new Date();
      return e.getUTCFullYear() + "-" + C(e.getUTCMonth() + 1) + "-" + C(e.getUTCDate()) + "T" + C(e.getUTCHours()) + ":" + C(e.getUTCMinutes()) + ":" + C(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
    }
  }, N = E.isoDate, k = function() {
    function t() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anonymous]", r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "manual", o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : N();
      e(this, t), this.type = i, this.name = n, this.metaData = r, this.timestamp = o;
    }
    return t.prototype.toJSON = function() {
      return {
        type: this.type,
        name: this.name,
        timestamp: this.timestamp,
        metaData: this.metaData
      };
    }, t;
  }(), j = {}, D = E.includes;
  j.positiveIntIfDefined = function(e) {
    return D([ "undefined", "number" ], typeof e) && parseInt("" + e, 10) === e && e > 0;
  }, j.stringWithLength = function(e) {
    return "string" == typeof e && !!e.length;
  };
  var L = {}, A = E.filter, O = E.reduce, q = E.keys, H = E.isArray, R = E.includes, _ = j.positiveIntIfDefined, B = j.stringWithLength;
  L.schema = {
    apiKey: {
      defaultValue: function() {
        return null;
      },
      message: "is required",
      validate: B
    },
    appVersion: {
      defaultValue: function() {
        return null;
      },
      message: "should be a string",
      validate: function(e) {
        return null === e || B(e);
      }
    },
    autoNotify: {
      defaultValue: function() {
        return !0;
      },
      message: "should be true|false",
      validate: function(e) {
        return !0 === e || !1 === e;
      }
    },
    beforeSend: {
      defaultValue: function() {
        return [];
      },
      message: "should be a function or array of functions",
      validate: function(e) {
        return "function" == typeof e || H(e) && A(e, function(e) {
          return "function" == typeof e;
        }).length === e.length;
      }
    },
    endpoints: {
      defaultValue: function() {
        return {
          notify: "https://notify.bugsnag.com",
          sessions: "https://sessions.bugsnag.com"
        };
      },
      message: "should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false",
      validate: function(e, t) {
        return e && "object" == typeof e && B(e.notify) && (!1 === t.autoCaptureSessions || B(e.sessions)) && 0 === A(q(e), function(e) {
          return !R([ "notify", "sessions" ], e);
        }).length;
      }
    },
    autoCaptureSessions: {
      defaultValue: function(e, t) {
        return t.endpoints === undefined || !!t.endpoints && !!t.endpoints.sessions;
      },
      message: "should be true|false",
      validate: function(e) {
        return !0 === e || !1 === e;
      }
    },
    notifyReleaseStages: {
      defaultValue: function() {
        return null;
      },
      message: "should be an array of strings",
      validate: function(e) {
        return null === e || H(e) && A(e, function(e) {
          return "string" == typeof e;
        }).length === e.length;
      }
    },
    releaseStage: {
      defaultValue: function() {
        return "production";
      },
      message: "should be a string",
      validate: function(e) {
        return "string" == typeof e && e.length;
      }
    },
    maxBreadcrumbs: {
      defaultValue: function() {
        return 20;
      },
      message: "should be a number \u226440",
      validate: function(e) {
        return 0 === e || _(e) && (e === undefined || e <= 40);
      }
    },
    autoBreadcrumbs: {
      defaultValue: function() {
        return !0;
      },
      message: "should be true|false",
      validate: function(e) {
        return "boolean" == typeof e;
      }
    },
    user: {
      defaultValue: function() {
        return null;
      },
      message: "(object) user should be an object",
      validate: function(e) {
        return "object" == typeof e;
      }
    },
    metaData: {
      defaultValue: function() {
        return null;
      },
      message: "should be an object",
      validate: function(e) {
        return "object" == typeof e;
      }
    },
    logger: {
      defaultValue: function() {
        return undefined;
      },
      message: "should be null or an object with methods { debug, info, warn, error }",
      validate: function(e) {
        return !e || e && O([ "debug", "info", "warn", "error" ], function(t, n) {
          return t && "function" == typeof e[n];
        }, !0);
      }
    }
  }, L.mergeDefaults = function(e, t) {
    if (!e || !t) throw new Error("opts and schema objects are required");
    return O(q(t), function(n, r) {
      return n[r] = e[r] !== undefined ? e[r] : t[r].defaultValue(e[r], e), n;
    }, {});
  }, L.validate = function(e, t) {
    if (!e || !t) throw new Error("opts and schema objects are required");
    var n = O(q(t), function(n, r) {
      return t[r].validate(e[r], e) ? n : n.concat({
        key: r,
        message: t[r].message,
        value: e[r]
      });
    }, []);
    return {
      valid: !n.length,
      errors: n
    };
  };
  var M = function(e) {
    return e.app && "string" == typeof e.app.releaseStage ? e.app.releaseStage : e.config.releaseStage;
  }, P = function(e) {
    return !(!e || !e.stack && !e.stacktrace && !e["opera#sourceloc"] || "string" != typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) || e.stack === e.name + ": " + e.message);
  }, F = {};
  !function(e, t) {
    "use strict";
    "function" == typeof y && y.amd ? y("stackframe", [], t) : "object" == typeof F ? F = t() : e.StackFrame = t();
  }(this, function() {
    "use strict";
    function e(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function t(e) {
      return e.charAt(0).toUpperCase() + e.substring(1);
    }
    function n(e) {
      return function() {
        return this[e];
      };
    }
    function r(e) {
      if (e instanceof Object) for (var n = 0; n < u.length; n++) e.hasOwnProperty(u[n]) && e[u[n]] !== undefined && this["set" + t(u[n])](e[u[n]]);
    }
    var i = [ "isConstructor", "isEval", "isNative", "isToplevel" ], o = [ "columnNumber", "lineNumber" ], a = [ "fileName", "functionName", "source" ], s = [ "args" ], u = i.concat(o, a, s);
    r.prototype = {
      getArgs: function() {
        return this.args;
      },
      setArgs: function(e) {
        if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
        this.args = e;
      },
      getEvalOrigin: function() {
        return this.evalOrigin;
      },
      setEvalOrigin: function(e) {
        if (e instanceof r) this.evalOrigin = e; else {
          if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
          this.evalOrigin = new r(e);
        }
      },
      toString: function() {
        return (this.getFunctionName() || "{anonymous}") + ("(" + (this.getArgs() || []).join(",") + ")") + (this.getFileName() ? "@" + this.getFileName() : "") + (e(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "");
      }
    };
    for (var c = 0; c < i.length; c++) r.prototype["get" + t(i[c])] = n(i[c]), r.prototype["set" + t(i[c])] = function(e) {
      return function(t) {
        this[e] = Boolean(t);
      };
    }(i[c]);
    for (var l = 0; l < o.length; l++) r.prototype["get" + t(o[l])] = n(o[l]), r.prototype["set" + t(o[l])] = function(t) {
      return function(n) {
        if (!e(n)) throw new TypeError(t + " must be a Number");
        this[t] = Number(n);
      };
    }(o[l]);
    for (var f = 0; f < a.length; f++) r.prototype["get" + t(a[f])] = n(a[f]), r.prototype["set" + t(a[f])] = function(e) {
      return function(t) {
        this[e] = String(t);
      };
    }(a[f]);
    return r;
  });
  var I = {};
  !function(e, t) {
    "use strict";
    "function" == typeof y && y.amd ? y("error-stack-parser", [ "stackframe" ], t) : "object" == typeof I ? I = t(F) : e.ErrorStackParser = t(e.StackFrame);
  }(this, function(e) {
    "use strict";
    var t = /(^|@)\S+\:\d+/, n = /^\s*at .*(\S+\:\d+|\(native\))/m, r = /^(eval@)?(\[native code\])?$/;
    return {
      parse: function(e) {
        if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"]) return this.parseOpera(e);
        if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
        if (e.stack) return this.parseFFOrSafari(e);
        throw new Error("Cannot parse given Error object");
      },
      extractLocation: function(e) {
        if (-1 === e.indexOf(":")) return [ e ];
        var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
        return [ t[1], t[2] || undefined, t[3] || undefined ];
      },
      parseV8OrIE: function(t) {
        return t.stack.split("\n").filter(function(e) {
          return !!e.match(n);
        }, this).map(function(t) {
          t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
          var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1), r = this.extractLocation(n.pop()), i = n.join(" ") || undefined, o = [ "eval", "<anonymous>" ].indexOf(r[0]) > -1 ? undefined : r[0];
          return new e({
            functionName: i,
            fileName: o,
            lineNumber: r[1],
            columnNumber: r[2],
            source: t
          });
        }, this);
      },
      parseFFOrSafari: function(t) {
        return t.stack.split("\n").filter(function(e) {
          return !e.match(r);
        }, this).map(function(t) {
          if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), 
          -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
            functionName: t
          });
          var n = /((.*".+"[^@]*)?[^@]*)(?:@)/, r = t.match(n), i = r && r[1] ? r[1] : undefined, o = this.extractLocation(t.replace(n, ""));
          return new e({
            functionName: i,
            fileName: o[0],
            lineNumber: o[1],
            columnNumber: o[2],
            source: t
          });
        }, this);
      },
      parseOpera: function(e) {
        return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
      },
      parseOpera9: function(t) {
        for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), i = [], o = 2, a = r.length; o < a; o += 2) {
          var s = n.exec(r[o]);
          s && i.push(new e({
            fileName: s[2],
            lineNumber: s[1],
            source: r[o]
          }));
        }
        return i;
      },
      parseOpera10: function(t) {
        for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), i = [], o = 0, a = r.length; o < a; o += 2) {
          var s = n.exec(r[o]);
          s && i.push(new e({
            functionName: s[3] || undefined,
            fileName: s[2],
            lineNumber: s[1],
            source: r[o]
          }));
        }
        return i;
      },
      parseOpera11: function(n) {
        return n.stack.split("\n").filter(function(e) {
          return !!e.match(t) && !e.match(/^Error created at/);
        }, this).map(function(t) {
          var n, r = t.split("@"), i = this.extractLocation(r.pop()), o = r.shift() || "", a = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
          o.match(/\(([^\)]*)\)/) && (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
          var s = n === undefined || "[arguments not available]" === n ? undefined : n.split(",");
          return new e({
            functionName: a,
            args: s,
            fileName: i[0],
            lineNumber: i[1],
            columnNumber: i[2],
            source: t
          });
        }, this);
      }
    };
  });
  var $ = {};
  !function(e, t) {
    "use strict";
    "function" == typeof y && y.amd ? y("stack-generator", [ "stackframe" ], t) : "object" == typeof $ ? $ = t(F) : e.StackGenerator = t(e.StackFrame);
  }(this, function(e) {
    return {
      backtrace: function(t) {
        var n = [], r = 10;
        "object" == typeof t && "number" == typeof t.maxStackSize && (r = t.maxStackSize);
        for (var i = arguments.callee; i && n.length < r && i.arguments; ) {
          for (var o = new Array(i.arguments.length), a = 0; a < o.length; ++a) o[a] = i.arguments[a];
          /function(?:\s+([\w$]+))+\s*\(/.test(i.toString()) ? n.push(new e({
            functionName: RegExp.$1 || undefined,
            args: o
          })) : n.push(new e({
            args: o
          }));
          try {
            i = i.caller;
          } catch (s) {
            break;
          }
        }
        return n;
      }
    };
  });
  var W = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, z = E.reduce, V = E.filter, X = function() {
    function e(n, r) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [], o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : K();
      t(this, e), this.__isBugsnagReport = !0, this._ignored = !1, this._handledState = o, 
      this.app = undefined, this.apiKey = undefined, this.breadcrumbs = [], this.context = undefined, 
      this.device = undefined, this.errorClass = G(n, "[no error class]"), this.errorMessage = G(r, "[no error message]"), 
      this.groupingHash = undefined, this.metaData = {}, this.request = undefined, this.severity = this._handledState.severity, 
      this.stacktrace = z(i, function(e, t) {
        var n = U(t);
        try {
          return "{}" === JSON.stringify(n) ? e : e.concat(n);
        } catch (r) {
          return e;
        }
      }, []), this.user = undefined, this.session = undefined;
    }
    return e.prototype.ignore = function() {
      this._ignored = !0;
    }, e.prototype.isIgnored = function() {
      return this._ignored;
    }, e.prototype.updateMetaData = function(e) {
      var t;
      if (!e) return this;
      var n = void 0;
      return null === (arguments.length <= 1 ? undefined : arguments[1]) ? this.removeMetaData(e) : null === (arguments.length <= 2 ? undefined : arguments[2]) ? this.removeMetaData(e, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]) : ("object" == typeof (arguments.length <= 1 ? undefined : arguments[1]) && (n = arguments.length <= 1 ? undefined : arguments[1]), 
      "string" == typeof (arguments.length <= 1 ? undefined : arguments[1]) && ((t = {})[arguments.length <= 1 ? undefined : arguments[1]] = arguments.length <= 2 ? undefined : arguments[2], 
      n = t), n ? (this.metaData[e] || (this.metaData[e] = {}), this.metaData[e] = W({}, this.metaData[e], n), 
      this) : this);
    }, e.prototype.removeMetaData = function(e, t) {
      return "string" != typeof e ? this : t ? this.metaData[e] ? (delete this.metaData[e][t], 
      this) : this : (delete this.metaData[e], this);
    }, e.prototype.toJSON = function() {
      return {
        payloadVersion: "4",
        exceptions: [ {
          errorClass: this.errorClass,
          message: this.errorMessage,
          stacktrace: this.stacktrace,
          type: "browserjs"
        } ],
        severity: this.severity,
        unhandled: this._handledState.unhandled,
        severityReason: this._handledState.severityReason,
        app: this.app,
        device: this.device,
        breadcrumbs: this.breadcrumbs,
        context: this.context,
        user: this.user,
        metaData: this.metaData,
        groupingHash: this.groupingHash,
        request: this.request,
        session: this.session
      };
    }, e;
  }(), U = function(e) {
    var t = {
      file: e.fileName,
      method: J(e.functionName),
      lineNumber: e.lineNumber,
      columnNumber: e.columnNumber,
      code: undefined,
      inProject: undefined
    };
    return t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"), t;
  }, J = function(e) {
    return /^global code$/i.test(e) ? "global code" : e;
  }, K = function() {
    return {
      unhandled: !1,
      severity: "warning",
      severityReason: {
        type: "handledException"
      }
    };
  }, G = function(e, t) {
    return "string" == typeof e && e ? e : t;
  };
  X.getStacktrace = function(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    return P(e) ? I.parse(e).slice(t) : V($.backtrace(), function(e) {
      return -1 === (e.functionName || "").indexOf("StackGenerator$$");
    }).slice(1 + n);
  }, X.ensureReport = function(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    if (e.__isBugsnagReport) return e;
    try {
      var r = X.getStacktrace(e, t, 1 + n);
      return new X(e.name, e.message, r);
    } catch (i) {
      return new X(e.name, e.message, []);
    }
  };
  var Y = X, Q = function(e, t) {
    var n = "000000000" + e;
    return n.substr(n.length - t);
  }, Z = "object" == typeof window ? window : self, ee = 0;
  for (var te in Z) Object.hasOwnProperty.call(Z, te) && ee++;
  var ne = navigator.mimeTypes ? navigator.mimeTypes.length : 0, re = Q((ne + navigator.userAgent.length).toString(36) + ee.toString(36), 4), ie = function() {
    return re;
  }, oe = 0, ae = 4, se = 36, ue = Math.pow(se, ae);
  i.fingerprint = ie;
  var ce = i, le = E.isoDate, fe = function() {
    function e() {
      o(this, e), this.id = ce(), this.startedAt = le(), this._handled = 0, this._unhandled = 0;
    }
    return e.prototype.toJSON = function() {
      return {
        id: this.id,
        startedAt: this.startedAt,
        events: {
          handled: this._handled,
          unhandled: this._unhandled
        }
      };
    }, e.prototype.trackError = function(e) {
      this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
    }, e;
  }(), de = a, pe = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, he = E.map, ge = E.reduce, me = E.includes, ye = E.isArray, ve = "Usage error.", be = "Bugsnag usage error.", we = function() {}, xe = function() {
    function e(t) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : L.schema, r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (s(this, e), !(t && t.name && t.version && t.url)) throw new Error("`notifier` argument is required");
      this.notifier = t, this.configSchema = n, this._configured = !1, this._transport = {
        sendSession: we,
        sendReport: we
      }, this._logger = {
        debug: we,
        info: we,
        warn: we,
        error: we
      }, this.plugins = [], this.session = r, this.beforeSession = [], this.breadcrumbs = [], 
      this.app = {}, this.context = undefined, this.device = undefined, this.metaData = undefined, 
      this.request = undefined, this.user = {}, this.BugsnagReport = Y, this.BugsnagBreadcrumb = k, 
      this.BugsnagSession = fe;
    }
    return e.prototype.configure = function() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.config = L.mergeDefaults(pe({}, this.config, e), this.configSchema);
      var t = L.validate(this.config, this.configSchema);
      if (!0 == !t.valid) throw new Error(Ce(t.errors));
      return "function" == typeof this.config.beforeSend && (this.config.beforeSend = [ this.config.beforeSend ]), 
      null !== this.config.appVersion && (this.app.version = this.config.appVersion), 
      this.config.metaData && (this.metaData = this.config.metaData), this.config.user && (this.user = this.config.user), 
      this.config.logger && this.logger(this.config.logger), this._configured = !0, this._logger.debug("Loaded!"), 
      this;
    }, e.prototype.use = function(e) {
      return this.plugins.push(e), e.init(this);
    }, e.prototype.transport = function(e) {
      return this._transport = e, this;
    }, e.prototype.logger = function(e) {
      return this._logger = e, this;
    }, e.prototype.sessionDelegate = function(e) {
      return this._sessionDelegate = e, this;
    }, e.prototype.startSession = function() {
      return this._sessionDelegate ? this._sessionDelegate.startSession(this) : (this._logger.warn("No session implementation is installed"), 
      this);
    }, e.prototype.leaveBreadcrumb = function(e, t, n, r) {
      if (!this._configured) throw new Error("client not configured");
      if (e = e || undefined, n = "string" == typeof n ? n : undefined, r = "string" == typeof r ? r : undefined, 
      t = "object" == typeof t && null !== t ? t : undefined, "string" == typeof e || t) {
        var i = new k(e, t, n, r);
        return this.breadcrumbs.push(i), this.breadcrumbs.length > this.config.maxBreadcrumbs && (this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs)), 
        this;
      }
    }, e.prototype.notify = function(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this._configured) throw new Error("client not configured");
      var n = M(this), r = Se(e, t, this._logger), i = r.err, o = r.errorFramesToSkip, a = r._opts;
      if (a && (t = a), !i) {
        var s = Ee("nothing");
        this._logger.warn(ve + " " + s), i = new Error(be + " " + s);
      }
      "object" == typeof t && null !== t || (t = {});
      var u = Y.ensureReport(i, o, 1);
      if (u.app = pe({
        releaseStage: n
      }, u.app, this.app), u.context = u.context || t.context || this.context || undefined, 
      u.device = pe({}, u.device, this.device, t.device), u.request = pe({}, u.request, this.request, t.request), 
      u.user = pe({}, u.user, this.user, t.user), u.metaData = pe({}, u.metaData, this.metaData, t.metaData), 
      u.breadcrumbs = this.breadcrumbs.slice(0), this.session && (this.session.trackError(u), 
      u.session = this.session), t.severity !== undefined && (u.severity = t.severity, 
      u._handledState.severityReason = {
        type: "userSpecifiedSeverity"
      }), ye(this.config.notifyReleaseStages) && !me(this.config.notifyReleaseStages, n)) return this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration"), 
      !1;
      var c = u.severity, l = [].concat(t.beforeSend).concat(this.config.beforeSend);
      return ge(l, function(e, t) {
        return !0 === e || ("function" == typeof t && !1 === t(u) || !!u.isIgnored());
      }, !1) ? (this._logger.debug("Report not sent due to beforeSend callback"), !1) : (this.config.autoBreadcrumbs && this.leaveBreadcrumb(u.errorClass, {
        errorClass: u.errorClass,
        errorMessage: u.errorMessage,
        severity: u.severity
      }, "error"), c !== u.severity && (u._handledState.severityReason = {
        type: "userCallbackSetSeverity"
      }), this._transport.sendReport(this._logger, this.config, {
        apiKey: u.apiKey || this.config.apiKey,
        notifier: this.notifier,
        events: [ u ]
      }), !0);
    }, e;
  }(), Se = function(e, t, n) {
    var r = void 0, i = 0, o = void 0;
    switch (typeof e) {
     case "string":
      if ("string" == typeof t) {
        var a = Ee("string/string");
        n.warn(ve + " " + a), r = new Error(be + " " + a), o = {
          metaData: {
            notifier: {
              notifyArgs: [ e, t ]
            }
          }
        };
      } else r = new Error(String(e)), i += 2;
      break;

     case "number":
     case "boolean":
      r = new Error(String(e));
      break;

     case "function":
      var s = Ee("function");
      n.warn(ve + " " + s), r = new Error(be + " " + s);
      break;

     case "object":
      if (null !== e && (de(e) || e.__isBugsnagReport)) r = e; else if (null !== e && Te(e)) (r = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass, 
      i += 2; else {
        var u = Ee("unsupported object");
        n.warn(ve + " " + u), r = new Error(be + " " + u);
      }
    }
    return {
      err: r,
      errorFramesToSkip: i,
      _opts: o
    };
  }, Te = function(e) {
    return !("string" != typeof e.name && "string" != typeof e.errorClass || "string" != typeof e.message && "string" != typeof e.errorMessage);
  }, Ce = function(e) {
    return "Bugsnag configuration error\n" + he(e, function(e) {
      return '"' + e.key + '" ' + e.message + " \n    got " + Ne(e.value);
    }).join("\n\n");
  }, Ee = function(e) {
    return "notify() expected error/opts parameters, got " + e;
  }, Ne = function(e) {
    return "object" == typeof e ? JSON.stringify(e) : String(e);
  }, ke = xe, je = j.positiveIntIfDefined, De = {
    init: function(e) {
      var t = 0;
      e.config.beforeSend.push(function(n) {
        if (t >= e.config.maxEvents) return n.ignore();
        t++;
      }), e.refresh = function() {
        t = 0;
      };
    },
    configSchema: {
      maxEvents: {
        defaultValue: function() {
          return 10;
        },
        message: "should be a positive integer \u2264100",
        validate: function(e) {
          return je(e) && e < 100;
        }
      }
    }
  }, Le = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ae = L.schema, Oe = E.map, qe = {
    releaseStage: {
      defaultValue: function() {
        return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production";
      },
      message: "should be set",
      validate: j.stringWithLength
    },
    collectUserIp: {
      defaultValue: function() {
        return !0;
      },
      message: "should be true|false",
      validate: function(e) {
        return !0 === e || !1 === e;
      }
    },
    logger: Le({}, Ae.logger, {
      defaultValue: function() {
        return "undefined" != typeof console && "function" == typeof console.debug ? He() : undefined;
      }
    })
  }, He = function() {
    var e = {}, t = console.log;
    return Oe([ "debug", "info", "warn", "error" ], function(n) {
      var r = console[n];
      e[n] = "function" == typeof r ? r.bind(console, "[bugsnag]") : t.bind(console, "[bugsnag]");
    }), e;
  }, Re = {}, _e = E.map, Be = E.reduce, Me = E.filter;
  Re.init = function(e) {
    _e(Pe, function(t) {
      var n = console[t];
      console[t] = function() {
        for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        e.leaveBreadcrumb("Console output", Be(i, function(e, t, n) {
          var r = String(t);
          if ("[object Object]" === r) try {
            r = JSON.stringify(t);
          } catch (i) {}
          return e["[" + n + "]"] = r, e;
        }, {
          severity: 0 === t.indexOf("group") ? "log" : t
        }), "log"), n.apply(console, i);
      }, console[t]._restore = function() {
        console[t] = n;
      };
    });
  }, Re.configSchema = {
    consoleBreadcrumbsEnabled: {
      defaultValue: function() {
        return undefined;
      },
      validate: function(e) {
        return !0 === e || !1 === e || e === undefined;
      },
      message: "should be true|false"
    }
  };
  var Pe = Me([ "log", "debug", "info", "warn", "error" ], function(e) {
    return "undefined" != typeof console && "function" == typeof console[e];
  }), Fe = {
    init: function(e) {
      e.config.beforeSend.unshift(function(e) {
        e.context || (e.context = window.location.pathname);
      });
    }
  }, Ie = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, $e = E.isoDate, We = {
    init: function(e) {
      e.config.beforeSend.unshift(function(e) {
        e.device = Ie({
          time: $e(),
          locale: navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || navigator.language,
          userAgent: navigator.userAgent
        }, e.device);
      }), e.beforeSession.push(function(e) {
        e.device = {
          userAgent: navigator.userAgent
        };
      });
    }
  }, ze = {}, Ve = E.reduce, Xe = /^.*<script.*?>/, Ue = /<\/script>.*$/, Je = (ze = {
    init: function(e) {
      var t = "", n = !1, r = function() {
        return document.documentElement.outerHTML;
      }, i = window.location.href, o = function(e) {
        var o = e.stacktrace[0];
        if (!o || !o.file || !o.lineNumber) return o;
        if (o.file.replace(/#.*$/, "") !== i.replace(/#.*$/, "")) return o;
        n && t || (t = r());
        var a = [ "<!-- DOC START -->" ].concat(t.split("\n")), s = Je(a, o.lineNumber - 1), u = s.script, c = s.start, l = Ve(u, function(e, t, n) {
          return Math.abs(c + n + 1 - o.lineNumber) > 10 ? e : (e["" + (c + n + 1)] = t, e);
        }, {});
        o.code = l, e.updateMetaData("script", {
          content: u.join("\n")
        });
      };
      t = r(), document.onreadystatechange = function() {
        "interactive" === document.readyState && (t = r(), n = !0);
      }, e.config.beforeSend.unshift(o);
    }
  }).extractScriptContent = function(e, t) {
    for (var n = t; n < e.length && !Ue.test(e[n]); ) n++;
    for (var r = n; n > 0 && !Xe.test(e[n]); ) n--;
    var i = n, o = e.slice(i, r + 1);
    return o[0] = o[0].replace(Xe, ""), o[o.length - 1] = o[o.length - 1].replace(Ue, ""), 
    {
      script: o,
      start: i
    };
  }, Ke = {
    init: function(e) {
      "addEventListener" in window && window.addEventListener("click", function(t) {
        var n = void 0, r = void 0;
        try {
          n = Ge(t.target), r = u(t.target);
        } catch (i) {
          n = "[hidden]", r = "[hidden]", e._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/y94fq5zm");
        }
        e.leaveBreadcrumb("UI click", {
          targetText: n,
          targetSelector: r
        }, "user");
      }, !0);
    },
    configSchema: {
      interactionBreadcrumbsEnabled: {
        defaultValue: function() {
          return undefined;
        },
        validate: function(e) {
          return !0 === e || !1 === e || e === undefined;
        },
        message: "should be true|false"
      }
    }
  }, Ge = function(e) {
    var t = e.textContent || e.innerText || "";
    return t || "submit" !== e.type && "button" !== e.type || (t = e.value), c(t = t.replace(/^\s+|\s+$/g, ""), 140);
  }, Ye = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qe = {
    init: function(e) {
      e.config.collectUserIp || e.config.beforeSend.push(function(e) {
        e.user = Ye({
          id: "[NOT COLLECTED]"
        }, e.user), e.request = Ye({
          clientIp: "[NOT COLLECTED]"
        }, e.request);
      });
    }
  }, Ze = {
    init: function(e) {
      if ("addEventListener" in window) {
        var t = function(t) {
          return function() {
            return e.leaveBreadcrumb(t, {}, "navigation");
          };
        };
        window.addEventListener("pagehide", t("Page hidden"), !0), window.addEventListener("pageshow", t("Page shown"), !0), 
        window.addEventListener("load", t("Page loaded"), !0), window.document.addEventListener("DOMContentLoaded", t("DOMContentLoaded"), !0), 
        window.addEventListener("load", function() {
          return window.addEventListener("popstate", t("Navigated back"), !0);
        }), window.addEventListener("hashchange", function(t) {
          var n = t.oldURL ? {
            from: et(t.oldURL),
            to: et(t.newURL),
            state: rt()
          } : {
            to: et(window.location.href)
          };
          e.leaveBreadcrumb("Hash changed", n, "navigation");
        }, !0), window.history.replaceState && nt(e, window.history, "replaceState"), window.history.pushState && nt(e, window.history, "pushState"), 
        e.leaveBreadcrumb("Bugsnag loaded", {}, "navigation");
      }
    }
  };
  Ze.configSchema = {
    navigationBreadcrumbsEnabled: {
      defaultValue: function() {
        return undefined;
      },
      validate: function(e) {
        return !0 === e || !1 === e || e === undefined;
      },
      message: "should be true|false"
    }
  };
  var et = function(e) {
    var t = document.createElement("A");
    return t.href = e, "" + t.pathname + t.search + t.hash;
  }, tt = function(e, t, n) {
    var r = et(window.location.href);
    return {
      title: t,
      state: e,
      prevState: rt(),
      to: n || r,
      from: r
    };
  }, nt = function(e, t, n) {
    var r = t[n];
    t[n] = function(i, o, a) {
      e.leaveBreadcrumb("History " + n, tt(i, o, a), "navigation"), "function" == typeof e.refresh && e.refresh(), 
      e.session && e.startSession(), r.apply(t, [ i, o ].concat(a !== undefined ? a : []));
    }, t[n]._restore = function() {
      t[n] = r;
    };
  }, rt = function() {
    try {
      return window.history.state;
    } catch (e) {}
  }, it = {}, ot = "request", at = "BS~~S", st = "BS~~U", ut = "BS~~M", ct = E.includes, lt = void 0, ft = function() {
    return [ lt.config.endpoints.notify, lt.config.endpoints.sessions ];
  };
  it.init = function(e) {
    lt = e, dt(), pt();
  }, it.configSchema = {
    networkBreadcrumbsEnabled: {
      defaultValue: function() {
        return undefined;
      },
      validate: function(e) {
        return !0 === e || !1 === e || e === undefined;
      },
      message: "should be true|false"
    }
  };
  var dt = function() {
    if ("addEventListener" in window.XMLHttpRequest.prototype) {
      var e = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function(t, n) {
        this[st] = n, this[ut] = t, this[at] && (this.removeEventListener("load", l), this.removeEventListener("error", f)), 
        this.addEventListener("load", l), this.addEventListener("error", f), this[at] = !0, 
        e.apply(this, arguments);
      };
    }
  }, pt = function() {
    if ("fetch" in window) {
      var e = window.fetch;
      window.fetch = function() {
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        var i = n[0], o = n[1], a = "GET";
        return o && o.method && (a = o.method), new Promise(function(t, r) {
          e.apply(undefined, n).then(function(e) {
            ht(e, a, i), t(e);
          })["catch"](function(e) {
            gt(a, i), r(e);
          });
        });
      };
    }
  }, ht = function(e, t, n) {
    var r = {
      status: e.status,
      request: t + " " + n
    };
    e.status >= 400 ? lt.leaveBreadcrumb("fetch() failed", r, ot) : lt.leaveBreadcrumb("fetch() succeeded", r, ot);
  }, gt = function(e, t) {
    lt.leaveBreadcrumb("fetch() error", {
      request: e + " " + t
    }, ot);
  }, mt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yt = {
    init: function(e) {
      e.config.beforeSend.unshift(function(e) {
        e.request && e.request.url || (e.request = mt({}, e.request, {
          url: window.location.href
        }));
      });
    }
  }, vt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, bt = E.map, wt = E.isArray, xt = E.includes, St = {
    init: function(e) {
      return e.sessionDelegate(Tt);
    }
  }, Tt = {
    startSession: function(e) {
      var t = e;
      t.session = new e.BugsnagSession(), bt(t.beforeSession, function(e) {
        return e(t);
      });
      var n = M(t);
      return wt(t.config.notifyReleaseStages) && !xt(t.config.notifyReleaseStages, n) ? (t._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration"), 
      t) : t.config.endpoints.sessions ? (t._transport.sendSession(t._logger, t.config, {
        notifier: t.notifier,
        device: t.device,
        app: vt({
          releaseStage: n
        }, t.app),
        sessions: [ {
          id: t.session.id,
          startedAt: t.session.startedAt,
          user: t.user
        } ]
      }), t) : (t._logger.warn("Session not sent due to missing endpoints.sessions configuration"), 
      t);
    }
  }, Ct = {}, Et = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nt = E.map, kt = (Ct = {
    init: function(e) {
      e.config.beforeSend.push(function(e) {
        e.stacktrace = Nt(e.stacktrace, function(e) {
          return Et({}, e, {
            file: kt(e.file)
          });
        });
      });
    }
  })._strip = function(e) {
    return "string" == typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e;
  }, jt = {}, Dt = E.reduce;
  jt.init = function(e) {
    var t = function(t) {
      var n = t.reason, r = !1;
      t.detail && t.detail.reason && (n = t.detail.reason, r = !0);
      var i = {
        severity: "error",
        unhandled: !0,
        severityReason: {
          type: "unhandledPromiseRejection"
        }
      }, o = void 0;
      if (n && P(n)) o = new e.BugsnagReport(n.name, n.message, I.parse(n), i), r && (o.stacktrace = Dt(o.stacktrace, At(n), [])); else {
        var a = 'Rejection reason was not an Error. See "Promise" tab for more detail.';
        (o = new e.BugsnagReport(n && n.name ? n.name : "UnhandledRejection", n && n.message ? n.message : a, [], i)).updateMetaData("promise", "rejection reason", Lt(n));
      }
      e.notify(o);
    };
    "addEventListener" in window ? window.addEventListener("unhandledrejection", t) : window.onunhandledrejection = function(e, n) {
      t({
        detail: {
          reason: e,
          promise: n
        }
      });
    }, t;
  };
  var Lt = function(e) {
    return null === e || e === undefined ? "undefined (or null)" : de(e) ? ((t = {})[Object.prototype.toString.call(e)] = {
      name: e.name,
      message: e.message,
      code: e.code,
      stack: e.stack
    }, t) : e;
    var t;
  }, At = function(e) {
    return function(t, n) {
      return n.file === e.toString() ? t : (n.method && (n.method = n.method.replace(/^\s+/, "")), 
      t.concat(n));
    };
  }, Ot = {
    init: function(e) {
      var t = function(t, r, i, o, a) {
        if (0 === i && /Script error\.?/.test(t)) e._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/y94fq5zm"); else {
          var s = {
            severity: "error",
            unhandled: !0,
            severityReason: {
              type: "unhandledException"
            }
          }, u = void 0;
          if (a) a.name && a.message ? u = new e.BugsnagReport(a.name, a.message, qt(e.BugsnagReport.getStacktrace(a), r, i, o), s) : (u = new e.BugsnagReport("window.onerror", String(a), qt(e.BugsnagReport.getStacktrace(a, 1), r, i, o), s)).updateMetaData("window onerror", {
            error: a
          }); else if ("object" != typeof t || null === t || r || i || o || a) (u = new e.BugsnagReport("window.onerror", String(t), qt(e.BugsnagReport.getStacktrace(a, 1), r, i, o), s)).updateMetaData("window onerror", {
            event: t
          }); else {
            var c = t.type ? "Event: " + t.type : "window.onerror", l = t.message || t.detail || "";
            (u = new e.BugsnagReport(c, l, e.BugsnagReport.getStacktrace(new Error(), 1).slice(1), s)).updateMetaData("window onerror", {
              event: t
            });
          }
          e.notify(u), "function" == typeof n && n(t, r, i, o, a);
        }
      }, n = window.onerror;
      window.onerror = t;
    }
  }, qt = function(e, t, n, r) {
    var i = e[0];
    return i ? (i.fileName || i.setFileName(t), i.lineNumber || i.setLineNumber(n), 
    i.columnNumber || (r !== undefined ? i.setColumnNumber(r) : window.event && window.event.errorCharacter && i.setColumnNumber(window.event && window.event.errorCharacter)), 
    e) : e;
  }, Ht = function(e, t, n) {
    return JSON.stringify(m(e), t, n);
  }, Rt = 20, _t = 25e3, Bt = 8, Mt = "...", Pt = function(e) {
    var t = Ht(e);
    if (t.length > 1e6 && (delete e.events[0].metaData, e.events[0].metaData = {
      notifier: "WARNING!\nSerialized payload was " + t.length / 1e6 + "MB (limit = 1MB)\nmetaData was removed"
    }, (t = Ht(e)).length > 1e6)) throw new Error("payload exceeded 1MB limit");
    return t;
  }, Ft = {}, It = E.isoDate;
  Ft = {
    sendReport: function(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function() {}, i = $t(t, "notify", "4.0"), o = new window.XDomainRequest();
      o.onload = function() {
        r(null, o.responseText);
      }, o.open("POST", i), setTimeout(function() {
        try {
          o.send(Pt(n));
        } catch (t) {
          e.error(t);
        }
      }, 0);
    },
    sendSession: function(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function() {}, i = $t(t, "sessions", "1.0"), o = new window.XDomainRequest();
      o.onload = function() {
        r(null, o.responseText);
      }, o.open("POST", i), setTimeout(function() {
        try {
          o.send(Ht(n));
        } catch (t) {
          e.error(t);
        }
      }, 0);
    }
  };
  var $t = function(e, t, n) {
    return Wt(e.endpoints[t], window.location.protocol) + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(It());
  }, Wt = Ft._matchPageProtocol = function(e, t) {
    return "http:" === t ? e.replace(/^https:/, "http:") : e;
  }, zt = E.isoDate, Vt = {
    sendReport: function(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function() {};
      try {
        var i = t.endpoints.notify, o = new window.XMLHttpRequest();
        o.onreadystatechange = function() {
          o.readyState === window.XMLHttpRequest.DONE && r(null, o.responseText);
        }, o.open("POST", i), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Bugsnag-Api-Key", n.apiKey || t.apiKey), 
        o.setRequestHeader("Bugsnag-Payload-Version", "4.0"), o.setRequestHeader("Bugsnag-Sent-At", zt()), 
        o.send(Pt(n));
      } catch (a) {
        e.error(a);
      }
    },
    sendSession: function(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function() {};
      try {
        var i = t.endpoints.sessions, o = new window.XMLHttpRequest();
        o.onreadystatechange = function() {
          o.readyState === window.XMLHttpRequest.DONE && r(null, o.responseText);
        }, o.open("POST", i), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Bugsnag-Api-Key", t.apiKey), 
        o.setRequestHeader("Bugsnag-Payload-Version", "1.0"), o.setRequestHeader("Bugsnag-Sent-At", zt()), 
        o.send(Ht(n));
      } catch (a) {
        e.error(a);
      }
    }
  }, Xt = {}, Ut = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Jt = "Bugsnag JavaScript", Kt = "4.7.3", Gt = "https://github.com/bugsnag/bugsnag-js", Yt = E.map, Qt = E.reduce, Zt = Ut({}, L.schema, qe), en = [ Ot, jt, We, Fe, yt, De, Re, it, Ze, Ke, ze, St, Qe, Ct ];
  Xt = function(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    "string" == typeof e && (e = {
      apiKey: e
    });
    var n = [];
    e.sessionTrackingEnabled && (n.push("deprecated option sessionTrackingEnabled is now called autoCaptureSessions"), 
    e.autoCaptureSessions = e.sessionTrackingEnabled), !e.endpoint && !e.sessionEndpoint || e.endpoints || (n.push("deprecated options endpoint/sessionEndpoint are now configured in the endpoints object"), 
    e.endpoints = {
      notify: e.endpoint,
      sessions: e.sessionEndpoint
    }), e.endpoints && e.endpoints.notify && !e.endpoints.sessions && n.push("notify endpoint is set but sessions endpoint is not. No sessions will be sent.");
    var r = Qt([].concat(en).concat(t), function(e, t) {
      return t.configSchema ? Ut({}, e, t.configSchema) : e;
    }, Zt), i = new ke({
      name: Jt,
      version: Kt,
      url: Gt
    }, r);
    return i.transport(window.XDomainRequest ? Ft : Vt), i.configure(e), Yt(n, function(e) {
      return i._logger.warn(e);
    }), i.use(We), i.use(Fe), i.use(yt), i.use(ze), i.use(De), i.use(St), i.use(Qe), 
    i.use(Ct), !1 !== i.config.autoNotify && (i.use(Ot), i.use(jt)), tn(i.config, "navigationBreadcrumbsEnabled") && i.use(Ze), 
    tn(i.config, "interactionBreadcrumbsEnabled") && i.use(Ke), tn(i.config, "networkBreadcrumbsEnabled") && i.use(it), 
    tn(i.config, "consoleBreadcrumbsEnabled", !1) && i.use(Re), Yt(t, function(e) {
      return i.use(e);
    }), i.config.autoCaptureSessions ? i.startSession() : i;
  };
  var tn = function(e, t) {
    var n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    return "boolean" == typeof e[t] ? e[t] : e.autoBreadcrumbs && (n || !/^dev(elopment)?$/.test(e.releaseStage));
  };
  return Xt.Bugsnag = {
    Client: ke,
    Report: Y,
    Session: fe,
    Breadcrumb: k
  }, Xt["default"] = Xt, Xt;
}), function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length, n = pe.type(e);
    return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  function r(e, t, n) {
    if (pe.isFunction(t)) return pe.grep(e, function(e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return pe.grep(e, function(e) {
      return e === t !== n;
    });
    if ("string" == typeof t) {
      if (Te.test(t)) return pe.filter(t, e, n);
      t = pe.filter(t, e);
    }
    return pe.grep(e, function(e) {
      return pe.inArray(e, t) > -1 !== n;
    });
  }
  function i(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);
    return e;
  }
  function o(e) {
    var t = {};
    return pe.each(e.match(Le) || [], function(e, n) {
      t[n] = !0;
    }), t;
  }
  function a() {
    re.addEventListener ? (re.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s)) : (re.detachEvent("onreadystatechange", s), 
    e.detachEvent("onload", s));
  }
  function s() {
    (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (a(), 
    pe.ready());
  }
  function u(e, t, n) {
    if (n === undefined && 1 === e.nodeType) {
      var r = "data-" + t.replace(He, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(r))) {
        try {
          n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : qe.test(n) ? pe.parseJSON(n) : n);
        } catch (i) {}
        pe.data(e, t, n);
      } else n = undefined;
    }
    return n;
  }
  function c(e) {
    var t;
    for (t in e) if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function l(e, t, n, r) {
    if (Oe(e)) {
      var i, o, a = pe.expando, s = e.nodeType, u = s ? pe.cache : e, c = s ? e[a] : e[a] && a;
      if (c && u[c] && (r || u[c].data) || n !== undefined || "string" != typeof t) return c || (c = s ? e[a] = ne.pop() || pe.guid++ : a), 
      u[c] || (u[c] = s ? {} : {
        toJSON: pe.noop
      }), "object" != typeof t && "function" != typeof t || (r ? u[c] = pe.extend(u[c], t) : u[c].data = pe.extend(u[c].data, t)), 
      o = u[c], r || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[pe.camelCase(t)] = n), 
      "string" == typeof t ? null == (i = o[t]) && (i = o[pe.camelCase(t)]) : i = o, i;
    }
  }
  function f(e, t, n) {
    if (Oe(e)) {
      var r, i, o = e.nodeType, a = o ? pe.cache : e, s = o ? e[pe.expando] : pe.expando;
      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          i = (t = pe.isArray(t) ? t.concat(pe.map(t, pe.camelCase)) : t in r ? [ t ] : (t = pe.camelCase(t)) in r ? [ t ] : t.split(" ")).length;
          for (;i--; ) delete r[t[i]];
          if (n ? !c(r) : !pe.isEmptyObject(r)) return;
        }
        (n || (delete a[s].data, c(a[s]))) && (o ? pe.cleanData([ e ], !0) : fe.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined);
      }
    }
  }
  function d(e, t, n, r) {
    var i, o = 1, a = 20, s = r ? function() {
      return r.cur();
    } : function() {
      return pe.css(e, t, "");
    }, u = s(), c = n && n[3] || (pe.cssNumber[t] ? "" : "px"), l = (pe.cssNumber[t] || "px" !== c && +u) && Pe.exec(pe.css(e, t));
    if (l && l[3] !== c) {
      c = c || l[3], n = n || [], l = +u || 1;
      do {
        l /= o = o || ".5", pe.style(e, t, l + c);
      } while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, 
    r.start = l, r.end = i)), i;
  }
  function p(e) {
    var t = Ue.split("|"), n = e.createDocumentFragment();
    if (n.createElement) for (;t.length; ) n.createElement(t.pop());
    return n;
  }
  function h(e, t) {
    var n, r, i = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
    if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
    return t === undefined || t && pe.nodeName(e, t) ? pe.merge([ e ], o) : o;
  }
  function g(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++) pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"));
  }
  function m(e) {
    We.test(e.type) && (e.defaultChecked = e.checked);
  }
  function y(e, t, n, r, i) {
    for (var o, a, s, u, c, l, f, d = e.length, y = p(t), v = [], b = 0; b < d; b++) if ((a = e[b]) || 0 === a) if ("object" === pe.type(a)) pe.merge(v, a.nodeType ? [ a ] : a); else if (Ke.test(a)) {
      for (u = u || y.appendChild(t.createElement("div")), c = (ze.exec(a) || [ "", "" ])[1].toLowerCase(), 
      f = Je[c] || Je._default, u.innerHTML = f[1] + pe.htmlPrefilter(a) + f[2], o = f[0]; o--; ) u = u.lastChild;
      if (!fe.leadingWhitespace && Xe.test(a) && v.push(t.createTextNode(Xe.exec(a)[0])), 
      !fe.tbody) for (o = (a = "table" !== c || Ge.test(a) ? "<table>" !== f[1] || Ge.test(a) ? 0 : u : u.firstChild) && a.childNodes.length; o--; ) pe.nodeName(l = a.childNodes[o], "tbody") && !l.childNodes.length && a.removeChild(l);
      for (pe.merge(v, u.childNodes), u.textContent = ""; u.firstChild; ) u.removeChild(u.firstChild);
      u = y.lastChild;
    } else v.push(t.createTextNode(a));
    for (u && y.removeChild(u), fe.appendChecked || pe.grep(h(v, "input"), m), b = 0; a = v[b++]; ) if (r && pe.inArray(a, r) > -1) i && i.push(a); else if (s = pe.contains(a.ownerDocument, a), 
    u = h(y.appendChild(a), "script"), s && g(u), n) for (o = 0; a = u[o++]; ) Ve.test(a.type || "") && n.push(a);
    return u = null, y;
  }
  function v() {
    return !0;
  }
  function b() {
    return !1;
  }
  function w() {
    try {
      return re.activeElement;
    } catch (e) {}
  }
  function x(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = undefined), t) x(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, 
    r = undefined) : (i = r, r = n, n = undefined)), !1 === i) i = b; else if (!i) return e;
    return 1 === o && (a = i, (i = function(e) {
      return pe().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
      pe.event.add(this, t, i, r, n);
    });
  }
  function S(e, t) {
    return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }
  function T(e) {
    return e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type, e;
  }
  function C(e) {
    var t = st.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }
  function E(e, t) {
    if (1 === t.nodeType && pe.hasData(e)) {
      var n, r, i, o = pe._data(e), a = pe._data(t, o), s = o.events;
      if (s) for (n in delete a.handle, a.events = {}, s) for (r = 0, i = s[n].length; r < i; r++) pe.event.add(t, n, s[n][r]);
      a.data && (a.data = pe.extend({}, a.data));
    }
  }
  function N(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !fe.noCloneEvent && t[pe.expando]) {
        for (r in (i = pe._data(t)).events) pe.removeEvent(t, r, i.handle);
        t.removeAttribute(pe.expando);
      }
      "script" === n && t.text !== e.text ? (T(t).text = e.text, C(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
      fe.html5Clone && e.innerHTML && !pe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && We.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
      t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
  }
  function k(e, t, n, r) {
    t = oe.apply([], t);
    var i, o, a, s, u, c, l = 0, f = e.length, d = f - 1, p = t[0], g = pe.isFunction(p);
    if (g || f > 1 && "string" == typeof p && !fe.checkClone && at.test(p)) return e.each(function(i) {
      var o = e.eq(i);
      g && (t[0] = p.call(this, i, o.html())), k(o, t, n, r);
    });
    if (f && (i = (c = y(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === c.childNodes.length && (c = i), 
    i || r)) {
      for (a = (s = pe.map(h(c, "script"), T)).length; l < f; l++) o = c, l !== d && (o = pe.clone(o, !0, !0), 
      a && pe.merge(s, h(o, "script"))), n.call(e[l], o, l);
      if (a) for (u = s[s.length - 1].ownerDocument, pe.map(s, C), l = 0; l < a; l++) o = s[l], 
      Ve.test(o.type || "") && !pe._data(o, "globalEval") && pe.contains(u, o) && (o.src ? pe._evalUrl && pe._evalUrl(o.src) : pe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ut, "")));
      c = i = null;
    }
    return e;
  }
  function j(e, t, n) {
    for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || pe.cleanData(h(r)), 
    r.parentNode && (n && pe.contains(r.ownerDocument, r) && g(h(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  function D(e, t) {
    var n = pe(t.createElement(e)).appendTo(t.body), r = pe.css(n[0], "display");
    return n.detach(), r;
  }
  function L(e) {
    var t = re, n = ft[e];
    return n || ("none" !== (n = D(e, t)) && n || ((t = ((lt = (lt || pe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || lt[0].contentDocument).document).write(), 
    t.close(), n = D(e, t), lt.detach()), ft[e] = n), n;
  }
  function A(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  function O(e) {
    if (e in Nt) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Et.length; n--; ) if ((e = Et[n] + t) in Nt) return e;
  }
  function q(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) (r = e[a]).style && (o[a] = pe._data(r, "olddisplay"), 
    n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ie(r) && (o[a] = pe._data(r, "olddisplay", L(r.nodeName)))) : (i = Ie(r), 
    (n && "none" !== n || !i) && pe._data(r, "olddisplay", i ? n : pe.css(r, "display"))));
    for (a = 0; a < s; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    return e;
  }
  function H(e, t, n) {
    var r = St.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function R(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += pe.css(e, n + Fe[o], !0, i)), 
    r ? ("content" === n && (a -= pe.css(e, "padding" + Fe[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + Fe[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Fe[o], !0, i), 
    "padding" !== n && (a += pe.css(e, "border" + Fe[o] + "Width", !0, i)));
    return a;
  }
  function _(t, n, r) {
    var i = !0, o = "width" === n ? t.offsetWidth : t.offsetHeight, a = mt(t), s = fe.boxSizing && "border-box" === pe.css(t, "boxSizing", !1, a);
    if (re.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 
    o <= 0 || null == o) {
      if (((o = yt(t, n, a)) < 0 || null == o) && (o = t.style[n]), pt.test(o)) return o;
      i = s && (fe.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0;
    }
    return o + R(t, n, r || (s ? "border" : "content"), i, a) + "px";
  }
  function B(e, t, n, r, i) {
    return new B.prototype.init(e, t, n, r, i);
  }
  function M() {
    return e.setTimeout(function() {
      kt = undefined;
    }), kt = pe.now();
  }
  function P(e, t) {
    var n, r = {
      height: e
    }, i = 0;
    for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Fe[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function F(e, t, n) {
    for (var r, i = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }
  function I(e, t, n) {
    var r, i, o, a, s, u, c, l = this, f = {}, d = e.style, p = e.nodeType && Ie(e), h = pe._data(e, "fxshow");
    for (r in n.queue || (null == (s = pe._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, 
    u = s.empty.fire, s.empty.fire = function() {
      s.unqueued || u();
    }), s.unqueued++, l.always(function() {
      l.always(function() {
        s.unqueued--, pe.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
    "inline" === ("none" === (c = pe.css(e, "display")) ? pe._data(e, "olddisplay") || L(e.nodeName) : c) && "none" === pe.css(e, "float") && (fe.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), 
    n.overflow && (d.overflow = "hidden", fe.shrinkWrapBlocks() || l.always(function() {
      d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
    })), t) if (i = t[r], Dt.exec(i)) {
      if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
        if ("show" !== i || !h || h[r] === undefined) continue;
        p = !0;
      }
      f[r] = h && h[r] || pe.style(e, r);
    } else c = undefined;
    if (pe.isEmptyObject(f)) "inline" === ("none" === c ? L(e.nodeName) : c) && (d.display = c); else for (r in h ? "hidden" in h && (p = h.hidden) : h = pe._data(e, "fxshow", {}), 
    o && (h.hidden = !p), p ? pe(e).show() : l.done(function() {
      pe(e).hide();
    }), l.done(function() {
      var t;
      for (t in pe._removeData(e, "fxshow"), f) pe.style(e, t, f[t]);
    }), f) a = F(p ? h[r] : 0, r, l), r in h || (h[r] = a.start, p && (a.end = a.start, 
    a.start = "width" === r || "height" === r ? 1 : 0));
  }
  function $(e, t) {
    var n, r, i, o, a;
    for (n in e) if (i = t[r = pe.camelCase(n)], o = e[n], pe.isArray(o) && (i = o[1], 
    o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = pe.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), 
    delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
  }
  function W(e, t, n) {
    var r, i, o = 0, a = W.prefilters.length, s = pe.Deferred().always(function() {
      delete u.elem;
    }), u = function() {
      if (i) return !1;
      for (var t = kt || M(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(r);
      return s.notifyWith(e, [ c, r, n ]), r < 1 && a ? n : (s.resolveWith(e, [ c ]), 
      !1);
    }, c = s.promise({
      elem: e,
      props: pe.extend({}, t),
      opts: pe.extend(!0, {
        specialEasing: {},
        easing: pe.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: kt || M(),
      duration: n.duration,
      tweens: [],
      createTween: function(t, n) {
        var r = pe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(r), r;
      },
      stop: function(t) {
        var n = 0, r = t ? c.tweens.length : 0;
        if (i) return this;
        for (i = !0; n < r; n++) c.tweens[n].run(1);
        return t ? (s.notifyWith(e, [ c, 1, 0 ]), s.resolveWith(e, [ c, t ])) : s.rejectWith(e, [ c, t ]), 
        this;
      }
    }), l = c.props;
    for ($(l, c.opts.specialEasing); o < a; o++) if (r = W.prefilters[o].call(c, e, l, c.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(r.stop, r)), 
    r;
    return pe.map(l, F, c), pe.isFunction(c.opts.start) && c.opts.start.call(e, c), 
    pe.fx.timer(pe.extend(u, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
  }
  function z(e) {
    return pe.attr(e, "class") || "";
  }
  function V(e) {
    return function(t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r, i = 0, o = t.toLowerCase().match(Le) || [];
      if (pe.isFunction(n)) for (;r = o[i++]; ) "+" === r.charAt(0) ? (r = r.slice(1) || "*", 
      (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }
  function X(e, t, n, r) {
    function i(s) {
      var u;
      return o[s] = !0, pe.each(e[s] || [], function(e, s) {
        var c = s(t, n, r);
        return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), 
        i(c), !1);
      }), u;
    }
    var o = {}, a = e === Zt;
    return i(t.dataTypes[0]) || !o["*"] && i("*");
  }
  function U(e, t) {
    var n, r, i = pe.ajaxSettings.flatOptions || {};
    for (r in t) t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && pe.extend(!0, e, n), e;
  }
  function J(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
    i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i) for (a in s) if (s[a] && s[a].test(i)) {
      u.unshift(a);
      break;
    }
    if (u[0] in n) o = u[0]; else {
      for (a in n) {
        if (!u[0] || e.converters[a + " " + u[0]]) {
          o = a;
          break;
        }
        r || (r = a);
      }
      o = o || r;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function K(e, t, n, r) {
    var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
    if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
    for (o = l.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
      if (!(a = c[u + " " + o] || c["* " + o])) for (i in c) if ((s = i.split(" "))[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
        !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], l.unshift(s[1]));
        break;
      }
      if (!0 !== a) if (a && e.throws) t = a(t); else try {
        t = a(t);
      } catch (f) {
        return {
          state: "parsererror",
          error: a ? f : "No conversion from " + u + " to " + o
        };
      }
    }
    return {
      state: "success",
      data: t
    };
  }
  function G(e) {
    return e.style && e.style.display || pe.css(e, "display");
  }
  function Y(e) {
    for (;e && 1 === e.nodeType; ) {
      if ("none" === G(e) || "hidden" === e.type) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  function Q(e, t, n, r) {
    var i;
    if (pe.isArray(t)) pe.each(t, function(t, i) {
      n || on.test(e) ? r(e, i) : Q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
    }); else if (n || "object" !== pe.type(t)) r(e, t); else for (i in t) Q(e + "[" + i + "]", t[i], n, r);
  }
  function Z() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function ee() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  function te(e) {
    return pe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var ne = [], re = e.document, ie = ne.slice, oe = ne.concat, ae = ne.push, se = ne.indexOf, ue = {}, ce = ue.toString, le = ue.hasOwnProperty, fe = {}, de = "1.12.1", pe = function(e, t) {
    return new pe.fn.init(e, t);
  }, he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, me = /-([\da-z])/gi, ye = function(e, t) {
    return t.toUpperCase();
  };
  pe.fn = pe.prototype = {
    jquery: de,
    constructor: pe,
    selector: "",
    length: 0,
    toArray: function() {
      return ie.call(this);
    },
    get: function(e) {
      return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this);
    },
    pushStack: function(e) {
      var t = pe.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function(e) {
      return pe.each(this, e);
    },
    map: function(e) {
      return this.pushStack(pe.map(this, function(t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function() {
      return this.pushStack(ie.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: ae,
    sort: ne.sort,
    splice: ne.splice
  }, pe.extend = pe.fn.extend = function() {
    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
    for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), 
    s === u && (a = this, s--); s < u; s++) if (null != (i = arguments[s])) for (r in i) e = a[r], 
    a !== (n = i[r]) && (c && n && (pe.isPlainObject(n) || (t = pe.isArray(n))) ? (t ? (t = !1, 
    o = e && pe.isArray(e) ? e : []) : o = e && pe.isPlainObject(e) ? e : {}, a[r] = pe.extend(c, o, n)) : n !== undefined && (a[r] = n));
    return a;
  }, pe.extend({
    expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e);
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === pe.type(e);
    },
    isArray: Array.isArray || function(e) {
      return "array" === pe.type(e);
    },
    isWindow: function(e) {
      return null != e && e == e.window;
    },
    isNumeric: function(e) {
      var t = e && e.toString();
      return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0;
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    isPlainObject: function(e) {
      var t;
      if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e)) return !1;
      try {
        if (e.constructor && !le.call(e, "constructor") && !le.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (n) {
        return !1;
      }
      if (!fe.ownFirst) for (t in e) return le.call(e, t);
      for (t in e) ;
      return t === undefined || le.call(e, t);
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ue[ce.call(e)] || "object" : typeof e;
    },
    globalEval: function(t) {
      t && pe.trim(t) && (e.execScript || function(t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function(e) {
      return e.replace(ge, "ms-").replace(me, ye);
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function(e, t) {
      var r, i = 0;
      if (n(e)) for (r = e.length; i < r && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
      return e;
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(he, "");
    },
    makeArray: function(e, t) {
      var r = t || [];
      return null != e && (n(Object(e)) ? pe.merge(r, "string" == typeof e ? [ e ] : e) : ae.call(r, e)), 
      r;
    },
    inArray: function(e, t, n) {
      var r;
      if (t) {
        if (se) return se.call(t, e, n);
        for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n;
      }
      return -1;
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; ) e[i++] = t[r++];
      if (n != n) for (;t[r] !== undefined; ) e[i++] = t[r++];
      return e.length = i, e;
    },
    grep: function(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function(e, t, r) {
      var i, o, a = 0, s = [];
      if (n(e)) for (i = e.length; a < i; a++) null != (o = t(e[a], a, r)) && s.push(o); else for (a in e) null != (o = t(e[a], a, r)) && s.push(o);
      return oe.apply([], s);
    },
    guid: 1,
    proxy: function(e, t) {
      var n, r, i;
      return "string" == typeof t && (i = e[t], t = e, e = i), pe.isFunction(e) ? (n = ie.call(arguments, 2), 
      (r = function() {
        return e.apply(t || this, n.concat(ie.call(arguments)));
      }).guid = e.guid = e.guid || pe.guid++, r) : undefined;
    },
    now: function() {
      return +new Date();
    },
    support: fe
  }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ne[Symbol.iterator]), 
  pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    ue["[object " + t + "]"] = t.toLowerCase();
  });
  var ve = function(e) {
    function t(e, t, n, r) {
      var i, o, a, s, u, c, f, p, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
      if (!r && ((t ? t.ownerDocument || t : F) !== O && A(t), t = t || O, H)) {
        if (11 !== g && (c = ye.exec(e))) if (i = c[1]) {
          if (9 === g) {
            if (!(a = t.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (h && (a = h.getElementById(i)) && M(t, a) && a.id === i) return n.push(a), 
          n;
        } else {
          if (c[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
          if ((i = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), 
          n;
        }
        if (x.qsa && !V[e + " "] && (!R || !R.test(e))) {
          if (1 !== g) h = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute("id")) ? s = s.replace(be, "\\$&") : t.setAttribute("id", s = P), 
            o = (f = E(e)).length, u = de.test(s) ? "#" + s : "[id='" + s + "']"; o--; ) f[o] = u + " " + d(f[o]);
            p = f.join(","), h = ve.test(e) && l(t.parentNode) || t;
          }
          if (p) try {
            return Q.apply(n, h.querySelectorAll(p)), n;
          } catch (m) {} finally {
            s === P && t.removeAttribute("id");
          }
        }
      }
      return k(e.replace(se, "$1"), t, n, r);
    }
    function n() {
      function e(n, r) {
        return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = r;
      }
      var t = [];
      return e;
    }
    function r(e) {
      return e[P] = !0, e;
    }
    function i(e) {
      var t = O.createElement("div");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) S.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
      if (r) return r;
      if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function u(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function c(e) {
      return r(function(t) {
        return t = +t, r(function(n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    function l(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function f() {}
    function d(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function p(e, t, n) {
      var r = t.dir, i = n && "parentNode" === r, o = $++;
      return t.first ? function(t, n, o) {
        for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
      } : function(t, n, a) {
        var s, u, c, l = [ I, o ];
        if (a) {
          for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
        } else for (;t = t[r]; ) if (1 === t.nodeType || i) {
          if ((s = (u = (c = t[P] || (t[P] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[r]) && s[0] === I && s[1] === o) return l[2] = s[2];
          if (u[r] = l, l[2] = e(t, n, a)) return !0;
        }
      };
    }
    function h(e) {
      return e.length > 1 ? function(t, n, r) {
        for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
        return !0;
      } : e[0];
    }
    function g(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
      return r;
    }
    function m(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
      c && t.push(s)));
      return a;
    }
    function y(e, t, n, i, o, a) {
      return i && !i[P] && (i = y(i)), o && !o[P] && (o = y(o, a)), r(function(r, a, s, u) {
        var c, l, f, d = [], p = [], h = a.length, y = r || g(t || "*", s.nodeType ? [ s ] : s, []), v = !e || !r && t ? y : m(y, d, e, s, u), b = n ? o || (r ? e : h || i) ? [] : a : v;
        if (n && n(v, b, s, u), i) for (c = m(b, p), i(c, [], s, u), l = c.length; l--; ) (f = c[l]) && (b[p[l]] = !(v[p[l]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (c = [], l = b.length; l--; ) (f = b[l]) && c.push(v[l] = f);
              o(null, b = [], c, u);
            }
            for (l = b.length; l--; ) (f = b[l]) && (c = o ? ee(r, f) : d[l]) > -1 && (r[c] = !(a[c] = f));
          }
        } else b = m(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : Q.apply(a, b);
      });
    }
    function v(e) {
      for (var t, n, r, i = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], s = o ? 1 : 0, u = p(function(e) {
        return e === t;
      }, a, !0), c = p(function(e) {
        return ee(t, e) > -1;
      }, a, !0), l = [ function(e, n, r) {
        var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
        return t = null, i;
      } ]; s < i; s++) if (n = S.relative[e[s].type]) l = [ p(h(l), n) ]; else {
        if ((n = S.filter[e[s].type].apply(null, e[s].matches))[P]) {
          for (r = ++s; r < i && !S.relative[e[r].type]; r++) ;
          return y(s > 1 && h(l), s > 1 && d(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace(se, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && d(e));
        }
        l.push(n);
      }
      return h(l);
    }
    function b(e, n) {
      var i = n.length > 0, o = e.length > 0, a = function(r, a, s, u, c) {
        var l, f, d, p = 0, h = "0", g = r && [], y = [], v = j, b = r || o && S.find.TAG("*", c), w = I += null == v ? 1 : Math.random() || .1, x = b.length;
        for (c && (j = a === O || a || c); h !== x && null != (l = b[h]); h++) {
          if (o && l) {
            for (f = 0, a || l.ownerDocument === O || (A(l), s = !H); d = e[f++]; ) if (d(l, a || O, s)) {
              u.push(l);
              break;
            }
            c && (I = w);
          }
          i && ((l = !d && l) && p--, r && g.push(l));
        }
        if (p += h, i && h !== p) {
          for (f = 0; d = n[f++]; ) d(g, y, a, s);
          if (r) {
            if (p > 0) for (;h--; ) g[h] || y[h] || (y[h] = G.call(u));
            y = m(y);
          }
          Q.apply(u, y), c && !r && y.length > 0 && p + n.length > 1 && t.uniqueSort(u);
        }
        return c && (I = w, j = v), g;
      };
      return i ? r(a) : a;
    }
    var w, x, S, T, C, E, N, k, j, D, L, A, O, q, H, R, _, B, M, P = "sizzle" + 1 * new Date(), F = e.document, I = 0, $ = 0, W = n(), z = n(), V = n(), X = function(e, t) {
      return e === t && (L = !0), 0;
    }, U = 1 << 31, J = {}.hasOwnProperty, K = [], G = K.pop, Y = K.push, Q = K.push, Z = K.slice, ee = function(e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
      return -1;
    }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe), de = new RegExp("^" + re + "$"), pe = {
      ID: new RegExp("^#(" + re + ")"),
      CLASS: new RegExp("^\\.(" + re + ")"),
      TAG: new RegExp("^(" + re + "|[*])"),
      ATTR: new RegExp("^" + ie),
      PSEUDO: new RegExp("^" + oe),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + te + ")$", "i"),
      needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
    }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), xe = function(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    }, Se = function() {
      A();
    };
    try {
      Q.apply(K = Z.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType;
    } catch (Te) {
      Q = {
        apply: K.length ? function(e, t) {
          Y.apply(e, Z.call(t));
        } : function(e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
          e.length = n - 1;
        }
      };
    }
    for (w in x = t.support = {}, C = t.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, A = t.setDocument = function(e) {
      var t, n, r = e ? e.ownerDocument || e : F;
      return r !== O && 9 === r.nodeType && r.documentElement ? (q = (O = r).documentElement, 
      H = !C(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), 
      x.attributes = i(function(e) {
        return e.className = "i", !e.getAttribute("className");
      }), x.getElementsByTagName = i(function(e) {
        return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length;
      }), x.getElementsByClassName = me.test(O.getElementsByClassName), x.getById = i(function(e) {
        return q.appendChild(e).id = P, !O.getElementsByName || !O.getElementsByName(P).length;
      }), x.getById ? (S.find.ID = function(e, t) {
        if ("undefined" != typeof t.getElementById && H) {
          var n = t.getElementById(e);
          return n ? [ n ] : [];
        }
      }, S.filter.ID = function(e) {
        var t = e.replace(we, xe);
        return function(e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete S.find.ID, S.filter.ID = function(e) {
        var t = e.replace(we, xe);
        return function(e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), S.find.TAG = x.getElementsByTagName ? function(e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
      } : function(e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, S.find.CLASS = x.getElementsByClassName && function(e, t) {
        if ("undefined" != typeof t.getElementsByClassName && H) return t.getElementsByClassName(e);
      }, _ = [], R = [], (x.qsa = me.test(O.querySelectorAll)) && (i(function(e) {
        q.appendChild(e).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
        e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ne + "*(?:''|\"\")"), 
        e.querySelectorAll("[selected]").length || R.push("\\[" + ne + "*(?:value|" + te + ")"), 
        e.querySelectorAll("[id~=" + P + "-]").length || R.push("~="), e.querySelectorAll(":checked").length || R.push(":checked"), 
        e.querySelectorAll("a#" + P + "+*").length || R.push(".#.+[+~]");
      }), i(function(e) {
        var t = O.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + ne + "*[*^$|!~]?="), 
        e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
        R.push(",.*:");
      })), (x.matchesSelector = me.test(B = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
        x.disconnectedMatch = B.call(e, "div"), B.call(e, "[s!='']:x"), _.push("!=", oe);
      }), R = R.length && new RegExp(R.join("|")), _ = _.length && new RegExp(_.join("|")), 
      t = me.test(q.compareDocumentPosition), M = t || me.test(q.contains) ? function(e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function(e, t) {
        if (t) for (;t = t.parentNode; ) if (t === e) return !0;
        return !1;
      }, X = t ? function(e, t) {
        if (e === t) return L = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === F && M(F, e) ? -1 : t === O || t.ownerDocument === F && M(F, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1);
      } : function(e, t) {
        if (e === t) return L = !0, 0;
        var n, r = 0, i = e.parentNode, o = t.parentNode, s = [ e ], u = [ t ];
        if (!i || !o) return e === O ? -1 : t === O ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
        if (i === o) return a(e, t);
        for (n = e; n = n.parentNode; ) s.unshift(n);
        for (n = t; n = n.parentNode; ) u.unshift(n);
        for (;s[r] === u[r]; ) r++;
        return r ? a(s[r], u[r]) : s[r] === F ? -1 : u[r] === F ? 1 : 0;
      }, O) : O;
    }, t.matches = function(e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function(e, n) {
      if ((e.ownerDocument || e) !== O && A(e), n = n.replace(le, "='$1']"), x.matchesSelector && H && !V[n + " "] && (!_ || !_.test(n)) && (!R || !R.test(n))) try {
        var r = B.call(e, n);
        if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (Te) {}
      return t(n, O, null, [ e ]).length > 0;
    }, t.contains = function(e, t) {
      return (e.ownerDocument || e) !== O && A(e), M(e, t);
    }, t.attr = function(e, t) {
      (e.ownerDocument || e) !== O && A(e);
      var n = S.attrHandle[t.toLowerCase()], r = n && J.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !H) : undefined;
      return r !== undefined ? r : x.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, t.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function(e) {
      var t, n = [], r = 0, i = 0;
      if (L = !x.detectDuplicates, D = !x.sortStable && e.slice(0), e.sort(X), L) {
        for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
        for (;r--; ) e.splice(n[r], 1);
      }
      return D = null, e;
    }, T = t.getText = function(e) {
      var t, n = "", r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (;t = e[r++]; ) n += T(t);
      return n;
    }, (S = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: pe,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(e) {
          return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), 
          "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
          e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), 
          e;
        },
        PSEUDO: function(e) {
          var t, n = !e[6] && e[2];
          return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
          e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function(e) {
          var t = e.replace(we, xe).toLowerCase();
          return "*" === e ? function() {
            return !0;
          } : function(e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function(e) {
          var t = W[e + " "];
          return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function(e, n, r) {
          return function(i) {
            var o = t.attr(i, e);
            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
          };
        },
        CHILD: function(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
          return 1 === r && 0 === i ? function(e) {
            return !!e.parentNode;
          } : function(t, n, u) {
            var c, l, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s, b = !1;
            if (m) {
              if (o) {
                for (;g; ) {
                  for (d = t; d = d[g]; ) if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                  h = g = "only" === e && !h && "nextSibling";
                }
                return !0;
              }
              if (h = [ a ? m.firstChild : m.lastChild ], a && v) {
                for (b = (p = (c = (l = (f = (d = m)[P] || (d[P] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === I && c[1]) && c[2], 
                d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop(); ) if (1 === d.nodeType && ++b && d === t) {
                  l[e] = [ I, p, b ];
                  break;
                }
              } else if (v && (b = p = (c = (l = (f = (d = t)[P] || (d[P] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === I && c[1]), 
              !1 === b) for (;(d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++b || (v && ((l = (f = d[P] || (d[P] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [ I, b ]), 
              d !== t)); ) ;
              return (b -= i) === r || b % r == 0 && b / r >= 0;
            }
          };
        },
        PSEUDO: function(e, n) {
          var i, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[P] ? o(n) : o.length > 1 ? (i = [ e, e, "", n ], S.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
            for (var r, i = o(e, n), a = i.length; a--; ) e[r = ee(e, i[a])] = !(t[r] = i[a]);
          }) : function(e) {
            return o(e, 0, i);
          }) : o;
        }
      },
      pseudos: {
        not: r(function(e) {
          var t = [], n = [], i = N(e.replace(se, "$1"));
          return i[P] ? r(function(e, t, n, r) {
            for (var o, a = i(e, null, r, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
          }) : function(e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: r(function(e) {
          return function(n) {
            return t(e, n).length > 0;
          };
        }),
        contains: r(function(e) {
          return e = e.replace(we, xe), function(t) {
            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
          };
        }),
        lang: r(function(e) {
          return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(), 
          function(t) {
            var n;
            do {
              if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function(e) {
          return e === q;
        },
        focus: function(e) {
          return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function(e) {
          return !1 === e.disabled;
        },
        disabled: function(e) {
          return !0 === e.disabled;
        },
        checked: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function(e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0;
        },
        parent: function(e) {
          return !S.pseudos.empty(e);
        },
        header: function(e) {
          return ge.test(e.nodeName);
        },
        input: function(e) {
          return he.test(e.nodeName);
        },
        button: function(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: c(function() {
          return [ 0 ];
        }),
        last: c(function(e, t) {
          return [ t - 1 ];
        }),
        eq: c(function(e, t, n) {
          return [ n < 0 ? n + t : n ];
        }),
        even: c(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: c(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: c(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
          return e;
        }),
        gt: c(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = S.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) S.pseudos[w] = s(w);
    for (w in {
      submit: !0,
      reset: !0
    }) S.pseudos[w] = u(w);
    return f.prototype = S.filters = S.pseudos, S.setFilters = new f(), E = t.tokenize = function(e, n) {
      var r, i, o, a, s, u, c, l = z[e + " "];
      if (l) return n ? 0 : l.slice(0);
      for (s = e, u = [], c = S.preFilter; s; ) {
        for (a in r && !(i = ue.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
        r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(se, " ")
        }), s = s.slice(r.length)), S.filter) !(i = pe[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), 
        o.push({
          value: r,
          type: a,
          matches: i
        }), s = s.slice(r.length));
        if (!r) break;
      }
      return n ? s.length : s ? t.error(e) : z(e, u).slice(0);
    }, N = t.compile = function(e, t) {
      var n, r = [], i = [], o = V[e + " "];
      if (!o) {
        for (t || (t = E(e)), n = t.length; n--; ) (o = v(t[n]))[P] ? r.push(o) : i.push(o);
        (o = V(e, b(i, r))).selector = e;
      }
      return o;
    }, k = t.select = function(e, t, n, r) {
      var i, o, a, s, u, c = "function" == typeof e && e, f = !r && E(e = c.selector || e);
      if (n = n || [], 1 === f.length) {
        if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && H && S.relative[o[1].type]) {
          if (!(t = (S.find.ID(a.matches[0].replace(we, xe), t) || [])[0])) return n;
          c && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !S.relative[s = a.type]); ) if ((u = S.find[s]) && (r = u(a.matches[0].replace(we, xe), ve.test(o[0].type) && l(t.parentNode) || t))) {
          if (o.splice(i, 1), !(e = r.length && d(o))) return Q.apply(n, r), n;
          break;
        }
      }
      return (c || N(e, f))(r, t, !H, n, !t || ve.test(e) && l(t.parentNode) || t), n;
    }, x.sortStable = P.split("").sort(X).join("") === P, x.detectDuplicates = !!L, 
    A(), x.sortDetached = i(function(e) {
      return 1 & e.compareDocumentPosition(O.createElement("div"));
    }), i(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || o("type|href|height|width", function(e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), x.attributes && i(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || o("value", function(e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), i(function(e) {
      return null == e.getAttribute("disabled");
    }) || o(te, function(e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), t;
  }(e);
  pe.find = ve, pe.expr = ve.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ve.uniqueSort, 
  pe.text = ve.getText, pe.isXMLDoc = ve.isXML, pe.contains = ve.contains;
  var be = function(e, t, n) {
    for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
      if (i && pe(e).is(n)) break;
      r.push(e);
    }
    return r;
  }, we = function(e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n;
  }, xe = pe.expr.match.needsContext, Se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Te = /^.[^:#\[\.,]*$/;
  pe.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [ r ] : [] : pe.find.matches(e, pe.grep(t, function(e) {
      return 1 === e.nodeType;
    }));
  }, pe.fn.extend({
    find: function(e) {
      var t, n = [], r = this, i = r.length;
      if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
        for (t = 0; t < i; t++) if (pe.contains(r[t], this)) return !0;
      }));
      for (t = 0; t < i; t++) pe.find(e, r[t], n);
      return (n = this.pushStack(i > 1 ? pe.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, 
      n;
    },
    filter: function(e) {
      return this.pushStack(r(this, e || [], !1));
    },
    not: function(e) {
      return this.pushStack(r(this, e || [], !0));
    },
    is: function(e) {
      return !!r(this, "string" == typeof e && xe.test(e) ? pe(e) : e || [], !1).length;
    }
  });
  var Ce, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (pe.fn.init = function(e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || Ce, "string" == typeof e) {
      if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : Ee.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)), 
        Se.test(r[1]) && pe.isPlainObject(t)) for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      if ((i = re.getElementById(r[2])) && i.parentNode) {
        if (i.id !== r[2]) return Ce.find(e);
        this.length = 1, this[0] = i;
      }
      return this.context = re, this.selector = e, this;
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (e.selector !== undefined && (this.selector = e.selector, 
    this.context = e.context), pe.makeArray(e, this));
  }).prototype = pe.fn, Ce = pe(re);
  var Ne = /^(?:parents|prev(?:Until|All))/, ke = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  pe.fn.extend({
    has: function(e) {
      var t, n = pe(e, this), r = n.length;
      return this.filter(function() {
        for (t = 0; t < r; t++) if (pe.contains(this, n[t])) return !0;
      });
    },
    closest: function(e, t) {
      for (var n, r = 0, i = this.length, o = [], a = xe.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o);
    },
    index: function(e) {
      return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function(e, t) {
      return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), pe.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function(e) {
      return be(e, "parentNode");
    },
    parentsUntil: function(e, t, n) {
      return be(e, "parentNode", n);
    },
    next: function(e) {
      return i(e, "nextSibling");
    },
    prev: function(e) {
      return i(e, "previousSibling");
    },
    nextAll: function(e) {
      return be(e, "nextSibling");
    },
    prevAll: function(e) {
      return be(e, "previousSibling");
    },
    nextUntil: function(e, t, n) {
      return be(e, "nextSibling", n);
    },
    prevUntil: function(e, t, n) {
      return be(e, "previousSibling", n);
    },
    siblings: function(e) {
      return we((e.parentNode || {}).firstChild, e);
    },
    children: function(e) {
      return we(e.firstChild);
    },
    contents: function(e) {
      return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : pe.merge([], e.childNodes);
    }
  }, function(e, t) {
    pe.fn[e] = function(n, r) {
      var i = pe.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), 
      this.length > 1 && (ke[e] || (i = pe.uniqueSort(i)), Ne.test(e) && (i = i.reverse())), 
      this.pushStack(i);
    };
  });
  var je, De, Le = /\S+/g;
  for (De in pe.Callbacks = function(e) {
    e = "string" == typeof e ? o(e) : pe.extend({}, e);
    var t, n, r, i, a = [], s = [], u = -1, c = function() {
      for (i = e.once, r = t = !0; s.length; u = -1) for (n = s.shift(); ++u < a.length; ) !1 === a[u].apply(n[0], n[1]) && e.stopOnFalse && (u = a.length, 
      n = !1);
      e.memory || (n = !1), t = !1, i && (a = n ? [] : "");
    }, l = {
      add: function() {
        return a && (n && !t && (u = a.length - 1, s.push(n)), function r(t) {
          pe.each(t, function(t, n) {
            pe.isFunction(n) ? e.unique && l.has(n) || a.push(n) : n && n.length && "string" !== pe.type(n) && r(n);
          });
        }(arguments), n && !t && c()), this;
      },
      remove: function() {
        return pe.each(arguments, function(e, t) {
          for (var n; (n = pe.inArray(t, a, n)) > -1; ) a.splice(n, 1), n <= u && u--;
        }), this;
      },
      has: function(e) {
        return e ? pe.inArray(e, a) > -1 : a.length > 0;
      },
      empty: function() {
        return a && (a = []), this;
      },
      disable: function() {
        return i = s = [], a = n = "", this;
      },
      disabled: function() {
        return !a;
      },
      lock: function() {
        return i = !0, n || l.disable(), this;
      },
      locked: function() {
        return !!i;
      },
      fireWith: function(e, n) {
        return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], s.push(n), t || c()), 
        this;
      },
      fire: function() {
        return l.fireWith(this, arguments), this;
      },
      fired: function() {
        return !!r;
      }
    };
    return l;
  }, pe.extend({
    Deferred: function(e) {
      var t = [ [ "resolve", "done", pe.Callbacks("once memory"), "resolved" ], [ "reject", "fail", pe.Callbacks("once memory"), "rejected" ], [ "notify", "progress", pe.Callbacks("memory") ] ], n = "pending", r = {
        state: function() {
          return n;
        },
        always: function() {
          return i.done(arguments).fail(arguments), this;
        },
        then: function() {
          var e = arguments;
          return pe.Deferred(function(n) {
            pe.each(t, function(t, o) {
              var a = pe.isFunction(e[t]) && e[t];
              i[o[1]](function() {
                var e = a && a.apply(this, arguments);
                e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [ e ] : arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function(e) {
          return null != e ? pe.extend(e, r) : r;
        }
      }, i = {};
      return r.pipe = r.then, pe.each(t, function(e, o) {
        var a = o[2], s = o[3];
        r[o[1]] = a.add, s && a.add(function() {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function(e) {
      var t, n, r, i = 0, o = ie.call(arguments), a = o.length, s = 1 !== a || e && pe.isFunction(e.promise) ? a : 0, u = 1 === s ? e : pe.Deferred(), c = function(e, n, r) {
        return function(i) {
          n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
        };
      };
      if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) o[i] && pe.isFunction(o[i].promise) ? o[i].promise().progress(c(i, n, t)).done(c(i, r, o)).fail(u.reject) : --s;
      return s || u.resolveWith(r, o), u.promise();
    }
  }), pe.fn.ready = function(e) {
    return pe.ready.promise().done(e), this;
  }, pe.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? pe.readyWait++ : pe.ready(!0);
    },
    ready: function(e) {
      (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (je.resolveWith(re, [ pe ]), 
      pe.fn.triggerHandler && (pe(re).triggerHandler("ready"), pe(re).off("ready"))));
    }
  }), pe.ready.promise = function(t) {
    if (!je) if (je = pe.Deferred(), "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll) e.setTimeout(pe.ready); else if (re.addEventListener) re.addEventListener("DOMContentLoaded", s), 
    e.addEventListener("load", s); else {
      re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
      var n = !1;
      try {
        n = null == e.frameElement && re.documentElement;
      } catch (r) {}
      n && n.doScroll && function t() {
        if (!pe.isReady) {
          try {
            n.doScroll("left");
          } catch (r) {
            return e.setTimeout(t, 50);
          }
          a(), pe.ready();
        }
      }();
    }
    return je.promise(t);
  }, pe.ready.promise(), pe(fe)) break;
  fe.ownFirst = "0" === De, fe.inlineBlockNeedsLayout = !1, pe(function() {
    var e, t, n, r;
    (n = re.getElementsByTagName("body")[0]) && n.style && (t = re.createElement("div"), 
    (r = re.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
    n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
    fe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r));
  }), function() {
    var e = re.createElement("div");
    fe.deleteExpando = !0;
    try {
      delete e.test;
    } catch (t) {
      fe.deleteExpando = !1;
    }
    e = null;
  }();
  var Ae, Oe = function(e) {
    var t = pe.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
    return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t);
  }, qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, He = /([A-Z])/g;
  pe.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(e) {
      return !!(e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !c(e);
    },
    data: function(e, t, n) {
      return l(e, t, n);
    },
    removeData: function(e, t) {
      return f(e, t);
    },
    _data: function(e, t, n) {
      return l(e, t, n, !0);
    },
    _removeData: function(e, t) {
      return f(e, t, !0);
    }
  }), pe.fn.extend({
    data: function(e, t) {
      var n, r, i, o = this[0], a = o && o.attributes;
      if (e === undefined) {
        if (this.length && (i = pe.data(o), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))) {
          for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && u(o, r = pe.camelCase(r.slice(5)), i[r]);
          pe._data(o, "parsedAttrs", !0);
        }
        return i;
      }
      return "object" == typeof e ? this.each(function() {
        pe.data(this, e);
      }) : arguments.length > 1 ? this.each(function() {
        pe.data(this, e, t);
      }) : o ? u(o, e, pe.data(o, e)) : undefined;
    },
    removeData: function(e) {
      return this.each(function() {
        pe.removeData(this, e);
      });
    }
  }), pe.extend({
    queue: function(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = pe._data(e, t), n && (!r || pe.isArray(n) ? r = pe._data(e, t, pe.makeArray(n)) : r.push(n)), 
      r || [];
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = pe.queue(e, t), r = n.length, i = n.shift(), o = pe._queueHooks(e, t), a = function() {
        pe.dequeue(e, t);
      };
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
      delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return pe._data(e, n) || pe._data(e, n, {
        empty: pe.Callbacks("once memory").add(function() {
          pe._removeData(e, t + "queue"), pe._removeData(e, n);
        })
      });
    }
  }), pe.fn.extend({
    queue: function(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : t === undefined ? this : this.each(function() {
        var n = pe.queue(this, e, t);
        pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e);
      });
    },
    dequeue: function(e) {
      return this.each(function() {
        pe.dequeue(this, e);
      });
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", []);
    },
    promise: function(e, t) {
      var n, r = 1, i = pe.Deferred(), o = this, a = this.length, s = function() {
        --r || i.resolveWith(o, [ o ]);
      };
      for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--; ) (n = pe._data(o[a], e + "queueHooks")) && n.empty && (r++, 
      n.empty.add(s));
      return s(), i.promise(t);
    }
  }), fe.shrinkWrapBlocks = function() {
    return null != Ae ? Ae : (Ae = !1, (t = re.getElementsByTagName("body")[0]) && t.style ? (e = re.createElement("div"), 
    (n = re.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
    t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
    e.appendChild(re.createElement("div")).style.width = "5px", Ae = 3 !== e.offsetWidth), 
    t.removeChild(n), Ae) : void 0);
    var e, t, n;
  };
  var Re, _e, Be, Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Pe = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"), Fe = [ "Top", "Right", "Bottom", "Left" ], Ie = function(e, t) {
    return e = t || e, "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e);
  }, $e = function(e, t, n, r, i, o, a) {
    var s = 0, u = e.length, c = null == n;
    if ("object" === pe.type(n)) for (s in i = !0, n) $e(e, t, s, n[s], !0, o, a); else if (r !== undefined && (i = !0, 
    pe.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
      return c.call(pe(e), n);
    })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : c ? t.call(e) : u ? t(e[0], n) : o;
  }, We = /^(?:checkbox|radio)$/i, ze = /<([\w:-]+)/, Ve = /^$|\/(?:java|ecma)script/i, Xe = /^\s+/, Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
  Re = re.createElement("div"), _e = re.createDocumentFragment(), Be = re.createElement("input"), 
  Re.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
  fe.leadingWhitespace = 3 === Re.firstChild.nodeType, fe.tbody = !Re.getElementsByTagName("tbody").length, 
  fe.htmlSerialize = !!Re.getElementsByTagName("link").length, fe.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML, 
  Be.type = "checkbox", Be.checked = !0, _e.appendChild(Be), fe.appendChecked = Be.checked, 
  Re.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!Re.cloneNode(!0).lastChild.defaultValue, 
  _e.appendChild(Re), (Be = re.createElement("input")).setAttribute("type", "radio"), 
  Be.setAttribute("checked", "checked"), Be.setAttribute("name", "t"), Re.appendChild(Be), 
  fe.checkClone = Re.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.noCloneEvent = !!Re.addEventListener, 
  Re[pe.expando] = 1, fe.attributes = !Re.getAttribute(pe.expando);
  var Je = {
    option: [ 1, "<select multiple='multiple'>", "</select>" ],
    legend: [ 1, "<fieldset>", "</fieldset>" ],
    area: [ 1, "<map>", "</map>" ],
    param: [ 1, "<object>", "</object>" ],
    thead: [ 1, "<table>", "</table>" ],
    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
    _default: fe.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
  };
  Je.optgroup = Je.option, Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead, 
  Je.th = Je.td;
  var Ke = /<|&#?\w+;/, Ge = /<tbody/i;
  !function() {
    var t, n, r = re.createElement("div");
    for (t in {
      submit: !0,
      change: !0,
      focusin: !0
    }) n = "on" + t, (fe[t] = n in e) || (r.setAttribute(n, "t"), fe[t] = !1 === r.attributes[n].expando);
    r = null;
  }();
  var Ye = /^(?:input|select|textarea)$/i, Qe = /^key/, Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, et = /^(?:focusinfocus|focusoutblur)$/, tt = /^([^.]*)(?:\.(.+)|)/;
  pe.event = {
    global: {},
    add: function(e, t, n, r, i) {
      var o, a, s, u, c, l, f, d, p, h, g, m = pe._data(e);
      if (m) {
        for (n.handler && (n = (u = n).handler, i = u.selector), n.guid || (n.guid = pe.guid++), 
        (a = m.events) || (a = m.events = {}), (l = m.handle) || ((l = m.handle = function(e) {
          return void 0 === pe || e && pe.event.triggered === e.type ? undefined : pe.event.dispatch.apply(l.elem, arguments);
        }).elem = e), s = (t = (t || "").match(Le) || [ "" ]).length; s--; ) p = g = (o = tt.exec(t[s]) || [])[1], 
        h = (o[2] || "").split(".").sort(), p && (c = pe.event.special[p] || {}, p = (i ? c.delegateType : c.bindType) || p, 
        c = pe.event.special[p] || {}, f = pe.extend({
          type: p,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && pe.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, u), (d = a[p]) || ((d = a[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, r, h, l) || (e.addEventListener ? e.addEventListener(p, l, !1) : e.attachEvent && e.attachEvent("on" + p, l))), 
        c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), 
        pe.event.global[p] = !0);
        e = null;
      }
    },
    remove: function(e, t, n, r, i) {
      var o, a, s, u, c, l, f, d, p, h, g, m = pe.hasData(e) && pe._data(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(Le) || [ "" ]).length; c--; ) if (p = g = (s = tt.exec(t[c]) || [])[1], 
        h = (s[2] || "").split(".").sort(), p) {
          for (f = pe.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], 
          s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--; ) a = d[o], 
          !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), 
          a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
          u && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || pe.removeEvent(e, p, m.handle), 
          delete l[p]);
        } else for (p in l) pe.event.remove(e, p + t[c], n, r, !0);
        pe.isEmptyObject(l) && (delete m.handle, pe._removeData(e, "events"));
      }
    },
    trigger: function(t, n, r, i) {
      var o, a, s, u, c, l, f, d = [ r || re ], p = le.call(t, "type") ? t.type : t, h = le.call(t, "namespace") ? t.namespace.split(".") : [];
      if (s = l = r = r || re, 3 !== r.nodeType && 8 !== r.nodeType && !et.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (p = (h = p.split(".")).shift(), 
      h.sort()), a = p.indexOf(":") < 0 && "on" + p, (t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t)).isTrigger = i ? 2 : 3, 
      t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
      t.result = undefined, t.target || (t.target = r), n = null == n ? [ t ] : pe.makeArray(n, [ t ]), 
      c = pe.event.special[p] || {}, i || !c.trigger || !1 !== c.trigger.apply(r, n))) {
        if (!i && !c.noBubble && !pe.isWindow(r)) {
          for (u = c.delegateType || p, et.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), 
          l = s;
          l === (r.ownerDocument || re) && d.push(l.defaultView || l.parentWindow || e);
        }
        for (f = 0; (s = d[f++]) && !t.isPropagationStopped(); ) t.type = f > 1 ? u : c.bindType || p, 
        (o = (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle")) && o.apply(s, n), 
        (o = a && s[a]) && o.apply && Oe(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
        if (t.type = p, !i && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(d.pop(), n)) && Oe(r) && a && r[p] && !pe.isWindow(r)) {
          (l = r[a]) && (r[a] = null), pe.event.triggered = p;
          try {
            r[p]();
          } catch (g) {}
          pe.event.triggered = undefined, l && (r[a] = l);
        }
        return t.result;
      }
    },
    dispatch: function(e) {
      e = pe.event.fix(e);
      var t, n, r, i, o, a = [], s = ie.call(arguments), u = (pe._data(this, "events") || {})[e.type] || [], c = pe.event.special[e.type] || {};
      if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
        for (a = pe.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = i.elem, 
        n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); ) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, 
        e.data = o.data, (r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(), 
        e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function(e, t) {
      var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
      if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (;u != this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
        for (r = [], n = 0; n < s; n++) r[i = (o = t[n]).selector + " "] === undefined && (r[i] = o.needsContext ? pe(i, this).index(u) > -1 : pe.find(i, this, null, [ u ]).length), 
        r[i] && r.push(o);
        r.length && a.push({
          elem: u,
          handlers: r
        });
      }
      return s < t.length && a.push({
        elem: this,
        handlers: t.slice(s)
      }), a;
    },
    fix: function(e) {
      if (e[pe.expando]) return e;
      var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
      for (a || (this.fixHooks[i] = a = Ze.test(i) ? this.mouseHooks : Qe.test(i) ? this.keyHooks : {}), 
      r = a.props ? this.props.concat(a.props) : this.props, e = new pe.Event(o), t = r.length; t--; ) e[n = r[t]] = o[n];
      return e.target || (e.target = o.srcElement || re), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
      e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
        e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var n, r, i, o = t.button, a = t.fromElement;
        return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || re).documentElement, 
        n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), 
        e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), 
        !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), 
        e;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== w() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === w() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), 
          !1;
        },
        _default: function(e) {
          return pe.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function(e, t, n) {
      var r = pe.extend(new pe.Event(), n, {
        type: e,
        isSimulated: !0
      });
      pe.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault();
    }
  }, pe.removeEvent = re.removeEventListener ? function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  } : function(e, t, n) {
    var r = "on" + t;
    e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n));
  }, pe.Event = function(e, t) {
    if (!(this instanceof pe.Event)) return new pe.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? v : b) : this.type = e, 
    t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0;
  }, pe.Event.prototype = {
    constructor: pe.Event,
    isDefaultPrevented: b,
    isPropagationStopped: b,
    isImmediatePropagationStopped: b,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = v, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = v, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), 
      e.cancelBubble = !0);
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = v, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), 
      this.stopPropagation();
    }
  }, pe.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    pe.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return i && (i === r || pe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
        e.type = t), n;
      }
    };
  }), fe.submit || (pe.event.special.submit = {
    setup: function() {
      if (pe.nodeName(this, "form")) return !1;
      pe.event.add(this, "click._submit keypress._submit", function(e) {
        var t = e.target, n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : undefined;
        n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit", function(e) {
          e._submitBubble = !0;
        }), pe._data(n, "submit", !0));
      });
    },
    postDispatch: function(e) {
      e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e));
    },
    teardown: function() {
      if (pe.nodeName(this, "form")) return !1;
      pe.event.remove(this, "._submit");
    }
  }), fe.change || (pe.event.special.change = {
    setup: function() {
      if (Ye.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change", function(e) {
        "checked" === e.originalEvent.propertyName && (this._justChanged = !0);
      }), pe.event.add(this, "click._change", function(e) {
        this._justChanged && !e.isTrigger && (this._justChanged = !1), pe.event.simulate("change", this, e);
      })), !1;
      pe.event.add(this, "beforeactivate._change", function(e) {
        var t = e.target;
        Ye.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change", function(e) {
          !this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e);
        }), pe._data(t, "change", !0));
      });
    },
    handle: function(e) {
      var t = e.target;
      if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments);
    },
    teardown: function() {
      return pe.event.remove(this, "._change"), !Ye.test(this.nodeName);
    }
  }), fe.focusin || pe.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var n = function(e) {
      pe.event.simulate(t, e.target, pe.event.fix(e));
    };
    pe.event.special[t] = {
      setup: function() {
        var r = this.ownerDocument || this, i = pe._data(r, t);
        i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1);
      },
      teardown: function() {
        var r = this.ownerDocument || this, i = pe._data(r, t) - 1;
        i ? pe._data(r, t, i) : (r.removeEventListener(e, n, !0), pe._removeData(r, t));
      }
    };
  }), pe.fn.extend({
    on: function(e, t, n, r) {
      return x(this, e, t, n, r);
    },
    one: function(e, t, n, r) {
      return x(this, e, t, n, r, 1);
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
      this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = b), 
      this.each(function() {
        pe.event.remove(this, e, n, t);
      });
    },
    trigger: function(e, t) {
      return this.each(function() {
        pe.event.trigger(e, t, this);
      });
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return pe.event.trigger(e, t, n, !0);
    }
  });
  var nt = / jQuery\d+="(?:null|\d+)"/g, rt = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"), it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ot = /<script|<style|<link/i, at = /checked\s*(?:[^=]|=\s*.checked.)/i, st = /^true\/(.*)/, ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = p(re).appendChild(re.createElement("div"));
  pe.extend({
    htmlPrefilter: function(e) {
      return e.replace(it, "<$1></$2>");
    },
    clone: function(e, t, n) {
      var r, i, o, a, s, u = pe.contains(e.ownerDocument, e);
      if (fe.html5Clone || pe.isXMLDoc(e) || !rt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ct.innerHTML = e.outerHTML, 
      ct.removeChild(o = ct.firstChild)), !(fe.noCloneEvent && fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (r = h(o), 
      s = h(e), a = 0; null != (i = s[a]); ++a) r[a] && N(i, r[a]);
      if (t) if (n) for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++) E(i, r[a]); else E(e, o);
      return (r = h(o, "script")).length > 0 && g(r, !u && h(e, "script")), r = s = i = null, 
      o;
    },
    cleanData: function(e, t) {
      for (var n, r, i, o, a = 0, s = pe.expando, u = pe.cache, c = fe.attributes, l = pe.event.special; null != (n = e[a]); a++) if ((t || Oe(n)) && (o = (i = n[s]) && u[i])) {
        if (o.events) for (r in o.events) l[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
        u[i] && (delete u[i], c || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), 
        ne.push(i));
      }
    }
  }), pe.fn.extend({
    domManip: k,
    detach: function(e) {
      return j(this, e, !0);
    },
    remove: function(e) {
      return j(this, e);
    },
    text: function(e) {
      return $e(this, function(e) {
        return e === undefined ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function() {
      return k(this, arguments, function(e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, e).appendChild(e);
      });
    },
    prepend: function() {
      return k(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = S(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function() {
      return k(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function() {
      return k(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
        e.options && pe.nodeName(e, "select") && (e.options.length = 0);
      }
      return this;
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return pe.clone(this, e, t);
      });
    },
    html: function(e) {
      return $e(this, function(e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
        if ("string" == typeof e && !ot.test(e) && (fe.htmlSerialize || !rt.test(e)) && (fe.leadingWhitespace || !Xe.test(e)) && !Je[(ze.exec(e) || [ "", "" ])[1].toLowerCase()]) {
          e = pe.htmlPrefilter(e);
          try {
            for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (pe.cleanData(h(t, !1)), 
            t.innerHTML = e);
            t = 0;
          } catch (i) {}
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function() {
      var e = [];
      return k(this, arguments, function(t) {
        var n = this.parentNode;
        pe.inArray(this, e) < 0 && (pe.cleanData(h(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), pe.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    pe.fn[e] = function(e) {
      for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; r <= a; r++) n = r === a ? this : this.clone(!0), 
      pe(o[r])[t](n), ae.apply(i, n.get());
      return this.pushStack(i);
    };
  });
  var lt, ft = {
    HTML: "block",
    BODY: "block"
  }, dt = /^margin/, pt = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"), ht = function(e, t, n, r) {
    var i, o, a = {};
    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
    for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
    return i;
  }, gt = re.documentElement;
  !function() {
    function t() {
      var t, l, f = re.documentElement;
      f.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
      n = i = s = !1, r = a = !0, e.getComputedStyle && (l = e.getComputedStyle(c), n = "1%" !== (l || {}).top, 
      s = "2px" === (l || {}).marginLeft, i = "4px" === (l || {
        width: "4px"
      }).width, c.style.marginRight = "50%", r = "4px" === (l || {
        marginRight: "4px"
      }).marginRight, (t = c.appendChild(re.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
      t.style.marginRight = t.style.width = "0", c.style.width = "1px", a = !parseFloat((e.getComputedStyle(t) || {}).marginRight), 
      c.removeChild(t)), c.style.display = "none", (o = 0 === c.getClientRects().length) && (c.style.display = "", 
      c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (t = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
      (o = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", 
      o = 0 === t[0].offsetHeight)), f.removeChild(u);
    }
    var n, r, i, o, a, s, u = re.createElement("div"), c = re.createElement("div");
    c.style && (c.style.cssText = "float:left;opacity:.5", fe.opacity = "0.5" === c.style.opacity, 
    fe.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", 
    fe.clearCloneStyle = "content-box" === c.style.backgroundClip, (u = re.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
    c.innerHTML = "", u.appendChild(c), fe.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, 
    pe.extend(fe, {
      reliableHiddenOffsets: function() {
        return null == n && t(), o;
      },
      boxSizingReliable: function() {
        return null == n && t(), i;
      },
      pixelMarginRight: function() {
        return null == n && t(), r;
      },
      pixelPosition: function() {
        return null == n && t(), n;
      },
      reliableMarginRight: function() {
        return null == n && t(), a;
      },
      reliableMarginLeft: function() {
        return null == n && t(), s;
      }
    }));
  }();
  var mt, yt, vt = /^(top|right|bottom|left)$/;
  e.getComputedStyle ? (mt = function(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  }, yt = function(e, t, n) {
    var r, i, o, a, s = e.style;
    return "" !== (a = (n = n || mt(e)) ? n.getPropertyValue(t) || n[t] : undefined) && a !== undefined || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), 
    n && !fe.pixelMarginRight() && pt.test(a) && dt.test(t) && (r = s.width, i = s.minWidth, 
    o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
    s.minWidth = i, s.maxWidth = o), a === undefined ? a : a + "";
  }) : gt.currentStyle && (mt = function(e) {
    return e.currentStyle;
  }, yt = function(e, t, n) {
    var r, i, o, a, s = e.style;
    return null == (a = (n = n || mt(e)) ? n[t] : undefined) && s && s[t] && (a = s[t]), 
    pt.test(a) && !vt.test(t) && (r = s.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), 
    s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), 
    a === undefined ? a : a + "" || "auto";
  });
  var bt = /alpha\([^)]*\)/i, wt = /opacity\s*=\s*([^)]*)/i, xt = /^(none|table(?!-c[ea]).+)/, St = new RegExp("^(" + Me + ")(.*)$", "i"), Tt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  }, Ct = {
    letterSpacing: "0",
    fontWeight: "400"
  }, Et = [ "Webkit", "O", "Moz", "ms" ], Nt = re.createElement("div").style;
  pe.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = yt(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: fe.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = pe.camelCase(t), u = e.style;
        if (t = pe.cssProps[s] || (pe.cssProps[s] = O(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], 
        n === undefined) return a && "get" in a && (i = a.get(e, !1, r)) !== undefined ? i : u[t];
        if ("string" === (o = typeof n) && (i = Pe.exec(n)) && i[1] && (n = d(e, t, i), 
        o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), 
        fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
        !(a && "set" in a && (n = a.set(e, n, r)) === undefined))) try {
          u[t] = n;
        } catch (c) {}
      }
    },
    css: function(e, t, n, r) {
      var i, o, a, s = pe.camelCase(t);
      return t = pe.cssProps[s] || (pe.cssProps[s] = O(s) || s), (a = pe.cssHooks[t] || pe.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), 
      o === undefined && (o = yt(e, t, r)), "normal" === o && t in Ct && (o = Ct[t]), 
      "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o;
    }
  }), pe.each([ "height", "width" ], function(e, t) {
    pe.cssHooks[t] = {
      get: function(e, n, r) {
        if (n) return xt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ht(e, Tt, function() {
          return _(e, t, r);
        }) : _(e, t, r);
      },
      set: function(e, n, r) {
        var i = r && mt(e);
        return H(e, n, r ? R(e, t, r, fe.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, i), i) : 0);
      }
    };
  }), fe.opacity || (pe.cssHooks.opacity = {
    get: function(e, t) {
      return wt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function(e, t) {
      var n = e.style, r = e.currentStyle, i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === pe.trim(o.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
      "" === t || r && !r.filter) || (n.filter = bt.test(o) ? o.replace(bt, i) : o + " " + i);
    }
  }), pe.cssHooks.marginRight = A(fe.reliableMarginRight, function(e, t) {
    if (t) return ht(e, {
      display: "inline-block"
    }, yt, [ e, "marginRight" ]);
  }), pe.cssHooks.marginLeft = A(fe.reliableMarginLeft, function(e, t) {
    if (t) return (parseFloat(yt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {
      marginLeft: 0
    }, function() {
      return e.getBoundingClientRect().left;
    }) : 0)) + "px";
  }), pe.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    pe.cssHooks[e + t] = {
      expand: function(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + Fe[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }
    }, dt.test(e) || (pe.cssHooks[e + t].set = H);
  }), pe.fn.extend({
    css: function(e, t) {
      return $e(this, function(e, t, n) {
        var r, i, o = {}, a = 0;
        if (pe.isArray(t)) {
          for (r = mt(e), i = t.length; a < i; a++) o[t[a]] = pe.css(e, t[a], !1, r);
          return o;
        }
        return n !== undefined ? pe.style(e, t, n) : pe.css(e, t);
      }, e, t, arguments.length > 1);
    },
    show: function() {
      return q(this, !0);
    },
    hide: function() {
      return q(this);
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        Ie(this) ? pe(this).show() : pe(this).hide();
      });
    }
  }), pe.Tween = B, B.prototype = {
    constructor: B,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, 
      this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px");
    },
    cur: function() {
      var e = B.propHooks[this.prop];
      return e && e.get ? e.get(this) : B.propHooks._default.get(this);
    },
    run: function(e) {
      var t, n = B.propHooks[this.prop];
      return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
      this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
      n && n.set ? n.set(this) : B.propHooks._default.set(this), this;
    }
  }, B.prototype.init.prototype = B.prototype, B.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function(e) {
        pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, pe.easing = {
    linear: function(e) {
      return e;
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, pe.fx = B.prototype.init, pe.fx.step = {};
  var kt, jt, Dt = /^(?:toggle|show|hide)$/, Lt = /queueHooks$/;
  pe.Animation = pe.extend(W, {
    tweeners: {
      "*": [ function(e, t) {
        var n = this.createTween(e, t);
        return d(n.elem, e, Pe.exec(t), n), n;
      } ]
    },
    tweener: function(e, t) {
      pe.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(Le);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], W.tweeners[n] = W.tweeners[n] || [], 
      W.tweeners[n].unshift(t);
    },
    prefilters: [ I ],
    prefilter: function(e, t) {
      t ? W.prefilters.unshift(e) : W.prefilters.push(e);
    }
  }), pe.speed = function(e, t, n) {
    var r = e && "object" == typeof e ? pe.extend({}, e) : {
      complete: n || !n && t || pe.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !pe.isFunction(t) && t
    };
    return r.duration = pe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pe.fx.speeds ? pe.fx.speeds[r.duration] : pe.fx.speeds._default, 
    null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
      pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue);
    }, r;
  }, pe.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter(Ie).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function(e, t, n, r) {
      var i = pe.isEmptyObject(e), o = pe.speed(t, n, r), a = function() {
        var t = W(this, pe.extend({}, e), o);
        (i || pe._data(this, "finish")) && t.stop(!0);
      };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function(e, t, n) {
      var r = function(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };
      return "string" != typeof e && (n = t, t = e, e = undefined), t && !1 !== e && this.queue(e || "fx", []), 
      this.each(function() {
        var t = !0, i = null != e && e + "queueHooks", o = pe.timers, a = pe._data(this);
        if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && Lt.test(i) && r(a[i]);
        for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
        t = !1, o.splice(i, 1));
        !t && n || pe.dequeue(this, e);
      });
    },
    finish: function(e) {
      return !1 !== e && (e = e || "fx"), this.each(function() {
        var t, n = pe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = pe.timers, a = r ? r.length : 0;
        for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
        t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
        o.splice(t, 1));
        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  }), pe.each([ "toggle", "show", "hide" ], function(e, t) {
    var n = pe.fn[t];
    pe.fn[t] = function(e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i);
    };
  }), pe.each({
    slideDown: P("show"),
    slideUp: P("hide"),
    slideToggle: P("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, t) {
    pe.fn[e] = function(e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), pe.timers = [], pe.fx.tick = function() {
    var e, t = pe.timers, n = 0;
    for (kt = pe.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
    t.length || pe.fx.stop(), kt = undefined;
  }, pe.fx.timer = function(e) {
    pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop();
  }, pe.fx.interval = 13, pe.fx.start = function() {
    jt || (jt = e.setInterval(pe.fx.tick, pe.fx.interval));
  }, pe.fx.stop = function() {
    e.clearInterval(jt), jt = null;
  }, pe.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, pe.fn.delay = function(t, n) {
    return t = pe.fx && pe.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, r) {
      var i = e.setTimeout(n, t);
      r.stop = function() {
        e.clearTimeout(i);
      };
    });
  }, function() {
    var e, t = re.createElement("input"), n = re.createElement("div"), r = re.createElement("select"), i = r.appendChild(re.createElement("option"));
    (n = re.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
    e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), 
    (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", fe.getSetAttribute = "t" !== n.className, 
    fe.style = /top/.test(e.getAttribute("style")), fe.hrefNormalized = "/a" === e.getAttribute("href"), 
    fe.checkOn = !!t.value, fe.optSelected = i.selected, fe.enctype = !!re.createElement("form").enctype, 
    r.disabled = !0, fe.optDisabled = !i.disabled, (t = re.createElement("input")).setAttribute("value", ""), 
    fe.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), 
    fe.radioValue = "t" === t.value;
  }();
  var At = /\r/g;
  pe.fn.extend({
    val: function(e) {
      var t, n, r, i = this[0];
      return arguments.length ? (r = pe.isFunction(e), this.each(function(n) {
        var i;
        1 === this.nodeType && (null == (i = r ? e.call(this, n, pe(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function(e) {
          return null == e ? "" : e + "";
        })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i));
      })) : i ? (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()]) && "get" in t && (n = t.get(i, "value")) !== undefined ? n : "string" == typeof (n = i.value) ? n.replace(At, "") : null == n ? "" : n : void 0;
    }
  }), pe.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = pe.find.attr(e, "value");
          return null != t ? t : pe.trim(pe.text(e));
        }
      },
      select: {
        get: function(e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) if (((n = r[u]).selected || u === i) && (fe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
            if (t = pe(n).val(), o) return t;
            a.push(t);
          }
          return a;
        },
        set: function(e, t) {
          for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--; ) if (r = i[a], 
          pe.inArray(pe.valHooks.option.get(r), o) >= 0) try {
            r.selected = n = !0;
          } catch (s) {
            r.scrollHeight;
          } else r.selected = !1;
          return n || (e.selectedIndex = -1), i;
        }
      }
    }
  }), pe.each([ "radio", "checkbox" ], function() {
    pe.valHooks[this] = {
      set: function(e, t) {
        if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1;
      }
    }, fe.checkOn || (pe.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Ot, qt, Ht = pe.expr.attrHandle, Rt = /^(?:checked|selected)$/i, _t = fe.getSetAttribute, Bt = fe.input;
  pe.fn.extend({
    attr: function(e, t) {
      return $e(this, pe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function(e) {
      return this.each(function() {
        pe.removeAttr(this, e);
      });
    }
  }), pe.extend({
    attr: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (t = t.toLowerCase(), 
      i = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? qt : Ot)), n !== undefined ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), 
      n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = pe.find.attr(e, t)) ? undefined : r);
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!fe.radioValue && "radio" === t && pe.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n, r, i = 0, o = t && t.match(Le);
      if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = pe.propFix[n] || n, pe.expr.match.bool.test(n) ? Bt && _t || !Rt.test(n) ? e[r] = !1 : e[pe.camelCase("default-" + n)] = e[r] = !1 : pe.attr(e, n, ""), 
      e.removeAttribute(_t ? n : r);
    }
  }), qt = {
    set: function(e, t, n) {
      return !1 === t ? pe.removeAttr(e, n) : Bt && _t || !Rt.test(n) ? e.setAttribute(!_t && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0, 
      n;
    }
  }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var n = Ht[t] || pe.find.attr;
    Bt && _t || !Rt.test(t) ? Ht[t] = function(e, t, r) {
      var i, o;
      return r || (o = Ht[t], Ht[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, 
      Ht[t] = o), i;
    } : Ht[t] = function(e, t, n) {
      if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null;
    };
  }), Bt && _t || (pe.attrHooks.value = {
    set: function(e, t, n) {
      if (!pe.nodeName(e, "input")) return Ot && Ot.set(e, t, n);
      e.defaultValue = t;
    }
  }), _t || (Ot = {
    set: function(e, t, n) {
      var r = e.getAttributeNode(n);
      if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", 
      "value" === n || t === e.getAttribute(n)) return t;
    }
  }, Ht.id = Ht.name = Ht.coords = function(e, t, n) {
    var r;
    if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null;
  }, pe.valHooks.button = {
    get: function(e, t) {
      var n = e.getAttributeNode(t);
      if (n && n.specified) return n.value;
    },
    set: Ot.set
  }, pe.attrHooks.contenteditable = {
    set: function(e, t, n) {
      Ot.set(e, "" !== t && t, n);
    }
  }, pe.each([ "width", "height" ], function(e, t) {
    pe.attrHooks[t] = {
      set: function(e, n) {
        if ("" === n) return e.setAttribute(t, "auto"), n;
      }
    };
  })), fe.style || (pe.attrHooks.style = {
    get: function(e) {
      return e.style.cssText || undefined;
    },
    set: function(e, t) {
      return e.style.cssText = t + "";
    }
  });
  var Mt = /^(?:input|select|textarea|button|object)$/i, Pt = /^(?:a|area)$/i;
  pe.fn.extend({
    prop: function(e, t) {
      return $e(this, pe.prop, e, t, arguments.length > 1);
    },
    removeProp: function(e) {
      return e = pe.propFix[e] || e, this.each(function() {
        try {
          this[e] = undefined, delete this[e];
        } catch (t) {}
      });
    }
  }), pe.extend({
    prop: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, 
      i = pe.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = pe.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Pt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), fe.hrefNormalized || pe.each([ "href", "src" ], function(e, t) {
    pe.propHooks[t] = {
      get: function(e) {
        return e.getAttribute(t, 4);
      }
    };
  }), fe.optSelected || (pe.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  }), pe.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
    pe.propFix[this.toLowerCase()] = this;
  }), fe.enctype || (pe.propFix.enctype = "encoding");
  var Ft = /[\t\r\n\f]/g;
  pe.fn.extend({
    addClass: function(e) {
      var t, n, r, i, o, a, s, u = 0;
      if (pe.isFunction(e)) return this.each(function(t) {
        pe(this).addClass(e.call(this, t, z(this)));
      });
      if ("string" == typeof e && e) for (t = e.match(Le) || []; n = this[u++]; ) if (i = z(n), 
      r = 1 === n.nodeType && (" " + i + " ").replace(Ft, " ")) {
        for (a = 0; o = t[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
        i !== (s = pe.trim(r)) && pe.attr(n, "class", s);
      }
      return this;
    },
    removeClass: function(e) {
      var t, n, r, i, o, a, s, u = 0;
      if (pe.isFunction(e)) return this.each(function(t) {
        pe(this).removeClass(e.call(this, t, z(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e) for (t = e.match(Le) || []; n = this[u++]; ) if (i = z(n), 
      r = 1 === n.nodeType && (" " + i + " ").replace(Ft, " ")) {
        for (a = 0; o = t[a++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
        i !== (s = pe.trim(r)) && pe.attr(n, "class", s);
      }
      return this;
    },
    toggleClass: function(e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
        pe(this).toggleClass(e.call(this, n, z(this), t), t);
      }) : this.each(function() {
        var t, r, i, o;
        if ("string" === n) for (r = 0, i = pe(this), o = e.match(Le) || []; t = o[r++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else e !== undefined && "boolean" !== n || ((t = z(this)) && pe._data(this, "__className__", t), 
        pe.attr(this, "class", t || !1 === e ? "" : pe._data(this, "__className__") || ""));
      });
    },
    hasClass: function(e) {
      var t, n, r = 0;
      for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + z(n) + " ").replace(Ft, " ").indexOf(t) > -1) return !0;
      return !1;
    }
  }), pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    pe.fn[t] = function(e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), pe.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  });
  var It = e.location, $t = pe.now(), Wt = /\?/, zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  pe.parseJSON = function(t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n, r = null, i = pe.trim(t + "");
    return i && !pe.trim(i.replace(zt, function(e, t, i, o) {
      return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "");
    })) ? Function("return " + i)() : pe.error("Invalid JSON: " + t);
  }, pe.parseXML = function(t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      e.DOMParser ? n = new e.DOMParser().parseFromString(t, "text/xml") : ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", 
      n.loadXML(t));
    } catch (r) {
      n = undefined;
    }
    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), 
    n;
  };
  var Vt = /#.*$/, Xt = /([?&])_=[^&]*/, Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Jt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Kt = /^(?:GET|HEAD)$/, Gt = /^\/\//, Yt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Qt = {}, Zt = {}, en = "*/".concat("*"), tn = It.href, nn = Yt.exec(tn.toLowerCase()) || [];
  pe.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tn,
      type: "GET",
      isLocal: Jt.test(nn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": en,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": pe.parseJSON,
        "text xml": pe.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? U(U(e, pe.ajaxSettings), t) : U(pe.ajaxSettings, e);
    },
    ajaxPrefilter: V(Qt),
    ajaxTransport: V(Zt),
    ajax: function(t, n) {
      function r(t, n, r, i) {
        var o, f, v, b, x, T = n;
        2 !== w && (w = 2, u && e.clearTimeout(u), l = undefined, s = i || "", S.readyState = t > 0 ? 4 : 0, 
        o = t >= 200 && t < 300 || 304 === t, r && (b = J(d, S, r)), b = K(d, b, S, o), 
        o ? (d.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (pe.lastModified[a] = x), 
        (x = S.getResponseHeader("etag")) && (pe.etag[a] = x)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, 
        f = b.data, o = !(v = b.error))) : (v = T, !t && T || (T = "error", t < 0 && (t = 0))), 
        S.status = t, S.statusText = (n || T) + "", o ? g.resolveWith(p, [ f, T, S ]) : g.rejectWith(p, [ S, T, v ]), 
        S.statusCode(y), y = undefined, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [ S, d, o ? f : v ]), 
        m.fireWith(p, [ S, T ]), c && (h.trigger("ajaxComplete", [ S, d ]), --pe.active || pe.event.trigger("ajaxStop")));
      }
      "object" == typeof t && (n = t, t = undefined), n = n || {};
      var i, o, a, s, u, c, l, f, d = pe.ajaxSetup({}, n), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? pe(p) : pe.event, g = pe.Deferred(), m = pe.Callbacks("once memory"), y = d.statusCode || {}, v = {}, b = {}, w = 0, x = "canceled", S = {
        readyState: 0,
        getResponseHeader: function(e) {
          var t;
          if (2 === w) {
            if (!f) for (f = {}; t = Ut.exec(s); ) f[t[1].toLowerCase()] = t[2];
            t = f[e.toLowerCase()];
          }
          return null == t ? null : t;
        },
        getAllResponseHeaders: function() {
          return 2 === w ? s : null;
        },
        setRequestHeader: function(e, t) {
          var n = e.toLowerCase();
          return w || (e = b[n] = b[n] || e, v[e] = t), this;
        },
        overrideMimeType: function(e) {
          return w || (d.mimeType = e), this;
        },
        statusCode: function(e) {
          var t;
          if (e) if (w < 2) for (t in e) y[t] = [ y[t], e[t] ]; else S.always(e[S.status]);
          return this;
        },
        abort: function(e) {
          var t = e || x;
          return l && l.abort(t), r(0, t), this;
        }
      };
      if (g.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, d.url = ((t || d.url || tn) + "").replace(Vt, "").replace(Gt, nn[1] + "//"), 
      d.type = n.method || n.type || d.method || d.type, d.dataTypes = pe.trim(d.dataType || "*").toLowerCase().match(Le) || [ "" ], 
      null == d.crossDomain && (i = Yt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === nn[1] && i[2] === nn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (nn[3] || ("http:" === nn[1] ? "80" : "443")))), 
      d.data && d.processData && "string" != typeof d.data && (d.data = pe.param(d.data, d.traditional)), 
      X(Qt, d, n, S), 2 === w) return S;
      for (o in (c = pe.event && d.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), 
      d.type = d.type.toUpperCase(), d.hasContent = !Kt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Wt.test(a) ? "&" : "?") + d.data, 
      delete d.data), !1 === d.cache && (d.url = Xt.test(a) ? a.replace(Xt, "$1_=" + $t++) : a + (Wt.test(a) ? "&" : "?") + "_=" + $t++)), 
      d.ifModified && (pe.lastModified[a] && S.setRequestHeader("If-Modified-Since", pe.lastModified[a]), 
      pe.etag[a] && S.setRequestHeader("If-None-Match", pe.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && S.setRequestHeader("Content-Type", d.contentType), 
      S.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + en + "; q=0.01" : "") : d.accepts["*"]), 
      d.headers) S.setRequestHeader(o, d.headers[o]);
      if (d.beforeSend && (!1 === d.beforeSend.call(p, S, d) || 2 === w)) return S.abort();
      for (o in x = "abort", {
        success: 1,
        error: 1,
        complete: 1
      }) S[o](d[o]);
      if (l = X(Zt, d, n, S)) {
        if (S.readyState = 1, c && h.trigger("ajaxSend", [ S, d ]), 2 === w) return S;
        d.async && d.timeout > 0 && (u = e.setTimeout(function() {
          S.abort("timeout");
        }, d.timeout));
        try {
          w = 1, l.send(v, r);
        } catch (T) {
          if (!(w < 2)) throw T;
          r(-1, T);
        }
      } else r(-1, "No Transport");
      return S;
    },
    getJSON: function(e, t, n) {
      return pe.get(e, t, n, "json");
    },
    getScript: function(e, t) {
      return pe.get(e, undefined, t, "script");
    }
  }), pe.each([ "get", "post" ], function(e, t) {
    pe[t] = function(e, n, r, i) {
      return pe.isFunction(n) && (i = i || r, r = n, n = undefined), pe.ajax(pe.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, pe.isPlainObject(e) && e));
    };
  }), pe._evalUrl = function(e) {
    return pe.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    });
  }, pe.fn.extend({
    wrapAll: function(e) {
      if (pe.isFunction(e)) return this.each(function(t) {
        pe(this).wrapAll(e.call(this, t));
      });
      if (this[0]) {
        var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
          return e;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(e) {
      return pe.isFunction(e) ? this.each(function(t) {
        pe(this).wrapInner(e.call(this, t));
      }) : this.each(function() {
        var t = pe(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function(e) {
      var t = pe.isFunction(e);
      return this.each(function(n) {
        pe(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function() {
      return this.parent().each(function() {
        pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes);
      }).end();
    }
  }), pe.expr.filters.hidden = function(e) {
    return fe.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Y(e);
  }, pe.expr.filters.visible = function(e) {
    return !pe.expr.filters.hidden(e);
  };
  var rn = /%20/g, on = /\[\]$/, an = /\r?\n/g, sn = /^(?:submit|button|image|reset|file)$/i, un = /^(?:input|select|textarea|keygen)/i;
  pe.param = function(e, t) {
    var n, r = [], i = function(e, t) {
      t = pe.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };
    if (t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
      i(this.name, this.value);
    }); else for (n in e) Q(n, e[n], t, i);
    return r.join("&").replace(rn, "+");
  }, pe.fn.extend({
    serialize: function() {
      return pe.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var e = pe.prop(this, "elements");
        return e ? pe.makeArray(e) : this;
      }).filter(function() {
        var e = this.type;
        return this.name && !pe(this).is(":disabled") && un.test(this.nodeName) && !sn.test(e) && (this.checked || !We.test(e));
      }).map(function(e, t) {
        var n = pe(this).val();
        return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(an, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(an, "\r\n")
        };
      }).get();
    }
  }), pe.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
    return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee();
  } : Z;
  var cn = 0, ln = {}, fn = pe.ajaxSettings.xhr();
  e.attachEvent && e.attachEvent("onunload", function() {
    for (var e in ln) ln[e](undefined, !0);
  }), fe.cors = !!fn && "withCredentials" in fn, (fn = fe.ajax = !!fn) && pe.ajaxTransport(function(t) {
    var n;
    if (!t.crossDomain || fe.cors) return {
      send: function(r, i) {
        var o, a = t.xhr(), s = ++cn;
        if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o];
        for (o in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), 
        r) r[o] !== undefined && a.setRequestHeader(o, r[o] + "");
        a.send(t.hasContent && t.data || null), n = function(e, r) {
          var o, u, c;
          if (n && (r || 4 === a.readyState)) if (delete ln[s], n = undefined, a.onreadystatechange = pe.noop, 
          r) 4 !== a.readyState && a.abort(); else {
            c = {}, o = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
            try {
              u = a.statusText;
            } catch (l) {
              u = "";
            }
            o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404;
          }
          c && i(o, u, c, a.getAllResponseHeaders());
        }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = ln[s] = n : n();
      },
      abort: function() {
        n && n(undefined, !0);
      }
    };
  }), pe.ajaxPrefilter(function(e) {
    e.crossDomain && (e.contents.script = !1);
  }), pe.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return pe.globalEval(e), e;
      }
    }
  }), pe.ajaxPrefilter("script", function(e) {
    e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), pe.ajaxTransport("script", function(e) {
    if (e.crossDomain) {
      var t, n = re.head || pe("head")[0] || re.documentElement;
      return {
        send: function(r, i) {
          (t = re.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), 
          t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, 
            t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"));
          }, n.insertBefore(t, n.firstChild);
        },
        abort: function() {
          t && t.onload(undefined, !0);
        }
      };
    }
  });
  var dn = [], pn = /(=)\?(?=&|$)|\?\?/;
  pe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = dn.pop() || pe.expando + "_" + $t++;
      return this[e] = !0, e;
    }
  }), pe.ajaxPrefilter("json jsonp", function(t, n, r) {
    var i, o, a, s = !1 !== t.jsonp && (pn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && pn.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
    s ? t[s] = t[s].replace(pn, "$1" + i) : !1 !== t.jsonp && (t.url += (Wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
    t.converters["script json"] = function() {
      return a || pe.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
      a = arguments;
    }, r.always(function() {
      o === undefined ? pe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, 
      dn.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = undefined;
    }), "script";
  }), fe.createHTMLDocument = function() {
    if (!re.implementation.createHTMLDocument) return !1;
    var e = re.implementation.createHTMLDocument("");
    return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length;
  }(), pe.parseHTML = function(e, t, n) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (n = t, t = !1), t = t || (fe.createHTMLDocument ? re.implementation.createHTMLDocument("") : re);
    var r = Se.exec(e), i = !n && [];
    return r ? [ t.createElement(r[1]) ] : (r = y([ e ], t, i), i && i.length && pe(i).remove(), 
    pe.merge([], r.childNodes));
  };
  var hn = pe.fn.load;
  pe.fn.load = function(e, t, n) {
    if ("string" != typeof e && hn) return hn.apply(this, arguments);
    var r, i, o, a = this, s = e.indexOf(" ");
    return s > -1 && (r = pe.trim(e.slice(s, e.length)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, 
    t = undefined) : t && "object" == typeof t && (i = "POST"), a.length > 0 && pe.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function(e) {
      o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e);
    }).always(n && function(e, t) {
      a.each(function() {
        n.apply(a, o || [ e.responseText, t, e ]);
      });
    }), this;
  }, pe.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
    pe.fn[t] = function(e) {
      return this.on(t, e);
    };
  }), pe.expr.filters.animated = function(e) {
    return pe.grep(pe.timers, function(t) {
      return e === t.elem;
    }).length;
  }, pe.offset = {
    setOffset: function(e, t, n) {
      var r, i, o, a, s, u, c = pe.css(e, "position"), l = pe(e), f = {};
      "static" === c && (e.style.position = "relative"), s = l.offset(), o = pe.css(e, "top"), 
      u = pe.css(e, "left"), ("absolute" === c || "fixed" === c) && pe.inArray("auto", [ o, u ]) > -1 ? (a = (r = l.position()).top, 
      i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), 
      null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), 
      "using" in t ? t.using.call(e, f) : l.css(f);
    }
  }, pe.fn.extend({
    offset: function(e) {
      if (arguments.length) return e === undefined ? this : this.each(function(t) {
        pe.offset.setOffset(this, e, t);
      });
      var t, n, r = {
        top: 0,
        left: 0
      }, i = this[0], o = i && i.ownerDocument;
      return o ? (t = o.documentElement, pe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), 
      n = te(o), {
        top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
        left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
      }) : r) : void 0;
    },
    position: function() {
      if (this[0]) {
        var e, t, n = {
          top: 0,
          left: 0
        }, r = this[0];
        return "fixed" === pe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), 
        t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), 
        n.left += pe.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - pe.css(r, "marginTop", !0),
          left: t.left - n.left - pe.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position"); ) e = e.offsetParent;
        return e || gt;
      });
    }
  }), pe.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(e, t) {
    var n = /Y/.test(t);
    pe.fn[e] = function(r) {
      return $e(this, function(e, r, i) {
        var o = te(e);
        if (i === undefined) return o ? t in o ? o[t] : o.document.documentElement[r] : e[r];
        o ? o.scrollTo(n ? pe(o).scrollLeft() : i, n ? i : pe(o).scrollTop()) : e[r] = i;
      }, e, r, arguments.length, null);
    };
  }), pe.each([ "top", "left" ], function(e, t) {
    pe.cssHooks[t] = A(fe.pixelPosition, function(e, n) {
      if (n) return n = yt(e, t), pt.test(n) ? pe(e).position()[t] + "px" : n;
    });
  }), pe.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    pe.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(n, r) {
      pe.fn[r] = function(r, i) {
        var o = arguments.length && (n || "boolean" != typeof r), a = n || (!0 === r || !0 === i ? "margin" : "border");
        return $e(this, function(t, n, r) {
          var i;
          return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
          Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? pe.css(t, n, a) : pe.style(t, n, r, a);
        }, t, o ? r : undefined, o, null);
      };
    });
  }), pe.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function(e, t) {
      return this.off(e, null, t);
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), pe.fn.size = function() {
    return this.length;
  }, pe.fn.andSelf = pe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return pe;
  });
  var gn = e.jQuery, mn = e.$;
  return pe.noConflict = function(t) {
    return e.$ === pe && (e.$ = mn), t && e.jQuery === pe && (e.jQuery = gn), pe;
  }, t || (e.jQuery = e.$ = pe), pe;
});
//# sourceMappingURL=/assets/maps/head_vendor-713ef2340d38a3f67ce2146de466ddaaa0e8afae057b45037b14d17478c9975a.js.map
