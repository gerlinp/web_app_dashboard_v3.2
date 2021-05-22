"function" != typeof Function.prototype.bind && (Function.prototype.bind = function(e) {
  var t = Array.prototype.slice.call(arguments, 1), i = this, n = function() {}, r = function() {
    return i.apply(this instanceof n ? this : e || {}, t.concat(Array.prototype.slice.call(arguments)));
  };
  return n.prototype = this.prototype || {}, r.prototype = new n(), r;
}), function() {
  var e = Date, t = Date.CultureStrings ? Date.CultureStrings.lang : null, i = {}, n = {
    getFromKey: function(e, t) {
      var i;
      return i = Date.CultureStrings && Date.CultureStrings[t] && Date.CultureStrings[t][e] ? Date.CultureStrings[t][e] : n.buildFromDefault(e), 
      "/" === e.charAt(0) && (i = n.buildFromRegex(e, t)), i;
    },
    getFromObjectValues: function(e, t) {
      var i, r = {};
      for (i in e) e.hasOwnProperty(i) && (r[i] = n.getFromKey(e[i], t));
      return r;
    },
    getFromObjectKeys: function(e, t) {
      var i, r = {};
      for (i in e) e.hasOwnProperty(i) && (r[n.getFromKey(i, t)] = e[i]);
      return r;
    },
    getFromArray: function(e, t) {
      for (var i = [], r = 0; r < e.length; r++) r in e && (i[r] = n.getFromKey(e[r], t));
      return i;
    },
    buildFromDefault: function(e) {
      var t, i, n, r;
      switch (e) {
       case "name":
        t = "en-US";
        break;

       case "englishName":
       case "nativeName":
        t = "English (United States)";
        break;

       case "twoDigitYearMax":
        t = 2049;
        break;

       case "firstDayOfWeek":
        t = 0;
        break;

       default:
        t = e, (i = (n = e.split("_")).length) > 1 && "/" !== e.charAt(0) && ("initial" !== (r = n[i - 1].toLowerCase()) && "abbr" !== r || (t = n[0]));
      }
      return t;
    },
    buildFromRegex: function(e, t) {
      return Date.CultureStrings && Date.CultureStrings[t] && Date.CultureStrings[t][e] ? new RegExp(Date.CultureStrings[t][e], "i") : new RegExp(e.replace(new RegExp("/", "g"), ""), "i");
    }
  }, r = function(e, t) {
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
  }, o = function(e, r) {
    var o = r || t;
    return i[e] = e, "object" == typeof e ? e instanceof Array ? n.getFromArray(e, o) : n.getFromObjectKeys(e, o) : n.getFromKey(e, o);
  }, s = function(e) {
    var t = Date.Config.i18n + e + ".js", i = document.getElementsByTagName("head")[0] || document.documentElement, n = document.createElement("script");
    n.src = t;
    var r = !1, o = {
      done: function() {}
    };
    return n.onload = n.onreadystatechange = function() {
      r || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (o.done(), 
      i.removeChild(n));
    }, setTimeout(function() {
      i.insertBefore(n, i.firstChild);
    }, 0), {
      done: function(e) {
        o.done = function() {
          e && setTimeout(e, 0);
        };
      }
    };
  }, a = {
    buildFromMethodHash: function(e) {
      var t;
      for (t in e) e.hasOwnProperty(t) && (e[t] = a[e[t]]());
      return e;
    },
    timeZoneDST: function() {
      return o({
        CHADT: "+1345",
        NZDT: "+1300",
        AEDT: "+1100",
        ACDT: "+1030",
        AZST: "+0500",
        IRDT: "+0430",
        EEST: "+0300",
        CEST: "+0200",
        BST: "+0100",
        PMDT: "-0200",
        ADT: "-0300",
        NDT: "-0230",
        EDT: "-0400",
        CDT: "-0500",
        MDT: "-0600",
        PDT: "-0700",
        AKDT: "-0800",
        HADT: "-0900"
      });
    },
    timeZoneStandard: function() {
      return o({
        LINT: "+1400",
        TOT: "+1300",
        CHAST: "+1245",
        NZST: "+1200",
        NFT: "+1130",
        SBT: "+1100",
        AEST: "+1000",
        ACST: "+0930",
        JST: "+0900",
        CWST: "+0845",
        CT: "+0800",
        ICT: "+0700",
        MMT: "+0630",
        BST: "+0600",
        NPT: "+0545",
        IST: "+0530",
        PKT: "+0500",
        AFT: "+0430",
        MSK: "+0400",
        IRST: "+0330",
        FET: "+0300",
        EET: "+0200",
        CET: "+0100",
        GMT: "+0000",
        UTC: "+0000",
        CVT: "-0100",
        GST: "-0200",
        BRT: "-0300",
        NST: "-0330",
        AST: "-0400",
        EST: "-0500",
        CST: "-0600",
        MST: "-0700",
        PST: "-0800",
        AKST: "-0900",
        MIT: "-0930",
        HST: "-1000",
        SST: "-1100",
        BIT: "-1200"
      });
    },
    timeZones: function(e) {
      var t;
      for (t in e.timezones = [], e.abbreviatedTimeZoneStandard) e.abbreviatedTimeZoneStandard.hasOwnProperty(t) && e.timezones.push({
        name: t,
        offset: e.abbreviatedTimeZoneStandard[t]
      });
      for (t in e.abbreviatedTimeZoneDST) e.abbreviatedTimeZoneDST.hasOwnProperty(t) && e.timezones.push({
        name: t,
        offset: e.abbreviatedTimeZoneDST[t],
        dst: !0
      });
      return e.timezones;
    },
    days: function() {
      return o([ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]);
    },
    dayAbbr: function() {
      return o([ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]);
    },
    dayShortNames: function() {
      return o([ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ]);
    },
    dayFirstLetters: function() {
      return o([ "S_Sun_Initial", "M_Mon_Initial", "T_Tues_Initial", "W_Wed_Initial", "T_Thu_Initial", "F_Fri_Initial", "S_Sat_Initial" ]);
    },
    months: function() {
      return o([ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]);
    },
    monthAbbr: function() {
      return o([ "Jan_Abbr", "Feb_Abbr", "Mar_Abbr", "Apr_Abbr", "May_Abbr", "Jun_Abbr", "Jul_Abbr", "Aug_Abbr", "Sep_Abbr", "Oct_Abbr", "Nov_Abbr", "Dec_Abbr" ]);
    },
    formatPatterns: function() {
      return n.getFromObjectValues({
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
      }, Date.i18n.currentLanguage());
    },
    regex: function() {
      return n.getFromObjectValues({
        inTheMorning: "/( in the )(morn(ing)?)\\b/",
        thisMorning: "/(this )(morn(ing)?)\\b/",
        amThisMorning: "/(\b\\d(am)? )(this )(morn(ing)?)/",
        inTheEvening: "/( in the )(even(ing)?)\\b/",
        thisEvening: "/(this )(even(ing)?)\\b/",
        pmThisEvening: "/(\b\\d(pm)? )(this )(even(ing)?)/",
        jan: "/jan(uary)?/",
        feb: "/feb(ruary)?/",
        mar: "/mar(ch)?/",
        apr: "/apr(il)?/",
        may: "/may/",
        jun: "/jun(e)?/",
        jul: "/jul(y)?/",
        aug: "/aug(ust)?/",
        sep: "/sep(t(ember)?)?/",
        oct: "/oct(ober)?/",
        nov: "/nov(ember)?/",
        dec: "/dec(ember)?/",
        sun: "/^su(n(day)?)?/",
        mon: "/^mo(n(day)?)?/",
        tue: "/^tu(e(s(day)?)?)?/",
        wed: "/^we(d(nesday)?)?/",
        thu: "/^th(u(r(s(day)?)?)?)?/",
        fri: "/fr(i(day)?)?/",
        sat: "/^sa(t(urday)?)?/",
        future: "/^next/",
        past: "/^last|past|prev(ious)?/",
        add: "/^(\\+|aft(er)?|from|hence)/",
        subtract: "/^(\\-|bef(ore)?|ago)/",
        yesterday: "/^yes(terday)?/",
        today: "/^t(od(ay)?)?/",
        tomorrow: "/^tom(orrow)?/",
        now: "/^n(ow)?/",
        millisecond: "/^ms|milli(second)?s?/",
        second: "/^sec(ond)?s?/",
        minute: "/^mn|min(ute)?s?/",
        hour: "/^h(our)?s?/",
        week: "/^w(eek)?s?/",
        month: "/^m(onth)?s?/",
        day: "/^d(ay)?s?/",
        year: "/^y(ear)?s?/",
        shortMeridian: "/^(a|p)/",
        longMeridian: "/^(a\\.?m?\\.?|p\\.?m?\\.?)/",
        timezone: "/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\\s*(\\+|\\-)\\s*\\d\\d\\d\\d?)|gmt|utc)/",
        ordinalSuffix: "/^\\s*(st|nd|rd|th)/",
        timeContext: "/^\\s*(\\:|a(?!u|p)|p)/"
      }, Date.i18n.currentLanguage());
    }
  }, l = function() {
    var e = n.getFromObjectValues({
      name: "name",
      englishName: "englishName",
      nativeName: "nativeName",
      amDesignator: "AM",
      pmDesignator: "PM",
      firstDayOfWeek: "firstDayOfWeek",
      twoDigitYearMax: "twoDigitYearMax",
      dateElementOrder: "mdy"
    }, Date.i18n.currentLanguage()), t = a.buildFromMethodHash({
      dayNames: "days",
      abbreviatedDayNames: "dayAbbr",
      shortestDayNames: "dayShortNames",
      firstLetterDayNames: "dayFirstLetters",
      monthNames: "months",
      abbreviatedMonthNames: "monthAbbr",
      formatPatterns: "formatPatterns",
      regexPatterns: "regex",
      abbreviatedTimeZoneDST: "timeZoneDST",
      abbreviatedTimeZoneStandard: "timeZoneStandard"
    });
    return r(e, t), a.timeZones(e), e;
  };
  e.i18n = {
    __: function(e, t) {
      return o(e, t);
    },
    currentLanguage: function() {
      return t || "en-US";
    },
    setLanguage: function(i, n, r) {
      var o = !1;
      if (n || "en-US" === i || Date.CultureStrings && Date.CultureStrings[i]) t = i, 
      Date.CultureStrings = Date.CultureStrings || {}, Date.CultureStrings.lang = i, Date.CultureInfo = new l(); else if (!Date.CultureStrings || !Date.CultureStrings[i]) if ("undefined" != typeof exports && this.exports !== exports) try {
        require("../i18n/" + i + ".js"), t = i, Date.CultureStrings.lang = i, Date.CultureInfo = new l();
      } catch (a) {
        throw new Error("The DateJS IETF language tag '" + i + "' could not be loaded by Node. It likely does not exist.");
      } else {
        if (!Date.Config || !Date.Config.i18n) return Date.console.error("The DateJS IETF language tag '" + i + "' is not available and has not been loaded."), 
        !1;
        o = !0, s(i).done(function() {
          t = i, Date.CultureStrings = Date.CultureStrings || {}, Date.CultureStrings.lang = i, 
          Date.CultureInfo = new l(), e.Parsing.Normalizer.buildReplaceData(), e.Grammar && e.Grammar.buildGrammarFormats(), 
          r && setTimeout(r, 0);
        });
      }
      e.Parsing.Normalizer.buildReplaceData(), e.Grammar && e.Grammar.buildGrammarFormats(), 
      !o && r && setTimeout(r, 0);
    },
    getLoggedKeys: function() {
      return i;
    },
    updateCultureInfo: function() {
      Date.CultureInfo = new l();
    }
  }, e.i18n.updateCultureInfo();
}(), function() {
  var e = Date, t = e.prototype, i = function(e, t) {
    return t || (t = 2), ("000" + e).slice(-1 * t);
  };
  "undefined" != typeof window && "undefined" != typeof window.console && "undefined" != typeof window.console.log ? e.console = console : e.console = {
    log: function() {},
    error: function() {}
  }, e.Config = e.Config || {}, e.initOverloads = function() {
    e.now ? e._now || (e._now = e.now) : e._now = function() {
      return new Date().getTime();
    }, e.now = function(t) {
      return t ? e.present() : e._now();
    }, t.toISOString || (t.toISOString = function() {
      return this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z";
    }), t._toString === undefined && (t._toString = t.toString);
  }, e.initOverloads(), e.today = function() {
    return new Date().clearTime();
  }, e.present = function() {
    return new Date();
  }, e.compare = function(e, t) {
    if (isNaN(e) || isNaN(t)) throw new Error(e + " - " + t);
    if (e instanceof Date && t instanceof Date) return e < t ? -1 : e > t ? 1 : 0;
    throw new TypeError(e + " - " + t);
  }, e.equals = function(e, t) {
    return 0 === e.compareTo(t);
  }, e.getDayName = function(e) {
    return Date.CultureInfo.dayNames[e];
  }, e.getDayNumberFromName = function(e) {
    for (var t = Date.CultureInfo.dayNames, i = Date.CultureInfo.abbreviatedDayNames, n = Date.CultureInfo.shortestDayNames, r = e.toLowerCase(), o = 0; o < t.length; o++) if (t[o].toLowerCase() === r || i[o].toLowerCase() === r || n[o].toLowerCase() === r) return o;
    return -1;
  }, e.getMonthNumberFromName = function(e) {
    for (var t = Date.CultureInfo.monthNames, i = Date.CultureInfo.abbreviatedMonthNames, n = e.toLowerCase(), r = 0; r < t.length; r++) if (t[r].toLowerCase() === n || i[r].toLowerCase() === n) return r;
    return -1;
  }, e.getMonthName = function(e) {
    return Date.CultureInfo.monthNames[e];
  }, e.isLeapYear = function(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  }, e.getDaysInMonth = function(t, i) {
    return !i && e.validateMonth(t) && (i = t, t = Date.today().getFullYear()), [ 31, e.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][i];
  }, t.getDaysInMonth = function() {
    return e.getDaysInMonth(this.getFullYear(), this.getMonth());
  }, e.getTimezoneAbbreviation = function(e, t) {
    var i, n = t ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard;
    for (i in n) if (n.hasOwnProperty(i) && n[i] === e) return i;
    return null;
  }, e.getTimezoneOffset = function(e, t) {
    var i, n = [], r = Date.CultureInfo.timezones;
    for (e || (e = new Date().getTimezone()), i = 0; i < r.length; i++) r[i].name === e.toUpperCase() && n.push(i);
    if (!r[n[0]]) return null;
    if (1 === n.length || !t) return r[n[0]].offset;
    for (i = 0; i < n.length; i++) if (r[n[i]].dst) return r[n[i]].offset;
  }, e.getQuarter = function(e) {
    return e = e || new Date(), [ 1, 2, 3, 4 ][Math.floor(e.getMonth() / 3)];
  }, e.getDaysLeftInQuarter = function(e) {
    e = e || new Date();
    var t = new Date(e);
    return t.setMonth(t.getMonth() + 3 - t.getMonth() % 3, 0), Math.floor((t - e) / 864e5);
  };
  var n = function(e, t, i, n) {
    if (n = n || "Object", void 0 === e) return !1;
    if ("number" != typeof e) throw new TypeError(e + " is not a Number.");
    return !(e < t || e > i);
  };
  e.validateMillisecond = function(e) {
    return n(e, 0, 999, "millisecond");
  }, e.validateSecond = function(e) {
    return n(e, 0, 59, "second");
  }, e.validateMinute = function(e) {
    return n(e, 0, 59, "minute");
  }, e.validateHour = function(e) {
    return n(e, 0, 23, "hour");
  }, e.validateDay = function(t, i, r) {
    return i !== undefined && null !== i && r !== undefined && null !== r && n(t, 1, e.getDaysInMonth(i, r), "day");
  }, e.validateWeek = function(e) {
    return n(e, 0, 53, "week");
  }, e.validateMonth = function(e) {
    return n(e, 0, 11, "month");
  }, e.validateYear = function(e) {
    return n(e, -271822, 275760, "year");
  }, e.validateTimezone = function(e) {
    return 1 === {
      ACDT: 1,
      ACST: 1,
      ACT: 1,
      ADT: 1,
      AEDT: 1,
      AEST: 1,
      AFT: 1,
      AKDT: 1,
      AKST: 1,
      AMST: 1,
      AMT: 1,
      ART: 1,
      AST: 1,
      AWDT: 1,
      AWST: 1,
      AZOST: 1,
      AZT: 1,
      BDT: 1,
      BIOT: 1,
      BIT: 1,
      BOT: 1,
      BRT: 1,
      BST: 1,
      BTT: 1,
      CAT: 1,
      CCT: 1,
      CDT: 1,
      CEDT: 1,
      CEST: 1,
      CET: 1,
      CHADT: 1,
      CHAST: 1,
      CHOT: 1,
      ChST: 1,
      CHUT: 1,
      CIST: 1,
      CIT: 1,
      CKT: 1,
      CLST: 1,
      CLT: 1,
      COST: 1,
      COT: 1,
      CST: 1,
      CT: 1,
      CVT: 1,
      CWST: 1,
      CXT: 1,
      DAVT: 1,
      DDUT: 1,
      DFT: 1,
      EASST: 1,
      EAST: 1,
      EAT: 1,
      ECT: 1,
      EDT: 1,
      EEDT: 1,
      EEST: 1,
      EET: 1,
      EGST: 1,
      EGT: 1,
      EIT: 1,
      EST: 1,
      FET: 1,
      FJT: 1,
      FKST: 1,
      FKT: 1,
      FNT: 1,
      GALT: 1,
      GAMT: 1,
      GET: 1,
      GFT: 1,
      GILT: 1,
      GIT: 1,
      GMT: 1,
      GST: 1,
      GYT: 1,
      HADT: 1,
      HAEC: 1,
      HAST: 1,
      HKT: 1,
      HMT: 1,
      HOVT: 1,
      HST: 1,
      ICT: 1,
      IDT: 1,
      IOT: 1,
      IRDT: 1,
      IRKT: 1,
      IRST: 1,
      IST: 1,
      JST: 1,
      KGT: 1,
      KOST: 1,
      KRAT: 1,
      KST: 1,
      LHST: 1,
      LINT: 1,
      MAGT: 1,
      MART: 1,
      MAWT: 1,
      MDT: 1,
      MET: 1,
      MEST: 1,
      MHT: 1,
      MIST: 1,
      MIT: 1,
      MMT: 1,
      MSK: 1,
      MST: 1,
      MUT: 1,
      MVT: 1,
      MYT: 1,
      NCT: 1,
      NDT: 1,
      NFT: 1,
      NPT: 1,
      NST: 1,
      NT: 1,
      NUT: 1,
      NZDT: 1,
      NZST: 1,
      OMST: 1,
      ORAT: 1,
      PDT: 1,
      PET: 1,
      PETT: 1,
      PGT: 1,
      PHOT: 1,
      PHT: 1,
      PKT: 1,
      PMDT: 1,
      PMST: 1,
      PONT: 1,
      PST: 1,
      PYST: 1,
      PYT: 1,
      RET: 1,
      ROTT: 1,
      SAKT: 1,
      SAMT: 1,
      SAST: 1,
      SBT: 1,
      SCT: 1,
      SGT: 1,
      SLST: 1,
      SRT: 1,
      SST: 1,
      SYOT: 1,
      TAHT: 1,
      THA: 1,
      TFT: 1,
      TJT: 1,
      TKT: 1,
      TLT: 1,
      TMT: 1,
      TOT: 1,
      TVT: 1,
      UCT: 1,
      ULAT: 1,
      UTC: 1,
      UYST: 1,
      UYT: 1,
      UZT: 1,
      VET: 1,
      VLAT: 1,
      VOLT: 1,
      VOST: 1,
      VUT: 1,
      WAKT: 1,
      WAST: 1,
      WAT: 1,
      WEDT: 1,
      WEST: 1,
      WET: 1,
      WST: 1,
      YAKT: 1,
      YEKT: 1,
      Z: 1
    }[e];
  }, e.validateTimezoneOffset = function(e) {
    return e > -841 && e < 721;
  };
}(), function() {
  var e = Date, t = e.prototype, i = function(e, t) {
    return t || (t = 2), ("000" + e).slice(-1 * t);
  }, n = function(t) {
    var i, n, r = {}, o = this;
    for (i in n = function(i, n, r) {
      if ("day" === i) {
        var s = t.month !== undefined ? t.month : o.getMonth(), a = t.year !== undefined ? t.year : o.getFullYear();
        return e[n](r, a, s);
      }
      return e[n](r);
    }, t) if (hasOwnProperty.call(t, i)) {
      var s = "validate" + i.charAt(0).toUpperCase() + i.slice(1);
      e[s] && null !== t[i] && n(i, s, t[i]) && (r[i] = t[i]);
    }
    return r;
  };
  t.clearTime = function() {
    return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), 
    this;
  }, t.setTimeToNow = function() {
    var e = new Date();
    return this.setHours(e.getHours()), this.setMinutes(e.getMinutes()), this.setSeconds(e.getSeconds()), 
    this.setMilliseconds(e.getMilliseconds()), this;
  }, t.clone = function() {
    return new Date(this.getTime());
  }, t.compareTo = function(e) {
    return Date.compare(this, e);
  }, t.equals = function(e) {
    return Date.equals(this, e !== undefined ? e : new Date());
  }, t.between = function(e, t) {
    return this.getTime() >= e.getTime() && this.getTime() <= t.getTime();
  }, t.isAfter = function(e) {
    return 1 === this.compareTo(e || new Date());
  }, t.isBefore = function(e) {
    return -1 === this.compareTo(e || new Date());
  }, t.isToday = t.isSameDay = function(e) {
    return this.clone().clearTime().equals((e || new Date()).clone().clearTime());
  }, t.addMilliseconds = function(e) {
    return e ? (this.setTime(this.getTime() + 1 * e), this) : this;
  }, t.addSeconds = function(e) {
    return e ? this.addMilliseconds(1e3 * e) : this;
  }, t.addMinutes = function(e) {
    return e ? this.addMilliseconds(6e4 * e) : this;
  }, t.addHours = function(e) {
    return e ? this.addMilliseconds(36e5 * e) : this;
  }, t.addDays = function(e) {
    return e ? (this.setDate(this.getDate() + 1 * e), this) : this;
  }, t.addWeekdays = function(e) {
    if (!e) return this;
    var t = this.getDay(), i = Math.ceil(Math.abs(e) / 7);
    if (0 !== t && 6 !== t || e > 0 && (this.next().monday(), this.addDays(-1), t = this.getDay()), 
    e < 0) {
      for (;e < 0; ) this.addDays(-1), 0 !== (t = this.getDay()) && 6 !== t && e++;
      return this;
    }
    return (e > 5 || 6 - t <= e) && (e += 2 * i), this.addDays(e);
  }, t.addWeeks = function(e) {
    return e ? this.addDays(7 * e) : this;
  }, t.addMonths = function(t) {
    if (!t) return this;
    var i = this.getDate();
    return this.setDate(1), this.setMonth(this.getMonth() + 1 * t), this.setDate(Math.min(i, e.getDaysInMonth(this.getFullYear(), this.getMonth()))), 
    this;
  }, t.addQuarters = function(e) {
    return e ? this.addMonths(3 * e) : this;
  }, t.addYears = function(e) {
    return e ? this.addMonths(12 * e) : this;
  }, t.add = function(e) {
    if ("number" == typeof e) return this._orient = e, this;
    var t = e;
    return t.day && t.day - this.getDate() != 0 && this.setDate(t.day), t.milliseconds && this.addMilliseconds(t.milliseconds), 
    t.seconds && this.addSeconds(t.seconds), t.minutes && this.addMinutes(t.minutes), 
    t.hours && this.addHours(t.hours), t.weeks && this.addWeeks(t.weeks), t.months && this.addMonths(t.months), 
    t.years && this.addYears(t.years), t.days && this.addDays(t.days), this;
  }, t.getWeek = function(e) {
    var t, i = new Date(this.valueOf());
    e ? (i.addMinutes(i.getTimezoneOffset()), t = i.clone()) : t = this;
    var n = (t.getDay() + 6) % 7;
    i.setDate(i.getDate() - n + 3);
    var r = i.valueOf();
    return i.setMonth(0, 1), 4 !== i.getDay() && i.setMonth(0, 1 + (4 - i.getDay() + 7) % 7), 
    1 + Math.ceil((r - i) / 6048e5);
  }, t.getISOWeek = function() {
    return i(this.getWeek(!0));
  }, t.setWeek = function(e) {
    return e - this.getWeek() == 0 ? 1 !== this.getDay() ? this.moveToDayOfWeek(1, this.getDay() > 1 ? -1 : 1) : this : this.moveToDayOfWeek(1, this.getDay() > 1 ? -1 : 1).addWeeks(e - this.getWeek());
  }, t.setQuarter = function(e) {
    var t = Math.abs(3 * (e - 1) + 1);
    return this.setMonth(t, 1);
  }, t.getQuarter = function() {
    return Date.getQuarter(this);
  }, t.getDaysLeftInQuarter = function() {
    return Date.getDaysLeftInQuarter(this);
  }, t.moveToNthOccurrence = function(e, t) {
    if ("Weekday" === e) {
      if (t > 0) this.moveToFirstDayOfMonth(), this.is().weekday() && (t -= 1); else {
        if (!(t < 0)) return this;
        this.moveToLastDayOfMonth(), this.is().weekday() && (t += 1);
      }
      return this.addWeekdays(t);
    }
    var i = 0;
    if (t > 0) i = t - 1; else if (-1 === t) return this.moveToLastDayOfMonth(), this.getDay() !== e && this.moveToDayOfWeek(e, -1), 
    this;
    return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(e, 1).addWeeks(i);
  };
  var r = function(e, t, i) {
    return function(n, r) {
      var o = (n - this[e]() + i * (r || 1)) % i;
      return this[t](0 === o ? o += i * (r || 1) : o);
    };
  };
  t.moveToDayOfWeek = r("getDay", "addDays", 7), t.moveToMonth = r("getMonth", "addMonths", 12), 
  t.getOrdinate = function() {
    var e = this.getDate();
    return o(e);
  }, t.getOrdinalNumber = function() {
    return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 864e5) + 1;
  }, t.getTimezone = function() {
    return e.getTimezoneAbbreviation(this.getUTCOffset(), this.isDaylightSavingTime());
  }, t.setTimezoneOffset = function(e) {
    var t = this.getTimezoneOffset(), i = -6 * Number(e) / 10;
    return i || 0 === i ? this.addMinutes(i - t) : this;
  }, t.setTimezone = function(t) {
    return this.setTimezoneOffset(e.getTimezoneOffset(t));
  }, t.hasDaylightSavingTime = function() {
    return Date.today().set({
      month: 0,
      day: 1
    }).getTimezoneOffset() !== Date.today().set({
      month: 6,
      day: 1
    }).getTimezoneOffset();
  }, t.isDaylightSavingTime = function() {
    return Date.today().set({
      month: 0,
      day: 1
    }).getTimezoneOffset() !== this.getTimezoneOffset();
  }, t.getUTCOffset = function(e) {
    var t, i = -10 * (e || this.getTimezoneOffset()) / 6;
    return i < 0 ? (t = (i - 1e4).toString()).charAt(0) + t.substr(2) : "+" + (t = (i + 1e4).toString()).substr(1);
  }, t.getElapsed = function(e) {
    return (e || new Date()) - this;
  }, t.set = function(e) {
    var t;
    for (t in e = n.call(this, e)) if (hasOwnProperty.call(e, t)) {
      var i, r, o = t.charAt(0).toUpperCase() + t.slice(1);
      "week" !== t && "month" !== t && "timezone" !== t && "timezoneOffset" !== t && (o += "s"), 
      i = "add" + o, r = "get" + o, "month" === t ? i += "s" : "year" === t && (r = "getFullYear"), 
      "day" !== t && "timezone" !== t && "timezoneOffset" !== t && "week" !== t && "hour" !== t ? this[i](e[t] - this[r]()) : "timezone" !== t && "timezoneOffset" !== t && "week" !== t && "hour" !== t || this["set" + o](e[t]);
    }
    return e.day && this.addDays(e.day - this.getDate()), this;
  }, t.moveToFirstDayOfMonth = function() {
    return this.set({
      day: 1
    });
  }, t.moveToLastDayOfMonth = function() {
    return this.set({
      day: e.getDaysInMonth(this.getFullYear(), this.getMonth())
    });
  };
  var o = function(e) {
    switch (1 * e) {
     case 1:
     case 21:
     case 31:
      return "st";

     case 2:
     case 22:
      return "nd";

     case 3:
     case 23:
      return "rd";

     default:
      return "th";
    }
  }, s = function(e) {
    var t = Date.CultureInfo.formatPatterns;
    switch (e) {
     case "d":
      return this.toString(t.shortDate);

     case "D":
      return this.toString(t.longDate);

     case "F":
      return this.toString(t.fullDateTime);

     case "m":
      return this.toString(t.monthDay);

     case "r":
     case "R":
      return this.clone().addMinutes(this.getTimezoneOffset()).toString(t.rfc1123) + " GMT";

     case "s":
      return this.toString(t.sortableDateTime);

     case "t":
      return this.toString(t.shortTime);

     case "T":
      return this.toString(t.longTime);

     case "u":
      return this.clone().addMinutes(this.getTimezoneOffset()).toString(t.universalSortableDateTime);

     case "y":
      return this.toString(t.yearMonth);

     default:
      return !1;
    }
  }, a = function(t) {
    return function(n) {
      if ("\\" === n.charAt(0)) return n.replace("\\", "");
      switch (n) {
       case "hh":
        return i(t.getHours() < 13 ? 0 === t.getHours() ? 12 : t.getHours() : t.getHours() - 12);

       case "h":
        return t.getHours() < 13 ? 0 === t.getHours() ? 12 : t.getHours() : t.getHours() - 12;

       case "HH":
        return i(t.getHours());

       case "H":
        return t.getHours();

       case "mm":
        return i(t.getMinutes());

       case "m":
        return t.getMinutes();

       case "ss":
        return i(t.getSeconds());

       case "s":
        return t.getSeconds();

       case "yyyy":
        return i(t.getFullYear(), 4);

       case "yy":
        return i(t.getFullYear());

       case "y":
        return t.getFullYear();

       case "E":
       case "dddd":
        return Date.CultureInfo.dayNames[t.getDay()];

       case "ddd":
        return Date.CultureInfo.abbreviatedDayNames[t.getDay()];

       case "dd":
        return i(t.getDate());

       case "d":
        return t.getDate();

       case "MMMM":
        return Date.CultureInfo.monthNames[t.getMonth()];

       case "MMM":
        return Date.CultureInfo.abbreviatedMonthNames[t.getMonth()];

       case "MM":
        return i(t.getMonth() + 1);

       case "M":
        return t.getMonth() + 1;

       case "t":
        return t.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);

       case "tt":
        return t.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;

       case "S":
        return o(t.getDate());

       case "W":
        return t.getWeek();

       case "WW":
        return t.getISOWeek();

       case "Q":
        return "Q" + t.getQuarter();

       case "q":
        return String(t.getQuarter());

       case "z":
        return t.getTimezone();

       case "Z":
       case "X":
        return Date.getTimezoneOffset(t.getTimezone());

       case "ZZ":
        return -60 * t.getTimezoneOffset();

       case "u":
        return t.getDay();

       case "L":
        return e.isLeapYear(t.getFullYear()) ? 1 : 0;

       case "B":
        return "@" + (t.getUTCSeconds() + 60 * t.getUTCMinutes() + 3600 * (t.getUTCHours() + 1)) / 86.4;

       default:
        return n;
      }
    };
  };
  t.toString = function(e, t) {
    if (!t && e && 1 === e.length && (output = s.call(this, e), output)) return output;
    var i = a(this);
    return e ? e.replace(/((\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S|q|Q|WW?W?W?)(?![^\[]*\]))/g, i).replace(/\[|\]/g, "") : this._toString();
  };
}(), function() {
  var e = Date, t = e.prototype, i = Number.prototype;
  t._orient = 1, t._nth = null, t._is = !1, t._same = !1, t._isSecond = !1, i._dateElement = "days", 
  t.next = function() {
    return this._move = !0, this._orient = 1, this;
  }, e.next = function() {
    return e.today().next();
  }, t.last = t.prev = t.previous = function() {
    return this._move = !0, this._orient = -1, this;
  }, e.last = e.prev = e.previous = function() {
    return e.today().last();
  }, t.is = function() {
    return this._is = !0, this;
  }, t.same = function() {
    return this._same = !0, this._isSecond = !1, this;
  }, t.today = function() {
    return this.same().day();
  }, t.weekday = function() {
    return this._nth ? u("Weekday").call(this) : this._move ? this.addWeekdays(this._orient) : !!this._is && (this._is = !1, 
    !this.is().sat() && !this.is().sun());
  }, t.weekend = function() {
    return !!this._is && (this._is = !1, this.is().sat() || this.is().sun());
  }, t.at = function(t) {
    return "string" == typeof t ? e.parse(this.toString("d") + " " + t) : this.set(t);
  }, i.fromNow = i.after = function(e) {
    var t = {};
    return t[this._dateElement] = this, (e ? e.clone() : new Date()).add(t);
  }, i.ago = i.before = function(e) {
    var t = {};
    return t["s" !== this._dateElement[this._dateElement.length - 1] ? this._dateElement + "s" : this._dateElement] = -1 * this, 
    (e ? e.clone() : new Date()).add(t);
  };
  var n, r = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/), o = "january february march april may june july august september october november december".split(/\s/), s = "Millisecond Second Minute Hour Day Week Month Year Quarter Weekday".split(/\s/), a = "Milliseconds Seconds Minutes Hours Date Week Month FullYear Quarter".split(/\s/), l = "final first second third fourth fifth".split(/\s/);
  t.toObject = function() {
    for (var e = {}, t = 0; t < s.length; t++) this["get" + a[t]] && (e[s[t].toLowerCase()] = this["get" + a[t]]());
    return e;
  }, e.fromObject = function(e) {
    return e.week = null, Date.today().set(e);
  };
  var u = function(t) {
    return function() {
      if (this._is) return this._is = !1, this.getDay() === t;
      if (this._move && (this._move = null), null !== this._nth) {
        this._isSecond && this.addSeconds(-1 * this._orient), this._isSecond = !1;
        var i = this._nth;
        this._nth = null;
        var n = this.clone().moveToLastDayOfMonth();
        if (this.moveToNthOccurrence(t, i), this > n) throw new RangeError(e.getDayName(t) + " does not occur " + i + " times in the month of " + e.getMonthName(n.getMonth()) + " " + n.getFullYear() + ".");
        return this;
      }
      return this.moveToDayOfWeek(t, this._orient);
    };
  }, c = function(e) {
    return function() {
      return this._is ? (this._is = !1, this.getMonth() === e) : this.moveToMonth(e, this._orient);
    };
  }, d = function(t) {
    return function() {
      return e.today().set({
        month: t,
        day: 1
      });
    };
  }, h = function(i, n, r) {
    for (var o = 0; o < i.length; o++) e[i[o].toUpperCase()] = e[i[o].toUpperCase().substring(0, 3)] = o, 
    e[i[o]] = e[i[o].substring(0, 3)] = n(o), t[i[o]] = t[i[o].substring(0, 3)] = r(o);
  };
  h(r, function(t) {
    return function() {
      var i = e.today(), n = t - i.getDay();
      return 0 === t && 1 === Date.CultureInfo.firstDayOfWeek && 0 !== i.getDay() && (n += 7), 
      i.addDays(n);
    };
  }, u), h(o, d, c);
  for (var f = function(e) {
    return function() {
      if (this._isSecond) return this._isSecond = !1, this;
      if (this._same) {
        this._same = this._is = !1;
        var t = this.toObject(), i = (arguments[0] || new Date()).toObject(), n = "", r = e.toLowerCase();
        r = "s" === r[r.length - 1] ? r.substring(0, r.length - 1) : r;
        for (var o = s.length - 1; o > -1; o--) {
          if (t[n = s[o].toLowerCase()] !== i[n]) return !1;
          if (r === n) break;
        }
        return !0;
      }
      return "s" !== e.substring(e.length - 1) && (e += "s"), this._move && (this._move = null), 
      this["add" + e](this._orient);
    };
  }, p = function(e) {
    return function() {
      return this._dateElement = e, this;
    };
  }, m = 0; m < s.length; m++) "weekday" !== (n = s[m].toLowerCase()) && (t[n] = t[n + "s"] = f(s[m]), 
  i[n] = i[n + "s"] = p(n + "s"));
  t._ss = f("Second");
  for (var g = function(e) {
    return function(t) {
      return this._same ? this._ss(arguments[0]) : t || 0 === t ? this.moveToNthOccurrence(t, e) : (this._nth = e, 
      2 !== e || t !== undefined && null !== t ? this : (this._isSecond = !0, this.addSeconds(this._orient)));
    };
  }, v = 0; v < l.length; v++) t[l[v]] = g(0 === v ? -1 : v);
}(), function() {
  "use strict";
  Date.Parsing = {
    Exception: function(e) {
      this.message = "Parse error at '" + e.substring(0, 10) + " ...'";
    }
  };
  var e = Date.Parsing, t = {
    standard: [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ],
    leap: [ 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335 ]
  };
  e.isLeapYear = function(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  };
  var i = {
    multiReplace: function(e, t) {
      var i;
      for (i in t) {
        var n;
        if (Object.prototype.hasOwnProperty.call(t, i)) "function" == typeof t[i] || (n = t[i] instanceof RegExp ? t[i] : new RegExp(t[i], "g")), 
        e = e.replace(n, i);
      }
      return e;
    },
    getDayOfYearFromWeek: function(e) {
      var t, i;
      return e.weekDay = e.weekDay || 0 === e.weekDay ? e.weekDay : 1, i = (0 === (t = new Date(e.year, 0, 4)).getDay() ? 7 : t.getDay()) + 3, 
      e.dayOfYear = 7 * e.week + (0 === e.weekDay ? 7 : e.weekDay) - i, e;
    },
    getDayOfYear: function(e, t) {
      e.dayOfYear || (e = i.getDayOfYearFromWeek(e));
      for (var n = 0; n <= t.length; n++) {
        if (e.dayOfYear < t[n] || n === t.length) {
          e.day = e.day ? e.day : e.dayOfYear - t[n - 1];
          break;
        }
        e.month = n;
      }
      return e;
    },
    adjustForTimeZone: function(e, t) {
      var i;
      return "Z" === e.zone.toUpperCase() || 0 === e.zone_hours && 0 === e.zone_minutes ? i = -t.getTimezoneOffset() : (i = 60 * e.zone_hours + (e.zone_minutes || 0), 
      "+" === e.zone_sign && (i *= -1), i -= t.getTimezoneOffset()), t.setMinutes(t.getMinutes() + i), 
      t;
    },
    setDefaults: function(e) {
      return e.year = e.year || Date.today().getFullYear(), e.hours = e.hours || 0, e.minutes = e.minutes || 0, 
      e.seconds = e.seconds || 0, e.milliseconds = e.milliseconds || 0, (e.month || !e.week && !e.dayOfYear) && (e.month = e.month || 0, 
      e.day = e.day || 1), e;
    },
    dataNum: function(e, t, i, n) {
      var r = 1 * e;
      return t ? n ? e ? 1 * t(e) : e : e ? t(r) : e : i ? e && void 0 !== e ? r : e : e ? r : e;
    },
    timeDataProcess: function(e) {
      var t = {};
      for (var n in e.data) e.data.hasOwnProperty(n) && (t[n] = e.ignore[n] ? e.data[n] : i.dataNum(e.data[n], e.mods[n], e.explict[n], e.postProcess[n]));
      return e.data.secmins && (e.data.secmins = 60 * e.data.secmins.replace(",", "."), 
      t.minutes ? t.seconds || (t.seconds = e.data.secmins) : t.minutes = e.data.secmins, 
      delete e.secmins), t;
    },
    buildTimeObjectFromData: function(e) {
      return i.timeDataProcess({
        data: {
          year: e[1],
          month: e[5],
          day: e[7],
          week: e[8],
          dayOfYear: e[10],
          hours: e[15],
          zone_hours: e[23],
          zone_minutes: e[24],
          zone: e[21],
          zone_sign: e[22],
          weekDay: e[9],
          minutes: e[16],
          seconds: e[19],
          milliseconds: e[20],
          secmins: e[18]
        },
        mods: {
          month: function(e) {
            return e - 1;
          },
          weekDay: function(e) {
            return 7 === (e = Math.abs(e)) ? 0 : e;
          },
          minutes: function(e) {
            return e.replace(":", "");
          },
          seconds: function(e) {
            return Math.floor(1 * e.replace(":", "").replace(",", "."));
          },
          milliseconds: function(e) {
            return 1e3 * e.replace(",", ".");
          }
        },
        postProcess: {
          minutes: !0,
          seconds: !0,
          milliseconds: !0
        },
        explict: {
          zone_hours: !0,
          zone_minutes: !0
        },
        ignore: {
          zone: !0,
          zone_sign: !0,
          secmins: !0
        }
      });
    },
    addToHash: function(e, t, i) {
      i = i;
      for (var n = (t = t).length, r = 0; r < n; r++) e[t[r]] = i[r];
      return e;
    },
    combineRegex: function(e, t) {
      return new RegExp("((" + e.source + ")\\s(" + t.source + "))");
    },
    getDateNthString: function(e, t, i) {
      return e ? Date.today().addDays(i).toString("d") : t ? Date.today().last()[i]().toString("d") : void 0;
    },
    buildRegexData: function(e) {
      for (var t = [], i = e.length, n = 0; n < i; n++) "[object Array]" === Object.prototype.toString.call(e[n]) ? t.push(this.combineRegex(e[n][0], e[n][1])) : t.push(e[n]);
      return t;
    }
  };
  e.processTimeObject = function(n) {
    var r, o;
    return i.setDefaults(n), o = e.isLeapYear(n.year) ? t.leap : t.standard, n.month || !n.week && !n.dayOfYear ? n.dayOfYear = o[n.month] + n.day : i.getDayOfYear(n, o), 
    r = new Date(n.year, n.month, n.day, n.hours, n.minutes, n.seconds, n.milliseconds), 
    n.zone && i.adjustForTimeZone(n, r), r;
  }, e.ISO = {
    regex: /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-4])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?\s?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
    parse: function(t) {
      var n, r = t.match(this.regex);
      return r && r.length && (n = i.buildTimeObjectFromData(r)).year && (n.year || n.month || n.day || n.week || n.dayOfYear) ? e.processTimeObject(n) : null;
    }
  }, e.Numeric = {
    isNumeric: function(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    regex: /\b([0-1]?[0-9])([0-3]?[0-9])([0-2]?[0-9]?[0-9][0-9])\b/i,
    parse: function(t) {
      var i, n, r = {}, o = Date.CultureInfo.dateElementOrder.split("");
      if (!this.isNumeric(t) || "+" === t[0] && "-" === t[0]) return null;
      if (t.length < 5 && t.indexOf(".") < 0 && t.indexOf("/") < 0) return r.year = t, 
      e.processTimeObject(r);
      if (!(i = t.match(this.regex)) || !i.length) return null;
      for (n = 0; n < o.length; n++) switch (o[n]) {
       case "d":
        r.day = i[n + 1];
        break;

       case "m":
        r.month = i[n + 1] - 1;
        break;

       case "y":
        r.year = i[n + 1];
      }
      return e.processTimeObject(r);
    }
  }, e.Normalizer = {
    regexData: function() {
      var e = Date.CultureInfo.regexPatterns;
      return i.buildRegexData([ e.tomorrow, e.yesterday, [ e.past, e.mon ], [ e.past, e.tue ], [ e.past, e.wed ], [ e.past, e.thu ], [ e.past, e.fri ], [ e.past, e.sat ], [ e.past, e.sun ] ]);
    },
    basicReplaceHash: function() {
      var e = Date.CultureInfo.regexPatterns;
      return {
        January: e.jan.source,
        February: e.feb,
        March: e.mar,
        April: e.apr,
        May: e.may,
        June: e.jun,
        July: e.jul,
        August: e.aug,
        September: e.sep,
        October: e.oct,
        November: e.nov,
        December: e.dec,
        "": /\bat\b/gi,
        " ": /\s{2,}/,
        am: e.inTheMorning,
        "9am": e.thisMorning,
        pm: e.inTheEvening,
        "7pm": e.thisEvening
      };
    },
    keys: function() {
      return [ i.getDateNthString(!0, !1, 1), i.getDateNthString(!0, !1, -1), i.getDateNthString(!1, !0, "monday"), i.getDateNthString(!1, !0, "tuesday"), i.getDateNthString(!1, !0, "wednesday"), i.getDateNthString(!1, !0, "thursday"), i.getDateNthString(!1, !0, "friday"), i.getDateNthString(!1, !0, "saturday"), i.getDateNthString(!1, !0, "sunday") ];
    },
    buildRegexFunctions: function() {
      var e = Date.CultureInfo.regexPatterns, t = Date.i18n.__, i = new RegExp("(\\b\\d\\d?(" + t("AM") + "|" + t("PM") + ")? )(" + e.tomorrow.source.slice(1) + ")", "i"), n = new RegExp(e.today.source + "(?!\\s*([+-]))\\b");
      this.replaceFuncs = [ [ n, function(e) {
        return e.length > 1 ? Date.today().toString("d") : e;
      } ], [ i, function(e, t) {
        return Date.today().addDays(1).toString("d") + " " + t;
      } ], [ e.amThisMorning, function(e, t) {
        return t;
      } ], [ e.pmThisEvening, function(e, t) {
        return t;
      } ] ];
    },
    buildReplaceData: function() {
      this.buildRegexFunctions(), this.replaceHash = i.addToHash(this.basicReplaceHash(), this.keys(), this.regexData());
    },
    stringReplaceFuncs: function(e) {
      for (var t = 0; t < this.replaceFuncs.length; t++) e = e.replace(this.replaceFuncs[t][0], this.replaceFuncs[t][1]);
      return e;
    },
    parse: function(t) {
      t = this.stringReplaceFuncs(t), t = i.multiReplace(t, this.replaceHash);
      try {
        var n = t.split(/([\s\-\.\,\/\x27]+)/);
        3 === n.length && e.Numeric.isNumeric(n[0]) && e.Numeric.isNumeric(n[2]) && n[2].length >= 4 && "d" === Date.CultureInfo.dateElementOrder[0] && (t = "1/" + n[0] + "/" + n[2]);
      } catch (r) {}
      return t;
    }
  }, e.Normalizer.buildReplaceData();
}(), function() {
  for (var e = Date.Parsing, t = e.Operators = {
    rtoken: function(t) {
      return function(i) {
        var n = i.match(t);
        if (n) return [ n[0], i.substring(n[0].length) ];
        throw new e.Exception(i);
      };
    },
    token: function() {
      return function(e) {
        return t.rtoken(new RegExp("^\\s*" + e + "\\s*"))(e);
      };
    },
    stoken: function(e) {
      return t.rtoken(new RegExp("^" + e));
    },
    until: function(e) {
      return function(t) {
        for (var i = [], n = null; t.length; ) {
          try {
            n = e.call(this, t);
          } catch (r) {
            i.push(n[0]), t = n[1];
            continue;
          }
          break;
        }
        return [ i, t ];
      };
    },
    many: function(e) {
      return function(t) {
        for (var i = [], n = null; t.length; ) {
          try {
            n = e.call(this, t);
          } catch (r) {
            return [ i, t ];
          }
          i.push(n[0]), t = n[1];
        }
        return [ i, t ];
      };
    },
    optional: function(e) {
      return function(t) {
        var i = null;
        try {
          i = e.call(this, t);
        } catch (n) {
          return [ null, t ];
        }
        return [ i[0], i[1] ];
      };
    },
    not: function(t) {
      return function(i) {
        try {
          t.call(this, i);
        } catch (n) {
          return [ null, i ];
        }
        throw new e.Exception(i);
      };
    },
    ignore: function(e) {
      return e ? function(t) {
        return [ null, e.call(this, t)[1] ];
      } : null;
    },
    product: function() {
      for (var e = arguments[0], i = Array.prototype.slice.call(arguments, 1), n = [], r = 0; r < e.length; r++) n.push(t.each(e[r], i));
      return n;
    },
    cache: function(t) {
      var i = {}, n = 0, r = [], o = Date.Config.CACHE_MAX || 1e5, s = null, a = function() {
        if (n === o) for (var e = 0; e < 10; e++) {
          var t = r.shift();
          t && (delete i[t], n--);
        }
      };
      return function(o) {
        a();
        try {
          s = i[o] = i[o] || t.call(this, o);
        } catch (l) {
          s = i[o] = l;
        }
        if (n++, r.push(o), s instanceof e.Exception) throw s;
        return s;
      };
    },
    any: function() {
      var t = arguments;
      return function(i) {
        for (var n = null, r = 0; r < t.length; r++) if (null != t[r]) {
          try {
            n = t[r].call(this, i);
          } catch (o) {
            n = null;
          }
          if (n) return n;
        }
        throw new e.Exception(i);
      };
    },
    each: function() {
      var t = arguments;
      return function(i) {
        for (var n = [], r = null, o = 0; o < t.length; o++) if (null != t[o]) {
          try {
            r = t[o].call(this, i);
          } catch (s) {
            throw new e.Exception(i);
          }
          n.push(r[0]), i = r[1];
        }
        return [ n, i ];
      };
    },
    all: function() {
      var e = arguments, t = t;
      return t.each(t.optional(e));
    },
    sequence: function(i, n, r) {
      return n = n || t.rtoken(/^\s*/), r = r || null, 1 === i.length ? i[0] : function(t) {
        for (var o = null, s = null, a = [], l = 0; l < i.length; l++) {
          try {
            o = i[l].call(this, t);
          } catch (u) {
            break;
          }
          a.push(o[0]);
          try {
            s = n.call(this, o[1]);
          } catch (c) {
            s = null;
            break;
          }
          t = s[1];
        }
        if (!o) throw new e.Exception(t);
        if (s) throw new e.Exception(s[1]);
        if (r) try {
          o = r.call(this, o[1]);
        } catch (d) {
          throw new e.Exception(o[1]);
        }
        return [ a, o ? o[1] : t ];
      };
    },
    between: function(e, i, n) {
      n = n || e;
      var o = t.each(t.ignore(e), i, t.ignore(n));
      return function(e) {
        var t = o.call(this, e);
        return [ [ t[0][0], r[0][2] ], t[1] ];
      };
    },
    list: function(e, i, n) {
      return i = i || t.rtoken(/^\s*/), n = n || null, e instanceof Array ? t.each(t.product(e.slice(0, -1), t.ignore(i)), e.slice(-1), t.ignore(n)) : t.each(t.many(t.each(e, t.ignore(i))), px, t.ignore(n));
    },
    set: function(i, n, r) {
      return n = n || t.rtoken(/^\s*/), r = r || null, function(o) {
        for (var s = null, a = null, l = null, u = null, c = [ [], o ], d = !1, h = 0; h < i.length; h++) {
          l = null, a = null, s = null, d = 1 === i.length;
          try {
            s = i[h].call(this, o);
          } catch (m) {
            continue;
          }
          if (u = [ [ s[0] ], s[1] ], s[1].length > 0 && !d) try {
            l = n.call(this, s[1]);
          } catch (g) {
            d = !0;
          } else d = !0;
          if (d || 0 !== l[1].length || (d = !0), !d) {
            for (var f = [], p = 0; p < i.length; p++) h !== p && f.push(i[p]);
            (a = t.set(f, n).call(this, l[1]))[0].length > 0 && (u[0] = u[0].concat(a[0]), u[1] = a[1]);
          }
          if (u[1].length < c[1].length && (c = u), 0 === c[1].length) break;
        }
        if (0 === c[0].length) return c;
        if (r) {
          try {
            l = r.call(this, c[1]);
          } catch (v) {
            throw new e.Exception(c[1]);
          }
          c[1] = l[1];
        }
        return c;
      };
    },
    forward: function(e, t) {
      return function(i) {
        return e[t].call(this, i);
      };
    },
    replace: function(e, t) {
      return function(i) {
        var n = e.call(this, i);
        return [ t, n[1] ];
      };
    },
    process: function(e, t) {
      return function(i) {
        var n = e.call(this, i);
        return [ t.call(this, n[0]), n[1] ];
      };
    },
    min: function(t, i) {
      return function(n) {
        var r = i.call(this, n);
        if (r[0].length < t) throw new e.Exception(n);
        return r;
      };
    }
  }, i = function(e) {
    function t() {
      var t, i, n = null, r = [];
      return arguments.length > 1 ? n = Array.prototype.slice.call(arguments) : arguments[0] instanceof Array && (n = arguments[0]), 
      n ? (t = n.shift()).length > 0 ? (n.unshift(t[i]), r.push(e.apply(null, n)), n.shift(), 
      r) : void 0 : e.apply(null, arguments);
    }
    return t;
  }, n = "optional not ignore cache".split(/\s/), o = 0; o < n.length; o++) t[n[o]] = i(t[n[o]]);
  for (var s = function(e) {
    return function() {
      return arguments[0] instanceof Array ? e.apply(null, arguments[0]) : e.apply(null, arguments);
    };
  }, a = "each any all".split(/\s/), l = 0; l < a.length; l++) t[a[l]] = s(t[a[l]]);
}(), function() {
  var e = Date, t = function(e) {
    for (var i = [], n = 0; n < e.length; n++) e[n] instanceof Array ? i = i.concat(t(e[n])) : e[n] && i.push(e[n]);
    return i;
  }, i = function() {
    if (this.meridian && (this.hour || 0 === this.hour)) {
      if ("a" === this.meridian && this.hour > 11 && Date.Config.strict24hr) throw "Invalid hour and meridian combination";
      if ("p" === this.meridian && this.hour < 12 && Date.Config.strict24hr) throw "Invalid hour and meridian combination";
      "p" === this.meridian && this.hour < 12 ? this.hour = this.hour + 12 : "a" === this.meridian && 12 === this.hour && (this.hour = 0);
    }
  }, n = function() {
    var e = new Date();
    !this.hour && !this.minute || this.month || this.year || this.day || (this.day = e.getDate()), 
    this.year || (this.year = e.getFullYear()), this.month || 0 === this.month || (this.month = e.getMonth()), 
    this.day || (this.day = 1), this.hour || (this.hour = 0), this.minute || (this.minute = 0), 
    this.second || (this.second = 0), this.millisecond || (this.millisecond = 0);
  }, r = {
    getToday: function() {
      return this.now || -1 !== "hour minute second".indexOf(this.unit) ? new Date() : e.today();
    },
    setDaysFromWeekday: function(t, i) {
      var n;
      return i = i || 1, this.unit = "day", n = e.getDayNumberFromName(this.weekday) - t.getDay(), 
      this.days = n ? (n + 7 * i) % 7 : 7 * i, this;
    },
    setMonthsFromMonth: function(e, t) {
      var i;
      return t = t || 1, this.unit = "month", i = this.month - e.getMonth(), this.months = i ? (i + 12 * t) % 12 : 12 * t, 
      this.month = null, this;
    },
    setDMYFromWeekday: function() {
      var e = Date[this.weekday]();
      return this.day = e.getDate(), this.month || (this.month = e.getMonth()), this.year = e.getFullYear(), 
      this;
    },
    setUnitValue: function(e) {
      !this.value && this.operator && null !== this.operator && this[this.unit + "s"] && null !== this[this.unit + "s"] ? this[this.unit + "s"] = this[this.unit + "s"] + ("add" === this.operator ? 1 : -1) + (this.value || 0) * e : null != this[this.unit + "s"] && null == this.operator || (this.value || (this.value = 1), 
      this[this.unit + "s"] = this.value * e);
    },
    generateDateFromWeeks: function() {
      var e = this.weekday !== undefined ? this.weekday : "today", t = Date[e]().addWeeks(this.weeks);
      return this.now && t.setTimeToNow(), t;
    }
  };
  e.Translator = {
    hour: function(e) {
      return function() {
        this.hour = Number(e);
      };
    },
    minute: function(e) {
      return function() {
        this.minute = Number(e);
      };
    },
    second: function(e) {
      return function() {
        this.second = Number(e);
      };
    },
    secondAndMillisecond: function(e) {
      return function() {
        var t = e.match(/^([0-5][0-9])\.([0-9]{1,3})/);
        this.second = Number(t[1]), this.millisecond = Number(t[2]);
      };
    },
    meridian: function(e) {
      return function() {
        this.meridian = e.slice(0, 1).toLowerCase();
      };
    },
    timezone: function(e) {
      return function() {
        var t = e.replace(/[^\d\+\-]/g, "");
        t.length ? this.timezoneOffset = Number(t) : this.timezone = e.toLowerCase();
      };
    },
    day: function(e) {
      var t = e[0];
      return function() {
        if (this.day = Number(t.match(/\d+/)[0]), this.day < 1) throw "invalid day";
      };
    },
    month: function(e) {
      return function() {
        if (this.month = 3 === e.length ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(e) / 4 : Number(e) - 1, 
        this.month < 0) throw "invalid month";
      };
    },
    year: function(e) {
      return function() {
        var t = Number(e);
        this.year = e.length > 2 ? t : t + (t + 2e3 < Date.CultureInfo.twoDigitYearMax ? 2e3 : 1900);
      };
    },
    rday: function(e) {
      return function() {
        switch (e) {
         case "yesterday":
          this.days = -1;
          break;

         case "tomorrow":
          this.days = 1;
          break;

         case "today":
          this.days = 0;
          break;

         case "now":
          this.days = 0, this.now = !0;
        }
      };
    },
    finishExact: function(t) {
      var r;
      t = t instanceof Array ? t : [ t ];
      for (var o = 0; o < t.length; o++) t[o] && t[o].call(this);
      if (n.call(this), i.call(this), this.day > e.getDaysInMonth(this.year, this.month)) throw new RangeError(this.day + " is not a valid value for days.");
      return r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond), 
      this.year < 100 && r.setFullYear(this.year), this.timezone ? r.set({
        timezone: this.timezone
      }) : this.timezoneOffset && r.set({
        timezoneOffset: this.timezoneOffset
      }), r;
    },
    finish: function(n) {
      var o, s, a, l;
      if (0 === (n = n instanceof Array ? t(n) : [ n ]).length) return null;
      for (var u = 0; u < n.length; u++) "function" == typeof n[u] && n[u].call(this);
      if (this.now && !this.unit && !this.operator) return new Date();
      if (o = r.getToday.call(this), s = !!(this.days && null !== this.days || this.orient || this.operator), 
      a = "past" === this.orient || "subtract" === this.operator ? -1 : 1, this.month && "week" === this.unit && (this.value = this.month + 1, 
      delete this.month, delete this.day), !this.month && 0 !== this.month || -1 === "year day hour minute second".indexOf(this.unit) || (this.value || (this.value = this.month + 1), 
      this.month = null, s = !0), s || !this.weekday || this.day || this.days || r.setDMYFromWeekday.call(this), 
      s && this.weekday && "month" !== this.unit && "week" !== this.unit && r.setDaysFromWeekday.call(this, o, a), 
      !this.weekday || "week" === this.unit || this.day || this.days || (l = Date[this.weekday](), 
      this.day = l.getDate(), l.getMonth() !== o.getMonth() && (this.month = l.getMonth())), 
      this.month && "day" === this.unit && this.operator && (this.value || (this.value = this.month + 1), 
      this.month = null), null != this.value && null != this.month && null != this.year && (this.day = 1 * this.value), 
      this.month && !this.day && this.value && (o.set({
        day: 1 * this.value
      }), s || (this.day = 1 * this.value)), this.month || !this.value || "month" !== this.unit || this.now || (this.month = this.value, 
      s = !0), s && (this.month || 0 === this.month) && "year" !== this.unit && r.setMonthsFromMonth.call(this, o, a), 
      this.unit || (this.unit = "day"), r.setUnitValue.call(this, a), i.call(this), !this.month && 0 !== this.month || this.day || (this.day = 1), 
      !this.orient && !this.operator && "week" === this.unit && this.value && !this.day && !this.month) return Date.today().setWeek(this.value);
      if ("week" === this.unit && this.weeks && !this.day && !this.month) return r.generateDateFromWeeks.call(this);
      if (s && this.timezone && this.day && this.days && (this.day = this.days), s ? o.add(this) : o.set(this), 
      this.timezone) {
        this.timezone = this.timezone.toUpperCase();
        var c = e.getTimezoneOffset(this.timezone);
        o.hasDaylightSavingTime() && e.getTimezoneAbbreviation(c, o.isDaylightSavingTime()) !== this.timezone && (o.isDaylightSavingTime() ? o.addHours(-1) : o.addHours(1)), 
        o.setTimezoneOffset(c);
      }
      return o;
    }
  };
}(), function() {
  var e = Date;
  e.Grammar = {};
  var t, i = e.Parsing.Operators, n = e.Grammar, r = e.Translator;
  t = function() {
    return i.each(i.any.apply(null, arguments), i.not(n.ctoken2("timeContext")));
  }, n.datePartDelimiter = i.rtoken(/^([\s\-\.\,\/\x27]+)/), n.timePartDelimiter = i.stoken(":"), 
  n.whiteSpace = i.rtoken(/^\s*/), n.generalDelimiter = i.rtoken(/^(([\s\,]|at|@|on)+)/);
  var o = {};
  n.ctoken = function(e) {
    var t = o[e];
    if (!t) {
      for (var n = Date.CultureInfo.regexPatterns, r = e.split(/\s+/), s = [], a = 0; a < r.length; a++) s.push(i.replace(i.rtoken(n[r[a]]), r[a]));
      t = o[e] = i.any.apply(null, s);
    }
    return t;
  }, n.ctoken2 = function(e) {
    return i.rtoken(Date.CultureInfo.regexPatterns[e]);
  };
  var s = function(e, t, r, o) {
    n[e] = o ? i.cache(i.process(i.each(i.rtoken(t), i.optional(n.ctoken2(o))), r)) : i.cache(i.process(i.rtoken(t), r));
  }, a = function(e, t) {
    return i.cache(i.process(n.ctoken2(e), t));
  }, l = {}, u = function(e) {
    return l[e] = l[e] || n.format(e)[0], l[e];
  };
  n.allformats = function(e) {
    var t = [];
    if (e instanceof Array) for (var i = 0; i < e.length; i++) t.push(u(e[i])); else t.push(u(e));
    return t;
  }, n.formats = function(e) {
    if (e instanceof Array) {
      for (var t = [], n = 0; n < e.length; n++) t.push(u(e[n]));
      return i.any.apply(null, t);
    }
    return u(e);
  };
  var c = {
    timeFormats: function() {
      var e, t = [ "h", "hh", "H", "HH", "m", "mm", "s", "ss", "ss.s", "z", "zz" ], o = [ /^(0[0-9]|1[0-2]|[1-9])/, /^(0[0-9]|1[0-2])/, /^([0-1][0-9]|2[0-3]|[0-9])/, /^([0-1][0-9]|2[0-3])/, /^([0-5][0-9]|[0-9])/, /^[0-5][0-9]/, /^([0-5][0-9]|[0-9])/, /^[0-5][0-9]/, /^[0-5][0-9]\.[0-9]{1,3}/, /^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/, /^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/ ], l = [ r.hour, r.hour, r.hour, r.minute, r.minute, r.second, r.second, r.secondAndMillisecond, r.timezone, r.timezone, r.timezone ];
      for (e = 0; e < t.length; e++) s(t[e], o[e], l[e]);
      n.hms = i.cache(i.sequence([ n.H, n.m, n.s ], n.timePartDelimiter)), n.t = a("shortMeridian", r.meridian), 
      n.tt = a("longMeridian", r.meridian), n.zzz = a("timezone", r.timezone), n.timeSuffix = i.each(i.ignore(n.whiteSpace), i.set([ n.tt, n.zzz ])), 
      n.time = i.each(i.optional(i.ignore(i.stoken("T"))), n.hms, n.timeSuffix);
    },
    dateFormats: function() {
      var e, o = function() {
        return i.set(arguments, n.datePartDelimiter);
      }, a = [ "d", "dd", "M", "MM", "y", "yy", "yyy", "yyyy" ], l = [ /^([0-2]\d|3[0-1]|\d)/, /^([0-2]\d|3[0-1])/, /^(1[0-2]|0\d|\d)/, /^(1[0-2]|0\d)/, /^(\d+)/, /^(\d\d)/, /^(\d\d?\d?\d?)/, /^(\d\d\d\d)/ ], u = [ r.day, r.day, r.month, r.month, r.year, r.year, r.year, r.year ], c = [ "ordinalSuffix", "ordinalSuffix" ];
      for (e = 0; e < a.length; e++) s(a[e], l[e], u[e], c[e]);
      n.MMM = n.MMMM = i.cache(i.process(n.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), r.month)), 
      n.ddd = n.dddd = i.cache(i.process(n.ctoken("sun mon tue wed thu fri sat"), function(e) {
        return function() {
          this.weekday = e;
        };
      })), n.day = t(n.d, n.dd), n.month = t(n.M, n.MMM), n.year = t(n.yyyy, n.yy), n.mdy = o(n.ddd, n.month, n.day, n.year), 
      n.ymd = o(n.ddd, n.year, n.month, n.day), n.dmy = o(n.ddd, n.day, n.month, n.year), 
      n.date = function(e) {
        return (n[Date.CultureInfo.dateElementOrder] || n.mdy).call(this, e);
      };
    },
    relative: function() {
      n.orientation = i.process(n.ctoken("past future"), function(e) {
        return function() {
          this.orient = e;
        };
      }), n.operator = i.process(n.ctoken("add subtract"), function(e) {
        return function() {
          this.operator = e;
        };
      }), n.rday = i.process(n.ctoken("yesterday tomorrow today now"), r.rday), n.unit = i.process(n.ctoken("second minute hour day week month year"), function(e) {
        return function() {
          this.unit = e;
        };
      });
    }
  };
  n.buildGrammarFormats = function() {
    o = {}, c.timeFormats(), c.dateFormats(), c.relative(), n.value = i.process(i.rtoken(/^([-+]?\d+)?(st|nd|rd|th)?/), function(e) {
      return function() {
        this.value = e.replace(/\D/g, "");
      };
    }), n.expression = i.set([ n.rday, n.operator, n.value, n.unit, n.orientation, n.ddd, n.MMM ]), 
    n.format = i.process(i.many(i.any(i.process(i.rtoken(/^(dd?d?d?(?!e)|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(t) {
      if (n[t]) return n[t];
      throw e.Parsing.Exception(t);
    }), i.process(i.rtoken(/^[^dMyhHmstz]+/), function(e) {
      return i.ignore(i.stoken(e));
    }))), function(e) {
      return i.process(i.each.apply(null, e), r.finishExact);
    }), n._start = i.process(i.set([ n.date, n.time, n.expression ], n.generalDelimiter, n.whiteSpace), r.finish);
  }, n.buildGrammarFormats(), n._formats = n.formats([ '"yyyy-MM-ddTHH:mm:ssZ"', "yyyy-MM-ddTHH:mm:ss.sz", "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ssz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mmZ", "yyyy-MM-ddTHH:mmz", "yyyy-MM-ddTHH:mm", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "MMddyyyy", "ddMMyyyy", "Mddyyyy", "ddMyyyy", "Mdyyyy", "dMyyyy", "yyyy", "Mdyy", "dMyy", "d" ]), 
  n.start = function(e) {
    try {
      var t = n._formats.call({}, e);
      if (0 === t[1].length) return t;
    } catch (i) {}
    return n._start.call({}, e);
  };
}(), function() {
  function e(e) {
    var n;
    return e ? e instanceof Date ? e.clone() : (e.length >= 4 && "0" !== e.charAt(0) && "+" !== e.charAt(0) && "-" !== e.charAt(0) && (n = t.Parsing.ISO.parse(e) || t.Parsing.Numeric.parse(e)), 
    n instanceof Date && !isNaN(n.getTime()) ? n : (e = t.Parsing.Normalizer.parse(i.removeOrds(e)), 
    null !== (n = i.grammarParser(e)) ? n : i.nativeFallback(e))) : null;
  }
  var t = Date, i = {
    removeOrds: function(e) {
      return ords = e.match(/\b(\d+)(?:st|nd|rd|th)\b/), e = ords && 2 === ords.length ? e.replace(ords[0], ords[1]) : e;
    },
    grammarParser: function(e) {
      var i = null;
      try {
        i = t.Grammar.start.call({}, e.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"));
      } catch (n) {
        return null;
      }
      return 0 === i[1].length ? i[0] : null;
    },
    nativeFallback: function(e) {
      var t;
      try {
        return (t = Date._parse(e)) || 0 === t ? new Date(t) : null;
      } catch (i) {
        return null;
      }
    }
  };
  t._parse || (t._parse = t.parse), t.parse = e, Date.getParseFunction = function(e) {
    var t = Date.Grammar.allformats(e);
    return function(e) {
      for (var i = null, n = 0; n < t.length; n++) {
        try {
          i = t[n].call({}, e);
        } catch (r) {
          continue;
        }
        if (0 === i[1].length) return i[0];
      }
      return null;
    };
  }, t.parseExact = function(e, i) {
    return t.getParseFunction(i)(e);
  };
}(), function() {
  var e = Date, i = e.prototype, n = function(e, t) {
    return t || (t = 2), ("000" + e).slice(-1 * t);
  }, r = {
    d: "dd",
    "%d": "dd",
    D: "ddd",
    "%a": "ddd",
    j: "dddd",
    l: "dddd",
    "%A": "dddd",
    S: "S",
    F: "MMMM",
    "%B": "MMMM",
    m: "MM",
    "%m": "MM",
    M: "MMM",
    "%b": "MMM",
    "%h": "MMM",
    n: "M",
    Y: "yyyy",
    "%Y": "yyyy",
    y: "yy",
    "%y": "yy",
    g: "h",
    "%I": "h",
    G: "H",
    h: "hh",
    H: "HH",
    "%H": "HH",
    i: "mm",
    "%M": "mm",
    s: "ss",
    "%S": "ss",
    "%r": "hh:mm tt",
    "%R": "H:mm",
    "%T": "H:mm:ss",
    "%X": "t",
    "%x": "d",
    "%e": "d",
    "%D": "MM/dd/yy",
    "%n": "\\n",
    "%t": "\\t",
    e: "z",
    T: "z",
    "%z": "z",
    "%Z": "z",
    Z: "ZZ",
    N: "u",
    w: "u",
    "%w": "u",
    W: "W",
    "%V": "W"
  }, o = {
    substitutes: function(e) {
      return r[e];
    },
    interpreted: function(i, r) {
      var o;
      switch (i) {
       case "%u":
        return r.getDay() + 1;

       case "z":
        return r.getOrdinalNumber();

       case "%j":
        return n(r.getOrdinalNumber(), 3);

       case "%U":
        var s = r.clone().set({
          month: 0,
          day: 1
        }).addDays(-1).moveToDayOfWeek(0), a = r.clone().addDays(1).moveToDayOfWeek(0, -1);
        return a < s ? "00" : n((a.getOrdinalNumber() - s.getOrdinalNumber()) / 7 + 1);

       case "%W":
        return n(r.getWeek());

       case "t":
        return e.getDaysInMonth(r.getFullYear(), r.getMonth());

       case "o":
       case "%G":
        return r.setWeek(r.getISOWeek()).toString("yyyy");

       case "%g":
        return r._format("%G").slice(-2);

       case "a":
       case "%p":
        return t("tt").toLowerCase();

       case "A":
        return t("tt").toUpperCase();

       case "u":
        return n(r.getMilliseconds(), 3);

       case "I":
        return r.isDaylightSavingTime() ? 1 : 0;

       case "O":
        return r.getUTCOffset();

       case "P":
        return (o = r.getUTCOffset()).substring(0, o.length - 2) + ":" + o.substring(o.length - 2);

       case "B":
        var l = new Date();
        return Math.floor((3600 * l.getHours() + 60 * l.getMinutes() + l.getSeconds() + 60 * (l.getTimezoneOffset() + 60)) / 86.4);

       case "c":
        return r.toISOString().replace(/\"/g, "");

       case "U":
        return e.strtotime("now");

       case "%c":
        return t("d") + " " + t("t");

       case "%C":
        return Math.floor(r.getFullYear() / 100 + 1);
      }
    },
    shouldOverrideDefaults: function(e) {
      switch (e) {
       case "%e":
        return !0;

       default:
        return !1;
      }
    },
    parse: function(e, t) {
      var i, n = t || new Date();
      return (i = o.substitutes(e)) ? i : (i = o.interpreted(e, n)) || e;
    }
  };
  e.normalizeFormat = function(e, t) {
    return e.replace(/(%|\\)?.|%%/g, function(e) {
      return o.parse(e, t);
    });
  }, e.strftime = function(e, t) {
    return Date.parse(t)._format(e);
  }, e.strtotime = function(t) {
    var i = e.parse(t);
    return Math.round(e.UTC(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()) / 1e3);
  };
  var s = function(t) {
    return function(i) {
      var n, r = !1;
      return "\\" === i.charAt(0) || "%%" === i.substring(0, 2) ? i.replace("\\", "").replace("%%", "%") : (r = o.shouldOverrideDefaults(i), 
      (n = e.normalizeFormat(i, t)) ? t.toString(n, r) : void 0);
    };
  };
  i._format = function(e) {
    var t = s(this);
    return e ? e.replace(/(%|\\)?.|%%/g, t) : this._toString();
  }, i.format || (i.format = i._format);
}(), function() {
  "use strict";
  var e = function(e) {
    return function() {
      return this[e];
    };
  }, t = function(e) {
    return function(t) {
      return this[e] = t, this;
    };
  }, i = function(e, t, n, r, o) {
    if (1 === arguments.length && "number" == typeof e) {
      var s = e < 0 ? -1 : 1, a = Math.abs(e);
      this.setDays(Math.floor(a / 864e5) * s), a %= 864e5, this.setHours(Math.floor(a / 36e5) * s), 
      a %= 36e5, this.setMinutes(Math.floor(a / 6e4) * s), a %= 6e4, this.setSeconds(Math.floor(a / 1e3) * s), 
      a %= 1e3, this.setMilliseconds(a * s);
    } else this.set(e, t, n, r, o);
    return this.getTotalMilliseconds = function() {
      return 864e5 * this.getDays() + 36e5 * this.getHours() + 6e4 * this.getMinutes() + 1e3 * this.getSeconds();
    }, this.compareTo = function(e) {
      var t, i = new Date(1970, 1, 1, this.getHours(), this.getMinutes(), this.getSeconds());
      return i < (t = null === e ? new Date(1970, 1, 1, 0, 0, 0) : new Date(1970, 1, 1, e.getHours(), e.getMinutes(), e.getSeconds())) ? -1 : i > t ? 1 : 0;
    }, this.equals = function(e) {
      return 0 === this.compareTo(e);
    }, this.add = function(e) {
      return null === e ? this : this.addSeconds(e.getTotalMilliseconds() / 1e3);
    }, this.subtract = function(e) {
      return null === e ? this : this.addSeconds(-e.getTotalMilliseconds() / 1e3);
    }, this.addDays = function(e) {
      return new i(this.getTotalMilliseconds() + 864e5 * e);
    }, this.addHours = function(e) {
      return new i(this.getTotalMilliseconds() + 36e5 * e);
    }, this.addMinutes = function(e) {
      return new i(this.getTotalMilliseconds() + 6e4 * e);
    }, this.addSeconds = function(e) {
      return new i(this.getTotalMilliseconds() + 1e3 * e);
    }, this.addMilliseconds = function(e) {
      return new i(this.getTotalMilliseconds() + e);
    }, this.get12HourHour = function() {
      return this.getHours() > 12 ? this.getHours() - 12 : 0 === this.getHours() ? 12 : this.getHours();
    }, this.getDesignator = function() {
      return this.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
    }, this.toString = function(e) {
      this._toString = function() {
        return null !== this.getDays() && this.getDays() > 0 ? this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds()) : this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
      }, this.p = function(e) {
        return e.toString().length < 2 ? "0" + e : e;
      };
      var t = this;
      return e ? e.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g, function(e) {
        switch (e) {
         case "d":
          return t.getDays();

         case "dd":
          return t.p(t.getDays());

         case "H":
          return t.getHours();

         case "HH":
          return t.p(t.getHours());

         case "h":
          return t.get12HourHour();

         case "hh":
          return t.p(t.get12HourHour());

         case "m":
          return t.getMinutes();

         case "mm":
          return t.p(t.getMinutes());

         case "s":
          return t.getSeconds();

         case "ss":
          return t.p(t.getSeconds());

         case "t":
          return (t.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator).substring(0, 1);

         case "tt":
          return t.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
        }
      }) : this._toString();
    }, this;
  };
  (function(i, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r], s = o.slice(0, 1).toUpperCase() + o.slice(1);
      i.prototype[o] = 0, i.prototype["get" + s] = e(o), i.prototype["set" + s] = t(o);
    }
  })(i, [ "years", "months", "days", "hours", "minutes", "seconds", "milliseconds" ].slice(2)), 
  i.prototype.set = function(e, t, i, n, r) {
    this.setDays(e || this.getDays()), this.setHours(t || this.getHours()), this.setMinutes(i || this.getMinutes()), 
    this.setSeconds(n || this.getSeconds()), this.setMilliseconds(r || this.getMilliseconds());
  }, Date.prototype.getTimeOfDay = function() {
    return new i(0, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
  }, Date.TimeSpan = i, "undefined" != typeof window && (window.TimeSpan = i);
}(), function() {
  "use strict";
  var e = function(e) {
    return function() {
      return this[e];
    };
  }, t = function(e) {
    return function(t) {
      return this[e] = t, this;
    };
  }, i = function(e, t, i, n) {
    function r() {
      t.addMonths(-e), n.months++, 12 === n.months && (n.years++, n.months = 0);
    }
    if (1 === e) for (;t > i; ) r(); else for (;t < i; ) r();
    n.months--, n.months *= e, n.years *= e;
  }, n = function(e, t, i) {
    var n = !1 == (t.isDaylightSavingTime() === i.isDaylightSavingTime());
    n && 1 === e ? t.addHours(-1) : n && t.addHours(1);
  }, r = function(e, t, r, o, s, a, l) {
    if (7 === arguments.length) this.set(e, t, r, o, s, a, l); else if (2 === arguments.length && arguments[0] instanceof Date && arguments[1] instanceof Date) {
      var u = arguments[0].clone(), c = arguments[1].clone(), d = u > c ? 1 : -1;
      this.dates = {
        start: arguments[0].clone(),
        end: arguments[1].clone()
      }, i(d, u, c, this), n(d, u, c);
      var h = c - u;
      if (0 !== h) {
        var f = new TimeSpan(h);
        this.set(this.years, this.months, f.getDays(), f.getHours(), f.getMinutes(), f.getSeconds(), f.getMilliseconds());
      }
    }
    return this;
  };
  (function(i, n) {
    for (var r = 0; r < n.length; r++) {
      var o = n[r], s = o.slice(0, 1).toUpperCase() + o.slice(1);
      i.prototype[o] = 0, i.prototype["get" + s] = e(o), i.prototype["set" + s] = t(o);
    }
  })(r, [ "years", "months", "days", "hours", "minutes", "seconds", "milliseconds" ]), 
  r.prototype.set = function(e, t, i, n, r, o, s) {
    this.setYears(e || this.getYears()), this.setMonths(t || this.getMonths()), this.setDays(i || this.getDays()), 
    this.setHours(n || this.getHours()), this.setMinutes(r || this.getMinutes()), this.setSeconds(o || this.getSeconds()), 
    this.setMilliseconds(s || this.getMilliseconds());
  }, Date.TimePeriod = r, "undefined" != typeof window && (window.TimePeriod = r);
}(), function(e, t, i) {
  function n(i) {
    var n = t.console;
    o[i] || (o[i] = !0, e.migrateWarnings.push(i), n && n.warn && !e.migrateMute && (n.warn("JQMIGRATE: " + i), 
    e.migrateTrace && n.trace && n.trace()));
  }
  function r(t, i, r, o) {
    if (Object.defineProperty) try {
      return void Object.defineProperty(t, i, {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return n(o), r;
        },
        set: function(e) {
          n(o), r = e;
        }
      });
    } catch (s) {}
    e._definePropertyBroken = !0, t[i] = r;
  }
  e.migrateVersion = "1.4.1";
  var o = {};
  e.migrateWarnings = [], t.console && t.console.log && t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion), 
  e.migrateTrace === i && (e.migrateTrace = !0), e.migrateReset = function() {
    o = {}, e.migrateWarnings.length = 0;
  }, "BackCompat" === document.compatMode && n("jQuery is not compatible with Quirks Mode");
  var s = e("<input/>", {
    size: 1
  }).attr("size") && e.attrFn, a = e.attr, l = e.attrHooks.value && e.attrHooks.value.get || function() {
    return null;
  }, u = e.attrHooks.value && e.attrHooks.value.set || function() {
    return i;
  }, c = /^(?:input|button)$/i, d = /^[238]$/, h = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f = /^(?:checked|selected)$/i;
  r(e, "attrFn", s || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, r, o, l) {
    var u = r.toLowerCase(), p = t && t.nodeType;
    return l && (a.length < 4 && n("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(p) && (s ? r in s : e.isFunction(e.fn[r]))) ? e(t)[r](o) : ("type" === r && o !== i && c.test(t.nodeName) && t.parentNode && n("Can't change the 'type' of an input or button in IE 6/7/8"), 
    !e.attrHooks[u] && h.test(u) && (e.attrHooks[u] = {
      get: function(t, n) {
        var r, o = e.prop(t, n);
        return !0 === o || "boolean" != typeof o && (r = t.getAttributeNode(n)) && !1 !== r.nodeValue ? n.toLowerCase() : i;
      },
      set: function(t, i, n) {
        var r;
        return !1 === i ? e.removeAttr(t, n) : ((r = e.propFix[n] || n) in t && (t[r] = !0), 
        t.setAttribute(n, n.toLowerCase())), n;
      }
    }, f.test(u) && n("jQuery.fn.attr('" + u + "') might use property instead of attribute")), 
    a.call(e, t, r, o));
  }, e.attrHooks.value = {
    get: function(e, t) {
      var i = (e.nodeName || "").toLowerCase();
      return "button" === i ? l.apply(this, arguments) : ("input" !== i && "option" !== i && n("jQuery.fn.attr('value') no longer gets properties"), 
      t in e ? e.value : null);
    },
    set: function(e, t) {
      var i = (e.nodeName || "").toLowerCase();
      if ("button" === i) return u.apply(this, arguments);
      "input" !== i && "option" !== i && n("jQuery.fn.attr('value', val) no longer sets properties"), 
      e.value = t;
    }
  };
  var p, m, g, v = e.fn.init, y = e.find, b = e.parseJSON, x = /^\s*</, w = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, _ = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, S = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
  for (g in e.fn.init = function(t, r, o) {
    var s, a;
    return t && "string" == typeof t && !e.isPlainObject(r) && (s = S.exec(e.trim(t))) && s[0] && (x.test(t) || n("$(html) HTML strings must start with '<' character"), 
    s[3] && n("$(html) HTML text after last tag is ignored"), "#" === s[0].charAt(0) && (n("HTML string cannot start with a '#' character"), 
    e.error("JQMIGRATE: Invalid selector string (XSS)")), r && r.context && r.context.nodeType && (r = r.context), 
    e.parseHTML) ? v.call(this, e.parseHTML(s[2], r && r.ownerDocument || r || document, !0), r, o) : (a = v.apply(this, arguments), 
    t && t.selector !== i ? (a.selector = t.selector, a.context = t.context) : (a.selector = "string" == typeof t ? t : "", 
    t && (a.context = t.nodeType ? t : r || document)), a);
  }, e.fn.init.prototype = e.fn, e.find = function(e) {
    var t = Array.prototype.slice.call(arguments);
    if ("string" == typeof e && w.test(e)) try {
      document.querySelector(e);
    } catch (i) {
      e = e.replace(_, function(e, t, i, n) {
        return "[" + t + i + '"' + n + '"]';
      });
      try {
        document.querySelector(e), n("Attribute selector with '#' must be quoted: " + t[0]), 
        t[0] = e;
      } catch (r) {
        n("Attribute selector with '#' was not fixed: " + t[0]);
      }
    }
    return y.apply(this, t);
  }, y) Object.prototype.hasOwnProperty.call(y, g) && (e.find[g] = y[g]);
  e.parseJSON = function(e) {
    return e ? b.apply(this, arguments) : (n("jQuery.parseJSON requires a valid JSON string"), 
    null);
  }, e.uaMatch = function(e) {
    e = e.toLowerCase();
    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
    return {
      browser: t[1] || "",
      version: t[2] || "0"
    };
  }, e.browser || (m = {}, (p = e.uaMatch(navigator.userAgent)).browser && (m[p.browser] = !0, 
  m.version = p.version), m.chrome ? m.webkit = !0 : m.webkit && (m.safari = !0), 
  e.browser = m), r(e, "browser", e.browser, "jQuery.browser is deprecated"), e.boxModel = e.support.boxModel = "CSS1Compat" === document.compatMode, 
  r(e, "boxModel", e.boxModel, "jQuery.boxModel is deprecated"), r(e.support, "boxModel", e.support.boxModel, "jQuery.support.boxModel is deprecated"), 
  e.sub = function() {
    function t(e, i) {
      return new t.fn.init(e, i);
    }
    e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, 
    t.sub = this.sub, t.fn.init = function(n, r) {
      var o = e.fn.init.call(this, n, r, i);
      return o instanceof t ? o : t(o);
    }, t.fn.init.prototype = t.fn;
    var i = t(document);
    return n("jQuery.sub() is deprecated"), t;
  }, e.fn.size = function() {
    return n("jQuery.fn.size() is deprecated; use the .length property"), this.length;
  };
  var C = !1;
  e.swap && e.each([ "height", "width", "reliableMarginRight" ], function(t, i) {
    var n = e.cssHooks[i] && e.cssHooks[i].get;
    n && (e.cssHooks[i].get = function() {
      var e;
      return C = !0, e = n.apply(this, arguments), C = !1, e;
    });
  }), e.swap = function(e, t, i, r) {
    var o, s, a = {};
    for (s in C || n("jQuery.swap() is undocumented and deprecated"), t) a[s] = e.style[s], 
    e.style[s] = t[s];
    for (s in o = i.apply(e, r || []), t) e.style[s] = a[s];
    return o;
  }, e.ajaxSetup({
    converters: {
      "text json": e.parseJSON
    }
  });
  var T = e.fn.data;
  e.fn.data = function(t) {
    var r, o, s = this[0];
    return !s || "events" !== t || 1 !== arguments.length || (r = e.data(s, t), o = e._data(s, t), 
    r !== i && r !== o || o === i) ? T.apply(this, arguments) : (n("Use of jQuery.fn.data('events') is deprecated"), 
    o);
  };
  var k = /\/(java|ecma)script/i;
  e.clean || (e.clean = function(t, i, r, o) {
    i = (i = !(i = i || document).nodeType && i[0] || i).ownerDocument || i, n("jQuery.clean() is deprecated");
    var s, a, l, u, c = [];
    if (e.merge(c, e.buildFragment(t, i).childNodes), r) for (l = function(e) {
      if (!e.type || k.test(e.type)) return o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : r.appendChild(e);
    }, s = 0; null != (a = c[s]); s++) e.nodeName(a, "script") && l(a) || (r.appendChild(a), 
    "undefined" != typeof a.getElementsByTagName && (u = e.grep(e.merge([], a.getElementsByTagName("script")), l), 
    c.splice.apply(c, [ s + 1, 0 ].concat(u)), s += u.length));
    return c;
  });
  var M = e.event.add, D = e.event.remove, A = e.event.trigger, P = e.fn.toggle, I = e.fn.live, E = e.fn.die, j = e.fn.load, F = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", O = new RegExp("\\b(?:" + F + ")\\b"), N = /(?:^|\s)hover(\.\S+|)\b/, z = function(t) {
    return "string" != typeof t || e.event.special.hover ? t : (N.test(t) && n("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), 
    t && t.replace(N, "mouseenter$1 mouseleave$1"));
  };
  e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), 
  e.event.dispatch && r(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), 
  e.event.add = function(e, t, i, r, o) {
    e !== document && O.test(t) && n("AJAX events should be attached to document: " + t), 
    M.call(this, e, z(t || ""), i, r, o);
  }, e.event.remove = function(e, t, i, n, r) {
    D.call(this, e, z(t) || "", i, n, r);
  }, e.each([ "load", "unload", "error" ], function(t, i) {
    e.fn[i] = function() {
      var e = Array.prototype.slice.call(arguments, 0);
      return "load" === i && "string" == typeof e[0] ? j.apply(this, e) : (n("jQuery.fn." + i + "() is deprecated"), 
      e.splice(0, 0, i), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), 
      this));
    };
  }), e.fn.toggle = function(t, i) {
    if (!e.isFunction(t) || !e.isFunction(i)) return P.apply(this, arguments);
    n("jQuery.fn.toggle(handler, handler...) is deprecated");
    var r = arguments, o = t.guid || e.guid++, s = 0, a = function(i) {
      var n = (e._data(this, "lastToggle" + t.guid) || 0) % s;
      return e._data(this, "lastToggle" + t.guid, n + 1), i.preventDefault(), r[n].apply(this, arguments) || !1;
    };
    for (a.guid = o; s < r.length; ) r[s++].guid = o;
    return this.click(a);
  }, e.fn.live = function(t, i, r) {
    return n("jQuery.fn.live() is deprecated"), I ? I.apply(this, arguments) : (e(this.context).on(t, this.selector, i, r), 
    this);
  }, e.fn.die = function(t, i) {
    return n("jQuery.fn.die() is deprecated"), E ? E.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", i), 
    this);
  }, e.event.trigger = function(e, t, i, r) {
    return i || O.test(e) || n("Global events are undocumented and deprecated"), A.call(this, e, t, i || document, r);
  }, e.each(F.split("|"), function(t, i) {
    e.event.special[i] = {
      setup: function() {
        var t = this;
        return t !== document && (e.event.add(document, i + "." + e.guid, function() {
          e.event.trigger(i, Array.prototype.slice.call(arguments, 1), t, !0);
        }), e._data(this, i, e.guid++)), !1;
      },
      teardown: function() {
        return this !== document && e.event.remove(document, i + "." + e._data(this, i)), 
        !1;
      }
    };
  }), e.event.special.ready = {
    setup: function() {
      this === document && n("'ready' event is deprecated");
    }
  };
  var L = e.fn.andSelf || e.fn.addBack, R = e.fn.find;
  if (e.fn.andSelf = function() {
    return n("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), L.apply(this, arguments);
  }, e.fn.find = function(e) {
    var t = R.apply(this, arguments);
    return t.context = this.context, t.selector = this.selector ? this.selector + " " + e : e, 
    t;
  }, e.Callbacks) {
    var H = e.Deferred, W = [ [ "resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved" ], [ "reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected" ], [ "notify", "progress", e.Callbacks("memory"), e.Callbacks("memory") ] ];
    e.Deferred = function(t) {
      var i = H(), r = i.promise();
      return i.pipe = r.pipe = function() {
        var t = arguments;
        return n("deferred.pipe() is deprecated"), e.Deferred(function(n) {
          e.each(W, function(o, s) {
            var a = e.isFunction(t[o]) && t[o];
            i[s[1]](function() {
              var t = a && a.apply(this, arguments);
              t && e.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, a ? [ t ] : arguments);
            });
          }), t = null;
        }).promise();
      }, i.isResolved = function() {
        return n("deferred.isResolved is deprecated"), "resolved" === i.state();
      }, i.isRejected = function() {
        return n("deferred.isRejected is deprecated"), "rejected" === i.state();
      }, t && t.call(i, i), i;
    };
  }
}(jQuery, window), function(e, t) {
  function i(t, i) {
    var r, o, s, a = t.nodeName.toLowerCase();
    return "area" === a ? (o = (r = t.parentNode).name, !(!t.href || !o || "map" !== r.nodeName.toLowerCase()) && (!!(s = e("img[usemap=#" + o + "]")[0]) && n(s))) : (/input|select|textarea|button|object/.test(a) ? !t.disabled : "a" === a && t.href || i) && n(t);
  }
  function n(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
      return "hidden" === e.css(this, "visibility");
    }).length;
  }
  var r, o, s = 0, a = /^ui-id-\d+$/;
  e.ui = e.ui || {}, e.extend(e.ui, {
    version: "1.10.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    focus: (r = e.fn.focus, function(t, i) {
      return "number" == typeof t ? this.each(function() {
        var n = this;
        setTimeout(function() {
          e(n).focus(), i && i.call(n);
        }, t);
      }) : r.apply(this, arguments);
    }),
    scrollParent: function() {
      var t;
      return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
        return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
      }).eq(0) : this.parents().filter(function() {
        return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
      }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
    },
    zIndex: function(i) {
      if (i !== t) return this.css("zIndex", i);
      if (this.length) for (var n, r, o = e(this[0]); o.length && o[0] !== document; ) {
        if (("absolute" === (n = o.css("position")) || "relative" === n || "fixed" === n) && (r = parseInt(o.css("zIndex"), 10), 
        !isNaN(r) && 0 !== r)) return r;
        o = o.parent();
      }
      return 0;
    },
    uniqueId: function() {
      return this.each(function() {
        this.id || (this.id = "ui-id-" + ++s);
      });
    },
    removeUniqueId: function() {
      return this.each(function() {
        a.test(this.id) && e(this).removeAttr("id");
      });
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
      return function(i) {
        return !!e.data(i, t);
      };
    }) : function(t, i, n) {
      return !!e.data(t, n[3]);
    },
    focusable: function(t) {
      return i(t, !isNaN(e.attr(t, "tabindex")));
    },
    tabbable: function(t) {
      var n = e.attr(t, "tabindex"), r = isNaN(n);
      return (r || n >= 0) && i(t, !r);
    }
  }), e("<a>").outerWidth(1).jquery || e.each([ "Width", "Height" ], function(i, n) {
    function r(t, i, n, r) {
      return e.each(o, function() {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), 
        r && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
      }), i;
    }
    var o = "Width" === n ? [ "Left", "Right" ] : [ "Top", "Bottom" ], s = n.toLowerCase(), a = {
      innerWidth: e.fn.innerWidth,
      innerHeight: e.fn.innerHeight,
      outerWidth: e.fn.outerWidth,
      outerHeight: e.fn.outerHeight
    };
    e.fn["inner" + n] = function(i) {
      return i === t ? a["inner" + n].call(this) : this.each(function() {
        e(this).css(s, r(this, i) + "px");
      });
    }, e.fn["outer" + n] = function(t, i) {
      return "number" != typeof t ? a["outer" + n].call(this, t) : this.each(function() {
        e(this).css(s, r(this, t, !0, i) + "px");
      });
    };
  }), e.fn.addBack || (e.fn.addBack = function(e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = (o = e.fn.removeData, 
  function(t) {
    return arguments.length ? o.call(this, e.camelCase(t)) : o.call(this);
  })), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), 
  e.fn.extend({
    disableSelection: function() {
      return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
        e.preventDefault();
      });
    },
    enableSelection: function() {
      return this.unbind(".ui-disableSelection");
    }
  }), e.extend(e.ui, {
    plugin: {
      add: function(t, i, n) {
        var r, o = e.ui[t].prototype;
        for (r in n) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([ i, n[r] ]);
      },
      call: function(e, t, i) {
        var n, r = e.plugins[t];
        if (r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (n = 0; n < r.length; n++) e.options[r[n][0]] && r[n][1].apply(e.element, i);
      }
    },
    hasScroll: function(t, i) {
      if ("hidden" === e(t).css("overflow")) return !1;
      var n = i && "left" === i ? "scrollLeft" : "scrollTop", r = !1;
      return t[n] > 0 || (t[n] = 1, r = t[n] > 0, t[n] = 0, r);
    }
  });
}(jQuery), function(e, t) {
  var i = 0, n = Array.prototype.slice, r = e.cleanData;
  e.cleanData = function(t) {
    for (var i, n = 0; null != (i = t[n]); n++) try {
      e(i).triggerHandler("remove");
    } catch (o) {}
    r(t);
  }, e.widget = function(t, i, n) {
    var r, o, s, a, l = {}, u = t.split(".")[0];
    t = t.split(".")[1], r = u + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][r.toLowerCase()] = function(t) {
      return !!e.data(t, r);
    }, e[u] = e[u] || {}, o = e[u][t], s = e[u][t] = function(e, t) {
      if (!this._createWidget) return new s(e, t);
      arguments.length && this._createWidget(e, t);
    }, e.extend(s, o, {
      version: n.version,
      _proto: e.extend({}, n),
      _childConstructors: []
    }), (a = new i()).options = e.widget.extend({}, a.options), e.each(n, function(t, n) {
      var r, o;
      e.isFunction(n) ? l[t] = (r = function() {
        return i.prototype[t].apply(this, arguments);
      }, o = function(e) {
        return i.prototype[t].apply(this, e);
      }, function() {
        var e, t = this._super, i = this._superApply;
        return this._super = r, this._superApply = o, e = n.apply(this, arguments), this._super = t, 
        this._superApply = i, e;
      }) : l[t] = n;
    }), s.prototype = e.widget.extend(a, {
      widgetEventPrefix: o && a.widgetEventPrefix || t
    }, l, {
      constructor: s,
      namespace: u,
      widgetName: t,
      widgetFullName: r
    }), o ? (e.each(o._childConstructors, function(t, i) {
      var n = i.prototype;
      e.widget(n.namespace + "." + n.widgetName, s, i._proto);
    }), delete o._childConstructors) : i._childConstructors.push(s), e.widget.bridge(t, s);
  }, e.widget.extend = function(i) {
    for (var r, o, s = n.call(arguments, 1), a = 0, l = s.length; a < l; a++) for (r in s[a]) o = s[a][r], 
    s[a].hasOwnProperty(r) && o !== t && (e.isPlainObject(o) ? i[r] = e.isPlainObject(i[r]) ? e.widget.extend({}, i[r], o) : e.widget.extend({}, o) : i[r] = o);
    return i;
  }, e.widget.bridge = function(i, r) {
    var o = r.prototype.widgetFullName || i;
    e.fn[i] = function(s) {
      var a = "string" == typeof s, l = n.call(arguments, 1), u = this;
      return s = !a && l.length ? e.widget.extend.apply(null, [ s ].concat(l)) : s, a ? this.each(function() {
        var n, r = e.data(this, o);
        return r ? e.isFunction(r[s]) && "_" !== s.charAt(0) ? (n = r[s].apply(r, l)) !== r && n !== t ? (u = n && n.jquery ? u.pushStack(n.get()) : n, 
        !1) : void 0 : e.error("no such method '" + s + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; attempted to call method '" + s + "'");
      }) : this.each(function() {
        var t = e.data(this, o);
        t ? t.option(s || {})._init() : e.data(this, o, new r(s, this));
      }), u;
    };
  }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function(t, n) {
      n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, 
      this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), 
      this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), 
      this._on(!0, this.element, {
        remove: function(e) {
          e.target === n && this.destroy();
        }
      }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), 
      this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), 
      this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
      this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), 
      this.focusable.removeClass("ui-state-focus");
    },
    _destroy: e.noop,
    widget: function() {
      return this.element;
    },
    option: function(i, n) {
      var r, o, s, a = i;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ("string" == typeof i) if (a = {}, i = (r = i.split(".")).shift(), r.length) {
        for (o = a[i] = e.widget.extend({}, this.options[i]), s = 0; s < r.length - 1; s++) o[r[s]] = o[r[s]] || {}, 
        o = o[r[s]];
        if (i = r.pop(), 1 === arguments.length) return o[i] === t ? null : o[i];
        o[i] = n;
      } else {
        if (1 === arguments.length) return this.options[i] === t ? null : this.options[i];
        a[i] = n;
      }
      return this._setOptions(a), this;
    },
    _setOptions: function(e) {
      var t;
      for (t in e) this._setOption(t, e[t]);
      return this;
    },
    _setOption: function(e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), 
      this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), 
      this;
    },
    enable: function() {
      return this._setOption("disabled", !1);
    },
    disable: function() {
      return this._setOption("disabled", !0);
    },
    _on: function(t, i, n) {
      var r, o = this;
      "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = r = e(i), this.bindings = this.bindings.add(i)) : (n = i, 
      i = this.element, r = this.widget()), e.each(n, function(n, s) {
        function a() {
          if (t || !0 !== o.options.disabled && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof s ? o[s] : s).apply(o, arguments);
        }
        "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
        var l = n.match(/^(\w+)\s*(.*)$/), u = l[1] + o.eventNamespace, c = l[2];
        c ? r.delegate(c, u, a) : i.bind(u, a);
      });
    },
    _off: function(e, t) {
      t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
      e.unbind(t).undelegate(t);
    },
    _delay: function(e, t) {
      function i() {
        return ("string" == typeof e ? n[e] : e).apply(n, arguments);
      }
      var n = this;
      return setTimeout(i, t || 0);
    },
    _hoverable: function(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function(t) {
          e(t.currentTarget).addClass("ui-state-hover");
        },
        mouseleave: function(t) {
          e(t.currentTarget).removeClass("ui-state-hover");
        }
      });
    },
    _focusable: function(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function(t) {
          e(t.currentTarget).addClass("ui-state-focus");
        },
        focusout: function(t) {
          e(t.currentTarget).removeClass("ui-state-focus");
        }
      });
    },
    _trigger: function(t, i, n) {
      var r, o, s = this.options[t];
      if (n = n || {}, (i = e.Event(i)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), 
      i.target = this.element[0], o = i.originalEvent) for (r in o) r in i || (i[r] = o[r]);
      return this.element.trigger(i, n), !(e.isFunction(s) && !1 === s.apply(this.element[0], [ i ].concat(n)) || i.isDefaultPrevented());
    }
  }, e.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function(t, i) {
    e.Widget.prototype["_" + t] = function(n, r, o) {
      "string" == typeof r && (r = {
        effect: r
      });
      var s, a = r ? !0 === r || "number" == typeof r ? i : r.effect || i : t;
      "number" == typeof (r = r || {}) && (r = {
        duration: r
      }), s = !e.isEmptyObject(r), r.complete = o, r.delay && n.delay(r.delay), s && e.effects && e.effects.effect[a] ? n[t](r) : a !== t && n[a] ? n[a](r.duration, r.easing, o) : n.queue(function(i) {
        e(this)[t](), o && o.call(n[0]), i();
      });
    };
  });
}(jQuery), function(e, t) {
  function i(e, t, i) {
    return [ parseFloat(e[0]) * (f.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (f.test(e[1]) ? i / 100 : 1) ];
  }
  function n(t, i) {
    return parseInt(e.css(t, i), 10) || 0;
  }
  function r(t) {
    var i = t[0];
    return 9 === i.nodeType ? {
      width: t.width(),
      height: t.height(),
      offset: {
        top: 0,
        left: 0
      }
    } : e.isWindow(i) ? {
      width: t.width(),
      height: t.height(),
      offset: {
        top: t.scrollTop(),
        left: t.scrollLeft()
      }
    } : i.preventDefault ? {
      width: 0,
      height: 0,
      offset: {
        top: i.pageY,
        left: i.pageX
      }
    } : {
      width: t.outerWidth(),
      height: t.outerHeight(),
      offset: t.offset()
    };
  }
  e.ui = e.ui || {};
  var o, s = Math.max, a = Math.abs, l = Math.round, u = /left|center|right/, c = /top|center|bottom/, d = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, f = /%$/, p = e.fn.position;
  e.position = {
    scrollbarWidth: function() {
      if (o !== t) return o;
      var i, n, r = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), s = r.children()[0];
      return e("body").append(r), i = s.offsetWidth, r.css("overflow", "scroll"), i === (n = s.offsetWidth) && (n = r[0].clientWidth), 
      r.remove(), o = i - n;
    },
    getScrollInfo: function(t) {
      var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"), r = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth;
      return {
        width: "scroll" === n || "auto" === n && t.height < t.element[0].scrollHeight ? e.position.scrollbarWidth() : 0,
        height: r ? e.position.scrollbarWidth() : 0
      };
    },
    getWithinInfo: function(t) {
      var i = e(t || window), n = e.isWindow(i[0]);
      return {
        element: i,
        isWindow: n,
        isDocument: !!i[0] && 9 === i[0].nodeType,
        offset: i.offset() || {
          left: 0,
          top: 0
        },
        scrollLeft: i.scrollLeft(),
        scrollTop: i.scrollTop(),
        width: n ? i.width() : i.outerWidth(),
        height: n ? i.height() : i.outerHeight()
      };
    }
  }, e.fn.position = function(t) {
    if (!t || !t.of) return p.apply(this, arguments);
    t = e.extend({}, t);
    var o, f, m, g, v, y, b = e(t.of), x = e.position.getWithinInfo(t.within), w = e.position.getScrollInfo(x), _ = (t.collision || "flip").split(" "), S = {};
    return y = r(b), b[0].preventDefault && (t.at = "left top"), f = y.width, m = y.height, 
    g = y.offset, v = e.extend({}, g), e.each([ "my", "at" ], function() {
      var e, i, n = (t[this] || "").split(" ");
      1 === n.length && (n = u.test(n[0]) ? n.concat([ "center" ]) : c.test(n[0]) ? [ "center" ].concat(n) : [ "center", "center" ]), 
      n[0] = u.test(n[0]) ? n[0] : "center", n[1] = c.test(n[1]) ? n[1] : "center", e = d.exec(n[0]), 
      i = d.exec(n[1]), S[this] = [ e ? e[0] : 0, i ? i[0] : 0 ], t[this] = [ h.exec(n[0])[0], h.exec(n[1])[0] ];
    }), 1 === _.length && (_[1] = _[0]), "right" === t.at[0] ? v.left += f : "center" === t.at[0] && (v.left += f / 2), 
    "bottom" === t.at[1] ? v.top += m : "center" === t.at[1] && (v.top += m / 2), o = i(S.at, f, m), 
    v.left += o[0], v.top += o[1], this.each(function() {
      var r, u, c = e(this), d = c.outerWidth(), h = c.outerHeight(), p = n(this, "marginLeft"), y = n(this, "marginTop"), C = d + p + n(this, "marginRight") + w.width, T = h + y + n(this, "marginBottom") + w.height, k = e.extend({}, v), M = i(S.my, c.outerWidth(), c.outerHeight());
      "right" === t.my[0] ? k.left -= d : "center" === t.my[0] && (k.left -= d / 2), "bottom" === t.my[1] ? k.top -= h : "center" === t.my[1] && (k.top -= h / 2), 
      k.left += M[0], k.top += M[1], e.support.offsetFractions || (k.left = l(k.left), 
      k.top = l(k.top)), r = {
        marginLeft: p,
        marginTop: y
      }, e.each([ "left", "top" ], function(i, n) {
        e.ui.position[_[i]] && e.ui.position[_[i]][n](k, {
          targetWidth: f,
          targetHeight: m,
          elemWidth: d,
          elemHeight: h,
          collisionPosition: r,
          collisionWidth: C,
          collisionHeight: T,
          offset: [ o[0] + M[0], o[1] + M[1] ],
          my: t.my,
          at: t.at,
          within: x,
          elem: c
        });
      }), t.using && (u = function(e) {
        var i = g.left - k.left, n = i + f - d, r = g.top - k.top, o = r + m - h, l = {
          target: {
            element: b,
            left: g.left,
            top: g.top,
            width: f,
            height: m
          },
          element: {
            element: c,
            left: k.left,
            top: k.top,
            width: d,
            height: h
          },
          horizontal: n < 0 ? "left" : i > 0 ? "right" : "center",
          vertical: o < 0 ? "top" : r > 0 ? "bottom" : "middle"
        };
        f < d && a(i + n) < f && (l.horizontal = "center"), m < h && a(r + o) < m && (l.vertical = "middle"), 
        s(a(i), a(n)) > s(a(r), a(o)) ? l.important = "horizontal" : l.important = "vertical", 
        t.using.call(this, e, l);
      }), c.offset(e.extend(k, {
        using: u
      }));
    });
  }, e.ui.position = {
    fit: {
      left: function(e, t) {
        var i, n = t.within, r = n.isWindow ? n.scrollLeft : n.offset.left, o = n.width, a = e.left - t.collisionPosition.marginLeft, l = r - a, u = a + t.collisionWidth - o - r;
        t.collisionWidth > o ? l > 0 && u <= 0 ? (i = e.left + l + t.collisionWidth - o - r, 
        e.left += l - i) : e.left = u > 0 && l <= 0 ? r : l > u ? r + o - t.collisionWidth : r : l > 0 ? e.left += l : u > 0 ? e.left -= u : e.left = s(e.left - a, e.left);
      },
      top: function(e, t) {
        var i, n = t.within, r = n.isWindow ? n.scrollTop : n.offset.top, o = t.within.height, a = e.top - t.collisionPosition.marginTop, l = r - a, u = a + t.collisionHeight - o - r;
        t.collisionHeight > o ? l > 0 && u <= 0 ? (i = e.top + l + t.collisionHeight - o - r, 
        e.top += l - i) : e.top = u > 0 && l <= 0 ? r : l > u ? r + o - t.collisionHeight : r : l > 0 ? e.top += l : u > 0 ? e.top -= u : e.top = s(e.top - a, e.top);
      }
    },
    flip: {
      left: function(e, t) {
        var i, n, r = t.within, o = r.offset.left + r.scrollLeft, s = r.width, l = r.isWindow ? r.scrollLeft : r.offset.left, u = e.left - t.collisionPosition.marginLeft, c = u - l, d = u + t.collisionWidth - s - l, h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, p = -2 * t.offset[0];
        c < 0 ? ((i = e.left + h + f + p + t.collisionWidth - s - o) < 0 || i < a(c)) && (e.left += h + f + p) : d > 0 && ((n = e.left - t.collisionPosition.marginLeft + h + f + p - l) > 0 || a(n) < d) && (e.left += h + f + p);
      },
      top: function(e, t) {
        var i, n, r = t.within, o = r.offset.top + r.scrollTop, s = r.height, l = r.isWindow ? r.scrollTop : r.offset.top, u = e.top - t.collisionPosition.marginTop, c = u - l, d = u + t.collisionHeight - s - l, h = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, p = -2 * t.offset[1];
        c < 0 ? (n = e.top + h + f + p + t.collisionHeight - s - o, e.top + h + f + p > c && (n < 0 || n < a(c)) && (e.top += h + f + p)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + h + f + p - l, 
        e.top + h + f + p > d && (i > 0 || a(i) < d) && (e.top += h + f + p));
      }
    },
    flipfit: {
      left: function() {
        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
      },
      top: function() {
        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
      }
    }
  }, function() {
    var t, i, n, r, o, s = document.getElementsByTagName("body")[0], a = document.createElement("div");
    for (o in t = document.createElement(s ? "div" : "body"), n = {
      visibility: "hidden",
      width: 0,
      height: 0,
      border: 0,
      margin: 0,
      background: "none"
    }, s && e.extend(n, {
      position: "absolute",
      left: "-1000px",
      top: "-1000px"
    }), n) t.style[o] = n[o];
    t.appendChild(a), (i = s || document.documentElement).insertBefore(t, i.firstChild), 
    a.style.cssText = "position: absolute; left: 10.7432222px;", r = e(a).offset().left, 
    e.support.offsetFractions = r > 10 && r < 11, t.innerHTML = "", i.removeChild(t);
  }();
}(jQuery), function(e) {
  e.widget("ui.menu", {
    version: "1.10.4",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-carat-1-e"
      },
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
        role: this.options.role,
        tabIndex: 0
      }).bind("click" + this.eventNamespace, e.proxy(function(e) {
        this.options.disabled && e.preventDefault();
      }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), 
      this._on({
        "mousedown .ui-menu-item > a": function(e) {
          e.preventDefault();
        },
        "click .ui-state-disabled > a": function(e) {
          e.preventDefault();
        },
        "click .ui-menu-item:has(a)": function(t) {
          var i = e(t.target).closest(".ui-menu-item");
          !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), 
          i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
          this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        },
        "mouseenter .ui-menu-item": function(t) {
          var i = e(t.currentTarget);
          i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i);
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function(e, t) {
          var i = this.active || this.element.children(".ui-menu-item").eq(0);
          t || this.focus(e, i);
        },
        blur: function(t) {
          this._delay(function() {
            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
          });
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function(t) {
          e(t.target).closest(".ui-menu").length || this.collapseAll(t), this.mouseHandled = !1;
        }
      });
    },
    _destroy: function() {
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), 
      this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var t = e(this);
        t.data("ui-menu-submenu-carat") && t.remove();
      }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
    },
    _keydown: function(t) {
      function i(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      var n, r, o, s, a, l = !0;
      switch (t.keyCode) {
       case e.ui.keyCode.PAGE_UP:
        this.previousPage(t);
        break;

       case e.ui.keyCode.PAGE_DOWN:
        this.nextPage(t);
        break;

       case e.ui.keyCode.HOME:
        this._move("first", "first", t);
        break;

       case e.ui.keyCode.END:
        this._move("last", "last", t);
        break;

       case e.ui.keyCode.UP:
        this.previous(t);
        break;

       case e.ui.keyCode.DOWN:
        this.next(t);
        break;

       case e.ui.keyCode.LEFT:
        this.collapse(t);
        break;

       case e.ui.keyCode.RIGHT:
        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
        break;

       case e.ui.keyCode.ENTER:
       case e.ui.keyCode.SPACE:
        this._activate(t);
        break;

       case e.ui.keyCode.ESCAPE:
        this.collapse(t);
        break;

       default:
        l = !1, r = this.previousFilter || "", o = String.fromCharCode(t.keyCode), s = !1, 
        clearTimeout(this.filterTimer), o === r ? s = !0 : o = r + o, a = new RegExp("^" + i(o), "i"), 
        n = this.activeMenu.children(".ui-menu-item").filter(function() {
          return a.test(e(this).children("a").text());
        }), (n = s && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n).length || (o = String.fromCharCode(t.keyCode), 
        a = new RegExp("^" + i(o), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
          return a.test(e(this).children("a").text());
        })), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function() {
          delete this.previousFilter;
        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter;
      }
      l && t.preventDefault();
    },
    _activate: function(e) {
      this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e));
    },
    refresh: function() {
      var t, i = this.options.icons.submenu, n = this.element.find(this.options.menus);
      this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), 
      n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function() {
        var t = e(this), n = t.prev("a"), r = e("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
        n.attr("aria-haspopup", "true").prepend(r), t.attr("aria-labelledby", n.attr("id"));
      }), (t = n.add(this.element)).children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
        tabIndex: -1,
        role: this._itemRole()
      }), t.children(":not(.ui-menu-item)").each(function() {
        var t = e(this);
        /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider");
      }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function() {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role];
    },
    _setOption: function(e, t) {
      "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), 
      this._super(e, t);
    },
    focus: function(e, t) {
      var i, n;
      this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), 
      n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), 
      this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), 
      e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
        this._close();
      }, this.delay), (i = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(i), 
      this.activeMenu = t.parent(), this._trigger("focus", e, {
        item: t
      });
    },
    _scrollIntoView: function(t) {
      var i, n, r, o, s, a;
      this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, 
      n = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, r = t.offset().top - this.activeMenu.offset().top - i - n, 
      o = this.activeMenu.scrollTop(), s = this.activeMenu.height(), a = t.height(), r < 0 ? this.activeMenu.scrollTop(o + r) : r + a > s && this.activeMenu.scrollTop(o + r - s + a));
    },
    blur: function(e, t) {
      t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), 
      this.active = null, this._trigger("blur", e, {
        item: this.active
      }));
    },
    _startOpening: function(e) {
      clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
        this._close(), this._open(e);
      }, this.delay));
    },
    _open: function(t) {
      var i = e.extend({
        of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
      t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    },
    collapseAll: function(t, i) {
      clearTimeout(this.timer), this.timer = this._delay(function() {
        var n = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
        n.length || (n = this.element), this._close(n), this.blur(t), this.activeMenu = n;
      }, this.delay);
    },
    _close: function(e) {
      e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active");
    },
    collapse: function(e) {
      var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      t && t.length && (this._close(), this.focus(e, t));
    },
    expand: function(e) {
      var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
      t && t.length && (this._open(t.parent()), this._delay(function() {
        this.focus(e, t);
      }));
    },
    next: function(e) {
      this._move("next", "first", e);
    },
    previous: function(e) {
      this._move("prev", "last", e);
    },
    isFirstItem: function() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function(e, t, i) {
      var n;
      this.active && (n = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), 
      n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[t]()), 
      this.focus(i, n);
    },
    nextPage: function(t) {
      var i, n, r;
      this.active ? this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, 
      r = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
        return (i = e(this)).offset().top - n - r < 0;
      }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())) : this.next(t);
    },
    previousPage: function(t) {
      var i, n, r;
      this.active ? this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, 
      r = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
        return (i = e(this)).offset().top - n + r > 0;
      }), this.focus(t, i)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())) : this.next(t);
    },
    _hasScroll: function() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function(t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");
      var i = {
        item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i);
    }
  });
}(jQuery), function(e) {
  var t = !1;
  e(document).mouseup(function() {
    t = !1;
  }), e.widget("ui.mouse", {
    version: "1.10.4",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function(e) {
        return t._mouseDown(e);
      }).bind("click." + this.widgetName, function(i) {
        if (!0 === e.data(i.target, t.widgetName + ".preventClickEvent")) return e.removeData(i.target, t.widgetName + ".preventClickEvent"), 
        i.stopImmediatePropagation(), !1;
      }), this.started = !1;
    },
    _mouseDestroy: function() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function(i) {
      if (!t) {
        this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
        var n = this, r = 1 === i.which, o = !("string" != typeof this.options.cancel || !i.target.nodeName) && e(i.target).closest(this.options.cancel).length;
        return !(r && !o && this._mouseCapture(i)) || (this.mouseDelayMet = !this.options.delay, 
        this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          n.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = !1 !== this._mouseStart(i), 
        !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), 
        this._mouseMoveDelegate = function(e) {
          return n._mouseMove(e);
        }, this._mouseUpDelegate = function(e) {
          return n._mouseUp(e);
        }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
        i.preventDefault(), t = !0, !0));
      }
    },
    _mouseMove: function(t) {
      return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), 
      t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), 
      this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
    },
    _mouseUp: function(t) {
      return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
      this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), 
      this._mouseStop(t)), !1;
    },
    _mouseDistanceMet: function(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet;
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return !0;
    }
  });
}(jQuery), function(e) {
  function t(e, t, i) {
    return e > t && e < t + i;
  }
  function i(e) {
    return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"));
  }
  e.widget("ui.sortable", e.ui.mouse, {
    version: "1.10.4",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _create: function() {
      var e = this.options;
      this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), 
      this.floating = !!this.items.length && ("x" === e.axis || i(this.items[0].item)), 
      this.offset = this.element.offset(), this._mouseInit(), this.ready = !0;
    },
    _destroy: function() {
      this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
      return this;
    },
    _setOption: function(t, i) {
      "disabled" === t ? (this.options[t] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : e.Widget.prototype._setOption.apply(this, arguments);
    },
    _mouseCapture: function(t, i) {
      var n = null, r = !1, o = this;
      return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), 
      e(t.target).parents().each(function() {
        if (e.data(this, o.widgetName + "-item") === o) return n = e(this), !1;
      }), e.data(t.target, o.widgetName + "-item") === o && (n = e(t.target)), !!n && (!(this.options.handle && !i && (e(this.options.handle, n).find("*").addBack().each(function() {
        this === t.target && (r = !0);
      }), !r)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))));
    },
    _mouseStart: function(t, i, n) {
      var r, o, s = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), 
      this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
      this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, e.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
      this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, 
      this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), 
      this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
      s.containment && this._setContainment(), s.cursor && "auto" !== s.cursor && (o = this.document.find("body"), 
      this.storedCursor = o.css("cursor"), o.css("cursor", s.cursor), this.storedStylesheet = e("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(o)), 
      s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
      this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
      this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
      this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
      !n) for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", t, this._uiHash(this));
      return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), 
      this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), 
      !0;
    },
    _mouseDrag: function(t) {
      var i, n, r, o, s = this.options, a = !1;
      for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), 
      this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), 
      this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? a = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (a = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed)), 
      t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? a = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (a = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed))), 
      !1 !== a && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), 
      this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
      this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
      i = this.items.length - 1; i >= 0; i--) if (r = (n = this.items[i]).item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(r === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === r || e.contains(this.placeholder[0], r) || "semi-dynamic" === this.options.type && e.contains(this.element[0], r))) {
        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
        this._rearrange(t, n), this._trigger("change", t, this._uiHash());
        break;
      }
      return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), 
      this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
      !1;
    },
    _mouseStop: function(t, i) {
      if (t) {
        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), 
        this.options.revert) {
          var n = this, r = this.placeholder.offset(), o = this.options.axis, s = {};
          o && "x" !== o || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), 
          o && "y" !== o || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), 
          this.reverting = !0, e(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
            n._clear(t);
          });
        } else this._clear(t, i);
        return !1;
      }
    },
    cancel: function() {
      if (this.dragging) {
        this._mouseUp({
          target: null
        }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), 
        this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), 
        this.containers[t].containerCache.over = 0);
      }
      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
      "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
      e.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), 
      this;
    },
    serialize: function(t) {
      var i = this._getItemsAsjQuery(t && t.connected), n = [];
      return t = t || {}, e(i).each(function() {
        var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
        i && n.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]));
      }), !n.length && t.key && n.push(t.key + "="), n.join("&");
    },
    toArray: function(t) {
      var i = this._getItemsAsjQuery(t && t.connected), n = [];
      return t = t || {}, i.each(function() {
        n.push(e(t.item || this).attr(t.attribute || "id") || "");
      }), n;
    },
    _intersectsWith: function(e) {
      var t = this.positionAbs.left, i = t + this.helperProportions.width, n = this.positionAbs.top, r = n + this.helperProportions.height, o = e.left, s = o + e.width, a = e.top, l = a + e.height, u = this.offset.click.top, c = this.offset.click.left, d = "x" === this.options.axis || n + u > a && n + u < l, h = "y" === this.options.axis || t + c > o && t + c < s, f = d && h;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? f : o < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < s && a < n + this.helperProportions.height / 2 && r - this.helperProportions.height / 2 < l;
    },
    _intersectsWithPointer: function(e) {
      var i = "x" === this.options.axis || t(this.positionAbs.top + this.offset.click.top, e.top, e.height), n = "y" === this.options.axis || t(this.positionAbs.left + this.offset.click.left, e.left, e.width), r = i && n, o = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
      return !!r && (this.floating ? s && "right" === s || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1));
    },
    _intersectsWithSides: function(e) {
      var i = t(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), n = t(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), r = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
      return this.floating && o ? "right" === o && n || "left" === o && !n : r && ("down" === r && i || "up" === r && !i);
    },
    _getDragVerticalDirection: function() {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== e && (e > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function() {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== e && (e > 0 ? "right" : "left");
    },
    refresh: function(e) {
      return this._refreshItems(e), this.refreshPositions(), this;
    },
    _connectWith: function() {
      var e = this.options;
      return e.connectWith.constructor === String ? [ e.connectWith ] : e.connectWith;
    },
    _getItemsAsjQuery: function(t) {
      function i() {
        a.push(this);
      }
      var n, r, o, s, a = [], l = [], u = this._connectWith();
      if (u && t) for (n = u.length - 1; n >= 0; n--) for (r = (o = e(u[n])).length - 1; r >= 0; r--) (s = e.data(o[r], this.widgetFullName)) && s !== this && !s.options.disabled && l.push([ e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s ]);
      for (l.push([ e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
      n = l.length - 1; n >= 0; n--) l[n][0].each(i);
      return e(a);
    },
    _removeCurrentsFromItems: function() {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = e.grep(this.items, function(e) {
        for (var i = 0; i < t.length; i++) if (t[i] === e.item[0]) return !1;
        return !0;
      });
    },
    _refreshItems: function(t) {
      this.items = [], this.containers = [ this ];
      var i, n, r, o, s, a, l, u, c = this.items, d = [ [ e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
        item: this.currentItem
      }) : e(this.options.items, this.element), this ] ], h = this._connectWith();
      if (h && this.ready) for (i = h.length - 1; i >= 0; i--) for (n = (r = e(h[i])).length - 1; n >= 0; n--) (o = e.data(r[n], this.widgetFullName)) && o !== this && !o.options.disabled && (d.push([ e.isFunction(o.options.items) ? o.options.items.call(o.element[0], t, {
        item: this.currentItem
      }) : e(o.options.items, o.element), o ]), this.containers.push(o));
      for (i = d.length - 1; i >= 0; i--) for (s = d[i][1], n = 0, u = (a = d[i][0]).length; n < u; n++) (l = e(a[n])).data(this.widgetName + "-item", s), 
      c.push({
        item: l,
        instance: s,
        width: 0,
        height: 0,
        left: 0,
        top: 0
      });
    },
    refreshPositions: function(t) {
      var i, n, r, o;
      for (this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), 
      i = this.items.length - 1; i >= 0; i--) (n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item, 
      t || (n.width = r.outerWidth(), n.height = r.outerHeight()), o = r.offset(), n.left = o.left, 
      n.top = o.top);
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), 
      this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, 
      this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), 
      this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      return this;
    },
    _createPlaceholder: function(t) {
      var i, n = (t = t || this).options;
      n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
        element: function() {
          var n = t.currentItem[0].nodeName.toLowerCase(), r = e("<" + n + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
          return "tr" === n ? t.currentItem.children().each(function() {
            e("<td>&#160;</td>", t.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(r);
          }) : "img" === n && r.attr("src", t.currentItem.attr("src")), i || r.css("visibility", "hidden"), 
          r;
        },
        update: function(e, r) {
          i && !n.forcePlaceholderSize || (r.height() || r.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), 
          r.width() || r.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)));
        }
      }), t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), 
      n.placeholder.update(t, t.placeholder);
    },
    _contactContainers: function(n) {
      var r, o, s, a, l, u, c, d, h, f, p = null, m = null;
      for (r = this.containers.length - 1; r >= 0; r--) if (!e.contains(this.currentItem[0], this.containers[r].element[0])) if (this._intersectsWith(this.containers[r].containerCache)) {
        if (p && e.contains(this.containers[r].element[0], p.element[0])) continue;
        p = this.containers[r], m = r;
      } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", n, this._uiHash(this)), 
      this.containers[r].containerCache.over = 0);
      if (p) if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", n, this._uiHash(this)), 
      this.containers[m].containerCache.over = 1); else {
        for (s = 1e4, a = null, l = (f = p.floating || i(this.currentItem)) ? "left" : "top", 
        u = f ? "width" : "height", c = this.positionAbs[l] + this.offset.click[l], o = this.items.length - 1; o >= 0; o--) e.contains(this.containers[m].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (f && !t(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height) || (d = this.items[o].item.offset()[l], 
        h = !1, Math.abs(d - c) > Math.abs(d + this.items[o][u] - c) && (h = !0, d += this.items[o][u]), 
        Math.abs(d - c) < s && (s = Math.abs(d - c), a = this.items[o], this.direction = h ? "up" : "down")));
        if (!a && !this.options.dropOnEmpty) return;
        if (this.currentContainer === this.containers[m]) return;
        a ? this._rearrange(n, a, null, !0) : this._rearrange(n, null, this.containers[m].element, !0), 
        this._trigger("change", n, this._uiHash()), this.containers[m]._trigger("change", n, this._uiHash(this)), 
        this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), 
        this.containers[m]._trigger("over", n, this._uiHash(this)), this.containers[m].containerCache.over = 1;
      }
    },
    _createHelper: function(t) {
      var i = this.options, n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [ t, this.currentItem ])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return n.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), 
      n[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()), 
      n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()), 
      n;
    },
    _adjustOffsetFromHelper: function(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 
      "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function() {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), 
      t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
        top: 0,
        left: 0
      }), {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function() {
      if ("relative" === this.cssPosition) {
        var e = this.currentItem.position();
        return {
          top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }
      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function() {
      var t, i, n, r = this.options;
      "parent" === r.containment && (r.containment = this.helper[0].parentNode), "document" !== r.containment && "window" !== r.containment || (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" === r.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" === r.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
      /^(document|window|parent)$/.test(r.containment) || (t = e(r.containment)[0], i = e(r.containment).offset(), 
      n = "hidden" !== e(t).css("overflow"), this.containment = [ i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
    },
    _convertPositionTo: function(t, i) {
      i || (i = this.position);
      var n = "absolute" === t ? 1 : -1, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(r[0].tagName);
      return {
        top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * n,
        left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * n
      };
    },
    _generatePosition: function(t) {
      var i, n, r = this.options, o = t.pageX, s = t.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
      this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), 
      t.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), 
      t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), 
      t.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), 
      r.grid && (i = this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1], 
      s = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - r.grid[1] : i + r.grid[1] : i, 
      n = this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0], 
      o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - r.grid[0] : n + r.grid[0] : n)), 
      {
        top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
      };
    },
    _rearrange: function(e, t, i, n) {
      i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), 
      this.counter = this.counter ? ++this.counter : 1;
      var r = this.counter;
      this._delay(function() {
        r === this.counter && this.refreshPositions(!n);
      });
    },
    _clear: function(e, t) {
      function i(e, t, i) {
        return function(n) {
          i._trigger(e, n, t._uiHash(t));
        };
      }
      this.reverting = !1;
      var n, r = [];
      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
      this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (n in this._storedCSS) "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();
      for (this.fromOutside && !t && r.push(function(e) {
        this._trigger("receive", e, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function(e) {
        this._trigger("update", e, this._uiHash());
      }), this !== this.currentContainer && (t || (r.push(function(e) {
        this._trigger("remove", e, this._uiHash());
      }), r.push(function(e) {
        return function(t) {
          e._trigger("receive", t, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), r.push(function(e) {
        return function(t) {
          e._trigger("update", t, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) t || r.push(i("deactivate", this, this.containers[n])), 
      this.containers[n].containerCache.over && (r.push(i("out", this, this.containers[n])), 
      this.containers[n].containerCache.over = 0);
      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
      this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
      this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
      this.dragging = !1, this.cancelHelperRemoval) {
        if (!t) {
          for (this._trigger("beforeStop", e, this._uiHash()), n = 0; n < r.length; n++) r[n].call(this, e);
          this._trigger("stop", e, this._uiHash());
        }
        return this.fromOutside = !1, !1;
      }
      if (t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
      this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, 
      !t) {
        for (n = 0; n < r.length; n++) r[n].call(this, e);
        this._trigger("stop", e, this._uiHash());
      }
      return this.fromOutside = !1, !0;
    },
    _trigger: function() {
      !1 === e.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
    },
    _uiHash: function(t) {
      var i = t || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || e([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: t ? t.element : null
      };
    }
  });
}(jQuery), function(e) {
  e.widget("ui.autocomplete", {
    version: "1.10.4",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function() {
      var t, i, n, r = this.element[0].nodeName.toLowerCase(), o = "textarea" === r, s = "input" === r;
      this.isMultiLine = !!o || !s && this.element.prop("isContentEditable"), this.valueMethod = this.element[o || s ? "val" : "text"], 
      this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), 
      this._on(this.element, {
        keydown: function(r) {
          if (this.element.prop("readOnly")) return t = !0, n = !0, void (i = !0);
          t = !1, n = !1, i = !1;
          var o = e.ui.keyCode;
          switch (r.keyCode) {
           case o.PAGE_UP:
            t = !0, this._move("previousPage", r);
            break;

           case o.PAGE_DOWN:
            t = !0, this._move("nextPage", r);
            break;

           case o.UP:
            t = !0, this._keyEvent("previous", r);
            break;

           case o.DOWN:
            t = !0, this._keyEvent("next", r);
            break;

           case o.ENTER:
           case o.NUMPAD_ENTER:
            this.menu.active && (t = !0, r.preventDefault(), this.menu.select(r));
            break;

           case o.TAB:
            this.menu.active && this.menu.select(r);
            break;

           case o.ESCAPE:
            this.menu.element.is(":visible") && (this._value(this.term), this.close(r), r.preventDefault());
            break;

           default:
            i = !0, this._searchTimeout(r);
          }
        },
        keypress: function(n) {
          if (t) return t = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault());
          if (!i) {
            var r = e.ui.keyCode;
            switch (n.keyCode) {
             case r.PAGE_UP:
              this._move("previousPage", n);
              break;

             case r.PAGE_DOWN:
              this._move("nextPage", n);
              break;

             case r.UP:
              this._keyEvent("previous", n);
              break;

             case r.DOWN:
              this._keyEvent("next", n);
            }
          }
        },
        input: function(e) {
          if (n) return n = !1, void e.preventDefault();
          this._searchTimeout(e);
        },
        focus: function() {
          this.selectedItem = null, this.previous = this._value();
        },
        blur: function(e) {
          this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), 
          this._change(e));
        }
      }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
        role: null
      }).hide().data("ui-menu"), this._on(this.menu.element, {
        mousedown: function(t) {
          t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
            delete this.cancelBlur;
          });
          var i = this.menu.element[0];
          e(t.target).closest(".ui-menu-item").length || this._delay(function() {
            var t = this;
            this.document.one("mousedown", function(n) {
              n.target === t.element[0] || n.target === i || e.contains(i, n.target) || t.close();
            });
          });
        },
        menufocus: function(t, i) {
          if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), 
          void this.document.one("mousemove", function() {
            e(t.target).trigger(t.originalEvent);
          });
          var n = i.item.data("ui-autocomplete-item");
          !1 !== this._trigger("focus", t, {
            item: n
          }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value) : this.liveRegion.text(n.value);
        },
        menuselect: function(e, t) {
          var i = t.item.data("ui-autocomplete-item"), n = this.previous;
          this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, 
          this._delay(function() {
            this.previous = n, this.selectedItem = i;
          })), !1 !== this._trigger("select", e, {
            item: i
          }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i;
        }
      }), this.liveRegion = e("<span>", {
        role: "status",
        "aria-live": "polite"
      }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
        beforeunload: function() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy: function() {
      clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), 
      this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function(e, t) {
      this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), 
      "disabled" === e && t && this.xhr && this.xhr.abort();
    },
    _appendTo: function() {
      var t = this.options.appendTo;
      return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), 
      t.length || (t = this.document[0].body), t;
    },
    _initSource: function() {
      var t, i, n = this;
      e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, n) {
        n(e.ui.autocomplete.filter(t, i.term));
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, r) {
        n.xhr && n.xhr.abort(), n.xhr = e.ajax({
          url: i,
          data: t,
          dataType: "json",
          success: function(e) {
            r(e);
          },
          error: function() {
            r([]);
          }
        });
      }) : this.source = this.options.source;
    },
    _searchTimeout: function(e) {
      clearTimeout(this.searching), this.searching = this._delay(function() {
        this.term !== this._value() && (this.selectedItem = null, this.search(null, e));
      }, this.options.delay);
    },
    search: function(e, t) {
      return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0;
    },
    _search: function(e) {
      this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
      this.source({
        term: e
      }, this._response());
    },
    _response: function() {
      var t = ++this.requestIndex;
      return e.proxy(function(e) {
        t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
      }, this);
    },
    __response: function(e) {
      e && (e = this._normalize(e)), this._trigger("response", null, {
        content: e
      }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), 
      this._trigger("open")) : this._close();
    },
    close: function(e) {
      this.cancelSearch = !0, this._close(e);
    },
    _close: function(e) {
      this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), 
      this.isNewMenu = !0, this._trigger("close", e));
    },
    _change: function(e) {
      this.previous !== this._value() && this._trigger("change", e, {
        item: this.selectedItem
      });
    },
    _normalize: function(t) {
      return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
        return "string" == typeof t ? {
          label: t,
          value: t
        } : e.extend({
          label: t.label || t.value,
          value: t.value || t.label
        }, t);
      });
    },
    _suggest: function(t) {
      var i = this.menu.element.empty();
      this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), 
      i.position(e.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next();
    },
    _resizeMenu: function() {
      var e = this.menu.element;
      e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function(t, i) {
      var n = this;
      e.each(i, function(e, i) {
        n._renderItemData(t, i);
      });
    },
    _renderItemData: function(e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t);
    },
    _renderItem: function(t, i) {
      return e("<li>").append(e("<a>").text(i.label)).appendTo(t);
    },
    _move: function(e, t) {
      if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), 
      void this.menu.blur()) : void this.menu[e](t);
      this.search(null, t);
    },
    widget: function() {
      return this.menu.element;
    },
    _value: function() {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function(e, t) {
      this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault());
    }
  }), e.extend(e.ui.autocomplete, {
    escapeRegex: function(e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter: function(t, i) {
      var n = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
      return e.grep(t, function(e) {
        return n.test(e.label || e.value || e);
      });
    }
  }), e.widget("ui.autocomplete", e.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function(e) {
          return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        }
      }
    },
    __response: function(e) {
      var t;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, 
      this.liveRegion.text(t));
    }
  });
}(jQuery), function(e) {
  e.widget("ui.draggable", e.ui.mouse, {
    version: "1.10.4",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function() {
      "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), 
      this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), 
      this._mouseInit();
    },
    _destroy: function() {
      this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), 
      this._mouseDestroy();
    },
    _mouseCapture: function(t) {
      var i = this.options;
      return !(this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(t), 
      !!this.handle && (e(!0 === i.iframeFix ? "iframe" : i.iframeFix).each(function() {
        e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
          width: this.offsetWidth + "px",
          height: this.offsetHeight + "px",
          position: "absolute",
          opacity: "0.001",
          zIndex: 1e3
        }).css(e(this).offset()).appendTo("body");
      }), !0));
    },
    _mouseStart: function(t) {
      var i = this.options;
      return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), 
      this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), 
      this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), 
      this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), 
      this.offset = this.positionAbs = this.element.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, this.offset.scroll = !1, e.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, 
      this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), 
      this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), 
      e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), 
      e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0);
    },
    _mouseDrag: function(t, i) {
      if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), 
      this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), 
      !i) {
        var n = this._uiHash();
        if (!1 === this._trigger("drag", t, n)) return this._mouseUp({}), !1;
        this.position = n.position;
      }
      return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
      this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
      e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
    },
    _mouseStop: function(t) {
      var i = this, n = !1;
      return e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), 
      this.dropped && (n = this.dropped, this.dropped = !1), !("original" === this.options.helper && !e.contains(this.element[0].ownerDocument, this.element[0])) && ("invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        !1 !== i._trigger("stop", t) && i._clear();
      }) : !1 !== this._trigger("stop", t) && this._clear(), !1);
    },
    _mouseUp: function(t) {
      return e("div.ui-draggable-iframeFix").each(function() {
        this.parentNode.removeChild(this);
      }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t);
    },
    cancel: function() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), 
      this;
    },
    _getHandle: function(t) {
      return !this.options.handle || !!e(t.target).closest(this.element.find(this.options.handle)).length;
    },
    _createHelper: function(t) {
      var i = this.options, n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [ t ])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
      return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), 
      n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), 
      n;
    },
    _adjustOffsetFromHelper: function(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 
      "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function() {
      var t = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), 
      t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
        top: 0,
        left: 0
      }), {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function() {
      if ("relative" === this.cssPosition) {
        var e = this.element.position();
        return {
          top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }
      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function() {
      var t, i, n, r = this.options;
      r.containment ? "window" !== r.containment ? "document" !== r.containment ? r.containment.constructor !== Array ? ("parent" === r.containment && (r.containment = this.helper[0].parentNode), 
      (n = (i = e(r.containment))[0]) && (t = "hidden" !== i.css("overflow"), this.containment = [ (parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
      this.relative_container = i)) : this.containment = r.containment : this.containment = [ 0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ] : this.containment = [ e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ] : this.containment = null;
    },
    _convertPositionTo: function(t, i) {
      i || (i = this.position);
      var n = "absolute" === t ? 1 : -1, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
      return this.offset.scroll || (this.offset.scroll = {
        top: r.scrollTop(),
        left: r.scrollLeft()
      }), {
        top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * n,
        left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * n
      };
    },
    _generatePosition: function(t) {
      var i, n, r, o, s = this.options, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = t.pageX, u = t.pageY;
      return this.offset.scroll || (this.offset.scroll = {
        top: a.scrollTop(),
        left: a.scrollLeft()
      }), this.originalPosition && (this.containment && (this.relative_container ? (n = this.relative_container.offset(), 
      i = [ this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top ]) : i = this.containment, 
      t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), 
      t.pageY - this.offset.click.top < i[1] && (u = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), 
      t.pageY - this.offset.click.top > i[3] && (u = i[3] + this.offset.click.top)), s.grid && (r = s.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY, 
      u = i ? r - this.offset.click.top >= i[1] || r - this.offset.click.top > i[3] ? r : r - this.offset.click.top >= i[1] ? r - s.grid[1] : r + s.grid[1] : r, 
      o = s.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX, 
      l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - s.grid[0] : o + s.grid[0] : o)), 
      {
        top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
      };
    },
    _clear: function() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
      this.helper = null, this.cancelHelperRemoval = !1;
    },
    _trigger: function(t, i, n) {
      return n = n || this._uiHash(), e.ui.plugin.call(this, t, [ i, n ]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), 
      e.Widget.prototype._trigger.call(this, t, i, n);
    },
    plugins: {},
    _uiHash: function() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  }), e.ui.plugin.add("draggable", "connectToSortable", {
    start: function(t, i) {
      var n = e(this).data("ui-draggable"), r = n.options, o = e.extend({}, i, {
        item: n.element
      });
      n.sortables = [], e(r.connectToSortable).each(function() {
        var i = e.data(this, "ui-sortable");
        i && !i.options.disabled && (n.sortables.push({
          instance: i,
          shouldRevert: i.options.revert
        }), i.refreshPositions(), i._trigger("activate", t, o));
      });
    },
    stop: function(t, i) {
      var n = e(this).data("ui-draggable"), r = e.extend({}, i, {
        item: n.element
      });
      e.each(n.sortables, function() {
        this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, 
        this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), 
        this.instance.options.helper = this.instance.options._helper, "original" === n.options.helper && this.instance.currentItem.css({
          top: "auto",
          left: "auto"
        })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, r));
      });
    },
    drag: function(t, i) {
      var n = e(this).data("ui-draggable"), r = this;
      e.each(n.sortables, function() {
        var o = !1, s = this;
        this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, 
        this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, 
        e.each(n.sortables, function() {
          return this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, 
          this.instance.offset.click = n.offset.click, this !== s && this.instance._intersectsWith(this.instance.containerCache) && e.contains(s.instance.element[0], this.instance.element[0]) && (o = !1), 
          o;
        })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(r).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), 
        this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
          return i.helper[0];
        }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), 
        this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = n.offset.click.top, 
        this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, 
        this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, 
        n._trigger("toSortable", t), n.dropped = this.instance.element, n.currentItem = n.element, 
        this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, 
        this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), 
        this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, 
        this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), 
        n._trigger("fromSortable", t), n.dropped = !1);
      });
    }
  }), e.ui.plugin.add("draggable", "cursor", {
    start: function() {
      var t = e("body"), i = e(this).data("ui-draggable").options;
      t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor);
    },
    stop: function() {
      var t = e(this).data("ui-draggable").options;
      t._cursor && e("body").css("cursor", t._cursor);
    }
  }), e.ui.plugin.add("draggable", "opacity", {
    start: function(t, i) {
      var n = e(i.helper), r = e(this).data("ui-draggable").options;
      n.css("opacity") && (r._opacity = n.css("opacity")), n.css("opacity", r.opacity);
    },
    stop: function(t, i) {
      var n = e(this).data("ui-draggable").options;
      n._opacity && e(i.helper).css("opacity", n._opacity);
    }
  }), e.ui.plugin.add("draggable", "scroll", {
    start: function() {
      var t = e(this).data("ui-draggable");
      t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset());
    },
    drag: function(t) {
      var i = e(this).data("ui-draggable"), n = i.options, r = !1;
      i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = r = i.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = r = i.scrollParent[0].scrollTop - n.scrollSpeed)), 
      n.axis && "y" === n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = r = i.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = r = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed))), 
      n.axis && "y" === n.axis || (t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed)))), 
      !1 !== r && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t);
    }
  }), e.ui.plugin.add("draggable", "snap", {
    start: function() {
      var t = e(this).data("ui-draggable"), i = t.options;
      t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
        var i = e(this), n = i.offset();
        this !== t.element[0] && t.snapElements.push({
          item: this,
          width: i.outerWidth(),
          height: i.outerHeight(),
          top: n.top,
          left: n.left
        });
      });
    },
    drag: function(t, i) {
      var n, r, o, s, a, l, u, c, d, h, f = e(this).data("ui-draggable"), p = f.options, m = p.snapTolerance, g = i.offset.left, v = g + f.helperProportions.width, y = i.offset.top, b = y + f.helperProportions.height;
      for (d = f.snapElements.length - 1; d >= 0; d--) l = (a = f.snapElements[d].left) + f.snapElements[d].width, 
      c = (u = f.snapElements[d].top) + f.snapElements[d].height, v < a - m || g > l + m || b < u - m || y > c + m || !e.contains(f.snapElements[d].item.ownerDocument, f.snapElements[d].item) ? (f.snapElements[d].snapping && f.options.snap.release && f.options.snap.release.call(f.element, t, e.extend(f._uiHash(), {
        snapItem: f.snapElements[d].item
      })), f.snapElements[d].snapping = !1) : ("inner" !== p.snapMode && (n = Math.abs(u - b) <= m, 
      r = Math.abs(c - y) <= m, o = Math.abs(a - v) <= m, s = Math.abs(l - g) <= m, n && (i.position.top = f._convertPositionTo("relative", {
        top: u - f.helperProportions.height,
        left: 0
      }).top - f.margins.top), r && (i.position.top = f._convertPositionTo("relative", {
        top: c,
        left: 0
      }).top - f.margins.top), o && (i.position.left = f._convertPositionTo("relative", {
        top: 0,
        left: a - f.helperProportions.width
      }).left - f.margins.left), s && (i.position.left = f._convertPositionTo("relative", {
        top: 0,
        left: l
      }).left - f.margins.left)), h = n || r || o || s, "outer" !== p.snapMode && (n = Math.abs(u - y) <= m, 
      r = Math.abs(c - b) <= m, o = Math.abs(a - g) <= m, s = Math.abs(l - v) <= m, n && (i.position.top = f._convertPositionTo("relative", {
        top: u,
        left: 0
      }).top - f.margins.top), r && (i.position.top = f._convertPositionTo("relative", {
        top: c - f.helperProportions.height,
        left: 0
      }).top - f.margins.top), o && (i.position.left = f._convertPositionTo("relative", {
        top: 0,
        left: a
      }).left - f.margins.left), s && (i.position.left = f._convertPositionTo("relative", {
        top: 0,
        left: l - f.helperProportions.width
      }).left - f.margins.left)), !f.snapElements[d].snapping && (n || r || o || s || h) && f.options.snap.snap && f.options.snap.snap.call(f.element, t, e.extend(f._uiHash(), {
        snapItem: f.snapElements[d].item
      })), f.snapElements[d].snapping = n || r || o || s || h);
    }
  }), e.ui.plugin.add("draggable", "stack", {
    start: function() {
      var t, i = this.data("ui-draggable").options, n = e.makeArray(e(i.stack)).sort(function(t, i) {
        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0);
      });
      n.length && (t = parseInt(e(n[0]).css("zIndex"), 10) || 0, e(n).each(function(i) {
        e(this).css("zIndex", t + i);
      }), this.css("zIndex", t + n.length));
    }
  }), e.ui.plugin.add("draggable", "zIndex", {
    start: function(t, i) {
      var n = e(i.helper), r = e(this).data("ui-draggable").options;
      n.css("zIndex") && (r._zIndex = n.css("zIndex")), n.css("zIndex", r.zIndex);
    },
    stop: function(t, i) {
      var n = e(this).data("ui-draggable").options;
      n._zIndex && e(i.helper).css("zIndex", n._zIndex);
    }
  });
}(jQuery), function(e) {
  function t(e, t) {
    if (!(e.originalEvent.touches.length > 1)) {
      e.preventDefault();
      var i = e.originalEvent.changedTouches[0], n = document.createEvent("MouseEvents");
      n.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), 
      e.target.dispatchEvent(n);
    }
  }
  if (e.support.touch = "ontouchend" in document, e.support.touch) {
    var i, n = e.ui.mouse.prototype, r = n._mouseInit, o = n._mouseDestroy;
    n._touchStart = function(e) {
      var n = this;
      !i && n._mouseCapture(e.originalEvent.changedTouches[0]) && (i = !0, n._touchMoved = !1, 
      t(e, "mouseover"), t(e, "mousemove"), t(e, "mousedown"));
    }, n._touchMove = function(e) {
      i && (this._touchMoved = !0, t(e, "mousemove"));
    }, n._touchEnd = function(e) {
      i && (t(e, "mouseup"), t(e, "mouseout"), this._touchMoved || t(e, "click"), i = !1);
    }, n._mouseInit = function() {
      var t = this;
      t.element.bind({
        touchstart: e.proxy(t, "_touchStart"),
        touchmove: e.proxy(t, "_touchMove"),
        touchend: e.proxy(t, "_touchEnd")
      }), r.call(t);
    }, n._mouseDestroy = function() {
      var t = this;
      t.element.unbind({
        touchstart: e.proxy(t, "_touchStart"),
        touchmove: e.proxy(t, "_touchMove"),
        touchend: e.proxy(t, "_touchEnd")
      }), o.call(t);
    };
  }
}(jQuery), function(e, t) {
  "use strict";
  var i;
  e.rails !== t && e.error("jquery-ujs has already been loaded!");
  var n = e(document);
  e.rails = i = {
    linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
    buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
    inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
    formSubmitSelector: "form",
    formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
    disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
    enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
    requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
    fileInputSelector: "input[type=file]:not([disabled])",
    linkDisableSelector: "a[data-disable-with], a[data-disable]",
    buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
    csrfToken: function() {
      return e("meta[name=csrf-token]").attr("content");
    },
    csrfParam: function() {
      return e("meta[name=csrf-param]").attr("content");
    },
    CSRFProtection: function(e) {
      var t = i.csrfToken();
      t && e.setRequestHeader("X-CSRF-Token", t);
    },
    refreshCSRFTokens: function() {
      e('form input[name="' + i.csrfParam() + '"]').val(i.csrfToken());
    },
    fire: function(t, i, n) {
      var r = e.Event(i);
      return t.trigger(r, n), !1 !== r.result;
    },
    confirm: function(e) {
      return confirm(e);
    },
    ajax: function(t) {
      return e.ajax(t);
    },
    href: function(e) {
      return e[0].href;
    },
    isRemote: function(e) {
      return e.data("remote") !== t && !1 !== e.data("remote");
    },
    handleRemote: function(n) {
      var r, o, s, a, l, u;
      if (i.fire(n, "ajax:before")) {
        if (a = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, 
        n.is("form")) {
          r = n.data("ujs:submit-button-formmethod") || n.attr("method"), o = n.data("ujs:submit-button-formaction") || n.attr("action"), 
          s = e(n[0]).serializeArray();
          var c = n.data("ujs:submit-button");
          c && (s.push(c), n.data("ujs:submit-button", null)), n.data("ujs:submit-button-formmethod", null), 
          n.data("ujs:submit-button-formaction", null);
        } else n.is(i.inputChangeSelector) ? (r = n.data("method"), o = n.data("url"), s = n.serialize(), 
        n.data("params") && (s = s + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (r = n.data("method") || "get", 
        o = n.data("url"), s = n.serialize(), n.data("params") && (s = s + "&" + n.data("params"))) : (r = n.data("method"), 
        o = i.href(n), s = n.data("params") || null);
        return u = {
          type: r || "GET",
          data: s,
          dataType: l,
          beforeSend: function(e, r) {
            if (r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), 
            !i.fire(n, "ajax:beforeSend", [ e, r ])) return !1;
            n.trigger("ajax:send", e);
          },
          success: function(e, t, i) {
            n.trigger("ajax:success", [ e, t, i ]);
          },
          complete: function(e, t) {
            n.trigger("ajax:complete", [ e, t ]);
          },
          error: function(e, t, i) {
            n.trigger("ajax:error", [ e, t, i ]);
          },
          crossDomain: i.isCrossDomain(o)
        }, a && (u.xhrFields = {
          withCredentials: a
        }), o && (u.url = o), i.ajax(u);
      }
      return !1;
    },
    isCrossDomain: function(e) {
      var t = document.createElement("a");
      t.href = location.href;
      var i = document.createElement("a");
      try {
        return i.href = e, i.href = i.href, !((!i.protocol || ":" === i.protocol) && !i.host || t.protocol + "//" + t.host == i.protocol + "//" + i.host);
      } catch (n) {
        return !0;
      }
    },
    handleMethod: function(n) {
      var r = i.href(n), o = n.data("method"), s = n.attr("target"), a = i.csrfToken(), l = i.csrfParam(), u = e('<form method="post" action="' + r + '"></form>'), c = '<input name="_method" value="' + o + '" type="hidden" />';
      l === t || a === t || i.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), 
      s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit();
    },
    formElements: function(t, i) {
      return t.is("form") ? e(t[0].elements).filter(i) : t.find(i);
    },
    disableFormElements: function(t) {
      i.formElements(t, i.disableSelector).each(function() {
        i.disableFormElement(e(this));
      });
    },
    disableFormElement: function(e) {
      var i, n;
      i = e.is("button") ? "html" : "val", (n = e.data("disable-with")) !== t && (e.data("ujs:enable-with", e[i]()), 
      e[i](n)), e.prop("disabled", !0), e.data("ujs:disabled", !0);
    },
    enableFormElements: function(t) {
      i.formElements(t, i.enableSelector).each(function() {
        i.enableFormElement(e(this));
      });
    },
    enableFormElement: function(e) {
      var i = e.is("button") ? "html" : "val";
      e.data("ujs:enable-with") !== t && (e[i](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), 
      e.prop("disabled", !1), e.removeData("ujs:disabled");
    },
    allowAction: function(e) {
      var t, n = e.data("confirm"), r = !1;
      if (!n) return !0;
      if (i.fire(e, "confirm")) {
        try {
          r = i.confirm(n);
        } catch (o) {
          (console.error || console.log).call(console, o.stack || o);
        }
        t = i.fire(e, "confirm:complete", [ r ]);
      }
      return r && t;
    },
    blankInputs: function(t, i, n) {
      var r, o, s, a = e(), l = i || "input,textarea", u = t.find(l), c = {};
      return u.each(function() {
        (r = e(this)).is("input[type=radio]") ? (s = r.attr("name"), c[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (o = t.find('input[type=radio][name="' + s + '"]'), 
        a = a.add(o)), c[s] = s)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === n && (a = a.add(r));
      }), !!a.length && a;
    },
    nonBlankInputs: function(e, t) {
      return i.blankInputs(e, t, !0);
    },
    stopEverything: function(t) {
      return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), 
      !1;
    },
    disableElement: function(e) {
      var n = e.data("disable-with");
      n !== t && (e.data("ujs:enable-with", e.html()), e.html(n)), e.bind("click.railsDisable", function(e) {
        return i.stopEverything(e);
      }), e.data("ujs:disabled", !0);
    },
    enableElement: function(e) {
      e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), 
      e.unbind("click.railsDisable"), e.removeData("ujs:disabled");
    }
  }, i.fire(n, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
    e.crossDomain || i.CSRFProtection(n);
  }), e(window).on("pageshow.rails", function() {
    e(e.rails.enableSelector).each(function() {
      var t = e(this);
      t.data("ujs:disabled") && e.rails.enableFormElement(t);
    }), e(e.rails.linkDisableSelector).each(function() {
      var t = e(this);
      t.data("ujs:disabled") && e.rails.enableElement(t);
    });
  }), n.delegate(i.linkDisableSelector, "ajax:complete", function() {
    i.enableElement(e(this));
  }), n.delegate(i.buttonDisableSelector, "ajax:complete", function() {
    i.enableFormElement(e(this));
  }), n.delegate(i.linkClickSelector, "click.rails", function(t) {
    var n = e(this), r = n.data("method"), o = n.data("params"), s = t.metaKey || t.ctrlKey;
    if (!i.allowAction(n)) return i.stopEverything(t);
    if (!s && n.is(i.linkDisableSelector) && i.disableElement(n), i.isRemote(n)) {
      if (s && (!r || "GET" === r) && !o) return !0;
      var a = i.handleRemote(n);
      return !1 === a ? i.enableElement(n) : a.fail(function() {
        i.enableElement(n);
      }), !1;
    }
    return r ? (i.handleMethod(n), !1) : void 0;
  }), n.delegate(i.buttonClickSelector, "click.rails", function(t) {
    var n = e(this);
    if (!i.allowAction(n) || !i.isRemote(n)) return i.stopEverything(t);
    n.is(i.buttonDisableSelector) && i.disableFormElement(n);
    var r = i.handleRemote(n);
    return !1 === r ? i.enableFormElement(n) : r.fail(function() {
      i.enableFormElement(n);
    }), !1;
  }), n.delegate(i.inputChangeSelector, "change.rails", function(t) {
    var n = e(this);
    return i.allowAction(n) && i.isRemote(n) ? (i.handleRemote(n), !1) : i.stopEverything(t);
  }), n.delegate(i.formSubmitSelector, "submit.rails", function(n) {
    var r, o, s = e(this), a = i.isRemote(s);
    if (!i.allowAction(s)) return i.stopEverything(n);
    if (s.attr("novalidate") === t) if (s.data("ujs:formnovalidate-button") === t) {
      if ((r = i.blankInputs(s, i.requiredInputSelector, !1)) && i.fire(s, "ajax:aborted:required", [ r ])) return i.stopEverything(n);
    } else s.data("ujs:formnovalidate-button", t);
    if (a) {
      if (o = i.nonBlankInputs(s, i.fileInputSelector)) {
        setTimeout(function() {
          i.disableFormElements(s);
        }, 13);
        var l = i.fire(s, "ajax:aborted:file", [ o ]);
        return l || setTimeout(function() {
          i.enableFormElements(s);
        }, 13), l;
      }
      return i.handleRemote(s), !1;
    }
    setTimeout(function() {
      i.disableFormElements(s);
    }, 13);
  }), n.delegate(i.formInputClickSelector, "click.rails", function(t) {
    var n = e(this);
    if (!i.allowAction(n)) return i.stopEverything(t);
    var r = n.attr("name"), o = r ? {
      name: r,
      value: n.val()
    } : null, s = n.closest("form");
    0 === s.length && (s = e("#" + n.attr("form"))), s.data("ujs:submit-button", o), 
    s.data("ujs:formnovalidate-button", n.attr("formnovalidate")), s.data("ujs:submit-button-formaction", n.attr("formaction")), 
    s.data("ujs:submit-button-formmethod", n.attr("formmethod"));
  }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function(t) {
    this === t.target && i.disableFormElements(e(this));
  }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function(t) {
    this === t.target && i.enableFormElements(e(this));
  }), e(function() {
    i.refreshCSRFTokens();
  }));
}(jQuery), function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("underscore", t) : function() {
    var i = e._, n = t();
    e._ = n, n.noConflict = function() {
      return e._ = i, n;
    };
  }();
}(this, function() {
  function e(t) {
    return t instanceof e ? t : this instanceof e ? void (this._wrapped = t) : new e(t);
  }
  function t(e, t, i) {
    if (void 0 === t) return e;
    switch (null == i ? 3 : i) {
     case 1:
      return function(i) {
        return e.call(t, i);
      };

     case 3:
      return function(i, n, r) {
        return e.call(t, i, n, r);
      };

     case 4:
      return function(i, n, r, o) {
        return e.call(t, i, n, r, o);
      };
    }
    return function() {
      return e.apply(t, arguments);
    };
  }
  function i(e, i, n) {
    return null == e ? Pe : Rt(e) ? t(e, i, n) : Se(e) && !zt(e) ? Oe(e) : je(e);
  }
  function n(e, t) {
    return i(e, t, Infinity);
  }
  function r(t, r, o) {
    return e.iteratee !== n ? e.iteratee(t, r) : i(t, r, o);
  }
  function o(e, t) {
    return t = null == t ? e.length - 1 : +t, function() {
      for (var i = Math.max(arguments.length - t, 0), n = Array(i), r = 0; r < i; r++) n[r] = arguments[r + t];
      switch (t) {
       case 0:
        return e.call(this, n);

       case 1:
        return e.call(this, arguments[0], n);

       case 2:
        return e.call(this, arguments[0], arguments[1], n);
      }
      var o = Array(t + 1);
      for (r = 0; r < t; r++) o[r] = arguments[r];
      return o[t] = n, e.apply(this, o);
    };
  }
  function s(e) {
    if (!Se(e)) return {};
    if (tt) return tt(e);
    rt.prototype = e;
    var t = new rt();
    return rt.prototype = null, t;
  }
  function a(e) {
    return function(t) {
      return null == t ? void 0 : t[e];
    };
  }
  function l(e, t) {
    return null != e && Ze.call(e, t);
  }
  function u(e, t) {
    for (var i = t.length, n = 0; n < i; n++) {
      if (null == e) return;
      e = e[t[n]];
    }
    return i ? e : void 0;
  }
  function c(e) {
    var t = at(e);
    return "number" == typeof t && t >= 0 && t <= st;
  }
  function d(e, i, n) {
    var r, o;
    if (i = t(i, n), c(e)) for (r = 0, o = e.length; r < o; r++) i(e[r], r, e); else {
      var s = ne(e);
      for (r = 0, o = s.length; r < o; r++) i(e[s[r]], s[r], e);
    }
    return e;
  }
  function h(e, t, i) {
    t = r(t, i);
    for (var n = !c(e) && ne(e), o = (n || e).length, s = Array(o), a = 0; a < o; a++) {
      var l = n ? n[a] : a;
      s[a] = t(e[l], l, e);
    }
    return s;
  }
  function f(e) {
    var i = function(t, i, n, r) {
      var o = !c(t) && ne(t), s = (o || t).length, a = e > 0 ? 0 : s - 1;
      for (r || (n = t[o ? o[a] : a], a += e); a >= 0 && a < s; a += e) {
        var l = o ? o[a] : a;
        n = i(n, t[l], l, t);
      }
      return n;
    };
    return function(e, n, r, o) {
      var s = arguments.length >= 3;
      return i(e, t(n, o, 4), r, s);
    };
  }
  function p(e, t, i) {
    var n = (c(e) ? xt : de)(e, t, i);
    if (void 0 !== n && -1 !== n) return e[n];
  }
  function m(e, t, i) {
    var n = [];
    return t = r(t, i), d(e, function(e, i, r) {
      t(e, i, r) && n.push(e);
    }), n;
  }
  function g(e, t, i) {
    return m(e, Z(r(t)), i);
  }
  function v(e, t, i) {
    t = r(t, i);
    for (var n = !c(e) && ne(e), o = (n || e).length, s = 0; s < o; s++) {
      var a = n ? n[s] : s;
      if (!t(e[a], a, e)) return !1;
    }
    return !0;
  }
  function y(e, t, i) {
    t = r(t, i);
    for (var n = !c(e) && ne(e), o = (n || e).length, s = 0; s < o; s++) {
      var a = n ? n[s] : s;
      if (t(e[a], a, e)) return !0;
    }
    return !1;
  }
  function b(e, t, i, n) {
    return c(e) || (e = oe(e)), ("number" != typeof i || n) && (i = 0), _t(e, t, i) >= 0;
  }
  function x(e, t) {
    return h(e, je(t));
  }
  function w(e, t) {
    return m(e, Oe(t));
  }
  function _(e, t) {
    return p(e, Oe(t));
  }
  function S(e, t, i) {
    var n, o, s = -Infinity, a = -Infinity;
    if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e) for (var l = 0, u = (e = c(e) ? e : oe(e)).length; l < u; l++) null != (n = e[l]) && n > s && (s = n); else t = r(t, i), 
    d(e, function(e, i, n) {
      ((o = t(e, i, n)) > a || o === -Infinity && s === -Infinity) && (s = e, a = o);
    });
    return s;
  }
  function C(e, t, i) {
    var n, o, s = Infinity, a = Infinity;
    if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e) for (var l = 0, u = (e = c(e) ? e : oe(e)).length; l < u; l++) null != (n = e[l]) && n < s && (s = n); else t = r(t, i), 
    d(e, function(e, i, n) {
      ((o = t(e, i, n)) < a || o === Infinity && s === Infinity) && (s = e, a = o);
    });
    return s;
  }
  function T(e) {
    return k(e, Infinity);
  }
  function k(e, t, i) {
    if (null == t || i) return c(e) || (e = oe(e)), e[ze(e.length - 1)];
    var n = c(e) ? pe(e) : oe(e), r = at(n);
    t = Math.max(Math.min(t, r), 0);
    for (var o = r - 1, s = 0; s < t; s++) {
      var a = ze(s, o), l = n[s];
      n[s] = n[a], n[a] = l;
    }
    return n.slice(0, t);
  }
  function M(e, t, i) {
    var n = 0;
    return t = r(t, i), x(h(e, function(e, i, r) {
      return {
        value: e,
        index: n++,
        criteria: t(e, i, r)
      };
    }).sort(function(e, t) {
      var i = e.criteria, n = t.criteria;
      if (i !== n) {
        if (i > n || void 0 === i) return 1;
        if (i < n || void 0 === n) return -1;
      }
      return e.index - t.index;
    }), "value");
  }
  function D(e, t) {
    return function(i, n, o) {
      var s = t ? [ [], [] ] : {};
      return n = r(n, o), d(i, function(t, r) {
        var o = n(t, r, i);
        e(s, t, o);
      }), s;
    };
  }
  function A(e) {
    return e ? zt(e) ? Qe.call(e) : Ht(e) ? e.match(pt) : c(e) ? h(e, Pe) : oe(e) : [];
  }
  function P(e) {
    return null == e ? 0 : c(e) ? e.length : ne(e).length;
  }
  function I(e, t, i) {
    return null == e || e.length < 1 ? null == t ? void 0 : [] : null == t || i ? e[0] : E(e, e.length - t);
  }
  function E(e, t, i) {
    return Qe.call(e, 0, Math.max(0, e.length - (null == t || i ? 1 : t)));
  }
  function j(e, t, i) {
    return null == e || e.length < 1 ? null == t ? void 0 : [] : null == t || i ? e[e.length - 1] : F(e, Math.max(0, e.length - t));
  }
  function F(e, t, i) {
    return Qe.call(e, null == t || i ? 1 : t);
  }
  function O(e) {
    return m(e, Boolean);
  }
  function N(e, t, i, n) {
    for (var r = (n = n || []).length, o = 0, s = at(e); o < s; o++) {
      var a = e[o];
      if (c(a) && (zt(a) || Lt(a))) if (t) for (var l = 0, u = a.length; l < u; ) n[r++] = a[l++]; else N(a, t, i, n), 
      r = n.length; else i || (n[r++] = a);
    }
    return n;
  }
  function z(e, t) {
    return N(e, t, !1);
  }
  function L(e, t, i, n) {
    ke(t) || (n = i, i = t, t = !1), null != i && (i = r(i, n));
    for (var o = [], s = [], a = 0, l = at(e); a < l; a++) {
      var u = e[a], c = i ? i(u, a, e) : u;
      t && !i ? (a && s === c || o.push(u), s = c) : i ? b(s, c) || (s.push(c), o.push(u)) : b(o, u) || o.push(u);
    }
    return o;
  }
  function R(e) {
    for (var t = [], i = arguments.length, n = 0, r = at(e); n < r; n++) {
      var o = e[n];
      if (!b(t, o)) {
        var s;
        for (s = 1; s < i && b(arguments[s], o); s++) ;
        s === i && t.push(o);
      }
    }
    return t;
  }
  function H(e) {
    for (var t = e && S(e, at).length || 0, i = Array(t), n = 0; n < t; n++) i[n] = x(e, n);
    return i;
  }
  function W(e, t) {
    for (var i = {}, n = 0, r = at(e); n < r; n++) t ? i[e[n]] = t[n] : i[e[n][0]] = e[n][1];
    return i;
  }
  function B(e) {
    return function(t, i, n) {
      i = r(i, n);
      for (var o = at(t), s = e > 0 ? 0 : o - 1; s >= 0 && s < o; s += e) if (i(t[s], s, t)) return s;
      return -1;
    };
  }
  function $(e, t, i, n) {
    for (var o = (i = r(i, n, 1))(t), s = 0, a = at(e); s < a; ) {
      var l = Math.floor((s + a) / 2);
      i(e[l]) < o ? s = l + 1 : a = l;
    }
    return s;
  }
  function V(e, t, i) {
    return function(n, r, o) {
      var s = 0, a = at(n);
      if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1; else if (i && o && a) return n[o = i(n, r)] === r ? o : -1;
      if (r != r) return (o = t(Qe.call(n, s, a), Te)) >= 0 ? o + s : -1;
      for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e) if (n[o] === r) return o;
      return -1;
    };
  }
  function U(e, t, i) {
    null == t && (t = e || 0, e = 0), i || (i = t < e ? -1 : 1);
    for (var n = Math.max(Math.ceil((t - e) / i), 0), r = Array(n), o = 0; o < n; o++, 
    e += i) r[o] = e;
    return r;
  }
  function q(e, t) {
    if (null == t || t < 1) return [];
    for (var i = [], n = 0, r = e.length; n < r; ) i.push(Qe.call(e, n, n += t));
    return i;
  }
  function Y(e, t, i, n, r) {
    if (!(n instanceof t)) return e.apply(i, r);
    var o = s(e.prototype), a = e.apply(o, r);
    return Se(a) ? a : o;
  }
  function X(e, t) {
    var i = function(n) {
      var r = i.cache, o = "" + (t ? t.apply(this, arguments) : n);
      return l(r, o) || (r[o] = e.apply(this, arguments)), r[o];
    };
    return i.cache = {}, i;
  }
  function G(e, t, i) {
    var n, r, o, s, a = 0;
    i || (i = {});
    var l = function() {
      a = !1 === i.leading ? 0 : Kt(), n = null, s = e.apply(r, o), n || (r = o = null);
    }, u = function() {
      var u = Kt();
      a || !1 !== i.leading || (a = u);
      var c = t - (u - a);
      return r = this, o = arguments, c <= 0 || c > t ? (n && (clearTimeout(n), n = null), 
      a = u, s = e.apply(r, o), n || (r = o = null)) : n || !1 === i.trailing || (n = setTimeout(l, c)), 
      s;
    };
    return u.cancel = function() {
      clearTimeout(n), a = 0, n = r = o = null;
    }, u;
  }
  function Q(e, t, i) {
    var n, r, s = function(t, i) {
      n = null, i && (r = e.apply(t, i));
    }, a = o(function(o) {
      if (n && clearTimeout(n), i) {
        var a = !n;
        n = setTimeout(s, t), a && (r = e.apply(this, o));
      } else n = Mt(s, t, this, o);
      return r;
    });
    return a.cancel = function() {
      clearTimeout(n), n = null;
    }, a;
  }
  function K(e, t) {
    return Tt(t, e);
  }
  function Z(e) {
    return function() {
      return !e.apply(this, arguments);
    };
  }
  function J() {
    var e = arguments, t = e.length - 1;
    return function() {
      for (var i = t, n = e[t].apply(this, arguments); i--; ) n = e[i].call(this, n);
      return n;
    };
  }
  function ee(e, t) {
    return function() {
      if (--e < 1) return t.apply(this, arguments);
    };
  }
  function te(e, t) {
    var i;
    return function() {
      return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = null), i;
    };
  }
  function ie(e, t) {
    var i = It.length, n = e.constructor, r = Rt(n) && n.prototype || Ye, o = "constructor";
    for (l(e, o) && !b(t, o) && t.push(o); i--; ) (o = It[i]) in e && e[o] !== r[o] && !b(t, o) && t.push(o);
  }
  function ne(e) {
    if (!Se(e)) return [];
    if (et) return et(e);
    var t = [];
    for (var i in e) l(e, i) && t.push(i);
    return Pt && ie(e, t), t;
  }
  function re(e) {
    if (!Se(e)) return [];
    var t = [];
    for (var i in e) t.push(i);
    return Pt && ie(e, t), t;
  }
  function oe(e) {
    for (var t = ne(e), i = t.length, n = Array(i), r = 0; r < i; r++) n[r] = e[t[r]];
    return n;
  }
  function se(e, t, i) {
    t = r(t, i);
    for (var n = ne(e), o = n.length, s = {}, a = 0; a < o; a++) {
      var l = n[a];
      s[l] = t(e[l], l, e);
    }
    return s;
  }
  function ae(e) {
    for (var t = ne(e), i = t.length, n = Array(i), r = 0; r < i; r++) n[r] = [ t[r], e[t[r]] ];
    return n;
  }
  function le(e) {
    for (var t = {}, i = ne(e), n = 0, r = i.length; n < r; n++) t[e[i[n]]] = i[n];
    return t;
  }
  function ue(e) {
    var t = [];
    for (var i in e) Rt(e[i]) && t.push(i);
    return t.sort();
  }
  function ce(e, t) {
    return function(i) {
      var n = arguments.length;
      if (t && (i = Object(i)), n < 2 || null == i) return i;
      for (var r = 1; r < n; r++) for (var o = arguments[r], s = e(o), a = s.length, l = 0; l < a; l++) {
        var u = s[l];
        t && void 0 !== i[u] || (i[u] = o[u]);
      }
      return i;
    };
  }
  function de(e, t, i) {
    t = r(t, i);
    for (var n, o = ne(e), s = 0, a = o.length; s < a; s++) if (t(e[n = o[s]], n, e)) return n;
  }
  function he(e, t, i) {
    return t in i;
  }
  function fe(e, t) {
    var i = s(e);
    return t && jt(i, t), i;
  }
  function pe(e) {
    return Se(e) ? zt(e) ? e.slice() : Et({}, e) : e;
  }
  function me(e, t) {
    return t(e), e;
  }
  function ge(e, t) {
    var i = ne(t), n = i.length;
    if (null == e) return !n;
    for (var r = Object(e), o = 0; o < n; o++) {
      var s = i[o];
      if (t[s] !== r[s] || !(s in r)) return !1;
    }
    return !0;
  }
  function ve(e, t, i, n) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var r = typeof e;
    return ("function" === r || "object" === r || "object" == typeof t) && ye(e, t, i, n);
  }
  function ye(t, i, n, r) {
    t instanceof e && (t = t._wrapped), i instanceof e && (i = i._wrapped);
    var o = Ke.call(t);
    if (o !== Ke.call(i)) return !1;
    switch (o) {
     case "[object RegExp]":
     case "[object String]":
      return "" + t == "" + i;

     case "[object Number]":
      return +t != +t ? +i != +i : 0 == +t ? 1 / +t == 1 / i : +t == +i;

     case "[object Date]":
     case "[object Boolean]":
      return +t == +i;

     case "[object Symbol]":
      return Xe.valueOf.call(t) === Xe.valueOf.call(i);
    }
    var s = "[object Array]" === o;
    if (!s) {
      if ("object" != typeof t || "object" != typeof i) return !1;
      var a = t.constructor, u = i.constructor;
      if (a !== u && !(Rt(a) && a instanceof a && Rt(u) && u instanceof u) && "constructor" in t && "constructor" in i) return !1;
    }
    r = r || [];
    for (var c = (n = n || []).length; c--; ) if (n[c] === t) return r[c] === i;
    if (n.push(t), r.push(i), s) {
      if ((c = t.length) !== i.length) return !1;
      for (;c--; ) if (!ve(t[c], i[c], n, r)) return !1;
    } else {
      var d, h = ne(t);
      if (c = h.length, ne(i).length !== c) return !1;
      for (;c--; ) if (!l(i, d = h[c]) || !ve(t[d], i[d], n, r)) return !1;
    }
    return n.pop(), r.pop(), !0;
  }
  function be(e, t) {
    return ve(e, t);
  }
  function xe(e) {
    return null == e || (c(e) && (zt(e) || Ht(e) || Lt(e)) ? 0 === e.length : 0 === ne(e).length);
  }
  function we(e) {
    return !(!e || 1 !== e.nodeType);
  }
  function _e(e) {
    return function(t) {
      return Ke.call(t) === "[object " + e + "]";
    };
  }
  function Se(e) {
    var t = typeof e;
    return "function" === t || "object" === t && !!e;
  }
  function Ce(e) {
    return !Ut(e) && nt(e) && !it(parseFloat(e));
  }
  function Te(e) {
    return Wt(e) && it(e);
  }
  function ke(e) {
    return !0 === e || !1 === e || "[object Boolean]" === Ke.call(e);
  }
  function Me(e) {
    return null === e;
  }
  function De(e) {
    return void 0 === e;
  }
  function Ae(e, t) {
    if (!zt(t)) return l(e, t);
    for (var i = t.length, n = 0; n < i; n++) {
      var r = t[n];
      if (null == e || !Ze.call(e, r)) return !1;
      e = e[r];
    }
    return !!i;
  }
  function Pe(e) {
    return e;
  }
  function Ie(e) {
    return function() {
      return e;
    };
  }
  function Ee() {}
  function je(e) {
    return zt(e) ? function(t) {
      return u(t, e);
    } : a(e);
  }
  function Fe(e) {
    return null == e ? function() {} : function(t) {
      return zt(t) ? u(e, t) : e[t];
    };
  }
  function Oe(e) {
    return e = jt({}, e), function(t) {
      return ge(t, e);
    };
  }
  function Ne(e, i, n) {
    var r = Array(Math.max(0, e));
    i = t(i, n, 1);
    for (var o = 0; o < e; o++) r[o] = i(o);
    return r;
  }
  function ze(e, t) {
    return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
  }
  function Le(e) {
    var t = function(t) {
      return e[t];
    }, i = "(?:" + ne(e).join("|") + ")", n = RegExp(i), r = RegExp(i, "g");
    return function(e) {
      return e = null == e ? "" : "" + e, n.test(e) ? e.replace(r, t) : e;
    };
  }
  function Re(e, t, i) {
    zt(t) || (t = [ t ]);
    var n = t.length;
    if (!n) return Rt(i) ? i.call(e) : i;
    for (var r = 0; r < n; r++) {
      var o = null == e ? void 0 : e[t[r]];
      void 0 === o && (o = i, r = n), e = Rt(o) ? o.call(e) : o;
    }
    return e;
  }
  function He(e) {
    var t = ++ii + "";
    return e ? e + t : t;
  }
  function We(t, i, n) {
    !i && n && (i = n), i = Nt({}, i, e.templateSettings);
    var r, o = RegExp([ (i.escape || ri).source, (i.interpolate || ri).source, (i.evaluate || ri).source ].join("|") + "|$", "g"), s = 0, a = "__p+='";
    t.replace(o, function(e, i, n, r, o) {
      return a += t.slice(s, o).replace(si, ai), s = o + e.length, i ? a += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? a += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"), 
      e;
    }), a += "';\n", i.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
    try {
      r = new Function(i.variable || "obj", "_", a);
    } catch (c) {
      throw c.source = a, c;
    }
    var l = function(t) {
      return r.call(this, t, e);
    }, u = i.variable || "obj";
    return l.source = "function(" + u + "){\n" + a + "}", l;
  }
  function Be(t) {
    var i = e(t);
    return i._chain = !0, i;
  }
  function $e(t, i) {
    return t._chain ? e(i).chain() : i;
  }
  function Ve(t) {
    return d(ue(t), function(i) {
      var n = e[i] = t[i];
      e.prototype[i] = function() {
        var t = [ this._wrapped ];
        return Ge.apply(t, arguments), $e(this, n.apply(e, t));
      };
    }), e;
  }
  var Ue = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {}, qe = Array.prototype, Ye = Object.prototype, Xe = "undefined" != typeof Symbol ? Symbol.prototype : null, Ge = qe.push, Qe = qe.slice, Ke = Ye.toString, Ze = Ye.hasOwnProperty, Je = Array.isArray, et = Object.keys, tt = Object.create, it = Ue.isNaN, nt = Ue.isFinite, rt = function() {}, ot = e.VERSION = "1.10.2";
  e.iteratee = n;
  var st = Math.pow(2, 53) - 1, at = a("length"), lt = f(1), ut = f(-1), ct = o(function(e, t, i) {
    var n, r;
    return Rt(t) ? r = t : zt(t) && (n = t.slice(0, -1), t = t[t.length - 1]), h(e, function(e) {
      var o = r;
      if (!o) {
        if (n && n.length && (e = u(e, n)), null == e) return;
        o = e[t];
      }
      return null == o ? o : o.apply(e, i);
    });
  }), dt = D(function(e, t, i) {
    l(e, i) ? e[i].push(t) : e[i] = [ t ];
  }), ht = D(function(e, t, i) {
    e[i] = t;
  }), ft = D(function(e, t, i) {
    l(e, i) ? e[i]++ : e[i] = 1;
  }), pt = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g, mt = D(function(e, t, i) {
    e[i ? 0 : 1].push(t);
  }, !0), gt = o(function(e, t) {
    return yt(e, t);
  }), vt = o(function(e) {
    return L(N(e, !0, !0));
  }), yt = o(function(e, t) {
    return t = N(t, !0, !0), m(e, function(e) {
      return !b(t, e);
    });
  }), bt = o(H), xt = B(1), wt = B(-1), _t = V(1, xt, $), St = V(-1, wt), Ct = o(function(e, t, i) {
    if (!Rt(e)) throw new TypeError("Bind must be called on a function");
    var n = o(function(r) {
      return Y(e, n, t, this, i.concat(r));
    });
    return n;
  }), Tt = o(function(e, t) {
    var i = Tt.placeholder, n = function() {
      for (var r = 0, o = t.length, s = Array(o), a = 0; a < o; a++) s[a] = t[a] === i ? arguments[r++] : t[a];
      for (;r < arguments.length; ) s.push(arguments[r++]);
      return Y(e, n, this, this, s);
    };
    return n;
  });
  Tt.placeholder = e;
  var kt = o(function(e, t) {
    var i = (t = N(t, !1, !1)).length;
    if (i < 1) throw new Error("bindAll must be passed function names");
    for (;i--; ) {
      var n = t[i];
      e[n] = Ct(e[n], e);
    }
  }), Mt = o(function(e, t, i) {
    return setTimeout(function() {
      return e.apply(null, i);
    }, t);
  }), Dt = Tt(Mt, e, 1), At = Tt(te, 2), Pt = !{
    toString: null
  }.propertyIsEnumerable("toString"), It = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ], Et = ce(re), jt = ce(ne), Ft = o(function(e, i) {
    var n = {}, r = i[0];
    if (null == e) return n;
    Rt(r) ? (i.length > 1 && (r = t(r, i[1])), i = re(e)) : (r = he, i = N(i, !1, !1), 
    e = Object(e));
    for (var o = 0, s = i.length; o < s; o++) {
      var a = i[o], l = e[a];
      r(l, a, e) && (n[a] = l);
    }
    return n;
  }), Ot = o(function(e, t) {
    var i, n = t[0];
    return Rt(n) ? (n = Z(n), t.length > 1 && (i = t[1])) : (t = h(N(t, !1, !1), String), 
    n = function(e, i) {
      return !b(t, i);
    }), Ft(e, n, i);
  }), Nt = ce(re, !0), zt = Je || _e("Array"), Lt = _e("Arguments"), Rt = _e("Function"), Ht = _e("String"), Wt = _e("Number"), Bt = _e("Date"), $t = _e("RegExp"), Vt = _e("Error"), Ut = _e("Symbol"), qt = _e("Map"), Yt = _e("WeakMap"), Xt = _e("Set"), Gt = _e("WeakSet");
  !function() {
    Lt(arguments) || (Lt = function(e) {
      return l(e, "callee");
    });
  }();
  var Qt = Ue.document && Ue.document.childNodes;
  "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof Qt && (Rt = function(e) {
    return "function" == typeof e || !1;
  });
  var Kt = Date.now || function() {
    return new Date().getTime();
  }, Zt = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  }, Jt = le(Zt), ei = Le(Zt), ti = Le(Jt), ii = 0, ni = e.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  }, ri = /(.)^/, oi = {
    "'": "'",
    "\\": "\\",
    "\r": "r",
    "\n": "n",
    "\u2028": "u2028",
    "\u2029": "u2029"
  }, si = /\\|'|\r|\n|\u2028|\u2029/g, ai = function(e) {
    return "\\" + oi[e];
  };
  d([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(t) {
    var i = qe[t];
    e.prototype[t] = function() {
      var e = this._wrapped;
      return i.apply(e, arguments), "shift" !== t && "splice" !== t || 0 !== e.length || delete e[0], 
      $e(this, e);
    };
  }), d([ "concat", "join", "slice" ], function(t) {
    var i = qe[t];
    e.prototype[t] = function() {
      return $e(this, i.apply(this._wrapped, arguments));
    };
  }), e.prototype.value = function() {
    return this._wrapped;
  }, e.prototype.valueOf = e.prototype.toJSON = e.prototype.value, e.prototype.toString = function() {
    return String(this._wrapped);
  };
  var li = Ve({
    "default": e,
    VERSION: ot,
    iteratee: n,
    restArguments: o,
    each: d,
    forEach: d,
    map: h,
    collect: h,
    reduce: lt,
    foldl: lt,
    inject: lt,
    reduceRight: ut,
    foldr: ut,
    find: p,
    detect: p,
    filter: m,
    select: m,
    reject: g,
    every: v,
    all: v,
    some: y,
    any: y,
    contains: b,
    includes: b,
    include: b,
    invoke: ct,
    pluck: x,
    where: w,
    findWhere: _,
    max: S,
    min: C,
    shuffle: T,
    sample: k,
    sortBy: M,
    groupBy: dt,
    indexBy: ht,
    countBy: ft,
    toArray: A,
    size: P,
    partition: mt,
    first: I,
    head: I,
    take: I,
    initial: E,
    last: j,
    rest: F,
    tail: F,
    drop: F,
    compact: O,
    flatten: z,
    without: gt,
    uniq: L,
    unique: L,
    union: vt,
    intersection: R,
    difference: yt,
    unzip: H,
    zip: bt,
    object: W,
    findIndex: xt,
    findLastIndex: wt,
    sortedIndex: $,
    indexOf: _t,
    lastIndexOf: St,
    range: U,
    chunk: q,
    bind: Ct,
    partial: Tt,
    bindAll: kt,
    memoize: X,
    delay: Mt,
    defer: Dt,
    throttle: G,
    debounce: Q,
    wrap: K,
    negate: Z,
    compose: J,
    after: ee,
    before: te,
    once: At,
    keys: ne,
    allKeys: re,
    values: oe,
    mapObject: se,
    pairs: ae,
    invert: le,
    functions: ue,
    methods: ue,
    extend: Et,
    extendOwn: jt,
    assign: jt,
    findKey: de,
    pick: Ft,
    omit: Ot,
    defaults: Nt,
    create: fe,
    clone: pe,
    tap: me,
    isMatch: ge,
    isEqual: be,
    isEmpty: xe,
    isElement: we,
    isArray: zt,
    isObject: Se,
    isArguments: Lt,
    isFunction: Rt,
    isString: Ht,
    isNumber: Wt,
    isDate: Bt,
    isRegExp: $t,
    isError: Vt,
    isSymbol: Ut,
    isMap: qt,
    isWeakMap: Yt,
    isSet: Xt,
    isWeakSet: Gt,
    isFinite: Ce,
    isNaN: Te,
    isBoolean: ke,
    isNull: Me,
    isUndefined: De,
    has: Ae,
    identity: Pe,
    constant: Ie,
    noop: Ee,
    property: je,
    propertyOf: Fe,
    matcher: Oe,
    matches: Oe,
    times: Ne,
    random: ze,
    now: Kt,
    escape: ei,
    unescape: ti,
    result: Re,
    uniqueId: He,
    templateSettings: ni,
    template: We,
    chain: Be,
    mixin: Ve
  });
  return li._ = li, li;
}), function() {
  var e;
  e = function() {
    function e() {}
    return e.version = "1.2.0", e.registered_features = {}, e.featurettes_counter = 0, 
    e.register = function(e, t) {
      return this.registered_features[e] = t;
    }, e.load = function() {
      var e, t, i, n, r, o, s, a, l, u, c, d;
      for (t = [], a = 0, u = (i = document.querySelectorAll("[data-featurette]")).length; a < u; a++) (e = i[a]).featuretteLoading || e.featurette || (t.push(e), 
      e.featuretteLoading = !0);
      for (d = [], l = 0, c = t.length; l < c; l++) n = (e = t[l]).getAttribute("data-featurette"), 
      (o = this.registered_features[n]) ? (null != (r = e.id) && "" !== r || (r = "featurette-" + this.featurettes_counter, 
      e.id = r), s = new o(e), e.featurette = s, d.push(this.featurettes_counter += 1)) : window.console ? d.push(console.log("Unknown featurette " + n)) : d.push(void 0);
      return d;
    }, e.get = function(e) {
      var t;
      return null != (t = document.getElementById(e)) ? t.featurette : void 0;
    }, e;
  }(), window.Featurette = e;
}.call(this), function(e, t, i) {
  "use strict";
  function n(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return e.prop ? e.prop.apply(e, t) : e.attr.apply(e, t);
  }
  function r(e, t, i) {
    var n, r;
    for (n in i) i.hasOwnProperty(n) && (r = n.replace(/ |$/g, t.eventNamespace), e.bind(r, i[n]));
  }
  function o(e, t, i) {
    r(e, i, {
      focus: function() {
        t.addClass(i.focusClass);
      },
      blur: function() {
        t.removeClass(i.focusClass), t.removeClass(i.activeClass);
      },
      mouseenter: function() {
        t.addClass(i.hoverClass);
      },
      mouseleave: function() {
        t.removeClass(i.hoverClass), t.removeClass(i.activeClass);
      },
      "mousedown touchbegin": function() {
        e.is(":disabled") || t.addClass(i.activeClass);
      },
      "mouseup touchend": function() {
        t.removeClass(i.activeClass);
      }
    });
  }
  function s(e, t) {
    e.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass);
  }
  function a(e, t, i) {
    i ? e.addClass(t) : e.removeClass(t);
  }
  function l(e, t, i) {
    var n = "checked", r = t.is(":" + n);
    t.prop ? t.prop(n, r) : r ? t.attr(n, n) : t.removeAttr(n), a(e, i.checkedClass, r);
  }
  function u(e, t, i) {
    a(e, i.disabledClass, t.is(":disabled"));
  }
  function c(e, t, i) {
    switch (i) {
     case "after":
      return e.after(t), e.next();

     case "before":
      return e.before(t), e.prev();

     case "wrap":
      return e.wrap(t), e.parent();
    }
    return null;
  }
  function d(e, i, r) {
    var o, s, a;
    return r || (r = {}), r = t.extend({
      bind: {},
      divClass: null,
      divWrap: "wrap",
      spanClass: null,
      spanHtml: null,
      spanWrap: "wrap"
    }, r), o = t("<div />"), s = t("<span />"), i.autoHide && e.is(":hidden") && "none" === e.css("display") && o.hide(), 
    r.divClass && o.addClass(r.divClass), i.wrapperClass && o.addClass(i.wrapperClass), 
    r.spanClass && s.addClass(r.spanClass), a = n(e, "id"), i.useID && a && n(o, "id", i.idPrefix + "-" + a), 
    r.spanHtml && s.html(r.spanHtml), o = c(e, o, r.divWrap), s = c(e, s, r.spanWrap), 
    u(o, e, i), {
      div: o,
      span: s
    };
  }
  function h(e, i) {
    return i.wrapperClass ? c(e, t("<span />").addClass(i.wrapperClass), "wrap") : null;
  }
  function f() {
    var i, n, r, o;
    return n = t('<div style="width:0;height:0;color:' + (o = "rgb(120,2,153)") + '">'), 
    t("body").append(n), r = n.get(0), i = e.getComputedStyle ? e.getComputedStyle(r, "").color : (r.currentStyle || r.style || {}).color, 
    n.remove(), i.replace(/ /g, "") !== o;
  }
  function p(e) {
    return e ? t("<span />").text(e).html() : "";
  }
  function m() {
    return navigator.cpuClass && !navigator.product;
  }
  function g() {
    return e.XMLHttpRequest !== undefined;
  }
  function v(e) {
    var t;
    return !!e[0].multiple || !(!(t = n(e, "size")) || t <= 1);
  }
  function y() {
    return !1;
  }
  function b(e, t) {
    var i = "none";
    r(e, t, {
      "selectstart dragstart mousedown": y
    }), e.css({
      MozUserSelect: i,
      msUserSelect: i,
      webkitUserSelect: i,
      userSelect: i
    });
  }
  function x(e, t, i) {
    var n = e.val();
    n = "" === n ? i.fileDefaultHtml : (n = n.split(/[\/\\]+/))[n.length - 1], t.text(n);
  }
  function w(e, t, i) {
    var n, r;
    for (n = [], e.each(function() {
      var e;
      for (e in t) Object.prototype.hasOwnProperty.call(t, e) && (n.push({
        el: this,
        name: e,
        old: this.style[e]
      }), this.style[e] = t[e]);
    }), i(); n.length; ) (r = n.pop()).el.style[r.name] = r.old;
  }
  function _(e, t) {
    var i;
    (i = e.parents()).push(e[0]), w(i = i.not(":visible"), {
      visibility: "hidden",
      display: "block",
      position: "absolute"
    }, t);
  }
  function S(e, t) {
    return function() {
      e.unwrap().unwrap().unbind(t.eventNamespace);
    };
  }
  var C = !0, T = !1, k = [ {
    match: function(e) {
      return e.is("a, button, :submit, :reset, input[type='button']");
    },
    apply: function(t, i) {
      var a, l, c, h, f;
      return l = i.submitDefaultHtml, t.is(":reset") && (l = i.resetDefaultHtml), h = t.is("a, button") ? function() {
        return t.html() || l;
      } : function() {
        return p(n(t, "value")) || l;
      }, c = d(t, i, {
        divClass: i.buttonClass,
        spanHtml: h()
      }), a = c.div, o(t, a, i), f = !1, r(a, i, {
        "click touchend": function() {
          var i, r, o, s;
          f || t.is(":disabled") || (f = !0, t[0].dispatchEvent ? ((i = document.createEvent("MouseEvents")).initEvent("click", !0, !0), 
          r = t[0].dispatchEvent(i), t.is("a") && r && (o = n(t, "target"), s = n(t, "href"), 
          o && "_self" !== o ? e.open(s, o) : document.location.href = s)) : t.click(), f = !1);
        }
      }), b(a, i), {
        remove: function() {
          return a.after(t), a.remove(), t.unbind(i.eventNamespace), t;
        },
        update: function() {
          s(a, i), u(a, t, i), t.detach(), c.span.html(h()).append(t);
        }
      };
    }
  }, {
    match: function(e) {
      return e.is(":checkbox");
    },
    apply: function(e, t) {
      var i, n, a;
      return i = d(e, t, {
        divClass: t.checkboxClass
      }), n = i.div, a = i.span, o(e, n, t), r(e, t, {
        "click touchend": function() {
          l(a, e, t);
        }
      }), l(a, e, t), {
        remove: S(e, t),
        update: function() {
          s(n, t), a.removeClass(t.checkedClass), l(a, e, t), u(n, e, t);
        }
      };
    }
  }, {
    match: function(e) {
      return e.is(":file");
    },
    apply: function(e, i) {
      function a() {
        x(e, f, i);
      }
      var l, h, f, p;
      return l = d(e, i, {
        divClass: i.fileClass,
        spanClass: i.fileButtonClass,
        spanHtml: i.fileButtonHtml,
        spanWrap: "after"
      }), h = l.div, p = l.span, (f = t("<span />").html(i.fileDefaultHtml)).addClass(i.filenameClass), 
      f = c(e, f, "after"), n(e, "size") || n(e, "size", h.width() / 10), o(e, h, i), 
      a(), m() ? r(e, i, {
        click: function() {
          e.trigger("change"), setTimeout(a, 0);
        }
      }) : r(e, i, {
        change: a
      }), b(f, i), b(p, i), {
        remove: function() {
          return f.remove(), p.remove(), e.unwrap().unbind(i.eventNamespace);
        },
        update: function() {
          s(h, i), x(e, f, i), u(h, e, i);
        }
      };
    }
  }, {
    match: function(e) {
      if (e.is("input")) {
        var t = (" " + n(e, "type") + " ").toLowerCase();
        return " color date datetime datetime-local email month number password search tel text time url week ".indexOf(t) >= 0;
      }
      return !1;
    },
    apply: function(e, t) {
      var i, r;
      return i = n(e, "type"), e.addClass(t.inputClass), r = h(e, t), o(e, e, t), t.inputAddTypeAsClass && e.addClass(i), 
      {
        remove: function() {
          e.removeClass(t.inputClass), t.inputAddTypeAsClass && e.removeClass(i), r && e.unwrap();
        },
        update: y
      };
    }
  }, {
    match: function(e) {
      return e.is(":radio");
    },
    apply: function(e, i) {
      var a, c, h;
      return a = d(e, i, {
        divClass: i.radioClass
      }), c = a.div, h = a.span, o(e, c, i), r(e, i, {
        "click touchend": function() {
          t.uniform.update(t(':radio[name="' + n(e, "name") + '"]'));
        }
      }), l(h, e, i), {
        remove: S(e, i),
        update: function() {
          s(c, i), l(h, e, i), u(c, e, i);
        }
      };
    }
  }, {
    match: function(e) {
      return !(!e.is("select") || v(e));
    },
    apply: function(e, i) {
      var n, a, l, c;
      return i.selectAutoWidth && _(e, function() {
        c = e.width();
      }), n = d(e, i, {
        divClass: i.selectClass,
        spanHtml: (e.find(":selected:first") || e.find("option:first")).html(),
        spanWrap: "before"
      }), a = n.div, l = n.span, i.selectAutoWidth ? _(e, function() {
        w(t([ l[0], a[0] ]), {
          display: "block"
        }, function() {
          var e;
          e = l.outerWidth() - l.width(), a.width(c + e), l.width(c);
        });
      }) : a.addClass("fixedWidth"), o(e, a, i), r(e, i, {
        change: function() {
          l.html(e.find(":selected").html()), a.removeClass(i.activeClass);
        },
        "click touchend": function() {
          var t = e.find(":selected").html();
          l.html() !== t && e.trigger("change");
        },
        keyup: function() {
          l.html(e.find(":selected").html());
        }
      }), b(l, i), {
        remove: function() {
          return l.remove(), e.unwrap().unbind(i.eventNamespace), e;
        },
        update: function() {
          i.selectAutoWidth ? (t.uniform.restore(e), e.uniform(i)) : (s(a, i), l.html(e.find(":selected").html()), 
          u(a, e, i));
        }
      };
    }
  }, {
    match: function(e) {
      return !(!e.is("select") || !v(e));
    },
    apply: function(e, t) {
      var i;
      return e.addClass(t.selectMultiClass), i = h(e, t), o(e, e, t), {
        remove: function() {
          e.removeClass(t.selectMultiClass), i && e.unwrap();
        },
        update: y
      };
    }
  }, {
    match: function(e) {
      return e.is("textarea");
    },
    apply: function(e, t) {
      var i;
      return e.addClass(t.textareaClass), i = h(e, t), o(e, e, t), {
        remove: function() {
          e.removeClass(t.textareaClass), i && e.unwrap();
        },
        update: y
      };
    }
  } ];
  m() && !g() && (C = !1), t.uniform = {
    defaults: {
      activeClass: "active",
      autoHide: !0,
      buttonClass: "button",
      checkboxClass: "checker",
      checkedClass: "checked",
      disabledClass: "disabled",
      eventNamespace: ".uniform",
      fileButtonClass: "action",
      fileButtonHtml: "Choose File",
      fileClass: "uploader",
      fileDefaultHtml: "No file selected",
      filenameClass: "filename",
      focusClass: "focus",
      hoverClass: "hover",
      idPrefix: "uniform",
      inputAddTypeAsClass: !0,
      inputClass: "uniform-input",
      radioClass: "radio",
      resetDefaultHtml: "Reset",
      resetSelector: !1,
      selectAutoWidth: !0,
      selectClass: "selector",
      selectMultiClass: "uniform-multiselect",
      submitDefaultHtml: "Submit",
      textareaClass: "uniform",
      useID: !0,
      wrapperClass: null
    },
    elements: []
  }, t.fn.uniform = function(i) {
    var n = this;
    return i = t.extend({}, t.uniform.defaults, i), T || (T = !0, f() && (C = !1)), 
    C ? (i.resetSelector && t(i.resetSelector).mouseup(function() {
      e.setTimeout(function() {
        t.uniform.update(n);
      }, 10);
    }), this.each(function() {
      var e, n, r, o = t(this);
      if (o.data("uniformed")) t.uniform.update(o); else for (e = 0; e < k.length; e += 1) if ((n = k[e]).match(o, i)) return r = n.apply(o, i), 
      o.data("uniformed", r), void t.uniform.elements.push(o.get(0));
    })) : this;
  }, t.uniform.restore = t.fn.uniform.restore = function(e) {
    e === i && (e = t.uniform.elements), t(e).each(function() {
      var e, i, n = t(this);
      (i = n.data("uniformed")) && (i.remove(), (e = t.inArray(this, t.uniform.elements)) >= 0 && t.uniform.elements.splice(e, 1), 
      n.removeData("uniformed"));
    });
  }, t.uniform.update = t.fn.uniform.update = function(e) {
    e === i && (e = t.uniform.elements), t(e).each(function() {
      var e, i = t(this);
      (e = i.data("uniformed")) && e.update(i, e.options);
    });
  };
}(this, jQuery), function(e) {
  var t, i = {
    className: "autosizejs",
    id: "autosizejs",
    append: "\n",
    callback: !1,
    resizeDelay: 10,
    placeholder: !0
  }, n = [ "fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent", "whiteSpace" ], r = e('<textarea tabindex="-1"/>').data("autosize", !0)[0];
  r.style.cssText = "position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;", 
  r.style.lineHeight = "99px", "99px" === e(r).css("lineHeight") && n.push("lineHeight"), 
  r.style.lineHeight = "", e.fn.autosize = function(o) {
    return this.length ? (o = e.extend({}, i, o || {}), r.parentNode !== document.body && e(document.body).append(r), 
    this.each(function() {
      function i() {
        var t, i = window.getComputedStyle ? window.getComputedStyle(h, null) : null;
        i ? (t = parseFloat(i.width), "border-box" !== i.boxSizing && "border-box" !== i.webkitBoxSizing && "border-box" !== i.mozBoxSizing || e.each([ "paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth" ], function(e, n) {
          t -= parseFloat(i[n]);
        })) : t = f.width(), r.style.width = Math.max(t, 0) + "px";
      }
      function s() {
        var s = {};
        if (t = h, r.className = o.className, r.id = o.id, u = parseFloat(f.css("maxHeight")), 
        e.each(n, function(e, t) {
          s[t] = f.css(t);
        }), e(r).css(s).attr("wrap", f.attr("wrap")), i(), window.chrome) {
          var a = h.style.width;
          h.style.width = "0px";
          h.offsetWidth;
          h.style.width = a;
        }
      }
      function a() {
        var e, n;
        t !== h ? s() : i(), !h.value && o.placeholder ? r.value = f.attr("placeholder") || "" : r.value = h.value, 
        r.value += o.append || "", r.style.overflowY = h.style.overflowY, n = parseFloat(h.style.height) || 0, 
        r.scrollTop = 0, r.scrollTop = 9e4, e = r.scrollTop, u && e > u ? (h.style.overflowY = "scroll", 
        e = u) : (h.style.overflowY = "hidden", e < c && (e = c)), e += p, Math.abs(n - e) > .01 && (h.style.height = e + "px", 
        r.className = r.className, m && o.callback.call(h, h), f.trigger("autosize.resized"));
      }
      function l() {
        clearTimeout(d), d = setTimeout(function() {
          var e = f.width();
          e !== v && (v = e, a());
        }, parseInt(o.resizeDelay, 10));
      }
      var u, c, d, h = this, f = e(h), p = 0, m = e.isFunction(o.callback), g = {
        height: h.style.height,
        overflow: h.style.overflow,
        overflowY: h.style.overflowY,
        wordWrap: h.style.wordWrap,
        resize: h.style.resize
      }, v = f.width(), y = f.css("resize");
      f.data("autosize") || (f.data("autosize", !0), "border-box" !== f.css("box-sizing") && "border-box" !== f.css("-moz-box-sizing") && "border-box" !== f.css("-webkit-box-sizing") || (p = f.outerHeight() - f.height()), 
      c = Math.max(parseFloat(f.css("minHeight")) - p || 0, f.height()), f.css({
        overflow: "hidden",
        overflowY: "hidden",
        wordWrap: "break-word"
      }), "vertical" === y ? f.css("resize", "none") : "both" === y && f.css("resize", "horizontal"), 
      "onpropertychange" in h ? "oninput" in h ? f.on("input.autosize keyup.autosize", a) : f.on("propertychange.autosize", function() {
        "value" === event.propertyName && a();
      }) : f.on("input.autosize", a), !1 !== o.resizeDelay && e(window).on("resize.autosize", l), 
      f.on("autosize.resize", a), f.on("autosize.resizeIncludeStyle", function() {
        t = null, a();
      }), f.on("autosize.destroy", function() {
        t = null, clearTimeout(d), e(window).off("resize", l), f.off("autosize").off(".autosize").css(g).removeData("autosize");
      }), a());
    })) : this;
  };
}(jQuery || $), function(e) {
  e.InFieldLabels = function(t, i, n) {
    var r = this;
    r.$label = e(t), r.label = t, r.$field = e(i), r.field = i, r.$label.data("InFieldLabels", r), 
    r.showing = !0, r.init = function() {
      var t;
      r.options = e.extend({}, e.InFieldLabels.defaultOptions, n), r.options.className && r.$label.addClass(r.options.className), 
      setTimeout(function() {
        "" !== r.$field.val() ? (r.$label.hide(), r.showing = !1) : (r.$label.show(), r.showing = !0);
      }, 200), r.$field.focus(function() {
        r.fadeOnFocus();
      }).blur(function() {
        r.checkForEmpty(!0);
      }).bind("keydown.infieldlabel", function(e) {
        r.hideOnChange(e);
      }).bind("paste", function() {
        r.setOpacity(0);
      }).change(function() {
        r.checkForEmpty();
      }).bind("onPropertyChange", function() {
        r.checkForEmpty();
      }).bind("keyup.infieldlabel", function() {
        r.checkForEmpty();
      }), r.options.pollDuration > 0 && (t = setInterval(function() {
        "" !== r.$field.val() && (r.$label.hide(), r.showing = !1, clearInterval(t));
      }, r.options.pollDuration));
    }, r.fadeOnFocus = function() {
      r.showing && r.setOpacity(r.options.fadeOpacity);
    }, r.setOpacity = function(e) {
      r.$label.stop().animate({
        opacity: e
      }, r.options.fadeDuration, function() {
        0 === e && r.$label.hide();
      }), r.showing = e > 0;
    }, r.checkForEmpty = function(e) {
      "" === r.$field.val() ? (r.prepForShow(), r.setOpacity(e ? 1 : r.options.fadeOpacity)) : r.setOpacity(0);
    }, r.prepForShow = function() {
      r.showing || (r.$label.css({
        opacity: 0
      }).show(), r.$field.bind("keydown.infieldlabel", function(e) {
        r.hideOnChange(e);
      }));
    }, r.hideOnChange = function(e) {
      16 !== e.keyCode && 9 !== e.keyCode && (r.showing && (r.$label.hide(), r.showing = !1), 
      r.$field.unbind("keydown.infieldlabel"));
    }, r.init();
  }, e.InFieldLabels.defaultOptions = {
    fadeOpacity: .5,
    fadeDuration: 300,
    pollDuration: 0,
    enabledInputTypes: [ "text", "search", "tel", "url", "email", "password", "number", "textarea" ],
    className: !1
  }, e.fn.inFieldLabels = function(t) {
    var i = t && t.enabledInputTypes || e.InFieldLabels.defaultOptions.enabledInputTypes;
    return this.each(function() {
      var n, r = e(this).attr("for");
      r && (n = document.getElementById(r)) && (-1 === e.inArray(n.type, i) && "TEXTAREA" !== n.nodeName || new e.InFieldLabels(this, n, t));
    });
  };
}(jQuery), function() {
  var e, t, i, n, r = function(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }, o = function(e, t) {
    function i() {
      this.constructor = e;
    }
    for (var n in t) s.call(t, n) && (e[n] = t[n]);
    return i.prototype = t.prototype, e.prototype = new i(), e.__super__ = t.prototype, 
    e;
  }, s = {}.hasOwnProperty;
  (n = function() {
    function e() {
      this.options_index = 0, this.parsed = [];
    }
    return e.prototype.add_node = function(e) {
      return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e);
    }, e.prototype.add_group = function(e) {
      var t, i, n, r, o, s;
      for (t = this.parsed.length, this.parsed.push({
        array_index: t,
        group: !0,
        label: e.label,
        title: e.title ? e.title : void 0,
        children: 0,
        disabled: e.disabled,
        classes: e.className
      }), s = [], i = 0, n = (o = e.childNodes).length; i < n; i++) r = o[i], s.push(this.add_option(r, t, e.disabled));
      return s;
    }, e.prototype.add_option = function(e, t, i) {
      if ("OPTION" === e.nodeName.toUpperCase()) return "" !== e.text ? (null != t && (this.parsed[t].children += 1), 
      this.parsed.push({
        array_index: this.parsed.length,
        options_index: this.options_index,
        value: e.value,
        text: e.text,
        html: e.innerHTML,
        title: e.title ? e.title : void 0,
        selected: e.selected,
        disabled: !0 === i ? i : e.disabled,
        group_array_index: t,
        group_label: null != t ? this.parsed[t].label : null,
        classes: e.className,
        style: e.style.cssText
      })) : this.parsed.push({
        array_index: this.parsed.length,
        options_index: this.options_index,
        empty: !0
      }), this.options_index += 1;
    }, e;
  }()).select_to_array = function(e) {
    var t, i, r, o, s;
    for (o = new n(), i = 0, r = (s = e.childNodes).length; i < r; i++) t = s[i], o.add_node(t);
    return o.parsed;
  }, t = function() {
    function e(t, i) {
      this.form_field = t, this.options = null != i ? i : {}, this.label_click_handler = r(this.label_click_handler, this), 
      e.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), 
      this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), 
      this.on_ready());
    }
    return e.prototype.set_default_values = function() {
      var e;
      return this.click_test_action = (e = this, function(t) {
        return e.test_active_click(t);
      }), this.activate_action = function(e) {
        return function(t) {
          return e.activate_field(t);
        };
      }(this), this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, 
      this.result_highlighted = null, this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className), 
      this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, 
      this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, 
      this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, 
      this.group_search = null == this.options.group_search || this.options.group_search, 
      this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, 
      this.max_selected_options = this.options.max_selected_options || Infinity, this.inherit_select_classes = this.options.inherit_select_classes || !1, 
      this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, 
      this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, 
      this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, 
      this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, 
      this.case_sensitive_search = this.options.case_sensitive_search || !1, this.hide_results_on_select = null == this.options.hide_results_on_select || this.options.hide_results_on_select;
    }, e.prototype.set_default_text = function() {
      return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || e.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || e.default_single_text, 
      this.default_text = this.escape_html(this.default_text), this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || e.default_no_result_text;
    }, e.prototype.choice_label = function(e) {
      return this.include_group_label_in_selected && null != e.group_label ? "<b class='group-name'>" + this.escape_html(e.group_label) + "</b>" + e.html : e.html;
    }, e.prototype.mouse_enter = function() {
      return this.mouse_on_container = !0;
    }, e.prototype.mouse_leave = function() {
      return this.mouse_on_container = !1;
    }, e.prototype.input_focus = function() {
      if (this.is_multiple) {
        if (!this.active_field) return setTimeout((e = this, function() {
          return e.container_mousedown();
        }), 50);
      } else if (!this.active_field) return this.activate_field();
      var e;
    }, e.prototype.input_blur = function() {
      if (!this.mouse_on_container) return this.active_field = !1, setTimeout((e = this, 
      function() {
        return e.blur_test();
      }), 100);
      var e;
    }, e.prototype.label_click_handler = function(e) {
      return this.is_multiple ? this.container_mousedown(e) : this.activate_field();
    }, e.prototype.results_option_build = function(e) {
      var t, i, n, r, o, s, a;
      for (t = "", a = 0, r = 0, o = (s = this.results_data).length; r < o && (n = "", 
      "" !== (n = (i = s[r]).group ? this.result_add_group(i) : this.result_add_option(i)) && (a++, 
      t += n), (null != e ? e.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i))), 
      !(a >= this.max_shown_results)); r++) ;
      return t;
    }, e.prototype.result_add_option = function(e) {
      var t, i;
      return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), 
      !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), 
      null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), 
      (i = document.createElement("li")).className = t.join(" "), e.style && (i.style.cssText = e.style), 
      i.setAttribute("data-option-array-index", e.array_index), i.innerHTML = e.highlighted_html || e.html, 
      e.title && (i.title = e.title), this.outerHTML(i)) : "";
    }, e.prototype.result_add_group = function(e) {
      var t, i;
      return (e.search_match || e.group_match) && e.active_options > 0 ? ((t = []).push("group-result"), 
      e.classes && t.push(e.classes), (i = document.createElement("li")).className = t.join(" "), 
      i.innerHTML = e.highlighted_html || this.escape_html(e.label), e.title && (i.title = e.title), 
      this.outerHTML(i)) : "";
    }, e.prototype.results_update_field = function() {
      if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), 
      this.results_build(), this.results_showing) return this.winnow_results();
    }, e.prototype.reset_single_select_options = function() {
      var e, t, i, n, r;
      for (r = [], e = 0, t = (i = this.results_data).length; e < t; e++) (n = i[e]).selected ? r.push(n.selected = !1) : r.push(void 0);
      return r;
    }, e.prototype.results_toggle = function() {
      return this.results_showing ? this.results_hide() : this.results_show();
    }, e.prototype.results_search = function() {
      return this.results_showing ? this.winnow_results() : this.results_show();
    }, e.prototype.winnow_results = function(e) {
      var t, i, n, r, o, s, a, l, u, c, d, h, f, p, m;
      for (this.no_results_clear(), c = 0, t = (a = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 
      u = this.get_search_regex(t), n = 0, r = (l = this.results_data).length; n < r; n++) (o = l[n]).search_match = !1, 
      d = null, h = null, o.highlighted_html = "", this.include_option_in_results(o) && (o.group && (o.group_match = !1, 
      o.active_options = 0), null != o.group_array_index && this.results_data[o.group_array_index] && (0 === (d = this.results_data[o.group_array_index]).active_options && d.search_match && (c += 1), 
      d.active_options += 1), m = o.group ? o.label : o.text, o.group && !this.group_search || (h = this.search_string_match(m, u), 
      o.search_match = null != h, o.search_match && !o.group && (c += 1), o.search_match ? (a.length && (f = h.index, 
      s = m.slice(0, f), i = m.slice(f, f + a.length), p = m.slice(f + a.length), o.highlighted_html = this.escape_html(s) + "<em>" + this.escape_html(i) + "</em>" + this.escape_html(p)), 
      null != d && (d.group_match = !0)) : null != o.group_array_index && this.results_data[o.group_array_index].search_match && (o.search_match = !0)));
      return this.result_clear_highlight(), c < 1 && a.length ? (this.update_results_content(""), 
      this.no_results(a)) : (this.update_results_content(this.results_option_build()), 
      (null != e ? e.skip_highlight : void 0) ? void 0 : this.winnow_results_set_highlight());
    }, e.prototype.get_search_regex = function(e) {
      var t, i;
      return i = this.search_contains ? e : "(^|\\s|\\b)" + e + "[^\\s]*", this.enable_split_word_search || this.search_contains || (i = "^" + i), 
      t = this.case_sensitive_search ? "" : "i", new RegExp(i, t);
    }, e.prototype.search_string_match = function(e, t) {
      var i;
      return i = t.exec(e), !this.search_contains && (null != i ? i[1] : void 0) && (i.index += 1), 
      i;
    }, e.prototype.choices_count = function() {
      var e, t, i;
      if (null != this.selected_option_count) return this.selected_option_count;
      for (this.selected_option_count = 0, e = 0, t = (i = this.form_field.options).length; e < t; e++) i[e].selected && (this.selected_option_count += 1);
      return this.selected_option_count;
    }, e.prototype.choices_click = function(e) {
      if (e.preventDefault(), this.activate_field(), !this.results_showing && !this.is_disabled) return this.results_show();
    }, e.prototype.keydown_checker = function(e) {
      var t, i;
      switch (i = null != (t = e.which) ? t : e.keyCode, this.search_field_scale(), 8 !== i && this.pending_backstroke && this.clear_backstroke(), 
      i) {
       case 8:
        this.backstroke_length = this.get_search_field_value().length;
        break;

       case 9:
        this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
        break;

       case 13:
       case 27:
        this.results_showing && e.preventDefault();
        break;

       case 32:
        this.disable_search && e.preventDefault();
        break;

       case 38:
        e.preventDefault(), this.keyup_arrow();
        break;

       case 40:
        e.preventDefault(), this.keydown_arrow();
      }
    }, e.prototype.keyup_checker = function(e) {
      var t, i;
      switch (i = null != (t = e.which) ? t : e.keyCode, this.search_field_scale(), i) {
       case 8:
        this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0 ? this.keydown_backstroke() : this.pending_backstroke || (this.result_clear_highlight(), 
        this.results_search());
        break;

       case 13:
        e.preventDefault(), this.results_showing && this.result_select(e);
        break;

       case 27:
        this.results_showing && this.results_hide();
        break;

       case 9:
       case 16:
       case 17:
       case 18:
       case 38:
       case 40:
       case 91:
        break;

       default:
        this.results_search();
      }
    }, e.prototype.clipboard_event_checker = function() {
      var e;
      if (!this.is_disabled) return setTimeout((e = this, function() {
        return e.results_search();
      }), 50);
    }, e.prototype.container_width = function() {
      return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px";
    }, e.prototype.include_option_in_results = function(e) {
      return !(this.is_multiple && !this.display_selected_options && e.selected) && (!(!this.display_disabled_options && e.disabled) && !e.empty);
    }, e.prototype.search_results_touchstart = function(e) {
      return this.touch_started = !0, this.search_results_mouseover(e);
    }, e.prototype.search_results_touchmove = function(e) {
      return this.touch_started = !1, this.search_results_mouseout(e);
    }, e.prototype.search_results_touchend = function(e) {
      if (this.touch_started) return this.search_results_mouseup(e);
    }, e.prototype.outerHTML = function(e) {
      var t;
      return e.outerHTML ? e.outerHTML : ((t = document.createElement("div")).appendChild(e), 
      t.innerHTML);
    }, e.prototype.get_single_html = function() {
      return '<a class="chosen-single chosen-default">\n  <span>' + this.default_text + '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>';
    }, e.prototype.get_multi_html = function() {
      return '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' + this.default_text + '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>';
    }, e.prototype.get_no_results_html = function(e) {
      return '<li class="no-results">\n  ' + this.results_none_found + " <span>" + this.escape_html(e) + "</span>\n</li>";
    }, e.browser_is_supported = function() {
      return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent));
    }, e.default_multiple_text = "Select Some Options", e.default_single_text = "Select an Option", 
    e.default_no_result_text = "No results match", e;
  }(), (e = jQuery).fn.extend({
    chosen: function(n) {
      return t.browser_is_supported() ? this.each(function() {
        var t, r;
        r = (t = e(this)).data("chosen"), "destroy" !== n ? r instanceof i || t.data("chosen", new i(this, n)) : r instanceof i && r.destroy();
      }) : this;
    }
  }), i = function() {
    function i() {
      return i.__super__.constructor.apply(this, arguments);
    }
    return o(i, t), i.prototype.setup = function() {
      return this.form_field_jq = e(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex;
    }, i.prototype.set_up_html = function() {
      var t, i;
      return (t = [ "chosen-container" ]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), 
      this.inherit_select_classes && this.form_field.className && t.push(this.form_field.className), 
      this.is_rtl && t.push("chosen-rtl"), i = {
        "class": t.join(" "),
        title: this.form_field.title
      }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), 
      this.container = e("<div />", i), this.container.width(this.container_width()), 
      this.is_multiple ? this.container.html(this.get_multi_html()) : this.container.html(this.get_single_html()), 
      this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), 
      this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), 
      this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), 
      this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), 
      this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), 
      this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), 
      this.set_tab_index(), this.set_label_behavior();
    }, i.prototype.on_ready = function() {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    }, i.prototype.register_observers = function() {
      var e;
      return this.container.on("touchstart.chosen", (e = this, function(t) {
        e.container_mousedown(t);
      })), this.container.on("touchend.chosen", function(e) {
        return function(t) {
          e.container_mouseup(t);
        };
      }(this)), this.container.on("mousedown.chosen", function(e) {
        return function(t) {
          e.container_mousedown(t);
        };
      }(this)), this.container.on("mouseup.chosen", function(e) {
        return function(t) {
          e.container_mouseup(t);
        };
      }(this)), this.container.on("mouseenter.chosen", function(e) {
        return function(t) {
          e.mouse_enter(t);
        };
      }(this)), this.container.on("mouseleave.chosen", function(e) {
        return function(t) {
          e.mouse_leave(t);
        };
      }(this)), this.search_results.on("mouseup.chosen", function(e) {
        return function(t) {
          e.search_results_mouseup(t);
        };
      }(this)), this.search_results.on("mouseover.chosen", function(e) {
        return function(t) {
          e.search_results_mouseover(t);
        };
      }(this)), this.search_results.on("mouseout.chosen", function(e) {
        return function(t) {
          e.search_results_mouseout(t);
        };
      }(this)), this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
        return function(t) {
          e.search_results_mousewheel(t);
        };
      }(this)), this.search_results.on("touchstart.chosen", function(e) {
        return function(t) {
          e.search_results_touchstart(t);
        };
      }(this)), this.search_results.on("touchmove.chosen", function(e) {
        return function(t) {
          e.search_results_touchmove(t);
        };
      }(this)), this.search_results.on("touchend.chosen", function(e) {
        return function(t) {
          e.search_results_touchend(t);
        };
      }(this)), this.form_field_jq.on("chosen:updated.chosen", function(e) {
        return function(t) {
          e.results_update_field(t);
        };
      }(this)), this.form_field_jq.on("chosen:activate.chosen", function(e) {
        return function(t) {
          e.activate_field(t);
        };
      }(this)), this.form_field_jq.on("chosen:open.chosen", function(e) {
        return function(t) {
          e.container_mousedown(t);
        };
      }(this)), this.form_field_jq.on("chosen:close.chosen", function(e) {
        return function(t) {
          e.close_field(t);
        };
      }(this)), this.search_field.on("blur.chosen", function(e) {
        return function(t) {
          e.input_blur(t);
        };
      }(this)), this.search_field.on("keyup.chosen", function(e) {
        return function(t) {
          e.keyup_checker(t);
        };
      }(this)), this.search_field.on("keydown.chosen", function(e) {
        return function(t) {
          e.keydown_checker(t);
        };
      }(this)), this.search_field.on("focus.chosen", function(e) {
        return function(t) {
          e.input_focus(t);
        };
      }(this)), this.search_field.on("cut.chosen", function(e) {
        return function(t) {
          e.clipboard_event_checker(t);
        };
      }(this)), this.search_field.on("paste.chosen", function(e) {
        return function(t) {
          e.clipboard_event_checker(t);
        };
      }(this)), this.is_multiple ? this.search_choices.on("click.chosen", function(e) {
        return function(t) {
          e.choices_click(t);
        };
      }(this)) : this.container.on("click.chosen", function(e) {
        e.preventDefault();
      });
    }, i.prototype.destroy = function() {
      return e(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), 
      this.form_field_label.length > 0 && this.form_field_label.off("click.chosen"), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), 
      this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show();
    }, i.prototype.search_field_disabled = function() {
      return this.is_disabled = this.form_field.disabled || this.form_field_jq.parents("fieldset").is(":disabled"), 
      this.container.toggleClass("chosen-disabled", this.is_disabled), this.search_field[0].disabled = this.is_disabled, 
      this.is_multiple || this.selected_item.off("focus.chosen", this.activate_field), 
      this.is_disabled ? this.close_field() : this.is_multiple ? void 0 : this.selected_item.on("focus.chosen", this.activate_field);
    }, i.prototype.container_mousedown = function(t) {
      var i;
      if (!this.is_disabled) return !t || "mousedown" !== (i = t.type) && "touchstart" !== i || this.results_showing || t.preventDefault(), 
      null != t && e(t.target).hasClass("search-choice-close") ? void 0 : (this.active_field ? this.is_multiple || !t || e(t.target)[0] !== this.selected_item[0] && !e(t.target).parents("a.chosen-single").length || (t.preventDefault(), 
      this.results_toggle()) : (this.is_multiple && this.search_field.val(""), e(this.container[0].ownerDocument).on("click.chosen", this.click_test_action), 
      this.results_show()), this.activate_field());
    }, i.prototype.container_mouseup = function(e) {
      if ("ABBR" === e.target.nodeName && !this.is_disabled) return this.results_reset(e);
    }, i.prototype.search_results_mousewheel = function(e) {
      var t;
      if (e.originalEvent && (t = e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail), 
      null != t) return e.preventDefault(), "DOMMouseScroll" === e.type && (t *= 40), 
      this.search_results.scrollTop(t + this.search_results.scrollTop());
    }, i.prototype.blur_test = function() {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field();
    }, i.prototype.close_field = function() {
      return e(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), 
      this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), 
      this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale(), 
      this.search_field.blur();
    }, i.prototype.activate_field = function() {
      if (!this.is_disabled) return this.container.addClass("chosen-container-active"), 
      this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus();
    }, i.prototype.test_active_click = function(t) {
      var i;
      return (i = e(t.target).closest(".chosen-container")).length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field();
    }, i.prototype.results_build = function() {
      return this.parsing = !0, this.selected_option_count = null, this.results_data = n.select_to_array(this.form_field), 
      this.is_multiple ? this.search_choices.find("li.search-choice").remove() : (this.single_set_selected_text(), 
      this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, 
      this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, 
      this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
        first: !0
      })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), 
      this.parsing = !1;
    }, i.prototype.result_do_highlight = function(e) {
      var t, i, n, r, o;
      if (e.length) {
        if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), 
        r = (n = parseInt(this.search_results.css("maxHeight"), 10)) + (o = this.search_results.scrollTop()), 
        (t = (i = this.result_highlight.position().top + this.search_results.scrollTop()) + this.result_highlight.outerHeight()) >= r) return this.search_results.scrollTop(t - n > 0 ? t - n : 0);
        if (i < o) return this.search_results.scrollTop(i);
      }
    }, i.prototype.result_clear_highlight = function() {
      return this.result_highlight && this.result_highlight.removeClass("highlighted"), 
      this.result_highlight = null;
    }, i.prototype.results_show = function() {
      return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
        chosen: this
      }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, 
      this.search_field.focus(), this.search_field.val(this.get_search_field_value()), 
      this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      }));
    }, i.prototype.update_results_content = function(e) {
      return this.search_results.html(e);
    }, i.prototype.results_hide = function() {
      return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), 
      this.form_field_jq.trigger("chosen:hiding_dropdown", {
        chosen: this
      })), this.results_showing = !1;
    }, i.prototype.set_tab_index = function() {
      var e;
      if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, 
      this.search_field[0].tabIndex = e;
    }, i.prototype.set_label_behavior = function() {
      if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = e("label[for='" + this.form_field.id + "']")), 
      this.form_field_label.length > 0) return this.form_field_label.on("click.chosen", this.label_click_handler);
    }, i.prototype.show_search_field_default = function() {
      return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), 
      this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"));
    }, i.prototype.search_results_mouseup = function(t) {
      var i;
      if ((i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first()).length) return this.result_highlight = i, 
      this.result_select(t), this.search_field.focus();
    }, i.prototype.search_results_mouseover = function(t) {
      var i;
      if (i = e(t.target).hasClass("active-result") ? e(t.target) : e(t.target).parents(".active-result").first()) return this.result_do_highlight(i);
    }, i.prototype.search_results_mouseout = function(t) {
      if (e(t.target).hasClass("active-result") || e(t.target).parents(".active-result").first()) return this.result_clear_highlight();
    }, i.prototype.choice_build = function(t) {
      var i, n, r;
      return i = e("<li />", {
        "class": "search-choice"
      }).html("<span>" + this.choice_label(t) + "</span>"), t.disabled ? i.addClass("search-choice-disabled") : ((n = e("<a />", {
        "class": "search-choice-close",
        "data-option-array-index": t.array_index
      })).on("click.chosen", (r = this, function(e) {
        return r.choice_destroy_link_click(e);
      })), i.append(n)), this.search_container.before(i);
    }, i.prototype.choice_destroy_link_click = function(t) {
      if (t.preventDefault(), t.stopPropagation(), !this.is_disabled) return this.choice_destroy(e(t.target));
    }, i.prototype.choice_destroy = function(e) {
      if (this.result_deselect(e[0].getAttribute("data-option-array-index"))) return this.active_field ? this.search_field.focus() : this.show_search_field_default(), 
      this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1 && this.results_hide(), 
      e.parents("li").first().remove(), this.search_field_scale();
    }, i.prototype.results_reset = function() {
      if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, 
      this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), 
      this.trigger_form_field_change(), this.active_field) return this.results_hide();
    }, i.prototype.results_reset_cleanup = function() {
      return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove();
    }, i.prototype.result_select = function(e) {
      var t, i;
      if (this.result_highlight) return t = this.result_highlight, this.result_clear_highlight(), 
      this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
        chosen: this
      }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), 
      t.addClass("result-selected"), (i = this.results_data[t[0].getAttribute("data-option-array-index")]).selected = !0, 
      this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, 
      this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), 
      this.is_multiple && (!this.hide_results_on_select || e.metaKey || e.ctrlKey) ? e.metaKey || e.ctrlKey ? this.winnow_results({
        skip_highlight: !0
      }) : (this.search_field.val(""), this.winnow_results()) : (this.results_hide(), 
      this.show_search_field_default()), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.trigger_form_field_change({
        selected: this.form_field.options[i.options_index].value
      }), this.current_selectedIndex = this.form_field.selectedIndex, e.preventDefault(), 
      this.search_field_scale());
    }, i.prototype.single_set_selected_text = function(e) {
      return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), 
      this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(e);
    }, i.prototype.result_deselect = function(e) {
      var t;
      return t = this.results_data[e], !this.form_field.options[t.options_index].disabled && (t.selected = !1, 
      this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, 
      this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.trigger_form_field_change({
        deselected: this.form_field.options[t.options_index].value
      }), this.search_field_scale(), !0);
    }, i.prototype.single_deselect_control_build = function() {
      if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), 
      this.selected_item.addClass("chosen-single-with-deselect");
    }, i.prototype.get_search_field_value = function() {
      return this.search_field.val();
    }, i.prototype.get_search_text = function() {
      return e.trim(this.get_search_field_value());
    }, i.prototype.escape_html = function(t) {
      return e("<div/>").text(t).html();
    }, i.prototype.winnow_results_set_highlight = function() {
      var e, t;
      if (null != (e = (t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result")).length ? t.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(e);
    }, i.prototype.no_results = function(e) {
      var t;
      return t = this.get_no_results_html(e), this.search_results.append(t), this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    }, i.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    }, i.prototype.keydown_arrow = function() {
      var e;
      return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show();
    }, i.prototype.keyup_arrow = function() {
      var e;
      return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(e.first()) : (this.choices_count() > 0 && this.results_hide(), 
      this.result_clear_highlight()) : void 0 : this.results_show();
    }, i.prototype.keydown_backstroke = function() {
      var e;
      return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), 
      this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last()).length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, 
      this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0;
    }, i.prototype.clear_backstroke = function() {
      return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), 
      this.pending_backstroke = null;
    }, i.prototype.search_field_scale = function() {
      var t, i, n, r, o, s, a;
      if (this.is_multiple) {
        for (o = {
          position: "absolute",
          left: "-1000px",
          top: "-1000px",
          display: "none",
          whiteSpace: "pre"
        }, i = 0, n = (s = [ "fontSize", "fontStyle", "fontWeight", "fontFamily", "lineHeight", "textTransform", "letterSpacing" ]).length; i < n; i++) o[r = s[i]] = this.search_field.css(r);
        return (t = e("<div />").css(o)).text(this.get_search_field_value()), e("body").append(t), 
        a = t.width() + 25, t.remove(), this.container.is(":visible") && (a = Math.min(this.container.outerWidth() - 10, a)), 
        this.search_field.width(a);
      }
    }, i.prototype.trigger_form_field_change = function(e) {
      return this.form_field_jq.trigger("input", e), this.form_field_jq.trigger("change", e);
    }, i;
  }();
}.call(this), function(e) {
  "function" == typeof define && define.amd ? define([ "jquery" ], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery);
}(function(e) {
  function t(e) {
    return a.raw ? e : encodeURIComponent(e);
  }
  function i(e) {
    return a.raw ? e : decodeURIComponent(e);
  }
  function n(e) {
    return t(a.json ? JSON.stringify(e) : String(e));
  }
  function r(e) {
    0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return e = decodeURIComponent(e.replace(s, " ")), a.json ? JSON.parse(e) : e;
    } catch (t) {}
  }
  function o(t, i) {
    var n = a.raw ? t : r(t);
    return e.isFunction(i) ? i(n) : n;
  }
  var s = /\+/g, a = e.cookie = function(r, s, l) {
    if (s !== undefined && !e.isFunction(s)) {
      if ("number" == typeof (l = e.extend({}, a.defaults, l)).expires) {
        var u = l.expires, c = l.expires = new Date();
        c.setTime(+c + 864e5 * u);
      }
      return document.cookie = [ t(r), "=", n(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : "" ].join("");
    }
    for (var d = r ? undefined : {}, h = document.cookie ? document.cookie.split("; ") : [], f = 0, p = h.length; f < p; f++) {
      var m = h[f].split("="), g = i(m.shift()), v = m.join("=");
      if (r && r === g) {
        d = o(v, s);
        break;
      }
      r || (v = o(v)) === undefined || (d[g] = v);
    }
    return d;
  };
  a.defaults = {}, e.removeCookie = function(t, i) {
    return e.cookie(t) !== undefined && (e.cookie(t, "", e.extend({}, i, {
      expires: -1
    })), !e.cookie(t));
  };
}), function(e) {
  function t(t, n, r) {
    return r = m(n, r), this.on("click.pjax", t, function(t) {
      var n = r;
      n.container || ((n = e.extend({}, r)).container = e(this).attr("data-pjax")), i(t, n);
    });
  }
  function i(t, i, n) {
    n = m(i, n);
    var o = t.currentTarget, s = e(o);
    if ("A" !== o.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
    if (!(t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || location.protocol !== o.protocol || location.hostname !== o.hostname || o.href.indexOf("#") > -1 && p(o) == p(location) || t.isDefaultPrevented())) {
      var a = {
        url: o.href,
        container: s.attr("data-pjax"),
        target: o
      }, l = e.extend({}, a, n), u = e.Event("pjax:click");
      s.trigger(u, [ l ]), u.isDefaultPrevented() || (r(l), t.preventDefault(), s.trigger("pjax:clicked", [ l ]));
    }
  }
  function n(t, i, n) {
    n = m(i, n);
    var o = t.currentTarget, s = e(o);
    if ("FORM" !== o.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
    var a = {
      type: (s.attr("method") || "GET").toUpperCase(),
      url: s.attr("action"),
      container: s.attr("data-pjax"),
      target: o
    };
    if ("GET" !== a.type && window.FormData !== undefined) a.data = new FormData(o), 
    a.processData = !1, a.contentType = !1; else {
      if (s.find(":file").length) return;
      a.data = s.serializeArray();
    }
    r(e.extend({}, a, n)), t.preventDefault();
  }
  function r(t) {
    function i(i, n, r) {
      r || (r = {}), r.relatedTarget = t.target;
      var o = e.Event(i, r);
      return l.trigger(o, n), !o.isDefaultPrevented();
    }
    t = e.extend(!0, {}, e.ajaxSettings, r.defaults, t), e.isFunction(t.url) && (t.url = t.url());
    var n = f(t.url).hash, o = e.type(t.container);
    if ("string" !== o) throw "expected string value for 'container' option; got " + o;
    var a, l = t.context = e(t.container);
    if (!l.length) throw "the container selector '" + t.container + "' did not match anything";
    t.data || (t.data = {}), e.isArray(t.data) ? t.data.push({
      name: "_pjax",
      value: t.container
    }) : t.data._pjax = t.container, t.beforeSend = function(e, r) {
      if ("GET" !== r.type && (r.timeout = 0), e.setRequestHeader("X-PJAX", "true"), e.setRequestHeader("X-PJAX-Container", t.container), 
      !i("pjax:beforeSend", [ e, r ])) return !1;
      r.timeout > 0 && (a = setTimeout(function() {
        i("pjax:timeout", [ e, t ]) && e.abort("timeout");
      }, r.timeout), r.timeout = 0);
      var o = f(r.url);
      n && (o.hash = n), t.requestUrl = h(o);
    }, t.complete = function(e, n) {
      a && clearTimeout(a), i("pjax:complete", [ e, n, t ]), i("pjax:end", [ e, t ]);
    }, t.error = function(e, n, r) {
      var o = y("", e, t), a = i("pjax:error", [ e, n, r, t ]);
      "GET" == t.type && "abort" !== n && a && s(o.url);
    }, t.success = function(o, a, u) {
      var d = r.state, h = "function" == typeof e.pjax.defaults.version ? e.pjax.defaults.version() : e.pjax.defaults.version, p = u.getResponseHeader("X-PJAX-Version"), m = y(o, u, t), g = f(m.url);
      if (n && (g.hash = n, m.url = g.href), h && p && h !== p) s(m.url); else if (m.contents) {
        if (r.state = {
          id: t.id || c(),
          url: m.url,
          title: m.title,
          container: t.container,
          fragment: t.fragment,
          timeout: t.timeout
        }, (t.push || t.replace) && window.history.replaceState(r.state, m.title, m.url), 
        e.contains(l, document.activeElement)) try {
          document.activeElement.blur();
        } catch (S) {}
        m.title && (document.title = m.title), i("pjax:beforeReplace", [ m.contents, t ], {
          state: r.state,
          previousState: d
        }), l.html(m.contents);
        var v = l.find("input[autofocus], textarea[autofocus]").last()[0];
        v && document.activeElement !== v && v.focus(), b(m.scripts);
        var x = t.scrollTo;
        if (n) {
          var w = decodeURIComponent(n.slice(1)), _ = document.getElementById(w) || document.getElementsByName(w)[0];
          _ && (x = e(_).offset().top);
        }
        "number" == typeof x && e(window).scrollTop(x), i("pjax:success", [ o, a, u, t ]);
      } else s(m.url);
    }, r.state || (r.state = {
      id: c(),
      url: window.location.href,
      title: document.title,
      container: t.container,
      fragment: t.fragment,
      timeout: t.timeout
    }, window.history.replaceState(r.state, document.title)), u(r.xhr), r.options = t;
    var p = r.xhr = e.ajax(t);
    return p.readyState > 0 && (t.push && !t.replace && (x(r.state.id, [ t.container, d(l) ]), 
    window.history.pushState(null, "", t.requestUrl)), i("pjax:start", [ p, t ]), i("pjax:send", [ p, t ])), 
    r.xhr;
  }
  function o(t, i) {
    var n = {
      url: window.location.href,
      push: !1,
      replace: !0,
      scrollTo: !1
    };
    return r(e.extend(n, m(t, i)));
  }
  function s(e) {
    window.history.replaceState(null, "", r.state.url), window.location.replace(e);
  }
  function a(t) {
    k || u(r.xhr);
    var i, n = r.state, o = t.state;
    if (o && o.container) {
      if (k && M == o.url) return;
      if (n) {
        if (n.id === o.id) return;
        i = n.id < o.id ? "forward" : "back";
      }
      var a = A[o.id] || [], l = a[0] || o.container, c = e(l), h = a[1];
      if (c.length) {
        n && w(i, n.id, [ l, d(c) ]);
        var f = e.Event("pjax:popstate", {
          state: o,
          direction: i
        });
        c.trigger(f);
        var p = {
          id: o.id,
          url: o.url,
          container: l,
          push: !1,
          fragment: o.fragment,
          timeout: o.timeout,
          scrollTo: !1
        };
        if (h) {
          c.trigger("pjax:start", [ null, p ]), r.state = o, o.title && (document.title = o.title);
          var m = e.Event("pjax:beforeReplace", {
            state: o,
            previousState: n
          });
          c.trigger(m, [ h, p ]), c.html(h), c.trigger("pjax:end", [ null, p ]);
        } else r(p);
        c[0].offsetHeight;
      } else s(location.href);
    }
    k = !1;
  }
  function l(t) {
    var i = e.isFunction(t.url) ? t.url() : t.url, n = t.type ? t.type.toUpperCase() : "GET", r = e("<form>", {
      method: "GET" === n ? "GET" : "POST",
      action: i,
      style: "display:none"
    });
    "GET" !== n && "POST" !== n && r.append(e("<input>", {
      type: "hidden",
      name: "_method",
      value: n.toLowerCase()
    }));
    var o = t.data;
    if ("string" == typeof o) e.each(o.split("&"), function(t, i) {
      var n = i.split("=");
      r.append(e("<input>", {
        type: "hidden",
        name: n[0],
        value: n[1]
      }));
    }); else if (e.isArray(o)) e.each(o, function(t, i) {
      r.append(e("<input>", {
        type: "hidden",
        name: i.name,
        value: i.value
      }));
    }); else if ("object" == typeof o) {
      var s;
      for (s in o) r.append(e("<input>", {
        type: "hidden",
        name: s,
        value: o[s]
      }));
    }
    e(document.body).append(r), r.submit();
  }
  function u(t) {
    t && t.readyState < 4 && (t.onreadystatechange = e.noop, t.abort());
  }
  function c() {
    return new Date().getTime();
  }
  function d(t) {
    var i = t.clone();
    return i.find("script").each(function() {
      this.src || e._data(this, "globalEval", !1);
    }), i.contents();
  }
  function h(e) {
    return e.search = e.search.replace(/([?&])(_pjax|_)=[^&]*/g, "").replace(/^&/, ""), 
    e.href.replace(/\?($|#)/, "$1");
  }
  function f(e) {
    var t = document.createElement("a");
    return t.href = e, t;
  }
  function p(e) {
    return e.href.replace(/#.*/, "");
  }
  function m(t, i) {
    return t && i ? ((i = e.extend({}, i)).container = t, i) : e.isPlainObject(t) ? t : {
      container: t
    };
  }
  function g(e, t) {
    return e.filter(t).add(e.find(t));
  }
  function v(t) {
    return e.parseHTML(t, document, !0);
  }
  function y(t, i, n) {
    var r, o, s = {}, a = /<html/i.test(t), l = i.getResponseHeader("X-PJAX-URL");
    if (s.url = l ? h(f(l)) : n.requestUrl, a) {
      o = e(v(t.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
      var u = t.match(/<head[^>]*>([\s\S.]*)<\/head>/i);
      r = null != u ? e(v(u[0])) : o;
    } else r = o = e(v(t));
    if (0 === o.length) return s;
    if (s.title = g(r, "title").last().text(), n.fragment) {
      var c = o;
      "body" !== n.fragment && (c = g(c, n.fragment).first()), c.length && (s.contents = "body" === n.fragment ? c : c.contents(), 
      s.title || (s.title = c.attr("title") || c.data("title")));
    } else a || (s.contents = o);
    return s.contents && (s.contents = s.contents.not(function() {
      return e(this).is("title");
    }), s.contents.find("title").remove(), s.scripts = g(s.contents, "script[src]").remove(), 
    s.contents = s.contents.not(s.scripts)), s.title && (s.title = e.trim(s.title)), 
    s;
  }
  function b(t) {
    if (t) {
      var i = e("script[src]");
      t.each(function() {
        var t = this.src;
        if (!i.filter(function() {
          return this.src === t;
        }).length) {
          var n = document.createElement("script"), r = e(this).attr("type");
          r && (n.type = r), n.src = e(this).attr("src"), document.head.appendChild(n);
        }
      });
    }
  }
  function x(e, t) {
    A[e] = t, I.push(e), _(P, 0), _(I, r.defaults.maxCacheLength);
  }
  function w(e, t, i) {
    var n, o;
    A[t] = i, "forward" === e ? (n = I, o = P) : (n = P, o = I), n.push(t), (t = o.pop()) && delete A[t], 
    _(n, r.defaults.maxCacheLength);
  }
  function _(e, t) {
    for (;e.length > t; ) delete A[e.shift()];
  }
  function S() {
    return e("meta").filter(function() {
      var t = e(this).attr("http-equiv");
      return t && "X-PJAX-VERSION" === t.toUpperCase();
    }).attr("content");
  }
  function C() {
    e.fn.pjax = t, e.pjax = r, e.pjax.enable = e.noop, e.pjax.disable = T, e.pjax.click = i, 
    e.pjax.submit = n, e.pjax.reload = o, e.pjax.defaults = {
      timeout: 650,
      push: !0,
      replace: !1,
      type: "GET",
      dataType: "html",
      scrollTo: 0,
      maxCacheLength: 20,
      version: S
    }, e(window).on("popstate.pjax", a);
  }
  function T() {
    e.fn.pjax = function() {
      return this;
    }, e.pjax = l, e.pjax.enable = C, e.pjax.disable = e.noop, e.pjax.click = e.noop, 
    e.pjax.submit = e.noop, e.pjax.reload = function() {
      window.location.reload();
    }, e(window).off("popstate.pjax", a);
  }
  var k = !0, M = window.location.href, D = window.history.state;
  D && D.container && (r.state = D), "state" in window.history && (k = !1);
  var A = {}, P = [], I = [];
  e.event.props && e.inArray("state", e.event.props) < 0 ? e.event.props.push("state") : "state" in e.Event.prototype || e.event.addProp("state"), 
  e.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/), 
  e.support.pjax ? C() : T();
}(jQuery), function(e) {
  "function" == typeof define && define.amd ? define([ "jquery" ], e) : "object" == typeof module && module.exports ? e(require("jquery")) : e(jQuery);
}(function(e) {
  function t(t) {
    var i = {}, n = /^jQuery\d+$/;
    return e.each(t.attributes, function(e, t) {
      t.specified && !n.test(t.name) && (i[t.name] = t.value);
    }), i;
  }
  function i(t, i) {
    var n = this, o = e(this);
    if (n.value === o.attr(a ? "placeholder-x" : "placeholder") && o.hasClass(f.customClass)) if (n.value = "", 
    o.removeClass(f.customClass), o.data("placeholder-password")) {
      if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), 
      !0 === t) return o[0].value = i, i;
      o.focus();
    } else n == r() && n.select();
  }
  function n(n) {
    var r, o = this, s = e(this), l = o.id;
    if (!n || "blur" !== n.type || !s.hasClass(f.customClass)) if ("" === o.value) {
      if ("password" === o.type) {
        if (!s.data("placeholder-textinput")) {
          try {
            r = s.clone().prop({
              type: "text"
            });
          } catch (c) {
            r = e("<input>").attr(e.extend(t(this), {
              type: "text"
            }));
          }
          r.removeAttr("name").data({
            "placeholder-enabled": !0,
            "placeholder-password": s,
            "placeholder-id": l
          }).bind("focus.placeholder", i), s.data({
            "placeholder-textinput": r,
            "placeholder-id": l
          }).before(r);
        }
        o.value = "", s = s.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", s.data("placeholder-id")).show();
      } else {
        var u = s.data("placeholder-password");
        u && (u[0].value = "", s.attr("id", s.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"));
      }
      s.addClass(f.customClass), s[0].value = s.attr(a ? "placeholder-x" : "placeholder");
    } else s.removeClass(f.customClass);
  }
  function r() {
    try {
      return document.activeElement;
    } catch (e) {}
  }
  var o, s, a = !1, l = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), u = "placeholder" in document.createElement("input") && !l && !a, c = "placeholder" in document.createElement("textarea") && !l && !a, d = e.valHooks, h = e.propHooks, f = {};
  u && c ? ((s = e.fn.placeholder = function() {
    return this;
  }).input = !0, s.textarea = !0) : ((s = e.fn.placeholder = function(t) {
    var r = {
      customClass: "placeholder"
    };
    return f = e.extend({}, r, t), this.filter((u ? "textarea" : ":input") + "[" + (a ? "placeholder-x" : "placeholder") + "]").not("." + f.customClass).not(":radio, :checkbox, [type=hidden]").bind({
      "focus.placeholder": i,
      "blur.placeholder": n
    }).data("placeholder-enabled", !0).trigger("blur.placeholder");
  }).input = u, s.textarea = c, o = {
    get: function(t) {
      var i = e(t), n = i.data("placeholder-password");
      return n ? n[0].value : i.data("placeholder-enabled") && i.hasClass(f.customClass) ? "" : t.value;
    },
    set: function(t, o) {
      var s, a, l = e(t);
      return "" !== o && (s = l.data("placeholder-textinput"), a = l.data("placeholder-password"), 
      s ? (i.call(s[0], !0, o) || (t.value = o), s[0].value = o) : a && (i.call(t, !0, o) || (a[0].value = o), 
      t.value = o)), l.data("placeholder-enabled") ? ("" === o ? (t.value = o, t != r() && n.call(t)) : (l.hasClass(f.customClass) && i.call(t), 
      t.value = o), l) : (t.value = o, l);
    }
  }, u || (d.input = o, h.value = o), c || (d.textarea = o, h.value = o), e(function() {
    e(document).delegate("form", "submit.placeholder", function() {
      var t = e("." + f.customClass, this).each(function() {
        i.call(this, !0, "");
      });
      setTimeout(function() {
        t.each(n);
      }, 10);
    });
  }), e(window).bind("beforeunload.placeholder", function() {
    var t = !0;
    try {
      "javascript:void(0)" === document.activeElement.toString() && (t = !1);
    } catch (i) {}
    t && e("." + f.customClass).each(function() {
      this.value = "";
    });
  }));
}), function(e) {
  function t(t) {
    if ("string" == typeof t.data) {
      var i = t.handler, n = t.data.toLowerCase().split(" ");
      t.handler = function(t) {
        if (this === t.target || !/textarea|select/i.test(t.target.nodeName) && "text" !== t.target.type) {
          var r = "keypress" !== t.type && e.hotkeys.specialKeys[t.which], o = String.fromCharCode(t.which).toLowerCase(), s = "", a = {};
          t.altKey && "alt" !== r && (s += "alt+"), t.ctrlKey && "ctrl" !== r && (s += "ctrl+"), 
          t.metaKey && !t.ctrlKey && "meta" !== r && (s += "meta+"), t.shiftKey && "shift" !== r && (s += "shift+"), 
          r ? a[s + r] = !0 : (a[s + o] = !0, a[s + e.hotkeys.shiftNums[o]] = !0, "shift+" === s && (a[e.hotkeys.shiftNums[o]] = !0));
          for (var l = 0, u = n.length; l < u; l++) if (a[n[l]]) return i.apply(this, arguments);
        }
      };
    }
  }
  e.hotkeys = {
    version: "0.8",
    specialKeys: {
      8: "backspace",
      9: "tab",
      13: "return",
      16: "shift",
      17: "ctrl",
      18: "alt",
      19: "pause",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "insert",
      46: "del",
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9",
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      112: "f1",
      113: "f2",
      114: "f3",
      115: "f4",
      116: "f5",
      117: "f6",
      118: "f7",
      119: "f8",
      120: "f9",
      121: "f10",
      122: "f11",
      123: "f12",
      144: "numlock",
      145: "scroll",
      191: "/",
      224: "meta"
    },
    shiftNums: {
      "`": "~",
      1: "!",
      2: "@",
      3: "#",
      4: "$",
      5: "%",
      6: "^",
      7: "&",
      8: "*",
      9: "(",
      0: ")",
      "-": "_",
      "=": "+",
      ";": ": ",
      "'": '"',
      ",": "<",
      ".": ">",
      "/": "?",
      "\\": "|"
    }
  }, e.each([ "keydown", "keyup", "keypress" ], function() {
    e.event.special[this] = {
      add: t
    };
  });
}(jQuery), function(e, t) {
  var i = {
    BACKSPACE: 8,
    TAB: 9,
    RETURN: 13,
    ESC: 27,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    COMMA: 188,
    SPACE: 32,
    HOME: 36,
    END: 35
  }, n = {
    triggerChar: "@",
    onDataRequest: e.noop,
    minChars: 2,
    showAvatars: !0,
    elastic: !0,
    insertSpaceAfterMention: !0,
    classes: {
      autoCompleteItemActive: "active"
    },
    templates: {
      wrapper: t.template('<div class="mentions-input-box"></div>'),
      autocompleteList: t.template('<div class="mentions-autocomplete-list"></div>'),
      autocompleteListItem: t.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>"><%= content %></li>'),
      autocompleteListItemAvatar: t.template('<img src="<%= avatar %>" />'),
      autocompleteListItemIcon: t.template('<div class="icon <%= icon %>"></div>'),
      mentionsOverlay: t.template('<div class="mentions"><div></div></div>'),
      mentionItemSyntax: t.template("@[<%= value %>](<%= type %>:<%= id %>)"),
      mentionItemHighlight: t.template("<strong><span><%= value %></span></strong>")
    }
  }, r = {
    htmlEncode: function(e) {
      return t.escape(e);
    },
    highlightTerm: function(e, t) {
      return t || t.length ? e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<b>$1</b>") : e;
    },
    setCaratPosition: function(e, t) {
      if (e.createTextRange) {
        var i = e.createTextRange();
        i.move("character", t), i.select();
      } else e.selectionStart ? (e.focus(), e.setSelectionRange(t, t)) : e.focus();
    },
    rtrim: function(e) {
      return e.replace(/\s+$/, "");
    }
  }, o = function(o) {
    function s() {
      "true" != (D = e(M)).attr("data-mentions-input") && (A = D.parent(), I = e(o.templates.wrapper()), 
      D.wrapAll(I), I = A.find("> div.mentions-input-box"), D.attr("data-mentions-input", "true"), 
      D.bind("keydown", b), D.bind("keypress", y), D.bind("input", t.debounce(v, 350)), 
      D.bind("click", m), D.bind("blur", g), o.elastic && D.elastic());
    }
    function a() {
      (P = e(o.templates.autocompleteList())).appendTo(I), P.delegate("li", "mousedown", p);
    }
    function l() {
      (E = e(o.templates.mentionsOverlay())).prependTo(I);
    }
    function u() {
      var e = f();
      t.each(O, function(t) {
        var i = o.templates.mentionItemSyntax(t);
        e = e.replace(t.value, i);
      });
      var i = r.htmlEncode(e);
      t.each(O, function(e) {
        var n = t.extend({}, e, {
          value: r.htmlEncode(e.value)
        }), s = o.templates.mentionItemSyntax(n), a = o.templates.mentionItemHighlight(n);
        i = i.replace(s, a);
      }), i = (i = i.replace(/\n/g, "<br />")).replace(/ {2}/g, "&nbsp; "), D.data("messageText", e), 
      E.find("div").html(i);
    }
    function c() {
      z = [];
    }
    function d() {
      var e = f();
      O = t.reject(O, function(t) {
        return !t.value || -1 == e.indexOf(t.value);
      }), O = t.compact(O);
    }
    function h(e) {
      var t = f(), i = new RegExp("\\" + o.triggerChar + F, "gi");
      if (match = i.exec(t), match) {
        var n = i.lastIndex - F.length - 1, s = i.lastIndex, a = t.substr(0, n), l = t.substr(s, t.length), d = (a + e.value).length;
        o.insertSpaceAfterMention && (d += 1), O.push(e), c(), F = "", x();
        var h = a + e.value;
        o.insertSpaceAfterMention && (h += " "), h += l, D.val(h), u(), D.focus(), r.setCaratPosition(D[0], d);
      }
    }
    function f() {
      return e.trim(D.val());
    }
    function p() {
      var t = e(this);
      return h(N[t.attr("data-uid")]), !1;
    }
    function m() {
      c(), x();
    }
    function g() {
      x();
    }
    function v() {
      u(), d();
      var e = t.lastIndexOf(z, o.triggerChar);
      e > -1 && (F = z.slice(e + 1).join(""), F = r.rtrim(F), t.defer(t.bind(T, this, F)));
    }
    function y(e) {
      if (e.keyCode !== i.BACKSPACE) {
        var t = String.fromCharCode(e.which || e.keyCode);
        z.push(t);
      }
    }
    function b(n) {
      if (n.keyCode == i.LEFT || n.keyCode == i.RIGHT || n.keyCode == i.HOME || n.keyCode == i.END) return t.defer(c), 
      void (navigator.userAgent.indexOf("MSIE 9") > -1 && t.defer(u));
      if (n.keyCode != i.BACKSPACE) {
        if (!P.is(":visible")) return !0;
        switch (n.keyCode) {
         case i.UP:
         case i.DOWN:
          var r = null;
          return (r = n.keyCode == i.DOWN ? j && j.length ? j.next() : P.find("li").first() : e(j).prev()).length && w(r), 
          !1;

         case i.RETURN:
         case i.TAB:
          return !j || !j.length || (j.trigger("mousedown"), !1);
        }
        return !0;
      }
      z = z.slice(0, -1 + z.length);
    }
    function x() {
      j = null, P.empty().hide();
    }
    function w(e) {
      e.addClass(o.classes.autoCompleteItemActive), e.siblings().removeClass(o.classes.autoCompleteItemActive), 
      j = e;
    }
    function _() {
      return P.width() + P.offset().left - e(window).width() > .2 * P.width();
    }
    function S() {
      var e = D.caret("position");
      P.css("top", Math.floor(e.top + 34).toString() + "px"), P.css("left", Math.floor(e.left - 17).toString() + "px"), 
      P.show(), _() ? (P.addClass("offscreen"), P.css("left", Math.floor(e.left - 250).toString() + "px")) : P.removeClass("offscreen");
    }
    function C(i, n) {
      if (S(), n.length) {
        P.empty();
        var s = e("<ul>").appendTo(P).hide();
        t.each(n, function(n, a) {
          var l = t.uniqueId("mention_");
          N[l] = t.extend({}, n, {
            value: n.name
          });
          var u = e(o.templates.autocompleteListItem({
            id: r.htmlEncode(n.id),
            display: r.htmlEncode(n.name),
            type: r.htmlEncode(n.type),
            username: r.highlightTerm(r.htmlEncode(n.username), i),
            content: r.highlightTerm(r.htmlEncode(n.name), i)
          })).attr("data-uid", l);
          (0 === a && w(u), o.showAvatars) && (n.avatar ? e(o.templates.autocompleteListItemAvatar({
            avatar: n.avatar,
            type: n.type
          })) : e(o.templates.autocompleteListItemIcon({
            icon: n.icon
          }))).prependTo(u.find("a"));
          u = u.appendTo(s);
        }), P.show(), s.show();
      } else x();
    }
    function T(e) {
      o.onDataRequest.call(this, "search", e, function(t) {
        C(e, t);
      });
    }
    function k() {
      D.val(""), O = [], u();
    }
    var M, D, A, P, I, E, j, F, O = [], N = {}, z = [];
    return o = e.extend(!0, {}, n, o), {
      init: function(e) {
        M = e, s(), a(), l(), k(), o.prefillMention && h(o.prefillMention);
      },
      val: function(e) {
        if (t.isFunction(e)) {
          var i = O.length ? D.data("messageText") : f();
          e.call(this, i);
        }
      },
      reset: function() {
        k();
      },
      getMentions: function(e) {
        t.isFunction(e) && e.call(this, O);
      },
      setMentions: function(e, i) {
        D.val(e), insertSpace = o.insertSpaceAfterMention, o.insertSpaceAfterMention = !1, 
        t.each(i, function(e) {
          e.value = e.name, F = e.value, h(e);
        }), o.insertSpaceAfterMention = insertSpace;
      }
    };
  };
  e.fn.mentionsInput = function(i, n) {
    var r = arguments;
    return "object" != typeof i && i || (n = i), this.each(function() {
      var s = e.data(this, "mentionsInput") || e.data(this, "mentionsInput", new o(n));
      return t.isFunction(s[i]) ? s[i].apply(this, Array.prototype.slice.call(r, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist") : s.init.call(this, this);
    });
  };
}(jQuery, _), function() {
  var e, t = {}, i = null, n = null, r = null, o = null, s = {}, a = Math.ceil(window.devicePixelRatio) || 1, l = 16 * a, u = {
    width: 7,
    height: 9,
    font: 10 * a + "px arial",
    color: "#ffffff",
    background: "#F03D25",
    fallback: !0,
    crossOrigin: !0,
    abbreviate: !0
  }, c = (e = navigator.userAgent.toLowerCase(), function(t) {
    return -1 !== e.indexOf(t);
  }), d = {
    ie: c("trident"),
    chrome: c("chrome"),
    webkit: c("chrome") || c("safari"),
    safari: c("safari") && !c("chrome"),
    mozilla: c("mozilla") && !c("chrome") && !c("safari")
  }, h = function() {
    for (var e = document.getElementsByTagName("link"), t = 0, i = e.length; t < i; t++) if ((e[t].getAttribute("rel") || "").match(/\bicon\b/i)) return e[t];
    return !1;
  }, f = function() {
    for (var e = document.getElementsByTagName("link"), t = 0, i = e.length; t < i; t++) {
      "undefined" != typeof e[t] && (e[t].getAttribute("rel") || "").match(/\bicon\b/i) && e[t].parentNode.removeChild(e[t]);
    }
  }, p = function() {
    if (!n || !i) {
      var e = h();
      i = e ? e.getAttribute("href") : "/favicon.ico", n || (n = i);
    }
    return i;
  }, m = function() {
    return o || ((o = document.createElement("canvas")).width = l, o.height = l), o;
  }, g = function(e) {
    if (e) {
      f();
      var t = document.createElement("link");
      t.type = "image/x-icon", t.rel = "icon", t.href = e, document.getElementsByTagName("head")[0].appendChild(t);
    }
  }, v = function(e, t) {
    if (!m().getContext || d.ie || d.safari || "force" === s.fallback) return y(e);
    var i = m().getContext("2d"), n = (t = t || "#000000", p());
    (r = document.createElement("img")).onload = function() {
      i.clearRect(0, 0, l, l), i.drawImage(r, 0, 0, r.width, r.height, 0, 0, l, l), (e + "").length > 0 && b(i, e, t), 
      x();
    }, !n.match(/^data/) && s.crossOrigin && (r.crossOrigin = "anonymous"), r.src = n;
  }, y = function(e) {
    if (s.fallback) {
      var t = document.title;
      "(" === t[0] && (t = t.slice(t.indexOf(" "))), (e + "").length > 0 ? document.title = "(" + e + ") " + t : document.title = t;
    }
  }, b = function(e, t) {
    "number" == typeof t && t > 99 && s.abbreviate && (t = w(t));
    var i = (t + "").length - 1, n = s.width * a + 6 * a * i, r = s.height * a, o = l - r, u = l - n - a, c = 16 * a, h = 16 * a, f = 2 * a;
    e.font = (d.webkit ? "bold " : "") + s.font, e.fillStyle = s.background, e.strokeStyle = s.background, 
    e.lineWidth = a, e.beginPath(), e.moveTo(u + f, o), e.quadraticCurveTo(u, o, u, o + f), 
    e.lineTo(u, c - f), e.quadraticCurveTo(u, c, u + f, c), e.lineTo(h - f, c), e.quadraticCurveTo(h, c, h, c - f), 
    e.lineTo(h, o + f), e.quadraticCurveTo(h, o, h - f, o), e.closePath(), e.fill(), 
    e.beginPath(), e.strokeStyle = "rgba(0,0,0,0.3)", e.moveTo(u + f / 2, c), e.lineTo(h - f / 2, c), 
    e.stroke(), e.fillStyle = s.color, e.textAlign = "right", e.textBaseline = "top", 
    e.fillText(t, 2 === a ? 29 : 15, d.mozilla ? 7 * a : 6 * a);
  }, x = function() {
    m().getContext && g(m().toDataURL());
  }, w = function(e) {
    for (var t = [ [ "G", 1e9 ], [ "M", 1e6 ], [ "k", 1e3 ] ], i = 0; i < t.length; ++i) if (e >= t[i][1]) {
      e = _(e / t[i][1]) + t[i][0];
      break;
    }
    return e;
  }, _ = function(e, t) {
    return new Number(e).toFixed(t);
  };
  t.setOptions = function(e) {
    for (var t in s = {}, e.colour && (e.color = e.colour), u) s[t] = e.hasOwnProperty(t) ? e[t] : u[t];
    return this;
  }, t.setImage = function(e) {
    return i = e, x(), this;
  }, t.setBubble = function(e, t) {
    return v(e = e || "", t), this;
  }, t.reset = function() {
    i = n, g(n);
  }, t.setOptions(u), "function" == typeof define && define.amd ? define(t) : "undefined" != typeof module ? module.exports = t : window.Tinycon = t;
}(), function(e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = e();
}(function() {
  return function e(t, i, n) {
    function r(s, a) {
      if (!i[s]) {
        if (!t[s]) {
          var l = "function" == typeof require && require;
          if (!a && l) return l(s, !0);
          if (o) return o(s, !0);
          var u = new Error("Cannot find module '" + s + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }
        var c = i[s] = {
          exports: {}
        };
        t[s][0].call(c.exports, function(e) {
          return r(t[s][1][e] || e);
        }, c, c.exports, e, t, i, n);
      }
      return i[s].exports;
    }
    for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
    return r;
  }({
    1: [ function() {}, {} ],
    2: [ function(e, t) {
      function i(e) {
        if (e) {
          var t = [ 0, 0, 0 ], i = 1, n = e.match(/^#([a-fA-F0-9]{3})$/i);
          if (n) {
            n = n[1];
            for (var r = 0; r < t.length; r++) t[r] = parseInt(n[r] + n[r], 16);
          } else if (n = e.match(/^#([a-fA-F0-9]{6})$/i)) for (n = n[1], r = 0; r < t.length; r++) t[r] = parseInt(n.slice(2 * r, 2 * r + 2), 16); else if (n = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (r = 0; r < t.length; r++) t[r] = parseInt(n[r + 1]);
            i = parseFloat(n[4]);
          } else if (n = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (r = 0; r < t.length; r++) t[r] = Math.round(2.55 * parseFloat(n[r + 1]));
            i = parseFloat(n[4]);
          } else if (n = e.match(/(\w+)/)) {
            if ("transparent" == n[1]) return [ 0, 0, 0, 0 ];
            if (!(t = c[n[1]])) return;
          }
          for (r = 0; r < t.length; r++) t[r] = l(t[r], 0, 255);
          return i = i || 0 == i ? l(i, 0, 1) : 1, t[3] = i, t;
        }
      }
      function n(e) {
        if (e) {
          var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
          if (t) {
            var i = parseFloat(t[4]);
            return [ l(parseInt(t[1]), 0, 360), l(parseFloat(t[2]), 0, 100), l(parseFloat(t[3]), 0, 100), l(isNaN(i) ? 1 : i, 0, 1) ];
          }
        }
      }
      function r(e) {
        if (e) {
          var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
          if (t) {
            var i = parseFloat(t[4]);
            return [ l(parseInt(t[1]), 0, 360), l(parseFloat(t[2]), 0, 100), l(parseFloat(t[3]), 0, 100), l(isNaN(i) ? 1 : i, 0, 1) ];
          }
        }
      }
      function o(e, t) {
        return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")";
      }
      function s(e, t) {
        return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")";
      }
      function a(e, t) {
        return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")";
      }
      function l(e, t, i) {
        return Math.min(Math.max(t, e), i);
      }
      function u(e) {
        var t = e.toString(16).toUpperCase();
        return t.length < 2 ? "0" + t : t;
      }
      var c = e(6);
      t.exports = {
        getRgba: i,
        getHsla: n,
        getRgb: function(e) {
          var t = i(e);
          return t && t.slice(0, 3);
        },
        getHsl: function(e) {
          var t = n(e);
          return t && t.slice(0, 3);
        },
        getHwb: r,
        getAlpha: function(e) {
          var t = i(e);
          return t ? t[3] : (t = n(e)) ? t[3] : (t = r(e)) ? t[3] : void 0;
        },
        hexString: function(e) {
          return "#" + u(e[0]) + u(e[1]) + u(e[2]);
        },
        rgbString: function(e, t) {
          return t < 1 || e[3] && e[3] < 1 ? o(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
        },
        rgbaString: o,
        percentString: function(e, t) {
          return t < 1 || e[3] && e[3] < 1 ? s(e, t) : "rgb(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%)";
        },
        percentaString: s,
        hslString: function(e, t) {
          return t < 1 || e[3] && e[3] < 1 ? a(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)";
        },
        hslaString: a,
        hwbString: function(e, t) {
          return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")";
        },
        keyword: function(e) {
          return d[e.slice(0, 3)];
        }
      };
      var d = {};
      for (var h in c) d[c[h]] = h;
    }, {
      6: 6
    } ],
    3: [ function(e, t) {
      var i = e(5), n = e(2), r = function(e) {
        return e instanceof r ? e : this instanceof r ? (this.valid = !1, this.values = {
          rgb: [ 0, 0, 0 ],
          hsl: [ 0, 0, 0 ],
          hsv: [ 0, 0, 0 ],
          hwb: [ 0, 0, 0 ],
          cmyk: [ 0, 0, 0, 0 ],
          alpha: 1
        }, void ("string" == typeof e ? (t = n.getRgba(e)) ? this.setValues("rgb", t) : (t = n.getHsla(e)) ? this.setValues("hsl", t) : (t = n.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new r(e);
        var t;
      };
      r.prototype = {
        isValid: function() {
          return this.valid;
        },
        rgb: function() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function() {
          return this.values.rgb;
        },
        hslArray: function() {
          return this.values.hsl;
        },
        hsvArray: function() {
          return this.values.hsv;
        },
        hwbArray: function() {
          var e = this.values;
          return 1 !== e.alpha ? e.hwb.concat([ e.alpha ]) : e.hwb;
        },
        cmykArray: function() {
          return this.values.cmyk;
        },
        rgbaArray: function() {
          var e = this.values;
          return e.rgb.concat([ e.alpha ]);
        },
        hslaArray: function() {
          var e = this.values;
          return e.hsl.concat([ e.alpha ]);
        },
        alpha: function(e) {
          return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this);
        },
        red: function(e) {
          return this.setChannel("rgb", 0, e);
        },
        green: function(e) {
          return this.setChannel("rgb", 1, e);
        },
        blue: function(e) {
          return this.setChannel("rgb", 2, e);
        },
        hue: function(e) {
          return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e);
        },
        saturation: function(e) {
          return this.setChannel("hsl", 1, e);
        },
        lightness: function(e) {
          return this.setChannel("hsl", 2, e);
        },
        saturationv: function(e) {
          return this.setChannel("hsv", 1, e);
        },
        whiteness: function(e) {
          return this.setChannel("hwb", 1, e);
        },
        blackness: function(e) {
          return this.setChannel("hwb", 2, e);
        },
        value: function(e) {
          return this.setChannel("hsv", 2, e);
        },
        cyan: function(e) {
          return this.setChannel("cmyk", 0, e);
        },
        magenta: function(e) {
          return this.setChannel("cmyk", 1, e);
        },
        yellow: function(e) {
          return this.setChannel("cmyk", 2, e);
        },
        black: function(e) {
          return this.setChannel("cmyk", 3, e);
        },
        hexString: function() {
          return n.hexString(this.values.rgb);
        },
        rgbString: function() {
          return n.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function() {
          return n.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function() {
          return n.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function() {
          return n.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function() {
          return n.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function() {
          return n.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function() {
          return n.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function() {
          var e = this.values.rgb;
          return e[0] << 16 | e[1] << 8 | e[2];
        },
        luminosity: function() {
          for (var e = this.values.rgb, t = [], i = 0; i < e.length; i++) {
            var n = e[i] / 255;
            t[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
          }
          return .2126 * t[0] + .7152 * t[1] + .0722 * t[2];
        },
        contrast: function(e) {
          var t = this.luminosity(), i = e.luminosity();
          return t > i ? (t + .05) / (i + .05) : (i + .05) / (t + .05);
        },
        level: function(e) {
          var t = this.contrast(e);
          return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
        },
        dark: function() {
          var e = this.values.rgb;
          return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
        },
        light: function() {
          return !this.dark();
        },
        negate: function() {
          for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
          return this.setValues("rgb", e), this;
        },
        lighten: function(e) {
          var t = this.values.hsl;
          return t[2] += t[2] * e, this.setValues("hsl", t), this;
        },
        darken: function(e) {
          var t = this.values.hsl;
          return t[2] -= t[2] * e, this.setValues("hsl", t), this;
        },
        saturate: function(e) {
          var t = this.values.hsl;
          return t[1] += t[1] * e, this.setValues("hsl", t), this;
        },
        desaturate: function(e) {
          var t = this.values.hsl;
          return t[1] -= t[1] * e, this.setValues("hsl", t), this;
        },
        whiten: function(e) {
          var t = this.values.hwb;
          return t[1] += t[1] * e, this.setValues("hwb", t), this;
        },
        blacken: function(e) {
          var t = this.values.hwb;
          return t[2] += t[2] * e, this.setValues("hwb", t), this;
        },
        greyscale: function() {
          var e = this.values.rgb, t = .3 * e[0] + .59 * e[1] + .11 * e[2];
          return this.setValues("rgb", [ t, t, t ]), this;
        },
        clearer: function(e) {
          var t = this.values.alpha;
          return this.setValues("alpha", t - t * e), this;
        },
        opaquer: function(e) {
          var t = this.values.alpha;
          return this.setValues("alpha", t + t * e), this;
        },
        rotate: function(e) {
          var t = this.values.hsl, i = (t[0] + e) % 360;
          return t[0] = i < 0 ? 360 + i : i, this.setValues("hsl", t), this;
        },
        mix: function(e, t) {
          var i = this, n = e, r = void 0 === t ? .5 : t, o = 2 * r - 1, s = i.alpha() - n.alpha(), a = ((o * s == -1 ? o : (o + s) / (1 + o * s)) + 1) / 2, l = 1 - a;
          return this.rgb(a * i.red() + l * n.red(), a * i.green() + l * n.green(), a * i.blue() + l * n.blue()).alpha(i.alpha() * r + n.alpha() * (1 - r));
        },
        toJSON: function() {
          return this.rgb();
        },
        clone: function() {
          var e, t, i = new r(), n = this.values, o = i.values;
          for (var s in n) n.hasOwnProperty(s) && (e = n[s], "[object Array]" === (t = {}.toString.call(e)) ? o[s] = e.slice(0) : "[object Number]" === t ? o[s] = e : console.error("unexpected color value:", e));
          return i;
        }
      }, r.prototype.spaces = {
        rgb: [ "red", "green", "blue" ],
        hsl: [ "hue", "saturation", "lightness" ],
        hsv: [ "hue", "saturation", "value" ],
        hwb: [ "hue", "whiteness", "blackness" ],
        cmyk: [ "cyan", "magenta", "yellow", "black" ]
      }, r.prototype.maxes = {
        rgb: [ 255, 255, 255 ],
        hsl: [ 360, 100, 100 ],
        hsv: [ 360, 100, 100 ],
        hwb: [ 360, 100, 100 ],
        cmyk: [ 100, 100, 100, 100 ]
      }, r.prototype.getValues = function(e) {
        for (var t = this.values, i = {}, n = 0; n < e.length; n++) i[e.charAt(n)] = t[e][n];
        return 1 !== t.alpha && (i.a = t.alpha), i;
      }, r.prototype.setValues = function(e, t) {
        var n, r, o = this.values, s = this.spaces, a = this.maxes, l = 1;
        if (this.valid = !0, "alpha" === e) l = t; else if (t.length) o[e] = t.slice(0, e.length), 
        l = t[e.length]; else if (void 0 !== t[e.charAt(0)]) {
          for (n = 0; n < e.length; n++) o[e][n] = t[e.charAt(n)];
          l = t.a;
        } else if (void 0 !== t[s[e][0]]) {
          var u = s[e];
          for (n = 0; n < e.length; n++) o[e][n] = t[u[n]];
          l = t.alpha;
        }
        if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === e) return !1;
        for (n = 0; n < e.length; n++) r = Math.max(0, Math.min(a[e][n], o[e][n])), o[e][n] = Math.round(r);
        for (var c in s) c !== e && (o[c] = i[e][c](o[e]));
        return !0;
      }, r.prototype.setSpace = function(e, t) {
        var i = t[0];
        return void 0 === i ? this.getValues(e) : ("number" == typeof i && (i = Array.prototype.slice.call(t)), 
        this.setValues(e, i), this);
      }, r.prototype.setChannel = function(e, t, i) {
        var n = this.values[e];
        return void 0 === i ? n[t] : i === n[t] ? this : (n[t] = i, this.setValues(e, n), 
        this);
      }, "undefined" != typeof window && (window.Color = r), t.exports = r;
    }, {
      2: 2,
      5: 5
    } ],
    4: [ function(e, t) {
      function i(e) {
        var t, i, n = e[0] / 255, r = e[1] / 255, o = e[2] / 255, s = Math.min(n, r, o), a = Math.max(n, r, o), l = a - s;
        return a == s ? t = 0 : n == a ? t = (r - o) / l : r == a ? t = 2 + (o - n) / l : o == a && (t = 4 + (n - r) / l), 
        (t = Math.min(60 * t, 360)) < 0 && (t += 360), i = (s + a) / 2, [ t, 100 * (a == s ? 0 : i <= .5 ? l / (a + s) : l / (2 - a - s)), 100 * i ];
      }
      function n(e) {
        var t, i, n = e[0], r = e[1], o = e[2], s = Math.min(n, r, o), a = Math.max(n, r, o), l = a - s;
        return i = 0 == a ? 0 : l / a * 1e3 / 10, a == s ? t = 0 : n == a ? t = (r - o) / l : r == a ? t = 2 + (o - n) / l : o == a && (t = 4 + (n - r) / l), 
        (t = Math.min(60 * t, 360)) < 0 && (t += 360), [ t, i, a / 255 * 1e3 / 10 ];
      }
      function o(e) {
        var t = e[0], n = e[1], r = e[2];
        return [ i(e)[0], 1 / 255 * Math.min(t, Math.min(n, r)) * 100, 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r))) ];
      }
      function s(e) {
        var t, i = e[0] / 255, n = e[1] / 255, r = e[2] / 255;
        return [ 100 * ((1 - i - (t = Math.min(1 - i, 1 - n, 1 - r))) / (1 - t) || 0), 100 * ((1 - n - t) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * t ];
      }
      function a(e) {
        return C[JSON.stringify(e)];
      }
      function l(e) {
        var t = e[0] / 255, i = e[1] / 255, n = e[2] / 255;
        return [ 100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * t + .7152 * i + .0722 * n), 100 * (.0193 * t + .1192 * i + .9505 * n) ];
      }
      function u(e) {
        var t = l(e), i = t[0], n = t[1], r = t[2];
        return n /= 100, r /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, 
        [ 116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116)) ];
      }
      function c(e) {
        var t, i, n, r, o, s = e[0] / 360, a = e[1] / 100, l = e[2] / 100;
        if (0 == a) return [ o = 255 * l, o, o ];
        t = 2 * l - (i = l < .5 ? l * (1 + a) : l + a - l * a), r = [ 0, 0, 0 ];
        for (var u = 0; u < 3; u++) (n = s + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, 
        o = 6 * n < 1 ? t + 6 * (i - t) * n : 2 * n < 1 ? i : 3 * n < 2 ? t + (i - t) * (2 / 3 - n) * 6 : t, 
        r[u] = 255 * o;
        return r;
      }
      function d(e) {
        var t = e[0] / 60, i = e[1] / 100, n = e[2] / 100, r = Math.floor(t) % 6, o = t - Math.floor(t), s = 255 * n * (1 - i), a = 255 * n * (1 - i * o), l = 255 * n * (1 - i * (1 - o));
        switch (n *= 255, r) {
         case 0:
          return [ n, l, s ];

         case 1:
          return [ a, n, s ];

         case 2:
          return [ s, n, l ];

         case 3:
          return [ s, a, n ];

         case 4:
          return [ l, s, n ];

         case 5:
          return [ n, s, a ];
        }
      }
      function h(e) {
        var t, i, n, o, s = e[0] / 360, a = e[1] / 100, l = e[2] / 100, u = a + l;
        switch (u > 1 && (a /= u, l /= u), n = 6 * s - (t = Math.floor(6 * s)), 0 != (1 & t) && (n = 1 - n), 
        o = a + n * ((i = 1 - l) - a), t) {
         default:
         case 6:
         case 0:
          r = i, g = o, b = a;
          break;

         case 1:
          r = o, g = i, b = a;
          break;

         case 2:
          r = a, g = i, b = o;
          break;

         case 3:
          r = a, g = o, b = i;
          break;

         case 4:
          r = o, g = a, b = i;
          break;

         case 5:
          r = i, g = a, b = o;
        }
        return [ 255 * r, 255 * g, 255 * b ];
      }
      function f(e) {
        var t = e[0] / 100, i = e[1] / 100, n = e[2] / 100, r = e[3] / 100;
        return [ 255 * (1 - Math.min(1, t * (1 - r) + r)), 255 * (1 - Math.min(1, i * (1 - r) + r)), 255 * (1 - Math.min(1, n * (1 - r) + r)) ];
      }
      function p(e) {
        var t, i, n, r = e[0] / 100, o = e[1] / 100, s = e[2] / 100;
        return i = -.9689 * r + 1.8758 * o + .0415 * s, n = .0557 * r + -.204 * o + 1.057 * s, 
        t = (t = 3.2406 * r + -1.5372 * o + -.4986 * s) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : t *= 12.92, 
        i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, 
        [ 255 * (t = Math.min(Math.max(0, t), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1)) ];
      }
      function m(e) {
        var t = e[0], i = e[1], n = e[2];
        return i /= 100, n /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, 
        [ 116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (t - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116)) ];
      }
      function v(e) {
        var t, i, n, r, o = e[0], s = e[1], a = e[2];
        return o <= 8 ? r = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), 
        r = Math.pow(i / 100, 1 / 3)), [ t = t / 95.047 <= .008856 ? t = 95.047 * (s / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(s / 500 + r, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (r - a / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - a / 200, 3) ];
      }
      function y(e) {
        var t, i = e[0], n = e[1], r = e[2];
        return (t = 360 * Math.atan2(r, n) / 2 / Math.PI) < 0 && (t += 360), [ i, Math.sqrt(n * n + r * r), t ];
      }
      function x(e) {
        return p(v(e));
      }
      function w(e) {
        var t, i = e[0], n = e[1];
        return t = e[2] / 360 * 2 * Math.PI, [ i, n * Math.cos(t), n * Math.sin(t) ];
      }
      function _(e) {
        return S[e];
      }
      t.exports = {
        rgb2hsl: i,
        rgb2hsv: n,
        rgb2hwb: o,
        rgb2cmyk: s,
        rgb2keyword: a,
        rgb2xyz: l,
        rgb2lab: u,
        rgb2lch: function(e) {
          return y(u(e));
        },
        hsl2rgb: c,
        hsl2hsv: function(e) {
          var t = e[0], i = e[1] / 100, n = e[2] / 100;
          return 0 === n ? [ 0, 0, 0 ] : [ t, 2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i) * 100, (n + i) / 2 * 100 ];
        },
        hsl2hwb: function(e) {
          return o(c(e));
        },
        hsl2cmyk: function(e) {
          return s(c(e));
        },
        hsl2keyword: function(e) {
          return a(c(e));
        },
        hsv2rgb: d,
        hsv2hsl: function(e) {
          var t, i, n = e[0], r = e[1] / 100, o = e[2] / 100;
          return t = r * o, [ n, 100 * (t = (t /= (i = (2 - r) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2) ];
        },
        hsv2hwb: function(e) {
          return o(d(e));
        },
        hsv2cmyk: function(e) {
          return s(d(e));
        },
        hsv2keyword: function(e) {
          return a(d(e));
        },
        hwb2rgb: h,
        hwb2hsl: function(e) {
          return i(h(e));
        },
        hwb2hsv: function(e) {
          return n(h(e));
        },
        hwb2cmyk: function(e) {
          return s(h(e));
        },
        hwb2keyword: function(e) {
          return a(h(e));
        },
        cmyk2rgb: f,
        cmyk2hsl: function(e) {
          return i(f(e));
        },
        cmyk2hsv: function(e) {
          return n(f(e));
        },
        cmyk2hwb: function(e) {
          return o(f(e));
        },
        cmyk2keyword: function(e) {
          return a(f(e));
        },
        keyword2rgb: _,
        keyword2hsl: function(e) {
          return i(_(e));
        },
        keyword2hsv: function(e) {
          return n(_(e));
        },
        keyword2hwb: function(e) {
          return o(_(e));
        },
        keyword2cmyk: function(e) {
          return s(_(e));
        },
        keyword2lab: function(e) {
          return u(_(e));
        },
        keyword2xyz: function(e) {
          return l(_(e));
        },
        xyz2rgb: p,
        xyz2lab: m,
        xyz2lch: function(e) {
          return y(m(e));
        },
        lab2xyz: v,
        lab2rgb: x,
        lab2lch: y,
        lch2lab: w,
        lch2xyz: function(e) {
          return v(w(e));
        },
        lch2rgb: function(e) {
          return x(w(e));
        }
      };
      var S = {
        aliceblue: [ 240, 248, 255 ],
        antiquewhite: [ 250, 235, 215 ],
        aqua: [ 0, 255, 255 ],
        aquamarine: [ 127, 255, 212 ],
        azure: [ 240, 255, 255 ],
        beige: [ 245, 245, 220 ],
        bisque: [ 255, 228, 196 ],
        black: [ 0, 0, 0 ],
        blanchedalmond: [ 255, 235, 205 ],
        blue: [ 0, 0, 255 ],
        blueviolet: [ 138, 43, 226 ],
        brown: [ 165, 42, 42 ],
        burlywood: [ 222, 184, 135 ],
        cadetblue: [ 95, 158, 160 ],
        chartreuse: [ 127, 255, 0 ],
        chocolate: [ 210, 105, 30 ],
        coral: [ 255, 127, 80 ],
        cornflowerblue: [ 100, 149, 237 ],
        cornsilk: [ 255, 248, 220 ],
        crimson: [ 220, 20, 60 ],
        cyan: [ 0, 255, 255 ],
        darkblue: [ 0, 0, 139 ],
        darkcyan: [ 0, 139, 139 ],
        darkgoldenrod: [ 184, 134, 11 ],
        darkgray: [ 169, 169, 169 ],
        darkgreen: [ 0, 100, 0 ],
        darkgrey: [ 169, 169, 169 ],
        darkkhaki: [ 189, 183, 107 ],
        darkmagenta: [ 139, 0, 139 ],
        darkolivegreen: [ 85, 107, 47 ],
        darkorange: [ 255, 140, 0 ],
        darkorchid: [ 153, 50, 204 ],
        darkred: [ 139, 0, 0 ],
        darksalmon: [ 233, 150, 122 ],
        darkseagreen: [ 143, 188, 143 ],
        darkslateblue: [ 72, 61, 139 ],
        darkslategray: [ 47, 79, 79 ],
        darkslategrey: [ 47, 79, 79 ],
        darkturquoise: [ 0, 206, 209 ],
        darkviolet: [ 148, 0, 211 ],
        deeppink: [ 255, 20, 147 ],
        deepskyblue: [ 0, 191, 255 ],
        dimgray: [ 105, 105, 105 ],
        dimgrey: [ 105, 105, 105 ],
        dodgerblue: [ 30, 144, 255 ],
        firebrick: [ 178, 34, 34 ],
        floralwhite: [ 255, 250, 240 ],
        forestgreen: [ 34, 139, 34 ],
        fuchsia: [ 255, 0, 255 ],
        gainsboro: [ 220, 220, 220 ],
        ghostwhite: [ 248, 248, 255 ],
        gold: [ 255, 215, 0 ],
        goldenrod: [ 218, 165, 32 ],
        gray: [ 128, 128, 128 ],
        green: [ 0, 128, 0 ],
        greenyellow: [ 173, 255, 47 ],
        grey: [ 128, 128, 128 ],
        honeydew: [ 240, 255, 240 ],
        hotpink: [ 255, 105, 180 ],
        indianred: [ 205, 92, 92 ],
        indigo: [ 75, 0, 130 ],
        ivory: [ 255, 255, 240 ],
        khaki: [ 240, 230, 140 ],
        lavender: [ 230, 230, 250 ],
        lavenderblush: [ 255, 240, 245 ],
        lawngreen: [ 124, 252, 0 ],
        lemonchiffon: [ 255, 250, 205 ],
        lightblue: [ 173, 216, 230 ],
        lightcoral: [ 240, 128, 128 ],
        lightcyan: [ 224, 255, 255 ],
        lightgoldenrodyellow: [ 250, 250, 210 ],
        lightgray: [ 211, 211, 211 ],
        lightgreen: [ 144, 238, 144 ],
        lightgrey: [ 211, 211, 211 ],
        lightpink: [ 255, 182, 193 ],
        lightsalmon: [ 255, 160, 122 ],
        lightseagreen: [ 32, 178, 170 ],
        lightskyblue: [ 135, 206, 250 ],
        lightslategray: [ 119, 136, 153 ],
        lightslategrey: [ 119, 136, 153 ],
        lightsteelblue: [ 176, 196, 222 ],
        lightyellow: [ 255, 255, 224 ],
        lime: [ 0, 255, 0 ],
        limegreen: [ 50, 205, 50 ],
        linen: [ 250, 240, 230 ],
        magenta: [ 255, 0, 255 ],
        maroon: [ 128, 0, 0 ],
        mediumaquamarine: [ 102, 205, 170 ],
        mediumblue: [ 0, 0, 205 ],
        mediumorchid: [ 186, 85, 211 ],
        mediumpurple: [ 147, 112, 219 ],
        mediumseagreen: [ 60, 179, 113 ],
        mediumslateblue: [ 123, 104, 238 ],
        mediumspringgreen: [ 0, 250, 154 ],
        mediumturquoise: [ 72, 209, 204 ],
        mediumvioletred: [ 199, 21, 133 ],
        midnightblue: [ 25, 25, 112 ],
        mintcream: [ 245, 255, 250 ],
        mistyrose: [ 255, 228, 225 ],
        moccasin: [ 255, 228, 181 ],
        navajowhite: [ 255, 222, 173 ],
        navy: [ 0, 0, 128 ],
        oldlace: [ 253, 245, 230 ],
        olive: [ 128, 128, 0 ],
        olivedrab: [ 107, 142, 35 ],
        orange: [ 255, 165, 0 ],
        orangered: [ 255, 69, 0 ],
        orchid: [ 218, 112, 214 ],
        palegoldenrod: [ 238, 232, 170 ],
        palegreen: [ 152, 251, 152 ],
        paleturquoise: [ 175, 238, 238 ],
        palevioletred: [ 219, 112, 147 ],
        papayawhip: [ 255, 239, 213 ],
        peachpuff: [ 255, 218, 185 ],
        peru: [ 205, 133, 63 ],
        pink: [ 255, 192, 203 ],
        plum: [ 221, 160, 221 ],
        powderblue: [ 176, 224, 230 ],
        purple: [ 128, 0, 128 ],
        rebeccapurple: [ 102, 51, 153 ],
        red: [ 255, 0, 0 ],
        rosybrown: [ 188, 143, 143 ],
        royalblue: [ 65, 105, 225 ],
        saddlebrown: [ 139, 69, 19 ],
        salmon: [ 250, 128, 114 ],
        sandybrown: [ 244, 164, 96 ],
        seagreen: [ 46, 139, 87 ],
        seashell: [ 255, 245, 238 ],
        sienna: [ 160, 82, 45 ],
        silver: [ 192, 192, 192 ],
        skyblue: [ 135, 206, 235 ],
        slateblue: [ 106, 90, 205 ],
        slategray: [ 112, 128, 144 ],
        slategrey: [ 112, 128, 144 ],
        snow: [ 255, 250, 250 ],
        springgreen: [ 0, 255, 127 ],
        steelblue: [ 70, 130, 180 ],
        tan: [ 210, 180, 140 ],
        teal: [ 0, 128, 128 ],
        thistle: [ 216, 191, 216 ],
        tomato: [ 255, 99, 71 ],
        turquoise: [ 64, 224, 208 ],
        violet: [ 238, 130, 238 ],
        wheat: [ 245, 222, 179 ],
        white: [ 255, 255, 255 ],
        whitesmoke: [ 245, 245, 245 ],
        yellow: [ 255, 255, 0 ],
        yellowgreen: [ 154, 205, 50 ]
      }, C = {};
      for (var T in S) C[JSON.stringify(S[T])] = T;
    }, {} ],
    5: [ function(e, t) {
      var i = e(4), n = function() {
        return new l();
      };
      for (var r in i) {
        n[r + "Raw"] = function(e) {
          return function(t) {
            return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), i[e](t);
          };
        }(r);
        var o = /(\w+)2(\w+)/.exec(r), s = o[1], a = o[2];
        (n[s] = n[s] || {})[a] = n[r] = function(e) {
          return function(t) {
            "number" == typeof t && (t = Array.prototype.slice.call(arguments));
            var n = i[e](t);
            if ("string" == typeof n || void 0 === n) return n;
            for (var r = 0; r < n.length; r++) n[r] = Math.round(n[r]);
            return n;
          };
        }(r);
      }
      var l = function() {
        this.convs = {};
      };
      l.prototype.routeSpace = function(e, t) {
        var i = t[0];
        return void 0 === i ? this.getValues(e) : ("number" == typeof i && (i = Array.prototype.slice.call(t)), 
        this.setValues(e, i));
      }, l.prototype.setValues = function(e, t) {
        return this.space = e, this.convs = {}, this.convs[e] = t, this;
      }, l.prototype.getValues = function(e) {
        var t = this.convs[e];
        if (!t) {
          var i = this.space, r = this.convs[i];
          t = n[i][e](r), this.convs[e] = t;
        }
        return t;
      }, [ "rgb", "hsl", "hsv", "cmyk", "keyword" ].forEach(function(e) {
        l.prototype[e] = function() {
          return this.routeSpace(e, arguments);
        };
      }), t.exports = n;
    }, {
      4: 4
    } ],
    6: [ function(e, t) {
      "use strict";
      t.exports = {
        aliceblue: [ 240, 248, 255 ],
        antiquewhite: [ 250, 235, 215 ],
        aqua: [ 0, 255, 255 ],
        aquamarine: [ 127, 255, 212 ],
        azure: [ 240, 255, 255 ],
        beige: [ 245, 245, 220 ],
        bisque: [ 255, 228, 196 ],
        black: [ 0, 0, 0 ],
        blanchedalmond: [ 255, 235, 205 ],
        blue: [ 0, 0, 255 ],
        blueviolet: [ 138, 43, 226 ],
        brown: [ 165, 42, 42 ],
        burlywood: [ 222, 184, 135 ],
        cadetblue: [ 95, 158, 160 ],
        chartreuse: [ 127, 255, 0 ],
        chocolate: [ 210, 105, 30 ],
        coral: [ 255, 127, 80 ],
        cornflowerblue: [ 100, 149, 237 ],
        cornsilk: [ 255, 248, 220 ],
        crimson: [ 220, 20, 60 ],
        cyan: [ 0, 255, 255 ],
        darkblue: [ 0, 0, 139 ],
        darkcyan: [ 0, 139, 139 ],
        darkgoldenrod: [ 184, 134, 11 ],
        darkgray: [ 169, 169, 169 ],
        darkgreen: [ 0, 100, 0 ],
        darkgrey: [ 169, 169, 169 ],
        darkkhaki: [ 189, 183, 107 ],
        darkmagenta: [ 139, 0, 139 ],
        darkolivegreen: [ 85, 107, 47 ],
        darkorange: [ 255, 140, 0 ],
        darkorchid: [ 153, 50, 204 ],
        darkred: [ 139, 0, 0 ],
        darksalmon: [ 233, 150, 122 ],
        darkseagreen: [ 143, 188, 143 ],
        darkslateblue: [ 72, 61, 139 ],
        darkslategray: [ 47, 79, 79 ],
        darkslategrey: [ 47, 79, 79 ],
        darkturquoise: [ 0, 206, 209 ],
        darkviolet: [ 148, 0, 211 ],
        deeppink: [ 255, 20, 147 ],
        deepskyblue: [ 0, 191, 255 ],
        dimgray: [ 105, 105, 105 ],
        dimgrey: [ 105, 105, 105 ],
        dodgerblue: [ 30, 144, 255 ],
        firebrick: [ 178, 34, 34 ],
        floralwhite: [ 255, 250, 240 ],
        forestgreen: [ 34, 139, 34 ],
        fuchsia: [ 255, 0, 255 ],
        gainsboro: [ 220, 220, 220 ],
        ghostwhite: [ 248, 248, 255 ],
        gold: [ 255, 215, 0 ],
        goldenrod: [ 218, 165, 32 ],
        gray: [ 128, 128, 128 ],
        green: [ 0, 128, 0 ],
        greenyellow: [ 173, 255, 47 ],
        grey: [ 128, 128, 128 ],
        honeydew: [ 240, 255, 240 ],
        hotpink: [ 255, 105, 180 ],
        indianred: [ 205, 92, 92 ],
        indigo: [ 75, 0, 130 ],
        ivory: [ 255, 255, 240 ],
        khaki: [ 240, 230, 140 ],
        lavender: [ 230, 230, 250 ],
        lavenderblush: [ 255, 240, 245 ],
        lawngreen: [ 124, 252, 0 ],
        lemonchiffon: [ 255, 250, 205 ],
        lightblue: [ 173, 216, 230 ],
        lightcoral: [ 240, 128, 128 ],
        lightcyan: [ 224, 255, 255 ],
        lightgoldenrodyellow: [ 250, 250, 210 ],
        lightgray: [ 211, 211, 211 ],
        lightgreen: [ 144, 238, 144 ],
        lightgrey: [ 211, 211, 211 ],
        lightpink: [ 255, 182, 193 ],
        lightsalmon: [ 255, 160, 122 ],
        lightseagreen: [ 32, 178, 170 ],
        lightskyblue: [ 135, 206, 250 ],
        lightslategray: [ 119, 136, 153 ],
        lightslategrey: [ 119, 136, 153 ],
        lightsteelblue: [ 176, 196, 222 ],
        lightyellow: [ 255, 255, 224 ],
        lime: [ 0, 255, 0 ],
        limegreen: [ 50, 205, 50 ],
        linen: [ 250, 240, 230 ],
        magenta: [ 255, 0, 255 ],
        maroon: [ 128, 0, 0 ],
        mediumaquamarine: [ 102, 205, 170 ],
        mediumblue: [ 0, 0, 205 ],
        mediumorchid: [ 186, 85, 211 ],
        mediumpurple: [ 147, 112, 219 ],
        mediumseagreen: [ 60, 179, 113 ],
        mediumslateblue: [ 123, 104, 238 ],
        mediumspringgreen: [ 0, 250, 154 ],
        mediumturquoise: [ 72, 209, 204 ],
        mediumvioletred: [ 199, 21, 133 ],
        midnightblue: [ 25, 25, 112 ],
        mintcream: [ 245, 255, 250 ],
        mistyrose: [ 255, 228, 225 ],
        moccasin: [ 255, 228, 181 ],
        navajowhite: [ 255, 222, 173 ],
        navy: [ 0, 0, 128 ],
        oldlace: [ 253, 245, 230 ],
        olive: [ 128, 128, 0 ],
        olivedrab: [ 107, 142, 35 ],
        orange: [ 255, 165, 0 ],
        orangered: [ 255, 69, 0 ],
        orchid: [ 218, 112, 214 ],
        palegoldenrod: [ 238, 232, 170 ],
        palegreen: [ 152, 251, 152 ],
        paleturquoise: [ 175, 238, 238 ],
        palevioletred: [ 219, 112, 147 ],
        papayawhip: [ 255, 239, 213 ],
        peachpuff: [ 255, 218, 185 ],
        peru: [ 205, 133, 63 ],
        pink: [ 255, 192, 203 ],
        plum: [ 221, 160, 221 ],
        powderblue: [ 176, 224, 230 ],
        purple: [ 128, 0, 128 ],
        rebeccapurple: [ 102, 51, 153 ],
        red: [ 255, 0, 0 ],
        rosybrown: [ 188, 143, 143 ],
        royalblue: [ 65, 105, 225 ],
        saddlebrown: [ 139, 69, 19 ],
        salmon: [ 250, 128, 114 ],
        sandybrown: [ 244, 164, 96 ],
        seagreen: [ 46, 139, 87 ],
        seashell: [ 255, 245, 238 ],
        sienna: [ 160, 82, 45 ],
        silver: [ 192, 192, 192 ],
        skyblue: [ 135, 206, 235 ],
        slateblue: [ 106, 90, 205 ],
        slategray: [ 112, 128, 144 ],
        slategrey: [ 112, 128, 144 ],
        snow: [ 255, 250, 250 ],
        springgreen: [ 0, 255, 127 ],
        steelblue: [ 70, 130, 180 ],
        tan: [ 210, 180, 140 ],
        teal: [ 0, 128, 128 ],
        thistle: [ 216, 191, 216 ],
        tomato: [ 255, 99, 71 ],
        turquoise: [ 64, 224, 208 ],
        violet: [ 238, 130, 238 ],
        wheat: [ 245, 222, 179 ],
        white: [ 255, 255, 255 ],
        whitesmoke: [ 245, 245, 245 ],
        yellow: [ 255, 255, 0 ],
        yellowgreen: [ 154, 205, 50 ]
      };
    }, {} ],
    7: [ function(e, t) {
      var i = e(29)();
      i.helpers = e(45), e(27)(i), i.defaults = e(25), i.Element = e(26), i.elements = e(40), 
      i.Interaction = e(28), i.layouts = e(30), i.platform = e(48), i.plugins = e(31), 
      i.Ticks = e(34), e(22)(i), e(23)(i), e(24)(i), e(33)(i), e(32)(i), e(35)(i), e(55)(i), 
      e(53)(i), e(54)(i), e(56)(i), e(57)(i), e(58)(i), e(15)(i), e(16)(i), e(17)(i), 
      e(18)(i), e(19)(i), e(20)(i), e(21)(i), e(8)(i), e(9)(i), e(10)(i), e(11)(i), e(12)(i), 
      e(13)(i), e(14)(i);
      var n = e(49);
      for (var r in n) n.hasOwnProperty(r) && i.plugins.register(n[r]);
      i.platform.initialize(), t.exports = i, "undefined" != typeof window && (window.Chart = i), 
      i.Legend = n.legend._element, i.Title = n.title._element, i.pluginService = i.plugins, 
      i.PluginBase = i.Element.extend({}), i.canvasHelpers = i.helpers.canvas, i.layoutService = i.layouts;
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      34: 34,
      35: 35,
      40: 40,
      45: 45,
      48: 48,
      49: 49,
      53: 53,
      54: 54,
      55: 55,
      56: 56,
      57: 57,
      58: 58,
      8: 8,
      9: 9
    } ],
    8: [ function(e, t) {
      "use strict";
      t.exports = function(e) {
        e.Bar = function(t, i) {
          return i.type = "bar", new e(t, i);
        };
      };
    }, {} ],
    9: [ function(e, t) {
      "use strict";
      t.exports = function(e) {
        e.Bubble = function(t, i) {
          return i.type = "bubble", new e(t, i);
        };
      };
    }, {} ],
    10: [ function(e, t) {
      "use strict";
      t.exports = function(e) {
        e.Doughnut = function(t, i) {
          return i.type = "doughnut", new e(t, i);
        };
      };
    }, {} ],
    11: [ function(e, t) {
      "use strict";
      t.exports = function(e) {
        e.Line = function(t, i) {
          return i.type = "line", new e(t, i);
        };
      };
    }, {} ],
    12: [ function(e, t) {
      "use strict";
      t.exports = function(e) {
        e.PolarArea = function(t, i) {
          return i.type = "polarArea", new e(t, i);
        };
      };
    }, {} ],
    13: [ function(e, t) {
      "use strict";
      t.exports = function(e) {
        e.Radar = function(t, i) {
          return i.type = "radar", new e(t, i);
        };
      };
    }, {} ],
    14: [ function(e, t) {
      "use strict";
      t.exports = function(e) {
        e.Scatter = function(t, i) {
          return i.type = "scatter", new e(t, i);
        };
      };
    }, {} ],
    15: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(40), r = e(45);
      i._set("bar", {
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [ {
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          } ],
          yAxes: [ {
            type: "linear"
          } ]
        }
      }), i._set("horizontalBar", {
        hover: {
          mode: "index",
          axis: "y"
        },
        scales: {
          xAxes: [ {
            type: "linear",
            position: "bottom"
          } ],
          yAxes: [ {
            position: "left",
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          } ]
        },
        elements: {
          rectangle: {
            borderSkipped: "left"
          }
        },
        tooltips: {
          callbacks: {
            title: function(e, t) {
              var i = "";
              return e.length > 0 && (e[0].yLabel ? i = e[0].yLabel : t.labels.length > 0 && e[0].index < t.labels.length && (i = t.labels[e[0].index])), 
              i;
            },
            label: function(e, t) {
              return (t.datasets[e.datasetIndex].label || "") + ": " + e.xLabel;
            }
          },
          mode: "index",
          axis: "y"
        }
      }), t.exports = function(e) {
        e.controllers.bar = e.DatasetController.extend({
          dataElementType: n.Rectangle,
          initialize: function() {
            var t;
            e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, 
            t.bar = !0;
          },
          update: function(e) {
            var t, i, n = this.getMeta().data;
            for (this._ruler = this.getRuler(), t = 0, i = n.length; t < i; ++t) this.updateElement(n[t], t, e);
          },
          updateElement: function(e, t, i) {
            var n = this, o = n.chart, s = n.getMeta(), a = n.getDataset(), l = e.custom || {}, u = o.options.elements.rectangle;
            e._xScale = n.getScaleForId(s.xAxisID), e._yScale = n.getScaleForId(s.yAxisID), 
            e._datasetIndex = n.index, e._index = t, e._model = {
              datasetLabel: a.label,
              label: o.data.labels[t],
              borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
              backgroundColor: l.backgroundColor ? l.backgroundColor : r.valueAtIndexOrDefault(a.backgroundColor, t, u.backgroundColor),
              borderColor: l.borderColor ? l.borderColor : r.valueAtIndexOrDefault(a.borderColor, t, u.borderColor),
              borderWidth: l.borderWidth ? l.borderWidth : r.valueAtIndexOrDefault(a.borderWidth, t, u.borderWidth)
            }, n.updateElementGeometry(e, t, i), e.pivot();
          },
          updateElementGeometry: function(e, t, i) {
            var n = this, r = e._model, o = n.getValueScale(), s = o.getBasePixel(), a = o.isHorizontal(), l = n._ruler || n.getRuler(), u = n.calculateBarValuePixels(n.index, t), c = n.calculateBarIndexPixels(n.index, t, l);
            r.horizontal = a, r.base = i ? s : u.base, r.x = a ? i ? s : u.head : c.center, 
            r.y = a ? c.center : i ? s : u.head, r.height = a ? c.size : void 0, r.width = a ? void 0 : c.size;
          },
          getValueScaleId: function() {
            return this.getMeta().yAxisID;
          },
          getIndexScaleId: function() {
            return this.getMeta().xAxisID;
          },
          getValueScale: function() {
            return this.getScaleForId(this.getValueScaleId());
          },
          getIndexScale: function() {
            return this.getScaleForId(this.getIndexScaleId());
          },
          _getStacks: function(e) {
            var t, i, n = this.chart, r = this.getIndexScale().options.stacked, o = void 0 === e ? n.data.datasets.length : e + 1, s = [];
            for (t = 0; t < o; ++t) (i = n.getDatasetMeta(t)).bar && n.isDatasetVisible(t) && (!1 === r || !0 === r && -1 === s.indexOf(i.stack) || void 0 === r && (void 0 === i.stack || -1 === s.indexOf(i.stack))) && s.push(i.stack);
            return s;
          },
          getStackCount: function() {
            return this._getStacks().length;
          },
          getStackIndex: function(e, t) {
            var i = this._getStacks(e), n = void 0 !== t ? i.indexOf(t) : -1;
            return -1 === n ? i.length - 1 : n;
          },
          getRuler: function() {
            var e, t, i = this.getIndexScale(), n = this.getStackCount(), o = this.index, s = i.isHorizontal(), a = s ? i.left : i.top, l = a + (s ? i.width : i.height), u = [];
            for (e = 0, t = this.getMeta().data.length; e < t; ++e) u.push(i.getPixelForValue(null, e, o));
            return {
              min: r.isNullOrUndef(i.options.barThickness) ? function(e, t) {
                var i, n, r, o, s = e.isHorizontal() ? e.width : e.height, a = e.getTicks();
                for (r = 1, o = t.length; r < o; ++r) s = Math.min(s, t[r] - t[r - 1]);
                for (r = 0, o = a.length; r < o; ++r) n = e.getPixelForTick(r), s = r > 0 ? Math.min(s, n - i) : s, 
                i = n;
                return s;
              }(i, u) : -1,
              pixels: u,
              start: a,
              end: l,
              stackCount: n,
              scale: i
            };
          },
          calculateBarValuePixels: function(e, t) {
            var i, n, r, o, s, a, l = this.chart, u = this.getMeta(), c = this.getValueScale(), d = l.data.datasets, h = c.getRightValue(d[e].data[t]), f = c.options.stacked, p = u.stack, m = 0;
            if (f || void 0 === f && void 0 !== p) for (i = 0; i < e; ++i) (n = l.getDatasetMeta(i)).bar && n.stack === p && n.controller.getValueScaleId() === c.id && l.isDatasetVisible(i) && (r = c.getRightValue(d[i].data[t]), 
            (h < 0 && r < 0 || h >= 0 && r > 0) && (m += r));
            return o = c.getPixelForValue(m), {
              size: a = ((s = c.getPixelForValue(m + h)) - o) / 2,
              base: o,
              head: s,
              center: s + a / 2
            };
          },
          calculateBarIndexPixels: function(e, t, i) {
            var n, o, s, a, l, u, c, d, h, f, p, m, g, v, y, b, x, w = i.scale.options, _ = "flex" === w.barThickness ? (h = t, 
            p = w, v = (g = (f = i).pixels)[h], y = h > 0 ? g[h - 1] : null, b = h < g.length - 1 ? g[h + 1] : null, 
            x = p.categoryPercentage, null === y && (y = v - (null === b ? f.end - v : b - v)), 
            null === b && (b = v + v - y), m = v - (v - y) / 2 * x, {
              chunk: (b - y) / 2 * x / f.stackCount,
              ratio: p.barPercentage,
              start: m
            }) : (n = t, o = i, u = (s = w).barThickness, c = o.stackCount, d = o.pixels[n], 
            r.isNullOrUndef(u) ? (a = o.min * s.categoryPercentage, l = s.barPercentage) : (a = u * c, 
            l = 1), {
              chunk: a / c,
              ratio: l,
              start: d - a / 2
            }), S = this.getStackIndex(e, this.getMeta().stack), C = _.start + _.chunk * S + _.chunk / 2, T = Math.min(r.valueOrDefault(w.maxBarThickness, 1 / 0), _.chunk * _.ratio);
            return {
              base: C - T / 2,
              head: C + T / 2,
              center: C,
              size: T
            };
          },
          draw: function() {
            var e = this.chart, t = this.getValueScale(), i = this.getMeta().data, n = this.getDataset(), o = i.length, s = 0;
            for (r.canvas.clipArea(e.ctx, e.chartArea); s < o; ++s) isNaN(t.getRightValue(n.data[s])) || i[s].draw();
            r.canvas.unclipArea(e.ctx);
          },
          setHoverStyle: function(e) {
            var t = this.chart.data.datasets[e._datasetIndex], i = e._index, n = e.custom || {}, o = e._model;
            o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : r.valueAtIndexOrDefault(t.hoverBackgroundColor, i, r.getHoverColor(o.backgroundColor)), 
            o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : r.valueAtIndexOrDefault(t.hoverBorderColor, i, r.getHoverColor(o.borderColor)), 
            o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : r.valueAtIndexOrDefault(t.hoverBorderWidth, i, o.borderWidth);
          },
          removeHoverStyle: function(e) {
            var t = this.chart.data.datasets[e._datasetIndex], i = e._index, n = e.custom || {}, o = e._model, s = this.chart.options.elements.rectangle;
            o.backgroundColor = n.backgroundColor ? n.backgroundColor : r.valueAtIndexOrDefault(t.backgroundColor, i, s.backgroundColor), 
            o.borderColor = n.borderColor ? n.borderColor : r.valueAtIndexOrDefault(t.borderColor, i, s.borderColor), 
            o.borderWidth = n.borderWidth ? n.borderWidth : r.valueAtIndexOrDefault(t.borderWidth, i, s.borderWidth);
          }
        }), e.controllers.horizontalBar = e.controllers.bar.extend({
          getValueScaleId: function() {
            return this.getMeta().xAxisID;
          },
          getIndexScaleId: function() {
            return this.getMeta().yAxisID;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    } ],
    16: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(40), r = e(45);
      i._set("bubble", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [ {
            type: "linear",
            position: "bottom",
            id: "x-axis-0"
          } ],
          yAxes: [ {
            type: "linear",
            position: "left",
            id: "y-axis-0"
          } ]
        },
        tooltips: {
          callbacks: {
            title: function() {
              return "";
            },
            label: function(e, t) {
              var i = t.datasets[e.datasetIndex].label || "", n = t.datasets[e.datasetIndex].data[e.index];
              return i + ": (" + e.xLabel + ", " + e.yLabel + ", " + n.r + ")";
            }
          }
        }
      }), t.exports = function(e) {
        e.controllers.bubble = e.DatasetController.extend({
          dataElementType: n.Point,
          update: function(e) {
            var t = this, i = t.getMeta().data;
            r.each(i, function(i, n) {
              t.updateElement(i, n, e);
            });
          },
          updateElement: function(e, t, i) {
            var n = this, r = n.getMeta(), o = e.custom || {}, s = n.getScaleForId(r.xAxisID), a = n.getScaleForId(r.yAxisID), l = n._resolveElementOptions(e, t), u = n.getDataset().data[t], c = n.index, d = i ? s.getPixelForDecimal(.5) : s.getPixelForValue("object" == typeof u ? u : NaN, t, c), h = i ? a.getBasePixel() : a.getPixelForValue(u, t, c);
            e._xScale = s, e._yScale = a, e._options = l, e._datasetIndex = c, e._index = t, 
            e._model = {
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              hitRadius: l.hitRadius,
              pointStyle: l.pointStyle,
              radius: i ? 0 : l.radius,
              skip: o.skip || isNaN(d) || isNaN(h),
              x: d,
              y: h
            }, e.pivot();
          },
          setHoverStyle: function(e) {
            var t = e._model, i = e._options;
            t.backgroundColor = r.valueOrDefault(i.hoverBackgroundColor, r.getHoverColor(i.backgroundColor)), 
            t.borderColor = r.valueOrDefault(i.hoverBorderColor, r.getHoverColor(i.borderColor)), 
            t.borderWidth = r.valueOrDefault(i.hoverBorderWidth, i.borderWidth), t.radius = i.radius + i.hoverRadius;
          },
          removeHoverStyle: function(e) {
            var t = e._model, i = e._options;
            t.backgroundColor = i.backgroundColor, t.borderColor = i.borderColor, t.borderWidth = i.borderWidth, 
            t.radius = i.radius;
          },
          _resolveElementOptions: function(e, t) {
            var i, n, o, s = this.chart, a = s.data.datasets[this.index], l = e.custom || {}, u = s.options.elements.point, c = r.options.resolve, d = a.data[t], h = {}, f = {
              chart: s,
              dataIndex: t,
              dataset: a,
              datasetIndex: this.index
            }, p = [ "backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle" ];
            for (i = 0, n = p.length; i < n; ++i) h[o = p[i]] = c([ l[o], a[o], u[o] ], f, t);
            return h.radius = c([ l.radius, d ? d.r : void 0, a.radius, u.radius ], f, t), h;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    } ],
    17: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(40), r = e(45);
      i._set("doughnut", {
        animation: {
          animateRotate: !0,
          animateScale: !1
        },
        hover: {
          mode: "single"
        },
        legendCallback: function(e) {
          var t = [];
          t.push('<ul class="' + e.id + '-legend">');
          var i = e.data, n = i.datasets, r = i.labels;
          if (n.length) for (var o = 0; o < n[0].data.length; ++o) t.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), 
          r[o] && t.push(r[o]), t.push("</li>");
          return t.push("</ul>"), t.join("");
        },
        legend: {
          labels: {
            generateLabels: function(e) {
              var t = e.data;
              return t.labels.length && t.datasets.length ? t.labels.map(function(i, n) {
                var o = e.getDatasetMeta(0), s = t.datasets[0], a = o.data[n], l = a && a.custom || {}, u = r.valueAtIndexOrDefault, c = e.options.elements.arc;
                return {
                  text: i,
                  fillStyle: l.backgroundColor ? l.backgroundColor : u(s.backgroundColor, n, c.backgroundColor),
                  strokeStyle: l.borderColor ? l.borderColor : u(s.borderColor, n, c.borderColor),
                  lineWidth: l.borderWidth ? l.borderWidth : u(s.borderWidth, n, c.borderWidth),
                  hidden: isNaN(s.data[n]) || o.data[n].hidden,
                  index: n
                };
              }) : [];
            }
          },
          onClick: function(e, t) {
            var i, n, r, o = t.index, s = this.chart;
            for (i = 0, n = (s.data.datasets || []).length; i < n; ++i) (r = s.getDatasetMeta(i)).data[o] && (r.data[o].hidden = !r.data[o].hidden);
            s.update();
          }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
          callbacks: {
            title: function() {
              return "";
            },
            label: function(e, t) {
              var i = t.labels[e.index], n = ": " + t.datasets[e.datasetIndex].data[e.index];
              return r.isArray(i) ? (i = i.slice())[0] += n : i += n, i;
            }
          }
        }
      }), i._set("pie", r.clone(i.doughnut)), i._set("pie", {
        cutoutPercentage: 0
      }), t.exports = function(e) {
        e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
          dataElementType: n.Arc,
          linkScales: r.noop,
          getRingIndex: function(e) {
            for (var t = 0, i = 0; i < e; ++i) this.chart.isDatasetVisible(i) && ++t;
            return t;
          },
          update: function(e) {
            var t = this, i = t.chart, n = i.chartArea, o = i.options, s = o.elements.arc, a = n.right - n.left - s.borderWidth, l = n.bottom - n.top - s.borderWidth, u = Math.min(a, l), c = {
              x: 0,
              y: 0
            }, d = t.getMeta(), h = o.cutoutPercentage, f = o.circumference;
            if (f < 2 * Math.PI) {
              var p = o.rotation % (2 * Math.PI), m = (p += 2 * Math.PI * (p >= Math.PI ? -1 : p < -Math.PI ? 1 : 0)) + f, g = Math.cos(p), v = Math.sin(p), y = Math.cos(m), b = Math.sin(m), x = p <= 0 && m >= 0 || p <= 2 * Math.PI && 2 * Math.PI <= m, w = p <= .5 * Math.PI && .5 * Math.PI <= m || p <= 2.5 * Math.PI && 2.5 * Math.PI <= m, _ = p <= -Math.PI && -Math.PI <= m || p <= Math.PI && Math.PI <= m, S = p <= .5 * -Math.PI && .5 * -Math.PI <= m || p <= 1.5 * Math.PI && 1.5 * Math.PI <= m, C = h / 100, T = _ ? -1 : Math.min(g * (g < 0 ? 1 : C), y * (y < 0 ? 1 : C)), k = S ? -1 : Math.min(v * (v < 0 ? 1 : C), b * (b < 0 ? 1 : C)), M = x ? 1 : Math.max(g * (g > 0 ? 1 : C), y * (y > 0 ? 1 : C)), D = w ? 1 : Math.max(v * (v > 0 ? 1 : C), b * (b > 0 ? 1 : C)), A = .5 * (M - T), P = .5 * (D - k);
              u = Math.min(a / A, l / P), c = {
                x: -.5 * (M + T),
                y: -.5 * (D + k)
              };
            }
            i.borderWidth = t.getMaxBorderWidth(d.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), 
            i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), 
            i.offsetX = c.x * i.outerRadius, i.offsetY = c.y * i.outerRadius, d.total = t.calculateTotal(), 
            t.outerRadius = i.outerRadius - i.radiusLength * t.getRingIndex(t.index), t.innerRadius = Math.max(t.outerRadius - i.radiusLength, 0), 
            r.each(d.data, function(i, n) {
              t.updateElement(i, n, e);
            });
          },
          updateElement: function(e, t, i) {
            var n = this, o = n.chart, s = o.chartArea, a = o.options, l = a.animation, u = (s.left + s.right) / 2, c = (s.top + s.bottom) / 2, d = a.rotation, h = a.rotation, f = n.getDataset(), p = i && l.animateRotate ? 0 : e.hidden ? 0 : n.calculateCircumference(f.data[t]) * (a.circumference / (2 * Math.PI)), m = i && l.animateScale ? 0 : n.innerRadius, g = i && l.animateScale ? 0 : n.outerRadius, v = r.valueAtIndexOrDefault;
            r.extend(e, {
              _datasetIndex: n.index,
              _index: t,
              _model: {
                x: u + o.offsetX,
                y: c + o.offsetY,
                startAngle: d,
                endAngle: h,
                circumference: p,
                outerRadius: g,
                innerRadius: m,
                label: v(f.label, t, o.data.labels[t])
              }
            });
            var y = e._model;
            this.removeHoverStyle(e), i && l.animateRotate || (y.startAngle = 0 === t ? a.rotation : n.getMeta().data[t - 1]._model.endAngle, 
            y.endAngle = y.startAngle + y.circumference), e.pivot();
          },
          removeHoverStyle: function(t) {
            e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc);
          },
          calculateTotal: function() {
            var e, t = this.getDataset(), i = this.getMeta(), n = 0;
            return r.each(i.data, function(i, r) {
              e = t.data[r], isNaN(e) || i.hidden || (n += Math.abs(e));
            }), n;
          },
          calculateCircumference: function(e) {
            var t = this.getMeta().total;
            return t > 0 && !isNaN(e) ? 2 * Math.PI * (Math.abs(e) / t) : 0;
          },
          getMaxBorderWidth: function(e) {
            for (var t, i, n = 0, r = this.index, o = e.length, s = 0; s < o; s++) t = e[s]._model ? e[s]._model.borderWidth : 0, 
            n = (i = e[s]._chart ? e[s]._chart.config.data.datasets[r].hoverBorderWidth : 0) > (n = t > n ? t : n) ? i : n;
            return n;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    } ],
    18: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(40), r = e(45);
      i._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [ {
            type: "category",
            id: "x-axis-0"
          } ],
          yAxes: [ {
            type: "linear",
            id: "y-axis-0"
          } ]
        }
      }), t.exports = function(e) {
        function t(e, t) {
          return r.valueOrDefault(e.showLine, t.showLines);
        }
        e.controllers.line = e.DatasetController.extend({
          datasetElementType: n.Line,
          dataElementType: n.Point,
          update: function(e) {
            var i, n, o, s = this, a = s.getMeta(), l = a.dataset, u = a.data || [], c = s.chart.options, d = c.elements.line, h = s.getScaleForId(a.yAxisID), f = s.getDataset(), p = t(f, c);
            for (p && (o = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), 
            l._scale = h, l._datasetIndex = s.index, l._children = u, l._model = {
              spanGaps: f.spanGaps ? f.spanGaps : c.spanGaps,
              tension: o.tension ? o.tension : r.valueOrDefault(f.lineTension, d.tension),
              backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || d.backgroundColor,
              borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || d.borderWidth,
              borderColor: o.borderColor ? o.borderColor : f.borderColor || d.borderColor,
              borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || d.borderCapStyle,
              borderDash: o.borderDash ? o.borderDash : f.borderDash || d.borderDash,
              borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || d.borderDashOffset,
              borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || d.borderJoinStyle,
              fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : d.fill,
              steppedLine: o.steppedLine ? o.steppedLine : r.valueOrDefault(f.steppedLine, d.stepped),
              cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : r.valueOrDefault(f.cubicInterpolationMode, d.cubicInterpolationMode)
            }, l.pivot()), i = 0, n = u.length; i < n; ++i) s.updateElement(u[i], i, e);
            for (p && 0 !== l._model.tension && s.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i) u[i].pivot();
          },
          getPointBackgroundColor: function(e, t) {
            var i = this.chart.options.elements.point.backgroundColor, n = this.getDataset(), o = e.custom || {};
            return o.backgroundColor ? i = o.backgroundColor : n.pointBackgroundColor ? i = r.valueAtIndexOrDefault(n.pointBackgroundColor, t, i) : n.backgroundColor && (i = n.backgroundColor), 
            i;
          },
          getPointBorderColor: function(e, t) {
            var i = this.chart.options.elements.point.borderColor, n = this.getDataset(), o = e.custom || {};
            return o.borderColor ? i = o.borderColor : n.pointBorderColor ? i = r.valueAtIndexOrDefault(n.pointBorderColor, t, i) : n.borderColor && (i = n.borderColor), 
            i;
          },
          getPointBorderWidth: function(e, t) {
            var i = this.chart.options.elements.point.borderWidth, n = this.getDataset(), o = e.custom || {};
            return isNaN(o.borderWidth) ? !isNaN(n.pointBorderWidth) || r.isArray(n.pointBorderWidth) ? i = r.valueAtIndexOrDefault(n.pointBorderWidth, t, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = o.borderWidth, 
            i;
          },
          updateElement: function(e, t, i) {
            var n, o, s = this, a = s.getMeta(), l = e.custom || {}, u = s.getDataset(), c = s.index, d = u.data[t], h = s.getScaleForId(a.yAxisID), f = s.getScaleForId(a.xAxisID), p = s.chart.options.elements.point;
            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), 
            n = f.getPixelForValue("object" == typeof d ? d : NaN, t, c), o = i ? h.getBasePixel() : s.calculatePointY(d, t, c), 
            e._xScale = f, e._yScale = h, e._datasetIndex = c, e._index = t, e._model = {
              x: n,
              y: o,
              skip: l.skip || isNaN(n) || isNaN(o),
              radius: l.radius || r.valueAtIndexOrDefault(u.pointRadius, t, p.radius),
              pointStyle: l.pointStyle || r.valueAtIndexOrDefault(u.pointStyle, t, p.pointStyle),
              backgroundColor: s.getPointBackgroundColor(e, t),
              borderColor: s.getPointBorderColor(e, t),
              borderWidth: s.getPointBorderWidth(e, t),
              tension: a.dataset._model ? a.dataset._model.tension : 0,
              steppedLine: !!a.dataset._model && a.dataset._model.steppedLine,
              hitRadius: l.hitRadius || r.valueAtIndexOrDefault(u.pointHitRadius, t, p.hitRadius)
            };
          },
          calculatePointY: function(e, t, i) {
            var n, r, o, s = this.chart, a = this.getMeta(), l = this.getScaleForId(a.yAxisID), u = 0, c = 0;
            if (l.options.stacked) {
              for (n = 0; n < i; n++) if (r = s.data.datasets[n], "line" === (o = s.getDatasetMeta(n)).type && o.yAxisID === l.id && s.isDatasetVisible(n)) {
                var d = Number(l.getRightValue(r.data[t]));
                d < 0 ? c += d || 0 : u += d || 0;
              }
              var h = Number(l.getRightValue(e));
              return h < 0 ? l.getPixelForValue(c + h) : l.getPixelForValue(u + h);
            }
            return l.getPixelForValue(e);
          },
          updateBezierControlPoints: function() {
            function e(e, t, i) {
              return Math.max(Math.min(e, i), t);
            }
            var t, i, n, o, s = this.getMeta(), a = this.chart.chartArea, l = s.data || [];
            if (s.dataset._model.spanGaps && (l = l.filter(function(e) {
              return !e._model.skip;
            })), "monotone" === s.dataset._model.cubicInterpolationMode) r.splineCurveMonotone(l); else for (t = 0, 
            i = l.length; t < i; ++t) n = l[t]._model, o = r.splineCurve(r.previousItem(l, t)._model, n, r.nextItem(l, t)._model, s.dataset._model.tension), 
            n.controlPointPreviousX = o.previous.x, n.controlPointPreviousY = o.previous.y, 
            n.controlPointNextX = o.next.x, n.controlPointNextY = o.next.y;
            if (this.chart.options.elements.line.capBezierPoints) for (t = 0, i = l.length; t < i; ++t) (n = l[t]._model).controlPointPreviousX = e(n.controlPointPreviousX, a.left, a.right), 
            n.controlPointPreviousY = e(n.controlPointPreviousY, a.top, a.bottom), n.controlPointNextX = e(n.controlPointNextX, a.left, a.right), 
            n.controlPointNextY = e(n.controlPointNextY, a.top, a.bottom);
          },
          draw: function() {
            var e = this.chart, i = this.getMeta(), n = i.data || [], o = e.chartArea, s = n.length, a = 0;
            for (r.canvas.clipArea(e.ctx, o), t(this.getDataset(), e.options) && i.dataset.draw(), 
            r.canvas.unclipArea(e.ctx); a < s; ++a) n[a].draw(o);
          },
          setHoverStyle: function(e) {
            var t = this.chart.data.datasets[e._datasetIndex], i = e._index, n = e.custom || {}, o = e._model;
            o.radius = n.hoverRadius || r.valueAtIndexOrDefault(t.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), 
            o.backgroundColor = n.hoverBackgroundColor || r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, i, r.getHoverColor(o.backgroundColor)), 
            o.borderColor = n.hoverBorderColor || r.valueAtIndexOrDefault(t.pointHoverBorderColor, i, r.getHoverColor(o.borderColor)), 
            o.borderWidth = n.hoverBorderWidth || r.valueAtIndexOrDefault(t.pointHoverBorderWidth, i, o.borderWidth);
          },
          removeHoverStyle: function(e) {
            var t = this, i = t.chart.data.datasets[e._datasetIndex], n = e._index, o = e.custom || {}, s = e._model;
            void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), s.radius = o.radius || r.valueAtIndexOrDefault(i.pointRadius, n, t.chart.options.elements.point.radius), 
            s.backgroundColor = t.getPointBackgroundColor(e, n), s.borderColor = t.getPointBorderColor(e, n), 
            s.borderWidth = t.getPointBorderWidth(e, n);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    } ],
    19: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(40), r = e(45);
      i._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: {
            display: !1
          },
          gridLines: {
            circular: !0
          },
          pointLabels: {
            display: !1
          },
          ticks: {
            beginAtZero: !0
          }
        },
        animation: {
          animateRotate: !0,
          animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function(e) {
          var t = [];
          t.push('<ul class="' + e.id + '-legend">');
          var i = e.data, n = i.datasets, r = i.labels;
          if (n.length) for (var o = 0; o < n[0].data.length; ++o) t.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), 
          r[o] && t.push(r[o]), t.push("</li>");
          return t.push("</ul>"), t.join("");
        },
        legend: {
          labels: {
            generateLabels: function(e) {
              var t = e.data;
              return t.labels.length && t.datasets.length ? t.labels.map(function(i, n) {
                var o = e.getDatasetMeta(0), s = t.datasets[0], a = o.data[n].custom || {}, l = r.valueAtIndexOrDefault, u = e.options.elements.arc;
                return {
                  text: i,
                  fillStyle: a.backgroundColor ? a.backgroundColor : l(s.backgroundColor, n, u.backgroundColor),
                  strokeStyle: a.borderColor ? a.borderColor : l(s.borderColor, n, u.borderColor),
                  lineWidth: a.borderWidth ? a.borderWidth : l(s.borderWidth, n, u.borderWidth),
                  hidden: isNaN(s.data[n]) || o.data[n].hidden,
                  index: n
                };
              }) : [];
            }
          },
          onClick: function(e, t) {
            var i, n, r, o = t.index, s = this.chart;
            for (i = 0, n = (s.data.datasets || []).length; i < n; ++i) (r = s.getDatasetMeta(i)).data[o].hidden = !r.data[o].hidden;
            s.update();
          }
        },
        tooltips: {
          callbacks: {
            title: function() {
              return "";
            },
            label: function(e, t) {
              return t.labels[e.index] + ": " + e.yLabel;
            }
          }
        }
      }), t.exports = function(e) {
        e.controllers.polarArea = e.DatasetController.extend({
          dataElementType: n.Arc,
          linkScales: r.noop,
          update: function(e) {
            var t = this, i = t.chart, n = i.chartArea, o = t.getMeta(), s = i.options, a = s.elements.arc, l = Math.min(n.right - n.left, n.bottom - n.top);
            i.outerRadius = Math.max((l - a.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(s.cutoutPercentage ? i.outerRadius / 100 * s.cutoutPercentage : 1, 0), 
            i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), t.outerRadius = i.outerRadius - i.radiusLength * t.index, 
            t.innerRadius = t.outerRadius - i.radiusLength, o.count = t.countVisibleElements(), 
            r.each(o.data, function(i, n) {
              t.updateElement(i, n, e);
            });
          },
          updateElement: function(e, t, i) {
            for (var n = this, o = n.chart, s = n.getDataset(), a = o.options, l = a.animation, u = o.scale, c = o.data.labels, d = n.calculateCircumference(s.data[t]), h = u.xCenter, f = u.yCenter, p = 0, m = n.getMeta(), g = 0; g < t; ++g) isNaN(s.data[g]) || m.data[g].hidden || ++p;
            var v = a.startAngle, y = e.hidden ? 0 : u.getDistanceFromCenterForValue(s.data[t]), b = v + d * p, x = b + (e.hidden ? 0 : d), w = l.animateScale ? 0 : u.getDistanceFromCenterForValue(s.data[t]);
            r.extend(e, {
              _datasetIndex: n.index,
              _index: t,
              _scale: u,
              _model: {
                x: h,
                y: f,
                innerRadius: 0,
                outerRadius: i ? w : y,
                startAngle: i && l.animateRotate ? v : b,
                endAngle: i && l.animateRotate ? v : x,
                label: r.valueAtIndexOrDefault(c, t, c[t])
              }
            }), n.removeHoverStyle(e), e.pivot();
          },
          removeHoverStyle: function(t) {
            e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc);
          },
          countVisibleElements: function() {
            var e = this.getDataset(), t = this.getMeta(), i = 0;
            return r.each(t.data, function(t, n) {
              isNaN(e.data[n]) || t.hidden || i++;
            }), i;
          },
          calculateCircumference: function(e) {
            var t = this.getMeta().count;
            return t > 0 && !isNaN(e) ? 2 * Math.PI / t : 0;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    } ],
    20: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(40), r = e(45);
      i._set("radar", {
        scale: {
          type: "radialLinear"
        },
        elements: {
          line: {
            tension: 0
          }
        }
      }), t.exports = function(e) {
        e.controllers.radar = e.DatasetController.extend({
          datasetElementType: n.Line,
          dataElementType: n.Point,
          linkScales: r.noop,
          update: function(e) {
            var t = this, i = t.getMeta(), n = i.dataset, o = i.data, s = n.custom || {}, a = t.getDataset(), l = t.chart.options.elements.line, u = t.chart.scale;
            void 0 !== a.tension && void 0 === a.lineTension && (a.lineTension = a.tension), 
            r.extend(i.dataset, {
              _datasetIndex: t.index,
              _scale: u,
              _children: o,
              _loop: !0,
              _model: {
                tension: s.tension ? s.tension : r.valueOrDefault(a.lineTension, l.tension),
                backgroundColor: s.backgroundColor ? s.backgroundColor : a.backgroundColor || l.backgroundColor,
                borderWidth: s.borderWidth ? s.borderWidth : a.borderWidth || l.borderWidth,
                borderColor: s.borderColor ? s.borderColor : a.borderColor || l.borderColor,
                fill: s.fill ? s.fill : void 0 !== a.fill ? a.fill : l.fill,
                borderCapStyle: s.borderCapStyle ? s.borderCapStyle : a.borderCapStyle || l.borderCapStyle,
                borderDash: s.borderDash ? s.borderDash : a.borderDash || l.borderDash,
                borderDashOffset: s.borderDashOffset ? s.borderDashOffset : a.borderDashOffset || l.borderDashOffset,
                borderJoinStyle: s.borderJoinStyle ? s.borderJoinStyle : a.borderJoinStyle || l.borderJoinStyle
              }
            }), i.dataset.pivot(), r.each(o, function(i, n) {
              t.updateElement(i, n, e);
            }, t), t.updateBezierControlPoints();
          },
          updateElement: function(e, t, i) {
            var n = this, o = e.custom || {}, s = n.getDataset(), a = n.chart.scale, l = n.chart.options.elements.point, u = a.getPointPositionForValue(t, s.data[t]);
            void 0 !== s.radius && void 0 === s.pointRadius && (s.pointRadius = s.radius), void 0 !== s.hitRadius && void 0 === s.pointHitRadius && (s.pointHitRadius = s.hitRadius), 
            r.extend(e, {
              _datasetIndex: n.index,
              _index: t,
              _scale: a,
              _model: {
                x: i ? a.xCenter : u.x,
                y: i ? a.yCenter : u.y,
                tension: o.tension ? o.tension : r.valueOrDefault(s.lineTension, n.chart.options.elements.line.tension),
                radius: o.radius ? o.radius : r.valueAtIndexOrDefault(s.pointRadius, t, l.radius),
                backgroundColor: o.backgroundColor ? o.backgroundColor : r.valueAtIndexOrDefault(s.pointBackgroundColor, t, l.backgroundColor),
                borderColor: o.borderColor ? o.borderColor : r.valueAtIndexOrDefault(s.pointBorderColor, t, l.borderColor),
                borderWidth: o.borderWidth ? o.borderWidth : r.valueAtIndexOrDefault(s.pointBorderWidth, t, l.borderWidth),
                pointStyle: o.pointStyle ? o.pointStyle : r.valueAtIndexOrDefault(s.pointStyle, t, l.pointStyle),
                hitRadius: o.hitRadius ? o.hitRadius : r.valueAtIndexOrDefault(s.pointHitRadius, t, l.hitRadius)
              }
            }), e._model.skip = o.skip ? o.skip : isNaN(e._model.x) || isNaN(e._model.y);
          },
          updateBezierControlPoints: function() {
            var e = this.chart.chartArea, t = this.getMeta();
            r.each(t.data, function(i, n) {
              var o = i._model, s = r.splineCurve(r.previousItem(t.data, n, !0)._model, o, r.nextItem(t.data, n, !0)._model, o.tension);
              o.controlPointPreviousX = Math.max(Math.min(s.previous.x, e.right), e.left), o.controlPointPreviousY = Math.max(Math.min(s.previous.y, e.bottom), e.top), 
              o.controlPointNextX = Math.max(Math.min(s.next.x, e.right), e.left), o.controlPointNextY = Math.max(Math.min(s.next.y, e.bottom), e.top), 
              i.pivot();
            });
          },
          setHoverStyle: function(e) {
            var t = this.chart.data.datasets[e._datasetIndex], i = e.custom || {}, n = e._index, o = e._model;
            o.radius = i.hoverRadius ? i.hoverRadius : r.valueAtIndexOrDefault(t.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), 
            o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : r.valueAtIndexOrDefault(t.pointHoverBackgroundColor, n, r.getHoverColor(o.backgroundColor)), 
            o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : r.valueAtIndexOrDefault(t.pointHoverBorderColor, n, r.getHoverColor(o.borderColor)), 
            o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : r.valueAtIndexOrDefault(t.pointHoverBorderWidth, n, o.borderWidth);
          },
          removeHoverStyle: function(e) {
            var t = this.chart.data.datasets[e._datasetIndex], i = e.custom || {}, n = e._index, o = e._model, s = this.chart.options.elements.point;
            o.radius = i.radius ? i.radius : r.valueAtIndexOrDefault(t.pointRadius, n, s.radius), 
            o.backgroundColor = i.backgroundColor ? i.backgroundColor : r.valueAtIndexOrDefault(t.pointBackgroundColor, n, s.backgroundColor), 
            o.borderColor = i.borderColor ? i.borderColor : r.valueAtIndexOrDefault(t.pointBorderColor, n, s.borderColor), 
            o.borderWidth = i.borderWidth ? i.borderWidth : r.valueAtIndexOrDefault(t.pointBorderWidth, n, s.borderWidth);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    } ],
    21: [ function(e, t) {
      "use strict";
      e(25)._set("scatter", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [ {
            id: "x-axis-1",
            type: "linear",
            position: "bottom"
          } ],
          yAxes: [ {
            id: "y-axis-1",
            type: "linear",
            position: "left"
          } ]
        },
        showLines: !1,
        tooltips: {
          callbacks: {
            title: function() {
              return "";
            },
            label: function(e) {
              return "(" + e.xLabel + ", " + e.yLabel + ")";
            }
          }
        }
      }), t.exports = function(e) {
        e.controllers.scatter = e.controllers.line;
      };
    }, {
      25: 25
    } ],
    22: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(26), r = e(45);
      i._set("global", {
        animation: {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: r.noop,
          onComplete: r.noop
        }
      }), t.exports = function(e) {
        e.Animation = n.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), e.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function(e, t, i, n) {
            var r, o, s = this.animations;
            for (t.chart = e, n || (e.animating = !0), r = 0, o = s.length; r < o; ++r) if (s[r].chart === e) return void (s[r] = t);
            s.push(t), 1 === s.length && this.requestAnimationFrame();
          },
          cancelAnimation: function(e) {
            var t = r.findIndex(this.animations, function(t) {
              return t.chart === e;
            });
            -1 !== t && (this.animations.splice(t, 1), e.animating = !1);
          },
          requestAnimationFrame: function() {
            var e = this;
            null === e.request && (e.request = r.requestAnimFrame.call(window, function() {
              e.request = null, e.startDigest();
            }));
          },
          startDigest: function() {
            var e = this, t = Date.now(), i = 0;
            e.dropFrames > 1 && (i = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), 
            e.advance(1 + i);
            var n = Date.now();
            e.dropFrames += (n - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame();
          },
          advance: function(e) {
            for (var t, i, n = this.animations, o = 0; o < n.length; ) i = (t = n[o]).chart, 
            t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), 
            r.callback(t.render, [ i, t ], i), r.callback(t.onAnimationProgress, [ t ], i), 
            t.currentStep >= t.numSteps ? (r.callback(t.onAnimationComplete, [ t ], i), i.animating = !1, 
            n.splice(o, 1)) : ++o;
          }
        }, Object.defineProperty(e.Animation.prototype, "animationObject", {
          get: function() {
            return this;
          }
        }), Object.defineProperty(e.Animation.prototype, "chartInstance", {
          get: function() {
            return this.chart;
          },
          set: function(e) {
            this.chart = e;
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    } ],
    23: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(45), r = e(28), o = e(30), s = e(48), a = e(31);
      t.exports = function(e) {
        function t(e) {
          return "top" === e || "bottom" === e;
        }
        e.types = {}, e.instances = {}, e.controllers = {}, n.extend(e.prototype, {
          construct: function(t, r) {
            var o, a, l = this;
            (a = (o = (o = r) || {}).data = o.data || {}).datasets = a.datasets || [], a.labels = a.labels || [], 
            o.options = n.configMerge(i.global, i[o.type], o.options || {}), r = o;
            var u = s.acquireContext(t, r), c = u && u.canvas, d = c && c.height, h = c && c.width;
            l.id = n.uid(), l.ctx = u, l.canvas = c, l.config = r, l.width = h, l.height = d, 
            l.aspectRatio = d ? h / d : null, l.options = r.options, l._bufferedRender = !1, 
            l.chart = l, l.controller = l, e.instances[l.id] = l, Object.defineProperty(l, "data", {
              get: function() {
                return l.config.data;
              },
              set: function(e) {
                l.config.data = e;
              }
            }), u && c ? (l.initialize(), l.update()) : console.error("Failed to create chart: can't acquire context from the given item");
          },
          initialize: function() {
            var e = this;
            return a.notify(e, "beforeInit"), n.retinaScale(e, e.options.devicePixelRatio), 
            e.bindEvents(), e.options.responsive && e.resize(!0), e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), 
            e.initToolTip(), a.notify(e, "afterInit"), e;
          },
          clear: function() {
            return n.canvas.clear(this), this;
          },
          stop: function() {
            return e.animationService.cancelAnimation(this), this;
          },
          resize: function(e) {
            var t = this, i = t.options, r = t.canvas, o = i.maintainAspectRatio && t.aspectRatio || null, s = Math.max(0, Math.floor(n.getMaximumWidth(r))), l = Math.max(0, Math.floor(o ? s / o : n.getMaximumHeight(r)));
            if ((t.width !== s || t.height !== l) && (r.width = t.width = s, r.height = t.height = l, 
            r.style.width = s + "px", r.style.height = l + "px", n.retinaScale(t, i.devicePixelRatio), 
            !e)) {
              var u = {
                width: s,
                height: l
              };
              a.notify(t, "resize", [ u ]), t.options.onResize && t.options.onResize(t, u), t.stop(), 
              t.update(t.options.responsiveAnimationDuration);
            }
          },
          ensureScalesHaveIDs: function() {
            var e = this.options, t = e.scales || {}, i = e.scale;
            n.each(t.xAxes, function(e, t) {
              e.id = e.id || "x-axis-" + t;
            }), n.each(t.yAxes, function(e, t) {
              e.id = e.id || "y-axis-" + t;
            }), i && (i.id = i.id || "scale");
          },
          buildOrUpdateScales: function() {
            var i = this, r = i.options, o = i.scales || {}, s = [], a = Object.keys(o).reduce(function(e, t) {
              return e[t] = !1, e;
            }, {});
            r.scales && (s = s.concat((r.scales.xAxes || []).map(function(e) {
              return {
                options: e,
                dtype: "category",
                dposition: "bottom"
              };
            }), (r.scales.yAxes || []).map(function(e) {
              return {
                options: e,
                dtype: "linear",
                dposition: "left"
              };
            }))), r.scale && s.push({
              options: r.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea"
            }), n.each(s, function(r) {
              var s = r.options, l = s.id, u = n.valueOrDefault(s.type, r.dtype);
              t(s.position) !== t(r.dposition) && (s.position = r.dposition), a[l] = !0;
              var c = null;
              if (l in o && o[l].type === u) (c = o[l]).options = s, c.ctx = i.ctx, c.chart = i; else {
                var d = e.scaleService.getScaleConstructor(u);
                if (!d) return;
                c = new d({
                  id: l,
                  type: u,
                  options: s,
                  ctx: i.ctx,
                  chart: i
                }), o[c.id] = c;
              }
              c.mergeTicksOptions(), r.isDefault && (i.scale = c);
            }), n.each(a, function(e, t) {
              e || delete o[t];
            }), i.scales = o, e.scaleService.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function() {
            var t = this, i = [], r = [];
            return n.each(t.data.datasets, function(n, o) {
              var s = t.getDatasetMeta(o), a = n.type || t.config.type;
              if (s.type && s.type !== a && (t.destroyDatasetMeta(o), s = t.getDatasetMeta(o)), 
              s.type = a, i.push(s.type), s.controller) s.controller.updateIndex(o), s.controller.linkScales(); else {
                var l = e.controllers[s.type];
                if (void 0 === l) throw new Error('"' + s.type + '" is not a chart type.');
                s.controller = new l(t, o), r.push(s.controller);
              }
            }, t), r;
          },
          resetElements: function() {
            var e = this;
            n.each(e.data.datasets, function(t, i) {
              e.getDatasetMeta(i).controller.reset();
            }, e);
          },
          reset: function() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function(t) {
            var i, r, s = this;
            if (t && "object" == typeof t || (t = {
              duration: t,
              lazy: arguments[1]
            }), r = (i = s).options, n.each(i.scales, function(e) {
              o.removeBox(i, e);
            }), r = n.configMerge(e.defaults.global, e.defaults[i.config.type], r), i.options = i.config.options = r, 
            i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = r.tooltips, 
            i.tooltip.initialize(), a._invalidate(s), !1 !== a.notify(s, "beforeUpdate")) {
              s.tooltip._data = s.data;
              var l = s.buildOrUpdateControllers();
              n.each(s.data.datasets, function(e, t) {
                s.getDatasetMeta(t).controller.buildOrUpdateElements();
              }, s), s.updateLayout(), s.options.animation && s.options.animation.duration && n.each(l, function(e) {
                e.reset();
              }), s.updateDatasets(), s.tooltip.initialize(), s.lastActive = [], a.notify(s, "afterUpdate"), 
              s._bufferedRender ? s._bufferedRequest = {
                duration: t.duration,
                easing: t.easing,
                lazy: t.lazy
              } : s.render(t);
            }
          },
          updateLayout: function() {
            !1 !== a.notify(this, "beforeLayout") && (o.update(this, this.width, this.height), 
            a.notify(this, "afterScaleUpdate"), a.notify(this, "afterLayout"));
          },
          updateDatasets: function() {
            if (!1 !== a.notify(this, "beforeDatasetsUpdate")) {
              for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
              a.notify(this, "afterDatasetsUpdate");
            }
          },
          updateDataset: function(e) {
            var t = this.getDatasetMeta(e), i = {
              meta: t,
              index: e
            };
            !1 !== a.notify(this, "beforeDatasetUpdate", [ i ]) && (t.controller.update(), a.notify(this, "afterDatasetUpdate", [ i ]));
          },
          render: function(t) {
            var i = this;
            t && "object" == typeof t || (t = {
              duration: t,
              lazy: arguments[1]
            });
            var r = t.duration, o = t.lazy;
            if (!1 !== a.notify(i, "beforeRender")) {
              var s = i.options.animation, l = function(e) {
                a.notify(i, "afterRender"), n.callback(s && s.onComplete, [ e ], i);
              };
              if (s && (void 0 !== r && 0 !== r || void 0 === r && 0 !== s.duration)) {
                var u = new e.Animation({
                  numSteps: (r || s.duration) / 16.66,
                  easing: t.easing || s.easing,
                  render: function(e, t) {
                    var i = n.easing.effects[t.easing], r = t.currentStep, o = r / t.numSteps;
                    e.draw(i(o), o, r);
                  },
                  onAnimationProgress: s.onProgress,
                  onAnimationComplete: l
                });
                e.animationService.addAnimation(i, u, r, o);
              } else i.draw(), l(new e.Animation({
                numSteps: 0,
                chart: i
              }));
              return i;
            }
          },
          draw: function(e) {
            var t = this;
            t.clear(), n.isNullOrUndef(e) && (e = 1), t.transition(e), !1 !== a.notify(t, "beforeDraw", [ e ]) && (n.each(t.boxes, function(e) {
              e.draw(t.chartArea);
            }, t), t.scale && t.scale.draw(), t.drawDatasets(e), t._drawTooltip(e), a.notify(t, "afterDraw", [ e ]));
          },
          transition: function(e) {
            for (var t = 0, i = (this.data.datasets || []).length; t < i; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
            this.tooltip.transition(e);
          },
          drawDatasets: function(e) {
            var t = this;
            if (!1 !== a.notify(t, "beforeDatasetsDraw", [ e ])) {
              for (var i = (t.data.datasets || []).length - 1; i >= 0; --i) t.isDatasetVisible(i) && t.drawDataset(i, e);
              a.notify(t, "afterDatasetsDraw", [ e ]);
            }
          },
          drawDataset: function(e, t) {
            var i = this.getDatasetMeta(e), n = {
              meta: i,
              index: e,
              easingValue: t
            };
            !1 !== a.notify(this, "beforeDatasetDraw", [ n ]) && (i.controller.draw(t), a.notify(this, "afterDatasetDraw", [ n ]));
          },
          _drawTooltip: function(e) {
            var t = this.tooltip, i = {
              tooltip: t,
              easingValue: e
            };
            !1 !== a.notify(this, "beforeTooltipDraw", [ i ]) && (t.draw(), a.notify(this, "afterTooltipDraw", [ i ]));
          },
          getElementAtEvent: function(e) {
            return r.modes.single(this, e);
          },
          getElementsAtEvent: function(e) {
            return r.modes.label(this, e, {
              intersect: !0
            });
          },
          getElementsAtXAxis: function(e) {
            return r.modes["x-axis"](this, e, {
              intersect: !0
            });
          },
          getElementsAtEventForMode: function(e, t, i) {
            var n = r.modes[t];
            return "function" == typeof n ? n(this, e, i) : [];
          },
          getDatasetAtEvent: function(e) {
            return r.modes.dataset(this, e, {
              intersect: !0
            });
          },
          getDatasetMeta: function(e) {
            var t = this.data.datasets[e];
            t._meta || (t._meta = {});
            var i = t._meta[this.id];
            return i || (i = t._meta[this.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), i;
          },
          getVisibleDatasetCount: function() {
            for (var e = 0, t = 0, i = this.data.datasets.length; t < i; ++t) this.isDatasetVisible(t) && e++;
            return e;
          },
          isDatasetVisible: function(e) {
            var t = this.getDatasetMeta(e);
            return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden;
          },
          generateLegend: function() {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function(e) {
            var t = this.id, i = this.data.datasets[e], n = i._meta && i._meta[t];
            n && (n.controller.destroy(), delete i._meta[t]);
          },
          destroy: function() {
            var t, i, r = this, o = r.canvas;
            for (r.stop(), t = 0, i = r.data.datasets.length; t < i; ++t) r.destroyDatasetMeta(t);
            o && (r.unbindEvents(), n.canvas.clear(r), s.releaseContext(r.ctx), r.canvas = null, 
            r.ctx = null), a.notify(r, "destroy"), delete e.instances[r.id];
          },
          toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function() {
            var t = this;
            t.tooltip = new e.Tooltip({
              _chart: t,
              _chartInstance: t,
              _data: t.data,
              _options: t.options.tooltips
            }, t);
          },
          bindEvents: function() {
            var e = this, t = e._listeners = {}, i = function() {
              e.eventHandler.apply(e, arguments);
            };
            n.each(e.options.events, function(n) {
              s.addEventListener(e, n, i), t[n] = i;
            }), e.options.responsive && (i = function() {
              e.resize();
            }, s.addEventListener(e, "resize", i), t.resize = i);
          },
          unbindEvents: function() {
            var e = this, t = e._listeners;
            t && (delete e._listeners, n.each(t, function(t, i) {
              s.removeEventListener(e, i, t);
            }));
          },
          updateHoverStyle: function(e, t, i) {
            var n, r, o, s = i ? "setHoverStyle" : "removeHoverStyle";
            for (r = 0, o = e.length; r < o; ++r) (n = e[r]) && this.getDatasetMeta(n._datasetIndex).controller[s](n);
          },
          eventHandler: function(e) {
            var t = this, i = t.tooltip;
            if (!1 !== a.notify(t, "beforeEvent", [ e ])) {
              t._bufferedRender = !0, t._bufferedRequest = null;
              var n = t.handleEvent(e);
              i && (n = i._start ? i.handleEvent(e) : n | i.handleEvent(e)), a.notify(t, "afterEvent", [ e ]);
              var r = t._bufferedRequest;
              return r ? t.render(r) : n && !t.animating && (t.stop(), t.render(t.options.hover.animationDuration, !0)), 
              t._bufferedRender = !1, t._bufferedRequest = null, t;
            }
          },
          handleEvent: function(e) {
            var t, i = this, r = i.options || {}, o = r.hover;
            return i.lastActive = i.lastActive || [], "mouseout" === e.type ? i.active = [] : i.active = i.getElementsAtEventForMode(e, o.mode, o), 
            n.callback(r.onHover || r.hover.onHover, [ e.native, i.active ], i), "mouseup" !== e.type && "click" !== e.type || r.onClick && r.onClick.call(i, e.native, i.active), 
            i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), 
            t = !n.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, t;
          }
        }), e.Controller = e;
      };
    }, {
      25: 25,
      28: 28,
      30: 30,
      31: 31,
      45: 45,
      48: 48
    } ],
    24: [ function(e, t) {
      "use strict";
      var i = e(45);
      t.exports = function(e) {
        function t(e, t) {
          var i = e._chartjs;
          if (i) {
            var r = i.listeners, o = r.indexOf(t);
            -1 !== o && r.splice(o, 1), r.length > 0 || (n.forEach(function(t) {
              delete e[t];
            }), delete e._chartjs);
          }
        }
        var n = [ "push", "pop", "shift", "splice", "unshift" ];
        e.DatasetController = function(e, t) {
          this.initialize(e, t);
        }, i.extend(e.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function(e, t) {
            this.chart = e, this.index = t, this.linkScales(), this.addElements();
          },
          updateIndex: function(e) {
            this.index = e;
          },
          linkScales: function() {
            var e = this, t = e.getMeta(), i = e.getDataset();
            null !== t.xAxisID && t.xAxisID in e.chart.scales || (t.xAxisID = i.xAxisID || e.chart.options.scales.xAxes[0].id), 
            null !== t.yAxisID && t.yAxisID in e.chart.scales || (t.yAxisID = i.yAxisID || e.chart.options.scales.yAxes[0].id);
          },
          getDataset: function() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function(e) {
            return this.chart.scales[e];
          },
          reset: function() {
            this.update(!0);
          },
          destroy: function() {
            this._data && t(this._data, this);
          },
          createMetaDataset: function() {
            var e = this.datasetElementType;
            return e && new e({
              _chart: this.chart,
              _datasetIndex: this.index
            });
          },
          createMetaData: function(e) {
            var t = this.dataElementType;
            return t && new t({
              _chart: this.chart,
              _datasetIndex: this.index,
              _index: e
            });
          },
          addElements: function() {
            var e, t, i = this.getMeta(), n = this.getDataset().data || [], r = i.data;
            for (e = 0, t = n.length; e < t; ++e) r[e] = r[e] || this.createMetaData(e);
            i.dataset = i.dataset || this.createMetaDataset();
          },
          addElementAndReset: function(e) {
            var t = this.createMetaData(e);
            this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0);
          },
          buildOrUpdateElements: function() {
            var e, r, o = this, s = o.getDataset(), a = s.data || (s.data = []);
            o._data !== a && (o._data && t(o._data, o), r = o, (e = a)._chartjs ? e._chartjs.listeners.push(r) : (Object.defineProperty(e, "_chartjs", {
              configurable: !0,
              enumerable: !1,
              value: {
                listeners: [ r ]
              }
            }), n.forEach(function(t) {
              var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1), r = e[t];
              Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                value: function() {
                  var t = Array.prototype.slice.call(arguments), o = r.apply(this, t);
                  return i.each(e._chartjs.listeners, function(e) {
                    "function" == typeof e[n] && e[n].apply(e, t);
                  }), o;
                }
              });
            })), o._data = a), o.resyncElements();
          },
          update: i.noop,
          transition: function(e) {
            for (var t = this.getMeta(), i = t.data || [], n = i.length, r = 0; r < n; ++r) i[r].transition(e);
            t.dataset && t.dataset.transition(e);
          },
          draw: function() {
            var e = this.getMeta(), t = e.data || [], i = t.length, n = 0;
            for (e.dataset && e.dataset.draw(); n < i; ++n) t[n].draw();
          },
          removeHoverStyle: function(e, t) {
            var n = this.chart.data.datasets[e._datasetIndex], r = e._index, o = e.custom || {}, s = i.valueAtIndexOrDefault, a = e._model;
            a.backgroundColor = o.backgroundColor ? o.backgroundColor : s(n.backgroundColor, r, t.backgroundColor), 
            a.borderColor = o.borderColor ? o.borderColor : s(n.borderColor, r, t.borderColor), 
            a.borderWidth = o.borderWidth ? o.borderWidth : s(n.borderWidth, r, t.borderWidth);
          },
          setHoverStyle: function(e) {
            var t = this.chart.data.datasets[e._datasetIndex], n = e._index, r = e.custom || {}, o = i.valueAtIndexOrDefault, s = i.getHoverColor, a = e._model;
            a.backgroundColor = r.hoverBackgroundColor ? r.hoverBackgroundColor : o(t.hoverBackgroundColor, n, s(a.backgroundColor)), 
            a.borderColor = r.hoverBorderColor ? r.hoverBorderColor : o(t.hoverBorderColor, n, s(a.borderColor)), 
            a.borderWidth = r.hoverBorderWidth ? r.hoverBorderWidth : o(t.hoverBorderWidth, n, a.borderWidth);
          },
          resyncElements: function() {
            var e = this.getMeta(), t = this.getDataset().data, i = e.data.length, n = t.length;
            n < i ? e.data.splice(n, i - n) : n > i && this.insertElements(i, n - i);
          },
          insertElements: function(e, t) {
            for (var i = 0; i < t; ++i) this.addElementAndReset(e + i);
          },
          onDataPush: function() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          },
          onDataPop: function() {
            this.getMeta().data.pop();
          },
          onDataShift: function() {
            this.getMeta().data.shift();
          },
          onDataSplice: function(e, t) {
            this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2);
          },
          onDataUnshift: function() {
            this.insertElements(0, arguments.length);
          }
        }), e.DatasetController.extend = i.inherits;
      };
    }, {
      45: 45
    } ],
    25: [ function(e, t) {
      "use strict";
      var i = e(45);
      t.exports = {
        _set: function(e, t) {
          return i.merge(this[e] || (this[e] = {}), t);
        }
      };
    }, {
      45: 45
    } ],
    26: [ function(e, t) {
      "use strict";
      var i = e(3), n = e(45), r = function(e) {
        n.extend(this, e), this.initialize.apply(this, arguments);
      };
      n.extend(r.prototype, {
        initialize: function() {
          this.hidden = !1;
        },
        pivot: function() {
          var e = this;
          return e._view || (e._view = n.clone(e._model)), e._start = {}, e;
        },
        transition: function(e) {
          var t = this, n = t._model, r = t._start, o = t._view;
          return n && 1 !== e ? (o || (o = t._view = {}), r || (r = t._start = {}), function(e, t, n, r) {
            var o, s, a, l, u, c, d, h, f, p = Object.keys(n);
            for (o = 0, s = p.length; o < s; ++o) if (c = n[a = p[o]], t.hasOwnProperty(a) || (t[a] = c), 
            (l = t[a]) !== c && "_" !== a[0]) {
              if (e.hasOwnProperty(a) || (e[a] = l), (d = typeof c) == typeof (u = e[a])) if ("string" === d) {
                if ((h = i(u)).valid && (f = i(c)).valid) {
                  t[a] = f.mix(h, r).rgbString();
                  continue;
                }
              } else if ("number" === d && isFinite(u) && isFinite(c)) {
                t[a] = u + (c - u) * r;
                continue;
              }
              t[a] = c;
            }
          }(r, o, n, e), t) : (t._view = n, t._start = null, t);
        },
        tooltipPosition: function() {
          return {
            x: this._model.x,
            y: this._model.y
          };
        },
        hasValue: function() {
          return n.isNumber(this._model.x) && n.isNumber(this._model.y);
        }
      }), r.extend = n.inherits, t.exports = r;
    }, {
      3: 3,
      45: 45
    } ],
    27: [ function(e, t) {
      "use strict";
      var i = e(3), n = e(25), r = e(45);
      t.exports = function(e) {
        function t(e, t, i) {
          var n;
          return "string" == typeof e ? (n = parseInt(e, 10), -1 !== e.indexOf("%") && (n = n / 100 * t.parentNode[i])) : n = e, 
          n;
        }
        function o(e) {
          return null != e && "none" !== e;
        }
        function s(e, i, n) {
          var r = document.defaultView, s = e.parentNode, a = r.getComputedStyle(e)[i], l = r.getComputedStyle(s)[i], u = o(a), c = o(l), d = Number.POSITIVE_INFINITY;
          return u || c ? Math.min(u ? t(a, e, n) : d, c ? t(l, s, n) : d) : "none";
        }
        r.configMerge = function() {
          return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function(t, i, n, o) {
              var s = i[t] || {}, a = n[t];
              "scales" === t ? i[t] = r.scaleMerge(s, a) : "scale" === t ? i[t] = r.merge(s, [ e.scaleService.getScaleDefaults(a.type), a ]) : r._merger(t, i, n, o);
            }
          });
        }, r.scaleMerge = function() {
          return r.merge(r.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function(t, i, n, o) {
              if ("xAxes" === t || "yAxes" === t) {
                var s, a, l, u = n[t].length;
                for (i[t] || (i[t] = []), s = 0; s < u; ++s) l = n[t][s], a = r.valueOrDefault(l.type, "xAxes" === t ? "category" : "linear"), 
                s >= i[t].length && i[t].push({}), !i[t][s].type || l.type && l.type !== i[t][s].type ? r.merge(i[t][s], [ e.scaleService.getScaleDefaults(a), l ]) : r.merge(i[t][s], l);
              } else r._merger(t, i, n, o);
            }
          });
        }, r.where = function(e, t) {
          if (r.isArray(e) && Array.prototype.filter) return e.filter(t);
          var i = [];
          return r.each(e, function(e) {
            t(e) && i.push(e);
          }), i;
        }, r.findIndex = Array.prototype.findIndex ? function(e, t, i) {
          return e.findIndex(t, i);
        } : function(e, t, i) {
          i = void 0 === i ? e : i;
          for (var n = 0, r = e.length; n < r; ++n) if (t.call(i, e[n], n, e)) return n;
          return -1;
        }, r.findNextWhere = function(e, t, i) {
          r.isNullOrUndef(i) && (i = -1);
          for (var n = i + 1; n < e.length; n++) {
            var o = e[n];
            if (t(o)) return o;
          }
        }, r.findPreviousWhere = function(e, t, i) {
          r.isNullOrUndef(i) && (i = e.length);
          for (var n = i - 1; n >= 0; n--) {
            var o = e[n];
            if (t(o)) return o;
          }
        }, r.isNumber = function(e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }, r.almostEquals = function(e, t, i) {
          return Math.abs(e - t) < i;
        }, r.almostWhole = function(e, t) {
          var i = Math.round(e);
          return i - t < e && i + t > e;
        }, r.max = function(e) {
          return e.reduce(function(e, t) {
            return isNaN(t) ? e : Math.max(e, t);
          }, Number.NEGATIVE_INFINITY);
        }, r.min = function(e) {
          return e.reduce(function(e, t) {
            return isNaN(t) ? e : Math.min(e, t);
          }, Number.POSITIVE_INFINITY);
        }, r.sign = Math.sign ? function(e) {
          return Math.sign(e);
        } : function(e) {
          return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1;
        }, r.log10 = Math.log10 ? function(e) {
          return Math.log10(e);
        } : function(e) {
          var t = Math.log(e) * Math.LOG10E, i = Math.round(t);
          return e === Math.pow(10, i) ? i : t;
        }, r.toRadians = function(e) {
          return e * (Math.PI / 180);
        }, r.toDegrees = function(e) {
          return e * (180 / Math.PI);
        }, r.getAngleFromPoint = function(e, t) {
          var i = t.x - e.x, n = t.y - e.y, r = Math.sqrt(i * i + n * n), o = Math.atan2(n, i);
          return o < -.5 * Math.PI && (o += 2 * Math.PI), {
            angle: o,
            distance: r
          };
        }, r.distanceBetweenPoints = function(e, t) {
          return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
        }, r.aliasPixel = function(e) {
          return e % 2 == 0 ? 0 : .5;
        }, r.splineCurve = function(e, t, i, n) {
          var r = e.skip ? t : e, o = t, s = i.skip ? t : i, a = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)), l = Math.sqrt(Math.pow(s.x - o.x, 2) + Math.pow(s.y - o.y, 2)), u = a / (a + l), c = l / (a + l), d = n * (u = isNaN(u) ? 0 : u), h = n * (c = isNaN(c) ? 0 : c);
          return {
            previous: {
              x: o.x - d * (s.x - r.x),
              y: o.y - d * (s.y - r.y)
            },
            next: {
              x: o.x + h * (s.x - r.x),
              y: o.y + h * (s.y - r.y)
            }
          };
        }, r.EPSILON = Number.EPSILON || 1e-14, r.splineCurveMonotone = function(e) {
          var t, i, n, o, s, a, l, u, c, d = (e || []).map(function(e) {
            return {
              model: e._model,
              deltaK: 0,
              mK: 0
            };
          }), h = d.length;
          for (t = 0; t < h; ++t) if (!(n = d[t]).model.skip) {
            if (i = t > 0 ? d[t - 1] : null, (o = t < h - 1 ? d[t + 1] : null) && !o.model.skip) {
              var f = o.model.x - n.model.x;
              n.deltaK = 0 !== f ? (o.model.y - n.model.y) / f : 0;
            }
            !i || i.model.skip ? n.mK = n.deltaK : !o || o.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2;
          }
          for (t = 0; t < h - 1; ++t) n = d[t], o = d[t + 1], n.model.skip || o.model.skip || (r.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = o.mK = 0 : (s = n.mK / n.deltaK, 
          a = o.mK / n.deltaK, (u = Math.pow(s, 2) + Math.pow(a, 2)) <= 9 || (l = 3 / Math.sqrt(u), 
          n.mK = s * l * n.deltaK, o.mK = a * l * n.deltaK)));
          for (t = 0; t < h; ++t) (n = d[t]).model.skip || (i = t > 0 ? d[t - 1] : null, o = t < h - 1 ? d[t + 1] : null, 
          i && !i.model.skip && (c = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - c, 
          n.model.controlPointPreviousY = n.model.y - c * n.mK), o && !o.model.skip && (c = (o.model.x - n.model.x) / 3, 
          n.model.controlPointNextX = n.model.x + c, n.model.controlPointNextY = n.model.y + c * n.mK));
        }, r.nextItem = function(e, t, i) {
          return i ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1];
        }, r.previousItem = function(e, t, i) {
          return i ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1];
        }, r.niceNum = function(e, t) {
          var i = Math.floor(r.log10(e)), n = e / Math.pow(10, i);
          return (t ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i);
        }, r.requestAnimFrame = "undefined" == typeof window ? function(e) {
          e();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
          return window.setTimeout(e, 1e3 / 60);
        }, r.getRelativePosition = function(e, t) {
          var i, n, o = e.originalEvent || e, s = e.currentTarget || e.srcElement, a = s.getBoundingClientRect(), l = o.touches;
          l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = o.clientX, n = o.clientY);
          var u = parseFloat(r.getStyle(s, "padding-left")), c = parseFloat(r.getStyle(s, "padding-top")), d = parseFloat(r.getStyle(s, "padding-right")), h = parseFloat(r.getStyle(s, "padding-bottom")), f = a.right - a.left - u - d, p = a.bottom - a.top - c - h;
          return {
            x: i = Math.round((i - a.left - u) / f * s.width / t.currentDevicePixelRatio),
            y: n = Math.round((n - a.top - c) / p * s.height / t.currentDevicePixelRatio)
          };
        }, r.getConstraintWidth = function(e) {
          return s(e, "max-width", "clientWidth");
        }, r.getConstraintHeight = function(e) {
          return s(e, "max-height", "clientHeight");
        }, r.getMaximumWidth = function(e) {
          var t = e.parentNode;
          if (!t) return e.clientWidth;
          var i = parseInt(r.getStyle(t, "padding-left"), 10), n = parseInt(r.getStyle(t, "padding-right"), 10), o = t.clientWidth - i - n, s = r.getConstraintWidth(e);
          return isNaN(s) ? o : Math.min(o, s);
        }, r.getMaximumHeight = function(e) {
          var t = e.parentNode;
          if (!t) return e.clientHeight;
          var i = parseInt(r.getStyle(t, "padding-top"), 10), n = parseInt(r.getStyle(t, "padding-bottom"), 10), o = t.clientHeight - i - n, s = r.getConstraintHeight(e);
          return isNaN(s) ? o : Math.min(o, s);
        }, r.getStyle = function(e, t) {
          return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t);
        }, r.retinaScale = function(e, t) {
          var i = e.currentDevicePixelRatio = t || window.devicePixelRatio || 1;
          if (1 !== i) {
            var n = e.canvas, r = e.height, o = e.width;
            n.height = r * i, n.width = o * i, e.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = r + "px", 
            n.style.width = o + "px");
          }
        }, r.fontString = function(e, t, i) {
          return t + " " + e + "px " + i;
        }, r.longestText = function(e, t, i, n) {
          var o = (n = n || {}).data = n.data || {}, s = n.garbageCollect = n.garbageCollect || [];
          n.font !== t && (o = n.data = {}, s = n.garbageCollect = [], n.font = t), e.font = t;
          var a = 0;
          r.each(i, function(t) {
            null != t && !0 !== r.isArray(t) ? a = r.measureText(e, o, s, a, t) : r.isArray(t) && r.each(t, function(t) {
              null == t || r.isArray(t) || (a = r.measureText(e, o, s, a, t));
            });
          });
          var l = s.length / 2;
          if (l > i.length) {
            for (var u = 0; u < l; u++) delete o[s[u]];
            s.splice(0, l);
          }
          return a;
        }, r.measureText = function(e, t, i, n, r) {
          var o = t[r];
          return o || (o = t[r] = e.measureText(r).width, i.push(r)), o > n && (n = o), n;
        }, r.numberOfLabelLines = function(e) {
          var t = 1;
          return r.each(e, function(e) {
            r.isArray(e) && e.length > t && (t = e.length);
          }), t;
        }, r.color = i ? function(e) {
          return e instanceof CanvasGradient && (e = n.global.defaultColor), i(e);
        } : function(e) {
          return console.error("Color.js not found!"), e;
        }, r.getHoverColor = function(e) {
          return e instanceof CanvasPattern ? e : r.color(e).saturate(.5).darken(.1).rgbString();
        };
      };
    }, {
      25: 25,
      3: 3,
      45: 45
    } ],
    28: [ function(e, t) {
      "use strict";
      function i(e, t) {
        return e.native ? {
          x: e.x,
          y: e.y
        } : l.getRelativePosition(e, t);
      }
      function n(e, t) {
        var i, n, r, o, s;
        for (n = 0, o = e.data.datasets.length; n < o; ++n) if (e.isDatasetVisible(n)) for (r = 0, 
        s = (i = e.getDatasetMeta(n)).data.length; r < s; ++r) {
          var a = i.data[r];
          a._view.skip || t(a);
        }
      }
      function r(e, t) {
        var i = [];
        return n(e, function(e) {
          e.inRange(t.x, t.y) && i.push(e);
        }), i;
      }
      function o(e, t, i, r) {
        var o = Number.POSITIVE_INFINITY, s = [];
        return n(e, function(e) {
          if (!i || e.inRange(t.x, t.y)) {
            var n = e.getCenterPoint(), a = r(t, n);
            a < o ? (s = [ e ], o = a) : a === o && s.push(e);
          }
        }), s;
      }
      function s(e) {
        var t = -1 !== e.indexOf("x"), i = -1 !== e.indexOf("y");
        return function(e, n) {
          var r = t ? Math.abs(e.x - n.x) : 0, o = i ? Math.abs(e.y - n.y) : 0;
          return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
        };
      }
      function a(e, t, n) {
        var a = i(t, e);
        n.axis = n.axis || "x";
        var l = s(n.axis), u = n.intersect ? r(e, a) : o(e, a, !1, l), c = [];
        return u.length ? (e.data.datasets.forEach(function(t, i) {
          if (e.isDatasetVisible(i)) {
            var n = e.getDatasetMeta(i).data[u[0]._index];
            n && !n._view.skip && c.push(n);
          }
        }), c) : [];
      }
      var l = e(45);
      t.exports = {
        modes: {
          single: function(e, t) {
            var r = i(t, e), o = [];
            return n(e, function(e) {
              if (e.inRange(r.x, r.y)) return o.push(e), o;
            }), o.slice(0, 1);
          },
          label: a,
          index: a,
          dataset: function(e, t, n) {
            var a = i(t, e);
            n.axis = n.axis || "xy";
            var l = s(n.axis), u = n.intersect ? r(e, a) : o(e, a, !1, l);
            return u.length > 0 && (u = e.getDatasetMeta(u[0]._datasetIndex).data), u;
          },
          "x-axis": function(e, t) {
            return a(e, t, {
              intersect: !1
            });
          },
          point: function(e, t) {
            return r(e, i(t, e));
          },
          nearest: function(e, t, n) {
            var r = i(t, e);
            n.axis = n.axis || "xy";
            var a = s(n.axis), l = o(e, r, n.intersect, a);
            return l.length > 1 && l.sort(function(e, t) {
              var i = e.getArea() - t.getArea();
              return 0 === i && (i = e._datasetIndex - t._datasetIndex), i;
            }), l.slice(0, 1);
          },
          x: function(e, t, r) {
            var o = i(t, e), s = [], a = !1;
            return n(e, function(e) {
              e.inXRange(o.x) && s.push(e), e.inRange(o.x, o.y) && (a = !0);
            }), r.intersect && !a && (s = []), s;
          },
          y: function(e, t, r) {
            var o = i(t, e), s = [], a = !1;
            return n(e, function(e) {
              e.inYRange(o.y) && s.push(e), e.inRange(o.x, o.y) && (a = !0);
            }), r.intersect && !a && (s = []), s;
          }
        }
      };
    }, {
      45: 45
    } ],
    29: [ function(e, t) {
      "use strict";
      e(25)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: [ "mousemove", "mouseout", "click", "touchstart", "touchmove" ],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }), t.exports = function() {
        var e = function(e, t) {
          return this.construct(e, t), this;
        };
        return e.Chart = e, e;
      };
    }, {
      25: 25
    } ],
    30: [ function(e, t) {
      "use strict";
      function i(e, t) {
        return r.where(e, function(e) {
          return e.position === t;
        });
      }
      function n(e, t) {
        e.forEach(function(e, t) {
          return e._tmpIndex_ = t, e;
        }), e.sort(function(e, i) {
          var n = t ? i : e, r = t ? e : i;
          return n.weight === r.weight ? n._tmpIndex_ - r._tmpIndex_ : n.weight - r.weight;
        }), e.forEach(function(e) {
          delete e._tmpIndex_;
        });
      }
      var r = e(45);
      t.exports = {
        defaults: {},
        addBox: function(e, t) {
          e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", 
          t.weight = t.weight || 0, e.boxes.push(t);
        },
        removeBox: function(e, t) {
          var i = e.boxes ? e.boxes.indexOf(t) : -1;
          -1 !== i && e.boxes.splice(i, 1);
        },
        configure: function(e, t, i) {
          for (var n, r = [ "fullWidth", "position", "weight" ], o = r.length, s = 0; s < o; ++s) n = r[s], 
          i.hasOwnProperty(n) && (t[n] = i[n]);
        },
        update: function(e, t, o) {
          function s(e) {
            var t = r.findNextWhere(k, function(t) {
              return t.box === e;
            });
            if (t) if (e.isHorizontal()) {
              var i = {
                left: Math.max(I, M),
                right: Math.max(E, D),
                top: 0,
                bottom: 0
              };
              e.update(e.fullWidth ? b : C, x / 2, i);
            } else e.update(t.minSize.width, T);
          }
          function a(e) {
            e.isHorizontal() ? (e.left = e.fullWidth ? c : I, e.right = e.fullWidth ? t - d : I + C, 
            e.top = H, e.bottom = H + e.height, H = e.bottom) : (e.left = R, e.right = R + e.width, 
            e.top = j, e.bottom = j + T, R = e.right);
          }
          if (e) {
            var l = e.options.layout || {}, u = r.options.toPadding(l.padding), c = u.left, d = u.right, h = u.top, f = u.bottom, p = i(e.boxes, "left"), m = i(e.boxes, "right"), g = i(e.boxes, "top"), v = i(e.boxes, "bottom"), y = i(e.boxes, "chartArea");
            n(p, !0), n(m, !1), n(g, !0), n(v, !1);
            var b = t - c - d, x = o - h - f, w = x / 2, _ = (t - b / 2) / (p.length + m.length), S = (o - w) / (g.length + v.length), C = b, T = x, k = [];
            r.each(p.concat(m, g, v), function(e) {
              var t, i = e.isHorizontal();
              i ? (t = e.update(e.fullWidth ? b : C, S), T -= t.height) : (t = e.update(_, T), 
              C -= t.width), k.push({
                horizontal: i,
                minSize: t,
                box: e
              });
            });
            var M = 0, D = 0, A = 0, P = 0;
            r.each(g.concat(v), function(e) {
              if (e.getPadding) {
                var t = e.getPadding();
                M = Math.max(M, t.left), D = Math.max(D, t.right);
              }
            }), r.each(p.concat(m), function(e) {
              if (e.getPadding) {
                var t = e.getPadding();
                A = Math.max(A, t.top), P = Math.max(P, t.bottom);
              }
            });
            var I = c, E = d, j = h, F = f;
            r.each(p.concat(m), s), r.each(p, function(e) {
              I += e.width;
            }), r.each(m, function(e) {
              E += e.width;
            }), r.each(g.concat(v), s), r.each(g, function(e) {
              j += e.height;
            }), r.each(v, function(e) {
              F += e.height;
            }), r.each(p.concat(m), function(e) {
              var t = r.findNextWhere(k, function(t) {
                return t.box === e;
              }), i = {
                left: 0,
                right: 0,
                top: j,
                bottom: F
              };
              t && e.update(t.minSize.width, T, i);
            }), I = c, E = d, j = h, F = f, r.each(p, function(e) {
              I += e.width;
            }), r.each(m, function(e) {
              E += e.width;
            }), r.each(g, function(e) {
              j += e.height;
            }), r.each(v, function(e) {
              F += e.height;
            });
            var O = Math.max(M - I, 0);
            I += O, E += Math.max(D - E, 0);
            var N = Math.max(A - j, 0);
            j += N, F += Math.max(P - F, 0);
            var z = o - j - F, L = t - I - E;
            L === C && z === T || (r.each(p, function(e) {
              e.height = z;
            }), r.each(m, function(e) {
              e.height = z;
            }), r.each(g, function(e) {
              e.fullWidth || (e.width = L);
            }), r.each(v, function(e) {
              e.fullWidth || (e.width = L);
            }), T = z, C = L);
            var R = c + O, H = h + N;
            r.each(p.concat(g), a), R += C, H += T, r.each(m, a), r.each(v, a), e.chartArea = {
              left: I,
              top: j,
              right: I + C,
              bottom: j + T
            }, r.each(y, function(t) {
              t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, 
              t.bottom = e.chartArea.bottom, t.update(C, T);
            });
          }
        }
      };
    }, {
      45: 45
    } ],
    31: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(45);
      i._set("global", {
        plugins: {}
      }), t.exports = {
        _plugins: [],
        _cacheId: 0,
        register: function(e) {
          var t = this._plugins;
          [].concat(e).forEach(function(e) {
            -1 === t.indexOf(e) && t.push(e);
          }), this._cacheId++;
        },
        unregister: function(e) {
          var t = this._plugins;
          [].concat(e).forEach(function(e) {
            var i = t.indexOf(e);
            -1 !== i && t.splice(i, 1);
          }), this._cacheId++;
        },
        clear: function() {
          this._plugins = [], this._cacheId++;
        },
        count: function() {
          return this._plugins.length;
        },
        getAll: function() {
          return this._plugins;
        },
        notify: function(e, t, i) {
          var n, r, o, s, a, l = this.descriptors(e), u = l.length;
          for (n = 0; n < u; ++n) if ("function" == typeof (a = (o = (r = l[n]).plugin)[t]) && ((s = [ e ].concat(i || [])).push(r.options), 
          !1 === a.apply(o, s))) return !1;
          return !0;
        },
        descriptors: function(e) {
          var t = e.$plugins || (e.$plugins = {});
          if (t.id === this._cacheId) return t.descriptors;
          var r = [], o = [], s = e && e.config || {}, a = s.options && s.options.plugins || {};
          return this._plugins.concat(s.plugins || []).forEach(function(e) {
            if (-1 === r.indexOf(e)) {
              var t = e.id, s = a[t];
              !1 !== s && (!0 === s && (s = n.clone(i.global.plugins[t])), r.push(e), o.push({
                plugin: e,
                options: s || {}
              }));
            }
          }), t.descriptors = o, t.id = this._cacheId, o;
        },
        _invalidate: function(e) {
          delete e.$plugins;
        }
      };
    }, {
      25: 25,
      45: 45
    } ],
    32: [ function(e, t) {
      "use strict";
      function i(e) {
        var t, i, n = [];
        for (t = 0, i = e.length; t < i; ++t) n.push(e[t].label);
        return n;
      }
      function n(e, t, i) {
        var n = e.getPixelForTick(t);
        return i && (n -= 0 === t ? (e.getPixelForTick(1) - n) / 2 : (n - e.getPixelForTick(t - 1)) / 2), 
        n;
      }
      var r = e(25), o = e(26), s = e(45), a = e(34);
      r._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0, 0, 0, 0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          lineHeight: 1.2,
          padding: {
            top: 4,
            bottom: 4
          }
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: a.formatters.values,
          minor: {},
          major: {}
        }
      }), t.exports = function(e) {
        function t(e, t, i) {
          return s.isArray(t) ? s.longestText(e, i, t) : e.measureText(t).width;
        }
        function a(e) {
          var t = s.valueOrDefault, i = r.global, n = t(e.fontSize, i.defaultFontSize), o = t(e.fontStyle, i.defaultFontStyle), a = t(e.fontFamily, i.defaultFontFamily);
          return {
            size: n,
            style: o,
            family: a,
            font: s.fontString(n, o, a)
          };
        }
        function l(e) {
          return s.options.toLineHeight(s.valueOrDefault(e.lineHeight, 1.2), s.valueOrDefault(e.fontSize, r.global.defaultFontSize));
        }
        e.Scale = o.extend({
          getPadding: function() {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0
            };
          },
          getTicks: function() {
            return this._ticks;
          },
          mergeTicksOptions: function() {
            var e = this.options.ticks;
            for (var t in !1 === e.minor && (e.minor = {
              display: !1
            }), !1 === e.major && (e.major = {
              display: !1
            }), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), 
            void 0 === e.major[t] && (e.major[t] = e[t]));
          },
          beforeUpdate: function() {
            s.callback(this.options.beforeUpdate, [ this ]);
          },
          update: function(e, t, i) {
            var n, r, o, a, l, u, c = this;
            for (c.beforeUpdate(), c.maxWidth = e, c.maxHeight = t, c.margins = s.extend({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, i), c.longestTextCache = c.longestTextCache || {}, c.beforeSetDimensions(), c.setDimensions(), 
            c.afterSetDimensions(), c.beforeDataLimits(), c.determineDataLimits(), c.afterDataLimits(), 
            c.beforeBuildTicks(), l = c.buildTicks() || [], c.afterBuildTicks(), c.beforeTickToLabelConversion(), 
            o = c.convertTicksToLabels(l) || c.ticks, c.afterTickToLabelConversion(), c.ticks = o, 
            n = 0, r = o.length; n < r; ++n) a = o[n], (u = l[n]) ? u.label = a : l.push(u = {
              label: a,
              major: !1
            });
            return c._ticks = l, c.beforeCalculateTickRotation(), c.calculateTickRotation(), 
            c.afterCalculateTickRotation(), c.beforeFit(), c.fit(), c.afterFit(), c.afterUpdate(), 
            c.minSize;
          },
          afterUpdate: function() {
            s.callback(this.options.afterUpdate, [ this ]);
          },
          beforeSetDimensions: function() {
            s.callback(this.options.beforeSetDimensions, [ this ]);
          },
          setDimensions: function() {
            var e = this;
            e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, 
            e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, 
            e.paddingBottom = 0;
          },
          afterSetDimensions: function() {
            s.callback(this.options.afterSetDimensions, [ this ]);
          },
          beforeDataLimits: function() {
            s.callback(this.options.beforeDataLimits, [ this ]);
          },
          determineDataLimits: s.noop,
          afterDataLimits: function() {
            s.callback(this.options.afterDataLimits, [ this ]);
          },
          beforeBuildTicks: function() {
            s.callback(this.options.beforeBuildTicks, [ this ]);
          },
          buildTicks: s.noop,
          afterBuildTicks: function() {
            s.callback(this.options.afterBuildTicks, [ this ]);
          },
          beforeTickToLabelConversion: function() {
            s.callback(this.options.beforeTickToLabelConversion, [ this ]);
          },
          convertTicksToLabels: function() {
            var e = this.options.ticks;
            this.ticks = this.ticks.map(e.userCallback || e.callback, this);
          },
          afterTickToLabelConversion: function() {
            s.callback(this.options.afterTickToLabelConversion, [ this ]);
          },
          beforeCalculateTickRotation: function() {
            s.callback(this.options.beforeCalculateTickRotation, [ this ]);
          },
          calculateTickRotation: function() {
            var e = this, t = e.ctx, n = e.options.ticks, r = i(e._ticks), o = a(n);
            t.font = o.font;
            var l = n.minRotation || 0;
            if (r.length && e.options.display && e.isHorizontal()) for (var u, c = s.longestText(t, o.font, r, e.longestTextCache), d = c, h = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; d > h && l < n.maxRotation; ) {
              var f = s.toRadians(l);
              if (u = Math.cos(f), Math.sin(f) * c > e.maxHeight) {
                l--;
                break;
              }
              l++, d = u * c;
            }
            e.labelRotation = l;
          },
          afterCalculateTickRotation: function() {
            s.callback(this.options.afterCalculateTickRotation, [ this ]);
          },
          beforeFit: function() {
            s.callback(this.options.beforeFit, [ this ]);
          },
          fit: function() {
            var e = this, n = e.minSize = {
              width: 0,
              height: 0
            }, r = i(e._ticks), o = e.options, u = o.ticks, c = o.scaleLabel, d = o.gridLines, h = o.display, f = e.isHorizontal(), p = a(u), m = o.gridLines.tickMarkLength;
            if (n.width = f ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : h && d.drawTicks ? m : 0, 
            n.height = f ? h && d.drawTicks ? m : 0 : e.maxHeight, c.display && h) {
              var g = l(c) + s.options.toPadding(c.padding).height;
              f ? n.height += g : n.width += g;
            }
            if (u.display && h) {
              var v = s.longestText(e.ctx, p.font, r, e.longestTextCache), y = s.numberOfLabelLines(r), b = .5 * p.size, x = e.options.ticks.padding;
              if (f) {
                e.longestLabelWidth = v;
                var w = s.toRadians(e.labelRotation), _ = Math.cos(w), S = Math.sin(w) * v + p.size * y + b * (y - 1) + b;
                n.height = Math.min(e.maxHeight, n.height + S + x), e.ctx.font = p.font;
                var C = t(e.ctx, r[0], p.font), T = t(e.ctx, r[r.length - 1], p.font);
                0 !== e.labelRotation ? (e.paddingLeft = "bottom" === o.position ? _ * C + 3 : _ * b + 3, 
                e.paddingRight = "bottom" === o.position ? _ * b + 3 : _ * T + 3) : (e.paddingLeft = C / 2 + 3, 
                e.paddingRight = T / 2 + 3);
              } else u.mirror ? v = 0 : v += x + b, n.width = Math.min(e.maxWidth, n.width + v), 
              e.paddingTop = p.size / 2, e.paddingBottom = p.size / 2;
            }
            e.handleMargins(), e.width = n.width, e.height = n.height;
          },
          handleMargins: function() {
            var e = this;
            e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), 
            e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0));
          },
          afterFit: function() {
            s.callback(this.options.afterFit, [ this ]);
          },
          isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          isFullWidth: function() {
            return this.options.fullWidth;
          },
          getRightValue: function(e) {
            if (s.isNullOrUndef(e)) return NaN;
            if ("number" == typeof e && !isFinite(e)) return NaN;
            if (e) if (this.isHorizontal()) {
              if (void 0 !== e.x) return this.getRightValue(e.x);
            } else if (void 0 !== e.y) return this.getRightValue(e.y);
            return e;
          },
          getLabelForIndex: s.noop,
          getPixelForValue: s.noop,
          getValueForPixel: s.noop,
          getPixelForTick: function(e) {
            var t = this, i = t.options.offset;
            if (t.isHorizontal()) {
              var n = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (i ? 0 : 1), 1), r = n * e + t.paddingLeft;
              return i && (r += n / 2), t.left + Math.round(r) + (t.isFullWidth() ? t.margins.left : 0);
            }
            var o = t.height - (t.paddingTop + t.paddingBottom);
            return t.top + e * (o / (t._ticks.length - 1));
          },
          getPixelForDecimal: function(e) {
            var t = this;
            if (t.isHorizontal()) {
              var i = (t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft;
              return t.left + Math.round(i) + (t.isFullWidth() ? t.margins.left : 0);
            }
            return t.top + e * t.height;
          },
          getBasePixel: function() {
            return this.getPixelForValue(this.getBaseValue());
          },
          getBaseValue: function() {
            var e = this.min, t = this.max;
            return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0;
          },
          _autoSkip: function(e) {
            var t, i, n, r, o = this, a = o.isHorizontal(), l = o.options.ticks.minor, u = e.length, c = s.toRadians(o.labelRotation), d = Math.cos(c), h = o.longestLabelWidth * d, f = [];
            for (l.maxTicksLimit && (r = l.maxTicksLimit), a && (t = !1, (h + l.autoSkipPadding) * u > o.width - (o.paddingLeft + o.paddingRight) && (t = 1 + Math.floor((h + l.autoSkipPadding) * u / (o.width - (o.paddingLeft + o.paddingRight)))), 
            r && u > r && (t = Math.max(t, Math.floor(u / r)))), i = 0; i < u; i++) n = e[i], 
            (t > 1 && i % t > 0 || i % t == 0 && i + t >= u) && i !== u - 1 && delete n.label, 
            f.push(n);
            return f;
          },
          draw: function(e) {
            var t = this, i = t.options;
            if (i.display) {
              var o = t.ctx, u = r.global, c = i.ticks.minor, d = i.ticks.major || c, h = i.gridLines, f = i.scaleLabel, p = 0 !== t.labelRotation, m = t.isHorizontal(), g = c.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(), v = s.valueOrDefault(c.fontColor, u.defaultFontColor), y = a(c), b = s.valueOrDefault(d.fontColor, u.defaultFontColor), x = a(d), w = h.drawTicks ? h.tickMarkLength : 0, _ = s.valueOrDefault(f.fontColor, u.defaultFontColor), S = a(f), C = s.options.toPadding(f.padding), T = s.toRadians(t.labelRotation), k = [], M = t.options.gridLines.lineWidth, D = "right" === i.position ? t.right : t.right - M - w, A = "right" === i.position ? t.right + w : t.right, P = "bottom" === i.position ? t.top + M : t.bottom - w - M, I = "bottom" === i.position ? t.top + M + w : t.bottom + M;
              if (s.each(g, function(r, o) {
                if (!s.isNullOrUndef(r.label)) {
                  var a, l, d, f, v, y, b, x, _, S, C, E, j, F, O = r.label;
                  o === t.zeroLineIndex && i.offset === h.offsetGridLines ? (a = h.zeroLineWidth, 
                  l = h.zeroLineColor, d = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (a = s.valueAtIndexOrDefault(h.lineWidth, o), 
                  l = s.valueAtIndexOrDefault(h.color, o), d = s.valueOrDefault(h.borderDash, u.borderDash), 
                  f = s.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                  var N = "middle", z = "middle", L = c.padding;
                  if (m) {
                    var R = w + L;
                    "bottom" === i.position ? (z = p ? "middle" : "top", N = p ? "right" : "center", 
                    F = t.top + R) : (z = p ? "middle" : "bottom", N = p ? "left" : "center", F = t.bottom - R);
                    var H = n(t, o, h.offsetGridLines && g.length > 1);
                    H < t.left && (l = "rgba(0,0,0,0)"), H += s.aliasPixel(a), j = t.getPixelForTick(o) + c.labelOffset, 
                    v = b = _ = C = H, y = P, x = I, S = e.top, E = e.bottom + M;
                  } else {
                    var W, B = "left" === i.position;
                    c.mirror ? (N = B ? "left" : "right", W = L) : (N = B ? "right" : "left", W = w + L), 
                    j = B ? t.right - W : t.left + W;
                    var $ = n(t, o, h.offsetGridLines && g.length > 1);
                    $ < t.top && (l = "rgba(0,0,0,0)"), $ += s.aliasPixel(a), F = t.getPixelForTick(o) + c.labelOffset, 
                    v = D, b = A, _ = e.left, C = e.right + M, y = x = S = E = $;
                  }
                  k.push({
                    tx1: v,
                    ty1: y,
                    tx2: b,
                    ty2: x,
                    x1: _,
                    y1: S,
                    x2: C,
                    y2: E,
                    labelX: j,
                    labelY: F,
                    glWidth: a,
                    glColor: l,
                    glBorderDash: d,
                    glBorderDashOffset: f,
                    rotation: -1 * T,
                    label: O,
                    major: r.major,
                    textBaseline: z,
                    textAlign: N
                  });
                }
              }), s.each(k, function(e) {
                if (h.display && (o.save(), o.lineWidth = e.glWidth, o.strokeStyle = e.glColor, 
                o.setLineDash && (o.setLineDash(e.glBorderDash), o.lineDashOffset = e.glBorderDashOffset), 
                o.beginPath(), h.drawTicks && (o.moveTo(e.tx1, e.ty1), o.lineTo(e.tx2, e.ty2)), 
                h.drawOnChartArea && (o.moveTo(e.x1, e.y1), o.lineTo(e.x2, e.y2)), o.stroke(), o.restore()), 
                c.display) {
                  o.save(), o.translate(e.labelX, e.labelY), o.rotate(e.rotation), o.font = e.major ? x.font : y.font, 
                  o.fillStyle = e.major ? b : v, o.textBaseline = e.textBaseline, o.textAlign = e.textAlign;
                  var i = e.label;
                  if (s.isArray(i)) for (var n = i.length, r = 1.5 * y.size, a = t.isHorizontal() ? 0 : -r * (n - 1) / 2, l = 0; l < n; ++l) o.fillText("" + i[l], 0, a), 
                  a += r; else o.fillText(i, 0, 0);
                  o.restore();
                }
              }), f.display) {
                var E, j, F = 0, O = l(f) / 2;
                if (m) E = t.left + (t.right - t.left) / 2, j = "bottom" === i.position ? t.bottom - O - C.bottom : t.top + O + C.top; else {
                  var N = "left" === i.position;
                  E = N ? t.left + O + C.top : t.right - O - C.top, j = t.top + (t.bottom - t.top) / 2, 
                  F = N ? -.5 * Math.PI : .5 * Math.PI;
                }
                o.save(), o.translate(E, j), o.rotate(F), o.textAlign = "center", o.textBaseline = "middle", 
                o.fillStyle = _, o.font = S.font, o.fillText(f.labelString, 0, 0), o.restore();
              }
              if (h.drawBorder) {
                o.lineWidth = s.valueAtIndexOrDefault(h.lineWidth, 0), o.strokeStyle = s.valueAtIndexOrDefault(h.color, 0);
                var z = t.left, L = t.right + M, R = t.top, H = t.bottom + M, W = s.aliasPixel(o.lineWidth);
                m ? (R = H = "top" === i.position ? t.bottom : t.top, R += W, H += W) : (z = L = "left" === i.position ? t.right : t.left, 
                z += W, L += W), o.beginPath(), o.moveTo(z, R), o.lineTo(L, H), o.stroke();
              }
            }
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      34: 34,
      45: 45
    } ],
    33: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(45), r = e(30);
      t.exports = function(e) {
        e.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function(e, t, i) {
            this.constructors[e] = t, this.defaults[e] = n.clone(i);
          },
          getScaleConstructor: function(e) {
            return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0;
          },
          getScaleDefaults: function(e) {
            return this.defaults.hasOwnProperty(e) ? n.merge({}, [ i.scale, this.defaults[e] ]) : {};
          },
          updateScaleDefaults: function(e, t) {
            this.defaults.hasOwnProperty(e) && (this.defaults[e] = n.extend(this.defaults[e], t));
          },
          addScalesToLayout: function(e) {
            n.each(e.scales, function(t) {
              t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, 
              r.addBox(e, t);
            });
          }
        };
      };
    }, {
      25: 25,
      30: 30,
      45: 45
    } ],
    34: [ function(e, t) {
      "use strict";
      var i = e(45);
      t.exports = {
        formatters: {
          values: function(e) {
            return i.isArray(e) ? e : "" + e;
          },
          linear: function(e, t, n) {
            var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
            Math.abs(r) > 1 && e !== Math.floor(e) && (r = e - Math.floor(e));
            var o = i.log10(Math.abs(r)), s = "";
            if (0 !== e) {
              var a = -1 * Math.floor(o);
              a = Math.max(Math.min(a, 20), 0), s = e.toFixed(a);
            } else s = "0";
            return s;
          },
          logarithmic: function(e, t, n) {
            var r = e / Math.pow(10, Math.floor(i.log10(e)));
            return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === t || t === n.length - 1 ? e.toExponential() : "";
          }
        }
      };
    }, {
      45: 45
    } ],
    35: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(26), r = e(45);
      i._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: r.noop,
            title: function(e, t) {
              var i = "", n = t.labels, r = n ? n.length : 0;
              if (e.length > 0) {
                var o = e[0];
                o.xLabel ? i = o.xLabel : r > 0 && o.index < r && (i = n[o.index]);
              }
              return i;
            },
            afterTitle: r.noop,
            beforeBody: r.noop,
            beforeLabel: r.noop,
            label: function(e, t) {
              var i = t.datasets[e.datasetIndex].label || "";
              return i && (i += ": "), i + e.yLabel;
            },
            labelColor: function(e, t) {
              var i = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
              return {
                borderColor: i.borderColor,
                backgroundColor: i.backgroundColor
              };
            },
            labelTextColor: function() {
              return this._options.bodyFontColor;
            },
            afterLabel: r.noop,
            afterBody: r.noop,
            beforeFooter: r.noop,
            footer: r.noop,
            afterFooter: r.noop
          }
        }
      }), t.exports = function(e) {
        function t(e, t) {
          var i = r.color(e);
          return i.alpha(t * i.alpha()).rgbaString();
        }
        function o(e, t) {
          return t && (r.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
        }
        function s(e) {
          var t = i.global, n = r.valueOrDefault;
          return {
            xPadding: e.xPadding,
            yPadding: e.yPadding,
            xAlign: e.xAlign,
            yAlign: e.yAlign,
            bodyFontColor: e.bodyFontColor,
            _bodyFontFamily: n(e.bodyFontFamily, t.defaultFontFamily),
            _bodyFontStyle: n(e.bodyFontStyle, t.defaultFontStyle),
            _bodyAlign: e.bodyAlign,
            bodyFontSize: n(e.bodyFontSize, t.defaultFontSize),
            bodySpacing: e.bodySpacing,
            titleFontColor: e.titleFontColor,
            _titleFontFamily: n(e.titleFontFamily, t.defaultFontFamily),
            _titleFontStyle: n(e.titleFontStyle, t.defaultFontStyle),
            titleFontSize: n(e.titleFontSize, t.defaultFontSize),
            _titleAlign: e.titleAlign,
            titleSpacing: e.titleSpacing,
            titleMarginBottom: e.titleMarginBottom,
            footerFontColor: e.footerFontColor,
            _footerFontFamily: n(e.footerFontFamily, t.defaultFontFamily),
            _footerFontStyle: n(e.footerFontStyle, t.defaultFontStyle),
            footerFontSize: n(e.footerFontSize, t.defaultFontSize),
            _footerAlign: e.footerAlign,
            footerSpacing: e.footerSpacing,
            footerMarginTop: e.footerMarginTop,
            caretSize: e.caretSize,
            cornerRadius: e.cornerRadius,
            backgroundColor: e.backgroundColor,
            opacity: 0,
            legendColorBackground: e.multiKeyBackground,
            displayColors: e.displayColors,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth
          };
        }
        e.Tooltip = n.extend({
          initialize: function() {
            this._model = s(this._options), this._lastActive = [];
          },
          getTitle: function() {
            var e = this._options.callbacks, t = e.beforeTitle.apply(this, arguments), i = e.title.apply(this, arguments), n = e.afterTitle.apply(this, arguments), r = [];
            return o(r = o(r = o(r, t), i), n);
          },
          getBeforeBody: function() {
            var e = this._options.callbacks.beforeBody.apply(this, arguments);
            return r.isArray(e) ? e : void 0 !== e ? [ e ] : [];
          },
          getBody: function(e, t) {
            var i = this, n = i._options.callbacks, s = [];
            return r.each(e, function(e) {
              var r = {
                before: [],
                lines: [],
                after: []
              };
              o(r.before, n.beforeLabel.call(i, e, t)), o(r.lines, n.label.call(i, e, t)), o(r.after, n.afterLabel.call(i, e, t)), 
              s.push(r);
            }), s;
          },
          getAfterBody: function() {
            var e = this._options.callbacks.afterBody.apply(this, arguments);
            return r.isArray(e) ? e : void 0 !== e ? [ e ] : [];
          },
          getFooter: function() {
            var e = this._options.callbacks, t = e.beforeFooter.apply(this, arguments), i = e.footer.apply(this, arguments), n = e.afterFooter.apply(this, arguments), r = [];
            return o(r = o(r = o(r, t), i), n);
          },
          update: function(t) {
            var i, n, o, a, l, u, c, d, h, f, p, m, g, v, y, b, x, w, _, S, C = this, T = C._options, k = C._model, M = C._model = s(T), D = C._active, A = C._data, P = {
              xAlign: k.xAlign,
              yAlign: k.yAlign
            }, I = {
              x: k.x,
              y: k.y
            }, E = {
              width: k.width,
              height: k.height
            }, j = {
              x: k.caretX,
              y: k.caretY
            };
            if (D.length) {
              M.opacity = 1;
              var F = [], O = [];
              j = e.Tooltip.positioners[T.position].call(C, D, C._eventPosition);
              var N = [];
              for (i = 0, n = D.length; i < n; ++i) N.push((x = void 0, w = void 0, x = (b = D[i])._xScale, 
              w = b._yScale || b._scale, _ = b._index, S = b._datasetIndex, {
                xLabel: x ? x.getLabelForIndex(_, S) : "",
                yLabel: w ? w.getLabelForIndex(_, S) : "",
                index: _,
                datasetIndex: S,
                x: b._model.x,
                y: b._model.y
              }));
              T.filter && (N = N.filter(function(e) {
                return T.filter(e, A);
              })), T.itemSort && (N = N.sort(function(e, t) {
                return T.itemSort(e, t, A);
              })), r.each(N, function(e) {
                F.push(T.callbacks.labelColor.call(C, e, C._chart)), O.push(T.callbacks.labelTextColor.call(C, e, C._chart));
              }), M.title = C.getTitle(N, A), M.beforeBody = C.getBeforeBody(N, A), M.body = C.getBody(N, A), 
              M.afterBody = C.getAfterBody(N, A), M.footer = C.getFooter(N, A), M.x = Math.round(j.x), 
              M.y = Math.round(j.y), M.caretPadding = T.caretPadding, M.labelColors = F, M.labelTextColors = O, 
              M.dataPoints = N, P = function(e, t) {
                var i, n, r, o, s, a = e._model, l = e._chart, u = e._chart.chartArea, c = "center", d = "center";
                a.y < t.height ? d = "top" : a.y > l.height - t.height && (d = "bottom");
                var h = (u.left + u.right) / 2, f = (u.top + u.bottom) / 2;
                "center" === d ? (i = function(e) {
                  return e <= h;
                }, n = function(e) {
                  return e > h;
                }) : (i = function(e) {
                  return e <= t.width / 2;
                }, n = function(e) {
                  return e >= l.width - t.width / 2;
                }), r = function(e) {
                  return e + t.width + a.caretSize + a.caretPadding > l.width;
                }, o = function(e) {
                  return e - t.width - a.caretSize - a.caretPadding < 0;
                }, s = function(e) {
                  return e <= f ? "top" : "bottom";
                }, i(a.x) ? (c = "left", r(a.x) && (c = "center", d = s(a.y))) : n(a.x) && (c = "right", 
                o(a.x) && (c = "center", d = s(a.y)));
                var p = e._options;
                return {
                  xAlign: p.xAlign ? p.xAlign : c,
                  yAlign: p.yAlign ? p.yAlign : d
                };
              }(this, E = function(e, t) {
                var i = e._chart.ctx, n = 2 * t.yPadding, o = 0, s = t.body, a = s.reduce(function(e, t) {
                  return e + t.before.length + t.lines.length + t.after.length;
                }, 0);
                a += t.beforeBody.length + t.afterBody.length;
                var l = t.title.length, u = t.footer.length, c = t.titleFontSize, d = t.bodyFontSize, h = t.footerFontSize;
                n += l * c, n += l ? (l - 1) * t.titleSpacing : 0, n += l ? t.titleMarginBottom : 0, 
                n += a * d, n += a ? (a - 1) * t.bodySpacing : 0, n += u ? t.footerMarginTop : 0, 
                n += u * h, n += u ? (u - 1) * t.footerSpacing : 0;
                var f = 0, p = function(e) {
                  o = Math.max(o, i.measureText(e).width + f);
                };
                return i.font = r.fontString(c, t._titleFontStyle, t._titleFontFamily), r.each(t.title, p), 
                i.font = r.fontString(d, t._bodyFontStyle, t._bodyFontFamily), r.each(t.beforeBody.concat(t.afterBody), p), 
                f = t.displayColors ? d + 2 : 0, r.each(s, function(e) {
                  r.each(e.before, p), r.each(e.lines, p), r.each(e.after, p);
                }), f = 0, i.font = r.fontString(h, t._footerFontStyle, t._footerFontFamily), r.each(t.footer, p), 
                {
                  width: o += 2 * t.xPadding,
                  height: n
                };
              }(this, M)), o = M, a = E, l = P, u = C._chart, c = o.x, d = o.y, h = o.caretSize, 
              f = o.caretPadding, p = o.cornerRadius, m = l.xAlign, g = l.yAlign, v = h + f, y = p + f, 
              "right" === m ? c -= a.width : "center" === m && ((c -= a.width / 2) + a.width > u.width && (c = u.width - a.width), 
              c < 0 && (c = 0)), "top" === g ? d += v : d -= "bottom" === g ? a.height + v : a.height / 2, 
              "center" === g ? "left" === m ? c += v : "right" === m && (c -= v) : "left" === m ? c -= y : "right" === m && (c += y), 
              I = {
                x: c,
                y: d
              };
            } else M.opacity = 0;
            return M.xAlign = P.xAlign, M.yAlign = P.yAlign, M.x = I.x, M.y = I.y, M.width = E.width, 
            M.height = E.height, M.caretX = j.x, M.caretY = j.y, C._model = M, t && T.custom && T.custom.call(C, M), 
            C;
          },
          drawCaret: function(e, t) {
            var i = this._chart.ctx, n = this._view, r = this.getCaretPosition(e, t, n);
            i.lineTo(r.x1, r.y1), i.lineTo(r.x2, r.y2), i.lineTo(r.x3, r.y3);
          },
          getCaretPosition: function(e, t, i) {
            var n, r, o, s, a, l, u = i.caretSize, c = i.cornerRadius, d = i.xAlign, h = i.yAlign, f = e.x, p = e.y, m = t.width, g = t.height;
            if ("center" === h) a = p + g / 2, "left" === d ? (r = (n = f) - u, o = n, s = a + u, 
            l = a - u) : (r = (n = f + m) + u, o = n, s = a - u, l = a + u); else if ("left" === d ? (n = (r = f + c + u) - u, 
            o = r + u) : "right" === d ? (n = (r = f + m - c - u) - u, o = r + u) : (n = (r = i.caretX) - u, 
            o = r + u), "top" === h) a = (s = p) - u, l = s; else {
              a = (s = p + g) + u, l = s;
              var v = o;
              o = n, n = v;
            }
            return {
              x1: n,
              x2: r,
              x3: o,
              y1: s,
              y2: a,
              y3: l
            };
          },
          drawTitle: function(e, i, n, o) {
            var s = i.title;
            if (s.length) {
              n.textAlign = i._titleAlign, n.textBaseline = "top";
              var a, l, u = i.titleFontSize, c = i.titleSpacing;
              for (n.fillStyle = t(i.titleFontColor, o), n.font = r.fontString(u, i._titleFontStyle, i._titleFontFamily), 
              a = 0, l = s.length; a < l; ++a) n.fillText(s[a], e.x, e.y), e.y += u + c, a + 1 === s.length && (e.y += i.titleMarginBottom - c);
            }
          },
          drawBody: function(e, i, n, o) {
            var s = i.bodyFontSize, a = i.bodySpacing, l = i.body;
            n.textAlign = i._bodyAlign, n.textBaseline = "top", n.font = r.fontString(s, i._bodyFontStyle, i._bodyFontFamily);
            var u = 0, c = function(t) {
              n.fillText(t, e.x + u, e.y), e.y += s + a;
            };
            n.fillStyle = t(i.bodyFontColor, o), r.each(i.beforeBody, c);
            var d = i.displayColors;
            u = d ? s + 2 : 0, r.each(l, function(a, l) {
              var u = t(i.labelTextColors[l], o);
              n.fillStyle = u, r.each(a.before, c), r.each(a.lines, function(r) {
                d && (n.fillStyle = t(i.legendColorBackground, o), n.fillRect(e.x, e.y, s, s), n.lineWidth = 1, 
                n.strokeStyle = t(i.labelColors[l].borderColor, o), n.strokeRect(e.x, e.y, s, s), 
                n.fillStyle = t(i.labelColors[l].backgroundColor, o), n.fillRect(e.x + 1, e.y + 1, s - 2, s - 2), 
                n.fillStyle = u), c(r);
              }), r.each(a.after, c);
            }), u = 0, r.each(i.afterBody, c), e.y -= a;
          },
          drawFooter: function(e, i, n, o) {
            var s = i.footer;
            s.length && (e.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", 
            n.fillStyle = t(i.footerFontColor, o), n.font = r.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), 
            r.each(s, function(t) {
              n.fillText(t, e.x, e.y), e.y += i.footerFontSize + i.footerSpacing;
            }));
          },
          drawBackground: function(e, i, n, r, o) {
            n.fillStyle = t(i.backgroundColor, o), n.strokeStyle = t(i.borderColor, o), n.lineWidth = i.borderWidth;
            var s = i.xAlign, a = i.yAlign, l = e.x, u = e.y, c = r.width, d = r.height, h = i.cornerRadius;
            n.beginPath(), n.moveTo(l + h, u), "top" === a && this.drawCaret(e, r), n.lineTo(l + c - h, u), 
            n.quadraticCurveTo(l + c, u, l + c, u + h), "center" === a && "right" === s && this.drawCaret(e, r), 
            n.lineTo(l + c, u + d - h), n.quadraticCurveTo(l + c, u + d, l + c - h, u + d), 
            "bottom" === a && this.drawCaret(e, r), n.lineTo(l + h, u + d), n.quadraticCurveTo(l, u + d, l, u + d - h), 
            "center" === a && "left" === s && this.drawCaret(e, r), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), 
            n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke();
          },
          draw: function() {
            var e = this._chart.ctx, t = this._view;
            if (0 !== t.opacity) {
              var i = {
                width: t.width,
                height: t.height
              }, n = {
                x: t.x,
                y: t.y
              }, r = Math.abs(t.opacity < .001) ? 0 : t.opacity, o = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
              this._options.enabled && o && (this.drawBackground(n, t, e, i, r), n.x += t.xPadding, 
              n.y += t.yPadding, this.drawTitle(n, t, e, r), this.drawBody(n, t, e, r), this.drawFooter(n, t, e, r));
            }
          },
          handleEvent: function(e) {
            var t, i = this, n = i._options;
            return i._lastActive = i._lastActive || [], "mouseout" === e.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(e, n.mode, n), 
            (t = !r.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
              x: e.x,
              y: e.y
            }, i.update(!0), i.pivot())), t;
          }
        }), e.Tooltip.positioners = {
          average: function(e) {
            if (!e.length) return !1;
            var t, i, n = 0, r = 0, o = 0;
            for (t = 0, i = e.length; t < i; ++t) {
              var s = e[t];
              if (s && s.hasValue()) {
                var a = s.tooltipPosition();
                n += a.x, r += a.y, ++o;
              }
            }
            return {
              x: Math.round(n / o),
              y: Math.round(r / o)
            };
          },
          nearest: function(e, t) {
            var i, n, o, s = t.x, a = t.y, l = Number.POSITIVE_INFINITY;
            for (i = 0, n = e.length; i < n; ++i) {
              var u = e[i];
              if (u && u.hasValue()) {
                var c = u.getCenterPoint(), d = r.distanceBetweenPoints(t, c);
                d < l && (l = d, o = u);
              }
            }
            if (o) {
              var h = o.tooltipPosition();
              s = h.x, a = h.y;
            }
            return {
              x: s,
              y: a
            };
          }
        };
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    } ],
    36: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(26), r = e(45);
      i._set("global", {
        elements: {
          arc: {
            backgroundColor: i.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
          }
        }
      }), t.exports = n.extend({
        inLabelRange: function(e) {
          var t = this._view;
          return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2);
        },
        inRange: function(e, t) {
          var i = this._view;
          if (i) {
            for (var n = r.getAngleFromPoint(i, {
              x: e,
              y: t
            }), o = n.angle, s = n.distance, a = i.startAngle, l = i.endAngle; l < a; ) l += 2 * Math.PI;
            for (;o > l; ) o -= 2 * Math.PI;
            for (;o < a; ) o += 2 * Math.PI;
            var u = o >= a && o <= l, c = s >= i.innerRadius && s <= i.outerRadius;
            return u && c;
          }
          return !1;
        },
        getCenterPoint: function() {
          var e = this._view, t = (e.startAngle + e.endAngle) / 2, i = (e.innerRadius + e.outerRadius) / 2;
          return {
            x: e.x + Math.cos(t) * i,
            y: e.y + Math.sin(t) * i
          };
        },
        getArea: function() {
          var e = this._view;
          return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2));
        },
        tooltipPosition: function() {
          var e = this._view, t = e.startAngle + (e.endAngle - e.startAngle) / 2, i = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
          return {
            x: e.x + Math.cos(t) * i,
            y: e.y + Math.sin(t) * i
          };
        },
        draw: function() {
          var e = this._chart.ctx, t = this._view, i = t.startAngle, n = t.endAngle;
          e.beginPath(), e.arc(t.x, t.y, t.outerRadius, i, n), e.arc(t.x, t.y, t.innerRadius, n, i, !0), 
          e.closePath(), e.strokeStyle = t.borderColor, e.lineWidth = t.borderWidth, e.fillStyle = t.backgroundColor, 
          e.fill(), e.lineJoin = "bevel", t.borderWidth && e.stroke();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    } ],
    37: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(26), r = e(45), o = i.global;
      i._set("global", {
        elements: {
          line: {
            tension: .4,
            backgroundColor: o.defaultColor,
            borderWidth: 3,
            borderColor: o.defaultColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }
        }
      }), t.exports = n.extend({
        draw: function() {
          var e, t, i, n, s = this._view, a = this._chart.ctx, l = s.spanGaps, u = this._children.slice(), c = o.elements.line, d = -1;
          for (this._loop && u.length && u.push(u[0]), a.save(), a.lineCap = s.borderCapStyle || c.borderCapStyle, 
          a.setLineDash && a.setLineDash(s.borderDash || c.borderDash), a.lineDashOffset = s.borderDashOffset || c.borderDashOffset, 
          a.lineJoin = s.borderJoinStyle || c.borderJoinStyle, a.lineWidth = s.borderWidth || c.borderWidth, 
          a.strokeStyle = s.borderColor || o.defaultColor, a.beginPath(), d = -1, e = 0; e < u.length; ++e) t = u[e], 
          i = r.previousItem(u, e), n = t._view, 0 === e ? n.skip || (a.moveTo(n.x, n.y), 
          d = e) : (i = -1 === d ? i : u[d], n.skip || (d !== e - 1 && !l || -1 === d ? a.moveTo(n.x, n.y) : r.canvas.lineTo(a, i._view, t._view), 
          d = e));
          a.stroke(), a.restore();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    } ],
    38: [ function(e, t) {
      "use strict";
      function i(e) {
        var t = this._view;
        return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius;
      }
      var n = e(25), r = e(26), o = e(45), s = n.global.defaultColor;
      n._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: s,
            borderColor: s,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }
        }
      }), t.exports = r.extend({
        inRange: function(e, t) {
          var i = this._view;
          return !!i && Math.pow(e - i.x, 2) + Math.pow(t - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
        },
        inLabelRange: i,
        inXRange: i,
        inYRange: function(e) {
          var t = this._view;
          return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius;
        },
        getCenterPoint: function() {
          var e = this._view;
          return {
            x: e.x,
            y: e.y
          };
        },
        getArea: function() {
          return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function() {
          var e = this._view;
          return {
            x: e.x,
            y: e.y,
            padding: e.radius + e.borderWidth
          };
        },
        draw: function(e) {
          var t = this._view, i = this._model, r = this._chart.ctx, a = t.pointStyle, l = t.radius, u = t.x, c = t.y, d = o.color, h = 0;
          t.skip || (r.strokeStyle = t.borderColor || s, r.lineWidth = o.valueOrDefault(t.borderWidth, n.global.elements.point.borderWidth), 
          r.fillStyle = t.backgroundColor || s, void 0 !== e && (i.x < e.left || 1.01 * e.right < i.x || i.y < e.top || 1.01 * e.bottom < i.y) && (i.x < e.left ? h = (u - i.x) / (e.left - i.x) : 1.01 * e.right < i.x ? h = (i.x - u) / (i.x - e.right) : i.y < e.top ? h = (c - i.y) / (e.top - i.y) : 1.01 * e.bottom < i.y && (h = (i.y - c) / (i.y - e.bottom)), 
          h = Math.round(100 * h) / 100, r.strokeStyle = d(r.strokeStyle).alpha(h).rgbString(), 
          r.fillStyle = d(r.fillStyle).alpha(h).rgbString()), o.canvas.drawPoint(r, a, l, u, c));
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    } ],
    39: [ function(e, t) {
      "use strict";
      function i(e) {
        return void 0 !== e._view.width;
      }
      function n(e) {
        var t, n, r, o, s = e._view;
        if (i(e)) {
          var a = s.width / 2;
          t = s.x - a, n = s.x + a, r = Math.min(s.y, s.base), o = Math.max(s.y, s.base);
        } else {
          var l = s.height / 2;
          t = Math.min(s.x, s.base), n = Math.max(s.x, s.base), r = s.y - l, o = s.y + l;
        }
        return {
          left: t,
          top: r,
          right: n,
          bottom: o
        };
      }
      var r = e(25), o = e(26);
      r._set("global", {
        elements: {
          rectangle: {
            backgroundColor: r.global.defaultColor,
            borderColor: r.global.defaultColor,
            borderSkipped: "bottom",
            borderWidth: 0
          }
        }
      }), t.exports = o.extend({
        draw: function() {
          function e(e) {
            return v[(y + e) % 4];
          }
          var t, i, n, r, o, s, a, l = this._chart.ctx, u = this._view, c = u.borderWidth;
          if (u.horizontal ? (t = u.base, i = u.x, n = u.y - u.height / 2, r = u.y + u.height / 2, 
          o = i > t ? 1 : -1, s = 1, a = u.borderSkipped || "left") : (t = u.x - u.width / 2, 
          i = u.x + u.width / 2, n = u.y, o = 1, s = (r = u.base) > n ? 1 : -1, a = u.borderSkipped || "bottom"), 
          c) {
            var d = Math.min(Math.abs(t - i), Math.abs(n - r)), h = (c = c > d ? d : c) / 2, f = t + ("left" !== a ? h * o : 0), p = i + ("right" !== a ? -h * o : 0), m = n + ("top" !== a ? h * s : 0), g = r + ("bottom" !== a ? -h * s : 0);
            f !== p && (n = m, r = g), m !== g && (t = f, i = p);
          }
          l.beginPath(), l.fillStyle = u.backgroundColor, l.strokeStyle = u.borderColor, l.lineWidth = c;
          var v = [ [ t, r ], [ t, n ], [ i, n ], [ i, r ] ], y = [ "bottom", "left", "top", "right" ].indexOf(a, 0);
          -1 === y && (y = 0);
          var b = e(0);
          l.moveTo(b[0], b[1]);
          for (var x = 1; x < 4; x++) b = e(x), l.lineTo(b[0], b[1]);
          l.fill(), c && l.stroke();
        },
        height: function() {
          var e = this._view;
          return e.base - e.y;
        },
        inRange: function(e, t) {
          var i = !1;
          if (this._view) {
            var r = n(this);
            i = e >= r.left && e <= r.right && t >= r.top && t <= r.bottom;
          }
          return i;
        },
        inLabelRange: function(e, t) {
          if (!this._view) return !1;
          var r = n(this);
          return i(this) ? e >= r.left && e <= r.right : t >= r.top && t <= r.bottom;
        },
        inXRange: function(e) {
          var t = n(this);
          return e >= t.left && e <= t.right;
        },
        inYRange: function(e) {
          var t = n(this);
          return e >= t.top && e <= t.bottom;
        },
        getCenterPoint: function() {
          var e, t, n = this._view;
          return i(this) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), 
          {
            x: e,
            y: t
          };
        },
        getArea: function() {
          var e = this._view;
          return e.width * Math.abs(e.y - e.base);
        },
        tooltipPosition: function() {
          var e = this._view;
          return {
            x: e.x,
            y: e.y
          };
        }
      });
    }, {
      25: 25,
      26: 26
    } ],
    40: [ function(e, t) {
      "use strict";
      t.exports = {}, t.exports.Arc = e(36), t.exports.Line = e(37), t.exports.Point = e(38), 
      t.exports.Rectangle = e(39);
    }, {
      36: 36,
      37: 37,
      38: 38,
      39: 39
    } ],
    41: [ function(e, t, i) {
      "use strict";
      var n = e(42);
      i = t.exports = {
        clear: function(e) {
          e.ctx.clearRect(0, 0, e.width, e.height);
        },
        roundedRect: function(e, t, i, n, r, o) {
          if (o) {
            var s = Math.min(o, n / 2), a = Math.min(o, r / 2);
            e.moveTo(t + s, i), e.lineTo(t + n - s, i), e.quadraticCurveTo(t + n, i, t + n, i + a), 
            e.lineTo(t + n, i + r - a), e.quadraticCurveTo(t + n, i + r, t + n - s, i + r), 
            e.lineTo(t + s, i + r), e.quadraticCurveTo(t, i + r, t, i + r - a), e.lineTo(t, i + a), 
            e.quadraticCurveTo(t, i, t + s, i);
          } else e.rect(t, i, n, r);
        },
        drawPoint: function(e, t, i, n, r) {
          var o, s, a, l, u, c;
          if (!t || "object" != typeof t || "[object HTMLImageElement]" !== (o = t.toString()) && "[object HTMLCanvasElement]" !== o) {
            if (!(isNaN(i) || i <= 0)) {
              switch (t) {
               default:
                e.beginPath(), e.arc(n, r, i, 0, 2 * Math.PI), e.closePath(), e.fill();
                break;

               case "triangle":
                e.beginPath(), u = (s = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, e.moveTo(n - s / 2, r + u / 3), 
                e.lineTo(n + s / 2, r + u / 3), e.lineTo(n, r - 2 * u / 3), e.closePath(), e.fill();
                break;

               case "rect":
                c = 1 / Math.SQRT2 * i, e.beginPath(), e.fillRect(n - c, r - c, 2 * c, 2 * c), e.strokeRect(n - c, r - c, 2 * c, 2 * c);
                break;

               case "rectRounded":
                var d = i / Math.SQRT2, h = n - d, f = r - d, p = Math.SQRT2 * i;
                e.beginPath(), this.roundedRect(e, h, f, p, p, i / 2), e.closePath(), e.fill();
                break;

               case "rectRot":
                c = 1 / Math.SQRT2 * i, e.beginPath(), e.moveTo(n - c, r), e.lineTo(n, r + c), e.lineTo(n + c, r), 
                e.lineTo(n, r - c), e.closePath(), e.fill();
                break;

               case "cross":
                e.beginPath(), e.moveTo(n, r + i), e.lineTo(n, r - i), e.moveTo(n - i, r), e.lineTo(n + i, r), 
                e.closePath();
                break;

               case "crossRot":
                e.beginPath(), a = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, e.moveTo(n - a, r - l), 
                e.lineTo(n + a, r + l), e.moveTo(n - a, r + l), e.lineTo(n + a, r - l), e.closePath();
                break;

               case "star":
                e.beginPath(), e.moveTo(n, r + i), e.lineTo(n, r - i), e.moveTo(n - i, r), e.lineTo(n + i, r), 
                a = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, e.moveTo(n - a, r - l), 
                e.lineTo(n + a, r + l), e.moveTo(n - a, r + l), e.lineTo(n + a, r - l), e.closePath();
                break;

               case "line":
                e.beginPath(), e.moveTo(n - i, r), e.lineTo(n + i, r), e.closePath();
                break;

               case "dash":
                e.beginPath(), e.moveTo(n, r), e.lineTo(n + i, r), e.closePath();
              }
              e.stroke();
            }
          } else e.drawImage(t, n - t.width / 2, r - t.height / 2, t.width, t.height);
        },
        clipArea: function(e, t) {
          e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), 
          e.clip();
        },
        unclipArea: function(e) {
          e.restore();
        },
        lineTo: function(e, t, i, n) {
          if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? e.lineTo(t.x, i.y) : e.lineTo(i.x, t.y), 
          void e.lineTo(i.x, i.y);
          i.tension ? e.bezierCurveTo(n ? t.controlPointPreviousX : t.controlPointNextX, n ? t.controlPointPreviousY : t.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : e.lineTo(i.x, i.y);
        }
      }, n.clear = i.clear, n.drawRoundedRectangle = function(e) {
        e.beginPath(), i.roundedRect.apply(i, arguments), e.closePath();
      };
    }, {
      42: 42
    } ],
    42: [ function(e, t) {
      "use strict";
      var i, n = {
        noop: function() {},
        uid: (i = 0, function() {
          return i++;
        }),
        isNullOrUndef: function(e) {
          return null == e;
        },
        isArray: Array.isArray ? Array.isArray : function(e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        },
        isObject: function(e) {
          return null !== e && "[object Object]" === Object.prototype.toString.call(e);
        },
        valueOrDefault: function(e, t) {
          return void 0 === e ? t : e;
        },
        valueAtIndexOrDefault: function(e, t, i) {
          return n.valueOrDefault(n.isArray(e) ? e[t] : e, i);
        },
        callback: function(e, t, i) {
          if (e && "function" == typeof e.call) return e.apply(i, t);
        },
        each: function(e, t, i, r) {
          var o, s, a;
          if (n.isArray(e)) if (s = e.length, r) for (o = s - 1; o >= 0; o--) t.call(i, e[o], o); else for (o = 0; o < s; o++) t.call(i, e[o], o); else if (n.isObject(e)) for (s = (a = Object.keys(e)).length, 
          o = 0; o < s; o++) t.call(i, e[a[o]], a[o]);
        },
        arrayEquals: function(e, t) {
          var i, r, o, s;
          if (!e || !t || e.length !== t.length) return !1;
          for (i = 0, r = e.length; i < r; ++i) if (o = e[i], s = t[i], o instanceof Array && s instanceof Array) {
            if (!n.arrayEquals(o, s)) return !1;
          } else if (o !== s) return !1;
          return !0;
        },
        clone: function(e) {
          if (n.isArray(e)) return e.map(n.clone);
          if (n.isObject(e)) {
            for (var t = {}, i = Object.keys(e), r = i.length, o = 0; o < r; ++o) t[i[o]] = n.clone(e[i[o]]);
            return t;
          }
          return e;
        },
        _merger: function(e, t, i, r) {
          var o = t[e], s = i[e];
          n.isObject(o) && n.isObject(s) ? n.merge(o, s, r) : t[e] = n.clone(s);
        },
        _mergerIf: function(e, t, i) {
          var r = t[e], o = i[e];
          n.isObject(r) && n.isObject(o) ? n.mergeIf(r, o) : t.hasOwnProperty(e) || (t[e] = n.clone(o));
        },
        merge: function(e, t, i) {
          var r, o, s, a, l, u = n.isArray(t) ? t : [ t ], c = u.length;
          if (!n.isObject(e)) return e;
          for (r = (i = i || {}).merger || n._merger, o = 0; o < c; ++o) if (t = u[o], n.isObject(t)) for (l = 0, 
          a = (s = Object.keys(t)).length; l < a; ++l) r(s[l], e, t, i);
          return e;
        },
        mergeIf: function(e, t) {
          return n.merge(e, t, {
            merger: n._mergerIf
          });
        },
        extend: function(e) {
          for (var t = function(t, i) {
            e[i] = t;
          }, i = 1, r = arguments.length; i < r; ++i) n.each(arguments[i], t);
          return e;
        },
        inherits: function(e) {
          var t = this, i = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
            return t.apply(this, arguments);
          }, r = function() {
            this.constructor = i;
          };
          return r.prototype = t.prototype, i.prototype = new r(), i.extend = n.inherits, 
          e && n.extend(i.prototype, e), i.__super__ = t.prototype, i;
        }
      };
      t.exports = n, n.callCallback = n.callback, n.indexOf = function(e, t, i) {
        return Array.prototype.indexOf.call(e, t, i);
      }, n.getValueOrDefault = n.valueOrDefault, n.getValueAtIndexOrDefault = n.valueAtIndexOrDefault;
    }, {} ],
    43: [ function(e, t) {
      "use strict";
      var i = e(42), n = {
        linear: function(e) {
          return e;
        },
        easeInQuad: function(e) {
          return e * e;
        },
        easeOutQuad: function(e) {
          return -e * (e - 2);
        },
        easeInOutQuad: function(e) {
          return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1);
        },
        easeInCubic: function(e) {
          return e * e * e;
        },
        easeOutCubic: function(e) {
          return (e -= 1) * e * e + 1;
        },
        easeInOutCubic: function(e) {
          return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2);
        },
        easeInQuart: function(e) {
          return e * e * e * e;
        },
        easeOutQuart: function(e) {
          return -((e -= 1) * e * e * e - 1);
        },
        easeInOutQuart: function(e) {
          return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2);
        },
        easeInQuint: function(e) {
          return e * e * e * e * e;
        },
        easeOutQuint: function(e) {
          return (e -= 1) * e * e * e * e + 1;
        },
        easeInOutQuint: function(e) {
          return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2);
        },
        easeInSine: function(e) {
          return 1 - Math.cos(e * (Math.PI / 2));
        },
        easeOutSine: function(e) {
          return Math.sin(e * (Math.PI / 2));
        },
        easeInOutSine: function(e) {
          return -.5 * (Math.cos(Math.PI * e) - 1);
        },
        easeInExpo: function(e) {
          return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
        },
        easeOutExpo: function(e) {
          return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
        },
        easeInOutExpo: function(e) {
          return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e));
        },
        easeInCirc: function(e) {
          return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1);
        },
        easeOutCirc: function(e) {
          return Math.sqrt(1 - (e -= 1) * e);
        },
        easeInOutCirc: function(e) {
          return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        },
        easeInElastic: function(e) {
          var t = 1.70158, i = 0, n = 1;
          return 0 === e ? 0 : 1 === e ? 1 : (i || (i = .3), n < 1 ? (n = 1, t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n), 
          -n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i));
        },
        easeOutElastic: function(e) {
          var t = 1.70158, i = 0, n = 1;
          return 0 === e ? 0 : 1 === e ? 1 : (i || (i = .3), n < 1 ? (n = 1, t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n), 
          n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / i) + 1);
        },
        easeInOutElastic: function(e) {
          var t = 1.70158, i = 0, n = 1;
          return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n), 
          e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i) * .5 + 1);
        },
        easeInBack: function(e) {
          return e * e * (2.70158 * e - 1.70158);
        },
        easeOutBack: function(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        },
        easeInOutBack: function(e) {
          var t = 1.70158;
          return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
        },
        easeInBounce: function(e) {
          return 1 - n.easeOutBounce(1 - e);
        },
        easeOutBounce: function(e) {
          return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
        },
        easeInOutBounce: function(e) {
          return e < .5 ? .5 * n.easeInBounce(2 * e) : .5 * n.easeOutBounce(2 * e - 1) + .5;
        }
      };
      t.exports = {
        effects: n
      }, i.easingEffects = n;
    }, {
      42: 42
    } ],
    44: [ function(e, t) {
      "use strict";
      var i = e(42);
      t.exports = {
        toLineHeight: function(e, t) {
          var i = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
          if (!i || "normal" === i[1]) return 1.2 * t;
          switch (e = +i[2], i[3]) {
           case "px":
            return e;

           case "%":
            e /= 100;
          }
          return t * e;
        },
        toPadding: function(e) {
          var t, n, r, o;
          return i.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, r = +e.bottom || 0, 
          o = +e.left || 0) : t = n = r = o = +e || 0, {
            top: t,
            right: n,
            bottom: r,
            left: o,
            height: t + r,
            width: o + n
          };
        },
        resolve: function(e, t, n) {
          var r, o, s;
          for (r = 0, o = e.length; r < o; ++r) if (void 0 !== (s = e[r]) && (void 0 !== t && "function" == typeof s && (s = s(t)), 
          void 0 !== n && i.isArray(s) && (s = s[n]), void 0 !== s)) return s;
        }
      };
    }, {
      42: 42
    } ],
    45: [ function(e, t) {
      "use strict";
      t.exports = e(42), t.exports.easing = e(43), t.exports.canvas = e(41), t.exports.options = e(44);
    }, {
      41: 41,
      42: 42,
      43: 43,
      44: 44
    } ],
    46: [ function(e, t) {
      t.exports = {
        acquireContext: function(e) {
          return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null;
        }
      };
    }, {} ],
    47: [ function(e, t) {
      "use strict";
      function i(e, t) {
        var i = l.getStyle(e, t), n = i && i.match(/^(\d+)(\.\d+)?px$/);
        return n ? Number(n[1]) : void 0;
      }
      function n(e, t, i) {
        e.addEventListener(t, i, m);
      }
      function r(e, t, i) {
        e.removeEventListener(t, i, m);
      }
      function o(e, t, i, n, r) {
        return {
          type: e,
          chart: t,
          native: r || null,
          x: void 0 !== i ? i : null,
          y: void 0 !== n ? n : null
        };
      }
      function s(e, t, i) {
        var r, s, a, p, m, g, v, y, b = e[u] || (e[u] = {}), x = b.resizer = function(e) {
          var t = document.createElement("div"), i = c + "size-monitor", r = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
          t.style.cssText = r, t.className = i, t.innerHTML = '<div class="' + i + '-expand" style="' + r + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + r + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
          var o = t.childNodes[0], s = t.childNodes[1];
          t._reset = function() {
            o.scrollLeft = 1e6, o.scrollTop = 1e6, s.scrollLeft = 1e6, s.scrollTop = 1e6;
          };
          var a = function() {
            t._reset(), e();
          };
          return n(o, "scroll", a.bind(o, "expand")), n(s, "scroll", a.bind(s, "shrink")), 
          t;
        }((r = function() {
          if (b.resizer) return t(o("resize", i));
        }, a = !1, p = [], function() {
          p = Array.prototype.slice.call(arguments), s = s || this, a || (a = !0, l.requestAnimFrame.call(window, function() {
            a = !1, r.apply(s, p);
          }));
        }));
        g = function() {
          if (b.resizer) {
            var t = e.parentNode;
            t && t !== x.parentNode && t.insertBefore(x, t.firstChild), x._reset();
          }
        }, v = (m = e)[u] || (m[u] = {}), y = v.renderProxy = function(e) {
          e.animationName === h && g();
        }, l.each(f, function(e) {
          n(m, e, y);
        }), v.reflow = !!m.offsetParent, m.classList.add(d);
      }
      function a(e) {
        var t, i, n, o = e[u] || {}, s = o.resizer;
        delete o.resizer, i = (t = e)[u] || {}, (n = i.renderProxy) && (l.each(f, function(e) {
          r(t, e, n);
        }), delete i.renderProxy), t.classList.remove(d), s && s.parentNode && s.parentNode.removeChild(s);
      }
      var l = e(45), u = "$chartjs", c = "chartjs-", d = c + "render-monitor", h = c + "render-animation", f = [ "animationstart", "webkitAnimationStart" ], p = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
      }, m = !!function() {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0;
            }
          });
          window.addEventListener("e", null, t);
        } catch (e) {}
        return e;
      }() && {
        passive: !0
      };
      t.exports = {
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        initialize: function() {
          var e, t, i, n = "from{opacity:0.99}to{opacity:1}";
          t = "@-webkit-keyframes " + h + "{" + n + "}@keyframes " + h + "{" + n + "}." + d + "{-webkit-animation:" + h + " 0.001s;animation:" + h + " 0.001s;}", 
          i = (e = this)._style || document.createElement("style"), e._style || (e._style = i, 
          t = "/* Chart.js */\n" + t, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), 
          i.appendChild(document.createTextNode(t));
        },
        acquireContext: function(e, t) {
          "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), 
          e && e.canvas && (e = e.canvas);
          var n = e && e.getContext && e.getContext("2d");
          return n && n.canvas === e ? (function(e, t) {
            var n = e.style, r = e.getAttribute("height"), o = e.getAttribute("width");
            if (e[u] = {
              initial: {
                height: r,
                width: o,
                style: {
                  display: n.display,
                  height: n.height,
                  width: n.width
                }
              }
            }, n.display = n.display || "block", null === o || "" === o) {
              var s = i(e, "width");
              void 0 !== s && (e.width = s);
            }
            if (null === r || "" === r) if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2); else {
              var a = i(e, "height");
              void 0 !== s && (e.height = a);
            }
          }(e, t), n) : null;
        },
        releaseContext: function(e) {
          var t = e.canvas;
          if (t[u]) {
            var i = t[u].initial;
            [ "height", "width" ].forEach(function(e) {
              var n = i[e];
              l.isNullOrUndef(n) ? t.removeAttribute(e) : t.setAttribute(e, n);
            }), l.each(i.style || {}, function(e, i) {
              t.style[i] = e;
            }), t.width = t.width, delete t[u];
          }
        },
        addEventListener: function(e, t, i) {
          var r = e.canvas;
          if ("resize" !== t) {
            var a = i[u] || (i[u] = {});
            n(r, t, (a.proxies || (a.proxies = {}))[e.id + "_" + t] = function(t) {
              var n, r, s;
              i((r = e, o(p[(n = t).type] || n.type, r, (s = l.getRelativePosition(n, r)).x, s.y, n)));
            });
          } else s(r, i, e);
        },
        removeEventListener: function(e, t, i) {
          var n = e.canvas;
          if ("resize" !== t) {
            var o = ((i[u] || {}).proxies || {})[e.id + "_" + t];
            o && r(n, t, o);
          } else a(n);
        }
      }, l.addEvent = n, l.removeEvent = r;
    }, {
      45: 45
    } ],
    48: [ function(e, t) {
      "use strict";
      var i = e(45), n = e(46), r = e(47), o = r._enabled ? r : n;
      t.exports = i.extend({
        initialize: function() {},
        acquireContext: function() {},
        releaseContext: function() {},
        addEventListener: function() {},
        removeEventListener: function() {}
      }, o);
    }, {
      45: 45,
      46: 46,
      47: 47
    } ],
    49: [ function(e, t) {
      "use strict";
      t.exports = {}, t.exports.filler = e(50), t.exports.legend = e(51), t.exports.title = e(52);
    }, {
      50: 50,
      51: 51,
      52: 52
    } ],
    50: [ function(e, t) {
      "use strict";
      function i(e, t, i) {
        var n, r = e._model || {}, o = r.fill;
        if (void 0 === o && (o = !!r.backgroundColor), !1 === o || null === o) return !1;
        if (!0 === o) return "origin";
        if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = t + n), 
        !(n === t || n < 0 || n >= i) && n;
        switch (o) {
         case "bottom":
          return "start";

         case "top":
          return "end";

         case "zero":
          return "origin";

         case "origin":
         case "start":
         case "end":
          return o;

         default:
          return !1;
        }
      }
      function n(e) {
        var t, i = e.el._model || {}, n = e.el._scale || {}, r = e.fill, o = null;
        if (isFinite(r)) return null;
        if ("start" === r ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === r ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), 
        null != o) {
          if (void 0 !== o.x && void 0 !== o.y) return o;
          if ("number" == typeof o && isFinite(o)) return {
            x: (t = n.isHorizontal()) ? o : null,
            y: t ? null : o
          };
        }
        return null;
      }
      function r(e, t, i) {
        var n, r = e[t].fill, o = [ t ];
        if (!i) return r;
        for (;!1 !== r && -1 === o.indexOf(r); ) {
          if (!isFinite(r)) return r;
          if (!(n = e[r])) return !1;
          if (n.visible) return r;
          o.push(r), r = n.fill;
        }
        return !1;
      }
      function o(e) {
        return e && !e.skip;
      }
      function s(e, t, i, n, r) {
        var o;
        if (n && r) {
          for (e.moveTo(t[0].x, t[0].y), o = 1; o < n; ++o) u.canvas.lineTo(e, t[o - 1], t[o]);
          for (e.lineTo(i[r - 1].x, i[r - 1].y), o = r - 1; o > 0; --o) u.canvas.lineTo(e, i[o], i[o - 1], !0);
        }
      }
      var a = e(25), l = e(40), u = e(45);
      a._set("global", {
        plugins: {
          filler: {
            propagate: !0
          }
        }
      });
      var c = {
        dataset: function(e) {
          var t = e.fill, i = e.chart, n = i.getDatasetMeta(t), r = n && i.isDatasetVisible(t) && n.dataset._children || [], o = r.length || 0;
          return o ? function(e, t) {
            return t < o && r[t]._view || null;
          } : null;
        },
        boundary: function(e) {
          var t = e.boundary, i = t ? t.x : null, n = t ? t.y : null;
          return function(e) {
            return {
              x: null === i ? e.x : i,
              y: null === n ? e.y : n
            };
          };
        }
      };
      t.exports = {
        id: "filler",
        afterDatasetsUpdate: function(e, t) {
          var o, s, a, u, d, h, f, p = (e.data.datasets || []).length, m = t.propagate, g = [];
          for (s = 0; s < p; ++s) u = null, (a = (o = e.getDatasetMeta(s)).dataset) && a._model && a instanceof l.Line && (u = {
            visible: e.isDatasetVisible(s),
            fill: i(a, s, p),
            chart: e,
            el: a
          }), o.$filler = u, g.push(u);
          for (s = 0; s < p; ++s) (u = g[s]) && (u.fill = r(g, s, m), u.boundary = n(u), u.mapper = (f = void 0, 
          f = "dataset", !1 === (h = (d = u).fill) ? null : (isFinite(h) || (f = "boundary"), 
          c[f](d))));
        },
        beforeDatasetDraw: function(e, t) {
          var i = t.meta.$filler;
          if (i) {
            var n = e.ctx, r = i.el, l = r._view, c = r._children || [], d = i.mapper, h = l.backgroundColor || a.global.defaultColor;
            d && h && c.length && (u.canvas.clipArea(n, e.chartArea), function(e, t, i, n, r, a) {
              var l, u, c, d, h, f, p, m = t.length, g = n.spanGaps, v = [], y = [], b = 0, x = 0;
              for (e.beginPath(), l = 0, u = m + !!a; l < u; ++l) h = i(d = t[c = l % m]._view, c, n), 
              f = o(d), p = o(h), f && p ? (b = v.push(d), x = y.push(h)) : b && x && (g ? (f && v.push(d), 
              p && y.push(h)) : (s(e, v, y, b, x), b = x = 0, v = [], y = []));
              s(e, v, y, b, x), e.closePath(), e.fillStyle = r, e.fill();
            }(n, c, d, l, h, r._loop), u.canvas.unclipArea(n));
          }
        }
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    } ],
    51: [ function(e, t) {
      "use strict";
      function i(e, t) {
        return e.usePointStyle ? t * Math.SQRT2 : e.boxWidth;
      }
      function n(e, t) {
        var i = new u({
          ctx: e.ctx,
          options: t,
          chart: e
        });
        a.configure(e, i, t), a.addBox(e, i), e.legend = i;
      }
      var r = e(25), o = e(26), s = e(45), a = e(30), l = s.noop;
      r._set("global", {
        legend: {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function(e, t) {
            var i = t.datasetIndex, n = this.chart, r = n.getDatasetMeta(i);
            r.hidden = null === r.hidden ? !n.data.datasets[i].hidden : null, n.update();
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function(e) {
              var t = e.data;
              return s.isArray(t.datasets) ? t.datasets.map(function(t, i) {
                return {
                  text: t.label,
                  fillStyle: s.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                  hidden: !e.isDatasetVisible(i),
                  lineCap: t.borderCapStyle,
                  lineDash: t.borderDash,
                  lineDashOffset: t.borderDashOffset,
                  lineJoin: t.borderJoinStyle,
                  lineWidth: t.borderWidth,
                  strokeStyle: t.borderColor,
                  pointStyle: t.pointStyle,
                  datasetIndex: i
                };
              }, this) : [];
            }
          }
        },
        legendCallback: function(e) {
          var t = [];
          t.push('<ul class="' + e.id + '-legend">');
          for (var i = 0; i < e.data.datasets.length; i++) t.push('<li><span style="background-color:' + e.data.datasets[i].backgroundColor + '"></span>'), 
          e.data.datasets[i].label && t.push(e.data.datasets[i].label), t.push("</li>");
          return t.push("</ul>"), t.join("");
        }
      });
      var u = o.extend({
        initialize: function(e) {
          s.extend(this, e), this.legendHitBoxes = [], this.doughnutMode = !1;
        },
        beforeUpdate: l,
        update: function(e, t, i) {
          var n = this;
          return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = i, n.beforeSetDimensions(), 
          n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), 
          n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
        },
        afterUpdate: l,
        beforeSetDimensions: l,
        setDimensions: function() {
          var e = this;
          e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, 
          e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, 
          e.paddingBottom = 0, e.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: l,
        beforeBuildLabels: l,
        buildLabels: function() {
          var e = this, t = e.options.labels || {}, i = s.callback(t.generateLabels, [ e.chart ], e) || [];
          t.filter && (i = i.filter(function(i) {
            return t.filter(i, e.chart.data);
          })), e.options.reverse && i.reverse(), e.legendItems = i;
        },
        afterBuildLabels: l,
        beforeFit: l,
        fit: function() {
          var e = this, t = e.options, n = t.labels, o = t.display, a = e.ctx, l = r.global, u = s.valueOrDefault, c = u(n.fontSize, l.defaultFontSize), d = u(n.fontStyle, l.defaultFontStyle), h = u(n.fontFamily, l.defaultFontFamily), f = s.fontString(c, d, h), p = e.legendHitBoxes = [], m = e.minSize, g = e.isHorizontal();
          if (g ? (m.width = e.maxWidth, m.height = o ? 10 : 0) : (m.width = o ? 10 : 0, m.height = e.maxHeight), 
          o) if (a.font = f, g) {
            var v = e.lineWidths = [ 0 ], y = e.legendItems.length ? c + n.padding : 0;
            a.textAlign = "left", a.textBaseline = "top", s.each(e.legendItems, function(t, r) {
              var o = i(n, c) + c / 2 + a.measureText(t.text).width;
              v[v.length - 1] + o + n.padding >= e.width && (y += c + n.padding, v[v.length] = e.left), 
              p[r] = {
                left: 0,
                top: 0,
                width: o,
                height: c
              }, v[v.length - 1] += o + n.padding;
            }), m.height += y;
          } else {
            var b = n.padding, x = e.columnWidths = [], w = n.padding, _ = 0, S = 0, C = c + b;
            s.each(e.legendItems, function(e, t) {
              var r = i(n, c) + c / 2 + a.measureText(e.text).width;
              S + C > m.height && (w += _ + n.padding, x.push(_), _ = 0, S = 0), _ = Math.max(_, r), 
              S += C, p[t] = {
                left: 0,
                top: 0,
                width: r,
                height: c
              };
            }), w += _, x.push(_), m.width += w;
          }
          e.width = m.width, e.height = m.height;
        },
        afterFit: l,
        isHorizontal: function() {
          return "top" === this.options.position || "bottom" === this.options.position;
        },
        draw: function() {
          var e = this, t = e.options, n = t.labels, o = r.global, a = o.elements.line, l = e.width, u = e.lineWidths;
          if (t.display) {
            var c, d = e.ctx, h = s.valueOrDefault, f = h(n.fontColor, o.defaultFontColor), p = h(n.fontSize, o.defaultFontSize), m = h(n.fontStyle, o.defaultFontStyle), g = h(n.fontFamily, o.defaultFontFamily), v = s.fontString(p, m, g);
            d.textAlign = "left", d.textBaseline = "middle", d.lineWidth = .5, d.strokeStyle = f, 
            d.fillStyle = f, d.font = v;
            var y = i(n, p), b = e.legendHitBoxes, x = e.isHorizontal();
            c = x ? {
              x: e.left + (l - u[0]) / 2,
              y: e.top + n.padding,
              line: 0
            } : {
              x: e.left + n.padding,
              y: e.top + n.padding,
              line: 0
            };
            var w = p + n.padding;
            s.each(e.legendItems, function(i, r) {
              var f, m, g, v, _, S = d.measureText(i.text).width, C = y + p / 2 + S, T = c.x, k = c.y;
              x ? T + C >= l && (k = c.y += w, c.line++, T = c.x = e.left + (l - u[c.line]) / 2) : k + w > e.bottom && (T = c.x = T + e.columnWidths[c.line] + n.padding, 
              k = c.y = e.top + n.padding, c.line++), function(e, i, n) {
                if (!(isNaN(y) || y <= 0)) {
                  d.save(), d.fillStyle = h(n.fillStyle, o.defaultColor), d.lineCap = h(n.lineCap, a.borderCapStyle), 
                  d.lineDashOffset = h(n.lineDashOffset, a.borderDashOffset), d.lineJoin = h(n.lineJoin, a.borderJoinStyle), 
                  d.lineWidth = h(n.lineWidth, a.borderWidth), d.strokeStyle = h(n.strokeStyle, o.defaultColor);
                  var r = 0 === h(n.lineWidth, a.borderWidth);
                  if (d.setLineDash && d.setLineDash(h(n.lineDash, a.borderDash)), t.labels && t.labels.usePointStyle) {
                    var l = p * Math.SQRT2 / 2, u = l / Math.SQRT2, c = e + u, f = i + u;
                    s.canvas.drawPoint(d, n.pointStyle, l, c, f);
                  } else r || d.strokeRect(e, i, y, p), d.fillRect(e, i, y, p);
                  d.restore();
                }
              }(T, k, i), b[r].left = T, b[r].top = k, f = i, m = S, v = y + (g = p / 2) + T, 
              _ = k + g, d.fillText(f.text, v, _), f.hidden && (d.beginPath(), d.lineWidth = 2, 
              d.moveTo(v, _), d.lineTo(v + m, _), d.stroke()), x ? c.x += C + n.padding : c.y += w;
            });
          }
        },
        handleEvent: function(e) {
          var t = this, i = t.options, n = "mouseup" === e.type ? "click" : e.type, r = !1;
          if ("mousemove" === n) {
            if (!i.onHover) return;
          } else {
            if ("click" !== n) return;
            if (!i.onClick) return;
          }
          var o = e.x, s = e.y;
          if (o >= t.left && o <= t.right && s >= t.top && s <= t.bottom) for (var a = t.legendHitBoxes, l = 0; l < a.length; ++l) {
            var u = a[l];
            if (o >= u.left && o <= u.left + u.width && s >= u.top && s <= u.top + u.height) {
              if ("click" === n) {
                i.onClick.call(t, e.native, t.legendItems[l]), r = !0;
                break;
              }
              if ("mousemove" === n) {
                i.onHover.call(t, e.native, t.legendItems[l]), r = !0;
                break;
              }
            }
          }
          return r;
        }
      });
      t.exports = {
        id: "legend",
        _element: u,
        beforeInit: function(e) {
          var t = e.options.legend;
          t && n(e, t);
        },
        beforeUpdate: function(e) {
          var t = e.options.legend, i = e.legend;
          t ? (s.mergeIf(t, r.global.legend), i ? (a.configure(e, i, t), i.options = t) : n(e, t)) : i && (a.removeBox(e, i), 
          delete e.legend);
        },
        afterEvent: function(e, t) {
          var i = e.legend;
          i && i.handleEvent(t);
        }
      };
    }, {
      25: 25,
      26: 26,
      30: 30,
      45: 45
    } ],
    52: [ function(e, t) {
      "use strict";
      function i(e, t) {
        var i = new l({
          ctx: e.ctx,
          options: t,
          chart: e
        });
        s.configure(e, i, t), s.addBox(e, i), e.titleBlock = i;
      }
      var n = e(25), r = e(26), o = e(45), s = e(30), a = o.noop;
      n._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          lineHeight: 1.2,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        }
      });
      var l = r.extend({
        initialize: function(e) {
          o.extend(this, e), this.legendHitBoxes = [];
        },
        beforeUpdate: a,
        update: function(e, t, i) {
          var n = this;
          return n.beforeUpdate(), n.maxWidth = e, n.maxHeight = t, n.margins = i, n.beforeSetDimensions(), 
          n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), 
          n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize;
        },
        afterUpdate: a,
        beforeSetDimensions: a,
        setDimensions: function() {
          var e = this;
          e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, 
          e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, 
          e.paddingBottom = 0, e.minSize = {
            width: 0,
            height: 0
          };
        },
        afterSetDimensions: a,
        beforeBuildLabels: a,
        buildLabels: a,
        afterBuildLabels: a,
        beforeFit: a,
        fit: function() {
          var e = this, t = o.valueOrDefault, i = e.options, r = i.display, s = t(i.fontSize, n.global.defaultFontSize), a = e.minSize, l = o.isArray(i.text) ? i.text.length : 1, u = o.options.toLineHeight(i.lineHeight, s), c = r ? l * u + 2 * i.padding : 0;
          e.isHorizontal() ? (a.width = e.maxWidth, a.height = c) : (a.width = c, a.height = e.maxHeight), 
          e.width = a.width, e.height = a.height;
        },
        afterFit: a,
        isHorizontal: function() {
          var e = this.options.position;
          return "top" === e || "bottom" === e;
        },
        draw: function() {
          var e = this, t = e.ctx, i = o.valueOrDefault, r = e.options, s = n.global;
          if (r.display) {
            var a, l, u, c = i(r.fontSize, s.defaultFontSize), d = i(r.fontStyle, s.defaultFontStyle), h = i(r.fontFamily, s.defaultFontFamily), f = o.fontString(c, d, h), p = o.options.toLineHeight(r.lineHeight, c), m = p / 2 + r.padding, g = 0, v = e.top, y = e.left, b = e.bottom, x = e.right;
            t.fillStyle = i(r.fontColor, s.defaultFontColor), t.font = f, e.isHorizontal() ? (l = y + (x - y) / 2, 
            u = v + m, a = x - y) : (l = "left" === r.position ? y + m : x - m, u = v + (b - v) / 2, 
            a = b - v, g = Math.PI * ("left" === r.position ? -.5 : .5)), t.save(), t.translate(l, u), 
            t.rotate(g), t.textAlign = "center", t.textBaseline = "middle";
            var w = r.text;
            if (o.isArray(w)) for (var _ = 0, S = 0; S < w.length; ++S) t.fillText(w[S], 0, _, a), 
            _ += p; else t.fillText(w, 0, 0, a);
            t.restore();
          }
        }
      });
      t.exports = {
        id: "title",
        _element: l,
        beforeInit: function(e) {
          var t = e.options.title;
          t && i(e, t);
        },
        beforeUpdate: function(e) {
          var t = e.options.title, r = e.titleBlock;
          t ? (o.mergeIf(t, n.global.title), r ? (s.configure(e, r, t), r.options = t) : i(e, t)) : r && (s.removeBox(e, r), 
          delete e.titleBlock);
        }
      };
    }, {
      25: 25,
      26: 26,
      30: 30,
      45: 45
    } ],
    53: [ function(e, t) {
      "use strict";
      t.exports = function(e) {
        var t = e.Scale.extend({
          getLabels: function() {
            var e = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels;
          },
          determineDataLimits: function() {
            var e, t = this, i = t.getLabels();
            t.minIndex = 0, t.maxIndex = i.length - 1, void 0 !== t.options.ticks.min && (e = i.indexOf(t.options.ticks.min), 
            t.minIndex = -1 !== e ? e : t.minIndex), void 0 !== t.options.ticks.max && (e = i.indexOf(t.options.ticks.max), 
            t.maxIndex = -1 !== e ? e : t.maxIndex), t.min = i[t.minIndex], t.max = i[t.maxIndex];
          },
          buildTicks: function() {
            var e = this, t = e.getLabels();
            e.ticks = 0 === e.minIndex && e.maxIndex === t.length - 1 ? t : t.slice(e.minIndex, e.maxIndex + 1);
          },
          getLabelForIndex: function(e, t) {
            var i = this, n = i.chart.data, r = i.isHorizontal();
            return n.yLabels && !r ? i.getRightValue(n.datasets[t].data[e]) : i.ticks[e - i.minIndex];
          },
          getPixelForValue: function(e, t) {
            var i, n = this, r = n.options.offset, o = Math.max(n.maxIndex + 1 - n.minIndex - (r ? 0 : 1), 1);
            if (null != e && (i = n.isHorizontal() ? e.x : e.y), void 0 !== i || void 0 !== e && isNaN(t)) {
              e = i || e;
              var s = n.getLabels().indexOf(e);
              t = -1 !== s ? s : t;
            }
            if (n.isHorizontal()) {
              var a = n.width / o, l = a * (t - n.minIndex);
              return r && (l += a / 2), n.left + Math.round(l);
            }
            var u = n.height / o, c = u * (t - n.minIndex);
            return r && (c += u / 2), n.top + Math.round(c);
          },
          getPixelForTick: function(e) {
            return this.getPixelForValue(this.ticks[e], e + this.minIndex, null);
          },
          getValueForPixel: function(e) {
            var t = this, i = t.options.offset, n = Math.max(t._ticks.length - (i ? 0 : 1), 1), r = t.isHorizontal(), o = (r ? t.width : t.height) / n;
            return e -= r ? t.left : t.top, i && (e -= o / 2), (e <= 0 ? 0 : Math.round(e / o)) + t.minIndex;
          },
          getBasePixel: function() {
            return this.bottom;
          }
        });
        e.scaleService.registerScaleType("category", t, {
          position: "bottom"
        });
      };
    }, {} ],
    54: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(45), r = e(34);
      t.exports = function(e) {
        var t = {
          position: "left",
          ticks: {
            callback: r.formatters.linear
          }
        }, o = e.LinearScaleBase.extend({
          determineDataLimits: function() {
            function e(e) {
              return s ? e.xAxisID === t.id : e.yAxisID === t.id;
            }
            var t = this, i = t.options, r = t.chart, o = r.data.datasets, s = t.isHorizontal();
            t.min = null, t.max = null;
            var a = i.stacked;
            if (void 0 === a && n.each(o, function(t, i) {
              if (!a) {
                var n = r.getDatasetMeta(i);
                r.isDatasetVisible(i) && e(n) && void 0 !== n.stack && (a = !0);
              }
            }), i.stacked || a) {
              var l = {};
              n.each(o, function(o, s) {
                var a = r.getDatasetMeta(s), u = [ a.type, void 0 === i.stacked && void 0 === a.stack ? s : "", a.stack ].join(".");
                void 0 === l[u] && (l[u] = {
                  positiveValues: [],
                  negativeValues: []
                });
                var c = l[u].positiveValues, d = l[u].negativeValues;
                r.isDatasetVisible(s) && e(a) && n.each(o.data, function(e, n) {
                  var r = +t.getRightValue(e);
                  isNaN(r) || a.data[n].hidden || (c[n] = c[n] || 0, d[n] = d[n] || 0, i.relativePoints ? c[n] = 100 : r < 0 ? d[n] += r : c[n] += r);
                });
              }), n.each(l, function(e) {
                var i = e.positiveValues.concat(e.negativeValues), r = n.min(i), o = n.max(i);
                t.min = null === t.min ? r : Math.min(t.min, r), t.max = null === t.max ? o : Math.max(t.max, o);
              });
            } else n.each(o, function(i, o) {
              var s = r.getDatasetMeta(o);
              r.isDatasetVisible(o) && e(s) && n.each(i.data, function(e, i) {
                var n = +t.getRightValue(e);
                isNaN(n) || s.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), 
                null === t.max ? t.max = n : n > t.max && (t.max = n));
              });
            });
            t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, 
            this.handleTickRangeOptions();
          },
          getTickLimit: function() {
            var e, t = this.options.ticks;
            if (this.isHorizontal()) e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.width / 50)); else {
              var r = n.valueOrDefault(t.fontSize, i.global.defaultFontSize);
              e = Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.height / (2 * r)));
            }
            return e;
          },
          handleDirectionalChanges: function() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function(e, t) {
            return +this.getRightValue(this.chart.data.datasets[t].data[e]);
          },
          getPixelForValue: function(e) {
            var t = this, i = t.start, n = +t.getRightValue(e), r = t.end - i;
            return t.isHorizontal() ? t.left + t.width / r * (n - i) : t.bottom - t.height / r * (n - i);
          },
          getValueForPixel: function(e) {
            var t = this, i = t.isHorizontal(), n = i ? t.width : t.height, r = (i ? e - t.left : t.bottom - e) / n;
            return t.start + (t.end - t.start) * r;
          },
          getPixelForTick: function(e) {
            return this.getPixelForValue(this.ticksAsNumbers[e]);
          }
        });
        e.scaleService.registerScaleType("linear", o, t);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    } ],
    55: [ function(e, t) {
      "use strict";
      var i = e(45);
      t.exports = function(e) {
        var t = i.noop;
        e.LinearScaleBase = e.Scale.extend({
          getRightValue: function(t) {
            return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t);
          },
          handleTickRangeOptions: function() {
            var e = this, t = e.options.ticks;
            if (t.beginAtZero) {
              var n = i.sign(e.min), r = i.sign(e.max);
              n < 0 && r < 0 ? e.max = 0 : n > 0 && r > 0 && (e.min = 0);
            }
            var o = void 0 !== t.min || void 0 !== t.suggestedMin, s = void 0 !== t.max || void 0 !== t.suggestedMax;
            void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), 
            void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), 
            o !== s && e.min >= e.max && (o ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, 
            t.beginAtZero || e.min--);
          },
          getTickLimit: t,
          handleDirectionalChanges: t,
          buildTicks: function() {
            var e = this, t = e.options.ticks, n = e.getTickLimit(), r = {
              maxTicks: n = Math.max(2, n),
              min: t.min,
              max: t.max,
              stepSize: i.valueOrDefault(t.fixedStepSize, t.stepSize)
            }, o = e.ticks = function(e, t) {
              var n, r = [];
              if (e.stepSize && e.stepSize > 0) n = e.stepSize; else {
                var o = i.niceNum(t.max - t.min, !1);
                n = i.niceNum(o / (e.maxTicks - 1), !0);
              }
              var s = Math.floor(t.min / n) * n, a = Math.ceil(t.max / n) * n;
              e.min && e.max && e.stepSize && i.almostWhole((e.max - e.min) / e.stepSize, n / 1e3) && (s = e.min, 
              a = e.max);
              var l = (a - s) / n;
              l = i.almostEquals(l, Math.round(l), n / 1e3) ? Math.round(l) : Math.ceil(l);
              var u = 1;
              n < 1 && (u = Math.pow(10, n.toString().length - 2), s = Math.round(s * u) / u, 
              a = Math.round(a * u) / u), r.push(void 0 !== e.min ? e.min : s);
              for (var c = 1; c < l; ++c) r.push(Math.round((s + c * n) * u) / u);
              return r.push(void 0 !== e.max ? e.max : a), r;
            }(r, e);
            e.handleDirectionalChanges(), e.max = i.max(o), e.min = i.min(o), t.reverse ? (o.reverse(), 
            e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max);
          },
          convertTicksToLabels: function() {
            var t = this;
            t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t);
          }
        });
      };
    }, {
      45: 45
    } ],
    56: [ function(e, t) {
      "use strict";
      var i = e(45), n = e(34);
      t.exports = function(e) {
        var t = {
          position: "left",
          ticks: {
            callback: n.formatters.logarithmic
          }
        }, r = e.Scale.extend({
          determineDataLimits: function() {
            function e(e) {
              return s ? e.xAxisID === t.id : e.yAxisID === t.id;
            }
            var t = this, n = t.options, r = t.chart, o = r.data.datasets, s = t.isHorizontal();
            t.min = null, t.max = null, t.minNotZero = null;
            var a = n.stacked;
            if (void 0 === a && i.each(o, function(t, i) {
              if (!a) {
                var n = r.getDatasetMeta(i);
                r.isDatasetVisible(i) && e(n) && void 0 !== n.stack && (a = !0);
              }
            }), n.stacked || a) {
              var l = {};
              i.each(o, function(o, s) {
                var a = r.getDatasetMeta(s), u = [ a.type, void 0 === n.stacked && void 0 === a.stack ? s : "", a.stack ].join(".");
                r.isDatasetVisible(s) && e(a) && (void 0 === l[u] && (l[u] = []), i.each(o.data, function(e, i) {
                  var n = l[u], r = +t.getRightValue(e);
                  isNaN(r) || a.data[i].hidden || r < 0 || (n[i] = n[i] || 0, n[i] += r);
                }));
              }), i.each(l, function(e) {
                if (e.length > 0) {
                  var n = i.min(e), r = i.max(e);
                  t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? r : Math.max(t.max, r);
                }
              });
            } else i.each(o, function(n, o) {
              var s = r.getDatasetMeta(o);
              r.isDatasetVisible(o) && e(s) && i.each(n.data, function(e, i) {
                var n = +t.getRightValue(e);
                isNaN(n) || s.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), 
                null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n));
              });
            });
            this.handleTickRangeOptions();
          },
          handleTickRangeOptions: function() {
            var e = this, t = e.options.ticks, n = i.valueOrDefault;
            e.min = n(t.min, e.min), e.max = n(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(i.log10(e.min)) - 1), 
            e.max = Math.pow(10, Math.floor(i.log10(e.max)) + 1)) : (e.min = 1, e.max = 10)), 
            null === e.min && (e.min = Math.pow(10, Math.floor(i.log10(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(i.log10(e.min)) + 1) : 10), 
            null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(i.log10(e.max))) : e.minNotZero = 1);
          },
          buildTicks: function() {
            var e = this, t = e.options.ticks, n = !e.isHorizontal(), r = {
              min: t.min,
              max: t.max
            }, o = e.ticks = function(e, t) {
              var n, r, o = [], s = i.valueOrDefault, a = s(e.min, Math.pow(10, Math.floor(i.log10(t.min)))), l = Math.floor(i.log10(t.max)), u = Math.ceil(t.max / Math.pow(10, l));
              0 === a ? (n = Math.floor(i.log10(t.minNotZero)), r = Math.floor(t.minNotZero / Math.pow(10, n)), 
              o.push(a), a = r * Math.pow(10, n)) : (n = Math.floor(i.log10(a)), r = Math.floor(a / Math.pow(10, n)));
              for (var c = n < 0 ? Math.pow(10, Math.abs(n)) : 1; o.push(a), 10 == ++r && (r = 1, 
              c = ++n >= 0 ? 1 : c), a = Math.round(r * Math.pow(10, n) * c) / c, n < l || n === l && r < u; ) ;
              var d = s(e.max, a);
              return o.push(d), o;
            }(r, e);
            e.max = i.max(o), e.min = i.min(o), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, 
            e.end = e.max), n && o.reverse();
          },
          convertTicksToLabels: function() {
            this.tickValues = this.ticks.slice(), e.Scale.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function(e, t) {
            return +this.getRightValue(this.chart.data.datasets[t].data[e]);
          },
          getPixelForTick: function(e) {
            return this.getPixelForValue(this.tickValues[e]);
          },
          _getFirstTickValue: function(e) {
            var t = Math.floor(i.log10(e));
            return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t);
          },
          getPixelForValue: function(t) {
            var n, r, o, s, a, l = this, u = l.options.ticks.reverse, c = i.log10, d = l._getFirstTickValue(l.minNotZero), h = 0;
            return t = +l.getRightValue(t), u ? (o = l.end, s = l.start, a = -1) : (o = l.start, 
            s = l.end, a = 1), l.isHorizontal() ? (n = l.width, r = u ? l.right : l.left) : (n = l.height, 
            a *= -1, r = u ? l.top : l.bottom), t !== o && (0 === o && (n -= h = i.getValueOrDefault(l.options.ticks.fontSize, e.defaults.global.defaultFontSize), 
            o = d), 0 !== t && (h += n / (c(s) - c(o)) * (c(t) - c(o))), r += a * h), r;
          },
          getValueForPixel: function(t) {
            var n, r, o, s, a = this, l = a.options.ticks.reverse, u = i.log10, c = a._getFirstTickValue(a.minNotZero);
            if (l ? (r = a.end, o = a.start) : (r = a.start, o = a.end), a.isHorizontal() ? (n = a.width, 
            s = l ? a.right - t : t - a.left) : (n = a.height, s = l ? t - a.top : a.bottom - t), 
            s !== r) {
              if (0 === r) {
                var d = i.getValueOrDefault(a.options.ticks.fontSize, e.defaults.global.defaultFontSize);
                s -= d, n -= d, r = c;
              }
              s *= u(o) - u(r), s /= n, s = Math.pow(10, u(r) + s);
            }
            return s;
          }
        });
        e.scaleService.registerScaleType("logarithmic", r, t);
      };
    }, {
      34: 34,
      45: 45
    } ],
    57: [ function(e, t) {
      "use strict";
      var i = e(25), n = e(45), r = e(34);
      t.exports = function(e) {
        function t(e) {
          var t = e.options;
          return t.angleLines.display || t.pointLabels.display ? e.chart.data.labels.length : 0;
        }
        function o(e) {
          var t = e.options.pointLabels, i = n.valueOrDefault(t.fontSize, u.defaultFontSize), r = n.valueOrDefault(t.fontStyle, u.defaultFontStyle), o = n.valueOrDefault(t.fontFamily, u.defaultFontFamily);
          return {
            size: i,
            style: r,
            family: o,
            font: n.fontString(i, r, o)
          };
        }
        function s(e, t, i, n, r) {
          return e === n || e === r ? {
            start: t - i / 2,
            end: t + i / 2
          } : e < n || e > r ? {
            start: t - i - 5,
            end: t
          } : {
            start: t,
            end: t + i + 5
          };
        }
        function a(e, t, i, r) {
          if (n.isArray(t)) for (var o = i.y, s = 1.5 * r, a = 0; a < t.length; ++a) e.fillText(t[a], i.x, o), 
          o += s; else e.fillText(t, i.x, i.y);
        }
        function l(e) {
          return n.isNumber(e) ? e : 0;
        }
        var u = i.global, c = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1
          },
          gridLines: {
            circular: !1
          },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: r.formatters.linear
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function(e) {
              return e;
            }
          }
        }, d = e.LinearScaleBase.extend({
          setDimensions: function() {
            var e = this, t = e.options, i = t.ticks;
            e.width = e.maxWidth, e.height = e.maxHeight, e.xCenter = Math.round(e.width / 2), 
            e.yCenter = Math.round(e.height / 2);
            var r = n.min([ e.height, e.width ]), o = n.valueOrDefault(i.fontSize, u.defaultFontSize);
            e.drawingArea = t.display ? r / 2 - (o / 2 + i.backdropPaddingY) : r / 2;
          },
          determineDataLimits: function() {
            var e = this, t = e.chart, i = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY;
            n.each(t.data.datasets, function(o, s) {
              if (t.isDatasetVisible(s)) {
                var a = t.getDatasetMeta(s);
                n.each(o.data, function(t, n) {
                  var o = +e.getRightValue(t);
                  isNaN(o) || a.data[n].hidden || (i = Math.min(o, i), r = Math.max(o, r));
                });
              }
            }), e.min = i === Number.POSITIVE_INFINITY ? 0 : i, e.max = r === Number.NEGATIVE_INFINITY ? 0 : r, 
            e.handleTickRangeOptions();
          },
          getTickLimit: function() {
            var e = this.options.ticks, t = n.valueOrDefault(e.fontSize, u.defaultFontSize);
            return Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * t)));
          },
          convertTicksToLabels: function() {
            var t = this;
            e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t);
          },
          getLabelForIndex: function(e, t) {
            return +this.getRightValue(this.chart.data.datasets[t].data[e]);
          },
          fit: function() {
            var e, i;
            this.options.pointLabels.display ? function(e) {
              var i, r, a, l = o(e), u = Math.min(e.height / 2, e.width / 2), c = {
                r: e.width,
                l: 0,
                t: e.height,
                b: 0
              }, d = {};
              e.ctx.font = l.font, e._pointLabelSizes = [];
              var h, f, p, m = t(e);
              for (i = 0; i < m; i++) {
                a = e.getPointPosition(i, u), h = e.ctx, f = l.size, p = e.pointLabels[i] || "", 
                r = n.isArray(p) ? {
                  w: n.longestText(h, h.font, p),
                  h: p.length * f + 1.5 * (p.length - 1) * f
                } : {
                  w: h.measureText(p).width,
                  h: f
                }, e._pointLabelSizes[i] = r;
                var g = e.getIndexAngle(i), v = n.toDegrees(g) % 360, y = s(v, a.x, r.w, 0, 180), b = s(v, a.y, r.h, 90, 270);
                y.start < c.l && (c.l = y.start, d.l = g), y.end > c.r && (c.r = y.end, d.r = g), 
                b.start < c.t && (c.t = b.start, d.t = g), b.end > c.b && (c.b = b.end, d.b = g);
              }
              e.setReductions(u, c, d);
            }(this) : (e = this, i = Math.min(e.height / 2, e.width / 2), e.drawingArea = Math.round(i), 
            e.setCenterPoint(0, 0, 0, 0));
          },
          setReductions: function(e, t, i) {
            var n = t.l / Math.sin(i.l), r = Math.max(t.r - this.width, 0) / Math.sin(i.r), o = -t.t / Math.cos(i.t), s = -Math.max(t.b - this.height, 0) / Math.cos(i.b);
            n = l(n), r = l(r), o = l(o), s = l(s), this.drawingArea = Math.min(Math.round(e - (n + r) / 2), Math.round(e - (o + s) / 2)), 
            this.setCenterPoint(n, r, o, s);
          },
          setCenterPoint: function(e, t, i, n) {
            var r = this, o = r.width - t - r.drawingArea, s = e + r.drawingArea, a = i + r.drawingArea, l = r.height - n - r.drawingArea;
            r.xCenter = Math.round((s + o) / 2 + r.left), r.yCenter = Math.round((a + l) / 2 + r.top);
          },
          getIndexAngle: function(e) {
            return e * (2 * Math.PI / t(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
          },
          getDistanceFromCenterForValue: function(e) {
            var t = this;
            if (null === e) return 0;
            var i = t.drawingArea / (t.max - t.min);
            return t.options.ticks.reverse ? (t.max - e) * i : (e - t.min) * i;
          },
          getPointPosition: function(e, t) {
            var i = this.getIndexAngle(e) - Math.PI / 2;
            return {
              x: Math.round(Math.cos(i) * t) + this.xCenter,
              y: Math.round(Math.sin(i) * t) + this.yCenter
            };
          },
          getPointPositionForValue: function(e, t) {
            return this.getPointPosition(e, this.getDistanceFromCenterForValue(t));
          },
          getBasePosition: function() {
            var e = this.min, t = this.max;
            return this.getPointPositionForValue(0, this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0);
          },
          draw: function() {
            var e = this, i = e.options, r = i.gridLines, s = i.ticks, l = n.valueOrDefault;
            if (i.display) {
              var c = e.ctx, d = this.getIndexAngle(0), h = l(s.fontSize, u.defaultFontSize), f = l(s.fontStyle, u.defaultFontStyle), p = l(s.fontFamily, u.defaultFontFamily), m = n.fontString(h, f, p);
              n.each(e.ticks, function(i, o) {
                if (o > 0 || s.reverse) {
                  var a = e.getDistanceFromCenterForValue(e.ticksAsNumbers[o]);
                  if (r.display && 0 !== o && function(e, i, r, o) {
                    var s = e.ctx;
                    if (s.strokeStyle = n.valueAtIndexOrDefault(i.color, o - 1), s.lineWidth = n.valueAtIndexOrDefault(i.lineWidth, o - 1), 
                    e.options.gridLines.circular) s.beginPath(), s.arc(e.xCenter, e.yCenter, r, 0, 2 * Math.PI), 
                    s.closePath(), s.stroke(); else {
                      var a = t(e);
                      if (0 === a) return;
                      s.beginPath();
                      var l = e.getPointPosition(0, r);
                      s.moveTo(l.x, l.y);
                      for (var u = 1; u < a; u++) l = e.getPointPosition(u, r), s.lineTo(l.x, l.y);
                      s.closePath(), s.stroke();
                    }
                  }(e, r, a, o), s.display) {
                    var f = l(s.fontColor, u.defaultFontColor);
                    if (c.font = m, c.save(), c.translate(e.xCenter, e.yCenter), c.rotate(d), s.showLabelBackdrop) {
                      var p = c.measureText(i).width;
                      c.fillStyle = s.backdropColor, c.fillRect(-p / 2 - s.backdropPaddingX, -a - h / 2 - s.backdropPaddingY, p + 2 * s.backdropPaddingX, h + 2 * s.backdropPaddingY);
                    }
                    c.textAlign = "center", c.textBaseline = "middle", c.fillStyle = f, c.fillText(i, 0, -a), 
                    c.restore();
                  }
                }
              }), (i.angleLines.display || i.pointLabels.display) && function(e) {
                var i = e.ctx, r = e.options, s = r.angleLines, l = r.pointLabels;
                i.lineWidth = s.lineWidth, i.strokeStyle = s.color;
                var c, d, h, f, p = e.getDistanceFromCenterForValue(r.ticks.reverse ? e.min : e.max), m = o(e);
                i.textBaseline = "top";
                for (var g = t(e) - 1; g >= 0; g--) {
                  if (s.display) {
                    var v = e.getPointPosition(g, p);
                    i.beginPath(), i.moveTo(e.xCenter, e.yCenter), i.lineTo(v.x, v.y), i.stroke(), i.closePath();
                  }
                  if (l.display) {
                    var y = e.getPointPosition(g, p + 5), b = n.valueAtIndexOrDefault(l.fontColor, g, u.defaultFontColor);
                    i.font = m.font, i.fillStyle = b;
                    var x = e.getIndexAngle(g), w = n.toDegrees(x);
                    i.textAlign = 0 === (f = w) || 180 === f ? "center" : f < 180 ? "left" : "right", 
                    c = w, d = e._pointLabelSizes[g], h = y, 90 === c || 270 === c ? h.y -= d.h / 2 : (c > 270 || c < 90) && (h.y -= d.h), 
                    a(i, e.pointLabels[g] || "", y, m.size);
                  }
                }
              }(e);
            }
          }
        });
        e.scaleService.registerScaleType("radialLinear", d, c);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    } ],
    58: [ function(e, t) {
      "use strict";
      function i(e, t) {
        return e - t;
      }
      function n(e) {
        var t, i, n, r = {}, o = [];
        for (t = 0, i = e.length; t < i; ++t) r[n = e[t]] || (r[n] = !0, o.push(n));
        return o;
      }
      function r(e, t, i, n) {
        var r = function(e, t, i) {
          for (var n, r, o, s = 0, a = e.length - 1; s >= 0 && s <= a; ) {
            if (r = e[(n = s + a >> 1) - 1] || null, o = e[n], !r) return {
              lo: null,
              hi: o
            };
            if (o[t] < i) s = n + 1; else {
              if (!(r[t] > i)) return {
                lo: r,
                hi: o
              };
              a = n - 1;
            }
          }
          return {
            lo: o,
            hi: null
          };
        }(e, t, i), o = r.lo ? r.hi ? r.lo : e[e.length - 2] : e[0], s = r.lo ? r.hi ? r.hi : e[e.length - 1] : e[1], a = s[t] - o[t], l = a ? (i - o[t]) / a : 0, u = (s[n] - o[n]) * l;
        return o[n] + u;
      }
      function o(e, t) {
        var i = t.parser, n = t.parser || t.format;
        return "function" == typeof i ? i(e) : "string" == typeof e && "string" == typeof n ? u(e, n) : (e instanceof u || (e = u(e)), 
        e.isValid() ? e : "function" == typeof n ? n(e) : e);
      }
      function s(e, t) {
        if (d.isNullOrUndef(e)) return null;
        var i = t.options.time, n = o(t.getRightValue(e), i);
        return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null;
      }
      function a(e) {
        for (var t = m.indexOf(e) + 1, i = m.length; t < i; ++t) if (p[m[t]].common) return m[t];
      }
      function l(e, t, i, n) {
        var r, o = n.time, s = o.unit || function(e, t, i, n) {
          var r, o, s, a = m.length;
          for (r = m.indexOf(e); r < a - 1; ++r) if (s = (o = p[m[r]]).steps ? o.steps[o.steps.length - 1] : f, 
          o.common && Math.ceil((i - t) / (s * o.size)) <= n) return m[r];
          return m[a - 1];
        }(o.minUnit, e, t, i), l = a(s), c = d.valueOrDefault(o.stepSize, o.unitStepSize), h = "week" === s && o.isoWeekday, g = n.ticks.major.enabled, v = p[s], y = u(e), b = u(t), x = [];
        for (c || (c = function(e, t, i, n) {
          var r, o, s, a = t - e, l = p[i], u = l.size, c = l.steps;
          if (!c) return Math.ceil(a / (n * u));
          for (r = 0, o = c.length; r < o && (s = c[r], !(Math.ceil(a / (u * s)) <= n)); ++r) ;
          return s;
        }(e, t, s, i)), h && (y = y.isoWeekday(h), b = b.isoWeekday(h)), y = y.startOf(h ? "day" : s), 
        (b = b.startOf(h ? "day" : s)) < t && b.add(1, s), r = u(y), g && l && !h && !o.round && (r.startOf(l), 
        r.add(~~((y - r) / (v.size * c)) * c, s)); r < b; r.add(c, s)) x.push(+r);
        return x.push(+r), x;
      }
      var u = e(1);
      u = "function" == typeof u ? u : window.moment;
      var c = e(25), d = e(45), h = Number.MIN_SAFE_INTEGER || -9007199254740991, f = Number.MAX_SAFE_INTEGER || 9007199254740991, p = {
        millisecond: {
          common: !0,
          size: 1,
          steps: [ 1, 2, 5, 10, 20, 50, 100, 250, 500 ]
        },
        second: {
          common: !0,
          size: 1e3,
          steps: [ 1, 2, 5, 10, 30 ]
        },
        minute: {
          common: !0,
          size: 6e4,
          steps: [ 1, 2, 5, 10, 30 ]
        },
        hour: {
          common: !0,
          size: 36e5,
          steps: [ 1, 2, 3, 6, 12 ]
        },
        day: {
          common: !0,
          size: 864e5,
          steps: [ 1, 2, 5 ]
        },
        week: {
          common: !1,
          size: 6048e5,
          steps: [ 1, 2, 3, 4 ]
        },
        month: {
          common: !0,
          size: 2628e6,
          steps: [ 1, 2, 3 ]
        },
        quarter: {
          common: !1,
          size: 7884e6,
          steps: [ 1, 2, 3, 4 ]
        },
        year: {
          common: !0,
          size: 3154e7
        }
      }, m = Object.keys(p);
      t.exports = function(e) {
        var t = e.Scale.extend({
          initialize: function() {
            if (!u) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this);
          },
          update: function() {
            var t = this.options;
            return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), 
            e.Scale.prototype.update.apply(this, arguments);
          },
          getRightValue: function(t) {
            return t && void 0 !== t.t && (t = t.t), e.Scale.prototype.getRightValue.call(this, t);
          },
          determineDataLimits: function() {
            var e, t, r, o, a, l, c = this, p = c.chart, m = c.options.time, g = m.unit || "day", v = f, y = h, b = [], x = [], w = [];
            for (e = 0, r = p.data.labels.length; e < r; ++e) w.push(s(p.data.labels[e], c));
            for (e = 0, r = (p.data.datasets || []).length; e < r; ++e) if (p.isDatasetVisible(e)) if (a = p.data.datasets[e].data, 
            d.isObject(a[0])) for (x[e] = [], t = 0, o = a.length; t < o; ++t) l = s(a[t], c), 
            b.push(l), x[e][t] = l; else b.push.apply(b, w), x[e] = w.slice(0); else x[e] = [];
            w.length && (w = n(w).sort(i), v = Math.min(v, w[0]), y = Math.max(y, w[w.length - 1])), 
            b.length && (b = n(b).sort(i), v = Math.min(v, b[0]), y = Math.max(y, b[b.length - 1])), 
            v = s(m.min, c) || v, y = s(m.max, c) || y, v = v === f ? +u().startOf(g) : v, y = y === h ? +u().endOf(g) + 1 : y, 
            c.min = Math.min(v, y), c.max = Math.max(v + 1, y), c._horizontal = c.isHorizontal(), 
            c._table = [], c._timestamps = {
              data: b,
              datasets: x,
              labels: w
            };
          },
          buildTicks: function() {
            var e, t, i, n, c, d, h, f, g, v, y, b, x = this, w = x.min, _ = x.max, S = x.options, C = S.time, T = [], k = [];
            switch (S.ticks.source) {
             case "data":
              T = x._timestamps.data;
              break;

             case "labels":
              T = x._timestamps.labels;
              break;

             case "auto":
             default:
              T = l(w, _, x.getLabelCapacity(w), S);
            }
            for ("ticks" === S.bounds && T.length && (w = T[0], _ = T[T.length - 1]), w = s(C.min, x) || w, 
            _ = s(C.max, x) || _, e = 0, t = T.length; e < t; ++e) (i = T[e]) >= w && i <= _ && k.push(i);
            return x.min = w, x.max = _, x._unit = C.unit || function(e, t, i, n) {
              var r, o, s = u.duration(u(n).diff(u(i)));
              for (r = m.length - 1; r >= m.indexOf(t); r--) if (o = m[r], p[o].common && s.as(o) >= e.length) return o;
              return m[t ? m.indexOf(t) : 0];
            }(k, C.minUnit, x.min, x.max), x._majorUnit = a(x._unit), x._table = function(e, t, i) {
              if ("linear" === S.distribution || !e.length) return [ {
                time: t,
                pos: 0
              }, {
                time: i,
                pos: 1
              } ];
              var n, r, o, s, a, l = [], u = [ t ];
              for (n = 0, r = e.length; n < r; ++n) (s = e[n]) > t && s < i && u.push(s);
              for (u.push(i), n = 0, r = u.length; n < r; ++n) a = u[n + 1], o = u[n - 1], s = u[n], 
              void 0 !== o && void 0 !== a && Math.round((a + o) / 2) === s || l.push({
                time: s,
                pos: n / (r - 1)
              });
              return l;
            }(x._timestamps.data, w, _), x._offsets = (n = x._table, c = k, d = w, h = _, y = 0, 
            b = 0, (f = S).offset && c.length && (f.time.min || (g = c.length > 1 ? c[1] : h, 
            v = c[0], y = (r(n, "time", g, "pos") - r(n, "time", v, "pos")) / 2), f.time.max || (g = c[c.length - 1], 
            v = c.length > 1 ? c[c.length - 2] : d, b = (r(n, "time", g, "pos") - r(n, "time", v, "pos")) / 2)), 
            {
              left: y,
              right: b
            }), x._labelFormat = function(e, t) {
              var i, n, r, s = e.length;
              for (i = 0; i < s; i++) {
                if (0 !== (n = o(e[i], t)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                0 === n.second() && 0 === n.minute() && 0 === n.hour() || (r = !0);
              }
              return r ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY";
            }(x._timestamps.data, C), function(e, t) {
              var i, n, r, o, s = [];
              for (i = 0, n = e.length; i < n; ++i) r = e[i], o = !!t && r === +u(r).startOf(t), 
              s.push({
                value: r,
                major: o
              });
              return s;
            }(k, x._majorUnit);
          },
          getLabelForIndex: function(e, t) {
            var i = this.chart.data, n = this.options.time, r = i.labels && e < i.labels.length ? i.labels[e] : "", s = i.datasets[t].data[e];
            return d.isObject(s) && (r = this.getRightValue(s)), n.tooltipFormat ? o(r, n).format(n.tooltipFormat) : "string" == typeof r ? r : o(r, n).format(this._labelFormat);
          },
          tickFormatFunction: function(e, t, i, n) {
            var r = this.options, o = e.valueOf(), s = r.time.displayFormats, a = s[this._unit], l = this._majorUnit, u = s[l], c = e.clone().startOf(l).valueOf(), h = r.ticks.major, f = h.enabled && l && u && o === c, p = e.format(n || (f ? u : a)), m = f ? h : r.ticks.minor, g = d.valueOrDefault(m.callback, m.userCallback);
            return g ? g(p, t, i) : p;
          },
          convertTicksToLabels: function(e) {
            var t, i, n = [];
            for (t = 0, i = e.length; t < i; ++t) n.push(this.tickFormatFunction(u(e[t].value), t, e));
            return n;
          },
          getPixelForOffset: function(e) {
            var t = this, i = t._horizontal ? t.width : t.height, n = t._horizontal ? t.left : t.top, o = r(t._table, "time", e, "pos");
            return n + i * (t._offsets.left + o) / (t._offsets.left + 1 + t._offsets.right);
          },
          getPixelForValue: function(e, t, i) {
            var n = null;
            if (void 0 !== t && void 0 !== i && (n = this._timestamps.datasets[i][t]), null === n && (n = s(e, this)), 
            null !== n) return this.getPixelForOffset(n);
          },
          getPixelForTick: function(e) {
            var t = this.getTicks();
            return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null;
          },
          getValueForPixel: function(e) {
            var t = this, i = t._horizontal ? t.width : t.height, n = t._horizontal ? t.left : t.top, o = (i ? (e - n) / i : 0) * (t._offsets.left + 1 + t._offsets.left) - t._offsets.right, s = r(t._table, "pos", o, "time");
            return u(s);
          },
          getLabelWidth: function(e) {
            var t = this.options.ticks, i = this.ctx.measureText(e).width, n = d.toRadians(t.maxRotation), r = Math.cos(n), o = Math.sin(n);
            return i * r + d.valueOrDefault(t.fontSize, c.global.defaultFontSize) * o;
          },
          getLabelCapacity: function(e) {
            var t = this, i = t.options.time.displayFormats.millisecond, n = t.tickFormatFunction(u(e), 0, [], i), r = t.getLabelWidth(n), o = t.isHorizontal() ? t.width : t.height, s = Math.floor(o / r);
            return s > 0 ? s : 1;
          }
        });
        e.scaleService.registerScaleType("time", t, {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm a",
              hour: "hA",
              day: "MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
              enabled: !1
            }
          }
        });
      };
    }, {
      1: 1,
      25: 25,
      45: 45
    } ]
  }, {}, [ 7 ])(7);
}), function(e, t) {
  "function" == typeof define && define.amd ? define("Chartist", [], function() {
    return e.Chartist = t();
  }) : "object" == typeof exports ? module.exports = t() : e.Chartist = t();
}(this, function() {
  var e = {
    version: "0.10.0"
  };
  return function(e, t, i) {
    "use strict";
    i.namespaces = {
      svg: "http://www.w3.org/2000/svg",
      xmlns: "http://www.w3.org/2000/xmlns/",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      ct: "http://gionkunz.github.com/chartist-js/ct"
    }, i.noop = function(e) {
      return e;
    }, i.alphaNumerate = function(e) {
      return String.fromCharCode(97 + e % 26);
    }, i.extend = function(e) {
      var t, n, r;
      for (e = e || {}, t = 1; t < arguments.length; t++) for (var o in n = arguments[t]) "object" != typeof (r = n[o]) || null === r || r instanceof Array ? e[o] = r : e[o] = i.extend(e[o], r);
      return e;
    }, i.replaceAll = function(e, t, i) {
      return e.replace(new RegExp(t, "g"), i);
    }, i.ensureUnit = function(e, t) {
      return "number" == typeof e && (e += t), e;
    }, i.quantity = function(e) {
      if ("string" == typeof e) {
        var t = /^(\d+)\s*(.*)$/g.exec(e);
        return {
          value: +t[1],
          unit: t[2] || undefined
        };
      }
      return {
        value: e
      };
    }, i.querySelector = function(e) {
      return e instanceof Node ? e : t.querySelector(e);
    }, i.times = function(e) {
      return Array.apply(null, new Array(e));
    }, i.sum = function(e, t) {
      return e + (t || 0);
    }, i.mapMultiply = function(e) {
      return function(t) {
        return t * e;
      };
    }, i.mapAdd = function(e) {
      return function(t) {
        return t + e;
      };
    }, i.serialMap = function(e, t) {
      var n = [], r = Math.max.apply(null, e.map(function(e) {
        return e.length;
      }));
      return i.times(r).forEach(function(i, r) {
        var o = e.map(function(e) {
          return e[r];
        });
        n[r] = t.apply(null, o);
      }), n;
    }, i.roundWithPrecision = function(e, t) {
      var n = Math.pow(10, t || i.precision);
      return Math.round(e * n) / n;
    }, i.precision = 8, i.escapingMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }, i.serialize = function(e) {
      return null === e || e === undefined ? e : ("number" == typeof e ? e = "" + e : "object" == typeof e && (e = JSON.stringify({
        data: e
      })), Object.keys(i.escapingMap).reduce(function(e, t) {
        return i.replaceAll(e, t, i.escapingMap[t]);
      }, e));
    }, i.deserialize = function(e) {
      if ("string" != typeof e) return e;
      e = Object.keys(i.escapingMap).reduce(function(e, t) {
        return i.replaceAll(e, i.escapingMap[t], t);
      }, e);
      try {
        e = (e = JSON.parse(e)).data !== undefined ? e.data : e;
      } catch (t) {}
      return e;
    }, i.createSvg = function(e, t, n, r) {
      var o;
      return t = t || "100%", n = n || "100%", Array.prototype.slice.call(e.querySelectorAll("svg")).filter(function(e) {
        return e.getAttributeNS(i.namespaces.xmlns, "ct");
      }).forEach(function(t) {
        e.removeChild(t);
      }), o = new i.Svg("svg").attr({
        width: t,
        height: n
      }).addClass(r).attr({
        style: "width: " + t + "; height: " + n + ";"
      }), e.appendChild(o._node), o;
    }, i.normalizeData = function(e, t, n) {
      var r, o = {
        raw: e,
        normalized: {}
      };
      return o.normalized.series = i.getDataArray({
        series: e.series || []
      }, t, n), r = o.normalized.series.every(function(e) {
        return e instanceof Array;
      }) ? Math.max.apply(null, o.normalized.series.map(function(e) {
        return e.length;
      })) : o.normalized.series.length, o.normalized.labels = (e.labels || []).slice(), 
      Array.prototype.push.apply(o.normalized.labels, i.times(Math.max(0, r - o.normalized.labels.length)).map(function() {
        return "";
      })), t && i.reverseData(o.normalized), o;
    }, i.safeHasProperty = function(e, t) {
      return null !== e && "object" == typeof e && e.hasOwnProperty(t);
    }, i.isDataHoleValue = function(e) {
      return null === e || e === undefined || "number" == typeof e && isNaN(e);
    }, i.reverseData = function(e) {
      e.labels.reverse(), e.series.reverse();
      for (var t = 0; t < e.series.length; t++) "object" == typeof e.series[t] && e.series[t].data !== undefined ? e.series[t].data.reverse() : e.series[t] instanceof Array && e.series[t].reverse();
    }, i.getDataArray = function(e, t, n) {
      function r(e) {
        if (i.safeHasProperty(e, "value")) return r(e.value);
        if (i.safeHasProperty(e, "data")) return r(e.data);
        if (e instanceof Array) return e.map(r);
        if (i.isDataHoleValue(e)) return undefined;
        if (n) {
          var t = {};
          return "string" == typeof n ? t[n] = i.getNumberOrUndefined(e) : t.y = i.getNumberOrUndefined(e), 
          t.x = e.hasOwnProperty("x") ? i.getNumberOrUndefined(e.x) : t.x, t.y = e.hasOwnProperty("y") ? i.getNumberOrUndefined(e.y) : t.y, 
          t;
        }
        return i.getNumberOrUndefined(e);
      }
      return e.series.map(r);
    }, i.normalizePadding = function(e, t) {
      return t = t || 0, "number" == typeof e ? {
        top: e,
        right: e,
        bottom: e,
        left: e
      } : {
        top: "number" == typeof e.top ? e.top : t,
        right: "number" == typeof e.right ? e.right : t,
        bottom: "number" == typeof e.bottom ? e.bottom : t,
        left: "number" == typeof e.left ? e.left : t
      };
    }, i.getMetaData = function(e, t) {
      var i = e.data ? e.data[t] : e[t];
      return i ? i.meta : undefined;
    }, i.orderOfMagnitude = function(e) {
      return Math.floor(Math.log(Math.abs(e)) / Math.LN10);
    }, i.projectLength = function(e, t, i) {
      return t / i.range * e;
    }, i.getAvailableHeight = function(e, t) {
      return Math.max((i.quantity(t.height).value || e.height()) - (t.chartPadding.top + t.chartPadding.bottom) - t.axisX.offset, 0);
    }, i.getHighLow = function(e, t, n) {
      function r(e) {
        if (e === undefined) return undefined;
        if (e instanceof Array) for (var t = 0; t < e.length; t++) r(e[t]); else {
          var i = n ? +e[n] : +e;
          s && i > o.high && (o.high = i), a && i < o.low && (o.low = i);
        }
      }
      var o = {
        high: (t = i.extend({}, t, n ? t["axis" + n.toUpperCase()] : {})).high === undefined ? -Number.MAX_VALUE : +t.high,
        low: t.low === undefined ? Number.MAX_VALUE : +t.low
      }, s = t.high === undefined, a = t.low === undefined;
      return (s || a) && r(e), (t.referenceValue || 0 === t.referenceValue) && (o.high = Math.max(t.referenceValue, o.high), 
      o.low = Math.min(t.referenceValue, o.low)), o.high <= o.low && (0 === o.low ? o.high = 1 : o.low < 0 ? o.high = 0 : o.high > 0 ? o.low = 0 : (o.high = 1, 
      o.low = 0)), o;
    }, i.isNumeric = function(e) {
      return null !== e && isFinite(e);
    }, i.isFalseyButZero = function(e) {
      return !e && 0 !== e;
    }, i.getNumberOrUndefined = function(e) {
      return i.isNumeric(e) ? +e : undefined;
    }, i.isMultiValue = function(e) {
      return "object" == typeof e && ("x" in e || "y" in e);
    }, i.getMultiValue = function(e, t) {
      return i.isMultiValue(e) ? i.getNumberOrUndefined(e[t || "y"]) : i.getNumberOrUndefined(e);
    }, i.rho = function(e) {
      function t(e, i) {
        return e % i == 0 ? i : t(i, e % i);
      }
      function i(e) {
        return e * e + 1;
      }
      if (1 === e) return e;
      var n, r = 2, o = 2;
      if (e % 2 == 0) return 2;
      do {
        r = i(r) % e, o = i(i(o)) % e, n = t(Math.abs(r - o), e);
      } while (1 === n);
      return n;
    }, i.getBounds = function(e, t, n, r) {
      function o(e, t) {
        return e === (e += t) && (e *= 1 + (t > 0 ? f : -f)), e;
      }
      var s, a, l, u = 0, c = {
        high: t.high,
        low: t.low
      };
      c.valueRange = c.high - c.low, c.oom = i.orderOfMagnitude(c.valueRange), c.step = Math.pow(10, c.oom), 
      c.min = Math.floor(c.low / c.step) * c.step, c.max = Math.ceil(c.high / c.step) * c.step, 
      c.range = c.max - c.min, c.numberOfSteps = Math.round(c.range / c.step);
      var d = i.projectLength(e, c.step, c) < n, h = r ? i.rho(c.range) : 0;
      if (r && i.projectLength(e, 1, c) >= n) c.step = 1; else if (r && h < c.step && i.projectLength(e, h, c) >= n) c.step = h; else for (;;) {
        if (d && i.projectLength(e, c.step, c) <= n) c.step *= 2; else {
          if (d || !(i.projectLength(e, c.step / 2, c) >= n)) break;
          if (c.step /= 2, r && c.step % 1 != 0) {
            c.step *= 2;
            break;
          }
        }
        if (u++ > 1e3) throw new Error("Exceeded maximum number of iterations while optimizing scale step!");
      }
      var f = 2.221e-16;
      for (c.step = Math.max(c.step, f), a = c.min, l = c.max; a + c.step <= c.low; ) a = o(a, c.step);
      for (;l - c.step >= c.high; ) l = o(l, -c.step);
      c.min = a, c.max = l, c.range = c.max - c.min;
      var p = [];
      for (s = c.min; s <= c.max; s = o(s, c.step)) {
        var m = i.roundWithPrecision(s);
        m !== p[p.length - 1] && p.push(m);
      }
      return c.values = p, c;
    }, i.polarToCartesian = function(e, t, i, n) {
      var r = (n - 90) * Math.PI / 180;
      return {
        x: e + i * Math.cos(r),
        y: t + i * Math.sin(r)
      };
    }, i.createChartRect = function(e, t, n) {
      var r = !(!t.axisX && !t.axisY), o = r ? t.axisY.offset : 0, s = r ? t.axisX.offset : 0, a = e.width() || i.quantity(t.width).value || 0, l = e.height() || i.quantity(t.height).value || 0, u = i.normalizePadding(t.chartPadding, n);
      a = Math.max(a, o + u.left + u.right), l = Math.max(l, s + u.top + u.bottom);
      var c = {
        padding: u,
        width: function() {
          return this.x2 - this.x1;
        },
        height: function() {
          return this.y1 - this.y2;
        }
      };
      return r ? ("start" === t.axisX.position ? (c.y2 = u.top + s, c.y1 = Math.max(l - u.bottom, c.y2 + 1)) : (c.y2 = u.top, 
      c.y1 = Math.max(l - u.bottom - s, c.y2 + 1)), "start" === t.axisY.position ? (c.x1 = u.left + o, 
      c.x2 = Math.max(a - u.right, c.x1 + 1)) : (c.x1 = u.left, c.x2 = Math.max(a - u.right - o, c.x1 + 1))) : (c.x1 = u.left, 
      c.x2 = Math.max(a - u.right, c.x1 + 1), c.y2 = u.top, c.y1 = Math.max(l - u.bottom, c.y2 + 1)), 
      c;
    }, i.createGrid = function(e, t, n, r, o, s, a, l) {
      var u = {};
      u[n.units.pos + "1"] = e, u[n.units.pos + "2"] = e, u[n.counterUnits.pos + "1"] = r, 
      u[n.counterUnits.pos + "2"] = r + o;
      var c = s.elem("line", u, a.join(" "));
      l.emit("draw", i.extend({
        type: "grid",
        axis: n,
        index: t,
        group: s,
        element: c
      }, u));
    }, i.createGridBackground = function(e, t, i, n) {
      var r = e.elem("rect", {
        x: t.x1,
        y: t.y2,
        width: t.width(),
        height: t.height()
      }, i, !0);
      n.emit("draw", {
        type: "gridBackground",
        group: e,
        element: r
      });
    }, i.createLabel = function(e, t, n, r, o, s, a, l, u, c, d) {
      var h, f = {};
      if (f[o.units.pos] = e + a[o.units.pos], f[o.counterUnits.pos] = a[o.counterUnits.pos], 
      f[o.units.len] = t, f[o.counterUnits.len] = Math.max(0, s - 10), c) {
        var p = '<span class="' + u.join(" ") + '" style="' + o.units.len + ": " + Math.round(f[o.units.len]) + "px; " + o.counterUnits.len + ": " + Math.round(f[o.counterUnits.len]) + 'px">' + r[n] + "</span>";
        h = l.foreignObject(p, i.extend({
          style: "overflow: visible;"
        }, f));
      } else h = l.elem("text", f, u.join(" ")).text(r[n]);
      d.emit("draw", i.extend({
        type: "label",
        axis: o,
        index: n,
        group: l,
        element: h,
        text: r[n]
      }, f));
    }, i.getSeriesOption = function(e, t, i) {
      if (e.name && t.series && t.series[e.name]) {
        var n = t.series[e.name];
        return n.hasOwnProperty(i) ? n[i] : t[i];
      }
      return t[i];
    }, i.optionsProvider = function(t, n, r) {
      function o(t) {
        var o = a;
        if (a = i.extend({}, u), n) for (l = 0; l < n.length; l++) {
          e.matchMedia(n[l][0]).matches && (a = i.extend(a, n[l][1]));
        }
        r && t && r.emit("optionsChanged", {
          previousOptions: o,
          currentOptions: a
        });
      }
      function s() {
        c.forEach(function(e) {
          e.removeListener(o);
        });
      }
      var a, l, u = i.extend({}, t), c = [];
      if (!e.matchMedia) throw "window.matchMedia not found! Make sure you're using a polyfill.";
      if (n) for (l = 0; l < n.length; l++) {
        var d = e.matchMedia(n[l][0]);
        d.addListener(o), c.push(d);
      }
      return o(), {
        removeMediaQueryListeners: s,
        getCurrentOptions: function() {
          return i.extend({}, a);
        }
      };
    }, i.splitIntoSegments = function(e, t, n) {
      var r = {
        increasingX: !1,
        fillHoles: !1
      };
      n = i.extend({}, r, n);
      for (var o = [], s = !0, a = 0; a < e.length; a += 2) i.getMultiValue(t[a / 2].value) === undefined ? n.fillHoles || (s = !0) : (n.increasingX && a >= 2 && e[a] <= e[a - 2] && (s = !0), 
      s && (o.push({
        pathCoordinates: [],
        valueData: []
      }), s = !1), o[o.length - 1].pathCoordinates.push(e[a], e[a + 1]), o[o.length - 1].valueData.push(t[a / 2]));
      return o;
    };
  }(window, document, e), function(e, t, i) {
    "use strict";
    i.Interpolation = {}, i.Interpolation.none = function(e) {
      var t = {
        fillHoles: !1
      };
      return e = i.extend({}, t, e), function(t, n) {
        for (var r = new i.Svg.Path(), o = !0, s = 0; s < t.length; s += 2) {
          var a = t[s], l = t[s + 1], u = n[s / 2];
          i.getMultiValue(u.value) !== undefined ? (o ? r.move(a, l, !1, u) : r.line(a, l, !1, u), 
          o = !1) : e.fillHoles || (o = !0);
        }
        return r;
      };
    }, i.Interpolation.simple = function(e) {
      var t = {
        divisor: 2,
        fillHoles: !1
      };
      e = i.extend({}, t, e);
      var n = 1 / Math.max(1, e.divisor);
      return function(t, r) {
        for (var o, s, a, l = new i.Svg.Path(), u = 0; u < t.length; u += 2) {
          var c = t[u], d = t[u + 1], h = (c - o) * n, f = r[u / 2];
          f.value !== undefined ? (a === undefined ? l.move(c, d, !1, f) : l.curve(o + h, s, c - h, d, c, d, !1, f), 
          o = c, s = d, a = f) : e.fillHoles || (o = c = a = undefined);
        }
        return l;
      };
    }, i.Interpolation.cardinal = function(e) {
      var t = {
        tension: 1,
        fillHoles: !1
      };
      e = i.extend({}, t, e);
      var n = Math.min(1, Math.max(0, e.tension)), r = 1 - n;
      return function o(t, s) {
        var a = i.splitIntoSegments(t, s, {
          fillHoles: e.fillHoles
        });
        if (a.length) {
          if (a.length > 1) {
            var l = [];
            return a.forEach(function(e) {
              l.push(o(e.pathCoordinates, e.valueData));
            }), i.Svg.Path.join(l);
          }
          if (t = a[0].pathCoordinates, s = a[0].valueData, t.length <= 4) return i.Interpolation.none()(t, s);
          for (var u, c = new i.Svg.Path().move(t[0], t[1], !1, s[0]), d = 0, h = t.length; h - 2 * !u > d; d += 2) {
            var f = [ {
              x: +t[d - 2],
              y: +t[d - 1]
            }, {
              x: +t[d],
              y: +t[d + 1]
            }, {
              x: +t[d + 2],
              y: +t[d + 3]
            }, {
              x: +t[d + 4],
              y: +t[d + 5]
            } ];
            u ? d ? h - 4 === d ? f[3] = {
              x: +t[0],
              y: +t[1]
            } : h - 2 === d && (f[2] = {
              x: +t[0],
              y: +t[1]
            }, f[3] = {
              x: +t[2],
              y: +t[3]
            }) : f[0] = {
              x: +t[h - 2],
              y: +t[h - 1]
            } : h - 4 === d ? f[3] = f[2] : d || (f[0] = {
              x: +t[d],
              y: +t[d + 1]
            }), c.curve(n * (-f[0].x + 6 * f[1].x + f[2].x) / 6 + r * f[2].x, n * (-f[0].y + 6 * f[1].y + f[2].y) / 6 + r * f[2].y, n * (f[1].x + 6 * f[2].x - f[3].x) / 6 + r * f[2].x, n * (f[1].y + 6 * f[2].y - f[3].y) / 6 + r * f[2].y, f[2].x, f[2].y, !1, s[(d + 2) / 2]);
          }
          return c;
        }
        return i.Interpolation.none()([]);
      };
    }, i.Interpolation.monotoneCubic = function(e) {
      var t = {
        fillHoles: !1
      };
      return e = i.extend({}, t, e), function n(t, r) {
        var o = i.splitIntoSegments(t, r, {
          fillHoles: e.fillHoles,
          increasingX: !0
        });
        if (o.length) {
          if (o.length > 1) {
            var s = [];
            return o.forEach(function(e) {
              s.push(n(e.pathCoordinates, e.valueData));
            }), i.Svg.Path.join(s);
          }
          if (t = o[0].pathCoordinates, r = o[0].valueData, t.length <= 4) return i.Interpolation.none()(t, r);
          var a, l, u = [], c = [], d = t.length / 2, h = [], f = [], p = [], m = [];
          for (a = 0; a < d; a++) u[a] = t[2 * a], c[a] = t[2 * a + 1];
          for (a = 0; a < d - 1; a++) p[a] = c[a + 1] - c[a], m[a] = u[a + 1] - u[a], f[a] = p[a] / m[a];
          for (h[0] = f[0], h[d - 1] = f[d - 2], a = 1; a < d - 1; a++) 0 === f[a] || 0 === f[a - 1] || f[a - 1] > 0 != f[a] > 0 ? h[a] = 0 : (h[a] = 3 * (m[a - 1] + m[a]) / ((2 * m[a] + m[a - 1]) / f[a - 1] + (m[a] + 2 * m[a - 1]) / f[a]), 
          isFinite(h[a]) || (h[a] = 0));
          for (l = new i.Svg.Path().move(u[0], c[0], !1, r[0]), a = 0; a < d - 1; a++) l.curve(u[a] + m[a] / 3, c[a] + h[a] * m[a] / 3, u[a + 1] - m[a] / 3, c[a + 1] - h[a + 1] * m[a] / 3, u[a + 1], c[a + 1], !1, r[a + 1]);
          return l;
        }
        return i.Interpolation.none()([]);
      };
    }, i.Interpolation.step = function(e) {
      var t = {
        postpone: !0,
        fillHoles: !1
      };
      return e = i.extend({}, t, e), function(t, n) {
        for (var r, o, s, a = new i.Svg.Path(), l = 0; l < t.length; l += 2) {
          var u = t[l], c = t[l + 1], d = n[l / 2];
          d.value !== undefined ? (s === undefined ? a.move(u, c, !1, d) : (e.postpone ? a.line(u, o, !1, s) : a.line(r, c, !1, d), 
          a.line(u, c, !1, d)), r = u, o = c, s = d) : e.fillHoles || (r = o = s = undefined);
        }
        return a;
      };
    };
  }(window, document, e), function(e, t, i) {
    "use strict";
    i.EventEmitter = function() {
      function e(e, t) {
        n[e] = n[e] || [], n[e].push(t);
      }
      function t(e, t) {
        n[e] && (t ? (n[e].splice(n[e].indexOf(t), 1), 0 === n[e].length && delete n[e]) : delete n[e]);
      }
      function i(e, t) {
        n[e] && n[e].forEach(function(e) {
          e(t);
        }), n["*"] && n["*"].forEach(function(i) {
          i(e, t);
        });
      }
      var n = [];
      return {
        addEventHandler: e,
        removeEventHandler: t,
        emit: i
      };
    };
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e) {
      var t = [];
      if (e.length) for (var i = 0; i < e.length; i++) t.push(e[i]);
      return t;
    }
    function r(e, t) {
      var n = t || this.prototype || i.Class, r = Object.create(n);
      i.Class.cloneDefinitions(r, e);
      var o = function() {
        var e, t = r.constructor || function() {};
        return e = this === i ? Object.create(r) : this, t.apply(e, Array.prototype.slice.call(arguments, 0)), 
        e;
      };
      return o.prototype = r, o["super"] = n, o.extend = this.extend, o;
    }
    function o() {
      var e = n(arguments), t = e[0];
      return e.splice(1, e.length - 1).forEach(function(e) {
        Object.getOwnPropertyNames(e).forEach(function(i) {
          delete t[i], Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i));
        });
      }), t;
    }
    i.Class = {
      extend: r,
      cloneDefinitions: o
    };
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, n) {
      return e && (this.data = e || {}, this.data.labels = this.data.labels || [], this.data.series = this.data.series || [], 
      this.eventEmitter.emit("data", {
        type: "update",
        data: this.data
      })), t && (this.options = i.extend({}, n ? this.options : this.defaultOptions, t), 
      this.initializeTimeoutId || (this.optionsProvider.removeMediaQueryListeners(), this.optionsProvider = i.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter))), 
      this.initializeTimeoutId || this.createChart(this.optionsProvider.getCurrentOptions()), 
      this;
    }
    function r() {
      return this.initializeTimeoutId ? e.clearTimeout(this.initializeTimeoutId) : (e.removeEventListener("resize", this.resizeListener), 
      this.optionsProvider.removeMediaQueryListeners()), this;
    }
    function o(e, t) {
      return this.eventEmitter.addEventHandler(e, t), this;
    }
    function s(e, t) {
      return this.eventEmitter.removeEventHandler(e, t), this;
    }
    function a() {
      e.addEventListener("resize", this.resizeListener), this.optionsProvider = i.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter), 
      this.eventEmitter.addEventHandler("optionsChanged", function() {
        this.update();
      }.bind(this)), this.options.plugins && this.options.plugins.forEach(function(e) {
        e instanceof Array ? e[0](this, e[1]) : e(this);
      }.bind(this)), this.eventEmitter.emit("data", {
        type: "initial",
        data: this.data
      }), this.createChart(this.optionsProvider.getCurrentOptions()), this.initializeTimeoutId = undefined;
    }
    function l(e, t, n, r, o) {
      this.container = i.querySelector(e), this.data = t || {}, this.data.labels = this.data.labels || [], 
      this.data.series = this.data.series || [], this.defaultOptions = n, this.options = r, 
      this.responsiveOptions = o, this.eventEmitter = i.EventEmitter(), this.supportsForeignObject = i.Svg.isSupported("Extensibility"), 
      this.supportsAnimations = i.Svg.isSupported("AnimationEventsAttribute"), this.resizeListener = function() {
        this.update();
      }.bind(this), this.container && (this.container.__chartist__ && this.container.__chartist__.detach(), 
      this.container.__chartist__ = this), this.initializeTimeoutId = setTimeout(a.bind(this), 0);
    }
    i.Base = i.Class.extend({
      constructor: l,
      optionsProvider: undefined,
      container: undefined,
      svg: undefined,
      eventEmitter: undefined,
      createChart: function() {
        throw new Error("Base chart type can't be instantiated!");
      },
      update: n,
      detach: r,
      on: o,
      off: s,
      version: i.version,
      supportsForeignObject: !1
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, n, r, o, s) {
      e instanceof Element ? this._node = e : (this._node = t.createElementNS(i.namespaces.svg, e), 
      "svg" === e && this.attr({
        "xmlns:ct": i.namespaces.ct
      })), n && this.attr(n), r && this.addClass(r), o && (s && o._node.firstChild ? o._node.insertBefore(this._node, o._node.firstChild) : o._node.appendChild(this._node));
    }
    function r(e, t) {
      return "string" == typeof e ? t ? this._node.getAttributeNS(t, e) : this._node.getAttribute(e) : (Object.keys(e).forEach(function(t) {
        if (e[t] !== undefined) if (-1 !== t.indexOf(":")) {
          var n = t.split(":");
          this._node.setAttributeNS(i.namespaces[n[0]], t, e[t]);
        } else this._node.setAttribute(t, e[t]);
      }.bind(this)), this);
    }
    function o(e, t, n, r) {
      return new i.Svg(e, t, n, this, r);
    }
    function s() {
      return this._node.parentNode instanceof SVGElement ? new i.Svg(this._node.parentNode) : null;
    }
    function a() {
      for (var e = this._node; "svg" !== e.nodeName; ) e = e.parentNode;
      return new i.Svg(e);
    }
    function l(e) {
      var t = this._node.querySelector(e);
      return t ? new i.Svg(t) : null;
    }
    function u(e) {
      var t = this._node.querySelectorAll(e);
      return t.length ? new i.Svg.List(t) : null;
    }
    function c() {
      return this._node;
    }
    function d(e, n, r, o) {
      if ("string" == typeof e) {
        var s = t.createElement("div");
        s.innerHTML = e, e = s.firstChild;
      }
      e.setAttribute("xmlns", i.namespaces.xmlns);
      var a = this.elem("foreignObject", n, r, o);
      return a._node.appendChild(e), a;
    }
    function h(e) {
      return this._node.appendChild(t.createTextNode(e)), this;
    }
    function f() {
      for (;this._node.firstChild; ) this._node.removeChild(this._node.firstChild);
      return this;
    }
    function p() {
      return this._node.parentNode.removeChild(this._node), this.parent();
    }
    function m(e) {
      return this._node.parentNode.replaceChild(e._node, this._node), e;
    }
    function g(e, t) {
      return t && this._node.firstChild ? this._node.insertBefore(e._node, this._node.firstChild) : this._node.appendChild(e._node), 
      this;
    }
    function v() {
      return this._node.getAttribute("class") ? this._node.getAttribute("class").trim().split(/\s+/) : [];
    }
    function y(e) {
      return this._node.setAttribute("class", this.classes(this._node).concat(e.trim().split(/\s+/)).filter(function(e, t, i) {
        return i.indexOf(e) === t;
      }).join(" ")), this;
    }
    function b(e) {
      var t = e.trim().split(/\s+/);
      return this._node.setAttribute("class", this.classes(this._node).filter(function(e) {
        return -1 === t.indexOf(e);
      }).join(" ")), this;
    }
    function x() {
      return this._node.setAttribute("class", ""), this;
    }
    function w() {
      return this._node.getBoundingClientRect().height;
    }
    function _() {
      return this._node.getBoundingClientRect().width;
    }
    function S(e, t, n) {
      return t === undefined && (t = !0), Object.keys(e).forEach(function(r) {
        function o(e, t) {
          var o, s, a, l = {};
          e.easing && (a = e.easing instanceof Array ? e.easing : i.Svg.Easing[e.easing], 
          delete e.easing), e.begin = i.ensureUnit(e.begin, "ms"), e.dur = i.ensureUnit(e.dur, "ms"), 
          a && (e.calcMode = "spline", e.keySplines = a.join(" "), e.keyTimes = "0;1"), t && (e.fill = "freeze", 
          l[r] = e.from, this.attr(l), s = i.quantity(e.begin || 0).value, e.begin = "indefinite"), 
          o = this.elem("animate", i.extend({
            attributeName: r
          }, e)), t && setTimeout(function() {
            try {
              o._node.beginElement();
            } catch (t) {
              l[r] = e.to, this.attr(l), o.remove();
            }
          }.bind(this), s), n && o._node.addEventListener("beginEvent", function() {
            n.emit("animationBegin", {
              element: this,
              animate: o._node,
              params: e
            });
          }.bind(this)), o._node.addEventListener("endEvent", function() {
            n && n.emit("animationEnd", {
              element: this,
              animate: o._node,
              params: e
            }), t && (l[r] = e.to, this.attr(l), o.remove());
          }.bind(this));
        }
        e[r] instanceof Array ? e[r].forEach(function(e) {
          o.bind(this)(e, !1);
        }.bind(this)) : o.bind(this)(e[r], t);
      }.bind(this)), this;
    }
    function C(e) {
      var t = this;
      this.svgElements = [];
      for (var n = 0; n < e.length; n++) this.svgElements.push(new i.Svg(e[n]));
      Object.keys(i.Svg.prototype).filter(function(e) {
        return -1 === [ "constructor", "parent", "querySelector", "querySelectorAll", "replace", "append", "classes", "height", "width" ].indexOf(e);
      }).forEach(function(e) {
        t[e] = function() {
          var n = Array.prototype.slice.call(arguments, 0);
          return t.svgElements.forEach(function(t) {
            i.Svg.prototype[e].apply(t, n);
          }), t;
        };
      });
    }
    i.Svg = i.Class.extend({
      constructor: n,
      attr: r,
      elem: o,
      parent: s,
      root: a,
      querySelector: l,
      querySelectorAll: u,
      getNode: c,
      foreignObject: d,
      text: h,
      empty: f,
      remove: p,
      replace: m,
      append: g,
      classes: v,
      addClass: y,
      removeClass: b,
      removeAllClasses: x,
      height: w,
      width: _,
      animate: S
    }), i.Svg.isSupported = function(e) {
      return t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#" + e, "1.1");
    };
    var T = {
      easeInSine: [ .47, 0, .745, .715 ],
      easeOutSine: [ .39, .575, .565, 1 ],
      easeInOutSine: [ .445, .05, .55, .95 ],
      easeInQuad: [ .55, .085, .68, .53 ],
      easeOutQuad: [ .25, .46, .45, .94 ],
      easeInOutQuad: [ .455, .03, .515, .955 ],
      easeInCubic: [ .55, .055, .675, .19 ],
      easeOutCubic: [ .215, .61, .355, 1 ],
      easeInOutCubic: [ .645, .045, .355, 1 ],
      easeInQuart: [ .895, .03, .685, .22 ],
      easeOutQuart: [ .165, .84, .44, 1 ],
      easeInOutQuart: [ .77, 0, .175, 1 ],
      easeInQuint: [ .755, .05, .855, .06 ],
      easeOutQuint: [ .23, 1, .32, 1 ],
      easeInOutQuint: [ .86, 0, .07, 1 ],
      easeInExpo: [ .95, .05, .795, .035 ],
      easeOutExpo: [ .19, 1, .22, 1 ],
      easeInOutExpo: [ 1, 0, 0, 1 ],
      easeInCirc: [ .6, .04, .98, .335 ],
      easeOutCirc: [ .075, .82, .165, 1 ],
      easeInOutCirc: [ .785, .135, .15, .86 ],
      easeInBack: [ .6, -.28, .735, .045 ],
      easeOutBack: [ .175, .885, .32, 1.275 ],
      easeInOutBack: [ .68, -.55, .265, 1.55 ]
    };
    i.Svg.Easing = T, i.Svg.List = i.Class.extend({
      constructor: C
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, n, r, o, s) {
      var a = i.extend({
        command: o ? e.toLowerCase() : e.toUpperCase()
      }, t, s ? {
        data: s
      } : {});
      n.splice(r, 0, a);
    }
    function r(e, t) {
      e.forEach(function(i, n) {
        x[i.command.toLowerCase()].forEach(function(r, o) {
          t(i, r, n, o, e);
        });
      });
    }
    function o(e, t) {
      this.pathElements = [], this.pos = 0, this.close = e, this.options = i.extend({}, w, t);
    }
    function s(e) {
      return e !== undefined ? (this.pos = Math.max(0, Math.min(this.pathElements.length, e)), 
      this) : this.pos;
    }
    function a(e) {
      return this.pathElements.splice(this.pos, e), this;
    }
    function l(e, t, i, r) {
      return n("M", {
        x: +e,
        y: +t
      }, this.pathElements, this.pos++, i, r), this;
    }
    function u(e, t, i, r) {
      return n("L", {
        x: +e,
        y: +t
      }, this.pathElements, this.pos++, i, r), this;
    }
    function c(e, t, i, r, o, s, a, l) {
      return n("C", {
        x1: +e,
        y1: +t,
        x2: +i,
        y2: +r,
        x: +o,
        y: +s
      }, this.pathElements, this.pos++, a, l), this;
    }
    function d(e, t, i, r, o, s, a, l, u) {
      return n("A", {
        rx: +e,
        ry: +t,
        xAr: +i,
        lAf: +r,
        sf: +o,
        x: +s,
        y: +a
      }, this.pathElements, this.pos++, l, u), this;
    }
    function h(e) {
      var t = e.replace(/([A-Za-z])([0-9])/g, "$1 $2").replace(/([0-9])([A-Za-z])/g, "$1 $2").split(/[\s,]+/).reduce(function(e, t) {
        return t.match(/[A-Za-z]/) && e.push([]), e[e.length - 1].push(t), e;
      }, []);
      "Z" === t[t.length - 1][0].toUpperCase() && t.pop();
      var n = t.map(function(e) {
        var t = e.shift(), n = x[t.toLowerCase()];
        return i.extend({
          command: t
        }, n.reduce(function(t, i, n) {
          return t[i] = +e[n], t;
        }, {}));
      }), r = [ this.pos, 0 ];
      return Array.prototype.push.apply(r, n), Array.prototype.splice.apply(this.pathElements, r), 
      this.pos += n.length, this;
    }
    function f() {
      var e = Math.pow(10, this.options.accuracy);
      return this.pathElements.reduce(function(t, i) {
        var n = x[i.command.toLowerCase()].map(function(t) {
          return this.options.accuracy ? Math.round(i[t] * e) / e : i[t];
        }.bind(this));
        return t + i.command + n.join(",");
      }.bind(this), "") + (this.close ? "Z" : "");
    }
    function p(e, t) {
      return r(this.pathElements, function(i, n) {
        i[n] *= "x" === n[0] ? e : t;
      }), this;
    }
    function m(e, t) {
      return r(this.pathElements, function(i, n) {
        i[n] += "x" === n[0] ? e : t;
      }), this;
    }
    function g(e) {
      return r(this.pathElements, function(t, i, n, r, o) {
        var s = e(t, i, n, r, o);
        (s || 0 === s) && (t[i] = s);
      }), this;
    }
    function v(e) {
      var t = new i.Svg.Path(e || this.close);
      return t.pos = this.pos, t.pathElements = this.pathElements.slice().map(function(e) {
        return i.extend({}, e);
      }), t.options = i.extend({}, this.options), t;
    }
    function y(e) {
      var t = [ new i.Svg.Path() ];
      return this.pathElements.forEach(function(n) {
        n.command === e.toUpperCase() && 0 !== t[t.length - 1].pathElements.length && t.push(new i.Svg.Path()), 
        t[t.length - 1].pathElements.push(n);
      }), t;
    }
    function b(e, t, n) {
      for (var r = new i.Svg.Path(t, n), o = 0; o < e.length; o++) for (var s = e[o], a = 0; a < s.pathElements.length; a++) r.pathElements.push(s.pathElements[a]);
      return r;
    }
    var x = {
      m: [ "x", "y" ],
      l: [ "x", "y" ],
      c: [ "x1", "y1", "x2", "y2", "x", "y" ],
      a: [ "rx", "ry", "xAr", "lAf", "sf", "x", "y" ]
    }, w = {
      accuracy: 3
    };
    i.Svg.Path = i.Class.extend({
      constructor: o,
      position: s,
      remove: a,
      move: l,
      line: u,
      curve: c,
      arc: d,
      scale: p,
      translate: m,
      transform: g,
      parse: h,
      stringify: f,
      clone: v,
      splitByCommand: y
    }), i.Svg.Path.elementDescriptions = x, i.Svg.Path.join = b;
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, i, n) {
      this.units = e, this.counterUnits = e === o.x ? o.y : o.x, this.chartRect = t, this.axisLength = t[e.rectEnd] - t[e.rectStart], 
      this.gridOffset = t[e.rectOffset], this.ticks = i, this.options = n;
    }
    function r(e, t, n, r, o) {
      var s = r["axis" + this.units.pos.toUpperCase()], a = this.ticks.map(this.projectValue.bind(this)), l = this.ticks.map(s.labelInterpolationFnc);
      a.forEach(function(u, c) {
        var d, h = {
          x: 0,
          y: 0
        };
        d = a[c + 1] ? a[c + 1] - u : Math.max(this.axisLength - u, 30), i.isFalseyButZero(l[c]) && "" !== l[c] || ("x" === this.units.pos ? (u = this.chartRect.x1 + u, 
        h.x = r.axisX.labelOffset.x, "start" === r.axisX.position ? h.y = this.chartRect.padding.top + r.axisX.labelOffset.y + (n ? 5 : 20) : h.y = this.chartRect.y1 + r.axisX.labelOffset.y + (n ? 5 : 20)) : (u = this.chartRect.y1 - u, 
        h.y = r.axisY.labelOffset.y - (n ? d : 0), "start" === r.axisY.position ? h.x = n ? this.chartRect.padding.left + r.axisY.labelOffset.x : this.chartRect.x1 - 10 : h.x = this.chartRect.x2 + r.axisY.labelOffset.x + 10), 
        s.showGrid && i.createGrid(u, c, this, this.gridOffset, this.chartRect[this.counterUnits.len](), e, [ r.classNames.grid, r.classNames[this.units.dir] ], o), 
        s.showLabel && i.createLabel(u, d, c, l, this, s.offset, h, t, [ r.classNames.label, r.classNames[this.units.dir], "start" === s.position ? r.classNames[s.position] : r.classNames.end ], n, o));
      }.bind(this));
    }
    var o = {
      x: {
        pos: "x",
        len: "width",
        dir: "horizontal",
        rectStart: "x1",
        rectEnd: "x2",
        rectOffset: "y2"
      },
      y: {
        pos: "y",
        len: "height",
        dir: "vertical",
        rectStart: "y2",
        rectEnd: "y1",
        rectOffset: "x1"
      }
    };
    i.Axis = i.Class.extend({
      constructor: n,
      createGridAndLabels: r,
      projectValue: function() {
        throw new Error("Base axis can't be instantiated!");
      }
    }), i.Axis.units = o;
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, n, r) {
      var o = r.highLow || i.getHighLow(t, r, e.pos);
      this.bounds = i.getBounds(n[e.rectEnd] - n[e.rectStart], o, r.scaleMinSpace || 20, r.onlyInteger), 
      this.range = {
        min: this.bounds.min,
        max: this.bounds.max
      }, i.AutoScaleAxis["super"].constructor.call(this, e, n, this.bounds.values, r);
    }
    function r(e) {
      return this.axisLength * (+i.getMultiValue(e, this.units.pos) - this.bounds.min) / this.bounds.range;
    }
    i.AutoScaleAxis = i.Axis.extend({
      constructor: n,
      projectValue: r
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, n, r) {
      var o = r.highLow || i.getHighLow(t, r, e.pos);
      this.divisor = r.divisor || 1, this.ticks = r.ticks || i.times(this.divisor).map(function(e, t) {
        return o.low + (o.high - o.low) / this.divisor * t;
      }.bind(this)), this.ticks.sort(function(e, t) {
        return e - t;
      }), this.range = {
        min: o.low,
        max: o.high
      }, i.FixedScaleAxis["super"].constructor.call(this, e, n, this.ticks, r), this.stepLength = this.axisLength / this.divisor;
    }
    function r(e) {
      return this.axisLength * (+i.getMultiValue(e, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
    }
    i.FixedScaleAxis = i.Axis.extend({
      constructor: n,
      projectValue: r
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, n, r) {
      i.StepAxis["super"].constructor.call(this, e, n, r.ticks, r);
      var o = Math.max(1, r.ticks.length - (r.stretch ? 1 : 0));
      this.stepLength = this.axisLength / o;
    }
    function r(e, t) {
      return this.stepLength * t;
    }
    i.StepAxis = i.Axis.extend({
      constructor: n,
      projectValue: r
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e) {
      var t = i.normalizeData(this.data, e.reverseData, !0);
      this.svg = i.createSvg(this.container, e.width, e.height, e.classNames.chart);
      var n, r, s = this.svg.elem("g").addClass(e.classNames.gridGroup), a = this.svg.elem("g"), l = this.svg.elem("g").addClass(e.classNames.labelGroup), u = i.createChartRect(this.svg, e, o.padding);
      n = e.axisX.type === undefined ? new i.StepAxis(i.Axis.units.x, t.normalized.series, u, i.extend({}, e.axisX, {
        ticks: t.normalized.labels,
        stretch: e.fullWidth
      })) : e.axisX.type.call(i, i.Axis.units.x, t.normalized.series, u, e.axisX), r = e.axisY.type === undefined ? new i.AutoScaleAxis(i.Axis.units.y, t.normalized.series, u, i.extend({}, e.axisY, {
        high: i.isNumeric(e.high) ? e.high : e.axisY.high,
        low: i.isNumeric(e.low) ? e.low : e.axisY.low
      })) : e.axisY.type.call(i, i.Axis.units.y, t.normalized.series, u, e.axisY), n.createGridAndLabels(s, l, this.supportsForeignObject, e, this.eventEmitter), 
      r.createGridAndLabels(s, l, this.supportsForeignObject, e, this.eventEmitter), e.showGridBackground && i.createGridBackground(s, u, e.classNames.gridBackground, this.eventEmitter), 
      t.raw.series.forEach(function(o, s) {
        var l = a.elem("g");
        l.attr({
          "ct:series-name": o.name,
          "ct:meta": i.serialize(o.meta)
        }), l.addClass([ e.classNames.series, o.className || e.classNames.series + "-" + i.alphaNumerate(s) ].join(" "));
        var c = [], d = [];
        t.normalized.series[s].forEach(function(e, a) {
          var l = {
            x: u.x1 + n.projectValue(e, a, t.normalized.series[s]),
            y: u.y1 - r.projectValue(e, a, t.normalized.series[s])
          };
          c.push(l.x, l.y), d.push({
            value: e,
            valueIndex: a,
            meta: i.getMetaData(o, a)
          });
        }.bind(this));
        var h = {
          lineSmooth: i.getSeriesOption(o, e, "lineSmooth"),
          showPoint: i.getSeriesOption(o, e, "showPoint"),
          showLine: i.getSeriesOption(o, e, "showLine"),
          showArea: i.getSeriesOption(o, e, "showArea"),
          areaBase: i.getSeriesOption(o, e, "areaBase")
        }, f = ("function" == typeof h.lineSmooth ? h.lineSmooth : h.lineSmooth ? i.Interpolation.monotoneCubic() : i.Interpolation.none())(c, d);
        if (h.showPoint && f.pathElements.forEach(function(t) {
          var a = l.elem("line", {
            x1: t.x,
            y1: t.y,
            x2: t.x + .01,
            y2: t.y
          }, e.classNames.point).attr({
            "ct:value": [ t.data.value.x, t.data.value.y ].filter(i.isNumeric).join(","),
            "ct:meta": i.serialize(t.data.meta)
          });
          this.eventEmitter.emit("draw", {
            type: "point",
            value: t.data.value,
            index: t.data.valueIndex,
            meta: t.data.meta,
            series: o,
            seriesIndex: s,
            axisX: n,
            axisY: r,
            group: l,
            element: a,
            x: t.x,
            y: t.y
          });
        }.bind(this)), h.showLine) {
          var p = l.elem("path", {
            d: f.stringify()
          }, e.classNames.line, !0);
          this.eventEmitter.emit("draw", {
            type: "line",
            values: t.normalized.series[s],
            path: f.clone(),
            chartRect: u,
            index: s,
            series: o,
            seriesIndex: s,
            seriesMeta: o.meta,
            axisX: n,
            axisY: r,
            group: l,
            element: p
          });
        }
        if (h.showArea && r.range) {
          var m = Math.max(Math.min(h.areaBase, r.range.max), r.range.min), g = u.y1 - r.projectValue(m);
          f.splitByCommand("M").filter(function(e) {
            return e.pathElements.length > 1;
          }).map(function(e) {
            var t = e.pathElements[0], i = e.pathElements[e.pathElements.length - 1];
            return e.clone(!0).position(0).remove(1).move(t.x, g).line(t.x, t.y).position(e.pathElements.length + 1).line(i.x, g);
          }).forEach(function(i) {
            var a = l.elem("path", {
              d: i.stringify()
            }, e.classNames.area, !0);
            this.eventEmitter.emit("draw", {
              type: "area",
              values: t.normalized.series[s],
              path: i.clone(),
              series: o,
              seriesIndex: s,
              axisX: n,
              axisY: r,
              chartRect: u,
              index: s,
              group: l,
              element: a
            });
          }.bind(this));
        }
      }.bind(this)), this.eventEmitter.emit("created", {
        bounds: r.bounds,
        chartRect: u,
        axisX: n,
        axisY: r,
        svg: this.svg,
        options: e
      });
    }
    function r(e, t, n, r) {
      i.Line["super"].constructor.call(this, e, t, o, i.extend({}, o, n), r);
    }
    var o = {
      axisX: {
        offset: 30,
        position: "end",
        labelOffset: {
          x: 0,
          y: 0
        },
        showLabel: !0,
        showGrid: !0,
        labelInterpolationFnc: i.noop,
        type: undefined
      },
      axisY: {
        offset: 40,
        position: "start",
        labelOffset: {
          x: 0,
          y: 0
        },
        showLabel: !0,
        showGrid: !0,
        labelInterpolationFnc: i.noop,
        type: undefined,
        scaleMinSpace: 20,
        onlyInteger: !1
      },
      width: undefined,
      height: undefined,
      showLine: !0,
      showPoint: !0,
      showArea: !1,
      areaBase: 0,
      lineSmooth: !0,
      showGridBackground: !1,
      low: undefined,
      high: undefined,
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      fullWidth: !1,
      reverseData: !1,
      classNames: {
        chart: "ct-chart-line",
        label: "ct-label",
        labelGroup: "ct-labels",
        series: "ct-series",
        line: "ct-line",
        point: "ct-point",
        area: "ct-area",
        grid: "ct-grid",
        gridGroup: "ct-grids",
        gridBackground: "ct-grid-background",
        vertical: "ct-vertical",
        horizontal: "ct-horizontal",
        start: "ct-start",
        end: "ct-end"
      }
    };
    i.Line = i.Base.extend({
      constructor: r,
      createChart: n
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e) {
      var t, n;
      e.distributeSeries ? (t = i.normalizeData(this.data, e.reverseData, e.horizontalBars ? "x" : "y")).normalized.series = t.normalized.series.map(function(e) {
        return [ e ];
      }) : t = i.normalizeData(this.data, e.reverseData, e.horizontalBars ? "x" : "y"), 
      this.svg = i.createSvg(this.container, e.width, e.height, e.classNames.chart + (e.horizontalBars ? " " + e.classNames.horizontalBars : ""));
      var r = this.svg.elem("g").addClass(e.classNames.gridGroup), s = this.svg.elem("g"), a = this.svg.elem("g").addClass(e.classNames.labelGroup);
      if (e.stackBars && 0 !== t.normalized.series.length) {
        var l = i.serialMap(t.normalized.series, function() {
          return Array.prototype.slice.call(arguments).map(function(e) {
            return e;
          }).reduce(function(e, t) {
            return {
              x: e.x + (t && t.x) || 0,
              y: e.y + (t && t.y) || 0
            };
          }, {
            x: 0,
            y: 0
          });
        });
        n = i.getHighLow([ l ], e, e.horizontalBars ? "x" : "y");
      } else n = i.getHighLow(t.normalized.series, e, e.horizontalBars ? "x" : "y");
      n.high = +e.high || (0 === e.high ? 0 : n.high), n.low = +e.low || (0 === e.low ? 0 : n.low);
      var u, c, d, h, f, p = i.createChartRect(this.svg, e, o.padding);
      c = e.distributeSeries && e.stackBars ? t.normalized.labels.slice(0, 1) : t.normalized.labels, 
      e.horizontalBars ? (u = h = e.axisX.type === undefined ? new i.AutoScaleAxis(i.Axis.units.x, t.normalized.series, p, i.extend({}, e.axisX, {
        highLow: n,
        referenceValue: 0
      })) : e.axisX.type.call(i, i.Axis.units.x, t.normalized.series, p, i.extend({}, e.axisX, {
        highLow: n,
        referenceValue: 0
      })), d = f = e.axisY.type === undefined ? new i.StepAxis(i.Axis.units.y, t.normalized.series, p, {
        ticks: c
      }) : e.axisY.type.call(i, i.Axis.units.y, t.normalized.series, p, e.axisY)) : (d = h = e.axisX.type === undefined ? new i.StepAxis(i.Axis.units.x, t.normalized.series, p, {
        ticks: c
      }) : e.axisX.type.call(i, i.Axis.units.x, t.normalized.series, p, e.axisX), u = f = e.axisY.type === undefined ? new i.AutoScaleAxis(i.Axis.units.y, t.normalized.series, p, i.extend({}, e.axisY, {
        highLow: n,
        referenceValue: 0
      })) : e.axisY.type.call(i, i.Axis.units.y, t.normalized.series, p, i.extend({}, e.axisY, {
        highLow: n,
        referenceValue: 0
      })));
      var m = e.horizontalBars ? p.x1 + u.projectValue(0) : p.y1 - u.projectValue(0), g = [];
      d.createGridAndLabels(r, a, this.supportsForeignObject, e, this.eventEmitter), u.createGridAndLabels(r, a, this.supportsForeignObject, e, this.eventEmitter), 
      e.showGridBackground && i.createGridBackground(r, p, e.classNames.gridBackground, this.eventEmitter), 
      t.raw.series.forEach(function(n, r) {
        var o, a, l = r - (t.raw.series.length - 1) / 2;
        o = e.distributeSeries && !e.stackBars ? d.axisLength / t.normalized.series.length / 2 : e.distributeSeries && e.stackBars ? d.axisLength / 2 : d.axisLength / t.normalized.series[r].length / 2, 
        (a = s.elem("g")).attr({
          "ct:series-name": n.name,
          "ct:meta": i.serialize(n.meta)
        }), a.addClass([ e.classNames.series, n.className || e.classNames.series + "-" + i.alphaNumerate(r) ].join(" ")), 
        t.normalized.series[r].forEach(function(s, c) {
          var v, y, b, x;
          if (x = e.distributeSeries && !e.stackBars ? r : e.distributeSeries && e.stackBars ? 0 : c, 
          v = e.horizontalBars ? {
            x: p.x1 + u.projectValue(s && s.x ? s.x : 0, c, t.normalized.series[r]),
            y: p.y1 - d.projectValue(s && s.y ? s.y : 0, x, t.normalized.series[r])
          } : {
            x: p.x1 + d.projectValue(s && s.x ? s.x : 0, x, t.normalized.series[r]),
            y: p.y1 - u.projectValue(s && s.y ? s.y : 0, c, t.normalized.series[r])
          }, d instanceof i.StepAxis && (d.options.stretch || (v[d.units.pos] += o * (e.horizontalBars ? -1 : 1)), 
          v[d.units.pos] += e.stackBars || e.distributeSeries ? 0 : l * e.seriesBarDistance * (e.horizontalBars ? -1 : 1)), 
          b = g[c] || m, g[c] = b - (m - v[d.counterUnits.pos]), s !== undefined) {
            var w = {};
            w[d.units.pos + "1"] = v[d.units.pos], w[d.units.pos + "2"] = v[d.units.pos], !e.stackBars || "accumulate" !== e.stackMode && e.stackMode ? (w[d.counterUnits.pos + "1"] = m, 
            w[d.counterUnits.pos + "2"] = v[d.counterUnits.pos]) : (w[d.counterUnits.pos + "1"] = b, 
            w[d.counterUnits.pos + "2"] = g[c]), w.x1 = Math.min(Math.max(w.x1, p.x1), p.x2), 
            w.x2 = Math.min(Math.max(w.x2, p.x1), p.x2), w.y1 = Math.min(Math.max(w.y1, p.y2), p.y1), 
            w.y2 = Math.min(Math.max(w.y2, p.y2), p.y1);
            var _ = i.getMetaData(n, c);
            y = a.elem("line", w, e.classNames.bar).attr({
              "ct:value": [ s.x, s.y ].filter(i.isNumeric).join(","),
              "ct:meta": i.serialize(_)
            }), this.eventEmitter.emit("draw", i.extend({
              type: "bar",
              value: s,
              index: c,
              meta: _,
              series: n,
              seriesIndex: r,
              axisX: h,
              axisY: f,
              chartRect: p,
              group: a,
              element: y
            }, w));
          }
        }.bind(this));
      }.bind(this)), this.eventEmitter.emit("created", {
        bounds: u.bounds,
        chartRect: p,
        axisX: h,
        axisY: f,
        svg: this.svg,
        options: e
      });
    }
    function r(e, t, n, r) {
      i.Bar["super"].constructor.call(this, e, t, o, i.extend({}, o, n), r);
    }
    var o = {
      axisX: {
        offset: 30,
        position: "end",
        labelOffset: {
          x: 0,
          y: 0
        },
        showLabel: !0,
        showGrid: !0,
        labelInterpolationFnc: i.noop,
        scaleMinSpace: 30,
        onlyInteger: !1
      },
      axisY: {
        offset: 40,
        position: "start",
        labelOffset: {
          x: 0,
          y: 0
        },
        showLabel: !0,
        showGrid: !0,
        labelInterpolationFnc: i.noop,
        scaleMinSpace: 20,
        onlyInteger: !1
      },
      width: undefined,
      height: undefined,
      high: undefined,
      low: undefined,
      referenceValue: 0,
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      seriesBarDistance: 15,
      stackBars: !1,
      stackMode: "accumulate",
      horizontalBars: !1,
      distributeSeries: !1,
      reverseData: !1,
      showGridBackground: !1,
      classNames: {
        chart: "ct-chart-bar",
        horizontalBars: "ct-horizontal-bars",
        label: "ct-label",
        labelGroup: "ct-labels",
        series: "ct-series",
        bar: "ct-bar",
        grid: "ct-grid",
        gridGroup: "ct-grids",
        gridBackground: "ct-grid-background",
        vertical: "ct-vertical",
        horizontal: "ct-horizontal",
        start: "ct-start",
        end: "ct-end"
      }
    };
    i.Bar = i.Base.extend({
      constructor: r,
      createChart: n
    });
  }(window, document, e), function(e, t, i) {
    "use strict";
    function n(e, t, i) {
      var n = t.x > e.x;
      return n && "explode" === i || !n && "implode" === i ? "start" : n && "implode" === i || !n && "explode" === i ? "end" : "middle";
    }
    function r(e) {
      var t, r, o, a, l, u = i.normalizeData(this.data), c = [], d = e.startAngle;
      this.svg = i.createSvg(this.container, e.width, e.height, e.donut ? e.classNames.chartDonut : e.classNames.chartPie), 
      r = i.createChartRect(this.svg, e, s.padding), o = Math.min(r.width() / 2, r.height() / 2), 
      l = e.total || u.normalized.series.reduce(function(e, t) {
        return e + t;
      }, 0);
      var h = i.quantity(e.donutWidth);
      "%" === h.unit && (h.value *= o / 100), o -= e.donut ? h.value / 2 : 0, a = "outside" === e.labelPosition || e.donut ? o : "center" === e.labelPosition ? 0 : o / 2, 
      a += e.labelOffset;
      var f = {
        x: r.x1 + r.width() / 2,
        y: r.y2 + r.height() / 2
      }, p = 1 === u.raw.series.filter(function(e) {
        return e.hasOwnProperty("value") ? 0 !== e.value : 0 !== e;
      }).length;
      u.raw.series.forEach(function(e, t) {
        c[t] = this.svg.elem("g", null, null);
      }.bind(this)), e.showLabel && (t = this.svg.elem("g", null, null)), u.raw.series.forEach(function(r, s) {
        if (0 !== u.normalized.series[s] || !e.ignoreEmptyValues) {
          c[s].attr({
            "ct:series-name": r.name
          }), c[s].addClass([ e.classNames.series, r.className || e.classNames.series + "-" + i.alphaNumerate(s) ].join(" "));
          var m = l > 0 ? d + u.normalized.series[s] / l * 360 : 0, g = Math.max(0, d - (0 === s || p ? 0 : .2));
          m - g >= 359.99 && (m = g + 359.99);
          var v = i.polarToCartesian(f.x, f.y, o, g), y = i.polarToCartesian(f.x, f.y, o, m), b = new i.Svg.Path(!e.donut).move(y.x, y.y).arc(o, o, 0, m - d > 180, 0, v.x, v.y);
          e.donut || b.line(f.x, f.y);
          var x = c[s].elem("path", {
            d: b.stringify()
          }, e.donut ? e.classNames.sliceDonut : e.classNames.slicePie);
          if (x.attr({
            "ct:value": u.normalized.series[s],
            "ct:meta": i.serialize(r.meta)
          }), e.donut && x.attr({
            style: "stroke-width: " + h.value + "px"
          }), this.eventEmitter.emit("draw", {
            type: "slice",
            value: u.normalized.series[s],
            totalDataSum: l,
            index: s,
            meta: r.meta,
            series: r,
            group: c[s],
            element: x,
            path: b.clone(),
            center: f,
            radius: o,
            startAngle: d,
            endAngle: m
          }), e.showLabel) {
            var w, _;
            w = 1 === u.raw.series.length ? {
              x: f.x,
              y: f.y
            } : i.polarToCartesian(f.x, f.y, a, d + (m - d) / 2), _ = u.normalized.labels && !i.isFalseyButZero(u.normalized.labels[s]) ? u.normalized.labels[s] : u.normalized.series[s];
            var S = e.labelInterpolationFnc(_, s);
            if (S || 0 === S) {
              var C = t.elem("text", {
                dx: w.x,
                dy: w.y,
                "text-anchor": n(f, w, e.labelDirection)
              }, e.classNames.label).text("" + S);
              this.eventEmitter.emit("draw", {
                type: "label",
                index: s,
                group: t,
                element: C,
                text: "" + S,
                x: w.x,
                y: w.y
              });
            }
          }
          d = m;
        }
      }.bind(this)), this.eventEmitter.emit("created", {
        chartRect: r,
        svg: this.svg,
        options: e
      });
    }
    function o(e, t, n, r) {
      i.Pie["super"].constructor.call(this, e, t, s, i.extend({}, s, n), r);
    }
    var s = {
      width: undefined,
      height: undefined,
      chartPadding: 5,
      classNames: {
        chartPie: "ct-chart-pie",
        chartDonut: "ct-chart-donut",
        series: "ct-series",
        slicePie: "ct-slice-pie",
        sliceDonut: "ct-slice-donut",
        label: "ct-label"
      },
      startAngle: 0,
      total: undefined,
      donut: !1,
      donutWidth: 60,
      showLabel: !0,
      labelOffset: 0,
      labelPosition: "inside",
      labelInterpolationFnc: i.noop,
      labelDirection: "neutral",
      reverseData: !1,
      ignoreEmptyValues: !1
    };
    i.Pie = i.Base.extend({
      constructor: o,
      createChart: r,
      determineAnchorPosition: n
    });
  }(window, document, e), e;
}), function(e, t) {
  "function" == typeof define && define.amd ? define([ "chartist" ], function(i) {
    return e.returnExportsGlobal = t(i);
  }) : "object" == typeof exports ? module.exports = t(require("chartist")) : e["Chartist.plugins.tooltips"] = t(Chartist);
}(this, function(e) {
  return function(e, t, i) {
    "use strict";
    function n(e) {
      o(e, "tooltip-show") || (e.className = e.className + " tooltip-show");
    }
    function r(e) {
      var t = new RegExp("tooltip-show\\s*", "gi");
      e.className = e.className.replace(t, "").trim();
    }
    function o(e, t) {
      return (" " + e.getAttribute("class") + " ").indexOf(" " + t + " ") > -1;
    }
    function s(e, t) {
      do {
        e = e.nextSibling;
      } while (e && !o(e, t));
      return e;
    }
    function a(e) {
      return e.innerText || e.textContent;
    }
    var l = {
      currency: undefined,
      currencyFormatCallback: undefined,
      tooltipOffset: {
        x: 0,
        y: -20
      },
      anchorToPoint: !1,
      appendToBody: !1,
      "class": undefined,
      pointClass: "ct-point"
    };
    i.plugins = i.plugins || {}, i.plugins.tooltip = function(u) {
      return u = i.extend({}, l, u), function(l) {
        function c(e, t, i) {
          f.addEventListener(e, function(e) {
            t && !o(e.target, t) || i(e);
          });
        }
        function d(t) {
          m = m || p.offsetHeight;
          var i, n, r = -(g = g || p.offsetWidth) / 2 + u.tooltipOffset.x, o = -m + u.tooltipOffset.y;
          if (u.appendToBody) p.style.top = t.pageY + o + "px", p.style.left = t.pageX + r + "px"; else {
            var s = f.getBoundingClientRect(), a = t.pageX - s.left - e.pageXOffset, l = t.pageY - s.top - e.pageYOffset;
            !0 === u.anchorToPoint && t.target.x2 && t.target.y2 && (i = parseInt(t.target.x2.baseVal.value), 
            n = parseInt(t.target.y2.baseVal.value)), p.style.top = (n || l) + o + "px", p.style.left = (i || a) + r + "px";
          }
        }
        var h = u.pointClass;
        l instanceof i.Bar ? h = "ct-bar" : l instanceof i.Pie && (h = l.options.donut ? "ct-slice-donut" : "ct-slice-pie");
        var f = l.container, p = f.querySelector(".chartist-tooltip");
        p || ((p = t.createElement("div")).className = u["class"] ? "chartist-tooltip " + u["class"] : "chartist-tooltip", 
        u.appendToBody ? t.body.appendChild(p) : f.appendChild(p));
        var m = p.offsetHeight, g = p.offsetWidth;
        r(p), c("mouseover", h, function(e) {
          var r = e.target, o = "", c = (l instanceof i.Pie ? r : r.parentNode) ? r.parentNode.getAttribute("ct:meta") || r.parentNode.getAttribute("ct:series-name") : "", h = r.getAttribute("ct:meta") || c || "", f = !!h, v = r.getAttribute("ct:value");
          if (u.transformTooltipTextFnc && "function" == typeof u.transformTooltipTextFnc && (v = u.transformTooltipTextFnc(v)), 
          u.tooltipFnc && "function" == typeof u.tooltipFnc) o = u.tooltipFnc(h, v); else {
            if (u.metaIsHTML) {
              var y = t.createElement("textarea");
              y.innerHTML = h, h = y.value;
            }
            if (h = '<span class="chartist-tooltip-meta">' + h + "</span>", f) o += h + "<br>"; else if (l instanceof i.Pie) {
              var b = s(r, "ct-label");
              b && (o += a(b) + "<br>");
            }
            v && (u.currency && (v = u.currencyFormatCallback != undefined ? u.currencyFormatCallback(v, u) : u.currency + v.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")), 
            o += v = '<span class="chartist-tooltip-value">' + v + "</span>");
          }
          o && (p.innerHTML = o, d(e), n(p), m = p.offsetHeight, g = p.offsetWidth);
        }), c("mouseout", h, function() {
          r(p);
        }), c("mousemove", null, function(e) {
          !1 === u.anchorToPoint && d(e);
        });
      };
    };
  }(window, document, e), e.plugins.tooltips;
});

var Hogan = {};

!function(e, t) {
  function i(e, t, i) {
    var n;
    return t && "object" == typeof t && (null != t[e] ? n = t[e] : i && t.get && "function" == typeof t.get && (n = t.get(e))), 
    n;
  }
  function n(e, t, i, n) {
    function r() {}
    function o() {}
    var s;
    r.prototype = e, o.prototype = e.subs;
    var a = new r();
    for (s in a.subs = new o(), a.subsText = {}, a.ib(), t) a.subs[s] = t[s], a.subsText[s] = n;
    for (s in i) a.partials[s] = i[s];
    return a;
  }
  function r(e) {
    return String(null === e || e === undefined ? "" : e);
  }
  function o(e) {
    return e = r(e), d.test(e) ? e.replace(s, "&amp;").replace(a, "&lt;").replace(l, "&gt;").replace(u, "&#39;").replace(c, "&quot;") : e;
  }
  e.Template = function(e, t, i, n) {
    e = e || {}, this.r = e.code || this.r, this.c = i, this.options = n || {}, this.text = t || "", 
    this.partials = e.partials || {}, this.subs = e.subs || {}, this.ib();
  }, e.Template.prototype = {
    r: function() {
      return "";
    },
    v: o,
    t: r,
    render: function(e, t, i) {
      return this.ri([ e ], t || {}, i);
    },
    ri: function(e, t, i) {
      return this.r(e, t, i);
    },
    ep: function(e, t) {
      var i = this.partials[e], r = t[i.name];
      if (i.instance && i.base == r) return i.instance;
      if ("string" == typeof r) {
        if (!this.c) throw new Error("No compiler available.");
        r = this.c.compile(r, this.options);
      }
      return r ? (this.partials[e].base = r, i.subs && (this.activeSub === undefined && (t.stackText = this.text), 
      r = n(r, i.subs, i.partials, t.stackText || this.text)), this.partials[e].instance = r, 
      r) : null;
    },
    rp: function(e, t, i, n) {
      var r = this.ep(e, i);
      return r ? r.ri(t, i, n) : "";
    },
    rs: function(e, t, i) {
      var n = e[e.length - 1];
      if (h(n)) for (var r = 0; r < n.length; r++) e.push(n[r]), i(e, t, this), e.pop(); else i(e, t, this);
    },
    s: function(e, t, i, n, r, o, s) {
      var a;
      return (!h(e) || 0 !== e.length) && ("function" == typeof e && (e = this.ms(e, t, i, n, r, o, s)), 
      a = !!e, !n && a && t && t.push("object" == typeof e ? e : t[t.length - 1]), a);
    },
    d: function(e, t, n, r) {
      var o, s = e.split("."), a = this.f(s[0], t, n, r), l = this.options.modelGet, u = null;
      if ("." === e && h(t[t.length - 2])) a = t[t.length - 1]; else for (var c = 1; c < s.length; c++) null != (o = i(s[c], a, l)) ? (u = a, 
      a = o) : a = "";
      return !(r && !a) && (r || "function" != typeof a || (t.push(u), a = this.mv(a, t, n), 
      t.pop()), a);
    },
    f: function(e, t, n, r) {
      for (var o = !1, s = !1, a = this.options.modelGet, l = t.length - 1; l >= 0; l--) if (null != (o = i(e, t[l], a))) {
        s = !0;
        break;
      }
      return s ? (r || "function" != typeof o || (o = this.mv(o, t, n)), o) : !r && "";
    },
    ls: function(e, t, i, n, o) {
      var s = this.options.delimiters;
      return this.options.delimiters = o, this.b(this.ct(r(e.call(t, n)), t, i)), this.options.delimiters = s, 
      !1;
    },
    ct: function(e, t, i) {
      if (this.options.disableLambda) throw new Error("Lambda features disabled.");
      return this.c.compile(e, this.options).render(t, i);
    },
    b: t ? function(e) {
      this.buf.push(e);
    } : function(e) {
      this.buf += e;
    },
    fl: t ? function() {
      var e = this.buf.join("");
      return this.buf = [], e;
    } : function() {
      var e = this.buf;
      return this.buf = "", e;
    },
    ib: function() {
      this.buf = t ? [] : "";
    },
    ms: function(e, t, i, n, r, o, s) {
      var a, l = t[t.length - 1], u = e.call(l);
      return "function" == typeof u ? !!n || (a = this.activeSub && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, 
      this.ls(u, l, i, a.substring(r, o), s)) : u;
    },
    mv: function(e, t, i) {
      var n = t[t.length - 1], o = e.call(n);
      return "function" == typeof o ? this.ct(r(o.call(n)), n, i) : o;
    },
    sub: function(e, t, i, n) {
      var r = this.subs[e];
      r && (this.activeSub = e, r(t, i, this, n), this.activeSub = !1);
    }
  };
  var s = /&/g, a = /</g, l = />/g, u = /\'/g, c = /\"/g, d = /[&<>\"\']/, h = Array.isArray || function(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  };
}("undefined" != typeof exports ? exports : Hogan), function(e) {
  function t(e) {
    "}" === e.n.substr(e.n.length - 1) && (e.n = e.n.substring(0, e.n.length - 1));
  }
  function i(e) {
    return e.trim ? e.trim() : e.replace(/^\s*|\s*$/g, "");
  }
  function n(e, t, i) {
    if (t.charAt(i) != e.charAt(0)) return !1;
    for (var n = 1, r = e.length; n < r; n++) if (t.charAt(i + n) != e.charAt(n)) return !1;
    return !0;
  }
  function r(t, i, n, a) {
    var l = [], u = null, c = null, d = null;
    for (c = n[n.length - 1]; t.length > 0; ) {
      if (d = t.shift(), c && "<" == c.tag && !(d.tag in b)) throw new Error("Illegal content in < super tag.");
      if (e.tags[d.tag] <= e.tags.$ || o(d, a)) n.push(d), d.nodes = r(t, d.tag, n, a); else {
        if ("/" == d.tag) {
          if (0 === n.length) throw new Error("Closing tag without opener: /" + d.n);
          if (u = n.pop(), d.n != u.n && !s(d.n, u.n, a)) throw new Error("Nesting error: " + u.n + " vs. " + d.n);
          return u.end = d.i, l;
        }
        "\n" == d.tag && (d.last = 0 == t.length || "\n" == t[0].tag);
      }
      l.push(d);
    }
    if (n.length > 0) throw new Error("missing closing tag: " + n.pop().n);
    return l;
  }
  function o(e, t) {
    for (var i = 0, n = t.length; i < n; i++) if (t[i].o == e.n) return e.tag = "#", 
    !0;
  }
  function s(e, t, i) {
    for (var n = 0, r = i.length; n < r; n++) if (i[n].c == e && i[n].o == t) return !0;
  }
  function a(e) {
    var t = [];
    for (var i in e) t.push('"' + u(i) + '": function(c,p,t,i) {' + e[i] + "}");
    return "{ " + t.join(",") + " }";
  }
  function l(e) {
    var t = [];
    for (var i in e.partials) t.push('"' + u(i) + '":{name:"' + u(e.partials[i].name) + '", ' + l(e.partials[i]) + "}");
    return "partials: {" + t.join(",") + "}, subs: " + a(e.subs);
  }
  function u(e) {
    return e.replace(y, "\\\\").replace(m, '\\"').replace(g, "\\n").replace(v, "\\r");
  }
  function c(e) {
    return ~e.indexOf(".") ? "d" : "f";
  }
  function d(e, t) {
    var i = "<" + (t.prefix || "") + e.n + x++;
    return t.partials[i] = {
      name: e.n,
      partials: {}
    }, t.code += 't.b(t.rp("' + u(i) + '",c,p,"' + (e.indent || "") + '"));', i;
  }
  function h(e, t) {
    t.code += "t.b(t.t(t." + c(e.n) + '("' + u(e.n) + '",c,p,0)));';
  }
  function f(e) {
    return "t.b(" + e + ");";
  }
  var p = /\S/, m = /\"/g, g = /\n/g, v = /\r/g, y = /\\/g;
  e.tags = {
    "#": 1,
    "^": 2,
    "<": 3,
    $: 4,
    "/": 5,
    "!": 6,
    ">": 7,
    "=": 8,
    _v: 9,
    "{": 10,
    "&": 11,
    _t: 12
  }, e.scan = function(r, o) {
    function s() {
      y.length > 0 && (b.push({
        tag: "_t",
        text: new String(y)
      }), y = "");
    }
    function a() {
      for (var t = !0, i = _; i < b.length; i++) if (!(t = e.tags[b[i].tag] < e.tags._v || "_t" == b[i].tag && null === b[i].text.match(p))) return !1;
      return t;
    }
    function l(e, t) {
      if (s(), e && a()) for (var i, n = _; n < b.length; n++) b[n].text && ((i = b[n + 1]) && ">" == i.tag && (i.indent = b[n].text.toString()), 
      b.splice(n, 1)); else t || b.push({
        tag: "\n"
      });
      x = !1, _ = b.length;
    }
    function u(e, t) {
      var n = "=" + C, r = e.indexOf(n, t), o = i(e.substring(e.indexOf("=", t) + 1, r)).split(" ");
      return S = o[0], C = o[o.length - 1], r + n.length - 1;
    }
    var c = r.length, d = 0, h = 1, f = 2, m = d, g = null, v = null, y = "", b = [], x = !1, w = 0, _ = 0, S = "{{", C = "}}";
    for (o && (o = o.split(" "), S = o[0], C = o[1]), w = 0; w < c; w++) m == d ? n(S, r, w) ? (--w, 
    s(), m = h) : "\n" == r.charAt(w) ? l(x) : y += r.charAt(w) : m == h ? (w += S.length - 1, 
    "=" == (g = (v = e.tags[r.charAt(w + 1)]) ? r.charAt(w + 1) : "_v") ? (w = u(r, w), 
    m = d) : (v && w++, m = f), x = w) : n(C, r, w) ? (b.push({
      tag: g,
      n: i(y),
      otag: S,
      ctag: C,
      i: "/" == g ? x - S.length : w + C.length
    }), y = "", w += C.length - 1, m = d, "{" == g && ("}}" == C ? w++ : t(b[b.length - 1]))) : y += r.charAt(w);
    return l(x, !0), b;
  };
  var b = {
    _t: !0,
    "\n": !0,
    $: !0,
    "/": !0
  };
  e.stringify = function(t) {
    return "{code: function (c,p,i) { " + e.wrapMain(t.code) + " }," + l(t) + "}";
  };
  var x = 0;
  e.generate = function(t, i, n) {
    x = 0;
    var r = {
      code: "",
      subs: {},
      partials: {}
    };
    return e.walk(t, r), n.asString ? this.stringify(r, i, n) : this.makeTemplate(r, i, n);
  }, e.wrapMain = function(e) {
    return 'var t=this;t.b(i=i||"");' + e + "return t.fl();";
  }, e.template = e.Template, e.makeTemplate = function(e, t, i) {
    var n = this.makePartials(e);
    return n.code = new Function("c", "p", "i", this.wrapMain(e.code)), new this.template(n, t, this, i);
  }, e.makePartials = function(e) {
    var t, i = {
      subs: {},
      partials: e.partials,
      name: e.name
    };
    for (t in i.partials) i.partials[t] = this.makePartials(i.partials[t]);
    for (t in e.subs) i.subs[t] = new Function("c", "p", "t", "i", e.subs[t]);
    return i;
  }, e.codegen = {
    "#": function(t, i) {
      i.code += "if(t.s(t." + c(t.n) + '("' + u(t.n) + '",c,p,1),c,p,0,' + t.i + "," + t.end + ',"' + t.otag + " " + t.ctag + '")){t.rs(c,p,function(c,p,t){', 
      e.walk(t.nodes, i), i.code += "});c.pop();}";
    },
    "^": function(t, i) {
      i.code += "if(!t.s(t." + c(t.n) + '("' + u(t.n) + '",c,p,1),c,p,1,0,0,"")){', e.walk(t.nodes, i), 
      i.code += "};";
    },
    ">": d,
    "<": function(t, i) {
      var n = {
        partials: {},
        code: "",
        subs: {},
        inPartial: !0
      };
      e.walk(t.nodes, n);
      var r = i.partials[d(t, i)];
      r.subs = n.subs, r.partials = n.partials;
    },
    $: function(t, i) {
      var n = {
        subs: {},
        code: "",
        partials: i.partials,
        prefix: t.n
      };
      e.walk(t.nodes, n), i.subs[t.n] = n.code, i.inPartial || (i.code += 't.sub("' + u(t.n) + '",c,p,i);');
    },
    "\n": function(e, t) {
      t.code += f('"\\n"' + (e.last ? "" : " + i"));
    },
    _v: function(e, t) {
      t.code += "t.b(t.v(t." + c(e.n) + '("' + u(e.n) + '",c,p,0)));';
    },
    _t: function(e, t) {
      t.code += f('"' + u(e.text) + '"');
    },
    "{": h,
    "&": h
  }, e.walk = function(t, i) {
    for (var n, r = 0, o = t.length; r < o; r++) (n = e.codegen[t[r].tag]) && n(t[r], i);
    return i;
  }, e.parse = function(e, t, i) {
    return r(e, "", [], (i = i || {}).sectionTags || []);
  }, e.cache = {}, e.cacheKey = function(e, t) {
    return [ e, !!t.asString, !!t.disableLambda, t.delimiters, !!t.modelGet ].join("||");
  }, e.compile = function(t, i) {
    i = i || {};
    var n = e.cacheKey(t, i), r = this.cache[n];
    return r || (r = this.generate(this.parse(this.scan(t, i.delimiters), t, i), t, i), 
    this.cache[n] = r);
  };
}("undefined" != typeof exports ? exports : Hogan);

var mejs = mejs || {};

mejs.version = "2.23.5", mejs.meIndex = 0, mejs.plugins = {
  silverlight: [ {
    version: [ 3, 0 ],
    types: [ "video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg" ]
  } ],
  flash: [ {
    version: [ 9, 0, 124 ],
    types: [ "video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mp4", "audio/mpeg", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL", "audio/ogg" ]
  } ],
  youtube: [ {
    version: null,
    types: [ "video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube" ]
  } ],
  vimeo: [ {
    version: null,
    types: [ "video/vimeo", "video/x-vimeo" ]
  } ]
}, mejs.Utility = {
  encodeUrl: function(e) {
    return encodeURIComponent(e);
  },
  escapeHTML: function(e) {
    return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;");
  },
  absolutizeUrl: function(e) {
    var t = document.createElement("div");
    return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>', t.firstChild.href;
  },
  getScriptPath: function(e) {
    for (var t, i, n, r, o, s = 0, a = "", l = "", u = document.getElementsByTagName("script"), c = u.length, d = e.length; s < c; s++) {
      for ((i = (n = u[s].src).lastIndexOf("/")) > -1 ? (o = n.substring(i + 1), r = n.substring(0, i + 1)) : (o = n, 
      r = ""), t = 0; t < d; t++) if (l = e[t], o.indexOf(l) > -1) {
        a = r;
        break;
      }
      if ("" !== a) break;
    }
    return a;
  },
  calculateTimeFormat: function(e, t, i) {
    e < 0 && (e = 0), void 0 === i && (i = 25);
    var n = t.timeFormat, r = n[0], o = n[1] == n[0], s = o ? 2 : 1, a = ":", l = Math.floor(e / 3600) % 24, u = Math.floor(e / 60) % 60, c = Math.floor(e % 60), d = [ [ Math.floor((e % 1 * i).toFixed(3)), "f" ], [ c, "s" ], [ u, "m" ], [ l, "h" ] ];
    n.length < s && (a = n[s]);
    for (var h = !1, f = 0, p = d.length; f < p; f++) if (-1 !== n.indexOf(d[f][1])) h = !0; else if (h) {
      for (var m = !1, g = f; g < p; g++) if (d[g][0] > 0) {
        m = !0;
        break;
      }
      if (!m) break;
      o || (n = r + n), n = d[f][1] + a + n, o && (n = d[f][1] + n), r = d[f][1];
    }
    t.currentTimeFormat = n;
  },
  twoDigitsString: function(e) {
    return e < 10 ? "0" + e : String(e);
  },
  secondsToTimeCode: function(e, t) {
    if (e < 0 && (e = 0), "object" != typeof t) {
      var n = "m:ss";
      n = arguments[1] ? "hh:mm:ss" : n, t = {
        currentTimeFormat: n = arguments[2] ? n + ":ff" : n,
        framesPerSecond: arguments[3] || 25
      };
    }
    var r = t.framesPerSecond;
    void 0 === r && (r = 25);
    n = t.currentTimeFormat;
    var o = Math.floor(e / 3600) % 24, s = Math.floor(e / 60) % 60, a = Math.floor(e % 60), l = Math.floor((e % 1 * r).toFixed(3));
    lis = [ [ l, "f" ], [ a, "s" ], [ s, "m" ], [ o, "h" ] ];
    var u = n;
    for (i = 0, len = lis.length; i < len; i++) u = (u = u.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0]))).replace(lis[i][1], lis[i][0]);
    return u;
  },
  timeCodeToSeconds: function(e, t, i, n) {
    void 0 === i ? i = !1 : void 0 === n && (n = 25);
    var r = e.split(":"), o = parseInt(r[0], 10), s = parseInt(r[1], 10), a = parseInt(r[2], 10), l = 0;
    return i && (l = parseInt(r[3]) / n), 3600 * o + 60 * s + a + l;
  },
  convertSMPTEtoSeconds: function(e) {
    if ("string" != typeof e) return !1;
    var t = 0, i = -1 != (e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, n = 1;
    e = e.split(":").reverse();
    for (var r = 0; r < e.length; r++) n = 1, r > 0 && (n = Math.pow(60, r)), t += Number(e[r]) * n;
    return Number(t.toFixed(i));
  },
  removeSwf: function(e) {
    var t = document.getElementById(e);
    t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none", 
    function() {
      4 == t.readyState ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10);
    }()) : t.parentNode.removeChild(t));
  },
  removeObjectInIE: function(e) {
    var t = document.getElementById(e);
    if (t) {
      for (var i in t) "function" == typeof t[i] && (t[i] = null);
      t.parentNode.removeChild(t);
    }
  },
  determineScheme: function(e) {
    return e && -1 != e.indexOf("://") ? e.substr(0, e.indexOf("://") + 3) : "//";
  },
  debounce: function(e, t, i) {
    var n;
    return function() {
      var r = this, o = arguments, s = function() {
        n = null, i || e.apply(r, o);
      }, a = i && !n;
      clearTimeout(n), n = setTimeout(s, t), a && e.apply(r, o);
    };
  },
  isNodeAfter: function(e, t) {
    return !!(e && t && "function" == typeof e.compareDocumentPosition && e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_PRECEDING);
  }
}, mejs.PluginDetector = {
  hasPluginVersion: function(e, t) {
    var i = this.plugins[e];
    return t[1] = t[1] || 0, t[2] = t[2] || 0, i[0] > t[0] || i[0] == t[0] && i[1] > t[1] || i[0] == t[0] && i[1] == t[1] && i[2] >= t[2];
  },
  nav: window.navigator,
  ua: window.navigator.userAgent.toLowerCase(),
  plugins: [],
  addPlugin: function(e, t, i, n, r) {
    this.plugins[e] = this.detectPlugin(t, i, n, r);
  },
  detectPlugin: function(e, t, i, n) {
    var r, o, s, a = [ 0, 0, 0 ];
    if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
      if ((r = this.nav.plugins[e].description) && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin)) for (a = r.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), 
      o = 0; o < a.length; o++) a[o] = parseInt(a[o].match(/\d+/), 10);
    } else if ("undefined" != typeof window.ActiveXObject) try {
      (s = new ActiveXObject(i)) && (a = n(s));
    } catch (l) {}
    return a;
  }
}, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
  var t = [], i = e.GetVariable("$version");
  return i && (i = i.split(" ")[1].split(","), t = [ parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10) ]), 
  t;
}), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(e) {
  var t = [ 0, 0, 0, 0 ], i = function(e, t, i, n) {
    for (;e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]); ) t[i] += n;
    t[i] -= n;
  };
  return i(e, t, 0, 1), i(e, t, 1, 1), i(e, t, 2, 1e4), i(e, t, 2, 1e3), i(e, t, 2, 100), 
  i(e, t, 2, 10), i(e, t, 2, 1), i(e, t, 3, 1), t;
}), mejs.MediaFeatures = {
  init: function() {
    var e, t, i, n, r, o, s = this, a = document, l = mejs.PluginDetector.nav, u = mejs.PluginDetector.ua.toLowerCase(), c = [ "source", "track", "audio", "video" ];
    s.isiPad = null !== u.match(/ipad/i), s.isiPhone = null !== u.match(/iphone/i), 
    s.isiOS = s.isiPhone || s.isiPad, s.isAndroid = null !== u.match(/android/i), s.isBustedAndroid = null !== u.match(/android 2\.[12]/), 
    s.isBustedNativeHTTPS = "https:" === location.protocol && (null !== u.match(/android [12]\./) || null !== u.match(/macintosh.* version.* safari/)), 
    s.isIE = -1 != l.appName.toLowerCase().indexOf("microsoft") || null !== l.appName.toLowerCase().match(/trident/gi), 
    s.isChrome = null !== u.match(/chrome/gi), s.isChromium = null !== u.match(/chromium/gi), 
    s.isFirefox = null !== u.match(/firefox/gi), s.isWebkit = null !== u.match(/webkit/gi), 
    s.isGecko = null !== u.match(/gecko/gi) && !s.isWebkit && !s.isIE, s.isOpera = null !== u.match(/opera/gi), 
    s.hasTouch = "ontouchstart" in window, s.svgAsImg = !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
    for (e = 0; e < c.length; e++) t = document.createElement(c[e]);
    s.supportsMediaTag = "undefined" != typeof t.canPlayType || s.isBustedAndroid;
    try {
      t.canPlayType("video/mp4");
    } catch (d) {
      s.supportsMediaTag = !1;
    }
    s.supportsPointerEvents = (n = document.createElement("x"), r = document.documentElement, 
    o = window.getComputedStyle, "pointerEvents" in n.style && (n.style.pointerEvents = "auto", 
    n.style.pointerEvents = "x", r.appendChild(n), i = o && "auto" === o(n, "").pointerEvents, 
    r.removeChild(n), !!i)), s.hasFirefoxPluginMovingProblem = !1, s.hasiOSFullScreen = "undefined" != typeof t.webkitEnterFullscreen, 
    s.hasNativeFullscreen = "undefined" != typeof t.requestFullscreen, s.hasWebkitNativeFullScreen = "undefined" != typeof t.webkitRequestFullScreen, 
    s.hasMozNativeFullScreen = "undefined" != typeof t.mozRequestFullScreen, s.hasMsNativeFullScreen = "undefined" != typeof t.msRequestFullscreen, 
    s.hasTrueNativeFullScreen = s.hasWebkitNativeFullScreen || s.hasMozNativeFullScreen || s.hasMsNativeFullScreen, 
    s.nativeFullScreenEnabled = s.hasTrueNativeFullScreen, s.hasMozNativeFullScreen ? s.nativeFullScreenEnabled = document.mozFullScreenEnabled : s.hasMsNativeFullScreen && (s.nativeFullScreenEnabled = document.msFullscreenEnabled), 
    s.isChrome && (s.hasiOSFullScreen = !1), s.hasTrueNativeFullScreen && (s.fullScreenEventName = "", 
    s.hasWebkitNativeFullScreen ? s.fullScreenEventName = "webkitfullscreenchange" : s.hasMozNativeFullScreen ? s.fullScreenEventName = "mozfullscreenchange" : s.hasMsNativeFullScreen && (s.fullScreenEventName = "MSFullscreenChange"), 
    s.isFullScreen = function() {
      return s.hasMozNativeFullScreen ? a.mozFullScreen : s.hasWebkitNativeFullScreen ? a.webkitIsFullScreen : s.hasMsNativeFullScreen ? null !== a.msFullscreenElement : void 0;
    }, s.requestFullScreen = function(e) {
      s.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() : s.hasMozNativeFullScreen ? e.mozRequestFullScreen() : s.hasMsNativeFullScreen && e.msRequestFullscreen();
    }, s.cancelFullScreen = function() {
      s.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : s.hasMozNativeFullScreen ? document.mozCancelFullScreen() : s.hasMsNativeFullScreen && document.msExitFullscreen();
    }), s.hasiOSFullScreen && u.match(/mac os x 10_5/i) && (s.hasNativeFullScreen = !1, 
    s.hasiOSFullScreen = !1);
  }
}, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
  pluginType: "native",
  isFullScreen: !1,
  setCurrentTime: function(e) {
    this.currentTime = e;
  },
  setMuted: function(e) {
    this.muted = e;
  },
  setVolume: function(e) {
    this.volume = e;
  },
  stop: function() {
    this.pause();
  },
  setSrc: function(e) {
    for (var t, i, n = this.getElementsByTagName("source"); n.length > 0; ) this.removeChild(n[0]);
    if ("string" == typeof e) this.src = e; else for (t = 0; t < e.length; t++) if (i = e[t], 
    this.canPlayType(i.type)) {
      this.src = i.src;
      break;
    }
  },
  setVideoSize: function(e, t) {
    this.width = e, this.height = t;
  }
}, mejs.PluginMediaElement = function(e, t, i) {
  this.id = e, this.pluginType = t, this.src = i, this.events = {}, this.attributes = {};
}, mejs.PluginMediaElement.prototype = {
  pluginElement: null,
  pluginType: "",
  isFullScreen: !1,
  playbackRate: -1,
  defaultPlaybackRate: -1,
  seekable: [],
  played: [],
  paused: !0,
  ended: !1,
  seeking: !1,
  duration: 0,
  error: null,
  tagName: "",
  muted: !1,
  volume: 1,
  currentTime: 0,
  play: function() {
    null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), 
    this.paused = !1);
  },
  load: function() {
    null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(), 
    this.paused = !1);
  },
  pause: function() {
    null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? 1 == this.pluginApi.getPlayerState() && this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), 
    this.paused = !0);
  },
  stop: function() {
    null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), 
    this.paused = !0);
  },
  canPlayType: function(e) {
    var t, i, n, r = mejs.plugins[this.pluginType];
    for (t = 0; t < r.length; t++) if (n = r[t], mejs.PluginDetector.hasPluginVersion(this.pluginType, n.version)) for (i = 0; i < n.types.length; i++) if (e == n.types[i]) return "probably";
    return "";
  },
  positionFullscreenButton: function(e, t, i) {
    null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), i);
  },
  hideFullscreenButton: function() {
    null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton();
  },
  setSrc: function(e) {
    var t, i;
    if ("string" == typeof e) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)), 
    this.src = mejs.Utility.absolutizeUrl(e); else for (t = 0; t < e.length; t++) if (i = e[t], 
    this.canPlayType(i.type)) {
      this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(i.src)), this.src = mejs.Utility.absolutizeUrl(i.src);
      break;
    }
  },
  setCurrentTime: function(e) {
    null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e), 
    this.currentTime = e);
  },
  setVolume: function(e) {
    null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * e) : this.pluginApi.setVolume(e), 
    this.volume = e);
  },
  setMuted: function(e) {
    null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(), 
    this.muted = e, this.dispatchEvent({
      type: "volumechange"
    })) : this.pluginApi.setMuted(e), this.muted = e);
  },
  setVideoSize: function(e, t) {
    this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = e + "px", 
    this.pluginElement.style.height = t + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t);
  },
  setFullscreen: function(e) {
    null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e);
  },
  enterFullScreen: function() {
    null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0);
  },
  exitFullScreen: function() {
    null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1);
  },
  addEventListener: function(e, t) {
    this.events[e] = this.events[e] || [], this.events[e].push(t);
  },
  removeEventListener: function(e, t) {
    if (!e) return this.events = {}, !0;
    var i = this.events[e];
    if (!i) return !0;
    if (!t) return this.events[e] = [], !0;
    for (var n = 0; n < i.length; n++) if (i[n] === t) return this.events[e].splice(n, 1), 
    !0;
    return !1;
  },
  dispatchEvent: function(e) {
    var t, i = this.events[e.type];
    if (i) for (t = 0; t < i.length; t++) i[t].apply(this, [ e ]);
  },
  hasAttribute: function(e) {
    return e in this.attributes;
  },
  removeAttribute: function(e) {
    delete this.attributes[e];
  },
  getAttribute: function(e) {
    return this.hasAttribute(e) ? this.attributes[e] : null;
  },
  setAttribute: function(e, t) {
    this.attributes[e] = t;
  },
  remove: function() {
    mejs.Utility.removeSwf(this.pluginElement.id);
  }
}, mejs.MediaElementDefaults = {
  mode: "auto",
  plugins: [ "flash", "silverlight", "youtube", "vimeo" ],
  enablePluginDebug: !1,
  httpsBasicAuthSite: !1,
  type: "",
  pluginPath: mejs.Utility.getScriptPath([ "mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js" ]),
  flashName: "flashmediaelement.swf",
  flashStreamer: "",
  flashScriptAccess: "sameDomain",
  enablePluginSmoothing: !1,
  enablePseudoStreaming: !1,
  pseudoStreamingStartQueryParam: "start",
  silverlightName: "silverlightmediaelement.xap",
  defaultVideoWidth: 480,
  defaultVideoHeight: 270,
  pluginWidth: -1,
  pluginHeight: -1,
  pluginVars: [],
  timerRate: 250,
  startVolume: .8,
  customError: "",
  success: function() {},
  error: function() {}
}, mejs.MediaElement = function(e, t) {
  return mejs.HtmlMediaElementShim.create(e, t);
}, mejs.HtmlMediaElementShim = {
  create: function(e, t) {
    var i, n, r = {}, o = "string" == typeof e ? document.getElementById(e) : e, s = o.tagName.toLowerCase(), a = "audio" === s || "video" === s, l = a ? o.getAttribute("src") : o.getAttribute("href"), u = o.getAttribute("poster"), c = o.getAttribute("autoplay"), d = o.getAttribute("preload"), h = o.getAttribute("controls");
    for (n in mejs.MediaElementDefaults) r[n] = mejs.MediaElementDefaults[n];
    for (n in t) r[n] = t[n];
    return l = null == l || "" == l ? null : l, u = null == u ? "" : u, d = null == d || "false" === d ? "none" : d, 
    c = !(null == c || "false" === c), h = !(null == h || "false" === h), (i = this.determinePlayback(o, r, mejs.MediaFeatures.supportsMediaTag, a, l)).url = null !== i.url ? mejs.Utility.absolutizeUrl(i.url) : "", 
    i.scheme = mejs.Utility.determineScheme(i.url), "native" == i.method ? (mejs.MediaFeatures.isBustedAndroid && (o.src = i.url, 
    o.addEventListener("click", function() {
      o.play();
    }, !1)), this.updateNative(i, r, c, d)) : "" !== i.method ? this.createPlugin(i, r, u, c, d, h) : (this.createErrorMessage(i, r, u), 
    this);
  },
  determinePlayback: function(e, t, i, n, r) {
    var o, s, a, l, u, c, d, h, f, p, m, g = [], v = {
      method: "",
      url: "",
      htmlMediaElement: e,
      isVideo: "audio" !== e.tagName.toLowerCase(),
      scheme: ""
    };
    if ("undefined" != typeof t.type && "" !== t.type) if ("string" == typeof t.type) g.push({
      type: t.type,
      url: r
    }); else for (o = 0; o < t.type.length; o++) g.push({
      type: t.type[o],
      url: r
    }); else if (null !== r) c = this.formatType(r, e.getAttribute("type")), g.push({
      type: c,
      url: r
    }); else for (o = 0; o < e.childNodes.length; o++) 1 == (u = e.childNodes[o]).nodeType && "source" == u.tagName.toLowerCase() && (r = u.getAttribute("src"), 
    c = this.formatType(r, u.getAttribute("type")), (!(m = u.getAttribute("media")) || !window.matchMedia || window.matchMedia && window.matchMedia(m).matches) && g.push({
      type: c,
      url: r
    }));
    if (!n && g.length > 0 && null !== g[0].url && this.getTypeFromFile(g[0].url).indexOf("audio") > -1 && (v.isVideo = !1), 
    v.isVideo && mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function(e) {
      return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" : "";
    }), v.isVideo && mejs.MediaFeatures.isChromium && (e.canPlayType = function(e) {
      return null !== e.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : "";
    }), i && ("auto" === t.mode || "auto_plugin" === t.mode || "native" === t.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || !0 !== t.httpsBasicAuthSite)) {
      for (n || (p = document.createElement(v.isVideo ? "video" : "audio"), e.parentNode.insertBefore(p, e), 
      e.style.display = "none", v.htmlMediaElement = e = p), o = 0; o < g.length; o++) if ("video/m3u8" == g[o].type || "" !== e.canPlayType(g[o].type).replace(/no/, "") || "" !== e.canPlayType(g[o].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== e.canPlayType(g[o].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
        v.method = "native", v.url = g[o].url;
        break;
      }
      if ("native" === v.method && (null !== v.url && (e.src = v.url), "auto_plugin" !== t.mode)) return v;
    }
    if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode) for (o = 0; o < g.length; o++) for (c = g[o].type, 
    s = 0; s < t.plugins.length; s++) for (d = t.plugins[s], h = mejs.plugins[d], a = 0; a < h.length; a++) if (null == (f = h[a]).version || mejs.PluginDetector.hasPluginVersion(d, f.version)) for (l = 0; l < f.types.length; l++) if (c.toLowerCase() == f.types[l].toLowerCase()) return v.method = d, 
    v.url = g[o].url, v;
    return "auto_plugin" === t.mode && "native" === v.method ? v : ("" === v.method && g.length > 0 && (v.url = g[0].url), 
    v);
  },
  formatType: function(e, t) {
    return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t;
  },
  getTypeFromFile: function(e) {
    var t = (e = e.split("?")[0]).substring(e.lastIndexOf(".") + 1).toLowerCase(), i = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video/" : "audio/";
    return this.getTypeFromExtension(t, i);
  },
  getTypeFromExtension: function(e, t) {
    switch (t = t || "", e) {
     case "mp4":
     case "m4v":
     case "m4a":
     case "f4v":
     case "f4a":
      return t + "mp4";

     case "flv":
      return t + "x-flv";

     case "webm":
     case "webma":
     case "webmv":
      return t + "webm";

     case "ogg":
     case "oga":
     case "ogv":
      return t + "ogg";

     case "m3u8":
      return "application/x-mpegurl";

     case "ts":
      return t + "mp2t";

     default:
      return t + e;
    }
  },
  createErrorMessage: function(e, t, i) {
    var n = e.htmlMediaElement, r = document.createElement("div"), o = t.customError;
    r.className = "me-cannotplay";
    try {
      r.style.width = n.width + "px", r.style.height = n.height + "px";
    } catch (s) {}
    o || (o = '<a href="' + e.url + '">', "" !== i && (o += '<img src="' + i + '" width="100%" height="100%" alt="" />'), 
    o += "<span>" + mejs.i18n.t("mejs.download-file") + "</span></a>"), r.innerHTML = o, 
    n.parentNode.insertBefore(r, n), n.style.display = "none", t.error(n);
  },
  createPlugin: function(e, t, i, n, r, o) {
    var s, a, l, u = e.htmlMediaElement, c = 1, d = 1, h = "me_" + e.method + "_" + mejs.meIndex++, f = new mejs.PluginMediaElement(h, e.method, e.url), p = document.createElement("div");
    f.tagName = u.tagName;
    for (var m = 0; m < u.attributes.length; m++) {
      var g = u.attributes[m];
      g.specified && f.setAttribute(g.name, g.value);
    }
    for (a = u.parentNode; null !== a && null != a.tagName && "body" !== a.tagName.toLowerCase() && null != a.parentNode && null != a.parentNode.tagName && null != a.parentNode.constructor && "ShadowRoot" === a.parentNode.constructor.name; ) {
      if ("p" === a.parentNode.tagName.toLowerCase()) {
        a.parentNode.parentNode.insertBefore(a, a.parentNode);
        break;
      }
      a = a.parentNode;
    }
    if (e.isVideo ? (c = t.pluginWidth > 0 ? t.pluginWidth : t.videoWidth > 0 ? t.videoWidth : null !== u.getAttribute("width") ? u.getAttribute("width") : t.defaultVideoWidth, 
    d = t.pluginHeight > 0 ? t.pluginHeight : t.videoHeight > 0 ? t.videoHeight : null !== u.getAttribute("height") ? u.getAttribute("height") : t.defaultVideoHeight, 
    c = mejs.Utility.encodeUrl(c), d = mejs.Utility.encodeUrl(d)) : t.enablePluginDebug && (c = 320, 
    d = 240), f.success = t.success, p.className = "me-plugin", p.id = h + "_container", 
    e.isVideo ? u.parentNode.insertBefore(p, u) : document.body.insertBefore(p, document.body.childNodes[0]), 
    "flash" === e.method || "silverlight" === e.method) {
      var v = "audio/mp4" === u.getAttribute("type"), y = u.getElementsByTagName("source");
      if (y && !v) {
        m = 0;
        for (var b = y.length; m < b; m++) "audio/mp4" === y[m].getAttribute("type") && (v = !0);
      }
      l = [ "id=" + h, "isvideo=" + (e.isVideo || v ? "true" : "false"), "autoplay=" + (n ? "true" : "false"), "preload=" + r, "width=" + c, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + d, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam ], 
      null !== e.url && ("flash" == e.method ? l.push("file=" + mejs.Utility.encodeUrl(e.url)) : l.push("file=" + e.url)), 
      t.enablePluginDebug && l.push("debug=true"), t.enablePluginSmoothing && l.push("smoothing=true"), 
      t.enablePseudoStreaming && l.push("pseudostreaming=true"), o && l.push("controls=true"), 
      t.pluginVars && (l = l.concat(t.pluginVars)), window[h + "_init"] = function() {
        switch (f.pluginType) {
         case "flash":
          f.pluginElement = f.pluginApi = document.getElementById(h);
          break;

         case "silverlight":
          f.pluginElement = document.getElementById(f.id), f.pluginApi = f.pluginElement.Content.MediaElementJS;
        }
        null != f.pluginApi && f.success && f.success(f, u);
      }, window[h + "_event"] = function(e, t) {
        var i, n, r;
        for (n in i = {
          type: e,
          target: f
        }, t) f[n] = t[n], i[n] = t[n];
        r = t.bufferedTime || 0, i.target.buffered = i.buffered = {
          start: function() {
            return 0;
          },
          end: function() {
            return r;
          },
          length: 1
        }, f.dispatchEvent(i);
      };
    }
    switch (e.method) {
     case "silverlight":
      p.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + h + '" name="' + h + '" width="' + c + '" height="' + d + '" class="mejs-shim"><param name="initParams" value="' + l.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + t.pluginPath + t.silverlightName + '" /></object>';
      break;

     case "flash":
      mejs.MediaFeatures.isIE ? (s = document.createElement("div"), p.appendChild(s), 
      s.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + h + '" width="' + c + '" height="' + d + '" class="mejs-shim"><param name="movie" value="' + t.pluginPath + t.flashName + "?" + new Date().getTime() + '" /><param name="flashvars" value="' + l.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + t.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : p.innerHTML = '<embed id="' + h + '" name="' + h + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + t.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + t.pluginPath + t.flashName + '" flashvars="' + l.join("&") + '" width="' + c + '" height="' + d + '" scale="default"class="mejs-shim"></embed>';
      break;

     case "youtube":
      var x;
      if (-1 != e.url.lastIndexOf("youtu.be")) -1 != (x = e.url.substr(e.url.lastIndexOf("/") + 1)).indexOf("?") && (x = x.substr(0, x.indexOf("?"))); else {
        var w = e.url.match(/[?&]v=([^&#]+)|&|#|$/);
        w && (x = w[1]);
      }
      youtubeSettings = {
        container: p,
        containerId: p.id,
        pluginMediaElement: f,
        pluginId: h,
        videoId: x,
        height: d,
        width: c,
        scheme: e.scheme,
        variables: t.youtubeIframeVars
      }, window.postMessage ? mejs.YouTubeApi.enqueueIframe(youtubeSettings) : mejs.PluginDetector.hasPluginVersion("flash", [ 10, 0, 0 ]) && mejs.YouTubeApi.createFlash(youtubeSettings, t);
      break;

     case "vimeo":
      var _ = h + "_player";
      if (f.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1), p.innerHTML = '<iframe src="' + e.scheme + "player.vimeo.com/video/" + f.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + _ + '" width="' + c + '" height="' + d + '" frameborder="0" class="mejs-shim" id="' + _ + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>', 
      "function" == typeof $f) {
        var S = $f(p.childNodes[0]), C = -1;
        S.addEvent("ready", function() {
          function e(e, t, i, n) {
            var r = {
              type: i,
              target: t
            };
            "timeupdate" == i && (t.currentTime = r.currentTime = n.seconds, t.duration = r.duration = n.duration), 
            t.dispatchEvent(r);
          }
          S.playVideo = function() {
            S.api("play");
          }, S.stopVideo = function() {
            S.api("unload");
          }, S.pauseVideo = function() {
            S.api("pause");
          }, S.seekTo = function(e) {
            S.api("seekTo", e);
          }, S.setVolume = function(e) {
            S.api("setVolume", e);
          }, S.setMuted = function(e) {
            e ? (S.lastVolume = S.api("getVolume"), S.api("setVolume", 0)) : (S.api("setVolume", S.lastVolume), 
            delete S.lastVolume);
          }, S.getPlayerState = function() {
            return C;
          }, S.addEvent("play", function() {
            C = 1, e(S, f, "play"), e(S, f, "playing");
          }), S.addEvent("pause", function() {
            C = 2, e(S, f, "pause");
          }), S.addEvent("finish", function() {
            C = 0, e(S, f, "ended");
          }), S.addEvent("playProgress", function(t) {
            e(S, f, "timeupdate", t);
          }), S.addEvent("seek", function(t) {
            C = 3, e(S, f, "seeked", t);
          }), S.addEvent("loadProgress", function(t) {
            C = 3, e(S, f, "progress", t);
          }), f.pluginElement = p, f.pluginApi = S, f.success(f, f.pluginElement);
        });
      } else console.warn("You need to include froogaloop for vimeo to work");
    }
    return u.style.display = "none", u.removeAttribute("autoplay"), f;
  },
  updateNative: function(e, t) {
    var i, n = e.htmlMediaElement;
    for (i in mejs.HtmlMediaElement) n[i] = mejs.HtmlMediaElement[i];
    return t.success(n, n), n;
  }
}, mejs.YouTubeApi = {
  isIframeStarted: !1,
  isIframeLoaded: !1,
  loadIframeApi: function(e) {
    if (!this.isIframeStarted) {
      var t = document.createElement("script");
      t.src = e.scheme + "www.youtube.com/player_api";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(t, i), this.isIframeStarted = !0;
    }
  },
  iframeQueue: [],
  enqueueIframe: function(e) {
    this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(e), this.iframeQueue.push(e));
  },
  createIframe: function(e) {
    var t = e.pluginMediaElement, i = {
      controls: 0,
      wmode: "transparent"
    }, n = new YT.Player(e.containerId, {
      height: e.height,
      width: e.width,
      videoId: e.videoId,
      playerVars: mejs.$.extend({}, i, e.variables),
      events: {
        onReady: function() {
          n.setVideoSize = function(e, t) {
            n.setSize(e, t);
          }, e.pluginMediaElement.pluginApi = n, e.pluginMediaElement.pluginElement = document.getElementById(e.containerId), 
          t.success(t, t.pluginElement), mejs.YouTubeApi.createEvent(n, t, "canplay"), setInterval(function() {
            mejs.YouTubeApi.createEvent(n, t, "timeupdate");
          }, 250), "undefined" != typeof t.attributes.autoplay && n.playVideo();
        },
        onStateChange: function(e) {
          mejs.YouTubeApi.handleStateChange(e.data, n, t);
        }
      }
    });
  },
  createEvent: function(e, t, i) {
    var n = {
      type: i,
      target: t
    };
    if (e && e.getDuration) {
      t.currentTime = n.currentTime = e.getCurrentTime(), t.duration = n.duration = e.getDuration(), 
      n.paused = t.paused, n.ended = t.ended, n.muted = e.isMuted(), n.volume = e.getVolume() / 100, 
      n.bytesTotal = e.getVideoBytesTotal(), n.bufferedBytes = e.getVideoBytesLoaded();
      var r = n.bufferedBytes / n.bytesTotal * n.duration;
      n.target.buffered = n.buffered = {
        start: function() {
          return 0;
        },
        end: function() {
          return r;
        },
        length: 1
      };
    }
    t.dispatchEvent(n);
  },
  iFrameReady: function() {
    for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0; ) {
      var e = this.iframeQueue.pop();
      this.createIframe(e);
    }
  },
  flashPlayers: {},
  createFlash: function(e) {
    this.flashPlayers[e.pluginId] = e;
    var t, i = e.scheme + "www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
    mejs.MediaFeatures.isIE ? (t = document.createElement("div"), e.container.appendChild(t), 
    t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + e.scheme + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim"><param name="movie" value="' + i + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') : e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + i + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>';
  },
  flashReady: function(e) {
    var t = this.flashPlayers[e], i = document.getElementById(e), n = t.pluginMediaElement;
    n.pluginApi = n.pluginElement = i, t.success(n, n.pluginElement), i.cueVideoById(t.videoId);
    var r = t.containerId + "_callback";
    window[r] = function(e) {
      mejs.YouTubeApi.handleStateChange(e, i, n);
    }, i.addEventListener("onStateChange", r), setInterval(function() {
      mejs.YouTubeApi.createEvent(i, n, "timeupdate");
    }, 250), mejs.YouTubeApi.createEvent(i, n, "canplay");
  },
  handleStateChange: function(e, t, i) {
    switch (e) {
     case -1:
      i.paused = !0, i.ended = !0, mejs.YouTubeApi.createEvent(t, i, "loadedmetadata");
      break;

     case 0:
      i.paused = !1, i.ended = !0, mejs.YouTubeApi.createEvent(t, i, "ended");
      break;

     case 1:
      i.paused = !1, i.ended = !1, mejs.YouTubeApi.createEvent(t, i, "play"), mejs.YouTubeApi.createEvent(t, i, "playing");
      break;

     case 2:
      i.paused = !0, i.ended = !1, mejs.YouTubeApi.createEvent(t, i, "pause");
      break;

     case 3:
      mejs.YouTubeApi.createEvent(t, i, "progress");
    }
  }
}, window.onYouTubePlayerAPIReady = function() {
  mejs.YouTubeApi.iFrameReady();
}, window.onYouTubePlayerReady = function(e) {
  mejs.YouTubeApi.flashReady(e);
}, window.mejs = mejs, window.MediaElement = mejs.MediaElement, function(e, t, i) {
  var n = {
    "default": "en",
    locale: {
      language: i.i18n && i.i18n.locale.language || "",
      strings: i.i18n && i.i18n.locale.strings || {}
    },
    pluralForms: [ function() {
      return arguments[1];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] : e[2];
    }, function() {
      var e = arguments;
      return [ 0, 1 ].indexOf(e[0]) > -1 ? e[1] : e[2];
    }, function() {
      var e = arguments;
      return e[0] % 10 == 1 && e[0] % 100 != 11 ? e[1] : 0 !== e[0] ? e[2] : e[3];
    }, function() {
      var e = arguments;
      return 1 === e[0] || 11 === e[0] ? e[1] : 2 === e[0] || 12 === e[0] ? e[2] : e[0] > 2 && e[0] < 20 ? e[3] : e[4];
    }, function() {
      return 1 === args[0] ? args[1] : 0 === args[0] || args[0] % 100 > 0 && args[0] % 100 < 20 ? args[2] : args[3];
    }, function() {
      var e = arguments;
      return e[0] % 10 == 1 && e[0] % 100 != 11 ? e[1] : e[0] % 10 >= 2 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] : [ 3 ];
    }, function() {
      var e = arguments;
      return e[0] % 10 == 1 && e[0] % 100 != 11 ? e[1] : e[0] % 10 >= 2 && e[0] % 10 <= 4 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] : e[3];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] : e[0] >= 2 && e[0] <= 4 ? e[2] : e[3];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] : e[0] % 10 >= 2 && e[0] % 10 <= 4 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] : e[3];
    }, function() {
      var e = arguments;
      return e[0] % 100 == 1 ? e[2] : e[0] % 100 == 2 ? e[3] : e[0] % 100 == 3 || e[0] % 100 == 4 ? e[4] : e[1];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] : 2 === e[0] ? e[2] : e[0] > 2 && e[0] < 7 ? e[3] : e[0] > 6 && e[0] < 11 ? e[4] : e[5];
    }, function() {
      var e = arguments;
      return 0 === e[0] ? e[1] : 1 === e[0] ? e[2] : 2 === e[0] ? e[3] : e[0] % 100 >= 3 && e[0] % 100 <= 10 ? e[4] : e[0] % 100 >= 11 ? e[5] : e[6];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] : 0 === e[0] || e[0] % 100 > 1 && e[0] % 100 < 11 ? e[2] : e[0] % 100 > 10 && e[0] % 100 < 20 ? e[3] : e[4];
    }, function() {
      var e = arguments;
      return e[0] % 10 == 1 ? e[1] : e[0] % 10 == 2 ? e[2] : e[3];
    }, function() {
      var e = arguments;
      return 11 !== e[0] && e[0] % 10 == 1 ? e[1] : e[2];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] : e[0] % 10 >= 2 && e[0] % 10 <= 4 && (e[0] % 100 < 10 || e[0] % 100 >= 20) ? e[2] : e[3];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] : 2 === e[0] ? e[2] : 8 !== e[0] && 11 !== e[0] ? e[3] : e[4];
    }, function() {
      var e = arguments;
      return 0 === e[0] ? e[1] : e[2];
    }, function() {
      var e = arguments;
      return 1 === e[0] ? e[1] : 2 === e[0] ? e[2] : 3 === e[0] ? e[3] : e[4];
    }, function() {
      var e = arguments;
      return 0 === e[0] ? e[1] : 1 === e[0] ? e[2] : e[3];
    } ],
    getLanguage: function() {
      var e = n.locale.language || n["default"];
      return /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/.exec(e) ? e : n["default"];
    },
    t: function(e, t) {
      if ("string" == typeof e && e.length) {
        var i, r, o = n.getLanguage(), s = function(e, t, i) {
          return "object" != typeof e || "number" != typeof t || "number" != typeof i ? e : "string" == typeof e ? e : n.pluralForms[i].apply(null, [ t ].concat(e));
        }, a = function(e) {
          var t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
          };
          return e.replace(/[&<>"]/g, function(e) {
            return t[e];
          });
        };
        return n.locale.strings && n.locale.strings[o] && (i = n.locale.strings[o][e], "number" == typeof t && (r = n.locale.strings[o]["mejs.plural-form"], 
        i = s.apply(null, [ i, t, r ]))), !i && n.locale.strings && n.locale.strings[n["default"]] && (i = n.locale.strings[n["default"]][e], 
        "number" == typeof t && (r = n.locale.strings[n["default"]]["mejs.plural-form"], 
        i = s.apply(null, [ i, t, r ]))), i = i || e, "number" == typeof t && (i = i.replace("%1", t)), 
        a(i);
      }
      return e;
    }
  };
  "undefined" != typeof mejsL10n && (n.locale.language = mejsL10n.language), i.i18n = n;
}(document, window, mejs), function(e) {
  "use strict";
  "undefined" != typeof mejsL10n && (e[mejsL10n.language] = mejsL10n.strings);
}(mejs.i18n.locale.strings), function(e) {
  "use strict";
  e.en === undefined && (e.en = {
    "mejs.plural-form": 1,
    "mejs.download-file": "Download File",
    "mejs.fullscreen-off": "Turn off Fullscreen",
    "mejs.fullscreen-on": "Go Fullscreen",
    "mejs.download-video": "Download Video",
    "mejs.fullscreen": "Fullscreen",
    "mejs.time-jump-forward": [ "Jump forward 1 second", "Jump forward %1 seconds" ],
    "mejs.play": "Play",
    "mejs.pause": "Pause",
    "mejs.close": "Close",
    "mejs.time-slider": "Time Slider",
    "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
    "mejs.time-skip-back": [ "Skip back 1 second", "Skip back %1 seconds" ],
    "mejs.captions-subtitles": "Captions/Subtitles",
    "mejs.none": "None",
    "mejs.mute-toggle": "Mute Toggle",
    "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
    "mejs.unmute": "Unmute",
    "mejs.mute": "Mute",
    "mejs.volume-slider": "Volume Slider",
    "mejs.video-player": "Video Player",
    "mejs.audio-player": "Audio Player",
    "mejs.ad-skip": "Skip ad",
    "mejs.ad-skip-info": [ "Skip in 1 second", "Skip in %1 seconds" ],
    "mejs.source-chooser": "Source Chooser"
  });
}(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof Zepto ? (mejs.$ = Zepto, 
Zepto.fn.outerWidth = function(e) {
  var t = $(this).width();
  return e && (t += parseInt($(this).css("margin-right"), 10), t += parseInt($(this).css("margin-left"), 10)), 
  t;
}) : "undefined" != typeof ender && (mejs.$ = ender), function(e) {
  mejs.MepDefaults = {
    poster: "",
    showPosterWhenEnded: !1,
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    videoWidth: -1,
    videoHeight: -1,
    defaultAudioWidth: 400,
    defaultAudioHeight: 30,
    defaultSeekBackwardInterval: function(e) {
      return .05 * e.duration;
    },
    defaultSeekForwardInterval: function(e) {
      return .05 * e.duration;
    },
    setDimensions: !0,
    audioWidth: -1,
    audioHeight: -1,
    startVolume: .8,
    loop: !1,
    autoRewind: !0,
    enableAutosize: !0,
    timeFormat: "",
    alwaysShowHours: !1,
    showTimecodeFrameCount: !1,
    framesPerSecond: 25,
    autosizeProgress: !0,
    alwaysShowControls: !1,
    hideVideoControlsOnLoad: !1,
    clickToPlayPause: !0,
    controlsTimeoutDefault: 1500,
    controlsTimeoutMouseEnter: 2500,
    controlsTimeoutMouseLeave: 1e3,
    iPadUseNativeControls: !1,
    iPhoneUseNativeControls: !1,
    AndroidUseNativeControls: !1,
    features: [ "playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen" ],
    isVideo: !0,
    stretching: "auto",
    enableKeyboard: !0,
    pauseOtherPlayers: !0,
    keyActions: [ {
      keys: [ 32, 179 ],
      action: function(e, t) {
        mejs.MediaFeatures.isFirefox || (t.paused || t.ended ? t.play() : t.pause());
      }
    }, {
      keys: [ 38 ],
      action: function(e, t) {
        e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), 
        e.startControlsTimer());
        var i = Math.min(t.volume + .1, 1);
        t.setVolume(i);
      }
    }, {
      keys: [ 40 ],
      action: function(e, t) {
        e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), 
        e.startControlsTimer());
        var i = Math.max(t.volume - .1, 0);
        t.setVolume(i);
      }
    }, {
      keys: [ 37, 227 ],
      action: function(e, t) {
        if (!isNaN(t.duration) && t.duration > 0) {
          e.isVideo && (e.showControls(), e.startControlsTimer());
          var i = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
          t.setCurrentTime(i);
        }
      }
    }, {
      keys: [ 39, 228 ],
      action: function(e, t) {
        if (!isNaN(t.duration) && t.duration > 0) {
          e.isVideo && (e.showControls(), e.startControlsTimer());
          var i = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
          t.setCurrentTime(i);
        }
      }
    }, {
      keys: [ 70 ],
      action: function(e) {
        "undefined" != typeof e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen());
      }
    }, {
      keys: [ 77 ],
      action: function(e) {
        e.container.find(".mejs-volume-slider").css("display", "block"), e.isVideo && (e.showControls(), 
        e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0);
      }
    } ]
  }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function(t, i) {
    if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(t, i);
    var n = this;
    return n.$media = n.$node = e(t), n.node = n.media = n.$media[0], n.node ? "undefined" != typeof n.node.player ? n.node.player : (void 0 === i && (i = n.$node.data("mejsoptions")), 
    n.options = e.extend({}, mejs.MepDefaults, i), n.options.timeFormat || (n.options.timeFormat = "mm:ss", 
    n.options.alwaysShowHours && (n.options.timeFormat = "hh:mm:ss"), n.options.showTimecodeFrameCount && (n.options.timeFormat += ":ff")), 
    mejs.Utility.calculateTimeFormat(0, n.options, n.options.framesPerSecond || 25), 
    n.id = "mep_" + mejs.mepIndex++, mejs.players[n.id] = n, n.init(), n) : void 0;
  }, mejs.MediaElementPlayer.prototype = {
    hasFocus: !1,
    controlsAreVisible: !0,
    init: function() {
      var t = this, i = mejs.MediaFeatures, n = e.extend(!0, {}, t.options, {
        success: function(e, i) {
          t.meReady(e, i);
        },
        error: function(e) {
          t.handleError(e);
        }
      }), r = t.media.tagName.toLowerCase();
      if (t.isDynamic = "audio" !== r && "video" !== r, t.isDynamic ? t.isVideo = t.options.isVideo : t.isVideo = "audio" !== r && t.options.isVideo, 
      i.isiPad && t.options.iPadUseNativeControls || i.isiPhone && t.options.iPhoneUseNativeControls) t.$media.attr("controls", "controls"), 
      i.isiPad && null !== t.media.getAttribute("autoplay") && t.play(); else if (i.isAndroid && t.options.AndroidUseNativeControls) ; else if (t.isVideo || !t.isVideo && t.options.features.length) {
        t.$media.removeAttr("controls");
        var o = t.isVideo ? mejs.i18n.t("mejs.video-player") : mejs.i18n.t("mejs.audio-player");
        e('<span class="mejs-offscreen">' + o + "</span>").insertBefore(t.$media), t.container = e('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svgAsImg ? "svg" : "no-svg") + '" tabindex="0" role="application" aria-label="' + o + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(t.$media[0].className).insertBefore(t.$media).focus(function(e) {
          if (!t.controlsAreVisible && !t.hasFocus && t.controlsEnabled && (t.showControls(!0), 
          !t.hasMsNativeFullScreen)) {
            var i = ".mejs-playpause-button > button";
            mejs.Utility.isNodeAfter(e.relatedTarget, t.container[0]) && (i = ".mejs-controls .mejs-button:last-child > button"), 
            t.container.find(i).focus();
          }
        }), t.options.features.length || t.container.css("background", "transparent").find(".mejs-controls").hide(), 
        t.isVideo && "fill" === t.options.stretching && !t.container.parent("mejs-fill-container").length && (t.outerContainer = t.$media.parent(), 
        t.container.wrap('<div class="mejs-fill-container"/>')), t.container.addClass((i.isAndroid ? "mejs-android " : "") + (i.isiOS ? "mejs-ios " : "") + (i.isiPad ? "mejs-ipad " : "") + (i.isiPhone ? "mejs-iphone " : "") + (t.isVideo ? "mejs-video " : "mejs-audio ")), 
        t.container.find(".mejs-mediaelement").append(t.$media), t.node.player = t, t.controls = t.container.find(".mejs-controls"), 
        t.layers = t.container.find(".mejs-layers");
        var s = t.isVideo ? "video" : "audio", a = s.substring(0, 1).toUpperCase() + s.substring(1);
        t.options[s + "Width"] > 0 || t.options[s + "Width"].toString().indexOf("%") > -1 ? t.width = t.options[s + "Width"] : "" !== t.media.style.width && null !== t.media.style.width ? t.width = t.media.style.width : null !== t.media.getAttribute("width") ? t.width = t.$media.attr("width") : t.width = t.options["default" + a + "Width"], 
        t.options[s + "Height"] > 0 || t.options[s + "Height"].toString().indexOf("%") > -1 ? t.height = t.options[s + "Height"] : "" !== t.media.style.height && null !== t.media.style.height ? t.height = t.media.style.height : null !== t.$media[0].getAttribute("height") ? t.height = t.$media.attr("height") : t.height = t.options["default" + a + "Height"], 
        t.setPlayerSize(t.width, t.height), n.pluginWidth = t.width, n.pluginHeight = t.height;
      } else t.isVideo || t.options.features.length || t.$media.hide();
      mejs.MediaElement(t.$media[0], n), "undefined" != typeof t.container && t.options.features.length && t.controlsAreVisible && t.container.trigger("controlsshown");
    },
    showControls: function(e) {
      var t = this;
      e = void 0 === e || e, t.controlsAreVisible || (e ? (t.controls.removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function() {
        t.controlsAreVisible = !0, t.container.trigger("controlsshown");
      }), t.container.find(".mejs-control").removeClass("mejs-offscreen").stop(!0, !0).fadeIn(200, function() {
        t.controlsAreVisible = !0;
      })) : (t.controls.removeClass("mejs-offscreen").css("display", "block"), t.container.find(".mejs-control").removeClass("mejs-offscreen").css("display", "block"), 
      t.controlsAreVisible = !0, t.container.trigger("controlsshown")), t.setControlsSize());
    },
    hideControls: function(t) {
      var i = this;
      t = void 0 === t || t, !i.controlsAreVisible || i.options.alwaysShowControls || i.keyboardAction || i.media.paused || i.media.ended || (t ? (i.controls.stop(!0, !0).fadeOut(200, function() {
        e(this).addClass("mejs-offscreen").css("display", "block"), i.controlsAreVisible = !1, 
        i.container.trigger("controlshidden");
      }), i.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
        e(this).addClass("mejs-offscreen").css("display", "block");
      })) : (i.controls.addClass("mejs-offscreen").css("display", "block"), i.container.find(".mejs-control").addClass("mejs-offscreen").css("display", "block"), 
      i.controlsAreVisible = !1, i.container.trigger("controlshidden")));
    },
    controlsTimer: null,
    startControlsTimer: function(e) {
      var t = this;
      e = void 0 !== e ? e : t.options.controlsTimeoutDefault, t.killControlsTimer("start"), 
      t.controlsTimer = setTimeout(function() {
        t.hideControls(), t.killControlsTimer("hide");
      }, e);
    },
    killControlsTimer: function() {
      var e = this;
      null !== e.controlsTimer && (clearTimeout(e.controlsTimer), delete e.controlsTimer, 
      e.controlsTimer = null);
    },
    controlsEnabled: !0,
    disableControls: function() {
      var e = this;
      e.killControlsTimer(), e.hideControls(!1), this.controlsEnabled = !1;
    },
    enableControls: function() {
      var e = this;
      e.showControls(!1), e.controlsEnabled = !0;
    },
    meReady: function(t, i) {
      var n, r, o = this, s = mejs.MediaFeatures, a = i.getAttribute("autoplay"), l = !(null == a || "false" === a);
      if (!o.created) {
        if (o.created = !0, o.media = t, o.domNode = i, !(s.isAndroid && o.options.AndroidUseNativeControls || s.isiPad && o.options.iPadUseNativeControls || s.isiPhone && o.options.iPhoneUseNativeControls)) {
          if (!o.isVideo && !o.options.features.length) return l && "native" == t.pluginType && o.play(), 
          void (o.options.success && ("string" == typeof o.options.success ? window[o.options.success](o.media, o.domNode, o) : o.options.success(o.media, o.domNode, o)));
          for (n in o.buildposter(o, o.controls, o.layers, o.media), o.buildkeyboard(o, o.controls, o.layers, o.media), 
          o.buildoverlays(o, o.controls, o.layers, o.media), o.findTracks(), o.options.features) if (r = o.options.features[n], 
          o["build" + r]) try {
            o["build" + r](o, o.controls, o.layers, o.media);
          } catch (c) {}
          o.container.trigger("controlsready"), o.setPlayerSize(o.width, o.height), o.setControlsSize(), 
          o.isVideo && (mejs.MediaFeatures.hasTouch && !o.options.alwaysShowControls ? o.$media.bind("touchstart", function() {
            o.controlsAreVisible ? o.hideControls(!1) : o.controlsEnabled && o.showControls(!1);
          }) : (o.clickToPlayPauseCallback = function() {
            if (o.options.clickToPlayPause) {
              o.media.paused ? o.play() : o.pause();
              var e = o.$media.closest(".mejs-container").find(".mejs-overlay-button"), t = e.attr("aria-pressed");
              e.attr("aria-pressed", !t);
            }
          }, o.media.addEventListener("click", o.clickToPlayPauseCallback, !1), o.container.bind("mouseenter", function() {
            o.controlsEnabled && (o.options.alwaysShowControls || (o.killControlsTimer("enter"), 
            o.showControls(), o.startControlsTimer(o.options.controlsTimeoutMouseEnter)));
          }).bind("mousemove", function() {
            o.controlsEnabled && (o.controlsAreVisible || o.showControls(), o.options.alwaysShowControls || o.startControlsTimer(o.options.controlsTimeoutMouseEnter));
          }).bind("mouseleave", function() {
            o.controlsEnabled && (o.media.paused || o.options.alwaysShowControls || o.startControlsTimer(o.options.controlsTimeoutMouseLeave));
          })), o.options.hideVideoControlsOnLoad && o.hideControls(!1), l && !o.options.alwaysShowControls && o.hideControls(), 
          o.options.enableAutosize && o.media.addEventListener("loadedmetadata", function(e) {
            o.options.videoHeight <= 0 && null === o.domNode.getAttribute("height") && !isNaN(e.target.videoHeight) && (o.setPlayerSize(e.target.videoWidth, e.target.videoHeight), 
            o.setControlsSize(), o.media.setVideoSize(e.target.videoWidth, e.target.videoHeight));
          }, !1)), o.media.addEventListener("play", function() {
            var e;
            for (e in mejs.players) {
              var t = mejs.players[e];
              t.id == o.id || !o.options.pauseOtherPlayers || t.paused || t.ended || t.pause(), 
              t.hasFocus = !1;
            }
            o.hasFocus = !0;
          }, !1), o.media.addEventListener("ended", function() {
            if (o.options.autoRewind) try {
              o.media.setCurrentTime(0), window.setTimeout(function() {
                e(o.container).find(".mejs-overlay-loading").parent().hide();
              }, 20);
            } catch (t) {}
            "youtube" === o.media.pluginType ? o.media.stop() : o.media.pause(), o.setProgressRail && o.setProgressRail(), 
            o.setCurrentRail && o.setCurrentRail(), o.options.loop ? o.play() : !o.options.alwaysShowControls && o.controlsEnabled && o.showControls();
          }, !1), o.media.addEventListener("loadedmetadata", function() {
            mejs.Utility.calculateTimeFormat(o.duration, o.options, o.options.framesPerSecond || 25), 
            o.updateDuration && o.updateDuration(), o.updateCurrent && o.updateCurrent(), o.isFullScreen || (o.setPlayerSize(o.width, o.height), 
            o.setControlsSize());
          }, !1);
          var u = null;
          o.media.addEventListener("timeupdate", function() {
            u !== this.duration && (u = this.duration, mejs.Utility.calculateTimeFormat(u, o.options, o.options.framesPerSecond || 25), 
            o.updateDuration && o.updateDuration(), o.updateCurrent && o.updateCurrent(), o.setControlsSize());
          }, !1), o.container.focusout(function(t) {
            if (t.relatedTarget) {
              var i = e(t.relatedTarget);
              o.keyboardAction && 0 === i.parents(".mejs-container").length && (o.keyboardAction = !1, 
              o.isVideo && !o.options.alwaysShowControls && o.hideControls(!0));
            }
          }), setTimeout(function() {
            o.setPlayerSize(o.width, o.height), o.setControlsSize();
          }, 50), o.globalBind("resize", function() {
            o.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || o.setPlayerSize(o.width, o.height), 
            o.setControlsSize();
          }), "youtube" == o.media.pluginType && (s.isiOS || s.isAndroid) && (o.container.find(".mejs-overlay-play").hide(), 
          o.container.find(".mejs-poster").hide());
        }
        l && "native" == t.pluginType && o.play(), o.options.success && ("string" == typeof o.options.success ? window[o.options.success](o.media, o.domNode, o) : o.options.success(o.media, o.domNode, o));
      }
    },
    handleError: function(e) {
      var t = this;
      t.controls && t.controls.hide(), t.options.error && t.options.error(e);
    },
    setPlayerSize: function(e, t) {
      var i = this;
      if (!i.options.setDimensions) return !1;
      switch (void 0 !== e && (i.width = e), void 0 !== t && (i.height = t), i.options.stretching) {
       case "fill":
        i.isVideo ? this.setFillMode() : this.setDimensions(i.width, i.height);
        break;

       case "responsive":
        this.setResponsiveMode();
        break;

       case "none":
        this.setDimensions(i.width, i.height);
        break;

       default:
        !0 === this.hasFluidMode() ? this.setResponsiveMode() : this.setDimensions(i.width, i.height);
      }
    },
    hasFluidMode: function() {
      var e = this;
      return e.height.toString().indexOf("%") > 0 || "none" !== e.$node.css("max-width") && "t.width" !== e.$node.css("max-width") || e.$node[0].currentStyle && "100%" === e.$node[0].currentStyle.maxWidth;
    },
    setResponsiveMode: function() {
      var t = this, i = t.isVideo ? t.media.videoWidth && t.media.videoWidth > 0 ? t.media.videoWidth : null !== t.media.getAttribute("width") ? t.media.getAttribute("width") : t.options.defaultVideoWidth : t.options.defaultAudioWidth, n = t.isVideo ? t.media.videoHeight && t.media.videoHeight > 0 ? t.media.videoHeight : null !== t.media.getAttribute("height") ? t.media.getAttribute("height") : t.options.defaultVideoHeight : t.options.defaultAudioHeight, r = t.container.parent().closest(":visible").width(), o = t.container.parent().closest(":visible").height(), s = t.isVideo || !t.options.autosizeProgress ? parseInt(r * n / i, 10) : n;
      (isNaN(s) || 0 !== o && s > o && o > n) && (s = o), t.container.parent().length > 0 && "body" === t.container.parent()[0].tagName.toLowerCase() && (r = e(window).width(), 
      s = e(window).height()), s && r && (t.container.width(r).height(s), t.$media.add(t.container.find(".mejs-shim")).width("100%").height("100%"), 
      t.isVideo && t.media.setVideoSize && t.media.setVideoSize(r, s), t.layers.children(".mejs-layer").width("100%").height("100%"));
    },
    setFillMode: function() {
      var e = this, t = e.outerContainer;
      t.width() || t.height(e.$media.width()), t.height() || t.height(e.$media.height());
      var i = t.width(), n = t.height();
      e.setDimensions("100%", "100%"), e.container.find(".mejs-poster img").css("display", "block"), 
      targetElement = e.container.find("object, embed, iframe, video");
      var r = e.height, o = e.width, s = i, a = r * i / o, l = o * n / r, u = n, c = !(l > i), d = c ? Math.floor(s) : Math.floor(l), h = c ? Math.floor(a) : Math.floor(u);
      c ? (targetElement.height(h).width(i), e.media.setVideoSize && e.media.setVideoSize(i, h)) : (targetElement.height(n).width(d), 
      e.media.setVideoSize && e.media.setVideoSize(d, n)), targetElement.css({
        "margin-left": Math.floor((i - d) / 2),
        "margin-top": 0
      });
    },
    setDimensions: function(e, t) {
      var i = this;
      i.container.width(e).height(t), i.layers.children(".mejs-layer").width(e).height(t);
    },
    setControlsSize: function() {
      var t = this, i = 0, n = 0, r = t.controls.find(".mejs-time-rail"), o = t.controls.find(".mejs-time-total"), s = r.siblings(), a = s.last(), l = null, u = t.options && !t.options.autosizeProgress;
      if (t.container.is(":visible") && r.length && r.is(":visible")) {
        u && (n = parseInt(r.css("width"), 10)), 0 !== n && n || (s.each(function() {
          var t = e(this);
          "absolute" != t.css("position") && t.is(":visible") && (i += e(this).outerWidth(!0));
        }), n = t.controls.width() - i - (r.outerWidth(!0) - r.width()));
        do {
          u || r.width(n), o.width(n - (o.outerWidth(!0) - o.width())), "absolute" != a.css("position") && (l = a.length ? a.position() : null, 
          n--);
        } while (null !== l && l.top.toFixed(2) > 0 && n > 0);
        t.container.trigger("controlsresize");
      }
    },
    buildposter: function(t, i, n, r) {
      var o = this, s = e('<div class="mejs-poster mejs-layer"></div>').appendTo(n), a = t.$media.attr("poster");
      "" !== t.options.poster && (a = t.options.poster), a ? o.setPoster(a) : s.hide(), 
      r.addEventListener("play", function() {
        s.hide();
      }, !1), t.options.showPosterWhenEnded && t.options.autoRewind && r.addEventListener("ended", function() {
        s.show();
      }, !1);
    },
    setPoster: function(t) {
      var i = this.container.find(".mejs-poster"), n = i.find("img");
      0 === n.length && (n = e('<img width="100%" height="100%" alt="" />').appendTo(i)), 
      n.attr("src", t), i.css({
        "background-image": "url(" + t + ")"
      });
    },
    buildoverlays: function(t, i, n, r) {
      var o = this;
      if (t.isVideo) {
        var s = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(n), a = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(n), l = e('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button" role="button" aria-label="' + mejs.i18n.t("mejs.play") + '" aria-pressed="false"></div></div>').appendTo(n).bind("click", function() {
          if (o.options.clickToPlayPause) {
            r.paused && r.play();
            var t = e(this).find(".mejs-overlay-button"), i = t.attr("aria-pressed");
            t.attr("aria-pressed", !!i);
          }
        });
        r.addEventListener("play", function() {
          l.hide(), s.hide(), i.find(".mejs-time-buffering").hide(), a.hide();
        }, !1), r.addEventListener("playing", function() {
          l.hide(), s.hide(), i.find(".mejs-time-buffering").hide(), a.hide();
        }, !1), r.addEventListener("seeking", function() {
          s.show(), i.find(".mejs-time-buffering").show();
        }, !1), r.addEventListener("seeked", function() {
          s.hide(), i.find(".mejs-time-buffering").hide();
        }, !1), r.addEventListener("pause", function() {
          mejs.MediaFeatures.isiPhone || l.show();
        }, !1), r.addEventListener("waiting", function() {
          s.show(), i.find(".mejs-time-buffering").show();
        }, !1), r.addEventListener("loadeddata", function() {
          s.show(), i.find(".mejs-time-buffering").show(), mejs.MediaFeatures.isAndroid && (r.canplayTimeout = window.setTimeout(function() {
            if (document.createEvent) {
              var e = document.createEvent("HTMLEvents");
              return e.initEvent("canplay", !0, !0), r.dispatchEvent(e);
            }
          }, 300));
        }, !1), r.addEventListener("canplay", function() {
          s.hide(), i.find(".mejs-time-buffering").hide(), clearTimeout(r.canplayTimeout);
        }, !1), r.addEventListener("error", function(e) {
          o.handleError(e), s.hide(), l.hide(), a.show(), a.find(".mejs-overlay-error").html("Error loading this resource");
        }, !1), r.addEventListener("keydown", function(e) {
          o.onkeydown(t, r, e);
        }, !1);
      }
    },
    buildkeyboard: function(t, i, n, r) {
      var o = this;
      o.container.keydown(function() {
        o.keyboardAction = !0;
      }), o.globalBind("keydown", function(i) {
        return t.hasFocus = 0 !== e(i.target).closest(".mejs-container").length && e(i.target).closest(".mejs-container").attr("id") === t.$media.closest(".mejs-container").attr("id"), 
        o.onkeydown(t, r, i);
      }), o.globalBind("click", function(i) {
        t.hasFocus = 0 !== e(i.target).closest(".mejs-container").length;
      });
    },
    onkeydown: function(e, t, i) {
      if (e.hasFocus && e.options.enableKeyboard) for (var n = 0, r = e.options.keyActions.length; n < r; n++) for (var o = e.options.keyActions[n], s = 0, a = o.keys.length; s < a; s++) if (i.keyCode == o.keys[s]) return "function" == typeof i.preventDefault && i.preventDefault(), 
      o.action(e, t, i.keyCode, i), !1;
      return !0;
    },
    findTracks: function() {
      var t = this, i = t.$media.find("track");
      t.tracks = [], i.each(function(i, n) {
        n = e(n), t.tracks.push({
          srclang: n.attr("srclang") ? n.attr("srclang").toLowerCase() : "",
          src: n.attr("src"),
          kind: n.attr("kind"),
          label: n.attr("label") || "",
          entries: [],
          isLoaded: !1
        });
      });
    },
    changeSkin: function(e) {
      this.container[0].className = "mejs-container " + e, this.setPlayerSize(this.width, this.height), 
      this.setControlsSize();
    },
    play: function() {
      this.load(), this.media.play();
    },
    pause: function() {
      try {
        this.media.pause();
      } catch (e) {}
    },
    load: function() {
      this.isLoaded || this.media.load(), this.isLoaded = !0;
    },
    setMuted: function(e) {
      this.media.setMuted(e);
    },
    setCurrentTime: function(e) {
      this.media.setCurrentTime(e);
    },
    getCurrentTime: function() {
      return this.media.currentTime;
    },
    setVolume: function(e) {
      this.media.setVolume(e);
    },
    getVolume: function() {
      return this.media.volume;
    },
    setSrc: function(e) {
      var t = this;
      if ("youtube" === t.media.pluginType) {
        var i, n, r;
        if ("string" != typeof e) for (n = 0; n < e.length; n++) if (r = e[n], this.canPlayType(r.type)) {
          e = r.src;
          break;
        }
        if (-1 !== e.lastIndexOf("youtu.be")) -1 !== (i = e.substr(e.lastIndexOf("/") + 1)).indexOf("?") && (i = i.substr(0, i.indexOf("?"))); else {
          var o = e.match(/[?&]v=([^&#]+)|&|#|$/);
          o && (i = o[1]);
        }
        null !== t.media.getAttribute("autoplay") ? t.media.pluginApi.loadVideoById(i) : t.media.pluginApi.cueVideoById(i);
      } else t.media.setSrc(e);
    },
    remove: function() {
      var e, t, i = this;
      for (e in i.container.prev(".mejs-offscreen").remove(), i.options.features) if (i["clean" + (t = i.options.features[e])]) try {
        i["clean" + t](i);
      } catch (n) {}
      i.isDynamic ? i.$node.insertBefore(i.container) : (i.$media.prop("controls", !0), 
      i.$node.clone().insertBefore(i.container).show(), i.$node.remove()), "native" !== i.media.pluginType && i.media.remove(), 
      delete mejs.players[i.id], "object" == typeof i.container && i.container.remove(), 
      i.globalUnbind(), delete i.node.player;
    },
    rebuildtracks: function() {
      var e = this;
      e.findTracks(), e.buildtracks(e, e.controls, e.layers, e.media);
    },
    resetSize: function() {
      var e = this;
      setTimeout(function() {
        e.setPlayerSize(e.width, e.height), e.setControlsSize();
      }, 50);
    }
  }, function() {
    function t(t, n) {
      var r = {
        d: [],
        w: []
      };
      return e.each((t || "").split(" "), function(e, t) {
        var o = t + "." + n;
        0 === o.indexOf(".") ? (r.d.push(o), r.w.push(o)) : r[i.test(t) ? "w" : "d"].push(o);
      }), r.d = r.d.join(" "), r.w = r.w.join(" "), r;
    }
    var i = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
    mejs.MediaElementPlayer.prototype.globalBind = function(i, n, r) {
      var o = this, s = o.node ? o.node.ownerDocument : document;
      (i = t(i, o.id)).d && e(s).bind(i.d, n, r), i.w && e(window).bind(i.w, n, r);
    }, mejs.MediaElementPlayer.prototype.globalUnbind = function(i, n) {
      var r = this, o = r.node ? r.node.ownerDocument : document;
      (i = t(i, r.id)).d && e(o).unbind(i.d, n), i.w && e(window).unbind(i.w, n);
    };
  }(), void 0 !== e && (e.fn.mediaelementplayer = function(t) {
    return !1 === t ? this.each(function() {
      var t = e(this).data("mediaelementplayer");
      t && t.remove(), e(this).removeData("mediaelementplayer");
    }) : this.each(function() {
      e(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, t));
    }), this;
  }, e(document).ready(function() {
    e(".mejs-player").mediaelementplayer();
  })), window.MediaElementPlayer = mejs.MediaElementPlayer;
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    playText: "",
    pauseText: ""
  }), e.extend(MediaElementPlayer.prototype, {
    buildplaypause: function(t, i, n, r) {
      function o(e) {
        "play" === e ? (c.removeClass("mejs-play").addClass("mejs-pause"), d.attr({
          title: u,
          "aria-label": u
        })) : (c.removeClass("mejs-pause").addClass("mejs-play"), d.attr({
          title: l,
          "aria-label": l
        }));
      }
      var s = this, a = s.options, l = a.playText ? a.playText : mejs.i18n.t("mejs.play"), u = a.pauseText ? a.pauseText : mejs.i18n.t("mejs.pause"), c = e('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + s.id + '" title="' + l + '" aria-label="' + u + '"></button></div>').appendTo(i).click(function(e) {
        return e.preventDefault(), r.paused ? r.play() : r.pause(), !1;
      }), d = c.find("button");
      o("pse"), r.addEventListener("play", function() {
        o("play");
      }, !1), r.addEventListener("playing", function() {
        o("play");
      }, !1), r.addEventListener("pause", function() {
        o("pse");
      }, !1), r.addEventListener("paused", function() {
        o("pse");
      }, !1);
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    stopText: "Stop"
  }), e.extend(MediaElementPlayer.prototype, {
    buildstop: function(t, i, n, r) {
      var o = this;
      e('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + o.id + '" title="' + o.options.stopText + '" aria-label="' + o.options.stopText + '"></button></div>').appendTo(i).click(function() {
        r.paused || r.pause(), r.currentTime > 0 && (r.setCurrentTime(0), r.pause(), i.find(".mejs-time-current").width("0px"), 
        i.find(".mejs-time-handle").css("left", "0px"), i.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0, t.options)), 
        i.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0, t.options)), 
        n.find(".mejs-poster").show());
      });
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    enableProgressTooltip: !0,
    progressHelpText: ""
  }), e.extend(MediaElementPlayer.prototype, {
    buildprogress: function(t, i, n, r) {
      var o = this, s = !1, a = 0, l = !1, u = t.options.autoRewind, c = (o.options.progressHelpText ? o.options.progressHelpText : mejs.i18n.t("mejs.time-help-text"), 
      t.options.enableProgressTooltip ? '<span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span>' : "");
      e('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span>' + c + "</span></div>").appendTo(i), 
      i.find(".mejs-time-buffering").hide(), o.total = i.find(".mejs-time-total"), o.loaded = i.find(".mejs-time-loaded"), 
      o.current = i.find(".mejs-time-current"), o.handle = i.find(".mejs-time-handle"), 
      o.timefloat = i.find(".mejs-time-float"), o.timefloatcurrent = i.find(".mejs-time-float-current"), 
      o.slider = i.find(".mejs-time-slider");
      var d = function(e) {
        var i, n = o.total.offset(), a = o.total.width(), l = 0, u = 0, c = 0;
        i = e.originalEvent && e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX : e.changedTouches ? e.changedTouches[0].pageX : e.pageX, 
        r.duration && (i < n.left ? i = n.left : i > a + n.left && (i = a + n.left), u = (l = (c = i - n.left) / a) <= .02 ? 0 : l * r.duration, 
        s && u !== r.currentTime && r.setCurrentTime(u), mejs.MediaFeatures.hasTouch || (o.timefloat.css("left", c), 
        o.timefloatcurrent.html(mejs.Utility.secondsToTimeCode(u, t.options)), o.timefloat.show()));
      }, h = function() {
        var e = r.currentTime, i = mejs.i18n.t("mejs.time-slider"), n = mejs.Utility.secondsToTimeCode(e, t.options), s = r.duration;
        o.slider.attr({
          "aria-label": i,
          "aria-valuemin": 0,
          "aria-valuemax": s,
          "aria-valuenow": e,
          "aria-valuetext": n,
          role: "slider",
          tabindex: 0
        });
      }, f = function() {
        new Date() - a >= 1e3 && r.play();
      };
      o.slider.bind("focus", function() {
        t.options.autoRewind = !1;
      }), o.slider.bind("blur", function() {
        t.options.autoRewind = u;
      }), o.slider.bind("keydown", function(e) {
        new Date() - a >= 1e3 && (l = r.paused);
        var i = e.keyCode, n = r.duration, o = r.currentTime, s = t.options.defaultSeekForwardInterval(r), u = t.options.defaultSeekBackwardInterval(r);
        switch (i) {
         case 37:
         case 40:
          o -= u;
          break;

         case 39:
         case 38:
          o += s;
          break;

         case 36:
          o = 0;
          break;

         case 35:
          o = n;
          break;

         case 32:
         case 13:
          return void (r.paused ? r.play() : r.pause());

         default:
          return;
        }
        return o = o < 0 ? 0 : o >= n ? n : Math.floor(o), a = new Date(), l || r.pause(), 
        o < r.duration && !l && setTimeout(f, 1100), r.setCurrentTime(o), e.preventDefault(), 
        e.stopPropagation(), !1;
      }), o.total.bind("mousedown touchstart", function(e) {
        1 !== e.which && 0 !== e.which || (s = !0, d(e), o.globalBind("mousemove.dur touchmove.dur", function(e) {
          d(e);
        }), o.globalBind("mouseup.dur touchend.dur", function() {
          s = !1, "undefined" != typeof o.timefloat && o.timefloat.hide(), o.globalUnbind(".dur");
        }));
      }).bind("mouseenter", function() {
        !0, o.globalBind("mousemove.dur", function(e) {
          d(e);
        }), "undefined" == typeof o.timefloat || mejs.MediaFeatures.hasTouch || o.timefloat.show();
      }).bind("mouseleave", function() {
        !1, s || (o.globalUnbind(".dur"), "undefined" != typeof o.timefloat && o.timefloat.hide());
      }), r.addEventListener("progress", function(e) {
        t.setProgressRail(e), t.setCurrentRail(e);
      }, !1), r.addEventListener("timeupdate", function(e) {
        t.setProgressRail(e), t.setCurrentRail(e), h(e);
      }, !1), o.container.on("controlsresize", function(e) {
        t.setProgressRail(e), t.setCurrentRail(e);
      });
    },
    setProgressRail: function(e) {
      var t = this, i = e !== undefined ? e.target : t.media, n = null;
      i && i.buffered && i.buffered.length > 0 && i.buffered.end && i.duration ? n = i.buffered.end(i.buffered.length - 1) / i.duration : i && i.bytesTotal !== undefined && i.bytesTotal > 0 && i.bufferedBytes !== undefined ? n = i.bufferedBytes / i.bytesTotal : e && e.lengthComputable && 0 !== e.total && (n = e.loaded / e.total), 
      null !== n && (n = Math.min(1, Math.max(0, n)), t.loaded && t.total && t.loaded.width(t.total.width() * n));
    },
    setCurrentRail: function() {
      var e = this;
      if (e.media.currentTime !== undefined && e.media.duration && e.total && e.handle) {
        var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration), i = t - Math.round(e.handle.outerWidth(!0) / 2);
        e.current.width(t), e.handle.css("left", i);
      }
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    duration: -1,
    timeAndDurationSeparator: "<span> | </span>"
  }), e.extend(MediaElementPlayer.prototype, {
    buildcurrent: function(t, i, n, r) {
      var o = this;
      e('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + mejs.Utility.secondsToTimeCode(0, t.options) + "</span></div>").appendTo(i), 
      o.currenttime = o.controls.find(".mejs-currenttime"), r.addEventListener("timeupdate", function() {
        o.controlsAreVisible && t.updateCurrent();
      }, !1);
    },
    buildduration: function(t, i, n, r) {
      var o = this;
      i.children().last().find(".mejs-currenttime").length > 0 ? e(o.options.timeAndDurationSeparator + '<span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(o.options.duration, o.options) + "</span>").appendTo(i.find(".mejs-time")) : (i.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), 
      e('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(o.options.duration, o.options) + "</span></div>").appendTo(i)), 
      o.durationD = o.controls.find(".mejs-duration"), r.addEventListener("timeupdate", function() {
        o.controlsAreVisible && t.updateDuration();
      }, !1);
    },
    updateCurrent: function() {
      var e = this, t = e.media.currentTime;
      isNaN(t) && (t = 0), e.currenttime && e.currenttime.html(mejs.Utility.secondsToTimeCode(t, e.options));
    },
    updateDuration: function() {
      var e = this, t = e.media.duration;
      e.options.duration > 0 && (t = e.options.duration), isNaN(t) && (t = 0), e.container.toggleClass("mejs-long-video", t > 3600), 
      e.durationD && t > 0 && e.durationD.html(mejs.Utility.secondsToTimeCode(t, e.options));
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    muteText: mejs.i18n.t("mejs.mute-toggle"),
    allyVolumeControlText: mejs.i18n.t("mejs.volume-help-text"),
    hideVolumeOnTouchDevices: !0,
    audioVolume: "horizontal",
    videoVolume: "vertical"
  }), e.extend(MediaElementPlayer.prototype, {
    buildvolume: function(t, i, n, r) {
      if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
        var o = this, s = o.isVideo ? o.options.videoVolume : o.options.audioVolume, a = "horizontal" == s ? e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '" aria-label="' + o.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + o.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(i) : e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '" aria-label="' + o.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + o.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(i), l = o.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"), u = o.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"), c = o.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"), d = o.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"), h = function(e, t) {
          if (!l.is(":visible") && void 0 === t) return l.show(), h(e, !0), void l.hide();
          e = Math.max(0, e), 0 === (e = Math.min(e, 1)) ? (a.removeClass("mejs-mute").addClass("mejs-unmute"), 
          a.children("button").attr("title", mejs.i18n.t("mejs.unmute")).attr("aria-label", mejs.i18n.t("mejs.unmute"))) : (a.removeClass("mejs-unmute").addClass("mejs-mute"), 
          a.children("button").attr("title", mejs.i18n.t("mejs.mute")).attr("aria-label", mejs.i18n.t("mejs.mute")));
          var i = u.position();
          if ("vertical" == s) {
            var n = u.height(), r = n - n * e;
            d.css("top", Math.round(i.top + r - d.height() / 2)), c.height(n - r), c.css("top", i.top + r);
          } else {
            var o = u.width() * e;
            d.css("left", Math.round(i.left + o - d.width() / 2)), c.width(Math.round(o));
          }
        }, f = function(e) {
          var t = null, i = u.offset();
          if ("vertical" === s) {
            var n = u.height();
            if (t = (n - (e.pageY - i.top)) / n, 0 === i.top || 0 === i.left) return;
          } else {
            var o = u.width();
            t = (e.pageX - i.left) / o;
          }
          t = Math.max(0, t), t = Math.min(t, 1), h(t), 0 === t ? r.setMuted(!0) : r.setMuted(!1), 
          r.setVolume(t);
        }, p = !1, m = !1;
        a.hover(function() {
          l.show(), m = !0;
        }, function() {
          m = !1, p || "vertical" != s || l.hide();
        });
        var g = function() {
          var e = Math.floor(100 * r.volume);
          l.attr({
            "aria-label": mejs.i18n.t("mejs.volume-slider"),
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e,
            "aria-valuetext": e + "%",
            role: "slider",
            tabindex: 0
          });
        };
        l.bind("mouseover", function() {
          m = !0;
        }).bind("mousedown", function(e) {
          return f(e), o.globalBind("mousemove.vol", function(e) {
            f(e);
          }), o.globalBind("mouseup.vol", function() {
            p = !1, o.globalUnbind(".vol"), m || "vertical" != s || l.hide();
          }), p = !0, !1;
        }).bind("keydown", function(e) {
          var t = e.keyCode, i = r.volume;
          switch (t) {
           case 38:
            i = Math.min(i + .1, 1);
            break;

           case 40:
            i = Math.max(0, i - .1);
            break;

           default:
            return !0;
          }
          return p = !1, h(i), r.setVolume(i), !1;
        }), a.find("button").click(function() {
          r.setMuted(!r.muted);
        }), a.find("button").bind("focus", function() {
          l.show();
        }), r.addEventListener("volumechange", function(e) {
          p || (r.muted ? (h(0), a.removeClass("mejs-mute").addClass("mejs-unmute")) : (h(r.volume), 
          a.removeClass("mejs-unmute").addClass("mejs-mute"))), g(e);
        }, !1), 0 === t.options.startVolume && r.setMuted(!0), "native" === r.pluginType && r.setVolume(t.options.startVolume), 
        o.container.on("controlsresize", function() {
          r.muted ? (h(0), a.removeClass("mejs-mute").addClass("mejs-unmute")) : (h(r.volume), 
          a.removeClass("mejs-unmute").addClass("mejs-mute"));
        });
      }
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    usePluginFullScreen: !0,
    newWindowCallback: function() {
      return "";
    },
    fullscreenText: ""
  }), e.extend(MediaElementPlayer.prototype, {
    isFullScreen: !1,
    isNativeFullScreen: !1,
    isInIframe: !1,
    fullscreenMode: "",
    buildfullscreen: function(t, i, n, r) {
      if (t.isVideo) {
        t.isInIframe = window.location != window.parent.location, r.addEventListener("loadstart", function() {
          t.detectFullscreenMode();
        });
        var o = this, s = null, a = o.options.fullscreenText ? o.options.fullscreenText : mejs.i18n.t("mejs.fullscreen"), l = e('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + o.id + '" title="' + a + '" aria-label="' + a + '"></button></div>').appendTo(i).on("click", function() {
          mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || t.isFullScreen ? t.exitFullScreen() : t.enterFullScreen();
        }).on("mouseover", function() {
          if ("plugin-hover" == o.fullscreenMode) {
            null !== s && (clearTimeout(s), delete s);
            var e = l.offset(), i = t.container.offset();
            r.positionFullscreenButton(e.left - i.left, e.top - i.top, !0);
          }
        }).on("mouseout", function() {
          "plugin-hover" == o.fullscreenMode && (null !== s && (clearTimeout(s), delete s), 
          s = setTimeout(function() {
            r.hideFullscreenButton();
          }, 1500));
        });
        if (t.fullscreenBtn = l, o.globalBind("keydown", function(e) {
          27 == e.keyCode && (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || o.isFullScreen) && t.exitFullScreen();
        }), o.normalHeight = 0, o.normalWidth = 0, mejs.MediaFeatures.hasTrueNativeFullScreen) {
          var u = function() {
            t.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (t.isNativeFullScreen = !0, 
            t.setControlsSize()) : (t.isNativeFullScreen = !1, t.exitFullScreen()));
          };
          t.globalBind(mejs.MediaFeatures.fullScreenEventName, u);
        }
      }
    },
    detectFullscreenMode: function() {
      var e = this, t = "", i = mejs.MediaFeatures;
      return i.hasTrueNativeFullScreen && "native" === e.media.pluginType ? t = "native-native" : i.hasTrueNativeFullScreen && "native" !== e.media.pluginType && !i.hasFirefoxPluginMovingProblem ? t = "plugin-native" : e.usePluginFullScreen ? mejs.MediaFeatures.supportsPointerEvents ? (t = "plugin-click", 
      e.createPluginClickThrough()) : t = "plugin-hover" : t = "fullwindow", e.fullscreenMode = t, 
      t;
    },
    isPluginClickThroughCreated: !1,
    createPluginClickThrough: function() {
      var t = this;
      if (!t.isPluginClickThroughCreated) {
        var i, n, r = !1, o = function() {
          if (r) {
            for (var e in s) s[e].hide();
            t.fullscreenBtn.css("pointer-events", ""), t.controls.css("pointer-events", ""), 
            t.media.removeEventListener("click", t.clickToPlayPauseCallback), r = !1;
          }
        }, s = {}, a = [ "top", "left", "right", "bottom" ], l = function() {
          var e = fullscreenBtn.offset().left - t.container.offset().left, n = fullscreenBtn.offset().top - t.container.offset().top, r = fullscreenBtn.outerWidth(!0), o = fullscreenBtn.outerHeight(!0), a = t.container.width(), l = t.container.height();
          for (i in s) s[i].css({
            position: "absolute",
            top: 0,
            left: 0
          });
          s.top.width(a).height(n), s.left.width(e).height(o).css({
            top: n
          }), s.right.width(a - e - r).height(o).css({
            top: n,
            left: e + r
          }), s.bottom.width(a).height(l - o - n).css({
            top: n + o
          });
        };
        for (t.globalBind("resize", function() {
          l();
        }), i = 0, n = a.length; i < n; i++) s[a[i]] = e('<div class="mejs-fullscreen-hover" />').appendTo(t.container).mouseover(o).hide();
        fullscreenBtn.on("mouseover", function() {
          if (!t.isFullScreen) {
            var e = fullscreenBtn.offset(), n = player.container.offset();
            for (i in media.positionFullscreenButton(e.left - n.left, e.top - n.top, !1), t.fullscreenBtn.css("pointer-events", "none"), 
            t.controls.css("pointer-events", "none"), t.media.addEventListener("click", t.clickToPlayPauseCallback), 
            s) s[i].show();
            l(), r = !0;
          }
        }), media.addEventListener("fullscreenchange", function() {
          t.isFullScreen = !t.isFullScreen, t.isFullScreen ? t.media.removeEventListener("click", t.clickToPlayPauseCallback) : t.media.addEventListener("click", t.clickToPlayPauseCallback), 
          o();
        }), t.globalBind("mousemove", function(e) {
          if (r) {
            var i = fullscreenBtn.offset();
            (e.pageY < i.top || e.pageY > i.top + fullscreenBtn.outerHeight(!0) || e.pageX < i.left || e.pageX > i.left + fullscreenBtn.outerWidth(!0)) && (fullscreenBtn.css("pointer-events", ""), 
            t.controls.css("pointer-events", ""), r = !1);
          }
        }), t.isPluginClickThroughCreated = !0;
      }
    },
    cleanfullscreen: function(e) {
      e.exitFullScreen();
    },
    containerSizeTimeout: null,
    enterFullScreen: function() {
      var t = this;
      if (mejs.MediaFeatures.isiOS && mejs.MediaFeatures.hasiOSFullScreen && "function" == typeof t.media.webkitEnterFullscreen) t.media.webkitEnterFullscreen(); else {
        e(document.documentElement).addClass("mejs-fullscreen"), t.normalHeight = t.container.height(), 
        t.normalWidth = t.container.width(), "native-native" === t.fullscreenMode || "plugin-native" === t.fullscreenMode ? (mejs.MediaFeatures.requestFullScreen(t.container[0]), 
        t.isInIframe && setTimeout(function n() {
          if (t.isNativeFullScreen) {
            var i = .002, r = e(window).width(), o = screen.width;
            Math.abs(o - r) > o * i ? t.exitFullScreen() : setTimeout(n, 500);
          }
        }, 1e3)) : t.fullscreeMode, t.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), 
        t.containerSizeTimeout = setTimeout(function() {
          t.container.css({
            width: "100%",
            height: "100%"
          }), t.setControlsSize();
        }, 500), "native" === t.media.pluginType ? t.$media.width("100%").height("100%") : (t.container.find(".mejs-shim").width("100%").height("100%"), 
        setTimeout(function() {
          var i = e(window), n = i.width(), r = i.height();
          t.media.setVideoSize(n, r);
        }, 500)), t.layers.children("div").width("100%").height("100%"), t.fullscreenBtn && t.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), 
        t.setControlsSize(), t.isFullScreen = !0;
        var i = Math.min(screen.width / t.width, screen.height / t.height);
        t.container.find(".mejs-captions-text").css("font-size", 100 * i + "%"), t.container.find(".mejs-captions-text").css("line-height", "normal"), 
        t.container.find(".mejs-captions-position").css("bottom", "45px"), t.container.trigger("enteredfullscreen");
      }
    },
    exitFullScreen: function() {
      var t = this;
      clearTimeout(t.containerSizeTimeout), mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), 
      e(document.documentElement).removeClass("mejs-fullscreen"), t.container.removeClass("mejs-container-fullscreen").width(t.normalWidth).height(t.normalHeight), 
      "native" === t.media.pluginType ? t.$media.width(t.normalWidth).height(t.normalHeight) : (t.container.find(".mejs-shim").width(t.normalWidth).height(t.normalHeight), 
      t.media.setVideoSize(t.normalWidth, t.normalHeight)), t.layers.children("div").width(t.normalWidth).height(t.normalHeight), 
      t.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), t.setControlsSize(), 
      t.isFullScreen = !1, t.container.find(".mejs-captions-text").css("font-size", ""), 
      t.container.find(".mejs-captions-text").css("line-height", ""), t.container.find(".mejs-captions-position").css("bottom", ""), 
      t.container.trigger("exitedfullscreen");
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    speeds: [ "2.00", "1.50", "1.25", "1.00", "0.75" ],
    defaultSpeed: "1.00",
    speedChar: "x"
  }), e.extend(MediaElementPlayer.prototype, {
    buildspeed: function(t, i, n, r) {
      var o = this;
      if ("native" == o.media.pluginType) {
        for (var s = null, a = null, l = null, u = null, c = [], d = !1, h = 0, f = o.options.speeds.length; h < f; h++) {
          var p = o.options.speeds[h];
          "string" == typeof p ? (c.push({
            name: p + o.options.speedChar,
            value: p
          }), p === o.options.defaultSpeed && (d = !0)) : (c.push(p), p.value === o.options.defaultSpeed && (d = !0));
        }
        d || c.push({
          name: o.options.defaultSpeed + o.options.speedChar,
          value: o.options.defaultSpeed
        }), c.sort(function(e, t) {
          return parseFloat(t.value) - parseFloat(e.value);
        });
        var m = function(e) {
          for (h = 0, f = c.length; h < f; h++) if (c[h].value === e) return c[h].name;
        }, g = '<div class="mejs-button mejs-speed-button"><button type="button">' + m(o.options.defaultSpeed) + '</button><div class="mejs-speed-selector"><ul>';
        for (h = 0, il = c.length; h < il; h++) u = o.id + "-speed-" + c[h].value, g += '<li><input type="radio" name="speed" value="' + c[h].value + '" id="' + u + '" ' + (c[h].value === o.options.defaultSpeed ? " checked" : "") + ' /><label for="' + u + '" ' + (c[h].value === o.options.defaultSpeed ? ' class="mejs-speed-selected"' : "") + ">" + c[h].name + "</label></li>";
        s = e(g += "</ul></div></div>").appendTo(i), a = s.find(".mejs-speed-selector"), 
        l = o.options.defaultSpeed, r.addEventListener("loadedmetadata", function() {
          l && (r.playbackRate = parseFloat(l));
        }, !0), a.on("click", 'input[type="radio"]', function() {
          var t = e(this).attr("value");
          l = t, r.playbackRate = parseFloat(t), s.find("button").html(m(t)), s.find(".mejs-speed-selected").removeClass("mejs-speed-selected"), 
          s.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected");
        }), s.one("mouseenter focusin", function() {
          a.height(s.find(".mejs-speed-selector ul").outerHeight(!0) + s.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * a.height() + "px");
        });
      }
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    startLanguage: "",
    tracksText: "",
    tracksAriaLive: !1,
    hideCaptionsButtonWhenEmpty: !0,
    toggleCaptionsButtonWhenOnlyOne: !1,
    slidesSelector: ""
  }), e.extend(MediaElementPlayer.prototype, {
    hasChapters: !1,
    cleartracks: function(e) {
      e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), 
      e.captionsButton && e.captionsButton.remove());
    },
    buildtracks: function(t, i, n, r) {
      if (0 !== t.tracks.length) {
        var o, s, a = this, l = a.options.tracksAriaLive ? 'role="log" aria-live="assertive" aria-atomic="false"' : "", u = a.options.tracksText ? a.options.tracksText : mejs.i18n.t("mejs.captions-subtitles");
        if (a.domNode.textTracks) for (o = a.domNode.textTracks.length - 1; o >= 0; o--) a.domNode.textTracks[o].mode = "hidden";
        a.cleartracks(t, i, n, r), t.chapters = e('<div class="mejs-chapters mejs-layer"></div>').prependTo(n).hide(), 
        t.captions = e('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' + l + '><span class="mejs-captions-text"></span></div></div>').prependTo(n).hide(), 
        t.captionsText = t.captions.find(".mejs-captions-text"), t.captionsButton = e('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + a.id + '" title="' + u + '" aria-label="' + u + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_none" value="none" checked="checked" /><label for="' + t.id + '_captions_none">' + mejs.i18n.t("mejs.none") + "</label></li></ul></div></div>").appendTo(i);
        var c = 0;
        for (o = 0; o < t.tracks.length; o++) "subtitles" !== (s = t.tracks[o].kind) && "captions" !== s || c++;
        for (a.options.toggleCaptionsButtonWhenOnlyOne && 1 == c ? t.captionsButton.on("click", function() {
          null === t.selectedTrack ? lang = t.tracks[0].srclang : lang = "none", t.setTrack(lang);
        }) : (t.captionsButton.on("mouseenter focusin", function() {
          e(this).find(".mejs-captions-selector").removeClass("mejs-offscreen");
        }).on("click", "input[type=radio]", function() {
          lang = this.value, t.setTrack(lang);
        }), t.captionsButton.on("mouseleave focusout", function() {
          e(this).find(".mejs-captions-selector").addClass("mejs-offscreen");
        })), t.options.alwaysShowControls ? t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : t.container.bind("controlsshown", function() {
          t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover");
        }).bind("controlshidden", function() {
          r.paused || t.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover");
        }), t.trackToLoad = -1, t.selectedTrack = null, t.isLoadingTrack = !1, o = 0; o < t.tracks.length; o++) "subtitles" !== (s = t.tracks[o].kind) && "captions" !== s || t.addTrackButton(t.tracks[o].srclang, t.tracks[o].label);
        t.loadNextTrack(), r.addEventListener("timeupdate", function() {
          t.displayCaptions();
        }, !1), "" !== t.options.slidesSelector && (t.slidesContainer = e(t.options.slidesSelector), 
        r.addEventListener("timeupdate", function() {
          t.displaySlides();
        }, !1)), r.addEventListener("loadedmetadata", function() {
          t.displayChapters();
        }, !1), t.container.hover(function() {
          t.hasChapters && (t.chapters.removeClass("mejs-offscreen"), t.chapters.fadeIn(200).height(t.chapters.find(".mejs-chapter").outerHeight()));
        }, function() {
          t.hasChapters && !r.paused && t.chapters.fadeOut(200, function() {
            e(this).addClass("mejs-offscreen"), e(this).css("display", "block");
          });
        }), a.container.on("controlsresize", function() {
          a.adjustLanguageBox();
        }), null !== t.node.getAttribute("autoplay") && t.chapters.addClass("mejs-offscreen");
      }
    },
    setTrack: function(e) {
      var t, i = this;
      if ("none" == e) i.selectedTrack = null, i.captionsButton.removeClass("mejs-captions-enabled"); else for (t = 0; t < i.tracks.length; t++) if (i.tracks[t].srclang == e) {
        null === i.selectedTrack && i.captionsButton.addClass("mejs-captions-enabled"), 
        i.selectedTrack = i.tracks[t], i.captions.attr("lang", i.selectedTrack.srclang), 
        i.displayCaptions();
        break;
      }
    },
    loadNextTrack: function() {
      var e = this;
      e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, 
      e.checkForTracks());
    },
    loadTrack: function(t) {
      var i = this, n = i.tracks[t], r = function() {
        n.isLoaded = !0, i.enableTrackButton(n.srclang, n.label), i.loadNextTrack();
      };
      n.src === undefined && "" === n.src || e.ajax({
        url: n.src,
        dataType: "text",
        success: function(e) {
          "string" == typeof e && /<tt\s+xml/gi.exec(e) ? n.entries = mejs.TrackFormatParser.dfxp.parse(e) : n.entries = mejs.TrackFormatParser.webvtt.parse(e), 
          r(), "chapters" == n.kind && i.media.addEventListener("play", function() {
            i.media.duration > 0 && i.displayChapters(n);
          }, !1), "slides" == n.kind && i.setupSlides(n);
        },
        error: function() {
          i.removeTrackButton(n.srclang), i.loadNextTrack();
        }
      });
    },
    enableTrackButton: function(t, i) {
      var n = this;
      "" === i && (i = mejs.language.codes[t] || t), n.captionsButton.find("input[value=" + t + "]").prop("disabled", !1).siblings("label").html(i), 
      n.options.startLanguage == t && e("#" + n.id + "_captions_" + t).prop("checked", !0).trigger("click"), 
      n.adjustLanguageBox();
    },
    removeTrackButton: function(e) {
      var t = this;
      t.captionsButton.find("input[value=" + e + "]").closest("li").remove(), t.adjustLanguageBox();
    },
    addTrackButton: function(t, i) {
      var n = this;
      "" === i && (i = mejs.language.codes[t] || t), n.captionsButton.find("ul").append(e('<li><input type="radio" name="' + n.id + '_captions" id="' + n.id + "_captions_" + t + '" value="' + t + '" disabled="disabled" /><label for="' + n.id + "_captions_" + t + '">' + i + " (loading)</label></li>")), 
      n.adjustLanguageBox(), n.container.find(".mejs-captions-translations option[value=" + t + "]").remove();
    },
    adjustLanguageBox: function() {
      var e = this;
      e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0));
    },
    checkForTracks: function() {
      var e = this, t = !1;
      if (e.options.hideCaptionsButtonWhenEmpty) {
        for (var i = 0; i < e.tracks.length; i++) {
          var n = e.tracks[i].kind;
          if (("subtitles" === n || "captions" === n) && e.tracks[i].isLoaded) {
            t = !0;
            break;
          }
        }
        t || (e.captionsButton.hide(), e.setControlsSize());
      }
    },
    displayCaptions: function() {
      if ("undefined" != typeof this.tracks) {
        var e, t = this, i = t.selectedTrack;
        if (null !== i && i.isLoaded) {
          for (e = 0; e < i.entries.times.length; e++) if (t.media.currentTime >= i.entries.times[e].start && t.media.currentTime <= i.entries.times[e].stop) return t.captionsText.html(i.entries.text[e]).attr("class", "mejs-captions-text " + (i.entries.times[e].identifier || "")), 
          void t.captions.show().height(0);
          t.captions.hide();
        } else t.captions.hide();
      }
    },
    setupSlides: function(e) {
      var t = this;
      t.slides = e, t.slides.entries.imgs = [ t.slides.entries.text.length ], t.showSlide(0);
    },
    showSlide: function(t) {
      if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
        var i = this, n = i.slides.entries.text[t], r = i.slides.entries.imgs[t];
        void 0 === r || "undefined" == typeof r.fadeIn ? i.slides.entries.imgs[t] = r = e('<img src="' + n + '">').on("load", function() {
          r.appendTo(i.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut();
        }) : r.is(":visible") || r.is(":animated") || r.fadeIn().siblings(":visible").fadeOut();
      }
    },
    displaySlides: function() {
      if ("undefined" != typeof this.slides) {
        var e, t = this, i = t.slides;
        for (e = 0; e < i.entries.times.length; e++) if (t.media.currentTime >= i.entries.times[e].start && t.media.currentTime <= i.entries.times[e].stop) return void t.showSlide(e);
      }
    },
    displayChapters: function() {
      var e, t = this;
      for (e = 0; e < t.tracks.length; e++) if ("chapters" == t.tracks[e].kind && t.tracks[e].isLoaded) {
        t.drawChapters(t.tracks[e]), t.hasChapters = !0;
        break;
      }
    },
    drawChapters: function(t) {
      var i, n, r = this, o = 0, s = 0;
      for (r.chapters.empty(), i = 0; i < t.entries.times.length; i++) n = t.entries.times[i].stop - t.entries.times[i].start, 
      ((o = Math.floor(n / r.media.duration * 100)) + s > 100 || i == t.entries.times.length - 1 && o + s < 100) && (o = 100 - s), 
      r.chapters.append(e('<div class="mejs-chapter" rel="' + t.entries.times[i].start + '" style="left: ' + s.toString() + "%;width: " + o.toString() + '%;"><div class="mejs-chapter-block' + (i == t.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + t.entries.text[i] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(t.entries.times[i].start, r.options) + "&ndash;" + mejs.Utility.secondsToTimeCode(t.entries.times[i].stop, r.options) + "</span></div></div>")), 
      s += o;
      r.chapters.find("div.mejs-chapter").click(function() {
        r.media.setCurrentTime(parseFloat(e(this).attr("rel"))), r.media.paused && r.media.play();
      }), r.chapters.show();
    }
  }), mejs.language = {
    codes: {
      af: "Afrikaans",
      sq: "Albanian",
      ar: "Arabic",
      be: "Belarusian",
      bg: "Bulgarian",
      ca: "Catalan",
      zh: "Chinese",
      "zh-cn": "Chinese Simplified",
      "zh-tw": "Chinese Traditional",
      hr: "Croatian",
      cs: "Czech",
      da: "Danish",
      nl: "Dutch",
      en: "English",
      et: "Estonian",
      fl: "Filipino",
      fi: "Finnish",
      fr: "French",
      gl: "Galician",
      de: "German",
      el: "Greek",
      ht: "Haitian Creole",
      iw: "Hebrew",
      hi: "Hindi",
      hu: "Hungarian",
      is: "Icelandic",
      id: "Indonesian",
      ga: "Irish",
      it: "Italian",
      ja: "Japanese",
      ko: "Korean",
      lv: "Latvian",
      lt: "Lithuanian",
      mk: "Macedonian",
      ms: "Malay",
      mt: "Maltese",
      no: "Norwegian",
      fa: "Persian",
      pl: "Polish",
      pt: "Portuguese",
      ro: "Romanian",
      ru: "Russian",
      sr: "Serbian",
      sk: "Slovak",
      sl: "Slovenian",
      es: "Spanish",
      sw: "Swahili",
      sv: "Swedish",
      tl: "Tagalog",
      th: "Thai",
      tr: "Turkish",
      uk: "Ukrainian",
      vi: "Vietnamese",
      cy: "Welsh",
      yi: "Yiddish"
    }
  }, mejs.TrackFormatParser = {
    webvtt: {
      pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
      parse: function(t) {
        for (var i, n, r, o = 0, s = mejs.TrackFormatParser.split2(t, /\r?\n/), a = {
          text: [],
          times: []
        }; o < s.length; o++) {
          if ((i = this.pattern_timecode.exec(s[o])) && o < s.length) {
            for (o - 1 >= 0 && "" !== s[o - 1] && (r = s[o - 1]), n = s[++o], o++; "" !== s[o] && o < s.length; ) n = n + "\n" + s[o], 
            o++;
            n = e.trim(n).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), 
            a.text.push(n), a.times.push({
              identifier: r,
              start: 0 === mejs.Utility.convertSMPTEtoSeconds(i[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(i[1]),
              stop: mejs.Utility.convertSMPTEtoSeconds(i[3]),
              settings: i[5]
            });
          }
          r = "";
        }
        return a;
      }
    },
    dfxp: {
      parse: function(t) {
        var i, n, r = 0, o = (t = e(t).filter("tt")).children("div").eq(0), s = o.find("p"), a = t.find("#" + o.attr("style")), l = {
          text: [],
          times: []
        };
        if (a.length) {
          var u = a.removeAttr("id").get(0).attributes;
          if (u.length) for (i = {}, r = 0; r < u.length; r++) i[u[r].name.split(":")[1]] = u[r].value;
        }
        for (r = 0; r < s.length; r++) {
          var c, d = {
            start: null,
            stop: null,
            style: null
          };
          if (s.eq(r).attr("begin") && (d.start = mejs.Utility.convertSMPTEtoSeconds(s.eq(r).attr("begin"))), 
          !d.start && s.eq(r - 1).attr("end") && (d.start = mejs.Utility.convertSMPTEtoSeconds(s.eq(r - 1).attr("end"))), 
          s.eq(r).attr("end") && (d.stop = mejs.Utility.convertSMPTEtoSeconds(s.eq(r).attr("end"))), 
          !d.stop && s.eq(r + 1).attr("begin") && (d.stop = mejs.Utility.convertSMPTEtoSeconds(s.eq(r + 1).attr("begin"))), 
          i) for (var h in c = "", i) c += h + ":" + i[h] + ";";
          c && (d.style = c), 0 === d.start && (d.start = .2), l.times.push(d), n = e.trim(s.eq(r).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), 
          l.text.push(n);
        }
        return l;
      }
    },
    split2: function(e, t) {
      return e.split(t);
    }
  }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function(e, t) {
    var i, n = [], r = "";
    for (i = 0; i < e.length; i++) r += e.substring(i, i + 1), t.test(r) && (n.push(r.replace(t, "")), 
    r = "");
    return n.push(r), n;
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    sourcechooserText: ""
  }), e.extend(MediaElementPlayer.prototype, {
    buildsourcechooser: function(t, i, n, r) {
      var o, s = this, a = s.options.sourcechooserText ? s.options.sourcechooserText : mejs.i18n.t("mejs.source-chooser");
      for (var l in t.sourcechooserButton = e('<div class="mejs-button mejs-sourcechooser-button"><button type="button" role="button" aria-haspopup="true" aria-owns="' + s.id + '" title="' + a + '" aria-label="' + a + '"></button><div class="mejs-sourcechooser-selector mejs-offscreen" role="menu" aria-expanded="false" aria-hidden="true"><ul></ul></div></div>').appendTo(i).hover(function() {
        clearTimeout(o), t.showSourcechooserSelector();
      }, function() {
        e(this);
        o = setTimeout(function() {
          t.hideSourcechooserSelector();
        }, 500);
      }).on("keydown", function(i) {
        switch (i.keyCode) {
         case 32:
          mejs.MediaFeatures.isFirefox || t.showSourcechooserSelector(), e(this).find(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus();
          break;

         case 13:
          t.showSourcechooserSelector(), e(this).find(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus();
          break;

         case 27:
          t.hideSourcechooserSelector(), e(this).find("button").focus();
          break;

         default:
          return !0;
        }
      }).on("focusout", mejs.Utility.debounce(function() {
        setTimeout(function() {
          e(document.activeElement).closest(".mejs-sourcechooser-selector").length || t.hideSourcechooserSelector();
        }, 0);
      }, 100)).delegate("input[type=radio]", "click", function() {
        e(this).attr("aria-selected", !0).attr("checked", "checked"), e(this).closest(".mejs-sourcechooser-selector").find("input[type=radio]").not(this).attr("aria-selected", "false").removeAttr("checked");
        var t = this.value;
        if (r.currentSrc != t) {
          var i = r.currentTime, n = r.paused;
          r.pause(), r.setSrc(t), r.addEventListener("loadedmetadata", function() {
            r.currentTime = i;
          }, !0);
          var o = function() {
            n || r.play(), r.removeEventListener("canplay", o, !0);
          };
          r.addEventListener("canplay", o, !0), r.load();
        }
      }).delegate("button", "click", function() {
        e(this).siblings(".mejs-sourcechooser-selector").hasClass("mejs-offscreen") ? (t.showSourcechooserSelector(), 
        e(this).siblings(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus()) : t.hideSourcechooserSelector();
      }), this.node.children) {
        var u = this.node.children[l];
        "SOURCE" !== u.nodeName || "probably" != r.canPlayType(u.type) && "maybe" != r.canPlayType(u.type) || t.addSourceButton(u.src, u.title, u.type, r.src == u.src);
      }
    },
    addSourceButton: function(t, i, n, r) {
      var o = this;
      "" !== i && i != undefined || (i = t), n = n.split("/")[1], o.sourcechooserButton.find("ul").append(e('<li><input type="radio" name="' + o.id + '_sourcechooser" id="' + o.id + "_sourcechooser_" + i + n + '" role="menuitemradio" value="' + t + '" ' + (r ? 'checked="checked"' : "") + 'aria-selected="' + r + '" /><label for="' + o.id + "_sourcechooser_" + i + n + '" aria-hidden="true">' + i + " (" + n + ")</label></li>")), 
      o.adjustSourcechooserBox();
    },
    adjustSourcechooserBox: function() {
      var e = this;
      e.sourcechooserButton.find(".mejs-sourcechooser-selector").height(e.sourcechooserButton.find(".mejs-sourcechooser-selector ul").outerHeight(!0));
    },
    hideSourcechooserSelector: function() {
      this.sourcechooserButton.find(".mejs-sourcechooser-selector").addClass("mejs-offscreen").attr("aria-expanded", "false").attr("aria-hidden", "true").find("input[type=radio]").attr("tabindex", "-1");
    },
    showSourcechooserSelector: function() {
      this.sourcechooserButton.find(".mejs-sourcechooser-selector").removeClass("mejs-offscreen").attr("aria-expanded", "true").attr("aria-hidden", "false").find("input[type=radio]").attr("tabindex", "0");
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    contextMenuItems: [ {
      render: function(e) {
        return "undefined" == typeof e.enterFullScreen ? null : e.isFullScreen ? mejs.i18n.t("mejs.fullscreen-off") : mejs.i18n.t("mejs.fullscreen-on");
      },
      click: function(e) {
        e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen();
      }
    }, {
      render: function(e) {
        return e.media.muted ? mejs.i18n.t("mejs.unmute") : mejs.i18n.t("mejs.mute");
      },
      click: function(e) {
        e.media.muted ? e.setMuted(!1) : e.setMuted(!0);
      }
    }, {
      isSeparator: !0
    }, {
      render: function() {
        return mejs.i18n.t("mejs.download-video");
      },
      click: function(e) {
        window.location.href = e.media.currentSrc;
      }
    } ]
  }), e.extend(MediaElementPlayer.prototype, {
    buildcontextmenu: function(t) {
      t.contextMenu = e('<div class="mejs-contextmenu"></div>').appendTo(e("body")).hide(), 
      t.container.bind("contextmenu", function(e) {
        if (t.isContextMenuEnabled) return e.preventDefault(), t.renderContextMenu(e.clientX - 1, e.clientY - 1), 
        !1;
      }), t.container.bind("click", function() {
        t.contextMenu.hide();
      }), t.contextMenu.bind("mouseleave", function() {
        t.startContextMenuTimer();
      });
    },
    cleancontextmenu: function(e) {
      e.contextMenu.remove();
    },
    isContextMenuEnabled: !0,
    enableContextMenu: function() {
      this.isContextMenuEnabled = !0;
    },
    disableContextMenu: function() {
      this.isContextMenuEnabled = !1;
    },
    contextMenuTimeout: null,
    startContextMenuTimer: function() {
      var e = this;
      e.killContextMenuTimer(), e.contextMenuTimer = setTimeout(function() {
        e.hideContextMenu(), e.killContextMenuTimer();
      }, 750);
    },
    killContextMenuTimer: function() {
      var e = this.contextMenuTimer;
      null != e && (clearTimeout(e), delete e, e = null);
    },
    hideContextMenu: function() {
      this.contextMenu.hide();
    },
    renderContextMenu: function(t, i) {
      for (var n = this, r = "", o = n.options.contextMenuItems, s = 0, a = o.length; s < a; s++) if (o[s].isSeparator) r += '<div class="mejs-contextmenu-separator"></div>'; else {
        var l = o[s].render(n);
        null != l && (r += '<div class="mejs-contextmenu-item" data-itemindex="' + s + '" id="element-' + 1e6 * Math.random() + '">' + l + "</div>");
      }
      n.contextMenu.empty().append(e(r)).css({
        top: i,
        left: t
      }).show(), n.contextMenu.find(".mejs-contextmenu-item").each(function() {
        var t = e(this), i = parseInt(t.data("itemindex"), 10), r = n.options.contextMenuItems[i];
        "undefined" != typeof r.show && r.show(t, n), t.click(function() {
          "undefined" != typeof r.click && r.click(n), n.contextMenu.hide();
        });
      }), setTimeout(function() {
        n.killControlsTimer("rev3");
      }, 100);
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    skipBackInterval: 30,
    skipBackText: ""
  }), e.extend(MediaElementPlayer.prototype, {
    buildskipback: function(t, i, n, r) {
      var o = this, s = mejs.i18n.t("mejs.time-skip-back", o.options.skipBackInterval), a = o.options.skipBackText ? o.options.skipBackText : s;
      e('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' + o.id + '" title="' + a + '" aria-label="' + a + '">' + o.options.skipBackInterval + "</button></div>").appendTo(i).click(function() {
        r.setCurrentTime(Math.max(r.currentTime - o.options.skipBackInterval, 0)), e(this).find("button").blur();
      });
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    postrollCloseText: ""
  }), e.extend(MediaElementPlayer.prototype, {
    buildpostroll: function(t, i, n) {
      var r = this, o = r.options.postrollCloseText ? r.options.postrollCloseText : mejs.i18n.t("mejs.close"), s = r.container.find('link[rel="postroll"]').attr("href");
      void 0 !== s && (t.postroll = e('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + o + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(n).hide(), 
      r.media.addEventListener("ended", function() {
        e.ajax({
          dataType: "html",
          url: s,
          success: function(e) {
            n.find(".mejs-postroll-layer-content").html(e);
          }
        }), t.postroll.show();
      }, !1));
    }
  });
}(mejs.$), function(e) {
  e.extend(mejs.MepDefaults, {
    markerColor: "#E9BC3D",
    markers: [],
    markerCallback: function() {}
  }), e.extend(MediaElementPlayer.prototype, {
    buildmarkers: function(e, t, i, n) {
      var r = 0, o = -1, s = -1, a = -1, l = -1;
      for (r = 0; r < e.options.markers.length; ++r) t.find(".mejs-time-total").append('<span class="mejs-time-marker"></span>');
      n.addEventListener("durationchange", function() {
        e.setmarkers(t);
      }), n.addEventListener("timeupdate", function() {
        for (o = Math.floor(n.currentTime), a > o ? l > o && (l = -1) : a = o, r = 0; r < e.options.markers.length; ++r) s = Math.floor(e.options.markers[r]), 
        o === s && s !== l && (e.options.markerCallback(n, n.currentTime), l = s);
      }, !1);
    },
    setmarkers: function(t) {
      var i, n = this, r = 0;
      for (r = 0; r < n.options.markers.length; ++r) Math.floor(n.options.markers[r]) <= n.media.duration && Math.floor(n.options.markers[r]) >= 0 && (i = 100 * Math.floor(n.options.markers[r]) / n.media.duration, 
      e(t.find(".mejs-time-marker")[r]).css({
        width: "1px",
        left: i + "%",
        background: n.options.markerColor
      }));
    }
  });
}(mejs.$), function(e, t) {
  "function" == typeof define && define.amd ? define([], t) : "undefined" != typeof module && module.exports ? module.exports = t() : e.lscache = t();
}(this, function() {
  function e() {
    var e = "__lscachetest__", i = e;
    if (void 0 !== p) return p;
    try {
      if (!localStorage) return !1;
    } catch (e) {
      return !1;
    }
    try {
      a(e, i), l(e), p = !0;
    } catch (e) {
      p = !(!t(e) || !localStorage.length);
    }
    return p;
  }
  function t(e) {
    return e && ("QUOTA_EXCEEDED_ERR" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name || "QuotaExceededError" === e.name);
  }
  function i() {
    return void 0 === m && (m = null != window.JSON), m;
  }
  function n(e) {
    return e.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&");
  }
  function r(e) {
    return e + v;
  }
  function o() {
    return Math.floor(new Date().getTime() / b);
  }
  function s(e) {
    return localStorage.getItem(g + w + e);
  }
  function a(e, t) {
    localStorage.removeItem(g + w + e), localStorage.setItem(g + w + e, t);
  }
  function l(e) {
    localStorage.removeItem(g + w + e);
  }
  function u(e) {
    for (var t = new RegExp("^" + g + n(w) + "(.*)"), i = localStorage.length - 1; i >= 0; --i) {
      var o = localStorage.key(i);
      (o = (o = o && o.match(t)) && o[1]) && o.indexOf(v) < 0 && e(o, r(o));
    }
  }
  function c(e) {
    var t = r(e);
    l(e), l(t);
  }
  function d(e) {
    var t = r(e), i = s(t);
    if (i) {
      var n = parseInt(i, y);
      if (o() >= n) return l(e), l(t), !0;
    }
  }
  function h(e, t) {
    _ && "console" in window && "function" == typeof window.console.warn && (window.console.warn("lscache - " + e), 
    t && window.console.warn("lscache - The error was: " + t.message));
  }
  function f(e) {
    return Math.floor(864e13 / e);
  }
  var p, m, g = "lscache-", v = "-cacheexpiration", y = 10, b = 6e4, x = f(b), w = "", _ = !1;
  return {
    set: function(n, d, f) {
      if (!e()) return !1;
      if (!i()) return !1;
      try {
        d = JSON.stringify(d);
      } catch (e) {
        return !1;
      }
      try {
        a(n, d);
      } catch (e) {
        if (!t(e)) return h("Could not add item with key '" + n + "'", e), !1;
        var p, m = [];
        u(function(e, t) {
          var i = s(t);
          i = i ? parseInt(i, y) : x, m.push({
            key: e,
            size: (s(e) || "").length,
            expiration: i
          });
        }), m.sort(function(e, t) {
          return t.expiration - e.expiration;
        });
        for (var g = (d || "").length; m.length && g > 0; ) p = m.pop(), h("Cache is full, removing item with key '" + n + "'"), 
        c(p.key), g -= p.size;
        try {
          a(n, d);
        } catch (e) {
          return h("Could not add item with key '" + n + "', perhaps it's too big?", e), !1;
        }
      }
      return f ? a(r(n), (o() + f).toString(y)) : l(r(n)), !0;
    },
    get: function(t) {
      if (!e()) return null;
      if (d(t)) return null;
      var n = s(t);
      if (!n || !i()) return n;
      try {
        return JSON.parse(n);
      } catch (e) {
        return n;
      }
    },
    remove: function(t) {
      e() && c(t);
    },
    supported: function() {
      return e();
    },
    flush: function() {
      e() && u(function(e) {
        c(e);
      });
    },
    flushExpired: function() {
      e() && u(function(e) {
        d(e);
      });
    },
    setBucket: function(e) {
      w = e;
    },
    resetBucket: function() {
      w = "";
    },
    getExpiryMilliseconds: function() {
      return b;
    },
    setExpiryMilliseconds: function(e) {
      x = f(b = e);
    },
    enableWarnings: function(e) {
      _ = e;
    }
  };
}), function() {
  "use strict";
  if ("undefined" != typeof window && window.addEventListener) {
    var e, t, i, n = Object.create(null), r = function() {
      clearTimeout(t), t = setTimeout(e, 100);
    }, o = function() {}, s = function() {
      var e;
      window.addEventListener("resize", r, !1), window.addEventListener("orientationchange", r, !1), 
      window.MutationObserver ? ((e = new MutationObserver(r)).observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        attributes: !0
      }), o = function() {
        try {
          e.disconnect(), window.removeEventListener("resize", r, !1), window.removeEventListener("orientationchange", r, !1);
        } catch (t) {}
      }) : (document.documentElement.addEventListener("DOMSubtreeModified", r, !1), o = function() {
        document.documentElement.removeEventListener("DOMSubtreeModified", r, !1), window.removeEventListener("resize", r, !1), 
        window.removeEventListener("orientationchange", r, !1);
      });
    }, a = function(e) {
      function t(e) {
        var t;
        return e.protocol !== undefined ? t = e : (t = document.createElement("a")).href = e, 
        t.protocol.replace(/:/g, "") + t.host;
      }
      var i, n, r;
      return window.XMLHttpRequest && (i = new XMLHttpRequest(), n = t(location), r = t(e), 
      i = i.withCredentials === undefined && "" !== r && r !== n ? XDomainRequest || undefined : XMLHttpRequest), 
      i;
    }, l = "http://www.w3.org/1999/xlink";
    e = function() {
      function e() {
        0 === (x -= 1) && (o(), s());
      }
      function t(e) {
        return function() {
          !0 !== n[e.base] && (e.useEl.setAttributeNS(l, "xlink:href", "#" + e.hash), e.useEl.hasAttribute("href") && e.useEl.setAttribute("href", "#" + e.hash));
        };
      }
      function i(t) {
        return function() {
          var i, n = document.body, r = document.createElement("x");
          t.onload = null, r.innerHTML = t.responseText, (i = r.getElementsByTagName("svg")[0]) && (i.setAttribute("aria-hidden", "true"), 
          i.style.position = "absolute", i.style.width = 0, i.style.height = 0, i.style.overflow = "hidden", 
          n.insertBefore(i, n.firstChild)), e();
        };
      }
      function r(t) {
        return function() {
          t.onerror = null, t.ontimeout = null, e();
        };
      }
      var u, c, d, h, f, p, m, g, v, y, b = "", x = 0;
      for (o(), v = document.getElementsByTagName("use"), f = 0; f < v.length; f += 1) {
        try {
          c = v[f].getBoundingClientRect();
        } catch (w) {
          c = !1;
        }
        u = (g = (h = v[f].getAttribute("href") || v[f].getAttributeNS(l, "href") || v[f].getAttribute("xlink:href")) && h.split ? h.split("#") : [ "", "" ])[0], 
        d = g[1], p = c && 0 === c.left && 0 === c.right && 0 === c.top && 0 === c.bottom, 
        c && 0 === c.width && 0 === c.height && !p ? (b && !u.length && d && !document.getElementById(d) && (u = b), 
        v[f].hasAttribute("href") && v[f].setAttributeNS(l, "xlink:href", h), u.length && (!0 !== (y = n[u]) && setTimeout(t({
          useEl: v[f],
          base: u,
          hash: d
        }), 0), y === undefined && (m = a(u)) !== undefined && (y = new m(), n[u] = y, y.onload = i(y), 
        y.onerror = r(y), y.ontimeout = r(y), y.open("GET", u), y.send(), x += 1))) : p ? u.length && n[u] && setTimeout(t({
          useEl: v[f],
          base: u,
          hash: d
        }), 0) : n[u] === undefined ? n[u] = !0 : n[u].onload && (n[u].abort(), delete n[u].onload, 
        n[u] = !0);
      }
      v = "", x += 1, e();
    }, i = function() {
      window.removeEventListener("load", i, !1), t = setTimeout(e, 0);
    }, "complete" !== document.readyState ? window.addEventListener("load", i, !1) : i();
  }
}(), function(e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.NProgress = t();
}(this, function() {
  function e(e, t, i) {
    return e < t ? t : e > i ? i : e;
  }
  function t(e) {
    return 100 * (-1 + e);
  }
  function i(e, i, n) {
    var r;
    return (r = "translate3d" === d.positionUsing ? {
      transform: "translate3d(" + t(e) + "%,0,0)"
    } : "translate" === d.positionUsing ? {
      transform: "translate(" + t(e) + "%,0)"
    } : {
      "margin-left": t(e) + "%"
    }).transition = "all " + i + "ms " + n, r;
  }
  function n(e, t) {
    return ("string" == typeof e ? e : s(e)).indexOf(" " + t + " ") >= 0;
  }
  function r(e, t) {
    var i = s(e), r = i + t;
    n(i, t) || (e.className = r.substring(1));
  }
  function o(e, t) {
    var i, r = s(e);
    n(e, t) && (i = r.replace(" " + t + " ", " "), e.className = i.substring(1, i.length - 1));
  }
  function s(e) {
    return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
  }
  function a(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  var l, u, c = {
    version: "0.2.0"
  }, d = c.settings = {
    minimum: .08,
    easing: "ease",
    positionUsing: "",
    speed: 200,
    trickle: !0,
    trickleRate: .02,
    trickleSpeed: 800,
    showSpinner: !0,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: "body",
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };
  c.configure = function(e) {
    var t, i;
    for (t in e) (i = e[t]) !== undefined && e.hasOwnProperty(t) && (d[t] = i);
    return this;
  }, c.status = null, c.set = function(t) {
    var n = c.isStarted();
    t = e(t, d.minimum, 1), c.status = 1 === t ? null : t;
    var r = c.render(!n), o = r.querySelector(d.barSelector), s = d.speed, a = d.easing;
    return r.offsetWidth, h(function(e) {
      "" === d.positionUsing && (d.positionUsing = c.getPositioningCSS()), f(o, i(t, s, a)), 
      1 === t ? (f(r, {
        transition: "none",
        opacity: 1
      }), r.offsetWidth, setTimeout(function() {
        f(r, {
          transition: "all " + s + "ms linear",
          opacity: 0
        }), setTimeout(function() {
          c.remove(), e();
        }, s);
      }, s)) : setTimeout(e, s);
    }), this;
  }, c.isStarted = function() {
    return "number" == typeof c.status;
  }, c.start = function() {
    c.status || c.set(0);
    var e = function() {
      setTimeout(function() {
        c.status && (c.trickle(), e());
      }, d.trickleSpeed);
    };
    return d.trickle && e(), this;
  }, c.done = function(e) {
    return e || c.status ? c.inc(.3 + .5 * Math.random()).set(1) : this;
  }, c.inc = function(t) {
    var i = c.status;
    return i ? ("number" != typeof t && (t = (1 - i) * e(Math.random() * i, .1, .95)), 
    i = e(i + t, 0, .994), c.set(i)) : c.start();
  }, c.trickle = function() {
    return c.inc(Math.random() * d.trickleRate);
  }, l = 0, u = 0, c.promise = function(e) {
    return e && "resolved" !== e.state() ? (0 === u && c.start(), l++, u++, e.always(function() {
      0 == --u ? (l = 0, c.done()) : c.set((l - u) / l);
    }), this) : this;
  }, c.render = function(e) {
    if (c.isRendered()) return document.getElementById("nprogress");
    r(document.documentElement, "nprogress-busy");
    var i = document.createElement("div");
    i.id = "nprogress", i.innerHTML = d.template;
    var n, o = i.querySelector(d.barSelector), s = e ? "-100" : t(c.status || 0), l = document.querySelector(d.parent);
    return f(o, {
      transition: "all 0 linear",
      transform: "translate3d(" + s + "%,0,0)"
    }), d.showSpinner || (n = i.querySelector(d.spinnerSelector)) && a(n), l != document.body && r(l, "nprogress-custom-parent"), 
    l.appendChild(i), i;
  }, c.remove = function() {
    o(document.documentElement, "nprogress-busy"), o(document.querySelector(d.parent), "nprogress-custom-parent");
    var e = document.getElementById("nprogress");
    e && a(e);
  }, c.isRendered = function() {
    return !!document.getElementById("nprogress");
  }, c.getPositioningCSS = function() {
    var e = document.body.style, t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
    return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin";
  };
  var h = function() {
    function e() {
      var i = t.shift();
      i && i(e);
    }
    var t = [];
    return function(i) {
      t.push(i), 1 == t.length && e();
    };
  }(), f = function() {
    function e(e) {
      return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
        return t.toUpperCase();
      });
    }
    function t(e) {
      var t = document.body.style;
      if (e in t) return e;
      for (var i, n = r.length, o = e.charAt(0).toUpperCase() + e.slice(1); n--; ) if ((i = r[n] + o) in t) return i;
      return e;
    }
    function i(i) {
      return i = e(i), o[i] || (o[i] = t(i));
    }
    function n(e, t, n) {
      t = i(t), e.style[t] = n;
    }
    var r = [ "Webkit", "O", "Moz", "ms" ], o = {};
    return function(e, t) {
      var i, r, o = arguments;
      if (2 == o.length) for (i in t) (r = t[i]) !== undefined && t.hasOwnProperty(i) && n(e, i, r); else n(e, o[1], o[2]);
    };
  }();
  return c;
}), function($) {
  $.extend({
    metadata: {
      defaults: {
        type: "class",
        name: "metadata",
        cre: /(\{.*\})/,
        single: "metadata"
      },
      setType: function(e, t) {
        this.defaults.type = e, this.defaults.name = t;
      },
      get: function(elem, opts) {
        var data, m, e, attr, settings = $.extend({}, this.defaults, opts);
        if (settings.single.length || (settings.single = "metadata"), data = $.data(elem, settings.single), 
        data) return data;
        if (data = "{}", "class" === settings.type) m = settings.cre.exec(elem.className), 
        m && (data = m[1]); else if ("elem" === settings.type) {
          if (!elem.getElementsByTagName) return undefined;
          e = elem.getElementsByTagName(settings.name), e.length && (data = $.trim(e[0].innerHTML));
        } else elem.getAttribute !== undefined && (attr = elem.getAttribute(settings.name), 
        attr && (data = attr));
        return data.indexOf("{") < 0 && (data = "{" + data + "}"), data = eval("(" + data + ")"), 
        $.data(elem, settings.single, data), data;
      }
    }
  }), $.fn.metadata = function(e) {
    return $.metadata.get(this[0], e);
  };
}(jQuery), function(e) {
  "use strict";
  var t = e.tablesorter = {
    version: "2.31.1",
    parsers: [],
    widgets: [],
    defaults: {
      theme: "default",
      widthFixed: !1,
      showProcessing: !1,
      headerTemplate: "{content}",
      onRenderTemplate: null,
      onRenderHeader: null,
      cancelSelection: !0,
      tabIndex: !0,
      dateFormat: "mmddyyyy",
      sortMultiSortKey: "shiftKey",
      sortResetKey: "ctrlKey",
      usNumberFormat: !0,
      delayInit: !1,
      serverSideSorting: !1,
      resort: !0,
      headers: {},
      ignoreCase: !0,
      sortForce: null,
      sortList: [],
      sortAppend: null,
      sortStable: !1,
      sortInitialOrder: "asc",
      sortLocaleCompare: !1,
      sortReset: !1,
      sortRestart: !1,
      emptyTo: "bottom",
      stringTo: "max",
      duplicateSpan: !0,
      textExtraction: "basic",
      textAttribute: "data-text",
      textSorter: null,
      numberSorter: null,
      initWidgets: !0,
      widgetClass: "widget-{name}",
      widgets: [],
      widgetOptions: {
        zebra: [ "even", "odd" ]
      },
      initialized: null,
      tableClass: "",
      cssAsc: "",
      cssDesc: "",
      cssNone: "",
      cssHeader: "",
      cssHeaderRow: "",
      cssProcessing: "",
      cssChildRow: "tablesorter-childRow",
      cssInfoBlock: "tablesorter-infoOnly",
      cssNoSort: "tablesorter-noSort",
      cssIgnoreRow: "tablesorter-ignoreRow",
      cssIcon: "tablesorter-icon",
      cssIconNone: "",
      cssIconAsc: "",
      cssIconDesc: "",
      cssIconDisabled: "",
      pointerClick: "click",
      pointerDown: "mousedown",
      pointerUp: "mouseup",
      selectorHeaders: "> thead th, > thead td",
      selectorSort: "th, td",
      selectorRemove: ".remove-me",
      debug: !1,
      headerList: [],
      empties: {},
      strings: {},
      parsers: [],
      globalize: 0,
      imgAttr: 0
    },
    css: {
      table: "tablesorter",
      cssHasChild: "tablesorter-hasChildRow",
      childRow: "tablesorter-childRow",
      colgroup: "tablesorter-colgroup",
      header: "tablesorter-header",
      headerRow: "tablesorter-headerRow",
      headerIn: "tablesorter-header-inner",
      icon: "tablesorter-icon",
      processing: "tablesorter-processing",
      sortAsc: "tablesorter-headerAsc",
      sortDesc: "tablesorter-headerDesc",
      sortNone: "tablesorter-headerUnSorted"
    },
    language: {
      sortAsc: "Ascending sort applied, ",
      sortDesc: "Descending sort applied, ",
      sortNone: "No sort applied, ",
      sortDisabled: "sorting is disabled",
      nextAsc: "activate to apply an ascending sort",
      nextDesc: "activate to apply a descending sort",
      nextNone: "activate to remove the sort"
    },
    regex: {
      templateContent: /\{content\}/g,
      templateIcon: /\{icon\}/g,
      templateName: /\{name\}/i,
      spaces: /\s+/g,
      nonWord: /\W/g,
      formElements: /(input|select|button|textarea)/i,
      chunk: /(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
      chunks: /(^\\0|\\0$)/,
      hex: /^0x[0-9a-f]+$/i,
      comma: /,/g,
      digitNonUS: /[\s|\.]/g,
      digitNegativeTest: /^\s*\([.\d]+\)/,
      digitNegativeReplace: /^\s*\(([.\d]+)\)/,
      digitTest: /^[\-+(]?\d+[)]?$/,
      digitReplace: /[,.'"\s]/g
    },
    string: {
      max: 1,
      min: -1,
      emptymin: 1,
      emptymax: -1,
      zero: 0,
      none: 0,
      "null": 0,
      top: !0,
      bottom: !1
    },
    keyCodes: {
      enter: 13
    },
    dates: {},
    instanceMethods: {},
    setup: function(i, n) {
      if (i && i.tHead && 0 !== i.tBodies.length && !0 !== i.hasInitialized) {
        var r, o = "", s = e(i), a = e.metadata;
        i.hasInitialized = !1, i.isProcessing = !0, i.config = n, e.data(i, "tablesorter", n), 
        t.debug(n, "core") && (console[console.group ? "group" : "log"]("Initializing tablesorter v" + t.version), 
        e.data(i, "startoveralltimer", new Date())), n.supportsDataObject = ((r = e.fn.jquery.split("."))[0] = parseInt(r[0], 10), 
        r[0] > 1 || 1 === r[0] && parseInt(r[1], 10) >= 4), n.emptyTo = n.emptyTo.toLowerCase(), 
        n.stringTo = n.stringTo.toLowerCase(), n.last = {
          sortList: [],
          clickedIndex: -1
        }, /tablesorter\-/.test(s.attr("class")) || (o = "" !== n.theme ? " tablesorter-" + n.theme : ""), 
        n.namespace ? n.namespace = "." + n.namespace.replace(t.regex.nonWord, "") : n.namespace = ".tablesorter" + Math.random().toString(16).slice(2), 
        n.table = i, n.$table = s.addClass(t.css.table + " " + n.tableClass + o + " " + n.namespace.slice(1)).attr("role", "grid"), 
        n.$headers = s.find(n.selectorHeaders), n.$table.children().children("tr").attr("role", "row"), 
        n.$tbodies = s.children("tbody:not(." + n.cssInfoBlock + ")").attr({
          "aria-live": "polite",
          "aria-relevant": "all"
        }), n.$table.children("caption").length && ((o = n.$table.children("caption")[0]).id || (o.id = n.namespace.slice(1) + "caption"), 
        n.$table.attr("aria-labelledby", o.id)), n.widgetInit = {}, n.textExtraction = n.$table.attr("data-text-extraction") || n.textExtraction || "basic", 
        t.buildHeaders(n), t.fixColumnWidth(i), t.addWidgetFromClass(i), t.applyWidgetOptions(i), 
        t.setupParsers(n), n.totalRows = 0, n.debug && t.validateOptions(n), n.delayInit || t.buildCache(n), 
        t.bindEvents(i, n.$headers, !0), t.bindMethods(n), n.supportsDataObject && "undefined" != typeof s.data().sortlist ? n.sortList = s.data().sortlist : a && s.metadata() && s.metadata().sortlist && (n.sortList = s.metadata().sortlist), 
        t.applyWidget(i, !0), n.sortList.length > 0 ? (n.last.sortList = n.sortList, t.sortOn(n, n.sortList, {}, !n.initWidgets)) : (t.setHeadersCss(n), 
        n.initWidgets && t.applyWidget(i, !1)), n.showProcessing && s.unbind("sortBegin" + n.namespace + " sortEnd" + n.namespace).bind("sortBegin" + n.namespace + " sortEnd" + n.namespace, function(e) {
          clearTimeout(n.timerProcessing), t.isProcessing(i), "sortBegin" === e.type && (n.timerProcessing = setTimeout(function() {
            t.isProcessing(i, !0);
          }, 500));
        }), i.hasInitialized = !0, i.isProcessing = !1, t.debug(n, "core") && (console.log("Overall initialization time:" + t.benchmark(e.data(i, "startoveralltimer"))), 
        t.debug(n, "core") && console.groupEnd && console.groupEnd()), s.triggerHandler("tablesorter-initialized", i), 
        "function" == typeof n.initialized && n.initialized(i);
      } else t.debug(n, "core") && (i.hasInitialized ? console.warn("Stopping initialization. Tablesorter has already been initialized") : console.error("Stopping initialization! No table, thead or tbody", i));
    },
    bindMethods: function(i) {
      var n = i.$table, r = i.namespace, o = "sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(r + " ");
      n.unbind(o.replace(t.regex.spaces, " ")).bind("sortReset" + r, function(e, i) {
        e.stopPropagation(), t.sortReset(this.config, function(e) {
          e.isApplyingWidgets ? setTimeout(function() {
            t.applyWidget(e, "", i);
          }, 100) : t.applyWidget(e, "", i);
        });
      }).bind("updateAll" + r, function(e, i, n) {
        e.stopPropagation(), t.updateAll(this.config, i, n);
      }).bind("update" + r + " updateRows" + r, function(e, i, n) {
        e.stopPropagation(), t.update(this.config, i, n);
      }).bind("updateHeaders" + r, function(e, i) {
        e.stopPropagation(), t.updateHeaders(this.config, i);
      }).bind("updateCell" + r, function(e, i, n, r) {
        e.stopPropagation(), t.updateCell(this.config, i, n, r);
      }).bind("addRows" + r, function(e, i, n, r) {
        e.stopPropagation(), t.addRows(this.config, i, n, r);
      }).bind("updateComplete" + r, function() {
        this.isUpdating = !1;
      }).bind("sorton" + r, function(e, i, n, r) {
        e.stopPropagation(), t.sortOn(this.config, i, n, r);
      }).bind("appendCache" + r, function(i, n, r) {
        i.stopPropagation(), t.appendCache(this.config, r), e.isFunction(n) && n(this);
      }).bind("updateCache" + r, function(e, i, n) {
        e.stopPropagation(), t.updateCache(this.config, i, n);
      }).bind("applyWidgetId" + r, function(e, i) {
        e.stopPropagation(), t.applyWidgetId(this, i);
      }).bind("applyWidgets" + r, function(e, i) {
        e.stopPropagation(), t.applyWidget(this, !1, i);
      }).bind("refreshWidgets" + r, function(e, i, n) {
        e.stopPropagation(), t.refreshWidgets(this, i, n);
      }).bind("removeWidget" + r, function(e, i, n) {
        e.stopPropagation(), t.removeWidget(this, i, n);
      }).bind("destroy" + r, function(e, i, n) {
        e.stopPropagation(), t.destroy(this, i, n);
      }).bind("resetToLoadState" + r, function(n) {
        n.stopPropagation(), t.removeWidget(this, !0, !1);
        var r = e.extend(!0, {}, i.originalSettings);
        (i = e.extend(!0, {}, t.defaults, r)).originalSettings = r, this.hasInitialized = !1, 
        t.setup(this, i);
      });
    },
    bindEvents: function(i, n, r) {
      var o, s = (i = e(i)[0]).config, a = s.namespace, l = null;
      !0 !== r && (n.addClass(a.slice(1) + "_extra_headers"), (o = t.getClosest(n, "table")).length && "TABLE" === o[0].nodeName && o[0] !== i && e(o[0]).addClass(a.slice(1) + "_extra_table")), 
      o = (s.pointerDown + " " + s.pointerUp + " " + s.pointerClick + " sort keyup ").replace(t.regex.spaces, " ").split(" ").join(a + " "), 
      n.find(s.selectorSort).add(n.filter(s.selectorSort)).unbind(o).bind(o, function(i, n) {
        var r, o, a, u = e(i.target), c = " " + i.type + " ";
        if (!(1 !== (i.which || i.button) && !c.match(" " + s.pointerClick + " | sort | keyup ") || " keyup " === c && i.which !== t.keyCodes.enter || c.match(" " + s.pointerClick + " ") && "undefined" != typeof i.which || c.match(" " + s.pointerUp + " ") && l !== i.target && !0 !== n)) {
          if (c.match(" " + s.pointerDown + " ")) return l = i.target, void ("1" === (a = u.jquery.split("."))[0] && a[1] < 4 && i.preventDefault());
          if (l = null, r = t.getClosest(e(this), "." + t.css.header), t.regex.formElements.test(i.target.nodeName) || u.hasClass(s.cssNoSort) || u.parents("." + s.cssNoSort).length > 0 || r.hasClass("sorter-false") || u.parents("button").length > 0) return !s.cancelSelection;
          s.delayInit && t.isEmptyObject(s.cache) && t.buildCache(s), s.last.clickedIndex = r.attr("data-column") || r.index(), 
          (o = s.$headerIndexed[s.last.clickedIndex][0]) && !o.sortDisabled && t.initSort(s, o, i);
        }
      }), s.cancelSelection && n.attr("unselectable", "on").bind("selectstart", !1).css({
        "user-select": "none",
        MozUserSelect: "none"
      });
    },
    buildHeaders: function(i) {
      var n, r, o, s;
      for (i.headerList = [], i.headerContent = [], i.sortVars = [], t.debug(i, "core") && (o = new Date()), 
      i.columns = t.computeColumnIndex(i.$table.children("thead, tfoot").children("tr")), 
      r = i.cssIcon ? '<i class="' + (i.cssIcon === t.css.icon ? t.css.icon : i.cssIcon + " " + t.css.icon) + '"></i>' : "", 
      i.$headers = e(e.map(i.$table.find(i.selectorHeaders), function(n, o) {
        var s, a, l, u, c, d = e(n);
        if (!t.getClosest(d, "tr").hasClass(i.cssIgnoreRow)) return /(th|td)/i.test(n.nodeName) || (c = t.getClosest(d, "th, td"), 
        d.attr("data-column", c.attr("data-column"))), s = t.getColumnData(i.table, i.headers, o, !0), 
        i.headerContent[o] = d.html(), "" === i.headerTemplate || d.find("." + t.css.headerIn).length || (u = i.headerTemplate.replace(t.regex.templateContent, d.html()).replace(t.regex.templateIcon, d.find("." + t.css.icon).length ? "" : r), 
        i.onRenderTemplate && (a = i.onRenderTemplate.apply(d, [ o, u ])) && "string" == typeof a && (u = a), 
        d.html('<div class="' + t.css.headerIn + '">' + u + "</div>")), i.onRenderHeader && i.onRenderHeader.apply(d, [ o, i, i.$table ]), 
        l = parseInt(d.attr("data-column"), 10), n.column = l, c = t.getOrder(t.getData(d, s, "sortInitialOrder") || i.sortInitialOrder), 
        i.sortVars[l] = {
          count: -1,
          order: c ? i.sortReset ? [ 1, 0, 2 ] : [ 1, 0 ] : i.sortReset ? [ 0, 1, 2 ] : [ 0, 1 ],
          lockedOrder: !1,
          sortedBy: ""
        }, void 0 !== (c = t.getData(d, s, "lockedOrder") || !1) && !1 !== c && (i.sortVars[l].lockedOrder = !0, 
        i.sortVars[l].order = t.getOrder(c) ? [ 1, 1 ] : [ 0, 0 ]), i.headerList[o] = n, 
        d.addClass(t.css.header + " " + i.cssHeader), t.getClosest(d, "tr").addClass(t.css.headerRow + " " + i.cssHeaderRow).attr("role", "row"), 
        i.tabIndex && d.attr("tabindex", 0), n;
      })), i.$headerIndexed = [], s = 0; s < i.columns; s++) t.isEmptyObject(i.sortVars[s]) && (i.sortVars[s] = {}), 
      n = i.$headers.filter('[data-column="' + s + '"]'), i.$headerIndexed[s] = n.length ? n.not(".sorter-false").length ? n.not(".sorter-false").filter(":last") : n.filter(":last") : e();
      i.$table.find(i.selectorHeaders).attr({
        scope: "col",
        role: "columnheader"
      }), t.updateHeader(i), t.debug(i, "core") && (console.log("Built headers:" + t.benchmark(o)), 
      console.log(i.$headers));
    },
    addInstanceMethods: function(i) {
      e.extend(t.instanceMethods, i);
    },
    setupParsers: function(e, i) {
      var n, r, o, s, a, l, u, c, d, h, f, p, m, g, v = e.table, y = 0, b = t.debug(e, "core"), x = {};
      if (e.$tbodies = e.$table.children("tbody:not(." + e.cssInfoBlock + ")"), 0 === (g = (m = void 0 === i ? e.$tbodies : i).length)) return b ? console.warn("Warning: *Empty table!* Not building a parser cache") : "";
      for (b && (p = new Date(), console[console.group ? "group" : "log"]("Detecting parsers for each column")), 
      r = {
        extractors: [],
        parsers: []
      }; y < g; ) {
        if ((n = m[y].rows).length) for (a = 0, s = e.columns, l = 0; l < s; l++) {
          if ((u = e.$headerIndexed[a]) && u.length && (c = t.getColumnData(v, e.headers, a), 
          f = t.getParserById(t.getData(u, c, "extractor")), h = t.getParserById(t.getData(u, c, "sorter")), 
          d = "false" === t.getData(u, c, "parser"), e.empties[a] = (t.getData(u, c, "empty") || e.emptyTo || (e.emptyToBottom ? "bottom" : "top")).toLowerCase(), 
          e.strings[a] = (t.getData(u, c, "string") || e.stringTo || "max").toLowerCase(), 
          d && (h = t.getParserById("no-parser")), f || (f = !1), h || (h = t.detectParserForColumn(e, n, -1, a)), 
          b && (x["(" + a + ") " + u.text()] = {
            parser: h.id,
            extractor: f ? f.id : "none",
            string: e.strings[a],
            empty: e.empties[a]
          }), r.parsers[a] = h, r.extractors[a] = f, (o = u[0].colSpan - 1) > 0)) for (a += o, 
          s += o; o + 1 > 0; ) r.parsers[a - o] = h, r.extractors[a - o] = f, o--;
          a++;
        }
        y += r.parsers.length ? g : 1;
      }
      b && (t.isEmptyObject(x) ? console.warn("  No parsers detected!") : console[console.table ? "table" : "log"](x), 
      console.log("Completed detecting parsers" + t.benchmark(p)), console.groupEnd && console.groupEnd()), 
      e.parsers = r.parsers, e.extractors = r.extractors;
    },
    addParser: function(e) {
      var i, n = t.parsers.length, r = !0;
      for (i = 0; i < n; i++) t.parsers[i].id.toLowerCase() === e.id.toLowerCase() && (r = !1);
      r && (t.parsers[t.parsers.length] = e);
    },
    getParserById: function(e) {
      if ("false" == e) return !1;
      var i, n = t.parsers.length;
      for (i = 0; i < n; i++) if (t.parsers[i].id.toLowerCase() === e.toString().toLowerCase()) return t.parsers[i];
      return !1;
    },
    detectParserForColumn: function(i, n, r, o) {
      for (var s, a, l, u = t.parsers.length, c = !1, d = "", h = t.debug(i, "core"), f = !0; "" === d && f; ) (l = n[++r]) && r < 50 ? l.className.indexOf(t.cssIgnoreRow) < 0 && (c = n[r].cells[o], 
      d = t.getElementText(i, c, o), a = e(c), h && console.log("Checking if value was empty on row " + r + ", column: " + o + ': "' + d + '"')) : f = !1;
      for (;--u >= 0; ) if ((s = t.parsers[u]) && "text" !== s.id && s.is && s.is(d, i.table, c, a)) return s;
      return t.getParserById("text");
    },
    getElementText: function(i, n, r) {
      if (!n) return "";
      var o, s = i.textExtraction || "", a = n.jquery ? n : e(n);
      return "string" == typeof s ? "basic" === s && void 0 !== (o = a.attr(i.textAttribute)) ? e.trim(o) : e.trim(n.textContent || a.text()) : "function" == typeof s ? e.trim(s(a[0], i.table, r)) : "function" == typeof (o = t.getColumnData(i.table, s, r)) ? e.trim(o(a[0], i.table, r)) : e.trim(a[0].textContent || a.text());
    },
    getParsedText: function(e, i, n, r) {
      void 0 === r && (r = t.getElementText(e, i, n));
      var o = "" + r, s = e.parsers[n], a = e.extractors[n];
      return s && (a && "function" == typeof a.format && (r = a.format(r, e.table, i, n)), 
      o = "no-parser" === s.id ? "" : s.format("" + r, e.table, i, n), e.ignoreCase && "string" == typeof o && (o = o.toLowerCase())), 
      o;
    },
    buildCache: function(i, n, r) {
      var o, s, a, l, u, c, d, h, f, p, m, g, v, y, b, x, w, _, S, C, T, k, M = i.table, D = i.parsers, A = t.debug(i, "core");
      if (i.$tbodies = i.$table.children("tbody:not(." + i.cssInfoBlock + ")"), d = void 0 === r ? i.$tbodies : r, 
      i.cache = {}, i.totalRows = 0, !D) return A ? console.warn("Warning: *Empty table!* Not building a cache") : "";
      for (A && (g = new Date()), i.showProcessing && t.isProcessing(M, !0), c = 0; c < d.length; c++) {
        for (x = [], o = i.cache[c] = {
          normalized: []
        }, v = d[c] && d[c].rows.length || 0, l = 0; l < v; ++l) if (y = {
          child: [],
          raw: []
        }, f = [], !(h = e(d[c].rows[l])).hasClass(i.selectorRemove.slice(1))) if (h.hasClass(i.cssChildRow) && 0 !== l) for (T = o.normalized.length - 1, 
        (b = o.normalized[T][i.columns]).$row = b.$row.add(h), h.prev().hasClass(i.cssChildRow) || h.prev().addClass(t.css.cssHasChild), 
        p = h.children("th, td"), T = b.child.length, b.child[T] = [], _ = 0, C = i.columns, 
        u = 0; u < C; u++) (m = p[u]) && (b.child[T][u] = t.getParsedText(i, m, u), (w = p[u].colSpan - 1) > 0 && (_ += w, 
        C += w)), _++; else {
          for (y.$row = h, y.order = l, _ = 0, C = i.columns, u = 0; u < C; ++u) {
            if ((m = h[0].cells[u]) && _ < i.columns && (!(S = "undefined" != typeof D[_]) && A && console.warn("No parser found for row: " + l + ", column: " + u + '; cell containing: "' + e(m).text() + '"; does it have a header?'), 
            s = t.getElementText(i, m, _), y.raw[_] = s, a = t.getParsedText(i, m, _, s), f[_] = a, 
            S && "numeric" === (D[_].type || "").toLowerCase() && (x[_] = Math.max(Math.abs(a) || 0, x[_] || 0)), 
            (w = m.colSpan - 1) > 0)) {
              for (k = 0; k <= w; ) a = i.duplicateSpan || 0 === k ? s : "string" != typeof i.textExtraction && t.getElementText(i, m, _ + k) || "", 
              y.raw[_ + k] = a, f[_ + k] = a, k++;
              _ += w, C += w;
            }
            _++;
          }
          f[i.columns] = y, o.normalized[o.normalized.length] = f;
        }
        o.colMax = x, i.totalRows += o.normalized.length;
      }
      if (i.showProcessing && t.isProcessing(M), A) {
        for (T = Math.min(5, i.cache[0].normalized.length), console[console.group ? "group" : "log"]("Building cache for " + i.totalRows + " rows (showing " + T + " rows in log) and " + i.columns + " columns" + t.benchmark(g)), 
        s = {}, u = 0; u < i.columns; u++) for (_ = 0; _ < T; _++) s["row: " + _] || (s["row: " + _] = {}), 
        s["row: " + _][i.$headerIndexed[u].text()] = i.cache[0].normalized[_][u];
        console[console.table ? "table" : "log"](s), console.groupEnd && console.groupEnd();
      }
      e.isFunction(n) && n(M);
    },
    getColumnText: function(i, n, r, o) {
      var s, a, l, u, c, d, h, f, p, m, g = "function" == typeof r, v = "all" === n, y = {
        raw: [],
        parsed: [],
        $cell: []
      }, b = (i = e(i)[0]).config;
      if (!t.isEmptyObject(b)) {
        for (c = b.$tbodies.length, s = 0; s < c; s++) for (d = (l = b.cache[s].normalized).length, 
        a = 0; a < d; a++) u = l[a], o && !u[b.columns].$row.is(o) || (m = !0, f = v ? u.slice(0, b.columns) : u[n], 
        u = u[b.columns], h = v ? u.raw : u.raw[n], p = v ? u.$row.children() : u.$row.children().eq(n), 
        g && (m = r({
          tbodyIndex: s,
          rowIndex: a,
          parsed: f,
          raw: h,
          $row: u.$row,
          $cell: p
        })), !1 !== m && (y.parsed[y.parsed.length] = f, y.raw[y.raw.length] = h, y.$cell[y.$cell.length] = p));
        return y;
      }
      t.debug(b, "core") && console.warn("No cache found - aborting getColumnText function!");
    },
    setHeadersCss: function(i) {
      var n, r, o = i.sortList, s = o.length, a = t.css.sortNone + " " + i.cssNone, l = [ t.css.sortAsc + " " + i.cssAsc, t.css.sortDesc + " " + i.cssDesc ], u = [ i.cssIconAsc, i.cssIconDesc, i.cssIconNone ], c = [ "ascending", "descending" ], d = function(e, i) {
        e.removeClass(a).addClass(l[i]).attr("aria-sort", c[i]).find("." + t.css.icon).removeClass(u[2]).addClass(u[i]);
      }, h = i.$table.find("tfoot tr").children("td, th").add(e(i.namespace + "_extra_headers")).removeClass(l.join(" ")), f = i.$headers.add(e("thead " + i.namespace + "_extra_headers")).removeClass(l.join(" ")).addClass(a).attr("aria-sort", "none").find("." + t.css.icon).removeClass(u.join(" ")).end();
      for (f.not(".sorter-false").find("." + t.css.icon).addClass(u[2]), i.cssIconDisabled && f.filter(".sorter-false").find("." + t.css.icon).addClass(i.cssIconDisabled), 
      n = 0; n < s; n++) if (2 !== o[n][1]) {
        if ((f = (f = i.$headers.filter(function(e) {
          for (var n = !0, r = i.$headers.eq(e), o = parseInt(r.attr("data-column"), 10), s = o + t.getClosest(r, "th, td")[0].colSpan; o < s; o++) n = !!n && (n || t.isValueInArray(o, i.sortList) > -1);
          return n;
        })).not(".sorter-false").filter('[data-column="' + o[n][0] + '"]' + (1 === s ? ":last" : ""))).length) for (r = 0; r < f.length; r++) f[r].sortDisabled || d(f.eq(r), o[n][1]);
        h.length && d(h.filter('[data-column="' + o[n][0] + '"]'), o[n][1]);
      }
      for (s = i.$headers.length, n = 0; n < s; n++) t.setColumnAriaLabel(i, i.$headers.eq(n));
    },
    getClosest: function(t, i) {
      return e.fn.closest ? t.closest(i) : t.is(i) ? t : t.parents(i).filter(":first");
    },
    setColumnAriaLabel: function(i, n, r) {
      if (n.length) {
        var o = parseInt(n.attr("data-column"), 10), s = i.sortVars[o], a = n.hasClass(t.css.sortAsc) ? "sortAsc" : n.hasClass(t.css.sortDesc) ? "sortDesc" : "sortNone", l = e.trim(n.text()) + ": " + t.language[a];
        n.hasClass("sorter-false") || !1 === r ? l += t.language.sortDisabled : (a = (s.count + 1) % s.order.length, 
        r = s.order[a], l += t.language[0 === r ? "nextAsc" : 1 === r ? "nextDesc" : "nextNone"]), 
        n.attr("aria-label", l), s.sortedBy ? n.attr("data-sortedBy", s.sortedBy) : n.removeAttr("data-sortedBy");
      }
    },
    updateHeader: function(e) {
      var i, n, r, o, s = e.table, a = e.$headers.length;
      for (i = 0; i < a; i++) r = e.$headers.eq(i), o = t.getColumnData(s, e.headers, i, !0), 
      n = "false" === t.getData(r, o, "sorter") || "false" === t.getData(r, o, "parser"), 
      t.setColumnSort(e, r, n);
    },
    setColumnSort: function(e, t, i) {
      var n = e.table.id;
      t[0].sortDisabled = i, t[i ? "addClass" : "removeClass"]("sorter-false").attr("aria-disabled", "" + i), 
      e.tabIndex && (i ? t.removeAttr("tabindex") : t.attr("tabindex", "0")), n && (i ? t.removeAttr("aria-controls") : t.attr("aria-controls", n));
    },
    updateHeaderSortCount: function(i, n) {
      var r, o, s, a, l, u, c, d, h = n || i.sortList, f = h.length;
      for (i.sortList = [], a = 0; a < f; a++) if (c = h[a], (r = parseInt(c[0], 10)) < i.columns) {
        switch (i.sortVars[r].order || (d = t.getOrder(i.sortInitialOrder) ? i.sortReset ? [ 1, 0, 2 ] : [ 1, 0 ] : i.sortReset ? [ 0, 1, 2 ] : [ 0, 1 ], 
        i.sortVars[r].order = d, i.sortVars[r].count = 0), d = i.sortVars[r].order, o = (o = ("" + c[1]).match(/^(1|d|s|o|n)/)) ? o[0] : "") {
         case "1":
         case "d":
          o = 1;
          break;

         case "s":
          o = l || 0;
          break;

         case "o":
          o = 0 === (u = d[(l || 0) % d.length]) ? 1 : 1 === u ? 0 : 2;
          break;

         case "n":
          o = d[++i.sortVars[r].count % d.length];
          break;

         default:
          o = 0;
        }
        l = 0 === a ? o : l, s = [ r, parseInt(o, 10) || 0 ], i.sortList[i.sortList.length] = s, 
        o = e.inArray(s[1], d), i.sortVars[r].count = o >= 0 ? o : s[1] % d.length;
      }
    },
    updateAll: function(e, i, n) {
      var r = e.table;
      r.isUpdating = !0, t.refreshWidgets(r, !0, !0), t.buildHeaders(e), t.bindEvents(r, e.$headers, !0), 
      t.bindMethods(e), t.commonUpdate(e, i, n);
    },
    update: function(e, i, n) {
      e.table.isUpdating = !0, t.updateHeader(e), t.commonUpdate(e, i, n);
    },
    updateHeaders: function(e, i) {
      e.table.isUpdating = !0, t.buildHeaders(e), t.bindEvents(e.table, e.$headers, !0), 
      t.resortComplete(e, i);
    },
    updateCell: function(i, n, r, o) {
      if (e(n).closest("tr").hasClass(i.cssChildRow)) console.warn('Tablesorter Warning! "updateCell" for child row content has been disabled, use "update" instead'); else {
        if (t.isEmptyObject(i.cache)) return t.updateHeader(i), void t.commonUpdate(i, r, o);
        i.table.isUpdating = !0, i.$table.find(i.selectorRemove).remove();
        var s, a, l, u, c, d, h = i.$tbodies, f = e(n), p = h.index(t.getClosest(f, "tbody")), m = i.cache[p], g = t.getClosest(f, "tr");
        if (n = f[0], h.length && p >= 0) {
          if (l = h.eq(p).find("tr").not("." + i.cssChildRow).index(g), c = m.normalized[l], 
          (d = g[0].cells.length) !== i.columns) for (u = 0, s = !1, a = 0; a < d; a++) s || g[0].cells[a] === n ? s = !0 : u += g[0].cells[a].colSpan; else u = f.index();
          s = t.getElementText(i, n, u), c[i.columns].raw[u] = s, s = t.getParsedText(i, n, u, s), 
          c[u] = s, "numeric" === (i.parsers[u].type || "").toLowerCase() && (m.colMax[u] = Math.max(Math.abs(s) || 0, m.colMax[u] || 0)), 
          !1 !== (s = "undefined" !== r ? r : i.resort) ? t.checkResort(i, s, o) : t.resortComplete(i, o);
        } else t.debug(i, "core") && console.error("updateCell aborted, tbody missing or not within the indicated table"), 
        i.table.isUpdating = !1;
      }
    },
    addRows: function(i, n, r, o) {
      var s, a, l, u, c, d, h, f, p, m, g, v, y, b = "string" == typeof n && 1 === i.$tbodies.length && /<tr/.test(n || ""), x = i.table;
      if (b) n = e(n), i.$tbodies.append(n); else if (!(n && n instanceof e && t.getClosest(n, "table")[0] === i.table)) return t.debug(i, "core") && console.error("addRows method requires (1) a jQuery selector reference to rows that have already been added to the table, or (2) row HTML string to be added to a table with only one tbody"), 
      !1;
      if (x.isUpdating = !0, t.isEmptyObject(i.cache)) t.updateHeader(i), t.commonUpdate(i, r, o); else {
        for (c = n.filter("tr").attr("role", "row").length, l = i.$tbodies.index(n.parents("tbody").filter(":first")), 
        i.parsers && i.parsers.length || t.setupParsers(i), u = 0; u < c; u++) {
          for (p = 0, h = n[u].cells.length, f = i.cache[l].normalized.length, g = [], m = {
            child: [],
            raw: [],
            $row: n.eq(u),
            order: f
          }, d = 0; d < h; d++) v = n[u].cells[d], s = t.getElementText(i, v, p), m.raw[p] = s, 
          a = t.getParsedText(i, v, p, s), g[p] = a, "numeric" === (i.parsers[p].type || "").toLowerCase() && (i.cache[l].colMax[p] = Math.max(Math.abs(a) || 0, i.cache[l].colMax[p] || 0)), 
          (y = v.colSpan - 1) > 0 && (p += y), p++;
          g[i.columns] = m, i.cache[l].normalized[f] = g;
        }
        t.checkResort(i, r, o);
      }
    },
    updateCache: function(e, i, n) {
      e.parsers && e.parsers.length || t.setupParsers(e, n), t.buildCache(e, i, n);
    },
    appendCache: function(e, i) {
      var n, r, o, s, a, l, u, c = e.table, d = e.$tbodies, h = [], f = e.cache;
      if (t.isEmptyObject(f)) return e.appender ? e.appender(c, h) : c.isUpdating ? e.$table.triggerHandler("updateComplete", c) : "";
      for (t.debug(e, "core") && (u = new Date()), l = 0; l < d.length; l++) if ((o = d.eq(l)).length) {
        for (s = t.processTbody(c, o, !0), r = (n = f[l].normalized).length, a = 0; a < r; a++) h[h.length] = n[a][e.columns].$row, 
        e.appender && (!e.pager || e.pager.removeRows || e.pager.ajax) || s.append(n[a][e.columns].$row);
        t.processTbody(c, s, !1);
      }
      e.appender && e.appender(c, h), t.debug(e, "core") && console.log("Rebuilt table" + t.benchmark(u)), 
      i || e.appender || t.applyWidget(c), c.isUpdating && e.$table.triggerHandler("updateComplete", c);
    },
    commonUpdate: function(e, i, n) {
      e.$table.find(e.selectorRemove).remove(), t.setupParsers(e), t.buildCache(e), t.checkResort(e, i, n);
    },
    initSort: function(i, n, r) {
      if (i.table.isUpdating) return setTimeout(function() {
        t.initSort(i, n, r);
      }, 50);
      var o, s, a, l, u, c, d, h = !r[i.sortMultiSortKey], f = i.table, p = i.$headers.length, m = t.getClosest(e(n), "th, td"), g = parseInt(m.attr("data-column"), 10), v = "mouseup" === r.type ? "user" : r.type, y = i.sortVars[g].order;
      if (m = m[0], i.$table.triggerHandler("sortStart", f), c = (i.sortVars[g].count + 1) % y.length, 
      i.sortVars[g].count = r[i.sortResetKey] ? 2 : c, i.sortRestart) for (a = 0; a < p; a++) d = i.$headers.eq(a), 
      g !== (c = parseInt(d.attr("data-column"), 10)) && (h || d.hasClass(t.css.sortNone)) && (i.sortVars[c].count = -1);
      if (h) {
        if (e.each(i.sortVars, function(e) {
          i.sortVars[e].sortedBy = "";
        }), i.sortList = [], i.last.sortList = [], null !== i.sortForce) for (o = i.sortForce, 
        s = 0; s < o.length; s++) o[s][0] !== g && (i.sortList[i.sortList.length] = o[s], 
        i.sortVars[o[s][0]].sortedBy = "sortForce");
        if ((l = y[i.sortVars[g].count]) < 2 && (i.sortList[i.sortList.length] = [ g, l ], 
        i.sortVars[g].sortedBy = v, m.colSpan > 1)) for (s = 1; s < m.colSpan; s++) i.sortList[i.sortList.length] = [ g + s, l ], 
        i.sortVars[g + s].count = e.inArray(l, y), i.sortVars[g + s].sortedBy = v;
      } else if (i.sortList = e.extend([], i.last.sortList), t.isValueInArray(g, i.sortList) >= 0) for (i.sortVars[g].sortedBy = v, 
      s = 0; s < i.sortList.length; s++) (c = i.sortList[s])[0] === g && (c[1] = y[i.sortVars[g].count], 
      2 === c[1] && (i.sortList.splice(s, 1), i.sortVars[g].count = -1)); else if (l = y[i.sortVars[g].count], 
      i.sortVars[g].sortedBy = v, l < 2 && (i.sortList[i.sortList.length] = [ g, l ], 
      m.colSpan > 1)) for (s = 1; s < m.colSpan; s++) i.sortList[i.sortList.length] = [ g + s, l ], 
      i.sortVars[g + s].count = e.inArray(l, y), i.sortVars[g + s].sortedBy = v;
      if (i.last.sortList = e.extend([], i.sortList), i.sortList.length && i.sortAppend && (o = e.isArray(i.sortAppend) ? i.sortAppend : i.sortAppend[i.sortList[0][0]], 
      !t.isEmptyObject(o))) for (s = 0; s < o.length; s++) if (o[s][0] !== g && t.isValueInArray(o[s][0], i.sortList) < 0) {
        if (u = ("" + (l = o[s][1])).match(/^(a|d|s|o|n)/)) switch (c = i.sortList[0][1], 
        u[0]) {
         case "d":
          l = 1;
          break;

         case "s":
          l = c;
          break;

         case "o":
          l = 0 === c ? 1 : 0;
          break;

         case "n":
          l = (c + 1) % y.length;
          break;

         default:
          l = 0;
        }
        i.sortList[i.sortList.length] = [ o[s][0], l ], i.sortVars[o[s][0]].sortedBy = "sortAppend";
      }
      i.$table.triggerHandler("sortBegin", f), setTimeout(function() {
        t.setHeadersCss(i), t.multisort(i), t.appendCache(i), i.$table.triggerHandler("sortBeforeEnd", f), 
        i.$table.triggerHandler("sortEnd", f);
      }, 1);
    },
    multisort: function(e) {
      var i, n, r, o, s = e.table, a = [], l = 0, u = e.textSorter || "", c = e.sortList, d = c.length, h = e.$tbodies.length;
      if (!e.serverSideSorting && !t.isEmptyObject(e.cache)) {
        if (t.debug(e, "core") && (n = new Date()), "object" == typeof u) for (r = e.columns; r--; ) "function" == typeof (o = t.getColumnData(s, u, r)) && (a[r] = o);
        for (i = 0; i < h; i++) r = e.cache[i].colMax, e.cache[i].normalized.sort(function(i, n) {
          var o, h, f, p, m, g, v;
          for (o = 0; o < d; o++) {
            if (f = c[o][0], p = c[o][1], l = 0 === p, e.sortStable && i[f] === n[f] && 1 === d) return i[e.columns].order - n[e.columns].order;
            if ((h = /n/i.test(t.getSortType(e.parsers, f))) && e.strings[f] ? (h = "boolean" == typeof t.string[e.strings[f]] ? (l ? 1 : -1) * (t.string[e.strings[f]] ? -1 : 1) : e.strings[f] && t.string[e.strings[f]] || 0, 
            m = e.numberSorter ? e.numberSorter(i[f], n[f], l, r[f], s) : t["sortNumeric" + (l ? "Asc" : "Desc")](i[f], n[f], h, r[f], f, e)) : (g = l ? i : n, 
            v = l ? n : i, m = "function" == typeof u ? u(g[f], v[f], l, f, s) : "function" == typeof a[f] ? a[f](g[f], v[f], l, f, s) : t["sortNatural" + (l ? "Asc" : "Desc")](i[f] || "", n[f] || "", f, e)), 
            m) return m;
          }
          return i[e.columns].order - n[e.columns].order;
        });
        t.debug(e, "core") && console.log("Applying sort " + c.toString() + t.benchmark(n));
      }
    },
    resortComplete: function(t, i) {
      t.table.isUpdating && t.$table.triggerHandler("updateComplete", t.table), e.isFunction(i) && i(t.table);
    },
    checkResort: function(i, n, r) {
      var o = e.isArray(n) ? n : i.sortList;
      !1 === (void 0 === n ? i.resort : n) || i.serverSideSorting || i.table.isProcessing ? (t.resortComplete(i, r), 
      t.applyWidget(i.table, !1)) : o.length ? t.sortOn(i, o, function() {
        t.resortComplete(i, r);
      }, !0) : t.sortReset(i, function() {
        t.resortComplete(i, r), t.applyWidget(i.table, !1);
      });
    },
    sortOn: function(i, n, r, o) {
      var s, a = i.table;
      for (i.$table.triggerHandler("sortStart", a), s = 0; s < i.columns; s++) i.sortVars[s].sortedBy = t.isValueInArray(s, n) > -1 ? "sorton" : "";
      t.updateHeaderSortCount(i, n), t.setHeadersCss(i), i.delayInit && t.isEmptyObject(i.cache) && t.buildCache(i), 
      i.$table.triggerHandler("sortBegin", a), t.multisort(i), t.appendCache(i, o), i.$table.triggerHandler("sortBeforeEnd", a), 
      i.$table.triggerHandler("sortEnd", a), t.applyWidget(a), e.isFunction(r) && r(a);
    },
    sortReset: function(i, n) {
      var r;
      for (i.sortList = [], r = 0; r < i.columns; r++) i.sortVars[r].count = -1, i.sortVars[r].sortedBy = "";
      t.setHeadersCss(i), t.multisort(i), t.appendCache(i), e.isFunction(n) && n(i.table);
    },
    getSortType: function(e, t) {
      return e && e[t] && e[t].type || "";
    },
    getOrder: function(e) {
      return /^d/i.test(e) || 1 === e;
    },
    sortNatural: function(e, i) {
      if (e === i) return 0;
      e = (e || "").toString(), i = (i || "").toString();
      var n, r, o, s, a, l, u = t.regex;
      if (u.hex.test(i)) {
        if ((n = parseInt(e.match(u.hex), 16)) < (r = parseInt(i.match(u.hex), 16))) return -1;
        if (n > r) return 1;
      }
      for (n = e.replace(u.chunk, "\\0$1\\0").replace(u.chunks, "").split("\\0"), r = i.replace(u.chunk, "\\0$1\\0").replace(u.chunks, "").split("\\0"), 
      l = Math.max(n.length, r.length), a = 0; a < l; a++) {
        if (o = isNaN(n[a]) ? n[a] || 0 : parseFloat(n[a]) || 0, s = isNaN(r[a]) ? r[a] || 0 : parseFloat(r[a]) || 0, 
        isNaN(o) !== isNaN(s)) return isNaN(o) ? 1 : -1;
        if (typeof o != typeof s && (o += "", s += ""), o < s) return -1;
        if (o > s) return 1;
      }
      return 0;
    },
    sortNaturalAsc: function(e, i, n, r) {
      if (e === i) return 0;
      var o = t.string[r.empties[n] || r.emptyTo];
      return "" === e && 0 !== o ? "boolean" == typeof o ? o ? -1 : 1 : -o || -1 : "" === i && 0 !== o ? "boolean" == typeof o ? o ? 1 : -1 : o || 1 : t.sortNatural(e, i);
    },
    sortNaturalDesc: function(e, i, n, r) {
      if (e === i) return 0;
      var o = t.string[r.empties[n] || r.emptyTo];
      return "" === e && 0 !== o ? "boolean" == typeof o ? o ? -1 : 1 : o || 1 : "" === i && 0 !== o ? "boolean" == typeof o ? o ? 1 : -1 : -o || -1 : t.sortNatural(i, e);
    },
    sortText: function(e, t) {
      return e > t ? 1 : e < t ? -1 : 0;
    },
    getTextValue: function(e, t, i) {
      if (i) {
        var n, r = e ? e.length : 0, o = i + t;
        for (n = 0; n < r; n++) o += e.charCodeAt(n);
        return t * o;
      }
      return 0;
    },
    sortNumericAsc: function(e, i, n, r, o, s) {
      if (e === i) return 0;
      var a = t.string[s.empties[o] || s.emptyTo];
      return "" === e && 0 !== a ? "boolean" == typeof a ? a ? -1 : 1 : -a || -1 : "" === i && 0 !== a ? "boolean" == typeof a ? a ? 1 : -1 : a || 1 : (isNaN(e) && (e = t.getTextValue(e, n, r)), 
      isNaN(i) && (i = t.getTextValue(i, n, r)), e - i);
    },
    sortNumericDesc: function(e, i, n, r, o, s) {
      if (e === i) return 0;
      var a = t.string[s.empties[o] || s.emptyTo];
      return "" === e && 0 !== a ? "boolean" == typeof a ? a ? -1 : 1 : a || 1 : "" === i && 0 !== a ? "boolean" == typeof a ? a ? 1 : -1 : -a || -1 : (isNaN(e) && (e = t.getTextValue(e, n, r)), 
      isNaN(i) && (i = t.getTextValue(i, n, r)), i - e);
    },
    sortNumeric: function(e, t) {
      return e - t;
    },
    addWidget: function(e) {
      e.id && !t.isEmptyObject(t.getWidgetById(e.id)) && console.warn('"' + e.id + '" widget was loaded more than once!'), 
      t.widgets[t.widgets.length] = e;
    },
    hasWidget: function(t, i) {
      return (t = e(t)).length && t[0].config && t[0].config.widgetInit[i] || !1;
    },
    getWidgetById: function(e) {
      var i, n, r = t.widgets.length;
      for (i = 0; i < r; i++) if ((n = t.widgets[i]) && n.id && n.id.toLowerCase() === e.toLowerCase()) return n;
    },
    applyWidgetOptions: function(i) {
      var n, r, o, s = i.config, a = s.widgets.length;
      if (a) for (n = 0; n < a; n++) (r = t.getWidgetById(s.widgets[n])) && r.options && (o = e.extend(!0, {}, r.options), 
      s.widgetOptions = e.extend(!0, o, s.widgetOptions), e.extend(!0, t.defaults.widgetOptions, r.options));
    },
    addWidgetFromClass: function(e) {
      var i, n, r = e.config, o = "^" + r.widgetClass.replace(t.regex.templateName, "(\\S+)+") + "$", s = new RegExp(o, "g"), a = (e.className || "").split(t.regex.spaces);
      if (a.length) for (i = a.length, n = 0; n < i; n++) a[n].match(s) && (r.widgets[r.widgets.length] = a[n].replace(s, "$1"));
    },
    applyWidgetId: function(i, n, r) {
      var o, s, a, l = (i = e(i)[0]).config, u = l.widgetOptions, c = t.debug(l, "core"), d = t.getWidgetById(n);
      d && (a = d.id, o = !1, e.inArray(a, l.widgets) < 0 && (l.widgets[l.widgets.length] = a), 
      c && (s = new Date()), !r && l.widgetInit[a] || (l.widgetInit[a] = !0, i.hasInitialized && t.applyWidgetOptions(i), 
      "function" == typeof d.init && (o = !0, c && console[console.group ? "group" : "log"]("Initializing " + a + " widget"), 
      d.init(i, d, l, u))), r || "function" != typeof d.format || (o = !0, c && console[console.group ? "group" : "log"]("Updating " + a + " widget"), 
      d.format(i, l, u, !1)), c && o && (console.log("Completed " + (r ? "initializing " : "applying ") + a + " widget" + t.benchmark(s)), 
      console.groupEnd && console.groupEnd()));
    },
    applyWidget: function(i, n, r) {
      var o, s, a, l, u, c = (i = e(i)[0]).config, d = t.debug(c, "core"), h = [];
      if (!1 === n || !i.hasInitialized || !i.isApplyingWidgets && !i.isUpdating) {
        if (d && (u = new Date()), t.addWidgetFromClass(i), clearTimeout(c.timerReady), 
        c.widgets.length) {
          for (i.isApplyingWidgets = !0, c.widgets = e.grep(c.widgets, function(t, i) {
            return e.inArray(t, c.widgets) === i;
          }), s = (a = c.widgets || []).length, o = 0; o < s; o++) (l = t.getWidgetById(a[o])) && l.id ? (l.priority || (l.priority = 10), 
          h[o] = l) : d && console.warn('"' + a[o] + '" was enabled, but the widget code has not been loaded!');
          for (h.sort(function(e, t) {
            return e.priority < t.priority ? -1 : e.priority === t.priority ? 0 : 1;
          }), s = h.length, d && console[console.group ? "group" : "log"]("Start " + (n ? "initializing" : "applying") + " widgets"), 
          o = 0; o < s; o++) (l = h[o]) && l.id && t.applyWidgetId(i, l.id, n);
          d && console.groupEnd && console.groupEnd();
        }
        c.timerReady = setTimeout(function() {
          i.isApplyingWidgets = !1, e.data(i, "lastWidgetApplication", new Date()), c.$table.triggerHandler("tablesorter-ready"), 
          n || "function" != typeof r || r(i), d && (l = c.widgets.length, console.log("Completed " + (!0 === n ? "initializing " : "applying ") + l + " widget" + (1 !== l ? "s" : "") + t.benchmark(u)));
        }, 10);
      }
    },
    removeWidget: function(i, n, r) {
      var o, s, a, l, u = (i = e(i)[0]).config;
      if (!0 === n) for (n = [], l = t.widgets.length, a = 0; a < l; a++) (s = t.widgets[a]) && s.id && (n[n.length] = s.id); else n = (e.isArray(n) ? n.join(",") : n || "").toLowerCase().split(/[\s,]+/);
      for (l = n.length, o = 0; o < l; o++) s = t.getWidgetById(n[o]), (a = e.inArray(n[o], u.widgets)) >= 0 && !0 !== r && u.widgets.splice(a, 1), 
      s && s.remove && (t.debug(u, "core") && console.log((r ? "Refreshing" : "Removing") + ' "' + n[o] + '" widget'), 
      s.remove(i, u, u.widgetOptions, r), u.widgetInit[n[o]] = !1);
      u.$table.triggerHandler("widgetRemoveEnd", i);
    },
    refreshWidgets: function(i, n, r) {
      var o, s, a = (i = e(i)[0]).config.widgets, l = t.widgets, u = l.length, c = [], d = function(t) {
        e(t).triggerHandler("refreshComplete");
      };
      for (o = 0; o < u; o++) (s = l[o]) && s.id && (n || e.inArray(s.id, a) < 0) && (c[c.length] = s.id);
      t.removeWidget(i, c.join(","), !0), !0 !== r ? (t.applyWidget(i, n || !1, d), n && t.applyWidget(i, !1, d)) : d(i);
    },
    benchmark: function(e) {
      return " (" + (new Date().getTime() - e.getTime()) + " ms)";
    },
    log: function() {
      console.log(arguments);
    },
    debug: function(e, t) {
      return e && (!0 === e.debug || "string" == typeof e.debug && e.debug.indexOf(t) > -1);
    },
    isEmptyObject: function(e) {
      for (var t in e) return !1;
      return !0;
    },
    isValueInArray: function(e, t) {
      var i, n = t && t.length || 0;
      for (i = 0; i < n; i++) if (t[i][0] === e) return i;
      return -1;
    },
    formatFloat: function(i, n) {
      return "string" != typeof i || "" === i ? i : (i = (n && n.config ? !1 !== n.config.usNumberFormat : void 0 === n || n) ? i.replace(t.regex.comma, "") : i.replace(t.regex.digitNonUS, "").replace(t.regex.comma, "."), 
      t.regex.digitNegativeTest.test(i) && (i = i.replace(t.regex.digitNegativeReplace, "-$1")), 
      r = parseFloat(i), isNaN(r) ? e.trim(i) : r);
      var r;
    },
    isDigit: function(e) {
      return isNaN(e) ? t.regex.digitTest.test(e.toString().replace(t.regex.digitReplace, "")) : "" !== e;
    },
    computeColumnIndex: function(i, n) {
      var r, o, s, a, l, u, c, d, h, f, p = n && n.columns || 0, m = [], g = new Array(p);
      for (r = 0; r < i.length; r++) for (u = i[r].cells, o = 0; o < u.length; o++) {
        for (c = r, d = (l = u[o]).rowSpan || 1, h = l.colSpan || 1, "undefined" == typeof m[c] && (m[c] = []), 
        s = 0; s < m[c].length + 1; s++) if ("undefined" == typeof m[c][s]) {
          f = s;
          break;
        }
        for (p && l.cellIndex === f || (l.setAttribute ? l.setAttribute("data-column", f) : e(l).attr("data-column", f)), 
        s = c; s < c + d; s++) for ("undefined" == typeof m[s] && (m[s] = []), g = m[s], 
        a = f; a < f + h; a++) g[a] = "x";
      }
      return t.checkColumnCount(i, m, g.length), g.length;
    },
    checkColumnCount: function(e, t, i) {
      var n, r, o = !0, s = [];
      for (n = 0; n < t.length; n++) if (t[n] && (r = t[n].length, t[n].length !== i)) {
        o = !1;
        break;
      }
      o || (e.each(function(e, t) {
        var i = t.parentElement.nodeName;
        s.indexOf(i) < 0 && s.push(i);
      }), console.error("Invalid or incorrect number of columns in the " + s.join(" or ") + "; expected " + i + ", but found " + r + " columns"));
    },
    fixColumnWidth: function(i) {
      var n, r, o, s, a, l = (i = e(i)[0]).config, u = l.$table.children("colgroup");
      if (u.length && u.hasClass(t.css.colgroup) && u.remove(), l.widthFixed && 0 === l.$table.children("colgroup").length) {
        for (u = e('<colgroup class="' + t.css.colgroup + '">'), n = l.$table.width(), s = (o = l.$tbodies.find("tr:first").children(":visible")).length, 
        a = 0; a < s; a++) r = parseInt(o.eq(a).width() / n * 1e3, 10) / 10 + "%", u.append(e("<col>").css("width", r));
        l.$table.prepend(u);
      }
    },
    getData: function(t, i, n) {
      var r, o, s = "", a = e(t);
      return a.length ? (r = !!e.metadata && a.metadata(), o = " " + (a.attr("class") || ""), 
      void 0 !== a.data(n) || void 0 !== a.data(n.toLowerCase()) ? s += a.data(n) || a.data(n.toLowerCase()) : r && "undefined" != typeof r[n] ? s += r[n] : i && "undefined" != typeof i[n] ? s += i[n] : " " !== o && o.match(" " + n + "-") && (s = o.match(new RegExp("\\s" + n + "-([\\w-]+)"))[1] || ""), 
      e.trim(s)) : "";
    },
    getColumnData: function(t, i, n, r, o) {
      if ("object" != typeof i || null === i) return i;
      var s, a = (t = e(t)[0]).config, l = o || a.$headers, u = a.$headerIndexed && a.$headerIndexed[n] || l.find('[data-column="' + n + '"]:last');
      if ("undefined" != typeof i[n]) return r ? i[n] : i[l.index(u)];
      for (s in i) if ("string" == typeof s && u.filter(s).add(u.find(s)).length) return i[s];
    },
    isProcessing: function(i, n, r) {
      var o = (i = e(i))[0].config, s = r || i.find("." + t.css.header);
      n ? (void 0 !== r && o.sortList.length > 0 && (s = s.filter(function() {
        return !this.sortDisabled && t.isValueInArray(parseFloat(e(this).attr("data-column")), o.sortList) >= 0;
      })), i.add(s).addClass(t.css.processing + " " + o.cssProcessing)) : i.add(s).removeClass(t.css.processing + " " + o.cssProcessing);
    },
    processTbody: function(t, i, n) {
      if (t = e(t)[0], n) return t.isProcessing = !0, i.before('<colgroup class="tablesorter-savemyplace"/>'), 
      e.fn.detach ? i.detach() : i.remove();
      var r = e(t).find("colgroup.tablesorter-savemyplace");
      i.insertAfter(r), r.remove(), t.isProcessing = !1;
    },
    clearTableBody: function(t) {
      e(t)[0].config.$tbodies.children().detach();
    },
    characterEquivalents: {
      a: "\xe1\xe0\xe2\xe3\xe4\u0105\xe5",
      A: "\xc1\xc0\xc2\xc3\xc4\u0104\xc5",
      c: "\xe7\u0107\u010d",
      C: "\xc7\u0106\u010c",
      e: "\xe9\xe8\xea\xeb\u011b\u0119",
      E: "\xc9\xc8\xca\xcb\u011a\u0118",
      i: "\xed\xec\u0130\xee\xef\u0131",
      I: "\xcd\xcc\u0130\xce\xcf",
      o: "\xf3\xf2\xf4\xf5\xf6\u014d",
      O: "\xd3\xd2\xd4\xd5\xd6\u014c",
      ss: "\xdf",
      SS: "\u1e9e",
      u: "\xfa\xf9\xfb\xfc\u016f",
      U: "\xda\xd9\xdb\xdc\u016e"
    },
    replaceAccents: function(e) {
      var i, n = "[", r = t.characterEquivalents;
      if (!t.characterRegex) {
        for (i in t.characterRegexArray = {}, r) "string" == typeof i && (n += r[i], t.characterRegexArray[i] = new RegExp("[" + r[i] + "]", "g"));
        t.characterRegex = new RegExp(n + "]");
      }
      if (t.characterRegex.test(e)) for (i in r) "string" == typeof i && (e = e.replace(t.characterRegexArray[i], i));
      return e;
    },
    validateOptions: function(i) {
      var n, r, o, s, a = "headers sortForce sortList sortAppend widgets".split(" "), l = i.originalSettings;
      if (l) {
        for (n in t.debug(i, "core") && (s = new Date()), l) if ("undefined" === (o = typeof t.defaults[n])) console.warn('Tablesorter Warning! "table.config.' + n + '" option not recognized'); else if ("object" === o) for (r in l[n]) o = t.defaults[n] && typeof t.defaults[n][r], 
        e.inArray(n, a) < 0 && "undefined" === o && console.warn('Tablesorter Warning! "table.config.' + n + "." + r + '" option not recognized');
        t.debug(i, "core") && console.log("validate options time:" + t.benchmark(s));
      }
    },
    restoreHeaders: function(i) {
      var n, r, o = e(i)[0].config, s = o.$table.find(o.selectorHeaders), a = s.length;
      for (n = 0; n < a; n++) (r = s.eq(n)).find("." + t.css.headerIn).length && r.html(o.headerContent[n]);
    },
    destroy: function(i, n, r) {
      if ((i = e(i)[0]).hasInitialized) {
        t.removeWidget(i, !0, !1);
        var o, s = e(i), a = i.config, l = s.find("thead:first"), u = l.find("tr." + t.css.headerRow).removeClass(t.css.headerRow + " " + a.cssHeaderRow), c = s.find("tfoot:first > tr").children("th, td");
        !1 === n && e.inArray("uitheme", a.widgets) >= 0 && (s.triggerHandler("applyWidgetId", [ "uitheme" ]), 
        s.triggerHandler("applyWidgetId", [ "zebra" ])), l.find("tr").not(u).remove(), o = "sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave " + "keypress sortBegin sortEnd resetToLoadState ".split(" ").join(a.namespace + " "), 
        s.removeData("tablesorter").unbind(o.replace(t.regex.spaces, " ")), a.$headers.add(c).removeClass([ t.css.header, a.cssHeader, a.cssAsc, a.cssDesc, t.css.sortAsc, t.css.sortDesc, t.css.sortNone ].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled", "true"), 
        u.find(a.selectorSort).unbind("mousedown mouseup keypress ".split(" ").join(a.namespace + " ").replace(t.regex.spaces, " ")), 
        t.restoreHeaders(i), s.toggleClass(t.css.table + " " + a.tableClass + " tablesorter-" + a.theme, !1 === n), 
        s.removeClass(a.namespace.slice(1)), i.hasInitialized = !1, delete i.config.cache, 
        "function" == typeof r && r(i), t.debug(a, "core") && console.log("tablesorter has been removed");
      }
    }
  };
  e.fn.tablesorter = function(i) {
    return this.each(function() {
      var n = this, r = e.extend(!0, {}, t.defaults, i, t.instanceMethods);
      r.originalSettings = i, !n.hasInitialized && t.buildTable && "TABLE" !== this.nodeName ? t.buildTable(n, r) : t.setup(n, r);
    });
  }, window.console && window.console.log || (t.logs = [], console = {}, console.log = console.warn = console.error = console.table = function() {
    var e = arguments.length > 1 ? arguments : arguments[0];
    t.logs[t.logs.length] = {
      date: Date.now(),
      log: e
    };
  }), t.addParser({
    id: "no-parser",
    is: function() {
      return !1;
    },
    format: function() {
      return "";
    },
    type: "text"
  }), t.addParser({
    id: "text",
    is: function() {
      return !0;
    },
    format: function(i, n) {
      var r = n.config;
      return i && (i = e.trim(r.ignoreCase ? i.toLocaleLowerCase() : i), i = r.sortLocaleCompare ? t.replaceAccents(i) : i), 
      i;
    },
    type: "text"
  }), t.regex.nondigit = /[^\w,. \-()]/g, t.addParser({
    id: "digit",
    is: function(e) {
      return t.isDigit(e);
    },
    format: function(i, n) {
      var r = t.formatFloat((i || "").replace(t.regex.nondigit, ""), n);
      return i && "number" == typeof r ? r : i ? e.trim(i && n.config.ignoreCase ? i.toLocaleLowerCase() : i) : i;
    },
    type: "numeric"
  }), t.regex.currencyReplace = /[+\-,. ]/g, t.regex.currencyTest = /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/, 
  t.addParser({
    id: "currency",
    is: function(e) {
      return e = (e || "").replace(t.regex.currencyReplace, ""), t.regex.currencyTest.test(e);
    },
    format: function(i, n) {
      var r = t.formatFloat((i || "").replace(t.regex.nondigit, ""), n);
      return i && "number" == typeof r ? r : i ? e.trim(i && n.config.ignoreCase ? i.toLocaleLowerCase() : i) : i;
    },
    type: "numeric"
  }), t.regex.urlProtocolTest = /^(https?|ftp|file):\/\//, t.regex.urlProtocolReplace = /(https?|ftp|file):\/\/(www\.)?/, 
  t.addParser({
    id: "url",
    is: function(e) {
      return t.regex.urlProtocolTest.test(e);
    },
    format: function(i) {
      return i ? e.trim(i.replace(t.regex.urlProtocolReplace, "")) : i;
    },
    type: "text"
  }), t.regex.dash = /-/g, t.regex.isoDate = /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/, t.addParser({
    id: "isoDate",
    is: function(e) {
      return t.regex.isoDate.test(e);
    },
    format: function(e) {
      var i = e ? new Date(e.replace(t.regex.dash, "/")) : e;
      return i instanceof Date && isFinite(i) ? i.getTime() : e;
    },
    type: "numeric"
  }), t.regex.percent = /%/g, t.regex.percentTest = /(\d\s*?%|%\s*?\d)/, t.addParser({
    id: "percent",
    is: function(e) {
      return t.regex.percentTest.test(e) && e.length < 15;
    },
    format: function(e, i) {
      return e ? t.formatFloat(e.replace(t.regex.percent, ""), i) : e;
    },
    type: "numeric"
  }), t.addParser({
    id: "image",
    is: function(e, t, i, n) {
      return n.find("img").length > 0;
    },
    format: function(t, i, n) {
      return e(n).find("img").attr(i.config.imgAttr || "alt") || t;
    },
    parsed: !0,
    type: "text"
  }), t.regex.dateReplace = /(\S)([AP]M)$/i, t.regex.usLongDateTest1 = /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i, 
  t.regex.usLongDateTest2 = /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i, t.addParser({
    id: "usLongDate",
    is: function(e) {
      return t.regex.usLongDateTest1.test(e) || t.regex.usLongDateTest2.test(e);
    },
    format: function(e) {
      var i = e ? new Date(e.replace(t.regex.dateReplace, "$1 $2")) : e;
      return i instanceof Date && isFinite(i) ? i.getTime() : e;
    },
    type: "numeric"
  }), t.regex.shortDateTest = /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/, 
  t.regex.shortDateReplace = /[\-.,]/g, t.regex.shortDateXXY = /(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, 
  t.regex.shortDateYMD = /(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, t.convertFormat = function(e, i) {
    e = (e || "").replace(t.regex.spaces, " ").replace(t.regex.shortDateReplace, "/"), 
    "mmddyyyy" === i ? e = e.replace(t.regex.shortDateXXY, "$3/$1/$2") : "ddmmyyyy" === i ? e = e.replace(t.regex.shortDateXXY, "$3/$2/$1") : "yyyymmdd" === i && (e = e.replace(t.regex.shortDateYMD, "$1/$2/$3"));
    var n = new Date(e);
    return n instanceof Date && isFinite(n) ? n.getTime() : "";
  }, t.addParser({
    id: "shortDate",
    is: function(e) {
      return e = (e || "").replace(t.regex.spaces, " ").replace(t.regex.shortDateReplace, "/"), 
      t.regex.shortDateTest.test(e);
    },
    format: function(e, i, n, r) {
      if (e) {
        var o = i.config, s = o.$headerIndexed[r], a = s.length && s.data("dateFormat") || t.getData(s, t.getColumnData(i, o.headers, r), "dateFormat") || o.dateFormat;
        return s.length && s.data("dateFormat", a), t.convertFormat(e, a) || e;
      }
      return e;
    },
    type: "numeric"
  }), t.regex.timeTest = /^(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)$|^((?:[01]\d|[2][0-4]):[0-5]\d)$/i, 
  t.regex.timeMatch = /(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i, 
  t.addParser({
    id: "time",
    is: function(e) {
      return t.regex.timeTest.test(e);
    },
    format: function(e) {
      var i = (e || "").match(t.regex.timeMatch), n = new Date(e), r = e && (null !== i ? i[0] : "00:00 AM"), o = r ? new Date("2000/01/01 " + r.replace(t.regex.dateReplace, "$1 $2")) : r;
      return o instanceof Date && isFinite(o) ? (n instanceof Date && isFinite(n) ? n.getTime() : 0) ? parseFloat(o.getTime() + "." + n.getTime()) : o.getTime() : e;
    },
    type: "numeric"
  }), t.addParser({
    id: "metadata",
    is: function() {
      return !1;
    },
    format: function(t, i, n) {
      var r = i.config, o = r.parserMetadataName ? r.parserMetadataName : "sortValue";
      return e(n).metadata()[o];
    },
    type: "numeric"
  }), t.addWidget({
    id: "zebra",
    priority: 90,
    format: function(t, i, n) {
      var r, o, s, a, l, u, c, d = new RegExp(i.cssChildRow, "i"), h = i.$tbodies.add(e(i.namespace + "_extra_table").children("tbody:not(." + i.cssInfoBlock + ")"));
      for (l = 0; l < h.length; l++) for (s = 0, c = (r = h.eq(l).children("tr:visible").not(i.selectorRemove)).length, 
      u = 0; u < c; u++) o = r.eq(u), d.test(o[0].className) || s++, a = s % 2 == 0, o.removeClass(n.zebra[a ? 1 : 0]).addClass(n.zebra[a ? 0 : 1]);
    },
    remove: function(e, i, n, r) {
      if (!r) {
        var o, s, a = i.$tbodies, l = (n.zebra || [ "even", "odd" ]).join(" ");
        for (o = 0; o < a.length; o++) (s = t.processTbody(e, a.eq(o), !0)).children().removeClass(l), 
        t.processTbody(e, s, !1);
      }
    }
  });
}(jQuery), function(e) {
  "function" == typeof define && define.amd ? define([ "jquery" ], e) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function(e) {
  return function(e, t, i) {
    "use strict";
    var n = e.tablesorter || {};
    e.extend(!0, n.defaults, {
      fixedUrl: "",
      widgetOptions: {
        storage_fixedUrl: "",
        storage_group: "",
        storage_page: "",
        storage_storageType: "",
        storage_tableId: "",
        storage_useSessionStorage: ""
      }
    }), n.storage = function(r, o, s, a) {
      var l, u, c, d = !1, h = {}, f = (r = e(r)[0]).config, p = f && f.widgetOptions, m = n.debug(f, "storage"), g = (a && a.storageType || p && p.storage_storageType).toString().charAt(0).toLowerCase(), v = g ? "" : a && a.useSessionStorage || p && p.storage_useSessionStorage, y = e(r), b = a && a.id || y.attr(a && a.group || p && p.storage_group || "data-table-group") || p && p.storage_tableId || r.id || e(".tablesorter").index(y), x = a && a.url || y.attr(a && a.page || p && p.storage_page || "data-table-page") || p && p.storage_fixedUrl || f && f.fixedUrl || t.location.pathname;
      if ("c" !== g && (g = "s" === g || v ? "sessionStorage" : "localStorage") in t) try {
        t[g].setItem("_tmptest", "temp"), d = !0, t[g].removeItem("_tmptest");
      } catch (w) {
        console.warn(g + " is not supported in this browser");
      }
      if (m && console.log("Storage >> Using", d ? g : "cookies"), e.parseJSON && (d ? h = e.parseJSON(t[g][o] || "null") || {} : (u = i.cookie.split(/[;\s|=]/), 
      h = 0 !== (l = e.inArray(o, u) + 1) && e.parseJSON(u[l] || "null") || {})), void 0 === s || !t.JSON || !JSON.hasOwnProperty("stringify")) return h && h[x] ? h[x][b] : "";
      h[x] || (h[x] = {}), h[x][b] = s, d ? t[g][o] = JSON.stringify(h) : ((c = new Date()).setTime(c.getTime() + 31536e6), 
      i.cookie = o + "=" + JSON.stringify(h).replace(/\"/g, '"') + "; expires=" + c.toGMTString() + "; path=/");
    };
  }(e, window, document), function(e) {
    "use strict";
    var t = e.tablesorter || {};
    t.themes = {
      bootstrap: {
        table: "table table-bordered table-striped",
        caption: "caption",
        header: "bootstrap-header",
        sortNone: "",
        sortAsc: "",
        sortDesc: "",
        active: "",
        hover: "",
        icons: "",
        iconSortNone: "bootstrap-icon-unsorted",
        iconSortAsc: "glyphicon glyphicon-chevron-up",
        iconSortDesc: "glyphicon glyphicon-chevron-down",
        filterRow: "",
        footerRow: "",
        footerCells: "",
        even: "",
        odd: ""
      },
      jui: {
        table: "ui-widget ui-widget-content ui-corner-all",
        caption: "ui-widget-content",
        header: "ui-widget-header ui-corner-all ui-state-default",
        sortNone: "",
        sortAsc: "",
        sortDesc: "",
        active: "ui-state-active",
        hover: "ui-state-hover",
        icons: "ui-icon",
        iconSortNone: "ui-icon-carat-2-n-s ui-icon-caret-2-n-s",
        iconSortAsc: "ui-icon-carat-1-n ui-icon-caret-1-n",
        iconSortDesc: "ui-icon-carat-1-s ui-icon-caret-1-s",
        filterRow: "",
        footerRow: "",
        footerCells: "",
        even: "ui-widget-content",
        odd: "ui-state-default"
      }
    }, e.extend(t.css, {
      wrapper: "tablesorter-wrapper"
    }), t.addWidget({
      id: "uitheme",
      priority: 10,
      format: function(i, n, r) {
        var o, s, a, l, u, c, d, h, f, p, m, g, v, y = t.themes, b = n.$table.add(e(n.namespace + "_extra_table")), x = n.$headers.add(e(n.namespace + "_extra_headers")), w = n.theme || "jui", _ = y[w] || {}, S = e.trim([ _.sortNone, _.sortDesc, _.sortAsc, _.active ].join(" ")), C = e.trim([ _.iconSortNone, _.iconSortDesc, _.iconSortAsc ].join(" ")), T = t.debug(n, "uitheme");
        for (T && (u = new Date()), b.hasClass("tablesorter-" + w) && n.theme === n.appliedTheme && r.uitheme_applied || (r.uitheme_applied = !0, 
        p = y[n.appliedTheme] || {}, m = (v = !e.isEmptyObject(p)) ? [ p.sortNone, p.sortDesc, p.sortAsc, p.active ].join(" ") : "", 
        g = v ? [ p.iconSortNone, p.iconSortDesc, p.iconSortAsc ].join(" ") : "", v && (r.zebra[0] = e.trim(" " + r.zebra[0].replace(" " + p.even, "")), 
        r.zebra[1] = e.trim(" " + r.zebra[1].replace(" " + p.odd, "")), n.$tbodies.children().removeClass([ p.even, p.odd ].join(" "))), 
        _.even && (r.zebra[0] += " " + _.even), _.odd && (r.zebra[1] += " " + _.odd), b.children("caption").removeClass(p.caption || "").addClass(_.caption), 
        h = b.removeClass((n.appliedTheme ? "tablesorter-" + (n.appliedTheme || "") : "") + " " + (p.table || "")).addClass("tablesorter-" + w + " " + (_.table || "")).children("tfoot"), 
        n.appliedTheme = n.theme, h.length && h.children("tr").removeClass(p.footerRow || "").addClass(_.footerRow).children("th, td").removeClass(p.footerCells || "").addClass(_.footerCells), 
        x.removeClass((v ? [ p.header, p.hover, m ].join(" ") : "") || "").addClass(_.header).not(".sorter-false").unbind("mouseenter.tsuitheme mouseleave.tsuitheme").bind("mouseenter.tsuitheme mouseleave.tsuitheme", function(t) {
          e(this)["mouseenter" === t.type ? "addClass" : "removeClass"](_.hover || "");
        }), x.each(function() {
          var i = e(this);
          i.find("." + t.css.wrapper).length || i.wrapInner('<div class="' + t.css.wrapper + '" style="position:relative;height:100%;width:100%"></div>');
        }), n.cssIcon && x.find("." + t.css.icon).removeClass(v ? [ p.icons, g ].join(" ") : "").addClass(_.icons || ""), 
        t.hasWidget(n.table, "filter") && (s = function() {
          b.children("thead").children("." + t.css.filterRow).removeClass(v && p.filterRow || "").addClass(_.filterRow || "");
        }, r.filter_initialized ? s() : b.one("filterInit", function() {
          s();
        }))), o = 0; o < n.columns; o++) c = n.$headers.add(e(n.namespace + "_extra_headers")).not(".sorter-false").filter('[data-column="' + o + '"]'), 
        d = t.css.icon ? c.find("." + t.css.icon) : e(), (f = x.not(".sorter-false").filter('[data-column="' + o + '"]:last')).length && (c.removeClass(S), 
        d.removeClass(C), f[0].sortDisabled ? d.removeClass(_.icons || "") : (a = _.sortNone, 
        l = _.iconSortNone, f.hasClass(t.css.sortAsc) ? (a = [ _.sortAsc, _.active ].join(" "), 
        l = _.iconSortAsc) : f.hasClass(t.css.sortDesc) && (a = [ _.sortDesc, _.active ].join(" "), 
        l = _.iconSortDesc), c.addClass(a), d.addClass(l || "")));
        T && console.log("uitheme >> Applied " + w + " theme" + t.benchmark(u));
      },
      remove: function(e, i, n, r) {
        if (n.uitheme_applied) {
          var o = i.$table, s = i.appliedTheme || "jui", a = t.themes[s] || t.themes.jui, l = o.children("thead").children(), u = a.sortNone + " " + a.sortDesc + " " + a.sortAsc, c = a.iconSortNone + " " + a.iconSortDesc + " " + a.iconSortAsc;
          o.removeClass("tablesorter-" + s + " " + a.table), n.uitheme_applied = !1, r || (o.find(t.css.header).removeClass(a.header), 
          l.unbind("mouseenter.tsuitheme mouseleave.tsuitheme").removeClass(a.hover + " " + u + " " + a.active).filter("." + t.css.filterRow).removeClass(a.filterRow), 
          l.find("." + t.css.icon).removeClass(a.icons + " " + c));
        }
      }
    });
  }(e), function(e) {
    "use strict";
    var t = e.tablesorter || {};
    t.addWidget({
      id: "columns",
      priority: 65,
      options: {
        columns: [ "primary", "secondary", "tertiary" ]
      },
      format: function(i, n, r) {
        var o, s, a, l, u, c, d, h, f = n.$table, p = n.$tbodies, m = n.sortList, g = m.length, v = r && r.columns || [ "primary", "secondary", "tertiary" ], y = v.length - 1;
        for (d = v.join(" "), s = 0; s < p.length; s++) (a = (o = t.processTbody(i, p.eq(s), !0)).children("tr")).each(function() {
          if (u = e(this), "none" !== this.style.display && (c = u.children().removeClass(d), 
          m && m[0] && (c.eq(m[0][0]).addClass(v[0]), g > 1))) for (h = 1; h < g; h++) c.eq(m[h][0]).addClass(v[h] || v[y]);
        }), t.processTbody(i, o, !1);
        if (l = !1 !== r.columns_thead ? [ "thead tr" ] : [], !1 !== r.columns_tfoot && l.push("tfoot tr"), 
        l.length && (a = f.find(l.join(",")).children().removeClass(d), g)) for (h = 0; h < g; h++) a.filter('[data-column="' + m[h][0] + '"]').addClass(v[h] || v[y]);
      },
      remove: function(i, n, r) {
        var o, s, a = n.$tbodies, l = (r.columns || [ "primary", "secondary", "tertiary" ]).join(" ");
        for (n.$headers.removeClass(l), n.$table.children("tfoot").children("tr").children("th, td").removeClass(l), 
        o = 0; o < a.length; o++) (s = t.processTbody(i, a.eq(o), !0)).children("tr").each(function() {
          e(this).children().removeClass(l);
        }), t.processTbody(i, s, !1);
      }
    });
  }(e), function(e) {
    "use strict";
    var t, i, n = e.tablesorter || {}, r = n.css, o = n.keyCodes;
    e.extend(r, {
      filterRow: "tablesorter-filter-row",
      filter: "tablesorter-filter",
      filterDisabled: "disabled",
      filterRowHide: "hideme"
    }), e.extend(o, {
      backSpace: 8,
      escape: 27,
      space: 32,
      left: 37,
      down: 40
    }), n.addWidget({
      id: "filter",
      priority: 50,
      options: {
        filter_cellFilter: "",
        filter_childRows: !1,
        filter_childByColumn: !1,
        filter_childWithSibs: !0,
        filter_columnAnyMatch: !0,
        filter_columnFilters: !0,
        filter_cssFilter: "",
        filter_defaultAttrib: "data-value",
        filter_defaultFilter: {},
        filter_excludeFilter: {},
        filter_external: "",
        filter_filteredRow: "filtered",
        filter_filterLabel: 'Filter "{{label}}" column by...',
        filter_formatter: null,
        filter_functions: null,
        filter_hideEmpty: !0,
        filter_hideFilters: !1,
        filter_ignoreCase: !0,
        filter_liveSearch: !0,
        filter_matchType: {
          input: "exact",
          select: "exact"
        },
        filter_onlyAvail: "filter-onlyAvail",
        filter_placeholder: {
          search: "",
          select: ""
        },
        filter_reset: null,
        filter_resetOnEsc: !0,
        filter_saveFilters: !1,
        filter_searchDelay: 300,
        filter_searchFiltered: !0,
        filter_selectSource: null,
        filter_selectSourceSeparator: "|",
        filter_serversideFiltering: !1,
        filter_startsWith: !1,
        filter_useParsedData: !1
      },
      format: function(e, i, n) {
        i.$table.hasClass("hasFilters") || t.init(e, i, n);
      },
      remove: function(t, i, o, s) {
        var a, l, u = i.$table, c = i.$tbodies, d = "addRows updateCell update updateRows updateComplete appendCache filterReset filterAndSortReset filterFomatterUpdate filterEnd search stickyHeadersInit ".split(" ").join(i.namespace + "filter ");
        if (u.removeClass("hasFilters").unbind(d.replace(n.regex.spaces, " ")).find("." + r.filterRow).remove(), 
        o.filter_initialized = !1, !s) {
          for (a = 0; a < c.length; a++) (l = n.processTbody(t, c.eq(a), !0)).children().removeClass(o.filter_filteredRow).show(), 
          n.processTbody(t, l, !1);
          o.filter_reset && e(document).undelegate(o.filter_reset, "click" + i.namespace + "filter");
        }
      }
    }), t = n.filter = {
      regex: {
        regex: /^\/((?:\\\/|[^\/])+)\/([migyu]{0,5})?$/,
        child: /tablesorter-childRow/,
        filtered: /filtered/,
        type: /undefined|number/,
        exact: /(^[\"\'=]+)|([\"\'=]+$)/g,
        operators: /[<>=]/g,
        query: "(q|query)",
        wild01: /\?/g,
        wild0More: /\*/g,
        quote: /\"/g,
        isNeg1: /(>=?\s*-\d)/,
        isNeg2: /(<=?\s*\d)/
      },
      types: {
        or: function(n, r, o) {
          if ((i.orTest.test(r.iFilter) || i.orSplit.test(r.filter)) && !i.regex.test(r.filter)) {
            var s, a, l, u = e.extend({}, r), c = r.filter.split(i.orSplit), d = r.iFilter.split(i.orSplit), h = c.length;
            for (s = 0; s < h; s++) {
              u.nestedFilters = !0, u.filter = "" + (t.parseFilter(n, c[s], r) || ""), u.iFilter = "" + (t.parseFilter(n, d[s], r) || ""), 
              l = "(" + (t.parseFilter(n, u.filter, r) || "") + ")";
              try {
                if (a = new RegExp(r.isMatch ? l : "^" + l + "$", n.widgetOptions.filter_ignoreCase ? "i" : "").test(u.exact) || t.processTypes(n, u, o)) return a;
              } catch (f) {
                return null;
              }
            }
            return a || !1;
          }
          return null;
        },
        and: function(n, r, o) {
          if (i.andTest.test(r.filter)) {
            var s, a, l, u, c = e.extend({}, r), d = r.filter.split(i.andSplit), h = r.iFilter.split(i.andSplit), f = d.length;
            for (s = 0; s < f; s++) {
              c.nestedFilters = !0, c.filter = "" + (t.parseFilter(n, d[s], r) || ""), c.iFilter = "" + (t.parseFilter(n, h[s], r) || ""), 
              u = ("(" + (t.parseFilter(n, c.filter, r) || "") + ")").replace(i.wild01, "\\S{1}").replace(i.wild0More, "\\S*");
              try {
                l = new RegExp(r.isMatch ? u : "^" + u + "$", n.widgetOptions.filter_ignoreCase ? "i" : "").test(c.exact) || t.processTypes(n, c, o), 
                a = 0 === s ? l : a && l;
              } catch (p) {
                return null;
              }
            }
            return a || !1;
          }
          return null;
        },
        regex: function(e, t) {
          if (i.regex.test(t.filter)) {
            var n, r = t.filter_regexCache[t.index] || i.regex.exec(t.filter), o = r instanceof RegExp;
            try {
              o || (t.filter_regexCache[t.index] = r = new RegExp(r[1], r[2])), n = r.test(t.exact);
            } catch (s) {
              n = !1;
            }
            return n;
          }
          return null;
        },
        operators: function(r, o) {
          if (i.operTest.test(o.iFilter) && "" !== o.iExact) {
            var s, a, l, u = r.table, c = o.parsed[o.index], d = n.formatFloat(o.iFilter.replace(i.operators, ""), u), h = r.parsers[o.index] || {}, f = d;
            return (c || "numeric" === h.type) && (l = e.trim("" + o.iFilter.replace(i.operators, "")), 
            d = "number" != typeof (a = t.parseFilter(r, l, o, !0)) || "" === a || isNaN(a) ? d : a), 
            !c && "numeric" !== h.type || isNaN(d) || "undefined" == typeof o.cache ? (l = isNaN(o.iExact) ? o.iExact.replace(n.regex.nondigit, "") : o.iExact, 
            s = n.formatFloat(l, u)) : s = o.cache, i.gtTest.test(o.iFilter) ? a = i.gteTest.test(o.iFilter) ? s >= d : s > d : i.ltTest.test(o.iFilter) && (a = i.lteTest.test(o.iFilter) ? s <= d : s < d), 
            a || "" !== f || (a = !0), a;
          }
          return null;
        },
        notMatch: function(n, r) {
          if (i.notTest.test(r.iFilter)) {
            var o, s = r.iFilter.replace("!", ""), a = t.parseFilter(n, s, r) || "";
            return i.exact.test(a) ? "" === (a = a.replace(i.exact, "")) || e.trim(a) !== r.iExact : (o = r.iExact.search(e.trim(a)), 
            "" === a || (r.anyMatch ? o < 0 : !(n.widgetOptions.filter_startsWith ? 0 === o : o >= 0)));
          }
          return null;
        },
        exact: function(n, r) {
          if (i.exact.test(r.iFilter)) {
            var o = r.iFilter.replace(i.exact, ""), s = t.parseFilter(n, o, r) || "";
            return r.anyMatch ? e.inArray(s, r.rowArray) >= 0 : s == r.iExact;
          }
          return null;
        },
        range: function(e, r) {
          if (i.toTest.test(r.iFilter)) {
            var o, s, a, l, u = e.table, c = r.index, d = r.parsed[c], h = r.iFilter.split(i.toSplit);
            return s = h[0].replace(n.regex.nondigit, "") || "", a = n.formatFloat(t.parseFilter(e, s, r), u), 
            s = h[1].replace(n.regex.nondigit, "") || "", l = n.formatFloat(t.parseFilter(e, s, r), u), 
            (d || "numeric" === e.parsers[c].type) && (a = "" === (o = e.parsers[c].format("" + h[0], u, e.$headers.eq(c), c)) || isNaN(o) ? a : o, 
            l = "" === (o = e.parsers[c].format("" + h[1], u, e.$headers.eq(c), c)) || isNaN(o) ? l : o), 
            !d && "numeric" !== e.parsers[c].type || isNaN(a) || isNaN(l) ? (s = isNaN(r.iExact) ? r.iExact.replace(n.regex.nondigit, "") : r.iExact, 
            o = n.formatFloat(s, u)) : o = r.cache, a > l && (s = a, a = l, l = s), o >= a && o <= l || "" === a || "" === l;
          }
          return null;
        },
        wild: function(e, n) {
          if (i.wildOrTest.test(n.iFilter)) {
            var r = "" + (t.parseFilter(e, n.iFilter, n) || "");
            !i.wildTest.test(r) && n.nestedFilters && (r = n.isMatch ? r : "^(" + r + ")$");
            try {
              return new RegExp(r.replace(i.wild01, "\\S{1}").replace(i.wild0More, "\\S*"), e.widgetOptions.filter_ignoreCase ? "i" : "").test(n.exact);
            } catch (o) {
              return null;
            }
          }
          return null;
        },
        fuzzy: function(e, n) {
          if (i.fuzzyTest.test(n.iFilter)) {
            var r, o = 0, s = n.iExact.length, a = n.iFilter.slice(1), l = t.parseFilter(e, a, n) || "";
            for (r = 0; r < s; r++) n.iExact[r] === l[o] && (o += 1);
            return o === l.length;
          }
          return null;
        }
      },
      init: function(o) {
        n.language = e.extend(!0, {}, {
          to: "to",
          or: "or",
          and: "and"
        }, n.language);
        var s, a, l, u, c, d, h, f, p = o.config, m = p.widgetOptions, g = function(e, t, i) {
          return "" === (t = t.trim()) ? "" : (e || "") + t + (i || "");
        };
        if (p.$table.addClass("hasFilters"), p.lastSearch = [], m.filter_searchTimer = null, 
        m.filter_initTimer = null, m.filter_formatterCount = 0, m.filter_formatterInit = [], 
        m.filter_anyColumnSelector = '[data-column="all"],[data-column="any"]', m.filter_multipleColumnSelector = '[data-column*="-"],[data-column*=","]', 
        d = "\\{" + i.query + "\\}", e.extend(i, {
          child: new RegExp(p.cssChildRow),
          filtered: new RegExp(m.filter_filteredRow),
          alreadyFiltered: new RegExp("(\\s+(-" + g("|", n.language.or) + g("|", n.language.to) + ")\\s+)", "i"),
          toTest: new RegExp("\\s+(-" + g("|", n.language.to) + ")\\s+", "i"),
          toSplit: new RegExp("(?:\\s+(?:-" + g("|", n.language.to) + ")\\s+)", "gi"),
          andTest: new RegExp("\\s+(" + g("", n.language.and, "|") + "&&)\\s+", "i"),
          andSplit: new RegExp("(?:\\s+(?:" + g("", n.language.and, "|") + "&&)\\s+)", "gi"),
          orTest: new RegExp("(\\|" + g("|\\s+", n.language.or, "\\s+") + ")", "i"),
          orSplit: new RegExp("(?:\\|" + g("|\\s+(?:", n.language.or, ")\\s+") + ")", "gi"),
          iQuery: new RegExp(d, "i"),
          igQuery: new RegExp(d, "ig"),
          operTest: /^[<>]=?/,
          gtTest: />/,
          gteTest: />=/,
          ltTest: /</,
          lteTest: /<=/,
          notTest: /^\!/,
          wildOrTest: /[\?\*\|]/,
          wildTest: /\?\*/,
          fuzzyTest: /^~/,
          exactTest: /[=\"\|!]/
        }), d = p.$headers.filter(".filter-false, .parser-false").length, !1 !== m.filter_columnFilters && d !== p.$headers.length && t.buildRow(o, p, m), 
        l = "addRows updateCell update updateRows updateComplete appendCache filterReset " + "filterAndSortReset filterResetSaved filterEnd search ".split(" ").join(p.namespace + "filter "), 
        p.$table.bind(l, function(i, s) {
          return d = m.filter_hideEmpty && e.isEmptyObject(p.cache) && !(p.delayInit && "appendCache" === i.type), 
          p.$table.find("." + r.filterRow).toggleClass(m.filter_filteredRow, d), /(search|filter)/.test(i.type) || (i.stopPropagation(), 
          t.buildDefault(o, !0)), "filterReset" === i.type || "filterAndSortReset" === i.type ? (p.$table.find("." + r.filter).add(m.filter_$externalFilters).val(""), 
          "filterAndSortReset" === i.type ? n.sortReset(this.config, function() {
            t.searching(o, []);
          }) : t.searching(o, [])) : "filterResetSaved" === i.type ? n.storage(o, "tablesorter-filters", "") : "filterEnd" === i.type ? t.buildDefault(o, !0) : (s = "search" === i.type ? s : "updateComplete" === i.type ? p.$table.data("lastSearch") : "", 
          /(update|add)/.test(i.type) && "updateComplete" !== i.type && (p.lastCombinedFilter = null, 
          p.lastSearch = [], setTimeout(function() {
            p.$table.triggerHandler("filterFomatterUpdate");
          }, 100)), t.searching(o, s, !0)), !1;
        }), m.filter_reset && (m.filter_reset instanceof e ? m.filter_reset.click(function() {
          p.$table.triggerHandler("filterReset");
        }) : e(m.filter_reset).length && e(document).undelegate(m.filter_reset, "click" + p.namespace + "filter").delegate(m.filter_reset, "click" + p.namespace + "filter", function() {
          p.$table.triggerHandler("filterReset");
        })), m.filter_functions) for (c = 0; c < p.columns; c++) if (h = n.getColumnData(o, m.filter_functions, c)) if (f = !((u = p.$headerIndexed[c].removeClass("filter-select")).hasClass("filter-false") || u.hasClass("parser-false")), 
        s = "", !0 === h && f) t.buildSelect(o, c); else if ("object" == typeof h && f) {
          for (a in h) "string" == typeof a && (s += "" === s ? '<option value="">' + (u.data("placeholder") || u.attr("data-placeholder") || m.filter_placeholder.select || "") + "</option>" : "", 
          d = a, l = a, a.indexOf(m.filter_selectSourceSeparator) >= 0 && (l = (d = a.split(m.filter_selectSourceSeparator))[1], 
          d = d[0]), s += "<option " + (l === d ? "" : 'data-function-name="' + a + '" ') + 'value="' + d + '">' + l + "</option>");
          p.$table.find("thead").find("select." + r.filter + '[data-column="' + c + '"]').append(s), 
          (h = "function" == typeof (l = m.filter_selectSource) || n.getColumnData(o, l, c)) && t.buildSelect(p.table, c, "", !0, u.hasClass(m.filter_onlyAvail));
        }
        t.buildDefault(o, !0), t.bindSearch(o, p.$table.find("." + r.filter), !0), m.filter_external && t.bindSearch(o, m.filter_external), 
        m.filter_hideFilters && t.hideFilters(p), p.showProcessing && (l = "filterStart filterEnd ".split(" ").join(p.namespace + "filter-sp "), 
        p.$table.unbind(l.replace(n.regex.spaces, " ")).bind(l, function(t, i) {
          u = i ? p.$table.find("." + r.header).filter("[data-column]").filter(function() {
            return "" !== i[e(this).data("column")];
          }) : "", n.isProcessing(o, "filterStart" === t.type, i ? u : "");
        })), p.filteredRows = p.totalRows, l = "tablesorter-initialized pagerBeforeInitialized ".split(" ").join(p.namespace + "filter "), 
        p.$table.unbind(l.replace(n.regex.spaces, " ")).bind(l, function() {
          t.completeInit(this);
        }), p.pager && p.pager.initialized && !m.filter_initialized ? (p.$table.triggerHandler("filterFomatterUpdate"), 
        setTimeout(function() {
          t.filterInitComplete(p);
        }, 100)) : m.filter_initialized || t.completeInit(o);
      },
      completeInit: function(e) {
        var i = e.config, r = i.widgetOptions, o = t.setDefaults(e, i, r) || [];
        o.length && (i.delayInit && "" === o.join("") || n.setFilters(e, o, !0)), i.$table.triggerHandler("filterFomatterUpdate"), 
        setTimeout(function() {
          r.filter_initialized || t.filterInitComplete(i);
        }, 100);
      },
      formatterUpdated: function(e, t) {
        var i = e && e.closest("table"), n = i.length && i[0].config, r = n && n.widgetOptions;
        r && !r.filter_initialized && (r.filter_formatterInit[t] = 1);
      },
      filterInitComplete: function(i) {
        var r, o, s = i.widgetOptions, a = 0, l = function() {
          s.filter_initialized = !0, i.lastSearch = i.$table.data("lastSearch"), i.$table.triggerHandler("filterInit", i), 
          t.findRows(i.table, i.lastSearch || []), n.debug(i, "filter") && console.log("Filter >> Widget initialized");
        };
        if (e.isEmptyObject(s.filter_formatter)) l(); else {
          for (o = s.filter_formatterInit.length, r = 0; r < o; r++) 1 === s.filter_formatterInit[r] && a++;
          clearTimeout(s.filter_initTimer), s.filter_initialized || a !== s.filter_formatterCount ? s.filter_initialized || (s.filter_initTimer = setTimeout(function() {
            l();
          }, 500)) : l();
        }
      },
      processFilters: function(e, t) {
        var i, n = [], r = t ? encodeURIComponent : decodeURIComponent, o = e.length;
        for (i = 0; i < o; i++) e[i] && (n[i] = r(e[i]));
        return n;
      },
      setDefaults: function(i, r, o) {
        var s, a, l, u, c, d = n.getFilters(i) || [];
        if (o.filter_saveFilters && n.storage && (a = n.storage(i, "tablesorter-filters") || [], 
        (s = e.isArray(a)) && "" === a.join("") || !s || (d = t.processFilters(a))), "" === d.join("")) for (c = r.$headers.add(o.filter_$externalFilters).filter("[" + o.filter_defaultAttrib + "]"), 
        l = 0; l <= r.columns; l++) u = l === r.columns ? "all" : l, d[l] = c.filter('[data-column="' + u + '"]').attr(o.filter_defaultAttrib) || d[l] || "";
        return r.$table.data("lastSearch", d), d;
      },
      parseFilter: function(e, t, i, n) {
        return n || i.parsed[i.index] ? e.parsers[i.index].format(t, e.table, [], i.index) : t;
      },
      buildRow: function(i, o, s) {
        var a, l, u, c, d, h, f, p, m, g = s.filter_cellFilter, v = o.columns, y = e.isArray(g), b = '<tr role="search" class="' + r.filterRow + " " + o.cssIgnoreRow + '">';
        for (u = 0; u < v; u++) o.$headerIndexed[u].length && (b += (m = o.$headerIndexed[u] && o.$headerIndexed[u][0].colSpan || 0) > 1 ? '<td data-column="' + u + "-" + (u + m - 1) + '" colspan="' + m + '"' : '<td data-column="' + u + '"', 
        b += y ? g[u] ? ' class="' + g[u] + '"' : "" : "" !== g ? ' class="' + g + '"' : "", 
        b += "></td>");
        for (o.$filters = e(b += "</tr>").appendTo(o.$table.children("thead").eq(0)).children("td"), 
        u = 0; u < v; u++) h = !1, (c = o.$headerIndexed[u]) && c.length && (a = t.getColumnElm(o, o.$filters, u), 
        p = n.getColumnData(i, s.filter_functions, u), d = s.filter_functions && p && "function" != typeof p || c.hasClass("filter-select"), 
        l = n.getColumnData(i, o.headers, u), h = "false" === n.getData(c[0], l, "filter") || "false" === n.getData(c[0], l, "parser"), 
        d ? b = e("<select>").appendTo(a) : ((p = n.getColumnData(i, s.filter_formatter, u)) ? (s.filter_formatterCount++, 
        (b = p(a, u)) && 0 === b.length && (b = a.children("input")), b && (0 === b.parent().length || b.parent().length && b.parent()[0] !== a[0]) && a.append(b)) : b = e('<input type="search">').appendTo(a), 
        b && (m = c.data("placeholder") || c.attr("data-placeholder") || s.filter_placeholder.search || "", 
        b.attr("placeholder", m))), b && (f = (e.isArray(s.filter_cssFilter) ? "undefined" != typeof s.filter_cssFilter[u] && s.filter_cssFilter[u] || "" : s.filter_cssFilter) || "", 
        b.addClass(r.filter + " " + f), (m = (f = s.filter_filterLabel).match(/{{([^}]+?)}}/g)) || (m = [ "{{label}}" ]), 
        e.each(m, function(t, i) {
          var n = new RegExp(i, "g"), r = c.attr("data-" + i.replace(/{{|}}/g, "")), o = void 0 === r ? c.text() : r;
          f = f.replace(n, e.trim(o));
        }), b.attr({
          "data-column": a.attr("data-column"),
          "aria-label": f
        }), h && (b.attr("placeholder", "").addClass(r.filterDisabled)[0].disabled = !0)));
      },
      bindSearch: function(i, r, s) {
        if (i = e(i)[0], (r = e(r)).length) {
          var a, l = i.config, u = l.widgetOptions, c = l.namespace + "filter", d = u.filter_$externalFilters;
          !0 !== s && (a = u.filter_anyColumnSelector + "," + u.filter_multipleColumnSelector, 
          u.filter_$anyMatch = r.filter(a), d && d.length ? u.filter_$externalFilters = u.filter_$externalFilters.add(r) : u.filter_$externalFilters = r, 
          n.setFilters(i, l.$table.data("lastSearch") || [], !1 === s)), a = "keypress keyup keydown search change input ".split(" ").join(c + " "), 
          r.attr("data-lastSearchTime", new Date().getTime()).unbind(a.replace(n.regex.spaces, " ")).bind("keydown" + c, function(e) {
            if (e.which === o.escape && !i.config.widgetOptions.filter_resetOnEsc) return !1;
          }).bind("keyup" + c, function(r) {
            u = i.config.widgetOptions;
            var s = parseInt(e(this).attr("data-column"), 10), a = "boolean" == typeof u.filter_liveSearch ? u.filter_liveSearch : n.getColumnData(i, u.filter_liveSearch, s);
            if (void 0 === a && (a = u.filter_liveSearch.fallback || !1), e(this).attr("data-lastSearchTime", new Date().getTime()), 
            r.which === o.escape) this.value = u.filter_resetOnEsc ? "" : l.lastSearch[s]; else {
              if ("" !== this.value && ("number" == typeof a && this.value.length < a || r.which !== o.enter && r.which !== o.backSpace && (r.which < o.space || r.which >= o.left && r.which <= o.down))) return;
              if (!1 === a && "" !== this.value && r.which !== o.enter) return;
            }
            t.searching(i, !0, !0, s);
          }).bind("search change keypress input blur ".split(" ").join(c + " "), function(r) {
            var s = parseInt(e(this).attr("data-column"), 10), a = r.type, c = "boolean" == typeof u.filter_liveSearch ? u.filter_liveSearch : n.getColumnData(i, u.filter_liveSearch, s);
            !i.config.widgetOptions.filter_initialized || r.which !== o.enter && "search" !== a && "blur" !== a && ("change" !== a && "input" !== a || !0 !== c && (!0 === c || "INPUT" === r.target.nodeName) || this.value === l.lastSearch[s]) || (r.preventDefault(), 
            e(this).attr("data-lastSearchTime", new Date().getTime()), t.searching(i, "keypress" !== a, !0, s));
          });
        }
      },
      searching: function(e, i, r, o) {
        var s, a = e.config.widgetOptions;
        void 0 === o ? s = !1 : void 0 === (s = "boolean" == typeof a.filter_liveSearch ? a.filter_liveSearch : n.getColumnData(e, a.filter_liveSearch, o)) && (s = a.filter_liveSearch.fallback || !1), 
        clearTimeout(a.filter_searchTimer), void 0 === i || !0 === i ? a.filter_searchTimer = setTimeout(function() {
          t.checkFilters(e, i, r);
        }, s ? a.filter_searchDelay : 10) : t.checkFilters(e, i, r);
      },
      equalFilters: function(t, i, n) {
        var r, o = [], s = [], a = t.columns + 1;
        for (i = e.isArray(i) ? i : [], n = e.isArray(n) ? n : [], r = 0; r < a; r++) o[r] = i[r] || "", 
        s[r] = n[r] || "";
        return o.join(",") === s.join(",");
      },
      checkFilters: function(i, o, s) {
        var a = i.config, l = a.widgetOptions, u = e.isArray(o), c = u ? o : n.getFilters(i, !0), d = c || [];
        if (e.isEmptyObject(a.cache)) a.delayInit && (!a.pager || a.pager && a.pager.initialized) && n.updateCache(a, function() {
          t.checkFilters(i, !1, s);
        }); else if (u && (n.setFilters(i, c, !1, !0 !== s), l.filter_initialized || (a.lastSearch = [], 
        a.lastCombinedFilter = "")), l.filter_hideFilters && a.$table.find("." + r.filterRow).triggerHandler(t.hideFiltersCheck(a) ? "mouseleave" : "mouseenter"), 
        !t.equalFilters(a, a.lastSearch, d) || !1 === o) {
          if (!1 === o && (a.lastCombinedFilter = "", a.lastSearch = []), c = c || [], c = Array.prototype.map ? c.map(String) : c.join("\ufffd").split("\ufffd"), 
          l.filter_initialized && a.$table.triggerHandler("filterStart", [ c ]), !a.showProcessing) return t.findRows(i, c, d), 
          !1;
          setTimeout(function() {
            return t.findRows(i, c, d), !1;
          }, 30);
        }
      },
      hideFiltersCheck: function(e) {
        if ("function" == typeof e.widgetOptions.filter_hideFilters) {
          var t = e.widgetOptions.filter_hideFilters(e);
          if ("boolean" == typeof t) return t;
        }
        return "" === n.getFilters(e.$table).join("");
      },
      hideFilters: function(i, n) {
        var o;
        (n || i.$table).find("." + r.filterRow).addClass(r.filterRowHide).bind("mouseenter mouseleave", function(n) {
          var s = n, a = e(this);
          clearTimeout(o), o = setTimeout(function() {
            /enter|over/.test(s.type) ? a.removeClass(r.filterRowHide) : e(document.activeElement).closest("tr")[0] !== a[0] && a.toggleClass(r.filterRowHide, t.hideFiltersCheck(i));
          }, 200);
        }).find("input, select").bind("focus blur", function(n) {
          var s = n, a = e(this).closest("tr");
          clearTimeout(o), o = setTimeout(function() {
            clearTimeout(o), a.toggleClass(r.filterRowHide, t.hideFiltersCheck(i) && "focus" !== s.type);
          }, 200);
        });
      },
      defaultFilter: function(t, n) {
        if ("" === t) return t;
        var r = i.iQuery, o = n.match(i.igQuery).length, s = o > 1 ? e.trim(t).split(/\s/) : [ e.trim(t) ], a = s.length - 1, l = 0, u = n;
        for (a < 1 && o > 1 && (s[1] = s[0]); r.test(u); ) u = u.replace(r, s[l++] || ""), 
        r.test(u) && l < a && "" !== (s[l] || "") && (u = n.replace(r, u));
        return u;
      },
      getLatestSearch: function(t) {
        return t ? t.sort(function(t, i) {
          return e(i).attr("data-lastSearchTime") - e(t).attr("data-lastSearchTime");
        }) : t || e();
      },
      findRange: function(e, t, i) {
        var n, r, o, s, a, l, u, c, d, h = [];
        if (/^[0-9]+$/.test(t)) return [ parseInt(t, 10) ];
        if (!i && /-/.test(t)) for (d = (r = t.match(/(\d+)\s*-\s*(\d+)/g)) ? r.length : 0, 
        c = 0; c < d; c++) {
          for (o = r[c].split(/\s*-\s*/), (s = parseInt(o[0], 10) || 0) > (a = parseInt(o[1], 10) || e.columns - 1) && (n = s, 
          s = a, a = n), a >= e.columns && (a = e.columns - 1); s <= a; s++) h[h.length] = s;
          t = t.replace(r[c], "");
        }
        if (!i && /,/.test(t)) for (d = (l = t.split(/\s*,\s*/)).length, u = 0; u < d; u++) "" !== l[u] && (c = parseInt(l[u], 10)) < e.columns && (h[h.length] = c);
        if (!h.length) for (c = 0; c < e.columns; c++) h[h.length] = c;
        return h;
      },
      getColumnElm: function(i, n, r) {
        return n.filter(function() {
          var n = t.findRange(i, e(this).attr("data-column"));
          return e.inArray(r, n) > -1;
        });
      },
      multipleColumns: function(i, n) {
        var r = i.widgetOptions, o = r.filter_initialized || !n.filter(r.filter_anyColumnSelector).length, s = e.trim(t.getLatestSearch(n).attr("data-column") || "");
        return t.findRange(i, s, !o);
      },
      processTypes: function(i, n, r) {
        var o, s = null, a = null;
        for (o in t.types) e.inArray(o, r.excludeMatch) < 0 && null === a && null !== (a = t.types[o](i, n, r)) && (n.matchedOn = o, 
        s = a);
        return s;
      },
      matchType: function(e, t) {
        var i, n = e.widgetOptions, o = e.$headerIndexed[t];
        return o.hasClass("filter-exact") ? i = !1 : o.hasClass("filter-match") ? i = !0 : (n.filter_columnFilters ? o = e.$filters.find("." + r.filter).add(n.filter_$externalFilters).filter('[data-column="' + t + '"]') : n.filter_$externalFilters && (o = n.filter_$externalFilters.filter('[data-column="' + t + '"]')), 
        i = !!o.length && "match" === e.widgetOptions.filter_matchType[(o[0].nodeName || "").toLowerCase()]), 
        i;
      },
      processRow: function(r, o, s) {
        var a, l, u, c, d, h = r.widgetOptions, f = !0, p = h.filter_$anyMatch && h.filter_$anyMatch.length, m = h.filter_$anyMatch && h.filter_$anyMatch.length ? t.multipleColumns(r, h.filter_$anyMatch) : [];
        if (o.$cells = o.$row.children(), o.matchedOn = null, o.anyMatchFlag && m.length > 1 || o.anyMatchFilter && !p) {
          if (o.anyMatch = !0, o.isMatch = !0, o.rowArray = o.$cells.map(function(t) {
            if (e.inArray(t, m) > -1 || o.anyMatchFilter && !p) return o.parsed[t] ? d = o.cacheArray[t] : (d = o.rawArray[t], 
            d = e.trim(h.filter_ignoreCase ? d.toLowerCase() : d), r.sortLocaleCompare && (d = n.replaceAccents(d))), 
            d;
          }).get(), o.filter = o.anyMatchFilter, o.iFilter = o.iAnyMatchFilter, o.exact = o.rowArray.join(" "), 
          o.iExact = h.filter_ignoreCase ? o.exact.toLowerCase() : o.exact, o.cache = o.cacheArray.slice(0, -1).join(" "), 
          s.excludeMatch = s.noAnyMatch, null !== (l = t.processTypes(r, o, s))) f = l; else if (h.filter_startsWith) for (f = !1, 
          m = Math.min(r.columns, o.rowArray.length); !f && m > 0; ) m--, f = f || 0 === o.rowArray[m].indexOf(o.iFilter); else f = (o.iExact + o.childRowText).indexOf(o.iFilter) >= 0;
          if (o.anyMatch = !1, o.filters.join("") === o.filter) return f;
        }
        for (m = 0; m < r.columns; m++) o.filter = o.filters[m], o.index = m, s.excludeMatch = s.excludeFilter[m], 
        o.filter && (o.cache = o.cacheArray[m], a = o.parsed[m] ? o.cache : o.rawArray[m] || "", 
        o.exact = r.sortLocaleCompare ? n.replaceAccents(a) : a, o.iExact = !i.type.test(typeof o.exact) && h.filter_ignoreCase ? o.exact.toLowerCase() : o.exact, 
        o.isMatch = t.matchType(r, m), a = f, c = h.filter_columnFilters && r.$filters.add(h.filter_$externalFilters).filter('[data-column="' + m + '"]').find("select option:selected").attr("data-function-name") || "", 
        r.sortLocaleCompare && (o.filter = n.replaceAccents(o.filter)), h.filter_defaultFilter && i.iQuery.test(s.defaultColFilter[m]) && (o.filter = t.defaultFilter(o.filter, s.defaultColFilter[m])), 
        o.iFilter = h.filter_ignoreCase ? (o.filter || "").toLowerCase() : o.filter, l = null, 
        (u = s.functions[m]) && ("function" == typeof u ? l = u(o.exact, o.cache, o.filter, m, o.$row, r, o) : "function" == typeof u[c || o.filter] && (l = u[d = c || o.filter](o.exact, o.cache, o.filter, m, o.$row, r, o))), 
        null === l ? (l = t.processTypes(r, o, s), d = !0 === u && ("and" === o.matchedOn || "or" === o.matchedOn), 
        null === l || d ? !0 === u ? a = o.isMatch ? ("" + o.iExact).search(o.iFilter) >= 0 : o.filter === o.exact : (d = (o.iExact + o.childRowText).indexOf(t.parseFilter(r, o.iFilter, o)), 
        a = !h.filter_startsWith && d >= 0 || h.filter_startsWith && 0 === d) : a = l) : a = l, 
        f = !!a && f);
        return f;
      },
      findRows: function(r, o, s) {
        if (!t.equalFilters(r.config, r.config.lastSearch, s) && r.config.widgetOptions.filter_initialized) {
          var a, l, u, c, d, h, f, p, m, g, v, y, b, x, w, _, S, C, T, k, M, D, A, P = e.extend([], o), I = r.config, E = I.widgetOptions, j = n.debug(I, "filter"), F = {
            anyMatch: !1,
            filters: o,
            filter_regexCache: []
          }, O = {
            noAnyMatch: [ "range", "operators" ],
            functions: [],
            excludeFilter: [],
            defaultColFilter: [],
            defaultAnyFilter: n.getColumnData(r, E.filter_defaultFilter, I.columns, !0) || ""
          };
          for (F.parsed = [], m = 0; m < I.columns; m++) F.parsed[m] = E.filter_useParsedData || I.parsers && I.parsers[m] && I.parsers[m].parsed || n.getData && "parsed" === n.getData(I.$headerIndexed[m], n.getColumnData(r, I.headers, m), "filter") || I.$headerIndexed[m].hasClass("filter-parsed"), 
          O.functions[m] = n.getColumnData(r, E.filter_functions, m) || I.$headerIndexed[m].hasClass("filter-select"), 
          O.defaultColFilter[m] = n.getColumnData(r, E.filter_defaultFilter, m) || "", O.excludeFilter[m] = (n.getColumnData(r, E.filter_excludeFilter, m, !0) || "").split(/\s+/);
          for (j && (console.log("Filter >> Starting filter widget search", o), x = new Date()), 
          I.filteredRows = 0, I.totalRows = 0, s = P || [], f = 0; f < I.$tbodies.length; f++) {
            if (p = n.processTbody(r, I.$tbodies.eq(f), !0), m = I.columns, l = I.cache[f].normalized, 
            c = e(e.map(l, function(e) {
              return e[m].$row.get();
            })), "" === s.join("") || E.filter_serversideFiltering) c.removeClass(E.filter_filteredRow).not("." + I.cssChildRow).css("display", ""); else {
              if (a = (c = c.not("." + I.cssChildRow)).length, (E.filter_$anyMatch && E.filter_$anyMatch.length || "undefined" != typeof o[I.columns]) && (F.anyMatchFlag = !0, 
              F.anyMatchFilter = "" + (o[I.columns] || E.filter_$anyMatch && t.getLatestSearch(E.filter_$anyMatch).val() || ""), 
              E.filter_columnAnyMatch)) {
                for (T = F.anyMatchFilter.split(i.andSplit), k = !1, _ = 0; _ < T.length; _++) (M = T[_].split(":")).length > 1 && (isNaN(M[0]) ? e.each(I.headerContent, function(e, t) {
                  t.toLowerCase().indexOf(M[0]) > -1 && (o[D = e] = M[1]);
                }) : D = parseInt(M[0], 10) - 1, D >= 0 && D < I.columns && (o[D] = M[1], T.splice(_, 1), 
                _--, k = !0));
                k && (F.anyMatchFilter = T.join(" && "));
              }
              if (C = E.filter_searchFiltered, v = I.lastSearch || I.$table.data("lastSearch") || [], 
              C) for (_ = 0; _ < m + 1; _++) w = o[_] || "", C || (_ = m), C = C && v.length && 0 === w.indexOf(v[_] || "") && !i.alreadyFiltered.test(w) && !i.exactTest.test(w) && !(i.isNeg1.test(w) || i.isNeg2.test(w)) && !("" !== w && I.$filters && I.$filters.filter('[data-column="' + _ + '"]').find("select").length && !t.matchType(I, _));
              for (S = c.not("." + E.filter_filteredRow).length, C && 0 === S && (C = !1), j && console.log("Filter >> Searching through " + (C && S < a ? S : "all") + " rows"), 
              F.anyMatchFlag && (I.sortLocaleCompare && (F.anyMatchFilter = n.replaceAccents(F.anyMatchFilter)), 
              E.filter_defaultFilter && i.iQuery.test(O.defaultAnyFilter) && (F.anyMatchFilter = t.defaultFilter(F.anyMatchFilter, O.defaultAnyFilter), 
              C = !1), F.iAnyMatchFilter = E.filter_ignoreCase && I.ignoreCase ? F.anyMatchFilter.toLowerCase() : F.anyMatchFilter), 
              h = 0; h < a; h++) if (A = c[h].className, !(h && i.child.test(A) || C && i.filtered.test(A))) {
                if (F.$row = c.eq(h), F.rowIndex = h, F.cacheArray = l[h], u = F.cacheArray[I.columns], 
                F.rawArray = u.raw, F.childRowText = "", !E.filter_childByColumn) {
                  for (A = "", g = u.child, _ = 0; _ < g.length; _++) A += " " + g[_].join(" ") || "";
                  F.childRowText = E.filter_childRows ? E.filter_ignoreCase ? A.toLowerCase() : A : "";
                }
                if (y = !1, b = t.processRow(I, F, O), d = u.$row, w = !!b, g = u.$row.filter(":gt(0)"), 
                E.filter_childRows && g.length) {
                  if (E.filter_childByColumn) for (E.filter_childWithSibs || (g.addClass(E.filter_filteredRow), 
                  d = d.eq(0)), _ = 0; _ < g.length; _++) F.$row = g.eq(_), F.cacheArray = u.child[_], 
                  F.rawArray = F.cacheArray, w = t.processRow(I, F, O), y = y || w, !E.filter_childWithSibs && w && g.eq(_).removeClass(E.filter_filteredRow);
                  y = y || b;
                } else y = w;
                d.toggleClass(E.filter_filteredRow, !y)[0].display = y ? "" : "none";
              }
            }
            I.filteredRows += c.not("." + E.filter_filteredRow).length, I.totalRows += c.length, 
            n.processTbody(r, p, !1);
          }
          I.lastCombinedFilter = P.join(""), I.lastSearch = P, I.$table.data("lastSearch", P), 
          E.filter_saveFilters && n.storage && n.storage(r, "tablesorter-filters", t.processFilters(P, !0)), 
          j && console.log("Filter >> Completed search" + n.benchmark(x)), E.filter_initialized && (I.$table.triggerHandler("filterBeforeEnd", I), 
          I.$table.triggerHandler("filterEnd", I)), setTimeout(function() {
            n.applyWidget(I.table);
          }, 0);
        }
      },
      getOptionSource: function(i, r, o) {
        var s = (i = e(i)[0]).config, a = !1, l = s.widgetOptions.filter_selectSource, u = s.$table.data("lastSearch") || [], c = "function" == typeof l || n.getColumnData(i, l, r);
        if (o && "" !== u[r] && (o = !1), !0 === c) a = l(i, r, o); else {
          if (c instanceof e || "string" === e.type(c) && c.indexOf("</option>") >= 0) return c;
          if (e.isArray(c)) a = c; else if ("object" === e.type(l) && c && null === (a = c(i, r, o))) return null;
        }
        return !1 === a && (a = t.getOptions(i, r, o)), t.processOptions(i, r, a);
      },
      processOptions: function(t, i, r) {
        if (!e.isArray(r)) return !1;
        var o, s, a, l, u, c, d = (t = e(t)[0]).config, h = null != i && i >= 0 && i < d.columns, f = !!h && d.$headerIndexed[i].hasClass("filter-select-sort-desc"), p = [];
        if (r = e.grep(r, function(t, i) {
          return !!t.text || e.inArray(t, r) === i;
        }), h && d.$headerIndexed[i].hasClass("filter-select-nosort")) return r;
        for (l = r.length, a = 0; a < l; a++) c = (s = r[a]).text ? s.text : s, u = (h && d.parsers && d.parsers.length && d.parsers[i].format(c, t, [], i) || c).toString(), 
        u = d.widgetOptions.filter_ignoreCase ? u.toLowerCase() : u, s.text ? (s.parsed = u, 
        p[p.length] = s) : p[p.length] = {
          text: s,
          parsed: u
        };
        for (o = d.textSorter || "", p.sort(function(e, r) {
          var s = f ? r.parsed : e.parsed, a = f ? e.parsed : r.parsed;
          return h && "function" == typeof o ? o(s, a, !0, i, t) : h && "object" == typeof o && o.hasOwnProperty(i) ? o[i](s, a, !0, i, t) : !n.sortNatural || n.sortNatural(s, a);
        }), r = [], l = p.length, a = 0; a < l; a++) r[r.length] = p[a];
        return r;
      },
      getOptions: function(t, i, r) {
        var o, s, a, l, u, c, d, h, f = (t = e(t)[0]).config, p = f.widgetOptions, m = [];
        for (s = 0; s < f.$tbodies.length; s++) for (u = f.cache[s], a = f.cache[s].normalized.length, 
        o = 0; o < a; o++) if (l = u.row ? u.row[o] : u.normalized[o][f.columns].$row[0], 
        !r || !l.className.match(p.filter_filteredRow)) if (p.filter_useParsedData || f.parsers[i].parsed || f.$headerIndexed[i].hasClass("filter-parsed")) {
          if (m[m.length] = "" + u.normalized[o][i], p.filter_childRows && p.filter_childByColumn) for (h = u.normalized[o][f.columns].$row.length - 1, 
          c = 0; c < h; c++) m[m.length] = "" + u.normalized[o][f.columns].child[c][i];
        } else if (m[m.length] = u.normalized[o][f.columns].raw[i], p.filter_childRows && p.filter_childByColumn) for (h = u.normalized[o][f.columns].$row.length, 
        c = 1; c < h; c++) d = u.normalized[o][f.columns].$row.eq(c).children().eq(i), m[m.length] = "" + n.getElementText(f, d, i);
        return m;
      },
      buildSelect: function(n, o, s, a, l) {
        if (n = e(n)[0], o = parseInt(o, 10), n.config.cache && !e.isEmptyObject(n.config.cache)) {
          var u, c, d, h, f, p, m, g = n.config, v = g.widgetOptions, y = g.$headerIndexed[o], b = '<option value="">' + (y.data("placeholder") || y.attr("data-placeholder") || v.filter_placeholder.select || "") + "</option>", x = g.$table.find("thead").find("select." + r.filter + '[data-column="' + o + '"]').val();
          if (void 0 !== s && "" !== s || null !== (s = t.getOptionSource(n, o, l))) {
            if (e.isArray(s)) {
              for (u = 0; u < s.length; u++) if ((m = s[u]).text) {
                for (c in m["data-function-name"] = "undefined" == typeof m.value ? m.text : m.value, 
                b += "<option", m) m.hasOwnProperty(c) && "text" !== c && (b += " " + c + '="' + m[c].replace(i.quote, "&quot;") + '"');
                m.value || (b += ' value="' + m.text.replace(i.quote, "&quot;") + '"'), b += ">" + m.text.replace(i.quote, "&quot;") + "</option>";
              } else "" + m != "[object Object]" && (c = d = m = ("" + m).replace(i.quote, "&quot;"), 
              d.indexOf(v.filter_selectSourceSeparator) >= 0 && (c = (h = d.split(v.filter_selectSourceSeparator))[0], 
              d = h[1]), b += "" !== m ? "<option " + (c === d ? "" : 'data-function-name="' + m + '" ') + 'value="' + c + '">' + d + "</option>" : "");
              s = [];
            }
            f = (g.$filters ? g.$filters : g.$table.children("thead")).find("." + r.filter), 
            v.filter_$externalFilters && (f = f && f.length ? f.add(v.filter_$externalFilters) : v.filter_$externalFilters), 
            (p = f.filter('select[data-column="' + o + '"]')).length && (p[a ? "html" : "append"](b), 
            e.isArray(s) || p.append(s).val(x), p.val(x));
          }
        }
      },
      buildDefault: function(e, i) {
        var r, o, s, a = e.config, l = a.widgetOptions, u = a.columns;
        for (r = 0; r < u; r++) s = !((o = a.$headerIndexed[r]).hasClass("filter-false") || o.hasClass("parser-false")), 
        (o.hasClass("filter-select") || !0 === n.getColumnData(e, l.filter_functions, r)) && s && t.buildSelect(e, r, "", i, o.hasClass(l.filter_onlyAvail));
      }
    }, i = t.regex, n.getFilters = function(i, n, o, s) {
      var a, l, u, c, d = [], h = i ? e(i)[0].config : "", f = h ? h.widgetOptions : "";
      if (!0 !== n && f && !f.filter_columnFilters || e.isArray(o) && t.equalFilters(h, o, h.lastSearch)) return e(i).data("lastSearch") || [];
      if (h && (h.$filters && (l = h.$filters.find("." + r.filter)), f.filter_$externalFilters && (l = l && l.length ? l.add(f.filter_$externalFilters) : f.filter_$externalFilters), 
      l && l.length)) for (d = o || [], a = 0; a < h.columns + 1; a++) c = a === h.columns ? f.filter_anyColumnSelector + "," + f.filter_multipleColumnSelector : '[data-column="' + a + '"]', 
      (u = l.filter(c)).length && (u = t.getLatestSearch(u), e.isArray(o) ? (s && u.length > 1 && (u = u.slice(1)), 
      a === h.columns && (u = (c = u.filter(f.filter_anyColumnSelector)).length ? c : u), 
      u.val(o[a]).trigger("change" + h.namespace)) : (d[a] = u.val() || "", a === h.columns ? u.slice(1).filter('[data-column*="' + u.attr("data-column") + '"]').val(d[a]) : u.slice(1).val(d[a])), 
      a === h.columns && u.length && (f.filter_$anyMatch = u));
      return d;
    }, n.setFilters = function(i, r, o, s) {
      var a = i ? e(i)[0].config : "", l = n.getFilters(i, !0, r, s);
      return void 0 === o && (o = !0), a && o && (a.lastCombinedFilter = null, a.lastSearch = [], 
      t.searching(a.table, r, s), a.$table.triggerHandler("filterFomatterUpdate")), 0 !== l.length;
    };
  }(e), function(e, t) {
    "use strict";
    function i(t, i) {
      var n = isNaN(i.stickyHeaders_offset) ? e(i.stickyHeaders_offset) : [];
      return n.length ? n.height() || 0 : parseInt(i.stickyHeaders_offset, 10) || 0;
    }
    var n = e.tablesorter || {};
    e.extend(n.css, {
      sticky: "tablesorter-stickyHeader",
      stickyVis: "tablesorter-sticky-visible",
      stickyHide: "tablesorter-sticky-hidden",
      stickyWrap: "tablesorter-sticky-wrapper"
    }), n.addHeaderResizeEvent = function(t, i, n) {
      if ((t = e(t)[0]).config) {
        var r = {
          timer: 250
        }, o = e.extend({}, r, n), s = t.config, a = s.widgetOptions, l = function(e) {
          var t, i, n, r, o, l, u = s.$headers.length;
          for (a.resize_flag = !0, i = [], t = 0; t < u; t++) r = (n = s.$headers.eq(t)).data("savedSizes") || [ 0, 0 ], 
          o = n[0].offsetWidth, l = n[0].offsetHeight, o === r[0] && l === r[1] || (n.data("savedSizes", [ o, l ]), 
          i.push(n[0]));
          i.length && !1 !== e && s.$table.triggerHandler("resize", [ i ]), a.resize_flag = !1;
        };
        if (clearInterval(a.resize_timer), i) return a.resize_flag = !1, !1;
        l(!1), a.resize_timer = setInterval(function() {
          a.resize_flag || l();
        }, o.timer);
      }
    }, n.addWidget({
      id: "stickyHeaders",
      priority: 54,
      options: {
        stickyHeaders: "",
        stickyHeaders_appendTo: null,
        stickyHeaders_attachTo: null,
        stickyHeaders_xScroll: null,
        stickyHeaders_yScroll: null,
        stickyHeaders_offset: 0,
        stickyHeaders_filteredToTop: !0,
        stickyHeaders_cloneId: "-sticky",
        stickyHeaders_addResizeEvent: !0,
        stickyHeaders_includeCaption: !0,
        stickyHeaders_zIndex: 2
      },
      format: function(r, o, s) {
        if (!(o.$table.hasClass("hasStickyHeaders") || e.inArray("filter", o.widgets) >= 0 && !o.$table.hasClass("hasFilters"))) {
          var a, l, u, c, d = o.$table, h = e(s.stickyHeaders_attachTo || s.stickyHeaders_appendTo), f = o.namespace + "stickyheaders ", p = e(s.stickyHeaders_yScroll || s.stickyHeaders_attachTo || t), m = e(s.stickyHeaders_xScroll || s.stickyHeaders_attachTo || t), g = d.children("thead:first").children("tr").not(".sticky-false").children(), v = d.children("tfoot"), y = i(o, s), b = d.parent().closest("." + n.css.table).hasClass("hasStickyHeaders") ? d.parent().closest("table.tablesorter")[0].config.widgetOptions.$sticky.parent() : [], x = b.length ? b.height() : 0, w = s.$sticky = d.clone().addClass("containsStickyHeaders " + n.css.sticky + " " + s.stickyHeaders + " " + o.namespace.slice(1) + "_extra_table").wrap('<div class="' + n.css.stickyWrap + '">'), _ = w.parent().addClass(n.css.stickyHide).css({
            position: h.length ? "absolute" : "fixed",
            padding: parseInt(w.parent().parent().css("padding-left"), 10),
            top: y + x,
            left: 0,
            visibility: "hidden",
            zIndex: s.stickyHeaders_zIndex || 2
          }), S = w.children("thead:first"), C = "", T = function(e, i) {
            var n, r, o, s, a, l = e.filter(":visible"), u = l.length;
            for (n = 0; n < u; n++) s = i.filter(":visible").eq(n), "border-box" === (a = l.eq(n)).css("box-sizing") ? r = a.outerWidth() : "collapse" === s.css("border-collapse") ? t.getComputedStyle ? r = parseFloat(t.getComputedStyle(a[0], null).width) : (o = parseFloat(a.css("border-width")), 
            r = a.outerWidth() - parseFloat(a.css("padding-left")) - parseFloat(a.css("padding-right")) - o) : r = a.width(), 
            s.css({
              width: r,
              "min-width": r,
              "max-width": r
            });
          }, k = function(i) {
            return !1 === i && b.length ? d.position().left : h.length ? parseInt(h.css("padding-left"), 10) || 0 : d.offset().left - parseInt(d.css("margin-left"), 10) - e(t).scrollLeft();
          }, M = function() {
            _.css({
              left: k(),
              width: d.outerWidth()
            }), T(d, w), T(g, c);
          }, D = function(t) {
            if (d.is(":visible")) {
              x = b.length ? b.offset().top - p.scrollTop() + b.height() : 0;
              var r, a = d.offset(), l = i(o, s), u = e.isWindow(p[0]), c = u ? p.scrollTop() : b.length ? parseInt(b[0].style.top, 10) : p.offset().top, f = h.length ? c : p.scrollTop(), m = s.stickyHeaders_includeCaption ? 0 : d.children("caption").height() || 0, g = f + l + x - m, y = d.height() - (_.height() + (v.height() || 0)) - m, w = g > a.top && g < a.top + y ? "visible" : "hidden", S = "visible" === w ? n.css.stickyVis : n.css.stickyHide, T = !_.hasClass(S), D = {
                visibility: w
              };
              h.length && (T = !0, D.top = u ? g - h.offset().top : h.scrollTop()), (r = k(u)) !== parseInt(_.css("left"), 10) && (T = !0, 
              D.left = r), D.top = (D.top || 0) + (!u && b.length ? b.height() : l + x), T && _.removeClass(n.css.stickyVis + " " + n.css.stickyHide).addClass(S).css(D), 
              (w !== C || t) && (M(), C = w);
            }
          };
          if (h.length && !h.css("position") && h.css("position", "relative"), w.attr("id") && (w[0].id += s.stickyHeaders_cloneId), 
          w.find("> thead:gt(0), tr.sticky-false").hide(), w.find("> tbody, > tfoot").remove(), 
          w.find("caption").toggle(s.stickyHeaders_includeCaption), c = S.children().children(), 
          w.css({
            height: 0,
            width: 0,
            margin: 0
          }), c.find("." + n.css.resizer).remove(), d.addClass("hasStickyHeaders").bind("pagerComplete" + f, function() {
            M();
          }), n.bindEvents(r, S.children().children("." + n.css.header)), s.stickyHeaders_appendTo ? e(s.stickyHeaders_appendTo).append(_) : d.after(_), 
          o.onRenderHeader) for (l = (u = S.children("tr").children()).length, a = 0; a < l; a++) o.onRenderHeader.apply(u.eq(a), [ a, o, w ]);
          m.add(p).unbind("scroll resize ".split(" ").join(f).replace(/\s+/g, " ")).bind("scroll resize ".split(" ").join(f), function(e) {
            D("resize" === e.type);
          }), o.$table.unbind("stickyHeadersUpdate" + f).bind("stickyHeadersUpdate" + f, function() {
            D(!0);
          }), s.stickyHeaders_addResizeEvent && n.addHeaderResizeEvent(r), d.hasClass("hasFilters") && s.filter_columnFilters && (d.bind("filterEnd" + f, function() {
            var i = e(document.activeElement).closest("td"), r = i.parent().children().index(i);
            _.hasClass(n.css.stickyVis) && s.stickyHeaders_filteredToTop && (t.scrollTo(0, d.position().top), 
            r >= 0 && o.$filters && o.$filters.eq(r).find("a, select, input").filter(":visible").focus());
          }), n.filter.bindSearch(d, c.find("." + n.css.filter)), s.filter_hideFilters && n.filter.hideFilters(o, w)), 
          s.stickyHeaders_addResizeEvent && d.bind("resize" + o.namespace + "stickyheaders", function() {
            M();
          }), D(!0), d.triggerHandler("stickyHeadersInit");
        }
      },
      remove: function(i, r, o) {
        var s = r.namespace + "stickyheaders ";
        r.$table.removeClass("hasStickyHeaders").unbind("pagerComplete resize filterEnd stickyHeadersUpdate ".split(" ").join(s).replace(/\s+/g, " ")).next("." + n.css.stickyWrap).remove(), 
        o.$sticky && o.$sticky.length && o.$sticky.remove(), e(t).add(o.stickyHeaders_xScroll).add(o.stickyHeaders_yScroll).add(o.stickyHeaders_attachTo).unbind("scroll resize ".split(" ").join(s).replace(/\s+/g, " ")), 
        n.addHeaderResizeEvent(i, !0);
      }
    });
  }(e, window), function(e, t) {
    "use strict";
    var i = e.tablesorter || {};
    e.extend(i.css, {
      resizableContainer: "tablesorter-resizable-container",
      resizableHandle: "tablesorter-resizable-handle",
      resizableNoSelect: "tablesorter-disableSelection",
      resizableStorage: "tablesorter-resizable"
    }), e(function() {
      var t = "<style>body." + i.css.resizableNoSelect + " { -ms-user-select: none; -moz-user-select: -moz-none;-khtml-user-select: none; -webkit-user-select: none; user-select: none; }." + i.css.resizableContainer + " { position: relative; height: 1px; }." + i.css.resizableHandle + " { position: absolute; display: inline-block; width: 8px;top: 1px; cursor: ew-resize; z-index: 3; user-select: none; -moz-user-select: none; }</style>";
      e("head").append(t);
    }), i.resizable = {
      init: function(t, n) {
        if (!t.$table.hasClass("hasResizable")) {
          t.$table.addClass("hasResizable");
          var r, o, s, a, l = t.$table, u = l.parent(), c = parseInt(l.css("margin-top"), 10), d = n.resizable_vars = {
            useStorage: i.storage && !1 !== n.resizable,
            $wrap: u,
            mouseXPosition: 0,
            $target: null,
            $next: null,
            overflow: "auto" === u.css("overflow") || "scroll" === u.css("overflow") || "auto" === u.css("overflow-x") || "scroll" === u.css("overflow-x"),
            storedSizes: []
          };
          for (i.resizableReset(t.table, !0), d.tableWidth = l.width(), d.fullWidth = Math.abs(u.width() - d.tableWidth) < 20, 
          d.useStorage && d.overflow && (i.storage(t.table, "tablesorter-table-original-css-width", d.tableWidth), 
          a = i.storage(t.table, "tablesorter-table-resized-width") || "auto", i.resizable.setWidth(l, a, !0)), 
          n.resizable_vars.storedSizes = s = (d.useStorage ? i.storage(t.table, i.css.resizableStorage) : []) || [], 
          i.resizable.setWidths(t, n, s), i.resizable.updateStoredSizes(t, n), n.$resizable_container = e('<div class="' + i.css.resizableContainer + '">').css({
            top: c
          }).insertBefore(l), o = 0; o < t.columns; o++) r = t.$headerIndexed[o], a = i.getColumnData(t.table, t.headers, o), 
          "false" === i.getData(r, a, "resizable") || e('<div class="' + i.css.resizableHandle + '">').appendTo(n.$resizable_container).attr({
            "data-column": o,
            unselectable: "on"
          }).data("header", r).bind("selectstart", !1);
          i.resizable.bindings(t, n);
        }
      },
      updateStoredSizes: function(e, t) {
        var i, n, r = e.columns, o = t.resizable_vars;
        for (o.storedSizes = [], i = 0; i < r; i++) n = e.$headerIndexed[i], o.storedSizes[i] = n.is(":visible") ? n.width() : 0;
      },
      setWidth: function(e, t, i) {
        e.css({
          width: t,
          "min-width": i ? t : "",
          "max-width": i ? t : ""
        });
      },
      setWidths: function(t, n, r) {
        var o, s, a = n.resizable_vars, l = e(t.namespace + "_extra_headers"), u = t.$table.children("colgroup").children("col");
        if ((r = r || a.storedSizes || []).length) {
          for (o = 0; o < t.columns; o++) i.resizable.setWidth(t.$headerIndexed[o], r[o], a.overflow), 
          l.length && (s = l.eq(o).add(u.eq(o)), i.resizable.setWidth(s, r[o], a.overflow));
          (s = e(t.namespace + "_extra_table")).length && !i.hasWidget(t.table, "scroller") && i.resizable.setWidth(s, t.$table.outerWidth(), a.overflow);
        }
      },
      setHandlePosition: function(t, n) {
        var r, o = t.$table.height(), s = n.$resizable_container.children(), a = Math.floor(s.width() / 2);
        i.hasWidget(t.table, "scroller") && (o = 0, t.$table.closest("." + i.css.scrollerWrap).children().each(function() {
          var t = e(this);
          o += t.filter('[style*="height"]').length ? t.height() : t.children("table").height();
        })), !n.resizable_includeFooter && t.$table.children("tfoot").length && (o -= t.$table.children("tfoot").height()), 
        r = parseFloat(e.fn.jquery) >= 3.3 ? 0 : t.$table.position().left, s.each(function() {
          var s = e(this), l = parseInt(s.attr("data-column"), 10), u = t.columns - 1, c = s.data("header");
          c && (!c.is(":visible") || !n.resizable_addLastColumn && i.resizable.checkVisibleColumns(t, l) ? s.hide() : (l < u || l === u && n.resizable_addLastColumn) && s.css({
            display: "inline-block",
            height: o,
            left: c.position().left - r + c.outerWidth() - a
          }));
        });
      },
      checkVisibleColumns: function(e, t) {
        var i, n = 0;
        for (i = t + 1; i < e.columns; i++) n += e.$headerIndexed[i].is(":visible") ? 1 : 0;
        return 0 === n;
      },
      toggleTextSelection: function(t, n, r) {
        var o = t.namespace + "tsresize";
        n.resizable_vars.disabled = r, e("body").toggleClass(i.css.resizableNoSelect, r), 
        r ? e("body").attr("unselectable", "on").bind("selectstart" + o, !1) : e("body").removeAttr("unselectable").unbind("selectstart" + o);
      },
      bindings: function(n, r) {
        var o = n.namespace + "tsresize";
        r.$resizable_container.children().bind("mousedown", function(t) {
          var o, s = r.resizable_vars, a = e(n.namespace + "_extra_headers"), l = e(t.target).data("header");
          o = parseInt(l.attr("data-column"), 10), s.$target = l = l.add(a.filter('[data-column="' + o + '"]')), 
          s.target = o, s.$next = t.shiftKey || r.resizable_targetLast ? l.parent().children().not(".resizable-false").filter(":last") : l.nextAll(":not(.resizable-false)").eq(0), 
          o = parseInt(s.$next.attr("data-column"), 10), s.$next = s.$next.add(a.filter('[data-column="' + o + '"]')), 
          s.next = o, s.mouseXPosition = t.pageX, i.resizable.updateStoredSizes(n, r), i.resizable.toggleTextSelection(n, r, !0);
        }), e(document).bind("mousemove" + o, function(e) {
          var t = r.resizable_vars;
          t.disabled && 0 !== t.mouseXPosition && t.$target && (r.resizable_throttle ? (clearTimeout(t.timer), 
          t.timer = setTimeout(function() {
            i.resizable.mouseMove(n, r, e);
          }, isNaN(r.resizable_throttle) ? 5 : r.resizable_throttle)) : i.resizable.mouseMove(n, r, e));
        }).bind("mouseup" + o, function() {
          r.resizable_vars.disabled && (i.resizable.toggleTextSelection(n, r, !1), i.resizable.stopResize(n, r), 
          i.resizable.setHandlePosition(n, r));
        }), e(t).bind("resize" + o + " resizeEnd" + o, function() {
          i.resizable.setHandlePosition(n, r);
        }), n.$table.bind("columnUpdate pagerComplete resizableUpdate ".split(" ").join(o + " "), function() {
          i.resizable.setHandlePosition(n, r);
        }).bind("resizableReset" + o, function() {
          i.resizableReset(n.table);
        }).find("thead:first").add(e(n.namespace + "_extra_table").find("thead:first")).bind("contextmenu" + o, function() {
          var e = 0 === r.resizable_vars.storedSizes.length;
          return i.resizableReset(n.table), i.resizable.setHandlePosition(n, r), r.resizable_vars.storedSizes = [], 
          e;
        });
      },
      mouseMove: function(t, n, r) {
        if (0 !== n.resizable_vars.mouseXPosition && n.resizable_vars.$target) {
          var o, s = 0, a = n.resizable_vars, l = a.$next, u = a.storedSizes[a.target], c = r.pageX - a.mouseXPosition;
          if (a.overflow) {
            if (u + c > 0) {
              for (a.storedSizes[a.target] += c, i.resizable.setWidth(a.$target, a.storedSizes[a.target], !0), 
              o = 0; o < t.columns; o++) s += a.storedSizes[o];
              i.resizable.setWidth(t.$table.add(e(t.namespace + "_extra_table")), s);
            }
            l.length || (a.$wrap[0].scrollLeft = t.$table.width());
          } else a.fullWidth ? (a.storedSizes[a.target] += c, a.storedSizes[a.next] -= c, 
          i.resizable.setWidths(t, n)) : (a.storedSizes[a.target] += c, i.resizable.setWidths(t, n));
          a.mouseXPosition = r.pageX, t.$table.triggerHandler("stickyHeadersUpdate");
        }
      },
      stopResize: function(e, t) {
        var n = t.resizable_vars;
        i.resizable.updateStoredSizes(e, t), n.useStorage && (i.storage(e.table, i.css.resizableStorage, n.storedSizes), 
        i.storage(e.table, "tablesorter-table-resized-width", e.$table.width())), n.mouseXPosition = 0, 
        n.$target = n.$next = null, e.$table.triggerHandler("stickyHeadersUpdate"), e.$table.triggerHandler("resizableComplete");
      }
    }, i.addWidget({
      id: "resizable",
      priority: 40,
      options: {
        resizable: !0,
        resizable_addLastColumn: !1,
        resizable_includeFooter: !0,
        resizable_widths: [],
        resizable_throttle: !1,
        resizable_targetLast: !1
      },
      init: function(e, t, n, r) {
        i.resizable.init(n, r);
      },
      format: function(e, t, n) {
        i.resizable.setHandlePosition(t, n);
      },
      remove: function(t, n, r, o) {
        if (r.$resizable_container) {
          var s = n.namespace + "tsresize";
          n.$table.add(e(n.namespace + "_extra_table")).removeClass("hasResizable").children("thead").unbind("contextmenu" + s), 
          r.$resizable_container.remove(), i.resizable.toggleTextSelection(n, r, !1), i.resizableReset(t, o), 
          e(document).unbind("mousemove" + s + " mouseup" + s);
        }
      }
    }), i.resizableReset = function(t, n) {
      e(t).each(function() {
        var e, r, o = this.config, s = o && o.widgetOptions, a = s.resizable_vars;
        if (t && o && o.$headerIndexed.length) {
          for (a.overflow && a.tableWidth && (i.resizable.setWidth(o.$table, a.tableWidth, !0), 
          a.useStorage && i.storage(t, "tablesorter-table-resized-width", a.tableWidth)), 
          e = 0; e < o.columns; e++) r = o.$headerIndexed[e], s.resizable_widths && s.resizable_widths[e] ? i.resizable.setWidth(r, s.resizable_widths[e], a.overflow) : r.hasClass("resizable-false") || i.resizable.setWidth(r, "", a.overflow);
          o.$table.triggerHandler("stickyHeadersUpdate"), i.storage && !n && i.storage(this, i.css.resizableStorage, []);
        }
      });
    };
  }(e, window), function(e) {
    "use strict";
    function t(t) {
      var i = n.storage(t.table, "tablesorter-savesort");
      return i && i.hasOwnProperty("sortList") && e.isArray(i.sortList) ? i.sortList : [];
    }
    function i(e, i) {
      return (i || t(e)).join(",") !== e.sortList.join(",");
    }
    var n = e.tablesorter || {};
    n.addWidget({
      id: "saveSort",
      priority: 20,
      options: {
        saveSort: !0
      },
      init: function(e, t, i, n) {
        t.format(e, i, n, !0);
      },
      format: function(e, r, o, s) {
        var a, l = r.$table, u = !1 !== o.saveSort, c = {
          sortList: r.sortList
        }, d = n.debug(r, "saveSort");
        d && (a = new Date()), l.hasClass("hasSaveSort") ? u && e.hasInitialized && n.storage && i(r) && (n.storage(e, "tablesorter-savesort", c), 
        d && console.log("saveSort >> Saving last sort: " + r.sortList + n.benchmark(a))) : (l.addClass("hasSaveSort"), 
        c = "", n.storage && (c = t(r), d && console.log('saveSort >> Last sort loaded: "' + c + '"' + n.benchmark(a)), 
        l.bind("saveSortReset", function(t) {
          t.stopPropagation(), n.storage(e, "tablesorter-savesort", "");
        })), s && c && c.length > 0 ? r.sortList = c : e.hasInitialized && c && c.length > 0 && i(r, c) && n.sortOn(r, c));
      },
      remove: function(e, t) {
        t.$table.removeClass("hasSaveSort"), n.storage && n.storage(e, "tablesorter-savesort", "");
      }
    });
  }(e), e.tablesorter;
}), function() {
  var e = this;
  (function() {
    (function() {
      var e = [].slice;
      this.LocalTime = {
        config: {},
        run: function() {
          return this.getController().processElements();
        },
        process: function() {
          var t, i, n, r;
          for (n = 0, r = (i = 1 <= arguments.length ? e.call(arguments, 0) : []).length; n < r; n++) t = i[n], 
          this.getController().processElement(t);
          return i.length;
        },
        getController: function() {
          return null != this.controller ? this.controller : this.controller = new t.Controller();
        }
      };
    }).call(this);
  }).call(e);
  var t = e.LocalTime;
  (function() {
    (function() {
      t.config.i18n = {
        en: {
          date: {
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            abbrDayNames: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            abbrMonthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            yesterday: "yesterday",
            today: "today",
            tomorrow: "tomorrow",
            on: "on {date}",
            formats: {
              "default": "%b %e, %Y",
              thisYear: "%b %e"
            }
          },
          time: {
            am: "am",
            pm: "pm",
            singular: "a {time}",
            singularAn: "an {time}",
            elapsed: "{time} ago",
            second: "second",
            seconds: "seconds",
            minute: "minute",
            minutes: "minutes",
            hour: "hour",
            hours: "hours",
            formats: {
              "default": "%l:%M%P"
            }
          },
          datetime: {
            at: "{date} at {time}",
            formats: {
              "default": "%B %e, %Y at %l:%M%P %Z"
            }
          }
        }
      };
    }).call(this), function() {
      t.config.locale = "en", t.config.defaultLocale = "en";
    }.call(this), function() {
      t.config.timerInterval = 6e4;
    }.call(this), function() {
      var e, i, n;
      n = !isNaN(Date.parse("2011-01-01T12:00:00-05:00")), t.parseDate = function(e) {
        return e = e.toString(), n || (e = i(e)), new Date(Date.parse(e));
      }, e = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|[-+]?[\d:]+)$/, i = function(t) {
        var i, n, r, o, s, a, l, u, c;
        if (r = t.match(e)) return r[0], u = r[1], s = r[2], i = r[3], n = r[4], o = r[5], 
        l = r[6], "Z" !== (c = r[7]) && (a = c.replace(":", "")), u + "/" + s + "/" + i + " " + n + ":" + o + ":" + l + " GMT" + [ a ];
      };
    }.call(this), function() {
      t.elementMatchesSelector = function() {
        var e, t, i, n, r, o;
        return e = document.documentElement, t = null != (i = null != (n = null != (r = null != (o = e.matches) ? o : e.matchesSelector) ? r : e.webkitMatchesSelector) ? n : e.mozMatchesSelector) ? i : e.msMatchesSelector, 
        function(e, i) {
          if ((null != e ? e.nodeType : void 0) === Node.ELEMENT_NODE) return t.call(e, i);
        };
      }();
    }.call(this), function() {
      var e, i, n;
      e = t.config, n = e.i18n, t.getI18nValue = function(r, o) {
        var s, a;
        return null == r && (r = ""), s = (null != o ? o : {
          locale: e.locale
        }).locale, null != (a = i(n[s], r)) ? a : s !== e.defaultLocale ? t.getI18nValue(r, {
          locale: e.defaultLocale
        }) : void 0;
      }, t.translate = function(e, i, n) {
        var r, o, s;
        for (r in null == i && (i = {}), s = t.getI18nValue(e, n), i) o = i[r], s = s.replace("{" + r + "}", o);
        return s;
      }, i = function(e, t) {
        var i, n, r, o, s;
        for (s = e, i = 0, r = (o = t.split(".")).length; i < r; i++) {
          if (null == s[n = o[i]]) return null;
          s = s[n];
        }
        return s;
      };
    }.call(this), function() {
      var e, i, n, r, o;
      e = t.getI18nValue, o = t.translate, t.strftime = r = function(t, s) {
        var a, l, u, c, d, h, f;
        return l = t.getDay(), a = t.getDate(), d = t.getMonth(), f = t.getFullYear(), u = t.getHours(), 
        c = t.getMinutes(), h = t.getSeconds(), s.replace(/%([%aAbBcdeHIlmMpPSwyYZ])/g, function(s) {
          switch (s[0], s[1]) {
           case "%":
            return "%";

           case "a":
            return e("date.abbrDayNames")[l];

           case "A":
            return e("date.dayNames")[l];

           case "b":
            return e("date.abbrMonthNames")[d];

           case "B":
            return e("date.monthNames")[d];

           case "c":
            return t.toString();

           case "d":
            return i(a);

           case "e":
            return a;

           case "H":
            return i(u);

           case "I":
            return i(r(t, "%l"));

           case "l":
            return 0 === u || 12 === u ? 12 : (u + 12) % 12;

           case "m":
            return i(d + 1);

           case "M":
            return i(c);

           case "p":
            return o("time." + (u > 11 ? "pm" : "am")).toUpperCase();

           case "P":
            return o("time." + (u > 11 ? "pm" : "am"));

           case "S":
            return i(h);

           case "w":
            return l;

           case "y":
            return i(f % 100);

           case "Y":
            return f;

           case "Z":
            return n(t);
          }
        });
      }, i = function(e) {
        return ("0" + e).slice(-2);
      }, n = function(e) {
        var t, i, n, r, o;
        return (t = null != (i = (o = e.toString()).match(/\(([\w\s]+)\)$/)) ? i[1] : void 0) ? /\s/.test(t) ? t.match(/\b(\w)/g).join("") : t : (t = null != (n = o.match(/(\w{3,4})\s\d{4}$/)) ? n[1] : void 0) ? t : (t = null != (r = o.match(/(UTC[\+\-]\d+)/)) ? r[1] : void 0) ? t : "";
      };
    }.call(this), function() {
      t.CalendarDate = function() {
        function e(e, t, i) {
          this.date = new Date(Date.UTC(e, t - 1)), this.date.setUTCDate(i), this.year = this.date.getUTCFullYear(), 
          this.month = this.date.getUTCMonth() + 1, this.day = this.date.getUTCDate(), this.value = this.date.getTime();
        }
        return e.fromDate = function(e) {
          return new this(e.getFullYear(), e.getMonth() + 1, e.getDate());
        }, e.today = function() {
          return this.fromDate(new Date());
        }, e.prototype.equals = function(e) {
          return (null != e ? e.value : void 0) === this.value;
        }, e.prototype.is = function(e) {
          return this.equals(e);
        }, e.prototype.isToday = function() {
          return this.is(this.constructor.today());
        }, e.prototype.occursOnSameYearAs = function(e) {
          return this.year === (null != e ? e.year : void 0);
        }, e.prototype.occursThisYear = function() {
          return this.occursOnSameYearAs(this.constructor.today());
        }, e.prototype.daysSince = function(e) {
          if (e) return (this.date - e.date) / 864e5;
        }, e.prototype.daysPassed = function() {
          return this.constructor.today().daysSince(this);
        }, e;
      }();
    }.call(this), function() {
      var e, i, n;
      i = t.strftime, n = t.translate, e = t.getI18nValue, t.RelativeTime = function() {
        function r(e) {
          this.date = e, this.calendarDate = t.CalendarDate.fromDate(this.date);
        }
        return r.prototype.toString = function() {
          var e, t;
          return (t = this.toTimeElapsedString()) ? n("time.elapsed", {
            time: t
          }) : (e = this.toWeekdayString()) ? (t = this.toTimeString(), n("datetime.at", {
            date: e,
            time: t
          })) : n("date.on", {
            date: this.toDateString()
          });
        }, r.prototype.toTimeOrDateString = function() {
          return this.calendarDate.isToday() ? this.toTimeString() : this.toDateString();
        }, r.prototype.toTimeElapsedString = function() {
          var e, t, i, r, o;
          return i = new Date().getTime() - this.date.getTime(), r = Math.round(i / 1e3), 
          t = Math.round(r / 60), e = Math.round(t / 60), i < 0 ? null : r < 10 ? (o = n("time.second"), 
          n("time.singular", {
            time: o
          })) : r < 45 ? r + " " + n("time.seconds") : r < 90 ? (o = n("time.minute"), n("time.singular", {
            time: o
          })) : t < 45 ? t + " " + n("time.minutes") : t < 90 ? (o = n("time.hour"), n("time.singularAn", {
            time: o
          })) : e < 24 ? e + " " + n("time.hours") : "";
        }, r.prototype.toWeekdayString = function() {
          switch (this.calendarDate.daysPassed()) {
           case 0:
            return n("date.today");

           case 1:
            return n("date.yesterday");

           case -1:
            return n("date.tomorrow");

           case 2:
           case 3:
           case 4:
           case 5:
           case 6:
            return i(this.date, "%A");

           default:
            return "";
          }
        }, r.prototype.toDateString = function() {
          var t;
          return t = e(this.calendarDate.occursThisYear() ? "date.formats.thisYear" : "date.formats.default"), 
          i(this.date, t);
        }, r.prototype.toTimeString = function() {
          return i(this.date, e("time.formats.default"));
        }, r;
      }();
    }.call(this), function() {
      var e, i = function(e, t) {
        return function() {
          return e.apply(t, arguments);
        };
      };
      e = t.elementMatchesSelector, t.PageObserver = function() {
        function t(e, t) {
          this.selector = e, this.callback = t, this.processInsertion = i(this.processInsertion, this), 
          this.processMutations = i(this.processMutations, this);
        }
        return t.prototype.start = function() {
          if (!this.started) return this.observeWithMutationObserver() || this.observeWithMutationEvent(), 
          this.started = !0;
        }, t.prototype.observeWithMutationObserver = function() {
          if ("undefined" != typeof MutationObserver && null !== MutationObserver) return new MutationObserver(this.processMutations).observe(document.documentElement, {
            childList: !0,
            subtree: !0
          }), !0;
        }, t.prototype.observeWithMutationEvent = function() {
          return addEventListener("DOMNodeInserted", this.processInsertion, !1), !0;
        }, t.prototype.findSignificantElements = function(t) {
          var i;
          return i = [], (null != t ? t.nodeType : void 0) === Node.ELEMENT_NODE && (e(t, this.selector) && i.push(t), 
          i.push.apply(i, t.querySelectorAll(this.selector))), i;
        }, t.prototype.processMutations = function(e) {
          var t, i, n, r, o, s, a, l;
          for (t = [], i = 0, r = e.length; i < r; i++) switch (s = e[i], s.type) {
           case "childList":
            for (n = 0, o = (l = s.addedNodes).length; n < o; n++) a = l[n], t.push.apply(t, this.findSignificantElements(a));
          }
          return this.notify(t);
        }, t.prototype.processInsertion = function(e) {
          var t;
          return t = this.findSignificantElements(e.target), this.notify(t);
        }, t.prototype.notify = function(e) {
          if (null != e ? e.length : void 0) return "function" == typeof this.callback ? this.callback(e) : void 0;
        }, t;
      }();
    }.call(this), function() {
      var e, i, n, r, o = function(e, t) {
        return function() {
          return e.apply(t, arguments);
        };
      };
      n = t.parseDate, r = t.strftime, i = t.getI18nValue, e = t.config, t.Controller = function() {
        function s() {
          this.processElements = o(this.processElements, this), this.pageObserver = new t.PageObserver(a, this.processElements);
        }
        var a, l, u;
        return a = "time[data-local]:not([data-localized])", s.prototype.start = function() {
          if (!this.started) return this.processElements(), this.startTimer(), this.pageObserver.start(), 
          this.started = !0;
        }, s.prototype.startTimer = function() {
          var t;
          if (t = e.timerInterval) return null != this.timer ? this.timer : this.timer = setInterval(this.processElements, t);
        }, s.prototype.processElements = function(e) {
          var t, i, n;
          for (null == e && (e = document.querySelectorAll(a)), i = 0, n = e.length; i < n; i++) t = e[i], 
          this.processElement(t);
          return e.length;
        }, s.prototype.processElement = function(e) {
          var t, o, s, a, c, d;
          if (o = e.getAttribute("datetime"), s = e.getAttribute("data-format"), a = e.getAttribute("data-local"), 
          c = n(o), !isNaN(c)) return e.hasAttribute("title") || (d = r(c, i("datetime.formats.default")), 
          e.setAttribute("title", d)), e.textContent = t = function() {
            switch (a) {
             case "time":
              return l(e), r(c, s);

             case "date":
              return l(e), u(c).toDateString();

             case "time-ago":
              return u(c).toString();

             case "time-or-date":
              return u(c).toTimeOrDateString();

             case "weekday":
              return u(c).toWeekdayString();

             case "weekday-or-date":
              return u(c).toWeekdayString() || u(c).toDateString();
            }
          }(), e.hasAttribute("aria-label") ? void 0 : e.setAttribute("aria-label", t);
        }, l = function(e) {
          return e.setAttribute("data-localized", "");
        }, u = function(e) {
          return new t.RelativeTime(e);
        }, s;
      }();
    }.call(this), function() {
      var e, i, n, r;
      r = !1, e = function() {
        return document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState;
      }, i = function(e) {
        var t;
        return null != (t = "function" == typeof requestAnimationFrame ? requestAnimationFrame(e) : void 0) ? t : setTimeout(e, 17);
      }, n = function() {
        return t.getController().start();
      }, t.start = function() {
        if (!r) return r = !0, "undefined" != typeof MutationObserver && null !== MutationObserver || e() ? n() : i(n);
      }, window.LocalTime === t && t.start();
    }.call(this);
  }).call(this), "object" == typeof module && module.exports ? module.exports = t : "function" == typeof define && define.amd && define(t);
}.call(this), function(e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).creditCardType = e();
  }
}(function() {
  return function() {
    function e(t, i, n) {
      function r(s, a) {
        if (!i[s]) {
          if (!t[s]) {
            var l = "function" == typeof require && require;
            if (!a && l) return l(s, !0);
            if (o) return o(s, !0);
            var u = new Error("Cannot find module '" + s + "'");
            throw u.code = "MODULE_NOT_FOUND", u;
          }
          var c = i[s] = {
            exports: {}
          };
          t[s][0].call(c.exports, function(e) {
            return r(t[s][1][e] || e);
          }, c, c.exports, e, t, i, n);
        }
        return i[s].exports;
      }
      for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
      return r;
    }
    return e;
  }()({
    1: [ function(e, t) {
      "use strict";
      function i(e) {
        return h[e] || a[e];
      }
      function n() {
        return s.map(function(e) {
          return l(i(e));
        });
      }
      function r(e, t) {
        var i = s.indexOf(e);
        if (!t && -1 === i) throw new Error('"' + e + '" is not a supported card type.');
        return i;
      }
      function o(e) {
        var t, r = [];
        return c(e) ? 0 === e.length ? n(s) : (s.forEach(function(t) {
          var n = i(t);
          d(e, n, r);
        }), (t = u(r)) ? [ t ] : r) : [];
      }
      var s, a = e("./lib/card-types"), l = e("./lib/clone"), u = e("./lib/find-best-match"), c = e("./lib/is-valid-input-type"), d = e("./lib/add-matching-cards-to-results"), h = {}, f = {
        VISA: "visa",
        MASTERCARD: "mastercard",
        AMERICAN_EXPRESS: "american-express",
        DINERS_CLUB: "diners-club",
        DISCOVER: "discover",
        JCB: "jcb",
        UNIONPAY: "unionpay",
        MAESTRO: "maestro",
        ELO: "elo",
        MIR: "mir",
        HIPER: "hiper",
        HIPERCARD: "hipercard"
      }, p = [ f.VISA, f.MASTERCARD, f.AMERICAN_EXPRESS, f.DINERS_CLUB, f.DISCOVER, f.JCB, f.UNIONPAY, f.MAESTRO, f.ELO, f.MIR, f.HIPER, f.HIPERCARD ];
      s = l(p), o.getTypeInfo = function(e) {
        return l(i(e));
      }, o.removeCard = function(e) {
        var t = r(e);
        s.splice(t, 1);
      }, o.addCard = function(e) {
        var t = r(e.type, !0);
        h[e.type] = e, -1 === t && s.push(e.type);
      }, o.updateCard = function(e, t) {
        var i, n = h[e] || a[e];
        if (!n) throw new Error('"' + e + '" is not a recognized type. Use `addCard` instead.');
        if (t.type && n.type !== t.type) throw new Error("Cannot overwrite type parameter.");
        i = l(n, !0), Object.keys(i).forEach(function(e) {
          t[e] && (i[e] = t[e]);
        }), h[i.type] = i;
      }, o.changeOrder = function(e, t) {
        var i = r(e);
        s.splice(i, 1), s.splice(t, 0, e);
      }, o.resetModifications = function() {
        s = l(p), h = {};
      }, o.types = f, t.exports = o;
    }, {
      "./lib/add-matching-cards-to-results": 2,
      "./lib/card-types": 3,
      "./lib/clone": 4,
      "./lib/find-best-match": 5,
      "./lib/is-valid-input-type": 6
    } ],
    2: [ function(e, t) {
      "use strict";
      function i(e, t, i) {
        var o, s, a, l;
        for (o = 0; o < t.patterns.length; o++) if (s = t.patterns[o], r(e, s)) {
          l = n(t), a = Array.isArray(s) ? String(s[0]).length : String(s).length, e.length >= a && (l.matchStrength = a), 
          i.push(l);
          break;
        }
      }
      var n = e("./clone"), r = e("./matches");
      t.exports = i;
    }, {
      "./clone": 4,
      "./matches": 7
    } ],
    3: [ function(e, t) {
      "use strict";
      var i = {
        visa: {
          niceType: "Visa",
          type: "visa",
          patterns: [ 4 ],
          gaps: [ 4, 8, 12 ],
          lengths: [ 16, 18, 19 ],
          code: {
            name: "CVV",
            size: 3
          }
        },
        mastercard: {
          niceType: "Mastercard",
          type: "mastercard",
          patterns: [ [ 51, 55 ], [ 2221, 2229 ], [ 223, 229 ], [ 23, 26 ], [ 270, 271 ], 2720 ],
          gaps: [ 4, 8, 12 ],
          lengths: [ 16 ],
          code: {
            name: "CVC",
            size: 3
          }
        },
        "american-express": {
          niceType: "American Express",
          type: "american-express",
          patterns: [ 34, 37 ],
          gaps: [ 4, 10 ],
          lengths: [ 15 ],
          code: {
            name: "CID",
            size: 4
          }
        },
        "diners-club": {
          niceType: "Diners Club",
          type: "diners-club",
          patterns: [ [ 300, 305 ], 36, 38, 39 ],
          gaps: [ 4, 10 ],
          lengths: [ 14, 16, 19 ],
          code: {
            name: "CVV",
            size: 3
          }
        },
        discover: {
          niceType: "Discover",
          type: "discover",
          patterns: [ 6011, [ 644, 649 ], 65 ],
          gaps: [ 4, 8, 12 ],
          lengths: [ 16, 19 ],
          code: {
            name: "CID",
            size: 3
          }
        },
        jcb: {
          niceType: "JCB",
          type: "jcb",
          patterns: [ 2131, 1800, [ 3528, 3589 ] ],
          gaps: [ 4, 8, 12 ],
          lengths: [ 16, 17, 18, 19 ],
          code: {
            name: "CVV",
            size: 3
          }
        },
        unionpay: {
          niceType: "UnionPay",
          type: "unionpay",
          patterns: [ 620, [ 624, 626 ], [ 62100, 62182 ], [ 62184, 62187 ], [ 62185, 62197 ], [ 62200, 62205 ], [ 622010, 622999 ], 622018, [ 622019, 622999 ], [ 62207, 62209 ], [ 622126, 622925 ], [ 623, 626 ], 6270, 6272, 6276, [ 627700, 627779 ], [ 627781, 627799 ], [ 6282, 6289 ], 6291, 6292 ],
          gaps: [ 4, 8, 12 ],
          lengths: [ 14, 15, 16, 17, 18, 19 ],
          code: {
            name: "CVN",
            size: 3
          }
        },
        maestro: {
          niceType: "Maestro",
          type: "maestro",
          patterns: [ 493698, [ 5e5, 506698 ], [ 506779, 508999 ], [ 56, 59 ], 63, 67, 6 ],
          gaps: [ 4, 8, 12 ],
          lengths: [ 12, 13, 14, 15, 16, 17, 18, 19 ],
          code: {
            name: "CVC",
            size: 3
          }
        },
        elo: {
          niceType: "Elo",
          type: "elo",
          patterns: [ 401178, 401179, 438935, 457631, 457632, 431274, 451416, 457393, 504175, [ 506699, 506778 ], [ 509e3, 509999 ], 627780, 636297, 636368, [ 650031, 650033 ], [ 650035, 650051 ], [ 650405, 650439 ], [ 650485, 650538 ], [ 650541, 650598 ], [ 650700, 650718 ], [ 650720, 650727 ], [ 650901, 650978 ], [ 651652, 651679 ], [ 655e3, 655019 ], [ 655021, 655058 ] ],
          gaps: [ 4, 8, 12 ],
          lengths: [ 16 ],
          code: {
            name: "CVE",
            size: 3
          }
        },
        mir: {
          niceType: "Mir",
          type: "mir",
          patterns: [ [ 2200, 2204 ] ],
          gaps: [ 4, 8, 12 ],
          lengths: [ 16, 17, 18, 19 ],
          code: {
            name: "CVP2",
            size: 3
          }
        },
        hiper: {
          niceType: "Hiper",
          type: "hiper",
          patterns: [ 637095, 637568, 637599, 637609, 637612 ],
          gaps: [ 4, 8, 12 ],
          lengths: [ 16 ],
          code: {
            name: "CVC",
            size: 3
          }
        },
        hipercard: {
          niceType: "Hipercard",
          type: "hipercard",
          patterns: [ 606282 ],
          gaps: [ 4, 8, 12 ],
          lengths: [ 16 ],
          code: {
            name: "CVC",
            size: 3
          }
        }
      };
      t.exports = i;
    }, {} ],
    4: [ function(e, t) {
      "use strict";
      function i(e) {
        return e ? JSON.parse(JSON.stringify(e)) : null;
      }
      t.exports = i;
    }, {} ],
    5: [ function(e, t) {
      "use strict";
      function i(e) {
        var t = e.filter(function(e) {
          return e.matchStrength;
        }).length;
        return t > 0 && t === e.length;
      }
      function n(e) {
        if (i(e)) return e.reduce(function(e, t) {
          return e ? e.matchStrength < t.matchStrength ? t : e : t;
        });
      }
      t.exports = n;
    }, {} ],
    6: [ function(e, t) {
      "use strict";
      function i(e) {
        return "string" == typeof e || e instanceof String;
      }
      t.exports = i;
    }, {} ],
    7: [ function(e, t) {
      "use strict";
      function i(e, t, i) {
        var n = String(t).length, r = e.substr(0, n), o = parseInt(r, 10);
        return t = parseInt(String(t).substr(0, r.length), 10), i = parseInt(String(i).substr(0, r.length), 10), 
        o >= t && o <= i;
      }
      function n(e, t) {
        return (t = String(t)).substring(0, e.length) === e.substring(0, t.length);
      }
      function r(e, t) {
        return Array.isArray(t) ? i(e, t[0], t[1]) : n(e, t);
      }
      t.exports = r;
    }, {} ]
  }, {}, [ 1 ])(1);
}), function(e, t) {
  "function" == typeof define && define.amd ? define([ "jquery" ], function(i) {
    return e.returnExportsGlobal = t(i);
  }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery);
}(this, function(e) {
  "use strict";
  var t, i, n, r, o, s, a, l;
  t = function() {
    function t(e) {
      this.$inputor = e, this.domInputor = this.$inputor[0];
    }
    return t.prototype.setPos = function(e) {
      var t, i, n, r;
      return (r = a.getSelection()) && (n = 0, i = !1, (t = function(e, o) {
        var a, l, u, c, d, h;
        for (h = [], u = 0, c = (d = o.childNodes).length; u < c && (a = d[u], !i); u++) if (3 === a.nodeType) {
          if (n + a.length >= e) {
            i = !0, (l = s.createRange()).setStart(a, e - n), r.removeAllRanges(), r.addRange(l);
            break;
          }
          h.push(n += a.length);
        } else h.push(t(e, a));
        return h;
      })(e, this.domInputor)), this.domInputor;
    }, t.prototype.getIEPosition = function() {
      return this.getPosition();
    }, t.prototype.getPosition = function() {
      var e, t;
      return t = this.getOffset(), e = this.$inputor.offset(), t.left -= e.left, t.top -= e.top, 
      t;
    }, t.prototype.getOldIEPos = function() {
      var e, t;
      return t = s.selection.createRange(), (e = s.body.createTextRange()).moveToElementText(this.domInputor), 
      e.setEndPoint("EndToEnd", t), e.text.length;
    }, t.prototype.getPos = function() {
      var e, t, i;
      return (i = this.range()) ? ((e = i.cloneRange()).selectNodeContents(this.domInputor), 
      e.setEnd(i.endContainer, i.endOffset), t = e.toString().length, e.detach(), t) : s.selection ? this.getOldIEPos() : void 0;
    }, t.prototype.getOldIEOffset = function() {
      var e, t;
      return (e = s.selection.createRange().duplicate()).moveStart("character", -1), {
        height: (t = e.getBoundingClientRect()).bottom - t.top,
        left: t.left,
        top: t.top
      };
    }, t.prototype.getOffset = function() {
      var t, i, n, r, o;
      return a.getSelection && (n = this.range()) ? (n.endOffset - 1 > 0 && n.endContainer !== this.domInputor && ((t = n.cloneRange()).setStart(n.endContainer, n.endOffset - 1), 
      t.setEnd(n.endContainer, n.endOffset), i = {
        height: (r = t.getBoundingClientRect()).height,
        left: r.left + r.width,
        top: r.top
      }, t.detach()), i && 0 !== (null != i ? i.height : void 0) || (t = n.cloneRange(), 
      o = e(s.createTextNode("|")), t.insertNode(o[0]), t.selectNode(o[0]), i = {
        height: (r = t.getBoundingClientRect()).height,
        left: r.left,
        top: r.top
      }, o.remove(), t.detach())) : s.selection && (i = this.getOldIEOffset()), i && (i.top += e(a).scrollTop(), 
      i.left += e(a).scrollLeft()), i;
    }, t.prototype.range = function() {
      var e;
      if (a.getSelection) return (e = a.getSelection()).rangeCount > 0 ? e.getRangeAt(0) : null;
    }, t;
  }(), i = function() {
    function t(e) {
      this.$inputor = e, this.domInputor = this.$inputor[0];
    }
    return t.prototype.getIEPos = function() {
      var e, t, i, n, r, o;
      return t = this.domInputor, n = 0, (r = s.selection.createRange()) && r.parentElement() === t && (i = t.value.replace(/\r\n/g, "\n").length, 
      (o = t.createTextRange()).moveToBookmark(r.getBookmark()), (e = t.createTextRange()).collapse(!1), 
      n = o.compareEndPoints("StartToEnd", e) > -1 ? i : -o.moveStart("character", -i)), 
      n;
    }, t.prototype.getPos = function() {
      return s.selection ? this.getIEPos() : this.domInputor.selectionStart;
    }, t.prototype.setPos = function(e) {
      var t, i;
      return t = this.domInputor, s.selection ? ((i = t.createTextRange()).move("character", e), 
      i.select()) : t.setSelectionRange && t.setSelectionRange(e, e), t;
    }, t.prototype.getIEOffset = function(e) {
      var t;
      return t = this.domInputor.createTextRange(), e || (e = this.getPos()), t.move("character", e), 
      {
        left: t.boundingLeft,
        top: t.boundingTop,
        height: t.boundingHeight
      };
    }, t.prototype.getOffset = function(t) {
      var i, n, r;
      return i = this.$inputor, s.selection ? ((n = this.getIEOffset(t)).top += e(a).scrollTop() + i.scrollTop(), 
      n.left += e(a).scrollLeft() + i.scrollLeft(), n) : (n = i.offset(), r = this.getPosition(t), 
      {
        left: n.left + r.left - i.scrollLeft(),
        top: n.top + r.top - i.scrollTop(),
        height: r.height
      });
    }, t.prototype.getPosition = function(e) {
      var t, i, r, o, s;
      return t = this.$inputor, r = function(e) {
        return e = e.replace(/<|>|`|"|&/g, "?").replace(/\r\n|\r|\n/g, "<br/>"), /firefox/i.test(navigator.userAgent) && (e = e.replace(/\s/g, "&nbsp;")), 
        e;
      }, void 0 === e && (e = this.getPos()), s = t.val().slice(0, e), i = t.val().slice(e), 
      o = "<span style='position: relative; display: inline;'>" + r(s) + "</span>", o += "<span id='caret' style='position: relative; display: inline;'>|</span>", 
      o += "<span style='position: relative; display: inline;'>" + r(i) + "</span>", new n(t).create(o).rect();
    }, t.prototype.getIEPosition = function(e) {
      var t, i;
      return i = this.getIEOffset(e), t = this.$inputor.offset(), {
        left: i.left - t.left,
        top: i.top - t.top,
        height: i.height
      };
    }, t;
  }(), n = function() {
    function t(e) {
      this.$inputor = e;
    }
    return t.prototype.css_attr = [ "borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopStyle", "borderRightStyle", "borderBottomStyle", "borderLeftStyle", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontWeight", "height", "letterSpacing", "lineHeight", "marginBottom", "marginLeft", "marginRight", "marginTop", "outlineWidth", "overflow", "overflowX", "overflowY", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "textAlign", "textOverflow", "textTransform", "whiteSpace", "wordBreak", "wordWrap" ], 
    t.prototype.mirrorCss = function() {
      var t, i = this;
      return t = {
        position: "absolute",
        left: -9999,
        top: 0,
        zIndex: -2e4
      }, "TEXTAREA" === this.$inputor.prop("tagName") && this.css_attr.push("width"), 
      e.each(this.css_attr, function(e, n) {
        return t[n] = i.$inputor.css(n);
      }), t;
    }, t.prototype.create = function(t) {
      return this.$mirror = e("<div></div>"), this.$mirror.css(this.mirrorCss()), this.$mirror.html(t), 
      this.$inputor.after(this.$mirror), this;
    }, t.prototype.rect = function() {
      var e, t, i;
      return i = {
        left: (t = (e = this.$mirror.find("#caret")).position()).left,
        top: t.top,
        height: e.height()
      }, this.$mirror.remove(), i;
    }, t;
  }(), r = {
    contentEditable: function(e) {
      return !(!e[0].contentEditable || "true" !== e[0].contentEditable);
    }
  }, o = {
    pos: function(e) {
      return e || 0 === e ? this.setPos(e) : this.getPos();
    },
    position: function(e) {
      return s.selection ? this.getIEPosition(e) : this.getPosition(e);
    },
    offset: function(e) {
      return this.getOffset(e);
    }
  }, s = null, a = null, l = function(e) {
    var t;
    return (t = null != e ? e.iframe : void 0) ? (t, a = t.contentWindow, s = t.contentDocument || a.document) : (void 0, 
    a = window, s = document);
  }, e.fn.caret = function(n, s, a) {
    var u;
    return o[n] ? (e.isPlainObject(s) ? (l(s), s = void 0) : l(a), u = r.contentEditable(this) ? new t(this) : new i(this), 
    o[n].apply(u, [ s ])) : e.error("Method " + n + " does not exist on jQuery.caret");
  }, e.fn.caret.EditableCaret = t, e.fn.caret.InputCaret = i, e.fn.caret.Utils = r, 
  e.fn.caret.apis = o;
});
//# sourceMappingURL=/assets/maps/application_vendor-afbda7640bbc69d96ffa189642feb97160e70ab5c920dc08d9736c3f51e74d90.js.map
