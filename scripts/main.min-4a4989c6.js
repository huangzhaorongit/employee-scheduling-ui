/**
 * An UI component for Employee Scheduling application.
 * @version v0.0.0 - 10/01/2015
 * @author Martin Micunda
 * @copyright 2015(c) Martin Micunda
 * @license GNU GPL v3 license, https://github.com/martinmicunda/employee-scheduling-ui/master/LICENSE
 */
!function(a){"use strict";function b(a){return{configurable:!0,enumerable:!1,value:a,writable:!0}}function c(){return"__$"+Math.floor(1e9*Math.random())+"$"+ ++S+"$__"}function d(a){return X[a]}function e(){var a=c();return X[a]=!0,a}function f(a){return"object"==typeof a&&a instanceof i}function g(a){return f(a)?"symbol":typeof a}function h(a){var b=new i(a);if(!(this instanceof h))return b;throw new TypeError("Symbol cannot be new'ed")}function i(a){var b=c();I(this,V,{value:this}),I(this,T,{value:b}),I(this,U,{value:a}),k(this),W[b]=this}function j(a){var b=a[Y];return b&&b.self===a?b:Q(a)?($.hash.value=_++,$.self.value=a,Z.value=G(null,$),I(a,Y,Z),Z.value):void 0}function k(a){return j(a),J.apply(this,arguments)}function l(a){return j(a),O.apply(this,arguments)}function m(a){return j(a),P.apply(this,arguments)}function n(a){return W[a]||X[a]}function o(a){return f(a)?a[T]:a}function p(a){for(var b=[],c=0;c<a.length;c++)n(a[c])||b.push(a[c]);return b}function q(a){return p(L(a))}function r(a){return p(M(a))}function s(a){for(var b=[],c=L(a),d=0;d<c.length;d++){var e=W[c[d]];e&&b.push(e)}return b}function t(a,b){return K(a,o(b))}function u(a){return N.call(this,o(a))}function v(b){return a.traceur&&a.traceur.options[b]}function w(a,b,c){return f(b)&&(b=b[T]),I(a,b,c),a}function x(a){I(a,"defineProperty",{value:w}),I(a,"getOwnPropertyNames",{value:q}),I(a,"getOwnPropertyDescriptor",{value:t}),I(a.prototype,"hasOwnProperty",{value:u}),I(a,"freeze",{value:k}),I(a,"preventExtensions",{value:l}),I(a,"seal",{value:m}),I(a,"keys",{value:r})}function y(a){for(var b=1;b<arguments.length;b++)for(var c=L(arguments[b]),d=0;d<c.length;d++){var e=c[d];n(e)||!function(b,c){I(a,c,{get:function(){return b[c]},enumerable:!0})}(arguments[b],c[d])}return a}function z(a){return null!=a&&("object"==typeof a||"function"==typeof a)}function A(a){if(null==a)throw F();return E(a)}function B(a){if(null==a)throw new TypeError("Value cannot be converted to an Object");return a}function C(a,b){a.Symbol||(a.Symbol=b,Object.getOwnPropertySymbols=s),a.Symbol.iterator||(a.Symbol.iterator=b("Symbol.iterator"))}function D(a){C(a,h),a.Reflect=a.Reflect||{},a.Reflect.global=a.Reflect.global||a,x(a.Object)}if(!a.$traceurRuntime){var E=Object,F=TypeError,G=E.create,H=E.defineProperties,I=E.defineProperty,J=E.freeze,K=E.getOwnPropertyDescriptor,L=E.getOwnPropertyNames,M=E.keys,N=E.prototype.hasOwnProperty,O=(E.prototype.toString,Object.preventExtensions),P=Object.seal,Q=Object.isExtensible,R=b,S=0,T=c(),U=c(),V=c(),W=G(null),X=G(null);I(h.prototype,"constructor",b(h)),I(h.prototype,"toString",R(function(){var a=this[V];if(!v("symbols"))return a[T];if(!a)throw TypeError("Conversion from symbol to string");var b=a[U];return void 0===b&&(b=""),"Symbol("+b+")"})),I(h.prototype,"valueOf",R(function(){var a=this[V];if(!a)throw TypeError("Conversion from symbol to string");return v("symbols")?a:a[T]})),I(i.prototype,"constructor",b(h)),I(i.prototype,"toString",{value:h.prototype.toString,enumerable:!1}),I(i.prototype,"valueOf",{value:h.prototype.valueOf,enumerable:!1});var Y=e(),Z={value:void 0},$={hash:{value:void 0},self:{value:void 0}},_=0;k(i.prototype),D(a),a.$traceurRuntime={checkObjectCoercible:B,createPrivateName:e,defineProperties:H,defineProperty:I,exportStar:y,getOwnHashObject:j,getOwnPropertyDescriptor:K,getOwnPropertyNames:L,isObject:z,isPrivateName:d,isSymbolString:n,keys:M,setupGlobals:D,toObject:A,toProperty:o,"typeof":g}}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this),function(){"use strict";function a(a,c){function d(a){return"/"===a.slice(-1)}function e(a){return"/"===a[0]}function f(a){return"."===a[0]}return b=b||"undefined"!=typeof require&&require("path"),d(c)||e(c)?void 0:require(f(c)?b.resolve(b.dirname(a),c):c)}var b;$traceurRuntime.require=a}(),function(){"use strict";function a(){for(var a,b=[],c=0,d=0;d<arguments.length;d++){var e=$traceurRuntime.checkObjectCoercible(arguments[d]);if("function"!=typeof e[$traceurRuntime.toProperty(Symbol.iterator)])throw new TypeError("Cannot spread non-iterable object.");for(var f=e[$traceurRuntime.toProperty(Symbol.iterator)]();!(a=f.next()).done;)b[c++]=a.value}return b}$traceurRuntime.spread=a}(),function(){"use strict";function a(a,b){var c=p(a);do{var d=o(c,b);if(d)return d;c=p(c)}while(c);return void 0}function b(a){return a.__proto__}function c(a,b,c,e){return d(a,b,c).apply(a,e)}function d(b,c,d){var e=a(c,d);return e?e.get?e.get.call(b):e.value:void 0}function e(b,c,d,e){var f=a(c,d);if(f&&f.set)return f.set.call(b,e),e;throw k("super has no setter '"+d+"'.")}function f(a){for(var b={},c=r(a),d=0;d<c.length;d++){var e=c[d];b[e]=o(a,e)}for(var f=s(a),d=0;d<f.length;d++){var g=f[d];b[$traceurRuntime.toProperty(g)]=o(a,$traceurRuntime.toProperty(g))}return b}function g(a,b,c,d){return n(b,"constructor",{value:a,configurable:!0,enumerable:!1,writable:!0}),arguments.length>3?("function"==typeof d&&(a.__proto__=d),a.prototype=l(h(d),f(b))):a.prototype=b,n(a,"prototype",{configurable:!1,writable:!1}),m(a,f(c))}function h(a){if("function"==typeof a){var b=a.prototype;if(j(b)===b||null===b)return a.prototype;throw new k("super prototype must be an Object or null")}if(null===a)return null;throw new k("Super expression must either be null or a function, not "+typeof a+".")}function i(a,b,d){null!==p(b)&&c(a,b,"constructor",d)}var j=Object,k=TypeError,l=j.create,m=$traceurRuntime.defineProperties,n=$traceurRuntime.defineProperty,o=$traceurRuntime.getOwnPropertyDescriptor,p=($traceurRuntime.getOwnPropertyNames,Object.getPrototypeOf),q=Object,r=q.getOwnPropertyNames,s=q.getOwnPropertySymbols;$traceurRuntime.createClass=g,$traceurRuntime.defaultSuperCall=i,$traceurRuntime.superCall=c,$traceurRuntime.superConstructor=b,$traceurRuntime.superGet=d,$traceurRuntime.superSet=e}(),function(){"use strict";function a(a){return{configurable:!0,enumerable:!1,value:a,writable:!0}}function b(a){return new Error("Traceur compiler bug: invalid state in state machine: "+a)}function c(){this.state=0,this.GState=r,this.storedException=void 0,this.finallyFallThrough=void 0,this.sent_=void 0,this.returnValue=void 0,this.tryStack_=[]}function d(a,b,c,d){switch(a.GState){case s:throw new Error('"'+c+'" on executing generator');case u:if("next"==c)return{value:void 0,done:!0};throw d;case r:if("throw"===c)throw a.GState=u,d;if(void 0!==d)throw q("Sent value to newborn generator");case t:a.GState=s,a.action=c,a.sent=d;var e=b(a),f=e===a;return f&&(e=a.returnValue),a.GState=f?u:t,{value:e,done:f}}}function e(){}function f(){}function g(a,b,d){var e=k(a,d),f=new c,g=p(b.prototype);return g[x]=f,g[y]=e,g}function h(a){return a.prototype=p(f.prototype),a.__proto__=f,a}function i(){c.call(this),this.err=void 0;var a=this;a.result=new Promise(function(b,c){a.resolve=b,a.reject=c})}function j(a,b){var c=k(a,b),d=new i;return d.createCallback=function(a){return function(b){d.state=a,d.value=b,c(d)}},d.errback=function(a){l(d,a),c(d)},c(d),d.result}function k(a,b){return function(c){for(;;)try{return a.call(b,c)}catch(d){l(c,d)}}}function l(a,b){a.storedException=b;var c=a.tryStack_[a.tryStack_.length-1];return c?(a.state=void 0!==c.catch?c.catch:c.finally,void(void 0!==c.finallyFallThrough&&(a.finallyFallThrough=c.finallyFallThrough))):void a.handleException(b)}if("object"!=typeof $traceurRuntime)throw new Error("traceur runtime not found.");var m=$traceurRuntime.createPrivateName,n=$traceurRuntime.defineProperties,o=$traceurRuntime.defineProperty,p=Object.create,q=TypeError,r=0,s=1,t=2,u=3,v=-2,w=-3;c.prototype={pushTry:function(a,b){if(null!==b){for(var c=null,d=this.tryStack_.length-1;d>=0;d--)if(void 0!==this.tryStack_[d].catch){c=this.tryStack_[d].catch;break}null===c&&(c=w),this.tryStack_.push({"finally":b,finallyFallThrough:c})}null!==a&&this.tryStack_.push({"catch":a})},popTry:function(){this.tryStack_.pop()},get sent(){return this.maybeThrow(),this.sent_},set sent(a){this.sent_=a},get sentIgnoreThrow(){return this.sent_},maybeThrow:function(){if("throw"===this.action)throw this.action="next",this.sent_},end:function(){switch(this.state){case v:return this;case w:throw this.storedException;default:throw b(this.state)}},handleException:function(a){throw this.GState=u,this.state=v,a}};var x=m(),y=m();e.prototype=f,o(f,"constructor",a(e)),f.prototype={constructor:f,next:function(a){return d(this[x],this[y],"next",a)},"throw":function(a){return d(this[x],this[y],"throw",a)}},n(f.prototype,{constructor:{enumerable:!1},next:{enumerable:!1},"throw":{enumerable:!1}}),Object.defineProperty(f.prototype,Symbol.iterator,a(function(){return this})),i.prototype=p(c.prototype),i.prototype.end=function(){switch(this.state){case v:this.resolve(this.returnValue);break;case w:this.reject(this.storedException);break;default:this.reject(b(this.state))}},i.prototype.handleException=function(){this.state=w},$traceurRuntime.asyncWrap=j,$traceurRuntime.initGeneratorFunction=h,$traceurRuntime.createGeneratorInstance=g}(),function(){function a(a,b,c,d,e,f,g){var h=[];return a&&h.push(a,":"),c&&(h.push("//"),b&&h.push(b,"@"),h.push(c),d&&h.push(":",d)),e&&h.push(e),f&&h.push("?",f),g&&h.push("#",g),h.join("")}function b(a){return a.match(h)}function c(a){if("/"===a)return"/";for(var b="/"===a[0]?"/":"",c="/"===a.slice(-1)?"/":"",d=a.split("/"),e=[],f=0,g=0;g<d.length;g++){var h=d[g];switch(h){case"":case".":break;case"..":e.length?e.pop():f++;break;default:e.push(h)}}if(!b){for(;f-->0;)e.unshift("..");0===e.length&&e.push(".")}return b+e.join("/")+c}function d(b){var d=b[i.PATH]||"";return d=c(d),b[i.PATH]=d,a(b[i.SCHEME],b[i.USER_INFO],b[i.DOMAIN],b[i.PORT],b[i.PATH],b[i.QUERY_DATA],b[i.FRAGMENT])}function e(a){var c=b(a);return d(c)}function f(a,c){var e=b(c),f=b(a);if(e[i.SCHEME])return d(e);e[i.SCHEME]=f[i.SCHEME];for(var g=i.SCHEME;g<=i.PORT;g++)e[g]||(e[g]=f[g]);if("/"==e[i.PATH][0])return d(e);var h=f[i.PATH],j=h.lastIndexOf("/");return h=h.slice(0,j+1)+e[i.PATH],e[i.PATH]=h,d(e)}function g(a){if(!a)return!1;if("/"===a[0])return!0;var c=b(a);return c[i.SCHEME]?!0:!1}var h=new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),i={SCHEME:1,USER_INFO:2,DOMAIN:3,PORT:4,PATH:5,QUERY_DATA:6,FRAGMENT:7};$traceurRuntime.canonicalizeUrl=e,$traceurRuntime.isAbsolute=g,$traceurRuntime.removeDotSegments=c,$traceurRuntime.resolveUrl=f}(),function(){"use strict";function a(a){for(var b=[],e=1;e<arguments.length;e++)b[e-1]=arguments[e];var f=d,g=$traceurRuntime.getOwnHashObject(a).hash;f[g]||(f[g]=Object.create(null)),f=f[g];for(var h=0;h<b.length-1;h++)g=$traceurRuntime.getOwnHashObject(b[h]).hash,f[g]||(f[g]=Object.create(null)),f=f[g];var i=b[b.length-1];return g=$traceurRuntime.getOwnHashObject(i).hash,f[g]||(f[g]=new c(a,b)),f[g]}var b={any:{name:"any"},"boolean":{name:"boolean"},number:{name:"number"},string:{name:"string"},symbol:{name:"symbol"},"void":{name:"void"}},c=function(a,b){this.type=a,this.argumentTypes=b};$traceurRuntime.createClass(c,{},{});var d=Object.create(null);$traceurRuntime.GenericType=c,$traceurRuntime.genericType=a,$traceurRuntime.type=b}(),function(a){"use strict";function b(a,b){var c=[],d=b-3;0>d&&(d=0);for(var e=d;b>e;e++)c.push(a[e]);return c}function c(a,b){var c=b+1;c>a.length-1&&(c=a.length-1);for(var d=[],e=b;c>=e;e++)d.push(a[e]);return d}function d(a){for(var b="",c=0;a-1>c;c++)b+="-";return b}function e(a){if(a){var b=t.normalize(a);return l[b]}}function f(a){var b=arguments[1],c=Object.create(null);return Object.getOwnPropertyNames(a).forEach(function(d){var e,f;if(b===s){var g=Object.getOwnPropertyDescriptor(a,d);g.get&&(e=g.get)}e||(f=a[d],e=function(){return f}),Object.defineProperty(c,d,{get:e,enumerable:!0})}),Object.preventExtensions(c),c}var g,h=$traceurRuntime,i=h.canonicalizeUrl,j=h.resolveUrl,k=h.isAbsolute,l=Object.create(null);g=a.location&&a.location.href?j(a.location.href,"./"):"";var m=function(a,b){this.url=a,this.value_=b};$traceurRuntime.createClass(m,{},{});var n=function(a,b){this.message=this.constructor.name+": "+this.stripCause(b)+" in "+a,this.stack=b instanceof o||!b.stack?"":this.stripStack(b.stack)},o=n;$traceurRuntime.createClass(n,{stripError:function(a){return a.replace(/.*Error:/,this.constructor.name+":")},stripCause:function(a){return a?a.message?this.stripError(a.message):a+"":""},loadedBy:function(a){this.stack+="\n loaded by "+a},stripStack:function(a){var b=[];return a.split("\n").some(function(a){return/UncoatedModuleInstantiator/.test(a)?!0:void b.push(a)}),b[0]=this.stripError(b[0]),b.join("\n")}},{},Error);var p=function(a,b){$traceurRuntime.superConstructor(q).call(this,a,null),this.func=b},q=p;$traceurRuntime.createClass(p,{getUncoatedModule:function(){if(this.value_)return this.value_;try{var e;return void 0!==typeof $traceurRuntime&&(e=$traceurRuntime.require.bind(null,this.url)),this.value_=this.func.call(a,e)}catch(f){if(f instanceof n)throw f.loadedBy(this.url),f;if(f.stack){var g=this.func.toString().split("\n"),h=[];f.stack.split("\n").some(function(a){if(a.indexOf("UncoatedModuleInstantiator.getUncoatedModule")>0)return!0;var e=/(at\s[^\s]*\s).*>:(\d*):(\d*)\)/.exec(a);if(e){var f=parseInt(e[2],10);h=h.concat(b(g,f)),h.push(d(e[3])+"^"),h=h.concat(c(g,f)),h.push("= = = = = = = = =")}else h.push(a)}),f.stack=h.join("\n")}throw new n(this.url,f)}}},{},m);var r=Object.create(null),s={},t={normalize:function(a,b){if("string"!=typeof a)throw new TypeError("module name must be a string, not "+typeof a);if(k(a))return i(a);if(/[^\.]\/\.\.\//.test(a))throw new Error("module name embeds /../: "+a);return"."===a[0]&&b?j(b,a):i(a)},get:function(a){var b=e(a);if(!b)return void 0;var c=r[b.url];return c?c:(c=f(b.getUncoatedModule(),s),r[b.url]=c)},set:function(a,b){a=String(a),l[a]=new p(a,function(){return b}),r[a]=b},get baseURL(){return g},set baseURL(a){g=String(a)},registerModule:function(a,b,c){var d=t.normalize(a);if(l[d])throw new Error("duplicate module named "+d);l[d]=new p(d,c)},bundleStore:Object.create(null),register:function(a,b,c){b&&(b.length||c.length)?this.bundleStore[a]={deps:b,execute:function(){var a=arguments,d={};b.forEach(function(b,c){return d[b]=a[c]});var e=c.call(this,d);return e.execute.call(this),e.exports}}:this.registerModule(a,b,c)},getAnonymousModule:function(b){return new f(b.call(a),s)},getForTesting:function(a){var b=this;return this.testingPrefix_||Object.keys(r).some(function(a){var c=/(traceur@[^\/]*\/)/.exec(a);return c?(b.testingPrefix_=c[1],!0):void 0}),this.get(this.testingPrefix_+a)}},u=new f({ModuleStore:t});t.set("@traceur/src/runtime/ModuleStore",u),t.set("@traceur/src/runtime/ModuleStore.js",u);var v=$traceurRuntime.setupGlobals;$traceurRuntime.setupGlobals=function(a){v(a)},$traceurRuntime.ModuleStore=t,a.System={register:t.register.bind(t),registerModule:t.registerModule.bind(t),get:t.get,set:t.set,normalize:t.normalize},$traceurRuntime.getModuleImpl=function(a){var b=e(a);return b&&b.getUncoatedModule()}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js",[],function(){"use strict";function a(a){return a>>>0}function b(a){return a&&("object"==typeof a||"function"==typeof a)}function c(a){return"function"==typeof a}function d(a){return"number"==typeof a}function e(a){return a=+a,u(a)?0:0!==a&&t(a)?a>0?s(a):r(a):a}function f(a){var b=e(a);return 0>b?0:w(b,y)}function g(a){return b(a)?a[Symbol.iterator]:void 0}function h(a){return c(a)}function i(a,b){return{value:a,done:b}}function j(a,b,c){b in a||Object.defineProperty(a,b,c)}function k(a,b,c){j(a,b,{value:c,configurable:!0,enumerable:!1,writable:!0})}function l(a,b,c){j(a,b,{value:c,configurable:!1,enumerable:!1,writable:!1})}function m(a,b){for(var c=0;c<b.length;c+=2){var d=b[c],e=b[c+1];k(a,d,e)}}function n(a,b){for(var c=0;c<b.length;c+=2){var d=b[c],e=b[c+1];l(a,d,e)}}function o(a,b,c){c&&c.iterator&&!a[c.iterator]&&(a["@@iterator"]&&(b=a["@@iterator"]),Object.defineProperty(a,c.iterator,{value:b,configurable:!0,enumerable:!1,writable:!0}))}function p(a){z.push(a)}function q(a){z.forEach(function(b){return b(a)})}var r=Math.ceil,s=Math.floor,t=isFinite,u=isNaN,v=Math.pow,w=Math.min,x=$traceurRuntime.toObject,y=v(2,53)-1,z=[];return{get toObject(){return x},get toUint32(){return a},get isObject(){return b},get isCallable(){return c},get isNumber(){return d},get toInteger(){return e},get toLength(){return f},get checkIterable(){return g},get isConstructor(){return h},get createIteratorResultObject(){return i},get maybeDefine(){return j},get maybeDefineMethod(){return k},get maybeDefineConst(){return l},get maybeAddFunctions(){return m},get maybeAddConsts(){return n},get maybeAddIterator(){return o},get registerPolyfill(){return p},get polyfillAll(){return q}}}),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js",[],function(){"use strict";function a(a,b){if(e(b)){var c=h(b);return c&&a.objectIndex_[c.hash]}return"string"==typeof b?a.stringIndex_[b]:a.primitiveIndex_[b]}function b(a){a.entries_=[],a.objectIndex_=Object.create(null),a.stringIndex_=Object.create(null),a.primitiveIndex_=Object.create(null),a.deletedCount_=0}function c(a){var b=a,c=b.Object,d=b.Symbol;a.Map||(a.Map=k);var e=a.Map.prototype;void 0===e.entries&&(a.Map=k),e.entries&&(f(e,e.entries,d),f(c.getPrototypeOf((new a.Map).entries()),function(){return this},d))}var d=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),e=d.isObject,f=d.maybeAddIterator,g=d.registerPolyfill,h=$traceurRuntime.getOwnHashObject,i=Object.prototype.hasOwnProperty,j={},k=function(){var a=arguments[0];if(!e(this))throw new TypeError("Map called on incompatible type");if(i.call(this,"entries_"))throw new TypeError("Map can not be reentrantly initialised");if(b(this),null!==a&&void 0!==a)for(var c,d=a[$traceurRuntime.toProperty(Symbol.iterator)]();!(c=d.next()).done;){var f=c.value,g=f[0],h=f[1];this.set(g,h)}};return $traceurRuntime.createClass(k,{get size(){return this.entries_.length/2-this.deletedCount_},get:function(b){var c=a(this,b);return void 0!==c?this.entries_[c+1]:void 0},set:function(b,c){var d=e(b),f="string"==typeof b,g=a(this,b);if(void 0!==g)this.entries_[g+1]=c;else if(g=this.entries_.length,this.entries_[g]=b,this.entries_[g+1]=c,d){var i=h(b),j=i.hash;this.objectIndex_[j]=g}else f?this.stringIndex_[b]=g:this.primitiveIndex_[b]=g;return this},has:function(b){return void 0!==a(this,b)},"delete":function(a){var b,c,d=e(a),f="string"==typeof a;if(d){var g=h(a);g&&(b=this.objectIndex_[c=g.hash],delete this.objectIndex_[c])}else f?(b=this.stringIndex_[a],delete this.stringIndex_[a]):(b=this.primitiveIndex_[a],delete this.primitiveIndex_[a]);return void 0!==b?(this.entries_[b]=j,this.entries_[b+1]=void 0,this.deletedCount_++,!0):!1},clear:function(){b(this)},forEach:function(a){for(var b=arguments[1],c=0;c<this.entries_.length;c+=2){var d=this.entries_[c],e=this.entries_[c+1];d!==j&&a.call(b,e,d,this)}},entries:$traceurRuntime.initGeneratorFunction(function l(){var a,b,c;return $traceurRuntime.createGeneratorInstance(function(d){for(;;)switch(d.state){case 0:a=0,d.state=12;break;case 12:d.state=a<this.entries_.length?8:-2;break;case 4:a+=2,d.state=12;break;case 8:b=this.entries_[a],c=this.entries_[a+1],d.state=9;break;case 9:d.state=b===j?4:6;break;case 6:return d.state=2,[b,c];case 2:d.maybeThrow(),d.state=4;break;default:return d.end()}},l,this)}),keys:$traceurRuntime.initGeneratorFunction(function m(){var a,b,c;return $traceurRuntime.createGeneratorInstance(function(d){for(;;)switch(d.state){case 0:a=0,d.state=12;break;case 12:d.state=a<this.entries_.length?8:-2;break;case 4:a+=2,d.state=12;break;case 8:b=this.entries_[a],c=this.entries_[a+1],d.state=9;break;case 9:d.state=b===j?4:6;break;case 6:return d.state=2,b;case 2:d.maybeThrow(),d.state=4;break;default:return d.end()}},m,this)}),values:$traceurRuntime.initGeneratorFunction(function n(){var a,b,c;return $traceurRuntime.createGeneratorInstance(function(d){for(;;)switch(d.state){case 0:a=0,d.state=12;break;case 12:d.state=a<this.entries_.length?8:-2;break;case 4:a+=2,d.state=12;break;case 8:b=this.entries_[a],c=this.entries_[a+1],d.state=9;break;case 9:d.state=b===j?4:6;break;case 6:return d.state=2,c;case 2:d.maybeThrow(),d.state=4;break;default:return d.end()}},n,this)})},{}),Object.defineProperty(k.prototype,Symbol.iterator,{configurable:!0,writable:!0,value:k.prototype.entries}),g(c),{get Map(){return k},get polyfillMap(){return c}}}),System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js"),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js",[],function(){"use strict";function a(a){a.map_=new g}function b(a){var b=a,c=b.Object,d=b.Symbol;a.Set||(a.Set=i);var f=a.Set.prototype;f.values&&(e(f,f.values,d),e(c.getPrototypeOf((new a.Set).values()),function(){return this},d))}var c=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),d=c.isObject,e=c.maybeAddIterator,f=c.registerPolyfill,g=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Map.js").Map,h=($traceurRuntime.getOwnHashObject,Object.prototype.hasOwnProperty),i=function(){var b=arguments[0];if(!d(this))throw new TypeError("Set called on incompatible type");if(h.call(this,"map_"))throw new TypeError("Set can not be reentrantly initialised");if(a(this),null!==b&&void 0!==b)for(var c,e=b[$traceurRuntime.toProperty(Symbol.iterator)]();!(c=e.next()).done;){var f=c.value;this.add(f)}};return $traceurRuntime.createClass(i,{get size(){return this.map_.size},has:function(a){return this.map_.has(a)},add:function(a){return this.map_.set(a,a),this},"delete":function(a){return this.map_.delete(a)},clear:function(){return this.map_.clear()},forEach:function(a){var b=arguments[1],c=this;return this.map_.forEach(function(d,e){a.call(b,e,e,c)})},values:$traceurRuntime.initGeneratorFunction(function j(){var a,b;return $traceurRuntime.createGeneratorInstance(function(c){for(;;)switch(c.state){case 0:a=this.map_.keys()[Symbol.iterator](),c.sent=void 0,c.action="next",c.state=12;break;case 12:b=a[c.action](c.sentIgnoreThrow),c.state=9;break;case 9:c.state=b.done?3:2;break;case 3:c.sent=b.value,c.state=-2;break;case 2:return c.state=12,b.value;default:return c.end()}},j,this)}),entries:$traceurRuntime.initGeneratorFunction(function k(){var a,b;return $traceurRuntime.createGeneratorInstance(function(c){for(;;)switch(c.state){case 0:a=this.map_.entries()[Symbol.iterator](),c.sent=void 0,c.action="next",c.state=12;break;case 12:b=a[c.action](c.sentIgnoreThrow),c.state=9;break;case 9:c.state=b.done?3:2;break;case 3:c.sent=b.value,c.state=-2;break;case 2:return c.state=12,b.value;default:return c.end()}},k,this)})},{}),Object.defineProperty(i.prototype,Symbol.iterator,{configurable:!0,writable:!0,value:i.prototype.values}),Object.defineProperty(i.prototype,"keys",{configurable:!0,writable:!0,value:i.prototype.values}),f(b),{get Set(){return i},get polyfillSet(){return b}}}),System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Set.js"),System.registerModule("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js",[],function(){"use strict";function a(a,b){m[h]=a,m[h+1]=b,h+=2,2===h&&g()}function b(){return function(){process.nextTick(f)}}function c(){var a=0,b=new k(f),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function d(){var a=new MessageChannel;return a.port1.onmessage=f,function(){a.port2.postMessage(0)}}function e(){return function(){setTimeout(f,1)}}function f(){for(var a=0;h>a;a+=2){var b=m[a],c=m[a+1];b(c),m[a]=void 0,m[a+1]=void 0}h=0}var g,h=0,i=a,j="undefined"!=typeof window?window:{},k=j.MutationObserver||j.WebKitMutationObserver,l="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,m=new Array(1e3);return g="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?b():k?c():l?d():e(),{get default(){return i}}}),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js",[],function(){"use strict";function a(a){return a&&"object"==typeof a&&void 0!==a.status_}function b(a){return a}function c(a){throw a}function d(a){var d=void 0!==arguments[1]?arguments[1]:b,f=void 0!==arguments[2]?arguments[2]:c,g=e(a.constructor);switch(a.status_){case void 0:throw TypeError;case 0:a.onResolve_.push(d,g),a.onReject_.push(f,g);break;case 1:k(a.value_,[d,g]);break;case-1:k(a.value_,[f,g])}return g.promise}function e(a){if(this===t){var b=g(new t(r));return{promise:b,resolve:function(a){h(b,a)},reject:function(a){i(b,a)}}}var c={};return c.promise=new a(function(a,b){c.resolve=a,c.reject=b}),c}function f(a,b,c,d,e){return a.status_=b,a.value_=c,a.onResolve_=d,a.onReject_=e,a}function g(a){return f(a,0,void 0,[],[])}function h(a,b){j(a,1,b,a.onResolve_)}function i(a,b){j(a,-1,b,a.onReject_)}function j(a,b,c,d){0===a.status_&&(k(c,d),f(a,b,c))}function k(a,b){p(function(){for(var c=0;c<b.length;c+=2)l(a,b[c],b[c+1])})}function l(b,c,e){try{var f=c(b);if(f===e.promise)throw new TypeError;a(f)?d(f,e.resolve,e.reject):e.resolve(f)}catch(g){try{e.reject(g)}catch(g){}}}function m(a){return a&&("object"==typeof a||"function"==typeof a)}function n(b,c){if(!a(c)&&m(c)){var d;try{d=c.then}catch(f){var g=u.call(b,f);return c[v]=g,g}if("function"==typeof d){var h=c[v];if(h)return h;var i=e(b);c[v]=i.promise;try{d.call(c,i.resolve,i.reject)}catch(f){i.reject(f)}return i.promise}}return c}function o(a){a.Promise||(a.Promise=s)}var p=System.get("traceur-runtime@0.0.79/node_modules/rsvp/lib/rsvp/asap.js").default,q=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").registerPolyfill,r={},s=function(a){if(a!==r){if("function"!=typeof a)throw new TypeError;var b=g(this);try{a(function(a){h(b,a)},function(a){i(b,a)})}catch(c){i(b,c)}}};$traceurRuntime.createClass(s,{"catch":function(a){return this.then(void 0,a)},then:function(e,f){"function"!=typeof e&&(e=b),"function"!=typeof f&&(f=c);var g=this,h=this.constructor;return d(this,function(b){return b=n(h,b),b===g?f(new TypeError):a(b)?b.then(e,f):e(b)},f)}},{resolve:function(b){return this===t?a(b)?b:f(new t(r),1,b):new this(function(a){a(b)})},reject:function(a){return this===t?f(new t(r),-1,a):new this(function(b,c){c(a)})},all:function(a){var b=e(this),c=[];try{var d=a.length;if(0===d)b.resolve(c);else for(var f=0;f<a.length;f++)this.resolve(a[f]).then(function(a,e){c[a]=e,0===--d&&b.resolve(c)}.bind(void 0,f),function(a){b.reject(a)})}catch(g){b.reject(g)}return b.promise},race:function(a){var b=e(this);try{for(var c=0;c<a.length;c++)this.resolve(a[c]).then(function(a){b.resolve(a)},function(a){b.reject(a)})}catch(d){b.reject(d)}return b.promise}});var t=s,u=t.reject,v="@@thenable";return q(o),{get Promise(){return s},get polyfillPromise(){return o}}}),System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Promise.js"),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js",[],function(){"use strict";function a(a){var b=String(a),c=Object.create(j.prototype);return c[f(h)]=b,c[f(i)]=0,c}var b,c=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),d=c.createIteratorResultObject,e=c.isObject,f=$traceurRuntime.toProperty,g=Object.prototype.hasOwnProperty,h=Symbol("iteratedString"),i=Symbol("stringIteratorNextIndex"),j=function(){};return $traceurRuntime.createClass(j,(b={},Object.defineProperty(b,"next",{value:function(){var a=this;if(!e(a)||!g.call(a,h))throw new TypeError("this must be a StringIterator object");var b=a[f(h)];if(void 0===b)return d(void 0,!0);var c=a[f(i)],j=b.length;if(c>=j)return a[f(h)]=void 0,d(void 0,!0);var k,l=b.charCodeAt(c);if(55296>l||l>56319||c+1===j)k=String.fromCharCode(l);else{var m=b.charCodeAt(c+1);k=56320>m||m>57343?String.fromCharCode(l):String.fromCharCode(l)+String.fromCharCode(m)}return a[f(i)]=c+k.length,d(k,!1)},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(b,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),b),{}),{get createStringIterator(){return a}}}),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/String.js",[],function(){"use strict";function a(a){var b=String(this);if(null==this||"[object RegExp]"==o.call(a))throw TypeError();var c=b.length,d=String(a),e=(d.length,arguments.length>1?arguments[1]:void 0),f=e?Number(e):0;isNaN(f)&&(f=0);var g=Math.min(Math.max(f,0),c);return p.call(b,d,f)==g}function b(a){var b=String(this);if(null==this||"[object RegExp]"==o.call(a))throw TypeError();var c=b.length,d=String(a),e=d.length,f=c;if(arguments.length>1){var g=arguments[1];void 0!==g&&(f=g?Number(g):0,isNaN(f)&&(f=0))}var h=Math.min(Math.max(f,0),c),i=h-e;return 0>i?!1:q.call(b,d,i)==i}function c(a){if(null==this)throw TypeError();var b=String(this);if(a&&"[object RegExp]"==o.call(a))throw TypeError();var c=b.length,d=String(a),e=d.length,f=arguments.length>1?arguments[1]:void 0,g=f?Number(f):0;g!=g&&(g=0);var h=Math.min(Math.max(g,0),c);return e+h>c?!1:-1!=p.call(b,d,g)}function d(a){if(null==this)throw TypeError();var b=String(this),c=a?Number(a):0;if(isNaN(c)&&(c=0),0>c||1/0==c)throw RangeError();if(0==c)return"";for(var d="";c--;)d+=b;return d}function e(a){if(null==this)throw TypeError();var b=String(this),c=b.length,d=a?Number(a):0;if(isNaN(d)&&(d=0),0>d||d>=c)return void 0;var e,f=b.charCodeAt(d);return f>=55296&&56319>=f&&c>d+1&&(e=b.charCodeAt(d+1),e>=56320&&57343>=e)?1024*(f-55296)+e-56320+65536:f}function f(a){var b=a.raw,c=b.length>>>0;if(0===c)return"";for(var d="",e=0;;){if(d+=b[e],e+1===c)return d;d+=arguments[++e]}}function g(){var a,b,c=[],d=Math.floor,e=-1,f=arguments.length;if(!f)return"";for(;++e<f;){var g=Number(arguments[e]);if(!isFinite(g)||0>g||g>1114111||d(g)!=g)throw RangeError("Invalid code point: "+g);65535>=g?c.push(g):(g-=65536,a=(g>>10)+55296,b=g%1024+56320,c.push(a,b))}return String.fromCharCode.apply(null,c)}function h(){var a=$traceurRuntime.checkObjectCoercible(this),b=String(a);return j(b)}function i(i){var j=i.String;l(j.prototype,["codePointAt",e,"endsWith",b,"includes",c,"repeat",d,"startsWith",a]),l(j,["fromCodePoint",g,"raw",f]),m(j.prototype,h,Symbol)}var j=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/StringIterator.js").createStringIterator,k=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),l=k.maybeAddFunctions,m=k.maybeAddIterator,n=k.registerPolyfill,o=Object.prototype.toString,p=String.prototype.indexOf,q=String.prototype.lastIndexOf;return n(i),{get startsWith(){return a},get endsWith(){return b},get includes(){return c},get repeat(){return d},get codePointAt(){return e},get raw(){return f},get fromCodePoint(){return g},get stringPrototypeIterator(){return h},get polyfillString(){return i}}}),System.get("traceur-runtime@0.0.79/src/runtime/polyfills/String.js"),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js",[],function(){"use strict";function a(a,b){var c=g(a),d=new m;return d.iteratorObject_=c,d.arrayIteratorNextIndex_=0,d.arrayIterationKind_=b,d}function b(){return a(this,l)}function c(){return a(this,j)}function d(){return a(this,k)}var e,f=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),g=f.toObject,h=f.toUint32,i=f.createIteratorResultObject,j=1,k=2,l=3,m=function(){};return $traceurRuntime.createClass(m,(e={},Object.defineProperty(e,"next",{value:function(){var a=g(this),b=a.iteratorObject_;if(!b)throw new TypeError("Object is not an ArrayIterator");var c=a.arrayIteratorNextIndex_,d=a.arrayIterationKind_,e=h(b.length);return c>=e?(a.arrayIteratorNextIndex_=1/0,i(void 0,!0)):(a.arrayIteratorNextIndex_=c+1,d==k?i(b[c],!1):d==l?i([c,b[c]],!1):i(c,!1))},configurable:!0,enumerable:!0,writable:!0}),Object.defineProperty(e,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!0,writable:!0}),e),{}),{get entries(){return b},get keys(){return c
},get values(){return d}}}),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js",[],function(){"use strict";function a(a){var b,c,d=arguments[1],e=arguments[2],f=this,g=u(a),h=void 0!==d,i=0;if(h&&!n(d))throw TypeError();if(m(g)){b=o(f)?new f:[];for(var j,k=g[$traceurRuntime.toProperty(Symbol.iterator)]();!(j=k.next()).done;){var l=j.value;b[i]=h?d.call(e,l,i):l,i++}return b.length=i,b}for(c=t(g.length),b=o(f)?new f(c):new Array(c);c>i;i++)b[i]=h?"undefined"==typeof e?d(g[i],i):d.call(e,g[i],i):g[i];return b.length=c,b}function b(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];for(var c=this,d=a.length,e=o(c)?new c(d):new Array(d),f=0;d>f;f++)e[f]=a[f];return e.length=d,e}function c(a){var b=void 0!==arguments[1]?arguments[1]:0,c=arguments[2],d=u(this),e=t(d.length),f=s(b),g=void 0!==c?s(c):e;for(f=0>f?Math.max(e+f,0):Math.min(f,e),g=0>g?Math.max(e+g,0):Math.min(g,e);g>f;)d[f]=a,f++;return d}function d(a){var b=arguments[1];return f(this,a,b)}function e(a){var b=arguments[1];return f(this,a,b,!0)}function f(a,b){var c=arguments[2],d=void 0!==arguments[3]?arguments[3]:!1,e=u(a),f=t(e.length);if(!n(b))throw TypeError();for(var g=0;f>g;g++){var h=e[g];if(b.call(c,h,g,e))return d?g:h}return d?-1:void 0}function g(f){var g=f,h=g.Array,l=g.Object,m=g.Symbol;p(h.prototype,["entries",i,"keys",j,"values",k,"fill",c,"find",d,"findIndex",e]),p(h,["from",a,"of",b]),q(h.prototype,k,m),q(l.getPrototypeOf([].values()),function(){return this},m)}var h=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/ArrayIterator.js"),i=h.entries,j=h.keys,k=h.values,l=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),m=l.checkIterable,n=l.isCallable,o=l.isConstructor,p=l.maybeAddFunctions,q=l.maybeAddIterator,r=l.registerPolyfill,s=l.toInteger,t=l.toLength,u=l.toObject;return r(g),{get from(){return a},get of(){return b},get fill(){return c},get find(){return d},get findIndex(){return e},get polyfillArray(){return g}}}),System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Array.js"),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js",[],function(){"use strict";function a(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}function b(a){for(var b=1;b<arguments.length;b++){var c,d=arguments[b],e=null==d?[]:m(d),f=e.length;for(c=0;f>c;c++){var g=e[c];l(g)||(a[g]=d[g])}}return a}function c(a,b){var c,d,e=k(b),f=e.length;for(c=0;f>c;c++){var g=e[c];l(g)||(d=j(b,e[c]),i(a,e[c],d))}return a}function d(d){var e=d.Object;f(e,["assign",b,"is",a,"mixin",c])}var e=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),f=e.maybeAddFunctions,g=e.registerPolyfill,h=$traceurRuntime,i=h.defineProperty,j=h.getOwnPropertyDescriptor,k=h.getOwnPropertyNames,l=h.isPrivateName,m=h.keys;return g(d),{get is(){return a},get assign(){return b},get mixin(){return c},get polyfillObject(){return d}}}),System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Object.js"),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js",[],function(){"use strict";function a(a){return g(a)&&m(a)}function b(b){return a(b)&&k(b)===b}function c(a){return g(a)&&n(a)}function d(b){if(a(b)){var c=k(b);if(c===b)return l(c)<=o}return!1}function e(e){var f=e.Number;h(f,["MAX_SAFE_INTEGER",o,"MIN_SAFE_INTEGER",p,"EPSILON",q]),i(f,["isFinite",a,"isInteger",b,"isNaN",c,"isSafeInteger",d])}var f=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js"),g=f.isNumber,h=f.maybeAddConsts,i=f.maybeAddFunctions,j=f.registerPolyfill,k=f.toInteger,l=Math.abs,m=isFinite,n=isNaN,o=Math.pow(2,53)-1,p=-Math.pow(2,53)+1,q=Math.pow(2,-52);return j(e),{get MAX_SAFE_INTEGER(){return o},get MIN_SAFE_INTEGER(){return p},get EPSILON(){return q},get isFinite(){return a},get isInteger(){return b},get isNaN(){return c},get isSafeInteger(){return d},get polyfillNumber(){return e}}}),System.get("traceur-runtime@0.0.79/src/runtime/polyfills/Number.js"),System.registerModule("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js",[],function(){"use strict";var a=System.get("traceur-runtime@0.0.79/src/runtime/polyfills/utils.js").polyfillAll;a(Reflect.global);var b=$traceurRuntime.setupGlobals;return $traceurRuntime.setupGlobals=function(c){b(c),a(c)},{}}),System.get("traceur-runtime@0.0.79/src/runtime/polyfills/polyfills.js");
//# sourceMappingURL=traceur-runtime.js.map
"format register";
(function(global) {

  var defined = {};

  // indexOf polyfill for IE8
  var indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++)
      if (this[i] === item)
        return i;
    return -1;
  }

  function dedupe(deps) {
    var newDeps = [];
    for (var i = 0, l = deps.length; i < l; i++)
      if (indexOf.call(newDeps, deps[i]) == -1)
        newDeps.push(deps[i])
    return newDeps;
  }

  function register(name, deps, declare, execute) {
    if (typeof name != 'string')
      throw "System.register provided no module name";
    
    var entry;

    // dynamic
    if (typeof declare == 'boolean') {
      entry = {
        declarative: false,
        deps: deps,
        execute: execute,
        executingRequire: declare
      };
    }
    else {
      // ES6 declarative
      entry = {
        declarative: true,
        deps: deps,
        declare: declare
      };
    }

    entry.name = name;
    
    // we never overwrite an existing define
    if (!defined[name])
      defined[name] = entry; 

    entry.deps = dedupe(entry.deps);

    // we have to normalize dependencies
    // (assume dependencies are normalized for now)
    // entry.normalizedDeps = entry.deps.map(normalize);
    entry.normalizedDeps = entry.deps;
  }

  function buildGroups(entry, groups) {
    groups[entry.groupIndex] = groups[entry.groupIndex] || [];

    if (indexOf.call(groups[entry.groupIndex], entry) != -1)
      return;

    groups[entry.groupIndex].push(entry);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = defined[depName];
      
      // not in the registry means already linked / ES6
      if (!depEntry || depEntry.evaluated)
        continue;
      
      // now we know the entry is in our unlinked linkage group
      var depGroupIndex = entry.groupIndex + (depEntry.declarative != entry.declarative);

      // the group index of an entry is always the maximum
      if (depEntry.groupIndex === undefined || depEntry.groupIndex < depGroupIndex) {
        
        // if already in a group, remove from the old group
        if (depEntry.groupIndex) {
          groups[depEntry.groupIndex].splice(indexOf.call(groups[depEntry.groupIndex], depEntry), 1);

          // if the old group is empty, then we have a mixed depndency cycle
          if (groups[depEntry.groupIndex].length == 0)
            throw new TypeError("Mixed dependency cycle detected");
        }

        depEntry.groupIndex = depGroupIndex;
      }

      buildGroups(depEntry, groups);
    }
  }

  function link(name) {
    var startEntry = defined[name];

    startEntry.groupIndex = 0;

    var groups = [];

    buildGroups(startEntry, groups);

    var curGroupDeclarative = !!startEntry.declarative == groups.length % 2;
    for (var i = groups.length - 1; i >= 0; i--) {
      var group = groups[i];
      for (var j = 0; j < group.length; j++) {
        var entry = group[j];

        // link each group
        if (curGroupDeclarative)
          linkDeclarativeModule(entry);
        else
          linkDynamicModule(entry);
      }
      curGroupDeclarative = !curGroupDeclarative; 
    }
  }

  // module binding records
  var moduleRecords = {};
  function getOrCreateModuleRecord(name) {
    return moduleRecords[name] || (moduleRecords[name] = {
      name: name,
      dependencies: [],
      exports: {}, // start from an empty module and extend
      importers: []
    })
  }

  function linkDeclarativeModule(entry) {
    // only link if already not already started linking (stops at circular)
    if (entry.module)
      return;

    var module = entry.module = getOrCreateModuleRecord(entry.name);
    var exports = entry.module.exports;

    var declaration = entry.declare.call(global, function(name, value) {
      module.locked = true;
      exports[name] = value;

      for (var i = 0, l = module.importers.length; i < l; i++) {
        var importerModule = module.importers[i];
        if (!importerModule.locked) {
          var importerIndex = indexOf.call(importerModule.dependencies, module);
          importerModule.setters[importerIndex](exports);
        }
      }

      module.locked = false;
      return value;
    });
    
    module.setters = declaration.setters;
    module.execute = declaration.execute;

    if (!module.setters || !module.execute)
      throw new TypeError("Invalid System.register form for " + entry.name);

    // now link all the module dependencies
    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      var depEntry = defined[depName];
      var depModule = moduleRecords[depName];

      // work out how to set depExports based on scenarios...
      var depExports;

      if (depModule) {
        depExports = depModule.exports;
      }
      else if (depEntry && !depEntry.declarative) {
        depExports = { 'default': depEntry.module.exports, __useDefault: true };
      }
      // in the module registry
      else if (!depEntry) {
        depExports = load(depName);
      }
      // we have an entry -> link
      else {
        linkDeclarativeModule(depEntry);
        depModule = depEntry.module;
        depExports = depModule.exports;
      }

      // only declarative modules have dynamic bindings
      if (depModule && depModule.importers) {
        depModule.importers.push(module);
        module.dependencies.push(depModule);
      }
      else
        module.dependencies.push(null);

      // run the setter for this dependency
      if (module.setters[i])
        module.setters[i](depExports);
    }
  }

  // An analog to loader.get covering execution of all three layers (real declarative, simulated declarative, simulated dynamic)
  function getModule(name) {
    var exports;
    var entry = defined[name];

    if (!entry) {
      exports = load(name);
      if (!exports)
        throw new Error("Unable to load dependency " + name + ".");
    }

    else {
      if (entry.declarative)
        ensureEvaluated(name, []);
    
      else if (!entry.evaluated)
        linkDynamicModule(entry);

      exports = entry.module.exports;
    }

    if ((!entry || entry.declarative) && exports && exports.__useDefault)
      return exports['default'];

    return exports;
  }

  function linkDynamicModule(entry) {
    if (entry.module)
      return;

    var exports = {};

    var module = entry.module = { exports: exports, id: entry.name };

    // AMD requires execute the tree first
    if (!entry.executingRequire) {
      for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
        var depName = entry.normalizedDeps[i];
        var depEntry = defined[depName];
        if (depEntry)
          linkDynamicModule(depEntry);
      }
    }

    // now execute
    entry.evaluated = true;
    var output = entry.execute.call(global, function(name) {
      for (var i = 0, l = entry.deps.length; i < l; i++) {
        if (entry.deps[i] != name)
          continue;
        return getModule(entry.normalizedDeps[i]);
      }
      throw new TypeError('Module ' + name + ' not declared as a dependency.');
    }, exports, module);
    
    if (output)
      module.exports = output;
  }

  /*
   * Given a module, and the list of modules for this current branch,
   *  ensure that each of the dependencies of this module is evaluated
   *  (unless one is a circular dependency already in the list of seen
   *  modules, in which case we execute it)
   *
   * Then we evaluate the module itself depth-first left to right 
   * execution to match ES6 modules
   */
  function ensureEvaluated(moduleName, seen) {
    var entry = defined[moduleName];

    // if already seen, that means it's an already-evaluated non circular dependency
    if (entry.evaluated || !entry.declarative)
      return;

    // this only applies to declarative modules which late-execute

    seen.push(moduleName);

    for (var i = 0, l = entry.normalizedDeps.length; i < l; i++) {
      var depName = entry.normalizedDeps[i];
      if (indexOf.call(seen, depName) == -1) {
        if (!defined[depName])
          load(depName);
        else
          ensureEvaluated(depName, seen);
      }
    }

    if (entry.evaluated)
      return;

    entry.evaluated = true;
    entry.module.execute.call(global);
  }

  // magical execution function
  var modules = {};
  function load(name) {
    if (modules[name])
      return modules[name];

    var entry = defined[name];

    // first we check if this module has already been defined in the registry
    if (!entry)
      throw "Module " + name + " not present.";

    // recursively ensure that the module and all its 
    // dependencies are linked (with dependency group handling)
    link(name);

    // now handle dependency execution in correct order
    ensureEvaluated(name, []);

    // remove from the registry
    defined[name] = undefined;

    var module = entry.declarative ? entry.module.exports : { 'default': entry.module.exports, '__useDefault': true };

    // return the defined module object
    return modules[name] = module;
  };

  return function(main, declare) {

    var System;

    // if there's a system loader, define onto it
    if (typeof System != 'undefined' && System.register) {
      declare(System);
      System['import'](main);
    }
    // otherwise, self execute
    else {
      declare(System = {
        register: register, 
        get: load, 
        set: function(name, module) {
          modules[name] = module; 
        },
        newModule: function(module) {
          return module;
        },
        global: global 
      });
      load(main);
    }
  };

})(typeof window != 'undefined' ? window : global)
/* ('mainModule', function(System) {
  System.register(...);
}); */
('app/bootstrap', function(System) {




System.register("github:angular/bower-angular@1.3.8/angular.min", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    "format global";
    "exports angular";
    (function(M, Y, t) {
      'use strict';
      function T(b) {
        return function() {
          var a = arguments[0],
              c;
          c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.8/" + (b ? b + "/" : "") + a;
          for (a = 1; a < arguments.length; a++) {
            c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
            var d = encodeURIComponent,
                e;
            e = arguments[a];
            e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
            c += d(e);
          }
          return Error(c);
        };
      }
      function Ta(b) {
        if (null == b || Ua(b))
          return !1;
        var a = b.length;
        return b.nodeType === na && a ? !0 : F(b) || x(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b;
      }
      function s(b, a, c) {
        var d,
            e;
        if (b)
          if (G(b))
            for (d in b)
              "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);
          else if (x(b) || Ta(b)) {
            var f = "object" !== typeof b;
            d = 0;
            for (e = b.length; d < e; d++)
              (f || d in b) && a.call(c, b[d], d, b);
          } else if (b.forEach && b.forEach !== s)
            b.forEach(a, c, b);
          else
            for (d in b)
              b.hasOwnProperty(d) && a.call(c, b[d], d, b);
        return b;
      }
      function Ed(b, a, c) {
        for (var d = Object.keys(b).sort(),
            e = 0; e < d.length; e++)
          a.call(c, b[d[e]], d[e]);
        return d;
      }
      function kc(b) {
        return function(a, c) {
          b(c, a);
        };
      }
      function Fd() {
        return ++nb;
      }
      function lc(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey;
      }
      function z(b) {
        for (var a = b.$$hashKey,
            c = 1,
            d = arguments.length; c < d; c++) {
          var e = arguments[c];
          if (e)
            for (var f = Object.keys(e),
                g = 0,
                h = f.length; g < h; g++) {
              var l = f[g];
              b[l] = e[l];
            }
        }
        lc(b, a);
        return b;
      }
      function ba(b) {
        return parseInt(b, 10);
      }
      function C() {}
      function oa(b) {
        return b;
      }
      function da(b) {
        return function() {
          return b;
        };
      }
      function D(b) {
        return "undefined" === typeof b;
      }
      function y(b) {
        return "undefined" !== typeof b;
      }
      function H(b) {
        return null !== b && "object" === typeof b;
      }
      function F(b) {
        return "string" === typeof b;
      }
      function V(b) {
        return "number" === typeof b;
      }
      function pa(b) {
        return "[object Date]" === Da.call(b);
      }
      function G(b) {
        return "function" === typeof b;
      }
      function ob(b) {
        return "[object RegExp]" === Da.call(b);
      }
      function Ua(b) {
        return b && b.window === b;
      }
      function Va(b) {
        return b && b.$evalAsync && b.$watch;
      }
      function Wa(b) {
        return "boolean" === typeof b;
      }
      function mc(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
      }
      function Gd(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++)
          a[b[c]] = !0;
        return a;
      }
      function ua(b) {
        return Q(b.nodeName || b[0] && b[0].nodeName);
      }
      function Xa(b, a) {
        var c = b.indexOf(a);
        0 <= c && b.splice(c, 1);
        return a;
      }
      function Ea(b, a, c, d) {
        if (Ua(b) || Va(b))
          throw Ka("cpws");
        if (a) {
          if (b === a)
            throw Ka("cpi");
          c = c || [];
          d = d || [];
          if (H(b)) {
            var e = c.indexOf(b);
            if (-1 !== e)
              return d[e];
            c.push(b);
            d.push(a);
          }
          if (x(b))
            for (var f = a.length = 0; f < b.length; f++)
              e = Ea(b[f], null, c, d), H(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
          else {
            var g = a.$$hashKey;
            x(a) ? a.length = 0 : s(a, function(b, c) {
              delete a[c];
            });
            for (f in b)
              b.hasOwnProperty(f) && (e = Ea(b[f], null, c, d), H(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
            lc(a, g);
          }
        } else if (a = b)
          x(b) ? a = Ea(b, [], c, d) : pa(b) ? a = new Date(b.getTime()) : ob(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : H(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Ea(b, e, c, d));
        return a;
      }
      function qa(b, a) {
        if (x(b)) {
          a = a || [];
          for (var c = 0,
              d = b.length; c < d; c++)
            a[c] = b[c];
        } else if (H(b))
          for (c in a = a || {}, b)
            if ("$" !== c.charAt(0) || "$" !== c.charAt(1))
              a[c] = b[c];
        return a || b;
      }
      function fa(b, a) {
        if (b === a)
          return !0;
        if (null === b || null === a)
          return !1;
        if (b !== b && a !== a)
          return !0;
        var c = typeof b,
            d;
        if (c == typeof a && "object" == c)
          if (x(b)) {
            if (!x(a))
              return !1;
            if ((c = b.length) == a.length) {
              for (d = 0; d < c; d++)
                if (!fa(b[d], a[d]))
                  return !1;
              return !0;
            }
          } else {
            if (pa(b))
              return pa(a) ? fa(b.getTime(), a.getTime()) : !1;
            if (ob(b) && ob(a))
              return b.toString() == a.toString();
            if (Va(b) || Va(a) || Ua(b) || Ua(a) || x(a))
              return !1;
            c = {};
            for (d in b)
              if ("$" !== d.charAt(0) && !G(b[d])) {
                if (!fa(b[d], a[d]))
                  return !1;
                c[d] = !0;
              }
            for (d in a)
              if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== t && !G(a[d]))
                return !1;
            return !0;
          }
        return !1;
      }
      function Ya(b, a, c) {
        return b.concat(Za.call(a, c));
      }
      function nc(b, a) {
        var c = 2 < arguments.length ? Za.call(arguments, 2) : [];
        return !G(a) || a instanceof RegExp ? a : c.length ? function() {
          return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c);
        } : function() {
          return arguments.length ? a.apply(b, arguments) : a.call(b);
        };
      }
      function Hd(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = t : Ua(a) ? c = "$WINDOW" : a && Y === a ? c = "$DOCUMENT" : Va(a) && (c = "$SCOPE");
        return c;
      }
      function $a(b, a) {
        if ("undefined" === typeof b)
          return t;
        V(a) || (a = a ? 2 : null);
        return JSON.stringify(b, Hd, a);
      }
      function oc(b) {
        return F(b) ? JSON.parse(b) : b;
      }
      function va(b) {
        b = B(b).clone();
        try {
          b.empty();
        } catch (a) {}
        var c = B("<div>").append(b).html();
        try {
          return b[0].nodeType === pb ? Q(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
            return "<" + Q(b);
          });
        } catch (d) {
          return Q(c);
        }
      }
      function pc(b) {
        try {
          return decodeURIComponent(b);
        } catch (a) {}
      }
      function qc(b) {
        var a = {},
            c,
            d;
        s((b || "").split("&"), function(b) {
          b && (c = b.replace(/\+/g, "%20").split("="), d = pc(c[0]), y(d) && (b = y(c[1]) ? pc(c[1]) : !0, rc.call(a, d) ? x(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b));
        });
        return a;
      }
      function Nb(b) {
        var a = [];
        s(b, function(b, d) {
          x(b) ? s(b, function(b) {
            a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)));
          }) : a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)));
        });
        return a.length ? a.join("&") : "";
      }
      function qb(b) {
        return Fa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
      }
      function Fa(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+");
      }
      function Id(b, a) {
        var c,
            d,
            e = rb.length;
        b = B(b);
        for (d = 0; d < e; ++d)
          if (c = rb[d] + a, F(c = b.attr(c)))
            return c;
        return null;
      }
      function Jd(b, a) {
        var c,
            d,
            e = {};
        s(rb, function(a) {
          a += "app";
          !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a));
        });
        s(rb, function(a) {
          a += "app";
          var e;
          !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a));
        });
        c && (e.strictDi = null !== Id(c, "strict-di"), a(c, d ? [d] : [], e));
      }
      function sc(b, a, c) {
        H(c) || (c = {});
        c = z({strictDi: !1}, c);
        var d = function() {
          b = B(b);
          if (b.injector()) {
            var d = b[0] === Y ? "document" : va(b);
            throw Ka("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
          }
          a = a || [];
          a.unshift(["$provide", function(a) {
            a.value("$rootElement", b);
          }]);
          c.debugInfoEnabled && a.push(["$compileProvider", function(a) {
            a.debugInfoEnabled(!0);
          }]);
          a.unshift("ng");
          d = Ob(a, c.strictDi);
          d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
            a.$apply(function() {
              b.data("$injector", d);
              c(b)(a);
            });
          }]);
          return d;
        },
            e = /^NG_ENABLE_DEBUG_INFO!/,
            f = /^NG_DEFER_BOOTSTRAP!/;
        M && e.test(M.name) && (c.debugInfoEnabled = !0, M.name = M.name.replace(e, ""));
        if (M && !f.test(M.name))
          return d();
        M.name = M.name.replace(f, "");
        ga.resumeBootstrap = function(b) {
          s(b, function(b) {
            a.push(b);
          });
          d();
        };
      }
      function Kd() {
        M.name = "NG_ENABLE_DEBUG_INFO!" + M.name;
        M.location.reload();
      }
      function Ld(b) {
        b = ga.element(b).injector();
        if (!b)
          throw Ka("test");
        return b.get("$$testability");
      }
      function tc(b, a) {
        a = a || "_";
        return b.replace(Md, function(b, d) {
          return (d ? a : "") + b.toLowerCase();
        });
      }
      function Nd() {
        var b;
        uc || ((ra = M.jQuery) && ra.fn.on ? (B = ra, z(ra.fn, {
          scope: La.scope,
          isolateScope: La.isolateScope,
          controller: La.controller,
          injector: La.injector,
          inheritedData: La.inheritedData
        }), b = ra.cleanData, ra.cleanData = function(a) {
          var c;
          if (Pb)
            Pb = !1;
          else
            for (var d = 0,
                e; null != (e = a[d]); d++)
              (c = ra._data(e, "events")) && c.$destroy && ra(e).triggerHandler("$destroy");
          b(a);
        }) : B = R, ga.element = B, uc = !0);
      }
      function Qb(b, a, c) {
        if (!b)
          throw Ka("areq", a || "?", c || "required");
        return b;
      }
      function sb(b, a, c) {
        c && x(b) && (b = b[b.length - 1]);
        Qb(G(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b;
      }
      function Ma(b, a) {
        if ("hasOwnProperty" === b)
          throw Ka("badname", a);
      }
      function vc(b, a, c) {
        if (!a)
          return b;
        a = a.split(".");
        for (var d,
            e = b,
            f = a.length,
            g = 0; g < f; g++)
          d = a[g], b && (b = (e = b)[d]);
        return !c && G(b) ? nc(e, b) : b;
      }
      function tb(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [a];
        do {
          a = a.nextSibling;
          if (!a)
            break;
          c.push(a);
        } while (a !== b);
        return B(c);
      }
      function ha() {
        return Object.create(null);
      }
      function Od(b) {
        function a(a, b, c) {
          return a[b] || (a[b] = c());
        }
        var c = T("$injector"),
            d = T("ng");
        b = a(b, "angular", Object);
        b.$$minErr = b.$$minErr || T;
        return a(b, "module", function() {
          var b = {};
          return function(f, g, h) {
            if ("hasOwnProperty" === f)
              throw d("badname", "module");
            g && b.hasOwnProperty(f) && (b[f] = null);
            return a(b, f, function() {
              function a(c, d, e, f) {
                f || (f = b);
                return function() {
                  f[e || "push"]([c, d, arguments]);
                  return u;
                };
              }
              if (!g)
                throw c("nomod", f);
              var b = [],
                  d = [],
                  e = [],
                  q = a("$injector", "invoke", "push", d),
                  u = {
                    _invokeQueue: b,
                    _configBlocks: d,
                    _runBlocks: e,
                    requires: g,
                    name: f,
                    provider: a("$provide", "provider"),
                    factory: a("$provide", "factory"),
                    service: a("$provide", "service"),
                    value: a("$provide", "value"),
                    constant: a("$provide", "constant", "unshift"),
                    animation: a("$animateProvider", "register"),
                    filter: a("$filterProvider", "register"),
                    controller: a("$controllerProvider", "register"),
                    directive: a("$compileProvider", "directive"),
                    config: q,
                    run: function(a) {
                      e.push(a);
                      return this;
                    }
                  };
              h && q(h);
              return u;
            });
          };
        });
      }
      function Pd(b) {
        z(b, {
          bootstrap: sc,
          copy: Ea,
          extend: z,
          equals: fa,
          element: B,
          forEach: s,
          injector: Ob,
          noop: C,
          bind: nc,
          toJson: $a,
          fromJson: oc,
          identity: oa,
          isUndefined: D,
          isDefined: y,
          isString: F,
          isFunction: G,
          isObject: H,
          isNumber: V,
          isElement: mc,
          isArray: x,
          version: Qd,
          isDate: pa,
          lowercase: Q,
          uppercase: ub,
          callbacks: {counter: 0},
          getTestability: Ld,
          $$minErr: T,
          $$csp: ab,
          reloadWithDebugInfo: Kd
        });
        bb = Od(M);
        try {
          bb("ngLocale");
        } catch (a) {
          bb("ngLocale", []).provider("$locale", Rd);
        }
        bb("ng", ["ngLocale"], ["$provide", function(a) {
          a.provider({$$sanitizeUri: Sd});
          a.provider("$compile", wc).directive({
            a: Td,
            input: xc,
            textarea: xc,
            form: Ud,
            script: Vd,
            select: Wd,
            style: Xd,
            option: Yd,
            ngBind: Zd,
            ngBindHtml: $d,
            ngBindTemplate: ae,
            ngClass: be,
            ngClassEven: ce,
            ngClassOdd: de,
            ngCloak: ee,
            ngController: fe,
            ngForm: ge,
            ngHide: he,
            ngIf: ie,
            ngInclude: je,
            ngInit: ke,
            ngNonBindable: le,
            ngPluralize: me,
            ngRepeat: ne,
            ngShow: oe,
            ngStyle: pe,
            ngSwitch: qe,
            ngSwitchWhen: re,
            ngSwitchDefault: se,
            ngOptions: te,
            ngTransclude: ue,
            ngModel: ve,
            ngList: we,
            ngChange: xe,
            pattern: yc,
            ngPattern: yc,
            required: zc,
            ngRequired: zc,
            minlength: Ac,
            ngMinlength: Ac,
            maxlength: Bc,
            ngMaxlength: Bc,
            ngValue: ye,
            ngModelOptions: ze
          }).directive({ngInclude: Ae}).directive(vb).directive(Cc);
          a.provider({
            $anchorScroll: Be,
            $animate: Ce,
            $browser: De,
            $cacheFactory: Ee,
            $controller: Fe,
            $document: Ge,
            $exceptionHandler: He,
            $filter: Dc,
            $interpolate: Ie,
            $interval: Je,
            $http: Ke,
            $httpBackend: Le,
            $location: Me,
            $log: Ne,
            $parse: Oe,
            $rootScope: Pe,
            $q: Qe,
            $$q: Re,
            $sce: Se,
            $sceDelegate: Te,
            $sniffer: Ue,
            $templateCache: Ve,
            $templateRequest: We,
            $$testability: Xe,
            $timeout: Ye,
            $window: Ze,
            $$rAF: $e,
            $$asyncCallback: af,
            $$jqLite: bf
          });
        }]);
      }
      function cb(b) {
        return b.replace(cf, function(a, b, d, e) {
          return e ? d.toUpperCase() : d;
        }).replace(df, "Moz$1");
      }
      function Ec(b) {
        b = b.nodeType;
        return b === na || !b || 9 === b;
      }
      function Fc(b, a) {
        var c,
            d,
            e = a.createDocumentFragment(),
            f = [];
        if (Rb.test(b)) {
          c = c || e.appendChild(a.createElement("div"));
          d = (ef.exec(b) || ["", ""])[1].toLowerCase();
          d = ia[d] || ia._default;
          c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2];
          for (d = d[0]; d--; )
            c = c.lastChild;
          f = Ya(f, c.childNodes);
          c = e.firstChild;
          c.textContent = "";
        } else
          f.push(a.createTextNode(b));
        e.textContent = "";
        e.innerHTML = "";
        s(f, function(a) {
          e.appendChild(a);
        });
        return e;
      }
      function R(b) {
        if (b instanceof R)
          return b;
        var a;
        F(b) && (b = U(b), a = !0);
        if (!(this instanceof R)) {
          if (a && "<" != b.charAt(0))
            throw Sb("nosel");
          return new R(b);
        }
        if (a) {
          a = Y;
          var c;
          b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Fc(b, a)) ? c.childNodes : [];
        }
        Gc(this, b);
      }
      function Tb(b) {
        return b.cloneNode(!0);
      }
      function wb(b, a) {
        a || xb(b);
        if (b.querySelectorAll)
          for (var c = b.querySelectorAll("*"),
              d = 0,
              e = c.length; d < e; d++)
            xb(c[d]);
      }
      function Hc(b, a, c, d) {
        if (y(d))
          throw Sb("offargs");
        var e = (d = yb(b)) && d.events,
            f = d && d.handle;
        if (f)
          if (a)
            s(a.split(" "), function(a) {
              if (y(c)) {
                var d = e[a];
                Xa(d || [], c);
                if (d && 0 < d.length)
                  return;
              }
              b.removeEventListener(a, f, !1);
              delete e[a];
            });
          else
            for (a in e)
              "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a];
      }
      function xb(b, a) {
        var c = b.ng339,
            d = c && zb[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Hc(b)), delete zb[c], b.ng339 = t));
      }
      function yb(b, a) {
        var c = b.ng339,
            c = c && zb[c];
        a && !c && (b.ng339 = c = ++hf, c = zb[c] = {
          events: {},
          data: {},
          handle: t
        });
        return c;
      }
      function Ub(b, a, c) {
        if (Ec(b)) {
          var d = y(c),
              e = !d && a && !H(a),
              f = !a;
          b = (b = yb(b, !e)) && b.data;
          if (d)
            b[a] = c;
          else {
            if (f)
              return b;
            if (e)
              return b && b[a];
            z(b, a);
          }
        }
      }
      function Ab(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1;
      }
      function Bb(b, a) {
        a && b.setAttribute && s(a.split(" "), function(a) {
          b.setAttribute("class", U((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(a) + " ", " ")));
        });
      }
      function Cb(b, a) {
        if (a && b.setAttribute) {
          var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
          s(a.split(" "), function(a) {
            a = U(a);
            -1 === c.indexOf(" " + a + " ") && (c += a + " ");
          });
          b.setAttribute("class", U(c));
        }
      }
      function Gc(b, a) {
        if (a)
          if (a.nodeType)
            b[b.length++] = a;
          else {
            var c = a.length;
            if ("number" === typeof c && a.window !== a) {
              if (c)
                for (var d = 0; d < c; d++)
                  b[b.length++] = a[d];
            } else
              b[b.length++] = a;
          }
      }
      function Ic(b, a) {
        return Db(b, "$" + (a || "ngController") + "Controller");
      }
      function Db(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = x(a) ? a : [a]; b; ) {
          for (var d = 0,
              e = a.length; d < e; d++)
            if ((c = B.data(b, a[d])) !== t)
              return c;
          b = b.parentNode || 11 === b.nodeType && b.host;
        }
      }
      function Jc(b) {
        for (wb(b, !0); b.firstChild; )
          b.removeChild(b.firstChild);
      }
      function Kc(b, a) {
        a || wb(b);
        var c = b.parentNode;
        c && c.removeChild(b);
      }
      function jf(b, a) {
        a = a || M;
        if ("complete" === a.document.readyState)
          a.setTimeout(b);
        else
          B(a).on("load", b);
      }
      function Lc(b, a) {
        var c = Eb[a.toLowerCase()];
        return c && Mc[ua(b)] && c;
      }
      function kf(b, a) {
        var c = b.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Nc[a];
      }
      function lf(b, a) {
        var c = function(c, e) {
          c.isDefaultPrevented = function() {
            return c.defaultPrevented;
          };
          var f = a[e || c.type],
              g = f ? f.length : 0;
          if (g) {
            if (D(c.immediatePropagationStopped)) {
              var h = c.stopImmediatePropagation;
              c.stopImmediatePropagation = function() {
                c.immediatePropagationStopped = !0;
                c.stopPropagation && c.stopPropagation();
                h && h.call(c);
              };
            }
            c.isImmediatePropagationStopped = function() {
              return !0 === c.immediatePropagationStopped;
            };
            1 < g && (f = qa(f));
            for (var l = 0; l < g; l++)
              c.isImmediatePropagationStopped() || f[l].call(b, c);
          }
        };
        c.elem = b;
        return c;
      }
      function bf() {
        this.$get = function() {
          return z(R, {
            hasClass: function(b, a) {
              b.attr && (b = b[0]);
              return Ab(b, a);
            },
            addClass: function(b, a) {
              b.attr && (b = b[0]);
              return Cb(b, a);
            },
            removeClass: function(b, a) {
              b.attr && (b = b[0]);
              return Bb(b, a);
            }
          });
        };
      }
      function Na(b, a) {
        var c = b && b.$$hashKey;
        if (c)
          return "function" === typeof c && (c = b.$$hashKey()), c;
        c = typeof b;
        return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b;
      }
      function db(b, a) {
        if (a) {
          var c = 0;
          this.nextUid = function() {
            return ++c;
          };
        }
        s(b, this.put, this);
      }
      function mf(b) {
        return (b = b.toString().replace(Oc, "").match(Pc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
      }
      function Vb(b, a, c) {
        var d;
        if ("function" === typeof b) {
          if (!(d = b.$inject)) {
            d = [];
            if (b.length) {
              if (a)
                throw F(c) && c || (c = b.name || mf(b)), Ga("strictdi", c);
              a = b.toString().replace(Oc, "");
              a = a.match(Pc);
              s(a[1].split(nf), function(a) {
                a.replace(of, function(a, b, c) {
                  d.push(c);
                });
              });
            }
            b.$inject = d;
          }
        } else
          x(b) ? (a = b.length - 1, sb(b[a], "fn"), d = b.slice(0, a)) : sb(b, "fn", !0);
        return d;
      }
      function Ob(b, a) {
        function c(a) {
          return function(b, c) {
            if (H(b))
              s(b, kc(a));
            else
              return a(b, c);
          };
        }
        function d(a, b) {
          Ma(a, "service");
          if (G(b) || x(b))
            b = q.instantiate(b);
          if (!b.$get)
            throw Ga("pget", a);
          return p[a + "Provider"] = b;
        }
        function e(a, b) {
          return function() {
            var c = r.invoke(b, this);
            if (D(c))
              throw Ga("undef", a);
            return c;
          };
        }
        function f(a, b, c) {
          return d(a, {$get: !1 !== c ? e(a, b) : b});
        }
        function g(a) {
          var b = [],
              c;
          s(a, function(a) {
            function d(a) {
              var b,
                  c;
              b = 0;
              for (c = a.length; b < c; b++) {
                var e = a[b],
                    f = q.get(e[0]);
                f[e[1]].apply(f, e[2]);
              }
            }
            if (!m.get(a)) {
              m.put(a, !0);
              try {
                F(a) ? (c = bb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : x(a) ? b.push(q.invoke(a)) : sb(a, "module");
              } catch (e) {
                throw x(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ga("modulerr", a, e.stack || e.message || e);
              }
            }
          });
          return b;
        }
        function h(b, c) {
          function d(a, e) {
            if (b.hasOwnProperty(a)) {
              if (b[a] === l)
                throw Ga("cdep", a + " <- " + k.join(" <- "));
              return b[a];
            }
            try {
              return k.unshift(a), b[a] = l, b[a] = c(a, e);
            } catch (f) {
              throw b[a] === l && delete b[a], f;
            } finally {
              k.shift();
            }
          }
          function e(b, c, f, g) {
            "string" === typeof f && (g = f, f = null);
            var h = [],
                k = Vb(b, a, g),
                l,
                q,
                p;
            q = 0;
            for (l = k.length; q < l; q++) {
              p = k[q];
              if ("string" !== typeof p)
                throw Ga("itkn", p);
              h.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g));
            }
            x(b) && (b = b[l]);
            return b.apply(c, h);
          }
          return {
            invoke: e,
            instantiate: function(a, b, c) {
              var d = Object.create((x(a) ? a[a.length - 1] : a).prototype);
              a = e(a, d, b, c);
              return H(a) || G(a) ? a : d;
            },
            get: d,
            annotate: Vb,
            has: function(a) {
              return p.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a);
            }
          };
        }
        a = !0 === a;
        var l = {},
            k = [],
            m = new db([], !0),
            p = {$provide: {
                provider: c(d),
                factory: c(f),
                service: c(function(a, b) {
                  return f(a, ["$injector", function(a) {
                    return a.instantiate(b);
                  }]);
                }),
                value: c(function(a, b) {
                  return f(a, da(b), !1);
                }),
                constant: c(function(a, b) {
                  Ma(a, "constant");
                  p[a] = b;
                  u[a] = b;
                }),
                decorator: function(a, b) {
                  var c = q.get(a + "Provider"),
                      d = c.$get;
                  c.$get = function() {
                    var a = r.invoke(d, c);
                    return r.invoke(b, null, {$delegate: a});
                  };
                }
              }},
            q = p.$injector = h(p, function(a, b) {
              ga.isString(b) && k.push(b);
              throw Ga("unpr", k.join(" <- "));
            }),
            u = {},
            r = u.$injector = h(u, function(a, b) {
              var c = q.get(a + "Provider", b);
              return r.invoke(c.$get, c, t, a);
            });
        s(g(b), function(a) {
          r.invoke(a || C);
        });
        return r;
      }
      function Be() {
        var b = !0;
        this.disableAutoScrolling = function() {
          b = !1;
        };
        this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
          function e(a) {
            var b = null;
            Array.prototype.some.call(a, function(a) {
              if ("a" === ua(a))
                return b = a, !0;
            });
            return b;
          }
          function f(b) {
            if (b) {
              b.scrollIntoView();
              var c;
              c = g.yOffset;
              G(c) ? c = c() : mc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0);
              c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c));
            } else
              a.scrollTo(0, 0);
          }
          function g() {
            var a = c.hash(),
                b;
            a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
          }
          var h = a.document;
          b && d.$watch(function() {
            return c.hash();
          }, function(a, b) {
            a === b && "" === a || jf(function() {
              d.$evalAsync(g);
            });
          });
          return g;
        }];
      }
      function af() {
        this.$get = ["$$rAF", "$timeout", function(b, a) {
          return b.supported ? function(a) {
            return b(a);
          } : function(b) {
            return a(b, 0, !1);
          };
        }];
      }
      function pf(b, a, c, d) {
        function e(a) {
          try {
            a.apply(null, Za.call(arguments, 1));
          } finally {
            if (v--, 0 === v)
              for (; w.length; )
                try {
                  w.pop()();
                } catch (b) {
                  c.error(b);
                }
          }
        }
        function f(a, b) {
          (function N() {
            s(L, function(a) {
              a();
            });
            J = b(N, a);
          })();
        }
        function g() {
          h();
          l();
        }
        function h() {
          A = b.history.state;
          A = D(A) ? null : A;
          fa(A, I) && (A = I);
          I = A;
        }
        function l() {
          if (E !== m.url() || P !== A)
            E = m.url(), P = A, s(W, function(a) {
              a(m.url(), A);
            });
        }
        function k(a) {
          try {
            return decodeURIComponent(a);
          } catch (b) {
            return a;
          }
        }
        var m = this,
            p = a[0],
            q = b.location,
            u = b.history,
            r = b.setTimeout,
            O = b.clearTimeout,
            n = {};
        m.isMock = !1;
        var v = 0,
            w = [];
        m.$$completeOutstandingRequest = e;
        m.$$incOutstandingRequestCount = function() {
          v++;
        };
        m.notifyWhenNoOutstandingRequests = function(a) {
          s(L, function(a) {
            a();
          });
          0 === v ? a() : w.push(a);
        };
        var L = [],
            J;
        m.addPollFn = function(a) {
          D(J) && f(100, r);
          L.push(a);
          return a;
        };
        var A,
            P,
            E = q.href,
            S = a.find("base"),
            X = null;
        h();
        P = A;
        m.url = function(a, c, e) {
          D(e) && (e = null);
          q !== b.location && (q = b.location);
          u !== b.history && (u = b.history);
          if (a) {
            var f = P === e;
            if (E === a && (!d.history || f))
              return m;
            var g = E && Ha(E) === Ha(a);
            E = a;
            P = e;
            !d.history || g && f ? (g || (X = a), c ? q.replace(a) : g ? (c = q, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : q.href = a) : (u[c ? "replaceState" : "pushState"](e, "", a), h(), P = A);
            return m;
          }
          return X || q.href.replace(/%27/g, "'");
        };
        m.state = function() {
          return A;
        };
        var W = [],
            wa = !1,
            I = null;
        m.onUrlChange = function(a) {
          if (!wa) {
            if (d.history)
              B(b).on("popstate", g);
            B(b).on("hashchange", g);
            wa = !0;
          }
          W.push(a);
          return a;
        };
        m.$$checkUrlChange = l;
        m.baseHref = function() {
          var a = S.attr("href");
          return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var ea = {},
            y = "",
            ca = m.baseHref();
        m.cookies = function(a, b) {
          var d,
              e,
              f,
              g;
          if (a)
            b === t ? p.cookie = encodeURIComponent(a) + "=;path=" + ca + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : F(b) && (d = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + ca).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
          else {
            if (p.cookie !== y)
              for (y = p.cookie, d = y.split("; "), ea = {}, f = 0; f < d.length; f++)
                e = d[f], g = e.indexOf("="), 0 < g && (a = k(e.substring(0, g)), ea[a] === t && (ea[a] = k(e.substring(g + 1))));
            return ea;
          }
        };
        m.defer = function(a, b) {
          var c;
          v++;
          c = r(function() {
            delete n[c];
            e(a);
          }, b || 0);
          n[c] = !0;
          return c;
        };
        m.defer.cancel = function(a) {
          return n[a] ? (delete n[a], O(a), e(C), !0) : !1;
        };
      }
      function De() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
          return new pf(b, d, a, c);
        }];
      }
      function Ee() {
        this.$get = function() {
          function b(b, d) {
            function e(a) {
              a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null);
            }
            function f(a, b) {
              a != b && (a && (a.p = b), b && (b.n = a));
            }
            if (b in a)
              throw T("$cacheFactory")("iid", b);
            var g = 0,
                h = z({}, d, {id: b}),
                l = {},
                k = d && d.capacity || Number.MAX_VALUE,
                m = {},
                p = null,
                q = null;
            return a[b] = {
              put: function(a, b) {
                if (k < Number.MAX_VALUE) {
                  var c = m[a] || (m[a] = {key: a});
                  e(c);
                }
                if (!D(b))
                  return a in l || g++, l[a] = b, g > k && this.remove(q.key), b;
              },
              get: function(a) {
                if (k < Number.MAX_VALUE) {
                  var b = m[a];
                  if (!b)
                    return;
                  e(b);
                }
                return l[a];
              },
              remove: function(a) {
                if (k < Number.MAX_VALUE) {
                  var b = m[a];
                  if (!b)
                    return;
                  b == p && (p = b.p);
                  b == q && (q = b.n);
                  f(b.n, b.p);
                  delete m[a];
                }
                delete l[a];
                g--;
              },
              removeAll: function() {
                l = {};
                g = 0;
                m = {};
                p = q = null;
              },
              destroy: function() {
                m = h = l = null;
                delete a[b];
              },
              info: function() {
                return z({}, h, {size: g});
              }
            };
          }
          var a = {};
          b.info = function() {
            var b = {};
            s(a, function(a, e) {
              b[e] = a.info();
            });
            return b;
          };
          b.get = function(b) {
            return a[b];
          };
          return b;
        };
      }
      function Ve() {
        this.$get = ["$cacheFactory", function(b) {
          return b("templates");
        }];
      }
      function wc(b, a) {
        function c(a, b) {
          var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
              d = {};
          s(a, function(a, e) {
            var f = a.match(c);
            if (!f)
              throw ja("iscp", b, e, a);
            d[e] = {
              mode: f[1][0],
              collection: "*" === f[2],
              optional: "?" === f[3],
              attrName: f[4] || e
            };
          });
          return d;
        }
        var d = {},
            e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            g = Gd("ngSrc,ngSrcset,src,srcset"),
            h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            l = /^(on[a-z]+|formaction)$/;
        this.directive = function p(a, e) {
          Ma(a, "directive");
          F(a) ? (Qb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function(b, e) {
            var f = [];
            s(d[a], function(d, g) {
              try {
                var h = b.invoke(d);
                G(h) ? h = {compile: da(h)} : !h.compile && h.link && (h.compile = da(h.link));
                h.priority = h.priority || 0;
                h.index = g;
                h.name = h.name || a;
                h.require = h.require || h.controller && h.name;
                h.restrict = h.restrict || "EA";
                H(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
                f.push(h);
              } catch (l) {
                e(l);
              }
            });
            return f;
          }])), d[a].push(e)) : s(a, kc(p));
          return this;
        };
        this.aHrefSanitizationWhitelist = function(b) {
          return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
        };
        this.imgSrcSanitizationWhitelist = function(b) {
          return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
        };
        var k = !0;
        this.debugInfoEnabled = function(a) {
          return y(a) ? (k = a, this) : k;
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, c, r, O, n, v, w, L, J, A) {
          function P(a, b) {
            try {
              a.addClass(b);
            } catch (c) {}
          }
          function E(a, b, c, d, e) {
            a instanceof B || (a = B(a));
            s(a, function(b, c) {
              b.nodeType == pb && b.nodeValue.match(/\S+/) && (a[c] = B(b).wrap("<span></span>").parent()[0]);
            });
            var f = S(a, b, a, c, d, e);
            E.$$addScopeClass(a);
            var g = null;
            return function(b, c, d) {
              Qb(b, "scope");
              d = d || {};
              var e = d.parentBoundTranscludeFn,
                  h = d.transcludeControllers;
              d = d.futureParentElement;
              e && e.$$boundTransclude && (e = e.$$boundTransclude);
              g || (g = (d = d && d[0]) ? "foreignobject" !== ua(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
              d = "html" !== g ? B(Wb(g, B("<div>").append(a).html())) : c ? La.clone.call(a) : a;
              if (h)
                for (var l in h)
                  d.data("$" + l + "Controller", h[l].instance);
              E.$$addScopeInfo(d, b);
              c && c(d, b);
              f && f(b, d, d, e);
              return d;
            };
          }
          function S(a, b, c, d, e, f) {
            function g(a, c, d, e) {
              var f,
                  l,
                  k,
                  q,
                  p,
                  n,
                  w;
              if (r)
                for (w = Array(c.length), q = 0; q < h.length; q += 3)
                  f = h[q], w[f] = c[f];
              else
                w = c;
              q = 0;
              for (p = h.length; q < p; )
                l = w[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), E.$$addScopeInfo(B(l), k)) : k = a, n = c.transcludeOnThisElement ? X(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? X(a, b) : null, c(f, k, l, d, n)) : f && f(a, l.childNodes, t, e);
            }
            for (var h = [],
                l,
                k,
                q,
                p,
                r,
                n = 0; n < a.length; n++) {
              l = new Xb;
              k = W(a[n], [], l, 0 === n ? d : t, e);
              (f = k.length ? ea(k, a[n], l, b, c, null, [], [], f) : null) && f.scope && E.$$addScopeClass(l.$$element);
              l = f && f.terminal || !(q = a[n].childNodes) || !q.length ? null : S(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
              if (f || l)
                h.push(n, f, l), p = !0, r = r || f;
              f = null;
            }
            return p ? g : null;
          }
          function X(a, b, c, d) {
            return function(d, e, f, g, h) {
              d || (d = a.$new(!1, h), d.$$transcluded = !0);
              return b(d, e, {
                parentBoundTranscludeFn: c,
                transcludeControllers: f,
                futureParentElement: g
              });
            };
          }
          function W(a, b, c, d, g) {
            var h = c.$attr,
                l;
            switch (a.nodeType) {
              case na:
                ca(b, ya(ua(a)), "E", d, g);
                for (var k,
                    q,
                    p,
                    r = a.attributes,
                    n = 0,
                    w = r && r.length; n < w; n++) {
                  var O = !1,
                      L = !1;
                  k = r[n];
                  l = k.name;
                  q = U(k.value);
                  k = ya(l);
                  if (p = fb.test(k))
                    l = l.replace(Rc, "").substr(8).replace(/_(.)/g, function(a, b) {
                      return b.toUpperCase();
                    });
                  var u = k.replace(/(Start|End)$/, "");
                  D(u) && k === u + "Start" && (O = l, L = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
                  k = ya(l.toLowerCase());
                  h[k] = l;
                  if (p || !c.hasOwnProperty(k))
                    c[k] = q, Lc(a, k) && (c[k] = !0);
                  Pa(a, b, q, k, p);
                  ca(b, k, "A", d, g, O, L);
                }
                a = a.className;
                if (F(a) && "" !== a)
                  for (; l = f.exec(a); )
                    k = ya(l[2]), ca(b, k, "C", d, g) && (c[k] = U(l[3])), a = a.substr(l.index + l[0].length);
                break;
              case pb:
                M(b, a.nodeValue);
                break;
              case 8:
                try {
                  if (l = e.exec(a.nodeValue))
                    k = ya(l[1]), ca(b, k, "M", d, g) && (c[k] = U(l[2]));
                } catch (v) {}
            }
            b.sort(N);
            return b;
          }
          function wa(a, b, c) {
            var d = [],
                e = 0;
            if (b && a.hasAttribute && a.hasAttribute(b)) {
              do {
                if (!a)
                  throw ja("uterdir", b, c);
                a.nodeType == na && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                d.push(a);
                a = a.nextSibling;
              } while (0 < e);
            } else
              d.push(a);
            return B(d);
          }
          function I(a, b, c) {
            return function(d, e, f, g, h) {
              e = wa(e[0], b, c);
              return a(d, e, f, g, h);
            };
          }
          function ea(a, d, e, f, g, l, k, p, r) {
            function w(a, b, c, d) {
              if (a) {
                c && (a = I(a, c, d));
                a.require = K.require;
                a.directiveName = z;
                if (S === K || K.$$isolateScope)
                  a = Z(a, {isolateScope: !0});
                k.push(a);
              }
              if (b) {
                c && (b = I(b, c, d));
                b.require = K.require;
                b.directiveName = z;
                if (S === K || K.$$isolateScope)
                  b = Z(b, {isolateScope: !0});
                p.push(b);
              }
            }
            function L(a, b, c, d) {
              var e,
                  f = "data",
                  g = !1,
                  l = c,
                  k;
              if (F(b)) {
                k = b.match(h);
                b = b.substring(k[0].length);
                k[3] && (k[1] ? k[3] = null : k[1] = k[3]);
                "^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData", l = c.parent());
                "?" === k[2] && (g = !0);
                e = null;
                d && "data" === f && (e = d[b]) && (e = e.instance);
                e = e || l[f]("$" + b + "Controller");
                if (!e && !g)
                  throw ja("ctreq", b, a);
                return e || null;
              }
              x(b) && (e = [], s(b, function(b) {
                e.push(L(a, b, c, d));
              }));
              return e;
            }
            function v(a, c, f, g, h) {
              function l(a, b, c) {
                var d;
                Va(a) || (c = b, b = a, a = t);
                C && (d = P);
                c || (c = C ? W.parent() : W);
                return h(a, b, d, c, wa);
              }
              var r,
                  w,
                  u,
                  A,
                  P,
                  eb,
                  W,
                  I;
              d === f ? (I = e, W = e.$$element) : (W = B(f), I = new Xb(W, e));
              S && (A = c.$new(!0));
              h && (eb = l, eb.$$boundTransclude = h);
              J && (X = {}, P = {}, s(J, function(a) {
                var b = {
                  $scope: a === S || a.$$isolateScope ? A : c,
                  $element: W,
                  $attrs: I,
                  $transclude: eb
                };
                u = a.controller;
                "@" == u && (u = I[a.name]);
                b = n(u, b, !0, a.controllerAs);
                P[a.name] = b;
                C || W.data("$" + a.name + "Controller", b.instance);
                X[a.name] = b;
              }));
              if (S) {
                E.$$addScopeInfo(W, A, !0, !(ka && (ka === S || ka === S.$$originalDirective)));
                E.$$addScopeClass(W, !0);
                g = X && X[S.name];
                var xa = A;
                g && g.identifier && !0 === S.bindToController && (xa = g.instance);
                s(A.$$isolateBindings = S.$$isolateBindings, function(a, d) {
                  var e = a.attrName,
                      f = a.optional,
                      g,
                      h,
                      l,
                      k;
                  switch (a.mode) {
                    case "@":
                      I.$observe(e, function(a) {
                        xa[d] = a;
                      });
                      I.$$observers[e].$$scope = c;
                      I[e] && (xa[d] = b(I[e])(c));
                      break;
                    case "=":
                      if (f && !I[e])
                        break;
                      h = O(I[e]);
                      k = h.literal ? fa : function(a, b) {
                        return a === b || a !== a && b !== b;
                      };
                      l = h.assign || function() {
                        g = xa[d] = h(c);
                        throw ja("nonassign", I[e], S.name);
                      };
                      g = xa[d] = h(c);
                      f = function(a) {
                        k(a, xa[d]) || (k(a, g) ? l(c, a = xa[d]) : xa[d] = a);
                        return g = a;
                      };
                      f.$stateful = !0;
                      f = a.collection ? c.$watchCollection(I[e], f) : c.$watch(O(I[e], f), null, h.literal);
                      A.$on("$destroy", f);
                      break;
                    case "&":
                      h = O(I[e]), xa[d] = function(a) {
                        return h(c, a);
                      };
                  }
                });
              }
              X && (s(X, function(a) {
                a();
              }), X = null);
              g = 0;
              for (r = k.length; g < r; g++)
                w = k[g], $(w, w.isolateScope ? A : c, W, I, w.require && L(w.directiveName, w.require, W, P), eb);
              var wa = c;
              S && (S.template || null === S.templateUrl) && (wa = A);
              a && a(wa, f.childNodes, t, h);
              for (g = p.length - 1; 0 <= g; g--)
                w = p[g], $(w, w.isolateScope ? A : c, W, I, w.require && L(w.directiveName, w.require, W, P), eb);
            }
            r = r || {};
            for (var A = -Number.MAX_VALUE,
                P,
                J = r.controllerDirectives,
                X,
                S = r.newIsolateScopeDirective,
                ka = r.templateDirective,
                ea = r.nonTlbTranscludeDirective,
                ca = !1,
                D = !1,
                C = r.hasElementTranscludeDirective,
                aa = e.$$element = B(d),
                K,
                z,
                N,
                Aa = f,
                Q,
                M = 0,
                R = a.length; M < R; M++) {
              K = a[M];
              var Pa = K.$$start,
                  fb = K.$$end;
              Pa && (aa = wa(d, Pa, fb));
              N = t;
              if (A > K.priority)
                break;
              if (N = K.scope)
                K.templateUrl || (H(N) ? (Oa("new/isolated scope", S || P, K, aa), S = K) : Oa("new/isolated scope", S, K, aa)), P = P || K;
              z = K.name;
              !K.templateUrl && K.controller && (N = K.controller, J = J || {}, Oa("'" + z + "' controller", J[z], K, aa), J[z] = K);
              if (N = K.transclude)
                ca = !0, K.$$tlb || (Oa("transclusion", ea, K, aa), ea = K), "element" == N ? (C = !0, A = K.priority, N = aa, aa = e.$$element = B(Y.createComment(" " + z + ": " + e[z] + " ")), d = aa[0], V(g, Za.call(N, 0), d), Aa = E(N, f, A, l && l.name, {nonTlbTranscludeDirective: ea})) : (N = B(Tb(d)).contents(), aa.empty(), Aa = E(N, f));
              if (K.template)
                if (D = !0, Oa("template", ka, K, aa), ka = K, N = G(K.template) ? K.template(aa, e) : K.template, N = Sc(N), K.replace) {
                  l = K;
                  N = Rb.test(N) ? Tc(Wb(K.templateNamespace, U(N))) : [];
                  d = N[0];
                  if (1 != N.length || d.nodeType !== na)
                    throw ja("tplrt", z, "");
                  V(g, aa, d);
                  R = {$attr: {}};
                  N = W(d, [], R);
                  var ba = a.splice(M + 1, a.length - (M + 1));
                  S && y(N);
                  a = a.concat(N).concat(ba);
                  Qc(e, R);
                  R = a.length;
                } else
                  aa.html(N);
              if (K.templateUrl)
                D = !0, Oa("template", ka, K, aa), ka = K, K.replace && (l = K), v = T(a.splice(M, a.length - M), aa, e, g, ca && Aa, k, p, {
                  controllerDirectives: J,
                  newIsolateScopeDirective: S,
                  templateDirective: ka,
                  nonTlbTranscludeDirective: ea
                }), R = a.length;
              else if (K.compile)
                try {
                  Q = K.compile(aa, e, Aa), G(Q) ? w(null, Q, Pa, fb) : Q && w(Q.pre, Q.post, Pa, fb);
                } catch (qf) {
                  c(qf, va(aa));
                }
              K.terminal && (v.terminal = !0, A = Math.max(A, K.priority));
            }
            v.scope = P && !0 === P.scope;
            v.transcludeOnThisElement = ca;
            v.elementTranscludeOnThisElement = C;
            v.templateOnThisElement = D;
            v.transclude = Aa;
            r.hasElementTranscludeDirective = C;
            return v;
          }
          function y(a) {
            for (var b = 0,
                c = a.length; b < c; b++) {
              var d = b,
                  e;
              e = z(Object.create(a[b]), {$$isolateScope: !0});
              a[d] = e;
            }
          }
          function ca(b, e, f, g, h, l, k) {
            if (e === h)
              return null;
            h = null;
            if (d.hasOwnProperty(e)) {
              var q;
              e = a.get(e + "Directive");
              for (var r = 0,
                  n = e.length; r < n; r++)
                try {
                  if (q = e[r], (g === t || g > q.priority) && -1 != q.restrict.indexOf(f)) {
                    if (l) {
                      var w = {
                        $$start: l,
                        $$end: k
                      };
                      q = z(Object.create(q), w);
                    }
                    b.push(q);
                    h = q;
                  }
                } catch (O) {
                  c(O);
                }
            }
            return h;
          }
          function D(b) {
            if (d.hasOwnProperty(b))
              for (var c = a.get(b + "Directive"),
                  e = 0,
                  f = c.length; e < f; e++)
                if (b = c[e], b.multiElement)
                  return !0;
            return !1;
          }
          function Qc(a, b) {
            var c = b.$attr,
                d = a.$attr,
                e = a.$$element;
            s(a, function(d, e) {
              "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
            });
            s(b, function(b, f) {
              "class" == f ? (P(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
            });
          }
          function T(a, b, c, d, e, f, g, h) {
            var l = [],
                k,
                q,
                p = b[0],
                n = a.shift(),
                w = z({}, n, {
                  templateUrl: null,
                  transclude: null,
                  replace: null,
                  $$originalDirective: n
                }),
                O = G(n.templateUrl) ? n.templateUrl(b, c) : n.templateUrl,
                u = n.templateNamespace;
            b.empty();
            r(L.getTrustedResourceUrl(O)).then(function(r) {
              var L,
                  v;
              r = Sc(r);
              if (n.replace) {
                r = Rb.test(r) ? Tc(Wb(u, U(r))) : [];
                L = r[0];
                if (1 != r.length || L.nodeType !== na)
                  throw ja("tplrt", n.name, O);
                r = {$attr: {}};
                V(d, b, L);
                var A = W(L, [], r);
                H(n.scope) && y(A);
                a = A.concat(a);
                Qc(c, r);
              } else
                L = p, b.html(r);
              a.unshift(w);
              k = ea(a, L, c, e, b, n, f, g, h);
              s(d, function(a, c) {
                a == L && (d[c] = b[0]);
              });
              for (q = S(b[0].childNodes, e); l.length; ) {
                r = l.shift();
                v = l.shift();
                var J = l.shift(),
                    E = l.shift(),
                    A = b[0];
                if (!r.$$destroyed) {
                  if (v !== p) {
                    var I = v.className;
                    h.hasElementTranscludeDirective && n.replace || (A = Tb(L));
                    V(J, B(v), A);
                    P(B(A), I);
                  }
                  v = k.transcludeOnThisElement ? X(r, k.transclude, E) : E;
                  k(q, r, A, d, v);
                }
              }
              l = null;
            });
            return function(a, b, c, d, e) {
              a = e;
              b.$$destroyed || (l ? l.push(b, c, d, a) : (k.transcludeOnThisElement && (a = X(b, k.transclude, e)), k(q, b, c, d, a)));
            };
          }
          function N(a, b) {
            var c = b.priority - a.priority;
            return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
          }
          function Oa(a, b, c, d) {
            if (b)
              throw ja("multidir", b.name, c.name, a, va(d));
          }
          function M(a, c) {
            var d = b(c, !0);
            d && a.push({
              priority: 0,
              compile: function(a) {
                a = a.parent();
                var b = !!a.length;
                b && E.$$addBindingClass(a);
                return function(a, c) {
                  var e = c.parent();
                  b || E.$$addBindingClass(e);
                  E.$$addBindingInfo(e, d.expressions);
                  a.$watch(d, function(a) {
                    c[0].nodeValue = a;
                  });
                };
              }
            });
          }
          function Wb(a, b) {
            a = Q(a || "html");
            switch (a) {
              case "svg":
              case "math":
                var c = Y.createElement("div");
                c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                return c.childNodes[0].childNodes;
              default:
                return b;
            }
          }
          function R(a, b) {
            if ("srcdoc" == b)
              return L.HTML;
            var c = ua(a);
            if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))
              return L.RESOURCE_URL;
          }
          function Pa(a, c, d, e, f) {
            var h = R(a, e);
            f = g[e] || f;
            var k = b(d, !0, h, f);
            if (k) {
              if ("multiple" === e && "select" === ua(a))
                throw ja("selmulti", va(a));
              c.push({
                priority: 100,
                compile: function() {
                  return {pre: function(a, c, g) {
                      c = g.$$observers || (g.$$observers = {});
                      if (l.test(e))
                        throw ja("nodomevents");
                      var p = g[e];
                      p !== d && (k = p && b(p, !0, h, f), d = p);
                      k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function(a, b) {
                        "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
                      }));
                    }};
                }
              });
            }
          }
          function V(a, b, c) {
            var d = b[0],
                e = b.length,
                f = d.parentNode,
                g,
                h;
            if (a)
              for (g = 0, h = a.length; g < h; g++)
                if (a[g] == d) {
                  a[g++] = c;
                  h = g + e - 1;
                  for (var l = a.length; g < l; g++, h++)
                    h < l ? a[g] = a[h] : delete a[g];
                  a.length -= e - 1;
                  a.context === d && (a.context = c);
                  break;
                }
            f && f.replaceChild(c, d);
            a = Y.createDocumentFragment();
            a.appendChild(d);
            B(c).data(B(d).data());
            ra ? (Pb = !0, ra.cleanData([d])) : delete B.cache[d[B.expando]];
            d = 1;
            for (e = b.length; d < e; d++)
              f = b[d], B(f).remove(), a.appendChild(f), delete b[d];
            b[0] = c;
            b.length = 1;
          }
          function Z(a, b) {
            return z(function() {
              return a.apply(null, arguments);
            }, a, b);
          }
          function $(a, b, d, e, f, g) {
            try {
              a(b, d, e, f, g);
            } catch (h) {
              c(h, va(d));
            }
          }
          var Xb = function(a, b) {
            if (b) {
              var c = Object.keys(b),
                  d,
                  e,
                  f;
              d = 0;
              for (e = c.length; d < e; d++)
                f = c[d], this[f] = b[f];
            } else
              this.$attr = {};
            this.$$element = a;
          };
          Xb.prototype = {
            $normalize: ya,
            $addClass: function(a) {
              a && 0 < a.length && J.addClass(this.$$element, a);
            },
            $removeClass: function(a) {
              a && 0 < a.length && J.removeClass(this.$$element, a);
            },
            $updateClass: function(a, b) {
              var c = Uc(a, b);
              c && c.length && J.addClass(this.$$element, c);
              (c = Uc(b, a)) && c.length && J.removeClass(this.$$element, c);
            },
            $set: function(a, b, d, e) {
              var f = this.$$element[0],
                  g = Lc(f, a),
                  h = kf(f, a),
                  f = a;
              g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
              this[a] = b;
              e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = tc(a, "-"));
              g = ua(this.$$element);
              if ("a" === g && "href" === a || "img" === g && "src" === a)
                this[a] = b = A(b, "src" === a);
              else if ("img" === g && "srcset" === a) {
                for (var g = "",
                    h = U(b),
                    l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,
                    l = /\s/.test(h) ? l : /(,)/,
                    h = h.split(l),
                    l = Math.floor(h.length / 2),
                    k = 0; k < l; k++)
                  var q = 2 * k,
                      g = g + A(U(h[q]), !0),
                      g = g + (" " + U(h[q + 1]));
                h = U(h[2 * k]).split(/\s/);
                g += A(U(h[0]), !0);
                2 === h.length && (g += " " + U(h[1]));
                this[a] = b = g;
              }
              !1 !== d && (null === b || b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
              (a = this.$$observers) && s(a[f], function(a) {
                try {
                  a(b);
                } catch (d) {
                  c(d);
                }
              });
            },
            $observe: function(a, b) {
              var c = this,
                  d = c.$$observers || (c.$$observers = ha()),
                  e = d[a] || (d[a] = []);
              e.push(b);
              v.$evalAsync(function() {
                !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
              });
              return function() {
                Xa(e, b);
              };
            }
          };
          var Aa = b.startSymbol(),
              ka = b.endSymbol(),
              Sc = "{{" == Aa || "}}" == ka ? oa : function(a) {
                return a.replace(/\{\{/g, Aa).replace(/}}/g, ka);
              },
              fb = /^ngAttr[A-Z]/;
          E.$$addBindingInfo = k ? function(a, b) {
            var c = a.data("$binding") || [];
            x(b) ? c = c.concat(b) : c.push(b);
            a.data("$binding", c);
          } : C;
          E.$$addBindingClass = k ? function(a) {
            P(a, "ng-binding");
          } : C;
          E.$$addScopeInfo = k ? function(a, b, c, d) {
            a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
          } : C;
          E.$$addScopeClass = k ? function(a, b) {
            P(a, b ? "ng-isolate-scope" : "ng-scope");
          } : C;
          return E;
        }];
      }
      function ya(b) {
        return cb(b.replace(Rc, ""));
      }
      function Uc(b, a) {
        var c = "",
            d = b.split(/\s+/),
            e = a.split(/\s+/),
            f = 0;
        a: for (; f < d.length; f++) {
          for (var g = d[f],
              h = 0; h < e.length; h++)
            if (g == e[h])
              continue a;
          c += (0 < c.length ? " " : "") + g;
        }
        return c;
      }
      function Tc(b) {
        b = B(b);
        var a = b.length;
        if (1 >= a)
          return b;
        for (; a--; )
          8 === b[a].nodeType && rf.call(b, a, 1);
        return b;
      }
      function Fe() {
        var b = {},
            a = !1,
            c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(a, c) {
          Ma(a, "controller");
          H(a) ? z(b, a) : b[a] = c;
        };
        this.allowGlobals = function() {
          a = !0;
        };
        this.$get = ["$injector", "$window", function(d, e) {
          function f(a, b, c, d) {
            if (!a || !H(a.$scope))
              throw T("$controller")("noscp", d, b);
            a.$scope[b] = c;
          }
          return function(g, h, l, k) {
            var m,
                p,
                q;
            l = !0 === l;
            k && F(k) && (q = k);
            F(g) && (k = g.match(c), p = k[1], q = q || k[3], g = b.hasOwnProperty(p) ? b[p] : vc(h.$scope, p, !0) || (a ? vc(e, p, !0) : t), sb(g, p, !0));
            if (l)
              return l = (x(g) ? g[g.length - 1] : g).prototype, m = Object.create(l), q && f(h, q, m, p || g.name), z(function() {
                d.invoke(g, m, h, p);
                return m;
              }, {
                instance: m,
                identifier: q
              });
            m = d.instantiate(g, h, p);
            q && f(h, q, m, p || g.name);
            return m;
          };
        }];
      }
      function Ge() {
        this.$get = ["$window", function(b) {
          return B(b.document);
        }];
      }
      function He() {
        this.$get = ["$log", function(b) {
          return function(a, c) {
            b.error.apply(b, arguments);
          };
        }];
      }
      function Yb(b, a) {
        if (F(b)) {
          var c = b.replace(sf, "").trim();
          if (c) {
            var d = a("Content-Type");
            (d = d && 0 === d.indexOf(Vc)) || (d = (d = c.match(tf)) && uf[d[0]].test(c));
            d && (b = oc(c));
          }
        }
        return b;
      }
      function Wc(b) {
        var a = ha(),
            c,
            d,
            e;
        if (!b)
          return a;
        s(b.split("\n"), function(b) {
          e = b.indexOf(":");
          c = Q(U(b.substr(0, e)));
          d = U(b.substr(e + 1));
          c && (a[c] = a[c] ? a[c] + ", " + d : d);
        });
        return a;
      }
      function Xc(b) {
        var a = H(b) ? b : t;
        return function(c) {
          a || (a = Wc(b));
          return c ? (c = a[Q(c)], void 0 === c && (c = null), c) : a;
        };
      }
      function Yc(b, a, c, d) {
        if (G(d))
          return d(b, a, c);
        s(d, function(d) {
          b = d(b, a, c);
        });
        return b;
      }
      function Ke() {
        var b = this.defaults = {
          transformResponse: [Yb],
          transformRequest: [function(a) {
            return H(a) && "[object File]" !== Da.call(a) && "[object Blob]" !== Da.call(a) && "[object FormData]" !== Da.call(a) ? $a(a) : a;
          }],
          headers: {
            common: {Accept: "application/json, text/plain, */*"},
            post: qa(Zb),
            put: qa(Zb),
            patch: qa(Zb)
          },
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN"
        },
            a = !1;
        this.useApplyAsync = function(b) {
          return y(b) ? (a = !!b, this) : a;
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(d, e, f, g, h, l) {
          function k(a) {
            function c(a) {
              var b = z({}, a);
              b.data = a.data ? Yc(a.data, a.headers, a.status, e.transformResponse) : a.data;
              a = a.status;
              return 200 <= a && 300 > a ? b : h.reject(b);
            }
            function d(a) {
              var b,
                  c = {};
              s(a, function(a, d) {
                G(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a;
              });
              return c;
            }
            if (!ga.isObject(a))
              throw T("$http")("badreq", a);
            var e = z({
              method: "get",
              transformRequest: b.transformRequest,
              transformResponse: b.transformResponse
            }, a);
            e.headers = function(a) {
              var c = b.headers,
                  e = z({}, a.headers),
                  f,
                  g,
                  c = z({}, c.common, c[Q(a.method)]);
              a: for (f in c) {
                a = Q(f);
                for (g in e)
                  if (Q(g) === a)
                    continue a;
                e[f] = c[f];
              }
              return d(e);
            }(a);
            e.method = ub(e.method);
            var f = [function(a) {
              var d = a.headers,
                  e = Yc(a.data, Xc(d), t, a.transformRequest);
              D(e) && s(d, function(a, b) {
                "content-type" === Q(b) && delete d[b];
              });
              D(a.withCredentials) && !D(b.withCredentials) && (a.withCredentials = b.withCredentials);
              return m(a, e).then(c, c);
            }, t],
                g = h.when(e);
            for (s(u, function(a) {
              (a.request || a.requestError) && f.unshift(a.request, a.requestError);
              (a.response || a.responseError) && f.push(a.response, a.responseError);
            }); f.length; ) {
              a = f.shift();
              var l = f.shift(),
                  g = g.then(a, l);
            }
            g.success = function(a) {
              g.then(function(b) {
                a(b.data, b.status, b.headers, e);
              });
              return g;
            };
            g.error = function(a) {
              g.then(null, function(b) {
                a(b.data, b.status, b.headers, e);
              });
              return g;
            };
            return g;
          }
          function m(c, f) {
            function l(b, c, d, e) {
              function f() {
                m(c, b, d, e);
              }
              P && (200 <= b && 300 > b ? P.put(X, [b, c, Wc(d), e]) : P.remove(X));
              a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply());
            }
            function m(a, b, d, e) {
              b = Math.max(b, 0);
              (200 <= b && 300 > b ? J.resolve : J.reject)({
                data: a,
                status: b,
                headers: Xc(d),
                config: c,
                statusText: e
              });
            }
            function w(a) {
              m(a.data, a.status, qa(a.headers()), a.statusText);
            }
            function u() {
              var a = k.pendingRequests.indexOf(c);
              -1 !== a && k.pendingRequests.splice(a, 1);
            }
            var J = h.defer(),
                A = J.promise,
                P,
                E,
                s = c.headers,
                X = p(c.url, c.params);
            k.pendingRequests.push(c);
            A.then(u, u);
            !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (P = H(c.cache) ? c.cache : H(b.cache) ? b.cache : q);
            P && (E = P.get(X), y(E) ? E && G(E.then) ? E.then(w, w) : x(E) ? m(E[1], E[0], qa(E[2]), E[3]) : m(E, 200, {}, "OK") : P.put(X, A));
            D(E) && ((E = Zc(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : t) && (s[c.xsrfHeaderName || b.xsrfHeaderName] = E), d(c.method, X, f, l, s, c.timeout, c.withCredentials, c.responseType));
            return A;
          }
          function p(a, b) {
            if (!b)
              return a;
            var c = [];
            Ed(b, function(a, b) {
              null === a || D(a) || (x(a) || (a = [a]), s(a, function(a) {
                H(a) && (a = pa(a) ? a.toISOString() : $a(a));
                c.push(Fa(b) + "=" + Fa(a));
              }));
            });
            0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
            return a;
          }
          var q = f("$http"),
              u = [];
          s(c, function(a) {
            u.unshift(F(a) ? l.get(a) : l.invoke(a));
          });
          k.pendingRequests = [];
          (function(a) {
            s(arguments, function(a) {
              k[a] = function(b, c) {
                return k(z(c || {}, {
                  method: a,
                  url: b
                }));
              };
            });
          })("get", "delete", "head", "jsonp");
          (function(a) {
            s(arguments, function(a) {
              k[a] = function(b, c, d) {
                return k(z(d || {}, {
                  method: a,
                  url: b,
                  data: c
                }));
              };
            });
          })("post", "put", "patch");
          k.defaults = b;
          return k;
        }];
      }
      function vf() {
        return new M.XMLHttpRequest;
      }
      function Le() {
        this.$get = ["$browser", "$window", "$document", function(b, a, c) {
          return wf(b, vf, b.defer, a.angular.callbacks, c[0]);
        }];
      }
      function wf(b, a, c, d, e) {
        function f(a, b, c) {
          var f = e.createElement("script"),
              m = null;
          f.type = "text/javascript";
          f.src = a;
          f.async = !0;
          m = function(a) {
            f.removeEventListener("load", m, !1);
            f.removeEventListener("error", m, !1);
            e.body.removeChild(f);
            f = null;
            var g = -1,
                u = "unknown";
            a && ("load" !== a.type || d[b].called || (a = {type: "error"}), u = a.type, g = "error" === a.type ? 404 : 200);
            c && c(g, u);
          };
          f.addEventListener("load", m, !1);
          f.addEventListener("error", m, !1);
          e.body.appendChild(f);
          return m;
        }
        return function(e, h, l, k, m, p, q, u) {
          function r() {
            v && v();
            w && w.abort();
          }
          function O(a, d, e, f, g) {
            J !== t && c.cancel(J);
            v = w = null;
            a(d, e, f, g);
            b.$$completeOutstandingRequest(C);
          }
          b.$$incOutstandingRequestCount();
          h = h || b.url();
          if ("jsonp" == Q(e)) {
            var n = "_" + (d.counter++).toString(36);
            d[n] = function(a) {
              d[n].data = a;
              d[n].called = !0;
            };
            var v = f(h.replace("JSON_CALLBACK", "angular.callbacks." + n), n, function(a, b) {
              O(k, a, d[n].data, "", b);
              d[n] = C;
            });
          } else {
            var w = a();
            w.open(e, h, !0);
            s(m, function(a, b) {
              y(a) && w.setRequestHeader(b, a);
            });
            w.onload = function() {
              var a = w.statusText || "",
                  b = "response" in w ? w.response : w.responseText,
                  c = 1223 === w.status ? 204 : w.status;
              0 === c && (c = b ? 200 : "file" == Ba(h).protocol ? 404 : 0);
              O(k, c, b, w.getAllResponseHeaders(), a);
            };
            e = function() {
              O(k, -1, null, null, "");
            };
            w.onerror = e;
            w.onabort = e;
            q && (w.withCredentials = !0);
            if (u)
              try {
                w.responseType = u;
              } catch (L) {
                if ("json" !== u)
                  throw L;
              }
            w.send(l || null);
          }
          if (0 < p)
            var J = c(r, p);
          else
            p && G(p.then) && p.then(r);
        };
      }
      function Ie() {
        var b = "{{",
            a = "}}";
        this.startSymbol = function(a) {
          return a ? (b = a, this) : b;
        };
        this.endSymbol = function(b) {
          return b ? (a = b, this) : a;
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
          function f(a) {
            return "\\\\\\" + a;
          }
          function g(f, g, u, r) {
            function O(c) {
              return c.replace(k, b).replace(m, a);
            }
            function n(a) {
              try {
                var b = a;
                a = u ? e.getTrusted(u, b) : e.valueOf(b);
                var c;
                if (r && !y(a))
                  c = a;
                else if (null == a)
                  c = "";
                else {
                  switch (typeof a) {
                    case "string":
                      break;
                    case "number":
                      a = "" + a;
                      break;
                    default:
                      a = $a(a);
                  }
                  c = a;
                }
                return c;
              } catch (g) {
                c = $b("interr", f, g.toString()), d(c);
              }
            }
            r = !!r;
            for (var v,
                w,
                L = 0,
                J = [],
                A = [],
                P = f.length,
                E = [],
                s = []; L < P; )
              if (-1 != (v = f.indexOf(b, L)) && -1 != (w = f.indexOf(a, v + h)))
                L !== v && E.push(O(f.substring(L, v))), L = f.substring(v + h, w), J.push(L), A.push(c(L, n)), L = w + l, s.push(E.length), E.push("");
              else {
                L !== P && E.push(O(f.substring(L)));
                break;
              }
            if (u && 1 < E.length)
              throw $b("noconcat", f);
            if (!g || J.length) {
              var X = function(a) {
                for (var b = 0,
                    c = J.length; b < c; b++) {
                  if (r && D(a[b]))
                    return;
                  E[s[b]] = a[b];
                }
                return E.join("");
              };
              return z(function(a) {
                var b = 0,
                    c = J.length,
                    e = Array(c);
                try {
                  for (; b < c; b++)
                    e[b] = A[b](a);
                  return X(e);
                } catch (g) {
                  a = $b("interr", f, g.toString()), d(a);
                }
              }, {
                exp: f,
                expressions: J,
                $$watchDelegate: function(a, b, c) {
                  var d;
                  return a.$watchGroup(A, function(c, e) {
                    var f = X(c);
                    G(b) && b.call(this, f, c !== e ? d : f, a);
                    d = f;
                  }, c);
                }
              });
            }
          }
          var h = b.length,
              l = a.length,
              k = new RegExp(b.replace(/./g, f), "g"),
              m = new RegExp(a.replace(/./g, f), "g");
          g.startSymbol = function() {
            return b;
          };
          g.endSymbol = function() {
            return a;
          };
          return g;
        }];
      }
      function Je() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", function(b, a, c, d) {
          function e(e, h, l, k) {
            var m = a.setInterval,
                p = a.clearInterval,
                q = 0,
                u = y(k) && !k,
                r = (u ? d : c).defer(),
                O = r.promise;
            l = y(l) ? l : 0;
            O.then(null, null, e);
            O.$$intervalId = m(function() {
              r.notify(q++);
              0 < l && q >= l && (r.resolve(q), p(O.$$intervalId), delete f[O.$$intervalId]);
              u || b.$apply();
            }, h);
            f[O.$$intervalId] = r;
            return O;
          }
          var f = {};
          e.cancel = function(b) {
            return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1;
          };
          return e;
        }];
      }
      function Rd() {
        this.$get = function() {
          return {
            id: "en-us",
            NUMBER_FORMATS: {
              DECIMAL_SEP: ".",
              GROUP_SEP: ",",
              PATTERNS: [{
                minInt: 1,
                minFrac: 0,
                maxFrac: 3,
                posPre: "",
                posSuf: "",
                negPre: "-",
                negSuf: "",
                gSize: 3,
                lgSize: 3
              }, {
                minInt: 1,
                minFrac: 2,
                maxFrac: 2,
                posPre: "\u00a4",
                posSuf: "",
                negPre: "(\u00a4",
                negSuf: ")",
                gSize: 3,
                lgSize: 3
              }],
              CURRENCY_SYM: "$"
            },
            DATETIME_FORMATS: {
              MONTH: "January February March April May June July August September October November December".split(" "),
              SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
              DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
              SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
              AMPMS: ["AM", "PM"],
              medium: "MMM d, y h:mm:ss a",
              "short": "M/d/yy h:mm a",
              fullDate: "EEEE, MMMM d, y",
              longDate: "MMMM d, y",
              mediumDate: "MMM d, y",
              shortDate: "M/d/yy",
              mediumTime: "h:mm:ss a",
              shortTime: "h:mm a"
            },
            pluralCat: function(b) {
              return 1 === b ? "one" : "other";
            }
          };
        };
      }
      function ac(b) {
        b = b.split("/");
        for (var a = b.length; a--; )
          b[a] = qb(b[a]);
        return b.join("/");
      }
      function $c(b, a) {
        var c = Ba(b);
        a.$$protocol = c.protocol;
        a.$$host = c.hostname;
        a.$$port = ba(c.port) || xf[c.protocol] || null;
      }
      function ad(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = Ba(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
        a.$$search = qc(d.search);
        a.$$hash = decodeURIComponent(d.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path);
      }
      function za(b, a) {
        if (0 === a.indexOf(b))
          return a.substr(b.length);
      }
      function Ha(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a);
      }
      function bd(b) {
        return b.replace(/(#.+)|#$/, "$1");
      }
      function bc(b) {
        return b.substr(0, Ha(b).lastIndexOf("/") + 1);
      }
      function cc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = bc(b);
        $c(b, this);
        this.$$parse = function(a) {
          var b = za(c, a);
          if (!F(b))
            throw Fb("ipthprfx", a, c);
          ad(b, this);
          this.$$path || (this.$$path = "/");
          this.$$compose();
        };
        this.$$compose = function() {
          var a = Nb(this.$$search),
              b = this.$$hash ? "#" + qb(this.$$hash) : "";
          this.$$url = ac(this.$$path) + (a ? "?" + a : "") + b;
          this.$$absUrl = c + this.$$url.substr(1);
        };
        this.$$parseLinkUrl = function(d, e) {
          if (e && "#" === e[0])
            return this.hash(e.slice(1)), !0;
          var f,
              g;
          (f = za(b, d)) !== t ? (g = f, g = (f = za(a, f)) !== t ? c + (za("/", f) || f) : b + g) : (f = za(c, d)) !== t ? g = c + f : c == d + "/" && (g = c);
          g && this.$$parse(g);
          return !!g;
        };
      }
      function dc(b, a) {
        var c = bc(b);
        $c(b, this);
        this.$$parse = function(d) {
          d = za(b, d) || za(c, d);
          var e;
          "#" === d.charAt(0) ? (e = za(a, d), D(e) && (e = d)) : e = this.$$html5 ? d : "";
          ad(e, this);
          d = this.$$path;
          var f = /^\/[A-Z]:(\/.*)/;
          0 === e.indexOf(b) && (e = e.replace(b, ""));
          f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
          this.$$path = d;
          this.$$compose();
        };
        this.$$compose = function() {
          var c = Nb(this.$$search),
              e = this.$$hash ? "#" + qb(this.$$hash) : "";
          this.$$url = ac(this.$$path) + (c ? "?" + c : "") + e;
          this.$$absUrl = b + (this.$$url ? a + this.$$url : "");
        };
        this.$$parseLinkUrl = function(a, c) {
          return Ha(b) == Ha(a) ? (this.$$parse(a), !0) : !1;
        };
      }
      function cd(b, a) {
        this.$$html5 = !0;
        dc.apply(this, arguments);
        var c = bc(b);
        this.$$parseLinkUrl = function(d, e) {
          if (e && "#" === e[0])
            return this.hash(e.slice(1)), !0;
          var f,
              g;
          b == Ha(d) ? f = d : (g = za(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
          f && this.$$parse(f);
          return !!f;
        };
        this.$$compose = function() {
          var c = Nb(this.$$search),
              e = this.$$hash ? "#" + qb(this.$$hash) : "";
          this.$$url = ac(this.$$path) + (c ? "?" + c : "") + e;
          this.$$absUrl = b + a + this.$$url;
        };
      }
      function Gb(b) {
        return function() {
          return this[b];
        };
      }
      function dd(b, a) {
        return function(c) {
          if (D(c))
            return this[b];
          this[b] = a(c);
          this.$$compose();
          return this;
        };
      }
      function Me() {
        var b = "",
            a = {
              enabled: !1,
              requireBase: !0,
              rewriteLinks: !0
            };
        this.hashPrefix = function(a) {
          return y(a) ? (b = a, this) : b;
        };
        this.html5Mode = function(b) {
          return Wa(b) ? (a.enabled = b, this) : H(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a;
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
          function h(a, b, c) {
            var e = k.url(),
                f = k.$$state;
            try {
              d.url(a, b, c), k.$$state = d.state();
            } catch (g) {
              throw k.url(e), k.$$state = f, g;
            }
          }
          function l(a, b) {
            c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b);
          }
          var k,
              m;
          m = d.baseHref();
          var p = d.url(),
              q;
          if (a.enabled) {
            if (!m && a.requireBase)
              throw Fb("nobase");
            q = p.substring(0, p.indexOf("/", p.indexOf("//") + 2)) + (m || "/");
            m = e.history ? cc : cd;
          } else
            q = Ha(p), m = dc;
          k = new m(q, "#" + b);
          k.$$parseLinkUrl(p, p);
          k.$$state = d.state();
          var u = /^\s*(javascript|mailto):/i;
          f.on("click", function(b) {
            if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && 2 != b.which) {
              for (var e = B(b.target); "a" !== ua(e[0]); )
                if (e[0] === f[0] || !(e = e.parent())[0])
                  return;
              var h = e.prop("href"),
                  l = e.attr("href") || e.attr("xlink:href");
              H(h) && "[object SVGAnimatedString]" === h.toString() && (h = Ba(h.animVal).href);
              u.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0));
            }
          });
          k.absUrl() != p && d.url(k.absUrl(), !0);
          var r = !0;
          d.onUrlChange(function(a, b) {
            c.$evalAsync(function() {
              var d = k.absUrl(),
                  e = k.$$state,
                  f;
              k.$$parse(a);
              k.$$state = b;
              f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
              k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (r = !1, l(d, e)));
            });
            c.$$phase || c.$digest();
          });
          c.$watch(function() {
            var a = bd(d.url()),
                b = bd(k.absUrl()),
                f = d.state(),
                g = k.$$replace,
                q = a !== b || k.$$html5 && e.history && f !== k.$$state;
            if (r || q)
              r = !1, c.$evalAsync(function() {
                var b = k.absUrl(),
                    d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)));
              });
            k.$$replace = !1;
          });
          return k;
        }];
      }
      function Ne() {
        var b = !0,
            a = this;
        this.debugEnabled = function(a) {
          return y(a) ? (b = a, this) : b;
        };
        this.$get = ["$window", function(c) {
          function d(a) {
            a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
            return a;
          }
          function e(a) {
            var b = c.console || {},
                e = b[a] || b.log || C;
            a = !1;
            try {
              a = !!e.apply;
            } catch (l) {}
            return a ? function() {
              var a = [];
              s(arguments, function(b) {
                a.push(d(b));
              });
              return e.apply(b, a);
            } : function(a, b) {
              e(a, null == b ? "" : b);
            };
          }
          return {
            log: e("log"),
            info: e("info"),
            warn: e("warn"),
            error: e("error"),
            debug: function() {
              var c = e("debug");
              return function() {
                b && c.apply(a, arguments);
              };
            }()
          };
        }];
      }
      function sa(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b)
          throw la("isecfld", a);
        return b;
      }
      function ta(b, a) {
        if (b) {
          if (b.constructor === b)
            throw la("isecfn", a);
          if (b.window === b)
            throw la("isecwindow", a);
          if (b.children && (b.nodeName || b.prop && b.attr && b.find))
            throw la("isecdom", a);
          if (b === Object)
            throw la("isecobj", a);
        }
        return b;
      }
      function ec(b) {
        return b.constant;
      }
      function gb(b, a, c, d) {
        ta(b, d);
        a = a.split(".");
        for (var e,
            f = 0; 1 < a.length; f++) {
          e = sa(a.shift(), d);
          var g = ta(b[e], d);
          g || (g = {}, b[e] = g);
          b = g;
        }
        e = sa(a.shift(), d);
        ta(b[e], d);
        return b[e] = c;
      }
      function Qa(b) {
        return "constructor" == b;
      }
      function ed(b, a, c, d, e, f, g) {
        sa(b, f);
        sa(a, f);
        sa(c, f);
        sa(d, f);
        sa(e, f);
        var h = function(a) {
          return ta(a, f);
        },
            l = g || Qa(b) ? h : oa,
            k = g || Qa(a) ? h : oa,
            m = g || Qa(c) ? h : oa,
            p = g || Qa(d) ? h : oa,
            q = g || Qa(e) ? h : oa;
        return function(f, g) {
          var h = g && g.hasOwnProperty(b) ? g : f;
          if (null == h)
            return h;
          h = l(h[b]);
          if (!a)
            return h;
          if (null == h)
            return t;
          h = k(h[a]);
          if (!c)
            return h;
          if (null == h)
            return t;
          h = m(h[c]);
          if (!d)
            return h;
          if (null == h)
            return t;
          h = p(h[d]);
          return e ? null == h ? t : h = q(h[e]) : h;
        };
      }
      function yf(b, a) {
        return function(c, d) {
          return b(c, d, ta, a);
        };
      }
      function zf(b, a, c) {
        var d = a.expensiveChecks,
            e = d ? Af : Bf,
            f = e[b];
        if (f)
          return f;
        var g = b.split("."),
            h = g.length;
        if (a.csp)
          f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function(a, b) {
            var e = 0,
                f;
            do
              f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = t, a = f;
 while (e < h);
            return f;
          };
        else {
          var l = "";
          d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
          var k = d;
          s(g, function(a, b) {
            sa(a, c);
            var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
            if (d || Qa(a))
              e = "eso(" + e + ", fe)", k = !0;
            l += "if(s == null) return undefined;\ns=" + e + ";\n";
          });
          l += "return s;";
          a = new Function("s", "l", "eso", "fe", l);
          a.toString = da(l);
          k && (a = yf(a, c));
          f = a;
        }
        f.sharedGetter = !0;
        f.assign = function(a, c) {
          return gb(a, b, c, b);
        };
        return e[b] = f;
      }
      function fc(b) {
        return G(b.valueOf) ? b.valueOf() : Cf.call(b);
      }
      function Oe() {
        var b = ha(),
            a = ha();
        this.$get = ["$filter", "$sniffer", function(c, d) {
          function e(a) {
            var b = a;
            a.sharedGetter && (b = function(b, c) {
              return a(b, c);
            }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);
            return b;
          }
          function f(a, b) {
            for (var c = 0,
                d = a.length; c < d; c++) {
              var e = a[c];
              e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e));
            }
            return b;
          }
          function g(a, b) {
            return null == a || null == b ? a === b : "object" === typeof a && (a = fc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b;
          }
          function h(a, b, c, d) {
            var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])),
                h;
            if (1 === e.length) {
              var l = g,
                  e = e[0];
              return a.$watch(function(a) {
                var b = e(a);
                g(b, l) || (h = d(a), l = b && fc(b));
                return h;
              }, b, c);
            }
            for (var k = [],
                q = 0,
                p = e.length; q < p; q++)
              k[q] = g;
            return a.$watch(function(a) {
              for (var b = !1,
                  c = 0,
                  f = e.length; c < f; c++) {
                var l = e[c](a);
                if (b || (b = !g(l, k[c])))
                  k[c] = l && fc(l);
              }
              b && (h = d(a));
              return h;
            }, b, c);
          }
          function l(a, b, c, d) {
            var e,
                f;
            return e = a.$watch(function(a) {
              return d(a);
            }, function(a, c, d) {
              f = a;
              G(b) && b.apply(this, arguments);
              y(a) && d.$$postDigest(function() {
                y(f) && e();
              });
            }, c);
          }
          function k(a, b, c, d) {
            function e(a) {
              var b = !0;
              s(a, function(a) {
                y(a) || (b = !1);
              });
              return b;
            }
            var f,
                g;
            return f = a.$watch(function(a) {
              return d(a);
            }, function(a, c, d) {
              g = a;
              G(b) && b.call(this, a, c, d);
              e(a) && d.$$postDigest(function() {
                e(g) && f();
              });
            }, c);
          }
          function m(a, b, c, d) {
            var e;
            return e = a.$watch(function(a) {
              return d(a);
            }, function(a, c, d) {
              G(b) && b.apply(this, arguments);
              e();
            }, c);
          }
          function p(a, b) {
            if (!b)
              return a;
            var c = a.$$watchDelegate,
                c = c !== k && c !== l ? function(c, d) {
                  var e = a(c, d);
                  return b(e, c, d);
                } : function(c, d) {
                  var e = a(c, d),
                      f = b(e, c, d);
                  return y(e) ? f : e;
                };
            a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
            return c;
          }
          var q = {
            csp: d.csp,
            expensiveChecks: !1
          },
              u = {
                csp: d.csp,
                expensiveChecks: !0
              };
          return function(d, f, g) {
            var v,
                w,
                L;
            switch (typeof d) {
              case "string":
                L = d = d.trim();
                var J = g ? a : b;
                v = J[L];
                v || (":" === d.charAt(0) && ":" === d.charAt(1) && (w = !0, d = d.substring(2)), g = g ? u : q, v = new gc(g), v = (new hb(v, c, g)).parse(d), v.constant ? v.$$watchDelegate = m : w ? (v = e(v), v.$$watchDelegate = v.literal ? k : l) : v.inputs && (v.$$watchDelegate = h), J[L] = v);
                return p(v, f);
              case "function":
                return p(d, f);
              default:
                return p(C, f);
            }
          };
        }];
      }
      function Qe() {
        this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
          return fd(function(a) {
            b.$evalAsync(a);
          }, a);
        }];
      }
      function Re() {
        this.$get = ["$browser", "$exceptionHandler", function(b, a) {
          return fd(function(a) {
            b.defer(a);
          }, a);
        }];
      }
      function fd(b, a) {
        function c(a, b, c) {
          function d(b) {
            return function(c) {
              e || (e = !0, b.call(a, c));
            };
          }
          var e = !1;
          return [d(b), d(c)];
        }
        function d() {
          this.$$state = {status: 0};
        }
        function e(a, b) {
          return function(c) {
            b.call(a, c);
          };
        }
        function f(c) {
          !c.processScheduled && c.pending && (c.processScheduled = !0, b(function() {
            var b,
                d,
                e;
            e = c.pending;
            c.processScheduled = !1;
            c.pending = t;
            for (var f = 0,
                g = e.length; f < g; ++f) {
              d = e[f][0];
              b = e[f][c.status];
              try {
                G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
              } catch (h) {
                d.reject(h), a(h);
              }
            }
          }));
        }
        function g() {
          this.promise = new d;
          this.resolve = e(this, this.resolve);
          this.reject = e(this, this.reject);
          this.notify = e(this, this.notify);
        }
        var h = T("$q", TypeError);
        d.prototype = {
          then: function(a, b, c) {
            var d = new g;
            this.$$state.pending = this.$$state.pending || [];
            this.$$state.pending.push([d, a, b, c]);
            0 < this.$$state.status && f(this.$$state);
            return d.promise;
          },
          "catch": function(a) {
            return this.then(null, a);
          },
          "finally": function(a, b) {
            return this.then(function(b) {
              return k(b, !0, a);
            }, function(b) {
              return k(b, !1, a);
            }, b);
          }
        };
        g.prototype = {
          resolve: function(a) {
            this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a));
          },
          $$resolve: function(b) {
            var d,
                e;
            e = c(this, this.$$resolve, this.$$reject);
            try {
              if (H(b) || G(b))
                d = b && b.then;
              G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state));
            } catch (g) {
              e[1](g), a(g);
            }
          },
          reject: function(a) {
            this.promise.$$state.status || this.$$reject(a);
          },
          $$reject: function(a) {
            this.promise.$$state.value = a;
            this.promise.$$state.status = 2;
            f(this.promise.$$state);
          },
          notify: function(c) {
            var d = this.promise.$$state.pending;
            0 >= this.promise.$$state.status && d && d.length && b(function() {
              for (var b,
                  e,
                  f = 0,
                  g = d.length; f < g; f++) {
                e = d[f][0];
                b = d[f][3];
                try {
                  e.notify(G(b) ? b(c) : c);
                } catch (h) {
                  a(h);
                }
              }
            });
          }
        };
        var l = function(a, b) {
          var c = new g;
          b ? c.resolve(a) : c.reject(a);
          return c.promise;
        },
            k = function(a, b, c) {
              var d = null;
              try {
                G(c) && (d = c());
              } catch (e) {
                return l(e, !1);
              }
              return d && G(d.then) ? d.then(function() {
                return l(a, b);
              }, function(a) {
                return l(a, !1);
              }) : l(a, b);
            },
            m = function(a, b, c, d) {
              var e = new g;
              e.resolve(a);
              return e.promise.then(b, c, d);
            },
            p = function u(a) {
              if (!G(a))
                throw h("norslvr", a);
              if (!(this instanceof u))
                return new u(a);
              var b = new g;
              a(function(a) {
                b.resolve(a);
              }, function(a) {
                b.reject(a);
              });
              return b.promise;
            };
        p.defer = function() {
          return new g;
        };
        p.reject = function(a) {
          var b = new g;
          b.reject(a);
          return b.promise;
        };
        p.when = m;
        p.all = function(a) {
          var b = new g,
              c = 0,
              d = x(a) ? [] : {};
          s(a, function(a, e) {
            c++;
            m(a).then(function(a) {
              d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
            }, function(a) {
              d.hasOwnProperty(e) || b.reject(a);
            });
          });
          0 === c && b.resolve(d);
          return b.promise;
        };
        return p;
      }
      function $e() {
        this.$get = ["$window", "$timeout", function(b, a) {
          var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
              d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
              e = !!c,
              f = e ? function(a) {
                var b = c(a);
                return function() {
                  d(b);
                };
              } : function(b) {
                var c = a(b, 16.66, !1);
                return function() {
                  a.cancel(c);
                };
              };
          f.supported = e;
          return f;
        }];
      }
      function Pe() {
        var b = 10,
            a = T("$rootScope"),
            c = null,
            d = null;
        this.digestTtl = function(a) {
          arguments.length && (b = a);
          return b;
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(e, f, g, h) {
          function l() {
            this.$id = ++nb;
            this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
            this.$root = this;
            this.$$destroyed = !1;
            this.$$listeners = {};
            this.$$listenerCount = {};
            this.$$isolateBindings = null;
          }
          function k(b) {
            if (r.$$phase)
              throw a("inprog", r.$$phase);
            r.$$phase = b;
          }
          function m(a, b, c) {
            do
              a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
 while (a = a.$parent);
          }
          function p() {}
          function q() {
            for (; v.length; )
              try {
                v.shift()();
              } catch (a) {
                f(a);
              }
            d = null;
          }
          function u() {
            null === d && (d = h.defer(function() {
              r.$apply(q);
            }));
          }
          l.prototype = {
            constructor: l,
            $new: function(a, b) {
              function c() {
                d.$$destroyed = !0;
              }
              var d;
              b = b || this;
              a ? (d = new l, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$id = ++nb;
                this.$$ChildScope = null;
              }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope);
              d.$parent = b;
              d.$$prevSibling = b.$$childTail;
              b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d;
              (a || b != this) && d.$on("$destroy", c);
              return d;
            },
            $watch: function(a, b, d) {
              var e = g(a);
              if (e.$$watchDelegate)
                return e.$$watchDelegate(this, b, d, e);
              var f = this.$$watchers,
                  h = {
                    fn: b,
                    last: p,
                    get: e,
                    exp: a,
                    eq: !!d
                  };
              c = null;
              G(b) || (h.fn = C);
              f || (f = this.$$watchers = []);
              f.unshift(h);
              return function() {
                Xa(f, h);
                c = null;
              };
            },
            $watchGroup: function(a, b) {
              function c() {
                h = !1;
                l ? (l = !1, b(e, e, g)) : b(e, d, g);
              }
              var d = Array(a.length),
                  e = Array(a.length),
                  f = [],
                  g = this,
                  h = !1,
                  l = !0;
              if (!a.length) {
                var k = !0;
                g.$evalAsync(function() {
                  k && b(e, e, g);
                });
                return function() {
                  k = !1;
                };
              }
              if (1 === a.length)
                return this.$watch(a[0], function(a, c, f) {
                  e[0] = a;
                  d[0] = c;
                  b(e, a === c ? e : d, f);
                });
              s(a, function(a, b) {
                var l = g.$watch(a, function(a, f) {
                  e[b] = a;
                  d[b] = f;
                  h || (h = !0, g.$evalAsync(c));
                });
                f.push(l);
              });
              return function() {
                for (; f.length; )
                  f.shift()();
              };
            },
            $watchCollection: function(a, b) {
              function c(a) {
                e = a;
                var b,
                    d,
                    g,
                    h;
                if (!D(e)) {
                  if (H(e))
                    if (Ta(e))
                      for (f !== q && (f = q, u = f.length = 0, k++), a = e.length, u !== a && (k++, f.length = u = a), b = 0; b < a; b++)
                        h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (k++, f[b] = g);
                    else {
                      f !== m && (f = m = {}, u = 0, k++);
                      a = 0;
                      for (b in e)
                        e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (k++, f[b] = g)) : (u++, f[b] = g, k++));
                      if (u > a)
                        for (b in k++, f)
                          e.hasOwnProperty(b) || (u--, delete f[b]);
                    }
                  else
                    f !== e && (f = e, k++);
                  return k;
                }
              }
              c.$stateful = !0;
              var d = this,
                  e,
                  f,
                  h,
                  l = 1 < b.length,
                  k = 0,
                  p = g(a, c),
                  q = [],
                  m = {},
                  n = !0,
                  u = 0;
              return this.$watch(p, function() {
                n ? (n = !1, b(e, e, d)) : b(e, h, d);
                if (l)
                  if (H(e))
                    if (Ta(e)) {
                      h = Array(e.length);
                      for (var a = 0; a < e.length; a++)
                        h[a] = e[a];
                    } else
                      for (a in h = {}, e)
                        rc.call(e, a) && (h[a] = e[a]);
                  else
                    h = e;
              });
            },
            $digest: function() {
              var e,
                  g,
                  l,
                  m,
                  u,
                  v,
                  s = b,
                  t,
                  W = [],
                  y,
                  I;
              k("$digest");
              h.$$checkUrlChange();
              this === r && null !== d && (h.defer.cancel(d), q());
              c = null;
              do {
                v = !1;
                for (t = this; O.length; ) {
                  try {
                    I = O.shift(), I.scope.$eval(I.expression, I.locals);
                  } catch (B) {
                    f(B);
                  }
                  c = null;
                }
                a: do {
                  if (m = t.$$watchers)
                    for (u = m.length; u--; )
                      try {
                        if (e = m[u])
                          if ((g = e.get(t)) !== (l = e.last) && !(e.eq ? fa(g, l) : "number" === typeof g && "number" === typeof l && isNaN(g) && isNaN(l)))
                            v = !0, c = e, e.last = e.eq ? Ea(g, null) : g, e.fn(g, l === p ? g : l, t), 5 > s && (y = 4 - s, W[y] || (W[y] = []), W[y].push({
                              msg: G(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                              newVal: g,
                              oldVal: l
                            }));
                          else if (e === c) {
                            v = !1;
                            break a;
                          }
                      } catch (D) {
                        f(D);
                      }
                  if (!(m = t.$$childHead || t !== this && t.$$nextSibling))
                    for (; t !== this && !(m = t.$$nextSibling); )
                      t = t.$parent;
                } while (t = m);
                if ((v || O.length) && !s--)
                  throw r.$$phase = null, a("infdig", b, W);
              } while (v || O.length);
              for (r.$$phase = null; n.length; )
                try {
                  n.shift()();
                } catch (ca) {
                  f(ca);
                }
            },
            $destroy: function() {
              if (!this.$$destroyed) {
                var a = this.$parent;
                this.$broadcast("$destroy");
                this.$$destroyed = !0;
                if (this !== r) {
                  for (var b in this.$$listenerCount)
                    m(this, this.$$listenerCount[b], b);
                  a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                  a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                  this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                  this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                  this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = C;
                  this.$on = this.$watch = this.$watchGroup = function() {
                    return C;
                  };
                  this.$$listeners = {};
                  this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
                }
              }
            },
            $eval: function(a, b) {
              return g(a)(this, b);
            },
            $evalAsync: function(a, b) {
              r.$$phase || O.length || h.defer(function() {
                O.length && r.$digest();
              });
              O.push({
                scope: this,
                expression: a,
                locals: b
              });
            },
            $$postDigest: function(a) {
              n.push(a);
            },
            $apply: function(a) {
              try {
                return k("$apply"), this.$eval(a);
              } catch (b) {
                f(b);
              } finally {
                r.$$phase = null;
                try {
                  r.$digest();
                } catch (c) {
                  throw f(c), c;
                }
              }
            },
            $applyAsync: function(a) {
              function b() {
                c.$eval(a);
              }
              var c = this;
              a && v.push(b);
              u();
            },
            $on: function(a, b) {
              var c = this.$$listeners[a];
              c || (this.$$listeners[a] = c = []);
              c.push(b);
              var d = this;
              do
                d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
 while (d = d.$parent);
              var e = this;
              return function() {
                var d = c.indexOf(b);
                -1 !== d && (c[d] = null, m(e, 1, a));
              };
            },
            $emit: function(a, b) {
              var c = [],
                  d,
                  e = this,
                  g = !1,
                  h = {
                    name: a,
                    targetScope: e,
                    stopPropagation: function() {
                      g = !0;
                    },
                    preventDefault: function() {
                      h.defaultPrevented = !0;
                    },
                    defaultPrevented: !1
                  },
                  l = Ya([h], arguments, 1),
                  k,
                  p;
              do {
                d = e.$$listeners[a] || c;
                h.currentScope = e;
                k = 0;
                for (p = d.length; k < p; k++)
                  if (d[k])
                    try {
                      d[k].apply(null, l);
                    } catch (m) {
                      f(m);
                    }
                  else
                    d.splice(k, 1), k--, p--;
                if (g)
                  return h.currentScope = null, h;
                e = e.$parent;
              } while (e);
              h.currentScope = null;
              return h;
            },
            $broadcast: function(a, b) {
              var c = this,
                  d = this,
                  e = {
                    name: a,
                    targetScope: this,
                    preventDefault: function() {
                      e.defaultPrevented = !0;
                    },
                    defaultPrevented: !1
                  };
              if (!this.$$listenerCount[a])
                return e;
              for (var g = Ya([e], arguments, 1),
                  h,
                  l; c = d; ) {
                e.currentScope = c;
                d = c.$$listeners[a] || [];
                h = 0;
                for (l = d.length; h < l; h++)
                  if (d[h])
                    try {
                      d[h].apply(null, g);
                    } catch (k) {
                      f(k);
                    }
                  else
                    d.splice(h, 1), h--, l--;
                if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                  for (; c !== this && !(d = c.$$nextSibling); )
                    c = c.$parent;
              }
              e.currentScope = null;
              return e;
            }
          };
          var r = new l,
              O = r.$$asyncQueue = [],
              n = r.$$postDigestQueue = [],
              v = r.$$applyAsyncQueue = [];
          return r;
        }];
      }
      function Sd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/,
            a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(a) {
          return y(a) ? (b = a, this) : b;
        };
        this.imgSrcSanitizationWhitelist = function(b) {
          return y(b) ? (a = b, this) : a;
        };
        this.$get = function() {
          return function(c, d) {
            var e = d ? a : b,
                f;
            f = Ba(c).href;
            return "" === f || f.match(e) ? c : "unsafe:" + f;
          };
        };
      }
      function Df(b) {
        if ("self" === b)
          return b;
        if (F(b)) {
          if (-1 < b.indexOf("***"))
            throw Ca("iwcard", b);
          b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
          return new RegExp("^" + b + "$");
        }
        if (ob(b))
          return new RegExp("^" + b.source + "$");
        throw Ca("imatcher");
      }
      function hd(b) {
        var a = [];
        y(b) && s(b, function(b) {
          a.push(Df(b));
        });
        return a;
      }
      function Te() {
        this.SCE_CONTEXTS = ma;
        var b = ["self"],
            a = [];
        this.resourceUrlWhitelist = function(a) {
          arguments.length && (b = hd(a));
          return b;
        };
        this.resourceUrlBlacklist = function(b) {
          arguments.length && (a = hd(b));
          return a;
        };
        this.$get = ["$injector", function(c) {
          function d(a, b) {
            return "self" === a ? Zc(b) : !!a.exec(b.href);
          }
          function e(a) {
            var b = function(a) {
              this.$$unwrapTrustedValue = function() {
                return a;
              };
            };
            a && (b.prototype = new a);
            b.prototype.valueOf = function() {
              return this.$$unwrapTrustedValue();
            };
            b.prototype.toString = function() {
              return this.$$unwrapTrustedValue().toString();
            };
            return b;
          }
          var f = function(a) {
            throw Ca("unsafe");
          };
          c.has("$sanitize") && (f = c.get("$sanitize"));
          var g = e(),
              h = {};
          h[ma.HTML] = e(g);
          h[ma.CSS] = e(g);
          h[ma.URL] = e(g);
          h[ma.JS] = e(g);
          h[ma.RESOURCE_URL] = e(h[ma.URL]);
          return {
            trustAs: function(a, b) {
              var c = h.hasOwnProperty(a) ? h[a] : null;
              if (!c)
                throw Ca("icontext", a, b);
              if (null === b || b === t || "" === b)
                return b;
              if ("string" !== typeof b)
                throw Ca("itype", a);
              return new c(b);
            },
            getTrusted: function(c, e) {
              if (null === e || e === t || "" === e)
                return e;
              var g = h.hasOwnProperty(c) ? h[c] : null;
              if (g && e instanceof g)
                return e.$$unwrapTrustedValue();
              if (c === ma.RESOURCE_URL) {
                var g = Ba(e.toString()),
                    p,
                    q,
                    u = !1;
                p = 0;
                for (q = b.length; p < q; p++)
                  if (d(b[p], g)) {
                    u = !0;
                    break;
                  }
                if (u)
                  for (p = 0, q = a.length; p < q; p++)
                    if (d(a[p], g)) {
                      u = !1;
                      break;
                    }
                if (u)
                  return e;
                throw Ca("insecurl", e.toString());
              }
              if (c === ma.HTML)
                return f(e);
              throw Ca("unsafe");
            },
            valueOf: function(a) {
              return a instanceof g ? a.$$unwrapTrustedValue() : a;
            }
          };
        }];
      }
      function Se() {
        var b = !0;
        this.enabled = function(a) {
          arguments.length && (b = !!a);
          return b;
        };
        this.$get = ["$parse", "$sceDelegate", function(a, c) {
          if (b && 8 > Ra)
            throw Ca("iequirks");
          var d = qa(ma);
          d.isEnabled = function() {
            return b;
          };
          d.trustAs = c.trustAs;
          d.getTrusted = c.getTrusted;
          d.valueOf = c.valueOf;
          b || (d.trustAs = d.getTrusted = function(a, b) {
            return b;
          }, d.valueOf = oa);
          d.parseAs = function(b, c) {
            var e = a(c);
            return e.literal && e.constant ? e : a(c, function(a) {
              return d.getTrusted(b, a);
            });
          };
          var e = d.parseAs,
              f = d.getTrusted,
              g = d.trustAs;
          s(ma, function(a, b) {
            var c = Q(b);
            d[cb("parse_as_" + c)] = function(b) {
              return e(a, b);
            };
            d[cb("get_trusted_" + c)] = function(b) {
              return f(a, b);
            };
            d[cb("trust_as_" + c)] = function(b) {
              return g(a, b);
            };
          });
          return d;
        }];
      }
      function Ue() {
        this.$get = ["$window", "$document", function(b, a) {
          var c = {},
              d = ba((/android (\d+)/.exec(Q((b.navigator || {}).userAgent)) || [])[1]),
              e = /Boxee/i.test((b.navigator || {}).userAgent),
              f = a[0] || {},
              g,
              h = /^(Moz|webkit|ms)(?=[A-Z])/,
              l = f.body && f.body.style,
              k = !1,
              m = !1;
          if (l) {
            for (var p in l)
              if (k = h.exec(p)) {
                g = k[0];
                g = g.substr(0, 1).toUpperCase() + g.substr(1);
                break;
              }
            g || (g = "WebkitOpacity" in l && "webkit");
            k = !!("transition" in l || g + "Transition" in l);
            m = !!("animation" in l || g + "Animation" in l);
            !d || k && m || (k = F(f.body.style.webkitTransition), m = F(f.body.style.webkitAnimation));
          }
          return {
            history: !(!b.history || !b.history.pushState || 4 > d || e),
            hasEvent: function(a) {
              if ("input" === a && 11 >= Ra)
                return !1;
              if (D(c[a])) {
                var b = f.createElement("div");
                c[a] = "on" + a in b;
              }
              return c[a];
            },
            csp: ab(),
            vendorPrefix: g,
            transitions: k,
            animations: m,
            android: d
          };
        }];
      }
      function We() {
        this.$get = ["$templateCache", "$http", "$q", function(b, a, c) {
          function d(e, f) {
            d.totalPendingRequests++;
            var g = a.defaults && a.defaults.transformResponse;
            x(g) ? g = g.filter(function(a) {
              return a !== Yb;
            }) : g === Yb && (g = null);
            return a.get(e, {
              cache: b,
              transformResponse: g
            }).then(function(a) {
              d.totalPendingRequests--;
              return a.data;
            }, function(a) {
              d.totalPendingRequests--;
              if (!f)
                throw ja("tpload", e);
              return c.reject(a);
            });
          }
          d.totalPendingRequests = 0;
          return d;
        }];
      }
      function Xe() {
        this.$get = ["$rootScope", "$browser", "$location", function(b, a, c) {
          return {
            findBindings: function(a, b, c) {
              a = a.getElementsByClassName("ng-binding");
              var g = [];
              s(a, function(a) {
                var d = ga.element(a).data("$binding");
                d && s(d, function(d) {
                  c ? (new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a);
                });
              });
              return g;
            },
            findModels: function(a, b, c) {
              for (var g = ["ng-", "data-ng-", "ng\\:"],
                  h = 0; h < g.length; ++h) {
                var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                if (l.length)
                  return l;
              }
            },
            getLocation: function() {
              return c.url();
            },
            setLocation: function(a) {
              a !== c.url() && (c.url(a), b.$digest());
            },
            whenStable: function(b) {
              a.notifyWhenNoOutstandingRequests(b);
            }
          };
        }];
      }
      function Ye() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(b, a, c, d, e) {
          function f(f, l, k) {
            var m = y(k) && !k,
                p = (m ? d : c).defer(),
                q = p.promise;
            l = a.defer(function() {
              try {
                p.resolve(f());
              } catch (a) {
                p.reject(a), e(a);
              } finally {
                delete g[q.$$timeoutId];
              }
              m || b.$apply();
            }, l);
            q.$$timeoutId = l;
            g[l] = p;
            return q;
          }
          var g = {};
          f.cancel = function(b) {
            return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
          };
          return f;
        }];
      }
      function Ba(b) {
        Ra && (Z.setAttribute("href", b), b = Z.href);
        Z.setAttribute("href", b);
        return {
          href: Z.href,
          protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "",
          host: Z.host,
          search: Z.search ? Z.search.replace(/^\?/, "") : "",
          hash: Z.hash ? Z.hash.replace(/^#/, "") : "",
          hostname: Z.hostname,
          port: Z.port,
          pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname
        };
      }
      function Zc(b) {
        b = F(b) ? Ba(b) : b;
        return b.protocol === id.protocol && b.host === id.host;
      }
      function Ze() {
        this.$get = da(M);
      }
      function Dc(b) {
        function a(c, d) {
          if (H(c)) {
            var e = {};
            s(c, function(b, c) {
              e[c] = a(c, b);
            });
            return e;
          }
          return b.factory(c + "Filter", d);
        }
        this.register = a;
        this.$get = ["$injector", function(a) {
          return function(b) {
            return a.get(b + "Filter");
          };
        }];
        a("currency", jd);
        a("date", kd);
        a("filter", Ef);
        a("json", Ff);
        a("limitTo", Gf);
        a("lowercase", Hf);
        a("number", ld);
        a("orderBy", md);
        a("uppercase", If);
      }
      function Ef() {
        return function(b, a, c) {
          if (!x(b))
            return b;
          var d;
          switch (typeof a) {
            case "function":
              break;
            case "boolean":
            case "number":
            case "string":
              d = !0;
            case "object":
              a = Jf(a, c, d);
              break;
            default:
              return b;
          }
          return b.filter(a);
        };
      }
      function Jf(b, a, c) {
        var d = H(b) && "$" in b;
        !0 === a ? a = fa : G(a) || (a = function(a, b) {
          if (H(a) || H(b))
            return !1;
          a = Q("" + a);
          b = Q("" + b);
          return -1 !== a.indexOf(b);
        });
        return function(e) {
          return d && !H(e) ? Ia(e, b.$, a, !1) : Ia(e, b, a, c);
        };
      }
      function Ia(b, a, c, d, e) {
        var f = typeof b,
            g = typeof a;
        if ("string" === g && "!" === a.charAt(0))
          return !Ia(b, a.substring(1), c, d);
        if ("array" === f)
          return b.some(function(b) {
            return Ia(b, a, c, d);
          });
        switch (f) {
          case "object":
            var h;
            if (d) {
              for (h in b)
                if ("$" !== h.charAt(0) && Ia(b[h], a, c, !0))
                  return !0;
              return e ? !1 : Ia(b, a, c, !1);
            }
            if ("object" === g) {
              for (h in a)
                if (e = a[h], !G(e) && (f = "$" === h, !Ia(f ? b : b[h], e, c, f, f)))
                  return !1;
              return !0;
            }
            return c(b, a);
          case "function":
            return !1;
          default:
            return c(b, a);
        }
      }
      function jd(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d, e) {
          D(d) && (d = a.CURRENCY_SYM);
          D(e) && (e = a.PATTERNS[1].maxFrac);
          return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
        };
      }
      function ld(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
          return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
        };
      }
      function nd(b, a, c, d, e) {
        if (!isFinite(b) || H(b))
          return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "",
            h = "",
            l = [],
            k = !1;
        if (-1 !== g.indexOf("e")) {
          var m = g.match(/([\d\.]+)e(-?)(\d+)/);
          m && "-" == m[2] && m[3] > e + 1 ? b = 0 : (h = g, k = !0);
        }
        if (k)
          0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h));
        else {
          g = (g.split(od)[1] || "").length;
          D(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
          b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
          var g = ("" + b).split(od),
              k = g[0],
              g = g[1] || "",
              p = 0,
              q = a.lgSize,
              u = a.gSize;
          if (k.length >= q + u)
            for (p = k.length - q, m = 0; m < p; m++)
              0 === (p - m) % u && 0 !== m && (h += c), h += k.charAt(m);
          for (m = p; m < k.length; m++)
            0 === (k.length - m) % q && 0 !== m && (h += c), h += k.charAt(m);
          for (; g.length < e; )
            g += "0";
          e && "0" !== e && (h += d + g.substr(0, e));
        }
        0 === b && (f = !1);
        l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
        return l.join("");
      }
      function Hb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a; )
          b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b;
      }
      function $(b, a, c, d) {
        c = c || 0;
        return function(e) {
          e = e["get" + b]();
          if (0 < c || e > -c)
            e += c;
          0 === e && -12 == c && (e = 12);
          return Hb(e, a, d);
        };
      }
      function Ib(b, a) {
        return function(c, d) {
          var e = c["get" + b](),
              f = ub(a ? "SHORT" + b : b);
          return d[f][e];
        };
      }
      function pd(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a);
      }
      function qd(b) {
        return function(a) {
          var c = pd(a.getFullYear());
          a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
          a = 1 + Math.round(a / 6048E5);
          return Hb(a, b);
        };
      }
      function kd(b) {
        function a(a) {
          var b;
          if (b = a.match(c)) {
            a = new Date(0);
            var f = 0,
                g = 0,
                h = b[8] ? a.setUTCFullYear : a.setFullYear,
                l = b[8] ? a.setUTCHours : a.setHours;
            b[9] && (f = ba(b[9] + b[10]), g = ba(b[9] + b[11]));
            h.call(a, ba(b[1]), ba(b[2]) - 1, ba(b[3]));
            f = ba(b[4] || 0) - f;
            g = ba(b[5] || 0) - g;
            h = ba(b[6] || 0);
            b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
            l.call(a, f, g, h, b);
          }
          return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e, f) {
          var g = "",
              h = [],
              l,
              k;
          e = e || "mediumDate";
          e = b.DATETIME_FORMATS[e] || e;
          F(c) && (c = Kf.test(c) ? ba(c) : a(c));
          V(c) && (c = new Date(c));
          if (!pa(c))
            return c;
          for (; e; )
            (k = Lf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);
          f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
          s(h, function(a) {
            l = Mf[a];
            g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
          });
          return g;
        };
      }
      function Ff() {
        return function(b, a) {
          D(a) && (a = 2);
          return $a(b, a);
        };
      }
      function Gf() {
        return function(b, a) {
          V(b) && (b = b.toString());
          if (!x(b) && !F(b))
            return b;
          a = Infinity === Math.abs(Number(a)) ? Number(a) : ba(a);
          if (F(b))
            return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
          var c,
              d;
          a > b.length ? a = b.length : a < -b.length && (a = -b.length);
          if (0 < a)
            c = 0, d = a;
          else {
            if (!a)
              return [];
            c = b.length + a;
            d = b.length;
          }
          return b.slice(c, d);
        };
      }
      function md(b) {
        return function(a, c, d) {
          function e(a, b) {
            return b ? function(b, c) {
              return a(c, b);
            } : a;
          }
          function f(a) {
            switch (typeof a) {
              case "number":
              case "boolean":
              case "string":
                return !0;
              default:
                return !1;
            }
          }
          function g(a) {
            return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : "";
          }
          function h(a, b) {
            var c = typeof a,
                d = typeof b;
            c === d && "object" === c && (a = g(a), b = g(b));
            return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
          }
          if (!Ta(a))
            return a;
          c = x(c) ? c : [c];
          0 === c.length && (c = ["+"]);
          c = c.map(function(a) {
            var c = !1,
                d = a || oa;
            if (F(a)) {
              if ("+" == a.charAt(0) || "-" == a.charAt(0))
                c = "-" == a.charAt(0), a = a.substring(1);
              if ("" === a)
                return e(h, c);
              d = b(a);
              if (d.constant) {
                var f = d();
                return e(function(a, b) {
                  return h(a[f], b[f]);
                }, c);
              }
            }
            return e(function(a, b) {
              return h(d(a), d(b));
            }, c);
          });
          return Za.call(a).sort(e(function(a, b) {
            for (var d = 0; d < c.length; d++) {
              var e = c[d](a, b);
              if (0 !== e)
                return e;
            }
            return 0;
          }, d));
        };
      }
      function Ja(b) {
        G(b) && (b = {link: b});
        b.restrict = b.restrict || "AC";
        return da(b);
      }
      function rd(b, a, c, d, e) {
        var f = this,
            g = [],
            h = f.$$parentForm = b.parent().controller("form") || Jb;
        f.$error = {};
        f.$$success = {};
        f.$pending = t;
        f.$name = e(a.name || a.ngForm || "")(c);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        h.$addControl(f);
        f.$rollbackViewValue = function() {
          s(g, function(a) {
            a.$rollbackViewValue();
          });
        };
        f.$commitViewValue = function() {
          s(g, function(a) {
            a.$commitViewValue();
          });
        };
        f.$addControl = function(a) {
          Ma(a.$name, "input");
          g.push(a);
          a.$name && (f[a.$name] = a);
        };
        f.$$renameControl = function(a, b) {
          var c = a.$name;
          f[c] === a && delete f[c];
          f[b] = a;
          a.$name = b;
        };
        f.$removeControl = function(a) {
          a.$name && f[a.$name] === a && delete f[a.$name];
          s(f.$pending, function(b, c) {
            f.$setValidity(c, null, a);
          });
          s(f.$error, function(b, c) {
            f.$setValidity(c, null, a);
          });
          Xa(g, a);
        };
        sd({
          ctrl: this,
          $element: b,
          set: function(a, b, c) {
            var d = a[b];
            d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
          },
          unset: function(a, b, c) {
            var d = a[b];
            d && (Xa(d, c), 0 === d.length && delete a[b]);
          },
          parentForm: h,
          $animate: d
        });
        f.$setDirty = function() {
          d.removeClass(b, Sa);
          d.addClass(b, Kb);
          f.$dirty = !0;
          f.$pristine = !1;
          h.$setDirty();
        };
        f.$setPristine = function() {
          d.setClass(b, Sa, Kb + " ng-submitted");
          f.$dirty = !1;
          f.$pristine = !0;
          f.$submitted = !1;
          s(g, function(a) {
            a.$setPristine();
          });
        };
        f.$setUntouched = function() {
          s(g, function(a) {
            a.$setUntouched();
          });
        };
        f.$setSubmitted = function() {
          d.addClass(b, "ng-submitted");
          f.$submitted = !0;
          h.$setSubmitted();
        };
      }
      function hc(b) {
        b.$formatters.push(function(a) {
          return b.$isEmpty(a) ? a : a.toString();
        });
      }
      function ib(b, a, c, d, e, f) {
        var g = Q(a[0].type);
        if (!e.android) {
          var h = !1;
          a.on("compositionstart", function(a) {
            h = !0;
          });
          a.on("compositionend", function() {
            h = !1;
            l();
          });
        }
        var l = function(b) {
          k && (f.defer.cancel(k), k = null);
          if (!h) {
            var e = a.val();
            b = b && b.type;
            "password" === g || c.ngTrim && "false" === c.ngTrim || (e = U(e));
            (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b);
          }
        };
        if (e.hasEvent("input"))
          a.on("input", l);
        else {
          var k,
              m = function(a, b, c) {
                k || (k = f.defer(function() {
                  k = null;
                  b && b.value === c || l(a);
                }));
              };
          a.on("keydown", function(a) {
            var b = a.keyCode;
            91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
          });
          if (e.hasEvent("paste"))
            a.on("paste cut", m);
        }
        a.on("change", l);
        d.$render = function() {
          a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue);
        };
      }
      function Lb(b, a) {
        return function(c, d) {
          var e,
              f;
          if (pa(c))
            return c;
          if (F(c)) {
            '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
            if (Nf.test(c))
              return new Date(c);
            b.lastIndex = 0;
            if (e = b.exec(c))
              return e.shift(), f = d ? {
                yyyy: d.getFullYear(),
                MM: d.getMonth() + 1,
                dd: d.getDate(),
                HH: d.getHours(),
                mm: d.getMinutes(),
                ss: d.getSeconds(),
                sss: d.getMilliseconds() / 1E3
              } : {
                yyyy: 1970,
                MM: 1,
                dd: 1,
                HH: 0,
                mm: 0,
                ss: 0,
                sss: 0
              }, s(e, function(b, c) {
                c < a.length && (f[a[c]] = +b);
              }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
          }
          return NaN;
        };
      }
      function jb(b, a, c, d) {
        return function(e, f, g, h, l, k, m) {
          function p(a) {
            return a && !(a.getTime && a.getTime() !== a.getTime());
          }
          function q(a) {
            return y(a) ? pa(a) ? a : c(a) : t;
          }
          td(e, f, g, h);
          ib(e, f, g, h, l, k);
          var u = h && h.$options && h.$options.timezone,
              r;
          h.$$parserName = b;
          h.$parsers.push(function(b) {
            return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, r), "UTC" === u && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : t;
          });
          h.$formatters.push(function(a) {
            if (a && !pa(a))
              throw Mb("datefmt", a);
            if (p(a)) {
              if ((r = a) && "UTC" === u) {
                var b = 6E4 * r.getTimezoneOffset();
                r = new Date(r.getTime() + b);
              }
              return m("date")(a, d, u);
            }
            r = null;
            return "";
          });
          if (y(g.min) || g.ngMin) {
            var s;
            h.$validators.min = function(a) {
              return !p(a) || D(s) || c(a) >= s;
            };
            g.$observe("min", function(a) {
              s = q(a);
              h.$validate();
            });
          }
          if (y(g.max) || g.ngMax) {
            var n;
            h.$validators.max = function(a) {
              return !p(a) || D(n) || c(a) <= n;
            };
            g.$observe("max", function(a) {
              n = q(a);
              h.$validate();
            });
          }
        };
      }
      function td(b, a, c, d) {
        (d.$$hasNativeValidators = H(a[0].validity)) && d.$parsers.push(function(b) {
          var c = a.prop("validity") || {};
          return c.badInput && !c.typeMismatch ? t : b;
        });
      }
      function ud(b, a, c, d, e) {
        if (y(d)) {
          b = b(d);
          if (!b.constant)
            throw T("ngModel")("constexpr", c, d);
          return b(a);
        }
        return e;
      }
      function sd(b) {
        function a(a, b) {
          b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
        }
        function c(b, c) {
          b = b ? "-" + tc(b, "-") : "";
          a(kb + b, !0 === c);
          a(vd + b, !1 === c);
        }
        var d = b.ctrl,
            e = b.$element,
            f = {},
            g = b.set,
            h = b.unset,
            l = b.parentForm,
            k = b.$animate;
        f[vd] = !(f[kb] = e.hasClass(kb));
        d.$setValidity = function(b, e, f) {
          e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = t));
          Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
          d.$pending ? (a(xd, !0), d.$valid = d.$invalid = t, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
          e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
          c(b, e);
          l.$setValidity(b, e, d);
        };
      }
      function wd(b) {
        if (b)
          for (var a in b)
            return !1;
        return !0;
      }
      function ic(b, a) {
        b = "ngClass" + b;
        return ["$animate", function(c) {
          function d(a, b) {
            var c = [],
                d = 0;
            a: for (; d < a.length; d++) {
              for (var e = a[d],
                  m = 0; m < b.length; m++)
                if (e == b[m])
                  continue a;
              c.push(e);
            }
            return c;
          }
          function e(a) {
            if (!x(a)) {
              if (F(a))
                return a.split(" ");
              if (H(a)) {
                var b = [];
                s(a, function(a, c) {
                  a && (b = b.concat(c.split(" ")));
                });
                return b;
              }
            }
            return a;
          }
          return {
            restrict: "AC",
            link: function(f, g, h) {
              function l(a, b) {
                var c = g.data("$classCounts") || {},
                    d = [];
                s(a, function(a) {
                  if (0 < b || c[a])
                    c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
                });
                g.data("$classCounts", c);
                return d.join(" ");
              }
              function k(b) {
                if (!0 === a || f.$index % 2 === a) {
                  var k = e(b || []);
                  if (!m) {
                    var u = l(k, 1);
                    h.$addClass(u);
                  } else if (!fa(b, m)) {
                    var r = e(m),
                        u = d(k, r),
                        k = d(r, k),
                        u = l(u, 1),
                        k = l(k, -1);
                    u && u.length && c.addClass(g, u);
                    k && k.length && c.removeClass(g, k);
                  }
                }
                m = qa(b);
              }
              var m;
              f.$watch(h[b], k, !0);
              h.$observe("class", function(a) {
                k(f.$eval(h[b]));
              });
              "ngClass" !== b && f.$watch("$index", function(c, d) {
                var g = c & 1;
                if (g !== (d & 1)) {
                  var k = e(f.$eval(h[b]));
                  g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g));
                }
              });
            }
          };
        }];
      }
      var Of = /^\/(.+)\/([a-z]*)$/,
          Q = function(b) {
            return F(b) ? b.toLowerCase() : b;
          },
          rc = Object.prototype.hasOwnProperty,
          ub = function(b) {
            return F(b) ? b.toUpperCase() : b;
          },
          Ra,
          B,
          ra,
          Za = [].slice,
          rf = [].splice,
          Pf = [].push,
          Da = Object.prototype.toString,
          Ka = T("ng"),
          ga = M.angular || (M.angular = {}),
          bb,
          nb = 0;
      Ra = Y.documentMode;
      C.$inject = [];
      oa.$inject = [];
      var x = Array.isArray,
          U = function(b) {
            return F(b) ? b.trim() : b;
          },
          gd = function(b) {
            return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
          },
          ab = function() {
            if (y(ab.isActive_))
              return ab.isActive_;
            var b = !(!Y.querySelector("[ng-csp]") && !Y.querySelector("[data-ng-csp]"));
            if (!b)
              try {
                new Function("");
              } catch (a) {
                b = !0;
              }
            return ab.isActive_ = b;
          },
          rb = ["ng-", "data-ng-", "ng:", "x-ng-"],
          Md = /[A-Z]/g,
          uc = !1,
          Pb,
          na = 1,
          pb = 3,
          Qd = {
            full: "1.3.8",
            major: 1,
            minor: 3,
            dot: 8,
            codeName: "prophetic-narwhal"
          };
      R.expando = "ng339";
      var zb = R.cache = {},
          hf = 1;
      R._data = function(b) {
        return this.cache[b[this.expando]] || {};
      };
      var cf = /([\:\-\_]+(.))/g,
          df = /^moz([A-Z])/,
          Qf = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
          },
          Sb = T("jqLite"),
          gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
          Rb = /<|&#?\w+;/,
          ef = /<([\w:]+)/,
          ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          ia = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
      ia.optgroup = ia.option;
      ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead;
      ia.th = ia.td;
      var La = R.prototype = {
        ready: function(b) {
          function a() {
            c || (c = !0, b());
          }
          var c = !1;
          "complete" === Y.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), R(M).on("load", a));
        },
        toString: function() {
          var b = [];
          s(this, function(a) {
            b.push("" + a);
          });
          return "[" + b.join(", ") + "]";
        },
        eq: function(b) {
          return 0 <= b ? B(this[b]) : B(this[this.length + b]);
        },
        length: 0,
        push: Pf,
        sort: [].sort,
        splice: [].splice
      },
          Eb = {};
      s("multiple selected checked disabled readOnly required open".split(" "), function(b) {
        Eb[Q(b)] = b;
      });
      var Mc = {};
      s("input select option textarea button form details".split(" "), function(b) {
        Mc[b] = !0;
      });
      var Nc = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
      };
      s({
        data: Ub,
        removeData: xb
      }, function(b, a) {
        R[a] = b;
      });
      s({
        data: Ub,
        inheritedData: Db,
        scope: function(b) {
          return B.data(b, "$scope") || Db(b.parentNode || b, ["$isolateScope", "$scope"]);
        },
        isolateScope: function(b) {
          return B.data(b, "$isolateScope") || B.data(b, "$isolateScopeNoTemplate");
        },
        controller: Ic,
        injector: function(b) {
          return Db(b, "$injector");
        },
        removeAttr: function(b, a) {
          b.removeAttribute(a);
        },
        hasClass: Ab,
        css: function(b, a, c) {
          a = cb(a);
          if (y(c))
            b.style[a] = c;
          else
            return b.style[a];
        },
        attr: function(b, a, c) {
          var d = Q(a);
          if (Eb[d])
            if (y(c))
              c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
            else
              return b[a] || (b.attributes.getNamedItem(a) || C).specified ? d : t;
          else if (y(c))
            b.setAttribute(a, c);
          else if (b.getAttribute)
            return b = b.getAttribute(a, 2), null === b ? t : b;
        },
        prop: function(b, a, c) {
          if (y(c))
            b[a] = c;
          else
            return b[a];
        },
        text: function() {
          function b(a, b) {
            if (D(b)) {
              var d = a.nodeType;
              return d === na || d === pb ? a.textContent : "";
            }
            a.textContent = b;
          }
          b.$dv = "";
          return b;
        }(),
        val: function(b, a) {
          if (D(a)) {
            if (b.multiple && "select" === ua(b)) {
              var c = [];
              s(b.options, function(a) {
                a.selected && c.push(a.value || a.text);
              });
              return 0 === c.length ? null : c;
            }
            return b.value;
          }
          b.value = a;
        },
        html: function(b, a) {
          if (D(a))
            return b.innerHTML;
          wb(b, !0);
          b.innerHTML = a;
        },
        empty: Jc
      }, function(b, a) {
        R.prototype[a] = function(a, d) {
          var e,
              f,
              g = this.length;
          if (b !== Jc && (2 == b.length && b !== Ab && b !== Ic ? a : d) === t) {
            if (H(a)) {
              for (e = 0; e < g; e++)
                if (b === Ub)
                  b(this[e], a);
                else
                  for (f in a)
                    b(this[e], f, a[f]);
              return this;
            }
            e = b.$dv;
            g = e === t ? Math.min(g, 1) : g;
            for (f = 0; f < g; f++) {
              var h = b(this[f], a, d);
              e = e ? e + h : h;
            }
            return e;
          }
          for (e = 0; e < g; e++)
            b(this[e], a, d);
          return this;
        };
      });
      s({
        removeData: xb,
        on: function a(c, d, e, f) {
          if (y(f))
            throw Sb("onargs");
          if (Ec(c)) {
            var g = yb(c, !0);
            f = g.events;
            var h = g.handle;
            h || (h = g.handle = lf(c, f));
            for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d],
                l = g.length; l--; ) {
              d = g[l];
              var k = f[d];
              k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Qf[d], function(a) {
                var c = a.relatedTarget;
                c && (c === this || this.contains(c)) || h(a, d);
              }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
              k.push(e);
            }
          }
        },
        off: Hc,
        one: function(a, c, d) {
          a = B(a);
          a.on(c, function f() {
            a.off(c, d);
            a.off(c, f);
          });
          a.on(c, d);
        },
        replaceWith: function(a, c) {
          var d,
              e = a.parentNode;
          wb(a);
          s(new R(c), function(c) {
            d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
            d = c;
          });
        },
        children: function(a) {
          var c = [];
          s(a.childNodes, function(a) {
            a.nodeType === na && c.push(a);
          });
          return c;
        },
        contents: function(a) {
          return a.contentDocument || a.childNodes || [];
        },
        append: function(a, c) {
          var d = a.nodeType;
          if (d === na || 11 === d) {
            c = new R(c);
            for (var d = 0,
                e = c.length; d < e; d++)
              a.appendChild(c[d]);
          }
        },
        prepend: function(a, c) {
          if (a.nodeType === na) {
            var d = a.firstChild;
            s(new R(c), function(c) {
              a.insertBefore(c, d);
            });
          }
        },
        wrap: function(a, c) {
          c = B(c).eq(0).clone()[0];
          var d = a.parentNode;
          d && d.replaceChild(c, a);
          c.appendChild(a);
        },
        remove: Kc,
        detach: function(a) {
          Kc(a, !0);
        },
        after: function(a, c) {
          var d = a,
              e = a.parentNode;
          c = new R(c);
          for (var f = 0,
              g = c.length; f < g; f++) {
            var h = c[f];
            e.insertBefore(h, d.nextSibling);
            d = h;
          }
        },
        addClass: Cb,
        removeClass: Bb,
        toggleClass: function(a, c, d) {
          c && s(c.split(" "), function(c) {
            var f = d;
            D(f) && (f = !Ab(a, c));
            (f ? Cb : Bb)(a, c);
          });
        },
        parent: function(a) {
          return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        next: function(a) {
          return a.nextElementSibling;
        },
        find: function(a, c) {
          return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
        },
        clone: Tb,
        triggerHandler: function(a, c, d) {
          var e,
              f,
              g = c.type || c,
              h = yb(a);
          if (h = (h = h && h.events) && h[g])
            e = {
              preventDefault: function() {
                this.defaultPrevented = !0;
              },
              isDefaultPrevented: function() {
                return !0 === this.defaultPrevented;
              },
              stopImmediatePropagation: function() {
                this.immediatePropagationStopped = !0;
              },
              isImmediatePropagationStopped: function() {
                return !0 === this.immediatePropagationStopped;
              },
              stopPropagation: C,
              type: g,
              target: a
            }, c.type && (e = z(e, c)), c = qa(h), f = d ? [e].concat(d) : [e], s(c, function(c) {
              e.isImmediatePropagationStopped() || c.apply(a, f);
            });
        }
      }, function(a, c) {
        R.prototype[c] = function(c, e, f) {
          for (var g,
              h = 0,
              l = this.length; h < l; h++)
            D(g) ? (g = a(this[h], c, e, f), y(g) && (g = B(g))) : Gc(g, a(this[h], c, e, f));
          return y(g) ? g : this;
        };
        R.prototype.bind = R.prototype.on;
        R.prototype.unbind = R.prototype.off;
      });
      db.prototype = {
        put: function(a, c) {
          this[Na(a, this.nextUid)] = c;
        },
        get: function(a) {
          return this[Na(a, this.nextUid)];
        },
        remove: function(a) {
          var c = this[a = Na(a, this.nextUid)];
          delete this[a];
          return c;
        }
      };
      var Pc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
          nf = /,/,
          of = /^\s*(_?)(\S+?)\1\s*$/,
          Oc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
          Ga = T("$injector");
      Ob.$$annotate = Vb;
      var Rf = T("$animate"),
          Ce = ["$provide", function(a) {
            this.$$selectors = {};
            this.register = function(c, d) {
              var e = c + "-animation";
              if (c && "." != c.charAt(0))
                throw Rf("notcsel", c);
              this.$$selectors[c.substr(1)] = e;
              a.factory(e, d);
            };
            this.classNameFilter = function(a) {
              1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
              return this.$$classNameFilter;
            };
            this.$get = ["$$q", "$$asyncCallback", "$rootScope", function(a, d, e) {
              function f(d) {
                var f,
                    g = a.defer();
                g.promise.$$cancelFn = function() {
                  f && f();
                };
                e.$$postDigest(function() {
                  f = d(function() {
                    g.resolve();
                  });
                });
                return g.promise;
              }
              function g(a, c) {
                var d = [],
                    e = [],
                    f = ha();
                s((a.attr("class") || "").split(/\s+/), function(a) {
                  f[a] = !0;
                });
                s(c, function(a, c) {
                  var g = f[c];
                  !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c);
                });
                return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null];
              }
              function h(a, c, d) {
                for (var e = 0,
                    f = c.length; e < f; ++e)
                  a[c[e]] = d;
              }
              function l() {
                m || (m = a.defer(), d(function() {
                  m.resolve();
                  m = null;
                }));
                return m.promise;
              }
              function k(a, c) {
                if (ga.isObject(c)) {
                  var d = z(c.from || {}, c.to || {});
                  a.css(d);
                }
              }
              var m;
              return {
                animate: function(a, c, d) {
                  k(a, {
                    from: c,
                    to: d
                  });
                  return l();
                },
                enter: function(a, c, d, e) {
                  k(a, e);
                  d ? d.after(a) : c.prepend(a);
                  return l();
                },
                leave: function(a, c) {
                  a.remove();
                  return l();
                },
                move: function(a, c, d, e) {
                  return this.enter(a, c, d, e);
                },
                addClass: function(a, c, d) {
                  return this.setClass(a, c, [], d);
                },
                $$addClassImmediately: function(a, c, d) {
                  a = B(a);
                  c = F(c) ? c : x(c) ? c.join(" ") : "";
                  s(a, function(a) {
                    Cb(a, c);
                  });
                  k(a, d);
                  return l();
                },
                removeClass: function(a, c, d) {
                  return this.setClass(a, [], c, d);
                },
                $$removeClassImmediately: function(a, c, d) {
                  a = B(a);
                  c = F(c) ? c : x(c) ? c.join(" ") : "";
                  s(a, function(a) {
                    Bb(a, c);
                  });
                  k(a, d);
                  return l();
                },
                setClass: function(a, c, d, e) {
                  var k = this,
                      l = !1;
                  a = B(a);
                  var m = a.data("$$animateClasses");
                  m ? e && m.options && (m.options = ga.extend(m.options || {}, e)) : (m = {
                    classes: {},
                    options: e
                  }, l = !0);
                  e = m.classes;
                  c = x(c) ? c : c.split(" ");
                  d = x(d) ? d : d.split(" ");
                  h(e, c, !0);
                  h(e, d, !1);
                  l && (m.promise = f(function(c) {
                    var d = a.data("$$animateClasses");
                    a.removeData("$$animateClasses");
                    if (d) {
                      var e = g(a, d.classes);
                      e && k.$$setClassImmediately(a, e[0], e[1], d.options);
                    }
                    c();
                  }), a.data("$$animateClasses", m));
                  return m.promise;
                },
                $$setClassImmediately: function(a, c, d, e) {
                  c && this.$$addClassImmediately(a, c);
                  d && this.$$removeClassImmediately(a, d);
                  k(a, e);
                  return l();
                },
                enabled: C,
                cancel: C
              };
            }];
          }],
          ja = T("$compile");
      wc.$inject = ["$provide", "$$sanitizeUriProvider"];
      var Rc = /^((?:x|data)[\:\-_])/i,
          Vc = "application/json",
          Zb = {"Content-Type": Vc + ";charset=utf-8"},
          tf = /^\[|^\{(?!\{)/,
          uf = {
            "[": /]$/,
            "{": /}$/
          },
          sf = /^\)\]\}',?\n/,
          $b = T("$interpolate"),
          Sf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
          xf = {
            http: 80,
            https: 443,
            ftp: 21
          },
          Fb = T("$location"),
          Tf = {
            $$html5: !1,
            $$replace: !1,
            absUrl: Gb("$$absUrl"),
            url: function(a) {
              if (D(a))
                return this.$$url;
              var c = Sf.exec(a);
              (c[1] || "" === a) && this.path(decodeURIComponent(c[1]));
              (c[2] || c[1] || "" === a) && this.search(c[3] || "");
              this.hash(c[5] || "");
              return this;
            },
            protocol: Gb("$$protocol"),
            host: Gb("$$host"),
            port: Gb("$$port"),
            path: dd("$$path", function(a) {
              a = null !== a ? a.toString() : "";
              return "/" == a.charAt(0) ? a : "/" + a;
            }),
            search: function(a, c) {
              switch (arguments.length) {
                case 0:
                  return this.$$search;
                case 1:
                  if (F(a) || V(a))
                    a = a.toString(), this.$$search = qc(a);
                  else if (H(a))
                    a = Ea(a, {}), s(a, function(c, e) {
                      null == c && delete a[e];
                    }), this.$$search = a;
                  else
                    throw Fb("isrcharg");
                  break;
                default:
                  D(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
              }
              this.$$compose();
              return this;
            },
            hash: dd("$$hash", function(a) {
              return null !== a ? a.toString() : "";
            }),
            replace: function() {
              this.$$replace = !0;
              return this;
            }
          };
      s([cd, dc, cc], function(a) {
        a.prototype = Object.create(Tf);
        a.prototype.state = function(c) {
          if (!arguments.length)
            return this.$$state;
          if (a !== cc || !this.$$html5)
            throw Fb("nostate");
          this.$$state = D(c) ? null : c;
          return this;
        };
      });
      var la = T("$parse"),
          Uf = Function.prototype.call,
          Vf = Function.prototype.apply,
          Wf = Function.prototype.bind,
          lb = ha();
      s({
        "null": function() {
          return null;
        },
        "true": function() {
          return !0;
        },
        "false": function() {
          return !1;
        },
        undefined: function() {}
      }, function(a, c) {
        a.constant = a.literal = a.sharedGetter = !0;
        lb[c] = a;
      });
      lb["this"] = function(a) {
        return a;
      };
      lb["this"].sharedGetter = !0;
      var mb = z(ha(), {
        "+": function(a, c, d, e) {
          d = d(a, c);
          e = e(a, c);
          return y(d) ? y(e) ? d + e : d : y(e) ? e : t;
        },
        "-": function(a, c, d, e) {
          d = d(a, c);
          e = e(a, c);
          return (y(d) ? d : 0) - (y(e) ? e : 0);
        },
        "*": function(a, c, d, e) {
          return d(a, c) * e(a, c);
        },
        "/": function(a, c, d, e) {
          return d(a, c) / e(a, c);
        },
        "%": function(a, c, d, e) {
          return d(a, c) % e(a, c);
        },
        "===": function(a, c, d, e) {
          return d(a, c) === e(a, c);
        },
        "!==": function(a, c, d, e) {
          return d(a, c) !== e(a, c);
        },
        "==": function(a, c, d, e) {
          return d(a, c) == e(a, c);
        },
        "!=": function(a, c, d, e) {
          return d(a, c) != e(a, c);
        },
        "<": function(a, c, d, e) {
          return d(a, c) < e(a, c);
        },
        ">": function(a, c, d, e) {
          return d(a, c) > e(a, c);
        },
        "<=": function(a, c, d, e) {
          return d(a, c) <= e(a, c);
        },
        ">=": function(a, c, d, e) {
          return d(a, c) >= e(a, c);
        },
        "&&": function(a, c, d, e) {
          return d(a, c) && e(a, c);
        },
        "||": function(a, c, d, e) {
          return d(a, c) || e(a, c);
        },
        "!": function(a, c, d) {
          return !d(a, c);
        },
        "=": !0,
        "|": !0
      }),
          Xf = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
          },
          gc = function(a) {
            this.options = a;
          };
      gc.prototype = {
        constructor: gc,
        lex: function(a) {
          this.text = a;
          this.index = 0;
          for (this.tokens = []; this.index < this.text.length; )
            if (a = this.text.charAt(this.index), '"' === a || "'" === a)
              this.readString(a);
            else if (this.isNumber(a) || "." === a && this.isNumber(this.peek()))
              this.readNumber();
            else if (this.isIdent(a))
              this.readIdent();
            else if (this.is(a, "(){}[].,;:?"))
              this.tokens.push({
                index: this.index,
                text: a
              }), this.index++;
            else if (this.isWhitespace(a))
              this.index++;
            else {
              var c = a + this.peek(),
                  d = c + this.peek(2),
                  e = mb[c],
                  f = mb[d];
              mb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                index: this.index,
                text: a,
                operator: !0
              }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
            }
          return this.tokens;
        },
        is: function(a, c) {
          return -1 !== c.indexOf(a);
        },
        peek: function(a) {
          a = a || 1;
          return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
        },
        isNumber: function(a) {
          return "0" <= a && "9" >= a && "string" === typeof a;
        },
        isWhitespace: function(a) {
          return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a;
        },
        isIdent: function(a) {
          return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
          return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, c, d) {
          d = d || this.index;
          c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
          throw la("lexerr", a, c, this.text);
        },
        readNumber: function() {
          for (var a = "",
              c = this.index; this.index < this.text.length; ) {
            var d = Q(this.text.charAt(this.index));
            if ("." == d || this.isNumber(d))
              a += d;
            else {
              var e = this.peek();
              if ("e" == d && this.isExpOperator(e))
                a += d;
              else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))
                a += d;
              else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1))
                break;
              else
                this.throwError("Invalid exponent");
            }
            this.index++;
          }
          this.tokens.push({
            index: c,
            text: a,
            constant: !0,
            value: Number(a)
          });
        },
        readIdent: function() {
          for (var a = this.index; this.index < this.text.length; ) {
            var c = this.text.charAt(this.index);
            if (!this.isIdent(c) && !this.isNumber(c))
              break;
            this.index++;
          }
          this.tokens.push({
            index: a,
            text: this.text.slice(a, this.index),
            identifier: !0
          });
        },
        readString: function(a) {
          var c = this.index;
          this.index++;
          for (var d = "",
              e = a,
              f = !1; this.index < this.text.length; ) {
            var g = this.text.charAt(this.index),
                e = e + g;
            if (f)
              "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Xf[g] || g, f = !1;
            else if ("\\" === g)
              f = !0;
            else {
              if (g === a) {
                this.index++;
                this.tokens.push({
                  index: c,
                  text: e,
                  constant: !0,
                  value: d
                });
                return;
              }
              d += g;
            }
            this.index++;
          }
          this.throwError("Unterminated quote", c);
        }
      };
      var hb = function(a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d;
      };
      hb.ZERO = z(function() {
        return 0;
      }, {
        sharedGetter: !0,
        constant: !0
      });
      hb.prototype = {
        constructor: hb,
        parse: function(a) {
          this.text = a;
          this.tokens = this.lexer.lex(a);
          a = this.statements();
          0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
          a.literal = !!a.literal;
          a.constant = !!a.constant;
          return a;
        },
        primary: function() {
          var a;
          this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in lb ? a = lb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
          for (var c,
              d; c = this.expect("(", "[", "."); )
            "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
          return a;
        },
        throwError: function(a, c) {
          throw la("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        peekToken: function() {
          if (0 === this.tokens.length)
            throw la("ueoe", this.text);
          return this.tokens[0];
        },
        peek: function(a, c, d, e) {
          return this.peekAhead(0, a, c, d, e);
        },
        peekAhead: function(a, c, d, e, f) {
          if (this.tokens.length > a) {
            a = this.tokens[a];
            var g = a.text;
            if (g === c || g === d || g === e || g === f || !(c || d || e || f))
              return a;
          }
          return !1;
        },
        expect: function(a, c, d, e) {
          return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
        },
        consume: function(a) {
          if (0 === this.tokens.length)
            throw la("ueoe", this.text);
          var c = this.expect(a);
          c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
          return c;
        },
        unaryFn: function(a, c) {
          var d = mb[a];
          return z(function(a, f) {
            return d(a, f, c);
          }, {
            constant: c.constant,
            inputs: [c]
          });
        },
        binaryFn: function(a, c, d, e) {
          var f = mb[c];
          return z(function(c, e) {
            return f(c, e, a, d);
          }, {
            constant: a.constant && d.constant,
            inputs: !e && [a, d]
          });
        },
        identifier: function() {
          for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "("); )
            a += this.consume().text + this.consume().text;
          return zf(a, this.options, this.text);
        },
        constant: function() {
          var a = this.consume().value;
          return z(function() {
            return a;
          }, {
            constant: !0,
            literal: !0
          });
        },
        statements: function() {
          for (var a = []; ; )
            if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))
              return 1 === a.length ? a[0] : function(c, d) {
                for (var e,
                    f = 0,
                    g = a.length; f < g; f++)
                  e = a[f](c, d);
                return e;
              };
        },
        filterChain: function() {
          for (var a = this.expression(); this.expect("|"); )
            a = this.filter(a);
          return a;
        },
        filter: function(a) {
          var c = this.$filter(this.consume().text),
              d,
              e;
          if (this.peek(":"))
            for (d = [], e = []; this.expect(":"); )
              d.push(this.expression());
          var f = [a].concat(d || []);
          return z(function(f, h) {
            var l = a(f, h);
            if (e) {
              e[0] = l;
              for (l = d.length; l--; )
                e[l + 1] = d[l](f, h);
              return c.apply(t, e);
            }
            return c(l);
          }, {
            constant: !c.$stateful && f.every(ec),
            inputs: !c.$stateful && f
          });
        },
        expression: function() {
          return this.assignment();
        },
        assignment: function() {
          var a = this.ternary(),
              c,
              d;
          return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), z(function(d, f) {
            return a.assign(d, c(d, f), f);
          }, {inputs: [a, c]})) : a;
        },
        ternary: function() {
          var a = this.logicalOR(),
              c;
          if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
            var d = this.assignment();
            return z(function(e, f) {
              return a(e, f) ? c(e, f) : d(e, f);
            }, {constant: a.constant && c.constant && d.constant});
          }
          return a;
        },
        logicalOR: function() {
          for (var a = this.logicalAND(),
              c; c = this.expect("||"); )
            a = this.binaryFn(a, c.text, this.logicalAND(), !0);
          return a;
        },
        logicalAND: function() {
          for (var a = this.equality(),
              c; c = this.expect("&&"); )
            a = this.binaryFn(a, c.text, this.equality(), !0);
          return a;
        },
        equality: function() {
          for (var a = this.relational(),
              c; c = this.expect("==", "!=", "===", "!=="); )
            a = this.binaryFn(a, c.text, this.relational());
          return a;
        },
        relational: function() {
          for (var a = this.additive(),
              c; c = this.expect("<", ">", "<=", ">="); )
            a = this.binaryFn(a, c.text, this.additive());
          return a;
        },
        additive: function() {
          for (var a = this.multiplicative(),
              c; c = this.expect("+", "-"); )
            a = this.binaryFn(a, c.text, this.multiplicative());
          return a;
        },
        multiplicative: function() {
          for (var a = this.unary(),
              c; c = this.expect("*", "/", "%"); )
            a = this.binaryFn(a, c.text, this.unary());
          return a;
        },
        unary: function() {
          var a;
          return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(hb.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary();
        },
        fieldAccess: function(a) {
          var c = this.identifier();
          return z(function(d, e, f) {
            d = f || a(d, e);
            return null == d ? t : c(d);
          }, {assign: function(d, e, f) {
              (f = a(d, f)) || a.assign(d, f = {});
              return c.assign(f, e);
            }});
        },
        objectIndex: function(a) {
          var c = this.text,
              d = this.expression();
          this.consume("]");
          return z(function(e, f) {
            var g = a(e, f),
                h = d(e, f);
            sa(h, c);
            return g ? ta(g[h], c) : t;
          }, {assign: function(e, f, g) {
              var h = sa(d(e, g), c);
              (g = ta(a(e, g), c)) || a.assign(e, g = {});
              return g[h] = f;
            }});
        },
        functionCall: function(a, c) {
          var d = [];
          if (")" !== this.peekToken().text) {
            do
              d.push(this.expression());
 while (this.expect(","));
          }
          this.consume(")");
          var e = this.text,
              f = d.length ? [] : null;
          return function(g, h) {
            var l = c ? c(g, h) : y(c) ? t : g,
                k = a(g, h, l) || C;
            if (f)
              for (var m = d.length; m--; )
                f[m] = ta(d[m](g, h), e);
            ta(l, e);
            if (k) {
              if (k.constructor === k)
                throw la("isecfn", e);
              if (k === Uf || k === Vf || k === Wf)
                throw la("isecff", e);
            }
            l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
            return ta(l, e);
          };
        },
        arrayDeclaration: function() {
          var a = [];
          if ("]" !== this.peekToken().text) {
            do {
              if (this.peek("]"))
                break;
              a.push(this.expression());
            } while (this.expect(","));
          }
          this.consume("]");
          return z(function(c, d) {
            for (var e = [],
                f = 0,
                g = a.length; f < g; f++)
              e.push(a[f](c, d));
            return e;
          }, {
            literal: !0,
            constant: a.every(ec),
            inputs: a
          });
        },
        object: function() {
          var a = [],
              c = [];
          if ("}" !== this.peekToken().text) {
            do {
              if (this.peek("}"))
                break;
              var d = this.consume();
              d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);
              this.consume(":");
              c.push(this.expression());
            } while (this.expect(","));
          }
          this.consume("}");
          return z(function(d, f) {
            for (var g = {},
                h = 0,
                l = c.length; h < l; h++)
              g[a[h]] = c[h](d, f);
            return g;
          }, {
            literal: !0,
            constant: c.every(ec),
            inputs: c
          });
        }
      };
      var Bf = ha(),
          Af = ha(),
          Cf = Object.prototype.valueOf,
          Ca = T("$sce"),
          ma = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
          },
          ja = T("$compile"),
          Z = Y.createElement("a"),
          id = Ba(M.location.href);
      Dc.$inject = ["$provide"];
      jd.$inject = ["$locale"];
      ld.$inject = ["$locale"];
      var od = ".",
          Mf = {
            yyyy: $("FullYear", 4),
            yy: $("FullYear", 2, 0, !0),
            y: $("FullYear", 1),
            MMMM: Ib("Month"),
            MMM: Ib("Month", !0),
            MM: $("Month", 2, 1),
            M: $("Month", 1, 1),
            dd: $("Date", 2),
            d: $("Date", 1),
            HH: $("Hours", 2),
            H: $("Hours", 1),
            hh: $("Hours", 2, -12),
            h: $("Hours", 1, -12),
            mm: $("Minutes", 2),
            m: $("Minutes", 1),
            ss: $("Seconds", 2),
            s: $("Seconds", 1),
            sss: $("Milliseconds", 3),
            EEEE: Ib("Day"),
            EEE: Ib("Day", !0),
            a: function(a, c) {
              return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
            },
            Z: function(a) {
              a = -1 * a.getTimezoneOffset();
              return a = (0 <= a ? "+" : "") + (Hb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Hb(Math.abs(a % 60), 2));
            },
            ww: qd(2),
            w: qd(1)
          },
          Lf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
          Kf = /^\-?\d+$/;
      kd.$inject = ["$locale"];
      var Hf = da(Q),
          If = da(ub);
      md.$inject = ["$parse"];
      var Td = da({
        restrict: "E",
        compile: function(a, c) {
          if (!c.href && !c.xlinkHref && !c.name)
            return function(a, c) {
              var f = "[object SVGAnimatedString]" === Da.call(c.prop("href")) ? "xlink:href" : "href";
              c.on("click", function(a) {
                c.attr(f) || a.preventDefault();
              });
            };
        }
      }),
          vb = {};
      s(Eb, function(a, c) {
        if ("multiple" != a) {
          var d = ya("ng-" + c);
          vb[d] = function() {
            return {
              restrict: "A",
              priority: 100,
              link: function(a, f, g) {
                a.$watch(g[d], function(a) {
                  g.$set(c, !!a);
                });
              }
            };
          };
        }
      });
      s(Nc, function(a, c) {
        vb[c] = function() {
          return {
            priority: 100,
            link: function(a, e, f) {
              if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Of))) {
                f.$set("ngPattern", new RegExp(e[1], e[2]));
                return;
              }
              a.$watch(f[c], function(a) {
                f.$set(c, a);
              });
            }
          };
        };
      });
      s(["src", "srcset", "href"], function(a) {
        var c = ya("ng-" + a);
        vb[c] = function() {
          return {
            priority: 99,
            link: function(d, e, f) {
              var g = a,
                  h = a;
              "href" === a && "[object SVGAnimatedString]" === Da.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
              f.$observe(c, function(c) {
                c ? (f.$set(h, c), Ra && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null);
              });
            }
          };
        };
      });
      var Jb = {
        $addControl: C,
        $$renameControl: function(a, c) {
          a.$name = c;
        },
        $removeControl: C,
        $setValidity: C,
        $setDirty: C,
        $setPristine: C,
        $setSubmitted: C
      };
      rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
      var yd = function(a) {
        return ["$timeout", function(c) {
          return {
            name: "form",
            restrict: a ? "EAC" : "E",
            controller: rd,
            compile: function(a) {
              a.addClass(Sa).addClass(kb);
              return {pre: function(a, d, g, h) {
                  if (!("action" in g)) {
                    var l = function(c) {
                      a.$apply(function() {
                        h.$commitViewValue();
                        h.$setSubmitted();
                      });
                      c.preventDefault();
                    };
                    d[0].addEventListener("submit", l, !1);
                    d.on("$destroy", function() {
                      c(function() {
                        d[0].removeEventListener("submit", l, !1);
                      }, 0, !1);
                    });
                  }
                  var k = h.$$parentForm,
                      m = h.$name;
                  m && (gb(a, m, h, m), g.$observe(g.name ? "name" : "ngForm", function(c) {
                    m !== c && (gb(a, m, t, m), m = c, gb(a, m, h, m), k.$$renameControl(h, m));
                  }));
                  d.on("$destroy", function() {
                    k.$removeControl(h);
                    m && gb(a, m, t, m);
                    z(h, Jb);
                  });
                }};
            }
          };
        }];
      },
          Ud = yd(),
          ge = yd(!0),
          Nf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
          Yf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
          Zf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
          $f = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
          zd = /^(\d{4})-(\d{2})-(\d{2})$/,
          Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
          jc = /^(\d{4})-W(\d\d)$/,
          Bd = /^(\d{4})-(\d\d)$/,
          Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
          ag = /(\s+|^)default(\s+|$)/,
          Mb = new T("ngModel"),
          Dd = {
            text: function(a, c, d, e, f, g) {
              ib(a, c, d, e, f, g);
              hc(e);
            },
            date: jb("date", zd, Lb(zd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": jb("datetimelocal", Ad, Lb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: jb("time", Cd, Lb(Cd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: jb("week", jc, function(a, c) {
              if (pa(a))
                return a;
              if (F(a)) {
                jc.lastIndex = 0;
                var d = jc.exec(a);
                if (d) {
                  var e = +d[1],
                      f = +d[2],
                      g = d = 0,
                      h = 0,
                      l = 0,
                      k = pd(e),
                      f = 7 * (f - 1);
                  c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
                  return new Date(e, 0, k.getDate() + f, d, g, h, l);
                }
              }
              return NaN;
            }, "yyyy-Www"),
            month: jb("month", Bd, Lb(Bd, ["yyyy", "MM"]), "yyyy-MM"),
            number: function(a, c, d, e, f, g) {
              td(a, c, d, e);
              ib(a, c, d, e, f, g);
              e.$$parserName = "number";
              e.$parsers.push(function(a) {
                return e.$isEmpty(a) ? null : $f.test(a) ? parseFloat(a) : t;
              });
              e.$formatters.push(function(a) {
                if (!e.$isEmpty(a)) {
                  if (!V(a))
                    throw Mb("numfmt", a);
                  a = a.toString();
                }
                return a;
              });
              if (d.min || d.ngMin) {
                var h;
                e.$validators.min = function(a) {
                  return e.$isEmpty(a) || D(h) || a >= h;
                };
                d.$observe("min", function(a) {
                  y(a) && !V(a) && (a = parseFloat(a, 10));
                  h = V(a) && !isNaN(a) ? a : t;
                  e.$validate();
                });
              }
              if (d.max || d.ngMax) {
                var l;
                e.$validators.max = function(a) {
                  return e.$isEmpty(a) || D(l) || a <= l;
                };
                d.$observe("max", function(a) {
                  y(a) && !V(a) && (a = parseFloat(a, 10));
                  l = V(a) && !isNaN(a) ? a : t;
                  e.$validate();
                });
              }
            },
            url: function(a, c, d, e, f, g) {
              ib(a, c, d, e, f, g);
              hc(e);
              e.$$parserName = "url";
              e.$validators.url = function(a, c) {
                var d = a || c;
                return e.$isEmpty(d) || Yf.test(d);
              };
            },
            email: function(a, c, d, e, f, g) {
              ib(a, c, d, e, f, g);
              hc(e);
              e.$$parserName = "email";
              e.$validators.email = function(a, c) {
                var d = a || c;
                return e.$isEmpty(d) || Zf.test(d);
              };
            },
            radio: function(a, c, d, e) {
              D(d.name) && c.attr("name", ++nb);
              c.on("click", function(a) {
                c[0].checked && e.$setViewValue(d.value, a && a.type);
              });
              e.$render = function() {
                c[0].checked = d.value == e.$viewValue;
              };
              d.$observe("value", e.$render);
            },
            checkbox: function(a, c, d, e, f, g, h, l) {
              var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0),
                  m = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);
              c.on("click", function(a) {
                e.$setViewValue(c[0].checked, a && a.type);
              });
              e.$render = function() {
                c[0].checked = e.$viewValue;
              };
              e.$isEmpty = function(a) {
                return !1 === a;
              };
              e.$formatters.push(function(a) {
                return fa(a, k);
              });
              e.$parsers.push(function(a) {
                return a ? k : m;
              });
            },
            hidden: C,
            button: C,
            submit: C,
            reset: C,
            file: C
          },
          xc = ["$browser", "$sniffer", "$filter", "$parse", function(a, c, d, e) {
            return {
              restrict: "E",
              require: ["?ngModel"],
              link: {pre: function(f, g, h, l) {
                  l[0] && (Dd[Q(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e);
                }}
            };
          }],
          kb = "ng-valid",
          vd = "ng-invalid",
          Sa = "ng-pristine",
          Kb = "ng-dirty",
          xd = "ng-pending",
          bg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, c, d, e, f, g, h, l, k, m) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue = t;
            this.$validators = {};
            this.$asyncValidators = {};
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success = {};
            this.$pending = t;
            this.$name = m(d.name || "", !1)(a);
            var p = f(d.ngModel),
                q = p.assign,
                u = p,
                r = q,
                O = null,
                n = this;
            this.$$setOptions = function(a) {
              if ((n.$options = a) && a.getterSetter) {
                var c = f(d.ngModel + "()"),
                    g = f(d.ngModel + "($$$p)");
                u = function(a) {
                  var d = p(a);
                  G(d) && (d = c(a));
                  return d;
                };
                r = function(a, c) {
                  G(p(a)) ? g(a, {$$$p: n.$modelValue}) : q(a, n.$modelValue);
                };
              } else if (!p.assign)
                throw Mb("nonassign", d.ngModel, va(e));
            };
            this.$render = C;
            this.$isEmpty = function(a) {
              return D(a) || "" === a || null === a || a !== a;
            };
            var v = e.inheritedData("$formController") || Jb,
                w = 0;
            sd({
              ctrl: this,
              $element: e,
              set: function(a, c) {
                a[c] = !0;
              },
              unset: function(a, c) {
                delete a[c];
              },
              parentForm: v,
              $animate: g
            });
            this.$setPristine = function() {
              n.$dirty = !1;
              n.$pristine = !0;
              g.removeClass(e, Kb);
              g.addClass(e, Sa);
            };
            this.$setDirty = function() {
              n.$dirty = !0;
              n.$pristine = !1;
              g.removeClass(e, Sa);
              g.addClass(e, Kb);
              v.$setDirty();
            };
            this.$setUntouched = function() {
              n.$touched = !1;
              n.$untouched = !0;
              g.setClass(e, "ng-untouched", "ng-touched");
            };
            this.$setTouched = function() {
              n.$touched = !0;
              n.$untouched = !1;
              g.setClass(e, "ng-touched", "ng-untouched");
            };
            this.$rollbackViewValue = function() {
              h.cancel(O);
              n.$viewValue = n.$$lastCommittedViewValue;
              n.$render();
            };
            this.$validate = function() {
              if (!V(n.$modelValue) || !isNaN(n.$modelValue)) {
                var a = n.$$rawModelValue,
                    c = n.$valid,
                    d = n.$modelValue,
                    e = n.$options && n.$options.allowInvalid;
                n.$$runValidators(n.$error[n.$$parserName || "parse"] ? !1 : t, a, n.$$lastCommittedViewValue, function(f) {
                  e || c === f || (n.$modelValue = f ? a : t, n.$modelValue !== d && n.$$writeModelToScope());
                });
              }
            };
            this.$$runValidators = function(a, c, d, e) {
              function f() {
                var a = !0;
                s(n.$validators, function(e, f) {
                  var g = e(c, d);
                  a = a && g;
                  h(f, g);
                });
                return a ? !0 : (s(n.$asyncValidators, function(a, c) {
                  h(c, null);
                }), !1);
              }
              function g() {
                var a = [],
                    e = !0;
                s(n.$asyncValidators, function(f, g) {
                  var l = f(c, d);
                  if (!l || !G(l.then))
                    throw Mb("$asyncValidators", l);
                  h(g, t);
                  a.push(l.then(function() {
                    h(g, !0);
                  }, function(a) {
                    e = !1;
                    h(g, !1);
                  }));
                });
                a.length ? k.all(a).then(function() {
                  l(e);
                }, C) : l(!0);
              }
              function h(a, c) {
                m === w && n.$setValidity(a, c);
              }
              function l(a) {
                m === w && e(a);
              }
              w++;
              var m = w;
              (function(a) {
                var c = n.$$parserName || "parse";
                if (a === t)
                  h(c, null);
                else if (h(c, a), !a)
                  return s(n.$validators, function(a, c) {
                    h(c, null);
                  }), s(n.$asyncValidators, function(a, c) {
                    h(c, null);
                  }), !1;
                return !0;
              })(a) ? f() ? g() : l(!1) : l(!1);
            };
            this.$commitViewValue = function() {
              var a = n.$viewValue;
              h.cancel(O);
              if (n.$$lastCommittedViewValue !== a || "" === a && n.$$hasNativeValidators)
                n.$$lastCommittedViewValue = a, n.$pristine && this.$setDirty(), this.$$parseAndValidate();
            };
            this.$$parseAndValidate = function() {
              var c = n.$$lastCommittedViewValue,
                  d = D(c) ? t : !0;
              if (d)
                for (var e = 0; e < n.$parsers.length; e++)
                  if (c = n.$parsers[e](c), D(c)) {
                    d = !1;
                    break;
                  }
              V(n.$modelValue) && isNaN(n.$modelValue) && (n.$modelValue = u(a));
              var f = n.$modelValue,
                  g = n.$options && n.$options.allowInvalid;
              n.$$rawModelValue = c;
              g && (n.$modelValue = c, n.$modelValue !== f && n.$$writeModelToScope());
              n.$$runValidators(d, c, n.$$lastCommittedViewValue, function(a) {
                g || (n.$modelValue = a ? c : t, n.$modelValue !== f && n.$$writeModelToScope());
              });
            };
            this.$$writeModelToScope = function() {
              r(a, n.$modelValue);
              s(n.$viewChangeListeners, function(a) {
                try {
                  a();
                } catch (d) {
                  c(d);
                }
              });
            };
            this.$setViewValue = function(a, c) {
              n.$viewValue = a;
              n.$options && !n.$options.updateOnDefault || n.$$debounceViewValueCommit(c);
            };
            this.$$debounceViewValueCommit = function(c) {
              var d = 0,
                  e = n.$options;
              e && y(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e["default"]) && (d = e["default"]));
              h.cancel(O);
              d ? O = h(function() {
                n.$commitViewValue();
              }, d) : l.$$phase ? n.$commitViewValue() : a.$apply(function() {
                n.$commitViewValue();
              });
            };
            a.$watch(function() {
              var c = u(a);
              if (c !== n.$modelValue) {
                n.$modelValue = n.$$rawModelValue = c;
                for (var d = n.$formatters,
                    e = d.length,
                    f = c; e--; )
                  f = d[e](f);
                n.$viewValue !== f && (n.$viewValue = n.$$lastCommittedViewValue = f, n.$render(), n.$$runValidators(t, c, f, C));
              }
              return c;
            });
          }],
          ve = ["$rootScope", function(a) {
            return {
              restrict: "A",
              require: ["ngModel", "^?form", "^?ngModelOptions"],
              controller: bg,
              priority: 1,
              compile: function(c) {
                c.addClass(Sa).addClass("ng-untouched").addClass(kb);
                return {
                  pre: function(a, c, f, g) {
                    var h = g[0],
                        l = g[1] || Jb;
                    h.$$setOptions(g[2] && g[2].$options);
                    l.$addControl(h);
                    f.$observe("name", function(a) {
                      h.$name !== a && l.$$renameControl(h, a);
                    });
                    a.$on("$destroy", function() {
                      l.$removeControl(h);
                    });
                  },
                  post: function(c, e, f, g) {
                    var h = g[0];
                    if (h.$options && h.$options.updateOn)
                      e.on(h.$options.updateOn, function(a) {
                        h.$$debounceViewValueCommit(a && a.type);
                      });
                    e.on("blur", function(e) {
                      h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched));
                    });
                  }
                };
              }
            };
          }],
          xe = da({
            restrict: "A",
            require: "ngModel",
            link: function(a, c, d, e) {
              e.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange);
              });
            }
          }),
          zc = function() {
            return {
              restrict: "A",
              require: "?ngModel",
              link: function(a, c, d, e) {
                e && (d.required = !0, e.$validators.required = function(a, c) {
                  return !d.required || !e.$isEmpty(c);
                }, d.$observe("required", function() {
                  e.$validate();
                }));
              }
            };
          },
          yc = function() {
            return {
              restrict: "A",
              require: "?ngModel",
              link: function(a, c, d, e) {
                if (e) {
                  var f,
                      g = d.ngPattern || d.pattern;
                  d.$observe("pattern", function(a) {
                    F(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                    if (a && !a.test)
                      throw T("ngPattern")("noregexp", g, a, va(c));
                    f = a || t;
                    e.$validate();
                  });
                  e.$validators.pattern = function(a) {
                    return e.$isEmpty(a) || D(f) || f.test(a);
                  };
                }
              }
            };
          },
          Bc = function() {
            return {
              restrict: "A",
              require: "?ngModel",
              link: function(a, c, d, e) {
                if (e) {
                  var f = -1;
                  d.$observe("maxlength", function(a) {
                    a = ba(a);
                    f = isNaN(a) ? -1 : a;
                    e.$validate();
                  });
                  e.$validators.maxlength = function(a, c) {
                    return 0 > f || e.$isEmpty(a) || c.length <= f;
                  };
                }
              }
            };
          },
          Ac = function() {
            return {
              restrict: "A",
              require: "?ngModel",
              link: function(a, c, d, e) {
                if (e) {
                  var f = 0;
                  d.$observe("minlength", function(a) {
                    f = ba(a) || 0;
                    e.$validate();
                  });
                  e.$validators.minlength = function(a, c) {
                    return e.$isEmpty(c) || c.length >= f;
                  };
                }
              }
            };
          },
          we = function() {
            return {
              restrict: "A",
              priority: 100,
              require: "ngModel",
              link: function(a, c, d, e) {
                var f = c.attr(d.$attr.ngList) || ", ",
                    g = "false" !== d.ngTrim,
                    h = g ? U(f) : f;
                e.$parsers.push(function(a) {
                  if (!D(a)) {
                    var c = [];
                    a && s(a.split(h), function(a) {
                      a && c.push(g ? U(a) : a);
                    });
                    return c;
                  }
                });
                e.$formatters.push(function(a) {
                  return x(a) ? a.join(f) : t;
                });
                e.$isEmpty = function(a) {
                  return !a || !a.length;
                };
              }
            };
          },
          cg = /^(true|false|\d+)$/,
          ye = function() {
            return {
              restrict: "A",
              priority: 100,
              compile: function(a, c) {
                return cg.test(c.ngValue) ? function(a, c, f) {
                  f.$set("value", a.$eval(f.ngValue));
                } : function(a, c, f) {
                  a.$watch(f.ngValue, function(a) {
                    f.$set("value", a);
                  });
                };
              }
            };
          },
          ze = function() {
            return {
              restrict: "A",
              controller: ["$scope", "$attrs", function(a, c) {
                var d = this;
                this.$options = a.$eval(c.ngModelOptions);
                this.$options.updateOn !== t ? (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(ag, function() {
                  d.$options.updateOnDefault = !0;
                  return " ";
                }))) : this.$options.updateOnDefault = !0;
              }]
            };
          },
          Zd = ["$compile", function(a) {
            return {
              restrict: "AC",
              compile: function(c) {
                a.$$addBindingClass(c);
                return function(c, e, f) {
                  a.$$addBindingInfo(e, f.ngBind);
                  e = e[0];
                  c.$watch(f.ngBind, function(a) {
                    e.textContent = a === t ? "" : a;
                  });
                };
              }
            };
          }],
          ae = ["$interpolate", "$compile", function(a, c) {
            return {compile: function(d) {
                c.$$addBindingClass(d);
                return function(d, f, g) {
                  d = a(f.attr(g.$attr.ngBindTemplate));
                  c.$$addBindingInfo(f, d.expressions);
                  f = f[0];
                  g.$observe("ngBindTemplate", function(a) {
                    f.textContent = a === t ? "" : a;
                  });
                };
              }};
          }],
          $d = ["$sce", "$parse", "$compile", function(a, c, d) {
            return {
              restrict: "A",
              compile: function(e, f) {
                var g = c(f.ngBindHtml),
                    h = c(f.ngBindHtml, function(a) {
                      return (a || "").toString();
                    });
                d.$$addBindingClass(e);
                return function(c, e, f) {
                  d.$$addBindingInfo(e, f.ngBindHtml);
                  c.$watch(h, function() {
                    e.html(a.getTrustedHtml(g(c)) || "");
                  });
                };
              }
            };
          }],
          be = ic("", !0),
          de = ic("Odd", 0),
          ce = ic("Even", 1),
          ee = Ja({compile: function(a, c) {
              c.$set("ngCloak", t);
              a.removeClass("ng-cloak");
            }}),
          fe = [function() {
            return {
              restrict: "A",
              scope: !0,
              controller: "@",
              priority: 500
            };
          }],
          Cc = {},
          dg = {
            blur: !0,
            focus: !0
          };
      s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var c = ya("ng-" + a);
        Cc[c] = ["$parse", "$rootScope", function(d, e) {
          return {
            restrict: "A",
            compile: function(f, g) {
              var h = d(g[c], null, !0);
              return function(c, d) {
                d.on(a, function(d) {
                  var f = function() {
                    h(c, {$event: d});
                  };
                  dg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
                });
              };
            }
          };
        }];
      });
      var ie = ["$animate", function(a) {
        return {
          multiElement: !0,
          transclude: "element",
          priority: 600,
          terminal: !0,
          restrict: "A",
          $$tlb: !0,
          link: function(c, d, e, f, g) {
            var h,
                l,
                k;
            c.$watch(e.ngIf, function(c) {
              c ? l || g(function(c, f) {
                l = f;
                c[c.length++] = Y.createComment(" end ngIf: " + e.ngIf + " ");
                h = {clone: c};
                a.enter(c, d.parent(), d);
              }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = tb(h.clone), a.leave(k).then(function() {
                k = null;
              }), h = null));
            });
          }
        };
      }],
          je = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function(a, c, d, e) {
            return {
              restrict: "ECA",
              priority: 400,
              terminal: !0,
              transclude: "element",
              controller: ga.noop,
              compile: function(f, g) {
                var h = g.ngInclude || g.src,
                    l = g.onload || "",
                    k = g.autoscroll;
                return function(f, g, q, s, r) {
                  var t = 0,
                      n,
                      v,
                      w,
                      L = function() {
                        v && (v.remove(), v = null);
                        n && (n.$destroy(), n = null);
                        w && (d.leave(w).then(function() {
                          v = null;
                        }), v = w, w = null);
                      };
                  f.$watch(e.parseAsResourceUrl(h), function(e) {
                    var h = function() {
                      !y(k) || k && !f.$eval(k) || c();
                    },
                        q = ++t;
                    e ? (a(e, !0).then(function(a) {
                      if (q === t) {
                        var c = f.$new();
                        s.template = a;
                        a = r(c, function(a) {
                          L();
                          d.enter(a, null, g).then(h);
                        });
                        n = c;
                        w = a;
                        n.$emit("$includeContentLoaded", e);
                        f.$eval(l);
                      }
                    }, function() {
                      q === t && (L(), f.$emit("$includeContentError", e));
                    }), f.$emit("$includeContentRequested", e)) : (L(), s.template = null);
                  });
                };
              }
            };
          }],
          Ae = ["$compile", function(a) {
            return {
              restrict: "ECA",
              priority: -400,
              require: "ngInclude",
              link: function(c, d, e, f) {
                /SVG/.test(d[0].toString()) ? (d.empty(), a(Fc(f.template, Y).childNodes)(c, function(a) {
                  d.append(a);
                }, {futureParentElement: d})) : (d.html(f.template), a(d.contents())(c));
              }
            };
          }],
          ke = Ja({
            priority: 450,
            compile: function() {
              return {pre: function(a, c, d) {
                  a.$eval(d.ngInit);
                }};
            }
          }),
          le = Ja({
            terminal: !0,
            priority: 1E3
          }),
          me = ["$locale", "$interpolate", function(a, c) {
            var d = /{}/g,
                e = /^when(Minus)?(.+)$/;
            return {
              restrict: "EA",
              link: function(f, g, h) {
                function l(a) {
                  g.text(a || "");
                }
                var k = h.count,
                    m = h.$attr.when && g.attr(h.$attr.when),
                    p = h.offset || 0,
                    q = f.$eval(m) || {},
                    u = {},
                    m = c.startSymbol(),
                    r = c.endSymbol(),
                    t = m + k + "-" + p + r,
                    n = ga.noop,
                    v;
                s(h, function(a, c) {
                  var d = e.exec(c);
                  d && (d = (d[1] ? "-" : "") + Q(d[2]), q[d] = g.attr(h.$attr[c]));
                });
                s(q, function(a, e) {
                  u[e] = c(a.replace(d, t));
                });
                f.$watch(k, function(c) {
                  c = parseFloat(c);
                  var d = isNaN(c);
                  d || c in q || (c = a.pluralCat(c - p));
                  c === v || d && isNaN(v) || (n(), n = f.$watch(u[c], l), v = c);
                });
              }
            };
          }],
          ne = ["$parse", "$animate", function(a, c) {
            var d = T("ngRepeat"),
                e = function(a, c, d, e, k, m, p) {
                  a[d] = e;
                  k && (a[k] = m);
                  a.$index = c;
                  a.$first = 0 === c;
                  a.$last = c === p - 1;
                  a.$middle = !(a.$first || a.$last);
                  a.$odd = !(a.$even = 0 === (c & 1));
                };
            return {
              restrict: "A",
              multiElement: !0,
              transclude: "element",
              priority: 1E3,
              terminal: !0,
              $$tlb: !0,
              compile: function(f, g) {
                var h = g.ngRepeat,
                    l = Y.createComment(" end ngRepeat: " + h + " "),
                    k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                if (!k)
                  throw d("iexp", h);
                var m = k[1],
                    p = k[2],
                    q = k[3],
                    u = k[4],
                    k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                if (!k)
                  throw d("iidexp", m);
                var r = k[3] || k[1],
                    y = k[2];
                if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent)$/.test(q)))
                  throw d("badident", q);
                var n,
                    v,
                    w,
                    D,
                    z = {$id: Na};
                u ? n = a(u) : (w = function(a, c) {
                  return Na(c);
                }, D = function(a) {
                  return a;
                });
                return function(a, f, g, k, m) {
                  n && (v = function(c, d, e) {
                    y && (z[y] = c);
                    z[r] = d;
                    z.$index = e;
                    return n(a, z);
                  });
                  var u = ha();
                  a.$watchCollection(p, function(g) {
                    var k,
                        p,
                        n = f[0],
                        E,
                        z = ha(),
                        C,
                        S,
                        N,
                        G,
                        J,
                        x,
                        H;
                    q && (a[q] = g);
                    if (Ta(g))
                      J = g, p = v || w;
                    else {
                      p = v || D;
                      J = [];
                      for (H in g)
                        g.hasOwnProperty(H) && "$" != H.charAt(0) && J.push(H);
                      J.sort();
                    }
                    C = J.length;
                    H = Array(C);
                    for (k = 0; k < C; k++)
                      if (S = g === J ? k : J[k], N = g[S], G = p(S, N, k), u[G])
                        x = u[G], delete u[G], z[G] = x, H[k] = x;
                      else {
                        if (z[G])
                          throw s(H, function(a) {
                            a && a.scope && (u[a.id] = a);
                          }), d("dupes", h, G, N);
                        H[k] = {
                          id: G,
                          scope: t,
                          clone: t
                        };
                        z[G] = !0;
                      }
                    for (E in u) {
                      x = u[E];
                      G = tb(x.clone);
                      c.leave(G);
                      if (G[0].parentNode)
                        for (k = 0, p = G.length; k < p; k++)
                          G[k].$$NG_REMOVED = !0;
                      x.scope.$destroy();
                    }
                    for (k = 0; k < C; k++)
                      if (S = g === J ? k : J[k], N = g[S], x = H[k], x.scope) {
                        E = n;
                        do
                          E = E.nextSibling;
 while (E && E.$$NG_REMOVED);
                        x.clone[0] != E && c.move(tb(x.clone), null, B(n));
                        n = x.clone[x.clone.length - 1];
                        e(x.scope, k, r, N, y, S, C);
                      } else
                        m(function(a, d) {
                          x.scope = d;
                          var f = l.cloneNode(!1);
                          a[a.length++] = f;
                          c.enter(a, null, B(n));
                          n = f;
                          x.clone = a;
                          z[x.id] = x;
                          e(x.scope, k, r, N, y, S, C);
                        });
                    u = z;
                  });
                };
              }
            };
          }],
          oe = ["$animate", function(a) {
            return {
              restrict: "A",
              multiElement: !0,
              link: function(c, d, e) {
                c.$watch(e.ngShow, function(c) {
                  a[c ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"});
                });
              }
            };
          }],
          he = ["$animate", function(a) {
            return {
              restrict: "A",
              multiElement: !0,
              link: function(c, d, e) {
                c.$watch(e.ngHide, function(c) {
                  a[c ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"});
                });
              }
            };
          }],
          pe = Ja(function(a, c, d) {
            a.$watch(d.ngStyle, function(a, d) {
              d && a !== d && s(d, function(a, d) {
                c.css(d, "");
              });
              a && c.css(a);
            }, !0);
          }),
          qe = ["$animate", function(a) {
            return {
              restrict: "EA",
              require: "ngSwitch",
              controller: ["$scope", function() {
                this.cases = {};
              }],
              link: function(c, d, e, f) {
                var g = [],
                    h = [],
                    l = [],
                    k = [],
                    m = function(a, c) {
                      return function() {
                        a.splice(c, 1);
                      };
                    };
                c.$watch(e.ngSwitch || e.on, function(c) {
                  var d,
                      e;
                  d = 0;
                  for (e = l.length; d < e; ++d)
                    a.cancel(l[d]);
                  d = l.length = 0;
                  for (e = k.length; d < e; ++d) {
                    var r = tb(h[d].clone);
                    k[d].$destroy();
                    (l[d] = a.leave(r)).then(m(l, d));
                  }
                  h.length = 0;
                  k.length = 0;
                  (g = f.cases["!" + c] || f.cases["?"]) && s(g, function(c) {
                    c.transclude(function(d, e) {
                      k.push(e);
                      var f = c.element;
                      d[d.length++] = Y.createComment(" end ngSwitchWhen: ");
                      h.push({clone: d});
                      a.enter(d, f.parent(), f);
                    });
                  });
                });
              }
            };
          }],
          re = Ja({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, c, d, e, f) {
              e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
              e.cases["!" + d.ngSwitchWhen].push({
                transclude: f,
                element: c
              });
            }
          }),
          se = Ja({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function(a, c, d, e, f) {
              e.cases["?"] = e.cases["?"] || [];
              e.cases["?"].push({
                transclude: f,
                element: c
              });
            }
          }),
          ue = Ja({
            restrict: "EAC",
            link: function(a, c, d, e, f) {
              if (!f)
                throw T("ngTransclude")("orphan", va(c));
              f(function(a) {
                c.empty();
                c.append(a);
              });
            }
          }),
          Vd = ["$templateCache", function(a) {
            return {
              restrict: "E",
              terminal: !0,
              compile: function(c, d) {
                "text/ng-template" == d.type && a.put(d.id, c[0].text);
              }
            };
          }],
          eg = T("ngOptions"),
          te = da({
            restrict: "A",
            terminal: !0
          }),
          Wd = ["$compile", "$parse", function(a, c) {
            var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                e = {$setViewValue: C};
            return {
              restrict: "E",
              require: ["select", "?ngModel"],
              controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                var l = this,
                    k = {},
                    m = e,
                    p;
                l.databound = d.ngModel;
                l.init = function(a, c, d) {
                  m = a;
                  p = d;
                };
                l.addOption = function(c, d) {
                  Ma(c, '"option value"');
                  k[c] = !0;
                  m.$viewValue == c && (a.val(c), p.parent() && p.remove());
                  d && d[0].hasAttribute("selected") && (d[0].selected = !0);
                };
                l.removeOption = function(a) {
                  this.hasOption(a) && (delete k[a], m.$viewValue === a && this.renderUnknownOption(a));
                };
                l.renderUnknownOption = function(c) {
                  c = "? " + Na(c) + " ?";
                  p.val(c);
                  a.prepend(p);
                  a.val(c);
                  p.prop("selected", !0);
                };
                l.hasOption = function(a) {
                  return k.hasOwnProperty(a);
                };
                c.$on("$destroy", function() {
                  l.renderUnknownOption = C;
                });
              }],
              link: function(e, g, h, l) {
                function k(a, c, d, e) {
                  d.$render = function() {
                    var a = d.$viewValue;
                    e.hasOption(a) ? (C.parent() && C.remove(), c.val(a), "" === a && n.prop("selected", !0)) : D(a) && n ? c.val("") : e.renderUnknownOption(a);
                  };
                  c.on("change", function() {
                    a.$apply(function() {
                      C.parent() && C.remove();
                      d.$setViewValue(c.val());
                    });
                  });
                }
                function m(a, c, d) {
                  var e;
                  d.$render = function() {
                    var a = new db(d.$viewValue);
                    s(c.find("option"), function(c) {
                      c.selected = y(a.get(c.value));
                    });
                  };
                  a.$watch(function() {
                    fa(e, d.$viewValue) || (e = qa(d.$viewValue), d.$render());
                  });
                  c.on("change", function() {
                    a.$apply(function() {
                      var a = [];
                      s(c.find("option"), function(c) {
                        c.selected && a.push(c.value);
                      });
                      d.$setViewValue(a);
                    });
                  });
                }
                function p(e, f, g) {
                  function h(a, c, d) {
                    T[A] = d;
                    H && (T[H] = c);
                    return a(e, T);
                  }
                  function k(a) {
                    var c;
                    if (u)
                      if (M && x(a)) {
                        c = new db([]);
                        for (var d = 0; d < a.length; d++)
                          c.put(h(M, null, a[d]), !0);
                      } else
                        c = new db(a);
                    else
                      M && (a = h(M, null, a));
                    return function(d, e) {
                      var f;
                      f = M ? M : B ? B : F;
                      return u ? y(c.remove(h(f, d, e))) : a === h(f, d, e);
                    };
                  }
                  function l() {
                    v || (e.$$postDigest(p), v = !0);
                  }
                  function m(a, c, d) {
                    a[c] = a[c] || 0;
                    a[c] += d ? 1 : -1;
                  }
                  function p() {
                    v = !1;
                    var a = {"": []},
                        c = [""],
                        d,
                        l,
                        n,
                        r,
                        t;
                    n = g.$viewValue;
                    r = P(e) || [];
                    var B = H ? Object.keys(r).sort() : r,
                        x,
                        A,
                        D,
                        F,
                        N = {};
                    t = k(n);
                    var I = !1,
                        U,
                        V;
                    Q = {};
                    for (F = 0; D = B.length, F < D; F++) {
                      x = F;
                      if (H && (x = B[F], "$" === x.charAt(0)))
                        continue;
                      A = r[x];
                      d = h(J, x, A) || "";
                      (l = a[d]) || (l = a[d] = [], c.push(d));
                      d = t(x, A);
                      I = I || d;
                      A = h(C, x, A);
                      A = y(A) ? A : "";
                      V = M ? M(e, T) : H ? B[F] : F;
                      M && (Q[V] = x);
                      l.push({
                        id: V,
                        label: A,
                        selected: d
                      });
                    }
                    u || (z || null === n ? a[""].unshift({
                      id: "",
                      label: "",
                      selected: !I
                    }) : I || a[""].unshift({
                      id: "?",
                      label: "",
                      selected: !0
                    }));
                    x = 0;
                    for (B = c.length; x < B; x++) {
                      d = c[x];
                      l = a[d];
                      R.length <= x ? (n = {
                        element: G.clone().attr("label", d),
                        label: l.label
                      }, r = [n], R.push(r), f.append(n.element)) : (r = R[x], n = r[0], n.label != d && n.element.attr("label", n.label = d));
                      I = null;
                      F = 0;
                      for (D = l.length; F < D; F++)
                        d = l[F], (t = r[F + 1]) ? (I = t.element, t.label !== d.label && (m(N, t.label, !1), m(N, d.label, !0), I.text(t.label = d.label), I.prop("label", t.label)), t.id !== d.id && I.val(t.id = d.id), I[0].selected !== d.selected && (I.prop("selected", t.selected = d.selected), Ra && I.prop("selected", t.selected))) : ("" === d.id && z ? U = z : (U = w.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), r.push(t = {
                          element: U,
                          label: d.label,
                          id: d.id,
                          selected: d.selected
                        }), m(N, d.label, !0), I ? I.after(U) : n.element.append(U), I = U);
                      for (F++; r.length > F; )
                        d = r.pop(), m(N, d.label, !1), d.element.remove();
                    }
                    for (; R.length > x; ) {
                      l = R.pop();
                      for (F = 1; F < l.length; ++F)
                        m(N, l[F].label, !1);
                      l[0].element.remove();
                    }
                    s(N, function(a, c) {
                      0 < a ? q.addOption(c) : 0 > a && q.removeOption(c);
                    });
                  }
                  var n;
                  if (!(n = r.match(d)))
                    throw eg("iexp", r, va(f));
                  var C = c(n[2] || n[1]),
                      A = n[4] || n[6],
                      D = / as /.test(n[0]) && n[1],
                      B = D ? c(D) : null,
                      H = n[5],
                      J = c(n[3] || ""),
                      F = c(n[2] ? n[1] : A),
                      P = c(n[7]),
                      M = n[8] ? c(n[8]) : null,
                      Q = {},
                      R = [[{
                        element: f,
                        label: ""
                      }]],
                      T = {};
                  z && (a(z)(e), z.removeClass("ng-scope"), z.remove());
                  f.empty();
                  f.on("change", function() {
                    e.$apply(function() {
                      var a = P(e) || [],
                          c;
                      if (u)
                        c = [], s(f.val(), function(d) {
                          d = M ? Q[d] : d;
                          c.push("?" === d ? t : "" === d ? null : h(B ? B : F, d, a[d]));
                        });
                      else {
                        var d = M ? Q[f.val()] : f.val();
                        c = "?" === d ? t : "" === d ? null : h(B ? B : F, d, a[d]);
                      }
                      g.$setViewValue(c);
                      p();
                    });
                  });
                  g.$render = p;
                  e.$watchCollection(P, l);
                  e.$watchCollection(function() {
                    var a = P(e),
                        c;
                    if (a && x(a)) {
                      c = Array(a.length);
                      for (var d = 0,
                          f = a.length; d < f; d++)
                        c[d] = h(C, d, a[d]);
                    } else if (a)
                      for (d in c = {}, a)
                        a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));
                    return c;
                  }, l);
                  u && e.$watchCollection(function() {
                    return g.$modelValue;
                  }, l);
                }
                if (l[1]) {
                  var q = l[0];
                  l = l[1];
                  var u = h.multiple,
                      r = h.ngOptions,
                      z = !1,
                      n,
                      v = !1,
                      w = B(Y.createElement("option")),
                      G = B(Y.createElement("optgroup")),
                      C = w.clone();
                  h = 0;
                  for (var A = g.children(),
                      H = A.length; h < H; h++)
                    if ("" === A[h].value) {
                      n = z = A.eq(h);
                      break;
                    }
                  q.init(l, z, C);
                  u && (l.$isEmpty = function(a) {
                    return !a || 0 === a.length;
                  });
                  r ? p(e, g, l) : u ? m(e, g, l) : k(e, g, l, q);
                }
              }
            };
          }],
          Yd = ["$interpolate", function(a) {
            var c = {
              addOption: C,
              removeOption: C
            };
            return {
              restrict: "E",
              priority: 100,
              compile: function(d, e) {
                if (D(e.value)) {
                  var f = a(d.text(), !0);
                  f || e.$set("value", d.text());
                }
                return function(a, d, e) {
                  var k = d.parent(),
                      m = k.data("$selectController") || k.parent().data("$selectController");
                  m && m.databound || (m = c);
                  f ? a.$watch(f, function(a, c) {
                    e.$set("value", a);
                    c !== a && m.removeOption(c);
                    m.addOption(a, d);
                  }) : m.addOption(e.value, d);
                  d.on("$destroy", function() {
                    m.removeOption(e.value);
                  });
                };
              }
            };
          }],
          Xd = da({
            restrict: "E",
            terminal: !1
          });
      M.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), Pd(ga), B(Y).ready(function() {
        Jd(Y, sc);
      }));
    })(window, document);
    !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, "angular");
});



System.register("github:angular/bower-angular-animate@1.3.8/angular-animate", ["github:angular/bower-angular@1.3.8"], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, ["github:angular/bower-angular@1.3.8"]);
  (function() {
    "format global";
    "deps angular";
    (function(window, angular, undefined) {
      'use strict';
      angular.module('ngAnimate', ['ng']).directive('ngAnimateChildren', function() {
        var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
        return function(scope, element, attrs) {
          var val = attrs.ngAnimateChildren;
          if (angular.isString(val) && val.length === 0) {
            element.data(NG_ANIMATE_CHILDREN, true);
          } else {
            scope.$watch(val, function(value) {
              element.data(NG_ANIMATE_CHILDREN, !!value);
            });
          }
        };
      }).factory('$$animateReflow', ['$$rAF', '$document', function($$rAF, $document) {
        var bod = $document[0].body;
        return function(fn) {
          return $$rAF(function() {
            var a = bod.offsetWidth + 1;
            fn();
          });
        };
      }]).config(['$provide', '$animateProvider', function($provide, $animateProvider) {
        var noop = angular.noop;
        var forEach = angular.forEach;
        var selectors = $animateProvider.$$selectors;
        var isArray = angular.isArray;
        var isString = angular.isString;
        var isObject = angular.isObject;
        var ELEMENT_NODE = 1;
        var NG_ANIMATE_STATE = '$$ngAnimateState';
        var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
        var NG_ANIMATE_CLASS_NAME = 'ng-animate';
        var rootAnimateState = {running: true};
        function extractElementNode(element) {
          for (var i = 0; i < element.length; i++) {
            var elm = element[i];
            if (elm.nodeType == ELEMENT_NODE) {
              return elm;
            }
          }
        }
        function prepareElement(element) {
          return element && angular.element(element);
        }
        function stripCommentsFromElement(element) {
          return angular.element(extractElementNode(element));
        }
        function isMatchingElement(elm1, elm2) {
          return extractElementNode(elm1) == extractElementNode(elm2);
        }
        var $$jqLite;
        $provide.decorator('$animate', ['$delegate', '$$q', '$injector', '$sniffer', '$rootElement', '$$asyncCallback', '$rootScope', '$document', '$templateRequest', '$$jqLite', function($delegate, $$q, $injector, $sniffer, $rootElement, $$asyncCallback, $rootScope, $document, $templateRequest, $$$jqLite) {
          $$jqLite = $$$jqLite;
          $rootElement.data(NG_ANIMATE_STATE, rootAnimateState);
          var deregisterWatch = $rootScope.$watch(function() {
            return $templateRequest.totalPendingRequests;
          }, function(val, oldVal) {
            if (val !== 0)
              return;
            deregisterWatch();
            $rootScope.$$postDigest(function() {
              $rootScope.$$postDigest(function() {
                rootAnimateState.running = false;
              });
            });
          });
          var globalAnimationCounter = 0;
          var classNameFilter = $animateProvider.classNameFilter();
          var isAnimatableClassName = !classNameFilter ? function() {
            return true;
          } : function(className) {
            return classNameFilter.test(className);
          };
          function classBasedAnimationsBlocked(element, setter) {
            var data = element.data(NG_ANIMATE_STATE) || {};
            if (setter) {
              data.running = true;
              data.structural = true;
              element.data(NG_ANIMATE_STATE, data);
            }
            return data.disabled || (data.running && data.structural);
          }
          function runAnimationPostDigest(fn) {
            var cancelFn,
                defer = $$q.defer();
            defer.promise.$$cancelFn = function() {
              cancelFn && cancelFn();
            };
            $rootScope.$$postDigest(function() {
              cancelFn = fn(function() {
                defer.resolve();
              });
            });
            return defer.promise;
          }
          function parseAnimateOptions(options) {
            if (isObject(options)) {
              if (options.tempClasses && isString(options.tempClasses)) {
                options.tempClasses = options.tempClasses.split(/\s+/);
              }
              return options;
            }
          }
          function resolveElementClasses(element, cache, runningAnimations) {
            runningAnimations = runningAnimations || {};
            var lookup = {};
            forEach(runningAnimations, function(data, selector) {
              forEach(selector.split(' '), function(s) {
                lookup[s] = data;
              });
            });
            var hasClasses = Object.create(null);
            forEach((element.attr('class') || '').split(/\s+/), function(className) {
              hasClasses[className] = true;
            });
            var toAdd = [],
                toRemove = [];
            forEach((cache && cache.classes) || [], function(status, className) {
              var hasClass = hasClasses[className];
              var matchingAnimation = lookup[className] || {};
              if (status === false) {
                if (hasClass || matchingAnimation.event == 'addClass') {
                  toRemove.push(className);
                }
              } else if (status === true) {
                if (!hasClass || matchingAnimation.event == 'removeClass') {
                  toAdd.push(className);
                }
              }
            });
            return (toAdd.length + toRemove.length) > 0 && [toAdd.join(' '), toRemove.join(' ')];
          }
          function lookup(name) {
            if (name) {
              var matches = [],
                  flagMap = {},
                  classes = name.substr(1).split('.');
              if ($sniffer.transitions || $sniffer.animations) {
                matches.push($injector.get(selectors['']));
              }
              for (var i = 0; i < classes.length; i++) {
                var klass = classes[i],
                    selectorFactoryName = selectors[klass];
                if (selectorFactoryName && !flagMap[klass]) {
                  matches.push($injector.get(selectorFactoryName));
                  flagMap[klass] = true;
                }
              }
              return matches;
            }
          }
          function animationRunner(element, animationEvent, className, options) {
            var node = element[0];
            if (!node) {
              return;
            }
            if (options) {
              options.to = options.to || {};
              options.from = options.from || {};
            }
            var classNameAdd;
            var classNameRemove;
            if (isArray(className)) {
              classNameAdd = className[0];
              classNameRemove = className[1];
              if (!classNameAdd) {
                className = classNameRemove;
                animationEvent = 'removeClass';
              } else if (!classNameRemove) {
                className = classNameAdd;
                animationEvent = 'addClass';
              } else {
                className = classNameAdd + ' ' + classNameRemove;
              }
            }
            var isSetClassOperation = animationEvent == 'setClass';
            var isClassBased = isSetClassOperation || animationEvent == 'addClass' || animationEvent == 'removeClass' || animationEvent == 'animate';
            var currentClassName = element.attr('class');
            var classes = currentClassName + ' ' + className;
            if (!isAnimatableClassName(classes)) {
              return;
            }
            var beforeComplete = noop,
                beforeCancel = [],
                before = [],
                afterComplete = noop,
                afterCancel = [],
                after = [];
            var animationLookup = (' ' + classes).replace(/\s+/g, '.');
            forEach(lookup(animationLookup), function(animationFactory) {
              var created = registerAnimation(animationFactory, animationEvent);
              if (!created && isSetClassOperation) {
                registerAnimation(animationFactory, 'addClass');
                registerAnimation(animationFactory, 'removeClass');
              }
            });
            function registerAnimation(animationFactory, event) {
              var afterFn = animationFactory[event];
              var beforeFn = animationFactory['before' + event.charAt(0).toUpperCase() + event.substr(1)];
              if (afterFn || beforeFn) {
                if (event == 'leave') {
                  beforeFn = afterFn;
                  afterFn = null;
                }
                after.push({
                  event: event,
                  fn: afterFn
                });
                before.push({
                  event: event,
                  fn: beforeFn
                });
                return true;
              }
            }
            function run(fns, cancellations, allCompleteFn) {
              var animations = [];
              forEach(fns, function(animation) {
                animation.fn && animations.push(animation);
              });
              var count = 0;
              function afterAnimationComplete(index) {
                if (cancellations) {
                  (cancellations[index] || noop)();
                  if (++count < animations.length)
                    return;
                  cancellations = null;
                }
                allCompleteFn();
              }
              forEach(animations, function(animation, index) {
                var progress = function() {
                  afterAnimationComplete(index);
                };
                switch (animation.event) {
                  case 'setClass':
                    cancellations.push(animation.fn(element, classNameAdd, classNameRemove, progress, options));
                    break;
                  case 'animate':
                    cancellations.push(animation.fn(element, className, options.from, options.to, progress));
                    break;
                  case 'addClass':
                    cancellations.push(animation.fn(element, classNameAdd || className, progress, options));
                    break;
                  case 'removeClass':
                    cancellations.push(animation.fn(element, classNameRemove || className, progress, options));
                    break;
                  default:
                    cancellations.push(animation.fn(element, progress, options));
                    break;
                }
              });
              if (cancellations && cancellations.length === 0) {
                allCompleteFn();
              }
            }
            return {
              node: node,
              event: animationEvent,
              className: className,
              isClassBased: isClassBased,
              isSetClassOperation: isSetClassOperation,
              applyStyles: function() {
                if (options) {
                  element.css(angular.extend(options.from || {}, options.to || {}));
                }
              },
              before: function(allCompleteFn) {
                beforeComplete = allCompleteFn;
                run(before, beforeCancel, function() {
                  beforeComplete = noop;
                  allCompleteFn();
                });
              },
              after: function(allCompleteFn) {
                afterComplete = allCompleteFn;
                run(after, afterCancel, function() {
                  afterComplete = noop;
                  allCompleteFn();
                });
              },
              cancel: function() {
                if (beforeCancel) {
                  forEach(beforeCancel, function(cancelFn) {
                    (cancelFn || noop)(true);
                  });
                  beforeComplete(true);
                }
                if (afterCancel) {
                  forEach(afterCancel, function(cancelFn) {
                    (cancelFn || noop)(true);
                  });
                  afterComplete(true);
                }
              }
            };
          }
          return {
            animate: function(element, from, to, className, options) {
              className = className || 'ng-inline-animate';
              options = parseAnimateOptions(options) || {};
              options.from = to ? from : null;
              options.to = to ? to : from;
              return runAnimationPostDigest(function(done) {
                return performAnimation('animate', className, stripCommentsFromElement(element), null, null, noop, options, done);
              });
            },
            enter: function(element, parentElement, afterElement, options) {
              options = parseAnimateOptions(options);
              element = angular.element(element);
              parentElement = prepareElement(parentElement);
              afterElement = prepareElement(afterElement);
              classBasedAnimationsBlocked(element, true);
              $delegate.enter(element, parentElement, afterElement);
              return runAnimationPostDigest(function(done) {
                return performAnimation('enter', 'ng-enter', stripCommentsFromElement(element), parentElement, afterElement, noop, options, done);
              });
            },
            leave: function(element, options) {
              options = parseAnimateOptions(options);
              element = angular.element(element);
              cancelChildAnimations(element);
              classBasedAnimationsBlocked(element, true);
              return runAnimationPostDigest(function(done) {
                return performAnimation('leave', 'ng-leave', stripCommentsFromElement(element), null, null, function() {
                  $delegate.leave(element);
                }, options, done);
              });
            },
            move: function(element, parentElement, afterElement, options) {
              options = parseAnimateOptions(options);
              element = angular.element(element);
              parentElement = prepareElement(parentElement);
              afterElement = prepareElement(afterElement);
              cancelChildAnimations(element);
              classBasedAnimationsBlocked(element, true);
              $delegate.move(element, parentElement, afterElement);
              return runAnimationPostDigest(function(done) {
                return performAnimation('move', 'ng-move', stripCommentsFromElement(element), parentElement, afterElement, noop, options, done);
              });
            },
            addClass: function(element, className, options) {
              return this.setClass(element, className, [], options);
            },
            removeClass: function(element, className, options) {
              return this.setClass(element, [], className, options);
            },
            setClass: function(element, add, remove, options) {
              options = parseAnimateOptions(options);
              var STORAGE_KEY = '$$animateClasses';
              element = angular.element(element);
              element = stripCommentsFromElement(element);
              if (classBasedAnimationsBlocked(element)) {
                return $delegate.$$setClassImmediately(element, add, remove, options);
              }
              var classes,
                  cache = element.data(STORAGE_KEY);
              var hasCache = !!cache;
              if (!cache) {
                cache = {};
                cache.classes = {};
              }
              classes = cache.classes;
              add = isArray(add) ? add : add.split(' ');
              forEach(add, function(c) {
                if (c && c.length) {
                  classes[c] = true;
                }
              });
              remove = isArray(remove) ? remove : remove.split(' ');
              forEach(remove, function(c) {
                if (c && c.length) {
                  classes[c] = false;
                }
              });
              if (hasCache) {
                if (options && cache.options) {
                  cache.options = angular.extend(cache.options || {}, options);
                }
                return cache.promise;
              } else {
                element.data(STORAGE_KEY, cache = {
                  classes: classes,
                  options: options
                });
              }
              return cache.promise = runAnimationPostDigest(function(done) {
                var parentElement = element.parent();
                var elementNode = extractElementNode(element);
                var parentNode = elementNode.parentNode;
                if (!parentNode || parentNode['$$NG_REMOVED'] || elementNode['$$NG_REMOVED']) {
                  done();
                  return;
                }
                var cache = element.data(STORAGE_KEY);
                element.removeData(STORAGE_KEY);
                var state = element.data(NG_ANIMATE_STATE) || {};
                var classes = resolveElementClasses(element, cache, state.active);
                return !classes ? done() : performAnimation('setClass', classes, element, parentElement, null, function() {
                  if (classes[0])
                    $delegate.$$addClassImmediately(element, classes[0]);
                  if (classes[1])
                    $delegate.$$removeClassImmediately(element, classes[1]);
                }, cache.options, done);
              });
            },
            cancel: function(promise) {
              promise.$$cancelFn();
            },
            enabled: function(value, element) {
              switch (arguments.length) {
                case 2:
                  if (value) {
                    cleanup(element);
                  } else {
                    var data = element.data(NG_ANIMATE_STATE) || {};
                    data.disabled = true;
                    element.data(NG_ANIMATE_STATE, data);
                  }
                  break;
                case 1:
                  rootAnimateState.disabled = !value;
                  break;
                default:
                  value = !rootAnimateState.disabled;
                  break;
              }
              return !!value;
            }
          };
          function performAnimation(animationEvent, className, element, parentElement, afterElement, domOperation, options, doneCallback) {
            var noopCancel = noop;
            var runner = animationRunner(element, animationEvent, className, options);
            if (!runner) {
              fireDOMOperation();
              fireBeforeCallbackAsync();
              fireAfterCallbackAsync();
              closeAnimation();
              return noopCancel;
            }
            animationEvent = runner.event;
            className = runner.className;
            var elementEvents = angular.element._data(runner.node);
            elementEvents = elementEvents && elementEvents.events;
            if (!parentElement) {
              parentElement = afterElement ? afterElement.parent() : element.parent();
            }
            if (animationsDisabled(element, parentElement)) {
              fireDOMOperation();
              fireBeforeCallbackAsync();
              fireAfterCallbackAsync();
              closeAnimation();
              return noopCancel;
            }
            var ngAnimateState = element.data(NG_ANIMATE_STATE) || {};
            var runningAnimations = ngAnimateState.active || {};
            var totalActiveAnimations = ngAnimateState.totalActive || 0;
            var lastAnimation = ngAnimateState.last;
            var skipAnimation = false;
            if (totalActiveAnimations > 0) {
              var animationsToCancel = [];
              if (!runner.isClassBased) {
                if (animationEvent == 'leave' && runningAnimations['ng-leave']) {
                  skipAnimation = true;
                } else {
                  for (var klass in runningAnimations) {
                    animationsToCancel.push(runningAnimations[klass]);
                  }
                  ngAnimateState = {};
                  cleanup(element, true);
                }
              } else if (lastAnimation.event == 'setClass') {
                animationsToCancel.push(lastAnimation);
                cleanup(element, className);
              } else if (runningAnimations[className]) {
                var current = runningAnimations[className];
                if (current.event == animationEvent) {
                  skipAnimation = true;
                } else {
                  animationsToCancel.push(current);
                  cleanup(element, className);
                }
              }
              if (animationsToCancel.length > 0) {
                forEach(animationsToCancel, function(operation) {
                  operation.cancel();
                });
              }
            }
            if (runner.isClassBased && !runner.isSetClassOperation && animationEvent != 'animate' && !skipAnimation) {
              skipAnimation = (animationEvent == 'addClass') == element.hasClass(className);
            }
            if (skipAnimation) {
              fireDOMOperation();
              fireBeforeCallbackAsync();
              fireAfterCallbackAsync();
              fireDoneCallbackAsync();
              return noopCancel;
            }
            runningAnimations = ngAnimateState.active || {};
            totalActiveAnimations = ngAnimateState.totalActive || 0;
            if (animationEvent == 'leave') {
              element.one('$destroy', function(e) {
                var element = angular.element(this);
                var state = element.data(NG_ANIMATE_STATE);
                if (state) {
                  var activeLeaveAnimation = state.active['ng-leave'];
                  if (activeLeaveAnimation) {
                    activeLeaveAnimation.cancel();
                    cleanup(element, 'ng-leave');
                  }
                }
              });
            }
            $$jqLite.addClass(element, NG_ANIMATE_CLASS_NAME);
            if (options && options.tempClasses) {
              forEach(options.tempClasses, function(className) {
                $$jqLite.addClass(element, className);
              });
            }
            var localAnimationCount = globalAnimationCounter++;
            totalActiveAnimations++;
            runningAnimations[className] = runner;
            element.data(NG_ANIMATE_STATE, {
              last: runner,
              active: runningAnimations,
              index: localAnimationCount,
              totalActive: totalActiveAnimations
            });
            fireBeforeCallbackAsync();
            runner.before(function(cancelled) {
              var data = element.data(NG_ANIMATE_STATE);
              cancelled = cancelled || !data || !data.active[className] || (runner.isClassBased && data.active[className].event != animationEvent);
              fireDOMOperation();
              if (cancelled === true) {
                closeAnimation();
              } else {
                fireAfterCallbackAsync();
                runner.after(closeAnimation);
              }
            });
            return runner.cancel;
            function fireDOMCallback(animationPhase) {
              var eventName = '$animate:' + animationPhase;
              if (elementEvents && elementEvents[eventName] && elementEvents[eventName].length > 0) {
                $$asyncCallback(function() {
                  element.triggerHandler(eventName, {
                    event: animationEvent,
                    className: className
                  });
                });
              }
            }
            function fireBeforeCallbackAsync() {
              fireDOMCallback('before');
            }
            function fireAfterCallbackAsync() {
              fireDOMCallback('after');
            }
            function fireDoneCallbackAsync() {
              fireDOMCallback('close');
              doneCallback();
            }
            function fireDOMOperation() {
              if (!fireDOMOperation.hasBeenRun) {
                fireDOMOperation.hasBeenRun = true;
                domOperation();
              }
            }
            function closeAnimation() {
              if (!closeAnimation.hasBeenRun) {
                if (runner) {
                  runner.applyStyles();
                }
                closeAnimation.hasBeenRun = true;
                if (options && options.tempClasses) {
                  forEach(options.tempClasses, function(className) {
                    $$jqLite.removeClass(element, className);
                  });
                }
                var data = element.data(NG_ANIMATE_STATE);
                if (data) {
                  if (runner && runner.isClassBased) {
                    cleanup(element, className);
                  } else {
                    $$asyncCallback(function() {
                      var data = element.data(NG_ANIMATE_STATE) || {};
                      if (localAnimationCount == data.index) {
                        cleanup(element, className, animationEvent);
                      }
                    });
                    element.data(NG_ANIMATE_STATE, data);
                  }
                }
                fireDoneCallbackAsync();
              }
            }
          }
          function cancelChildAnimations(element) {
            var node = extractElementNode(element);
            if (node) {
              var nodes = angular.isFunction(node.getElementsByClassName) ? node.getElementsByClassName(NG_ANIMATE_CLASS_NAME) : node.querySelectorAll('.' + NG_ANIMATE_CLASS_NAME);
              forEach(nodes, function(element) {
                element = angular.element(element);
                var data = element.data(NG_ANIMATE_STATE);
                if (data && data.active) {
                  forEach(data.active, function(runner) {
                    runner.cancel();
                  });
                }
              });
            }
          }
          function cleanup(element, className) {
            if (isMatchingElement(element, $rootElement)) {
              if (!rootAnimateState.disabled) {
                rootAnimateState.running = false;
                rootAnimateState.structural = false;
              }
            } else if (className) {
              var data = element.data(NG_ANIMATE_STATE) || {};
              var removeAnimations = className === true;
              if (!removeAnimations && data.active && data.active[className]) {
                data.totalActive--;
                delete data.active[className];
              }
              if (removeAnimations || !data.totalActive) {
                $$jqLite.removeClass(element, NG_ANIMATE_CLASS_NAME);
                element.removeData(NG_ANIMATE_STATE);
              }
            }
          }
          function animationsDisabled(element, parentElement) {
            if (rootAnimateState.disabled) {
              return true;
            }
            if (isMatchingElement(element, $rootElement)) {
              return rootAnimateState.running;
            }
            var allowChildAnimations,
                parentRunningAnimation,
                hasParent;
            do {
              if (parentElement.length === 0)
                break;
              var isRoot = isMatchingElement(parentElement, $rootElement);
              var state = isRoot ? rootAnimateState : (parentElement.data(NG_ANIMATE_STATE) || {});
              if (state.disabled) {
                return true;
              }
              if (isRoot) {
                hasParent = true;
              }
              if (allowChildAnimations !== false) {
                var animateChildrenFlag = parentElement.data(NG_ANIMATE_CHILDREN);
                if (angular.isDefined(animateChildrenFlag)) {
                  allowChildAnimations = animateChildrenFlag;
                }
              }
              parentRunningAnimation = parentRunningAnimation || state.running || (state.last && !state.last.isClassBased);
            } while (parentElement = parentElement.parent());
            return !hasParent || (!allowChildAnimations && parentRunningAnimation);
          }
        }]);
        $animateProvider.register('', ['$window', '$sniffer', '$timeout', '$$animateReflow', function($window, $sniffer, $timeout, $$animateReflow) {
          var CSS_PREFIX = '',
              TRANSITION_PROP,
              TRANSITIONEND_EVENT,
              ANIMATION_PROP,
              ANIMATIONEND_EVENT;
          if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
            CSS_PREFIX = '-webkit-';
            TRANSITION_PROP = 'WebkitTransition';
            TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
          } else {
            TRANSITION_PROP = 'transition';
            TRANSITIONEND_EVENT = 'transitionend';
          }
          if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
            CSS_PREFIX = '-webkit-';
            ANIMATION_PROP = 'WebkitAnimation';
            ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
          } else {
            ANIMATION_PROP = 'animation';
            ANIMATIONEND_EVENT = 'animationend';
          }
          var DURATION_KEY = 'Duration';
          var PROPERTY_KEY = 'Property';
          var DELAY_KEY = 'Delay';
          var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
          var ANIMATION_PLAYSTATE_KEY = 'PlayState';
          var NG_ANIMATE_PARENT_KEY = '$$ngAnimateKey';
          var NG_ANIMATE_CSS_DATA_KEY = '$$ngAnimateCSS3Data';
          var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
          var CLOSING_TIME_BUFFER = 1.5;
          var ONE_SECOND = 1000;
          var lookupCache = {};
          var parentCounter = 0;
          var animationReflowQueue = [];
          var cancelAnimationReflow;
          function clearCacheAfterReflow() {
            if (!cancelAnimationReflow) {
              cancelAnimationReflow = $$animateReflow(function() {
                animationReflowQueue = [];
                cancelAnimationReflow = null;
                lookupCache = {};
              });
            }
          }
          function afterReflow(element, callback) {
            if (cancelAnimationReflow) {
              cancelAnimationReflow();
            }
            animationReflowQueue.push(callback);
            cancelAnimationReflow = $$animateReflow(function() {
              forEach(animationReflowQueue, function(fn) {
                fn();
              });
              animationReflowQueue = [];
              cancelAnimationReflow = null;
              lookupCache = {};
            });
          }
          var closingTimer = null;
          var closingTimestamp = 0;
          var animationElementQueue = [];
          function animationCloseHandler(element, totalTime) {
            var node = extractElementNode(element);
            element = angular.element(node);
            animationElementQueue.push(element);
            var futureTimestamp = Date.now() + totalTime;
            if (futureTimestamp <= closingTimestamp) {
              return;
            }
            $timeout.cancel(closingTimer);
            closingTimestamp = futureTimestamp;
            closingTimer = $timeout(function() {
              closeAllAnimations(animationElementQueue);
              animationElementQueue = [];
            }, totalTime, false);
          }
          function closeAllAnimations(elements) {
            forEach(elements, function(element) {
              var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
              if (elementData) {
                forEach(elementData.closeAnimationFns, function(fn) {
                  fn();
                });
              }
            });
          }
          function getElementAnimationDetails(element, cacheKey) {
            var data = cacheKey ? lookupCache[cacheKey] : null;
            if (!data) {
              var transitionDuration = 0;
              var transitionDelay = 0;
              var animationDuration = 0;
              var animationDelay = 0;
              forEach(element, function(element) {
                if (element.nodeType == ELEMENT_NODE) {
                  var elementStyles = $window.getComputedStyle(element) || {};
                  var transitionDurationStyle = elementStyles[TRANSITION_PROP + DURATION_KEY];
                  transitionDuration = Math.max(parseMaxTime(transitionDurationStyle), transitionDuration);
                  var transitionDelayStyle = elementStyles[TRANSITION_PROP + DELAY_KEY];
                  transitionDelay = Math.max(parseMaxTime(transitionDelayStyle), transitionDelay);
                  var animationDelayStyle = elementStyles[ANIMATION_PROP + DELAY_KEY];
                  animationDelay = Math.max(parseMaxTime(elementStyles[ANIMATION_PROP + DELAY_KEY]), animationDelay);
                  var aDuration = parseMaxTime(elementStyles[ANIMATION_PROP + DURATION_KEY]);
                  if (aDuration > 0) {
                    aDuration *= parseInt(elementStyles[ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY], 10) || 1;
                  }
                  animationDuration = Math.max(aDuration, animationDuration);
                }
              });
              data = {
                total: 0,
                transitionDelay: transitionDelay,
                transitionDuration: transitionDuration,
                animationDelay: animationDelay,
                animationDuration: animationDuration
              };
              if (cacheKey) {
                lookupCache[cacheKey] = data;
              }
            }
            return data;
          }
          function parseMaxTime(str) {
            var maxValue = 0;
            var values = isString(str) ? str.split(/\s*,\s*/) : [];
            forEach(values, function(value) {
              maxValue = Math.max(parseFloat(value) || 0, maxValue);
            });
            return maxValue;
          }
          function getCacheKey(element) {
            var parentElement = element.parent();
            var parentID = parentElement.data(NG_ANIMATE_PARENT_KEY);
            if (!parentID) {
              parentElement.data(NG_ANIMATE_PARENT_KEY, ++parentCounter);
              parentID = parentCounter;
            }
            return parentID + '-' + extractElementNode(element).getAttribute('class');
          }
          function animateSetup(animationEvent, element, className, styles) {
            var structural = ['ng-enter', 'ng-leave', 'ng-move'].indexOf(className) >= 0;
            var cacheKey = getCacheKey(element);
            var eventCacheKey = cacheKey + ' ' + className;
            var itemIndex = lookupCache[eventCacheKey] ? ++lookupCache[eventCacheKey].total : 0;
            var stagger = {};
            if (itemIndex > 0) {
              var staggerClassName = className + '-stagger';
              var staggerCacheKey = cacheKey + ' ' + staggerClassName;
              var applyClasses = !lookupCache[staggerCacheKey];
              applyClasses && $$jqLite.addClass(element, staggerClassName);
              stagger = getElementAnimationDetails(element, staggerCacheKey);
              applyClasses && $$jqLite.removeClass(element, staggerClassName);
            }
            $$jqLite.addClass(element, className);
            var formerData = element.data(NG_ANIMATE_CSS_DATA_KEY) || {};
            var timings = getElementAnimationDetails(element, eventCacheKey);
            var transitionDuration = timings.transitionDuration;
            var animationDuration = timings.animationDuration;
            if (structural && transitionDuration === 0 && animationDuration === 0) {
              $$jqLite.removeClass(element, className);
              return false;
            }
            var blockTransition = styles || (structural && transitionDuration > 0);
            var blockAnimation = animationDuration > 0 && stagger.animationDelay > 0 && stagger.animationDuration === 0;
            var closeAnimationFns = formerData.closeAnimationFns || [];
            element.data(NG_ANIMATE_CSS_DATA_KEY, {
              stagger: stagger,
              cacheKey: eventCacheKey,
              running: formerData.running || 0,
              itemIndex: itemIndex,
              blockTransition: blockTransition,
              closeAnimationFns: closeAnimationFns
            });
            var node = extractElementNode(element);
            if (blockTransition) {
              blockTransitions(node, true);
              if (styles) {
                element.css(styles);
              }
            }
            if (blockAnimation) {
              blockAnimations(node, true);
            }
            return true;
          }
          function animateRun(animationEvent, element, className, activeAnimationComplete, styles) {
            var node = extractElementNode(element);
            var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
            if (node.getAttribute('class').indexOf(className) == -1 || !elementData) {
              activeAnimationComplete();
              return;
            }
            var activeClassName = '';
            var pendingClassName = '';
            forEach(className.split(' '), function(klass, i) {
              var prefix = (i > 0 ? ' ' : '') + klass;
              activeClassName += prefix + '-active';
              pendingClassName += prefix + '-pending';
            });
            var style = '';
            var appliedStyles = [];
            var itemIndex = elementData.itemIndex;
            var stagger = elementData.stagger;
            var staggerTime = 0;
            if (itemIndex > 0) {
              var transitionStaggerDelay = 0;
              if (stagger.transitionDelay > 0 && stagger.transitionDuration === 0) {
                transitionStaggerDelay = stagger.transitionDelay * itemIndex;
              }
              var animationStaggerDelay = 0;
              if (stagger.animationDelay > 0 && stagger.animationDuration === 0) {
                animationStaggerDelay = stagger.animationDelay * itemIndex;
                appliedStyles.push(CSS_PREFIX + 'animation-play-state');
              }
              staggerTime = Math.round(Math.max(transitionStaggerDelay, animationStaggerDelay) * 100) / 100;
            }
            if (!staggerTime) {
              $$jqLite.addClass(element, activeClassName);
              if (elementData.blockTransition) {
                blockTransitions(node, false);
              }
            }
            var eventCacheKey = elementData.cacheKey + ' ' + activeClassName;
            var timings = getElementAnimationDetails(element, eventCacheKey);
            var maxDuration = Math.max(timings.transitionDuration, timings.animationDuration);
            if (maxDuration === 0) {
              $$jqLite.removeClass(element, activeClassName);
              animateClose(element, className);
              activeAnimationComplete();
              return;
            }
            if (!staggerTime && styles) {
              if (!timings.transitionDuration) {
                element.css('transition', timings.animationDuration + 's linear all');
                appliedStyles.push('transition');
              }
              element.css(styles);
            }
            var maxDelay = Math.max(timings.transitionDelay, timings.animationDelay);
            var maxDelayTime = maxDelay * ONE_SECOND;
            if (appliedStyles.length > 0) {
              var oldStyle = node.getAttribute('style') || '';
              if (oldStyle.charAt(oldStyle.length - 1) !== ';') {
                oldStyle += ';';
              }
              node.setAttribute('style', oldStyle + ' ' + style);
            }
            var startTime = Date.now();
            var css3AnimationEvents = ANIMATIONEND_EVENT + ' ' + TRANSITIONEND_EVENT;
            var animationTime = (maxDelay + maxDuration) * CLOSING_TIME_BUFFER;
            var totalTime = (staggerTime + animationTime) * ONE_SECOND;
            var staggerTimeout;
            if (staggerTime > 0) {
              $$jqLite.addClass(element, pendingClassName);
              staggerTimeout = $timeout(function() {
                staggerTimeout = null;
                if (timings.transitionDuration > 0) {
                  blockTransitions(node, false);
                }
                if (timings.animationDuration > 0) {
                  blockAnimations(node, false);
                }
                $$jqLite.addClass(element, activeClassName);
                $$jqLite.removeClass(element, pendingClassName);
                if (styles) {
                  if (timings.transitionDuration === 0) {
                    element.css('transition', timings.animationDuration + 's linear all');
                  }
                  element.css(styles);
                  appliedStyles.push('transition');
                }
              }, staggerTime * ONE_SECOND, false);
            }
            element.on(css3AnimationEvents, onAnimationProgress);
            elementData.closeAnimationFns.push(function() {
              onEnd();
              activeAnimationComplete();
            });
            elementData.running++;
            animationCloseHandler(element, totalTime);
            return onEnd;
            function onEnd() {
              element.off(css3AnimationEvents, onAnimationProgress);
              $$jqLite.removeClass(element, activeClassName);
              $$jqLite.removeClass(element, pendingClassName);
              if (staggerTimeout) {
                $timeout.cancel(staggerTimeout);
              }
              animateClose(element, className);
              var node = extractElementNode(element);
              for (var i in appliedStyles) {
                node.style.removeProperty(appliedStyles[i]);
              }
            }
            function onAnimationProgress(event) {
              event.stopPropagation();
              var ev = event.originalEvent || event;
              var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();
              var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));
              if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
                activeAnimationComplete();
              }
            }
          }
          function blockTransitions(node, bool) {
            node.style[TRANSITION_PROP + PROPERTY_KEY] = bool ? 'none' : '';
          }
          function blockAnimations(node, bool) {
            node.style[ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY] = bool ? 'paused' : '';
          }
          function animateBefore(animationEvent, element, className, styles) {
            if (animateSetup(animationEvent, element, className, styles)) {
              return function(cancelled) {
                cancelled && animateClose(element, className);
              };
            }
          }
          function animateAfter(animationEvent, element, className, afterAnimationComplete, styles) {
            if (element.data(NG_ANIMATE_CSS_DATA_KEY)) {
              return animateRun(animationEvent, element, className, afterAnimationComplete, styles);
            } else {
              animateClose(element, className);
              afterAnimationComplete();
            }
          }
          function animate(animationEvent, element, className, animationComplete, options) {
            var preReflowCancellation = animateBefore(animationEvent, element, className, options.from);
            if (!preReflowCancellation) {
              clearCacheAfterReflow();
              animationComplete();
              return;
            }
            var cancel = preReflowCancellation;
            afterReflow(element, function() {
              cancel = animateAfter(animationEvent, element, className, animationComplete, options.to);
            });
            return function(cancelled) {
              (cancel || noop)(cancelled);
            };
          }
          function animateClose(element, className) {
            $$jqLite.removeClass(element, className);
            var data = element.data(NG_ANIMATE_CSS_DATA_KEY);
            if (data) {
              if (data.running) {
                data.running--;
              }
              if (!data.running || data.running === 0) {
                element.removeData(NG_ANIMATE_CSS_DATA_KEY);
              }
            }
          }
          return {
            animate: function(element, className, from, to, animationCompleted, options) {
              options = options || {};
              options.from = from;
              options.to = to;
              return animate('animate', element, className, animationCompleted, options);
            },
            enter: function(element, animationCompleted, options) {
              options = options || {};
              return animate('enter', element, 'ng-enter', animationCompleted, options);
            },
            leave: function(element, animationCompleted, options) {
              options = options || {};
              return animate('leave', element, 'ng-leave', animationCompleted, options);
            },
            move: function(element, animationCompleted, options) {
              options = options || {};
              return animate('move', element, 'ng-move', animationCompleted, options);
            },
            beforeSetClass: function(element, add, remove, animationCompleted, options) {
              options = options || {};
              var className = suffixClasses(remove, '-remove') + ' ' + suffixClasses(add, '-add');
              var cancellationMethod = animateBefore('setClass', element, className, options.from);
              if (cancellationMethod) {
                afterReflow(element, animationCompleted);
                return cancellationMethod;
              }
              clearCacheAfterReflow();
              animationCompleted();
            },
            beforeAddClass: function(element, className, animationCompleted, options) {
              options = options || {};
              var cancellationMethod = animateBefore('addClass', element, suffixClasses(className, '-add'), options.from);
              if (cancellationMethod) {
                afterReflow(element, animationCompleted);
                return cancellationMethod;
              }
              clearCacheAfterReflow();
              animationCompleted();
            },
            beforeRemoveClass: function(element, className, animationCompleted, options) {
              options = options || {};
              var cancellationMethod = animateBefore('removeClass', element, suffixClasses(className, '-remove'), options.from);
              if (cancellationMethod) {
                afterReflow(element, animationCompleted);
                return cancellationMethod;
              }
              clearCacheAfterReflow();
              animationCompleted();
            },
            setClass: function(element, add, remove, animationCompleted, options) {
              options = options || {};
              remove = suffixClasses(remove, '-remove');
              add = suffixClasses(add, '-add');
              var className = remove + ' ' + add;
              return animateAfter('setClass', element, className, animationCompleted, options.to);
            },
            addClass: function(element, className, animationCompleted, options) {
              options = options || {};
              return animateAfter('addClass', element, suffixClasses(className, '-add'), animationCompleted, options.to);
            },
            removeClass: function(element, className, animationCompleted, options) {
              options = options || {};
              return animateAfter('removeClass', element, suffixClasses(className, '-remove'), animationCompleted, options.to);
            }
          };
          function suffixClasses(classes, suffix) {
            var className = '';
            classes = isArray(classes) ? classes : classes.split(/\s+/);
            forEach(classes, function(klass, i) {
              if (klass && klass.length > 0) {
                className += (i > 0 ? ' ' : '') + klass + suffix;
              }
            });
            return className;
          }
        }]);
      }]);
    })(window, window.angular);
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



System.register("github:angular-ui/ui-router@0.2.11/release/angular-ui-router", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports) {
    module.exports = 'ui.router';
  }
  (function(window, angular, undefined) {
    'use strict';
    var isDefined = angular.isDefined,
        isFunction = angular.isFunction,
        isString = angular.isString,
        isObject = angular.isObject,
        isArray = angular.isArray,
        forEach = angular.forEach,
        extend = angular.extend,
        copy = angular.copy;
    function inherit(parent, extra) {
      return extend(new (extend(function() {}, {prototype: parent}))(), extra);
    }
    function merge(dst) {
      forEach(arguments, function(obj) {
        if (obj !== dst) {
          forEach(obj, function(value, key) {
            if (!dst.hasOwnProperty(key))
              dst[key] = value;
          });
        }
      });
      return dst;
    }
    function ancestors(first, second) {
      var path = [];
      for (var n in first.path) {
        if (first.path[n] !== second.path[n])
          break;
        path.push(first.path[n]);
      }
      return path;
    }
    function objectKeys(object) {
      if (Object.keys) {
        return Object.keys(object);
      }
      var result = [];
      angular.forEach(object, function(val, key) {
        result.push(key);
      });
      return result;
    }
    function arraySearch(array, value) {
      if (Array.prototype.indexOf) {
        return array.indexOf(value, Number(arguments[2]) || 0);
      }
      var len = array.length >>> 0,
          from = Number(arguments[2]) || 0;
      from = (from < 0) ? Math.ceil(from) : Math.floor(from);
      if (from < 0)
        from += len;
      for (; from < len; from++) {
        if (from in array && array[from] === value)
          return from;
      }
      return -1;
    }
    function inheritParams(currentParams, newParams, $current, $to) {
      var parents = ancestors($current, $to),
          parentParams,
          inherited = {},
          inheritList = [];
      for (var i in parents) {
        if (!parents[i].params)
          continue;
        parentParams = objectKeys(parents[i].params);
        if (!parentParams.length)
          continue;
        for (var j in parentParams) {
          if (arraySearch(inheritList, parentParams[j]) >= 0)
            continue;
          inheritList.push(parentParams[j]);
          inherited[parentParams[j]] = currentParams[parentParams[j]];
        }
      }
      return extend({}, inherited, newParams);
    }
    function equalForKeys(a, b, keys) {
      if (!keys) {
        keys = [];
        for (var n in a)
          keys.push(n);
      }
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (a[k] != b[k])
          return false;
      }
      return true;
    }
    function filterByKeys(keys, values) {
      var filtered = {};
      forEach(keys, function(name) {
        filtered[name] = values[name];
      });
      return filtered;
    }
    angular.module('ui.router.util', ['ng']);
    angular.module('ui.router.router', ['ui.router.util']);
    angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);
    angular.module('ui.router', ['ui.router.state']);
    angular.module('ui.router.compat', ['ui.router']);
    $Resolve.$inject = ['$q', '$injector'];
    function $Resolve($q, $injector) {
      var VISIT_IN_PROGRESS = 1,
          VISIT_DONE = 2,
          NOTHING = {},
          NO_DEPENDENCIES = [],
          NO_LOCALS = NOTHING,
          NO_PARENT = extend($q.when(NOTHING), {
            $$promises: NOTHING,
            $$values: NOTHING
          });
      this.study = function(invocables) {
        if (!isObject(invocables))
          throw new Error("'invocables' must be an object");
        var plan = [],
            cycle = [],
            visited = {};
        function visit(value, key) {
          if (visited[key] === VISIT_DONE)
            return;
          cycle.push(key);
          if (visited[key] === VISIT_IN_PROGRESS) {
            cycle.splice(0, cycle.indexOf(key));
            throw new Error("Cyclic dependency: " + cycle.join(" -> "));
          }
          visited[key] = VISIT_IN_PROGRESS;
          if (isString(value)) {
            plan.push(key, [function() {
              return $injector.get(value);
            }], NO_DEPENDENCIES);
          } else {
            var params = $injector.annotate(value);
            forEach(params, function(param) {
              if (param !== key && invocables.hasOwnProperty(param))
                visit(invocables[param], param);
            });
            plan.push(key, value, params);
          }
          cycle.pop();
          visited[key] = VISIT_DONE;
        }
        forEach(invocables, visit);
        invocables = cycle = visited = null;
        function isResolve(value) {
          return isObject(value) && value.then && value.$$promises;
        }
        return function(locals, parent, self) {
          if (isResolve(locals) && self === undefined) {
            self = parent;
            parent = locals;
            locals = null;
          }
          if (!locals)
            locals = NO_LOCALS;
          else if (!isObject(locals)) {
            throw new Error("'locals' must be an object");
          }
          if (!parent)
            parent = NO_PARENT;
          else if (!isResolve(parent)) {
            throw new Error("'parent' must be a promise returned by $resolve.resolve()");
          }
          var resolution = $q.defer(),
              result = resolution.promise,
              promises = result.$$promises = {},
              values = extend({}, locals),
              wait = 1 + plan.length / 3,
              merged = false;
          function done() {
            if (!--wait) {
              if (!merged)
                merge(values, parent.$$values);
              result.$$values = values;
              result.$$promises = true;
              delete result.$$inheritedValues;
              resolution.resolve(values);
            }
          }
          function fail(reason) {
            result.$$failure = reason;
            resolution.reject(reason);
          }
          if (isDefined(parent.$$failure)) {
            fail(parent.$$failure);
            return result;
          }
          if (parent.$$inheritedValues) {
            merge(values, parent.$$inheritedValues);
          }
          if (parent.$$values) {
            merged = merge(values, parent.$$values);
            result.$$inheritedValues = parent.$$values;
            done();
          } else {
            if (parent.$$inheritedValues) {
              result.$$inheritedValues = parent.$$inheritedValues;
            }
            extend(promises, parent.$$promises);
            parent.then(done, fail);
          }
          for (var i = 0,
              ii = plan.length; i < ii; i += 3) {
            if (locals.hasOwnProperty(plan[i]))
              done();
            else
              invoke(plan[i], plan[i + 1], plan[i + 2]);
          }
          function invoke(key, invocable, params) {
            var invocation = $q.defer(),
                waitParams = 0;
            function onfailure(reason) {
              invocation.reject(reason);
              fail(reason);
            }
            forEach(params, function(dep) {
              if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
                waitParams++;
                promises[dep].then(function(result) {
                  values[dep] = result;
                  if (!(--waitParams))
                    proceed();
                }, onfailure);
              }
            });
            if (!waitParams)
              proceed();
            function proceed() {
              if (isDefined(result.$$failure))
                return;
              try {
                invocation.resolve($injector.invoke(invocable, self, values));
                invocation.promise.then(function(result) {
                  values[key] = result;
                  done();
                }, onfailure);
              } catch (e) {
                onfailure(e);
              }
            }
            promises[key] = invocation.promise;
          }
          return result;
        };
      };
      this.resolve = function(invocables, locals, parent, self) {
        return this.study(invocables)(locals, parent, self);
      };
    }
    angular.module('ui.router.util').service('$resolve', $Resolve);
    $TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
    function $TemplateFactory($http, $templateCache, $injector) {
      this.fromConfig = function(config, params, locals) {
        return (isDefined(config.template) ? this.fromString(config.template, params) : isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) : isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) : null);
      };
      this.fromString = function(template, params) {
        return isFunction(template) ? template(params) : template;
      };
      this.fromUrl = function(url, params) {
        if (isFunction(url))
          url = url(params);
        if (url == null)
          return null;
        else
          return $http.get(url, {cache: $templateCache}).then(function(response) {
            return response.data;
          });
      };
      this.fromProvider = function(provider, params, locals) {
        return $injector.invoke(provider, null, locals || {params: params});
      };
    }
    angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);
    function UrlMatcher(pattern, config) {
      config = angular.isObject(config) ? config : {};
      var placeholder = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
          compiled = '^',
          last = 0,
          m,
          segments = this.segments = [],
          params = this.params = {};
      function $value(value) {
        return isDefined(value) ? this.type.decode(value) : $UrlMatcherFactory.$$getDefaultValue(this);
      }
      function addParameter(id, type, config) {
        if (!/^\w+(-+\w+)*$/.test(id))
          throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
        if (params[id])
          throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
        params[id] = extend({
          type: type || new Type(),
          $value: $value
        }, config);
      }
      function quoteRegExp(string, pattern, isOptional) {
        var result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
        if (!pattern)
          return result;
        var flag = isOptional ? '?' : '';
        return result + flag + '(' + pattern + ')' + flag;
      }
      function paramConfig(param) {
        if (!config.params || !config.params[param])
          return {};
        var cfg = config.params[param];
        return isObject(cfg) ? cfg : {value: cfg};
      }
      this.source = pattern;
      var id,
          regexp,
          segment,
          type,
          cfg;
      while ((m = placeholder.exec(pattern))) {
        id = m[2] || m[3];
        regexp = m[4] || (m[1] == '*' ? '.*' : '[^/]*');
        segment = pattern.substring(last, m.index);
        type = this.$types[regexp] || new Type({pattern: new RegExp(regexp)});
        cfg = paramConfig(id);
        if (segment.indexOf('?') >= 0)
          break;
        compiled += quoteRegExp(segment, type.$subPattern(), isDefined(cfg.value));
        addParameter(id, type, cfg);
        segments.push(segment);
        last = placeholder.lastIndex;
      }
      segment = pattern.substring(last);
      var i = segment.indexOf('?');
      if (i >= 0) {
        var search = this.sourceSearch = segment.substring(i);
        segment = segment.substring(0, i);
        this.sourcePath = pattern.substring(0, last + i);
        forEach(search.substring(1).split(/[&?]/), function(key) {
          addParameter(key, null, paramConfig(key));
        });
      } else {
        this.sourcePath = pattern;
        this.sourceSearch = '';
      }
      compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
      segments.push(segment);
      this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
      this.prefix = segments[0];
    }
    UrlMatcher.prototype.concat = function(pattern, config) {
      return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, config);
    };
    UrlMatcher.prototype.toString = function() {
      return this.source;
    };
    UrlMatcher.prototype.exec = function(path, searchParams) {
      var m = this.regexp.exec(path);
      if (!m)
        return null;
      searchParams = searchParams || {};
      var params = this.parameters(),
          nTotal = params.length,
          nPath = this.segments.length - 1,
          values = {},
          i,
          cfg,
          param;
      if (nPath !== m.length - 1)
        throw new Error("Unbalanced capture group in route '" + this.source + "'");
      for (i = 0; i < nPath; i++) {
        param = params[i];
        cfg = this.params[param];
        values[param] = cfg.$value(m[i + 1]);
      }
      for (; i < nTotal; i++) {
        param = params[i];
        cfg = this.params[param];
        values[param] = cfg.$value(searchParams[param]);
      }
      return values;
    };
    UrlMatcher.prototype.parameters = function(param) {
      if (!isDefined(param))
        return objectKeys(this.params);
      return this.params[param] || null;
    };
    UrlMatcher.prototype.validates = function(params) {
      var result = true,
          isOptional,
          cfg,
          self = this;
      forEach(params, function(val, key) {
        if (!self.params[key])
          return;
        cfg = self.params[key];
        isOptional = !val && isDefined(cfg.value);
        result = result && (isOptional || cfg.type.is(val));
      });
      return result;
    };
    UrlMatcher.prototype.format = function(values) {
      var segments = this.segments,
          params = this.parameters();
      if (!values)
        return segments.join('').replace('//', '/');
      var nPath = segments.length - 1,
          nTotal = params.length,
          result = segments[0],
          i,
          search,
          value,
          param,
          cfg,
          array;
      if (!this.validates(values))
        return null;
      for (i = 0; i < nPath; i++) {
        param = params[i];
        value = values[param];
        cfg = this.params[param];
        if (!isDefined(value) && (segments[i] === '/' || segments[i + 1] === '/'))
          continue;
        if (value != null)
          result += encodeURIComponent(cfg.type.encode(value));
        result += segments[i + 1];
      }
      for (; i < nTotal; i++) {
        param = params[i];
        value = values[param];
        if (value == null)
          continue;
        array = isArray(value);
        if (array) {
          value = value.map(encodeURIComponent).join('&' + param + '=');
        }
        result += (search ? '&' : '?') + param + '=' + (array ? value : encodeURIComponent(value));
        search = true;
      }
      return result;
    };
    UrlMatcher.prototype.$types = {};
    function Type(config) {
      extend(this, config);
    }
    Type.prototype.is = function(val, key) {
      return true;
    };
    Type.prototype.encode = function(val, key) {
      return val;
    };
    Type.prototype.decode = function(val, key) {
      return val;
    };
    Type.prototype.equals = function(a, b) {
      return a == b;
    };
    Type.prototype.$subPattern = function() {
      var sub = this.pattern.toString();
      return sub.substr(1, sub.length - 2);
    };
    Type.prototype.pattern = /.*/;
    function $UrlMatcherFactory() {
      var isCaseInsensitive = false,
          isStrictMode = true;
      var enqueue = true,
          typeQueue = [],
          injector,
          defaultTypes = {
            int: {
              decode: function(val) {
                return parseInt(val, 10);
              },
              is: function(val) {
                if (!isDefined(val))
                  return false;
                return this.decode(val.toString()) === val;
              },
              pattern: /\d+/
            },
            bool: {
              encode: function(val) {
                return val ? 1 : 0;
              },
              decode: function(val) {
                return parseInt(val, 10) === 0 ? false : true;
              },
              is: function(val) {
                return val === true || val === false;
              },
              pattern: /0|1/
            },
            string: {pattern: /[^\/]*/},
            date: {
              equals: function(a, b) {
                return a.toISOString() === b.toISOString();
              },
              decode: function(val) {
                return new Date(val);
              },
              encode: function(val) {
                return [val.getFullYear(), ('0' + (val.getMonth() + 1)).slice(-2), ('0' + val.getDate()).slice(-2)].join("-");
              },
              pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/
            }
          };
      function getDefaultConfig() {
        return {
          strict: isStrictMode,
          caseInsensitive: isCaseInsensitive
        };
      }
      function isInjectable(value) {
        return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
      }
      $UrlMatcherFactory.$$getDefaultValue = function(config) {
        if (!isInjectable(config.value))
          return config.value;
        if (!injector)
          throw new Error("Injectable functions cannot be called at configuration time");
        return injector.invoke(config.value);
      };
      this.caseInsensitive = function(value) {
        isCaseInsensitive = value;
      };
      this.strictMode = function(value) {
        isStrictMode = value;
      };
      this.compile = function(pattern, config) {
        return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
      };
      this.isMatcher = function(o) {
        if (!isObject(o))
          return false;
        var result = true;
        forEach(UrlMatcher.prototype, function(val, name) {
          if (isFunction(val)) {
            result = result && (isDefined(o[name]) && isFunction(o[name]));
          }
        });
        return result;
      };
      this.type = function(name, def) {
        if (!isDefined(def))
          return UrlMatcher.prototype.$types[name];
        typeQueue.push({
          name: name,
          def: def
        });
        if (!enqueue)
          flushTypeQueue();
        return this;
      };
      this.$get = ['$injector', function($injector) {
        injector = $injector;
        enqueue = false;
        UrlMatcher.prototype.$types = {};
        flushTypeQueue();
        forEach(defaultTypes, function(type, name) {
          if (!UrlMatcher.prototype.$types[name])
            UrlMatcher.prototype.$types[name] = new Type(type);
        });
        return this;
      }];
      function flushTypeQueue() {
        forEach(typeQueue, function(type) {
          if (UrlMatcher.prototype.$types[type.name]) {
            throw new Error("A type named '" + type.name + "' has already been defined.");
          }
          var def = new Type(isInjectable(type.def) ? injector.invoke(type.def) : type.def);
          UrlMatcher.prototype.$types[type.name] = def;
        });
      }
    }
    angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
    $UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
    function $UrlRouterProvider($locationProvider, $urlMatcherFactory) {
      var rules = [],
          otherwise = null,
          interceptDeferred = false,
          listener;
      function regExpPrefix(re) {
        var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
        return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
      }
      function interpolate(pattern, match) {
        return pattern.replace(/\$(\$|\d{1,2})/, function(m, what) {
          return match[what === '$' ? 0 : Number(what)];
        });
      }
      this.rule = function(rule) {
        if (!isFunction(rule))
          throw new Error("'rule' must be a function");
        rules.push(rule);
        return this;
      };
      this.otherwise = function(rule) {
        if (isString(rule)) {
          var redirect = rule;
          rule = function() {
            return redirect;
          };
        } else if (!isFunction(rule))
          throw new Error("'rule' must be a function");
        otherwise = rule;
        return this;
      };
      function handleIfMatch($injector, handler, match) {
        if (!match)
          return false;
        var result = $injector.invoke(handler, handler, {$match: match});
        return isDefined(result) ? result : true;
      }
      this.when = function(what, handler) {
        var redirect,
            handlerIsString = isString(handler);
        if (isString(what))
          what = $urlMatcherFactory.compile(what);
        if (!handlerIsString && !isFunction(handler) && !isArray(handler))
          throw new Error("invalid 'handler' in when()");
        var strategies = {
          matcher: function(what, handler) {
            if (handlerIsString) {
              redirect = $urlMatcherFactory.compile(handler);
              handler = ['$match', function($match) {
                return redirect.format($match);
              }];
            }
            return extend(function($injector, $location) {
              return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
            }, {prefix: isString(what.prefix) ? what.prefix : ''});
          },
          regex: function(what, handler) {
            if (what.global || what.sticky)
              throw new Error("when() RegExp must not be global or sticky");
            if (handlerIsString) {
              redirect = handler;
              handler = ['$match', function($match) {
                return interpolate(redirect, $match);
              }];
            }
            return extend(function($injector, $location) {
              return handleIfMatch($injector, handler, what.exec($location.path()));
            }, {prefix: regExpPrefix(what)});
          }
        };
        var check = {
          matcher: $urlMatcherFactory.isMatcher(what),
          regex: what instanceof RegExp
        };
        for (var n in check) {
          if (check[n])
            return this.rule(strategies[n](what, handler));
        }
        throw new Error("invalid 'what' in when()");
      };
      this.deferIntercept = function(defer) {
        if (defer === undefined)
          defer = true;
        interceptDeferred = defer;
      };
      this.$get = $get;
      $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
      function $get($location, $rootScope, $injector, $browser) {
        var baseHref = $browser.baseHref(),
            location = $location.url();
        function appendBasePath(url, isHtml5, absolute) {
          if (baseHref === '/')
            return url;
          if (isHtml5)
            return baseHref.slice(0, -1) + url;
          if (absolute)
            return baseHref.slice(1) + url;
          return url;
        }
        function update(evt) {
          if (evt && evt.defaultPrevented)
            return;
          function check(rule) {
            var handled = rule($injector, $location);
            if (!handled)
              return false;
            if (isString(handled))
              $location.replace().url(handled);
            return true;
          }
          var n = rules.length,
              i;
          for (i = 0; i < n; i++) {
            if (check(rules[i]))
              return;
          }
          if (otherwise)
            check(otherwise);
        }
        function listen() {
          listener = listener || $rootScope.$on('$locationChangeSuccess', update);
          return listener;
        }
        if (!interceptDeferred)
          listen();
        return {
          sync: function() {
            update();
          },
          listen: function() {
            return listen();
          },
          update: function(read) {
            if (read) {
              location = $location.url();
              return;
            }
            if ($location.url() === location)
              return;
            $location.url(location);
            $location.replace();
          },
          push: function(urlMatcher, params, options) {
            $location.url(urlMatcher.format(params || {}));
            if (options && options.replace)
              $location.replace();
          },
          href: function(urlMatcher, params, options) {
            if (!urlMatcher.validates(params))
              return null;
            var isHtml5 = $locationProvider.html5Mode();
            var url = urlMatcher.format(params);
            options = options || {};
            if (!isHtml5 && url !== null) {
              url = "#" + $locationProvider.hashPrefix() + url;
            }
            url = appendBasePath(url, isHtml5, options.absolute);
            if (!options.absolute || !url) {
              return url;
            }
            var slash = (!isHtml5 && url ? '/' : ''),
                port = $location.port();
            port = (port === 80 || port === 443 ? '' : ':' + port);
            return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
          }
        };
      }
    }
    angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);
    $StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
    function $StateProvider($urlRouterProvider, $urlMatcherFactory) {
      var root,
          states = {},
          $state,
          queue = {},
          abstractKey = 'abstract';
      var stateBuilder = {
        parent: function(state) {
          if (isDefined(state.parent) && state.parent)
            return findState(state.parent);
          var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
          return compositeName ? findState(compositeName[1]) : root;
        },
        data: function(state) {
          if (state.parent && state.parent.data) {
            state.data = state.self.data = extend({}, state.parent.data, state.data);
          }
          return state.data;
        },
        url: function(state) {
          var url = state.url,
              config = {params: state.params || {}};
          if (isString(url)) {
            if (url.charAt(0) == '^')
              return $urlMatcherFactory.compile(url.substring(1), config);
            return (state.parent.navigable || root).url.concat(url, config);
          }
          if (!url || $urlMatcherFactory.isMatcher(url))
            return url;
          throw new Error("Invalid url '" + url + "' in state '" + state + "'");
        },
        navigable: function(state) {
          return state.url ? state : (state.parent ? state.parent.navigable : null);
        },
        params: function(state) {
          if (!state.params) {
            return state.url ? state.url.params : state.parent.params;
          }
          return state.params;
        },
        views: function(state) {
          var views = {};
          forEach(isDefined(state.views) ? state.views : {'': state}, function(view, name) {
            if (name.indexOf('@') < 0)
              name += '@' + state.parent.name;
            views[name] = view;
          });
          return views;
        },
        ownParams: function(state) {
          state.params = state.params || {};
          if (!state.parent) {
            return objectKeys(state.params);
          }
          var paramNames = {};
          forEach(state.params, function(v, k) {
            paramNames[k] = true;
          });
          forEach(state.parent.params, function(v, k) {
            if (!paramNames[k]) {
              throw new Error("Missing required parameter '" + k + "' in state '" + state.name + "'");
            }
            paramNames[k] = false;
          });
          var ownParams = [];
          forEach(paramNames, function(own, p) {
            if (own)
              ownParams.push(p);
          });
          return ownParams;
        },
        path: function(state) {
          return state.parent ? state.parent.path.concat(state) : [];
        },
        includes: function(state) {
          var includes = state.parent ? extend({}, state.parent.includes) : {};
          includes[state.name] = true;
          return includes;
        },
        $delegates: {}
      };
      function isRelative(stateName) {
        return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
      }
      function findState(stateOrName, base) {
        if (!stateOrName)
          return undefined;
        var isStr = isString(stateOrName),
            name = isStr ? stateOrName : stateOrName.name,
            path = isRelative(name);
        if (path) {
          if (!base)
            throw new Error("No reference point given for path '" + name + "'");
          var rel = name.split("."),
              i = 0,
              pathLength = rel.length,
              current = base;
          for (; i < pathLength; i++) {
            if (rel[i] === "" && i === 0) {
              current = base;
              continue;
            }
            if (rel[i] === "^") {
              if (!current.parent)
                throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
              current = current.parent;
              continue;
            }
            break;
          }
          rel = rel.slice(i).join(".");
          name = current.name + (current.name && rel ? "." : "") + rel;
        }
        var state = states[name];
        if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
          return state;
        }
        return undefined;
      }
      function queueState(parentName, state) {
        if (!queue[parentName]) {
          queue[parentName] = [];
        }
        queue[parentName].push(state);
      }
      function registerState(state) {
        state = inherit(state, {
          self: state,
          resolve: state.resolve || {},
          toString: function() {
            return this.name;
          }
        });
        var name = state.name;
        if (!isString(name) || name.indexOf('@') >= 0)
          throw new Error("State must have a valid name");
        if (states.hasOwnProperty(name))
          throw new Error("State '" + name + "'' is already defined");
        var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.')) : (isString(state.parent)) ? state.parent : '';
        if (parentName && !states[parentName]) {
          return queueState(parentName, state.self);
        }
        for (var key in stateBuilder) {
          if (isFunction(stateBuilder[key]))
            state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
        }
        states[name] = state;
        if (!state[abstractKey] && state.url) {
          $urlRouterProvider.when(state.url, ['$match', '$stateParams', function($match, $stateParams) {
            if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
              $state.transitionTo(state, $match, {location: false});
            }
          }]);
        }
        if (queue[name]) {
          for (var i = 0; i < queue[name].length; i++) {
            registerState(queue[name][i]);
          }
        }
        return state;
      }
      function isGlob(text) {
        return text.indexOf('*') > -1;
      }
      function doesStateMatchGlob(glob) {
        var globSegments = glob.split('.'),
            segments = $state.$current.name.split('.');
        if (globSegments[0] === '**') {
          segments = segments.slice(segments.indexOf(globSegments[1]));
          segments.unshift('**');
        }
        if (globSegments[globSegments.length - 1] === '**') {
          segments.splice(segments.indexOf(globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
          segments.push('**');
        }
        if (globSegments.length != segments.length) {
          return false;
        }
        for (var i = 0,
            l = globSegments.length; i < l; i++) {
          if (globSegments[i] === '*') {
            segments[i] = '*';
          }
        }
        return segments.join('') === globSegments.join('');
      }
      root = registerState({
        name: '',
        url: '^',
        views: null,
        'abstract': true
      });
      root.navigable = null;
      this.decorator = decorator;
      function decorator(name, func) {
        if (isString(name) && !isDefined(func)) {
          return stateBuilder[name];
        }
        if (!isFunction(func) || !isString(name)) {
          return this;
        }
        if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
          stateBuilder.$delegates[name] = stateBuilder[name];
        }
        stateBuilder[name] = func;
        return this;
      }
      this.state = state;
      function state(name, definition) {
        if (isObject(name))
          definition = name;
        else
          definition.name = name;
        registerState(definition);
        return this;
      }
      this.$get = $get;
      $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter'];
      function $get($rootScope, $q, $view, $injector, $resolve, $stateParams, $urlRouter) {
        var TransitionSuperseded = $q.reject(new Error('transition superseded'));
        var TransitionPrevented = $q.reject(new Error('transition prevented'));
        var TransitionAborted = $q.reject(new Error('transition aborted'));
        var TransitionFailed = $q.reject(new Error('transition failed'));
        function handleRedirect(redirect, state, params, options) {
          var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);
          if (evt.defaultPrevented) {
            $urlRouter.update();
            return TransitionAborted;
          }
          if (!evt.retry) {
            return null;
          }
          if (options.$retry) {
            $urlRouter.update();
            return TransitionFailed;
          }
          var retryTransition = $state.transition = $q.when(evt.retry);
          retryTransition.then(function() {
            if (retryTransition !== $state.transition)
              return TransitionSuperseded;
            redirect.options.$retry = true;
            return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
          }, function() {
            return TransitionAborted;
          });
          $urlRouter.update();
          return retryTransition;
        }
        root.locals = {
          resolve: null,
          globals: {$stateParams: {}}
        };
        $state = {
          params: {},
          current: root.self,
          $current: root,
          transition: null
        };
        $state.reload = function reload() {
          $state.transitionTo($state.current, $stateParams, {
            reload: true,
            inherit: false,
            notify: false
          });
        };
        $state.go = function go(to, params, options) {
          return $state.transitionTo(to, params, extend({
            inherit: true,
            relative: $state.$current
          }, options));
        };
        $state.transitionTo = function transitionTo(to, toParams, options) {
          toParams = toParams || {};
          options = extend({
            location: true,
            inherit: false,
            relative: null,
            notify: true,
            reload: false,
            $retry: false
          }, options || {});
          var from = $state.$current,
              fromParams = $state.params,
              fromPath = from.path;
          var evt,
              toState = findState(to, options.relative);
          if (!isDefined(toState)) {
            var redirect = {
              to: to,
              toParams: toParams,
              options: options
            };
            var redirectResult = handleRedirect(redirect, from.self, fromParams, options);
            if (redirectResult) {
              return redirectResult;
            }
            to = redirect.to;
            toParams = redirect.toParams;
            options = redirect.options;
            toState = findState(to, options.relative);
            if (!isDefined(toState)) {
              if (!options.relative)
                throw new Error("No such state '" + to + "'");
              throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
            }
          }
          if (toState[abstractKey])
            throw new Error("Cannot transition to abstract state '" + to + "'");
          if (options.inherit)
            toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
          to = toState;
          var toPath = to.path;
          var keep = 0,
              state = toPath[keep],
              locals = root.locals,
              toLocals = [];
          if (!options.reload) {
            while (state && state === fromPath[keep] && equalForKeys(toParams, fromParams, state.ownParams)) {
              locals = toLocals[keep] = state.locals;
              keep++;
              state = toPath[keep];
            }
          }
          if (shouldTriggerReload(to, from, locals, options)) {
            if (to.self.reloadOnSearch !== false)
              $urlRouter.update();
            $state.transition = null;
            return $q.when($state.current);
          }
          toParams = filterByKeys(objectKeys(to.params), toParams || {});
          if (options.notify) {
            if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
              $urlRouter.update();
              return TransitionPrevented;
            }
          }
          var resolved = $q.when(locals);
          for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
            locals = toLocals[l] = inherit(locals);
            resolved = resolveState(state, toParams, state === to, resolved, locals);
          }
          var transition = $state.transition = resolved.then(function() {
            var l,
                entering,
                exiting;
            if ($state.transition !== transition)
              return TransitionSuperseded;
            for (l = fromPath.length - 1; l >= keep; l--) {
              exiting = fromPath[l];
              if (exiting.self.onExit) {
                $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
              }
              exiting.locals = null;
            }
            for (l = keep; l < toPath.length; l++) {
              entering = toPath[l];
              entering.locals = toLocals[l];
              if (entering.self.onEnter) {
                $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
              }
            }
            if ($state.transition !== transition)
              return TransitionSuperseded;
            $state.$current = to;
            $state.current = to.self;
            $state.params = toParams;
            copy($state.params, $stateParams);
            $state.transition = null;
            if (options.location && to.navigable) {
              $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {replace: options.location === 'replace'});
            }
            if (options.notify) {
              $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
            }
            $urlRouter.update(true);
            return $state.current;
          }, function(error) {
            if ($state.transition !== transition)
              return TransitionSuperseded;
            $state.transition = null;
            evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);
            if (!evt.defaultPrevented) {
              $urlRouter.update();
            }
            return $q.reject(error);
          });
          return transition;
        };
        $state.is = function is(stateOrName, params) {
          var state = findState(stateOrName);
          if (!isDefined(state)) {
            return undefined;
          }
          if ($state.$current !== state) {
            return false;
          }
          return isDefined(params) && params !== null ? angular.equals($stateParams, params) : true;
        };
        $state.includes = function includes(stateOrName, params) {
          if (isString(stateOrName) && isGlob(stateOrName)) {
            if (!doesStateMatchGlob(stateOrName)) {
              return false;
            }
            stateOrName = $state.$current.name;
          }
          var state = findState(stateOrName);
          if (!isDefined(state)) {
            return undefined;
          }
          if (!isDefined($state.$current.includes[state.name])) {
            return false;
          }
          return equalForKeys(params, $stateParams);
        };
        $state.href = function href(stateOrName, params, options) {
          options = extend({
            lossy: true,
            inherit: true,
            absolute: false,
            relative: $state.$current
          }, options || {});
          var state = findState(stateOrName, options.relative);
          if (!isDefined(state))
            return null;
          if (options.inherit)
            params = inheritParams($stateParams, params || {}, $state.$current, state);
          var nav = (state && options.lossy) ? state.navigable : state;
          if (!nav || !nav.url) {
            return null;
          }
          return $urlRouter.href(nav.url, filterByKeys(objectKeys(state.params), params || {}), {absolute: options.absolute});
        };
        $state.get = function(stateOrName, context) {
          if (arguments.length === 0)
            return objectKeys(states).map(function(name) {
              return states[name].self;
            });
          var state = findState(stateOrName, context);
          return (state && state.self) ? state.self : null;
        };
        function resolveState(state, params, paramsAreFiltered, inherited, dst) {
          var $stateParams = (paramsAreFiltered) ? params : filterByKeys(objectKeys(state.params), params);
          var locals = {$stateParams: $stateParams};
          dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
          var promises = [dst.resolve.then(function(globals) {
            dst.globals = globals;
          })];
          if (inherited)
            promises.push(inherited);
          forEach(state.views, function(view, name) {
            var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
            injectables.$template = [function() {
              return $view.load(name, {
                view: view,
                locals: locals,
                params: $stateParams
              }) || '';
            }];
            promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function(result) {
              if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
                var injectLocals = angular.extend({}, injectables, locals);
                result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
              } else {
                result.$$controller = view.controller;
              }
              result.$$state = state;
              result.$$controllerAs = view.controllerAs;
              dst[name] = result;
            }));
          });
          return $q.all(promises).then(function(values) {
            return dst;
          });
        }
        return $state;
      }
      function shouldTriggerReload(to, from, locals, options) {
        if (to === from && ((locals === from.locals && !options.reload) || (to.self.reloadOnSearch === false))) {
          return true;
        }
      }
    }
    angular.module('ui.router.state').value('$stateParams', {}).provider('$state', $StateProvider);
    $ViewProvider.$inject = [];
    function $ViewProvider() {
      this.$get = $get;
      $get.$inject = ['$rootScope', '$templateFactory'];
      function $get($rootScope, $templateFactory) {
        return {load: function load(name, options) {
            var result,
                defaults = {
                  template: null,
                  controller: null,
                  view: null,
                  locals: null,
                  notify: true,
                  async: true,
                  params: {}
                };
            options = extend(defaults, options);
            if (options.view) {
              result = $templateFactory.fromConfig(options.view, options.params, options.locals);
            }
            if (result && options.notify) {
              $rootScope.$broadcast('$viewContentLoading', options);
            }
            return result;
          }};
      }
    }
    angular.module('ui.router.state').provider('$view', $ViewProvider);
    function $ViewScrollProvider() {
      var useAnchorScroll = false;
      this.useAnchorScroll = function() {
        useAnchorScroll = true;
      };
      this.$get = ['$anchorScroll', '$timeout', function($anchorScroll, $timeout) {
        if (useAnchorScroll) {
          return $anchorScroll;
        }
        return function($element) {
          $timeout(function() {
            $element[0].scrollIntoView();
          }, 0, false);
        };
      }];
    }
    angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);
    $ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll'];
    function $ViewDirective($state, $injector, $uiViewScroll) {
      function getService() {
        return ($injector.has) ? function(service) {
          return $injector.has(service) ? $injector.get(service) : null;
        } : function(service) {
          try {
            return $injector.get(service);
          } catch (e) {
            return null;
          }
        };
      }
      var service = getService(),
          $animator = service('$animator'),
          $animate = service('$animate');
      function getRenderer(attrs, scope) {
        var statics = function() {
          return {
            enter: function(element, target, cb) {
              target.after(element);
              cb();
            },
            leave: function(element, cb) {
              element.remove();
              cb();
            }
          };
        };
        if ($animate) {
          return {
            enter: function(element, target, cb) {
              $animate.enter(element, null, target, cb);
            },
            leave: function(element, cb) {
              $animate.leave(element, cb);
            }
          };
        }
        if ($animator) {
          var animate = $animator && $animator(scope, attrs);
          return {
            enter: function(element, target, cb) {
              animate.enter(element, null, target);
              cb();
            },
            leave: function(element, cb) {
              animate.leave(element);
              cb();
            }
          };
        }
        return statics();
      }
      var directive = {
        restrict: 'ECA',
        terminal: true,
        priority: 400,
        transclude: 'element',
        compile: function(tElement, tAttrs, $transclude) {
          return function(scope, $element, attrs) {
            var previousEl,
                currentEl,
                currentScope,
                latestLocals,
                onloadExp = attrs.onload || '',
                autoScrollExp = attrs.autoscroll,
                renderer = getRenderer(attrs, scope);
            scope.$on('$stateChangeSuccess', function() {
              updateView(false);
            });
            scope.$on('$viewContentLoading', function() {
              updateView(false);
            });
            updateView(true);
            function cleanupLastView() {
              if (previousEl) {
                previousEl.remove();
                previousEl = null;
              }
              if (currentScope) {
                currentScope.$destroy();
                currentScope = null;
              }
              if (currentEl) {
                renderer.leave(currentEl, function() {
                  previousEl = null;
                });
                previousEl = currentEl;
                currentEl = null;
              }
            }
            function updateView(firstTime) {
              var newScope,
                  name = getUiViewName(attrs, $element.inheritedData('$uiView')),
                  previousLocals = name && $state.$current && $state.$current.locals[name];
              if (!firstTime && previousLocals === latestLocals)
                return;
              newScope = scope.$new();
              latestLocals = $state.$current.locals[name];
              var clone = $transclude(newScope, function(clone) {
                renderer.enter(clone, $element, function onUiViewEnter() {
                  if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
                    $uiViewScroll(clone);
                  }
                });
                cleanupLastView();
              });
              currentEl = clone;
              currentScope = newScope;
              currentScope.$emit('$viewContentLoaded');
              currentScope.$eval(onloadExp);
            }
          };
        }
      };
      return directive;
    }
    $ViewDirectiveFill.$inject = ['$compile', '$controller', '$state'];
    function $ViewDirectiveFill($compile, $controller, $state) {
      return {
        restrict: 'ECA',
        priority: -400,
        compile: function(tElement) {
          var initial = tElement.html();
          return function(scope, $element, attrs) {
            var current = $state.$current,
                name = getUiViewName(attrs, $element.inheritedData('$uiView')),
                locals = current && current.locals[name];
            if (!locals) {
              return;
            }
            $element.data('$uiView', {
              name: name,
              state: locals.$$state
            });
            $element.html(locals.$template ? locals.$template : initial);
            var link = $compile($element.contents());
            if (locals.$$controller) {
              locals.$scope = scope;
              var controller = $controller(locals.$$controller, locals);
              if (locals.$$controllerAs) {
                scope[locals.$$controllerAs] = controller;
              }
              $element.data('$ngControllerController', controller);
              $element.children().data('$ngControllerController', controller);
            }
            link(scope);
          };
        }
      };
    }
    function getUiViewName(attrs, inherited) {
      var name = attrs.uiView || attrs.name || '';
      return name.indexOf('@') >= 0 ? name : (name + '@' + (inherited ? inherited.state.name : ''));
    }
    angular.module('ui.router.state').directive('uiView', $ViewDirective);
    angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);
    function parseStateRef(ref, current) {
      var preparsed = ref.match(/^\s*({[^}]*})\s*$/),
          parsed;
      if (preparsed)
        ref = current + '(' + preparsed[1] + ')';
      parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
      if (!parsed || parsed.length !== 4)
        throw new Error("Invalid state ref '" + ref + "'");
      return {
        state: parsed[1],
        paramExpr: parsed[3] || null
      };
    }
    function stateContext(el) {
      var stateData = el.parent().inheritedData('$uiView');
      if (stateData && stateData.state && stateData.state.name) {
        return stateData.state;
      }
    }
    $StateRefDirective.$inject = ['$state', '$timeout'];
    function $StateRefDirective($state, $timeout) {
      var allowedOptions = ['location', 'inherit', 'reload'];
      return {
        restrict: 'A',
        require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
        link: function(scope, element, attrs, uiSrefActive) {
          var ref = parseStateRef(attrs.uiSref, $state.current.name);
          var params = null,
              url = null,
              base = stateContext(element) || $state.$current;
          var isForm = element[0].nodeName === "FORM";
          var attr = isForm ? "action" : "href",
              nav = true;
          var options = {
            relative: base,
            inherit: true
          };
          var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};
          angular.forEach(allowedOptions, function(option) {
            if (option in optionsOverride) {
              options[option] = optionsOverride[option];
            }
          });
          var update = function(newVal) {
            if (newVal)
              params = newVal;
            if (!nav)
              return;
            var newHref = $state.href(ref.state, params, options);
            var activeDirective = uiSrefActive[1] || uiSrefActive[0];
            if (activeDirective) {
              activeDirective.$$setStateInfo(ref.state, params);
            }
            if (newHref === null) {
              nav = false;
              return false;
            }
            element[0][attr] = newHref;
          };
          if (ref.paramExpr) {
            scope.$watch(ref.paramExpr, function(newVal, oldVal) {
              if (newVal !== params)
                update(newVal);
            }, true);
            params = scope.$eval(ref.paramExpr);
          }
          update();
          if (isForm)
            return;
          element.bind("click", function(e) {
            var button = e.which || e.button;
            if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target'))) {
              var transition = $timeout(function() {
                $state.go(ref.state, params, options);
              });
              e.preventDefault();
              e.preventDefault = function() {
                $timeout.cancel(transition);
              };
            }
          });
        }
      };
    }
    $StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
    function $StateRefActiveDirective($state, $stateParams, $interpolate) {
      return {
        restrict: "A",
        controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
          var state,
              params,
              activeClass;
          activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);
          this.$$setStateInfo = function(newState, newParams) {
            state = $state.get(newState, stateContext($element));
            params = newParams;
            update();
          };
          $scope.$on('$stateChangeSuccess', update);
          function update() {
            if (isMatch()) {
              $element.addClass(activeClass);
            } else {
              $element.removeClass(activeClass);
            }
          }
          function isMatch() {
            if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
              return $state.$current.self === state && matchesParams();
            } else {
              return $state.includes(state.name) && matchesParams();
            }
          }
          function matchesParams() {
            return !params || equalForKeys(params, $stateParams);
          }
        }]
      };
    }
    angular.module('ui.router.state').directive('uiSref', $StateRefDirective).directive('uiSrefActive', $StateRefActiveDirective).directive('uiSrefActiveEq', $StateRefActiveDirective);
    $IsStateFilter.$inject = ['$state'];
    function $IsStateFilter($state) {
      return function(state) {
        return $state.is(state);
      };
    }
    $IncludedByStateFilter.$inject = ['$state'];
    function $IncludedByStateFilter($state) {
      return function(state) {
        return $state.includes(state);
      };
    }
    angular.module('ui.router.state').filter('isState', $IsStateFilter).filter('includedByState', $IncludedByStateFilter);
  })(window, window.angular);
  global.define = __define;
  return module.exports;
});



System.register("github:angular/bower-angular-messages@1.3.8/angular-messages", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    (function(window, angular, undefined) {
      'use strict';
      angular.module('ngMessages', []).directive('ngMessages', ['$compile', '$animate', '$templateRequest', function($compile, $animate, $templateRequest) {
        var ACTIVE_CLASS = 'ng-active';
        var INACTIVE_CLASS = 'ng-inactive';
        return {
          restrict: 'AE',
          controller: function() {
            this.$renderNgMessageClasses = angular.noop;
            var messages = [];
            this.registerMessage = function(index, message) {
              for (var i = 0; i < messages.length; i++) {
                if (messages[i].type == message.type) {
                  if (index != i) {
                    var temp = messages[index];
                    messages[index] = messages[i];
                    if (index < messages.length) {
                      messages[i] = temp;
                    } else {
                      messages.splice(0, i);
                    }
                  }
                  return;
                }
              }
              messages.splice(index, 0, message);
            };
            this.renderMessages = function(values, multiple) {
              values = values || {};
              var found;
              angular.forEach(messages, function(message) {
                if ((!found || multiple) && truthyVal(values[message.type])) {
                  message.attach();
                  found = true;
                } else {
                  message.detach();
                }
              });
              this.renderElementClasses(found);
              function truthyVal(value) {
                return value !== null && value !== false && value;
              }
            };
          },
          require: 'ngMessages',
          link: function($scope, element, $attrs, ctrl) {
            ctrl.renderElementClasses = function(bool) {
              bool ? $animate.setClass(element, ACTIVE_CLASS, INACTIVE_CLASS) : $animate.setClass(element, INACTIVE_CLASS, ACTIVE_CLASS);
            };
            var multiple = angular.isString($attrs.ngMessagesMultiple) || angular.isString($attrs.multiple);
            var cachedValues,
                watchAttr = $attrs.ngMessages || $attrs['for'];
            $scope.$watchCollection(watchAttr, function(values) {
              cachedValues = values;
              ctrl.renderMessages(values, multiple);
            });
            var tpl = $attrs.ngMessagesInclude || $attrs.include;
            if (tpl) {
              $templateRequest(tpl).then(function processTemplate(html) {
                var after,
                    container = angular.element('<div/>').html(html);
                angular.forEach(container.children(), function(elm) {
                  elm = angular.element(elm);
                  after ? after.after(elm) : element.prepend(elm);
                  after = elm;
                  $compile(elm)($scope);
                });
                ctrl.renderMessages(cachedValues, multiple);
              });
            }
          }
        };
      }]).directive('ngMessage', ['$animate', function($animate) {
        var COMMENT_NODE = 8;
        return {
          require: '^ngMessages',
          transclude: 'element',
          terminal: true,
          restrict: 'AE',
          link: function($scope, $element, $attrs, ngMessages, $transclude) {
            var index,
                element;
            var commentNode = $element[0];
            var parentNode = commentNode.parentNode;
            for (var i = 0,
                j = 0; i < parentNode.childNodes.length; i++) {
              var node = parentNode.childNodes[i];
              if (node.nodeType == COMMENT_NODE && node.nodeValue.indexOf('ngMessage') >= 0) {
                if (node === commentNode) {
                  index = j;
                  break;
                }
                j++;
              }
            }
            ngMessages.registerMessage(index, {
              type: $attrs.ngMessage || $attrs.when,
              attach: function() {
                if (!element) {
                  $transclude($scope, function(clone) {
                    $animate.enter(clone, null, $element);
                    element = clone;
                  });
                }
              },
              detach: function(now) {
                if (element) {
                  $animate.leave(element);
                  element = null;
                }
              }
            });
          }
        };
      }]);
    })(window, window.angular);
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



(function() {
function define(){};  define.amd = {};
;
(function() {
  var undefined;
  var arrayPool = [],
      objectPool = [];
  var idCounter = 0;
  var keyPrefix = +new Date + '';
  var largeArraySize = 75;
  var maxPoolSize = 40;
  var whitespace = (' \t\x0B\f\xA0\ufeff' + '\n\r\u2028\u2029' + '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000');
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
  var reFlags = /\w*$/;
  var reFuncName = /^\s*function[ \n\r\t]+\w/;
  var reInterpolate = /<%=([\s\S]+?)%>/g;
  var reLeadingSpacesAndZeros = RegExp('^[' + whitespace + ']*0+(?=.$)');
  var reNoMatch = /($^)/;
  var reThis = /\bthis\b/;
  var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;
  var contextProps = ['Array', 'Boolean', 'Date', 'Function', 'Math', 'Number', 'Object', 'RegExp', 'String', '_', 'attachEvent', 'clearTimeout', 'isFinite', 'isNaN', 'parseInt', 'setTimeout'];
  var templateCounter = 0;
  var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';
  var cloneableClasses = {};
  cloneableClasses[funcClass] = false;
  cloneableClasses[argsClass] = cloneableClasses[arrayClass] = cloneableClasses[boolClass] = cloneableClasses[dateClass] = cloneableClasses[numberClass] = cloneableClasses[objectClass] = cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;
  var debounceOptions = {
    'leading': false,
    'maxWait': 0,
    'trailing': false
  };
  var descriptor = {
    'configurable': false,
    'enumerable': false,
    'value': null,
    'writable': false
  };
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\t': 't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };
  var root = (objectTypes[typeof window] && window) || this;
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
  var freeGlobal = objectTypes[typeof global] && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    root = freeGlobal;
  }
  function baseIndexOf(array, value, fromIndex) {
    var index = (fromIndex || 0) - 1,
        length = array ? array.length : 0;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  function cacheIndexOf(cache, value) {
    var type = typeof value;
    cache = cache.cache;
    if (type == 'boolean' || value == null) {
      return cache[value] ? 0 : -1;
    }
    if (type != 'number' && type != 'string') {
      type = 'object';
    }
    var key = type == 'number' ? value : keyPrefix + value;
    cache = (cache = cache[type]) && cache[key];
    return type == 'object' ? (cache && baseIndexOf(cache, value) > -1 ? 0 : -1) : (cache ? 0 : -1);
  }
  function cachePush(value) {
    var cache = this.cache,
        type = typeof value;
    if (type == 'boolean' || value == null) {
      cache[value] = true;
    } else {
      if (type != 'number' && type != 'string') {
        type = 'object';
      }
      var key = type == 'number' ? value : keyPrefix + value,
          typeCache = cache[type] || (cache[type] = {});
      if (type == 'object') {
        (typeCache[key] || (typeCache[key] = [])).push(value);
      } else {
        typeCache[key] = true;
      }
    }
  }
  function charAtCallback(value) {
    return value.charCodeAt(0);
  }
  function compareAscending(a, b) {
    var ac = a.criteria,
        bc = b.criteria,
        index = -1,
        length = ac.length;
    while (++index < length) {
      var value = ac[index],
          other = bc[index];
      if (value !== other) {
        if (value > other || typeof value == 'undefined') {
          return 1;
        }
        if (value < other || typeof other == 'undefined') {
          return -1;
        }
      }
    }
    return a.index - b.index;
  }
  function createCache(array) {
    var index = -1,
        length = array.length,
        first = array[0],
        mid = array[(length / 2) | 0],
        last = array[length - 1];
    if (first && typeof first == 'object' && mid && typeof mid == 'object' && last && typeof last == 'object') {
      return false;
    }
    var cache = getObject();
    cache['false'] = cache['null'] = cache['true'] = cache['undefined'] = false;
    var result = getObject();
    result.array = array;
    result.cache = cache;
    result.push = cachePush;
    while (++index < length) {
      result.push(array[index]);
    }
    return result;
  }
  function escapeStringChar(match) {
    return '\\' + stringEscapes[match];
  }
  function getArray() {
    return arrayPool.pop() || [];
  }
  function getObject() {
    return objectPool.pop() || {
      'array': null,
      'cache': null,
      'criteria': null,
      'false': false,
      'index': 0,
      'null': false,
      'number': null,
      'object': null,
      'push': null,
      'string': null,
      'true': false,
      'undefined': false,
      'value': null
    };
  }
  function releaseArray(array) {
    array.length = 0;
    if (arrayPool.length < maxPoolSize) {
      arrayPool.push(array);
    }
  }
  function releaseObject(object) {
    var cache = object.cache;
    if (cache) {
      releaseObject(cache);
    }
    object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
    if (objectPool.length < maxPoolSize) {
      objectPool.push(object);
    }
  }
  function slice(array, start, end) {
    start || (start = 0);
    if (typeof end == 'undefined') {
      end = array ? array.length : 0;
    }
    var index = -1,
        length = end - start || 0,
        result = Array(length < 0 ? 0 : length);
    while (++index < length) {
      result[index] = array[start + index];
    }
    return result;
  }
  function runInContext(context) {
    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;
    var Array = context.Array,
        Boolean = context.Boolean,
        Date = context.Date,
        Function = context.Function,
        Math = context.Math,
        Number = context.Number,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;
    var arrayRef = [];
    var objectProto = Object.prototype;
    var oldDash = context._;
    var toString = objectProto.toString;
    var reNative = RegExp('^' + String(toString).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/toString| for [^\]]+/g, '.*?') + '$');
    var ceil = Math.ceil,
        clearTimeout = context.clearTimeout,
        floor = Math.floor,
        fnToString = Function.prototype.toString,
        getPrototypeOf = isNative(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
        hasOwnProperty = objectProto.hasOwnProperty,
        push = arrayRef.push,
        setTimeout = context.setTimeout,
        splice = arrayRef.splice,
        unshift = arrayRef.unshift;
    var defineProperty = (function() {
      try {
        var o = {},
            func = isNative(func = Object.defineProperty) && func,
            result = func(o, o, o) && func;
      } catch (e) {}
      return result;
    }());
    var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
        nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
        nativeIsFinite = context.isFinite,
        nativeIsNaN = context.isNaN,
        nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random;
    var ctorByClass = {};
    ctorByClass[arrayClass] = Array;
    ctorByClass[boolClass] = Boolean;
    ctorByClass[dateClass] = Date;
    ctorByClass[funcClass] = Function;
    ctorByClass[objectClass] = Object;
    ctorByClass[numberClass] = Number;
    ctorByClass[regexpClass] = RegExp;
    ctorByClass[stringClass] = String;
    function lodash(value) {
      return (value && typeof value == 'object' && !isArray(value) && hasOwnProperty.call(value, '__wrapped__')) ? value : new lodashWrapper(value);
    }
    function lodashWrapper(value, chainAll) {
      this.__chain__ = !!chainAll;
      this.__wrapped__ = value;
    }
    lodashWrapper.prototype = lodash.prototype;
    var support = lodash.support = {};
    support.funcDecomp = !isNative(context.WinRTError) && reThis.test(runInContext);
    support.funcNames = typeof Function.name == 'string';
    lodash.templateSettings = {
      'escape': /<%-([\s\S]+?)%>/g,
      'evaluate': /<%([\s\S]+?)%>/g,
      'interpolate': reInterpolate,
      'variable': '',
      'imports': {'_': lodash}
    };
    function baseBind(bindData) {
      var func = bindData[0],
          partialArgs = bindData[2],
          thisArg = bindData[4];
      function bound() {
        if (partialArgs) {
          var args = slice(partialArgs);
          push.apply(args, arguments);
        }
        if (this instanceof bound) {
          var thisBinding = baseCreate(func.prototype),
              result = func.apply(thisBinding, args || arguments);
          return isObject(result) ? result : thisBinding;
        }
        return func.apply(thisArg, args || arguments);
      }
      setBindData(bound, bindData);
      return bound;
    }
    function baseClone(value, isDeep, callback, stackA, stackB) {
      if (callback) {
        var result = callback(value);
        if (typeof result != 'undefined') {
          return result;
        }
      }
      var isObj = isObject(value);
      if (isObj) {
        var className = toString.call(value);
        if (!cloneableClasses[className]) {
          return value;
        }
        var ctor = ctorByClass[className];
        switch (className) {
          case boolClass:
          case dateClass:
            return new ctor(+value);
          case numberClass:
          case stringClass:
            return new ctor(value);
          case regexpClass:
            result = ctor(value.source, reFlags.exec(value));
            result.lastIndex = value.lastIndex;
            return result;
        }
      } else {
        return value;
      }
      var isArr = isArray(value);
      if (isDeep) {
        var initedStack = !stackA;
        stackA || (stackA = getArray());
        stackB || (stackB = getArray());
        var length = stackA.length;
        while (length--) {
          if (stackA[length] == value) {
            return stackB[length];
          }
        }
        result = isArr ? ctor(value.length) : {};
      } else {
        result = isArr ? slice(value) : assign({}, value);
      }
      if (isArr) {
        if (hasOwnProperty.call(value, 'index')) {
          result.index = value.index;
        }
        if (hasOwnProperty.call(value, 'input')) {
          result.input = value.input;
        }
      }
      if (!isDeep) {
        return result;
      }
      stackA.push(value);
      stackB.push(result);
      (isArr ? forEach : forOwn)(value, function(objValue, key) {
        result[key] = baseClone(objValue, isDeep, callback, stackA, stackB);
      });
      if (initedStack) {
        releaseArray(stackA);
        releaseArray(stackB);
      }
      return result;
    }
    function baseCreate(prototype, properties) {
      return isObject(prototype) ? nativeCreate(prototype) : {};
    }
    if (!nativeCreate) {
      baseCreate = (function() {
        function Object() {}
        return function(prototype) {
          if (isObject(prototype)) {
            Object.prototype = prototype;
            var result = new Object;
            Object.prototype = null;
          }
          return result || context.Object();
        };
      }());
    }
    function baseCreateCallback(func, thisArg, argCount) {
      if (typeof func != 'function') {
        return identity;
      }
      if (typeof thisArg == 'undefined' || !('prototype' in func)) {
        return func;
      }
      var bindData = func.__bindData__;
      if (typeof bindData == 'undefined') {
        if (support.funcNames) {
          bindData = !func.name;
        }
        bindData = bindData || !support.funcDecomp;
        if (!bindData) {
          var source = fnToString.call(func);
          if (!support.funcNames) {
            bindData = !reFuncName.test(source);
          }
          if (!bindData) {
            bindData = reThis.test(source);
            setBindData(func, bindData);
          }
        }
      }
      if (bindData === false || (bindData !== true && bindData[1] & 1)) {
        return func;
      }
      switch (argCount) {
        case 1:
          return function(value) {
            return func.call(thisArg, value);
          };
        case 2:
          return function(a, b) {
            return func.call(thisArg, a, b);
          };
        case 3:
          return function(value, index, collection) {
            return func.call(thisArg, value, index, collection);
          };
        case 4:
          return function(accumulator, value, index, collection) {
            return func.call(thisArg, accumulator, value, index, collection);
          };
      }
      return bind(func, thisArg);
    }
    function baseCreateWrapper(bindData) {
      var func = bindData[0],
          bitmask = bindData[1],
          partialArgs = bindData[2],
          partialRightArgs = bindData[3],
          thisArg = bindData[4],
          arity = bindData[5];
      var isBind = bitmask & 1,
          isBindKey = bitmask & 2,
          isCurry = bitmask & 4,
          isCurryBound = bitmask & 8,
          key = func;
      function bound() {
        var thisBinding = isBind ? thisArg : this;
        if (partialArgs) {
          var args = slice(partialArgs);
          push.apply(args, arguments);
        }
        if (partialRightArgs || isCurry) {
          args || (args = slice(arguments));
          if (partialRightArgs) {
            push.apply(args, partialRightArgs);
          }
          if (isCurry && args.length < arity) {
            bitmask |= 16 & ~32;
            return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
          }
        }
        args || (args = arguments);
        if (isBindKey) {
          func = thisBinding[key];
        }
        if (this instanceof bound) {
          thisBinding = baseCreate(func.prototype);
          var result = func.apply(thisBinding, args);
          return isObject(result) ? result : thisBinding;
        }
        return func.apply(thisBinding, args);
      }
      setBindData(bound, bindData);
      return bound;
    }
    function baseDifference(array, values) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array ? array.length : 0,
          isLarge = length >= largeArraySize && indexOf === baseIndexOf,
          result = [];
      if (isLarge) {
        var cache = createCache(values);
        if (cache) {
          indexOf = cacheIndexOf;
          values = cache;
        } else {
          isLarge = false;
        }
      }
      while (++index < length) {
        var value = array[index];
        if (indexOf(values, value) < 0) {
          result.push(value);
        }
      }
      if (isLarge) {
        releaseObject(values);
      }
      return result;
    }
    function baseFlatten(array, isShallow, isStrict, fromIndex) {
      var index = (fromIndex || 0) - 1,
          length = array ? array.length : 0,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (value && typeof value == 'object' && typeof value.length == 'number' && (isArray(value) || isArguments(value))) {
          if (!isShallow) {
            value = baseFlatten(value, isShallow, isStrict);
          }
          var valIndex = -1,
              valLength = value.length,
              resIndex = result.length;
          result.length += valLength;
          while (++valIndex < valLength) {
            result[resIndex++] = value[valIndex];
          }
        } else if (!isStrict) {
          result.push(value);
        }
      }
      return result;
    }
    function baseIsEqual(a, b, callback, isWhere, stackA, stackB) {
      if (callback) {
        var result = callback(a, b);
        if (typeof result != 'undefined') {
          return !!result;
        }
      }
      if (a === b) {
        return a !== 0 || (1 / a == 1 / b);
      }
      var type = typeof a,
          otherType = typeof b;
      if (a === a && !(a && objectTypes[type]) && !(b && objectTypes[otherType])) {
        return false;
      }
      if (a == null || b == null) {
        return a === b;
      }
      var className = toString.call(a),
          otherClass = toString.call(b);
      if (className == argsClass) {
        className = objectClass;
      }
      if (otherClass == argsClass) {
        otherClass = objectClass;
      }
      if (className != otherClass) {
        return false;
      }
      switch (className) {
        case boolClass:
        case dateClass:
          return +a == +b;
        case numberClass:
          return (a != +a) ? b != +b : (a == 0 ? (1 / a == 1 / b) : a == +b);
        case regexpClass:
        case stringClass:
          return a == String(b);
      }
      var isArr = className == arrayClass;
      if (!isArr) {
        var aWrapped = hasOwnProperty.call(a, '__wrapped__'),
            bWrapped = hasOwnProperty.call(b, '__wrapped__');
        if (aWrapped || bWrapped) {
          return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, callback, isWhere, stackA, stackB);
        }
        if (className != objectClass) {
          return false;
        }
        var ctorA = a.constructor,
            ctorB = b.constructor;
        if (ctorA != ctorB && !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) && ('constructor' in a && 'constructor' in b)) {
          return false;
        }
      }
      var initedStack = !stackA;
      stackA || (stackA = getArray());
      stackB || (stackB = getArray());
      var length = stackA.length;
      while (length--) {
        if (stackA[length] == a) {
          return stackB[length] == b;
        }
      }
      var size = 0;
      result = true;
      stackA.push(a);
      stackB.push(b);
      if (isArr) {
        length = a.length;
        size = b.length;
        result = size == length;
        if (result || isWhere) {
          while (size--) {
            var index = length,
                value = b[size];
            if (isWhere) {
              while (index--) {
                if ((result = baseIsEqual(a[index], value, callback, isWhere, stackA, stackB))) {
                  break;
                }
              }
            } else if (!(result = baseIsEqual(a[size], value, callback, isWhere, stackA, stackB))) {
              break;
            }
          }
        }
      } else {
        forIn(b, function(value, key, b) {
          if (hasOwnProperty.call(b, key)) {
            size++;
            return (result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, callback, isWhere, stackA, stackB));
          }
        });
        if (result && !isWhere) {
          forIn(a, function(value, key, a) {
            if (hasOwnProperty.call(a, key)) {
              return (result = --size > -1);
            }
          });
        }
      }
      stackA.pop();
      stackB.pop();
      if (initedStack) {
        releaseArray(stackA);
        releaseArray(stackB);
      }
      return result;
    }
    function baseMerge(object, source, callback, stackA, stackB) {
      (isArray(source) ? forEach : forOwn)(source, function(source, key) {
        var found,
            isArr,
            result = source,
            value = object[key];
        if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
          var stackLength = stackA.length;
          while (stackLength--) {
            if ((found = stackA[stackLength] == source)) {
              value = stackB[stackLength];
              break;
            }
          }
          if (!found) {
            var isShallow;
            if (callback) {
              result = callback(value, source);
              if ((isShallow = typeof result != 'undefined')) {
                value = result;
              }
            }
            if (!isShallow) {
              value = isArr ? (isArray(value) ? value : []) : (isPlainObject(value) ? value : {});
            }
            stackA.push(source);
            stackB.push(value);
            if (!isShallow) {
              baseMerge(value, source, callback, stackA, stackB);
            }
          }
        } else {
          if (callback) {
            result = callback(value, source);
            if (typeof result == 'undefined') {
              result = source;
            }
          }
          if (typeof result != 'undefined') {
            value = result;
          }
        }
        object[key] = value;
      });
    }
    function baseRandom(min, max) {
      return min + floor(nativeRandom() * (max - min + 1));
    }
    function baseUniq(array, isSorted, callback) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array ? array.length : 0,
          result = [];
      var isLarge = !isSorted && length >= largeArraySize && indexOf === baseIndexOf,
          seen = (callback || isLarge) ? getArray() : result;
      if (isLarge) {
        var cache = createCache(seen);
        indexOf = cacheIndexOf;
        seen = cache;
      }
      while (++index < length) {
        var value = array[index],
            computed = callback ? callback(value, index, array) : value;
        if (isSorted ? !index || seen[seen.length - 1] !== computed : indexOf(seen, computed) < 0) {
          if (callback || isLarge) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      if (isLarge) {
        releaseArray(seen.array);
        releaseObject(seen);
      } else if (callback) {
        releaseArray(seen);
      }
      return result;
    }
    function createAggregator(setter) {
      return function(collection, callback, thisArg) {
        var result = {};
        callback = lodash.createCallback(callback, thisArg, 3);
        var index = -1,
            length = collection ? collection.length : 0;
        if (typeof length == 'number') {
          while (++index < length) {
            var value = collection[index];
            setter(result, value, callback(value, index, collection), collection);
          }
        } else {
          forOwn(collection, function(value, key, collection) {
            setter(result, value, callback(value, key, collection), collection);
          });
        }
        return result;
      };
    }
    function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
      var isBind = bitmask & 1,
          isBindKey = bitmask & 2,
          isCurry = bitmask & 4,
          isCurryBound = bitmask & 8,
          isPartial = bitmask & 16,
          isPartialRight = bitmask & 32;
      if (!isBindKey && !isFunction(func)) {
        throw new TypeError;
      }
      if (isPartial && !partialArgs.length) {
        bitmask &= ~16;
        isPartial = partialArgs = false;
      }
      if (isPartialRight && !partialRightArgs.length) {
        bitmask &= ~32;
        isPartialRight = partialRightArgs = false;
      }
      var bindData = func && func.__bindData__;
      if (bindData && bindData !== true) {
        bindData = slice(bindData);
        if (bindData[2]) {
          bindData[2] = slice(bindData[2]);
        }
        if (bindData[3]) {
          bindData[3] = slice(bindData[3]);
        }
        if (isBind && !(bindData[1] & 1)) {
          bindData[4] = thisArg;
        }
        if (!isBind && bindData[1] & 1) {
          bitmask |= 8;
        }
        if (isCurry && !(bindData[1] & 4)) {
          bindData[5] = arity;
        }
        if (isPartial) {
          push.apply(bindData[2] || (bindData[2] = []), partialArgs);
        }
        if (isPartialRight) {
          unshift.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
        }
        bindData[1] |= bitmask;
        return createWrapper.apply(null, bindData);
      }
      var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
      return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
    }
    function escapeHtmlChar(match) {
      return htmlEscapes[match];
    }
    function getIndexOf() {
      var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
      return result;
    }
    function isNative(value) {
      return typeof value == 'function' && reNative.test(value);
    }
    var setBindData = !defineProperty ? noop : function(func, value) {
      descriptor.value = value;
      defineProperty(func, '__bindData__', descriptor);
    };
    function shimIsPlainObject(value) {
      var ctor,
          result;
      if (!(value && toString.call(value) == objectClass) || (ctor = value.constructor, isFunction(ctor) && !(ctor instanceof ctor))) {
        return false;
      }
      forIn(value, function(value, key) {
        result = key;
      });
      return typeof result == 'undefined' || hasOwnProperty.call(value, result);
    }
    function unescapeHtmlChar(match) {
      return htmlUnescapes[match];
    }
    function isArguments(value) {
      return value && typeof value == 'object' && typeof value.length == 'number' && toString.call(value) == argsClass || false;
    }
    var isArray = nativeIsArray || function(value) {
      return value && typeof value == 'object' && typeof value.length == 'number' && toString.call(value) == arrayClass || false;
    };
    var shimKeys = function(object) {
      var index,
          iterable = object,
          result = [];
      if (!iterable)
        return result;
      if (!(objectTypes[typeof object]))
        return result;
      for (index in iterable) {
        if (hasOwnProperty.call(iterable, index)) {
          result.push(index);
        }
      }
      return result;
    };
    var keys = !nativeKeys ? shimKeys : function(object) {
      if (!isObject(object)) {
        return [];
      }
      return nativeKeys(object);
    };
    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };
    var htmlUnescapes = invert(htmlEscapes);
    var reEscapedHtml = RegExp('(' + keys(htmlUnescapes).join('|') + ')', 'g'),
        reUnescapedHtml = RegExp('[' + keys(htmlEscapes).join('') + ']', 'g');
    var assign = function(object, source, guard) {
      var index,
          iterable = object,
          result = iterable;
      if (!iterable)
        return result;
      var args = arguments,
          argsIndex = 0,
          argsLength = typeof guard == 'number' ? 2 : args.length;
      if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {
        var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);
      } else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {
        callback = args[--argsLength];
      }
      while (++argsIndex < argsLength) {
        iterable = args[argsIndex];
        if (iterable && objectTypes[typeof iterable]) {
          var ownIndex = -1,
              ownProps = objectTypes[typeof iterable] && keys(iterable),
              length = ownProps ? ownProps.length : 0;
          while (++ownIndex < length) {
            index = ownProps[ownIndex];
            result[index] = callback ? callback(result[index], iterable[index]) : iterable[index];
          }
        }
      }
      return result;
    };
    function clone(value, isDeep, callback, thisArg) {
      if (typeof isDeep != 'boolean' && isDeep != null) {
        thisArg = callback;
        callback = isDeep;
        isDeep = false;
      }
      return baseClone(value, isDeep, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
    }
    function cloneDeep(value, callback, thisArg) {
      return baseClone(value, true, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
    }
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties ? assign(result, properties) : result;
    }
    var defaults = function(object, source, guard) {
      var index,
          iterable = object,
          result = iterable;
      if (!iterable)
        return result;
      var args = arguments,
          argsIndex = 0,
          argsLength = typeof guard == 'number' ? 2 : args.length;
      while (++argsIndex < argsLength) {
        iterable = args[argsIndex];
        if (iterable && objectTypes[typeof iterable]) {
          var ownIndex = -1,
              ownProps = objectTypes[typeof iterable] && keys(iterable),
              length = ownProps ? ownProps.length : 0;
          while (++ownIndex < length) {
            index = ownProps[ownIndex];
            if (typeof result[index] == 'undefined')
              result[index] = iterable[index];
          }
        }
      }
      return result;
    };
    function findKey(object, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forOwn(object, function(value, key, object) {
        if (callback(value, key, object)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function findLastKey(object, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forOwnRight(object, function(value, key, object) {
        if (callback(value, key, object)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    var forIn = function(collection, callback, thisArg) {
      var index,
          iterable = collection,
          result = iterable;
      if (!iterable)
        return result;
      if (!objectTypes[typeof iterable])
        return result;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      for (index in iterable) {
        if (callback(iterable[index], index, collection) === false)
          return result;
      }
      return result;
    };
    function forInRight(object, callback, thisArg) {
      var pairs = [];
      forIn(object, function(value, key) {
        pairs.push(key, value);
      });
      var length = pairs.length;
      callback = baseCreateCallback(callback, thisArg, 3);
      while (length--) {
        if (callback(pairs[length--], pairs[length], object) === false) {
          break;
        }
      }
      return object;
    }
    var forOwn = function(collection, callback, thisArg) {
      var index,
          iterable = collection,
          result = iterable;
      if (!iterable)
        return result;
      if (!objectTypes[typeof iterable])
        return result;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      var ownIndex = -1,
          ownProps = objectTypes[typeof iterable] && keys(iterable),
          length = ownProps ? ownProps.length : 0;
      while (++ownIndex < length) {
        index = ownProps[ownIndex];
        if (callback(iterable[index], index, collection) === false)
          return result;
      }
      return result;
    };
    function forOwnRight(object, callback, thisArg) {
      var props = keys(object),
          length = props.length;
      callback = baseCreateCallback(callback, thisArg, 3);
      while (length--) {
        var key = props[length];
        if (callback(object[key], key, object) === false) {
          break;
        }
      }
      return object;
    }
    function functions(object) {
      var result = [];
      forIn(object, function(value, key) {
        if (isFunction(value)) {
          result.push(key);
        }
      });
      return result.sort();
    }
    function has(object, key) {
      return object ? hasOwnProperty.call(object, key) : false;
    }
    function invert(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = {};
      while (++index < length) {
        var key = props[index];
        result[object[key]] = key;
      }
      return result;
    }
    function isBoolean(value) {
      return value === true || value === false || value && typeof value == 'object' && toString.call(value) == boolClass || false;
    }
    function isDate(value) {
      return value && typeof value == 'object' && toString.call(value) == dateClass || false;
    }
    function isElement(value) {
      return value && value.nodeType === 1 || false;
    }
    function isEmpty(value) {
      var result = true;
      if (!value) {
        return result;
      }
      var className = toString.call(value),
          length = value.length;
      if ((className == arrayClass || className == stringClass || className == argsClass) || (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
        return !length;
      }
      forOwn(value, function() {
        return (result = false);
      });
      return result;
    }
    function isEqual(a, b, callback, thisArg) {
      return baseIsEqual(a, b, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 2));
    }
    function isFinite(value) {
      return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
    }
    function isFunction(value) {
      return typeof value == 'function';
    }
    function isObject(value) {
      return !!(value && objectTypes[typeof value]);
    }
    function isNaN(value) {
      return isNumber(value) && value != +value;
    }
    function isNull(value) {
      return value === null;
    }
    function isNumber(value) {
      return typeof value == 'number' || value && typeof value == 'object' && toString.call(value) == numberClass || false;
    }
    var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
      if (!(value && toString.call(value) == objectClass)) {
        return false;
      }
      var valueOf = value.valueOf,
          objProto = isNative(valueOf) && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);
      return objProto ? (value == objProto || getPrototypeOf(value) == objProto) : shimIsPlainObject(value);
    };
    function isRegExp(value) {
      return value && typeof value == 'object' && toString.call(value) == regexpClass || false;
    }
    function isString(value) {
      return typeof value == 'string' || value && typeof value == 'object' && toString.call(value) == stringClass || false;
    }
    function isUndefined(value) {
      return typeof value == 'undefined';
    }
    function mapValues(object, callback, thisArg) {
      var result = {};
      callback = lodash.createCallback(callback, thisArg, 3);
      forOwn(object, function(value, key, object) {
        result[key] = callback(value, key, object);
      });
      return result;
    }
    function merge(object) {
      var args = arguments,
          length = 2;
      if (!isObject(object)) {
        return object;
      }
      if (typeof args[2] != 'number') {
        length = args.length;
      }
      if (length > 3 && typeof args[length - 2] == 'function') {
        var callback = baseCreateCallback(args[--length - 1], args[length--], 2);
      } else if (length > 2 && typeof args[length - 1] == 'function') {
        callback = args[--length];
      }
      var sources = slice(arguments, 1, length),
          index = -1,
          stackA = getArray(),
          stackB = getArray();
      while (++index < length) {
        baseMerge(object, sources[index], callback, stackA, stackB);
      }
      releaseArray(stackA);
      releaseArray(stackB);
      return object;
    }
    function omit(object, callback, thisArg) {
      var result = {};
      if (typeof callback != 'function') {
        var props = [];
        forIn(object, function(value, key) {
          props.push(key);
        });
        props = baseDifference(props, baseFlatten(arguments, true, false, 1));
        var index = -1,
            length = props.length;
        while (++index < length) {
          var key = props[index];
          result[key] = object[key];
        }
      } else {
        callback = lodash.createCallback(callback, thisArg, 3);
        forIn(object, function(value, key, object) {
          if (!callback(value, key, object)) {
            result[key] = value;
          }
        });
      }
      return result;
    }
    function pairs(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);
      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }
    function pick(object, callback, thisArg) {
      var result = {};
      if (typeof callback != 'function') {
        var index = -1,
            props = baseFlatten(arguments, true, false, 1),
            length = isObject(object) ? props.length : 0;
        while (++index < length) {
          var key = props[index];
          if (key in object) {
            result[key] = object[key];
          }
        }
      } else {
        callback = lodash.createCallback(callback, thisArg, 3);
        forIn(object, function(value, key, object) {
          if (callback(value, key, object)) {
            result[key] = value;
          }
        });
      }
      return result;
    }
    function transform(object, callback, accumulator, thisArg) {
      var isArr = isArray(object);
      if (accumulator == null) {
        if (isArr) {
          accumulator = [];
        } else {
          var ctor = object && object.constructor,
              proto = ctor && ctor.prototype;
          accumulator = baseCreate(proto);
        }
      }
      if (callback) {
        callback = lodash.createCallback(callback, thisArg, 4);
        (isArr ? forEach : forOwn)(object, function(value, index, object) {
          return callback(accumulator, value, index, object);
        });
      }
      return accumulator;
    }
    function values(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);
      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }
    function at(collection) {
      var args = arguments,
          index = -1,
          props = baseFlatten(args, true, false, 1),
          length = (args[2] && args[2][args[1]] === collection) ? 1 : props.length,
          result = Array(length);
      while (++index < length) {
        result[index] = collection[props[index]];
      }
      return result;
    }
    function contains(collection, target, fromIndex) {
      var index = -1,
          indexOf = getIndexOf(),
          length = collection ? collection.length : 0,
          result = false;
      fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
      if (isArray(collection)) {
        result = indexOf(collection, target, fromIndex) > -1;
      } else if (typeof length == 'number') {
        result = (isString(collection) ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) > -1;
      } else {
        forOwn(collection, function(value) {
          if (++index >= fromIndex) {
            return !(result = value === target);
          }
        });
      }
      return result;
    }
    var countBy = createAggregator(function(result, value, key) {
      (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
    });
    function every(collection, callback, thisArg) {
      var result = true;
      callback = lodash.createCallback(callback, thisArg, 3);
      var index = -1,
          length = collection ? collection.length : 0;
      if (typeof length == 'number') {
        while (++index < length) {
          if (!(result = !!callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          return (result = !!callback(value, index, collection));
        });
      }
      return result;
    }
    function filter(collection, callback, thisArg) {
      var result = [];
      callback = lodash.createCallback(callback, thisArg, 3);
      var index = -1,
          length = collection ? collection.length : 0;
      if (typeof length == 'number') {
        while (++index < length) {
          var value = collection[index];
          if (callback(value, index, collection)) {
            result.push(value);
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          if (callback(value, index, collection)) {
            result.push(value);
          }
        });
      }
      return result;
    }
    function find(collection, callback, thisArg) {
      callback = lodash.createCallback(callback, thisArg, 3);
      var index = -1,
          length = collection ? collection.length : 0;
      if (typeof length == 'number') {
        while (++index < length) {
          var value = collection[index];
          if (callback(value, index, collection)) {
            return value;
          }
        }
      } else {
        var result;
        forOwn(collection, function(value, index, collection) {
          if (callback(value, index, collection)) {
            result = value;
            return false;
          }
        });
        return result;
      }
    }
    function findLast(collection, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forEachRight(collection, function(value, index, collection) {
        if (callback(value, index, collection)) {
          result = value;
          return false;
        }
      });
      return result;
    }
    function forEach(collection, callback, thisArg) {
      var index = -1,
          length = collection ? collection.length : 0;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        while (++index < length) {
          if (callback(collection[index], index, collection) === false) {
            break;
          }
        }
      } else {
        forOwn(collection, callback);
      }
      return collection;
    }
    function forEachRight(collection, callback, thisArg) {
      var length = collection ? collection.length : 0;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        while (length--) {
          if (callback(collection[length], length, collection) === false) {
            break;
          }
        }
      } else {
        var props = keys(collection);
        length = props.length;
        forOwn(collection, function(value, key, collection) {
          key = props ? props[--length] : --length;
          return callback(collection[key], key, collection);
        });
      }
      return collection;
    }
    var groupBy = createAggregator(function(result, value, key) {
      (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
    });
    var indexBy = createAggregator(function(result, value, key) {
      result[key] = value;
    });
    function invoke(collection, methodName) {
      var args = slice(arguments, 2),
          index = -1,
          isFunc = typeof methodName == 'function',
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);
      forEach(collection, function(value) {
        result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
      });
      return result;
    }
    function map(collection, callback, thisArg) {
      var index = -1,
          length = collection ? collection.length : 0;
      callback = lodash.createCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        var result = Array(length);
        while (++index < length) {
          result[index] = callback(collection[index], index, collection);
        }
      } else {
        result = [];
        forOwn(collection, function(value, key, collection) {
          result[++index] = callback(value, key, collection);
        });
      }
      return result;
    }
    function max(collection, callback, thisArg) {
      var computed = -Infinity,
          result = computed;
      if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
        callback = null;
      }
      if (callback == null && isArray(collection)) {
        var index = -1,
            length = collection.length;
        while (++index < length) {
          var value = collection[index];
          if (value > result) {
            result = value;
          }
        }
      } else {
        callback = (callback == null && isString(collection)) ? charAtCallback : lodash.createCallback(callback, thisArg, 3);
        forEach(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current > computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }
    function min(collection, callback, thisArg) {
      var computed = Infinity,
          result = computed;
      if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
        callback = null;
      }
      if (callback == null && isArray(collection)) {
        var index = -1,
            length = collection.length;
        while (++index < length) {
          var value = collection[index];
          if (value < result) {
            result = value;
          }
        }
      } else {
        callback = (callback == null && isString(collection)) ? charAtCallback : lodash.createCallback(callback, thisArg, 3);
        forEach(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current < computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }
    var pluck = map;
    function reduce(collection, callback, accumulator, thisArg) {
      if (!collection)
        return accumulator;
      var noaccum = arguments.length < 3;
      callback = lodash.createCallback(callback, thisArg, 4);
      var index = -1,
          length = collection.length;
      if (typeof length == 'number') {
        if (noaccum) {
          accumulator = collection[++index];
        }
        while (++index < length) {
          accumulator = callback(accumulator, collection[index], index, collection);
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection);
        });
      }
      return accumulator;
    }
    function reduceRight(collection, callback, accumulator, thisArg) {
      var noaccum = arguments.length < 3;
      callback = lodash.createCallback(callback, thisArg, 4);
      forEachRight(collection, function(value, index, collection) {
        accumulator = noaccum ? (noaccum = false, value) : callback(accumulator, value, index, collection);
      });
      return accumulator;
    }
    function reject(collection, callback, thisArg) {
      callback = lodash.createCallback(callback, thisArg, 3);
      return filter(collection, function(value, index, collection) {
        return !callback(value, index, collection);
      });
    }
    function sample(collection, n, guard) {
      if (collection && typeof collection.length != 'number') {
        collection = values(collection);
      }
      if (n == null || guard) {
        return collection ? collection[baseRandom(0, collection.length - 1)] : undefined;
      }
      var result = shuffle(collection);
      result.length = nativeMin(nativeMax(0, n), result.length);
      return result;
    }
    function shuffle(collection) {
      var index = -1,
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);
      forEach(collection, function(value) {
        var rand = baseRandom(0, ++index);
        result[index] = result[rand];
        result[rand] = value;
      });
      return result;
    }
    function size(collection) {
      var length = collection ? collection.length : 0;
      return typeof length == 'number' ? length : keys(collection).length;
    }
    function some(collection, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      var index = -1,
          length = collection ? collection.length : 0;
      if (typeof length == 'number') {
        while (++index < length) {
          if ((result = callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          return !(result = callback(value, index, collection));
        });
      }
      return !!result;
    }
    function sortBy(collection, callback, thisArg) {
      var index = -1,
          isArr = isArray(callback),
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);
      if (!isArr) {
        callback = lodash.createCallback(callback, thisArg, 3);
      }
      forEach(collection, function(value, key, collection) {
        var object = result[++index] = getObject();
        if (isArr) {
          object.criteria = map(callback, function(key) {
            return value[key];
          });
        } else {
          (object.criteria = getArray())[0] = callback(value, key, collection);
        }
        object.index = index;
        object.value = value;
      });
      length = result.length;
      result.sort(compareAscending);
      while (length--) {
        var object = result[length];
        result[length] = object.value;
        if (!isArr) {
          releaseArray(object.criteria);
        }
        releaseObject(object);
      }
      return result;
    }
    function toArray(collection) {
      if (collection && typeof collection.length == 'number') {
        return slice(collection);
      }
      return values(collection);
    }
    var where = filter;
    function compact(array) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];
      while (++index < length) {
        var value = array[index];
        if (value) {
          result.push(value);
        }
      }
      return result;
    }
    function difference(array) {
      return baseDifference(array, baseFlatten(arguments, true, true, 1));
    }
    function findIndex(array, callback, thisArg) {
      var index = -1,
          length = array ? array.length : 0;
      callback = lodash.createCallback(callback, thisArg, 3);
      while (++index < length) {
        if (callback(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function findLastIndex(array, callback, thisArg) {
      var length = array ? array.length : 0;
      callback = lodash.createCallback(callback, thisArg, 3);
      while (length--) {
        if (callback(array[length], length, array)) {
          return length;
        }
      }
      return -1;
    }
    function first(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;
      if (typeof callback != 'number' && callback != null) {
        var index = -1;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (++index < length && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = callback;
        if (n == null || thisArg) {
          return array ? array[0] : undefined;
        }
      }
      return slice(array, 0, nativeMin(nativeMax(0, n), length));
    }
    function flatten(array, isShallow, callback, thisArg) {
      if (typeof isShallow != 'boolean' && isShallow != null) {
        thisArg = callback;
        callback = (typeof isShallow != 'function' && thisArg && thisArg[isShallow] === array) ? null : isShallow;
        isShallow = false;
      }
      if (callback != null) {
        array = map(array, callback, thisArg);
      }
      return baseFlatten(array, isShallow);
    }
    function indexOf(array, value, fromIndex) {
      if (typeof fromIndex == 'number') {
        var length = array ? array.length : 0;
        fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0);
      } else if (fromIndex) {
        var index = sortedIndex(array, value);
        return array[index] === value ? index : -1;
      }
      return baseIndexOf(array, value, fromIndex);
    }
    function initial(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;
      if (typeof callback != 'number' && callback != null) {
        var index = length;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (index-- && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : callback || n;
      }
      return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
    }
    function intersection() {
      var args = [],
          argsIndex = -1,
          argsLength = arguments.length,
          caches = getArray(),
          indexOf = getIndexOf(),
          trustIndexOf = indexOf === baseIndexOf,
          seen = getArray();
      while (++argsIndex < argsLength) {
        var value = arguments[argsIndex];
        if (isArray(value) || isArguments(value)) {
          args.push(value);
          caches.push(trustIndexOf && value.length >= largeArraySize && createCache(argsIndex ? args[argsIndex] : seen));
        }
      }
      var array = args[0],
          index = -1,
          length = array ? array.length : 0,
          result = [];
      outer: while (++index < length) {
        var cache = caches[0];
        value = array[index];
        if ((cache ? cacheIndexOf(cache, value) : indexOf(seen, value)) < 0) {
          argsIndex = argsLength;
          (cache || seen).push(value);
          while (--argsIndex) {
            cache = caches[argsIndex];
            if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
              continue outer;
            }
          }
          result.push(value);
        }
      }
      while (argsLength--) {
        cache = caches[argsLength];
        if (cache) {
          releaseObject(cache);
        }
      }
      releaseArray(caches);
      releaseArray(seen);
      return result;
    }
    function last(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;
      if (typeof callback != 'number' && callback != null) {
        var index = length;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (index-- && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = callback;
        if (n == null || thisArg) {
          return array ? array[length - 1] : undefined;
        }
      }
      return slice(array, nativeMax(0, length - n));
    }
    function lastIndexOf(array, value, fromIndex) {
      var index = array ? array.length : 0;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
      }
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function pull(array) {
      var args = arguments,
          argsIndex = 0,
          argsLength = args.length,
          length = array ? array.length : 0;
      while (++argsIndex < argsLength) {
        var index = -1,
            value = args[argsIndex];
        while (++index < length) {
          if (array[index] === value) {
            splice.call(array, index--, 1);
            length--;
          }
        }
      }
      return array;
    }
    function range(start, end, step) {
      start = +start || 0;
      step = typeof step == 'number' ? step : (+step || 1);
      if (end == null) {
        end = start;
        start = 0;
      }
      var index = -1,
          length = nativeMax(0, ceil((end - start) / (step || 1))),
          result = Array(length);
      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }
    function remove(array, callback, thisArg) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];
      callback = lodash.createCallback(callback, thisArg, 3);
      while (++index < length) {
        var value = array[index];
        if (callback(value, index, array)) {
          result.push(value);
          splice.call(array, index--, 1);
          length--;
        }
      }
      return result;
    }
    function rest(array, callback, thisArg) {
      if (typeof callback != 'number' && callback != null) {
        var n = 0,
            index = -1,
            length = array ? array.length : 0;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (++index < length && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
      }
      return slice(array, n);
    }
    function sortedIndex(array, value, callback, thisArg) {
      var low = 0,
          high = array ? array.length : low;
      callback = callback ? lodash.createCallback(callback, thisArg, 1) : identity;
      value = callback(value);
      while (low < high) {
        var mid = (low + high) >>> 1;
        (callback(array[mid]) < value) ? low = mid + 1 : high = mid;
      }
      return low;
    }
    function union() {
      return baseUniq(baseFlatten(arguments, true, true));
    }
    function uniq(array, isSorted, callback, thisArg) {
      if (typeof isSorted != 'boolean' && isSorted != null) {
        thisArg = callback;
        callback = (typeof isSorted != 'function' && thisArg && thisArg[isSorted] === array) ? null : isSorted;
        isSorted = false;
      }
      if (callback != null) {
        callback = lodash.createCallback(callback, thisArg, 3);
      }
      return baseUniq(array, isSorted, callback);
    }
    function without(array) {
      return baseDifference(array, slice(arguments, 1));
    }
    function xor() {
      var index = -1,
          length = arguments.length;
      while (++index < length) {
        var array = arguments[index];
        if (isArray(array) || isArguments(array)) {
          var result = result ? baseUniq(baseDifference(result, array).concat(baseDifference(array, result))) : array;
        }
      }
      return result || [];
    }
    function zip() {
      var array = arguments.length > 1 ? arguments : arguments[0],
          index = -1,
          length = array ? max(pluck(array, 'length')) : 0,
          result = Array(length < 0 ? 0 : length);
      while (++index < length) {
        result[index] = pluck(array, index);
      }
      return result;
    }
    function zipObject(keys, values) {
      var index = -1,
          length = keys ? keys.length : 0,
          result = {};
      if (!values && length && !isArray(keys[0])) {
        values = [];
      }
      while (++index < length) {
        var key = keys[index];
        if (values) {
          result[key] = values[index];
        } else if (key) {
          result[key[0]] = key[1];
        }
      }
      return result;
    }
    function after(n, func) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }
    function bind(func, thisArg) {
      return arguments.length > 2 ? createWrapper(func, 17, slice(arguments, 2), null, thisArg) : createWrapper(func, 1, null, null, thisArg);
    }
    function bindAll(object) {
      var funcs = arguments.length > 1 ? baseFlatten(arguments, true, false, 1) : functions(object),
          index = -1,
          length = funcs.length;
      while (++index < length) {
        var key = funcs[index];
        object[key] = createWrapper(object[key], 1, null, null, object);
      }
      return object;
    }
    function bindKey(object, key) {
      return arguments.length > 2 ? createWrapper(key, 19, slice(arguments, 2), null, object) : createWrapper(key, 3, null, null, object);
    }
    function compose() {
      var funcs = arguments,
          length = funcs.length;
      while (length--) {
        if (!isFunction(funcs[length])) {
          throw new TypeError;
        }
      }
      return function() {
        var args = arguments,
            length = funcs.length;
        while (length--) {
          args = [funcs[length].apply(this, args)];
        }
        return args[0];
      };
    }
    function curry(func, arity) {
      arity = typeof arity == 'number' ? arity : (+arity || func.length);
      return createWrapper(func, 4, null, null, null, arity);
    }
    function debounce(func, wait, options) {
      var args,
          maxTimeoutId,
          result,
          stamp,
          thisArg,
          timeoutId,
          trailingCall,
          lastCalled = 0,
          maxWait = false,
          trailing = true;
      if (!isFunction(func)) {
        throw new TypeError;
      }
      wait = nativeMax(0, wait) || 0;
      if (options === true) {
        var leading = true;
        trailing = false;
      } else if (isObject(options)) {
        leading = options.leading;
        maxWait = 'maxWait' in options && (nativeMax(wait, options.maxWait) || 0);
        trailing = 'trailing' in options ? options.trailing : trailing;
      }
      var delayed = function() {
        var remaining = wait - (now() - stamp);
        if (remaining <= 0) {
          if (maxTimeoutId) {
            clearTimeout(maxTimeoutId);
          }
          var isCalled = trailingCall;
          maxTimeoutId = timeoutId = trailingCall = undefined;
          if (isCalled) {
            lastCalled = now();
            result = func.apply(thisArg, args);
            if (!timeoutId && !maxTimeoutId) {
              args = thisArg = null;
            }
          }
        } else {
          timeoutId = setTimeout(delayed, remaining);
        }
      };
      var maxDelayed = function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
        if (trailing || (maxWait !== wait)) {
          lastCalled = now();
          result = func.apply(thisArg, args);
          if (!timeoutId && !maxTimeoutId) {
            args = thisArg = null;
          }
        }
      };
      return function() {
        args = arguments;
        stamp = now();
        thisArg = this;
        trailingCall = trailing && (timeoutId || !leading);
        if (maxWait === false) {
          var leadingCall = leading && !timeoutId;
        } else {
          if (!maxTimeoutId && !leading) {
            lastCalled = stamp;
          }
          var remaining = maxWait - (stamp - lastCalled),
              isCalled = remaining <= 0;
          if (isCalled) {
            if (maxTimeoutId) {
              maxTimeoutId = clearTimeout(maxTimeoutId);
            }
            lastCalled = stamp;
            result = func.apply(thisArg, args);
          } else if (!maxTimeoutId) {
            maxTimeoutId = setTimeout(maxDelayed, remaining);
          }
        }
        if (isCalled && timeoutId) {
          timeoutId = clearTimeout(timeoutId);
        } else if (!timeoutId && wait !== maxWait) {
          timeoutId = setTimeout(delayed, wait);
        }
        if (leadingCall) {
          isCalled = true;
          result = func.apply(thisArg, args);
        }
        if (isCalled && !timeoutId && !maxTimeoutId) {
          args = thisArg = null;
        }
        return result;
      };
    }
    function defer(func) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var args = slice(arguments, 1);
      return setTimeout(function() {
        func.apply(undefined, args);
      }, 1);
    }
    function delay(func, wait) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var args = slice(arguments, 2);
      return setTimeout(function() {
        func.apply(undefined, args);
      }, wait);
    }
    function memoize(func, resolver) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var memoized = function() {
        var cache = memoized.cache,
            key = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];
        return hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = func.apply(this, arguments));
      };
      memoized.cache = {};
      return memoized;
    }
    function once(func) {
      var ran,
          result;
      if (!isFunction(func)) {
        throw new TypeError;
      }
      return function() {
        if (ran) {
          return result;
        }
        ran = true;
        result = func.apply(this, arguments);
        func = null;
        return result;
      };
    }
    function partial(func) {
      return createWrapper(func, 16, slice(arguments, 1));
    }
    function partialRight(func) {
      return createWrapper(func, 32, null, slice(arguments, 1));
    }
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;
      if (!isFunction(func)) {
        throw new TypeError;
      }
      if (options === false) {
        leading = false;
      } else if (isObject(options)) {
        leading = 'leading' in options ? options.leading : leading;
        trailing = 'trailing' in options ? options.trailing : trailing;
      }
      debounceOptions.leading = leading;
      debounceOptions.maxWait = wait;
      debounceOptions.trailing = trailing;
      return debounce(func, wait, debounceOptions);
    }
    function wrap(value, wrapper) {
      return createWrapper(wrapper, 16, [value]);
    }
    function constant(value) {
      return function() {
        return value;
      };
    }
    function createCallback(func, thisArg, argCount) {
      var type = typeof func;
      if (func == null || type == 'function') {
        return baseCreateCallback(func, thisArg, argCount);
      }
      if (type != 'object') {
        return property(func);
      }
      var props = keys(func),
          key = props[0],
          a = func[key];
      if (props.length == 1 && a === a && !isObject(a)) {
        return function(object) {
          var b = object[key];
          return a === b && (a !== 0 || (1 / a == 1 / b));
        };
      }
      return function(object) {
        var length = props.length,
            result = false;
        while (length--) {
          if (!(result = baseIsEqual(object[props[length]], func[props[length]], null, true))) {
            break;
          }
        }
        return result;
      };
    }
    function escape(string) {
      return string == null ? '' : String(string).replace(reUnescapedHtml, escapeHtmlChar);
    }
    function identity(value) {
      return value;
    }
    function mixin(object, source, options) {
      var chain = true,
          methodNames = source && functions(source);
      if (!source || (!options && !methodNames.length)) {
        if (options == null) {
          options = source;
        }
        ctor = lodashWrapper;
        source = object;
        object = lodash;
        methodNames = functions(source);
      }
      if (options === false) {
        chain = false;
      } else if (isObject(options) && 'chain' in options) {
        chain = options.chain;
      }
      var ctor = object,
          isFunc = isFunction(ctor);
      forEach(methodNames, function(methodName) {
        var func = object[methodName] = source[methodName];
        if (isFunc) {
          ctor.prototype[methodName] = function() {
            var chainAll = this.__chain__,
                value = this.__wrapped__,
                args = [value];
            push.apply(args, arguments);
            var result = func.apply(object, args);
            if (chain || chainAll) {
              if (value === result && isObject(result)) {
                return this;
              }
              result = new ctor(result);
              result.__chain__ = chainAll;
            }
            return result;
          };
        }
      });
    }
    function noConflict() {
      context._ = oldDash;
      return this;
    }
    function noop() {}
    var now = isNative(now = Date.now) && now || function() {
      return new Date().getTime();
    };
    var parseInt = nativeParseInt(whitespace + '08') == 8 ? nativeParseInt : function(value, radix) {
      return nativeParseInt(isString(value) ? value.replace(reLeadingSpacesAndZeros, '') : value, radix || 0);
    };
    function property(key) {
      return function(object) {
        return object[key];
      };
    }
    function random(min, max, floating) {
      var noMin = min == null,
          noMax = max == null;
      if (floating == null) {
        if (typeof min == 'boolean' && noMax) {
          floating = min;
          min = 1;
        } else if (!noMax && typeof max == 'boolean') {
          floating = max;
          noMax = true;
        }
      }
      if (noMin && noMax) {
        max = 1;
      }
      min = +min || 0;
      if (noMax) {
        max = min;
        min = 0;
      } else {
        max = +max || 0;
      }
      if (floating || min % 1 || max % 1) {
        var rand = nativeRandom();
        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
      }
      return baseRandom(min, max);
    }
    function result(object, key) {
      if (object) {
        var value = object[key];
        return isFunction(value) ? object[key]() : value;
      }
    }
    function template(text, data, options) {
      var settings = lodash.templateSettings;
      text = String(text || '');
      options = defaults({}, options, settings);
      var imports = defaults({}, options.imports, settings.imports),
          importsKeys = keys(imports),
          importsValues = values(imports);
      var isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";
      var reDelimiters = RegExp((options.escape || reNoMatch).source + '|' + interpolate.source + '|' + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' + (options.evaluate || reNoMatch).source + '|$', 'g');
      text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);
        source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);
        if (escapeValue) {
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;
        return match;
      });
      source += "';\n";
      var variable = options.variable,
          hasVariable = variable;
      if (!hasVariable) {
        variable = 'obj';
        source = 'with (' + variable + ') {\n' + source + '\n}\n';
      }
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source).replace(reEmptyStringMiddle, '$1').replace(reEmptyStringTrailing, '$1;');
      source = 'function(' + variable + ') {\n' + (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') + "var __t, __p = '', __e = _.escape" + (isEvaluating ? ', __j = Array.prototype.join;\n' + "function print() { __p += __j.call(arguments, '') }\n" : ';\n') + source + 'return __p\n}';
      var sourceURL = '\n/*\n//# sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/';
      try {
        var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues);
      } catch (e) {
        e.source = source;
        throw e;
      }
      if (data) {
        return result(data);
      }
      result.source = source;
      return result;
    }
    function times(n, callback, thisArg) {
      n = (n = +n) > -1 ? n : 0;
      var index = -1,
          result = Array(n);
      callback = baseCreateCallback(callback, thisArg, 1);
      while (++index < n) {
        result[index] = callback(index);
      }
      return result;
    }
    function unescape(string) {
      return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
    }
    function uniqueId(prefix) {
      var id = ++idCounter;
      return String(prefix == null ? '' : prefix) + id;
    }
    function chain(value) {
      value = new lodashWrapper(value);
      value.__chain__ = true;
      return value;
    }
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }
    function wrapperChain() {
      this.__chain__ = true;
      return this;
    }
    function wrapperToString() {
      return String(this.__wrapped__);
    }
    function wrapperValueOf() {
      return this.__wrapped__;
    }
    lodash.after = after;
    lodash.assign = assign;
    lodash.at = at;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.chain = chain;
    lodash.compact = compact;
    lodash.compose = compose;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.createCallback = createCallback;
    lodash.curry = curry;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.functions = functions;
    lodash.groupBy = groupBy;
    lodash.indexBy = indexBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.invert = invert;
    lodash.invoke = invoke;
    lodash.keys = keys;
    lodash.map = map;
    lodash.mapValues = mapValues;
    lodash.max = max;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.min = min;
    lodash.omit = omit;
    lodash.once = once;
    lodash.pairs = pairs;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.pick = pick;
    lodash.pluck = pluck;
    lodash.property = property;
    lodash.pull = pull;
    lodash.range = range;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.shuffle = shuffle;
    lodash.sortBy = sortBy;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.times = times;
    lodash.toArray = toArray;
    lodash.transform = transform;
    lodash.union = union;
    lodash.uniq = uniq;
    lodash.values = values;
    lodash.where = where;
    lodash.without = without;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.collect = map;
    lodash.drop = rest;
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.extend = assign;
    lodash.methods = functions;
    lodash.object = zipObject;
    lodash.select = filter;
    lodash.tail = rest;
    lodash.unique = uniq;
    lodash.unzip = zip;
    mixin(lodash);
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.contains = contains;
    lodash.escape = escape;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.has = has;
    lodash.identity = identity;
    lodash.indexOf = indexOf;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isNaN = isNaN;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isUndefined = isUndefined;
    lodash.lastIndexOf = lastIndexOf;
    lodash.mixin = mixin;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.result = result;
    lodash.runInContext = runInContext;
    lodash.size = size;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.template = template;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.all = every;
    lodash.any = some;
    lodash.detect = find;
    lodash.findWhere = find;
    lodash.foldl = reduce;
    lodash.foldr = reduceRight;
    lodash.include = contains;
    lodash.inject = reduce;
    mixin(function() {
      var source = {};
      forOwn(lodash, function(func, methodName) {
        if (!lodash.prototype[methodName]) {
          source[methodName] = func;
        }
      });
      return source;
    }(), false);
    lodash.first = first;
    lodash.last = last;
    lodash.sample = sample;
    lodash.take = first;
    lodash.head = first;
    forOwn(lodash, function(func, methodName) {
      var callbackable = methodName !== 'sample';
      if (!lodash.prototype[methodName]) {
        lodash.prototype[methodName] = function(n, guard) {
          var chainAll = this.__chain__,
              result = func(this.__wrapped__, n, guard);
          return !chainAll && (n == null || (guard && !(callbackable && typeof n == 'function'))) ? result : new lodashWrapper(result, chainAll);
        };
      }
    });
    lodash.VERSION = '2.4.1';
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.toString = wrapperToString;
    lodash.prototype.value = wrapperValueOf;
    lodash.prototype.valueOf = wrapperValueOf;
    forEach(['join', 'pop', 'shift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        var chainAll = this.__chain__,
            result = func.apply(this.__wrapped__, arguments);
        return chainAll ? new lodashWrapper(result, chainAll) : result;
      };
    });
    forEach(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        func.apply(this.__wrapped__, arguments);
        return this;
      };
    });
    forEach(['concat', 'slice', 'splice'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        return new lodashWrapper(func.apply(this.__wrapped__, arguments), this.__chain__);
      };
    });
    return lodash;
  }
  var _ = runInContext();
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    root._ = _;
    System.register("github:lodash/lodash@2.4.1/dist/lodash", [], false, function() {
      return _;
    });
  } else if (freeExports && freeModule) {
    if (moduleExports) {
      (freeModule.exports = _)._ = _;
    } else {
      freeExports._ = _;
    }
  } else {
    root._ = _;
  }
}.call(this));


})();
System.register("github:mgonto/restangular@1.4.0/dist/restangular.min", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    !function() {
      var a = angular.module("restangular", []);
      a.provider("Restangular", function() {
        var a = {};
        a.init = function(a, b) {
          function c(a, b, c, d) {
            var e = {};
            return _.each(_.keys(d), function(f) {
              var g = d[f];
              g.params = _.extend({}, g.params, a.defaultRequestParams[g.method.toLowerCase()]), _.isEmpty(g.params) && delete g.params, e[f] = a.isSafe(g.method) ? function() {
                return b(_.extend(g, {url: c}));
              } : function(a) {
                return b(_.extend(g, {
                  url: c,
                  data: a
                }));
              };
            }), e;
          }
          a.configuration = b;
          var d = ["get", "head", "options", "trace", "getlist"];
          b.isSafe = function(a) {
            return _.contains(d, a.toLowerCase());
          };
          var e = /^https?:\/\//i;
          b.isAbsoluteUrl = function(a) {
            return _.isUndefined(b.absoluteUrl) || _.isNull(b.absoluteUrl) ? a && e.test(a) : b.absoluteUrl;
          }, b.absoluteUrl = _.isUndefined(b.absoluteUrl) ? !0 : b.absoluteUrl, a.setSelfLinkAbsoluteUrl = function(a) {
            b.absoluteUrl = a;
          }, b.baseUrl = _.isUndefined(b.baseUrl) ? "" : b.baseUrl, a.setBaseUrl = function(a) {
            return b.baseUrl = /\/$/.test(a) ? a.substring(0, a.length - 1) : a, this;
          }, b.extraFields = b.extraFields || [], a.setExtraFields = function(a) {
            return b.extraFields = a, this;
          }, b.defaultHttpFields = b.defaultHttpFields || {}, a.setDefaultHttpFields = function(a) {
            return b.defaultHttpFields = a, this;
          }, b.withHttpValues = function(a, c) {
            return _.defaults(c, a, b.defaultHttpFields);
          }, b.encodeIds = _.isUndefined(b.encodeIds) ? !0 : b.encodeIds, a.setEncodeIds = function(a) {
            b.encodeIds = a;
          }, b.defaultRequestParams = b.defaultRequestParams || {
            get: {},
            post: {},
            put: {},
            remove: {},
            common: {}
          }, a.setDefaultRequestParams = function(a, c) {
            var d = [],
                e = c || a;
            return _.isUndefined(c) ? d.push("common") : _.isArray(a) ? d = a : d.push(a), _.each(d, function(a) {
              b.defaultRequestParams[a] = e;
            }), this;
          }, a.requestParams = b.defaultRequestParams, b.defaultHeaders = b.defaultHeaders || {}, a.setDefaultHeaders = function(c) {
            return b.defaultHeaders = c, a.defaultHeaders = b.defaultHeaders, this;
          }, a.defaultHeaders = b.defaultHeaders, b.methodOverriders = b.methodOverriders || [], a.setMethodOverriders = function(a) {
            var c = _.extend([], a);
            return b.isOverridenMethod("delete", c) && c.push("remove"), b.methodOverriders = c, this;
          }, b.jsonp = _.isUndefined(b.jsonp) ? !1 : b.jsonp, a.setJsonp = function(a) {
            b.jsonp = a;
          }, b.isOverridenMethod = function(a, c) {
            var d = c || b.methodOverriders;
            return !_.isUndefined(_.find(d, function(b) {
              return b.toLowerCase() === a.toLowerCase();
            }));
          }, b.urlCreator = b.urlCreator || "path", a.setUrlCreator = function(a) {
            if (!_.has(b.urlCreatorFactory, a))
              throw new Error("URL Path selected isn't valid");
            return b.urlCreator = a, this;
          }, b.restangularFields = b.restangularFields || {
            id: "id",
            route: "route",
            parentResource: "parentResource",
            restangularCollection: "restangularCollection",
            cannonicalId: "__cannonicalId",
            etag: "restangularEtag",
            selfLink: "href",
            get: "get",
            getList: "getList",
            put: "put",
            post: "post",
            remove: "remove",
            head: "head",
            trace: "trace",
            options: "options",
            patch: "patch",
            getRestangularUrl: "getRestangularUrl",
            getRequestedUrl: "getRequestedUrl",
            putElement: "putElement",
            addRestangularMethod: "addRestangularMethod",
            getParentList: "getParentList",
            clone: "clone",
            ids: "ids",
            httpConfig: "_$httpConfig",
            reqParams: "reqParams",
            one: "one",
            all: "all",
            several: "several",
            oneUrl: "oneUrl",
            allUrl: "allUrl",
            customPUT: "customPUT",
            customPOST: "customPOST",
            customDELETE: "customDELETE",
            customGET: "customGET",
            customGETLIST: "customGETLIST",
            customOperation: "customOperation",
            doPUT: "doPUT",
            doPOST: "doPOST",
            doDELETE: "doDELETE",
            doGET: "doGET",
            doGETLIST: "doGETLIST",
            fromServer: "fromServer",
            withConfig: "withConfig",
            withHttpConfig: "withHttpConfig",
            singleOne: "singleOne",
            plain: "plain",
            save: "save"
          }, a.setRestangularFields = function(a) {
            return b.restangularFields = _.extend(b.restangularFields, a), this;
          }, b.isRestangularized = function(a) {
            return !!a[b.restangularFields.one] || !!a[b.restangularFields.all];
          }, b.setFieldToElem = function(a, b, c) {
            var d = a.split("."),
                e = b;
            return _.each(_.initial(d), function(a) {
              e[a] = {}, e = e[a];
            }), e[_.last(d)] = c, this;
          }, b.getFieldFromElem = function(a, b) {
            var c = a.split("."),
                d = b;
            return _.each(c, function(a) {
              d && (d = d[a]);
            }), angular.copy(d);
          }, b.setIdToElem = function(a, c) {
            return b.setFieldToElem(b.restangularFields.id, a, c), this;
          }, b.getIdFromElem = function(a) {
            return b.getFieldFromElem(b.restangularFields.id, a);
          }, b.isValidId = function(a) {
            return "" !== a && !_.isUndefined(a) && !_.isNull(a);
          }, b.setUrlToElem = function(a, c) {
            return b.setFieldToElem(b.restangularFields.selfLink, a, c), this;
          }, b.getUrlFromElem = function(a) {
            return b.getFieldFromElem(b.restangularFields.selfLink, a);
          }, b.useCannonicalId = _.isUndefined(b.useCannonicalId) ? !1 : b.useCannonicalId, a.setUseCannonicalId = function(a) {
            return b.useCannonicalId = a, this;
          }, b.getCannonicalIdFromElem = function(a) {
            var c = a[b.restangularFields.cannonicalId],
                d = b.isValidId(c) ? c : b.getIdFromElem(a);
            return d;
          }, b.responseInterceptors = b.responseInterceptors || [], b.defaultResponseInterceptor = function(a) {
            return a;
          }, b.responseExtractor = function(a, c, d, e, f, g) {
            var h = angular.copy(b.responseInterceptors);
            h.push(b.defaultResponseInterceptor);
            var i = a;
            return _.each(h, function(a) {
              i = a(i, c, d, e, f, g);
            }), i;
          }, a.addResponseInterceptor = function(a) {
            return b.responseInterceptors.push(a), this;
          }, a.setResponseInterceptor = a.addResponseInterceptor, a.setResponseExtractor = a.addResponseInterceptor, b.requestInterceptors = b.requestInterceptors || [], b.defaultInterceptor = function(a, b, c, d, e, f, g) {
            return {
              element: a,
              headers: e,
              params: f,
              httpConfig: g
            };
          }, b.fullRequestInterceptor = function(a, c, d, e, f, g, h) {
            var i = angular.copy(b.requestInterceptors),
                j = b.defaultInterceptor(a, c, d, e, f, g, h);
            return _.reduce(i, function(a, b) {
              return _.extend(a, b(a.element, c, d, e, a.headers, a.params, a.httpConfig));
            }, j);
          }, a.addRequestInterceptor = function(a) {
            return b.requestInterceptors.push(function(b, c, d, e, f, g, h) {
              return {
                headers: f,
                params: g,
                element: a(b, c, d, e),
                httpConfig: h
              };
            }), this;
          }, a.setRequestInterceptor = a.addRequestInterceptor, a.addFullRequestInterceptor = function(a) {
            return b.requestInterceptors.push(a), this;
          }, a.setFullRequestInterceptor = a.addFullRequestInterceptor, b.errorInterceptor = b.errorInterceptor || function() {}, a.setErrorInterceptor = function(a) {
            return b.errorInterceptor = a, this;
          }, b.onBeforeElemRestangularized = b.onBeforeElemRestangularized || function(a) {
            return a;
          }, a.setOnBeforeElemRestangularized = function(a) {
            return b.onBeforeElemRestangularized = a, this;
          }, b.onElemRestangularized = b.onElemRestangularized || function(a) {
            return a;
          }, a.setOnElemRestangularized = function(a) {
            return b.onElemRestangularized = a, this;
          }, b.shouldSaveParent = b.shouldSaveParent || function() {
            return !0;
          }, a.setParentless = function(a) {
            return _.isArray(a) ? b.shouldSaveParent = function(b) {
              return !_.contains(a, b);
            } : _.isBoolean(a) && (b.shouldSaveParent = function() {
              return !a;
            }), this;
          }, b.suffix = _.isUndefined(b.suffix) ? null : b.suffix, a.setRequestSuffix = function(a) {
            return b.suffix = a, this;
          }, b.transformers = b.transformers || {}, a.addElementTransformer = function(c, d, e) {
            var f = null,
                g = null;
            2 === arguments.length ? g = d : (g = e, f = d);
            var h = b.transformers[c];
            return h || (h = b.transformers[c] = []), h.push(function(a, b) {
              return _.isNull(f) || a == f ? g(b) : b;
            }), a;
          }, a.extendCollection = function(b, c) {
            return a.addElementTransformer(b, !0, c);
          }, a.extendModel = function(b, c) {
            return a.addElementTransformer(b, !1, c);
          }, b.transformElem = function(a, c, d, e, f) {
            if (!f && !b.transformLocalElements && !a[b.restangularFields.fromServer])
              return a;
            var g = b.transformers[d],
                h = a;
            return g && _.each(g, function(a) {
              h = a(c, h);
            }), b.onElemRestangularized(h, c, d, e);
          }, b.transformLocalElements = _.isUndefined(b.transformLocalElements) ? !1 : b.transformLocalElements, a.setTransformOnlyServerElements = function(a) {
            b.transformLocalElements = !a;
          }, b.fullResponse = _.isUndefined(b.fullResponse) ? !1 : b.fullResponse, a.setFullResponse = function(a) {
            return b.fullResponse = a, this;
          }, b.urlCreatorFactory = {};
          var f = function() {};
          f.prototype.setConfig = function(a) {
            return this.config = a, this;
          }, f.prototype.parentsArray = function(a) {
            for (var b = []; a; )
              b.push(a), a = a[this.config.restangularFields.parentResource];
            return b.reverse();
          }, f.prototype.resource = function(a, d, e, f, g, h, i, j) {
            var k = _.defaults(g || {}, this.config.defaultRequestParams.common),
                l = _.defaults(f || {}, this.config.defaultHeaders);
            i && (b.isSafe(j) ? l["If-None-Match"] = i : l["If-Match"] = i);
            var m = this.base(a);
            if (h) {
              var n = "";
              /\/$/.test(m) || (n += "/"), n += h, m += n;
            }
            return this.config.suffix && -1 === m.indexOf(this.config.suffix, m.length - this.config.suffix.length) && !this.config.getUrlFromElem(a) && (m += this.config.suffix), a[this.config.restangularFields.httpConfig] = void 0, c(this.config, d, m, {
              getList: this.config.withHttpValues(e, {
                method: "GET",
                params: k,
                headers: l
              }),
              get: this.config.withHttpValues(e, {
                method: "GET",
                params: k,
                headers: l
              }),
              jsonp: this.config.withHttpValues(e, {
                method: "jsonp",
                params: k,
                headers: l
              }),
              put: this.config.withHttpValues(e, {
                method: "PUT",
                params: k,
                headers: l
              }),
              post: this.config.withHttpValues(e, {
                method: "POST",
                params: k,
                headers: l
              }),
              remove: this.config.withHttpValues(e, {
                method: "DELETE",
                params: k,
                headers: l
              }),
              head: this.config.withHttpValues(e, {
                method: "HEAD",
                params: k,
                headers: l
              }),
              trace: this.config.withHttpValues(e, {
                method: "TRACE",
                params: k,
                headers: l
              }),
              options: this.config.withHttpValues(e, {
                method: "OPTIONS",
                params: k,
                headers: l
              }),
              patch: this.config.withHttpValues(e, {
                method: "PATCH",
                params: k,
                headers: l
              })
            });
          };
          var g = function() {};
          g.prototype = new f, g.prototype.base = function(a) {
            var c = this;
            return _.reduce(this.parentsArray(a), function(a, d) {
              var e,
                  f = c.config.getUrlFromElem(d);
              if (f) {
                if (c.config.isAbsoluteUrl(f))
                  return f;
                e = f;
              } else if (e = d[c.config.restangularFields.route], d[c.config.restangularFields.restangularCollection]) {
                var g = d[c.config.restangularFields.ids];
                g && (e += "/" + g.join(","));
              } else {
                var h;
                h = c.config.useCannonicalId ? c.config.getCannonicalIdFromElem(d) : c.config.getIdFromElem(d), b.isValidId(h) && !d.singleOne && (e += "/" + (c.config.encodeIds ? encodeURIComponent(h) : h));
              }
              return a.replace(/\/$/, "") + "/" + e;
            }, this.config.baseUrl);
          }, g.prototype.fetchUrl = function(a, b) {
            var c = this.base(a);
            return b && (c += "/" + b), c;
          }, g.prototype.fetchRequestedUrl = function(a, c) {
            function d(a) {
              var b = [];
              for (var c in a)
                a.hasOwnProperty(c) && b.push(c);
              return b.sort();
            }
            function e(a, b, c) {
              for (var e = d(a),
                  f = 0; f < e.length; f++)
                b.call(c, a[e[f]], e[f]);
              return e;
            }
            function f(a, b) {
              return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+");
            }
            var g = this.fetchUrl(a, c),
                h = a[b.restangularFields.reqParams];
            if (!h)
              return g;
            var i = [];
            return e(h, function(a, b) {
              null != a && void 0 != a && (angular.isArray(a) || (a = [a]), angular.forEach(a, function(a) {
                angular.isObject(a) && (a = angular.toJson(a)), i.push(f(b) + "=" + f(a));
              }));
            }), g + (this.config.suffix || "") + (-1 === g.indexOf("?") ? "?" : "&") + i.join("&");
          }, b.urlCreatorFactory.path = g;
        };
        var b = {};
        a.init(this, b), this.$get = ["$http", "$q", function(c, d) {
          function e(b) {
            function f(a, c, d, e, f) {
              if (c[b.restangularFields.route] = d, c[b.restangularFields.getRestangularUrl] = _.bind(P.fetchUrl, P, c), c[b.restangularFields.getRequestedUrl] = _.bind(P.fetchRequestedUrl, P, c), c[b.restangularFields.addRestangularMethod] = _.bind(L, c), c[b.restangularFields.clone] = _.bind(r, c, c), c[b.restangularFields.reqParams] = _.isEmpty(e) ? null : e, c[b.restangularFields.withHttpConfig] = _.bind(z, c), c[b.restangularFields.plain] = _.bind(p, c, c), c[b.restangularFields.one] = _.bind(g, c, c), c[b.restangularFields.all] = _.bind(h, c, c), c[b.restangularFields.several] = _.bind(i, c, c), c[b.restangularFields.oneUrl] = _.bind(j, c, c), c[b.restangularFields.allUrl] = _.bind(k, c, c), c[b.restangularFields.fromServer] = !!f, a && b.shouldSaveParent(d)) {
                var l = b.getIdFromElem(a),
                    m = b.getUrlFromElem(a),
                    n = _.union(_.values(_.pick(b.restangularFields, ["route", "singleOne", "parentResource"])), b.extraFields),
                    o = _.pick(a, n);
                b.isValidId(l) && b.setIdToElem(o, l), b.isValidId(m) && b.setUrlToElem(o, m), c[b.restangularFields.parentResource] = o;
              } else
                c[b.restangularFields.parentResource] = null;
              return c;
            }
            function g(a, c, d, e) {
              if (_.isNumber(c) || _.isNumber(a)) {
                var f = "You're creating a Restangular entity with the number ";
                throw f += "instead of the route or the parent. You can't call .one(12)", new Error(f);
              }
              var g = {};
              return b.setIdToElem(g, d), b.setFieldToElem(b.restangularFields.singleOne, g, e), s(a, g, c, !1);
            }
            function h(a, b) {
              return t(a, [], b, !1);
            }
            function i(a, c) {
              var d = [];
              return d[b.restangularFields.ids] = Array.prototype.splice.call(arguments, 2), t(a, d, c, !1);
            }
            function j(a, c, d) {
              if (!c)
                throw new Error("Route is mandatory when creating new Restangular objects.");
              var e = {};
              return b.setUrlToElem(e, d, c), s(a, e, c, !1);
            }
            function k(a, c, d) {
              if (!c)
                throw new Error("Route is mandatory when creating new Restangular objects.");
              var e = {};
              return b.setUrlToElem(e, d, c), t(a, e, c, !1);
            }
            function l(a, c, d) {
              return a.call = _.bind(m, a), a.get = _.bind(n, a), a[b.restangularFields.restangularCollection] = c, c && (a.push = _.bind(m, a, "push")), a.$object = d, a;
            }
            function m(a) {
              var c = d.defer(),
                  e = arguments,
                  f = {};
              return this.then(function(b) {
                var d = Array.prototype.slice.call(e, 1),
                    g = b[a];
                g.apply(b, d), f = b, c.resolve(b);
              }), l(c.promise, this[b.restangularFields.restangularCollection], f);
            }
            function n(a) {
              var c = d.defer(),
                  e = {};
              return this.then(function(b) {
                e = b[a], c.resolve(e);
              }), l(c.promise, this[b.restangularFields.restangularCollection], e);
            }
            function o(a, c, d, e) {
              return _.extend(e, d), b.fullResponse ? a.resolve(_.extend(c, {data: d})) : (a.resolve(d), void 0);
            }
            function p(a) {
              if (_.isArray(a)) {
                var c = [];
                return _.each(a, function(a) {
                  c.push(p(a));
                }), c;
              }
              return _.omit(a, _.values(_.omit(b.restangularFields, "id")));
            }
            function q(a) {
              a[b.restangularFields.customOperation] = _.bind(K, a), _.each(["put", "post", "get", "delete"], function(b) {
                _.each(["do", "custom"], function(c) {
                  var d,
                      e = "delete" === b ? "remove" : b,
                      f = c + b.toUpperCase();
                  d = "put" !== e && "post" !== e ? K : function(a, b, c, d, e) {
                    return _.bind(K, this)(a, c, d, e, b);
                  }, a[f] = _.bind(d, a, e);
                });
              }), a[b.restangularFields.customGETLIST] = _.bind(y, a), a[b.restangularFields.doGETLIST] = a[b.restangularFields.customGETLIST];
            }
            function r(a, c) {
              var d = angular.copy(a, c);
              return s(d[b.restangularFields.parentResource], d, d[b.restangularFields.route], !0);
            }
            function s(a, c, d, e, g, h) {
              var i = b.onBeforeElemRestangularized(c, !1, d),
                  j = f(a, i, d, h, e);
              return b.useCannonicalId && (j[b.restangularFields.cannonicalId] = b.getIdFromElem(j)), g && (j[b.restangularFields.getParentList] = function() {
                return g;
              }), j[b.restangularFields.restangularCollection] = !1, j[b.restangularFields.get] = _.bind(C, j), j[b.restangularFields.getList] = _.bind(y, j), j[b.restangularFields.put] = _.bind(E, j), j[b.restangularFields.post] = _.bind(F, j), j[b.restangularFields.remove] = _.bind(D, j), j[b.restangularFields.head] = _.bind(G, j), j[b.restangularFields.trace] = _.bind(H, j), j[b.restangularFields.options] = _.bind(I, j), j[b.restangularFields.patch] = _.bind(J, j), j[b.restangularFields.save] = _.bind(A, j), q(j), b.transformElem(j, !1, d, O, !0);
            }
            function t(a, c, d, e, g) {
              var h = b.onBeforeElemRestangularized(c, !0, d),
                  i = f(a, h, d, g, e);
              return i[b.restangularFields.restangularCollection] = !0, i[b.restangularFields.post] = _.bind(F, i, null), i[b.restangularFields.remove] = _.bind(D, i), i[b.restangularFields.head] = _.bind(G, i), i[b.restangularFields.trace] = _.bind(H, i), i[b.restangularFields.putElement] = _.bind(w, i), i[b.restangularFields.options] = _.bind(I, i), i[b.restangularFields.patch] = _.bind(J, i), i[b.restangularFields.get] = _.bind(v, i), i[b.restangularFields.getList] = _.bind(y, i, null), q(i), b.transformElem(i, !0, d, O, !0);
            }
            function u(a, b, c) {
              var d = t(a, b, c, !1);
              return _.each(d, function(b) {
                s(a, b, c, !1);
              }), d;
            }
            function v(a, b, c) {
              return this.customGET(a.toString(), b, c);
            }
            function w(a, c, e) {
              var f = this,
                  g = this[a],
                  h = d.defer(),
                  i = [];
              return i = b.transformElem(i, !0, g[b.restangularFields.route], O), g.put(c, e).then(function(b) {
                var c = r(f);
                c[a] = b, i = c, h.resolve(c);
              }, function(a) {
                h.reject(a);
              }), l(h.promise, !0, i);
            }
            function x(a, c, d, e, f, g) {
              var h = b.responseExtractor(a, c, d, e, f, g),
                  i = f.headers("ETag");
              return h && i && (h[b.restangularFields.etag] = i), h;
            }
            function y(a, e, f) {
              var g = this,
                  h = d.defer(),
                  i = "getList",
                  j = P.fetchUrl(this, a),
                  k = a || g[b.restangularFields.route],
                  m = b.fullRequestInterceptor(null, i, k, j, f || {}, e || {}, this[b.restangularFields.httpConfig] || {}),
                  n = [];
              n = b.transformElem(n, !0, k, O);
              var p = "getList";
              return b.jsonp && (p = "jsonp"), P.resource(this, c, m.httpConfig, m.headers, m.params, a, this[b.restangularFields.etag], i)[p]().then(function(c) {
                var d = c.data,
                    e = c.config.params,
                    f = x(d, i, k, j, c, h);
                if ((_.isUndefined(f) || "" === f) && (f = []), !_.isArray(f))
                  throw new Error("Response for getList SHOULD be an array and not an object or something else");
                var l = _.map(f, function(c) {
                  return g[b.restangularFields.restangularCollection] ? s(g[b.restangularFields.parentResource], c, g[b.restangularFields.route], !0, f) : s(g, c, a, !0, f);
                });
                l = _.extend(f, l), g[b.restangularFields.restangularCollection] ? o(h, c, t(g[b.restangularFields.parentResource], l, g[b.restangularFields.route], !0, e), n) : o(h, c, t(g, l, a, !0, e), n);
              }, function(a) {
                304 === a.status && g[b.restangularFields.restangularCollection] ? o(h, a, g, n) : b.errorInterceptor(a, h) !== !1 && h.reject(a);
              }), l(h.promise, !0, n);
            }
            function z(a) {
              return this[b.restangularFields.httpConfig] = a, this;
            }
            function A(a, c) {
              return this[b.restangularFields.fromServer] ? this[b.restangularFields.put](a, c) : _.bind(B, this)("post", void 0, a, void 0, c);
            }
            function B(a, e, f, g, h) {
              var i = this,
                  j = d.defer(),
                  k = f || {},
                  m = e || this[b.restangularFields.route],
                  n = P.fetchUrl(this, e),
                  q = g || this,
                  r = q[b.restangularFields.etag] || ("post" != a ? this[b.restangularFields.etag] : null);
              _.isObject(q) && b.isRestangularized(q) && (q = p(q));
              var t = b.fullRequestInterceptor(q, a, m, n, h || {}, k || {}, this[b.restangularFields.httpConfig] || {}),
                  u = {};
              u = b.transformElem(u, !1, m, O);
              var v = function(c) {
                var d = c.data,
                    f = c.config.params,
                    g = x(d, a, m, n, c, j);
                g ? "post" !== a || i[b.restangularFields.restangularCollection] ? (data = s(i[b.restangularFields.parentResource], g, i[b.restangularFields.route], !0, null, f), data[b.restangularFields.singleOne] = i[b.restangularFields.singleOne], o(j, c, data, u)) : o(j, c, s(i, g, e, !0, null, f), u) : o(j, c, void 0, u);
              },
                  w = function(c) {
                    304 === c.status && b.isSafe(a) ? o(j, c, i, u) : b.errorInterceptor(c, j) !== !1 && j.reject(c);
                  },
                  y = a,
                  z = _.extend({}, t.headers),
                  A = b.isOverridenMethod(a);
              return A ? (y = "post", z = _.extend(z, {"X-HTTP-Method-Override": "remove" === a ? "DELETE" : a})) : b.jsonp && "get" === y && (y = "jsonp"), b.isSafe(a) ? A ? P.resource(this, c, t.httpConfig, z, t.params, e, r, y)[y]({}).then(v, w) : P.resource(this, c, t.httpConfig, z, t.params, e, r, y)[y]().then(v, w) : P.resource(this, c, t.httpConfig, z, t.params, e, r, y)[y](t.element).then(v, w), l(j.promise, !1, u);
            }
            function C(a, b) {
              return _.bind(B, this)("get", void 0, a, void 0, b);
            }
            function D(a, b) {
              return _.bind(B, this)("remove", void 0, a, void 0, b);
            }
            function E(a, b) {
              return _.bind(B, this)("put", void 0, a, void 0, b);
            }
            function F(a, b, c, d) {
              return _.bind(B, this)("post", a, c, b, d);
            }
            function G(a, b) {
              return _.bind(B, this)("head", void 0, a, void 0, b);
            }
            function H(a, b) {
              return _.bind(B, this)("trace", void 0, a, void 0, b);
            }
            function I(a, b) {
              return _.bind(B, this)("options", void 0, a, void 0, b);
            }
            function J(a, b, c) {
              return _.bind(B, this)("patch", void 0, b, a, c);
            }
            function K(a, b, c, d, e) {
              return _.bind(B, this)(a, b, c, e, d);
            }
            function L(a, c, d, e, f, g) {
              var h;
              h = "getList" === c ? _.bind(y, this, d) : _.bind(K, this, c, d);
              var i = function(a, b, c) {
                var d = _.defaults({
                  params: a,
                  headers: b,
                  elem: c
                }, {
                  params: e,
                  headers: f,
                  elem: g
                });
                return h(d.params, d.headers, d.elem);
              };
              this[a] = b.isSafe(c) ? i : function(a, b, c) {
                return i(b, c, a);
              };
            }
            function M(c) {
              var d = angular.copy(_.omit(b, "configuration"));
              return a.init(d, d), c(d), e(d);
            }
            function N(a, b) {
              var c = {},
                  d = (b || O).all(a);
              return c.one = _.bind(g, b || O, b, a), c.post = _.bind(d.post, d), c.getList = _.bind(d.getList, d), c;
            }
            var O = {},
                P = new b.urlCreatorFactory[b.urlCreator];
            return P.setConfig(b), a.init(O, b), O.copy = _.bind(r, O), O.service = _.bind(N, O), O.withConfig = _.bind(M, O), O.one = _.bind(g, O, null), O.all = _.bind(h, O, null), O.several = _.bind(i, O, null), O.oneUrl = _.bind(j, O, null), O.allUrl = _.bind(k, O, null), O.stripRestangular = _.bind(p, O), O.restangularizeElement = _.bind(s, O), O.restangularizeCollection = _.bind(u, O), O;
          }
          return e(b);
        }];
      });
    }();
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



System.register("github:angular-ui/bootstrap-bower@0.12.0/ui-bootstrap-tpls", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]);
    angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]);
    angular.module('ui.bootstrap.transition', []).factory('$transition', ['$q', '$timeout', '$rootScope', function($q, $timeout, $rootScope) {
      var $transition = function(element, trigger, options) {
        options = options || {};
        var deferred = $q.defer();
        var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];
        var transitionEndHandler = function(event) {
          $rootScope.$apply(function() {
            element.unbind(endEventName, transitionEndHandler);
            deferred.resolve(element);
          });
        };
        if (endEventName) {
          element.bind(endEventName, transitionEndHandler);
        }
        $timeout(function() {
          if (angular.isString(trigger)) {
            element.addClass(trigger);
          } else if (angular.isFunction(trigger)) {
            trigger(element);
          } else if (angular.isObject(trigger)) {
            element.css(trigger);
          }
          if (!endEventName) {
            deferred.resolve(element);
          }
        });
        deferred.promise.cancel = function() {
          if (endEventName) {
            element.unbind(endEventName, transitionEndHandler);
          }
          deferred.reject('Transition cancelled');
        };
        return deferred.promise;
      };
      var transElement = document.createElement('trans');
      var transitionEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'transition': 'transitionend'
      };
      var animationEndEventNames = {
        'WebkitTransition': 'webkitAnimationEnd',
        'MozTransition': 'animationend',
        'OTransition': 'oAnimationEnd',
        'transition': 'animationend'
      };
      function findEndEventName(endEventNames) {
        for (var name in endEventNames) {
          if (transElement.style[name] !== undefined) {
            return endEventNames[name];
          }
        }
      }
      $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
      $transition.animationEndEventName = findEndEventName(animationEndEventNames);
      return $transition;
    }]);
    angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition']).directive('collapse', ['$transition', function($transition) {
      return {link: function(scope, element, attrs) {
          var initialAnimSkip = true;
          var currentTransition;
          function doTransition(change) {
            var newTransition = $transition(element, change);
            if (currentTransition) {
              currentTransition.cancel();
            }
            currentTransition = newTransition;
            newTransition.then(newTransitionDone, newTransitionDone);
            return newTransition;
            function newTransitionDone() {
              if (currentTransition === newTransition) {
                currentTransition = undefined;
              }
            }
          }
          function expand() {
            if (initialAnimSkip) {
              initialAnimSkip = false;
              expandDone();
            } else {
              element.removeClass('collapse').addClass('collapsing');
              doTransition({height: element[0].scrollHeight + 'px'}).then(expandDone);
            }
          }
          function expandDone() {
            element.removeClass('collapsing');
            element.addClass('collapse in');
            element.css({height: 'auto'});
          }
          function collapse() {
            if (initialAnimSkip) {
              initialAnimSkip = false;
              collapseDone();
              element.css({height: 0});
            } else {
              element.css({height: element[0].scrollHeight + 'px'});
              var x = element[0].offsetWidth;
              element.removeClass('collapse in').addClass('collapsing');
              doTransition({height: 0}).then(collapseDone);
            }
          }
          function collapseDone() {
            element.removeClass('collapsing');
            element.addClass('collapse');
          }
          scope.$watch(attrs.collapse, function(shouldCollapse) {
            if (shouldCollapse) {
              collapse();
            } else {
              expand();
            }
          });
        }};
    }]);
    angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('accordionConfig', {closeOthers: true}).controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function($scope, $attrs, accordionConfig) {
      this.groups = [];
      this.closeOthers = function(openGroup) {
        var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
        if (closeOthers) {
          angular.forEach(this.groups, function(group) {
            if (group !== openGroup) {
              group.isOpen = false;
            }
          });
        }
      };
      this.addGroup = function(groupScope) {
        var that = this;
        this.groups.push(groupScope);
        groupScope.$on('$destroy', function(event) {
          that.removeGroup(groupScope);
        });
      };
      this.removeGroup = function(group) {
        var index = this.groups.indexOf(group);
        if (index !== -1) {
          this.groups.splice(index, 1);
        }
      };
    }]).directive('accordion', function() {
      return {
        restrict: 'EA',
        controller: 'AccordionController',
        transclude: true,
        replace: false,
        templateUrl: 'template/accordion/accordion.html'
      };
    }).directive('accordionGroup', function() {
      return {
        require: '^accordion',
        restrict: 'EA',
        transclude: true,
        replace: true,
        templateUrl: 'template/accordion/accordion-group.html',
        scope: {
          heading: '@',
          isOpen: '=?',
          isDisabled: '=?'
        },
        controller: function() {
          this.setHeading = function(element) {
            this.heading = element;
          };
        },
        link: function(scope, element, attrs, accordionCtrl) {
          accordionCtrl.addGroup(scope);
          scope.$watch('isOpen', function(value) {
            if (value) {
              accordionCtrl.closeOthers(scope);
            }
          });
          scope.toggleOpen = function() {
            if (!scope.isDisabled) {
              scope.isOpen = !scope.isOpen;
            }
          };
        }
      };
    }).directive('accordionHeading', function() {
      return {
        restrict: 'EA',
        transclude: true,
        template: '',
        replace: true,
        require: '^accordionGroup',
        link: function(scope, element, attr, accordionGroupCtrl, transclude) {
          accordionGroupCtrl.setHeading(transclude(scope, function() {}));
        }
      };
    }).directive('accordionTransclude', function() {
      return {
        require: '^accordionGroup',
        link: function(scope, element, attr, controller) {
          scope.$watch(function() {
            return controller[attr.accordionTransclude];
          }, function(heading) {
            if (heading) {
              element.html('');
              element.append(heading);
            }
          });
        }
      };
    });
    angular.module('ui.bootstrap.alert', []).controller('AlertController', ['$scope', '$attrs', function($scope, $attrs) {
      $scope.closeable = 'close' in $attrs;
      this.close = $scope.close;
    }]).directive('alert', function() {
      return {
        restrict: 'EA',
        controller: 'AlertController',
        templateUrl: 'template/alert/alert.html',
        transclude: true,
        replace: true,
        scope: {
          type: '@',
          close: '&'
        }
      };
    }).directive('dismissOnTimeout', ['$timeout', function($timeout) {
      return {
        require: 'alert',
        link: function(scope, element, attrs, alertCtrl) {
          $timeout(function() {
            alertCtrl.close();
          }, parseInt(attrs.dismissOnTimeout, 10));
        }
      };
    }]);
    angular.module('ui.bootstrap.bindHtml', []).directive('bindHtmlUnsafe', function() {
      return function(scope, element, attr) {
        element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
        scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
          element.html(value || '');
        });
      };
    });
    angular.module('ui.bootstrap.buttons', []).constant('buttonConfig', {
      activeClass: 'active',
      toggleEvent: 'click'
    }).controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
      this.activeClass = buttonConfig.activeClass || 'active';
      this.toggleEvent = buttonConfig.toggleEvent || 'click';
    }]).directive('btnRadio', function() {
      return {
        require: ['btnRadio', 'ngModel'],
        controller: 'ButtonsController',
        link: function(scope, element, attrs, ctrls) {
          var buttonsCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          ngModelCtrl.$render = function() {
            element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
          };
          element.bind(buttonsCtrl.toggleEvent, function() {
            var isActive = element.hasClass(buttonsCtrl.activeClass);
            if (!isActive || angular.isDefined(attrs.uncheckable)) {
              scope.$apply(function() {
                ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
                ngModelCtrl.$render();
              });
            }
          });
        }
      };
    }).directive('btnCheckbox', function() {
      return {
        require: ['btnCheckbox', 'ngModel'],
        controller: 'ButtonsController',
        link: function(scope, element, attrs, ctrls) {
          var buttonsCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          function getTrueValue() {
            return getCheckboxValue(attrs.btnCheckboxTrue, true);
          }
          function getFalseValue() {
            return getCheckboxValue(attrs.btnCheckboxFalse, false);
          }
          function getCheckboxValue(attributeValue, defaultValue) {
            var val = scope.$eval(attributeValue);
            return angular.isDefined(val) ? val : defaultValue;
          }
          ngModelCtrl.$render = function() {
            element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
          };
          element.bind(buttonsCtrl.toggleEvent, function() {
            scope.$apply(function() {
              ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
              ngModelCtrl.$render();
            });
          });
        }
      };
    });
    angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition']).controller('CarouselController', ['$scope', '$timeout', '$interval', '$transition', function($scope, $timeout, $interval, $transition) {
      var self = this,
          slides = self.slides = $scope.slides = [],
          currentIndex = -1,
          currentInterval,
          isPlaying;
      self.currentSlide = null;
      var destroyed = false;
      self.select = $scope.select = function(nextSlide, direction) {
        var nextIndex = slides.indexOf(nextSlide);
        if (direction === undefined) {
          direction = nextIndex > currentIndex ? 'next' : 'prev';
        }
        if (nextSlide && nextSlide !== self.currentSlide) {
          if ($scope.$currentTransition) {
            $scope.$currentTransition.cancel();
            $timeout(goNext);
          } else {
            goNext();
          }
        }
        function goNext() {
          if (destroyed) {
            return;
          }
          if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) {
            nextSlide.$element.addClass(direction);
            var reflow = nextSlide.$element[0].offsetWidth;
            angular.forEach(slides, function(slide) {
              angular.extend(slide, {
                direction: '',
                entering: false,
                leaving: false,
                active: false
              });
            });
            angular.extend(nextSlide, {
              direction: direction,
              active: true,
              entering: true
            });
            angular.extend(self.currentSlide || {}, {
              direction: direction,
              leaving: true
            });
            $scope.$currentTransition = $transition(nextSlide.$element, {});
            (function(next, current) {
              $scope.$currentTransition.then(function() {
                transitionDone(next, current);
              }, function() {
                transitionDone(next, current);
              });
            }(nextSlide, self.currentSlide));
          } else {
            transitionDone(nextSlide, self.currentSlide);
          }
          self.currentSlide = nextSlide;
          currentIndex = nextIndex;
          restartTimer();
        }
        function transitionDone(next, current) {
          angular.extend(next, {
            direction: '',
            active: true,
            leaving: false,
            entering: false
          });
          angular.extend(current || {}, {
            direction: '',
            active: false,
            leaving: false,
            entering: false
          });
          $scope.$currentTransition = null;
        }
      };
      $scope.$on('$destroy', function() {
        destroyed = true;
      });
      self.indexOfSlide = function(slide) {
        return slides.indexOf(slide);
      };
      $scope.next = function() {
        var newIndex = (currentIndex + 1) % slides.length;
        if (!$scope.$currentTransition) {
          return self.select(slides[newIndex], 'next');
        }
      };
      $scope.prev = function() {
        var newIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
        if (!$scope.$currentTransition) {
          return self.select(slides[newIndex], 'prev');
        }
      };
      $scope.isActive = function(slide) {
        return self.currentSlide === slide;
      };
      $scope.$watch('interval', restartTimer);
      $scope.$on('$destroy', resetTimer);
      function restartTimer() {
        resetTimer();
        var interval = +$scope.interval;
        if (!isNaN(interval) && interval > 0) {
          currentInterval = $interval(timerFn, interval);
        }
      }
      function resetTimer() {
        if (currentInterval) {
          $interval.cancel(currentInterval);
          currentInterval = null;
        }
      }
      function timerFn() {
        var interval = +$scope.interval;
        if (isPlaying && !isNaN(interval) && interval > 0) {
          $scope.next();
        } else {
          $scope.pause();
        }
      }
      $scope.play = function() {
        if (!isPlaying) {
          isPlaying = true;
          restartTimer();
        }
      };
      $scope.pause = function() {
        if (!$scope.noPause) {
          isPlaying = false;
          resetTimer();
        }
      };
      self.addSlide = function(slide, element) {
        slide.$element = element;
        slides.push(slide);
        if (slides.length === 1 || slide.active) {
          self.select(slides[slides.length - 1]);
          if (slides.length == 1) {
            $scope.play();
          }
        } else {
          slide.active = false;
        }
      };
      self.removeSlide = function(slide) {
        var index = slides.indexOf(slide);
        slides.splice(index, 1);
        if (slides.length > 0 && slide.active) {
          if (index >= slides.length) {
            self.select(slides[index - 1]);
          } else {
            self.select(slides[index]);
          }
        } else if (currentIndex > index) {
          currentIndex--;
        }
      };
    }]).directive('carousel', [function() {
      return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        controller: 'CarouselController',
        require: 'carousel',
        templateUrl: 'template/carousel/carousel.html',
        scope: {
          interval: '=',
          noTransition: '=',
          noPause: '='
        }
      };
    }]).directive('slide', function() {
      return {
        require: '^carousel',
        restrict: 'EA',
        transclude: true,
        replace: true,
        templateUrl: 'template/carousel/slide.html',
        scope: {active: '=?'},
        link: function(scope, element, attrs, carouselCtrl) {
          carouselCtrl.addSlide(scope, element);
          scope.$on('$destroy', function() {
            carouselCtrl.removeSlide(scope);
          });
          scope.$watch('active', function(active) {
            if (active) {
              carouselCtrl.select(scope);
            }
          });
        }
      };
    });
    angular.module('ui.bootstrap.dateparser', []).service('dateParser', ['$locale', 'orderByFilter', function($locale, orderByFilter) {
      this.parsers = {};
      var formatCodeToRegex = {
        'yyyy': {
          regex: '\\d{4}',
          apply: function(value) {
            this.year = +value;
          }
        },
        'yy': {
          regex: '\\d{2}',
          apply: function(value) {
            this.year = +value + 2000;
          }
        },
        'y': {
          regex: '\\d{1,4}',
          apply: function(value) {
            this.year = +value;
          }
        },
        'MMMM': {
          regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
          apply: function(value) {
            this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value);
          }
        },
        'MMM': {
          regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
          apply: function(value) {
            this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value);
          }
        },
        'MM': {
          regex: '0[1-9]|1[0-2]',
          apply: function(value) {
            this.month = value - 1;
          }
        },
        'M': {
          regex: '[1-9]|1[0-2]',
          apply: function(value) {
            this.month = value - 1;
          }
        },
        'dd': {
          regex: '[0-2][0-9]{1}|3[0-1]{1}',
          apply: function(value) {
            this.date = +value;
          }
        },
        'd': {
          regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
          apply: function(value) {
            this.date = +value;
          }
        },
        'EEEE': {regex: $locale.DATETIME_FORMATS.DAY.join('|')},
        'EEE': {regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')}
      };
      function createParser(format) {
        var map = [],
            regex = format.split('');
        angular.forEach(formatCodeToRegex, function(data, code) {
          var index = format.indexOf(code);
          if (index > -1) {
            format = format.split('');
            regex[index] = '(' + data.regex + ')';
            format[index] = '$';
            for (var i = index + 1,
                n = index + code.length; i < n; i++) {
              regex[i] = '';
              format[i] = '$';
            }
            format = format.join('');
            map.push({
              index: index,
              apply: data.apply
            });
          }
        });
        return {
          regex: new RegExp('^' + regex.join('') + '$'),
          map: orderByFilter(map, 'index')
        };
      }
      this.parse = function(input, format) {
        if (!angular.isString(input) || !format) {
          return input;
        }
        format = $locale.DATETIME_FORMATS[format] || format;
        if (!this.parsers[format]) {
          this.parsers[format] = createParser(format);
        }
        var parser = this.parsers[format],
            regex = parser.regex,
            map = parser.map,
            results = input.match(regex);
        if (results && results.length) {
          var fields = {
            year: 1900,
            month: 0,
            date: 1,
            hours: 0
          },
              dt;
          for (var i = 1,
              n = results.length; i < n; i++) {
            var mapper = map[i - 1];
            if (mapper.apply) {
              mapper.apply.call(fields, results[i]);
            }
          }
          if (isValid(fields.year, fields.month, fields.date)) {
            dt = new Date(fields.year, fields.month, fields.date, fields.hours);
          }
          return dt;
        }
      };
      function isValid(year, month, date) {
        if (month === 1 && date > 28) {
          return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
        }
        if (month === 3 || month === 5 || month === 8 || month === 10) {
          return date < 31;
        }
        return true;
      }
    }]);
    angular.module('ui.bootstrap.position', []).factory('$position', ['$document', '$window', function($document, $window) {
      function getStyle(el, cssprop) {
        if (el.currentStyle) {
          return el.currentStyle[cssprop];
        } else if ($window.getComputedStyle) {
          return $window.getComputedStyle(el)[cssprop];
        }
        return el.style[cssprop];
      }
      function isStaticPositioned(element) {
        return (getStyle(element, 'position') || 'static') === 'static';
      }
      var parentOffsetEl = function(element) {
        var docDomEl = $document[0];
        var offsetParent = element.offsetParent || docDomEl;
        while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent)) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docDomEl;
      };
      return {
        position: function(element) {
          var elBCR = this.offset(element);
          var offsetParentBCR = {
            top: 0,
            left: 0
          };
          var offsetParentEl = parentOffsetEl(element[0]);
          if (offsetParentEl != $document[0]) {
            offsetParentBCR = this.offset(angular.element(offsetParentEl));
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
          }
          var boundingClientRect = element[0].getBoundingClientRect();
          return {
            width: boundingClientRect.width || element.prop('offsetWidth'),
            height: boundingClientRect.height || element.prop('offsetHeight'),
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
          };
        },
        offset: function(element) {
          var boundingClientRect = element[0].getBoundingClientRect();
          return {
            width: boundingClientRect.width || element.prop('offsetWidth'),
            height: boundingClientRect.height || element.prop('offsetHeight'),
            top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
            left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
          };
        },
        positionElements: function(hostEl, targetEl, positionStr, appendToBody) {
          var positionStrParts = positionStr.split('-');
          var pos0 = positionStrParts[0],
              pos1 = positionStrParts[1] || 'center';
          var hostElPos,
              targetElWidth,
              targetElHeight,
              targetElPos;
          hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
          targetElWidth = targetEl.prop('offsetWidth');
          targetElHeight = targetEl.prop('offsetHeight');
          var shiftWidth = {
            center: function() {
              return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function() {
              return hostElPos.left;
            },
            right: function() {
              return hostElPos.left + hostElPos.width;
            }
          };
          var shiftHeight = {
            center: function() {
              return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function() {
              return hostElPos.top;
            },
            bottom: function() {
              return hostElPos.top + hostElPos.height;
            }
          };
          switch (pos0) {
            case 'right':
              targetElPos = {
                top: shiftHeight[pos1](),
                left: shiftWidth[pos0]()
              };
              break;
            case 'left':
              targetElPos = {
                top: shiftHeight[pos1](),
                left: hostElPos.left - targetElWidth
              };
              break;
            case 'bottom':
              targetElPos = {
                top: shiftHeight[pos0](),
                left: shiftWidth[pos1]()
              };
              break;
            default:
              targetElPos = {
                top: hostElPos.top - targetElHeight,
                left: shiftWidth[pos1]()
              };
              break;
          }
          return targetElPos;
        }
      };
    }]);
    angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position']).constant('datepickerConfig', {
      formatDay: 'dd',
      formatMonth: 'MMMM',
      formatYear: 'yyyy',
      formatDayHeader: 'EEE',
      formatDayTitle: 'MMMM yyyy',
      formatMonthTitle: 'yyyy',
      datepickerMode: 'day',
      minMode: 'day',
      maxMode: 'year',
      showWeeks: true,
      startingDay: 0,
      yearRange: 20,
      minDate: null,
      maxDate: null
    }).controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$timeout', '$log', 'dateFilter', 'datepickerConfig', function($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
      var self = this,
          ngModelCtrl = {$setViewValue: angular.noop};
      this.modes = ['day', 'month', 'year'];
      angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle', 'minMode', 'maxMode', 'showWeeks', 'startingDay', 'yearRange'], function(key, index) {
        self[key] = angular.isDefined($attrs[key]) ? (index < 8 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
      });
      angular.forEach(['minDate', 'maxDate'], function(key) {
        if ($attrs[key]) {
          $scope.$parent.$watch($parse($attrs[key]), function(value) {
            self[key] = value ? new Date(value) : null;
            self.refreshView();
          });
        } else {
          self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
        }
      });
      $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
      $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);
      this.activeDate = angular.isDefined($attrs.initDate) ? $scope.$parent.$eval($attrs.initDate) : new Date();
      $scope.isActive = function(dateObject) {
        if (self.compare(dateObject.date, self.activeDate) === 0) {
          $scope.activeDateId = dateObject.uid;
          return true;
        }
        return false;
      };
      this.init = function(ngModelCtrl_) {
        ngModelCtrl = ngModelCtrl_;
        ngModelCtrl.$render = function() {
          self.render();
        };
      };
      this.render = function() {
        if (ngModelCtrl.$modelValue) {
          var date = new Date(ngModelCtrl.$modelValue),
              isValid = !isNaN(date);
          if (isValid) {
            this.activeDate = date;
          } else {
            $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
          }
          ngModelCtrl.$setValidity('date', isValid);
        }
        this.refreshView();
      };
      this.refreshView = function() {
        if (this.element) {
          this._refreshView();
          var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
          ngModelCtrl.$setValidity('date-disabled', !date || (this.element && !this.isDisabled(date)));
        }
      };
      this.createDateObject = function(date, format) {
        var model = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
        return {
          date: date,
          label: dateFilter(date, format),
          selected: model && this.compare(date, model) === 0,
          disabled: this.isDisabled(date),
          current: this.compare(date, new Date()) === 0
        };
      };
      this.isDisabled = function(date) {
        return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({
          date: date,
          mode: $scope.datepickerMode
        })));
      };
      this.split = function(arr, size) {
        var arrays = [];
        while (arr.length > 0) {
          arrays.push(arr.splice(0, size));
        }
        return arrays;
      };
      $scope.select = function(date) {
        if ($scope.datepickerMode === self.minMode) {
          var dt = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
          dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
          ngModelCtrl.$setViewValue(dt);
          ngModelCtrl.$render();
        } else {
          self.activeDate = date;
          $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
        }
      };
      $scope.move = function(direction) {
        var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
            month = self.activeDate.getMonth() + direction * (self.step.months || 0);
        self.activeDate.setFullYear(year, month, 1);
        self.refreshView();
      };
      $scope.toggleMode = function(direction) {
        direction = direction || 1;
        if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
          return;
        }
        $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
      };
      $scope.keys = {
        13: 'enter',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
      };
      var focusElement = function() {
        $timeout(function() {
          self.element[0].focus();
        }, 0, false);
      };
      $scope.$on('datepicker.focus', focusElement);
      $scope.keydown = function(evt) {
        var key = $scope.keys[evt.which];
        if (!key || evt.shiftKey || evt.altKey) {
          return;
        }
        evt.preventDefault();
        evt.stopPropagation();
        if (key === 'enter' || key === 'space') {
          if (self.isDisabled(self.activeDate)) {
            return;
          }
          $scope.select(self.activeDate);
          focusElement();
        } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
          $scope.toggleMode(key === 'up' ? 1 : -1);
          focusElement();
        } else {
          self.handleKeyDown(key, evt);
          self.refreshView();
        }
      };
    }]).directive('datepicker', function() {
      return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'template/datepicker/datepicker.html',
        scope: {
          datepickerMode: '=?',
          dateDisabled: '&'
        },
        require: ['datepicker', '?^ngModel'],
        controller: 'DatepickerController',
        link: function(scope, element, attrs, ctrls) {
          var datepickerCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          if (ngModelCtrl) {
            datepickerCtrl.init(ngModelCtrl);
          }
        }
      };
    }).directive('daypicker', ['dateFilter', function(dateFilter) {
      return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'template/datepicker/day.html',
        require: '^datepicker',
        link: function(scope, element, attrs, ctrl) {
          scope.showWeeks = ctrl.showWeeks;
          ctrl.step = {months: 1};
          ctrl.element = element;
          var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          function getDaysInMonth(year, month) {
            return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
          }
          function getDates(startDate, n) {
            var dates = new Array(n),
                current = new Date(startDate),
                i = 0;
            current.setHours(12);
            while (i < n) {
              dates[i++] = new Date(current);
              current.setDate(current.getDate() + 1);
            }
            return dates;
          }
          ctrl._refreshView = function() {
            var year = ctrl.activeDate.getFullYear(),
                month = ctrl.activeDate.getMonth(),
                firstDayOfMonth = new Date(year, month, 1),
                difference = ctrl.startingDay - firstDayOfMonth.getDay(),
                numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : -difference,
                firstDate = new Date(firstDayOfMonth);
            if (numDisplayedFromPreviousMonth > 0) {
              firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            var days = getDates(firstDate, 42);
            for (var i = 0; i < 42; i++) {
              days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
                secondary: days[i].getMonth() !== month,
                uid: scope.uniqueId + '-' + i
              });
            }
            scope.labels = new Array(7);
            for (var j = 0; j < 7; j++) {
              scope.labels[j] = {
                abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
                full: dateFilter(days[j].date, 'EEEE')
              };
            }
            scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
            scope.rows = ctrl.split(days, 7);
            if (scope.showWeeks) {
              scope.weekNumbers = [];
              var weekNumber = getISO8601WeekNumber(scope.rows[0][0].date),
                  numWeeks = scope.rows.length;
              while (scope.weekNumbers.push(weekNumber++) < numWeeks) {}
            }
          };
          ctrl.compare = function(date1, date2) {
            return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate()));
          };
          function getISO8601WeekNumber(date) {
            var checkDate = new Date(date);
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            var time = checkDate.getTime();
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
          }
          ctrl.handleKeyDown = function(key, evt) {
            var date = ctrl.activeDate.getDate();
            if (key === 'left') {
              date = date - 1;
            } else if (key === 'up') {
              date = date - 7;
            } else if (key === 'right') {
              date = date + 1;
            } else if (key === 'down') {
              date = date + 7;
            } else if (key === 'pageup' || key === 'pagedown') {
              var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? -1 : 1);
              ctrl.activeDate.setMonth(month, 1);
              date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
            } else if (key === 'home') {
              date = 1;
            } else if (key === 'end') {
              date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
            }
            ctrl.activeDate.setDate(date);
          };
          ctrl.refreshView();
        }
      };
    }]).directive('monthpicker', ['dateFilter', function(dateFilter) {
      return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'template/datepicker/month.html',
        require: '^datepicker',
        link: function(scope, element, attrs, ctrl) {
          ctrl.step = {years: 1};
          ctrl.element = element;
          ctrl._refreshView = function() {
            var months = new Array(12),
                year = ctrl.activeDate.getFullYear();
            for (var i = 0; i < 12; i++) {
              months[i] = angular.extend(ctrl.createDateObject(new Date(year, i, 1), ctrl.formatMonth), {uid: scope.uniqueId + '-' + i});
            }
            scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
            scope.rows = ctrl.split(months, 3);
          };
          ctrl.compare = function(date1, date2) {
            return new Date(date1.getFullYear(), date1.getMonth()) - new Date(date2.getFullYear(), date2.getMonth());
          };
          ctrl.handleKeyDown = function(key, evt) {
            var date = ctrl.activeDate.getMonth();
            if (key === 'left') {
              date = date - 1;
            } else if (key === 'up') {
              date = date - 3;
            } else if (key === 'right') {
              date = date + 1;
            } else if (key === 'down') {
              date = date + 3;
            } else if (key === 'pageup' || key === 'pagedown') {
              var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? -1 : 1);
              ctrl.activeDate.setFullYear(year);
            } else if (key === 'home') {
              date = 0;
            } else if (key === 'end') {
              date = 11;
            }
            ctrl.activeDate.setMonth(date);
          };
          ctrl.refreshView();
        }
      };
    }]).directive('yearpicker', ['dateFilter', function(dateFilter) {
      return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'template/datepicker/year.html',
        require: '^datepicker',
        link: function(scope, element, attrs, ctrl) {
          var range = ctrl.yearRange;
          ctrl.step = {years: range};
          ctrl.element = element;
          function getStartingYear(year) {
            return parseInt((year - 1) / range, 10) * range + 1;
          }
          ctrl._refreshView = function() {
            var years = new Array(range);
            for (var i = 0,
                start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++) {
              years[i] = angular.extend(ctrl.createDateObject(new Date(start + i, 0, 1), ctrl.formatYear), {uid: scope.uniqueId + '-' + i});
            }
            scope.title = [years[0].label, years[range - 1].label].join(' - ');
            scope.rows = ctrl.split(years, 5);
          };
          ctrl.compare = function(date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
          };
          ctrl.handleKeyDown = function(key, evt) {
            var date = ctrl.activeDate.getFullYear();
            if (key === 'left') {
              date = date - 1;
            } else if (key === 'up') {
              date = date - 5;
            } else if (key === 'right') {
              date = date + 1;
            } else if (key === 'down') {
              date = date + 5;
            } else if (key === 'pageup' || key === 'pagedown') {
              date += (key === 'pageup' ? -1 : 1) * ctrl.step.years;
            } else if (key === 'home') {
              date = getStartingYear(ctrl.activeDate.getFullYear());
            } else if (key === 'end') {
              date = getStartingYear(ctrl.activeDate.getFullYear()) + range - 1;
            }
            ctrl.activeDate.setFullYear(date);
          };
          ctrl.refreshView();
        }
      };
    }]).constant('datepickerPopupConfig', {
      datepickerPopup: 'yyyy-MM-dd',
      currentText: 'Today',
      clearText: 'Clear',
      closeText: 'Done',
      closeOnDateSelection: true,
      appendToBody: false,
      showButtonBar: true
    }).directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig', function($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
      return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
          isOpen: '=?',
          currentText: '@',
          clearText: '@',
          closeText: '@',
          dateDisabled: '&'
        },
        link: function(scope, element, attrs, ngModel) {
          var dateFormat,
              closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
              appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
          scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
          scope.getText = function(key) {
            return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
          };
          attrs.$observe('datepickerPopup', function(value) {
            dateFormat = value || datepickerPopupConfig.datepickerPopup;
            ngModel.$render();
          });
          var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
          popupEl.attr({
            'ng-model': 'date',
            'ng-change': 'dateSelection()'
          });
          function cameltoDash(string) {
            return string.replace(/([A-Z])/g, function($1) {
              return '-' + $1.toLowerCase();
            });
          }
          var datepickerEl = angular.element(popupEl.children()[0]);
          if (attrs.datepickerOptions) {
            angular.forEach(scope.$parent.$eval(attrs.datepickerOptions), function(value, option) {
              datepickerEl.attr(cameltoDash(option), value);
            });
          }
          scope.watchData = {};
          angular.forEach(['minDate', 'maxDate', 'datepickerMode'], function(key) {
            if (attrs[key]) {
              var getAttribute = $parse(attrs[key]);
              scope.$parent.$watch(getAttribute, function(value) {
                scope.watchData[key] = value;
              });
              datepickerEl.attr(cameltoDash(key), 'watchData.' + key);
              if (key === 'datepickerMode') {
                var setAttribute = getAttribute.assign;
                scope.$watch('watchData.' + key, function(value, oldvalue) {
                  if (value !== oldvalue) {
                    setAttribute(scope.$parent, value);
                  }
                });
              }
            }
          });
          if (attrs.dateDisabled) {
            datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
          }
          function parseDate(viewValue) {
            if (!viewValue) {
              ngModel.$setValidity('date', true);
              return null;
            } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
              ngModel.$setValidity('date', true);
              return viewValue;
            } else if (angular.isString(viewValue)) {
              var date = dateParser.parse(viewValue, dateFormat) || new Date(viewValue);
              if (isNaN(date)) {
                ngModel.$setValidity('date', false);
                return undefined;
              } else {
                ngModel.$setValidity('date', true);
                return date;
              }
            } else {
              ngModel.$setValidity('date', false);
              return undefined;
            }
          }
          ngModel.$parsers.unshift(parseDate);
          scope.dateSelection = function(dt) {
            if (angular.isDefined(dt)) {
              scope.date = dt;
            }
            ngModel.$setViewValue(scope.date);
            ngModel.$render();
            if (closeOnDateSelection) {
              scope.isOpen = false;
              element[0].focus();
            }
          };
          element.bind('input change keyup', function() {
            scope.$apply(function() {
              scope.date = ngModel.$modelValue;
            });
          });
          ngModel.$render = function() {
            var date = ngModel.$viewValue ? dateFilter(ngModel.$viewValue, dateFormat) : '';
            element.val(date);
            scope.date = parseDate(ngModel.$modelValue);
          };
          var documentClickBind = function(event) {
            if (scope.isOpen && event.target !== element[0]) {
              scope.$apply(function() {
                scope.isOpen = false;
              });
            }
          };
          var keydown = function(evt, noApply) {
            scope.keydown(evt);
          };
          element.bind('keydown', keydown);
          scope.keydown = function(evt) {
            if (evt.which === 27) {
              evt.preventDefault();
              evt.stopPropagation();
              scope.close();
            } else if (evt.which === 40 && !scope.isOpen) {
              scope.isOpen = true;
            }
          };
          scope.$watch('isOpen', function(value) {
            if (value) {
              scope.$broadcast('datepicker.focus');
              scope.position = appendToBody ? $position.offset(element) : $position.position(element);
              scope.position.top = scope.position.top + element.prop('offsetHeight');
              $document.bind('click', documentClickBind);
            } else {
              $document.unbind('click', documentClickBind);
            }
          });
          scope.select = function(date) {
            if (date === 'today') {
              var today = new Date();
              if (angular.isDate(ngModel.$modelValue)) {
                date = new Date(ngModel.$modelValue);
                date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
              } else {
                date = new Date(today.setHours(0, 0, 0, 0));
              }
            }
            scope.dateSelection(date);
          };
          scope.close = function() {
            scope.isOpen = false;
            element[0].focus();
          };
          var $popup = $compile(popupEl)(scope);
          popupEl.remove();
          if (appendToBody) {
            $document.find('body').append($popup);
          } else {
            element.after($popup);
          }
          scope.$on('$destroy', function() {
            $popup.remove();
            element.unbind('keydown', keydown);
            $document.unbind('click', documentClickBind);
          });
        }
      };
    }]).directive('datepickerPopupWrap', function() {
      return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        templateUrl: 'template/datepicker/popup.html',
        link: function(scope, element, attrs) {
          element.bind('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
          });
        }
      };
    });
    angular.module('ui.bootstrap.dropdown', []).constant('dropdownConfig', {openClass: 'open'}).service('dropdownService', ['$document', function($document) {
      var openScope = null;
      this.open = function(dropdownScope) {
        if (!openScope) {
          $document.bind('click', closeDropdown);
          $document.bind('keydown', escapeKeyBind);
        }
        if (openScope && openScope !== dropdownScope) {
          openScope.isOpen = false;
        }
        openScope = dropdownScope;
      };
      this.close = function(dropdownScope) {
        if (openScope === dropdownScope) {
          openScope = null;
          $document.unbind('click', closeDropdown);
          $document.unbind('keydown', escapeKeyBind);
        }
      };
      var closeDropdown = function(evt) {
        if (!openScope) {
          return;
        }
        var toggleElement = openScope.getToggleElement();
        if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
          return;
        }
        openScope.$apply(function() {
          openScope.isOpen = false;
        });
      };
      var escapeKeyBind = function(evt) {
        if (evt.which === 27) {
          openScope.focusToggleElement();
          closeDropdown();
        }
      };
    }]).controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate) {
      var self = this,
          scope = $scope.$new(),
          openClass = dropdownConfig.openClass,
          getIsOpen,
          setIsOpen = angular.noop,
          toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;
      this.init = function(element) {
        self.$element = element;
        if ($attrs.isOpen) {
          getIsOpen = $parse($attrs.isOpen);
          setIsOpen = getIsOpen.assign;
          $scope.$watch(getIsOpen, function(value) {
            scope.isOpen = !!value;
          });
        }
      };
      this.toggle = function(open) {
        return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
      };
      this.isOpen = function() {
        return scope.isOpen;
      };
      scope.getToggleElement = function() {
        return self.toggleElement;
      };
      scope.focusToggleElement = function() {
        if (self.toggleElement) {
          self.toggleElement[0].focus();
        }
      };
      scope.$watch('isOpen', function(isOpen, wasOpen) {
        $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);
        if (isOpen) {
          scope.focusToggleElement();
          dropdownService.open(scope);
        } else {
          dropdownService.close(scope);
        }
        setIsOpen($scope, isOpen);
        if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
          toggleInvoker($scope, {open: !!isOpen});
        }
      });
      $scope.$on('$locationChangeSuccess', function() {
        scope.isOpen = false;
      });
      $scope.$on('$destroy', function() {
        scope.$destroy();
      });
    }]).directive('dropdown', function() {
      return {
        controller: 'DropdownController',
        link: function(scope, element, attrs, dropdownCtrl) {
          dropdownCtrl.init(element);
        }
      };
    }).directive('dropdownToggle', function() {
      return {
        require: '?^dropdown',
        link: function(scope, element, attrs, dropdownCtrl) {
          if (!dropdownCtrl) {
            return;
          }
          dropdownCtrl.toggleElement = element;
          var toggleDropdown = function(event) {
            event.preventDefault();
            if (!element.hasClass('disabled') && !attrs.disabled) {
              scope.$apply(function() {
                dropdownCtrl.toggle();
              });
            }
          };
          element.bind('click', toggleDropdown);
          element.attr({
            'aria-haspopup': true,
            'aria-expanded': false
          });
          scope.$watch(dropdownCtrl.isOpen, function(isOpen) {
            element.attr('aria-expanded', !!isOpen);
          });
          scope.$on('$destroy', function() {
            element.unbind('click', toggleDropdown);
          });
        }
      };
    });
    angular.module('ui.bootstrap.modal', ['ui.bootstrap.transition']).factory('$$stackedMap', function() {
      return {createNew: function() {
          var stack = [];
          return {
            add: function(key, value) {
              stack.push({
                key: key,
                value: value
              });
            },
            get: function(key) {
              for (var i = 0; i < stack.length; i++) {
                if (key == stack[i].key) {
                  return stack[i];
                }
              }
            },
            keys: function() {
              var keys = [];
              for (var i = 0; i < stack.length; i++) {
                keys.push(stack[i].key);
              }
              return keys;
            },
            top: function() {
              return stack[stack.length - 1];
            },
            remove: function(key) {
              var idx = -1;
              for (var i = 0; i < stack.length; i++) {
                if (key == stack[i].key) {
                  idx = i;
                  break;
                }
              }
              return stack.splice(idx, 1)[0];
            },
            removeTop: function() {
              return stack.splice(stack.length - 1, 1)[0];
            },
            length: function() {
              return stack.length;
            }
          };
        }};
    }).directive('modalBackdrop', ['$timeout', function($timeout) {
      return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'template/modal/backdrop.html',
        link: function(scope, element, attrs) {
          scope.backdropClass = attrs.backdropClass || '';
          scope.animate = false;
          $timeout(function() {
            scope.animate = true;
          });
        }
      };
    }]).directive('modalWindow', ['$modalStack', '$timeout', function($modalStack, $timeout) {
      return {
        restrict: 'EA',
        scope: {
          index: '@',
          animate: '='
        },
        replace: true,
        transclude: true,
        templateUrl: function(tElement, tAttrs) {
          return tAttrs.templateUrl || 'template/modal/window.html';
        },
        link: function(scope, element, attrs) {
          element.addClass(attrs.windowClass || '');
          scope.size = attrs.size;
          $timeout(function() {
            scope.animate = true;
            if (!element[0].querySelectorAll('[autofocus]').length) {
              element[0].focus();
            }
          });
          scope.close = function(evt) {
            var modal = $modalStack.getTop();
            if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && (evt.target === evt.currentTarget)) {
              evt.preventDefault();
              evt.stopPropagation();
              $modalStack.dismiss(modal.key, 'backdrop click');
            }
          };
        }
      };
    }]).directive('modalTransclude', function() {
      return {link: function($scope, $element, $attrs, controller, $transclude) {
          $transclude($scope.$parent, function(clone) {
            $element.empty();
            $element.append(clone);
          });
        }};
    }).factory('$modalStack', ['$transition', '$timeout', '$document', '$compile', '$rootScope', '$$stackedMap', function($transition, $timeout, $document, $compile, $rootScope, $$stackedMap) {
      var OPENED_MODAL_CLASS = 'modal-open';
      var backdropDomEl,
          backdropScope;
      var openedWindows = $$stackedMap.createNew();
      var $modalStack = {};
      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }
        return topBackdropIndex;
      }
      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
        if (backdropScope) {
          backdropScope.index = newBackdropIndex;
        }
      });
      function removeModalWindow(modalInstance) {
        var body = $document.find('body').eq(0);
        var modalWindow = openedWindows.get(modalInstance).value;
        openedWindows.remove(modalInstance);
        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, 300, function() {
          modalWindow.modalScope.$destroy();
          body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
          checkRemoveBackdrop();
        });
      }
      function checkRemoveBackdrop() {
        if (backdropDomEl && backdropIndex() == -1) {
          var backdropScopeRef = backdropScope;
          removeAfterAnimate(backdropDomEl, backdropScope, 150, function() {
            backdropScopeRef.$destroy();
            backdropScopeRef = null;
          });
          backdropDomEl = undefined;
          backdropScope = undefined;
        }
      }
      function removeAfterAnimate(domEl, scope, emulateTime, done) {
        scope.animate = false;
        var transitionEndEventName = $transition.transitionEndEventName;
        if (transitionEndEventName) {
          var timeout = $timeout(afterAnimating, emulateTime);
          domEl.bind(transitionEndEventName, function() {
            $timeout.cancel(timeout);
            afterAnimating();
            scope.$apply();
          });
        } else {
          $timeout(afterAnimating);
        }
        function afterAnimating() {
          if (afterAnimating.done) {
            return;
          }
          afterAnimating.done = true;
          domEl.remove();
          if (done) {
            done();
          }
        }
      }
      $document.bind('keydown', function(evt) {
        var modal;
        if (evt.which === 27) {
          modal = openedWindows.top();
          if (modal && modal.value.keyboard) {
            evt.preventDefault();
            $rootScope.$apply(function() {
              $modalStack.dismiss(modal.key, 'escape key press');
            });
          }
        }
      });
      $modalStack.open = function(modalInstance, modal) {
        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard
        });
        var body = $document.find('body').eq(0),
            currBackdropIndex = backdropIndex();
        if (currBackdropIndex >= 0 && !backdropDomEl) {
          backdropScope = $rootScope.$new(true);
          backdropScope.index = currBackdropIndex;
          var angularBackgroundDomEl = angular.element('<div modal-backdrop></div>');
          angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
          backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
          body.append(backdropDomEl);
        }
        var angularDomEl = angular.element('<div modal-window></div>');
        angularDomEl.attr({
          'template-url': modal.windowTemplateUrl,
          'window-class': modal.windowClass,
          'size': modal.size,
          'index': openedWindows.length() - 1,
          'animate': 'animate'
        }).html(modal.content);
        var modalDomEl = $compile(angularDomEl)(modal.scope);
        openedWindows.top().value.modalDomEl = modalDomEl;
        body.append(modalDomEl);
        body.addClass(OPENED_MODAL_CLASS);
      };
      $modalStack.close = function(modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.deferred.resolve(result);
          removeModalWindow(modalInstance);
        }
      };
      $modalStack.dismiss = function(modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.deferred.reject(reason);
          removeModalWindow(modalInstance);
        }
      };
      $modalStack.dismissAll = function(reason) {
        var topModal = this.getTop();
        while (topModal) {
          this.dismiss(topModal.key, reason);
          topModal = this.getTop();
        }
      };
      $modalStack.getTop = function() {
        return openedWindows.top();
      };
      return $modalStack;
    }]).provider('$modal', function() {
      var $modalProvider = {
        options: {
          backdrop: true,
          keyboard: true
        },
        $get: ['$injector', '$rootScope', '$q', '$http', '$templateCache', '$controller', '$modalStack', function($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {
          var $modal = {};
          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) : $http.get(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl, {cache: $templateCache}).then(function(result) {
              return result.data;
            });
          }
          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function(value) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }
          $modal.open = function(modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              close: function(result) {
                $modalStack.close(modalInstance, result);
              },
              dismiss: function(reason) {
                $modalStack.dismiss(modalInstance, reason);
              }
            };
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }
            var templateAndResolvePromise = $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));
            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {
              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;
              var ctrlInstance,
                  ctrlLocals = {};
              var resolveIter = 1;
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function(value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });
                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
                if (modalOptions.controllerAs) {
                  modalScope[modalOptions.controllerAs] = ctrlInstance;
                }
              }
              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                content: tplAndVars[0],
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                backdropClass: modalOptions.backdropClass,
                windowClass: modalOptions.windowClass,
                windowTemplateUrl: modalOptions.windowTemplateUrl,
                size: modalOptions.size
              });
            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });
            templateAndResolvePromise.then(function() {
              modalOpenedDeferred.resolve(true);
            }, function() {
              modalOpenedDeferred.reject(false);
            });
            return modalInstance;
          };
          return $modal;
        }]
      };
      return $modalProvider;
    });
    angular.module('ui.bootstrap.pagination', []).controller('PaginationController', ['$scope', '$attrs', '$parse', function($scope, $attrs, $parse) {
      var self = this,
          ngModelCtrl = {$setViewValue: angular.noop},
          setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
      this.init = function(ngModelCtrl_, config) {
        ngModelCtrl = ngModelCtrl_;
        this.config = config;
        ngModelCtrl.$render = function() {
          self.render();
        };
        if ($attrs.itemsPerPage) {
          $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
            self.itemsPerPage = parseInt(value, 10);
            $scope.totalPages = self.calculateTotalPages();
          });
        } else {
          this.itemsPerPage = config.itemsPerPage;
        }
      };
      this.calculateTotalPages = function() {
        var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
      };
      this.render = function() {
        $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
      };
      $scope.selectPage = function(page) {
        if ($scope.page !== page && page > 0 && page <= $scope.totalPages) {
          ngModelCtrl.$setViewValue(page);
          ngModelCtrl.$render();
        }
      };
      $scope.getText = function(key) {
        return $scope[key + 'Text'] || self.config[key + 'Text'];
      };
      $scope.noPrevious = function() {
        return $scope.page === 1;
      };
      $scope.noNext = function() {
        return $scope.page === $scope.totalPages;
      };
      $scope.$watch('totalItems', function() {
        $scope.totalPages = self.calculateTotalPages();
      });
      $scope.$watch('totalPages', function(value) {
        setNumPages($scope.$parent, value);
        if ($scope.page > value) {
          $scope.selectPage(value);
        } else {
          ngModelCtrl.$render();
        }
      });
    }]).constant('paginationConfig', {
      itemsPerPage: 10,
      boundaryLinks: false,
      directionLinks: true,
      firstText: 'First',
      previousText: 'Previous',
      nextText: 'Next',
      lastText: 'Last',
      rotate: true
    }).directive('pagination', ['$parse', 'paginationConfig', function($parse, paginationConfig) {
      return {
        restrict: 'EA',
        scope: {
          totalItems: '=',
          firstText: '@',
          previousText: '@',
          nextText: '@',
          lastText: '@'
        },
        require: ['pagination', '?ngModel'],
        controller: 'PaginationController',
        templateUrl: 'template/pagination/pagination.html',
        replace: true,
        link: function(scope, element, attrs, ctrls) {
          var paginationCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          if (!ngModelCtrl) {
            return;
          }
          var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
              rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
          scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
          scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;
          paginationCtrl.init(ngModelCtrl, paginationConfig);
          if (attrs.maxSize) {
            scope.$parent.$watch($parse(attrs.maxSize), function(value) {
              maxSize = parseInt(value, 10);
              paginationCtrl.render();
            });
          }
          function makePage(number, text, isActive) {
            return {
              number: number,
              text: text,
              active: isActive
            };
          }
          function getPages(currentPage, totalPages) {
            var pages = [];
            var startPage = 1,
                endPage = totalPages;
            var isMaxSized = (angular.isDefined(maxSize) && maxSize < totalPages);
            if (isMaxSized) {
              if (rotate) {
                startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
                endPage = startPage + maxSize - 1;
                if (endPage > totalPages) {
                  endPage = totalPages;
                  startPage = endPage - maxSize + 1;
                }
              } else {
                startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;
                endPage = Math.min(startPage + maxSize - 1, totalPages);
              }
            }
            for (var number = startPage; number <= endPage; number++) {
              var page = makePage(number, number, number === currentPage);
              pages.push(page);
            }
            if (isMaxSized && !rotate) {
              if (startPage > 1) {
                var previousPageSet = makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
              }
              if (endPage < totalPages) {
                var nextPageSet = makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
              }
            }
            return pages;
          }
          var originalRender = paginationCtrl.render;
          paginationCtrl.render = function() {
            originalRender();
            if (scope.page > 0 && scope.page <= scope.totalPages) {
              scope.pages = getPages(scope.page, scope.totalPages);
            }
          };
        }
      };
    }]).constant('pagerConfig', {
      itemsPerPage: 10,
      previousText: '« Previous',
      nextText: 'Next »',
      align: true
    }).directive('pager', ['pagerConfig', function(pagerConfig) {
      return {
        restrict: 'EA',
        scope: {
          totalItems: '=',
          previousText: '@',
          nextText: '@'
        },
        require: ['pager', '?ngModel'],
        controller: 'PaginationController',
        templateUrl: 'template/pagination/pager.html',
        replace: true,
        link: function(scope, element, attrs, ctrls) {
          var paginationCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          if (!ngModelCtrl) {
            return;
          }
          scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
          paginationCtrl.init(ngModelCtrl, pagerConfig);
        }
      };
    }]);
    angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml']).provider('$tooltip', function() {
      var defaultOptions = {
        placement: 'top',
        animation: true,
        popupDelay: 0
      };
      var triggerMap = {
        'mouseenter': 'mouseleave',
        'click': 'click',
        'focus': 'blur'
      };
      var globalOptions = {};
      this.options = function(value) {
        angular.extend(globalOptions, value);
      };
      this.setTriggers = function setTriggers(triggers) {
        angular.extend(triggerMap, triggers);
      };
      function snake_case(name) {
        var regexp = /[A-Z]/g;
        var separator = '-';
        return name.replace(regexp, function(letter, pos) {
          return (pos ? separator : '') + letter.toLowerCase();
        });
      }
      this.$get = ['$window', '$compile', '$timeout', '$document', '$position', '$interpolate', function($window, $compile, $timeout, $document, $position, $interpolate) {
        return function $tooltip(type, prefix, defaultTriggerShow) {
          var options = angular.extend({}, defaultOptions, globalOptions);
          function getTriggers(trigger) {
            var show = trigger || options.trigger || defaultTriggerShow;
            var hide = triggerMap[show] || show;
            return {
              show: show,
              hide: hide
            };
          }
          var directiveName = snake_case(type);
          var startSym = $interpolate.startSymbol();
          var endSym = $interpolate.endSymbol();
          var template = '<div ' + directiveName + '-popup ' + 'title="' + startSym + 'title' + endSym + '" ' + 'content="' + startSym + 'content' + endSym + '" ' + 'placement="' + startSym + 'placement' + endSym + '" ' + 'animation="animation" ' + 'is-open="isOpen"' + '>' + '</div>';
          return {
            restrict: 'EA',
            compile: function(tElem, tAttrs) {
              var tooltipLinker = $compile(template);
              return function link(scope, element, attrs) {
                var tooltip;
                var tooltipLinkedScope;
                var transitionTimeout;
                var popupTimeout;
                var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
                var triggers = getTriggers(undefined);
                var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
                var ttScope = scope.$new(true);
                var positionTooltip = function() {
                  var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
                  ttPosition.top += 'px';
                  ttPosition.left += 'px';
                  tooltip.css(ttPosition);
                };
                ttScope.isOpen = false;
                function toggleTooltipBind() {
                  if (!ttScope.isOpen) {
                    showTooltipBind();
                  } else {
                    hideTooltipBind();
                  }
                }
                function showTooltipBind() {
                  if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                    return;
                  }
                  prepareTooltip();
                  if (ttScope.popupDelay) {
                    if (!popupTimeout) {
                      popupTimeout = $timeout(show, ttScope.popupDelay, false);
                      popupTimeout.then(function(reposition) {
                        reposition();
                      });
                    }
                  } else {
                    show()();
                  }
                }
                function hideTooltipBind() {
                  scope.$apply(function() {
                    hide();
                  });
                }
                function show() {
                  popupTimeout = null;
                  if (transitionTimeout) {
                    $timeout.cancel(transitionTimeout);
                    transitionTimeout = null;
                  }
                  if (!ttScope.content) {
                    return angular.noop;
                  }
                  createTooltip();
                  tooltip.css({
                    top: 0,
                    left: 0,
                    display: 'block'
                  });
                  if (appendToBody) {
                    $document.find('body').append(tooltip);
                  } else {
                    element.after(tooltip);
                  }
                  positionTooltip();
                  ttScope.isOpen = true;
                  ttScope.$digest();
                  return positionTooltip;
                }
                function hide() {
                  ttScope.isOpen = false;
                  $timeout.cancel(popupTimeout);
                  popupTimeout = null;
                  if (ttScope.animation) {
                    if (!transitionTimeout) {
                      transitionTimeout = $timeout(removeTooltip, 500);
                    }
                  } else {
                    removeTooltip();
                  }
                }
                function createTooltip() {
                  if (tooltip) {
                    removeTooltip();
                  }
                  tooltipLinkedScope = ttScope.$new();
                  tooltip = tooltipLinker(tooltipLinkedScope, angular.noop);
                }
                function removeTooltip() {
                  transitionTimeout = null;
                  if (tooltip) {
                    tooltip.remove();
                    tooltip = null;
                  }
                  if (tooltipLinkedScope) {
                    tooltipLinkedScope.$destroy();
                    tooltipLinkedScope = null;
                  }
                }
                function prepareTooltip() {
                  prepPlacement();
                  prepPopupDelay();
                }
                attrs.$observe(type, function(val) {
                  ttScope.content = val;
                  if (!val && ttScope.isOpen) {
                    hide();
                  }
                });
                attrs.$observe(prefix + 'Title', function(val) {
                  ttScope.title = val;
                });
                function prepPlacement() {
                  var val = attrs[prefix + 'Placement'];
                  ttScope.placement = angular.isDefined(val) ? val : options.placement;
                }
                function prepPopupDelay() {
                  var val = attrs[prefix + 'PopupDelay'];
                  var delay = parseInt(val, 10);
                  ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
                }
                var unregisterTriggers = function() {
                  element.unbind(triggers.show, showTooltipBind);
                  element.unbind(triggers.hide, hideTooltipBind);
                };
                function prepTriggers() {
                  var val = attrs[prefix + 'Trigger'];
                  unregisterTriggers();
                  triggers = getTriggers(val);
                  if (triggers.show === triggers.hide) {
                    element.bind(triggers.show, toggleTooltipBind);
                  } else {
                    element.bind(triggers.show, showTooltipBind);
                    element.bind(triggers.hide, hideTooltipBind);
                  }
                }
                prepTriggers();
                var animation = scope.$eval(attrs[prefix + 'Animation']);
                ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;
                var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
                appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;
                if (appendToBody) {
                  scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
                    if (ttScope.isOpen) {
                      hide();
                    }
                  });
                }
                scope.$on('$destroy', function onDestroyTooltip() {
                  $timeout.cancel(transitionTimeout);
                  $timeout.cancel(popupTimeout);
                  unregisterTriggers();
                  removeTooltip();
                  ttScope = null;
                });
              };
            }
          };
        };
      }];
    }).directive('tooltipPopup', function() {
      return {
        restrict: 'EA',
        replace: true,
        scope: {
          content: '@',
          placement: '@',
          animation: '&',
          isOpen: '&'
        },
        templateUrl: 'template/tooltip/tooltip-popup.html'
      };
    }).directive('tooltip', ['$tooltip', function($tooltip) {
      return $tooltip('tooltip', 'tooltip', 'mouseenter');
    }]).directive('tooltipHtmlUnsafePopup', function() {
      return {
        restrict: 'EA',
        replace: true,
        scope: {
          content: '@',
          placement: '@',
          animation: '&',
          isOpen: '&'
        },
        templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
      };
    }).directive('tooltipHtmlUnsafe', ['$tooltip', function($tooltip) {
      return $tooltip('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
    }]);
    angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('popoverPopup', function() {
      return {
        restrict: 'EA',
        replace: true,
        scope: {
          title: '@',
          content: '@',
          placement: '@',
          animation: '&',
          isOpen: '&'
        },
        templateUrl: 'template/popover/popover.html'
      };
    }).directive('popover', ['$tooltip', function($tooltip) {
      return $tooltip('popover', 'popover', 'click');
    }]);
    angular.module('ui.bootstrap.progressbar', []).constant('progressConfig', {
      animate: true,
      max: 100
    }).controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {
      var self = this,
          animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
      this.bars = [];
      $scope.max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : progressConfig.max;
      this.addBar = function(bar, element) {
        if (!animate) {
          element.css({'transition': 'none'});
        }
        this.bars.push(bar);
        bar.$watch('value', function(value) {
          bar.percent = +(100 * value / $scope.max).toFixed(2);
        });
        bar.$on('$destroy', function() {
          element = null;
          self.removeBar(bar);
        });
      };
      this.removeBar = function(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
      };
    }]).directive('progress', function() {
      return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        controller: 'ProgressController',
        require: 'progress',
        scope: {},
        templateUrl: 'template/progressbar/progress.html'
      };
    }).directive('bar', function() {
      return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^progress',
        scope: {
          value: '=',
          type: '@'
        },
        templateUrl: 'template/progressbar/bar.html',
        link: function(scope, element, attrs, progressCtrl) {
          progressCtrl.addBar(scope, element);
        }
      };
    }).directive('progressbar', function() {
      return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        controller: 'ProgressController',
        scope: {
          value: '=',
          type: '@'
        },
        templateUrl: 'template/progressbar/progressbar.html',
        link: function(scope, element, attrs, progressCtrl) {
          progressCtrl.addBar(scope, angular.element(element.children()[0]));
        }
      };
    });
    angular.module('ui.bootstrap.rating', []).constant('ratingConfig', {
      max: 5,
      stateOn: null,
      stateOff: null
    }).controller('RatingController', ['$scope', '$attrs', 'ratingConfig', function($scope, $attrs, ratingConfig) {
      var ngModelCtrl = {$setViewValue: angular.noop};
      this.init = function(ngModelCtrl_) {
        ngModelCtrl = ngModelCtrl_;
        ngModelCtrl.$render = this.render;
        this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
        this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
        var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
        $scope.range = this.buildTemplateObjects(ratingStates);
      };
      this.buildTemplateObjects = function(states) {
        for (var i = 0,
            n = states.length; i < n; i++) {
          states[i] = angular.extend({index: i}, {
            stateOn: this.stateOn,
            stateOff: this.stateOff
          }, states[i]);
        }
        return states;
      };
      $scope.rate = function(value) {
        if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
          ngModelCtrl.$setViewValue(value);
          ngModelCtrl.$render();
        }
      };
      $scope.enter = function(value) {
        if (!$scope.readonly) {
          $scope.value = value;
        }
        $scope.onHover({value: value});
      };
      $scope.reset = function() {
        $scope.value = ngModelCtrl.$viewValue;
        $scope.onLeave();
      };
      $scope.onKeydown = function(evt) {
        if (/(37|38|39|40)/.test(evt.which)) {
          evt.preventDefault();
          evt.stopPropagation();
          $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
        }
      };
      this.render = function() {
        $scope.value = ngModelCtrl.$viewValue;
      };
    }]).directive('rating', function() {
      return {
        restrict: 'EA',
        require: ['rating', 'ngModel'],
        scope: {
          readonly: '=?',
          onHover: '&',
          onLeave: '&'
        },
        controller: 'RatingController',
        templateUrl: 'template/rating/rating.html',
        replace: true,
        link: function(scope, element, attrs, ctrls) {
          var ratingCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          if (ngModelCtrl) {
            ratingCtrl.init(ngModelCtrl);
          }
        }
      };
    });
    angular.module('ui.bootstrap.tabs', []).controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
      var ctrl = this,
          tabs = ctrl.tabs = $scope.tabs = [];
      ctrl.select = function(selectedTab) {
        angular.forEach(tabs, function(tab) {
          if (tab.active && tab !== selectedTab) {
            tab.active = false;
            tab.onDeselect();
          }
        });
        selectedTab.active = true;
        selectedTab.onSelect();
      };
      ctrl.addTab = function addTab(tab) {
        tabs.push(tab);
        if (tabs.length === 1) {
          tab.active = true;
        } else if (tab.active) {
          ctrl.select(tab);
        }
      };
      ctrl.removeTab = function removeTab(tab) {
        var index = tabs.indexOf(tab);
        if (tab.active && tabs.length > 1 && !destroyed) {
          var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
          ctrl.select(tabs[newActiveIndex]);
        }
        tabs.splice(index, 1);
      };
      var destroyed;
      $scope.$on('$destroy', function() {
        destroyed = true;
      });
    }]).directive('tabset', function() {
      return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        scope: {type: '@'},
        controller: 'TabsetController',
        templateUrl: 'template/tabs/tabset.html',
        link: function(scope, element, attrs) {
          scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
          scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
        }
      };
    }).directive('tab', ['$parse', function($parse) {
      return {
        require: '^tabset',
        restrict: 'EA',
        replace: true,
        templateUrl: 'template/tabs/tab.html',
        transclude: true,
        scope: {
          active: '=?',
          heading: '@',
          onSelect: '&select',
          onDeselect: '&deselect'
        },
        controller: function() {},
        compile: function(elm, attrs, transclude) {
          return function postLink(scope, elm, attrs, tabsetCtrl) {
            scope.$watch('active', function(active) {
              if (active) {
                tabsetCtrl.select(scope);
              }
            });
            scope.disabled = false;
            if (attrs.disabled) {
              scope.$parent.$watch($parse(attrs.disabled), function(value) {
                scope.disabled = !!value;
              });
            }
            scope.select = function() {
              if (!scope.disabled) {
                scope.active = true;
              }
            };
            tabsetCtrl.addTab(scope);
            scope.$on('$destroy', function() {
              tabsetCtrl.removeTab(scope);
            });
            scope.$transcludeFn = transclude;
          };
        }
      };
    }]).directive('tabHeadingTransclude', [function() {
      return {
        restrict: 'A',
        require: '^tab',
        link: function(scope, elm, attrs, tabCtrl) {
          scope.$watch('headingElement', function updateHeadingElement(heading) {
            if (heading) {
              elm.html('');
              elm.append(heading);
            }
          });
        }
      };
    }]).directive('tabContentTransclude', function() {
      return {
        restrict: 'A',
        require: '^tabset',
        link: function(scope, elm, attrs) {
          var tab = scope.$eval(attrs.tabContentTransclude);
          tab.$transcludeFn(tab.$parent, function(contents) {
            angular.forEach(contents, function(node) {
              if (isTabHeading(node)) {
                tab.headingElement = node;
              } else {
                elm.append(node);
              }
            });
          });
        }
      };
      function isTabHeading(node) {
        return node.tagName && (node.hasAttribute('tab-heading') || node.hasAttribute('data-tab-heading') || node.tagName.toLowerCase() === 'tab-heading' || node.tagName.toLowerCase() === 'data-tab-heading');
      }
    });
    ;
    angular.module('ui.bootstrap.timepicker', []).constant('timepickerConfig', {
      hourStep: 1,
      minuteStep: 1,
      showMeridian: true,
      meridians: null,
      readonlyInput: false,
      mousewheel: true
    }).controller('TimepickerController', ['$scope', '$attrs', '$parse', '$log', '$locale', 'timepickerConfig', function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
      var selected = new Date(),
          ngModelCtrl = {$setViewValue: angular.noop},
          meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
      this.init = function(ngModelCtrl_, inputs) {
        ngModelCtrl = ngModelCtrl_;
        ngModelCtrl.$render = this.render;
        var hoursInputEl = inputs.eq(0),
            minutesInputEl = inputs.eq(1);
        var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
        if (mousewheel) {
          this.setupMousewheelEvents(hoursInputEl, minutesInputEl);
        }
        $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
        this.setupInputEvents(hoursInputEl, minutesInputEl);
      };
      var hourStep = timepickerConfig.hourStep;
      if ($attrs.hourStep) {
        $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
          hourStep = parseInt(value, 10);
        });
      }
      var minuteStep = timepickerConfig.minuteStep;
      if ($attrs.minuteStep) {
        $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
          minuteStep = parseInt(value, 10);
        });
      }
      $scope.showMeridian = timepickerConfig.showMeridian;
      if ($attrs.showMeridian) {
        $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
          $scope.showMeridian = !!value;
          if (ngModelCtrl.$error.time) {
            var hours = getHoursFromTemplate(),
                minutes = getMinutesFromTemplate();
            if (angular.isDefined(hours) && angular.isDefined(minutes)) {
              selected.setHours(hours);
              refresh();
            }
          } else {
            updateTemplate();
          }
        });
      }
      function getHoursFromTemplate() {
        var hours = parseInt($scope.hours, 10);
        var valid = ($scope.showMeridian) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
        if (!valid) {
          return undefined;
        }
        if ($scope.showMeridian) {
          if (hours === 12) {
            hours = 0;
          }
          if ($scope.meridian === meridians[1]) {
            hours = hours + 12;
          }
        }
        return hours;
      }
      function getMinutesFromTemplate() {
        var minutes = parseInt($scope.minutes, 10);
        return (minutes >= 0 && minutes < 60) ? minutes : undefined;
      }
      function pad(value) {
        return (angular.isDefined(value) && value.toString().length < 2) ? '0' + value : value;
      }
      this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl) {
        var isScrollingUp = function(e) {
          if (e.originalEvent) {
            e = e.originalEvent;
          }
          var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
          return (e.detail || delta > 0);
        };
        hoursInputEl.bind('mousewheel wheel', function(e) {
          $scope.$apply((isScrollingUp(e)) ? $scope.incrementHours() : $scope.decrementHours());
          e.preventDefault();
        });
        minutesInputEl.bind('mousewheel wheel', function(e) {
          $scope.$apply((isScrollingUp(e)) ? $scope.incrementMinutes() : $scope.decrementMinutes());
          e.preventDefault();
        });
      };
      this.setupInputEvents = function(hoursInputEl, minutesInputEl) {
        if ($scope.readonlyInput) {
          $scope.updateHours = angular.noop;
          $scope.updateMinutes = angular.noop;
          return;
        }
        var invalidate = function(invalidHours, invalidMinutes) {
          ngModelCtrl.$setViewValue(null);
          ngModelCtrl.$setValidity('time', false);
          if (angular.isDefined(invalidHours)) {
            $scope.invalidHours = invalidHours;
          }
          if (angular.isDefined(invalidMinutes)) {
            $scope.invalidMinutes = invalidMinutes;
          }
        };
        $scope.updateHours = function() {
          var hours = getHoursFromTemplate();
          if (angular.isDefined(hours)) {
            selected.setHours(hours);
            refresh('h');
          } else {
            invalidate(true);
          }
        };
        hoursInputEl.bind('blur', function(e) {
          if (!$scope.invalidHours && $scope.hours < 10) {
            $scope.$apply(function() {
              $scope.hours = pad($scope.hours);
            });
          }
        });
        $scope.updateMinutes = function() {
          var minutes = getMinutesFromTemplate();
          if (angular.isDefined(minutes)) {
            selected.setMinutes(minutes);
            refresh('m');
          } else {
            invalidate(undefined, true);
          }
        };
        minutesInputEl.bind('blur', function(e) {
          if (!$scope.invalidMinutes && $scope.minutes < 10) {
            $scope.$apply(function() {
              $scope.minutes = pad($scope.minutes);
            });
          }
        });
      };
      this.render = function() {
        var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
        if (isNaN(date)) {
          ngModelCtrl.$setValidity('time', false);
          $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
        } else {
          if (date) {
            selected = date;
          }
          makeValid();
          updateTemplate();
        }
      };
      function refresh(keyboardChange) {
        makeValid();
        ngModelCtrl.$setViewValue(new Date(selected));
        updateTemplate(keyboardChange);
      }
      function makeValid() {
        ngModelCtrl.$setValidity('time', true);
        $scope.invalidHours = false;
        $scope.invalidMinutes = false;
      }
      function updateTemplate(keyboardChange) {
        var hours = selected.getHours(),
            minutes = selected.getMinutes();
        if ($scope.showMeridian) {
          hours = (hours === 0 || hours === 12) ? 12 : hours % 12;
        }
        $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
        $scope.minutes = keyboardChange === 'm' ? minutes : pad(minutes);
        $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
      }
      function addMinutes(minutes) {
        var dt = new Date(selected.getTime() + minutes * 60000);
        selected.setHours(dt.getHours(), dt.getMinutes());
        refresh();
      }
      $scope.incrementHours = function() {
        addMinutes(hourStep * 60);
      };
      $scope.decrementHours = function() {
        addMinutes(-hourStep * 60);
      };
      $scope.incrementMinutes = function() {
        addMinutes(minuteStep);
      };
      $scope.decrementMinutes = function() {
        addMinutes(-minuteStep);
      };
      $scope.toggleMeridian = function() {
        addMinutes(12 * 60 * ((selected.getHours() < 12) ? 1 : -1));
      };
    }]).directive('timepicker', function() {
      return {
        restrict: 'EA',
        require: ['timepicker', '?^ngModel'],
        controller: 'TimepickerController',
        replace: true,
        scope: {},
        templateUrl: 'template/timepicker/timepicker.html',
        link: function(scope, element, attrs, ctrls) {
          var timepickerCtrl = ctrls[0],
              ngModelCtrl = ctrls[1];
          if (ngModelCtrl) {
            timepickerCtrl.init(ngModelCtrl, element.find('input'));
          }
        }
      };
    });
    angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml']).factory('typeaheadParser', ['$parse', function($parse) {
      var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
      return {parse: function(input) {
          var match = input.match(TYPEAHEAD_REGEXP);
          if (!match) {
            throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' + ' but got "' + input + '".');
          }
          return {
            itemName: match[3],
            source: $parse(match[4]),
            viewMapper: $parse(match[2] || match[1]),
            modelMapper: $parse(match[1])
          };
        }};
    }]).directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$position', 'typeaheadParser', function($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {
      var HOT_KEYS = [9, 13, 27, 38, 40];
      return {
        require: 'ngModel',
        link: function(originalScope, element, attrs, modelCtrl) {
          var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;
          var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;
          var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
          var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;
          var onSelectCallback = $parse(attrs.typeaheadOnSelect);
          var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;
          var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;
          var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;
          var $setModelValue = $parse(attrs.ngModel).assign;
          var parserResult = typeaheadParser.parse(attrs.typeahead);
          var hasFocus;
          var scope = originalScope.$new();
          originalScope.$on('$destroy', function() {
            scope.$destroy();
          });
          var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
          element.attr({
            'aria-autocomplete': 'list',
            'aria-expanded': false,
            'aria-owns': popupId
          });
          var popUpEl = angular.element('<div typeahead-popup></div>');
          popUpEl.attr({
            id: popupId,
            matches: 'matches',
            active: 'activeIdx',
            select: 'select(activeIdx)',
            query: 'query',
            position: 'position'
          });
          if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
            popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
          }
          var resetMatches = function() {
            scope.matches = [];
            scope.activeIdx = -1;
            element.attr('aria-expanded', false);
          };
          var getMatchId = function(index) {
            return popupId + '-option-' + index;
          };
          scope.$watch('activeIdx', function(index) {
            if (index < 0) {
              element.removeAttr('aria-activedescendant');
            } else {
              element.attr('aria-activedescendant', getMatchId(index));
            }
          });
          var getMatchesAsync = function(inputValue) {
            var locals = {$viewValue: inputValue};
            isLoadingSetter(originalScope, true);
            $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
              var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
              if (onCurrentRequest && hasFocus) {
                if (matches.length > 0) {
                  scope.activeIdx = focusFirst ? 0 : -1;
                  scope.matches.length = 0;
                  for (var i = 0; i < matches.length; i++) {
                    locals[parserResult.itemName] = matches[i];
                    scope.matches.push({
                      id: getMatchId(i),
                      label: parserResult.viewMapper(scope, locals),
                      model: matches[i]
                    });
                  }
                  scope.query = inputValue;
                  scope.position = appendToBody ? $position.offset(element) : $position.position(element);
                  scope.position.top = scope.position.top + element.prop('offsetHeight');
                  element.attr('aria-expanded', true);
                } else {
                  resetMatches();
                }
              }
              if (onCurrentRequest) {
                isLoadingSetter(originalScope, false);
              }
            }, function() {
              resetMatches();
              isLoadingSetter(originalScope, false);
            });
          };
          resetMatches();
          scope.query = undefined;
          var timeoutPromise;
          var scheduleSearchWithTimeout = function(inputValue) {
            timeoutPromise = $timeout(function() {
              getMatchesAsync(inputValue);
            }, waitTime);
          };
          var cancelPreviousTimeout = function() {
            if (timeoutPromise) {
              $timeout.cancel(timeoutPromise);
            }
          };
          modelCtrl.$parsers.unshift(function(inputValue) {
            hasFocus = true;
            if (inputValue && inputValue.length >= minSearch) {
              if (waitTime > 0) {
                cancelPreviousTimeout();
                scheduleSearchWithTimeout(inputValue);
              } else {
                getMatchesAsync(inputValue);
              }
            } else {
              isLoadingSetter(originalScope, false);
              cancelPreviousTimeout();
              resetMatches();
            }
            if (isEditable) {
              return inputValue;
            } else {
              if (!inputValue) {
                modelCtrl.$setValidity('editable', true);
                return inputValue;
              } else {
                modelCtrl.$setValidity('editable', false);
                return undefined;
              }
            }
          });
          modelCtrl.$formatters.push(function(modelValue) {
            var candidateViewValue,
                emptyViewValue;
            var locals = {};
            if (inputFormatter) {
              locals.$model = modelValue;
              return inputFormatter(originalScope, locals);
            } else {
              locals[parserResult.itemName] = modelValue;
              candidateViewValue = parserResult.viewMapper(originalScope, locals);
              locals[parserResult.itemName] = undefined;
              emptyViewValue = parserResult.viewMapper(originalScope, locals);
              return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
            }
          });
          scope.select = function(activeIdx) {
            var locals = {};
            var model,
                item;
            locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
            model = parserResult.modelMapper(originalScope, locals);
            $setModelValue(originalScope, model);
            modelCtrl.$setValidity('editable', true);
            onSelectCallback(originalScope, {
              $item: item,
              $model: model,
              $label: parserResult.viewMapper(originalScope, locals)
            });
            resetMatches();
            $timeout(function() {
              element[0].focus();
            }, 0, false);
          };
          element.bind('keydown', function(evt) {
            if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
              return;
            }
            if (scope.activeIdx == -1 && (evt.which === 13 || evt.which === 9)) {
              return;
            }
            evt.preventDefault();
            if (evt.which === 40) {
              scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
              scope.$digest();
            } else if (evt.which === 38) {
              scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
              scope.$digest();
            } else if (evt.which === 13 || evt.which === 9) {
              scope.$apply(function() {
                scope.select(scope.activeIdx);
              });
            } else if (evt.which === 27) {
              evt.stopPropagation();
              resetMatches();
              scope.$digest();
            }
          });
          element.bind('blur', function(evt) {
            hasFocus = false;
          });
          var dismissClickHandler = function(evt) {
            if (element[0] !== evt.target) {
              resetMatches();
              scope.$digest();
            }
          };
          $document.bind('click', dismissClickHandler);
          originalScope.$on('$destroy', function() {
            $document.unbind('click', dismissClickHandler);
            if (appendToBody) {
              $popup.remove();
            }
          });
          var $popup = $compile(popUpEl)(scope);
          if (appendToBody) {
            $document.find('body').append($popup);
          } else {
            element.after($popup);
          }
        }
      };
    }]).directive('typeaheadPopup', function() {
      return {
        restrict: 'EA',
        scope: {
          matches: '=',
          query: '=',
          active: '=',
          position: '=',
          select: '&'
        },
        replace: true,
        templateUrl: 'template/typeahead/typeahead-popup.html',
        link: function(scope, element, attrs) {
          scope.templateUrl = attrs.templateUrl;
          scope.isOpen = function() {
            return scope.matches.length > 0;
          };
          scope.isActive = function(matchIdx) {
            return scope.active == matchIdx;
          };
          scope.selectActive = function(matchIdx) {
            scope.active = matchIdx;
          };
          scope.selectMatch = function(activeIdx) {
            scope.select({activeIdx: activeIdx});
          };
        }
      };
    }).directive('typeaheadMatch', ['$http', '$templateCache', '$compile', '$parse', function($http, $templateCache, $compile, $parse) {
      return {
        restrict: 'EA',
        scope: {
          index: '=',
          match: '=',
          query: '='
        },
        link: function(scope, element, attrs) {
          var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
          $http.get(tplUrl, {cache: $templateCache}).success(function(tplContent) {
            element.replaceWith($compile(tplContent.trim())(scope));
          });
        }
      };
    }]).filter('typeaheadHighlight', function() {
      function escapeRegexp(queryToEscape) {
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
      }
      return function(matchItem, query) {
        return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
      };
    });
    angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/accordion/accordion-group.html", "<div class=\"panel panel-default\">\n" + "  <div class=\"panel-heading\">\n" + "    <h4 class=\"panel-title\">\n" + "      <a href class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" + "    </h4>\n" + "  </div>\n" + "  <div class=\"panel-collapse\" collapse=\"!isOpen\">\n" + "	  <div class=\"panel-body\" ng-transclude></div>\n" + "  </div>\n" + "</div>\n" + "");
    }]);
    angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/accordion/accordion.html", "<div class=\"panel-group\" ng-transclude></div>");
    }]);
    angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/alert/alert.html", "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissable' : null]\" role=\"alert\">\n" + "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\n" + "        <span aria-hidden=\"true\">&times;</span>\n" + "        <span class=\"sr-only\">Close</span>\n" + "    </button>\n" + "    <div ng-transclude></div>\n" + "</div>\n" + "");
    }]);
    angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/carousel/carousel.html", "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" + "    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" + "        <li ng-repeat=\"slide in slides track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" + "    </ol>\n" + "    <div class=\"carousel-inner\" ng-transclude></div>\n" + "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" + "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" + "</div>\n" + "");
    }]);
    angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/carousel/slide.html", "<div ng-class=\"{\n" + "    'active': leaving || (active && !entering),\n" + "    'prev': (next || active) && direction=='prev',\n" + "    'next': (next || active) && direction=='next',\n" + "    'right': direction=='prev',\n" + "    'left': direction=='next'\n" + "  }\" class=\"item text-center\" ng-transclude></div>\n" + "");
    }]);
    angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/datepicker/datepicker.html", "<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" + "  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n" + "  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n" + "  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n" + "</div>");
    }]);
    angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/datepicker/day.html", "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th colspan=\"{{5 + showWeeks}}\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "    <tr>\n" + "      <th ng-show=\"showWeeks\" class=\"text-center\"></th>\n" + "      <th ng-repeat=\"label in labels track by $index\" class=\"text-center\"><small aria-label=\"{{label.full}}\">{{label.abbr}}</small></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-show=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" + "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" + "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-muted': dt.secondary, 'text-info': dt.current}\">{{dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
    }]);
    angular.module("template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/datepicker/month.html", "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" + "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">{{dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
    }]);
    angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/datepicker/popup.html", "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\">\n" + "	<li ng-transclude></li>\n" + "	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" + "		<span class=\"btn-group pull-left\">\n" + "			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select('today')\">{{ getText('current') }}</button>\n" + "			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" + "		</span>\n" + "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" + "	</li>\n" + "</ul>\n" + "");
    }]);
    angular.module("template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/datepicker/year.html", "<table role=\"grid\" aria-labelledby=\"{{uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" + "  <thead>\n" + "    <tr>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" + "      <th colspan=\"3\"><button id=\"{{uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" + "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + "    <tr ng-repeat=\"row in rows track by $index\">\n" + "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{dt.uid}}\" aria-disabled=\"{{!!dt.disabled}}\">\n" + "        <button type=\"button\" style=\"width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"{'text-info': dt.current}\">{{dt.label}}</span></button>\n" + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
    }]);
    angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/modal/backdrop.html", "<div class=\"modal-backdrop fade {{ backdropClass }}\"\n" + "     ng-class=\"{in: animate}\"\n" + "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" + "></div>\n" + "");
    }]);
    angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/modal/window.html", "<div tabindex=\"-1\" role=\"dialog\" class=\"modal fade\" ng-class=\"{in: animate}\" ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" + "    <div class=\"modal-dialog\" ng-class=\"{'modal-sm': size == 'sm', 'modal-lg': size == 'lg'}\"><div class=\"modal-content\" modal-transclude></div></div>\n" + "</div>");
    }]);
    angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/pagination/pager.html", "<ul class=\"pager\">\n" + "  <li ng-class=\"{disabled: noPrevious(), previous: align}\"><a href ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a></li>\n" + "  <li ng-class=\"{disabled: noNext(), next: align}\"><a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a></li>\n" + "</ul>");
    }]);
    angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/pagination/pagination.html", "<ul class=\"pagination\">\n" + "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(1)\">{{getText('first')}}</a></li>\n" + "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noPrevious()}\"><a href ng-click=\"selectPage(page - 1)\">{{getText('previous')}}</a></li>\n" + "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active}\"><a href ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" + "  <li ng-if=\"directionLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(page + 1)\">{{getText('next')}}</a></li>\n" + "  <li ng-if=\"boundaryLinks\" ng-class=\"{disabled: noNext()}\"><a href ng-click=\"selectPage(totalPages)\">{{getText('last')}}</a></li>\n" + "</ul>");
    }]);
    angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html", "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" + "  <div class=\"tooltip-arrow\"></div>\n" + "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" + "</div>\n" + "");
    }]);
    angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/tooltip/tooltip-popup.html", "<div class=\"tooltip {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" + "  <div class=\"tooltip-arrow\"></div>\n" + "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" + "</div>\n" + "");
    }]);
    angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/popover/popover.html", "<div class=\"popover {{placement}}\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" + "  <div class=\"arrow\"></div>\n" + "\n" + "  <div class=\"popover-inner\">\n" + "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-show=\"title\"></h3>\n" + "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" + "  </div>\n" + "</div>\n" + "");
    }]);
    angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/progressbar/bar.html", "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: percent + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>");
    }]);
    angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/progressbar/progress.html", "<div class=\"progress\" ng-transclude></div>");
    }]);
    angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/progressbar/progressbar.html", "<div class=\"progress\">\n" + "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: percent + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" ng-transclude></div>\n" + "</div>");
    }]);
    angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/rating/rating.html", "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" + "    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\">\n" + "        <span class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" + "    </i>\n" + "</span>");
    }]);
    angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/tabs/tab.html", "<li ng-class=\"{active: active, disabled: disabled}\">\n" + "  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" + "</li>\n" + "");
    }]);
    angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/tabs/tabset.html", "<div>\n" + "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" + "  <div class=\"tab-content\">\n" + "    <div class=\"tab-pane\" \n" + "         ng-repeat=\"tab in tabs\" \n" + "         ng-class=\"{active: tab.active}\"\n" + "         tab-content-transclude=\"tab\">\n" + "    </div>\n" + "  </div>\n" + "</div>\n" + "");
    }]);
    angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/timepicker/timepicker.html", "<table>\n" + "	<tbody>\n" + "		<tr class=\"text-center\">\n" + "			<td><a ng-click=\"incrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" + "			<td>&nbsp;</td>\n" + "			<td><a ng-click=\"incrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" + "			<td ng-show=\"showMeridian\"></td>\n" + "		</tr>\n" + "		<tr>\n" + "			<td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" + "				<input type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-mousewheel=\"incrementHours()\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" + "			</td>\n" + "			<td>:</td>\n" + "			<td style=\"width:50px;\" class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" + "				<input type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" + "			</td>\n" + "			<td ng-show=\"showMeridian\"><button type=\"button\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n" + "		</tr>\n" + "		<tr class=\"text-center\">\n" + "			<td><a ng-click=\"decrementHours()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" + "			<td>&nbsp;</td>\n" + "			<td><a ng-click=\"decrementMinutes()\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" + "			<td ng-show=\"showMeridian\"></td>\n" + "		</tr>\n" + "	</tbody>\n" + "</table>\n" + "");
    }]);
    angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/typeahead/typeahead-match.html", "<a tabindex=\"-1\" bind-html-unsafe=\"match.label | typeaheadHighlight:query\"></a>");
    }]);
    angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
      $templateCache.put("template/typeahead/typeahead-popup.html", "<ul class=\"dropdown-menu\" ng-show=\"isOpen()\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" + "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{match.id}}\">\n" + "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" + "    </li>\n" + "</ul>\n" + "");
    }]);
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



System.register("github:grevory/angular-local-storage@0.0.5/angular-local-storage", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    (function() {
      'use strict';
      var angularLocalStorage = angular.module('LocalStorageModule', []);
      angularLocalStorage.provider('localStorageService', function() {
        this.prefix = 'ls';
        this.storageType = 'localStorage';
        this.cookie = {
          expiry: 30,
          path: '/'
        };
        this.notify = {
          setItem: true,
          removeItem: false
        };
        this.setPrefix = function(prefix) {
          this.prefix = prefix;
        };
        this.setStorageType = function(storageType) {
          this.storageType = storageType;
        };
        this.setStorageCookie = function(exp, path) {
          this.cookie = {
            expiry: exp,
            path: path
          };
        };
        this.setStorageCookieDomain = function(domain) {
          this.cookie.domain = domain;
        };
        this.setNotify = function(itemSet, itemRemove) {
          this.notify = {
            setItem: itemSet,
            removeItem: itemRemove
          };
        };
        this.$get = ['$rootScope', '$window', '$document', function($rootScope, $window, $document) {
          var prefix = this.prefix;
          var cookie = this.cookie;
          var notify = this.notify;
          var storageType = this.storageType;
          var webStorage;
          if (!$document) {
            $document = document;
          }
          if (prefix.substr(-1) !== '.') {
            prefix = !!prefix ? prefix + '.' : '';
          }
          var deriveQualifiedKey = function(key) {
            return prefix + key;
          };
          var browserSupportsLocalStorage = (function() {
            try {
              var supported = (storageType in $window && $window[storageType] !== null);
              var key = deriveQualifiedKey('__' + Math.round(Math.random() * 1e7));
              if (supported) {
                webStorage = $window[storageType];
                webStorage.setItem(key, '');
                webStorage.removeItem(key);
              }
              return supported;
            } catch (e) {
              storageType = 'cookie';
              $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
              return false;
            }
          }());
          var addToLocalStorage = function(key, value) {
            if (!browserSupportsLocalStorage) {
              $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
              if (notify.setItem) {
                $rootScope.$broadcast('LocalStorageModule.notification.setitem', {
                  key: key,
                  newvalue: value,
                  storageType: 'cookie'
                });
              }
              return addToCookies(key, value);
            }
            if (typeof value === "undefined") {
              value = null;
            }
            try {
              if (angular.isObject(value) || angular.isArray(value)) {
                value = angular.toJson(value);
              }
              if (webStorage) {
                webStorage.setItem(deriveQualifiedKey(key), value);
              }
              ;
              if (notify.setItem) {
                $rootScope.$broadcast('LocalStorageModule.notification.setitem', {
                  key: key,
                  newvalue: value,
                  storageType: this.storageType
                });
              }
            } catch (e) {
              $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
              return addToCookies(key, value);
            }
            return true;
          };
          var getFromLocalStorage = function(key) {
            if (!browserSupportsLocalStorage) {
              $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
              return getFromCookies(key);
            }
            var item = webStorage ? webStorage.getItem(deriveQualifiedKey(key)) : null;
            if (!item || item === 'null') {
              return null;
            }
            if (item.charAt(0) === "{" || item.charAt(0) === "[") {
              return angular.fromJson(item);
            }
            return item;
          };
          var removeFromLocalStorage = function(key) {
            if (!browserSupportsLocalStorage) {
              $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
              if (notify.removeItem) {
                $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {
                  key: key,
                  storageType: 'cookie'
                });
              }
              return removeFromCookies(key);
            }
            try {
              webStorage.removeItem(deriveQualifiedKey(key));
              if (notify.removeItem) {
                $rootScope.$broadcast('LocalStorageModule.notification.removeitem', {
                  key: key,
                  storageType: this.storageType
                });
              }
            } catch (e) {
              $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
              return removeFromCookies(key);
            }
            return true;
          };
          var getKeysForLocalStorage = function() {
            if (!browserSupportsLocalStorage) {
              $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
              return false;
            }
            var prefixLength = prefix.length;
            var keys = [];
            for (var key in webStorage) {
              if (key.substr(0, prefixLength) === prefix) {
                try {
                  keys.push(key.substr(prefixLength));
                } catch (e) {
                  $rootScope.$broadcast('LocalStorageModule.notification.error', e.Description);
                  return [];
                }
              }
            }
            return keys;
          };
          var clearAllFromLocalStorage = function(regularExpression) {
            regularExpression = regularExpression || "";
            var tempPrefix = prefix.slice(0, -1);
            var testRegex = new RegExp(tempPrefix + '.' + regularExpression);
            if (!browserSupportsLocalStorage) {
              $rootScope.$broadcast('LocalStorageModule.notification.warning', 'LOCAL_STORAGE_NOT_SUPPORTED');
              return clearAllFromCookies();
            }
            var prefixLength = prefix.length;
            for (var key in webStorage) {
              if (testRegex.test(key)) {
                try {
                  removeFromLocalStorage(key.substr(prefixLength));
                } catch (e) {
                  $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
                  return clearAllFromCookies();
                }
              }
            }
            return true;
          };
          var browserSupportsCookies = function() {
            try {
              return navigator.cookieEnabled || ("cookie" in $document && ($document.cookie.length > 0 || ($document.cookie = "test").indexOf.call($document.cookie, "test") > -1));
            } catch (e) {
              $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
              return false;
            }
          };
          var addToCookies = function(key, value) {
            if (typeof value === "undefined") {
              return false;
            }
            if (!browserSupportsCookies()) {
              $rootScope.$broadcast('LocalStorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
              return false;
            }
            try {
              var expiry = '',
                  expiryDate = new Date(),
                  cookieDomain = '';
              if (value === null) {
                expiryDate.setTime(expiryDate.getTime() + (-1 * 24 * 60 * 60 * 1000));
                expiry = "; expires=" + expiryDate.toGMTString();
                value = '';
              } else if (cookie.expiry !== 0) {
                expiryDate.setTime(expiryDate.getTime() + (cookie.expiry * 24 * 60 * 60 * 1000));
                expiry = "; expires=" + expiryDate.toGMTString();
              }
              if (!!key) {
                var cookiePath = "; path=" + cookie.path;
                if (cookie.domain) {
                  cookieDomain = "; domain=" + cookie.domain;
                }
                $document.cookie = deriveQualifiedKey(key) + "=" + encodeURIComponent(value) + expiry + cookiePath + cookieDomain;
              }
            } catch (e) {
              $rootScope.$broadcast('LocalStorageModule.notification.error', e.message);
              return false;
            }
            return true;
          };
          var getFromCookies = function(key) {
            if (!browserSupportsCookies()) {
              $rootScope.$broadcast('LocalStorageModule.notification.error', 'COOKIES_NOT_SUPPORTED');
              return false;
            }
            var cookies = $document.cookie && $document.cookie.split(';') || [];
            for (var i = 0; i < cookies.length; i++) {
              var thisCookie = cookies[i];
              while (thisCookie.charAt(0) === ' ') {
                thisCookie = thisCookie.substring(1, thisCookie.length);
              }
              if (thisCookie.indexOf(deriveQualifiedKey(key) + '=') === 0) {
                return decodeURIComponent(thisCookie.substring(prefix.length + key.length + 1, thisCookie.length));
              }
            }
            return null;
          };
          var removeFromCookies = function(key) {
            addToCookies(key, null);
          };
          var clearAllFromCookies = function() {
            var thisCookie = null,
                thisKey = null;
            var prefixLength = prefix.length;
            var cookies = $document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
              thisCookie = cookies[i];
              while (thisCookie.charAt(0) === ' ') {
                thisCookie = thisCookie.substring(1, thisCookie.length);
              }
              var key = thisCookie.substring(prefixLength, thisCookie.indexOf('='));
              removeFromCookies(key);
            }
          };
          var getStorageType = function() {
            return storageType;
          };
          var bindToScope = function(scope, key, def) {
            var value = getFromLocalStorage(key);
            if (value === null && angular.isDefined(def)) {
              value = def;
            } else if (angular.isObject(value) && angular.isObject(def)) {
              value = angular.extend(def, value);
            }
            scope[key] = value;
            scope.$watchCollection(key, function(newVal) {
              addToLocalStorage(key, newVal);
            });
          };
          return {
            isSupported: browserSupportsLocalStorage,
            getStorageType: getStorageType,
            set: addToLocalStorage,
            add: addToLocalStorage,
            get: getFromLocalStorage,
            keys: getKeysForLocalStorage,
            remove: removeFromLocalStorage,
            clearAll: clearAllFromLocalStorage,
            bind: bindToScope,
            deriveKey: deriveQualifiedKey,
            cookie: {
              set: addToCookies,
              add: addToCookies,
              get: getFromCookies,
              remove: removeFromCookies,
              clearAll: clearAllFromCookies
            }
          };
        }];
      });
    }).call(this);
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



System.register("github:jeremypeters/ng-bs-animated-button@2.0.3/ng-bs-animated-button", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    'use strict';
    angular.module('jp.ng-bs-animated-button', []).directive('jpNgBsAnimatedButton', ['$timeout', function($timeout) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          isSubmitting: '=',
          result: '=',
          options: '=?'
        },
        controller: ['$scope', function($scope) {
          $scope.options = $scope.options || {};
          $scope.options = {
            buttonDefaultClass: $scope.options.buttonDefaultClass || 'btn-primary',
            buttonSubmittingClass: $scope.options.buttonSubmittingClass || 'btn-primary',
            buttonSuccessClass: $scope.options.buttonSuccessClass || 'btn-primary',
            buttonErrorClass: $scope.options.buttonErrorClass || 'btn-danger',
            buttonSizeClass: $scope.options.buttonSizeClass || null,
            buttonDefaultText: $scope.options.buttonDefaultText || 'Submit',
            buttonSubmittingText: $scope.options.buttonSubmittingText || 'Submitting...',
            buttonSuccessText: $scope.options.buttonSuccessText || 'Completed',
            buttonErrorText: $scope.options.buttonErrorText || 'There was an error',
            buttonInitialIcon: $scope.options.buttonInitialIcon || 'glyphicon glyphicon-plus',
            buttonSubmittingIcon: $scope.options.buttonSubmittingIcon || 'glyphicon glyphicon-refresh',
            buttonSuccessIcon: $scope.options.buttonSuccessIcon || 'glyphicon glyphicon-ok',
            buttonErrorIcon: $scope.options.buttonErrorIcon || 'glyphicon glyphicon-remove',
            formIsInvalid: $scope.options.formIsInvalid || '',
            animationCompleteTime: $scope.options.animationCompleteTime || '2000',
            iconsPosition: $scope.options.iconsPosition || 'left',
            onlyIcons: $scope.options.onlyIcons || false
          };
        }],
        template: '<button type="submit" class="btn {{buttonClass}} {{buttonSize}} {{onlyIcons}} btn-ng-bs-animated clearfix" ng-disabled="{{formIsInvalid}}">' + '<div class="icons pull-{{iconsPosition}}">' + '<span class="{{buttonInitialIcon}} icon-initial"></span>' + '<span class="{{buttonSubmittingIcon}} icon-spinner icon-submit hidden"></span>' + '<span class="{{buttonSuccessIcon}} icon-result icon-success hidden"></span>' + '<span class="{{buttonErrorIcon}} icon-result icon-error hidden"></span>' + '</div>' + '<div class="text {{buttonTextFloatClass}}">{{buttonText}}</div>' + '</button>',
        link: function(scope, element) {
          var el = element;
          var icons = {
            initial: angular.element(el[0].querySelector('.icon-initial')),
            submitting: angular.element(el[0].querySelector('.icon-submit')),
            result: angular.element(el[0].querySelectorAll('.icon-result')),
            success: angular.element(el[0].querySelector('.icon-success')),
            error: angular.element(el[0].querySelector('.icon-error'))
          };
          var endAnimation = function() {
            scope.result = null;
            scope.buttonClass = scope.options.buttonDefaultClass;
            scope.buttonText = scope.options.buttonDefaultText;
            el.removeClass('is-active').attr('disabled', false);
            icons.result.addClass('hidden');
          };
          var setButtonTextFloatClass = function() {
            if (scope.iconsPosition === 'left') {
              return 'pull-right';
            } else {
              return 'pull-left';
            }
          };
          scope.buttonClass = scope.options.buttonDefaultClass;
          scope.buttonSize = scope.options.buttonSizeClass;
          scope.formIsInvalid = scope.options.formIsInvalid;
          scope.iconsPosition = scope.options.iconsPosition;
          scope.buttonInitialIcon = scope.options.buttonInitialIcon;
          scope.buttonSubmittingIcon = scope.options.buttonSubmittingIcon;
          scope.buttonSuccessIcon = scope.options.buttonSuccessIcon;
          scope.buttonErrorIcon = scope.options.buttonErrorIcon;
          scope.iconsPosition = scope.options.iconsPosition;
          scope.buttonText = scope.options.buttonDefaultText;
          scope.buttonTextFloatClass = setButtonTextFloatClass();
          if (scope.options.onlyIcons) {
            scope.onlyIcons = 'icons-only';
          }
          ;
          scope.$watch('isSubmitting', function(newValue) {
            if (newValue) {
              scope.buttonClass = scope.options.buttonSubmittingClass;
              scope.buttonText = scope.options.buttonSubmittingText;
              el.attr('disabled', true).addClass('is-active');
              icons.submitting.removeClass('hidden');
            }
          }, true).bind(this);
          scope.$watch('result', function(newValue) {
            scope.isSubmitting = null;
            if (newValue === 'success') {
              scope.buttonClass = scope.options.buttonSuccessClass;
              scope.buttonText = scope.options.buttonSuccessText;
              icons.submitting.addClass('hidden');
              icons.success.removeClass('hidden');
              $timeout(endAnimation, scope.options.animationCompleteTime);
            }
            if (newValue === 'error') {
              scope.buttonClass = scope.options.buttonErrorClass;
              scope.buttonText = scope.options.buttonErrorText;
              icons.submitting.addClass('hidden');
              icons.error.removeClass('hidden');
              $timeout(endAnimation, scope.options.animationCompleteTime);
            }
          }, true).bind(this);
        }
      };
    }]);
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



System.register("app/core/layout/footer/layout.footer.controller", [], function($__export) {
  "use strict";
  var __moduleName = "app/core/layout/footer/layout.footer.controller";
  var FooterController;
  return {
    setters: [],
    execute: function() {
      FooterController = (function() {
        var FooterController = function FooterController() {
          this.copyrightDate = new Date();
        };
        return ($traceurRuntime.createClass)(FooterController, {}, {});
      }());
      $__export('default', FooterController);
    }
  };
});



System.register("app/core/config/core.config", [], function($__export) {
  "use strict";
  var __moduleName = "app/core/config/core.config";
  function coreConfig($locationProvider, $provide, $urlRouterProvider, RestangularProvider, localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('employee-scheduling');
    $provide.decorator('$uiViewScroll', function($delegate, $window) {
      return function() {
        $window.scrollTo(0, 0);
      };
    });
    RestangularProvider.setBaseUrl('/api/v1');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/404');
    $urlRouterProvider.when('/', '/employees');
  }
  $__export("coreConfig", coreConfig);
  return {
    setters: [],
    execute: function() {
      'use strict';
    }
  };
});



System.register("github:angular/bower-angular-mocks@1.3.8/angular-mocks", ["github:angular/bower-angular@1.3.8"], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, ["github:angular/bower-angular@1.3.8"]);
  (function() {
    "format global";
    "deps angular";
    (function(window, angular, undefined) {
      'use strict';
      angular.mock = {};
      angular.mock.$BrowserProvider = function() {
        this.$get = function() {
          return new angular.mock.$Browser();
        };
      };
      angular.mock.$Browser = function() {
        var self = this;
        this.isMock = true;
        self.$$url = "http://server/";
        self.$$lastUrl = self.$$url;
        self.pollFns = [];
        self.$$completeOutstandingRequest = angular.noop;
        self.$$incOutstandingRequestCount = angular.noop;
        self.onUrlChange = function(listener) {
          self.pollFns.push(function() {
            if (self.$$lastUrl !== self.$$url || self.$$state !== self.$$lastState) {
              self.$$lastUrl = self.$$url;
              self.$$lastState = self.$$state;
              listener(self.$$url, self.$$state);
            }
          });
          return listener;
        };
        self.$$checkUrlChange = angular.noop;
        self.cookieHash = {};
        self.lastCookieHash = {};
        self.deferredFns = [];
        self.deferredNextId = 0;
        self.defer = function(fn, delay) {
          delay = delay || 0;
          self.deferredFns.push({
            time: (self.defer.now + delay),
            fn: fn,
            id: self.deferredNextId
          });
          self.deferredFns.sort(function(a, b) {
            return a.time - b.time;
          });
          return self.deferredNextId++;
        };
        self.defer.now = 0;
        self.defer.cancel = function(deferId) {
          var fnIndex;
          angular.forEach(self.deferredFns, function(fn, index) {
            if (fn.id === deferId)
              fnIndex = index;
          });
          if (fnIndex !== undefined) {
            self.deferredFns.splice(fnIndex, 1);
            return true;
          }
          return false;
        };
        self.defer.flush = function(delay) {
          if (angular.isDefined(delay)) {
            self.defer.now += delay;
          } else {
            if (self.deferredFns.length) {
              self.defer.now = self.deferredFns[self.deferredFns.length - 1].time;
            } else {
              throw new Error('No deferred tasks to be flushed');
            }
          }
          while (self.deferredFns.length && self.deferredFns[0].time <= self.defer.now) {
            self.deferredFns.shift().fn();
          }
        };
        self.$$baseHref = '/';
        self.baseHref = function() {
          return this.$$baseHref;
        };
      };
      angular.mock.$Browser.prototype = {
        poll: function poll() {
          angular.forEach(this.pollFns, function(pollFn) {
            pollFn();
          });
        },
        addPollFn: function(pollFn) {
          this.pollFns.push(pollFn);
          return pollFn;
        },
        url: function(url, replace, state) {
          if (angular.isUndefined(state)) {
            state = null;
          }
          if (url) {
            this.$$url = url;
            this.$$state = angular.copy(state);
            return this;
          }
          return this.$$url;
        },
        state: function() {
          return this.$$state;
        },
        cookies: function(name, value) {
          if (name) {
            if (angular.isUndefined(value)) {
              delete this.cookieHash[name];
            } else {
              if (angular.isString(value) && value.length <= 4096) {
                this.cookieHash[name] = value;
              }
            }
          } else {
            if (!angular.equals(this.cookieHash, this.lastCookieHash)) {
              this.lastCookieHash = angular.copy(this.cookieHash);
              this.cookieHash = angular.copy(this.cookieHash);
            }
            return this.cookieHash;
          }
        },
        notifyWhenNoOutstandingRequests: function(fn) {
          fn();
        }
      };
      angular.mock.$ExceptionHandlerProvider = function() {
        var handler;
        this.mode = function(mode) {
          switch (mode) {
            case 'rethrow':
              handler = function(e) {
                throw e;
              };
              break;
            case 'log':
              var errors = [];
              handler = function(e) {
                if (arguments.length == 1) {
                  errors.push(e);
                } else {
                  errors.push([].slice.call(arguments, 0));
                }
              };
              handler.errors = errors;
              break;
            default:
              throw new Error("Unknown mode '" + mode + "', only 'log'/'rethrow' modes are allowed!");
          }
        };
        this.$get = function() {
          return handler;
        };
        this.mode('rethrow');
      };
      angular.mock.$LogProvider = function() {
        var debug = true;
        function concat(array1, array2, index) {
          return array1.concat(Array.prototype.slice.call(array2, index));
        }
        this.debugEnabled = function(flag) {
          if (angular.isDefined(flag)) {
            debug = flag;
            return this;
          } else {
            return debug;
          }
        };
        this.$get = function() {
          var $log = {
            log: function() {
              $log.log.logs.push(concat([], arguments, 0));
            },
            warn: function() {
              $log.warn.logs.push(concat([], arguments, 0));
            },
            info: function() {
              $log.info.logs.push(concat([], arguments, 0));
            },
            error: function() {
              $log.error.logs.push(concat([], arguments, 0));
            },
            debug: function() {
              if (debug) {
                $log.debug.logs.push(concat([], arguments, 0));
              }
            }
          };
          $log.reset = function() {
            $log.log.logs = [];
            $log.info.logs = [];
            $log.warn.logs = [];
            $log.error.logs = [];
            $log.debug.logs = [];
          };
          $log.assertEmpty = function() {
            var errors = [];
            angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel) {
              angular.forEach($log[logLevel].logs, function(log) {
                angular.forEach(log, function(logItem) {
                  errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' + (logItem.stack || ''));
                });
              });
            });
            if (errors.length) {
              errors.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or " + "an expected log message was not checked and removed:");
              errors.push('');
              throw new Error(errors.join('\n---------\n'));
            }
          };
          $log.reset();
          return $log;
        };
      };
      angular.mock.$IntervalProvider = function() {
        this.$get = ['$browser', '$rootScope', '$q', '$$q', function($browser, $rootScope, $q, $$q) {
          var repeatFns = [],
              nextRepeatId = 0,
              now = 0;
          var $interval = function(fn, delay, count, invokeApply) {
            var iteration = 0,
                skipApply = (angular.isDefined(invokeApply) && !invokeApply),
                deferred = (skipApply ? $$q : $q).defer(),
                promise = deferred.promise;
            count = (angular.isDefined(count)) ? count : 0;
            promise.then(null, null, fn);
            promise.$$intervalId = nextRepeatId;
            function tick() {
              deferred.notify(iteration++);
              if (count > 0 && iteration >= count) {
                var fnIndex;
                deferred.resolve(iteration);
                angular.forEach(repeatFns, function(fn, index) {
                  if (fn.id === promise.$$intervalId)
                    fnIndex = index;
                });
                if (fnIndex !== undefined) {
                  repeatFns.splice(fnIndex, 1);
                }
              }
              if (skipApply) {
                $browser.defer.flush();
              } else {
                $rootScope.$apply();
              }
            }
            repeatFns.push({
              nextTime: (now + delay),
              delay: delay,
              fn: tick,
              id: nextRepeatId,
              deferred: deferred
            });
            repeatFns.sort(function(a, b) {
              return a.nextTime - b.nextTime;
            });
            nextRepeatId++;
            return promise;
          };
          $interval.cancel = function(promise) {
            if (!promise)
              return false;
            var fnIndex;
            angular.forEach(repeatFns, function(fn, index) {
              if (fn.id === promise.$$intervalId)
                fnIndex = index;
            });
            if (fnIndex !== undefined) {
              repeatFns[fnIndex].deferred.reject('canceled');
              repeatFns.splice(fnIndex, 1);
              return true;
            }
            return false;
          };
          $interval.flush = function(millis) {
            now += millis;
            while (repeatFns.length && repeatFns[0].nextTime <= now) {
              var task = repeatFns[0];
              task.fn();
              task.nextTime += task.delay;
              repeatFns.sort(function(a, b) {
                return a.nextTime - b.nextTime;
              });
            }
            return millis;
          };
          return $interval;
        }];
      };
      var R_ISO8061_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;
      function jsonStringToDate(string) {
        var match;
        if (match = string.match(R_ISO8061_STR)) {
          var date = new Date(0),
              tzHour = 0,
              tzMin = 0;
          if (match[9]) {
            tzHour = int(match[9] + match[10]);
            tzMin = int(match[9] + match[11]);
          }
          date.setUTCFullYear(int(match[1]), int(match[2]) - 1, int(match[3]));
          date.setUTCHours(int(match[4] || 0) - tzHour, int(match[5] || 0) - tzMin, int(match[6] || 0), int(match[7] || 0));
          return date;
        }
        return string;
      }
      function int(str) {
        return parseInt(str, 10);
      }
      function padNumber(num, digits, trim) {
        var neg = '';
        if (num < 0) {
          neg = '-';
          num = -num;
        }
        num = '' + num;
        while (num.length < digits)
          num = '0' + num;
        if (trim)
          num = num.substr(num.length - digits);
        return neg + num;
      }
      angular.mock.TzDate = function(offset, timestamp) {
        var self = new Date(0);
        if (angular.isString(timestamp)) {
          var tsStr = timestamp;
          self.origDate = jsonStringToDate(timestamp);
          timestamp = self.origDate.getTime();
          if (isNaN(timestamp))
            throw {
              name: "Illegal Argument",
              message: "Arg '" + tsStr + "' passed into TzDate constructor is not a valid date string"
            };
        } else {
          self.origDate = new Date(timestamp);
        }
        var localOffset = new Date(timestamp).getTimezoneOffset();
        self.offsetDiff = localOffset * 60 * 1000 - offset * 1000 * 60 * 60;
        self.date = new Date(timestamp + self.offsetDiff);
        self.getTime = function() {
          return self.date.getTime() - self.offsetDiff;
        };
        self.toLocaleDateString = function() {
          return self.date.toLocaleDateString();
        };
        self.getFullYear = function() {
          return self.date.getFullYear();
        };
        self.getMonth = function() {
          return self.date.getMonth();
        };
        self.getDate = function() {
          return self.date.getDate();
        };
        self.getHours = function() {
          return self.date.getHours();
        };
        self.getMinutes = function() {
          return self.date.getMinutes();
        };
        self.getSeconds = function() {
          return self.date.getSeconds();
        };
        self.getMilliseconds = function() {
          return self.date.getMilliseconds();
        };
        self.getTimezoneOffset = function() {
          return offset * 60;
        };
        self.getUTCFullYear = function() {
          return self.origDate.getUTCFullYear();
        };
        self.getUTCMonth = function() {
          return self.origDate.getUTCMonth();
        };
        self.getUTCDate = function() {
          return self.origDate.getUTCDate();
        };
        self.getUTCHours = function() {
          return self.origDate.getUTCHours();
        };
        self.getUTCMinutes = function() {
          return self.origDate.getUTCMinutes();
        };
        self.getUTCSeconds = function() {
          return self.origDate.getUTCSeconds();
        };
        self.getUTCMilliseconds = function() {
          return self.origDate.getUTCMilliseconds();
        };
        self.getDay = function() {
          return self.date.getDay();
        };
        if (self.toISOString) {
          self.toISOString = function() {
            return padNumber(self.origDate.getUTCFullYear(), 4) + '-' + padNumber(self.origDate.getUTCMonth() + 1, 2) + '-' + padNumber(self.origDate.getUTCDate(), 2) + 'T' + padNumber(self.origDate.getUTCHours(), 2) + ':' + padNumber(self.origDate.getUTCMinutes(), 2) + ':' + padNumber(self.origDate.getUTCSeconds(), 2) + '.' + padNumber(self.origDate.getUTCMilliseconds(), 3) + 'Z';
          };
        }
        var unimplementedMethods = ['getUTCDay', 'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds', 'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear', 'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds', 'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString', 'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'];
        angular.forEach(unimplementedMethods, function(methodName) {
          self[methodName] = function() {
            throw new Error("Method '" + methodName + "' is not implemented in the TzDate mock");
          };
        });
        return self;
      };
      angular.mock.TzDate.prototype = Date.prototype;
      angular.mock.animate = angular.module('ngAnimateMock', ['ng']).config(['$provide', function($provide) {
        var reflowQueue = [];
        $provide.value('$$animateReflow', function(fn) {
          var index = reflowQueue.length;
          reflowQueue.push(fn);
          return function cancel() {
            reflowQueue.splice(index, 1);
          };
        });
        $provide.decorator('$animate', ['$delegate', '$$asyncCallback', '$timeout', '$browser', function($delegate, $$asyncCallback, $timeout, $browser) {
          var animate = {
            queue: [],
            cancel: $delegate.cancel,
            enabled: $delegate.enabled,
            triggerCallbackEvents: function() {
              $$asyncCallback.flush();
            },
            triggerCallbackPromise: function() {
              $timeout.flush(0);
            },
            triggerCallbacks: function() {
              this.triggerCallbackEvents();
              this.triggerCallbackPromise();
            },
            triggerReflow: function() {
              angular.forEach(reflowQueue, function(fn) {
                fn();
              });
              reflowQueue = [];
            }
          };
          angular.forEach(['animate', 'enter', 'leave', 'move', 'addClass', 'removeClass', 'setClass'], function(method) {
            animate[method] = function() {
              animate.queue.push({
                event: method,
                element: arguments[0],
                options: arguments[arguments.length - 1],
                args: arguments
              });
              return $delegate[method].apply($delegate, arguments);
            };
          });
          return animate;
        }]);
      }]);
      angular.mock.dump = function(object) {
        return serialize(object);
        function serialize(object) {
          var out;
          if (angular.isElement(object)) {
            object = angular.element(object);
            out = angular.element('<div></div>');
            angular.forEach(object, function(element) {
              out.append(angular.element(element).clone());
            });
            out = out.html();
          } else if (angular.isArray(object)) {
            out = [];
            angular.forEach(object, function(o) {
              out.push(serialize(o));
            });
            out = '[ ' + out.join(', ') + ' ]';
          } else if (angular.isObject(object)) {
            if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply)) {
              out = serializeScope(object);
            } else if (object instanceof Error) {
              out = object.stack || ('' + object.name + ': ' + object.message);
            } else {
              out = angular.toJson(object, true);
            }
          } else {
            out = String(object);
          }
          return out;
        }
        function serializeScope(scope, offset) {
          offset = offset || '  ';
          var log = [offset + 'Scope(' + scope.$id + '): {'];
          for (var key in scope) {
            if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/)) {
              log.push('  ' + key + ': ' + angular.toJson(scope[key]));
            }
          }
          var child = scope.$$childHead;
          while (child) {
            log.push(serializeScope(child, offset + '  '));
            child = child.$$nextSibling;
          }
          log.push('}');
          return log.join('\n' + offset);
        }
      };
      angular.mock.$HttpBackendProvider = function() {
        this.$get = ['$rootScope', '$timeout', createHttpBackendMock];
      };
      function createHttpBackendMock($rootScope, $timeout, $delegate, $browser) {
        var definitions = [],
            expectations = [],
            responses = [],
            responsesPush = angular.bind(responses, responses.push),
            copy = angular.copy;
        function createResponse(status, data, headers, statusText) {
          if (angular.isFunction(status))
            return status;
          return function() {
            return angular.isNumber(status) ? [status, data, headers, statusText] : [200, status, data, headers];
          };
        }
        function $httpBackend(method, url, data, callback, headers, timeout, withCredentials) {
          var xhr = new MockXhr(),
              expectation = expectations[0],
              wasExpected = false;
          function prettyPrint(data) {
            return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp) ? data : angular.toJson(data);
          }
          function wrapResponse(wrapped) {
            if (!$browser && timeout) {
              timeout.then ? timeout.then(handleTimeout) : $timeout(handleTimeout, timeout);
            }
            return handleResponse;
            function handleResponse() {
              var response = wrapped.response(method, url, data, headers);
              xhr.$$respHeaders = response[2];
              callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(), copy(response[3] || ''));
            }
            function handleTimeout() {
              for (var i = 0,
                  ii = responses.length; i < ii; i++) {
                if (responses[i] === handleResponse) {
                  responses.splice(i, 1);
                  callback(-1, undefined, '');
                  break;
                }
              }
            }
          }
          if (expectation && expectation.match(method, url)) {
            if (!expectation.matchData(data))
              throw new Error('Expected ' + expectation + ' with different data\n' + 'EXPECTED: ' + prettyPrint(expectation.data) + '\nGOT:      ' + data);
            if (!expectation.matchHeaders(headers))
              throw new Error('Expected ' + expectation + ' with different headers\n' + 'EXPECTED: ' + prettyPrint(expectation.headers) + '\nGOT:      ' + prettyPrint(headers));
            expectations.shift();
            if (expectation.response) {
              responses.push(wrapResponse(expectation));
              return;
            }
            wasExpected = true;
          }
          var i = -1,
              definition;
          while ((definition = definitions[++i])) {
            if (definition.match(method, url, data, headers || {})) {
              if (definition.response) {
                ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
              } else if (definition.passThrough) {
                $delegate(method, url, data, callback, headers, timeout, withCredentials);
              } else
                throw new Error('No response defined !');
              return;
            }
          }
          throw wasExpected ? new Error('No response defined !') : new Error('Unexpected request: ' + method + ' ' + url + '\n' + (expectation ? 'Expected ' + expectation : 'No more request expected'));
        }
        $httpBackend.when = function(method, url, data, headers) {
          var definition = new MockHttpExpectation(method, url, data, headers),
              chain = {respond: function(status, data, headers, statusText) {
                  definition.passThrough = undefined;
                  definition.response = createResponse(status, data, headers, statusText);
                  return chain;
                }};
          if ($browser) {
            chain.passThrough = function() {
              definition.response = undefined;
              definition.passThrough = true;
              return chain;
            };
          }
          definitions.push(definition);
          return chain;
        };
        createShortMethods('when');
        $httpBackend.expect = function(method, url, data, headers) {
          var expectation = new MockHttpExpectation(method, url, data, headers),
              chain = {respond: function(status, data, headers, statusText) {
                  expectation.response = createResponse(status, data, headers, statusText);
                  return chain;
                }};
          expectations.push(expectation);
          return chain;
        };
        createShortMethods('expect');
        $httpBackend.flush = function(count, digest) {
          if (digest !== false)
            $rootScope.$digest();
          if (!responses.length)
            throw new Error('No pending request to flush !');
          if (angular.isDefined(count) && count !== null) {
            while (count--) {
              if (!responses.length)
                throw new Error('No more pending request to flush !');
              responses.shift()();
            }
          } else {
            while (responses.length) {
              responses.shift()();
            }
          }
          $httpBackend.verifyNoOutstandingExpectation(digest);
        };
        $httpBackend.verifyNoOutstandingExpectation = function(digest) {
          if (digest !== false)
            $rootScope.$digest();
          if (expectations.length) {
            throw new Error('Unsatisfied requests: ' + expectations.join(', '));
          }
        };
        $httpBackend.verifyNoOutstandingRequest = function() {
          if (responses.length) {
            throw new Error('Unflushed requests: ' + responses.length);
          }
        };
        $httpBackend.resetExpectations = function() {
          expectations.length = 0;
          responses.length = 0;
        };
        return $httpBackend;
        function createShortMethods(prefix) {
          angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD'], function(method) {
            $httpBackend[prefix + method] = function(url, headers) {
              return $httpBackend[prefix](method, url, undefined, headers);
            };
          });
          angular.forEach(['PUT', 'POST', 'PATCH'], function(method) {
            $httpBackend[prefix + method] = function(url, data, headers) {
              return $httpBackend[prefix](method, url, data, headers);
            };
          });
        }
      }
      function MockHttpExpectation(method, url, data, headers) {
        this.data = data;
        this.headers = headers;
        this.match = function(m, u, d, h) {
          if (method != m)
            return false;
          if (!this.matchUrl(u))
            return false;
          if (angular.isDefined(d) && !this.matchData(d))
            return false;
          if (angular.isDefined(h) && !this.matchHeaders(h))
            return false;
          return true;
        };
        this.matchUrl = function(u) {
          if (!url)
            return true;
          if (angular.isFunction(url.test))
            return url.test(u);
          if (angular.isFunction(url))
            return url(u);
          return url == u;
        };
        this.matchHeaders = function(h) {
          if (angular.isUndefined(headers))
            return true;
          if (angular.isFunction(headers))
            return headers(h);
          return angular.equals(headers, h);
        };
        this.matchData = function(d) {
          if (angular.isUndefined(data))
            return true;
          if (data && angular.isFunction(data.test))
            return data.test(d);
          if (data && angular.isFunction(data))
            return data(d);
          if (data && !angular.isString(data)) {
            return angular.equals(angular.fromJson(angular.toJson(data)), angular.fromJson(d));
          }
          return data == d;
        };
        this.toString = function() {
          return method + ' ' + url;
        };
      }
      function createMockXhr() {
        return new MockXhr();
      }
      function MockXhr() {
        MockXhr.$$lastInstance = this;
        this.open = function(method, url, async) {
          this.$$method = method;
          this.$$url = url;
          this.$$async = async;
          this.$$reqHeaders = {};
          this.$$respHeaders = {};
        };
        this.send = function(data) {
          this.$$data = data;
        };
        this.setRequestHeader = function(key, value) {
          this.$$reqHeaders[key] = value;
        };
        this.getResponseHeader = function(name) {
          var header = this.$$respHeaders[name];
          if (header)
            return header;
          name = angular.lowercase(name);
          header = this.$$respHeaders[name];
          if (header)
            return header;
          header = undefined;
          angular.forEach(this.$$respHeaders, function(headerVal, headerName) {
            if (!header && angular.lowercase(headerName) == name)
              header = headerVal;
          });
          return header;
        };
        this.getAllResponseHeaders = function() {
          var lines = [];
          angular.forEach(this.$$respHeaders, function(value, key) {
            lines.push(key + ': ' + value);
          });
          return lines.join('\n');
        };
        this.abort = angular.noop;
      }
      angular.mock.$TimeoutDecorator = ['$delegate', '$browser', function($delegate, $browser) {
        $delegate.flush = function(delay) {
          $browser.defer.flush(delay);
        };
        $delegate.verifyNoPendingTasks = function() {
          if ($browser.deferredFns.length) {
            throw new Error('Deferred tasks to flush (' + $browser.deferredFns.length + '): ' + formatPendingTasksAsString($browser.deferredFns));
          }
        };
        function formatPendingTasksAsString(tasks) {
          var result = [];
          angular.forEach(tasks, function(task) {
            result.push('{id: ' + task.id + ', ' + 'time: ' + task.time + '}');
          });
          return result.join(', ');
        }
        return $delegate;
      }];
      angular.mock.$RAFDecorator = ['$delegate', function($delegate) {
        var queue = [];
        var rafFn = function(fn) {
          var index = queue.length;
          queue.push(fn);
          return function() {
            queue.splice(index, 1);
          };
        };
        rafFn.supported = $delegate.supported;
        rafFn.flush = function() {
          if (queue.length === 0) {
            throw new Error('No rAF callbacks present');
          }
          var length = queue.length;
          for (var i = 0; i < length; i++) {
            queue[i]();
          }
          queue = [];
        };
        return rafFn;
      }];
      angular.mock.$AsyncCallbackDecorator = ['$delegate', function($delegate) {
        var callbacks = [];
        var addFn = function(fn) {
          callbacks.push(fn);
        };
        addFn.flush = function() {
          angular.forEach(callbacks, function(fn) {
            fn();
          });
          callbacks = [];
        };
        return addFn;
      }];
      angular.mock.$RootElementProvider = function() {
        this.$get = function() {
          return angular.element('<div ng-app></div>');
        };
      };
      angular.module('ngMock', ['ng']).provider({
        $browser: angular.mock.$BrowserProvider,
        $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
        $log: angular.mock.$LogProvider,
        $interval: angular.mock.$IntervalProvider,
        $httpBackend: angular.mock.$HttpBackendProvider,
        $rootElement: angular.mock.$RootElementProvider
      }).config(['$provide', function($provide) {
        $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
        $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
        $provide.decorator('$$asyncCallback', angular.mock.$AsyncCallbackDecorator);
        $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
      }]);
      angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide) {
        $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
      }]);
      angular.mock.e2e = {};
      angular.mock.e2e.$httpBackendDecorator = ['$rootScope', '$timeout', '$delegate', '$browser', createHttpBackendMock];
      angular.mock.$RootScopeDecorator = ['$delegate', function($delegate) {
        var $rootScopePrototype = Object.getPrototypeOf($delegate);
        $rootScopePrototype.$countChildScopes = countChildScopes;
        $rootScopePrototype.$countWatchers = countWatchers;
        return $delegate;
        function countChildScopes() {
          var count = 0;
          var pendingChildHeads = [this.$$childHead];
          var currentScope;
          while (pendingChildHeads.length) {
            currentScope = pendingChildHeads.shift();
            while (currentScope) {
              count += 1;
              pendingChildHeads.push(currentScope.$$childHead);
              currentScope = currentScope.$$nextSibling;
            }
          }
          return count;
        }
        function countWatchers() {
          var count = this.$$watchers ? this.$$watchers.length : 0;
          var pendingChildHeads = [this.$$childHead];
          var currentScope;
          while (pendingChildHeads.length) {
            currentScope = pendingChildHeads.shift();
            while (currentScope) {
              count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
              pendingChildHeads.push(currentScope.$$childHead);
              currentScope = currentScope.$$nextSibling;
            }
          }
          return count;
        }
      }];
      if (window.jasmine || window.mocha) {
        var currentSpec = null,
            isSpecRunning = function() {
              return !!currentSpec;
            };
        (window.beforeEach || window.setup)(function() {
          currentSpec = this;
        });
        (window.afterEach || window.teardown)(function() {
          var injector = currentSpec.$injector;
          angular.forEach(currentSpec.$modules, function(module) {
            if (module && module.$$hashKey) {
              module.$$hashKey = undefined;
            }
          });
          currentSpec.$injector = null;
          currentSpec.$modules = null;
          currentSpec = null;
          if (injector) {
            injector.get('$rootElement').off();
            injector.get('$browser').pollFns.length = 0;
          }
          angular.forEach(angular.element.fragments, function(val, key) {
            delete angular.element.fragments[key];
          });
          MockXhr.$$lastInstance = null;
          angular.forEach(angular.callbacks, function(val, key) {
            delete angular.callbacks[key];
          });
          angular.callbacks.counter = 0;
        });
        window.module = angular.mock.module = function() {
          var moduleFns = Array.prototype.slice.call(arguments, 0);
          return isSpecRunning() ? workFn() : workFn;
          function workFn() {
            if (currentSpec.$injector) {
              throw new Error('Injector already created, can not register a module!');
            } else {
              var modules = currentSpec.$modules || (currentSpec.$modules = []);
              angular.forEach(moduleFns, function(module) {
                if (angular.isObject(module) && !angular.isArray(module)) {
                  modules.push(function($provide) {
                    angular.forEach(module, function(value, key) {
                      $provide.value(key, value);
                    });
                  });
                } else {
                  modules.push(module);
                }
              });
            }
          }
        };
        var ErrorAddingDeclarationLocationStack = function(e, errorForStack) {
          this.message = e.message;
          this.name = e.name;
          if (e.line)
            this.line = e.line;
          if (e.sourceId)
            this.sourceId = e.sourceId;
          if (e.stack && errorForStack)
            this.stack = e.stack + '\n' + errorForStack.stack;
          if (e.stackArray)
            this.stackArray = e.stackArray;
        };
        ErrorAddingDeclarationLocationStack.prototype.toString = Error.prototype.toString;
        window.inject = angular.mock.inject = function() {
          var blockFns = Array.prototype.slice.call(arguments, 0);
          var errorForStack = new Error('Declaration Location');
          return isSpecRunning() ? workFn.call(currentSpec) : workFn;
          function workFn() {
            var modules = currentSpec.$modules || [];
            var strictDi = !!currentSpec.$injectorStrict;
            modules.unshift('ngMock');
            modules.unshift('ng');
            var injector = currentSpec.$injector;
            if (!injector) {
              if (strictDi) {
                angular.forEach(modules, function(moduleFn) {
                  if (typeof moduleFn === "function") {
                    angular.injector.$$annotate(moduleFn);
                  }
                });
              }
              injector = currentSpec.$injector = angular.injector(modules, strictDi);
              currentSpec.$injectorStrict = strictDi;
            }
            for (var i = 0,
                ii = blockFns.length; i < ii; i++) {
              if (currentSpec.$injectorStrict) {
                injector.annotate(blockFns[i]);
              }
              try {
                injector.invoke(blockFns[i] || angular.noop, this);
              } catch (e) {
                if (e.stack && errorForStack) {
                  throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
                }
                throw e;
              } finally {
                errorForStack = null;
              }
            }
          }
        };
        angular.mock.inject.strictDi = function(value) {
          value = arguments.length ? !!value : true;
          return isSpecRunning() ? workFn() : workFn;
          function workFn() {
            if (value !== currentSpec.$injectorStrict) {
              if (currentSpec.$injector) {
                throw new Error('Injector already created, can not modify strict annotations');
              } else {
                currentSpec.$injectorStrict = value;
              }
            }
          }
        };
      }
    })(window, window.angular);
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



System.register("app/components/employee/employee.resource", [], function($__export) {
  "use strict";
  var __moduleName = "app/components/employee/employee.resource";
  var EmployeeResource;
  return {
    setters: [],
    execute: function() {
      EmployeeResource = (function() {
        var EmployeeResource = function EmployeeResource(Restangular) {
          this.Restangular = Restangular;
        };
        return ($traceurRuntime.createClass)(EmployeeResource, {
          get: function(id) {
            return this.Restangular.one('employees', id).get();
          },
          getList: function() {
            return this.Restangular.all('employees').getList();
          },
          delete: function(id) {
            return this.Restangular.one('employees', id).remove();
          },
          objectKeys: function(object) {
            return Object.keys(this.Restangular.stripRestangular(object));
          },
          emptyObjectPropertiesCounter: function(object) {
            var i = 0;
            for (var key in object) {
              if (object.hasOwnProperty(key) && !object[key]) {
                i++;
              }
              if (typeof object[key] === 'object') {
                i = this.emptyObjectPropertiesCounter(object[key]) + i;
              }
            }
            return i;
          },
          calculateProfileCompleteness: function(employee) {
            employee = this.Restangular.stripRestangular(employee);
            var totalObjectProperties = (this.objectKeys(employee).length + this.objectKeys(employee.contactDetails).length + this.objectKeys(employee.bankDetails).length + this.objectKeys(employee.hourlyRates).length) - 3;
            var totalEmptyObjectProperties = this.emptyObjectPropertiesCounter(this.Restangular.stripRestangular(employee));
            return (((totalObjectProperties - totalEmptyObjectProperties) * 100) / totalObjectProperties).toFixed(0);
          }
        }, {});
      }());
      $__export('default', EmployeeResource);
    }
  };
});



System.register("app/components/employee/fixtures/employee_1.json!github:systemjs/plugin-json@0.1.0", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "id": "1",
    "version": 2,
    "avatar": "me.jpg",
    "firstName": "Martin",
    "lastName": "Micunda",
    "email": "martinmicunda@hotmail.com",
    "language": "en",
    "position": "ceo",
    "role": "admin",
    "status": "active",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Martin Micunda"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  };
  global.define = __define;
  return module.exports;
});



System.register("app/components/employee/fixtures/employees.json!github:systemjs/plugin-json@0.1.0", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = [{
    "id": "1",
    "version": 2,
    "avatar": "me.jpg",
    "firstName": "Martin",
    "lastName": "Micunda",
    "email": "martinmicunda@hotmail.com",
    "language": "en",
    "position": "ceo",
    "role": "admin",
    "status": "active",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Martin Micunda"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "2",
    "version": 2,
    "avatar": "avatar.png",
    "firstName": "Edmund",
    "lastName": "Wong",
    "email": "edmund@yahoo.com",
    "language": "en",
    "position": "sales",
    "role": "employee",
    "status": "active",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Edmund Wong"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "3",
    "version": 2,
    "avatar": "avatar.png",
    "firstName": "Harvinder",
    "lastName": "Singh",
    "email": "harvinder@gmail.com",
    "language": "en",
    "position": "animator",
    "role": "employee",
    "status": "pending",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Harvinder Singh"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "4",
    "version": 2,
    "avatar": "avatar.png",
    "firstName": "Terry",
    "lastName": "Khoo",
    "email": "terry@gmail.com",
    "language": "en",
    "position": "animator",
    "role": "manager",
    "status": "inactive",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Terry Khoo"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "5",
    "version": 2,
    "avatar": "me.jpg",
    "firstName": "Martin",
    "lastName": "Micunda 5",
    "email": "martinmicunda@hotmail.com",
    "language": "en",
    "position": "ceo",
    "role": "admin",
    "status": "active",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Martin Micunda"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "6",
    "version": 2,
    "avatar": "avatar.png",
    "firstName": "Edmund",
    "lastName": "Wong 6",
    "email": "edmund@yahoo.com",
    "language": "en",
    "position": "sales",
    "role": "employee",
    "status": "active",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Edmund Wong"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "7",
    "version": 2,
    "avatar": "avatar.png",
    "firstName": "Harvinder",
    "lastName": "Singh 7",
    "email": "harvinder@gmail.com",
    "language": "en",
    "position": "animator",
    "role": "employee",
    "status": "pending",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Harvinder Singh"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "8",
    "version": 2,
    "avatar": "avatar.png",
    "firstName": "Terry",
    "lastName": "Khoo 8",
    "email": "terry@gmail.com",
    "language": "en",
    "position": "animator",
    "role": "manager",
    "status": "inactive",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Terry Khoo"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "9",
    "version": 2,
    "avatar": "avatar.png",
    "firstName": "Harvinder",
    "lastName": "Singh 9",
    "email": "harvinder@gmail.com",
    "language": "en",
    "position": "animator",
    "role": "employee",
    "status": "pending",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Harvinder Singh"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "10",
    "version": 2,
    "avatar": "avatar.png",
    "firstName": "Terry",
    "lastName": "Khoo 10",
    "email": "terry@gmail.com",
    "language": "en",
    "position": "animator",
    "role": "manager",
    "status": "inactive",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Terry Khoo"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "11",
    "version": 2,
    "avatar": "avatar.png",
    "firstName": "Harvinder",
    "lastName": "Singh 11",
    "email": "harvinder@gmail.com",
    "language": "en",
    "position": "animator",
    "role": "employee",
    "status": "pending",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Harvinder Singh"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }, {
    "id": "12",
    "version": 2,
    "avatar": "avatar.png",
    "firstName": "Terry",
    "lastName": "Khoo 12",
    "email": "terry@gmail.com",
    "language": "en",
    "position": "animator",
    "role": "manager",
    "status": "inactive",
    "contactDetails": {
      "phoneNumber": "+353767889",
      "address": "12 Smithfield",
      "city": "Dublin",
      "zipCode": "7"
    },
    "bankDetails": {
      "bankName": "AIB",
      "accountNumber": "123456890YU",
      "accountName": "Terry Khoo"
    },
    "hourlyRates": {
      "rate": 8,
      "currencyCode": "EUR"
    }
  }];
  global.define = __define;
  return module.exports;
});



System.register("app/components/language/language.resource", [], function($__export) {
  "use strict";
  var __moduleName = "app/components/language/language.resource";
  var LanguageResource;
  return {
    setters: [],
    execute: function() {
      LanguageResource = (function() {
        var LanguageResource = function LanguageResource(Restangular) {
          this.Restangular = Restangular;
        };
        return ($traceurRuntime.createClass)(LanguageResource, {getList: function() {
            return this.Restangular.all('languages').withHttpConfig({cache: true}).getList();
          }}, {});
      }());
      $__export('default', LanguageResource);
    }
  };
});



System.register("app/components/language/fixtures/languages.json!github:systemjs/plugin-json@0.1.0", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = [{
    "code": "en",
    "name": "English"
  }, {
    "code": "sk",
    "name": "Slovenčina"
  }];
  global.define = __define;
  return module.exports;
});



System.register("app/components/position/position.resource", [], function($__export) {
  "use strict";
  var __moduleName = "app/components/position/position.resource";
  var PositionResource;
  return {
    setters: [],
    execute: function() {
      PositionResource = (function() {
        var PositionResource = function PositionResource(Restangular) {
          this.Restangular = Restangular;
        };
        return ($traceurRuntime.createClass)(PositionResource, {getList: function(query) {
            return this.Restangular.all('positions').withHttpConfig({cache: true}).getList(query);
          }}, {});
      }());
      $__export('default', PositionResource);
    }
  };
});



System.register("app/components/position/fixtures/positions_en.json!github:systemjs/plugin-json@0.1.0", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = [{
    "code": "cooker",
    "name": "Cooker"
  }, {
    "code": "animator",
    "name": "Animator"
  }, {
    "code": "sales",
    "name": "Sales"
  }, {
    "code": "ceo",
    "name": "CEO"
  }];
  global.define = __define;
  return module.exports;
});



System.register("app/components/position/fixtures/positions_sk.json!github:systemjs/plugin-json@0.1.0", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = [{
    "code": "cooker",
    "name": "Kuchár"
  }, {
    "code": "animator",
    "name": "Animátor"
  }, {
    "code": "sales",
    "name": "Sales"
  }, {
    "code": "ceo",
    "name": "CEO"
  }];
  global.define = __define;
  return module.exports;
});



System.register("app/components/role/role.resource", [], function($__export) {
  "use strict";
  var __moduleName = "app/components/role/role.resource";
  var RoleResource;
  return {
    setters: [],
    execute: function() {
      RoleResource = (function() {
        var RoleResource = function RoleResource(Restangular) {
          this.Restangular = Restangular;
        };
        return ($traceurRuntime.createClass)(RoleResource, {getList: function(query) {
            return this.Restangular.all('roles').withHttpConfig({cache: true}).getList(query);
          }}, {});
      }());
      $__export('default', RoleResource);
    }
  };
});



System.register("app/components/role/fixtures/roles_en.json!github:systemjs/plugin-json@0.1.0", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = [{
    "code": "employee",
    "name": "Employee"
  }, {
    "code": "manager",
    "name": "Manager"
  }, {
    "code": "admin",
    "name": "Admin"
  }];
  global.define = __define;
  return module.exports;
});



System.register("app/components/role/fixtures/roles_sk.json!github:systemjs/plugin-json@0.1.0", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = [{
    "code": "employee",
    "name": "Zamestnanec"
  }, {
    "code": "manager",
    "name": "Manažér"
  }, {
    "code": "admin",
    "name": "Administrátor"
  }];
  global.define = __define;
  return module.exports;
});



System.register("app/components/ui-widgets/form/unsaved-form-warning-modal", [], function($__export) {
  "use strict";
  var __moduleName = "app/components/ui-widgets/form/unsaved-form-warning-modal";
  var UnsavedFormsService;
  function mmUnsavedFormWarningModal($modal, $state, UnsavedFormsService) {
    'use strict';
    var directive = {
      require: '^form',
      restrict: 'A',
      scope: {resetForm: '&mmUnsavedFormWarningModal'},
      link: link
    };
    return directive;
    function link(scope, element, attrs, formCtrl) {
      UnsavedFormsService.add(formCtrl);
      var onRouteChangeOff = scope.$on('$stateChangeStart', function(event, toState) {
        if (!UnsavedFormsService.areFormsClean()) {
          $modal.open({
            templateUrl: 'unsavedWarningModal.html',
            controller: ['$modalInstance', '$state', function($modalInstance, $state) {
              var vm = this;
              vm.ok = function() {
                $modalInstance.close();
                onRouteChangeOff();
                $state.go(toState.name);
                UnsavedFormsService.remove(formCtrl);
                scope.resetForm();
              };
              vm.cancel = function() {
                $modalInstance.dismiss('cancel');
              };
            }],
            controllerAs: 'vm'
          });
          event.preventDefault();
        }
      });
    }
  }
  return {
    setters: [],
    execute: function() {
      UnsavedFormsService = (function() {
        var UnsavedFormsService = function UnsavedFormsService() {
          this.forms = [];
        };
        return ($traceurRuntime.createClass)(UnsavedFormsService, {
          add: function(form) {
            this.forms.push(form);
          },
          remove: function(form) {
            var index = this.forms.indexOf(form);
            this.forms.splice(index, 1);
          },
          areFormsClean: function() {
            var areAllFormsClean = true;
            for (var $__1 = this.forms[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__2; !($__2 = $__1.next()).done; ) {
              var form = $__2.value;
              {
                if (form.$dirty) {
                  areAllFormsClean = false;
                } else {
                  this.remove(form);
                }
              }
            }
            return areAllFormsClean;
          }
        }, {});
      }());
      $__export('default', angular.module('mm.unsavedFormWarningModal', []).directive('mmUnsavedFormWarningModal', mmUnsavedFormWarningModal).service('UnsavedFormsService', UnsavedFormsService));
    }
  };
});



System.register("app/components/ui-widgets/really-click/really-click", [], function($__export) {
  "use strict";
  var __moduleName = "app/components/ui-widgets/really-click/really-click";
  function mmReallyClick($modal) {
    'use strict';
    var directive = {
      restrict: 'EA',
      scope: {mmReallyClick: '&'},
      link: link
    };
    return directive;
    function link(scope, element) {
      element.bind('click', function() {
        var modalInstance = $modal.open({
          templateUrl: 'deleteModal.html',
          controller: ['$modalInstance', function($modalInstance) {
            var vm = this;
            vm.ok = function() {
              $modalInstance.close();
            };
            vm.cancel = function() {
              $modalInstance.dismiss('cancel');
            };
          }],
          controllerAs: 'vm'
        });
        modalInstance.result.then(function() {
          scope.mmReallyClick();
        });
      });
    }
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', angular.module('mm.mmReallyClickWidget', []).directive('mmReallyClick', mmReallyClick));
    }
  };
});



System.register("app/components/ui-widgets/mm-scroll-up/scroll-up.directive", [], function($__export) {
  "use strict";
  var __moduleName = "app/components/ui-widgets/mm-scroll-up/scroll-up.directive";
  function mmScrollUp($location, $anchorScroll) {
    'use strict';
    var directive = {
      restrict: 'AC',
      link: link
    };
    return directive;
    function link(scope, element, attrs) {
      element.on('click', function() {
        $location.hash(attrs.uiScroll);
        $anchorScroll();
      });
    }
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', angular.module('mmScrollUp', []).directive('mmScrollUp', mmScrollUp));
    }
  };
});



System.register("app/components/pagination/pagination", [], function($__export) {
  "use strict";
  var __moduleName = "app/components/pagination/pagination";
  function StartFromFilter() {
    'use strict';
    return function(input, start) {
      start = +start;
      return input.slice(start);
    };
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', angular.module('mm.pagination', []).filter('startFrom', StartFromFilter));
    }
  };
});



System.register("app/states/account/account-details/account-details.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/account-details/account-details.route";
  function accountDetailsRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('account.account-details', {
      url: '/account-details',
      templateUrl: 'app/states/account/account-details/account-details.html'
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', accountDetailsRoute);
    }
  };
});



System.register("app/states/account/account-settings/account-settings.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/account-settings/account-settings.route";
  function accountSettingsRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('account.account-settings', {
      url: '/account-settings',
      templateUrl: 'app/states/account/account-settings/account-settings.html'
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', accountSettingsRoute);
    }
  };
});



System.register("app/states/account/contact-details/contact-details.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/contact-details/contact-details.route";
  function contactDetailsRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('account.contact-details', {
      url: '/contact-details',
      templateUrl: 'app/states/account/contact-details/contact-details.html'
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', contactDetailsRoute);
    }
  };
});



System.register("app/states/account/bank-details/bank-details.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/bank-details/bank-details.route";
  function bankDetailsRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('account.bank-details', {
      url: '/bank-details',
      templateUrl: 'app/states/account/bank-details/bank-details.html'
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', bankDetailsRoute);
    }
  };
});



System.register("app/states/account/account.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/account.route";
  function accountRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('account', {
      url: '/account',
      abstract: true,
      templateUrl: 'app/states/account/account.html',
      controller: 'AccountController as vm',
      resolve: {
        employee: function(EmployeeResource) {
          return EmployeeResource.get('1');
        },
        languages: function(LanguageResource) {
          return LanguageResource.getList();
        },
        positions: function(PositionResource) {
          return PositionResource.getList({lang: 'en'});
        }
      }
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', accountRoute);
    }
  };
});



System.register("app/states/account/account.controller", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/account.controller";
  var AccountController;
  return {
    setters: [],
    execute: function() {
      AccountController = (function() {
        var AccountController = function AccountController(employee, languages, positions, EmployeeResource) {
          this.EmployeeResource = EmployeeResource;
          this.employeeOrigin = angular.copy(employee);
          this.employee = employee;
          this.languages = languages;
          this.positions = positions;
          this.profileComplete = EmployeeResource.calculateProfileCompleteness(employee);
          this.isSubmitting = null;
          this.result = null;
          this.saveButtonOptions = {
            iconsPosition: 'right',
            buttonDefaultText: 'Save',
            buttonSubmittingText: 'Saving',
            buttonSuccessText: 'Saved',
            animationCompleteTime: '1200'
          };
        };
        return ($traceurRuntime.createClass)(AccountController, {
          save: function(form) {
            if (!form.$valid) {
              return;
            }
            this.isSubmitting = true;
            this.profileComplete = this.EmployeeResource.calculateProfileCompleteness(this.employee);
            this.employee.put().then(function(employee) {
              this.employee = employee;
              this.employeeOrigin = angular.copy(employee);
              this.result = 'success';
              form.$setPristine();
            }.bind(this), function(response) {
              this.result = 'error';
              if (response.status === 409) {} else {}
            }.bind(this));
          },
          reset: function() {
            this.employee = angular.copy(this.employeeOrigin);
          }
        }, {});
      }());
      $__export('default', AccountController);
    }
  };
});



System.register("app/states/customers/customers.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/customers/customers.route";
  function customersRoute($stateProvider) {
    'use strict';
    $stateProvider.state('customers', {
      url: '/customers',
      templateUrl: 'app/states/customers/customers.html'
    });
  }
  $__export("default", customersRoute);
  return {
    setters: [],
    execute: function() {
    }
  };
});



System.register("app/states/dashboard/dashboard.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/dashboard/dashboard.route";
  function dashboardRoute($stateProvider) {
    'use strict';
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/states/dashboard/dashboard.html'
    });
  }
  $__export("default", dashboardRoute);
  return {
    setters: [],
    execute: function() {
    }
  };
});



System.register("app/states/documents/documents.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/documents/documents.route";
  function documentsRoute($stateProvider) {
    'use strict';
    $stateProvider.state('documents', {
      url: '/documents',
      templateUrl: 'app/states/documents/documents.html'
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', documentsRoute);
    }
  };
});



System.register("app/states/employees/add/account-details/account-details.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/add/account-details/account-details.route";
  function employeesAccountDetailsRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('employees.add.account-details', {
      url: '/account-details',
      views: {'modal@': {templateUrl: 'app/states/employees/add/account-details/account-details.html'}}
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', employeesAccountDetailsRoute);
    }
  };
});



System.register("app/states/employees/add/account-settings/account-settings.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/add/account-settings/account-settings.route";
  function employeesAccountSettingsRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('employees.add.account-settings', {
      url: '/account-settings',
      views: {'modal@': {templateUrl: 'app/states/employees/add/account-settings/account-settings.html'}}
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', employeesAccountSettingsRoute);
    }
  };
});



System.register("app/states/employees/add/add.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/add/add.route";
  function employeesAddRoute($stateProvider) {
    'use strict';
    $stateProvider.state('employees.add', {
      url: '/add',
      onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
        $modal.open({
          templateUrl: 'app/states/employees/add/add.html',
          resolve: {
            languages: function(LanguageResource) {
              return LanguageResource.getList();
            },
            positions: function(PositionResource) {
              return PositionResource.getList({lang: 'en'});
            },
            roles: function(RoleResource) {
              return RoleResource.getList({lang: 'en'});
            }
          },
          controller: 'EmployeesAddController',
          controllerAs: 'vm',
          size: 'lg'
        }).result.finally(function() {
          $state.go('employees');
        });
      }]
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', employeesAddRoute);
    }
  };
});



System.register("app/states/employees/add/add.controller", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/add/add.controller";
  var EmployeesAddController;
  return {
    setters: [],
    execute: function() {
      EmployeesAddController = (function() {
        var EmployeesAddController = function EmployeesAddController(languages, positions, roles, EmployeeResource, $state, $modalInstance) {
          this.$modalInstance = $modalInstance;
          this.EmployeeResource = EmployeeResource;
          this.employee = {};
          this.languages = languages;
          this.positions = positions;
          this.roles = roles;
          this.profileComplete = EmployeeResource.calculateProfileCompleteness({});
          this.$state = $state;
        };
        return ($traceurRuntime.createClass)(EmployeesAddController, {cancel: function() {
            this.$modalInstance.dismiss('cancel');
          }}, {});
      }());
      $__export('default', EmployeesAddController);
    }
  };
});



System.register("app/states/employees/edit/account-details/account-details.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/account-details/account-details.route";
  function employeesAccountDetailsRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('employees.edit.account-details', {
      url: '/account-details',
      views: {'modal@': {templateUrl: 'app/states/employees/edit/account-details/account-details.html'}}
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', employeesAccountDetailsRoute);
    }
  };
});



System.register("app/states/employees/edit/account-settings/account-settings.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/account-settings/account-settings.route";
  function accountSettingsRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('employees.edit.account-settings', {
      url: '/account-settings',
      views: {'modal@': {templateUrl: 'app/states/employees/edit/account-settings/account-settings.html'}}
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', accountSettingsRoute);
    }
  };
});



System.register("app/states/employees/edit/contact-details/contact-details.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/contact-details/contact-details.route";
  function contactDetailsRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('employees.edit.contact-details', {
      url: '/contact-details',
      views: {'modal@': {templateUrl: 'app/states/employees/edit/contact-details/contact-details.html'}}
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', contactDetailsRoute);
    }
  };
});



System.register("app/states/employees/edit/bank-details/bank-details.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/bank-details/bank-details.route";
  function bankDetailsRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('employees.edit.bank-details', {
      url: '/bank-details',
      views: {'modal@': {templateUrl: 'app/states/employees/edit/bank-details/bank-details.html'}}
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', bankDetailsRoute);
    }
  };
});



System.register("app/states/employees/edit/hourly-rates/hourly-rates.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/hourly-rates/hourly-rates.route";
  function hourlyRatesRoute($stateProvider) {
    'use strict';
    return $stateProvider.state('employees.edit.hourly-rates', {
      url: '/hourly-rates',
      views: {'modal@': {templateUrl: 'app/states/employees/edit/hourly-rates/hourly-rates.html'}}
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', hourlyRatesRoute);
    }
  };
});



System.register("app/states/employees/edit/edit.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/edit.route";
  function employeesEditRoute($stateProvider) {
    'use strict';
    $stateProvider.state('employees.edit', {
      url: '/:id/edit',
      onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
        var id = $stateParams.id;
        $modal.open({
          templateUrl: 'app/states/employees/edit/edit.html',
          resolve: {
            employee: function($stateParams, EmployeeResource) {
              return EmployeeResource.get(id);
            },
            languages: function(LanguageResource) {
              return LanguageResource.getList();
            },
            positions: function(PositionResource) {
              return PositionResource.getList({lang: 'en'});
            },
            roles: function(RoleResource) {
              return RoleResource.getList({lang: 'en'});
            }
          },
          controller: 'EmployeesEditController',
          controllerAs: 'vm',
          size: 'lg'
        }).result.finally(function() {
          $state.go('employees');
        });
      }]
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', employeesEditRoute);
    }
  };
});



System.register("app/states/employees/edit/edit.controller", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/edit.controller";
  var EmployeesEditController;
  return {
    setters: [],
    execute: function() {
      EmployeesEditController = (function() {
        var EmployeesEditController = function EmployeesEditController(employee, languages, positions, roles, EmployeeResource, $modalInstance) {
          this.$modalInstance = $modalInstance;
          this.EmployeeResource = EmployeeResource;
          this.employee = employee;
          this.languages = languages;
          this.positions = positions;
          this.roles = roles;
          this.profileComplete = EmployeeResource.calculateProfileCompleteness(employee);
          this.isSubmitting = null;
          this.result = null;
          this.saveButtonOptions = {
            iconsPosition: 'right',
            buttonDefaultText: 'Save',
            buttonSubmittingText: 'Saving',
            buttonSuccessText: 'Saved',
            animationCompleteTime: '1200'
          };
        };
        return ($traceurRuntime.createClass)(EmployeesEditController, {
          cancel: function() {
            this.$modalInstance.dismiss('cancel');
          },
          save: function(form) {
            if (!form.$valid) {
              return;
            }
            this.isSubmitting = true;
            this.employee.put().then(function(employee) {
              this.profileComplete = this.EmployeeResource.calculateProfileCompleteness(this.employee);
              this.employee = employee;
              this.result = 'success';
              form.$setPristine();
            }.bind(this), function(response) {
              this.result = 'error';
              if (response.status === 409) {} else {}
            }.bind(this));
          }
        }, {});
      }());
      $__export('default', EmployeesEditController);
    }
  };
});



System.register("app/states/employees/message/message.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/message/message.route";
  function employeesMessageRoute($stateProvider) {
    'use strict';
    $stateProvider.state('employees.message', {
      url: '/:id/message',
      onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
        var id = $stateParams.id;
        $modal.open({
          templateUrl: 'app/states/employees/message/message.html',
          resolve: {employee: function(EmployeeResource) {
              return EmployeeResource.get(id);
            }},
          controller: 'EmployeesMessageController',
          controllerAs: 'vm',
          size: 'md'
        }).result.finally(function() {
          $state.go('employees');
        });
      }]
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', employeesMessageRoute);
    }
  };
});



System.register("app/states/employees/message/message.controller", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/message/message.controller";
  var EmployeesMessageController;
  return {
    setters: [],
    execute: function() {
      EmployeesMessageController = (function() {
        var EmployeesMessageController = function EmployeesMessageController(employee, $modalInstance) {
          this.employee = employee;
          this.email = {to: employee.email};
          this.$modalInstance = $modalInstance;
          this.isSubmitting = null;
          this.result = null;
          this.saveButtonOptions = {
            iconsPosition: 'right',
            buttonDefaultText: 'Send',
            buttonSubmittingText: 'Sending',
            buttonSuccessText: 'Sent',
            animationCompleteTime: '1200'
          };
        };
        return ($traceurRuntime.createClass)(EmployeesMessageController, {
          cancel: function() {
            this.$modalInstance.dismiss('cancel');
          },
          save: function(form) {
            if (!form.$valid) {
              return;
            }
            this.isSubmitting = true;
            this.employee.put().then(function() {
              this.result = 'success';
              this.cancel();
            }.bind(this), function(response) {
              this.result = 'error';
              if (response.status === 409) {} else {}
            }.bind(this));
          }
        }, {});
      }());
      $__export('default', EmployeesMessageController);
    }
  };
});



System.register("app/states/employees/schedule/schedule.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/schedule/schedule.route";
  function employeesScheduleRoute($stateProvider) {
    'use strict';
    $stateProvider.state('employees.schedule', {
      url: '/:id/schedule',
      onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
        $modal.open({
          templateUrl: 'app/states/employees/schedule/schedule.html',
          resolve: {},
          controller: 'EmployeesScheduleController',
          controllerAs: 'vm',
          size: 'md'
        }).result.finally(function() {
          $state.go('employees');
        });
      }]
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', employeesScheduleRoute);
    }
  };
});



System.register("app/states/employees/schedule/schedule.controller", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/schedule/schedule.controller";
  var EmployeesScheduleController;
  return {
    setters: [],
    execute: function() {
      EmployeesScheduleController = (function() {
        var EmployeesScheduleController = function EmployeesScheduleController($modalInstance) {
          this.$modalInstance = $modalInstance;
        };
        return ($traceurRuntime.createClass)(EmployeesScheduleController, {cancel: function() {
            this.$modalInstance.dismiss('cancel');
          }}, {});
      }());
      $__export('default', EmployeesScheduleController);
    }
  };
});



System.register("app/states/employees/employees.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/employees.route";
  function employeesRoute($stateProvider) {
    'use strict';
    $stateProvider.state('employees', {
      url: '/employees',
      templateUrl: 'app/states/employees/employees.html',
      controller: 'EmployeesController as vm',
      resolve: {
        employees: (function(EmployeeResource) {
          return EmployeeResource.getList();
        }),
        languages: (function(LanguageResource) {
          return LanguageResource.getList();
        }),
        positions: (function(PositionResource) {
          return PositionResource.getList({lang: 'en'});
        }),
        roles: (function(RoleResource) {
          return RoleResource.getList({lang: 'en'});
        })
      }
    });
  }
  return {
    setters: [],
    execute: function() {
      $__export('default', employeesRoute);
    }
  };
});



System.register("app/states/employees/employees.controller", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/employees.controller";
  var EmployeesController;
  return {
    setters: [],
    execute: function() {
      EmployeesController = (function() {
        var EmployeesController = function EmployeesController(employees, languages, positions, roles, EmployeeResource, filterFilter) {
          this.EmployeeResource = EmployeeResource;
          this.employees = employees;
          this.filteredEmployees = angular.copy(employees);
          this.languages = languages;
          this.positions = positions;
          this.roles = roles;
          this.filterField = '';
          this.filterFilter = filterFilter;
          this.currentPage = 1;
          this.employeesPerPage = 10;
          this.listViewTable = true;
        };
        return ($traceurRuntime.createClass)(EmployeesController, {
          filterEmployees: function() {
            this.filteredEmployees = this.filterFilter(this.employees, {firstName: this.filterField});
          },
          toggleListView: function() {
            this.listViewTable = !this.listViewTable;
          },
          deleteEmployee: function(employee) {
            this.EmployeeResource.delete(employee.id).then(function() {
              this.employees.splice(this.employees.indexOf(employee), 1);
              this.filteredEmployees.splice(this.filteredEmployees.indexOf(employee), 1);
            }.bind(this), function(response) {
              if (response.status === 409) {} else {}
            }.bind(this));
          }
        }, {});
      }());
      $__export('default', EmployeesController);
    }
  };
});



System.register("app/states/reports/reports.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/reports/reports.route";
  function reportsRoute($stateProvider) {
    'use strict';
    $stateProvider.state('reports', {
      url: '/reports',
      templateUrl: 'app/states/reports/reports.html'
    });
  }
  $__export("default", reportsRoute);
  return {
    setters: [],
    execute: function() {
    }
  };
});



System.register("app/states/schedule/schedule.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/schedule/schedule.route";
  function scheduleRoute($stateProvider) {
    'use strict';
    $stateProvider.state('schedule', {
      url: '/schedule',
      templateUrl: 'app/states/schedule/schedule.html'
    });
  }
  $__export("default", scheduleRoute);
  return {
    setters: [],
    execute: function() {
    }
  };
});



System.register("app/states/settings/settings.route", [], function($__export) {
  "use strict";
  var __moduleName = "app/states/settings/settings.route";
  function settingsRoute($stateProvider) {
    'use strict';
    $stateProvider.state('settings', {
      url: '/settings',
      templateUrl: 'app/settings/settings.html'
    });
  }
  $__export("default", settingsRoute);
  return {
    setters: [],
    execute: function() {
    }
  };
});



System.register("github:angular/bower-angular@1.3.8", ["github:angular/bower-angular@1.3.8/angular.min"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:angular/bower-angular@1.3.8/angular.min");
  global.define = __define;
  return module.exports;
});



System.register("github:angular/bower-angular-animate@1.3.8", ["github:angular/bower-angular-animate@1.3.8/angular-animate"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:angular/bower-angular-animate@1.3.8/angular-animate");
  global.define = __define;
  return module.exports;
});



System.register("github:angular-ui/ui-router@0.2.11", ["github:angular-ui/ui-router@0.2.11/release/angular-ui-router"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:angular-ui/ui-router@0.2.11/release/angular-ui-router");
  global.define = __define;
  return module.exports;
});



System.register("github:angular/bower-angular-messages@1.3.8", ["github:angular/bower-angular-messages@1.3.8/angular-messages"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:angular/bower-angular-messages@1.3.8/angular-messages");
  global.define = __define;
  return module.exports;
});



(function() {
function define(){};  define.amd = {};
System.register("github:lodash/lodash@2.4.1", ["github:lodash/lodash@2.4.1/dist/lodash"], false, function(__require, __exports, __module) {
  return (function(main) {
    return main;
  }).call(this, __require('github:lodash/lodash@2.4.1/dist/lodash'));
});


})();
System.register("github:mgonto/restangular@1.4.0", ["github:mgonto/restangular@1.4.0/dist/restangular.min"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:mgonto/restangular@1.4.0/dist/restangular.min");
  global.define = __define;
  return module.exports;
});



System.register("github:grevory/angular-local-storage@0.0.5", ["github:grevory/angular-local-storage@0.0.5/angular-local-storage"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:grevory/angular-local-storage@0.0.5/angular-local-storage");
  global.define = __define;
  return module.exports;
});



System.register("github:jeremypeters/ng-bs-animated-button@2.0.3", ["github:jeremypeters/ng-bs-animated-button@2.0.3/ng-bs-animated-button"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jeremypeters/ng-bs-animated-button@2.0.3/ng-bs-animated-button");
  global.define = __define;
  return module.exports;
});



System.register("github:angular/bower-angular-mocks@1.3.8", ["github:angular/bower-angular-mocks@1.3.8/angular-mocks"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:angular/bower-angular-mocks@1.3.8/angular-mocks");
  global.define = __define;
  return module.exports;
});



System.register("app/components/employee/employee.resource.mock", ["app/components/employee/fixtures/employee_1.json!github:systemjs/plugin-json@0.1.0", "app/components/employee/fixtures/employees.json!github:systemjs/plugin-json@0.1.0"], function($__export) {
  "use strict";
  var __moduleName = "app/components/employee/employee.resource.mock";
  var employee,
      employees;
  function employeeResourceMock($httpBackend) {
    'use strict';
    $httpBackend.whenGET(/\/employees\/[a-z]*/).respond((function(method, url) {
      console.log('GET', url);
      if (url.includes('employees/1')) {
        return [200, employee];
      }
    }));
    $httpBackend.whenGET(/\/employees/).respond((function(method, url) {
      console.log('GET', url);
      return [200, employees];
    }));
    $httpBackend.whenPUT(/\/employees/).respond((function(method, url, data) {
      console.log('PUT', url);
      var dataJSON = JSON.parse(data);
      if (dataJSON.firstName === '503') {
        return [503, dataJSON];
      } else if (dataJSON.firstName === '409') {
        return [409, dataJSON];
      }
      dataJSON.version++;
      return [200, dataJSON];
    }));
    $httpBackend.whenDELETE(/\/employees/).respond((function(method, url) {
      console.log('DELETE', url);
      return [200, {}];
    }));
  }
  return {
    setters: [function(m) {
      employee = m.default;
    }, function(m) {
      employees = m.default;
    }],
    execute: function() {
      $__export('default', employeeResourceMock);
    }
  };
});



System.register("app/components/language/language.resource.mock", ["app/components/language/fixtures/languages.json!github:systemjs/plugin-json@0.1.0"], function($__export) {
  "use strict";
  var __moduleName = "app/components/language/language.resource.mock";
  var languages;
  function languageResourceMock($httpBackend) {
    'use strict';
    $httpBackend.whenGET(/\/languages/).respond((function(method, url) {
      console.log('GET', url);
      return [200, languages];
    }));
  }
  return {
    setters: [function(m) {
      languages = m.default;
    }],
    execute: function() {
      $__export('default', languageResourceMock);
    }
  };
});



System.register("app/components/position/position.resource.mock", ["app/components/position/fixtures/positions_en.json!github:systemjs/plugin-json@0.1.0", "app/components/position/fixtures/positions_sk.json!github:systemjs/plugin-json@0.1.0"], function($__export) {
  "use strict";
  var __moduleName = "app/components/position/position.resource.mock";
  var positionsEN,
      positionsSK;
  function positionResourceMock($httpBackend) {
    'use strict';
    $httpBackend.whenGET(/\/positions\?lang*/).respond((function(method, url) {
      console.log('GET', url);
      if (url.includes('lang=en')) {
        return [200, positionsEN];
      } else if (url.contains('lang=sk')) {
        return [200, positionsSK];
      }
    }));
  }
  return {
    setters: [function(m) {
      positionsEN = m.default;
    }, function(m) {
      positionsSK = m.default;
    }],
    execute: function() {
      $__export('default', positionResourceMock);
    }
  };
});



System.register("app/components/role/role.resource.mock", ["app/components/role/fixtures/roles_en.json!github:systemjs/plugin-json@0.1.0", "app/components/role/fixtures/roles_sk.json!github:systemjs/plugin-json@0.1.0"], function($__export) {
  "use strict";
  var __moduleName = "app/components/role/role.resource.mock";
  var rolesEN,
      rolesSK;
  function roleResourceMock($httpBackend) {
    'use strict';
    $httpBackend.whenGET(/\/roles\?lang*/).respond((function(method, url) {
      console.log('GET', url);
      if (url.includes('lang=en')) {
        return [200, rolesEN];
      } else if (url.contains('lang=sk')) {
        return [200, rolesSK];
      }
    }));
  }
  return {
    setters: [function(m) {
      rolesEN = m.default;
    }, function(m) {
      rolesSK = m.default;
    }],
    execute: function() {
      $__export('default', roleResourceMock);
    }
  };
});



System.register("app/components/ui-widgets/ui-widgets", ["app/components/ui-widgets/form/unsaved-form-warning-modal", "app/components/ui-widgets/really-click/really-click", "app/components/ui-widgets/mm-scroll-up/scroll-up.directive"], function($__export) {
  "use strict";
  var __moduleName = "app/components/ui-widgets/ui-widgets";
  var mmUnsavedFormWarningModal,
      mmReallyClick,
      mmScrollUp;
  return {
    setters: [function(m) {
      mmUnsavedFormWarningModal = m.default;
    }, function(m) {
      mmReallyClick = m.default;
    }, function(m) {
      mmScrollUp = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('mm.ui-widgets', [mmUnsavedFormWarningModal.name, mmReallyClick.name, mmScrollUp.name]));
    }
  };
});



System.register("app/states/account/account-details/account-details", ["app/states/account/account-details/account-details.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/account-details/account-details";
  var accountDetailsRoute;
  return {
    setters: [function(m) {
      accountDetailsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.account.account-details', []).config(accountDetailsRoute));
    }
  };
});



System.register("app/states/account/account-settings/account-settings", ["app/states/account/account-settings/account-settings.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/account-settings/account-settings";
  var accountSettingsRoute;
  return {
    setters: [function(m) {
      accountSettingsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.account.account-settings', []).config(accountSettingsRoute));
    }
  };
});



System.register("app/states/account/contact-details/contact-details", ["app/states/account/contact-details/contact-details.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/contact-details/contact-details";
  var contactDetailsRoute;
  return {
    setters: [function(m) {
      contactDetailsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.account.contact-details', []).config(contactDetailsRoute));
    }
  };
});



System.register("app/states/account/bank-details/bank-details", ["app/states/account/bank-details/bank-details.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/bank-details/bank-details";
  var bankDetailsRoute;
  return {
    setters: [function(m) {
      bankDetailsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.account.bank-details', []).config(bankDetailsRoute));
    }
  };
});



System.register("app/states/customers/customers.module", ["app/states/customers/customers.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/customers/customers.module";
  var customersRoute;
  return {
    setters: [function(m) {
      customersRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.customers', []).config(customersRoute));
    }
  };
});



System.register("app/states/dashboard/dashboard.module", ["app/states/dashboard/dashboard.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/dashboard/dashboard.module";
  var dashboardRoute;
  return {
    setters: [function(m) {
      dashboardRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.dashboard', []).config(dashboardRoute));
    }
  };
});



System.register("app/states/documents/documents", ["app/states/documents/documents.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/documents/documents";
  var documentsRoute;
  return {
    setters: [function(m) {
      documentsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.documents', []).config(documentsRoute));
    }
  };
});



System.register("app/states/employees/add/account-details/account-details", ["app/states/employees/add/account-details/account-details.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/add/account-details/account-details";
  var employeesAccountDetailsRoute;
  return {
    setters: [function(m) {
      employeesAccountDetailsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.add.account-details', []).config(employeesAccountDetailsRoute));
    }
  };
});



System.register("app/states/employees/add/account-settings/account-settings", ["app/states/employees/add/account-settings/account-settings.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/add/account-settings/account-settings";
  var employeesAccountSettingsRoute;
  return {
    setters: [function(m) {
      employeesAccountSettingsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.add.account-settings', []).config(employeesAccountSettingsRoute));
    }
  };
});



System.register("app/states/employees/edit/account-details/account-details", ["app/states/employees/edit/account-details/account-details.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/account-details/account-details";
  var employeesAccountDetailsRoute;
  return {
    setters: [function(m) {
      employeesAccountDetailsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.edit.account-details', []).config(employeesAccountDetailsRoute));
    }
  };
});



System.register("app/states/employees/edit/account-settings/account-settings", ["app/states/employees/edit/account-settings/account-settings.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/account-settings/account-settings";
  var accountSettingsRoute;
  return {
    setters: [function(m) {
      accountSettingsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.edit.account-settings', []).config(accountSettingsRoute));
    }
  };
});



System.register("app/states/employees/edit/contact-details/contact-details", ["app/states/employees/edit/contact-details/contact-details.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/contact-details/contact-details";
  var contactDetailsRoute;
  return {
    setters: [function(m) {
      contactDetailsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.edit.contact-details', []).config(contactDetailsRoute));
    }
  };
});



System.register("app/states/employees/edit/bank-details/bank-details", ["app/states/employees/edit/bank-details/bank-details.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/bank-details/bank-details";
  var bankDetailsRoute;
  return {
    setters: [function(m) {
      bankDetailsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.edit.bank-details', []).config(bankDetailsRoute));
    }
  };
});



System.register("app/states/employees/edit/hourly-rates/hourly-rates", ["app/states/employees/edit/hourly-rates/hourly-rates.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/hourly-rates/hourly-rates";
  var hourlyRatesRoute;
  return {
    setters: [function(m) {
      hourlyRatesRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.edit.hourly-rates', []).config(hourlyRatesRoute));
    }
  };
});



System.register("app/states/employees/message/message", ["app/states/employees/message/message.route", "app/states/employees/message/message.controller"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/message/message";
  var employeesMessageRoute,
      EmployeesMessageController;
  return {
    setters: [function(m) {
      employeesMessageRoute = m.default;
    }, function(m) {
      EmployeesMessageController = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.message', []).config(employeesMessageRoute).controller('EmployeesMessageController', EmployeesMessageController));
    }
  };
});



System.register("app/states/employees/schedule/schedule", ["app/states/employees/schedule/schedule.route", "app/states/employees/schedule/schedule.controller"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/schedule/schedule";
  var employeesScheduleRoute,
      EmployeesScheduleController;
  return {
    setters: [function(m) {
      employeesScheduleRoute = m.default;
    }, function(m) {
      EmployeesScheduleController = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.schedule', []).config(employeesScheduleRoute).controller('EmployeesScheduleController', EmployeesScheduleController));
    }
  };
});



System.register("app/states/reports/reports.module", ["app/states/reports/reports.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/reports/reports.module";
  var reportsRoute;
  return {
    setters: [function(m) {
      reportsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.reports', []).config(reportsRoute));
    }
  };
});



System.register("app/states/schedule/schedule.module", ["app/states/schedule/schedule.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/schedule/schedule.module";
  var scheduleRoute;
  return {
    setters: [function(m) {
      scheduleRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.schedule', []).config(scheduleRoute));
    }
  };
});



System.register("app/states/settings/settings.module", ["app/states/settings/settings.route"], function($__export) {
  "use strict";
  var __moduleName = "app/states/settings/settings.module";
  var settingsRoute;
  return {
    setters: [function(m) {
      settingsRoute = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.settings', []).config(settingsRoute));
    }
  };
});



System.register("app/vendor", ["github:angular/bower-angular@1.3.8", "github:angular/bower-angular-animate@1.3.8", "github:angular-ui/ui-router@0.2.11", "github:angular/bower-angular-messages@1.3.8", "github:lodash/lodash@2.4.1", "github:mgonto/restangular@1.4.0", "github:angular-ui/bootstrap-bower@0.12.0/ui-bootstrap-tpls", "github:grevory/angular-local-storage@0.0.5", "github:jeremypeters/ng-bs-animated-button@2.0.3"], function($__export) {
  "use strict";
  var __moduleName = "app/vendor";
  return {
    setters: [function(m) {}, function(m) {}, function(m) {}, function(m) {}, function(m) {}, function(m) {}, function(m) {}, function(m) {}, function(m) {}],
    execute: function() {}
  };
});



System.register("app/core/config/core.config.test", ["github:angular/bower-angular-mocks@1.3.8"], function($__export) {
  "use strict";
  var __moduleName = "app/core/config/core.config.test";
  function coreConfigTest($provide) {
    'use strict';
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  }
  function coreRunTest($httpBackend) {
    'use strict';
    $httpBackend.whenGET(/^\w+.*/).passThrough();
    $httpBackend.whenPOST(/^\w+.*/).passThrough();
  }
  return {
    setters: [function(m) {}],
    execute: function() {
      $__export('default', angular.module('app.core.test', []).config(coreConfigTest).run(coreRunTest));
    }
  };
});



System.register("app/components/employee/employee", ["app/components/employee/employee.resource", "app/components/employee/employee.resource.mock"], function($__export) {
  "use strict";
  var __moduleName = "app/components/employee/employee";
  var EmployeeResource,
      employeeResourceMock;
  return {
    setters: [function(m) {
      EmployeeResource = m.default;
    }, function(m) {
      employeeResourceMock = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employee', []).service('EmployeeResource', EmployeeResource).run(employeeResourceMock));
    }
  };
});



System.register("app/components/language/language", ["app/components/language/language.resource", "app/components/language/language.resource.mock"], function($__export) {
  "use strict";
  var __moduleName = "app/components/language/language";
  var LanguageResource,
      languageResourceMock;
  return {
    setters: [function(m) {
      LanguageResource = m.default;
    }, function(m) {
      languageResourceMock = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.language', []).service('LanguageResource', LanguageResource).run(languageResourceMock));
    }
  };
});



System.register("app/components/position/position", ["app/components/position/position.resource", "app/components/position/position.resource.mock"], function($__export) {
  "use strict";
  var __moduleName = "app/components/position/position";
  var PositionResource,
      positionResourceMock;
  return {
    setters: [function(m) {
      PositionResource = m.default;
    }, function(m) {
      positionResourceMock = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.position', []).service('PositionResource', PositionResource).run(positionResourceMock));
    }
  };
});



System.register("app/components/role/role", ["app/components/role/role.resource", "app/components/role/role.resource.mock"], function($__export) {
  "use strict";
  var __moduleName = "app/components/role/role";
  var RoleResource,
      roleResourceMock;
  return {
    setters: [function(m) {
      RoleResource = m.default;
    }, function(m) {
      roleResourceMock = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.role', []).service('RoleResource', RoleResource).run(roleResourceMock));
    }
  };
});



System.register("app/states/account/account", ["app/states/account/account-details/account-details", "app/states/account/account-settings/account-settings", "app/states/account/contact-details/contact-details", "app/states/account/bank-details/bank-details", "app/states/account/account.route", "app/states/account/account.controller"], function($__export) {
  "use strict";
  var __moduleName = "app/states/account/account";
  var accountDetailsModule,
      accountSettingsModule,
      contactDetailsModule,
      bankDetailsModule,
      accountRoute,
      AccountController;
  return {
    setters: [function(m) {
      accountDetailsModule = m.default;
    }, function(m) {
      accountSettingsModule = m.default;
    }, function(m) {
      contactDetailsModule = m.default;
    }, function(m) {
      bankDetailsModule = m.default;
    }, function(m) {
      accountRoute = m.default;
    }, function(m) {
      AccountController = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.account', [accountDetailsModule.name, accountSettingsModule.name, contactDetailsModule.name, bankDetailsModule.name]).config(accountRoute).controller('AccountController', AccountController));
    }
  };
});



System.register("app/states/employees/add/add", ["app/states/employees/add/account-details/account-details", "app/states/employees/add/account-settings/account-settings", "app/states/employees/add/add.route", "app/states/employees/add/add.controller"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/add/add";
  var accountDetailsModule,
      accountSettingsModule,
      employeesAddRoute,
      EmployeesAddController;
  return {
    setters: [function(m) {
      accountDetailsModule = m.default;
    }, function(m) {
      accountSettingsModule = m.default;
    }, function(m) {
      employeesAddRoute = m.default;
    }, function(m) {
      EmployeesAddController = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.add', [accountDetailsModule.name, accountSettingsModule.name]).config(employeesAddRoute).controller('EmployeesAddController', EmployeesAddController));
    }
  };
});



System.register("app/states/employees/edit/edit", ["app/states/employees/edit/account-details/account-details", "app/states/employees/edit/account-settings/account-settings", "app/states/employees/edit/contact-details/contact-details", "app/states/employees/edit/bank-details/bank-details", "app/states/employees/edit/hourly-rates/hourly-rates", "app/states/employees/edit/edit.route", "app/states/employees/edit/edit.controller"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/edit/edit";
  var accountDetailsModule,
      accountSettingsModule,
      contactDetailsModule,
      bankDetailsModule,
      hourlyRatesModule,
      employeesEditRoute,
      EmployeesEditController;
  return {
    setters: [function(m) {
      accountDetailsModule = m.default;
    }, function(m) {
      accountSettingsModule = m.default;
    }, function(m) {
      contactDetailsModule = m.default;
    }, function(m) {
      bankDetailsModule = m.default;
    }, function(m) {
      hourlyRatesModule = m.default;
    }, function(m) {
      employeesEditRoute = m.default;
    }, function(m) {
      EmployeesEditController = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees.edit', [accountDetailsModule.name, accountSettingsModule.name, contactDetailsModule.name, bankDetailsModule.name, hourlyRatesModule.name]).config(employeesEditRoute).controller('EmployeesEditController', EmployeesEditController));
    }
  };
});



System.register("app/core/core.module", ["app/core/layout/footer/layout.footer.controller", "app/core/config/core.config", "app/core/config/core.config.test"], function($__export) {
  "use strict";
  var __moduleName = "app/core/core.module";
  var FooterController,
      coreConfig,
      coreTestModule;
  return {
    setters: [function(m) {
      FooterController = m.default;
    }, function(m) {
      coreConfig = m.coreConfig;
    }, function(m) {
      coreTestModule = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.core', [coreTestModule.name]).config(coreConfig).controller('FooterController', FooterController));
    }
  };
});



System.register("app/states/employees/employees", ["app/states/employees/add/add", "app/states/employees/edit/edit", "app/states/employees/message/message", "app/states/employees/schedule/schedule", "app/states/employees/employees.route", "app/states/employees/employees.controller"], function($__export) {
  "use strict";
  var __moduleName = "app/states/employees/employees";
  var employeesAddModule,
      employeesEditModule,
      employeesMessageModule,
      employeesScheduleModule,
      employeesRoute,
      EmployeesController;
  return {
    setters: [function(m) {
      employeesAddModule = m.default;
    }, function(m) {
      employeesEditModule = m.default;
    }, function(m) {
      employeesMessageModule = m.default;
    }, function(m) {
      employeesScheduleModule = m.default;
    }, function(m) {
      employeesRoute = m.default;
    }, function(m) {
      EmployeesController = m.default;
    }],
    execute: function() {
      $__export('default', angular.module('app.employees', [employeesAddModule.name, employeesEditModule.name, employeesMessageModule.name, employeesScheduleModule.name]).config(employeesRoute).controller('EmployeesController', EmployeesController));
    }
  };
});



System.register("app/main", ["app/vendor", "app/core/core.module", "app/components/employee/employee", "app/components/language/language", "app/components/position/position", "app/components/role/role", "app/components/ui-widgets/ui-widgets", "app/components/pagination/pagination", "app/states/account/account", "app/states/customers/customers.module", "app/states/dashboard/dashboard.module", "app/states/documents/documents", "app/states/employees/employees", "app/states/reports/reports.module", "app/states/schedule/schedule.module", "app/states/settings/settings.module"], function($__export) {
  "use strict";
  var __moduleName = "app/main";
  var coreModule,
      employeeModule,
      languageModule,
      positionModule,
      roleModule,
      uiWidgetsModule,
      paginationModule,
      accountModule,
      customersModule,
      dashboardModule,
      documentsModule,
      employeesModule,
      reportsModule,
      scheduleModule,
      settingsModule,
      mainModule;
  return {
    setters: [function(m) {}, function(m) {
      coreModule = m.default;
    }, function(m) {
      employeeModule = m.default;
    }, function(m) {
      languageModule = m.default;
    }, function(m) {
      positionModule = m.default;
    }, function(m) {
      roleModule = m.default;
    }, function(m) {
      uiWidgetsModule = m.default;
    }, function(m) {
      paginationModule = m.default;
    }, function(m) {
      accountModule = m.default;
    }, function(m) {
      customersModule = m.default;
    }, function(m) {
      dashboardModule = m.default;
    }, function(m) {
      documentsModule = m.default;
    }, function(m) {
      employeesModule = m.default;
    }, function(m) {
      reportsModule = m.default;
    }, function(m) {
      scheduleModule = m.default;
    }, function(m) {
      settingsModule = m.default;
    }],
    execute: function() {
      'use strict';
      mainModule = angular.module('app', ['ngAnimate', 'ngMessages', 'restangular', 'ui.router', 'ui.bootstrap', 'LocalStorageModule', 'jp.ng-bs-animated-button', coreModule.name, employeeModule.name, languageModule.name, positionModule.name, roleModule.name, uiWidgetsModule.name, paginationModule.name, accountModule.name, customersModule.name, dashboardModule.name, documentsModule.name, employeesModule.name, reportsModule.name, scheduleModule.name, settingsModule.name]);
      $__export('default', mainModule);
    }
  };
});



System.register("app/bootstrap", ["github:angular/bower-angular@1.3.8", "app/main"], function($__export) {
  "use strict";
  var __moduleName = "app/bootstrap";
  var angular,
      mainModule;
  return {
    setters: [function(m) {
      angular = m.default;
    }, function(m) {
      mainModule = m.default;
    }],
    execute: function() {
      angular.element(document).ready(function() {
        'use strict';
        angular.element(document).ready(function() {
          angular.bootstrap(document, [mainModule.name], {});
        });
      });
    }
  };
});



(function() {
  var loader = System;
  var hasOwnProperty = loader.global.hasOwnProperty;
  var moduleGlobals = {};
  var curGlobalObj;
  var ignoredGlobalProps;
  if (typeof indexOf == 'undefined')
    indexOf = Array.prototype.indexOf;
  System.set("@@global-helpers", System.newModule({
    prepareGlobal: function(moduleName, deps) {
      for (var i = 0; i < deps.length; i++) {
        var moduleGlobal = moduleGlobals[deps[i]];
        if (moduleGlobal)
          for (var m in moduleGlobal)
            loader.global[m] = moduleGlobal[m];
      }
      curGlobalObj = {};
      ignoredGlobalProps = ["indexedDB", "sessionStorage", "localStorage", "clipboardData", "frames", "webkitStorageInfo"];
      for (var g in loader.global) {
        if (indexOf.call(ignoredGlobalProps, g) != -1) { continue; }
        if (!hasOwnProperty || loader.global.hasOwnProperty(g)) {
          try {
            curGlobalObj[g] = loader.global[g];
          } catch (e) {
            ignoredGlobalProps.push(g);
          }
        }
      }
    },
    retrieveGlobal: function(moduleName, exportName, init) {
      var singleGlobal;
      var multipleExports;
      var exports = {};
      if (init) {
        var depModules = [];
        for (var i = 0; i < deps.length; i++)
          depModules.push(require(deps[i]));
        singleGlobal = init.apply(loader.global, depModules);
      }
      else if (exportName) {
        var firstPart = exportName.split(".")[0];
        singleGlobal = eval.call(loader.global, exportName);
        exports[firstPart] = loader.global[firstPart];
      }
      else {
        for (var g in loader.global) {
          if (indexOf.call(ignoredGlobalProps, g) != -1)
            continue;
          if ((!hasOwnProperty || loader.global.hasOwnProperty(g)) && g != loader.global && curGlobalObj[g] != loader.global[g]) {
            exports[g] = loader.global[g];
            if (singleGlobal) {
              if (singleGlobal !== loader.global[g])
                multipleExports = true;
            }
            else if (singleGlobal !== false) {
              singleGlobal = loader.global[g];
            }
          }
        }
      }
      moduleGlobals[moduleName] = exports;
      return multipleExports ? exports : singleGlobal;
    }
  }));
})();

});
//# sourceMappingURL=build.js.map
angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/states/account/account.html","<div class=container-fluid><div class=row><aside class=\"col-sm-12 col-md-3 animated fadeInLeft\"><ul class=\"list-table mb10\"><li style=width:70px;><img class=\"img-circle img-bordered-light\" src=../../../images/me.jpg alt width=65px></li><li class=text-left><h5 class=\"font-weight-heavy ellipsis\">Martin Micunda</h5><div><div class=\"progress progress-xs mb5\"><div class=progress-bar ng-class=\"{\'progress-bar-success\': vm.profileComplete >= 70, \'progress-bar-warning\': vm.profileComplete < 70 && vm.profileComplete >= 40, \'progress-bar-danger\': vm.profileComplete < 40}\" ng-style=\"{\'width\': vm.profileComplete + \'%\'}\"></div></div><p class=\"text-muted clearfix\"><span class=pull-left>Profile complete</span> <span class=pull-right>{{vm.profileComplete}}%</span></p></div></li></ul><ul class=\"list-group list-group-tabs\"><li class=list-group-item ui-sref-active=active><a ui-sref=account.account-details><i class=\"fa fa-user fa-fw \"></i>&nbsp;Account Details</a></li><li class=list-group-item ui-sref-active=active><a ui-sref=account.account-settings><i class=\"fa fa-cogs fa-fw \"></i>&nbsp;Account Settings</a></li><li class=list-group-item ui-sref-active=active><a ui-sref=account.contact-details><i class=\"fa fa-pencil-square-o fa-fw\"></i>&nbsp;Contact Details</a></li><li class=list-group-item ui-sref-active=active><a ui-sref=account.bank-details><i class=\"fa fa-bank fa-fw\"></i>&nbsp;Bank Details</a></li></ul></aside><section ui-view></section></div></div><script type=text/ng-template id=unsavedWarningModal.html><div class=\"modal-header\"> <button type=\"button\" class=\"close\" ng-click=\"vm.cancel()\">×</button> <h4 class=\"modal-title\">Unsaved Changes</h4> </div> <div class=\"modal-body\"> <p>You have unsaved changes. Leave the page?</p> </div> <div class=\"modal-footer\"> <button class=\"btn btn-sm btn-white\" ng-click=\"vm.cancel()\">Cancel</button> <button class=\"btn btn-sm btn-success\" ng-click=\"vm.ok()\">Ignore Changes</button> </div></script>");
$templateCache.put("app/states/customers/customers.html","<p>customers</p>");
$templateCache.put("app/states/dashboard/dashboard.html","<form name=passengerForm class=form-horizontal role=form novalidate ng-submit=vm.submit()><div class=form-group><label for=inputEmail9 class=\"col-sm-2 control-label\">Username</label><div class=col-sm-10><input type=text class=form-control id=inputEmail9 ng-model=vm.user.username></div></div><div class=form-group><label for=inputEmail3 class=\"col-sm-2 control-label\">First Name</label><div class=col-sm-10><input type=text class=form-control id=inputEmail3 ng-model=vm.user.firstName placeholder=Email></div></div><div class=form-group><label for=inputPassword2 class=\"col-sm-2 control-label\">Last Name</label><div class=col-sm-10><input type=text class=form-control id=inputPassword2 ng-model=vm.user.lastName></div></div><div class=form-group><label for=inputPassword3 class=\"col-sm-2 control-label\">Password</label><div class=col-sm-10><input type=password class=form-control id=inputPassword3 ng-model=vm.user.password></div></div><div class=form-group><label for=inputPassword13 class=\"col-sm-2 control-label\">Password Confirmation</label><div class=col-sm-10><input type=password class=form-control id=inputPassword13 ng-model=vm.user.passwordConfirmation></div></div><div class=form-group><label for=inputEmail4 class=\"col-sm-2 control-label\">Email</label><div class=col-sm-10><input type=email class=form-control id=inputEmail4 placeholder=Email ng-model=vm.user.email></div></div><div class=form-group><div class=\"col-sm-offset-2 col-sm-10\"><button type=submit class=\"btn btn-default\">Create</button></div></div></form>");
$templateCache.put("app/states/documents/documents.html","<p>documents</p>");
$templateCache.put("app/states/employees/employees.html","<div class=container-fluid><div class=\"panel panel-inverse\"><div class=panel-heading><h4 class=panel-title>Employees</h4></div><div class=panel-body><div class=row><div class=\"col-md-6 col-sm-6\"><div class=table-filter>Search: <input type=search ng-model=vm.filterField ng-change=vm.filterEmployees()><span class=checkbox><label><input type=checkbox value>hide inactive employees</label></span></div></div><div class=\"col-md-6 col-sm-6\"><div class=pull-right><button type=button class=\"btn btn-sm btn-success\" ui-sref=employees.add.account-details>Add Employee</button>&nbsp;<div class=btn-group><button class=\"btn btn-sm btn-info\" ng-class=\"{ \'active\': vm.listViewTable }\" ng-click=vm.toggleListView()><i class=\"fa fa-align-justify fa-fw\"></i> Table</button> <button class=\"btn btn-sm btn-info\" ng-class=\"{ \'active\': !vm.listViewTable }\" ng-click=vm.toggleListView()><i class=\"fa fa-th-large fa-fw\"></i> Grid</button></div></div></div></div><div class=table-responsive ng-show=vm.listViewTable><table class=\"table table-hover animated fadeIn\"><thead><tr><th>Photo</th><th>Name</th><th>Email</th><th>Phone Number</th><th>Position</th><th>Role</th><th>Status</th><th>Actions</th></tr></thead><tbody><tr ng-repeat=\"employee in vm.filteredEmployees | startFrom:(vm.currentPage-1)*vm.employeesPerPage | limitTo:vm.employeesPerPage\"><td><img ng-src=../../images/{{::employee.avatar}} alt class=img-circle title=\"{{::employee.firstName}} {{::employee.lastName}}\"></td><td>{{::employee.firstName}} {{::employee.lastName}}</td><td>{{::employee.email}}</td><td>{{::employee.contactDetails.phoneNumber}}</td><td>{{::employee.position}}</td><td>{{::employee.role}}</td><td><span class=label ng-class=\"{\'label-success\': employee.status === \'active\', \'label-warning\': employee.status === \'pending\', \'label-default\': employee.status === \'inactive\'}\">{{::employee.status}}</span></td><td><a ui-sref=\".message({id: employee.id})\" tooltip-placement=top tooltip=\"send message\"><i class=\"fa fa-comment-o fa-fw\"></i></a> <a ui-sref=\".schedule({id: employee.id})\" tooltip-placement=top tooltip=\"see schedule\"><i class=\"fa fa-calendar fa-fw\"></i></a> <a mm-really-click=vm.deleteEmployee(employee) tooltip-placement=top tooltip=delete><i class=\"fa fa-trash fa-fw\"></i></a> <a ui-sref=\".edit.account-details({id: employee.id})\" tooltip-placement=top tooltip=edit><i class=\"fa fa-pencil fa-fw\"></i></a></td></tr></tbody></table></div><div ng-show=!vm.listViewTable><div class=\"row animated fadeIn mt20\"><div class=\"col-lg-2 col-md-3 col-sm-3\" ng-repeat=\"employee in vm.filteredEmployees | startFrom:(vm.currentPage-1)*vm.employeesPerPage | limitTo:vm.employeesPerPage\"><div class=thumbnail><div class=text-center style=\"padding-top: 9px;\"><img ng-src=../../images/{{::employee.avatar}} alt ng-class=\"{\'img-bordered-success\': employee.status === \'active\', \'img-bordered-warning\': employee.status === \'pending\', \'img-bordered-dark\': employee.status === \'inactive\'}\" class=img-circle title=\"{{::employee.firstName}} {{::employee.lastName}}\" style=\"height: 70px; width: 70px;\"></div><div class=\"caption text-center\"><h6 class=\"mb0 mt0 font-weight-heavy\">{{::employee.firstName}} {{::employee.lastName}}</h6>{{::employee.position}}<br><p>{{::employee.contactDetails.phoneNumber}}</p><div><a ui-sref=\".message({id: employee.id})\" tooltip-placement=top tooltip=\"send message\"><i class=\"fa fa-comment-o fa-fw\"></i></a> <a ui-sref=\".schedule({id: employee.id})\" tooltip-placement=top tooltip=\"see schedule\"><i class=\"fa fa-calendar fa-fw\"></i></a> <a mm-really-click=vm.deleteEmployee(employee) tooltip-placement=top tooltip=delete><i class=\"fa fa-trash fa-fw\"></i></a> <a ui-sref=\".edit.account-details({id: employee.id})\" tooltip-placement=top tooltip=edit><i class=\"fa fa-pencil fa-fw\"></i></a></div></div></div></div></div></div><div class=row><div class=\"col-md-6 col-sm-6\"><div class=table-info>Showing {{((vm.currentPage-1)*vm.employeesPerPage) + 1}} to {{vm.currentPage * vm.employeesPerPage}} of {{vm.filteredEmployees.length}} employees</div></div><div class=\"col-md-6 col-sm-6\" ng-if=\"vm.filteredEmployees.length > vm.employeesPerPage\"><pagination class=pull-right total-items=vm.filteredEmployees.length ng-model=vm.currentPage previous-text=\"← Previous\" next-text=\"Next →\"></pagination></div></div></div></div></div><script type=text/ng-template id=deleteModal.html><div class=\"modal-header\"> <button type=\"button\" class=\"close\" ng-click=\"vm.cancel()\">×</button> <h4 class=\"modal-title\">Delete Employee</h4> </div> <div class=\"modal-body\"> <p>Are you sure you want delete this employee?</p> </div> <div class=\"modal-footer\"> <button class=\"btn btn-sm btn-white\" ng-click=\"vm.cancel()\">Cancel</button> <button class=\"btn btn-sm btn-success\" ng-click=\"vm.ok()\">OK</button> </div></script>");
$templateCache.put("app/states/reports/reports.html","<p>reports</p>");
$templateCache.put("app/states/schedule/schedule.html","<p>Schedule</p>");
$templateCache.put("app/states/settings/settings.html","<p>settings</p>");
$templateCache.put("app/core/layout/footer/layout.footer.html","<div class=\"container-fluid text-center\" ng-controller=\"FooterController as vm\">Copyright &copy; {{::vm.copyrightDate | date:\'yyyy\'}} <a href=http://www.martinmicunda.com target=_blank>Martin Micunda</a>. All rights reserved. <a href=javascript:void(0); mm-scroll-up=body class=\"pull-right btn-icon btn-circle btn-scroll-to-top fade in\" style=\"margin-top: 11px;\"><i class=\"fa fa-angle-up\"></i></a></div>");
$templateCache.put("app/core/layout/header/layout.header.html","<nav class=\"navbar navbar-default navbar-fixed-top\" role=navigation><div class=container-fluid><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#bs-example-navbar-collapse-1><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand ui-sref=schedule><span class=navbar-logo></span> <span class=text-theme>Employee</span> Scheduling</a></div><div class=\"collapse navbar-collapse\" id=bs-example-navbar-collapse-1><ul class=\"nav navbar-nav navbar-left\"><li ui-sref-active=active><a ui-sref=schedule><i class=\"fa fa-fw fa-calendar\"></i> Schedule</a></li><li ui-sref-active=active><a ui-sref=employees><i class=\"fa fa-fw fa-users\"></i> Employees</a></li><li ui-sref-active=active><a ui-sref=customers><i class=\"fa fa-fw fa-cubes\"></i> Customers</a></li><li ui-sref-active=active><a ui-sref=documents><i class=\"fa fa-fw fa-file-text\"></i> Documents</a></li><li ui-sref-active=active><a ui-sref=reports><i class=\"fa fa-fw fa-bar-chart\"></i> Reports</a></li></ul><ul class=\"header-nav nav navbar-nav navbar-right\"><li class=\"dropdown hidden-xs\"><i class=\"fa fa-expand fa-fw text\"></i></li><li class=dropdown dropdown><a href=javascript:; dropdown-toggle class=\"dropdown-toggle notification\"><i class=\"fa fa-bell-o\"></i> <span class=label>5</span></a><ul class=\"dropdown-menu media-list pull-right\" role=menu><li class=dropdown-header>Notifications (5)</li><li class=divider></li><li class=media><a href=javascript:;><div class=\"pull-left media-object bg-red\"><i class=\"fa fa-bug\"></i></div><div class=media-body><h6 class=media-heading>Server Error Reports</h6><div class=text-muted>3 minutes ago</div></div></a></li><li class=media><a href=javascript:;><div class=pull-left><img src=assets/img/user-1.jpg class=media-object alt></div><div class=media-body><h6 class=media-heading>John Smith</h6><p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p><div class=text-muted>25 minutes ago</div></div></a></li></ul></li><li class=dropdown dropdown ng-class=\"{active:$state.includes(\'account\')}\"><a href=# class=dropdown-toggle dropdown-toggle><img ng-src=../../../../images/me.jpg alt class=img-circle> <span class=hidden-sm>Martin Micunda</span> <span class=caret></span></a><ul class=\"dropdown-menu animated fadeInRight\" role=menu><li ui-sref-active=active><a ui-sref=account.account-details><i class=\"fa fa-fw fa-user\"></i> My Account</a></li><li ui-sref-active=active><a ui-sref=settings><i class=\"fa fa-fw fa-cogs\"></i> App Settings</a></li><li><a href=#><i class=\"fa fa-fw fa-retweet\"></i> Switch Account</a></li><li><a href=#><i class=\"fa fa-fw fa-laptop\"></i> Tour Guide</a></li><li class=divider></li><li><a href=#><i class=\"fa fa-fw fa-sign-out\"></i> Log Out</a></li></ul></li></ul></div></div></nav>");
$templateCache.put("app/states/account/account-details/account-details.html","<div class=\"col-sm-12 col-md-9 animated fadeInRight\"><div class=\"panel panel-inverse\"><div class=panel-heading><h4 class=panel-title>Account Details</h4></div><div class=panel-body><form class=\"form-horizontal form-validation\" name=accountDetailsForm role=form novalidate mm-unsaved-form-warning-modal=vm.reset()><div class=form-group><label class=\"col-sm-4 control-label\">Photo</label><div class=col-sm-5><div class=\"btn-group mr5\"><img class=\"img-circle img-bordered-dark\" src=../../../images/me.jpg alt width=34px></div><div class=btn-group dropdown><button type=button class=\"btn btn-sm btn-default dropdown-toggle\" dropdown-toggle>Change photo <span class=caret></span></button><ul class=dropdown-menu role=menu><li><a href=#>Upload photo</a></li><li><a href=#>Remove</a></li></ul></div></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">First Name</label><div class=col-sm-5><input name=firstName type=text ng-model=vm.employee.firstName class=form-control required><div ng-if=accountDetailsForm.$submitted ng-messages=accountDetailsForm.firstName.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Last Name</label><div class=col-sm-5><input name=lastName type=text ng-model=vm.employee.lastName class=form-control required><div ng-if=accountDetailsForm.$submitted ng-messages=accountDetailsForm.lastName.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=form-group><label class=\"control-label col-sm-4\">Position</label><div class=col-sm-5><select name=position class=form-control ng-model=vm.employee.position ng-options=\"position.code as position.name for position in vm.positions\"></select></div></div><div class=form-group><div class=\"col-sm-5 col-sm-offset-4\"><jp-ng-bs-animated-button class=\"btn btn-sm btn-success\" ng-click=vm.save(accountDetailsForm) is-submitting=vm.isSubmitting result=vm.result options=vm.saveButtonOptions></jp-ng-bs-animated-button><button type=button class=\"btn btn-sm btn-default\" ng-click=vm.reset()>Reset</button></div></div></form></div></div></div>");
$templateCache.put("app/states/account/account-settings/account-settings.html","<div class=\"col-sm-12 col-md-9 animated fadeInRight\"><div class=\"panel panel-inverse\"><div class=panel-heading><h4 class=panel-title>Account Settings</h4></div><div class=panel-body><form class=\"form-horizontal form-validation\" name=accountSettingsForm role=form novalidate mm-unsaved-form-warning-modal=vm.reset()><div class=form-group><label class=\"control-label col-sm-4\">Language</label><div class=col-sm-5><select name=language ng-model=vm.employee.language class=form-control ng-options=\"language.code as language.name for language in vm.languages\"></select></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Email</label><div class=col-sm-5><input name=email type=email ng-model=vm.employee.email class=form-control required><div ng-if=accountSettingsForm.$submitted ng-messages=accountSettingsForm.email.$error><div ng-message=email class=error>Invalid email.</div></div></div></div><div class=form-group><label class=\"control-label col-sm-4\">Current Password</label><div class=col-sm-5><input name=currentPassword type=password ng-model=vm.employee.password class=form-control> <a href=#>Forgot password?</a><div ng-if=accountSettingsForm.$submitted ng-messages=accountSettingsForm.lastName.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=form-group><label class=\"control-label col-sm-4\">New Password</label><div class=col-sm-5><input name=newPassword type=password ng-model=vm.employee.password class=form-control></div></div><div class=form-group><label class=\"control-label col-sm-4\">Confirm Password</label><div class=col-sm-5><input name=confirmPassword type=password ng-model=vm.employee.password class=form-control></div></div><div class=form-group><div class=\"col-sm-5 col-sm-offset-4\"><jp-ng-bs-animated-button class=\"btn btn-sm btn-success\" ng-click=vm.save(accountSettingsForm) is-submitting=vm.isSubmitting result=vm.result options=vm.saveButtonOptions></jp-ng-bs-animated-button><button type=button class=\"btn btn-sm btn-default\" ng-click=vm.reset()>Reset</button></div></div></form></div></div></div>");
$templateCache.put("app/states/account/bank-details/bank-details.html","<div class=\"col-sm-12 col-md-9 animated fadeInRight\"><div class=\"panel panel-inverse\"><div class=panel-heading><h4 class=panel-title>Bank Details</h4></div><div class=panel-body><form class=\"form-horizontal form-validation\" name=bankDetailsForm role=form novalidate mm-unsaved-form-warning-modal=vm.reset()><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Bank Name</label><div class=col-sm-5><input name=bankName type=text ng-model=vm.employee.bankDetails.bankName class=form-control required><div ng-if=bankDetailsForm.$submitted ng-messages=bankDetailsForm.bankName.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Account Number</label><div class=col-sm-5><input name=accountNumber type=text ng-model=vm.employee.bankDetails.accountNumber class=form-control required><div ng-if=bankDetailsForm.$submitted ng-messages=bankDetailsForm.accountNumber.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Account Name</label><div class=col-sm-5><input name=accountName type=text ng-model=vm.employee.bankDetails.accountName class=form-control required><div ng-if=bankDetailsForm.$submitted ng-messages=bankDetailsForm.accountName.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=form-group><div class=\"col-sm-5 col-sm-offset-4\"><jp-ng-bs-animated-button class=\"btn btn-sm btn-success\" ng-click=vm.save(bankDetailsForm) is-submitting=vm.isSubmitting result=vm.result options=vm.saveButtonOptions></jp-ng-bs-animated-button><button type=button class=\"btn btn-sm btn-default\" ng-click=vm.reset()>Reset</button></div></div></form></div></div></div>");
$templateCache.put("app/states/account/contact-details/contact-details.html","<div class=\"col-sm-12 col-md-9 animated fadeInRight\"><div class=\"panel panel-inverse\"><div class=panel-heading><h4 class=panel-title>Contact Details</h4></div><div class=panel-body><form class=\"form-horizontal form-validation\" name=contactDetailsForm role=form novalidate mm-unsaved-form-warning-modal=vm.reset()><div class=form-group><label class=\"control-label col-sm-4\">Phone Number</label><div class=col-sm-5><input name=phoneNumber type=text ng-model=vm.employee.contactDetails.phoneNumber class=form-control></div></div><div class=form-group><label class=\"control-label col-sm-4\">Address</label><div class=col-sm-5><input name=address type=text ng-model=vm.employee.contactDetails.address class=form-control></div></div><div class=form-group><label class=\"control-label col-sm-4\">City</label><div class=col-sm-5><input name=city type=text ng-model=vm.employee.contactDetails.city class=form-control></div></div><div class=form-group><label class=\"control-label col-sm-4\">Zip Code</label><div class=col-sm-5><input name=zipCode type=text ng-model=vm.employee.contactDetails.zipCode class=form-control></div></div><div class=form-group><div class=\"col-sm-5 col-sm-offset-4\"><jp-ng-bs-animated-button class=\"btn btn-sm btn-success\" ng-click=vm.save(contactDetailsForm) is-submitting=vm.isSubmitting result=vm.result options=vm.saveButtonOptions></jp-ng-bs-animated-button><button type=button class=\"btn btn-sm btn-default\" ng-click=vm.reset()>Reset</button></div></div></form></div></div></div>");
$templateCache.put("app/states/employees/edit/edit.html","<div class=modal-header><button type=button class=close ng-click=vm.cancel()>×</button><h4 class=modal-title>Edit Employee</h4></div><div class=\"modal-body form-wizard\"><form class=\"form-horizontal form-validation\" name=accountDetailsForm role=form novalidate mm-unsaved-form-warning-modal=vm.reset()><div class=\"col-sm-12 col-md-3 pl-0\"><ul class=\"list-table mb10\"><li style=width:50px;><img class=\"img-circle img-bordered-dark\" src=../../../images/me.jpg alt width=45px></li><li class=text-left><h5 class=\"font-weight-heavy ellipsis\">Martin Micunda</h5><div><div class=\"progress progress-xs mb5\"><div class=progress-bar ng-class=\"{\'progress-bar-success\': vm.profileComplete >= 70, \'progress-bar-warning\': vm.profileComplete < 70 && vm.profileComplete >= 40, \'progress-bar-danger\': vm.profileComplete < 40}\" ng-style=\"{\'width\': vm.profileComplete + \'%\'}\"></div></div><p class=\"text-muted clearfix\"><span class=pull-left>Profile complete</span> <span class=pull-right>{{vm.profileComplete}}%</span></p></div></li></ul><ul class=\"nav nav-tabs nav-stacked\"><li ui-sref-active=active><a ui-sref=employees.edit.account-details><i class=\"fa fa-user fa-fw \"></i>&nbsp;Account Details</a></li><li ui-sref-active=active><a ui-sref=employees.edit.account-settings><i class=\"fa fa-cogs fa-fw \"></i>&nbsp;Account Settings</a></li><li ui-sref-active=active><a ui-sref=employees.edit.contact-details><i class=\"fa fa-pencil-square-o fa-fw\"></i>&nbsp;Contact Details</a></li><li ui-sref-active=active><a ui-sref=employees.edit.bank-details><i class=\"fa fa-bank fa-fw\"></i>&nbsp;Bank Details</a></li><li ui-sref-active=active><a ui-sref=employees.edit.hourly-rates><i class=\"fa fa-dollar fa-fw\"></i>&nbsp;Hourly Rates</a></li></ul></div><div class=\"well col-sm-12 col-md-9 clearfix\"><div ui-view=modal></div><div class=form-group><div class=\"col-sm-5 col-sm-offset-4\"><jp-ng-bs-animated-button class=\"btn btn-sm btn-success\" ng-click=vm.save(accountDetailsForm) is-submitting=vm.isSubmitting result=vm.result options=vm.saveButtonOptions></jp-ng-bs-animated-button></div></div></div><div class=clearfix></div></form></div><script type=text/ng-template id=unsavedWarningModal.html><div class=\"modal-header\"> <button type=\"button\" class=\"close\" ng-click=\"vm.cancel()\">×</button> <h4 class=\"modal-title\">Unsaved Changes</h4> </div> <div class=\"modal-body\"> <p>You have unsaved changes. Leave the page?</p> </div> <div class=\"modal-footer\"> <button class=\"btn btn-sm btn-white\" ng-click=\"vm.cancel()\">Cancel</button> <button class=\"btn btn-sm btn-success\" ng-click=\"vm.ok()\">Ignore Changes</button> </div></script>");
$templateCache.put("app/states/employees/add/add.html","<div class=modal-header><button type=button class=close ng-click=vm.cancel()>×</button><h4 class=modal-title>Add Employee</h4></div><div class=\"modal-body form-wizard\"><form class=\"form-horizontal form-validation\" name=accountDetailsForm role=form novalidate><div class=\"col-sm-12 col-md-3 pl-0\"><ul class=\"list-table mb10\"><li><div class=\"progress progress-xs mb5\"><div class=progress-bar ng-class=\"{\'progress-bar-success\': vm.profileComplete >= 70, \'progress-bar-warning\': vm.profileComplete < 70 && vm.profileComplete >= 40, \'progress-bar-danger\': vm.profileComplete < 40}\" ng-style=\"{\'width\': vm.profileComplete + \'%\'}\"></div></div><p class=\"text-muted clearfix\"><span class=pull-left>Profile complete</span> <span class=pull-right>{{vm.profileComplete}}%</span></p></li></ul><ul class=\"nav nav-tabs nav-stacked\"><li ui-sref-active=active class=text-center><a ui-sref=employees.add.account-details><div class=menu-icon>1</div><i class=\"fa fa-user fa-fw \"></i>&nbsp;Account Details</a></li><li ui-sref-active=active class=text-center><a ui-sref=employees.add.account-settings><div class=menu-icon>2</div><i class=\"fa fa-cogs fa-fw \"></i>&nbsp;Account Settings</a></li></ul></div><div ui-view=modal></div></form></div>");
$templateCache.put("app/states/employees/message/message.html","<form class=form-validation name=messageForm role=form novalidate><div class=modal-header><button type=button class=close ng-click=vm.cancel()>×</button><h4 class=modal-title>Send Message</h4></div><div class=\"modal-body form-wizard\"><div class=form-group><label for=subject>Subject</label> <input name=subject type=text ng-model=vm.email.subject class=form-control id=subject required><div ng-if=messageForm.$submitted ng-messages=messageForm.subject.$error><div ng-message=required class=error>This field is required.</div></div></div><div class=form-group><label for=message>Message</label> <textarea name=message type=text ng-model=vm.email.message class=form-control id=message rows=4 required></textarea><div ng-if=messageForm.$submitted ng-messages=messageForm.message.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=modal-footer><jp-ng-bs-animated-button class=\"btn btn-sm btn-success\" ng-click=vm.save(messageForm) is-submitting=vm.isSubmitting result=vm.result options=vm.saveButtonOptions></jp-ng-bs-animated-button></div></form>");
$templateCache.put("app/states/employees/schedule/schedule.html","<div class=modal-header><button type=button class=close ng-click=vm.cancel()>×</button><h4 class=modal-title>Schedule</h4></div><div class=modal-body><p>Coming soon!</p></div>");
$templateCache.put("app/states/employees/add/account-details/account-details.html","<div class=\"well col-sm-12 col-md-9\"><fieldset class=\"animated slideIn\"><legend class=\"pull-left width-full\">Account Details</legend><div class=form-group><label class=\"col-sm-4 control-label\">Photo</label><div class=col-sm-5><div class=\"btn-group mr5\"><img class=\"img-circle img-bordered-dark\" src=../../../images/avatar.png alt width=34px></div><div class=btn-group dropdown><button type=button class=\"btn btn-sm btn-default dropdown-toggle\" dropdown-toggle>Change photo <span class=caret></span></button><ul class=dropdown-menu role=menu><li><a href=#>Upload photo</a></li><li><a href=#>Remove</a></li></ul></div></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">First Name</label><div class=col-sm-5><input name=firstName type=text ng-model=vm.employee.firstName class=form-control required><div ng-if=accountDetailsForm.$submitted ng-messages=accountDetailsForm.firstName.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Last Name</label><div class=col-sm-5><input name=lastName type=text ng-model=vm.employee.lastName class=form-control required><div ng-if=accountDetailsForm.$submitted ng-messages=accountDetailsForm.lastName.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=form-group><label class=\"control-label col-sm-4\">Position</label><div class=col-sm-5><select name=position class=form-control ng-model=vm.employee.position ng-options=\"position.code as position.name for position in vm.positions\"></select></div></div><div class=form-group><label class=\"control-label col-sm-4\">Access Privileges <a href=# tooltip-placement=top tooltip=\"Employee: An employee has basic viewing access to the schedule. They can facilitate requests on their own shifts, respond to available shifts. \" tooltip-animation=true>&nbsp;<i class=\"fa fa-question-circle\"></i></a></label><div class=col-sm-5><select name=role class=form-control ng-model=vm.employee.role ng-options=\"role.code as role.name for role in vm.roles\"></select></div></div></fieldset></div><ul class=\"pager bwizard-buttons\"><li class=\"previous disabled\" role=button><a ui-sref=form.payment>← Previous</a></li><li class=next role=button><a ui-sref=employees.add.account-settings>Next →</a></li></ul>");
$templateCache.put("app/states/employees/add/account-settings/account-settings.html","<div class=\"well col-sm-12 col-md-9\"><p class=\"animated fadeIn\">acccount settings</p></div><ul class=\"pager bwizard-buttons\"><li class=\"previous disabled\" role=button><a ui-sref=form.payment>← Previous</a></li><li class=next role=button><a ui-sref=employees.add.account-settings>Next →</a></li></ul>");
$templateCache.put("app/states/employees/edit/account-details/account-details.html","<fieldset class=\"animated fadeIn\"><legend class=\"pull-left width-full\">Account Details</legend><div class=form-group><label class=\"col-sm-4 control-label\">Photo</label><div class=col-sm-5><div class=\"btn-group mr5\"><img class=\"img-circle img-bordered-dark\" src=../../../images/me.jpg alt width=34px></div><div class=btn-group dropdown><button type=button class=\"btn btn-sm btn-default dropdown-toggle\" dropdown-toggle>Change photo <span class=caret></span></button><ul class=dropdown-menu role=menu><li><a href=#>Upload photo</a></li><li><a href=#>Remove</a></li></ul></div></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">First Name</label><div class=col-sm-5><input name=firstName type=text ng-model=vm.employee.firstName class=form-control required><div ng-if=accountDetailsForm.$submitted ng-messages=accountDetailsForm.firstName.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Last Name</label><div class=col-sm-5><input name=lastName type=text ng-model=vm.employee.lastName class=form-control required><div ng-if=accountDetailsForm.$submitted ng-messages=accountDetailsForm.lastName.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=form-group><label class=\"control-label col-sm-4\">Position</label><div class=col-sm-5><select name=position class=form-control ng-model=vm.employee.position ng-options=\"position.code as position.name for position in vm.positions\"></select></div></div><div class=form-group><label class=\"control-label col-sm-4\">Access Privileges <a href=# tooltip-placement=top tooltip=\"Employee: An employee has basic viewing access to the schedule. They can facilitate requests on their own shifts, respond to available shifts. \" tooltip-animation=true>&nbsp;<i class=\"fa fa-question-circle\"></i></a></label><div class=col-sm-5><select name=role class=form-control ng-model=vm.employee.role ng-options=\"role.code as role.name for role in vm.roles\"></select></div></div></fieldset>");
$templateCache.put("app/states/employees/edit/account-settings/account-settings.html","<fieldset class=\"animated fadeIn\"><legend class=\"pull-left width-full\">Account Settings</legend><div class=form-group><label class=\"control-label col-sm-4\">Language</label><div class=col-sm-5><select name=language ng-model=vm.employee.language class=form-control ng-options=\"language.code as language.name for language in vm.languages\"></select></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Email</label><div class=col-sm-5><input name=email type=email ng-model=vm.employee.email class=form-control required><div ng-if=accountSettingsForm.$submitted ng-messages=accountSettingsForm.email.$error><div ng-message=email class=error>Invalid email.</div></div></div></div><div class=form-group><label class=\"control-label col-sm-4\">Password</label><div class=col-sm-5><p class=form-control-static><a href=#>Reset password?</a></p></div></div></fieldset>");
$templateCache.put("app/states/employees/edit/bank-details/bank-details.html","<fieldset class=\"animated fadeIn\"><legend class=\"pull-left width-full\">Bank Details</legend><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Bank Name</label><div class=col-sm-5><input name=bankName type=text ng-model=vm.employee.bankDetails.bankName class=form-control required><div ng-if=bankDetailsForm.$submitted ng-messages=bankDetailsForm.bankName.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Account Number</label><div class=col-sm-5><input name=accountNumber type=text ng-model=vm.employee.bankDetails.accountNumber class=form-control required><div ng-if=bankDetailsForm.$submitted ng-messages=bankDetailsForm.accountNumber.$error><div ng-message=required class=error>This field is required.</div></div></div></div><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Account Name</label><div class=col-sm-5><input name=accountName type=text ng-model=vm.employee.bankDetails.accountName class=form-control required><div ng-if=bankDetailsForm.$submitted ng-messages=bankDetailsForm.accountName.$error><div ng-message=required class=error>This field is required.</div></div></div></div></fieldset>");
$templateCache.put("app/states/employees/edit/contact-details/contact-details.html","<fieldset class=\"animated fadeIn\"><legend class=\"pull-left width-full\">Contact Details</legend><div class=form-group><label class=\"control-label col-sm-4\">Phone Number</label><div class=col-sm-5><input name=phoneNumber type=text ng-model=vm.employee.contactDetails.phoneNumber class=form-control></div></div><div class=form-group><label class=\"control-label col-sm-4\">Address</label><div class=col-sm-5><input name=address type=text ng-model=vm.employee.contactDetails.address class=form-control></div></div><div class=form-group><label class=\"control-label col-sm-4\">City</label><div class=col-sm-5><input name=city type=text ng-model=vm.employee.contactDetails.city class=form-control></div></div><div class=form-group><label class=\"control-label col-sm-4\">Zip Code</label><div class=col-sm-5><input name=zipCode type=text ng-model=vm.employee.contactDetails.zipCode class=form-control></div></div></fieldset>");
$templateCache.put("app/states/employees/edit/hourly-rates/hourly-rates.html","<fieldset class=\"animated fadeIn\"><legend class=\"pull-left width-full\">Hourly Rates</legend><div class=\"form-group required\"><label class=\"control-label col-sm-4\">Hourly Rate</label><div class=col-sm-5><input name=hourlyRate type=number ng-model=vm.employee.hourlyRates.rate class=form-control required><div ng-if=hourlyRatesForm.$submitted ng-messages=hourlyRatesForm.hourlyRate.$error><div ng-message=required class=error>This field is required.</div><div ng-message=number class=error>Invalid number.</div></div></div><div class=currencyCode>{{vm.employee.hourlyRates.currencyCode}}</div></div></fieldset>");}]);