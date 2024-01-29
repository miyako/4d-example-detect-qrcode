var zbarWasm=function(e){"use strict";function t(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))}function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}"function"==typeof SuppressedError&&SuppressedError;var i={exports:{}};const o=n(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));function s(e,t){for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,c=function(e){return a.exec(e).slice(1)};function u(){for(var e="",t=!1,r=arguments.length-1;r>=-1&&!t;r--){var n=r>=0?arguments[r]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,t="/"===n.charAt(0))}return(t?"/":"")+(e=s(m(e.split("/"),(function(e){return!!e})),!t).join("/"))||"."}function f(e){var t=_(e),r="/"===R(e,-1);return(e=s(m(e.split("/"),(function(e){return!!e})),!t).join("/"))||t||(e="."),e&&r&&(e+="/"),(t?"/":"")+e}function _(e){return"/"===e.charAt(0)}function l(){return f(m(Array.prototype.slice.call(arguments,0),(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function A(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=u(e).substr(1),t=u(t).substr(1);for(var n=r(e.split("/")),i=r(t.split("/")),o=Math.min(n.length,i.length),s=o,a=0;a<o;a++)if(n[a]!==i[a]){s=a;break}var c=[];for(a=s;a<n.length;a++)c.push("..");return(c=c.concat(i.slice(s))).join("/")}function h(e){var t=c(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."}function p(e,t){var r=c(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r}function d(e){return c(e)[3]}const y={extname:d,basename:p,dirname:h,sep:"/",delimiter:":",relative:A,join:l,isAbsolute:_,normalize:f,resolve:u};function m(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var R="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)};const g=n(Object.freeze(Object.defineProperty({__proto__:null,basename:p,default:y,delimiter:":",dirname:h,extname:d,isAbsolute:_,join:l,normalize:f,relative:A,resolve:u,sep:"/"},Symbol.toStringTag,{value:"Module"})));!function(e,t){var r,n=(r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(r=r||__filename),function(e={}){var t,n,i=e;i.ready=new Promise(((e,r)=>{t=e,n=r}));var s,a,c,u=Object.assign({},i),f="object"==typeof window,_="function"==typeof importScripts,l="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,A="";if(l){var h=o,p=g;A=_?p.dirname(A)+"/":__dirname+"/",s=(e,t)=>(e=U(e)?new URL(e):p.normalize(e),h.readFileSync(e,t?void 0:"utf8")),c=e=>{var t=s(e,!0);return t.buffer||(t=new Uint8Array(t)),t},a=(e,t,r,n=!0)=>{e=U(e)?new URL(e):p.normalize(e),h.readFile(e,n?void 0:"utf8",((e,i)=>{e?r(e):t(n?i.buffer:i)}))},!i.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),i.inspect=()=>"[Emscripten Module object]"}else(f||_)&&(_?A=self.location.href:"undefined"!=typeof document&&document.currentScript&&(A=document.currentScript.src),r&&(A=r),A=0!==A.indexOf("blob:")?A.substr(0,A.replace(/[?#].*/,"").lastIndexOf("/")+1):"",s=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},_&&(c=e=>{var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),a=(e,t,r)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=()=>{200==n.status||0==n.status&&n.response?t(n.response):r()},n.onerror=r,n.send(null)});var d,y,m,R=i.print||console.log.bind(console),B=i.printErr||console.error.bind(console);Object.assign(i,u),u=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(d=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&T("no native wasm support detected");var v,E,b=!1;function Z(){var e=y.buffer;i.HEAP8=new Int8Array(e),i.HEAP16=new Int16Array(e),i.HEAP32=new Int32Array(e),i.HEAPU8=v=new Uint8Array(e),i.HEAPU16=new Uint16Array(e),i.HEAPU32=E=new Uint32Array(e),i.HEAPF32=new Float32Array(e),i.HEAPF64=new Float64Array(e)}var I=[],S=[],C=[],w=0,N=null;function T(e){i.onAbort&&i.onAbort(e),B(e="Aborted("+e+")"),b=!0,e+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(e);throw n(t),t}var O,P,D="data:application/octet-stream;base64,";function F(e){return e.startsWith(D)}function U(e){return e.startsWith("file://")}function G(e){if(e==O&&d)return new Uint8Array(d);if(c)return c(e);throw"both async and sync fetching of the wasm failed"}function H(e,t,r){return function(e){if(!d&&(f||_)){if("function"==typeof fetch&&!U(e))return fetch(e,{credentials:"same-origin"}).then((t=>{if(!t.ok)throw"failed to load wasm binary file at '"+e+"'";return t.arrayBuffer()})).catch((()=>G(e)));if(a)return new Promise(((t,r)=>{a(e,(e=>t(new Uint8Array(e))),r)}))}return Promise.resolve().then((()=>G(e)))}(e).then((e=>WebAssembly.instantiate(e,t))).then((e=>e)).then(r,(e=>{B("failed to asynchronously prepare wasm: "+e),T(e)}))}F(O="zbar.wasm")||(P=O,O=i.locateFile?i.locateFile(P,A):A+P);var M,j=e=>{for(;e.length>0;)e.shift()(i)},x=e=>{var t=e-y.buffer.byteLength+65535>>>16;try{return y.grow(t),Z(),1}catch(e){}},L="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,k=[null,[],[]],W=(e,t)=>{var r=k[e];0===t||10===t?((1===e?R:B)(((e,t,r)=>{for(var n=t+r,i=t;e[i]&&!(i>=n);)++i;if(i-t>16&&e.buffer&&L)return L.decode(e.subarray(t,i));for(var o="";t<i;){var s=e[t++];if(128&s){var a=63&e[t++];if(192!=(224&s)){var c=63&e[t++];if((s=224==(240&s)?(15&s)<<12|a<<6|c:(7&s)<<18|a<<12|c<<6|63&e[t++])<65536)o+=String.fromCharCode(s);else{var u=s-65536;o+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else o+=String.fromCharCode((31&s)<<6|a)}else o+=String.fromCharCode(s)}return o})(r,0)),r.length=0):r.push(t)},Y={d:()=>!0,e:function(){return Date.now()},c:e=>{var t=v.length,r=2147483648;if((e>>>=0)>r)return!1;for(var n,i,o=1;o<=4;o*=2){var s=t*(1+.2/o);s=Math.min(s,e+100663296);var a=Math.min(r,(n=Math.max(e,s))+((i=65536)-n%i)%i);if(x(a))return!0}return!1},f:e=>52,b:function(e,t,r,n,i){return 70},a:(e,t,r,n)=>{for(var i=0,o=0;o<r;o++){var s=E[t>>2],a=E[t+4>>2];t+=8;for(var c=0;c<a;c++)W(e,v[s+c]);i+=a}return E[n>>2]=i,0}};function z(){function e(){M||(M=!0,i.calledRun=!0,b||(j(S),t(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)e=i.postRun.shift(),C.unshift(e);var e;j(C)}()))}w>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)e=i.preRun.shift(),I.unshift(e);var e;j(I)}(),w>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),e()}),1)):e()))}if(function(){var e,t,r,o,s={a:Y};function a(e,t){var r,n=e.exports;return y=(m=n).g,Z(),m.s,r=m.h,S.unshift(r),function(e){if(w--,i.monitorRunDependencies&&i.monitorRunDependencies(w),0==w&&N){var t=N;N=null,t()}}(),n}if(w++,i.monitorRunDependencies&&i.monitorRunDependencies(w),i.instantiateWasm)try{return i.instantiateWasm(s,a)}catch(e){B("Module.instantiateWasm callback failed with error: "+e),n(e)}(e=d,t=O,r=s,o=function(e){a(e.instance)},e||"function"!=typeof WebAssembly.instantiateStreaming||F(t)||U(t)||l||H(t,r,o)).catch(n)}(),i._ImageScanner_create=()=>(i._ImageScanner_create=m.i)(),i._ImageScanner_destory=e=>(i._ImageScanner_destory=m.j)(e),i._ImageScanner_set_config=(e,t,r,n)=>(i._ImageScanner_set_config=m.k)(e,t,r,n),i._ImageScanner_enable_cache=(e,t)=>(i._ImageScanner_enable_cache=m.l)(e,t),i._ImageScanner_recycle_image=(e,t)=>(i._ImageScanner_recycle_image=m.m)(e,t),i._ImageScanner_get_results=e=>(i._ImageScanner_get_results=m.n)(e),i._ImageScanner_scan=(e,t)=>(i._ImageScanner_scan=m.o)(e,t),i._Image_create=(e,t,r,n,o,s)=>(i._Image_create=m.p)(e,t,r,n,o,s),i._Image_destory=e=>(i._Image_destory=m.q)(e),i._Image_get_symbols=e=>(i._Image_get_symbols=m.r)(e),i._free=e=>(i._free=m.t)(e),i._malloc=e=>(i._malloc=m.u)(e),N=function e(){M||z(),M||(N=e)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return z(),e.ready});e.exports=n}(i);const B=r(i.exports);let v;const E=t(void 0,void 0,void 0,(function*(){if(v=yield B(),!v)throw Error("WASM was not loaded");return v})),b=()=>t(void 0,void 0,void 0,(function*(){return yield E}));var Z,I,S;e.ZBarSymbolType=void 0,(Z=e.ZBarSymbolType||(e.ZBarSymbolType={}))[Z.ZBAR_NONE=0]="ZBAR_NONE",Z[Z.ZBAR_PARTIAL=1]="ZBAR_PARTIAL",Z[Z.ZBAR_EAN2=2]="ZBAR_EAN2",Z[Z.ZBAR_EAN5=5]="ZBAR_EAN5",Z[Z.ZBAR_EAN8=8]="ZBAR_EAN8",Z[Z.ZBAR_UPCE=9]="ZBAR_UPCE",Z[Z.ZBAR_ISBN10=10]="ZBAR_ISBN10",Z[Z.ZBAR_UPCA=12]="ZBAR_UPCA",Z[Z.ZBAR_EAN13=13]="ZBAR_EAN13",Z[Z.ZBAR_ISBN13=14]="ZBAR_ISBN13",Z[Z.ZBAR_COMPOSITE=15]="ZBAR_COMPOSITE",Z[Z.ZBAR_I25=25]="ZBAR_I25",Z[Z.ZBAR_DATABAR=34]="ZBAR_DATABAR",Z[Z.ZBAR_DATABAR_EXP=35]="ZBAR_DATABAR_EXP",Z[Z.ZBAR_CODABAR=38]="ZBAR_CODABAR",Z[Z.ZBAR_CODE39=39]="ZBAR_CODE39",Z[Z.ZBAR_PDF417=57]="ZBAR_PDF417",Z[Z.ZBAR_QRCODE=64]="ZBAR_QRCODE",Z[Z.ZBAR_SQCODE=80]="ZBAR_SQCODE",Z[Z.ZBAR_CODE93=93]="ZBAR_CODE93",Z[Z.ZBAR_CODE128=128]="ZBAR_CODE128",Z[Z.ZBAR_SYMBOL=255]="ZBAR_SYMBOL",Z[Z.ZBAR_ADDON2=512]="ZBAR_ADDON2",Z[Z.ZBAR_ADDON5=1280]="ZBAR_ADDON5",Z[Z.ZBAR_ADDON=1792]="ZBAR_ADDON",e.ZBarConfigType=void 0,(I=e.ZBarConfigType||(e.ZBarConfigType={}))[I.ZBAR_CFG_ENABLE=0]="ZBAR_CFG_ENABLE",I[I.ZBAR_CFG_ADD_CHECK=1]="ZBAR_CFG_ADD_CHECK",I[I.ZBAR_CFG_EMIT_CHECK=2]="ZBAR_CFG_EMIT_CHECK",I[I.ZBAR_CFG_ASCII=3]="ZBAR_CFG_ASCII",I[I.ZBAR_CFG_BINARY=4]="ZBAR_CFG_BINARY",I[I.ZBAR_CFG_NUM=5]="ZBAR_CFG_NUM",I[I.ZBAR_CFG_MIN_LEN=32]="ZBAR_CFG_MIN_LEN",I[I.ZBAR_CFG_MAX_LEN=33]="ZBAR_CFG_MAX_LEN",I[I.ZBAR_CFG_UNCERTAINTY=64]="ZBAR_CFG_UNCERTAINTY",I[I.ZBAR_CFG_POSITION=128]="ZBAR_CFG_POSITION",I[I.ZBAR_CFG_TEST_INVERTED=129]="ZBAR_CFG_TEST_INVERTED",I[I.ZBAR_CFG_X_DENSITY=256]="ZBAR_CFG_X_DENSITY",I[I.ZBAR_CFG_Y_DENSITY=257]="ZBAR_CFG_Y_DENSITY",e.ZBarOrientation=void 0,(S=e.ZBarOrientation||(e.ZBarOrientation={}))[S.ZBAR_ORIENT_UNKNOWN=-1]="ZBAR_ORIENT_UNKNOWN",S[S.ZBAR_ORIENT_UP=0]="ZBAR_ORIENT_UP",S[S.ZBAR_ORIENT_RIGHT=1]="ZBAR_ORIENT_RIGHT",S[S.ZBAR_ORIENT_DOWN=2]="ZBAR_ORIENT_DOWN",S[S.ZBAR_ORIENT_LEFT=3]="ZBAR_ORIENT_LEFT";class C{constructor(e,t){this.ptr=e,this.inst=t}checkAlive(){if(!this.ptr)throw Error("Call after destroyed")}getPointer(){return this.checkAlive(),this.ptr}}class w{constructor(e,t){this.ptr=e,this.ptr32=e>>2,this.buf=t,this.HEAP8=new Int8Array(t),this.HEAPU32=new Uint32Array(t),this.HEAP32=new Int32Array(t)}}class N extends w{get type(){return this.HEAPU32[this.ptr32]}get data(){const e=this.HEAPU32[this.ptr32+4],t=this.HEAPU32[this.ptr32+5];return Int8Array.from(this.HEAP8.subarray(t,t+e))}get points(){const e=this.HEAPU32[this.ptr32+7],t=this.HEAPU32[this.ptr32+8]>>2,r=[];for(let n=0;n<e;++n){const e=this.HEAP32[t+2*n],i=this.HEAP32[t+2*n+1];r.push({x:e,y:i})}return r}get orientation(){return this.HEAP32[this.ptr32+9]}get next(){const e=this.HEAPU32[this.ptr32+11];return e?new N(e,this.buf):null}get time(){return this.HEAPU32[this.ptr32+13]}get cacheCount(){return this.HEAP32[this.ptr32+14]}get quality(){return this.HEAP32[this.ptr32+15]}}class T extends w{get head(){const e=this.HEAPU32[this.ptr32+2];return e?new N(e,this.buf):null}}class O{constructor(t){this.type=t.type,this.typeName=e.ZBarSymbolType[this.type],this.data=t.data,this.points=t.points,this.orientation=t.orientation,this.time=t.time,this.cacheCount=t.cacheCount,this.quality=t.quality}static createSymbolsFromPtr(e,t){if(0==e)return[];let r=new T(e,t).head;const n=[];for(;null!==r;)n.push(new O(r)),r=r.next;return n}decode(e){return new TextDecoder(e).decode(this.data)}}class P extends C{static createFromGrayBuffer(e,r,n,i=0){return t(this,void 0,void 0,(function*(){const t=yield b(),o=new Uint8Array(n),s=e*r;if(s!==o.byteLength)throw Error(`data length (${o.byteLength} bytes) does not match width and height (${s} bytes)`);const a=t._malloc(s);t.HEAPU8.set(o,a);return new this(t._Image_create(e,r,808466521,a,s,i),t)}))}static createFromRGBABuffer(e,r,n,i=0){return t(this,void 0,void 0,(function*(){const t=yield b(),o=new Uint8Array(n),s=e*r;if(4*s!==o.byteLength)throw Error(`data length (${o.byteLength} bytes) does not match width and height (${4*s} bytes)`);const a=t._malloc(s),c=a+s,u=t.HEAPU8;for(let e=a,t=0;e<c;e++,t+=4)u[e]=19595*o[t]+38469*o[t+1]+7472*o[t+2]>>16;return new this(t._Image_create(e,r,808466521,a,s,i),t)}))}destroy(){this.checkAlive(),this.inst._Image_destory(this.ptr),this.ptr=0}getSymbols(){this.checkAlive();const e=this.inst._Image_get_symbols(this.ptr);return O.createSymbolsFromPtr(e,this.inst.HEAPU8.buffer)}}class D extends C{static create(){return t(this,void 0,void 0,(function*(){const e=yield b();return new this(e._ImageScanner_create(),e)}))}destroy(){this.checkAlive(),this.inst._ImageScanner_destory(this.ptr),this.ptr=0}setConfig(e,t,r){return this.checkAlive(),this.inst._ImageScanner_set_config(this.ptr,e,t,r)}enableCache(e=!0){this.checkAlive(),this.inst._ImageScanner_enable_cache(this.ptr,e)}recycleImage(e){this.checkAlive(),this.inst._ImageScanner_recycle_image(this.ptr,e.getPointer())}getResults(){this.checkAlive();const e=this.inst._ImageScanner_get_results(this.ptr);return O.createSymbolsFromPtr(e,this.inst.HEAPU8.buffer)}scan(e){return this.checkAlive(),this.inst._ImageScanner_scan(this.ptr,e.getPointer())}}const F=()=>t(void 0,void 0,void 0,(function*(){const t=yield D.create();return t.setConfig(e.ZBarSymbolType.ZBAR_NONE,e.ZBarConfigType.ZBAR_CFG_BINARY,1),t}));let U;const G=(e,r)=>t(void 0,void 0,void 0,(function*(){void 0===r&&(r=U||(yield F()),U=r);const t=r.scan(e);if(t<0)throw Error("Scan Failed");return 0===t?[]:e.getSymbols()})),H=(e,r,n,i)=>t(void 0,void 0,void 0,(function*(){const t=yield P.createFromRGBABuffer(r,n,e),o=yield G(t,i);return t.destroy(),o}));return e.ZBarImage=P,e.ZBarScanner=D,e.ZBarSymbol=O,e.getDefaultScanner=F,e.getInstance=b,e.scanGrayBuffer=(e,r,n,i)=>t(void 0,void 0,void 0,(function*(){const t=yield P.createFromGrayBuffer(r,n,e),o=yield G(t,i);return t.destroy(),o})),e.scanImageData=(e,r)=>t(void 0,void 0,void 0,(function*(){return yield H(e.data.buffer,e.width,e.height,r)})),e.scanRGBABuffer=H,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),e}({});