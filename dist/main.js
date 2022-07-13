(()=>{"use strict";function t(t,e,n){this.id=t,this.name=e,this.tasks=n}const e=(()=>{const e=()=>null===localStorage.getItem("projects")?[]:JSON.parse(localStorage.getItem("projects")),n=()=>JSON.parse(localStorage.getItem("defaultProjects")),r=t=>localStorage.setItem("projects",JSON.stringify(t)),a=t=>localStorage.setItem("defaultProjects",JSON.stringify(t));return localStorage.getItem("defaultProjects")||(localStorage.setItem("defaultProjects",JSON.stringify([])),localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify([]))),(()=>{let e=n();if(e.length>0)return;const r=["Inbox","Today","Upcoming"];for(let n=0;n<r.length;n++){const a=new t(n,r[n],[]);e=[...e,a]}a(e)})(),{addProject:t=>{let n=e();const a=JSON.parse(JSON.stringify(t));n=[...n,a],r(n)},getNewProjectId:()=>Object.keys(e()).length,getNewTaskId:(t,r)=>{let a;return a=r?n():e(),console.log({projects:a,projectId:t}),a[t].tasks.length},getProjects:e,getDefaultProjects:n,removeProject:t=>{let n=e();n.splice(t,1),r(n)},updateProjectIds:()=>{const t=e();for(let e=0;e<t.length;e++)t[e].id=e;r(t)},addTaskToProject:t=>{const o=t.isProjectInbox;let i;i=o?n():e();const s=i[t.projectId];s.tasks=[...s.tasks,t],o?a(i):r(i)}}})();function n(t,e,n,r,a,o,i){this.id=t,this.name=e,this.description=n,this.dueDate=r,this.projectId=a,this.priority=o,this.isProjectInbox=i}function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){return r(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function o(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(r(1,arguments),!a(t)&&"number"!=typeof t)return!1;var e=o(t);return!isNaN(Number(e))}var s={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function c(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var d,u={date:c({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:c({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:c({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},l={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function h(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(c)?f(c,(function(t){return t.test(s)})):g(c,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(d):d,i=n.valueCallback?n.valueCallback(i):i;var u=e.slice(s.length);return{value:i,rest:u}}}function g(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function f(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const p={code:"en-US",formatDistance:function(t,e,n){var r,a=s[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:u,formatRelative:function(t,e,n,r){return l[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(d.matchPattern);if(!n)return null;var r=n[0],a=t.match(d.parsePattern);if(!a)return null;var o=d.valueCallback?d.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:h({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:h({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function w(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function v(t,e){r(2,arguments);var n=o(t).getTime(),a=w(e);return new Date(n+a)}function b(t,e){r(2,arguments);var n=w(e);return v(t,-n)}var y=864e5;function S(t){r(1,arguments);var e=1,n=o(t),a=n.getUTCDay(),i=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function T(t){r(1,arguments);var e=o(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var i=S(a),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var c=S(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=c.getTime()?n:n-1}function C(t){r(1,arguments);var e=T(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=S(n);return a}var k=6048e5;function j(t,e){r(1,arguments);var n=e||{},a=n.locale,i=a&&a.options&&a.options.weekStartsOn,s=null==i?0:w(i),c=null==n.weekStartsOn?s:w(n.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=o(t),u=d.getUTCDay(),l=(u<c?7:0)+u-c;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function M(t,e){r(1,arguments);var n=o(t),a=n.getUTCFullYear(),i=e||{},s=i.locale,c=s&&s.options&&s.options.firstWeekContainsDate,d=null==c?1:w(c),u=null==i.firstWeekContainsDate?d:w(i.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(a+1,0,u),l.setUTCHours(0,0,0,0);var m=j(l,e),h=new Date(0);h.setUTCFullYear(a,0,u),h.setUTCHours(0,0,0,0);var g=j(h,e);return n.getTime()>=m.getTime()?a+1:n.getTime()>=g.getTime()?a:a-1}function L(t,e){r(1,arguments);var n=e||{},a=n.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:w(o),s=null==n.firstWeekContainsDate?i:w(n.firstWeekContainsDate),c=M(t,e),d=new Date(0);d.setUTCFullYear(c,0,s),d.setUTCHours(0,0,0,0);var u=j(d,e);return u}var x=6048e5;function P(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const E=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return P("yy"===e?r%100:r,e.length)},D=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):P(n+1,2)},q=function(t,e){return P(t.getUTCDate(),e.length)},N=function(t,e){return P(t.getUTCHours()%12||12,e.length)},U=function(t,e){return P(t.getUTCHours(),e.length)},O=function(t,e){return P(t.getUTCMinutes(),e.length)},A=function(t,e){return P(t.getUTCSeconds(),e.length)},W=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return P(Math.floor(r*Math.pow(10,n-3)),e.length)};function Y(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+P(o,2)}function I(t,e){return t%60==0?(t>0?"-":"+")+P(Math.abs(t)/60,2):z(t,e)}function z(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+P(Math.floor(a/60),2)+n+P(a%60,2)}const B={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return E(t,e)},Y:function(t,e,n,r){var a=M(t,r),o=a>0?a:1-a;return"YY"===e?P(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):P(o,e.length)},R:function(t,e){return P(T(t),e.length)},u:function(t,e){return P(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return P(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return P(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return D(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return P(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var i=function(t,e){r(1,arguments);var n=o(t),a=j(n,e).getTime()-L(n,e).getTime();return Math.round(a/x)+1}(t,a);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):P(i,e.length)},I:function(t,e,n){var a=function(t){r(1,arguments);var e=o(t),n=S(e).getTime()-C(e).getTime();return Math.round(n/k)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):P(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):q(t,e)},D:function(t,e,n){var a=function(t){r(1,arguments);var e=o(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),i=n-a;return Math.floor(i/y)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):P(a,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return P(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return P(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return P(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return N(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):U(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):P(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):P(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):O(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):A(t,e)},S:function(t,e){return W(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return I(a);case"XXXX":case"XX":return z(a);default:return z(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return I(a);case"xxxx":case"xx":return z(a);default:return z(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Y(a,":");default:return"GMT"+z(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Y(a,":");default:return"GMT"+z(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return P(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return P((r._originalDate||t).getTime(),e.length)}};function H(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function F(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var G={p:F,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return H(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",H(a,e)).replace("{{time}}",F(o,e))}};const Q=G;function J(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var V=["D","DD"],X=["YY","YYYY"];function R(t){return-1!==V.indexOf(t)}function _(t){return-1!==X.indexOf(t)}function $(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var K=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tt=/^'([^]*?)'?$/,et=/''/g,nt=/[a-zA-Z]/;function rt(t,e,n){r(2,arguments);var a=String(e),s=n||{},c=s.locale||p,d=c.options&&c.options.firstWeekContainsDate,u=null==d?1:w(d),l=null==s.firstWeekContainsDate?u:w(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=c.options&&c.options.weekStartsOn,h=null==m?0:w(m),g=null==s.weekStartsOn?h:w(s.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var f=o(t);if(!i(f))throw new RangeError("Invalid time value");var v=J(f),y=b(f,v),S={firstWeekContainsDate:l,weekStartsOn:g,locale:c,_originalDate:f},T=a.match(Z).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Q[e])(t,c.formatLong,S):t})).join("").match(K).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return at(n);var a=B[r];if(a)return!s.useAdditionalWeekYearTokens&&_(n)&&$(n,e,t),!s.useAdditionalDayOfYearTokens&&R(n)&&$(n,e,t),a(y,n,c.localize,S);if(r.match(nt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return T}function at(t){return t.match(tt)[1].replace(et,"'")}const ot=(()=>{const t=document.querySelector(".add-task-button"),r=document.querySelector(".add-task-modal"),a=document.querySelector(".add-task-modal-overlay "),o=document.querySelector("#add-task-form"),i=document.getElementById("task-name-input"),s=document.getElementById("task-description-input"),c=document.querySelector(".due-date-picker"),d=document.querySelector(".project-selector"),u=document.querySelector(".priority-selector"),l=document.querySelector(".selected-priority > svg"),m=document.querySelector(".priority-dropdown-menu"),h=document.querySelectorAll(".priority-dropdown-menu > li"),g=document.querySelector(".add-task-modal .cancel-button"),f=document.querySelector(".add-task-submit-button"),p=()=>r.classList.contains("visible"),w=(t,e)=>{const n=document.createElement("option");return n.value=t,n.text=t,n.dataset.id=e,n.classList.add("project-selection-option"),n},v=t=>{const e=document.querySelector(`.project-selection-option[data-id="${t}"]`);document.body.contains(e)&&e.remove()},b=()=>{m.classList.toggle("visible"),u.classList.toggle("selected")},y=()=>{for(const t of h)t.classList.remove("active-priority")},S=t=>{const e=document.querySelector(".selected-priority > svg");e.parentNode.replaceChild(t,e)},T=()=>f.disabled=!0,C=()=>{r.classList.toggle("visible"),a.classList.toggle("visible"),o.reset(),c.valueAsDate=new Date,T(),m.classList.remove("visible"),u.classList.remove("selected"),(()=>{const t=ct.getSelectedButton().dataset.projectId,e=document.querySelectorAll(".project-selection-option"),n=document.querySelector(".project-selector option[value='inbox']");(e[t]||n).selected="selected"})()},k=()=>{const t=c.value,e=i.value.trim();t&&e?f.disabled=!1:T()};r.addEventListener("transitionend",(()=>{p()?i.focus():(S(l),(()=>{const t=h[3];y(),t.classList.add("active-priority")})())})),t.addEventListener("click",(()=>C())),g.addEventListener("click",(()=>C())),window.addEventListener("keydown",(t=>{"Escape"===t.key&&p()&&C()})),u.addEventListener("click",(()=>b())),a.addEventListener("click",(t=>{const e=t.target.offsetParent;e&&e!==r&&e!==a&&e!==m&&C()})),i.addEventListener("input",(()=>k())),c.addEventListener("input",(()=>k()));for(const t of h)t.addEventListener("click",(()=>{y(),t.classList.add("active-priority");const e=t.firstElementChild.cloneNode(!0);S(e),b()}));return f.addEventListener("click",(()=>{const t=(()=>{let t=d.options[d.selectedIndex].dataset.id;const r=void 0===t;return r&&(t=0),new n(e.getNewTaskId(t,r),i.value.trim(),s.value.trim(),c.value,t,l.dataset.priority,r)})();e.addTaskToProject(t),C()})),c.min=rt(new Date,"yyyy-MM-dd"),{addProjectSelectorOption:t=>{const n=e.getProjects(),r=Object.keys(n).length,a=w(t,r);d.appendChild(a)},loadProjectSelectorOptions:()=>{const t=e.getProjects();for(const e of t){const t=w(e.name,e.id);d.appendChild(t)}},removeAllProjectSelectorOptions:()=>{const t=e.getProjects().length;for(let e=0;e<t;e++)v(e)},removeProjectSelectorOption:v,toggleModal:C,updateProjectSelectorIds:()=>{const t=document.querySelectorAll(".project-selection-option");for(let e=0;e<t.length;e++)t[e].dataset.id=e}}})(),it=(()=>{const t=document.querySelector(".editor"),e=document.querySelector(".home-button"),n=document.querySelector(".sidebar-button-today"),r=()=>new Date,a=t=>rt(t,"E d MMM"),o=()=>{const t=document.querySelector(".current-date-title"),e=r(),n=a(e);t.textContent=n},i=()=>{const e=document.createElement("button"),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=document.createElement("p");r.setAttribute("d","M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"),r.setAttribute("fill","currentColor"),r.setAttribute("fill-rule","evenodd"),e.classList.add("editor-add-task-button"),n.classList.add("editor-add-task-plus-icon"),a.classList.add("editor-add-task-text"),a.textContent="Add task",n.appendChild(r),e.append(n,a),t.append(e)},s=()=>{document.querySelector(".editor-add-task-button").addEventListener("click",(()=>ot.toggleModal()))},c=(e,n)=>{ct.changeTabTitle(n),(()=>{for(;t.firstChild;)t.removeChild(t.lastChild)})(),(()=>{const e=["inbox","today","upcoming"];for(const n of e)t.classList.remove(n)})(),ct.removeSelectedButtonClass(),ct.addSelectedClassToButton(e),(()=>{const e=(()=>{const t=document.createElement("div");return t.classList.add("tab-heading"),t})();t.append(e)})(),(t=>{const e=document.querySelector(".tab-heading"),n=(t=>{const e=document.createElement("h2");return e.innerText=t,e.classList.add("tab-title"),e})(t);e.append(n)})(n);const c=void 0===e.projectId;"Today"===n&&c&&((()=>{const t=document.querySelector(".tab-heading"),e=(()=>{const t=document.createElement("p"),e=r();return t.innerText=a(e),t.classList.add("current-date-title"),t})();t.append(e)})(),o()),i(),s(),(e=>{const n=(t=>{let e;e=t.dataset.projectId?"Project":t.dataset.tabName;const n=document.createElement("div"),r=document.createElement("img"),a=document.createElement("div"),o=document.createElement("h4"),i=document.createElement("p");n.classList.add("empty-state-container"),r.classList.add("empty-state-image"),a.classList.add("empty-state-text"),o.classList.add("empty-state-heading"),i.classList.add("empty-state-body"),r.src={Inbox:"components/images/inbox-empty-state.png",Today:"components/images/today-empty-state.png",Upcoming:"components/images/upcoming-empty-state.png",Project:"components/images/project-empty-state.png"}[e];const s={Inbox:"All clear",Today:"You're all done for the week! #TodoistZero",Upcoming:"Get a clear view of upcoming tasks",Project:"Keep your tasks organized in projects"}[e],c={Inbox:"Looks like everything's organized in the right place.",Today:"Enjoy the rest of your day.",Upcoming:"All upcoming tasks will show up here.",Project:"Group your tasks by goal or area of your life. Drag and drop to rearrange tasks or create sub-tasks."}[e];return o.textContent=s,i.textContent=c,a.append(o,i),n.append(r,a),n})(e);t.append(n)})(e)};return e.addEventListener("click",(()=>c(n,n.dataset.tabName))),(()=>{const t=document.querySelectorAll(".sidebar-button");for(const e of t)e.addEventListener("click",(()=>c(e,e.dataset.tabName)))})(),o(),i(),s(),{addSidebarVisibleClass:()=>t.classList.add("is-sidebar-visible"),removeSidebarVisibleClass:()=>t.classList.remove("is-sidebar-visible"),updateCurrentDateTitle:o,changeContent:c}})(),st=(()=>{const t=document.querySelector(".menu-button > span"),e=()=>document.querySelectorAll(".tooltip");return(()=>{const t=(()=>{const t=e(),n=(()=>{const t=e();let n=[];for(const e of t){const t=e.parentElement;n=[...n,t]}return n})(),r={};for(let e=0;e<t.length;e++){const a=t[e],o=n[e];r[e]={tooltip:a,parentButton:o}}return r})(),n=Object.keys(t).length;for(let e=0;e<n;e++){const n=t[e].tooltip,r=t[e].parentButton;r.addEventListener("mousedown",(()=>{n.classList.remove("visible"),n.classList.contains("clicked")&&n.classList.add("clicked")})),r.addEventListener("mouseover",(()=>{n.classList.contains("clicked")&&n.classList.containes("visible")?n.classList.remove("visible"):n.classList.add("visible")})),r.addEventListener("mouseout",(()=>{n.classList.contains("clicked")&&n.classList.remove("clicked"),n.classList.remove("visible")}))}})(),{changeMenuTooltipTextOpen:()=>t.textContent="Open menu",changeMenuTooltipTextClose:()=>t.textContent="Close menu"}})(),ct=(()=>{const t=document.querySelector(".sidebar"),e=document.querySelector(".sidebar-overlay"),n=document.querySelector(".editor"),r=document.querySelector(".projects-list-container"),a=()=>{t.classList.add("is-visible"),it.addSidebarVisibleClass(),st.changeMenuTooltipTextClose()};return(()=>{const e=document.querySelectorAll(".menu-button");for(const r of e)r.addEventListener("click",(()=>{t.classList.toggle("is-visible"),n.classList.toggle("is-sidebar-visible"),document.querySelector(".sidebar-overlay").classList.toggle("is-visible"),t.classList.contains("is-visible")?st.changeMenuTooltipTextClose():st.changeMenuTooltipTextOpen()}))})(),(()=>{const t=document.querySelector(".sidebar-projects-button"),e=document.querySelector(".sidebar-projects-arrow-icon");t.addEventListener("click",(()=>{e.classList.toggle("expanded"),r.classList.toggle("expanded")}))})(),document.querySelector(".sidebar-today-icon tspan").textContent=("0"+(new Date).getDate()).slice(-2),window.innerWidth>750&&a(),window.addEventListener("resize",(()=>{const n=t.classList.contains("is-visible"),r=e.classList.contains("is-visible"),o=window.innerWidth;r||(n&&o<=750?(t.classList.remove("is-visible"),it.removeSidebarVisibleClass(),st.changeMenuTooltipTextOpen()):!n&&o>750&&a())})),{changeTabTitle:t=>document.title=`${t}: Todoist`,addSelectedClassToButton:t=>t.classList.add("selected"),removeSelectedButtonClass:()=>{const t=document.querySelectorAll(".sidebar-button");for(const e of t)e.classList.contains("selected")&&e.classList.remove("selected")},getSelectedButton:()=>document.querySelector(".sidebar-button.selected"),selectDefaultTab:()=>{const t=document.querySelector(".sidebar-button-inbox"),e=t.dataset.tabName;it.changeContent(t,e)}}})(),dt=(()=>{const t=document.querySelector(".sidebar-button-today"),n=t=>{const n=((t,e)=>{const n=document.createElement("button"),r=document.createElement("span"),a=(()=>{const t=document.createElementNS("http://www.w3.org/2000/svg","svg"),e=document.createElementNS("http://www.w3.org/2000/svg","path"),n=document.createElementNS("http://www.w3.org/2000/svg","path"),r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=document.createElementNS("http://www.w3.org/2000/svg","g"),o=document.createElementNS("http://www.w3.org/2000/svg","rect");return t.classList.add("delete-project-icon"),a.setAttribute("fill","none"),a.setAttribute("fill-rule","evenodd"),e.setAttribute("d","M0 0h24v24H0z"),o.setAttribute("x","5"),o.setAttribute("y","6"),o.setAttribute("fill","currentColor"),o.setAttribute("rx",".5"),n.setAttribute("fill","currentColor"),n.setAttribute("d","M10 9h1v8h-1V9zm3 0h1v8h-1V9z"),r.setAttribute("stroke","currentColor"),r.setAttribute("d","M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"),a.append(e,o,n,r),t.append(a),t})();return n.classList.add("project-button","sidebar-button","tab-link"),r.classList.add("project-name"),n.dataset.tabName=e,r.textContent=e,n.append(t,r,a),n})((()=>{const t=document.createElementNS("http://www.w3.org/2000/svg","svg"),e=document.createElementNS("http://www.w3.org/2000/svg","path");return t.classList.add("project-icon"),t.setAttribute("viewBox","0 0 24 24"),e.setAttribute("d","M12 7a5 5 0 110 10 5 5 0 010-10z"),e.setAttribute("fill","currentColor"),t.appendChild(e),t})(),t);(t=>{const e=document.querySelector("#projects-list"),n=(t=>{const e=document.createElement("li");return e.appendChild(t),e})(t);e.appendChild(n)})(n),(t=>{const e=document.querySelectorAll(".project-button").length-1;t.dataset.projectId=e})(n),it.changeContent(n,t),(t=>{const n=t.dataset.tabName,r=t.childNodes[2];t.addEventListener("click",(e=>e.target===t&&it.changeContent(e.target,n))),r.addEventListener("click",(()=>{ct.selectDefaultTab();const n=t.dataset.projectId;console.log(n),(t=>{t.parentNode.remove()})(t),e.removeProject(n),ot.removeProjectSelectorOption(n),(()=>{const t=document.querySelectorAll(".project-button");for(let e=0;e<t.length;e++)t[e].dataset.projectId=e})(),e.updateProjectIds(),ot.updateProjectSelectorIds()}))})(n)};return(()=>{const t=e.getProjects();for(let e=0;e<t.length;e++){const r=t[e].name;n(r)}})(),it.changeContent(t,t.dataset.tabName),{addProjectButton:n}})();(()=>{const n=document.querySelector(".add-project-button"),r=document.querySelector(".add-project-modal"),a=document.querySelector("#add-project-form"),o=document.querySelector("#project_name"),i=document.querySelector(".add-project-modal .cancel-button"),s=document.querySelector(".add-project-submit-button"),c=document.querySelector(".add-project-modal-overlay "),d=()=>s.disabled=!0,u=()=>{c.classList.toggle("visible"),r.classList.toggle("visible"),a.reset(),d(),o.focus()},l=()=>{const n=o.value,r=new t(e.getNewProjectId(),n,[]);e.addProject(r),dt.addProjectButton(n),ot.addProjectSelectorOption(n),u()};n.addEventListener("mouseup",(()=>u())),i.addEventListener("click",(()=>u())),o.addEventListener("input",(()=>{o.value.replace(/\s/g,"")?s.disabled=!1:d()})),s.addEventListener("click",(()=>l())),a.addEventListener("submit",(t=>{t.preventDefault(),l()}))})()})();