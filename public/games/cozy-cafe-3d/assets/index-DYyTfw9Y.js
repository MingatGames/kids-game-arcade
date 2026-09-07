(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ir="160",gc=0,$r=1,_c=2,bo=1,Ao=2,hn=3,Cn=0,Ue=1,ke=2,En=0,mi=1,Zr=2,jr=3,Kr=4,vc=5,Bn=100,xc=101,Mc=102,Jr=103,Qr=104,yc=200,Sc=201,wc=202,Ec=203,yr=204,Sr=205,Tc=206,bc=207,Ac=208,Cc=209,Rc=210,Pc=211,Lc=212,Ic=213,Dc=214,Uc=0,Nc=1,Fc=2,ys=3,Oc=4,Bc=5,Gc=6,zc=7,Co=0,kc=1,Hc=2,Tn=0,Vc=1,Wc=2,Xc=3,Ro=4,qc=5,Yc=6,Po=300,_i=301,vi=302,wr=303,Er=304,Cs=306,zn=1e3,Ze=1001,Tr=1002,Ie=1003,ta=1004,Os=1005,De=1006,$c=1007,ki=1008,bn=1009,Zc=1010,jc=1011,Dr=1012,Lo=1013,Sn=1014,wn=1015,Hi=1016,Io=1017,Do=1018,kn=1020,Kc=1021,je=1023,Jc=1024,Qc=1025,Hn=1026,xi=1027,tl=1028,Uo=1029,el=1030,No=1031,Fo=1033,Bs=33776,Gs=33777,zs=33778,ks=33779,ea=35840,na=35841,ia=35842,sa=35843,Oo=36196,ra=37492,aa=37496,oa=37808,ca=37809,la=37810,ha=37811,ua=37812,da=37813,fa=37814,pa=37815,ma=37816,ga=37817,_a=37818,va=37819,xa=37820,Ma=37821,Hs=36492,ya=36494,Sa=36495,nl=36283,wa=36284,Ea=36285,Ta=36286,Bo=3e3,Vn=3001,il=3200,sl=3201,Go=0,rl=1,Xe="",ye="srgb",pn="srgb-linear",Ur="display-p3",Rs="display-p3-linear",Ss="linear",ie="srgb",ws="rec709",Es="p3",Yn=7680,ba=519,al=512,ol=513,cl=514,zo=515,ll=516,hl=517,ul=518,dl=519,br=35044,Aa="300 es",Ar=1035,fn=2e3,Ts=2001;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vs=Math.PI/180,Cr=180/Math.PI;function An(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function fl(s,t){return(s%t+t)%t}function Ws(s,t,e){return(1-e)*s+e*t}function Ca(s){return(s&s-1)===0&&s!==0}function Rr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,i,r,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],E=i[1],M=i[4],w=i[7],I=i[2],A=i[5],C=i[8];return r[0]=o*g+a*E+c*I,r[3]=o*m+a*M+c*A,r[6]=o*d+a*w+c*C,r[1]=l*g+h*E+u*I,r[4]=l*m+h*M+u*A,r[7]=l*d+h*w+u*C,r[2]=f*g+p*E+_*I,r[5]=f*m+p*M+_*A,r[8]=f*d+p*w+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,_=e*u+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(h*e-i*c)*g,t[5]=(i*r-a*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xs.makeScale(t,e)),this}rotate(t){return this.premultiply(Xs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xs=new Xt;function ko(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function bs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pl(){const s=bs("canvas");return s.style.display="block",s}const Ra={};function Oi(s){s in Ra||(Ra[s]=!0,console.warn(s))}const Pa=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),La=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yi={[pn]:{transfer:Ss,primaries:ws,toReference:s=>s,fromReference:s=>s},[ye]:{transfer:ie,primaries:ws,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Rs]:{transfer:Ss,primaries:Es,toReference:s=>s.applyMatrix3(La),fromReference:s=>s.applyMatrix3(Pa)},[Ur]:{transfer:ie,primaries:Es,toReference:s=>s.convertSRGBToLinear().applyMatrix3(La),fromReference:s=>s.applyMatrix3(Pa).convertLinearToSRGB()}},ml=new Set([pn,Rs]),Jt={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ml.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Yi[t].toReference,i=Yi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Yi[s].primaries},getTransfer:function(s){return s===Xe?Ss:Yi[s].transfer}};function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $n;class Ho{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=bs("canvas")),$n.width=t.width,$n.height=t.height;const n=$n.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gl=0;class Vo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=An(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ys(i[o].image)):r.push(Ys(i[o]))}else r=Ys(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ys(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ho.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _l=0;class Ne extends yi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Ze,i=Ze,r=De,o=ki,a=je,c=bn,l=Ne.DEFAULT_ANISOTROPY,h=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_l++}),this.uuid=An(),this.name="",this.source=new Vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vn?ye:Xe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zn:t.x=t.x-Math.floor(t.x);break;case Ze:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zn:t.y=t.y-Math.floor(t.y);break;case Ze:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?Vn:Bo}set encoding(t){Oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Vn?ye:Xe}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Po;Ne.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],_=c[9],g=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,w=(p+1)/2,I=(d+1)/2,A=(h+f)/4,C=(u+g)/4,W=(_+m)/4;return M>w&&M>I?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=C/n):w>I?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=A/i,r=W/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=C/r,i=W/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(u-g)/E,this.z=(f-h)/E,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vl extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Oi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?ye:Xe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends vl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wo extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==f||l!==p||h!==_){let m=1-a;const d=c*f+l*p+h*_+u*g,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const I=Math.sqrt(M),A=Math.atan2(I,d*E);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}const w=a*E;if(c=c*m+f*w,l=l*m+p*w,h=h*m+_*w,u=u*m+g*w,m===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*p-l*f,t[e+1]=c*_+h*f+l*u-a*p,t[e+2]=l*_+h*p+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),p=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u+f*p*_;break;case"YZX":this._x=f*h*u+l*p*_,this._y=l*p*u+f*h*_,this._z=l*h*_-f*p*u,this._w=l*h*u-f*p*_;break;case"XZY":this._x=f*h*u-l*p*_,this._y=l*p*u-f*h*_,this._z=l*h*_+f*p*u,this._w=l*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $s.copy(this).projectOnVector(t),this.sub($s)}reflect(t){return this.sub($s.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new b,Ia=new Vi;class Wi{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(r,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$i.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(t.matrixWorld),this.union($i)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),Zi.subVectors(this.max,Ti),Zn.subVectors(t.a,Ti),jn.subVectors(t.b,Ti),Kn.subVectors(t.c,Ti),gn.subVectors(jn,Zn),_n.subVectors(Kn,jn),In.subVectors(Zn,Kn);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-In.z,In.y,gn.z,0,-gn.x,_n.z,0,-_n.x,In.z,0,-In.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-In.y,In.x,0];return!Zs(e,Zn,jn,Kn,Zi)||(e=[1,0,0,0,1,0,0,0,1],!Zs(e,Zn,jn,Kn,Zi))?!1:(ji.crossVectors(gn,_n),e=[ji.x,ji.y,ji.z],Zs(e,Zn,jn,Kn,Zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const rn=[new b,new b,new b,new b,new b,new b,new b,new b],qe=new b,$i=new Wi,Zn=new b,jn=new b,Kn=new b,gn=new b,_n=new b,In=new b,Ti=new b,Zi=new b,ji=new b,Dn=new b;function Zs(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Dn.fromArray(s,r);const a=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),c=t.dot(Dn),l=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ml=new Wi,bi=new b,js=new b;class Nr{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ml.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bi.subVectors(t,this.center);const e=bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bi.copy(t.center).add(js)),this.expandByPoint(bi.copy(t.center).sub(js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new b,Ks=new b,Ki=new b,vn=new b,Js=new b,Ji=new b,Qs=new b;class yl{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.origin).addScaledVector(this.direction,e),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ks.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(Ks);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ki),a=vn.dot(this.direction),c=-vn.dot(Ki),l=vn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ks).addScaledVector(Ki,f),p}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,i,r){Js.subVectors(e,t),Ji.subVectors(n,t),Qs.crossVectors(Js,Ji);let o=this.direction.dot(Qs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vn.subVectors(this.origin,t);const c=a*this.direction.dot(Ji.crossVectors(vn,Ji));if(c<0)return null;const l=a*this.direction.dot(Js.cross(vn));if(l<0||c+l>o)return null;const h=-a*vn.dot(Qs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,i,r,o,a,c,l,h,u,f,p,_,g,m){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,p,_,g,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,p,_,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),o=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+_*l,e[5]=f-g*l,e[9]=-a*c,e[2]=g-f*l,e[6]=_+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,_=l*h,g=l*u;e[0]=f+g*a,e[4]=_*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=g+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,_=l*h,g=l*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*u,_=a*h,g=a*u;e[0]=c*h,e[4]=_*l-p,e[8]=f*l+g,e[1]=c*u,e[5]=g*l+f,e[9]=p*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=g-f*u,e[8]=_*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*c,p=o*l,_=a*c,g=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+g,e[5]=o*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sl,t,wl)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),xn.crossVectors(n,Be),xn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),xn.crossVectors(n,Be)),xn.normalize(),Qi.crossVectors(Be,xn),i[0]=xn.x,i[4]=Qi.x,i[8]=Be.x,i[1]=xn.y,i[5]=Qi.y,i[9]=Be.y,i[2]=xn.z,i[6]=Qi.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],E=n[3],M=n[7],w=n[11],I=n[15],A=i[0],C=i[4],W=i[8],x=i[12],T=i[1],U=i[5],k=i[9],Y=i[13],P=i[2],N=i[6],H=i[10],$=i[14],q=i[3],Z=i[7],j=i[11],nt=i[15];return r[0]=o*A+a*T+c*P+l*q,r[4]=o*C+a*U+c*N+l*Z,r[8]=o*W+a*k+c*H+l*j,r[12]=o*x+a*Y+c*$+l*nt,r[1]=h*A+u*T+f*P+p*q,r[5]=h*C+u*U+f*N+p*Z,r[9]=h*W+u*k+f*H+p*j,r[13]=h*x+u*Y+f*$+p*nt,r[2]=_*A+g*T+m*P+d*q,r[6]=_*C+g*U+m*N+d*Z,r[10]=_*W+g*k+m*H+d*j,r[14]=_*x+g*Y+m*$+d*nt,r[3]=E*A+M*T+w*P+I*q,r[7]=E*C+M*U+w*N+I*Z,r[11]=E*W+M*k+w*H+I*j,r[15]=E*x+M*Y+w*$+I*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*p-n*c*p)+g*(+e*c*p-e*l*f+r*o*f-i*o*p+i*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],E=u*m*l-g*f*l+g*c*p-a*m*p-u*c*d+a*f*d,M=_*f*l-h*m*l-_*c*p+o*m*p+h*c*d-o*f*d,w=h*g*l-_*u*l+_*a*p-o*g*p-h*a*d+o*u*d,I=_*u*c-h*g*c-_*a*f+o*g*f+h*a*m-o*u*m,A=e*E+n*M+i*w+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=E*C,t[1]=(g*f*r-u*m*r-g*i*p+n*m*p+u*i*d-n*f*d)*C,t[2]=(a*m*r-g*c*r+g*i*l-n*m*l-a*i*d+n*c*d)*C,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*p-n*c*p)*C,t[4]=M*C,t[5]=(h*m*r-_*f*r+_*i*p-e*m*p-h*i*d+e*f*d)*C,t[6]=(_*c*r-o*m*r-_*i*l+e*m*l+o*i*d-e*c*d)*C,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*p+e*c*p)*C,t[8]=w*C,t[9]=(_*u*r-h*g*r-_*n*p+e*g*p+h*n*d-e*u*d)*C,t[10]=(o*g*r-_*a*r+_*n*l-e*g*l-o*n*d+e*a*d)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*C,t[12]=I*C,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*C,t[14]=(_*a*i-o*g*i-_*n*c+e*g*c+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,_=r*u,g=o*h,m=o*u,d=a*u,E=c*l,M=c*h,w=c*u,I=n.x,A=n.y,C=n.z;return i[0]=(1-(g+d))*I,i[1]=(p+w)*I,i[2]=(_-M)*I,i[3]=0,i[4]=(p-w)*A,i[5]=(1-(f+d))*A,i[6]=(m+E)*A,i[7]=0,i[8]=(_+M)*C,i[9]=(m-E)*C,i[10]=(1-(f+g))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Jn.set(i[0],i[1],i[2]).length();const o=Jn.set(i[4],i[5],i[6]).length(),a=Jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ye.copy(this);const l=1/r,h=1/o,u=1/a;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=h,Ye.elements[5]*=h,Ye.elements[6]*=h,Ye.elements[8]*=u,Ye.elements[9]*=u,Ye.elements[10]*=u,e.setFromRotationMatrix(Ye),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=fn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,_;if(a===fn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ts)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=fn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,p=(n+i)*h;let _,g;if(a===fn)_=(o+r)*u,g=-2*u;else if(a===Ts)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new b,Ye=new de,Sl=new b(0,0,0),wl=new b(1,1,1),xn=new b,Qi=new b,Be=new b,Da=new de,Ua=new Vi;class Ps{constructor(t=0,e=0,n=0,i=Ps.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Da,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ps.DEFAULT_ORDER="XYZ";class Xo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let El=0;const Na=new b,Qn=new Vi,on=new de,ts=new b,Ai=new b,Tl=new b,bl=new Vi,Fa=new b(1,0,0),Oa=new b(0,1,0),Ba=new b(0,0,1),Al={type:"added"},Cl={type:"removed"};class Se extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new b,e=new Ps,n=new Vi,i=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Xt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Na.copy(t).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ai,ts,this.up):on.lookAt(ts,Ai,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix(on),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Al)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),on.multiply(t.parent.matrixWorld)),t.applyMatrix4(on),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,t,Tl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,bl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new b(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new b,cn=new b,tr=new b,ln=new b,ti=new b,ei=new b,Ga=new b,er=new b,nr=new b,ir=new b;let es=!1;class We{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),cn.subVectors(n,e),tr.subVectors(t,e);const o=$e.dot($e),a=$e.dot(cn),c=$e.dot(tr),l=cn.dot(cn),h=cn.dot(tr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(t,e,n,i,r,o,a,c){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),this.getInterpolation(t,e,n,i,r,o,a,c)}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ln.x),c.addScaledVector(o,ln.y),c.addScaledVector(a,ln.z),c)}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),cn.subVectors(t,e),$e.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),$e.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return es===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),es=!0),We.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return We.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ti.subVectors(i,n),ei.subVectors(r,n),er.subVectors(t,n);const c=ti.dot(er),l=ei.dot(er);if(c<=0&&l<=0)return e.copy(n);nr.subVectors(t,i);const h=ti.dot(nr),u=ei.dot(nr);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ti,o);ir.subVectors(t,r);const p=ti.dot(ir),_=ei.dot(ir);if(_>=0&&p<=_)return e.copy(r);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(ei,a);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Ga.subVectors(r,i),a=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector(Ga,a);const d=1/(m+g+f);return o=g*d,a=f*d,e.copy(n).addScaledVector(ti,o).addScaledVector(ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function sr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=fl(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sr(o,r,t+1/3),this.g=sr(o,r,t),this.b=sr(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=qo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Jt.fromWorkingColorSpace(Te.copy(this),t),Math.round(be(Te.r*255,0,255))*65536+Math.round(be(Te.g*255,0,255))*256+Math.round(be(Te.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,r=Te.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=ye){Jt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(ns);const n=Ws(Mn.h,ns.h,e),i=Ws(Mn.s,ns.s,e),r=Ws(Mn.l,ns.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new $t;$t.NAMES=qo;let Rl=0;class Si extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rl++}),this.uuid=An(),this.name="",this.type="Material",this.blending=mi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yr,this.blendDst=Sr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Me extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new b,is=new mt;class Ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=br,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==br&&(t.usage=this.usage),t}}class Yo extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $o extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pl=0;const Ve=new de,rr=new Se,ni=new b,Ge=new Wi,Ci=new Wi,xe=new b;class Fe extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ko(t)?$o:Yo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return rr.lookAt(t),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Ge.min,Ci.min),Ge.expandByPoint(xe),xe.addVectors(Ge.max,Ci.max),Ge.expandByPoint(xe)):(Ge.expandByPoint(Ci.min),Ge.expandByPoint(Ci.max))}Ge.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)xe.fromBufferAttribute(a,l),c&&(ni.fromBufferAttribute(t,l),xe.add(ni)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new b,h[T]=new b;const u=new b,f=new b,p=new b,_=new mt,g=new mt,m=new mt,d=new b,E=new b;function M(T,U,k){u.fromArray(i,T*3),f.fromArray(i,U*3),p.fromArray(i,k*3),_.fromArray(o,T*2),g.fromArray(o,U*2),m.fromArray(o,k*2),f.sub(u),p.sub(u),g.sub(_),m.sub(_);const Y=1/(g.x*m.y-m.x*g.y);isFinite(Y)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(Y),E.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(Y),l[T].add(d),l[U].add(d),l[k].add(d),h[T].add(E),h[U].add(E),h[k].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let T=0,U=w.length;T<U;++T){const k=w[T],Y=k.start,P=k.count;for(let N=Y,H=Y+P;N<H;N+=3)M(n[N+0],n[N+1],n[N+2])}const I=new b,A=new b,C=new b,W=new b;function x(T){C.fromArray(r,T*3),W.copy(C);const U=l[T];I.copy(U),I.sub(C.multiplyScalar(C.dot(U))).normalize(),A.crossVectors(W,U);const Y=A.dot(h[T])<0?-1:1;c[T*4]=I.x,c[T*4+1]=I.y,c[T*4+2]=I.z,c[T*4+3]=Y}for(let T=0,U=w.length;T<U;++T){const k=w[T],Y=k.start,P=k.count;for(let N=Y,H=Y+P;N<H;N+=3)x(n[N+0]),x(n[N+1]),x(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new b,r=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let d=0;d<h;d++)f[_++]=l[p++]}return new Ke(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new de,Un=new yl,ss=new Nr,ka=new b,ii=new b,si=new b,ri=new b,ar=new b,rs=new b,as=new mt,os=new mt,cs=new mt,Ha=new b,Va=new b,Wa=new b,ls=new b,hs=new b;class R extends Se{constructor(t=new Fe,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){rs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ar.fromBufferAttribute(u,t),o?rs.addScaledVector(ar,h):rs.addScaledVector(ar.sub(e),h))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),Un.copy(t.ray).recast(t.near),!(ss.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ss,ka)===null||Un.origin.distanceToSquared(ka)>(t.far-t.near)**2))&&(za.copy(r).invert(),Un.copy(t.ray).applyMatrix4(za),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,I=M;w<I;w+=3){const A=a.getX(w),C=a.getX(w+1),W=a.getX(w+2);i=us(this,d,t,n,l,h,u,A,C,W),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const E=a.getX(m),M=a.getX(m+1),w=a.getX(m+2);i=us(this,o,t,n,l,h,u,E,M,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,I=M;w<I;w+=3){const A=w,C=w+1,W=w+2;i=us(this,d,t,n,l,h,u,A,C,W),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const E=m,M=m+1,w=m+2;i=us(this,o,t,n,l,h,u,E,M,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ll(s,t,e,n,i,r,o,a){let c;if(t.side===Ue?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Cn,a),c===null)return null;hs.copy(a),hs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(hs);return l<e.near||l>e.far?null:{distance:l,point:hs.clone(),object:s}}function us(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ii),s.getVertexPosition(c,si),s.getVertexPosition(l,ri);const h=Ll(s,t,e,n,ii,si,ri,ls);if(h){i&&(as.fromBufferAttribute(i,a),os.fromBufferAttribute(i,c),cs.fromBufferAttribute(i,l),h.uv=We.getInterpolation(ls,ii,si,ri,as,os,cs,new mt)),r&&(as.fromBufferAttribute(r,a),os.fromBufferAttribute(r,c),cs.fromBufferAttribute(r,l),h.uv1=We.getInterpolation(ls,ii,si,ri,as,os,cs,new mt),h.uv2=h.uv1),o&&(Ha.fromBufferAttribute(o,a),Va.fromBufferAttribute(o,c),Wa.fromBufferAttribute(o,l),h.normal=We.getInterpolation(ls,ii,si,ri,Ha,Va,Wa,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new b,materialIndex:0};We.getNormal(ii,si,ri,u.normal),h.face=u}return h}class Ct extends Fe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function _(g,m,d,E,M,w,I,A,C,W,x){const T=w/C,U=I/W,k=w/2,Y=I/2,P=A/2,N=C+1,H=W+1;let $=0,q=0;const Z=new b;for(let j=0;j<H;j++){const nt=j*U-Y;for(let it=0;it<N;it++){const V=it*T-k;Z[g]=V*E,Z[m]=nt*M,Z[d]=P,l.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[d]=A>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(it/C),u.push(1-j/W),$+=1}}for(let j=0;j<W;j++)for(let nt=0;nt<C;nt++){const it=f+nt+N*j,V=f+nt+N*(j+1),K=f+(nt+1)+N*(j+1),rt=f+(nt+1)+N*j;c.push(it,V,rt),c.push(V,K,rt),q+=6}a.addGroup(p,q,x),p+=q,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ct(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Le(s){const t={};for(let e=0;e<s.length;e++){const n=Mi(s[e]);for(const i in n)t[i]=n[i]}return t}function Il(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zo(s){return s.getRenderTarget()===null?s.outputColorSpace:Jt.workingColorSpace}const Dl={clone:Mi,merge:Le};var Ul=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ul,this.fragmentShader=Nl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=Il(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jo extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ze extends jo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ai=-90,oi=1;class Fl extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(ai,oi,t,e);i.layers=this.layers,this.add(i);const r=new ze(ai,oi,t,e);r.layers=this.layers,this.add(r);const o=new ze(ai,oi,t,e);o.layers=this.layers,this.add(o);const a=new ze(ai,oi,t,e);a.layers=this.layers,this.add(a);const c=new ze(ai,oi,t,e);c.layers=this.layers,this.add(c);const l=new ze(ai,oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ko extends Ne{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ol extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Oi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Vn?ye:Xe),this.texture=new Ko(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ct(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:En});r.uniforms.tEquirect.value=e;const o=new R(i,r),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=De),new Fl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const or=new b,Bl=new b,Gl=new Xt;class Fn{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=or.subVectors(n,e).cross(Bl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(or),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gl.getNormalMatrix(t),i=this.coplanarPoint(or).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Nr,ds=new b;class Fr{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],_=i[9],g=i[10],m=i[11],d=i[12],E=i[13],M=i[14],w=i[15];if(n[0].setComponents(c-r,f-l,m-p,w-d).normalize(),n[1].setComponents(c+r,f+l,m+p,w+d).normalize(),n[2].setComponents(c+o,f+h,m+_,w+E).normalize(),n[3].setComponents(c-o,f-h,m-_,w-E).normalize(),n[4].setComponents(c-a,f-u,m-g,w-M).normalize(),e===fn)n[5].setComponents(c+a,f+u,m+g,w+M).normalize();else if(e===Ts)n[5].setComponents(a,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ds.x=i.normal.x>0?t.max.x:t.min.x,ds.y=i.normal.y>0?t.max.y:t.min.y,ds.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ds)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jo(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function zl(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,p=u.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){const f=h.array,p=h._updateRange,_=h.updateRanges;if(s.bindBuffer(u,l),p.count===-1&&_.length===0&&s.bufferSubData(u,0,f),_.length!==0){for(let g=0,m=_.length;g<m;g++){const d=_[g];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class tn extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],_=[],g=[],m=[];for(let d=0;d<h;d++){const E=d*f-o;for(let M=0;M<l;M++){const w=M*u-r;_.push(w,-E,0),g.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){const M=E+l*d,w=E+l*(d+1),I=E+1+l*(d+1),A=E+1+l*d;p.push(M,w,A),p.push(w,I,A)}this.setIndex(p),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(g,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.width,t.height,t.widthSegments,t.heightSegments)}}var kl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ql=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$l=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zl=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Kl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ql=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,th=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,uh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_h="gl_FragColor = linearToOutputTexel( gl_FragColor );",vh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ah=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ih=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Oh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$h=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ru=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,du=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_u=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Su=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Eu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Au=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ru=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Du=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ku=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$u=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ku=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ju=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,td=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,id=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,od=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ld=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ud=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:kl,alphahash_pars_fragment:Hl,alphamap_fragment:Vl,alphamap_pars_fragment:Wl,alphatest_fragment:Xl,alphatest_pars_fragment:ql,aomap_fragment:Yl,aomap_pars_fragment:$l,batching_pars_vertex:Zl,batching_vertex:jl,begin_vertex:Kl,beginnormal_vertex:Jl,bsdfs:Ql,iridescence_fragment:th,bumpmap_pars_fragment:eh,clipping_planes_fragment:nh,clipping_planes_pars_fragment:ih,clipping_planes_pars_vertex:sh,clipping_planes_vertex:rh,color_fragment:ah,color_pars_fragment:oh,color_pars_vertex:ch,color_vertex:lh,common:hh,cube_uv_reflection_fragment:uh,defaultnormal_vertex:dh,displacementmap_pars_vertex:fh,displacementmap_vertex:ph,emissivemap_fragment:mh,emissivemap_pars_fragment:gh,colorspace_fragment:_h,colorspace_pars_fragment:vh,envmap_fragment:xh,envmap_common_pars_fragment:Mh,envmap_pars_fragment:yh,envmap_pars_vertex:Sh,envmap_physical_pars_fragment:Uh,envmap_vertex:wh,fog_vertex:Eh,fog_pars_vertex:Th,fog_fragment:bh,fog_pars_fragment:Ah,gradientmap_pars_fragment:Ch,lightmap_fragment:Rh,lightmap_pars_fragment:Ph,lights_lambert_fragment:Lh,lights_lambert_pars_fragment:Ih,lights_pars_begin:Dh,lights_toon_fragment:Nh,lights_toon_pars_fragment:Fh,lights_phong_fragment:Oh,lights_phong_pars_fragment:Bh,lights_physical_fragment:Gh,lights_physical_pars_fragment:zh,lights_fragment_begin:kh,lights_fragment_maps:Hh,lights_fragment_end:Vh,logdepthbuf_fragment:Wh,logdepthbuf_pars_fragment:Xh,logdepthbuf_pars_vertex:qh,logdepthbuf_vertex:Yh,map_fragment:$h,map_pars_fragment:Zh,map_particle_fragment:jh,map_particle_pars_fragment:Kh,metalnessmap_fragment:Jh,metalnessmap_pars_fragment:Qh,morphcolor_vertex:tu,morphnormal_vertex:eu,morphtarget_pars_vertex:nu,morphtarget_vertex:iu,normal_fragment_begin:su,normal_fragment_maps:ru,normal_pars_fragment:au,normal_pars_vertex:ou,normal_vertex:cu,normalmap_pars_fragment:lu,clearcoat_normal_fragment_begin:hu,clearcoat_normal_fragment_maps:uu,clearcoat_pars_fragment:du,iridescence_pars_fragment:fu,opaque_fragment:pu,packing:mu,premultiplied_alpha_fragment:gu,project_vertex:_u,dithering_fragment:vu,dithering_pars_fragment:xu,roughnessmap_fragment:Mu,roughnessmap_pars_fragment:yu,shadowmap_pars_fragment:Su,shadowmap_pars_vertex:wu,shadowmap_vertex:Eu,shadowmask_pars_fragment:Tu,skinbase_vertex:bu,skinning_pars_vertex:Au,skinning_vertex:Cu,skinnormal_vertex:Ru,specularmap_fragment:Pu,specularmap_pars_fragment:Lu,tonemapping_fragment:Iu,tonemapping_pars_fragment:Du,transmission_fragment:Uu,transmission_pars_fragment:Nu,uv_pars_fragment:Fu,uv_pars_vertex:Ou,uv_vertex:Bu,worldpos_vertex:Gu,background_vert:zu,background_frag:ku,backgroundCube_vert:Hu,backgroundCube_frag:Vu,cube_vert:Wu,cube_frag:Xu,depth_vert:qu,depth_frag:Yu,distanceRGBA_vert:$u,distanceRGBA_frag:Zu,equirect_vert:ju,equirect_frag:Ku,linedashed_vert:Ju,linedashed_frag:Qu,meshbasic_vert:td,meshbasic_frag:ed,meshlambert_vert:nd,meshlambert_frag:id,meshmatcap_vert:sd,meshmatcap_frag:rd,meshnormal_vert:ad,meshnormal_frag:od,meshphong_vert:cd,meshphong_frag:ld,meshphysical_vert:hd,meshphysical_frag:ud,meshtoon_vert:dd,meshtoon_frag:fd,points_vert:pd,points_frag:md,shadow_vert:gd,shadow_frag:_d,sprite_vert:vd,sprite_frag:xd},ot={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},en={basic:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new $t(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Le([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Le([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new $t(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Le([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Le([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Le([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Le([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Le([ot.common,ot.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Le([ot.lights,ot.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};en.physical={uniforms:Le([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const fs={r:0,b:0,g:0};function Md(s,t,e,n,i,r,o){const a=new $t(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function _(m,d){let E=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?e:t).get(M)),M===null?g(a,c):M&&M.isColor&&(g(M,1),E=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Cs)?(h===void 0&&(h=new R(new Ct(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Mi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(M.colorSpace)!==ie,(u!==M||f!==M.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new R(new tn(2,2),new qn({name:"BackgroundMaterial",uniforms:Mi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(M.colorSpace)!==ie,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){m.getRGB(fs,Zo(s)),n.buffers.color.setClear(fs.r,fs.g,fs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function yd(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(P,N,H,$,q){let Z=!1;if(o){const j=g($,H,N);l!==j&&(l=j,p(l.object)),Z=d(P,$,H,q),Z&&E(P,$,H,q)}else{const j=N.wireframe===!0;(l.geometry!==$.id||l.program!==H.id||l.wireframe!==j)&&(l.geometry=$.id,l.program=H.id,l.wireframe=j,Z=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,W(P,N,H,$),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,N,H){const $=H.wireframe===!0;let q=a[P.id];q===void 0&&(q={},a[P.id]=q);let Z=q[N.id];Z===void 0&&(Z={},q[N.id]=Z);let j=Z[$];return j===void 0&&(j=m(f()),Z[$]=j),j}function m(P){const N=[],H=[],$=[];for(let q=0;q<i;q++)N[q]=0,H[q]=0,$[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:$,object:P,attributes:{},index:null}}function d(P,N,H,$){const q=l.attributes,Z=N.attributes;let j=0;const nt=H.getAttributes();for(const it in nt)if(nt[it].location>=0){const K=q[it];let rt=Z[it];if(rt===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor)),K===void 0||K.attribute!==rt||rt&&K.data!==rt.data)return!0;j++}return l.attributesNum!==j||l.index!==$}function E(P,N,H,$){const q={},Z=N.attributes;let j=0;const nt=H.getAttributes();for(const it in nt)if(nt[it].location>=0){let K=Z[it];K===void 0&&(it==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),it==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const rt={};rt.attribute=K,K&&K.data&&(rt.data=K.data),q[it]=rt,j++}l.attributes=q,l.attributesNum=j,l.index=$}function M(){const P=l.newAttributes;for(let N=0,H=P.length;N<H;N++)P[N]=0}function w(P){I(P,0)}function I(P,N){const H=l.newAttributes,$=l.enabledAttributes,q=l.attributeDivisors;H[P]=1,$[P]===0&&(s.enableVertexAttribArray(P),$[P]=1),q[P]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),q[P]=N)}function A(){const P=l.newAttributes,N=l.enabledAttributes;for(let H=0,$=N.length;H<$;H++)N[H]!==P[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function C(P,N,H,$,q,Z,j){j===!0?s.vertexAttribIPointer(P,N,H,q,Z):s.vertexAttribPointer(P,N,H,$,q,Z)}function W(P,N,H,$){if(n.isWebGL2===!1&&(P.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const q=$.attributes,Z=H.getAttributes(),j=N.defaultAttributeValues;for(const nt in Z){const it=Z[nt];if(it.location>=0){let V=q[nt];if(V===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const K=V.normalized,rt=V.itemSize,pt=e.get(V);if(pt===void 0)continue;const gt=pt.buffer,Ut=pt.type,Ft=pt.bytesPerElement,bt=n.isWebGL2===!0&&(Ut===s.INT||Ut===s.UNSIGNED_INT||V.gpuType===Lo);if(V.isInterleavedBufferAttribute){const Zt=V.data,F=Zt.stride,Ae=V.offset;if(Zt.isInstancedInterleavedBuffer){for(let St=0;St<it.locationSize;St++)I(it.location+St,Zt.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Zt.meshPerAttribute*Zt.count)}else for(let St=0;St<it.locationSize;St++)w(it.location+St);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let St=0;St<it.locationSize;St++)C(it.location+St,rt/it.locationSize,Ut,K,F*Ft,(Ae+rt/it.locationSize*St)*Ft,bt)}else{if(V.isInstancedBufferAttribute){for(let Zt=0;Zt<it.locationSize;Zt++)I(it.location+Zt,V.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Zt=0;Zt<it.locationSize;Zt++)w(it.location+Zt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Zt=0;Zt<it.locationSize;Zt++)C(it.location+Zt,rt/it.locationSize,Ut,K,rt*Ft,rt/it.locationSize*Zt*Ft,bt)}}else if(j!==void 0){const K=j[nt];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(it.location,K);break;case 3:s.vertexAttrib3fv(it.location,K);break;case 4:s.vertexAttrib4fv(it.location,K);break;default:s.vertexAttrib1fv(it.location,K)}}}}A()}function x(){k();for(const P in a){const N=a[P];for(const H in N){const $=N[H];for(const q in $)_($[q].object),delete $[q];delete N[H]}delete a[P]}}function T(P){if(a[P.id]===void 0)return;const N=a[P.id];for(const H in N){const $=N[H];for(const q in $)_($[q].object),delete $[q];delete N[H]}delete a[P.id]}function U(P){for(const N in a){const H=a[N];if(H[P.id]===void 0)continue;const $=H[P.id];for(const q in $)_($[q].object),delete $[q];delete H[P.id]}}function k(){Y(),h=!0,l!==c&&(l=c,p(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:k,resetDefaultState:Y,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:w,disableUnusedAttributes:A}}function Sd(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,_;if(i)p=s,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(h[_],u[_]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function wd(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,w=o||t.has("OES_texture_float"),I=M&&w,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:I,maxSamples:A}}function Ed(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Fn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,M=E*4;let w=d.clippingState||null;c.value=w,w=h(_,f,M,p);for(let I=0;I!==M;++I)w[I]=e[I];d.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const d=p+g*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,w=p;M!==g;++M,w+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Td(s){let t=new WeakMap;function e(o,a){return a===wr?o.mapping=_i:a===Er&&(o.mapping=vi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wr||a===Er)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ol(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Qo extends jo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fi=4,Xa=[.125,.215,.35,.446,.526,.582],Gn=20,cr=new Qo,qa=new $t;let lr=null,hr=0,ur=0;const On=(1+Math.sqrt(5))/2,ci=1/On,Ya=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,On,ci),new b(0,On,-ci),new b(ci,0,On),new b(-ci,0,On),new b(On,ci,0),new b(-On,ci,0)];class $a{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lr,hr,ur),t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),ur=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:Hi,format:je,colorSpace:pn,depthBuffer:!1},i=Za(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Za(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bd(r)),this._blurMaterial=Ad(r,t,e)}return i}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,cr)}_sceneToCubeUV(t,e,n,i){const a=new ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(qa),h.toneMapping=Tn,h.autoClear=!1;const p=new Me({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),_=new R(new Ct,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(qa),g=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):E===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const M=this._cubeSize;ps(i,E*M,d>2?M:0,M,M),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_i||t.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new R(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ps(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ya[(i-1)%Ya.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new R(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gn-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const d=[];let E=0;for(let C=0;C<Gn;++C){const W=C/g,x=Math.exp(-W*W/2);d.push(x),C===0?E+=x:C<m&&(E+=2*x)}for(let C=0;C<d.length;C++)d[C]=d[C]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const w=this._sizeLods[i],I=3*w*(i>M-fi?i-M+fi:0),A=4*(this._cubeSize-w);ps(e,I,A,3*w,2*w),c.setRenderTarget(e),c.render(u,cr)}}function bd(s){const t=[],e=[],n=[];let i=s;const r=s-fi+1+Xa.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-fi?c=Xa[o-s+fi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,d=1,E=new Float32Array(g*_*p),M=new Float32Array(m*_*p),w=new Float32Array(d*_*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,W=A>2?0:-1,x=[C,W,0,C+2/3,W,0,C+2/3,W+1,0,C,W,0,C+2/3,W+1,0,C,W+1,0];E.set(x,g*_*A),M.set(f,m*_*A);const T=[A,A,A,A,A,A];w.set(T,d*_*A)}const I=new Fe;I.setAttribute("position",new Ke(E,g)),I.setAttribute("uv",new Ke(M,m)),I.setAttribute("faceIndex",new Ke(w,d)),t.push(I),i>fi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Za(s,t,e){const n=new Xn(s,t,e);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ad(s,t,e){const n=new Float32Array(Gn),i=new b(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ja(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ka(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Or(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cd(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===wr||c===Er,h=c===_i||c===vi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new $a(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new $a(s));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pd(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,d=g.length;m<d;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)t.update(f[_],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)t.update(g[m],s.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const E=p.array;g=p.version;for(let M=0,w=E.length;M<w;M+=3){const I=E[M+0],A=E[M+1],C=E[M+2];f.push(I,A,A,C,C,I)}}else if(_!==void 0){const E=_.array;g=_.version;for(let M=0,w=E.length/3-1;M<w;M+=3){const I=M+0,A=M+1,C=M+2;f.push(I,A,A,C,C,I)}}else return;const m=new(ko(f)?$o:Yo)(f,1);m.version=g;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ld(s,t,e,n){const i=n.isWebGL2;let r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,_){s.drawElements(r,_,a,p*c),e.update(_,r,1)}function u(p,_,g){if(g===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,_,a,p*c,g),e.update(_,r,g)}function f(p,_,g){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<g;d++)this.render(p[d]/c,_[d]);else{m.multiDrawElementsWEBGL(r,_,0,a,p,0,g);let d=0;for(let E=0;E<g;E++)d+=_[E];e.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Id(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Dd(s,t){return s[0]-t[0]}function Ud(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Nd(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new re,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==g){let N=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var p=N;m!==void 0&&m.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let x=0;M===!0&&(x=1),w===!0&&(x=2),I===!0&&(x=3);let T=h.attributes.position.count*x,U=1;T>t.maxTextureSize&&(U=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const k=new Float32Array(T*U*4*g),Y=new Wo(k,T,U,g);Y.type=wn,Y.needsUpdate=!0;const P=x*4;for(let H=0;H<g;H++){const $=A[H],q=C[H],Z=W[H],j=T*U*4*H;for(let nt=0;nt<$.count;nt++){const it=nt*P;M===!0&&(o.fromBufferAttribute($,nt),k[j+it+0]=o.x,k[j+it+1]=o.y,k[j+it+2]=o.z,k[j+it+3]=0),w===!0&&(o.fromBufferAttribute(q,nt),k[j+it+4]=o.x,k[j+it+5]=o.y,k[j+it+6]=o.z,k[j+it+7]=0),I===!0&&(o.fromBufferAttribute(Z,nt),k[j+it+8]=o.x,k[j+it+9]=o.y,k[j+it+10]=o.z,k[j+it+11]=Z.itemSize===4?o.w:1)}}m={count:g,texture:Y,size:new mt(T,U)},r.set(h,m),h.addEventListener("dispose",N)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",E),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let w=0;w<_;w++)g[w]=[w,0];n[h.id]=g}for(let w=0;w<_;w++){const I=g[w];I[0]=w,I[1]=f[w]}g.sort(Ud);for(let w=0;w<8;w++)w<_&&g[w][1]?(a[w][0]=g[w][0],a[w][1]=g[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(Dd);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let E=0;for(let w=0;w<8;w++){const I=a[w],A=I[0],C=I[1];A!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+w)!==m[A]&&h.setAttribute("morphTarget"+w,m[A]),d&&h.getAttribute("morphNormal"+w)!==d[A]&&h.setAttribute("morphNormal"+w,d[A]),i[w]=C,E+=C):(m&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),d&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const M=h.morphTargetsRelative?1:1-E;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Fd(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class tc extends Ne{constructor(t,e,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:Hn,h!==Hn&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hn&&(n=Sn),n===void 0&&h===xi&&(n=kn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ie,this.minFilter=c!==void 0?c:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ec=new Ne,nc=new tc(1,1);nc.compareFunction=zo;const ic=new Wo,sc=new xl,rc=new Ko,Ja=[],Qa=[],to=new Float32Array(16),eo=new Float32Array(9),no=new Float32Array(4);function wi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ja[i];if(r===void 0&&(r=new Float32Array(i),Ja[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ls(s,t){let e=Qa[t];e===void 0&&(e=new Int32Array(t),Qa[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Od(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Bd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function Gd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function zd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function kd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;no.set(n),s.uniformMatrix2fv(this.addr,!1,no),ge(e,n)}}function Hd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;eo.set(n),s.uniformMatrix3fv(this.addr,!1,eo),ge(e,n)}}function Vd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;to.set(n),s.uniformMatrix4fv(this.addr,!1,to),ge(e,n)}}function Wd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Xd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function qd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function Yd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function $d(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Zd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function jd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function Kd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function Jd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?nc:ec;e.setTexture2D(t||r,i)}function Qd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||sc,i)}function tf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||rc,i)}function ef(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ic,i)}function nf(s){switch(s){case 5126:return Od;case 35664:return Bd;case 35665:return Gd;case 35666:return zd;case 35674:return kd;case 35675:return Hd;case 35676:return Vd;case 5124:case 35670:return Wd;case 35667:case 35671:return Xd;case 35668:case 35672:return qd;case 35669:case 35673:return Yd;case 5125:return $d;case 36294:return Zd;case 36295:return jd;case 36296:return Kd;case 35678:case 36198:case 36298:case 36306:case 35682:return Jd;case 35679:case 36299:case 36307:return Qd;case 35680:case 36300:case 36308:case 36293:return tf;case 36289:case 36303:case 36311:case 36292:return ef}}function sf(s,t){s.uniform1fv(this.addr,t)}function rf(s,t){const e=wi(t,this.size,2);s.uniform2fv(this.addr,e)}function af(s,t){const e=wi(t,this.size,3);s.uniform3fv(this.addr,e)}function of(s,t){const e=wi(t,this.size,4);s.uniform4fv(this.addr,e)}function cf(s,t){const e=wi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function lf(s,t){const e=wi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hf(s,t){const e=wi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function uf(s,t){s.uniform1iv(this.addr,t)}function df(s,t){s.uniform2iv(this.addr,t)}function ff(s,t){s.uniform3iv(this.addr,t)}function pf(s,t){s.uniform4iv(this.addr,t)}function mf(s,t){s.uniform1uiv(this.addr,t)}function gf(s,t){s.uniform2uiv(this.addr,t)}function _f(s,t){s.uniform3uiv(this.addr,t)}function vf(s,t){s.uniform4uiv(this.addr,t)}function xf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ec,r[o])}function Mf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||sc,r[o])}function yf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||rc,r[o])}function Sf(s,t,e){const n=this.cache,i=t.length,r=Ls(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ic,r[o])}function wf(s){switch(s){case 5126:return sf;case 35664:return rf;case 35665:return af;case 35666:return of;case 35674:return cf;case 35675:return lf;case 35676:return hf;case 5124:case 35670:return uf;case 35667:case 35671:return df;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return _f;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return yf;case 36289:case 36303:case 36311:case 36292:return Sf}}class Ef{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nf(e.type)}}class Tf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wf(e.type)}}class bf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function io(s,t){s.seq.push(t),s.map[t.id]=t}function Af(s,t,e){const n=s.name,i=n.length;for(dr.lastIndex=0;;){const r=dr.exec(n),o=dr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){io(e,l===void 0?new Ef(a,s,t):new Tf(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new bf(a),io(e,u)),e=u}}}class xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Af(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function so(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Cf=37297;let Rf=0;function Pf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Lf(s){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s);let n;switch(t===e?n="":t===Es&&e===ws?n="LinearDisplayP3ToLinearSRGB":t===ws&&e===Es&&(n="LinearSRGBToLinearDisplayP3"),s){case pn:case Rs:return[n,"LinearTransferOETF"];case ye:case Ur:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ro(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Pf(s.getShaderSource(t),o)}else return i}function If(s,t){const e=Lf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Df(s,t){let e;switch(t){case Vc:e="Linear";break;case Wc:e="Reinhard";break;case Xc:e="OptimizedCineon";break;case Ro:e="ACESFilmic";break;case Yc:e="AgX";break;case qc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Uf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pi).join(`
`)}function Nf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pi).join(`
`)}function Ff(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Of(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function pi(s){return s!==""}function ao(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pr(s){return s.replace(Bf,zf)}const Gf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zf(s,t){let e=Bt[t];if(e===void 0){const n=Gf.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pr(e)}const kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function co(s){return s.replace(kf,Hf)}function Hf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lo(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ao?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case vi:t="ENVMAP_TYPE_CUBE";break;case Cs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vi:t="ENVMAP_MODE_REFRACTION";break}return t}function qf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Co:t="ENVMAP_BLENDING_MULTIPLY";break;case kc:t="ENVMAP_BLENDING_MIX";break;case Hc:t="ENVMAP_BLENDING_ADD";break}return t}function Yf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $f(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Vf(e),l=Wf(e),h=Xf(e),u=qf(e),f=Yf(e),p=e.isWebGL2?"":Uf(e),_=Nf(e),g=Ff(r),m=i.createProgram();let d,E,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pi).join(`
`),d.length>0&&(d+=`
`),E=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pi).join(`
`),E.length>0&&(E+=`
`)):(d=[lo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pi).join(`
`),E=[p,lo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Df("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,If("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pi).join(`
`)),o=Pr(o),o=ao(o,e),o=oo(o,e),a=Pr(a),a=ao(a,e),a=oo(a,e),o=co(o),a=co(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const w=M+d+o,I=M+E+a,A=so(i,i.VERTEX_SHADER,w),C=so(i,i.FRAGMENT_SHADER,I);i.attachShader(m,A),i.attachShader(m,C),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function W(k){if(s.debug.checkShaderErrors){const Y=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(C).trim();let H=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,C);else{const q=ro(i,A,"vertex"),Z=ro(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+q+`
`+Z)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(P===""||N==="")&&($=!1);$&&(k.diagnostics={runnable:H,programLog:Y,vertexShader:{log:P,prefix:d},fragmentShader:{log:N,prefix:E}})}i.deleteShader(A),i.deleteShader(C),x=new xs(i,m),T=Of(i,m)}let x;this.getUniforms=function(){return x===void 0&&W(this),x};let T;this.getAttributes=function(){return T===void 0&&W(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,Cf)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=C,this}let Zf=0;class jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Kf(t),e.set(t,n)),n}}class Kf{constructor(t){this.id=Zf++,this.code=t,this.usedTimes=0}}function Jf(s,t,e,n,i,r,o){const a=new Xo,c=new jf,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===0?"uv":`uv${x}`}function m(x,T,U,k,Y){const P=k.fog,N=Y.geometry,H=x.isMeshStandardMaterial?k.environment:null,$=(x.isMeshStandardMaterial?e:t).get(x.envMap||H),q=$&&$.mapping===Cs?$.image.height:null,Z=_[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,nt=j!==void 0?j.length:0;let it=0;N.morphAttributes.position!==void 0&&(it=1),N.morphAttributes.normal!==void 0&&(it=2),N.morphAttributes.color!==void 0&&(it=3);let V,K,rt,pt;if(Z){const Ce=en[Z];V=Ce.vertexShader,K=Ce.fragmentShader}else V=x.vertexShader,K=x.fragmentShader,c.update(x),rt=c.getVertexShaderID(x),pt=c.getFragmentShaderID(x);const gt=s.getRenderTarget(),Ut=Y.isInstancedMesh===!0,Ft=Y.isBatchedMesh===!0,bt=!!x.map,Zt=!!x.matcap,F=!!$,Ae=!!x.aoMap,St=!!x.lightMap,It=!!x.bumpMap,_t=!!x.normalMap,ae=!!x.displacementMap,zt=!!x.emissiveMap,S=!!x.metalnessMap,v=!!x.roughnessMap,B=x.anisotropy>0,tt=x.clearcoat>0,Q=x.iridescence>0,et=x.sheen>0,vt=x.transmission>0,ht=B&&!!x.anisotropyMap,dt=tt&&!!x.clearcoatMap,Tt=tt&&!!x.clearcoatNormalMap,kt=tt&&!!x.clearcoatRoughnessMap,J=Q&&!!x.iridescenceMap,Kt=Q&&!!x.iridescenceThicknessMap,qt=et&&!!x.sheenColorMap,Lt=et&&!!x.sheenRoughnessMap,yt=!!x.specularMap,ft=!!x.specularColorMap,Ot=!!x.specularIntensityMap,jt=vt&&!!x.transmissionMap,ce=vt&&!!x.thicknessMap,Vt=!!x.gradientMap,at=!!x.alphaMap,L=x.alphaTest>0,ct=!!x.alphaHash,lt=!!x.extensions,At=!!N.attributes.uv1,wt=!!N.attributes.uv2,te=!!N.attributes.uv3;let ee=Tn;return x.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ee=s.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:K,defines:x.defines,customVertexShaderID:rt,customFragmentShaderID:pt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ft,instancing:Ut,instancingColor:Ut&&Y.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:pn,map:bt,matcap:Zt,envMap:F,envMapMode:F&&$.mapping,envMapCubeUVHeight:q,aoMap:Ae,lightMap:St,bumpMap:It,normalMap:_t,displacementMap:f&&ae,emissiveMap:zt,normalMapObjectSpace:_t&&x.normalMapType===rl,normalMapTangentSpace:_t&&x.normalMapType===Go,metalnessMap:S,roughnessMap:v,anisotropy:B,anisotropyMap:ht,clearcoat:tt,clearcoatMap:dt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:kt,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:Kt,sheen:et,sheenColorMap:qt,sheenRoughnessMap:Lt,specularMap:yt,specularColorMap:ft,specularIntensityMap:Ot,transmission:vt,transmissionMap:jt,thicknessMap:ce,gradientMap:Vt,opaque:x.transparent===!1&&x.blending===mi,alphaMap:at,alphaTest:L,alphaHash:ct,combine:x.combine,mapUv:bt&&g(x.map.channel),aoMapUv:Ae&&g(x.aoMap.channel),lightMapUv:St&&g(x.lightMap.channel),bumpMapUv:It&&g(x.bumpMap.channel),normalMapUv:_t&&g(x.normalMap.channel),displacementMapUv:ae&&g(x.displacementMap.channel),emissiveMapUv:zt&&g(x.emissiveMap.channel),metalnessMapUv:S&&g(x.metalnessMap.channel),roughnessMapUv:v&&g(x.roughnessMap.channel),anisotropyMapUv:ht&&g(x.anisotropyMap.channel),clearcoatMapUv:dt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&g(x.sheenRoughnessMap.channel),specularMapUv:yt&&g(x.specularMap.channel),specularColorMapUv:ft&&g(x.specularColorMap.channel),specularIntensityMapUv:Ot&&g(x.specularIntensityMap.channel),transmissionMapUv:jt&&g(x.transmissionMap.channel),thicknessMapUv:ce&&g(x.thicknessMap.channel),alphaMapUv:at&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(_t||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:At,vertexUv2s:wt,vertexUv3s:te,pointsUvs:Y.isPoints===!0&&!!N.attributes.uv&&(bt||at),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:it,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:ee,useLegacyLights:s._useLegacyLights,decodeVideoTexture:bt&&x.map.isVideoTexture===!0&&Jt.getTransfer(x.map.colorSpace)===ie,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ke,flipSided:x.side===Ue,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:lt&&x.extensions.derivatives===!0,extensionFragDepth:lt&&x.extensions.fragDepth===!0,extensionDrawBuffers:lt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)T.push(U),T.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(E(T,x),M(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function E(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function w(x){const T=_[x.type];let U;if(T){const k=en[T];U=Dl.clone(k.uniforms)}else U=x.uniforms;return U}function I(x,T){let U;for(let k=0,Y=l.length;k<Y;k++){const P=l[k];if(P.cacheKey===T){U=P,++U.usedTimes;break}}return U===void 0&&(U=new $f(s,T,x,r),l.push(U)),U}function A(x){if(--x.usedTimes===0){const T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),x.destroy()}}function C(x){c.remove(x)}function W(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:l,dispose:W}}function Qf(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function tp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ho(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function uo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,p,_,g,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=m),t++,d}function a(u,f,p,_,g,m){const d=o(u,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,_,g,m){const d=o(u,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||tp),n.length>1&&n.sort(f||ho),i.length>1&&i.sort(f||ho)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function ep(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new uo,s.set(n,[o])):i>=r.length?(o=new uo,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function np(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new $t};break;case"SpotLight":e={position:new b,direction:new b,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new b,halfWidth:new b,halfHeight:new b};break}return s[t.id]=e,e}}}function ip(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let sp=0;function rp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ap(s,t){const e=new np,n=ip(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new b);const r=new b,o=new de,a=new de;function c(h,u){let f=0,p=0,_=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let g=0,m=0,d=0,E=0,M=0,w=0,I=0,A=0,C=0,W=0,x=0;h.sort(rp);const T=u===!0?Math.PI:1;for(let k=0,Y=h.length;k<Y;k++){const P=h[k],N=P.color,H=P.intensity,$=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=N.r*H*T,p+=N.g*H*T,_+=N.b*H*T;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],H);x++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*T),P.castShadow){const j=P.shadow,nt=n.get(P);nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,i.directionalShadow[g]=nt,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=P.shadow.matrix,w++}i.directional[g]=Z,g++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(N).multiplyScalar(H*T),Z.distance=$,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[d]=Z;const j=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,j.updateMatrices(P),P.castShadow&&W++),i.spotLightMatrix[d]=j.matrix,P.castShadow){const nt=n.get(P);nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,i.spotShadow[d]=nt,i.spotShadowMap[d]=q,A++}d++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(N).multiplyScalar(H),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[E]=Z,E++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity*T),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const j=P.shadow,nt=n.get(P);nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,i.pointShadow[m]=nt,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=P.shadow.matrix,I++}i.point[m]=Z,m++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(H*T),Z.groundColor.copy(P.groundColor).multiplyScalar(H*T),i.hemi[M]=Z,M++}}E>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;const U=i.hash;(U.directionalLength!==g||U.pointLength!==m||U.spotLength!==d||U.rectAreaLength!==E||U.hemiLength!==M||U.numDirectionalShadows!==w||U.numPointShadows!==I||U.numSpotShadows!==A||U.numSpotMaps!==C||U.numLightProbes!==x)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=E,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=A+C-W,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=W,i.numLightProbes=x,U.directionalLength=g,U.pointLength=m,U.spotLength=d,U.rectAreaLength=E,U.hemiLength=M,U.numDirectionalShadows=w,U.numPointShadows=I,U.numSpotShadows=A,U.numSpotMaps=C,U.numLightProbes=x,i.version=sp++)}function l(h,u){let f=0,p=0,_=0,g=0,m=0;const d=u.matrixWorldInverse;for(let E=0,M=h.length;E<M;E++){const w=h[E];if(w.isDirectionalLight){const I=i.directional[f];I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),f++}else if(w.isSpotLight){const I=i.spot[_];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),_++}else if(w.isRectAreaLight){const I=i.rectArea[g];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(d),a.identity(),o.copy(w.matrixWorld),o.premultiply(d),a.extractRotation(o),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),g++}else if(w.isPointLight){const I=i.point[p];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(d),p++}else if(w.isHemisphereLight){const I=i.hemi[m];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function fo(s,t){const e=new ap(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function op(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new fo(s,t),e.set(r,[c])):o>=a.length?(c=new fo(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class cp extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=il,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lp extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,up=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dp(s,t,e){let n=new Fr;const i=new mt,r=new mt,o=new re,a=new cp({depthPacking:sl}),c=new lp,l={},h=e.maxTextureSize,u={[Cn]:Ue,[Ue]:Cn,[ke]:ke},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:hp,fragmentShader:up}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Fe;_.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new R(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let d=this.type;this.render=function(A,C,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const x=s.getRenderTarget(),T=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),k=s.state;k.setBlending(En),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const Y=d!==hn&&this.type===hn,P=d===hn&&this.type!==hn;for(let N=0,H=A.length;N<H;N++){const $=A[N],q=$.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Z=q.getFrameExtents();if(i.multiply(Z),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,q.mapSize.y=r.y)),q.map===null||Y===!0||P===!0){const nt=this.type!==hn?{minFilter:Ie,magFilter:Ie}:{};q.map!==null&&q.map.dispose(),q.map=new Xn(i.x,i.y,nt),q.map.texture.name=$.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const j=q.getViewportCount();for(let nt=0;nt<j;nt++){const it=q.getViewport(nt);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),k.viewport(o),q.updateMatrices($,nt),n=q.getFrustum(),w(C,W,q.camera,$,this.type)}q.isPointLightShadow!==!0&&this.type===hn&&E(q,W),q.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(x,T,U)};function E(A,C){const W=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,W,f,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,W,p,g,null)}function M(A,C,W,x){let T=null;const U=W.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)T=U;else if(T=W.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=T.uuid,Y=C.uuid;let P=l[k];P===void 0&&(P={},l[k]=P);let N=P[Y];N===void 0&&(N=T.clone(),P[Y]=N,C.addEventListener("dispose",I)),T=N}if(T.visible=C.visible,T.wireframe=C.wireframe,x===hn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,W.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=s.properties.get(T);k.light=W}return T}function w(A,C,W,x,T){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===hn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld);const Y=t.update(A),P=A.material;if(Array.isArray(P)){const N=Y.groups;for(let H=0,$=N.length;H<$;H++){const q=N[H],Z=P[q.materialIndex];if(Z&&Z.visible){const j=M(A,Z,x,T);A.onBeforeShadow(s,A,C,W,Y,j,q),s.renderBufferDirect(W,null,Y,j,A,q),A.onAfterShadow(s,A,C,W,Y,j,q)}}}else if(P.visible){const N=M(A,P,x,T);A.onBeforeShadow(s,A,C,W,Y,N,null),s.renderBufferDirect(W,null,Y,N,A,null),A.onAfterShadow(s,A,C,W,Y,N,null)}}const k=A.children;for(let Y=0,P=k.length;Y<P;Y++)w(k[Y],C,W,x,T)}function I(A){A.target.removeEventListener("dispose",I);for(const W in l){const x=l[W],T=A.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}function fp(s,t,e){const n=e.isWebGL2;function i(){let L=!1;const ct=new re;let lt=null;const At=new re(0,0,0,0);return{setMask:function(wt){lt!==wt&&!L&&(s.colorMask(wt,wt,wt,wt),lt=wt)},setLocked:function(wt){L=wt},setClear:function(wt,te,ee,_e,Ce){Ce===!0&&(wt*=_e,te*=_e,ee*=_e),ct.set(wt,te,ee,_e),At.equals(ct)===!1&&(s.clearColor(wt,te,ee,_e),At.copy(ct))},reset:function(){L=!1,lt=null,At.set(-1,0,0,0)}}}function r(){let L=!1,ct=null,lt=null,At=null;return{setTest:function(wt){wt?Ft(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(wt){ct!==wt&&!L&&(s.depthMask(wt),ct=wt)},setFunc:function(wt){if(lt!==wt){switch(wt){case Uc:s.depthFunc(s.NEVER);break;case Nc:s.depthFunc(s.ALWAYS);break;case Fc:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case Oc:s.depthFunc(s.EQUAL);break;case Bc:s.depthFunc(s.GEQUAL);break;case Gc:s.depthFunc(s.GREATER);break;case zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}lt=wt}},setLocked:function(wt){L=wt},setClear:function(wt){At!==wt&&(s.clearDepth(wt),At=wt)},reset:function(){L=!1,ct=null,lt=null,At=null}}}function o(){let L=!1,ct=null,lt=null,At=null,wt=null,te=null,ee=null,_e=null,Ce=null;return{setTest:function(ne){L||(ne?Ft(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function(ne){ct!==ne&&!L&&(s.stencilMask(ne),ct=ne)},setFunc:function(ne,Re,Je){(lt!==ne||At!==Re||wt!==Je)&&(s.stencilFunc(ne,Re,Je),lt=ne,At=Re,wt=Je)},setOp:function(ne,Re,Je){(te!==ne||ee!==Re||_e!==Je)&&(s.stencilOp(ne,Re,Je),te=ne,ee=Re,_e=Je)},setLocked:function(ne){L=ne},setClear:function(ne){Ce!==ne&&(s.clearStencil(ne),Ce=ne)},reset:function(){L=!1,ct=null,lt=null,At=null,wt=null,te=null,ee=null,_e=null,Ce=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let f={},p={},_=new WeakMap,g=[],m=null,d=!1,E=null,M=null,w=null,I=null,A=null,C=null,W=null,x=new $t(0,0,0),T=0,U=!1,k=null,Y=null,P=null,N=null,H=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=Z>=2);let nt=null,it={};const V=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),rt=new re().fromArray(V),pt=new re().fromArray(K);function gt(L,ct,lt,At){const wt=new Uint8Array(4),te=s.createTexture();s.bindTexture(L,te),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<lt;ee++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(ct,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(ct+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return te}const Ut={};Ut[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ut[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ut[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ut[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ft(s.DEPTH_TEST),c.setFunc(ys),zt(!1),S($r),Ft(s.CULL_FACE),_t(En);function Ft(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function bt(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function Zt(L,ct){return p[L]!==ct?(s.bindFramebuffer(L,ct),p[L]=ct,n&&(L===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=ct),L===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=ct)),!0):!1}function F(L,ct){let lt=g,At=!1;if(L)if(lt=_.get(ct),lt===void 0&&(lt=[],_.set(ct,lt)),L.isWebGLMultipleRenderTargets){const wt=L.texture;if(lt.length!==wt.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let te=0,ee=wt.length;te<ee;te++)lt[te]=s.COLOR_ATTACHMENT0+te;lt.length=wt.length,At=!0}}else lt[0]!==s.COLOR_ATTACHMENT0&&(lt[0]=s.COLOR_ATTACHMENT0,At=!0);else lt[0]!==s.BACK&&(lt[0]=s.BACK,At=!0);At&&(e.isWebGL2?s.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function Ae(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const St={[Bn]:s.FUNC_ADD,[xc]:s.FUNC_SUBTRACT,[Mc]:s.FUNC_REVERSE_SUBTRACT};if(n)St[Jr]=s.MIN,St[Qr]=s.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(St[Jr]=L.MIN_EXT,St[Qr]=L.MAX_EXT)}const It={[yc]:s.ZERO,[Sc]:s.ONE,[wc]:s.SRC_COLOR,[yr]:s.SRC_ALPHA,[Rc]:s.SRC_ALPHA_SATURATE,[Ac]:s.DST_COLOR,[Tc]:s.DST_ALPHA,[Ec]:s.ONE_MINUS_SRC_COLOR,[Sr]:s.ONE_MINUS_SRC_ALPHA,[Cc]:s.ONE_MINUS_DST_COLOR,[bc]:s.ONE_MINUS_DST_ALPHA,[Pc]:s.CONSTANT_COLOR,[Lc]:s.ONE_MINUS_CONSTANT_COLOR,[Ic]:s.CONSTANT_ALPHA,[Dc]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(L,ct,lt,At,wt,te,ee,_e,Ce,ne){if(L===En){d===!0&&(bt(s.BLEND),d=!1);return}if(d===!1&&(Ft(s.BLEND),d=!0),L!==vc){if(L!==E||ne!==U){if((M!==Bn||A!==Bn)&&(s.blendEquation(s.FUNC_ADD),M=Bn,A=Bn),ne)switch(L){case mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zr:s.blendFunc(s.ONE,s.ONE);break;case jr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,I=null,C=null,W=null,x.set(0,0,0),T=0,E=L,U=ne}return}wt=wt||ct,te=te||lt,ee=ee||At,(ct!==M||wt!==A)&&(s.blendEquationSeparate(St[ct],St[wt]),M=ct,A=wt),(lt!==w||At!==I||te!==C||ee!==W)&&(s.blendFuncSeparate(It[lt],It[At],It[te],It[ee]),w=lt,I=At,C=te,W=ee),(_e.equals(x)===!1||Ce!==T)&&(s.blendColor(_e.r,_e.g,_e.b,Ce),x.copy(_e),T=Ce),E=L,U=!1}function ae(L,ct){L.side===ke?bt(s.CULL_FACE):Ft(s.CULL_FACE);let lt=L.side===Ue;ct&&(lt=!lt),zt(lt),L.blending===mi&&L.transparent===!1?_t(En):_t(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const At=L.stencilWrite;l.setTest(At),At&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ft(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){k!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),k=L)}function S(L){L!==gc?(Ft(s.CULL_FACE),L!==Y&&(L===$r?s.cullFace(s.BACK):L===_c?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),Y=L}function v(L){L!==P&&(q&&s.lineWidth(L),P=L)}function B(L,ct,lt){L?(Ft(s.POLYGON_OFFSET_FILL),(N!==ct||H!==lt)&&(s.polygonOffset(ct,lt),N=ct,H=lt)):bt(s.POLYGON_OFFSET_FILL)}function tt(L){L?Ft(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function Q(L){L===void 0&&(L=s.TEXTURE0+$-1),nt!==L&&(s.activeTexture(L),nt=L)}function et(L,ct,lt){lt===void 0&&(nt===null?lt=s.TEXTURE0+$-1:lt=nt);let At=it[lt];At===void 0&&(At={type:void 0,texture:void 0},it[lt]=At),(At.type!==L||At.texture!==ct)&&(nt!==lt&&(s.activeTexture(lt),nt=lt),s.bindTexture(L,ct||Ut[L]),At.type=L,At.texture=ct)}function vt(){const L=it[nt];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ht(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Lt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(L){rt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),rt.copy(L))}function jt(L){pt.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),pt.copy(L))}function ce(L,ct){let lt=u.get(ct);lt===void 0&&(lt=new WeakMap,u.set(ct,lt));let At=lt.get(L);At===void 0&&(At=s.getUniformBlockIndex(ct,L.name),lt.set(L,At))}function Vt(L,ct){const At=u.get(ct).get(L);h.get(ct)!==At&&(s.uniformBlockBinding(ct,At,L.__bindingPointIndex),h.set(ct,At))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},nt=null,it={},p={},_=new WeakMap,g=[],m=null,d=!1,E=null,M=null,w=null,I=null,A=null,C=null,W=null,x=new $t(0,0,0),T=0,U=!1,k=null,Y=null,P=null,N=null,H=null,rt.set(0,0,s.canvas.width,s.canvas.height),pt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ft,disable:bt,bindFramebuffer:Zt,drawBuffers:F,useProgram:Ae,setBlending:_t,setMaterial:ae,setFlipSided:zt,setCullFace:S,setLineWidth:v,setPolygonOffset:B,setScissorTest:tt,activeTexture:Q,bindTexture:et,unbindTexture:vt,compressedTexImage2D:ht,compressedTexImage3D:dt,texImage2D:yt,texImage3D:ft,updateUBOMapping:ce,uniformBlockBinding:Vt,texStorage2D:qt,texStorage3D:Lt,texSubImage2D:Tt,texSubImage3D:kt,compressedTexSubImage2D:J,compressedTexSubImage3D:Kt,scissor:Ot,viewport:jt,reset:at}}function pp(s,t,e,n,i,r,o){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return p?new OffscreenCanvas(S,v):bs("canvas")}function g(S,v,B,tt){let Q=1;if((S.width>tt||S.height>tt)&&(Q=tt/Math.max(S.width,S.height)),Q<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const et=v?Rr:Math.floor,vt=et(Q*S.width),ht=et(Q*S.height);u===void 0&&(u=_(vt,ht));const dt=B?_(vt,ht):u;return dt.width=vt,dt.height=ht,dt.getContext("2d").drawImage(S,0,0,vt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+vt+"x"+ht+")."),dt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Ca(S.width)&&Ca(S.height)}function d(S){return a?!1:S.wrapS!==Ze||S.wrapT!==Ze||S.minFilter!==Ie&&S.minFilter!==De}function E(S,v){return S.generateMipmaps&&v&&S.minFilter!==Ie&&S.minFilter!==De}function M(S){s.generateMipmap(S)}function w(S,v,B,tt,Q=!1){if(a===!1)return v;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let et=v;if(v===s.RED&&(B===s.FLOAT&&(et=s.R32F),B===s.HALF_FLOAT&&(et=s.R16F),B===s.UNSIGNED_BYTE&&(et=s.R8)),v===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(et=s.R8UI),B===s.UNSIGNED_SHORT&&(et=s.R16UI),B===s.UNSIGNED_INT&&(et=s.R32UI),B===s.BYTE&&(et=s.R8I),B===s.SHORT&&(et=s.R16I),B===s.INT&&(et=s.R32I)),v===s.RG&&(B===s.FLOAT&&(et=s.RG32F),B===s.HALF_FLOAT&&(et=s.RG16F),B===s.UNSIGNED_BYTE&&(et=s.RG8)),v===s.RGBA){const vt=Q?Ss:Jt.getTransfer(tt);B===s.FLOAT&&(et=s.RGBA32F),B===s.HALF_FLOAT&&(et=s.RGBA16F),B===s.UNSIGNED_BYTE&&(et=vt===ie?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function I(S,v,B){return E(S,B)===!0||S.isFramebufferTexture&&S.minFilter!==Ie&&S.minFilter!==De?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function A(S){return S===Ie||S===ta||S===Os?s.NEAREST:s.LINEAR}function C(S){const v=S.target;v.removeEventListener("dispose",C),x(v),v.isVideoTexture&&h.delete(v)}function W(S){const v=S.target;v.removeEventListener("dispose",W),U(v)}function x(S){const v=n.get(S);if(v.__webglInit===void 0)return;const B=S.source,tt=f.get(B);if(tt){const Q=tt[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(S),Object.keys(tt).length===0&&f.delete(B)}n.remove(S)}function T(S){const v=n.get(S);s.deleteTexture(v.__webglTexture);const B=S.source,tt=f.get(B);delete tt[v.__cacheKey],o.memory.textures--}function U(S){const v=S.texture,B=n.get(S),tt=n.get(v);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let et=0;et<B.__webglFramebuffer[Q].length;et++)s.deleteFramebuffer(B.__webglFramebuffer[Q][et]);else s.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)s.deleteFramebuffer(B.__webglFramebuffer[Q]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let Q=0,et=v.length;Q<et;Q++){const vt=n.get(v[Q]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(v[Q])}n.remove(v),n.remove(S)}let k=0;function Y(){k=0}function P(){const S=k;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),k+=1,S}function N(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function H(S,v){const B=n.get(S);if(S.isVideoTexture&&ae(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const tt=S.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(B,S,v);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+v)}function $(S,v){const B=n.get(S);if(S.version>0&&B.__version!==S.version){rt(B,S,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+v)}function q(S,v){const B=n.get(S);if(S.version>0&&B.__version!==S.version){rt(B,S,v);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+v)}function Z(S,v){const B=n.get(S);if(S.version>0&&B.__version!==S.version){pt(B,S,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+v)}const j={[zn]:s.REPEAT,[Ze]:s.CLAMP_TO_EDGE,[Tr]:s.MIRRORED_REPEAT},nt={[Ie]:s.NEAREST,[ta]:s.NEAREST_MIPMAP_NEAREST,[Os]:s.NEAREST_MIPMAP_LINEAR,[De]:s.LINEAR,[$c]:s.LINEAR_MIPMAP_NEAREST,[ki]:s.LINEAR_MIPMAP_LINEAR},it={[al]:s.NEVER,[dl]:s.ALWAYS,[ol]:s.LESS,[zo]:s.LEQUAL,[cl]:s.EQUAL,[ul]:s.GEQUAL,[ll]:s.GREATER,[hl]:s.NOTEQUAL};function V(S,v,B){if(B?(s.texParameteri(S,s.TEXTURE_WRAP_S,j[v.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,j[v.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,j[v.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,nt[v.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,nt[v.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==Ze||v.wrapT!==Ze)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,A(v.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Ie&&v.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,it[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ie||v.minFilter!==Os&&v.minFilter!==ki||v.type===wn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===Hi&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(S,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function K(S,v){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",C));const tt=v.source;let Q=f.get(tt);Q===void 0&&(Q={},f.set(tt,Q));const et=N(v);if(et!==S.__cacheKey){Q[et]===void 0&&(Q[et]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[et].usedTimes++;const vt=Q[S.__cacheKey];vt!==void 0&&(Q[S.__cacheKey].usedTimes--,vt.usedTimes===0&&T(v)),S.__cacheKey=et,S.__webglTexture=Q[et].texture}return B}function rt(S,v,B){let tt=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(tt=s.TEXTURE_3D);const Q=K(S,v),et=v.source;e.bindTexture(tt,S.__webglTexture,s.TEXTURE0+B);const vt=n.get(et);if(et.version!==vt.__version||Q===!0){e.activeTexture(s.TEXTURE0+B);const ht=Jt.getPrimaries(Jt.workingColorSpace),dt=v.colorSpace===Xe?null:Jt.getPrimaries(v.colorSpace),Tt=v.colorSpace===Xe||ht===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const kt=d(v)&&m(v.image)===!1;let J=g(v.image,kt,!1,i.maxTextureSize);J=zt(v,J);const Kt=m(J)||a,qt=r.convert(v.format,v.colorSpace);let Lt=r.convert(v.type),yt=w(v.internalFormat,qt,Lt,v.colorSpace,v.isVideoTexture);V(tt,v,Kt);let ft;const Ot=v.mipmaps,jt=a&&v.isVideoTexture!==!0&&yt!==Oo,ce=vt.__version===void 0||Q===!0,Vt=I(v,J,Kt);if(v.isDepthTexture)yt=s.DEPTH_COMPONENT,a?v.type===wn?yt=s.DEPTH_COMPONENT32F:v.type===Sn?yt=s.DEPTH_COMPONENT24:v.type===kn?yt=s.DEPTH24_STENCIL8:yt=s.DEPTH_COMPONENT16:v.type===wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Hn&&yt===s.DEPTH_COMPONENT&&v.type!==Dr&&v.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Sn,Lt=r.convert(v.type)),v.format===xi&&yt===s.DEPTH_COMPONENT&&(yt=s.DEPTH_STENCIL,v.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=kn,Lt=r.convert(v.type))),ce&&(jt?e.texStorage2D(s.TEXTURE_2D,1,yt,J.width,J.height):e.texImage2D(s.TEXTURE_2D,0,yt,J.width,J.height,0,qt,Lt,null));else if(v.isDataTexture)if(Ot.length>0&&Kt){jt&&ce&&e.texStorage2D(s.TEXTURE_2D,Vt,yt,Ot[0].width,Ot[0].height);for(let at=0,L=Ot.length;at<L;at++)ft=Ot[at],jt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,ft.width,ft.height,qt,Lt,ft.data):e.texImage2D(s.TEXTURE_2D,at,yt,ft.width,ft.height,0,qt,Lt,ft.data);v.generateMipmaps=!1}else jt?(ce&&e.texStorage2D(s.TEXTURE_2D,Vt,yt,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,qt,Lt,J.data)):e.texImage2D(s.TEXTURE_2D,0,yt,J.width,J.height,0,qt,Lt,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){jt&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,yt,Ot[0].width,Ot[0].height,J.depth);for(let at=0,L=Ot.length;at<L;at++)ft=Ot[at],v.format!==je?qt!==null?jt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,ft.width,ft.height,J.depth,qt,ft.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,yt,ft.width,ft.height,J.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,ft.width,ft.height,J.depth,qt,Lt,ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,yt,ft.width,ft.height,J.depth,0,qt,Lt,ft.data)}else{jt&&ce&&e.texStorage2D(s.TEXTURE_2D,Vt,yt,Ot[0].width,Ot[0].height);for(let at=0,L=Ot.length;at<L;at++)ft=Ot[at],v.format!==je?qt!==null?jt?e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,ft.width,ft.height,qt,ft.data):e.compressedTexImage2D(s.TEXTURE_2D,at,yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,ft.width,ft.height,qt,Lt,ft.data):e.texImage2D(s.TEXTURE_2D,at,yt,ft.width,ft.height,0,qt,Lt,ft.data)}else if(v.isDataArrayTexture)jt?(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Vt,yt,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,qt,Lt,J.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,yt,J.width,J.height,J.depth,0,qt,Lt,J.data);else if(v.isData3DTexture)jt?(ce&&e.texStorage3D(s.TEXTURE_3D,Vt,yt,J.width,J.height,J.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,qt,Lt,J.data)):e.texImage3D(s.TEXTURE_3D,0,yt,J.width,J.height,J.depth,0,qt,Lt,J.data);else if(v.isFramebufferTexture){if(ce)if(jt)e.texStorage2D(s.TEXTURE_2D,Vt,yt,J.width,J.height);else{let at=J.width,L=J.height;for(let ct=0;ct<Vt;ct++)e.texImage2D(s.TEXTURE_2D,ct,yt,at,L,0,qt,Lt,null),at>>=1,L>>=1}}else if(Ot.length>0&&Kt){jt&&ce&&e.texStorage2D(s.TEXTURE_2D,Vt,yt,Ot[0].width,Ot[0].height);for(let at=0,L=Ot.length;at<L;at++)ft=Ot[at],jt?e.texSubImage2D(s.TEXTURE_2D,at,0,0,qt,Lt,ft):e.texImage2D(s.TEXTURE_2D,at,yt,qt,Lt,ft);v.generateMipmaps=!1}else jt?(ce&&e.texStorage2D(s.TEXTURE_2D,Vt,yt,J.width,J.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,qt,Lt,J)):e.texImage2D(s.TEXTURE_2D,0,yt,qt,Lt,J);E(v,Kt)&&M(tt),vt.__version=et.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function pt(S,v,B){if(v.image.length!==6)return;const tt=K(S,v),Q=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+B);const et=n.get(Q);if(Q.version!==et.__version||tt===!0){e.activeTexture(s.TEXTURE0+B);const vt=Jt.getPrimaries(Jt.workingColorSpace),ht=v.colorSpace===Xe?null:Jt.getPrimaries(v.colorSpace),dt=v.colorSpace===Xe||vt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,kt=v.image[0]&&v.image[0].isDataTexture,J=[];for(let at=0;at<6;at++)!Tt&&!kt?J[at]=g(v.image[at],!1,!0,i.maxCubemapSize):J[at]=kt?v.image[at].image:v.image[at],J[at]=zt(v,J[at]);const Kt=J[0],qt=m(Kt)||a,Lt=r.convert(v.format,v.colorSpace),yt=r.convert(v.type),ft=w(v.internalFormat,Lt,yt,v.colorSpace),Ot=a&&v.isVideoTexture!==!0,jt=et.__version===void 0||tt===!0;let ce=I(v,Kt,qt);V(s.TEXTURE_CUBE_MAP,v,qt);let Vt;if(Tt){Ot&&jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ce,ft,Kt.width,Kt.height);for(let at=0;at<6;at++){Vt=J[at].mipmaps;for(let L=0;L<Vt.length;L++){const ct=Vt[L];v.format!==je?Lt!==null?Ot?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,0,0,ct.width,ct.height,Lt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,ft,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,0,0,ct.width,ct.height,Lt,yt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,ft,ct.width,ct.height,0,Lt,yt,ct.data)}}}else{Vt=v.mipmaps,Ot&&jt&&(Vt.length>0&&ce++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ce,ft,J[0].width,J[0].height));for(let at=0;at<6;at++)if(kt){Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,J[at].width,J[at].height,Lt,yt,J[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ft,J[at].width,J[at].height,0,Lt,yt,J[at].data);for(let L=0;L<Vt.length;L++){const lt=Vt[L].image[at].image;Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,0,0,lt.width,lt.height,Lt,yt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,ft,lt.width,lt.height,0,Lt,yt,lt.data)}}else{Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Lt,yt,J[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ft,Lt,yt,J[at]);for(let L=0;L<Vt.length;L++){const ct=Vt[L];Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,0,0,Lt,yt,ct.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,ft,Lt,yt,ct.image[at])}}}E(v,qt)&&M(s.TEXTURE_CUBE_MAP),et.__version=Q.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function gt(S,v,B,tt,Q,et){const vt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),dt=w(B.internalFormat,vt,ht,B.colorSpace);if(!n.get(v).__hasExternalTextures){const kt=Math.max(1,v.width>>et),J=Math.max(1,v.height>>et);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,et,dt,kt,J,v.depth,0,vt,ht,null):e.texImage2D(Q,et,dt,kt,J,0,vt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),_t(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,Q,n.get(B).__webglTexture,0,It(v)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,Q,n.get(B).__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(S,v,B){if(s.bindRenderbuffer(s.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let tt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||_t(v)){const Q=v.depthTexture;Q&&Q.isDepthTexture&&(Q.type===wn?tt=s.DEPTH_COMPONENT32F:Q.type===Sn&&(tt=s.DEPTH_COMPONENT24));const et=It(v);_t(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,tt,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,et,tt,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,tt,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const tt=It(v);B&&_t(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,v.width,v.height):_t(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{const tt=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Q=0;Q<tt.length;Q++){const et=tt[Q],vt=r.convert(et.format,et.colorSpace),ht=r.convert(et.type),dt=w(et.internalFormat,vt,ht,et.colorSpace),Tt=It(v);B&&_t(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,dt,v.width,v.height):_t(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,dt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,dt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);const tt=n.get(v.depthTexture).__webglTexture,Q=It(v);if(v.depthTexture.format===Hn)_t(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(v.depthTexture.format===xi)_t(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function bt(S){const v=n.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ft(v.__webglFramebuffer,S)}else if(B){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]=s.createRenderbuffer(),Ut(v.__webglDepthbuffer[tt],S,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Ut(v.__webglDepthbuffer,S,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(S,v,B){const tt=n.get(S);v!==void 0&&gt(tt.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&bt(S)}function F(S){const v=S.texture,B=n.get(S),tt=n.get(v);S.addEventListener("dispose",W),S.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=v.version,o.memory.textures++);const Q=S.isWebGLCubeRenderTarget===!0,et=S.isWebGLMultipleRenderTargets===!0,vt=m(S)||a;if(Q){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(a&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let dt=0;dt<v.mipmaps.length;dt++)B.__webglFramebuffer[ht][dt]=s.createFramebuffer()}else B.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)B.__webglFramebuffer[ht]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(et)if(i.drawBuffers){const ht=S.texture;for(let dt=0,Tt=ht.length;dt<Tt;dt++){const kt=n.get(ht[dt]);kt.__webglTexture===void 0&&(kt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&_t(S)===!1){const ht=et?v:[v];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<ht.length;dt++){const Tt=ht[dt];B.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const kt=r.convert(Tt.format,Tt.colorSpace),J=r.convert(Tt.type),Kt=w(Tt.internalFormat,kt,J,Tt.colorSpace,S.isXRRenderTarget===!0),qt=It(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Kt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ut(B.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),V(s.TEXTURE_CUBE_MAP,v,vt);for(let ht=0;ht<6;ht++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)gt(B.__webglFramebuffer[ht][dt],S,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else gt(B.__webglFramebuffer[ht],S,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);E(v,vt)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){const ht=S.texture;for(let dt=0,Tt=ht.length;dt<Tt;dt++){const kt=ht[dt],J=n.get(kt);e.bindTexture(s.TEXTURE_2D,J.__webglTexture),V(s.TEXTURE_2D,kt,vt),gt(B.__webglFramebuffer,S,kt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),E(kt,vt)&&M(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ht=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,tt.__webglTexture),V(ht,v,vt),a&&v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)gt(B.__webglFramebuffer[dt],S,v,s.COLOR_ATTACHMENT0,ht,dt);else gt(B.__webglFramebuffer,S,v,s.COLOR_ATTACHMENT0,ht,0);E(v,vt)&&M(ht),e.unbindTexture()}S.depthBuffer&&bt(S)}function Ae(S){const v=m(S)||a,B=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let tt=0,Q=B.length;tt<Q;tt++){const et=B[tt];if(E(et,v)){const vt=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ht=n.get(et).__webglTexture;e.bindTexture(vt,ht),M(vt),e.unbindTexture()}}}function St(S){if(a&&S.samples>0&&_t(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],B=S.width,tt=S.height;let Q=s.COLOR_BUFFER_BIT;const et=[],vt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=n.get(S),dt=S.isWebGLMultipleRenderTargets===!0;if(dt)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){et.push(s.COLOR_ATTACHMENT0+Tt),S.depthBuffer&&et.push(vt);const kt=ht.__ignoreDepthValues!==void 0?ht.__ignoreDepthValues:!1;if(kt===!1&&(S.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),dt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Tt]),kt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[vt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[vt])),dt){const J=n.get(v[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,B,tt,0,0,B,tt,Q,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Tt]);const kt=n.get(v[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}}function It(S){return Math.min(i.maxSamples,S.samples)}function _t(S){const v=n.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ae(S){const v=o.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function zt(S,v){const B=S.colorSpace,tt=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ar||B!==pn&&B!==Xe&&(Jt.getTransfer(B)===ie?a===!1?t.has("EXT_sRGB")===!0&&tt===je?(S.format=Ar,S.minFilter=De,S.generateMipmaps=!1):v=Ho.sRGBToLinear(v):(tt!==je||Q!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}this.allocateTextureUnit=P,this.resetTextureUnits=Y,this.setTexture2D=H,this.setTexture2DArray=$,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=Zt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=_t}function mp(s,t,e){const n=e.isWebGL2;function i(r,o=Xe){let a;const c=Jt.getTransfer(o);if(r===bn)return s.UNSIGNED_BYTE;if(r===Io)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Do)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zc)return s.BYTE;if(r===jc)return s.SHORT;if(r===Dr)return s.UNSIGNED_SHORT;if(r===Lo)return s.INT;if(r===Sn)return s.UNSIGNED_INT;if(r===wn)return s.FLOAT;if(r===Hi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Kc)return s.ALPHA;if(r===je)return s.RGBA;if(r===Jc)return s.LUMINANCE;if(r===Qc)return s.LUMINANCE_ALPHA;if(r===Hn)return s.DEPTH_COMPONENT;if(r===xi)return s.DEPTH_STENCIL;if(r===Ar)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===tl)return s.RED;if(r===Uo)return s.RED_INTEGER;if(r===el)return s.RG;if(r===No)return s.RG_INTEGER;if(r===Fo)return s.RGBA_INTEGER;if(r===Bs||r===Gs||r===zs||r===ks)if(c===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Bs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Bs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ea||r===na||r===ia||r===sa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ea)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===na)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ia)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===sa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oo)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ra||r===aa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ra)return c===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===aa)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===oa||r===ca||r===la||r===ha||r===ua||r===da||r===fa||r===pa||r===ma||r===ga||r===_a||r===va||r===xa||r===Ma)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===oa)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ca)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===la)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ha)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ua)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===da)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fa)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===pa)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ma)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ga)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_a)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===va)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xa)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ma)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hs||r===ya||r===Sa)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Hs)return c===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ya)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nl||r===wa||r===Ea||r===Ta)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Hs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===wa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ea)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ta)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===kn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class gp extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mt extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _p={type:"move"};class fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(l,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class vp extends yi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,_=null;const g=e.getContextAttributes();let m=null,d=null;const E=[],M=[],w=new mt;let I=null;const A=new ze;A.layers.enable(1),A.viewport=new re;const C=new ze;C.layers.enable(2),C.viewport=new re;const W=[A,C],x=new gp;x.layers.enable(1),x.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=E[V];return K===void 0&&(K=new fr,E[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=E[V];return K===void 0&&(K=new fr,E[V]=K),K.getGripSpace()},this.getHand=function(V){let K=E[V];return K===void 0&&(K=new fr,E[V]=K),K.getHandSpace()};function k(V){const K=M.indexOf(V.inputSource);if(K===-1)return;const rt=E[K];rt!==void 0&&(rt.update(V.inputSource,V.frame,l||o),rt.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",P);for(let V=0;V<E.length;V++){const K=M[V];K!==null&&(M[V]=null,E[V].disconnect(K))}T=null,U=null,t.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Xn(p.framebufferWidth,p.framebufferHeight,{format:je,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,rt=null,pt=null;g.depth&&(pt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=g.stencil?xi:Hn,rt=g.stencil?kn:Sn);const gt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(gt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Xn(f.textureWidth,f.textureHeight,{format:je,type:bn,depthTexture:new tc(f.textureWidth,f.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const Ut=t.properties.get(d);Ut.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(V){for(let K=0;K<V.removed.length;K++){const rt=V.removed[K],pt=M.indexOf(rt);pt>=0&&(M[pt]=null,E[pt].disconnect(rt))}for(let K=0;K<V.added.length;K++){const rt=V.added[K];let pt=M.indexOf(rt);if(pt===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=M.length){M.push(rt),pt=Ut;break}else if(M[Ut]===null){M[Ut]=rt,pt=Ut;break}if(pt===-1)break}const gt=E[pt];gt&&gt.connect(rt)}}const N=new b,H=new b;function $(V,K,rt){N.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(rt.matrixWorld);const pt=N.distanceTo(H),gt=K.projectionMatrix.elements,Ut=rt.projectionMatrix.elements,Ft=gt[14]/(gt[10]-1),bt=gt[14]/(gt[10]+1),Zt=(gt[9]+1)/gt[5],F=(gt[9]-1)/gt[5],Ae=(gt[8]-1)/gt[0],St=(Ut[8]+1)/Ut[0],It=Ft*Ae,_t=Ft*St,ae=pt/(-Ae+St),zt=ae*-Ae;K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(zt),V.translateZ(ae),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const S=Ft+ae,v=bt+ae,B=It-zt,tt=_t+(pt-zt),Q=Zt*bt/v*S,et=F*bt/v*S;V.projectionMatrix.makePerspective(B,tt,Q,et,S,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function q(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;x.near=C.near=A.near=V.near,x.far=C.far=A.far=V.far,(T!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),T=x.near,U=x.far);const K=V.parent,rt=x.cameras;q(x,K);for(let pt=0;pt<rt.length;pt++)q(rt[pt],K);rt.length===2?$(x,A,C):x.projectionMatrix.copy(A.projectionMatrix),Z(V,x,K)};function Z(V,K,rt){rt===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(rt.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Cr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let j=null;function nt(V,K){if(h=K.getViewerPose(l||o),_=K,h!==null){const rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let pt=!1;rt.length!==x.cameras.length&&(x.cameras.length=0,pt=!0);for(let gt=0;gt<rt.length;gt++){const Ut=rt[gt];let Ft=null;if(p!==null)Ft=p.getViewport(Ut);else{const Zt=u.getViewSubImage(f,Ut);Ft=Zt.viewport,gt===0&&(t.setRenderTargetTextures(d,Zt.colorTexture,f.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(d))}let bt=W[gt];bt===void 0&&(bt=new ze,bt.layers.enable(gt),bt.viewport=new re,W[gt]=bt),bt.matrix.fromArray(Ut.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Ut.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),gt===0&&(x.matrix.copy(bt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pt===!0&&x.cameras.push(bt)}}for(let rt=0;rt<E.length;rt++){const pt=M[rt],gt=E[rt];pt!==null&&gt!==void 0&&gt.update(pt,K,l||o)}j&&j(V,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const it=new Jo;it.setAnimationLoop(nt),this.setAnimationLoop=function(V){j=V},this.dispose=function(){}}}function xp(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Zo(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,E,M,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,w)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,E,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ue&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ue&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*M,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ue&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mp(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,M){const w=M.program;n.uniformBlockBinding(E,w)}function l(E,M){let w=i[E.id];w===void 0&&(_(E),w=h(E),i[E.id]=w,E.addEventListener("dispose",m));const I=M.program;n.updateUBOMapping(E,I);const A=t.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){const M=u();E.__bindingPointIndex=M;const w=s.createBuffer(),I=E.__size,A=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=i[E.id],w=E.uniforms,I=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,C=w.length;A<C;A++){const W=Array.isArray(w[A])?w[A]:[w[A]];for(let x=0,T=W.length;x<T;x++){const U=W[x];if(p(U,A,x,I)===!0){const k=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value];let P=0;for(let N=0;N<Y.length;N++){const H=Y[N],$=g(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+P,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,M,w,I){const A=E.value,C=M+"_"+w;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{const W=I[C];if(typeof A=="number"||typeof A=="boolean"){if(W!==A)return I[C]=A,!0}else if(W.equals(A)===!1)return W.copy(A),!0}return!1}function _(E){const M=E.uniforms;let w=0;const I=16;for(let C=0,W=M.length;C<W;C++){const x=Array.isArray(M[C])?M[C]:[M[C]];for(let T=0,U=x.length;T<U;T++){const k=x[T],Y=Array.isArray(k.value)?k.value:[k.value];for(let P=0,N=Y.length;P<N;P++){const H=Y[P],$=g(H),q=w%I;q!==0&&I-q<$.boundary&&(w+=I-q),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=$.storage}}}const A=w%I;return A>0&&(w+=I-A),E.__size=w,E.__cache={},this}function g(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}class ac{constructor(t={}){const{canvas:e=pl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const M=this;let w=!1,I=0,A=0,C=null,W=-1,x=null;const T=new re,U=new re;let k=null;const Y=new $t(0);let P=0,N=e.width,H=e.height,$=1,q=null,Z=null;const j=new re(0,0,N,H),nt=new re(0,0,N,H);let it=!1;const V=new Fr;let K=!1,rt=!1,pt=null;const gt=new de,Ut=new mt,Ft=new b,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Zt(){return C===null?$:1}let F=n;function Ae(y,D){for(let G=0;G<y.length;G++){const z=y[G],O=e.getContext(z,D);if(O!==null)return O}return null}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ir}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ct,!1),F===null){const D=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&D.shift(),F=Ae(D,y),F===null)throw Ae(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let St,It,_t,ae,zt,S,v,B,tt,Q,et,vt,ht,dt,Tt,kt,J,Kt,qt,Lt,yt,ft,Ot,jt;function ce(){St=new Rd(F),It=new wd(F,St,t),St.init(It),ft=new mp(F,St,It),_t=new fp(F,St,It),ae=new Id(F),zt=new Qf,S=new pp(F,St,_t,zt,It,ft,ae),v=new Td(M),B=new Cd(M),tt=new zl(F,It),Ot=new yd(F,St,tt,It),Q=new Pd(F,tt,ae,Ot),et=new Fd(F,Q,tt,ae),qt=new Nd(F,It,S),kt=new Ed(zt),vt=new Jf(M,v,B,St,It,Ot,kt),ht=new xp(M,zt),dt=new ep,Tt=new op(St,It),Kt=new Md(M,v,B,_t,et,f,c),J=new dp(M,et,It),jt=new Mp(F,ae,It,_t),Lt=new Sd(F,St,ae,It),yt=new Ld(F,St,ae,It),ae.programs=vt.programs,M.capabilities=It,M.extensions=St,M.properties=zt,M.renderLists=dt,M.shadowMap=J,M.state=_t,M.info=ae}ce();const Vt=new vp(M,F);this.xr=Vt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=St.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=St.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(N,H,!1))},this.getSize=function(y){return y.set(N,H)},this.setSize=function(y,D,G=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=y,H=D,e.width=Math.floor(y*$),e.height=Math.floor(D*$),G===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(N*$,H*$).floor()},this.setDrawingBufferSize=function(y,D,G){N=y,H=D,$=G,e.width=Math.floor(y*G),e.height=Math.floor(D*G),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(T)},this.getViewport=function(y){return y.copy(j)},this.setViewport=function(y,D,G,z){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,D,G,z),_t.viewport(T.copy(j).multiplyScalar($).floor())},this.getScissor=function(y){return y.copy(nt)},this.setScissor=function(y,D,G,z){y.isVector4?nt.set(y.x,y.y,y.z,y.w):nt.set(y,D,G,z),_t.scissor(U.copy(nt).multiplyScalar($).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(y){_t.setScissorTest(it=y)},this.setOpaqueSort=function(y){q=y},this.setTransparentSort=function(y){Z=y},this.getClearColor=function(y){return y.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(y=!0,D=!0,G=!0){let z=0;if(y){let O=!1;if(C!==null){const ut=C.texture.format;O=ut===Fo||ut===No||ut===Uo}if(O){const ut=C.texture.type,xt=ut===bn||ut===Sn||ut===Dr||ut===kn||ut===Io||ut===Do,Et=Kt.getClearColor(),Rt=Kt.getClearAlpha(),Ht=Et.r,Dt=Et.g,Nt=Et.b;xt?(p[0]=Ht,p[1]=Dt,p[2]=Nt,p[3]=Rt,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=Ht,_[1]=Dt,_[2]=Nt,_[3]=Rt,F.clearBufferiv(F.COLOR,0,_))}else z|=F.COLOR_BUFFER_BIT}D&&(z|=F.DEPTH_BUFFER_BIT),G&&(z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Tt.dispose(),zt.dispose(),v.dispose(),B.dispose(),et.dispose(),Ot.dispose(),jt.dispose(),vt.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",Ce),Vt.removeEventListener("sessionend",ne),pt&&(pt.dispose(),pt=null),Re.stop()};function at(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const y=ae.autoReset,D=J.enabled,G=J.autoUpdate,z=J.needsUpdate,O=J.type;ce(),ae.autoReset=y,J.enabled=D,J.autoUpdate=G,J.needsUpdate=z,J.type=O}function ct(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function lt(y){const D=y.target;D.removeEventListener("dispose",lt),At(D)}function At(y){wt(y),zt.remove(y)}function wt(y){const D=zt.get(y).programs;D!==void 0&&(D.forEach(function(G){vt.releaseProgram(G)}),y.isShaderMaterial&&vt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,G,z,O,ut){D===null&&(D=bt);const xt=O.isMesh&&O.matrixWorld.determinant()<0,Et=dc(y,D,G,z,O);_t.setMaterial(z,xt);let Rt=G.index,Ht=1;if(z.wireframe===!0){if(Rt=Q.getWireframeAttribute(G),Rt===void 0)return;Ht=2}const Dt=G.drawRange,Nt=G.attributes.position;let fe=Dt.start*Ht,Oe=(Dt.start+Dt.count)*Ht;ut!==null&&(fe=Math.max(fe,ut.start*Ht),Oe=Math.min(Oe,(ut.start+ut.count)*Ht)),Rt!==null?(fe=Math.max(fe,0),Oe=Math.min(Oe,Rt.count)):Nt!=null&&(fe=Math.max(fe,0),Oe=Math.min(Oe,Nt.count));const ve=Oe-fe;if(ve<0||ve===1/0)return;Ot.setup(O,z,Et,G,Rt);let sn,oe=Lt;if(Rt!==null&&(sn=tt.get(Rt),oe=yt,oe.setIndex(sn)),O.isMesh)z.wireframe===!0?(_t.setLineWidth(z.wireframeLinewidth*Zt()),oe.setMode(F.LINES)):oe.setMode(F.TRIANGLES);else if(O.isLine){let Wt=z.linewidth;Wt===void 0&&(Wt=1),_t.setLineWidth(Wt*Zt()),O.isLineSegments?oe.setMode(F.LINES):O.isLineLoop?oe.setMode(F.LINE_LOOP):oe.setMode(F.LINE_STRIP)}else O.isPoints?oe.setMode(F.POINTS):O.isSprite&&oe.setMode(F.TRIANGLES);if(O.isBatchedMesh)oe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)oe.renderInstances(fe,ve,O.count);else if(G.isInstancedBufferGeometry){const Wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ds=Math.min(G.instanceCount,Wt);oe.renderInstances(fe,ve,Ds)}else oe.render(fe,ve)};function te(y,D,G){y.transparent===!0&&y.side===ke&&y.forceSinglePass===!1?(y.side=Ue,y.needsUpdate=!0,qi(y,D,G),y.side=Cn,y.needsUpdate=!0,qi(y,D,G),y.side=ke):qi(y,D,G)}this.compile=function(y,D,G=null){G===null&&(G=y),m=Tt.get(G),m.init(),E.push(m),G.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),y!==G&&y.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(M._useLegacyLights);const z=new Set;return y.traverse(function(O){const ut=O.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Et=ut[xt];te(Et,G,O),z.add(Et)}else te(ut,G,O),z.add(ut)}),E.pop(),m=null,z},this.compileAsync=function(y,D,G=null){const z=this.compile(y,D,G);return new Promise(O=>{function ut(){if(z.forEach(function(xt){zt.get(xt).currentProgram.isReady()&&z.delete(xt)}),z.size===0){O(y);return}setTimeout(ut,10)}St.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let ee=null;function _e(y){ee&&ee(y)}function Ce(){Re.stop()}function ne(){Re.start()}const Re=new Jo;Re.setAnimationLoop(_e),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(y){ee=y,Vt.setAnimationLoop(y),y===null?Re.stop():Re.start()},Vt.addEventListener("sessionstart",Ce),Vt.addEventListener("sessionend",ne),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(D),D=Vt.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,D,C),m=Tt.get(y,E.length),m.init(),E.push(m),gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(gt),rt=this.localClippingEnabled,K=kt.init(this.clippingPlanes,rt),g=dt.get(y,d.length),g.init(),d.push(g),Je(y,D,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(q,Z),this.info.render.frame++,K===!0&&kt.beginShadows();const G=m.state.shadowsArray;if(J.render(G,y,D),K===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(g,y),m.setupLights(M._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let O=0,ut=z.length;O<ut;O++){const xt=z[O];Hr(g,y,xt,xt.viewport)}}else Hr(g,y,D);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),y.isScene===!0&&y.onAfterRender(M,y,D),Ot.resetDefaultState(),W=-1,x=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Je(y,D,G,z){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||V.intersectsSprite(y)){z&&Ft.setFromMatrixPosition(y.matrixWorld).applyMatrix4(gt);const xt=et.update(y),Et=y.material;Et.visible&&g.push(y,xt,Et,G,Ft.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||V.intersectsObject(y))){const xt=et.update(y),Et=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ft.copy(y.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ft.copy(xt.boundingSphere.center)),Ft.applyMatrix4(y.matrixWorld).applyMatrix4(gt)),Array.isArray(Et)){const Rt=xt.groups;for(let Ht=0,Dt=Rt.length;Ht<Dt;Ht++){const Nt=Rt[Ht],fe=Et[Nt.materialIndex];fe&&fe.visible&&g.push(y,xt,fe,G,Ft.z,Nt)}}else Et.visible&&g.push(y,xt,Et,G,Ft.z,null)}}const ut=y.children;for(let xt=0,Et=ut.length;xt<Et;xt++)Je(ut[xt],D,G,z)}function Hr(y,D,G,z){const O=y.opaque,ut=y.transmissive,xt=y.transparent;m.setupLightsView(G),K===!0&&kt.setGlobalState(M.clippingPlanes,G),ut.length>0&&uc(O,ut,D,G),z&&_t.viewport(T.copy(z)),O.length>0&&Xi(O,D,G),ut.length>0&&Xi(ut,D,G),xt.length>0&&Xi(xt,D,G),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function uc(y,D,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const ut=It.isWebGL2;pt===null&&(pt=new Xn(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?Hi:bn,minFilter:ki,samples:ut?4:0})),M.getDrawingBufferSize(Ut),ut?pt.setSize(Ut.x,Ut.y):pt.setSize(Rr(Ut.x),Rr(Ut.y));const xt=M.getRenderTarget();M.setRenderTarget(pt),M.getClearColor(Y),P=M.getClearAlpha(),P<1&&M.setClearColor(16777215,.5),M.clear();const Et=M.toneMapping;M.toneMapping=Tn,Xi(y,G,z),S.updateMultisampleRenderTarget(pt),S.updateRenderTargetMipmap(pt);let Rt=!1;for(let Ht=0,Dt=D.length;Ht<Dt;Ht++){const Nt=D[Ht],fe=Nt.object,Oe=Nt.geometry,ve=Nt.material,sn=Nt.group;if(ve.side===ke&&fe.layers.test(z.layers)){const oe=ve.side;ve.side=Ue,ve.needsUpdate=!0,Vr(fe,G,z,Oe,ve,sn),ve.side=oe,ve.needsUpdate=!0,Rt=!0}}Rt===!0&&(S.updateMultisampleRenderTarget(pt),S.updateRenderTargetMipmap(pt)),M.setRenderTarget(xt),M.setClearColor(Y,P),M.toneMapping=Et}function Xi(y,D,G){const z=D.isScene===!0?D.overrideMaterial:null;for(let O=0,ut=y.length;O<ut;O++){const xt=y[O],Et=xt.object,Rt=xt.geometry,Ht=z===null?xt.material:z,Dt=xt.group;Et.layers.test(G.layers)&&Vr(Et,D,G,Rt,Ht,Dt)}}function Vr(y,D,G,z,O,ut){y.onBeforeRender(M,D,G,z,O,ut),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(M,D,G,z,y,ut),O.transparent===!0&&O.side===ke&&O.forceSinglePass===!1?(O.side=Ue,O.needsUpdate=!0,M.renderBufferDirect(G,D,z,O,y,ut),O.side=Cn,O.needsUpdate=!0,M.renderBufferDirect(G,D,z,O,y,ut),O.side=ke):M.renderBufferDirect(G,D,z,O,y,ut),y.onAfterRender(M,D,G,z,O,ut)}function qi(y,D,G){D.isScene!==!0&&(D=bt);const z=zt.get(y),O=m.state.lights,ut=m.state.shadowsArray,xt=O.state.version,Et=vt.getParameters(y,O.state,ut,D,G),Rt=vt.getProgramCacheKey(Et);let Ht=z.programs;z.environment=y.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(y.isMeshStandardMaterial?B:v).get(y.envMap||z.environment),Ht===void 0&&(y.addEventListener("dispose",lt),Ht=new Map,z.programs=Ht);let Dt=Ht.get(Rt);if(Dt!==void 0){if(z.currentProgram===Dt&&z.lightsStateVersion===xt)return Xr(y,Et),Dt}else Et.uniforms=vt.getUniforms(y),y.onBuild(G,Et,M),y.onBeforeCompile(Et,M),Dt=vt.acquireProgram(Et,Rt),Ht.set(Rt,Dt),z.uniforms=Et.uniforms;const Nt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Nt.clippingPlanes=kt.uniform),Xr(y,Et),z.needsLights=pc(y),z.lightsStateVersion=xt,z.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Dt,z.uniformsList=null,Dt}function Wr(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=xs.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Xr(y,D){const G=zt.get(y);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function dc(y,D,G,z,O){D.isScene!==!0&&(D=bt),S.resetTextureUnits();const ut=D.fog,xt=z.isMeshStandardMaterial?D.environment:null,Et=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:pn,Rt=(z.isMeshStandardMaterial?B:v).get(z.envMap||xt),Ht=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Dt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Nt=!!G.morphAttributes.position,fe=!!G.morphAttributes.normal,Oe=!!G.morphAttributes.color;let ve=Tn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=M.toneMapping);const sn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=sn!==void 0?sn.length:0,Wt=zt.get(z),Ds=m.state.lights;if(K===!0&&(rt===!0||y!==x)){const He=y===x&&z.id===W;kt.setState(z,y,He)}let le=!1;z.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Ds.state.version||Wt.outputColorSpace!==Et||O.isBatchedMesh&&Wt.batching===!1||!O.isBatchedMesh&&Wt.batching===!0||O.isInstancedMesh&&Wt.instancing===!1||!O.isInstancedMesh&&Wt.instancing===!0||O.isSkinnedMesh&&Wt.skinning===!1||!O.isSkinnedMesh&&Wt.skinning===!0||O.isInstancedMesh&&Wt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Wt.instancingColor===!1&&O.instanceColor!==null||Wt.envMap!==Rt||z.fog===!0&&Wt.fog!==ut||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==kt.numPlanes||Wt.numIntersection!==kt.numIntersection)||Wt.vertexAlphas!==Ht||Wt.vertexTangents!==Dt||Wt.morphTargets!==Nt||Wt.morphNormals!==fe||Wt.morphColors!==Oe||Wt.toneMapping!==ve||It.isWebGL2===!0&&Wt.morphTargetsCount!==oe)&&(le=!0):(le=!0,Wt.__version=z.version);let Pn=Wt.currentProgram;le===!0&&(Pn=qi(z,D,O));let qr=!1,Ei=!1,Us=!1;const we=Pn.getUniforms(),Ln=Wt.uniforms;if(_t.useProgram(Pn.program)&&(qr=!0,Ei=!0,Us=!0),z.id!==W&&(W=z.id,Ei=!0),qr||x!==y){we.setValue(F,"projectionMatrix",y.projectionMatrix),we.setValue(F,"viewMatrix",y.matrixWorldInverse);const He=we.map.cameraPosition;He!==void 0&&He.setValue(F,Ft.setFromMatrixPosition(y.matrixWorld)),It.logarithmicDepthBuffer&&we.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&we.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Ei=!0,Us=!0)}if(O.isSkinnedMesh){we.setOptional(F,O,"bindMatrix"),we.setOptional(F,O,"bindMatrixInverse");const He=O.skeleton;He&&(It.floatVertexTextures?(He.boneTexture===null&&He.computeBoneTexture(),we.setValue(F,"boneTexture",He.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(we.setOptional(F,O,"batchingTexture"),we.setValue(F,"batchingTexture",O._matricesTexture,S));const Ns=G.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0&&It.isWebGL2===!0)&&qt.update(O,G,Pn),(Ei||Wt.receiveShadow!==O.receiveShadow)&&(Wt.receiveShadow=O.receiveShadow,we.setValue(F,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ln.envMap.value=Rt,Ln.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Ei&&(we.setValue(F,"toneMappingExposure",M.toneMappingExposure),Wt.needsLights&&fc(Ln,Us),ut&&z.fog===!0&&ht.refreshFogUniforms(Ln,ut),ht.refreshMaterialUniforms(Ln,z,$,H,pt),xs.upload(F,Wr(Wt),Ln,S)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xs.upload(F,Wr(Wt),Ln,S),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&we.setValue(F,"center",O.center),we.setValue(F,"modelViewMatrix",O.modelViewMatrix),we.setValue(F,"normalMatrix",O.normalMatrix),we.setValue(F,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const He=z.uniformsGroups;for(let Fs=0,mc=He.length;Fs<mc;Fs++)if(It.isWebGL2){const Yr=He[Fs];jt.update(Yr,Pn),jt.bind(Yr,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function fc(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function pc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(y,D,G){zt.get(y.texture).__webglTexture=D,zt.get(y.depthTexture).__webglTexture=G;const z=zt.get(y);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=G===void 0,z.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,D){const G=zt.get(y);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,G=0){C=y,I=D,A=G;let z=!0,O=null,ut=!1,xt=!1;if(y){const Rt=zt.get(y);Rt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(F.FRAMEBUFFER,null),z=!1):Rt.__webglFramebuffer===void 0?S.setupRenderTarget(y):Rt.__hasExternalTextures&&S.rebindTextures(y,zt.get(y.texture).__webglTexture,zt.get(y.depthTexture).__webglTexture);const Ht=y.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(xt=!0);const Dt=zt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?O=Dt[D][G]:O=Dt[D],ut=!0):It.isWebGL2&&y.samples>0&&S.useMultisampledRTT(y)===!1?O=zt.get(y).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[G]:O=Dt,T.copy(y.viewport),U.copy(y.scissor),k=y.scissorTest}else T.copy(j).multiplyScalar($).floor(),U.copy(nt).multiplyScalar($).floor(),k=it;if(_t.bindFramebuffer(F.FRAMEBUFFER,O)&&It.drawBuffers&&z&&_t.drawBuffers(y,O),_t.viewport(T),_t.scissor(U),_t.setScissorTest(k),ut){const Rt=zt.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,Rt.__webglTexture,G)}else if(xt){const Rt=zt.get(y.texture),Ht=D||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,G||0,Ht)}W=-1},this.readRenderTargetPixels=function(y,D,G,z,O,ut,xt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=zt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xt!==void 0&&(Et=Et[xt]),Et){_t.bindFramebuffer(F.FRAMEBUFFER,Et);try{const Rt=y.texture,Ht=Rt.format,Dt=Rt.type;if(Ht!==je&&ft.convert(Ht)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=Dt===Hi&&(St.has("EXT_color_buffer_half_float")||It.isWebGL2&&St.has("EXT_color_buffer_float"));if(Dt!==bn&&ft.convert(Dt)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Dt===wn&&(It.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-z&&G>=0&&G<=y.height-O&&F.readPixels(D,G,z,O,ft.convert(Ht),ft.convert(Dt),ut)}finally{const Rt=C!==null?zt.get(C).__webglFramebuffer:null;_t.bindFramebuffer(F.FRAMEBUFFER,Rt)}}},this.copyFramebufferToTexture=function(y,D,G=0){const z=Math.pow(2,-G),O=Math.floor(D.image.width*z),ut=Math.floor(D.image.height*z);S.setTexture2D(D,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,y.x,y.y,O,ut),_t.unbindTexture()},this.copyTextureToTexture=function(y,D,G,z=0){const O=D.image.width,ut=D.image.height,xt=ft.convert(G.format),Et=ft.convert(G.type);S.setTexture2D(G,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment),D.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,y.x,y.y,O,ut,xt,Et,D.image.data):D.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,y.x,y.y,D.mipmaps[0].width,D.mipmaps[0].height,xt,D.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,z,y.x,y.y,xt,Et,D.image),z===0&&G.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(y,D,G,z,O=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ut=y.max.x-y.min.x+1,xt=y.max.y-y.min.y+1,Et=y.max.z-y.min.z+1,Rt=ft.convert(z.format),Ht=ft.convert(z.type);let Dt;if(z.isData3DTexture)S.setTexture3D(z,0),Dt=F.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)S.setTexture2DArray(z,0),Dt=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const Nt=F.getParameter(F.UNPACK_ROW_LENGTH),fe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Oe=F.getParameter(F.UNPACK_SKIP_PIXELS),ve=F.getParameter(F.UNPACK_SKIP_ROWS),sn=F.getParameter(F.UNPACK_SKIP_IMAGES),oe=G.isCompressedTexture?G.mipmaps[O]:G.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,oe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,y.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,y.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,y.min.z),G.isDataTexture||G.isData3DTexture?F.texSubImage3D(Dt,O,D.x,D.y,D.z,ut,xt,Et,Rt,Ht,oe.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Dt,O,D.x,D.y,D.z,ut,xt,Et,Rt,oe.data)):F.texSubImage3D(Dt,O,D.x,D.y,D.z,ut,xt,Et,Rt,Ht,oe),F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Oe),F.pixelStorei(F.UNPACK_SKIP_ROWS,ve),F.pixelStorei(F.UNPACK_SKIP_IMAGES,sn),O===0&&z.generateMipmaps&&F.generateMipmap(Dt),_t.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?S.setTextureCube(y,0):y.isData3DTexture?S.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?S.setTexture2DArray(y,0):S.setTexture2D(y,0),_t.unbindTexture()},this.resetState=function(){I=0,A=0,C=null,_t.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ur?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Rs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?Vn:Bo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Vn?ye:pn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class yp extends ac{}yp.prototype.isWebGL1Renderer=!0;class Br{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new Br(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sp extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class wp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=br,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new b;class As{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new As(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gr extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let li;const Ri=new b,hi=new b,ui=new b,di=new mt,Pi=new mt,oc=new de,ms=new b,Li=new b,gs=new b,po=new mt,pr=new mt,mo=new mt;class Fi extends Se{constructor(t=new Gr){if(super(),this.isSprite=!0,this.type="Sprite",li===void 0){li=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wp(e,5);li.setIndex([0,1,2,0,2,3]),li.setAttribute("position",new As(n,3,0,!1)),li.setAttribute("uv",new As(n,2,3,!1))}this.geometry=li,this.material=t,this.center=new mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hi.setFromMatrixScale(this.matrixWorld),oc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ui.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hi.multiplyScalar(-ui.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;_s(ms.set(-.5,-.5,0),ui,o,hi,i,r),_s(Li.set(.5,-.5,0),ui,o,hi,i,r),_s(gs.set(.5,.5,0),ui,o,hi,i,r),po.set(0,0),pr.set(1,0),mo.set(1,1);let a=t.ray.intersectTriangle(ms,Li,gs,!1,Ri);if(a===null&&(_s(Li.set(-.5,.5,0),ui,o,hi,i,r),pr.set(0,1),a=t.ray.intersectTriangle(ms,gs,Li,!1,Ri),a===null))return;const c=t.ray.origin.distanceTo(Ri);c<t.near||c>t.far||e.push({distance:c,point:Ri.clone(),uv:We.getInterpolation(Ri,ms,Li,gs,po,pr,mo,new mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _s(s,t,e,n,i,r){di.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Pi.x=r*di.x-i*di.y,Pi.y=i*di.x+r*di.y):Pi.copy(di),s.copy(t),s.x+=Pi.x,s.y+=Pi.y,s.applyMatrix4(oc)}class nn extends Ne{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new mt:new b);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new b,i=[],r=[],o=[],a=new b,c=new de;for(let p=0;p<=t;p++){const _=p/t;i[p]=this.getTangentAt(_,new b)}r[0]=new b,o[0]=new b;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(be(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,_))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(be(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],p*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cc extends mn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new mt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ep extends cc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zr(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const vs=new b,mr=new zr,gr=new zr,_r=new zr;class Ms extends mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new b){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(vs.subVectors(i[0],i[1]).add(i[0]),l=vs);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(vs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),mr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,_,g,m),gr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,_,g,m),_r.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(mr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),gr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),_r.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(mr.calc(c),gr.calc(c),_r.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new b().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function go(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Tp(s,t){const e=1-s;return e*e*t}function bp(s,t){return 2*(1-s)*s*t}function Ap(s,t){return s*s*t}function Bi(s,t,e,n){return Tp(s,t)+bp(s,e)+Ap(s,n)}function Cp(s,t){const e=1-s;return e*e*e*t}function Rp(s,t){const e=1-s;return 3*e*e*s*t}function Pp(s,t){return 3*(1-s)*s*s*t}function Lp(s,t){return s*s*s*t}function Gi(s,t,e,n,i){return Cp(s,t)+Rp(s,e)+Pp(s,n)+Lp(s,i)}class Ip extends mn{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gi(t,i.x,r.x,o.x,a.x),Gi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dp extends mn{constructor(t=new b,e=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new b){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gi(t,i.x,r.x,o.x,a.x),Gi(t,i.y,r.y,o.y,a.y),Gi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Up extends mn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Np extends mn{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fp extends mn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Bi(t,i.x,r.x,o.x),Bi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lc extends mn{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Bi(t,i.x,r.x,o.x),Bi(t,i.y,r.y,o.y),Bi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Op extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(go(a,c.x,l.x,h.x,u.x),go(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new mt().fromArray(i))}return this}}var Bp=Object.freeze({__proto__:null,ArcCurve:Ep,CatmullRomCurve3:Ms,CubicBezierCurve:Ip,CubicBezierCurve3:Dp,EllipseCurve:cc,LineCurve:Up,LineCurve3:Np,QuadraticBezierCurve:Fp,QuadraticBezierCurve3:lc,SplineCurve:Op});class Rn extends Fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new b,h=new mt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(a,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class st extends Fe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let _=0;const g=[],m=n/2;let d=0;E(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(p,2));function E(){const w=new b,I=new b;let A=0;const C=(e-t)/n;for(let W=0;W<=r;W++){const x=[],T=W/r,U=T*(e-t)+t;for(let k=0;k<=i;k++){const Y=k/i,P=Y*c+a,N=Math.sin(P),H=Math.cos(P);I.x=U*N,I.y=-T*n+m,I.z=U*H,u.push(I.x,I.y,I.z),w.set(N,C,H).normalize(),f.push(w.x,w.y,w.z),p.push(Y,1-T),x.push(_++)}g.push(x)}for(let W=0;W<i;W++)for(let x=0;x<r;x++){const T=g[x][W],U=g[x+1][W],k=g[x+1][W+1],Y=g[x][W+1];h.push(T,U,Y),h.push(U,k,Y),A+=6}l.addGroup(d,A,0),d+=A}function M(w){const I=_,A=new mt,C=new b;let W=0;const x=w===!0?t:e,T=w===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),_++;const U=_;for(let k=0;k<=i;k++){const P=k/i*c+a,N=Math.cos(P),H=Math.sin(P);C.x=x*H,C.y=m*T,C.z=x*N,u.push(C.x,C.y,C.z),f.push(0,T,0),A.x=N*.5+.5,A.y=H*.5*T+.5,p.push(A.x,A.y),_++}for(let k=0;k<i;k++){const Y=I+k,P=U+k;w===!0?h.push(P,P+1,Y):h.push(P+1,P,Y),W+=3}l.addGroup(d,W,w===!0?1:2),d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new st(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wn extends st{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Wn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Is extends Fe{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,p=new b,_=new mt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let g=0;g<i;g++){const m=g*(n+1);for(let d=0;d<n;d++){const E=d+m,M=E,w=E+n+1,I=E+n+2,A=E+1;a.push(M,w,A),a.push(w,I,A)}}this.setIndex(a),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Gt extends Fe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new b,f=new b,p=[],_=[],g=[],m=[];for(let d=0;d<=n;d++){const E=[],M=d/n;let w=0;d===0&&o===0?w=.5/e:d===n&&c===Math.PI&&(w=-.5/e);for(let I=0;I<=e;I++){const A=I/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(A+w,1-M),E.push(l++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const M=h[d][E+1],w=h[d][E],I=h[d+1][E],A=h[d+1][E+1];(d!==0||o>0)&&p.push(M,w,A),(d!==n-1||c<Math.PI)&&p.push(w,I,A)}this.setIndex(p),this.setAttribute("position",new se(_,3)),this.setAttribute("normal",new se(g,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ue extends Fe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new b,u=new b,f=new b;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const g=_/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(_/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const g=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,d=(i+1)*(p-1)+_,E=(i+1)*p+_;o.push(g,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class zi extends Fe{constructor(t=new lc(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new b,c=new b,l=new mt;let h=new b;const u=[],f=[],p=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(p,2));function g(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),E(),d()}function m(M){h=t.getPointAt(M/e,h);const w=o.normals[M],I=o.binormals[M];for(let A=0;A<=i;A++){const C=A/i*Math.PI*2,W=Math.sin(C),x=-Math.cos(C);c.x=x*w.x+W*I.x,c.y=x*w.y+W*I.y,c.z=x*w.z+W*I.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function d(){for(let M=1;M<=e;M++)for(let w=1;w<=i;w++){const I=(i+1)*(M-1)+(w-1),A=(i+1)*M+(w-1),C=(i+1)*M+w,W=(i+1)*(M-1)+w;_.push(I,A,W),_.push(A,C,W)}}function E(){for(let M=0;M<=e;M++)for(let w=0;w<=i;w++)l.x=M/e,l.y=w/i,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new zi(new Bp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class X extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kr extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const vr=new de,_o=new b,vo=new b;class hc{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_o.setFromMatrixPosition(t.matrixWorld),e.position.copy(_o),vo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vo),e.updateMatrixWorld(),vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xo=new de,Ii=new b,xr=new b;class Gp extends hc{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ii.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ii),xr.copy(n.position),xr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xr),n.updateMatrixWorld(),i.makeTranslation(-Ii.x,-Ii.y,-Ii.z),xo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xo)}}class zp extends kr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kp extends hc{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hp extends kr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new kp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vp extends kr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ir);const Lr={faster_espresso:{id:"faster_espresso",name:"Turbo Espresso Boiler",icon:"⚡☕",cost:45,description:"Upgraded Italian steam pump reduces espresso brew time by 40% (1.8s -> 1.0s)."},faster_blender:{id:"faster_blender",name:"Pro High-Torque Blender",icon:"⚡🥤",cost:50,description:"Heavy-duty commercial blades blend smoothies and matcha 40% faster (1.6s -> 0.9s)."},triple_tray:{id:"triple_tray",name:"Deluxe 3-Slot Serving Tray",icon:"🍱",cost:80,description:"Upgrades Latte's tray capacity from 2 items to 3 items for larger multi-item deliveries."},golden_jar:{id:"golden_jar",name:"Golden Tip Jar",icon:"🏺✨",cost:65,description:"Polished brass & gold coin jar increases customer tip amounts by 25%."},speedy_boots:{id:"speedy_boots",name:"Barista Cushioned Sneakers",icon:"👟",cost:40,description:"Ultra-cushioned cafe kicks increase Latte's movement and sprint speed by 15%."},fairy_lights:{id:"fairy_lights",name:"Cozy Fairy String Lights",icon:"✨💡",cost:55,description:"Strings of warm glowing amber fairy bulbs draped across the cafe ceiling beams."},cat_bed:{id:"cat_bed",name:"Mocha's Velvet Cat Cushion",icon:"🛋️🐱",cost:45,description:"Plush golden-trimmed burgundy velvet sleeping cushion placed by the sunny front window."},flower_boxes:{id:"flower_boxes",name:"Window Bloom Planters",icon:"🌸🌿",cost:60,description:"Lush blooming botanical flower planter boxes installed along the cafe front glass windows."},lofi_jukebox:{id:"lofi_jukebox",name:"Vintage Vinyl Lofi Jukebox",icon:"📻🎶",cost:65,description:"Handcrafted retro wood & brass jukebox with interactive track switching (Sunny, Rainy & Lofi vibes)."}},Mr="cozy_cafe_3d_save_v1";class Wp{constructor(){this.data=this.getDefaultData(),this.listeners=new Set,this.load()}getDefaultData(){return{version:1,career:{totalEarnings:0,totalTips:0,ordersServed:0,highestTip:0,catsPet:0,currentBalance:0},settings:{masterVolume:.7,bgmVolume:.25,sfxVolume:.8,cameraSensitivity:1,highQualityShadows:!0},upgrades:{faster_espresso:!1,faster_blender:!1,triple_tray:!1,golden_jar:!1,speedy_boots:!1,fairy_lights:!1,cat_bed:!1,flower_boxes:!1,lofi_jukebox:!1}}}load(){try{const t=localStorage.getItem(Mr);if(!t)return;const e=JSON.parse(t);e&&typeof e=="object"&&(e.career&&Object.assign(this.data.career,e.career),e.settings&&Object.assign(this.data.settings,e.settings),e.upgrades&&Object.assign(this.data.upgrades,e.upgrades))}catch(t){console.warn("Could not load save data from localStorage:",t)}}save(){try{localStorage.setItem(Mr,JSON.stringify(this.data)),this.notifyListeners()}catch(t){console.warn("Could not save data to localStorage:",t)}}resetAll(){this.data=this.getDefaultData();try{localStorage.removeItem(Mr)}catch(t){console.warn("Error clearing localStorage:",t)}this.notifyListeners()}recordOrderCompleted(t,e){this.data.career.totalEarnings+=t,this.data.career.totalTips+=e,this.data.career.currentBalance+=t,this.data.career.ordersServed+=1,e>this.data.career.highestTip&&(this.data.career.highestTip=e),this.save()}recordCatPet(t=1.5){this.data.career.catsPet+=1,this.data.career.totalEarnings+=t,this.data.career.totalTips+=t,this.data.career.currentBalance+=t,this.save()}hasUpgrade(t){return!!this.data.upgrades[t]}canAffordUpgrade(t){const e=Lr[t];return e?this.data.career.currentBalance>=e.cost&&!this.hasUpgrade(t):!1}purchaseUpgrade(t){const e=Lr[t];return!e||!this.canAffordUpgrade(t)?!1:(this.data.career.currentBalance-=e.cost,this.data.upgrades[t]=!0,this.save(),!0)}updateSettings(t){Object.assign(this.data.settings,t),this.save()}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notifyListeners(){for(const t of this.listeners)try{t(this.data)}catch(e){console.error("SaveManager listener error:",e)}}}const Pt=new Wp,Di=[{name:"Cozy Afternoon",tempo:3600,filterCutoff:700,chords:[[261.63,329.63,392,493.88],[220,261.63,329.63,392],[146.83,220,261.63,349.23],[196,246.94,293.66,349.23]]},{name:"Sunny Morning",tempo:3200,filterCutoff:850,chords:[[349.23,440,523.25,659.25],[329.63,392,493.88,587.33],[293.66,349.23,440,523.25],[261.63,329.63,392,523.25]]},{name:"Rainy Cafe Chill",tempo:4e3,filterCutoff:580,chords:[[146.83,220,261.63,349.23],[196,233.08,293.66,349.23],[233.08,293.66,349.23,440],[220,277.18,329.63,392]]}];class Xp{constructor(){this.ctx=null,this.compressor=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.bgmPlaying=!1,this.bgmTimer=null,this.currentTrackIndex=0,Pt.subscribe(t=>{t&&t.settings&&(this.setMasterVolume(t.settings.masterVolume),this.setBGMVolume(t.settings.bgmVolume),this.setSFXVolume(t.settings.sfxVolume))})}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-12,this.ctx.currentTime),this.compressor.knee.setValueAtTime(18,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(10,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.003,this.ctx.currentTime),this.compressor.release.setValueAtTime(.2,this.ctx.currentTime),this.compressor.connect(this.ctx.destination),this.masterGain=this.ctx.createGain();const e=Pt.data.settings.masterVolume??.7;this.masterGain.gain.setValueAtTime(e,this.ctx.currentTime),this.masterGain.connect(this.compressor),this.sfxGain=this.ctx.createGain();const n=Pt.data.settings.sfxVolume??.8;this.sfxGain.gain.setValueAtTime(n,this.ctx.currentTime),this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain();const i=Pt.data.settings.bgmVolume??.25;this.musicGain.gain.setValueAtTime(i,this.ctx.currentTime),this.musicGain.connect(this.masterGain),this.startBGM()}setMasterVolume(t){this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(Math.max(0,Math.min(1,t)),this.ctx.currentTime)}setSFXVolume(t){this.sfxGain&&this.ctx&&this.sfxGain.gain.setValueAtTime(Math.max(0,Math.min(1,t)),this.ctx.currentTime)}setBGMVolume(t){this.musicGain&&this.ctx&&this.musicGain.gain.setValueAtTime(Math.max(0,Math.min(1,t)),this.ctx.currentTime)}playOrderBell(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1760,t),e.frequency.exponentialRampToValueAtTime(1750,t+1.2),n.gain.setValueAtTime(.6,t),n.gain.exponentialRampToValueAtTime(.001,t+1.2),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+1.2);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(3520,t),r.gain.setValueAtTime(.2,t),r.gain.exponentialRampToValueAtTime(.001,t+.6),i.connect(r),r.connect(this.sfxGain),i.start(t),i.stop(t+.6)}playDoorChime(){if(!this.ctx)return;const t=this.ctx.currentTime;[1046.5,1318.5].forEach((n,i)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain(),a=t+i*.15;r.type="triangle",r.frequency.setValueAtTime(n,a),o.gain.setValueAtTime(0,a),o.gain.linearRampToValueAtTime(.4,a+.02),o.gain.exponentialRampToValueAtTime(.001,a+1),r.connect(o),o.connect(this.sfxGain),r.start(a),r.stop(a+1)})}playCashRegister(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(1975.53,t),n.gain.setValueAtTime(.5,t),n.gain.exponentialRampToValueAtTime(.001,t+.8),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.8);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(2637.02,t+.08),r.gain.setValueAtTime(.6,t+.08),r.gain.exponentialRampToValueAtTime(.001,t+1),i.connect(r),r.connect(this.sfxGain),i.start(t+.08),i.stop(t+1);for(let o=0;o<3;o++){const a=this.ctx.createOscillator(),c=this.ctx.createGain(),l=t+.12+o*.06;a.type="triangle",a.frequency.setValueAtTime(3e3+Math.random()*800,l),c.gain.setValueAtTime(.3,l),c.gain.exponentialRampToValueAtTime(.001,l+.2),a.connect(c),c.connect(this.sfxGain),a.start(l),a.stop(l+.2)}}playEspressoBrew(){if(!this.ctx)return;const t=this.ctx.currentTime,e=2,n=Math.floor(this.ctx.sampleRate*e),i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=i.getChannelData(0);for(let f=0;f<n;f++)r[f]=Math.random()*2-1;const o=this.ctx.createBufferSource();o.buffer=i;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(800,t),a.frequency.linearRampToValueAtTime(1400,t+e*.5),a.frequency.linearRampToValueAtTime(600,t+e),a.Q.setValueAtTime(3,t);const c=this.ctx.createGain();c.gain.setValueAtTime(.01,t),c.gain.linearRampToValueAtTime(.4,t+.3),c.gain.linearRampToValueAtTime(.35,t+e-.3),c.gain.linearRampToValueAtTime(.001,t+e),o.connect(a),a.connect(c),c.connect(this.sfxGain),o.start(t),o.stop(t+e);const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="sawtooth",l.frequency.setValueAtTime(110,t),h.gain.setValueAtTime(.12,t),h.gain.exponentialRampToValueAtTime(.001,t+e);const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(280,t),l.connect(u),u.connect(h),h.connect(this.sfxGain),l.start(t),l.stop(t+e)}playBlender(){if(!this.ctx)return;const t=this.ctx.currentTime,e=1.8,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(160,t),n.frequency.linearRampToValueAtTime(340,t+.6),n.frequency.linearRampToValueAtTime(300,t+1.4),n.frequency.linearRampToValueAtTime(80,t+e);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(600,t),i.gain.setValueAtTime(.01,t),i.gain.linearRampToValueAtTime(.3,t+.2),i.gain.linearRampToValueAtTime(.25,t+e-.2),i.gain.linearRampToValueAtTime(.001,t+e),n.connect(r),r.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+e)}playItemPickup(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(880,t+.1),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.001,t+.12),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.12)}playTrash(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(320,t),e.frequency.exponentialRampToValueAtTime(80,t+.2),n.gain.setValueAtTime(.4,t),n.gain.exponentialRampToValueAtTime(.001,t+.22),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.22)}playStep(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(140+Math.random()*30,t),e.frequency.exponentialRampToValueAtTime(40,t+.06),n.gain.setValueAtTime(.12,t),n.gain.exponentialRampToValueAtTime(.001,t+.07),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.07)}playCatMeow(){if(!this.ctx)return;const t=this.ctx.currentTime,e=.65,n=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createBiquadFilter();n.type="sine",n.frequency.setValueAtTime(440,t),n.frequency.exponentialRampToValueAtTime(740,t+.18),n.frequency.exponentialRampToValueAtTime(390,t+e),r.type="bandpass",r.frequency.setValueAtTime(900,t),r.frequency.linearRampToValueAtTime(1400,t+.2),r.frequency.linearRampToValueAtTime(750,t+e),r.Q.setValueAtTime(3.5,t),i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.35,t+.05),i.gain.linearRampToValueAtTime(.28,t+.35),i.gain.exponentialRampToValueAtTime(.001,t+e);const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.frequency.setValueAtTime(5.8,t),a.gain.setValueAtTime(12,t),o.connect(n.frequency),n.connect(r),r.connect(i),i.connect(this.sfxGain),o.start(t+.12),o.stop(t+e),n.start(t),n.stop(t+e)}playCatPurr(){if(!this.ctx)return;const t=this.ctx.currentTime,e=1.8,n=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createBiquadFilter();n.type="triangle",n.frequency.setValueAtTime(56,t),r.type="lowpass",r.frequency.setValueAtTime(160,t),r.Q.setValueAtTime(2,t);const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(23,t),a.gain.setValueAtTime(.18,t);const c=this.ctx.createGain();c.gain.setValueAtTime(.01,t),c.gain.linearRampToValueAtTime(.32,t+.2),c.gain.linearRampToValueAtTime(.28,t+e-.3),c.gain.exponentialRampToValueAtTime(.001,t+e),o.connect(a),a.connect(i.gain),n.connect(r),r.connect(c),c.connect(i),i.connect(this.sfxGain),o.start(t),o.stop(t+e),n.start(t),n.stop(t+e)}playCustomerGreet(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(440,t),e.frequency.exponentialRampToValueAtTime(659.25,t+.15),n.gain.setValueAtTime(.15,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.25)}playCustomerCheer(){if(!this.ctx)return;const t=this.ctx.currentTime;[523.25,659.25,783.99].forEach((n,i)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain(),a=t+i*.08;r.type="triangle",r.frequency.setValueAtTime(n,a),r.frequency.exponentialRampToValueAtTime(n*1.05,a+.25),o.gain.setValueAtTime(.25,a),o.gain.exponentialRampToValueAtTime(.001,a+.3),r.connect(o),o.connect(this.sfxGain),r.start(a),r.stop(a+.3)})}startBGM(){if(this.bgmPlaying||!this.ctx)return;this.bgmPlaying=!0;const t=Di[this.currentTrackIndex]||Di[0],e=t.chords,n=t.tempo||3600,i=t.filterCutoff||700;let r=0;const o=()=>{if(!this.bgmPlaying||!this.ctx)return;const a=this.ctx.currentTime,c=e[r];r=(r+1)%e.length,c.forEach((l,h)=>{const u=this.ctx.createOscillator(),f=this.ctx.createGain(),p=this.ctx.createBiquadFilter();u.type="triangle",u.frequency.setValueAtTime(l,a+h*.04),p.type="lowpass",p.frequency.setValueAtTime(i,a),p.frequency.exponentialRampToValueAtTime(i*.5,a+3),f.gain.setValueAtTime(0,a+h*.04),f.gain.linearRampToValueAtTime(.08,a+h*.04+.08),f.gain.exponentialRampToValueAtTime(.001,a+3.4),u.connect(p),p.connect(f),f.connect(this.musicGain),u.start(a+h*.04),u.stop(a+3.5)}),this.bgmTimer=setTimeout(o,n)};o()}nextTrack(){return this.currentTrackIndex=(this.currentTrackIndex+1)%Di.length,this.stopBGM(),this.ctx&&this.startBGM(),Di[this.currentTrackIndex]}getCurrentTrack(){return Di[this.currentTrackIndex]}stopBGM(){this.bgmPlaying=!1,this.bgmTimer&&(clearTimeout(this.bgmTimer),this.bgmTimer=null)}}const Yt=new Xp,he={espresso:{id:"espresso",name:"Hot Espresso",icon:"☕",price:3.5,category:"drink",station:"coffee_machine",color:"#3e2723"},latte:{id:"latte",name:"Vanilla Latte",icon:"🥛",price:5.5,category:"drink",station:"coffee_machine",color:"#d7ccc8"},caramel_latte:{id:"caramel_latte",name:"Caramel Macchiato",icon:"🍯",price:6,category:"drink",station:"coffee_machine",color:"#d4883b"},iced_matcha:{id:"iced_matcha",name:"Iced Matcha Latte",icon:"🍵",price:5.75,category:"drink",station:"cold_bar",color:"#7cb342"},berry_smoothie:{id:"berry_smoothie",name:"Berry Blast Smoothie",icon:"🥤",price:6.25,category:"drink",station:"cold_bar",color:"#ad1457"},croissant:{id:"croissant",name:"Golden Croissant",icon:"🥐",price:4.25,category:"pastry",station:"pastry_case",color:"#e69138"},donut:{id:"donut",name:"Choco Glazed Donut",icon:"🍩",price:3.75,category:"pastry",station:"pastry_case",color:"#4e342e"},muffin:{id:"muffin",name:"Blueberry Muffin",icon:"🧁",price:4.5,category:"pastry",station:"pastry_case",color:"#8d6e63"},cookie:{id:"cookie",name:"Choc-Chip Cookie",icon:"🍪",price:3.25,category:"pastry",station:"pastry_case",color:"#d4a373"},double_choco_cookie:{id:"double_choco_cookie",name:"Double Choco Cookie",icon:"🍫",price:3.75,category:"pastry",station:"pastry_case",color:"#2e1c14"},cinnamon_roll:{id:"cinnamon_roll",name:"Glazed Cinnamon Roll",icon:"🍥",price:4.75,category:"pastry",station:"pastry_case",color:"#b06d36"},cheesecake:{id:"cheesecake",name:"Strawberry Cheesecake",icon:"🍰",price:5.5,category:"pastry",station:"pastry_case",color:"#f06292"}};function Mo(s){const t=new Mt;switch(s){case"espresso":{const e=new st(.16,.12,.22,16),n=new X({color:16777215,roughness:.2,metalness:.1}),i=new R(e,n);i.position.y=.11,t.add(i);const r=new st(.15,.15,.02,16),o=new X({color:4004870,roughness:.3}),a=new R(r,o);a.position.y=.2,t.add(a);const c=new st(.24,.2,.03,16),l=new R(c,n);l.position.y=.015,t.add(l);const h=new ue(.06,.02,8,16,Math.PI),u=new R(h,n);u.position.set(.16,.12,0),u.rotation.z=-Math.PI/2,t.add(u);break}case"latte":case"caramel_latte":{const e=new st(.22,.18,.32,18),n=new X({color:s==="latte"?16775917:15917257,roughness:.25}),i=new R(e,n);i.position.y=.16,t.add(i);const r=new st(.21,.21,.02,18),o=new X({color:16117468,roughness:.8}),a=new R(r,o);a.position.y=.31,t.add(a);const c=new Rn(.12,16);c.rotateX(-Math.PI/2);const l=new Me({color:s==="latte"?9263948:12610578}),h=new R(c,l);h.position.y=.322,t.add(h);const u=new ue(.09,.028,8,16,Math.PI),f=new R(u,n);f.position.set(.22,.18,0),f.rotation.z=-Math.PI/2,t.add(f);break}case"iced_matcha":case"berry_smoothie":{const e=new st(.22,.16,.42,18),n=new X({color:16777215,transparent:!0,opacity:.45,roughness:.1,metalness:.1}),i=new R(e,n);i.position.y=.21,t.add(i);const r=new st(.2,.15,.38,18),o=s==="iced_matcha"?6856504:14162784,a=new X({color:o,roughness:.4}),c=new R(r,a);c.position.y=.2,t.add(c);const l=new Gt(.23,16,8,0,Math.PI*2,0,Math.PI/2),h=new R(l,n);h.position.y=.41,t.add(h);const u=new st(.02,.02,.58,8),f=s==="iced_matcha"?3046706:15277667,p=new X({color:f,roughness:.3}),_=new R(u,p);_.position.set(.04,.36,.02),_.rotation.z=.18,t.add(_);break}case"croissant":{const e=new X({color:14254635,roughness:.6}),n=new ue(.18,.09,10,18,Math.PI*.85),i=new R(n,e);i.rotation.x=Math.PI/2,i.position.set(0,.09,0),t.add(i);const r=new st(.28,.24,.02,18),o=new X({color:16777215,roughness:.3}),a=new R(r,o);a.position.y=.01,t.add(a);break}case"donut":{const e=new X({color:15049571,roughness:.7}),n=new ue(.16,.08,12,20),i=new R(n,e);i.rotation.x=Math.PI/2,i.position.y=.09,t.add(i);const r=new X({color:4073251,roughness:.25}),o=new ue(.162,.065,10,20,Math.PI*2),a=new R(o,r);a.rotation.x=Math.PI/2,a.position.y=.12,t.add(a);const c=new st(.26,.22,.02,18),l=new X({color:16777215,roughness:.3}),h=new R(c,l);h.position.y=.01,t.add(h);break}case"muffin":{const e=new X({color:16769202,roughness:.8}),n=new st(.16,.12,.16,16),i=new R(n,e);i.position.y=.08,t.add(i);const r=new X({color:9263948,roughness:.9}),o=new Gt(.2,16,12,0,Math.PI*2,0,Math.PI/2),a=new R(o,r);a.position.y=.16,t.add(a);const c=new X({color:1713022,roughness:.4});for(let f=0;f<4;f++){const p=f/4*Math.PI*2+.3,_=new Gt(.035,8,8),g=new R(_,c);g.position.set(Math.cos(p)*.1,.26+Math.random()*.04,Math.sin(p)*.1),t.add(g)}const l=new st(.24,.2,.02,18),h=new X({color:16777215,roughness:.3}),u=new R(l,h);u.position.y=.01,t.add(u);break}case"double_choco_cookie":{const e=new X({color:3021844,roughness:.85}),n=new st(.18,.18,.045,16),i=new R(n,e);i.position.y=.035,t.add(i);const r=new X({color:16775399,roughness:.35}),o=new X({color:6109722,roughness:.4});for(let h=0;h<6;h++){const u=h/6*Math.PI*2+Math.random()*.3,f=new Ct(.045,.03,.045),p=new R(f,h%2===0?r:o);p.position.set(Math.cos(u)*.095,.058,Math.sin(u)*.095),p.rotation.set(Math.random()*.4,Math.random()*Math.PI,Math.random()*.4),t.add(p)}const a=new st(.24,.2,.02,18),c=new X({color:16777215,roughness:.3}),l=new R(a,c);l.position.y=.01,t.add(l);break}case"cinnamon_roll":{const e=new X({color:12221250,roughness:.7}),n=new st(.19,.17,.12,16),i=new R(n,e);i.position.y=.07,t.add(i);const r=new X({color:5122322,roughness:.5}),o=new ue(.12,.025,8,16),a=new R(o,r);a.rotation.x=Math.PI/2,a.position.y=.13,t.add(a);const c=new X({color:16776690,roughness:.2}),l=new ue(.08,.03,8,16),h=new R(l,c);h.rotation.x=Math.PI/2,h.position.y=.145,t.add(h);const u=new st(.26,.22,.02,18),f=new X({color:16777215,roughness:.3}),p=new R(u,f);p.position.y=.01,t.add(p);break}case"cheesecake":{const e=new X({color:9262372,roughness:.9}),n=new X({color:16775917,roughness:.4}),i=new X({color:12720219,roughness:.15}),r=new st(.22,.22,.03,16,1,!1,0,Math.PI*.4),o=new R(r,e);o.position.y=.025,t.add(o);const a=new st(.21,.21,.12,16,1,!1,0,Math.PI*.4),c=new R(a,n);c.position.y=.1,t.add(c);const l=new st(.212,.212,.02,16,1,!1,0,Math.PI*.4),h=new R(l,i);h.position.y=.165,t.add(h);const u=new X({color:13840175,roughness:.3}),f=new Wn(.04,.07,8),p=new R(f,u);p.position.set(.08,.2,.08),p.rotation.z=-.2,t.add(p);const _=new st(.26,.22,.02,18),g=new X({color:16777215,roughness:.3}),m=new R(_,g);m.position.y=.01,t.add(m);break}case"cookie":default:{const e=new X({color:13935475,roughness:.8}),n=new st(.18,.18,.04,16),i=new R(n,e);i.position.y=.03,t.add(i);const r=new X({color:4073251,roughness:.3});for(let l=0;l<5;l++){const h=l/5*Math.PI*2+Math.random()*.4,u=new Ct(.04,.03,.04),f=new R(u,r);f.position.set(Math.cos(h)*.09,.05,Math.sin(h)*.09),f.rotation.y=Math.random(),t.add(f)}const o=new st(.24,.2,.02,18),a=new X({color:16777215,roughness:.3}),c=new R(o,a);c.position.y=.01,t.add(c);break}}return t.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),t}class qp{constructor(t){this.scene=t,this.colliders=[],this.interactiveSpots=[],this.animatedSteam=[],this.stationTicketDisplays=[],this.buildCafe()}addCollider(t,e,n,i,r,o){const a=new b(t-i/2,e-r/2,n-o/2),c=new b(t+i/2,e+r/2,n+o/2);this.colliders.push({min:a,max:c,center:new b(t,e,n),half:new b(i/2,r/2,o/2)})}buildCafe(){this.createMaterials(),this.createStructure(),this.createFrontCounter(),this.createBackKitchen(),this.createDiningArea(),this.createDecorations(),this.createLighting(),this.createDecorUpgrades()}createMaterials(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#6d4327",e.fillRect(0,0,512,512),e.fillStyle="#56351d";for(let a=0;a<512;a+=32){e.fillRect(0,a,512,2);for(let c=a%64===0?0:64;c<512;c+=128)e.fillRect(c,a,2,32)}const n=new nn(t);n.wrapS=zn,n.wrapT=zn,n.repeat.set(6,6),this.floorMat=new X({map:n,roughness:.4,metalness:.05});const i=document.createElement("canvas");i.width=512,i.height=512;const r=i.getContext("2d");r.fillStyle="#7a3e2d",r.fillRect(0,0,512,512),r.fillStyle="#5c2d20";for(let a=0;a<512;a+=24){r.fillRect(0,a,512,3);const c=a/24%2===0?0:32;for(let l=c;l<512;l+=64)r.fillRect(l,a,3,24)}const o=new nn(i);o.wrapS=zn,o.wrapT=zn,o.repeat.set(4,2),this.brickMat=new X({map:o,roughness:.85}),this.marbleMat=new X({color:16118767,roughness:.15,metalness:.1}),this.darkWoodMat=new X({color:4006676,roughness:.6}),this.warmWoodMat=new X({color:10510901,roughness:.5}),this.brassMat=new X({color:13938487,metalness:.85,roughness:.25}),this.steelMat=new X({color:13421772,metalness:.9,roughness:.2}),this.glassMat=new X({color:16777215,transparent:!0,opacity:.35,roughness:.05}),this.tileMat=new X({color:15394527,roughness:.2})}createStructure(){const i=new tn(22,18),r=new R(i,this.floorMat);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,this.scene.add(r);const o=new tn(22,18),a=new X({color:2365458,roughness:.9}),c=new R(o,a);c.rotation.x=Math.PI/2,c.position.y=5.5,this.scene.add(c);const l=new Ct(.35,.4,18);for(let T=-22/2+2.5;T<22/2;T+=3.5){const U=new R(l,this.darkWoodMat);U.position.set(T,5.5-.2,0),this.scene.add(U)}const h=new Ct(22,5.5,.4),u=new R(h,this.brickMat);u.position.set(0,5.5/2,-18/2),u.receiveShadow=!0,this.scene.add(u),this.addCollider(0,5.5/2,-18/2,22,5.5,.6);const f=new Ct(.4,5.5,18),p=new R(f,this.brickMat);p.position.set(-22/2,5.5/2,0),p.receiveShadow=!0,this.scene.add(p),this.addCollider(-22/2,5.5/2,0,.6,5.5,18);const _=new Ct(.4,5.5,18),g=new R(_,this.brickMat);g.position.set(22/2,5.5/2,0),g.receiveShadow=!0,this.scene.add(g),this.addCollider(22/2,5.5/2,0,.6,5.5,18);const m=new R(new Ct(2.5,5.5,.4),this.brickMat);m.position.set(-22/2+1.25,5.5/2,18/2),this.scene.add(m);const d=new R(new Ct(2.5,5.5,.4),this.brickMat);d.position.set(22/2-1.25,5.5/2,18/2),this.scene.add(d);const E=new Ct(17,5.5-1.2,.1),M=new R(E,this.glassMat);M.position.set(0,5.5/2-.2,18/2),this.scene.add(M),this.addCollider(0,5.5/2,18/2,22,5.5,.6);const w=new tn(36,16),I=new X({color:5922660,roughness:.9}),A=new R(w,I);A.rotation.x=-Math.PI/2,A.position.set(0,-.05,18/2+8),this.scene.add(A);const C=new tn(36,4),W=new X({color:12892587,roughness:.7}),x=new R(C,W);x.rotation.x=-Math.PI/2,x.position.set(0,0,18/2+2),this.scene.add(x)}createFrontCounter(){const r=new Ct(10,1.1,1.2),o=new R(r,this.darkWoodMat);o.position.set(3,1.1/2,.5),o.castShadow=!0,o.receiveShadow=!0,this.scene.add(o);const a=new Ct(10+.3,.08,1.2+.3),c=new R(a,this.marbleMat);c.position.set(3,1.1+.04,.5),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);const l=4.5,h=new R(new Ct(1.2,1.1,l),this.darkWoodMat);h.position.set(3+10/2-1.2/2,1.1/2,.5-l/2),h.castShadow=!0,this.scene.add(h);const u=new R(new Ct(1.2+.3,.08,l+.2),this.marbleMat);u.position.set(3+10/2-1.2/2,1.1+.04,.5-l/2),this.scene.add(u),this.addCollider(3,1.1/2,.5,10,1.1,1.2),this.addCollider(3+10/2-1.2/2,1.1/2,.5-l/2,1.2,1.1,l),[-.5,2.5,5.5].forEach((m,d)=>{const E=this.createStationOrderDisplay(m,1.1,.5,d);this.stationTicketDisplays.push(E);const M=new R(new st(.08,.1,.03,16),this.darkWoodMat);M.position.set(m-.35,1.1+.06,.5),this.scene.add(M);const w=new R(new Gt(.07,16,12,0,Math.PI*2,0,Math.PI/2),this.brassMat);w.position.set(m-.35,1.1+.08,.5),this.scene.add(w);const I=new R(new tn(.6,.4),new X({color:2825494,roughness:.8}));I.rotation.x=-Math.PI/2,I.position.set(m+.35,1.1+.085,.5),this.scene.add(I),this.interactiveSpots.push({id:`front_desk_${d}`,name:`Front Desk Station #${d+1}`,type:"front_desk",stationIndex:d,position:new b(m,0,.5-.8),action:"Deliver Order",icon:"🔔"})});const p=new st(.12,.1,.26,16),_=new X({color:16777215,transparent:!0,opacity:.5,roughness:.1}),g=new R(p,_);g.position.set(7.2,1.1+.17,.5),this.scene.add(g)}createStationOrderDisplay(t,e,n,i){const r=new Mt;r.position.set(t,e+.04,n);const o=new R(new Ct(.48,.08,.32),this.darkWoodMat);o.position.y=.04,o.castShadow=!0,r.add(o);const a=new R(new st(.02,.02,.16,8),this.brassMat);a.position.set(0,.14,-.02),r.add(a);const c=new R(new Ct(.52,.38,.04),new X({color:2365457,roughness:.5,metalness:.3}));c.position.set(0,.28,-.02),c.rotation.x=-.32,c.castShadow=!0,r.add(c);const l=new R(new Ct(.53,.39,.01),this.brassMat);l.position.set(0,.28,-.02),l.rotation.x=-.32,r.add(l);const h=document.createElement("canvas");h.width=512,h.height=340;const u=h.getContext("2d"),f=new nn(h);f.minFilter=De;const p=new tn(.49,.35),_=new Me({map:f}),g=new R(p,_);g.position.set(0,0,-.022),g.rotation.y=Math.PI,c.add(g);const m=document.createElement("canvas");m.width=512,m.height=340;const d=m.getContext("2d"),E=new nn(m);E.minFilter=De;const M=new Me({map:E}),w=new R(p,M);w.position.set(0,0,.022),c.add(w),this.scene.add(r);const I={canvas:h,ctx:u,texture:f,custCanvas:m,custCtx:d,custTexture:E,stationIndex:i,render:A=>{if(u.clearRect(0,0,512,340),!A)u.fillStyle="#1c1410",u.beginPath(),u.roundRect(8,8,496,324,18),u.fill(),u.strokeStyle="#8d6e63",u.lineWidth=6,u.stroke(),u.fillStyle="#ffecb3",u.font="bold 32px sans-serif",u.textAlign="center",u.fillText(`COUNTER #${i+1}`,512/2,85),u.font="56px sans-serif",u.fillText("☕ 🥐 🍓",512/2,180),u.fillStyle="#bcaaa4",u.font="24px sans-serif",u.fillText("Ready for Next Guest",512/2,260);else{u.fillStyle="#fffdf7",u.beginPath(),u.roundRect(8,8,496,324,18),u.fill(),u.strokeStyle="#e5a93b",u.lineWidth=8,u.stroke(),u.fillStyle="#4e342e",u.beginPath(),u.roundRect(14,14,484,62,12),u.fill(),u.fillStyle="#ffffff",u.font="bold 28px sans-serif",u.textAlign="left",u.fillText(`🛎️ C#${i+1} — ${A.customerName}`,28,56);let x=135;A.items.forEach((U,k)=>{const Y=he[U]||{name:U,icon:"📦"},P=A.fulfilled[k];u.fillStyle=P?"rgba(76, 175, 80, 0.18)":"rgba(0, 0, 0, 0.04)",u.beginPath(),u.roundRect(20,x-30,472,58,10),u.fill(),u.font="32px sans-serif",u.fillStyle="#2b1d16",u.fillText(Y.icon,32,x+10),u.font=P?"bold 24px sans-serif":"24px sans-serif",u.fillStyle=P?"#2e7d32":"#2b1d16",u.fillText(Y.name,82,x+10),u.textAlign="right",P?(u.fillStyle="#2e7d32",u.font="bold 24px sans-serif",u.fillText("SERVED ✓",476,x+10)):(u.fillStyle="#e65100",u.font="bold 22px sans-serif",u.fillText("PENDING ⏳",476,x+10)),u.textAlign="left",x+=70}),A.fulfilled.every(Boolean)&&(u.fillStyle="#2e7d32",u.font="bold 24px sans-serif",u.textAlign="center",u.fillText("⭐ ORDER COMPLETE! 🛎️ ⭐",512/2,310))}if(f.needsUpdate=!0,d.clearRect(0,0,512,340),d.fillStyle="#fffdf7",d.beginPath(),d.roundRect(8,8,496,324,18),d.fill(),d.strokeStyle="#4e342e",d.lineWidth=6,d.stroke(),d.fillStyle="#4e342e",d.beginPath(),d.roundRect(14,14,484,55,10),d.fill(),d.fillStyle="#ffffff",d.font="bold 26px sans-serif",d.textAlign="center",d.fillText("☕ COZY CAFE 3D ☕",512/2,52),!A)d.fillStyle="#795548",d.font="bold 28px sans-serif",d.fillText("Welcome! Please Order 💖",512/2,160),d.font="48px sans-serif",d.fillText("🐱 ✨",512/2,240);else{d.fillStyle="#795548",d.font="bold 26px sans-serif",d.fillText(`Guest: ${A.customerName}`,512/2,120);const x=A.items.map(T=>{var U;return((U=he[T])==null?void 0:U.icon)||"☕"}).join("  ");d.font="40px sans-serif",d.fillText(x,512/2,185),d.fillStyle=A.fulfilled.every(Boolean)?"#2e7d32":"#e65100",d.font="bold 24px sans-serif",d.fillText(A.fulfilled.every(Boolean)?"Enjoy your visit! ⭐":"Preparing fresh for you...",512/2,260)}E.needsUpdate=!0}};return I.render(null),I}updateStationDisplay(t,e){this.stationTicketDisplays&&this.stationTicketDisplays[t]&&this.stationTicketDisplays[t].render(e)}createBackKitchen(){const r=new R(new Ct(16,1.05,1.1),this.steelMat);r.position.set(0,1.05/2,-6.5),r.castShadow=!0,this.scene.add(r);const o=new R(new Ct(16+.2,.08,1.1+.2),this.steelMat);o.position.set(0,1.05+.04,-6.5),this.scene.add(o),this.addCollider(0,1.05/2,-6.5,16,1.05,1.1),this.createEspressoMachine(-4.5,1.05+.08,-6.5),this.interactiveSpots.push({id:"espresso_machine",name:"Espresso Machine",type:"coffee_machine",position:new b(-4.5,0,-6.5+.9),action:"Brew Espresso & Coffee",icon:"☕"}),this.createSyrupStation(-2,1.05+.08,-6.5),this.interactiveSpots.push({id:"syrup_station",name:"Syrup & Flavor Bar",type:"syrup_bar",position:new b(-2,0,-6.5+.9),action:"Add Vanilla / Caramel Syrup",icon:"🍯"}),this.createBlenderStation(1.5,1.05+.08,-6.5),this.interactiveSpots.push({id:"cold_bar",name:"Cold & Blender Bar",type:"cold_bar",position:new b(1.5,0,-6.5+.9),action:"Blend Iced Matcha / Smoothie",icon:"🥤"}),this.createPastryCase(5.5,1.05+.08,-6.5),this.interactiveSpots.push({id:"pastry_case",name:"Bakery Pastry Case",type:"pastry_case",position:new b(5.5,0,-6.5+.9),action:"Grab Pastry (Croissant / Donut / Muffin)",icon:"🥐"}),this.createTrashBin(-7.5,0,-6.5+.5),this.interactiveSpots.push({id:"trash_bin",name:"Disposal Trash Bin",type:"trash_bin",position:new b(-7.5,0,-6.5+1.2),action:"Discard / Trash Held Item",icon:"🗑️"})}createEspressoMachine(t,e,n){const i=new Mt;i.position.set(t,e,n);const r=new X({color:9109504,roughness:.3,metalness:.6}),o=new R(new Ct(1.6,.8,.7),r);o.position.y=.4,i.add(o);const a=new R(new Ct(1.5,.05,.6),this.steelMat);a.position.y=.82,i.add(a),[-.35,.35].forEach(l=>{const h=new R(new st(.1,.1,.18,16),this.steelMat);h.position.set(l,.35,.32),i.add(h);const u=new R(new st(.025,.025,.28,8),this.darkWoodMat);u.rotation.x=Math.PI/2,u.position.set(l,.32,.45),i.add(u)});const c=new R(new st(.015,.015,.35,8),this.steelMat);c.position.set(-.7,.4,.3),c.rotation.z=.35,i.add(c),[-.15,.15].forEach(l=>{const h=new R(new st(.06,.06,.03,16),this.brassMat);h.rotation.x=Math.PI/2,h.position.set(l,.62,.36),i.add(h)});for(let l=-.5;l<=.5;l+=.25){const h=new R(new st(.07,.05,.08,12),new X({color:16777215}));h.position.set(l,.88,(Math.random()-.5)*.2),i.add(h)}this.scene.add(i)}createSyrupStation(t,e,n){const i=new Mt;i.position.set(t,e,n);const r=new R(new Ct(1.2,.12,.4),this.darkWoodMat);r.position.y=.06,i.add(r),[{name:"Vanilla",color:15984043,x:-.4},{name:"Caramel",color:13928507,x:-.13},{name:"Hazelnut",color:9132587,x:.13},{name:"Matcha",color:5025616,x:.4}].forEach(a=>{const c=new st(.07,.07,.38,16),l=new X({color:a.color,transparent:!0,opacity:.75,roughness:.1}),h=new R(c,l);h.position.set(a.x,.31,0),i.add(h);const u=new R(new st(.015,.015,.14,8),this.brassMat);u.position.set(a.x,.52,0),i.add(u);const f=new R(new Ct(.04,.02,.09),this.brassMat);f.position.set(a.x,.58,.02),i.add(f)}),this.scene.add(i)}createBlenderStation(t,e,n){const i=new Mt;i.position.set(t,e,n);const r=new X({color:2171169,roughness:.3}),o=new R(new Ct(.4,.28,.4),r);o.position.y=.14,i.add(o);const a=new st(.14,.1,.45,12),c=new X({color:16777215,transparent:!0,opacity:.5,roughness:.1}),l=new R(a,c);l.position.y=.5,i.add(l);const h=new st(.13,.09,.3,12),u=new X({color:6732650,roughness:.3}),f=new R(h,u);f.position.y=.44,i.add(f);const p=new R(new st(.15,.15,.05,12),r);p.position.y=.74,i.add(p);const _=new R(new Ct(.6,.35,.5),this.steelMat);_.position.set(.6,.18,0),i.add(_);const g=new R(new st(.03,.05,.2,8),this.steelMat);g.position.set(.6,.4,0),g.rotation.z=.5,i.add(g),this.scene.add(i)}createPastryCase(t,e,n){const i=new Mt;i.position.set(t,e,n);const r=1.8,o=.85,a=.75,c=new R(new Ct(r,.08,a),this.darkWoodMat);c.position.y=.04,i.add(c);const l=new R(new Ct(r-.05,o,a-.05),this.glassMat);l.position.y=o/2+.05,i.add(l);const h=new R(new Ct(r-.1,.02,a-.15),this.glassMat);h.position.y=o*.55,i.add(h);const u=new R(new ue(.08,.04,8,12,Math.PI*.8),new X({color:14254635}));u.rotation.x=Math.PI/2,u.position.set(-.55,.12,.1),i.add(u);const f=new R(new ue(.07,.035,8,12),new X({color:5125166}));f.rotation.x=Math.PI/2,f.position.set(-.2,.12,.1),i.add(f);const p=new R(new st(.08,.07,.06,12),new X({color:11562294}));p.position.set(.2,.11,.1),i.add(p);const _=new R(new st(.09,.09,.06,12,1,!1,0,Math.PI*.45),new X({color:16775917}));_.position.set(.55,.11,.1),i.add(_);const g=new R(new st(.075,.075,.025,14),new X({color:13935475}));g.position.set(-.5,o*.55+.03,0),i.add(g);const m=new R(new st(.075,.075,.025,14),new X({color:3021844}));m.position.set(-.15,o*.55+.03,0),i.add(m),[.2,.52].forEach(d=>{const E=new R(new Gt(.07,8,8),new X({color:9263948}));E.position.set(d,o*.55+.07,0),i.add(E)}),this.scene.add(i)}createTrashBin(t,e,n){const i=new Mt;i.position.set(t,e,n);const r=new X({color:4342338,metalness:.6,roughness:.4}),o=new R(new st(.3,.28,.85,18),r);o.position.y=.425,o.castShadow=!0,i.add(o);const a=new R(new Gt(.31,16,8,0,Math.PI*2,0,Math.PI/2),this.brassMat);a.position.y=.85,i.add(a),this.scene.add(i),this.addCollider(t,.45,n,.7,.9,.7)}createDiningArea(){[{x:-6.5,z:4.5},{x:-2.5,z:5.5},{x:3.5,z:5.5},{x:7.5,z:4.5}].forEach(e=>{this.createTableAndChairs(e.x,e.z)}),this.createBooth(-8.5,0)}createTableAndChairs(t,e){const n=new Mt;n.position.set(t,0,e);const i=new R(new st(.85,.85,.05,20),this.warmWoodMat);i.position.y=.85,i.castShadow=!0,i.receiveShadow=!0,n.add(i);const r=new R(new st(.06,.06,.82,12),this.darkWoodMat);r.position.y=.41,n.add(r);const o=new R(new st(.4,.4,.04,16),this.darkWoodMat);o.position.y=.02,n.add(o);const a=new R(new st(.06,.04,.16,12),new X({color:16777215,roughness:.2}));a.position.set(0,.95,0),n.add(a);const c=new R(new Gt(.06,8,8),new X({color:16728193}));c.position.set(0,1.08,0),n.add(c);for(let l=0;l<3;l++){const h=l/3*Math.PI*2,u=Math.cos(h)*1.15,f=Math.sin(h)*1.15,p=this.createChairMesh();p.position.set(u,0,f),p.lookAt(0,0,0),n.add(p)}this.scene.add(n),this.addCollider(t,.5,e,2,1,2)}createChairMesh(){const t=new Mt,e=new R(new Ct(.45,.05,.45),this.darkWoodMat);e.position.y=.48,t.add(e);const n=new st(.025,.02,.46,8);[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]].forEach(([o,a])=>{const c=new R(n,this.darkWoodMat);c.position.set(o,.23,a),t.add(c)});const i=new Ct(.45,.35,.04),r=new R(i,this.darkWoodMat);return r.position.set(0,.72,-.2),t.add(r),t}createBooth(t,e){const n=new Mt;n.position.set(t,0,e);const i=new X({color:6038553,roughness:.6}),r=new R(new Ct(1.6,.48,3.2),i);r.position.set(0,.24,0),n.add(r);const o=new R(new Ct(.4,.9,3.2),i);o.position.set(-.6,.7,0),n.add(o),this.scene.add(n),this.addCollider(t,.6,e,1.8,1.2,3.4)}createDecorations(){[{x:-9.5,z:-7.5},{x:9.5,z:-7.5},{x:-9.5,z:7.5},{x:9.5,z:7.5}].forEach(r=>{this.createPottedPlant(r.x,r.z)});const e=new X({color:1713185,roughness:.9}),n=new R(new Ct(4,2,.08),e);n.position.set(0,3.5,-8.8),this.scene.add(n);const i=new R(new Ct(4.2,2.2,.04),this.warmWoodMat);i.position.set(0,3.5,-8.84),this.scene.add(i)}createPottedPlant(t,e){const n=new Mt;n.position.set(t,0,e);const i=new R(new st(.35,.25,.6,16),new X({color:16119285,roughness:.3}));i.position.y=.3,i.castShadow=!0,n.add(i);const r=new X({color:3046706,roughness:.5});for(let o=0;o<7;o++){const a=o/7*Math.PI*2,c=new Gt(.24,8,6);c.scale(1.2,.2,.7);const l=new R(c,r);l.position.set(Math.cos(a)*.25,.7+o*.12,Math.sin(a)*.25),l.rotation.y=a,l.rotation.z=.4,n.add(l)}this.scene.add(n),this.addCollider(t,.5,e,.9,1.2,.9)}createLighting(){const t=new Vp(16774374,.85);this.scene.add(t);const e=new Hp(16772306,1.6);e.position.set(10,14,18),e.castShadow=!0,e.shadow.mapSize.width=2048,e.shadow.mapSize.height=2048,e.shadow.camera.near=.5,e.shadow.camera.far=45,e.shadow.camera.left=-16,e.shadow.camera.right=16,e.shadow.camera.top=16,e.shadow.camera.bottom=-16,e.shadow.bias=-5e-4,this.scene.add(e),[{x:-.5,z:.5},{x:3,z:.5},{x:6.5,z:.5},{x:-4.5,z:-6.5},{x:1.5,z:-6.5},{x:5.5,z:-6.5}].forEach(i=>{const r=new R(new st(.01,.01,1.8,6),this.darkWoodMat);r.position.set(i.x,5.5-.9,i.z),this.scene.add(r);const o=new R(new Wn(.24,.2,16,1,!0),this.brassMat);o.position.set(i.x,5.5-1.8,i.z),this.scene.add(o);const a=new zp(16755268,.9,6,1.5);a.position.set(i.x,5.5-1.9,i.z),this.scene.add(a)})}createDecorUpgrades(){this.fairyLightsGroup=new Mt;const t=new X({color:16769154,emissive:16758605,emissiveIntensity:.9,roughness:.2}),e=new Me({color:4073251});[-4,0,4].forEach(p=>{const _=new st(.012,.012,18,6);_.rotateZ(Math.PI/2);const g=new R(_,e);g.position.set(0,4.6,p),this.fairyLightsGroup.add(g);for(let m=-8;m<=8;m+=1.4){const d=Math.sin((m+8)/16*Math.PI)*.15,E=new R(new Gt(.06,8,8),t);E.position.set(m,4.55-d,p),this.fairyLightsGroup.add(E)}}),this.scene.add(this.fairyLightsGroup),this.catBedGroup=new Mt,this.catBedGroup.position.set(.8,0,5.8);const n=new R(new st(.48,.52,.14,18),new X({color:6953769,roughness:.7}));n.position.y=.07,n.castShadow=!0,this.catBedGroup.add(n);const i=new R(new ue(.46,.08,8,20),new X({color:13938487,roughness:.3,metalness:.6}));i.rotateX(Math.PI/2),i.position.y=.12,this.catBedGroup.add(i);const r=new R(new st(.42,.42,.06,16),new X({color:16770273,roughness:.9}));r.position.y=.1,this.catBedGroup.add(r),this.scene.add(this.catBedGroup),this.flowerBoxesGroup=new Mt;const o=new X({color:6111287,roughness:.7}),a=new X({color:3706428,roughness:.5}),c=[16728193,16771899,11225020,4367861];[-4.5,4.5].forEach(p=>{const _=new R(new Ct(4.2,.35,.45),o);_.position.set(p,1,8.6),_.castShadow=!0,this.flowerBoxesGroup.add(_);for(let g=-1.8;g<=1.8;g+=.45){const m=new X({color:c[Math.floor(Math.random()*c.length)],roughness:.4}),d=new R(new Gt(.08,8,8),m);d.position.set(p+g,1.25,8.6+(Math.random()-.5)*.15),this.flowerBoxesGroup.add(d);const E=new R(new st(.015,.015,.18,6),a);E.position.set(p+g,1.15,8.6),this.flowerBoxesGroup.add(E)}}),this.scene.add(this.flowerBoxesGroup),this.jukeboxGroup=new Mt,this.jukeboxGroup.position.set(8.6,0,-3.8),this.jukeboxGroup.rotation.y=-Math.PI/2;const l=new R(new Ct(1.1,1.6,.8),new X({color:4859920,roughness:.4}));l.position.y=.8,l.castShadow=!0,this.jukeboxGroup.add(l);const h=new R(new st(.55,.55,.8,16,1,!1,0,Math.PI),new X({color:4859920,roughness:.4}));h.rotation.z=Math.PI/2,h.position.y=1.6,this.jukeboxGroup.add(h);const u=new R(new ue(.52,.05,8,16,Math.PI),new X({color:16766287,emissive:16752640,emissiveIntensity:.8}));u.position.set(0,1.6,.41),this.jukeboxGroup.add(u);const f=new R(new Ct(.8,.5,.05),new X({color:1713022,roughness:.1,metalness:.8}));f.position.set(0,1.15,.41),this.jukeboxGroup.add(f),this.scene.add(this.jukeboxGroup),this.addCollider(8.6,.8,-3.8,1.2,1.8,1),this.interactiveSpots.push({id:"lofi_jukebox",name:"Vintage Vinyl Jukebox",type:"jukebox",position:new b(7.4,0,-3.8),action:"Change Lofi Track 📻",icon:"📻"}),this.syncUpgrades(),Pt.subscribe(()=>{this.syncUpgrades()})}syncUpgrades(){this.fairyLightsGroup&&(this.fairyLightsGroup.visible=Pt.hasUpgrade("fairy_lights")),this.catBedGroup&&(this.catBedGroup.visible=Pt.hasUpgrade("cat_bed")),this.flowerBoxesGroup&&(this.flowerBoxesGroup.visible=Pt.hasUpgrade("flower_boxes")),this.jukeboxGroup&&(this.jukeboxGroup.visible=Pt.hasUpgrade("lofi_jukebox"))}}class Yp{constructor(){this.root=new Mt,this.walkTime=0,this.idleTime=0,this.isCarrying=!1,this.currentExpression="normal",this.createMaterials(),this.buildCharacter()}createMaterials(){this.cupMat=new X({color:16183011,roughness:.22,metalness:.03}),this.rimMat=new X({color:16183011,roughness:.2,metalness:.04}),this.handleMat=this.cupMat,this.skinMat=new X({color:16049107,roughness:.35}),this.foamTex=this.createFoamTexture(),this.foamMat=new X({map:this.foamTex,roughness:.35,metalness:.02,side:ke}),this.cherryMat=new X({color:13833768,roughness:.08,metalness:.12}),this.stemMat=new X({color:5802284,roughness:.45}),this.faceTexNormal=this.createFaceTexture("normal"),this.faceTexHappy=this.createFaceTexture("happy"),this.faceMat=new Me({map:this.faceTexNormal,transparent:!0,side:ke,depthWrite:!1}),this.shirtMat=new X({color:15657182,roughness:.75}),this.apronMat=new X({color:10776389,roughness:.58}),this.apronPocketMat=new X({color:9658167,roughness:.62}),this.apronStrapMat=new X({color:7684893,roughness:.6}),this.brassMat=new X({color:13938487,metalness:.85,roughness:.25}),this.gloveMat=new X({color:16711422,roughness:.3}),this.jeansMat=new X({color:5668252,roughness:.75}),this.cuffMat=new X({color:9285575,roughness:.7}),this.shoeMat=new X({color:6438180,roughness:.45}),this.soleMat=new X({color:2627085,roughness:.85})}createFoamTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createRadialGradient(256,256,20,256,256,256);n.addColorStop(0,"#caa074"),n.addColorStop(.35,"#b48356"),n.addColorStop(.75,"#9c683c"),n.addColorStop(1,"#7a471f"),e.fillStyle=n,e.fillRect(0,0,512,512),e.strokeStyle="rgba(240, 200, 160, 0.4)",e.lineWidth=14;for(let r=50;r<240;r+=36)e.beginPath(),e.arc(256,256,r,0,Math.PI*2),e.stroke();e.save(),e.translate(256,256),e.strokeStyle="#fffbf0",e.lineCap="round";for(let r=0;r<3;r++){e.rotate(r*Math.PI*2/3),e.beginPath();for(let o=0;o<Math.PI*3.6;o+=.08){const a=10+o*20,c=Math.cos(o)*a,l=Math.sin(o)*a;e.lineWidth=Math.max(4,28-o*2.2),o===0?e.moveTo(c,l):e.lineTo(c,l)}e.stroke()}e.fillStyle="#fffbf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),e.restore();const i=new nn(t);return i.needsUpdate=!0,i}createFaceTexture(t="normal"){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");if(n.clearRect(0,0,1024,1024),t==="normal"){this.drawLatteEye(n,335,410,92,130,!0),this.drawLatteEye(n,689,410,92,130,!1);const r=n.createRadialGradient(512,502,4,512,506,22);r.addColorStop(0,"#e8907e"),r.addColorStop(.7,"#d37260"),r.addColorStop(1,"#bb5947"),n.fillStyle=r,n.beginPath(),n.ellipse(512,510,22,16,0,0,Math.PI*2),n.fill(),n.fillStyle="rgba(255, 255, 255, 0.7)",n.beginPath(),n.arc(508,505,5,0,Math.PI*2),n.fill();const o=n.createRadialGradient(235,545,10,235,545,70);o.addColorStop(0,"rgba(255, 115, 90, 0.52)"),o.addColorStop(1,"rgba(255, 115, 90, 0)"),n.fillStyle=o,n.beginPath(),n.ellipse(235,545,70,45,0,0,Math.PI*2),n.fill();const a=n.createRadialGradient(789,545,10,789,545,70);a.addColorStop(0,"rgba(255, 115, 90, 0.52)"),a.addColorStop(1,"rgba(255, 115, 90, 0)"),n.fillStyle=a,n.beginPath(),n.ellipse(789,545,70,45,0,0,Math.PI*2),n.fill(),n.save(),n.beginPath(),n.moveTo(410,550),n.bezierCurveTo(450,655,574,655,614,550),n.bezierCurveTo(560,572,464,572,410,550),n.closePath(),n.fillStyle="#22110a",n.fill(),n.strokeStyle="#1d0e07",n.lineWidth=9,n.lineJoin="round",n.stroke(),n.clip(),n.fillStyle="#ff4b5c",n.beginPath(),n.arc(512,638,54,Math.PI,0,!1),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.ellipse(512,554,52,14,0,0,Math.PI),n.fill(),n.restore(),n.strokeStyle="#3e2417",n.lineWidth=11,n.lineCap="round",n.beginPath(),n.moveTo(260,270),n.quadraticCurveTo(340,220,410,255),n.stroke(),n.beginPath(),n.moveTo(614,255),n.quadraticCurveTo(684,220,764,270),n.stroke()}else t==="happy"&&(n.strokeStyle="#28150c",n.lineWidth=16,n.lineCap="round",n.lineJoin="round",n.beginPath(),n.moveTo(250,370),n.lineTo(360,420),n.lineTo(250,470),n.stroke(),n.beginPath(),n.moveTo(774,370),n.lineTo(664,420),n.lineTo(774,470),n.stroke(),n.strokeStyle="#ff6b52",n.lineWidth=9,[-1,1].forEach(r=>{const o=r===-1?290:734;for(let a=-1;a<=1;a++)n.beginPath(),n.moveTo(o+a*22-10,530),n.lineTo(o+a*22+10,495),n.stroke()}),n.strokeStyle="#28150c",n.lineWidth=14,n.beginPath(),n.moveTo(420,560),n.quadraticCurveTo(465,600,512,565),n.quadraticCurveTo(559,600,604,560),n.stroke());const i=new nn(e);return i.needsUpdate=!0,i}drawLatteEye(t,e,n,i,r,o){t.save(),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(e,n,i,r,0,0,Math.PI*2),t.fill(),t.clip(),t.fillStyle="rgba(215, 195, 180, 0.38)",t.beginPath(),t.ellipse(e,n-r+36,i*1.1,45,0,0,Math.PI*2),t.fill();const a=o?e+10:e-10,c=n+8,l=i*.78,h=t.createLinearGradient(a,c-l,a,c+l);h.addColorStop(0,"#1a0e08"),h.addColorStop(.42,"#381e11"),h.addColorStop(.82,"#6c3d1f"),h.addColorStop(1,"#8e542d"),t.fillStyle=h,t.beginPath(),t.arc(a,c,l,0,Math.PI*2),t.fill(),t.fillStyle="#100602",t.beginPath(),t.arc(a,c,l*.44,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.ellipse(a-(o?18:12),c-26,20,28,-.3,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(a+(o?16:20),c+24,10,0,Math.PI*2),t.fill(),t.restore(),t.strokeStyle="#1d0f08",t.lineWidth=14,t.lineCap="round",t.beginPath(),t.ellipse(e,n,i,r,0,Math.PI*.95,Math.PI*2.05,!1),t.stroke(),t.strokeStyle="#3a2012",t.lineWidth=6.5,t.beginPath(),t.ellipse(e,n,i,r,0,.05,Math.PI*.95,!1),t.stroke(),t.strokeStyle="#1d0f08",t.lineWidth=11,t.lineCap="round",o?(t.beginPath(),t.moveTo(e-i+18,n-r+24),t.quadraticCurveTo(e-i-20,n-r+8,e-i-40,n-r-14),t.stroke(),t.beginPath(),t.moveTo(e-i+8,n-r+56),t.quadraticCurveTo(e-i-22,n-r+42,e-i-42,n-r+30),t.stroke(),t.beginPath(),t.moveTo(e-i+52,n-r+6),t.quadraticCurveTo(e-i+24,n-r-22,e-i-4,n-r-34),t.stroke()):(t.beginPath(),t.moveTo(e+i-18,n-r+24),t.quadraticCurveTo(e+i+20,n-r+8,e+i+40,n-r-14),t.stroke(),t.beginPath(),t.moveTo(e+i-8,n-r+56),t.quadraticCurveTo(e+i+22,n-r+42,e+i+42,n-r+30),t.stroke(),t.beginPath(),t.moveTo(e+i-52,n-r+6),t.quadraticCurveTo(e+i-24,n-r-22,e+i+4,n-r-34),t.stroke())}setExpression(t){this.currentExpression!==t&&(this.currentExpression=t,t==="happy"?this.faceMat.map=this.faceTexHappy:this.faceMat.map=this.faceTexNormal,this.faceMat.needsUpdate=!0)}buildCharacter(){this.hips=new Mt,this.hips.position.y=.88,this.root.add(this.hips),this.leftLeg=this.createLeg(!0),this.leftLeg.position.set(-.21,0,0),this.hips.add(this.leftLeg),this.rightLeg=this.createLeg(!1),this.rightLeg.position.set(.21,0,0),this.hips.add(this.rightLeg),this.torso=new Mt,this.torso.position.y=0,this.hips.add(this.torso);const t=new st(.33,.3,.54,20),e=new R(t,this.shirtMat);e.position.y=.27,e.castShadow=!0,this.torso.add(e);const n=new st(.345,.315,.5,22,1,!1,-Math.PI*.46,Math.PI*.92),i=new R(n,this.apronMat);i.position.y=.25,i.castShadow=!0,this.torso.add(i);const r=new tn(.48,.34),o=new R(r,this.apronMat);o.position.set(0,-.09,.3),o.rotation.x=-.14,o.castShadow=!0,this.torso.add(o);const a=new Ct(.24,.18,.035),c=new R(a,this.apronPocketMat);c.position.set(0,.29,.34),this.torso.add(c),[-.09,.09].forEach(rt=>{const pt=new R(new Gt(.016,8,8),this.brassMat);pt.position.set(rt,.36,.358),this.torso.add(pt)});const l=new Ms([new b(-.16,.48,-.16),new b(-.06,.3,-.3),new b(.08,.1,-.31)]),h=new zi(l,10,.024,6,!1),u=new R(h,this.apronStrapMat);this.torso.add(u);const f=new Ms([new b(.16,.48,-.16),new b(.06,.3,-.3),new b(-.08,.1,-.31)]),p=new zi(f,10,.024,6,!1),_=new R(p,this.apronStrapMat);this.torso.add(_);const g=new Mt;g.position.set(0,.06,-.315);const m=new R(new Gt(.048,10,8),this.apronStrapMat);g.add(m),[-1,1].forEach(rt=>{const pt=new R(new ue(.075,.024,8,14),this.apronStrapMat);pt.position.set(rt*.085,.02,.01),pt.rotation.y=rt*.35,g.add(pt);const gt=new R(new Ct(.038,.18,.018),this.apronStrapMat);gt.position.set(rt*.05,-.09,.012),gt.rotation.z=rt*.28,g.add(gt)}),this.torso.add(g),this.leftArm=this.createArm(!0),this.leftArm.position.set(-.35,.46,0),this.torso.add(this.leftArm),this.rightArm=this.createArm(!1),this.rightArm.position.set(.35,.46,0),this.torso.add(this.rightArm),this.head=new Mt,this.head.position.y=.48,this.torso.add(this.head);const d=new R(new st(.14,.15,.2,16),this.skinMat);d.position.y=.1,this.head.add(d);const E=new st(.52,.4,.62,32,1,!0),M=new R(E,this.cupMat);M.position.y=.38,M.castShadow=!0,this.head.add(M);const w=new Rn(.4,32);w.rotateX(Math.PI/2);const I=new R(w,this.cupMat);I.position.y=.07,this.head.add(I);const A=new ue(.52,.038,14,32);A.rotateX(Math.PI/2);const C=new R(A,this.rimMat);C.position.y=.69,this.head.add(C);const W=new ue(.21,.062,14,28,Math.PI*1.15),x=new R(W,this.handleMat);x.position.set(.48,.38,0),x.rotation.z=-Math.PI/2,x.castShadow=!0,this.head.add(x);const T=new Rn(.49,32);T.rotateX(-Math.PI/2);const U=new R(T,this.foamMat);U.position.y=.65,this.head.add(U);const k=new st(.525,.405,.56,32,1,!0,-Math.PI*.44,Math.PI*.88);this.faceMesh=new R(k,this.faceMat),this.faceMesh.position.y=.38,this.head.add(this.faceMesh),this.cherryGroup=new Mt,this.cherryGroup.position.set(-.2,.66,.1),this.head.add(this.cherryGroup);const Y=new Gt(.095,16,14),P=new R(Y,this.cherryMat);P.position.set(0,.06,0),P.castShadow=!0,this.cherryGroup.add(P);const N=new Gt(.022,8,8),H=new Me({color:16777215}),$=new R(N,H);$.position.set(-.03,.1,.06),this.cherryGroup.add($);const q=new Ms([new b(0,.06,0),new b(.03,.18,.01),new b(.09,.28,.02),new b(.14,.33,.01)]),Z=new zi(q,12,.014,6,!1),j=new R(Z,this.stemMat);this.cherryGroup.add(j);const nt=new Gt(.08,8,6);nt.scale(1.5,.22,.75);const it=new R(nt,this.stemMat);it.position.set(.14,.33,.01),it.rotation.set(.2,.4,-.2),this.cherryGroup.add(it),this.trayAnchor=new Mt,this.trayAnchor.position.set(0,.22,.42),this.torso.add(this.trayAnchor);const V=new st(.38,.36,.028,22),K=new X({color:9985074,roughness:.55});this.platterMesh=new R(V,K),this.platterMesh.castShadow=!0,this.trayAnchor.add(this.platterMesh),this.slotAnchors=[new Mt,new Mt],this.slotAnchors[0].position.set(-.16,.03,0),this.slotAnchors[1].position.set(.16,.03,0),this.trayAnchor.add(this.slotAnchors[0]),this.trayAnchor.add(this.slotAnchors[1]),this.root.traverse(rt=>{rt.isMesh&&(rt.castShadow=!0,rt.receiveShadow=!0)})}setTrayCapacity(t=2){for(;this.slotAnchors.length>0;){const e=this.slotAnchors.pop();this.trayAnchor.remove(e)}if(t===3){this.platterMesh.scale.set(1.22,1,1.05);const e=[-.22,0,.22];for(let n=0;n<3;n++){const i=new Mt;i.position.set(e[n],.03,0),this.trayAnchor.add(i),this.slotAnchors.push(i)}}else{this.platterMesh.scale.set(1,1,1);const e=[-.16,.16];for(let n=0;n<2;n++){const i=new Mt;i.position.set(e[n],.03,0),this.trayAnchor.add(i),this.slotAnchors.push(i)}}}createLeg(t){const e=new Mt,n=new st(.125,.115,.54,16),i=new R(n,this.jeansMat);i.position.y=-.27,i.castShadow=!0,e.add(i),[-.18,-.32,-.42].forEach((_,g)=>{const m=new ue(.13+g*.005,.024,8,16);m.rotateX(Math.PI/2);const d=new R(m,this.jeansMat);d.position.y=_,e.add(d)});const r=new st(.145,.145,.11,16),o=new R(r,this.cuffMat);o.position.y=-.5,e.add(o);const a=new Mt;a.position.set(0,-.63,.04);const c=new Ct(.19,.16,.22),l=new R(c,this.shoeMat);a.add(l);const h=new Gt(.115,14,12);h.scale(1.05,.82,1.4);const u=new R(h,this.shoeMat);u.position.set(0,-.02,.09),a.add(u);const f=new Ct(.21,.04,.33),p=new R(f,this.soleMat);return p.position.set(0,-.08,.04),a.add(p),e.add(a),e}createArm(t){const e=new Mt,n=new st(.13,.12,.18,14),i=new R(n,this.shirtMat);i.position.y=-.09,e.add(i);const r=new st(.082,.076,.22,14),o=new R(r,this.skinMat);o.position.y=-.24,e.add(o);const a=new Mt;a.position.set(0,-.38,.02);const c=new ue(.095,.026,10,16),l=new R(c,this.gloveMat);l.rotation.x=Math.PI/2,l.position.y=.06,a.add(l);const h=new Gt(.1,14,12);h.scale(1.1,.75,1.15);const u=new R(h,this.gloveMat);a.add(u);const f=new st(.032,.032,.07,8),p=new R(f,this.gloveMat);p.position.set(t?.08:-.08,.01,.04),p.rotation.z=t?-.7:.7,p.rotation.x=-.3,a.add(p);const _=[-.05,0,.05],g=[.065,.075,.06];return _.forEach((m,d)=>{const E=new st(.026,.024,g[d],8),M=new R(E,this.gloveMat);M.position.set(m,-.08,.03),M.rotation.x=-.25;const w=new R(new Gt(.026,8,8),this.gloveMat);w.position.y=-g[d]*.5,M.add(w),a.add(M)}),e.add(a),e.rotation.x=-.35,e.rotation.z=t?-.16:.16,e}updateAnimation(t,e,n=!1,i=1){if(this.isCarrying=n,this.platterMesh.visible=n,e){this.walkTime+=t*9.5*i;const r=Math.sin(this.walkTime)*.65;if(this.leftLeg.rotation.x=r,this.rightLeg.rotation.x=-r,n){const o=Math.sin(this.walkTime*2)*.025;this.leftArm.rotation.x=-.42+o,this.rightArm.rotation.x=-.42+o,this.leftArm.rotation.z=-.18,this.rightArm.rotation.z=.18,this.leftArm.rotation.y=0,this.rightArm.rotation.y=0}else{const o=Math.sin(this.walkTime)*.48;this.leftArm.rotation.x=-.35-o,this.rightArm.rotation.x=-.35+o,this.leftArm.rotation.z=-.14,this.rightArm.rotation.z=.14,this.leftArm.rotation.y=0,this.rightArm.rotation.y=0}this.hips.position.y=.88+Math.abs(Math.sin(this.walkTime))*.05,this.cherryGroup.rotation.z=Math.sin(this.walkTime)*.22,this.cherryGroup.rotation.x=Math.cos(this.walkTime)*.16,this.cherryGroup.position.y=.66+Math.sin(this.walkTime*2)*.03,this.torso.rotation.y=-Math.sin(this.walkTime)*.06,this.torso.rotation.z=Math.cos(this.walkTime)*.02}else{if(this.idleTime+=t,this.leftLeg.rotation.x*=.82,this.rightLeg.rotation.x*=.82,this.torso.rotation.y*=.82,this.torso.rotation.z*=.82,this.hips.position.y=.88,n)this.leftArm.rotation.x=-.42,this.rightArm.rotation.x=-.42,this.leftArm.rotation.z=-.18,this.rightArm.rotation.z=.18,this.leftArm.rotation.y=0,this.rightArm.rotation.y=0;else{const o=Math.sin(this.idleTime*2.2)*.08;this.leftArm.rotation.x=-.65+o,this.leftArm.rotation.z=-.42-o*.3,this.leftArm.rotation.y=.35,this.rightArm.rotation.x=-.22,this.rightArm.rotation.z=.18,this.rightArm.rotation.y=-.12}const r=Math.sin(this.idleTime*2.8)*.015;this.torso.scale.set(1+r*.5,1+r,1+r*.5),this.cherryGroup.rotation.set(0,0,Math.sin(this.idleTime*2.2)*.06),this.cherryGroup.position.y=.66+r*.5}}}const yn=new b,Ui=new b;new b;class $p{constructor(t,e){this.scene=t,this.colliders=e,this.position=new b(1.5,0,-3),this.velocity=new b,this.baseSpeed=3.6,this.sprintMultiplier=1.35,this.rotation=0,this.targetRotation=0,this.radius=.44,this.capacity=Pt.hasUpgrade("triple_tray")?3:2,this.inventory=new Array(this.capacity).fill(null),this.inventoryMeshes=new Array(this.capacity).fill(null),this.stepTimer=0,this.expressionTimer=0,this.bufferedInteractTimer=0,this.character=new Yp,this.mesh=this.character.root,this.scene.add(this.mesh),this.mesh.position.copy(this.position),this.character.setTrayCapacity(this.capacity);const n=new Rn(.52,16);n.rotateX(-Math.PI/2);const i=new Me({color:0,transparent:!0,opacity:.32});this.groundShadow=new R(n,i),this.groundShadow.position.y=.015,this.scene.add(this.groundShadow),Pt.subscribe(()=>{this.syncUpgrades()})}syncUpgrades(){const t=Pt.hasUpgrade("triple_tray")?3:2;if(this.capacity!==t){const e=[...this.inventory];this.capacity=t,this.inventory=new Array(this.capacity).fill(null),this.inventoryMeshes=new Array(this.capacity).fill(null),this.character.setTrayCapacity(this.capacity);for(let n=0;n<e.length&&n<this.capacity;n++)if(e[n]){this.inventory[n]=e[n];const i=Mo(e[n]);i.scale.set(.65,.65,.65),this.character.slotAnchors[n].add(i),this.inventoryMeshes[n]=i}}}triggerHappyReaction(t=1.4){this.expressionTimer=t,this.character.setExpression("happy")}bufferInteract(t=.15){this.bufferedInteractTimer=t}hasBufferedInteract(){return this.bufferedInteractTimer>0}consumeBufferedInteract(){this.bufferedInteractTimer=0}addItem(t){for(let e=0;e<this.capacity;e++)if(!this.inventory[e]){this.inventory[e]=t;const n=Mo(t);return n.scale.set(.65,.65,.65),this.character.slotAnchors[e]&&this.character.slotAnchors[e].add(n),this.inventoryMeshes[e]=n,Yt.playItemPickup(),this.triggerHappyReaction(1.2),!0}return!1}removeItem(t){return this.inventory[t]?(this.inventory[t]=null,this.inventoryMeshes[t]&&(this.character.slotAnchors[t]&&this.character.slotAnchors[t].remove(this.inventoryMeshes[t]),this.inventoryMeshes[t]=null),!0):!1}updateHeldMeshes(){for(let t=0;t<this.capacity;t++)!this.inventory[t]&&this.inventoryMeshes[t]&&(this.character.slotAnchors[t]&&this.character.slotAnchors[t].remove(this.inventoryMeshes[t]),this.inventoryMeshes[t]=null)}discardTopItem(){for(let t=this.capacity-1;t>=0;t--)if(this.inventory[t])return this.removeItem(t),Yt.playTrash(),!0;return!1}hasItem(t){return this.inventory.includes(t)}getFreeSlotCount(){let t=0;for(let e=0;e<this.capacity;e++)this.inventory[e]||t++;return t}update(t,e,n,i){this.bufferedInteractTimer>0&&(this.bufferedInteractTimer-=t),yn.set(0,0,0);const r=e.lengthSq()>.001,o=Pt.hasUpgrade("speedy_boots")?1.15:1,a=this.baseSpeed*o;if(r){const c=Math.sin(i),l=Math.cos(i);yn.x=-e.x*l+e.z*c,yn.z=e.x*c+e.z*l,yn.normalize();const h=Math.min(1,Math.max(.3,e.length())),u=a*h*(n?this.sprintMultiplier:1);this.velocity.x=yn.x*u,this.velocity.z=yn.z*u,this.targetRotation=Math.atan2(yn.x,yn.z),this.stepTimer+=t*(u/this.baseSpeed)*1.1,this.stepTimer>.36&&(this.stepTimer=0,Yt.playStep());let f=this.targetRotation-this.rotation;for(;f<-Math.PI;)f+=Math.PI*2;for(;f>Math.PI;)f-=Math.PI*2;this.rotation+=f*Math.min(1,t*24),Ui.copy(this.position),Ui.x+=this.velocity.x*t,Ui.z+=this.velocity.z*t,this.resolveCollisionsMultiPass(Ui),this.position.copy(Ui),this.mesh.position.set(this.position.x,0,this.position.z),this.mesh.rotation.y=this.rotation,this.groundShadow.position.set(this.position.x,.015,this.position.z);const p=this.inventory.some(Boolean),_=u/this.baseSpeed*.95;this.character.updateAnimation(t,!0,p,_)}else{this.velocity.set(0,0,0),this.stepTimer=0,this.mesh.position.set(this.position.x,0,this.position.z),this.mesh.rotation.y=this.rotation,this.groundShadow.position.set(this.position.x,.015,this.position.z);const c=this.inventory.some(Boolean);this.character.updateAnimation(t,!1,c)}this.expressionTimer>0&&(this.expressionTimer-=t,this.expressionTimer<=0&&this.character.setExpression("normal"))}resolveCollisionsMultiPass(t){const e=this.radius,n=3;for(let i=0;i<n;i++)for(let r=0;r<this.colliders.length;r++){const o=this.colliders[r],a=Math.max(o.min.x,Math.min(t.x,o.max.x)),c=Math.max(o.min.z,Math.min(t.z,o.max.z)),l=t.x-a,h=t.z-c,u=l*l+h*h;if(u<e*e){const f=Math.sqrt(u);if(f>1e-4){const p=e-f;t.x+=l/f*p,t.z+=h/f*p}else{const p=Math.abs(t.x-o.min.x),_=Math.abs(t.x-o.max.x),g=Math.abs(t.z-o.min.z),m=Math.abs(t.z-o.max.z),d=Math.min(p,_,g,m);d===p?t.x=o.min.x-e:d===_?t.x=o.max.x+e:d===g?t.z=o.min.z-e:t.z=o.max.z+e}}}t.x=Math.max(-9.8,Math.min(9.8,t.x)),t.z=Math.max(-7.8,Math.min(7.8,t.z))}}const Qe=new b,Ni=new b;class Zp{constructor(t,e){this.camera=t,this.domElement=e,this.distance=4.8,this.targetDistance=4.8,this.minDistance=2.4,this.maxDistance=7.5,this.shoulderOffset=.38,this.yaw=Math.PI,this.pitch=.42,this.targetYaw=this.yaw,this.targetPitch=this.pitch,this.minPitch=.05,this.maxPitch=1.15,this.isPointerLocked=!1,this.prevClientX=null,this.prevClientY=null,this.bounds={minX:-10.2,maxX:10.2,minZ:-8.2,maxZ:8.2,minY:.6,maxY:5},this.setupEvents()}setupEvents(){const t=this.domElement;t.addEventListener("click",()=>{document.pointerLockElement!==t&&t.requestPointerLock&&t.requestPointerLock()}),document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===t}),window.addEventListener("mousemove",o=>{const a=.0032*(this.sensitivity||1);if(this.isPointerLocked){const c=o.movementX||0,l=o.movementY||0;this.targetYaw-=c*a,this.targetPitch+=l*a}else{if(this.prevClientX!==null&&this.prevClientY!==null){const c=o.clientX-this.prevClientX,l=o.clientY-this.prevClientY;Math.abs(c)<200&&Math.abs(l)<200&&(this.targetYaw-=c*a,this.targetPitch+=l*a)}this.prevClientX=o.clientX,this.prevClientY=o.clientY}this.targetPitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.targetPitch))}),window.addEventListener("mouseleave",()=>{this.prevClientX=null,this.prevClientY=null}),t.addEventListener("wheel",o=>{o.preventDefault(),this.targetDistance+=o.deltaY*.003,this.targetDistance=Math.max(this.minDistance,Math.min(this.maxDistance,this.targetDistance))},{passive:!1});let e=null,n=0,i=0;t.addEventListener("touchstart",o=>{if(e===null)for(let a=0;a<o.changedTouches.length;a++){const c=o.changedTouches[a];if(c.clientX>=window.innerWidth*.45){e=c.identifier,n=c.clientX,i=c.clientY;break}}},{passive:!0}),t.addEventListener("touchmove",o=>{if(e!==null)for(let a=0;a<o.changedTouches.length;a++){const c=o.changedTouches[a];if(c.identifier===e){const l=c.clientX-n,h=c.clientY-i;n=c.clientX,i=c.clientY;const u=.0055;this.targetYaw-=l*u,this.targetPitch+=h*u,this.targetPitch=Math.max(this.minPitch,Math.min(this.maxPitch,this.targetPitch));break}}},{passive:!0});const r=o=>{if(e!==null){for(let a=0;a<o.changedTouches.length;a++)if(o.changedTouches[a].identifier===e){e=null;break}}};t.addEventListener("touchend",r,{passive:!0}),t.addEventListener("touchcancel",r,{passive:!0})}update(t,e){this.yaw+=(this.targetYaw-this.yaw)*Math.min(1,t*18),this.pitch+=(this.targetPitch-this.pitch)*Math.min(1,t*18),this.distance+=(this.targetDistance-this.distance)*Math.min(1,t*14);const n=Math.cos(this.yaw),i=-Math.sin(this.yaw),r=this.shoulderOffset;Ni.set(e.x+n*.12,e.y+1.25,e.z+i*.12);const o=this.distance*Math.cos(this.pitch),a=this.distance*Math.sin(this.pitch);Qe.x=Ni.x-Math.sin(this.yaw)*o+n*r,Qe.z=Ni.z-Math.cos(this.yaw)*o+i*r,Qe.y=Ni.y+a,Qe.x=Math.max(this.bounds.minX,Math.min(this.bounds.maxX,Qe.x)),Qe.y=Math.max(this.bounds.minY,Math.min(this.bounds.maxY,Qe.y)),Qe.z=Math.max(this.bounds.minZ,Math.min(this.bounds.maxZ,Qe.z)),this.camera.position.lerp(Qe,Math.min(1,t*20)),this.camera.lookAt(Ni)}}class jp{constructor(){this.scene=null,this.particles=[],this.textures={},this.materials={},this.initTextures()}setScene(t){this.scene=t,this.particleGroup=new Mt,this.scene.add(this.particleGroup)}initTextures(){const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,32,4,32,32,30);n.addColorStop(0,"rgba(255, 255, 255, 0.85)"),n.addColorStop(.4,"rgba(250, 240, 230, 0.45)"),n.addColorStop(1,"rgba(240, 230, 220, 0)"),e.fillStyle=n,e.fillRect(0,0,64,64),this.textures.steam=new nn(t),Object.entries({star:"⭐",sparkle:"✨",heart:"💛",coffee:"☕",coin:"🪙"}).forEach(([c,l])=>{const h=document.createElement("canvas");h.width=64,h.height=64;const u=h.getContext("2d");u.font="40px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText(l,32,34),this.textures[c]=new nn(h)});const r=document.createElement("canvas");r.width=64,r.height=64;const o=r.getContext("2d"),a=o.createRadialGradient(26,26,4,32,32,28);a.addColorStop(0,"rgba(255, 255, 255, 0.95)"),a.addColorStop(.5,"rgba(120, 220, 140, 0.7)"),a.addColorStop(1,"rgba(80, 180, 100, 0)"),o.fillStyle=a,o.fillRect(0,0,64,64),this.textures.bubble=new nn(r)}getMaterial(t){return this.materials[t]||(this.materials[t]=new Gr({map:this.textures[t]||this.textures.sparkle,transparent:!0,opacity:.85,depthWrite:!1})),this.materials[t].clone()}spawnSteam(t,e,n,i=.35){if(!this.particleGroup)return;const r=this.getMaterial("steam"),o=new Fi(r);o.position.set(t+(Math.random()-.5)*.15,e,n+(Math.random()-.5)*.15),o.scale.set(i,i,i),this.particleGroup.add(o),this.particles.push({sprite:o,velX:(Math.random()-.5)*.08,velY:.35+Math.random()*.25,velZ:(Math.random()-.5)*.08,life:1.5,maxLife:1.5,growRate:.35,swayFreq:3+Math.random()*2})}spawnBlenderBubble(t,e,n){if(!this.particleGroup)return;const i=this.getMaterial("bubble"),r=new Fi(i);r.position.set(t+(Math.random()-.5)*.18,e+.1,n+(Math.random()-.5)*.18);const o=.12+Math.random()*.1;r.scale.set(o,o,o),this.particleGroup.add(r),this.particles.push({sprite:r,velX:(Math.random()-.5)*.15,velY:.4+Math.random()*.3,velZ:(Math.random()-.5)*.15,life:.8,maxLife:.8,growRate:-.05,swayFreq:5})}spawnCelebrationBurst(t,e,n,i=10){if(!this.particleGroup)return;const r=["star","sparkle","heart","coffee"];for(let o=0;o<i;o++){const a=r[o%r.length],c=this.getMaterial(a),l=new Fi(c);l.position.set(t+(Math.random()-.5)*.2,e+.2,n+(Math.random()-.5)*.2);const h=.32+Math.random()*.15;l.scale.set(h,h,h),this.particleGroup.add(l);const u=o/i*Math.PI*2+(Math.random()-.5)*.5,f=.8+Math.random()*.9;this.particles.push({sprite:l,velX:Math.cos(u)*f,velY:1.1+Math.random()*.8,velZ:Math.sin(u)*f,gravity:1.6,life:1.2,maxLife:1.2,growRate:.1,swayFreq:0})}}spawnCoinPickup(t,e,n){if(this.particleGroup)for(let i=0;i<5;i++){const r=i===0?"coin":"sparkle",o=this.getMaterial(r),a=new Fi(o);a.position.set(t,e+.2,n);const c=.35;a.scale.set(c,c,c),this.particleGroup.add(a),this.particles.push({sprite:a,velX:(Math.random()-.5)*.4,velY:.9+Math.random()*.5,velZ:(Math.random()-.5)*.4,gravity:.8,life:1,maxLife:1,growRate:.15,swayFreq:2})}}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life-=t,n.sprite.position.x+=n.velX*t,n.sprite.position.y+=n.velY*t,n.sprite.position.z+=n.velZ*t,n.gravity&&(n.velY-=n.gravity*t),n.swayFreq>0&&(n.sprite.position.x+=Math.sin(n.life*n.swayFreq)*.008);const i=n.life/n.maxLife;n.sprite.material.opacity=Math.max(0,Math.min(1,i*1.2));const r=n.sprite.scale.x,o=Math.max(.05,r+n.growRate*t);n.sprite.scale.set(o,o,o),n.life<=0&&(this.particleGroup.remove(n.sprite),n.sprite.material.dispose(),this.particles.splice(e,1))}}}const dn=new jp;class Kp{constructor(t,e,n,i,r,o=null,a=null){this.scene=t,this.interactiveSpots=e,this.player=n,this.ordersManager=i,this.ui=r,this.cat=o,this.customerManager=a,this.stations={espresso_machine:{state:"idle",timer:0,baseDuration:1.8,readyItem:"espresso"},cold_bar:{state:"idle",timer:0,baseDuration:1.6,readyItem:"iced_matcha"},pastry_case:{currentIndex:0,pastries:["croissant","donut","muffin","cookie","double_choco_cookie","cinnamon_roll","cheesecake"]}},this.highlightRing=this.createHighlightRing(),this.scene.add(this.highlightRing),this.steamSpawnTimer=0,this.blenderSpawnTimer=0,this.activeSpot=null,this.interactionDistance=1.85}createHighlightRing(){const t=new Is(.55,.7,32);t.rotateX(-Math.PI/2);const e=new Me({color:15051067,side:ke,transparent:!0,opacity:.7}),n=new R(t,e);return n.position.y=.02,n.visible=!1,n}getEspressoDuration(){return Pt.hasUpgrade("faster_espresso")?1:this.stations.espresso_machine.baseDuration}getBlenderDuration(){return Pt.hasUpgrade("faster_blender")?.9:this.stations.cold_bar.baseDuration}update(t){const e=this.stations.espresso_machine,n=this.getEspressoDuration();if(e.state==="brewing"||e.state==="ready"){this.steamSpawnTimer+=t;const c=e.state==="brewing"?.16:.45;this.steamSpawnTimer>=c&&(this.steamSpawnTimer=0,dn.spawnSteam(-4.5+(Math.random()-.5)*.4,1.45,-6.4))}e.state==="brewing"&&(e.timer+=t,e.timer>=n&&(e.state="ready",Yt.playOrderBell(),dn.spawnSteam(-4.5,1.5,-6.4,.45),dn.spawnSteam(-4.5,1.55,-6.4,.45)));const i=this.stations.cold_bar,r=this.getBlenderDuration();i.state==="blending"&&(this.blenderSpawnTimer+=t,this.blenderSpawnTimer>=.12&&(this.blenderSpawnTimer=0,dn.spawnBlenderBubble(1.5,1.48,-6.5)),i.timer+=t,i.timer>=r&&(i.state="ready",Yt.playOrderBell()));let o=null,a=this.interactionDistance*this.interactionDistance;for(let c=0;c<this.interactiveSpots.length;c++){const l=this.interactiveSpots[c],h=this.player.position.x-l.position.x,u=this.player.position.z-l.position.z,f=h*h+u*u;f<a&&(a=f,o=l)}if(this.cat){const c=this.player.position.x-this.cat.position.x,l=this.player.position.z-this.cat.position.z,h=c*c+l*l;h<a&&(a=h,o=this.cat)}if(this.customerManager){const c=this.customerManager.getNearestTableWithTip(this.player.position,2.4);if(c){const l=this.player.position.x-c.x,h=this.player.position.z-c.z,u=l*l+h*h;u<a&&(a=u,o={type:"table_tip",table:c,position:new b(c.x,0,c.z),action:`Collect Table Tip ($${c.tipAmount.toFixed(2)}) 💰`})}}if(this.activeSpot=o,this.activeSpot){this.highlightRing.visible=!0,this.highlightRing.position.set(this.activeSpot.position.x,.025,this.activeSpot.position.z);const c=1+Math.sin(performance.now()*.008)*.08;this.highlightRing.scale.set(c,c,c);const l=this.getPromptText(this.activeSpot);this.ui.showInteractionPrompt(l,"E");const h=this.getAvailableChoices(this.activeSpot);this.ui.showStationMenu(h),this.player.hasBufferedInteract()&&(this.player.consumeBufferedInteract(),this.interact())}else this.highlightRing.visible=!1,this.ui.hideInteractionPrompt(),this.ui.hideStationMenu()}getAvailableChoices(t){var e,n;if(!t)return null;if(t.type==="coffee_machine"){const i=this.stations.espresso_machine;if(i.state==="idle")return{title:"☕ Espresso Machine",subtitle:"Pull fresh coffee shot:",items:[{id:"espresso",label:"Hot Espresso",icon:"☕",isNeeded:!!((n=(e=this.ordersManager)==null?void 0:e.tickets)==null?void 0:n.some(o=>o.items.some((a,c)=>(a==="espresso"||a==="latte"||a==="caramel_latte")&&!o.fulfilled[c]))),key:"1"}]};if(i.state==="ready")return{title:"☕ Espresso Ready!",subtitle:"Take fresh coffee for your tray:",items:[{id:"espresso",label:"Take Espresso",icon:"☕",isNeeded:!0,key:"1"}]}}if(t.type==="syrup_bar"){const i=this.player.hasItem("espresso");return{title:"🍯 Flavor Syrup Bar",subtitle:i?"Upgrade your coffee with syrup:":"Requires Espresso in hand ☕",items:[{id:"latte",label:"Vanilla Latte",icon:"🥛"},{id:"caramel_latte",label:"Caramel Macchiato",icon:"🍯"}].map((o,a)=>{var l,h;const c=(h=(l=this.ordersManager)==null?void 0:l.tickets)==null?void 0:h.some(u=>u.items.some((f,p)=>f===o.id&&!u.fulfilled[p]));return{id:o.id,label:o.label,icon:o.icon,isNeeded:!!c,disabled:!i,key:String(a+1)}})}}if(t.type==="cold_bar"){const i=this.stations.cold_bar;if(i.state==="idle")return{title:"🥤 Cold Drink & Blender Bar",subtitle:"Choose a drink to blend:",items:[{id:"iced_matcha",label:"Iced Matcha",icon:"🍵"},{id:"berry_smoothie",label:"Berry Smoothie",icon:"🥤"}].map((o,a)=>{var l,h;const c=(h=(l=this.ordersManager)==null?void 0:l.tickets)==null?void 0:h.some(u=>u.items.some((f,p)=>f===o.id&&!u.fulfilled[p]));return{id:o.id,label:o.label,icon:o.icon,isNeeded:!!c,key:String(a+1)}})};if(i.state==="ready"){const r=he[i.readyItem]||{name:i.readyItem,icon:"🥤"};return{title:"🥤 Drink Ready!",subtitle:"Take freshly blended drink:",items:[{id:i.readyItem,label:`Take ${r.name}`,icon:r.icon,isNeeded:!0,key:"1"}]}}}return t.type==="pastry_case"?{title:"🥐 Bakery Display Case",subtitle:"Select any treat for your tray:",items:[{id:"cookie",label:"Choc-Chip Cookie",icon:"🍪"},{id:"croissant",label:"Golden Croissant",icon:"🥐"},{id:"donut",label:"Choco Donut",icon:"🍩"},{id:"double_choco_cookie",label:"Double Choco Cookie",icon:"🍫"},{id:"muffin",label:"Blueberry Muffin",icon:"🧁"},{id:"cinnamon_roll",label:"Cinnamon Roll",icon:"🍥"},{id:"cheesecake",label:"Strawberry Cheesecake",icon:"🍰"}].map((r,o)=>{var c,l;const a=(l=(c=this.ordersManager)==null?void 0:c.tickets)==null?void 0:l.some(h=>h.items.some((u,f)=>u===r.id&&!h.fulfilled[f]));return{id:r.id,label:r.label,icon:r.icon,isNeeded:!!a,key:String(o+1)}})}:null}getPromptText(t){if(t.type==="table_tip")return`Collect Table Tip ($${t.table.tipAmount.toFixed(2)}) 💰 [E]`;if(t.type==="jukebox"){const e=Yt.getCurrentTrack();return`Switch Track (${e?e.name:"Lofi"}) 📻 [E]`}if(t.type==="cafe_cat")return"Pet Mocha 🐱 [E]";if(t.type==="front_desk"){const e=this.ordersManager.getTicketAtStation(t.stationIndex);if(e){const n=e.items.filter((i,r)=>!e.fulfilled[r]).map(i=>{const r=he[i];return r?`${r.icon} ${r.name}`:i}).join(", ");return`Serve ${e.customerName} [E] (Needs: ${n||"Complete! 🛎️"})`}else return`Front Counter #${t.stationIndex+1}`}if(t.type==="coffee_machine"){const e=this.stations.espresso_machine,n=this.getEspressoDuration();if(e.state==="idle")return"Brew Coffee ☕ [E]";if(e.state==="brewing")return`Brewing Coffee... ☕ (${Math.ceil((n-e.timer)*10)/10}s)`;if(e.state==="ready")return"Take Coffee ☕ [E]"}if(t.type==="syrup_bar")return this.player.hasItem("espresso")?"Add Sweet Syrup 🍯 [E]":"Syrup Bar (Needs coffee in hand)";if(t.type==="cold_bar"){const e=this.stations.cold_bar,n=this.getBlenderDuration();if(e.state==="idle")return"Blend Drink 🥤 [E]";if(e.state==="blending")return`Blending Drink... 🥤 (${Math.ceil((n-e.timer)*10)/10}s)`;if(e.state==="ready")return"Take Drink 🥤 [E]"}if(t.type==="pastry_case"){const e=this.ordersManager.getNeededPastry(),n=he[e];return`Pick Up ${n?`${n.icon} ${n.name}`:"🥐 Fresh Pastry"} [E]`}return t.type==="trash_bin"?"Throw Away Item 🗑️ [E]":`${t.action} [E]`}interactWithChoice(t){if(!this.activeSpot)return!1;const e=this.activeSpot;if(e.type==="coffee_machine"){const n=this.stations.espresso_machine;if(n.state==="idle")return n.state="brewing",n.timer=0,Yt.playEspressoBrew(),this.ui.showFloatingMessage(e.position,"☕ Grinding & Brewing...","#e5a93b"),!0;if(n.state==="ready")return this.player.getFreeSlotCount()===0?(this.ui.showFloatingMessage(this.player.position,"Tray is full! 🎒","#ffa726"),!1):(this.player.addItem("espresso"),n.state="idle",Yt.playItemPickup(),this.ui.showFloatingMessage(this.player.position,"+ ☕ Hot Espresso","#faecd8"),!0)}if(e.type==="syrup_bar"&&(t==="latte"||t==="caramel_latte")){if(!this.player.hasItem("espresso"))return this.ui.showFloatingMessage(this.player.position,"Needs espresso in hand first! ☕","#ffa726"),!1;for(let n=0;n<this.player.capacity;n++)if(this.player.inventory[n]==="espresso"){this.player.removeItem(n),this.player.addItem(t),Yt.playItemPickup();const i=he[t]||{name:t,icon:"🥛"};return this.ui.showFloatingMessage(this.player.position,`+ ${i.icon} ${i.name}`,"#faecd8"),!0}return!1}if(e.type==="cold_bar"){const n=this.stations.cold_bar;if(n.state==="idle"){n.readyItem=t,n.state="blending",n.timer=0,Yt.playBlender();const i=he[t]||{name:t};return this.ui.showFloatingMessage(e.position,`🥤 Blending ${i.name}...`,"#48bb78"),!0}else if(n.state==="ready"){if(this.player.getFreeSlotCount()===0)return this.ui.showFloatingMessage(this.player.position,"Tray is full! 🎒","#ffa726"),!1;this.player.addItem(n.readyItem);const i=he[n.readyItem]||{name:n.readyItem,icon:"🥤"};return n.state="idle",Yt.playItemPickup(),this.ui.showFloatingMessage(this.player.position,`+ ${i.icon} ${i.name}`,"#faecd8"),!0}}if(e.type==="pastry_case"){if(this.player.getFreeSlotCount()===0)return this.ui.showFloatingMessage(this.player.position,"Tray is full! 🎒","#ffa726"),!1;this.player.addItem(t);const n=he[t]||{name:t,icon:"🥐"};return Yt.playItemPickup(),this.ui.showFloatingMessage(this.player.position,`+ ${n.icon} ${n.name}`,"#faecd8"),!0}return this.interact()}interact(){if(!this.activeSpot)return!1;const t=this.activeSpot;if(t.type==="table_tip"){const e=this.customerManager.collectTip(t.table,this.player);return this.ordersManager&&(this.ordersManager.totalEarnings+=e,this.ordersManager.totalTips+=e),this.player.triggerHappyReaction(1.6),this.ui.showFloatingMessage(this.player.position,`+ $${e.toFixed(2)} Table Tip! 🪙🧹`,"#81c784",2400),!0}if(t.type==="cafe_cat"){const e=t.pet(this.player);return this.player.triggerHappyReaction(2),Pt.recordCatPet(1.5),this.ordersManager&&(this.ordersManager.totalTips+=1.5,this.ordersManager.totalEarnings+=1.5),this.ui.showFloatingMessage(this.player.position,e.message,"#ff80ab",3500),!0}if(t.type==="jukebox"){const e=Yt.nextTrack();return Yt.playOrderBell(),this.player.triggerHappyReaction(1.4),dn.spawnCelebrationBurst(t.position.x,1.8,t.position.z,8),this.ui.showFloatingMessage(this.player.position,`📻 Now Playing: ${e.name} 🎶`,"#ffd54f",2800),!0}if(t.type==="front_desk"){const e=this.ordersManager.getTicketAtStation(t.stationIndex);if(!e)return this.ui.showFloatingMessage(this.player.position,"No customer order here yet!","#ffa726",2500),!1;const n=this.ordersManager.deliverItems(e,this.player);return n.success?!0:(this.ui.showFloatingMessage(this.player.position,n.reason||"Missing items for this order!","#ef5350",4500),!1)}if(t.type==="coffee_machine"){const e=this.stations.espresso_machine;if(e.state==="idle")return e.state="brewing",e.timer=0,Yt.playEspressoBrew(),this.ui.showFloatingMessage(t.position,"☕ Grinding & Brewing...","#e5a93b"),!0;if(e.state==="ready")return this.player.getFreeSlotCount()===0?(this.ui.showFloatingMessage(this.player.position,"Serving tray is full!","#ef5350"),!1):(this.player.addItem("espresso"),e.state="idle",this.ui.showFloatingMessage(this.player.position,"+ ☕ Hot Espresso","#faecd8"),!0)}if(t.type==="syrup_bar"){for(let e=0;e<this.player.capacity;e++)if(this.player.inventory[e]==="espresso"){const i=this.ordersManager.getNeededDrink()==="caramel_latte"?"caramel_latte":"latte";return this.player.removeItem(e),this.player.addItem(i),Yt.playItemPickup(),this.ui.showFloatingMessage(this.player.position,`+ ${he[i].icon} ${he[i].name}`,"#faecd8"),!0}return this.ui.showFloatingMessage(this.player.position,"Need Espresso on tray to add syrup!","#ef5350"),!1}if(t.type==="cold_bar"){const e=this.stations.cold_bar;if(e.state==="idle"){const n=this.ordersManager.getNeededColdDrink();return e.readyItem=n||(Math.random()>.5?"iced_matcha":"berry_smoothie"),e.state="blending",e.timer=0,Yt.playBlender(),this.ui.showFloatingMessage(t.position,`🥤 Blending ${he[e.readyItem].name}...`,"#48bb78"),!0}else if(e.state==="ready"){if(this.player.getFreeSlotCount()===0)return this.ui.showFloatingMessage(this.player.position,"Serving tray is full!","#ef5350"),!1;this.player.addItem(e.readyItem);const n=he[e.readyItem];return e.state="idle",this.ui.showFloatingMessage(this.player.position,`+ ${n.icon} ${n.name}`,"#faecd8"),!0}}if(t.type==="pastry_case"){if(this.player.getFreeSlotCount()===0)return this.ui.showFloatingMessage(this.player.position,"Serving tray is full!","#ef5350"),!1;const e=this.ordersManager.getNeededPastry(),n=this.stations.pastry_case.pastries,i=e||n[Math.floor(Math.random()*n.length)];this.player.addItem(i);const r=he[i];return Yt.playItemPickup(),this.ui.showFloatingMessage(this.player.position,`+ ${r.icon} ${r.name}`,"#faecd8"),!0}return t.type==="trash_bin"?this.player.discardTopItem()?(this.ui.showFloatingMessage(this.player.position,"🗑️ Item discarded","#a0a0a0"),!0):(this.ui.showFloatingMessage(this.player.position,"Tray already empty!","#ffa726"),!1):!1}}const yo=["Emma","Liam","Olivia","Noah","Ava","Ethan","Sophia","Mason","Isabella","Lucas","Mia","Oliver","Harper","Elijah","Chloe","Aiden","Zoe","Leo","Maya","Julian","Stella","Henry","Lily","Felix"],So=[["espresso"],["latte"],["caramel_latte"],["iced_matcha"],["berry_smoothie"],["croissant"],["cookie"],["double_choco_cookie"],["cinnamon_roll"],["cheesecake"],["espresso","cookie"],["espresso","double_choco_cookie"],["latte","donut"],["latte","cinnamon_roll"],["caramel_latte","cookie"],["caramel_latte","cheesecake"],["iced_matcha","muffin"],["iced_matcha","double_choco_cookie"],["berry_smoothie","croissant"],["berry_smoothie","cheesecake"],["latte","croissant"]];class Jp{constructor(t,e=null){this.ui=t,this.customerManager=e,this.tickets=[],this.stationSlots=[null,null,null],this.ticketCounter=1,this.totalEarnings=Pt.data.career.totalEarnings||0,this.totalTips=Pt.data.career.totalTips||0,this.customersServed=Pt.data.career.ordersServed||0,this.customersMissed=0,this.satisfactionRating=5,this.spawnTimer=.8,this.spawnInterval=6.5}setCustomerManager(t){this.customerManager=t}setCafeEnv(t){this.cafeEnv=t}update(t){this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnTimer=this.spawnInterval+Math.random()*3,this.trySpawnCustomer()),this.ui.updateOrdersDisplay(this.tickets),this.ui.updateStatsDisplay({money:this.totalEarnings,tips:this.totalTips,rating:this.satisfactionRating,served:this.customersServed,balance:Pt.data.career.currentBalance})}trySpawnCustomer(){const t=[];for(let o=0;o<3;o++)this.stationSlots[o]||t.push(o);if(t.length===0)return;const e=t[Math.floor(Math.random()*t.length)],n=So[Math.floor(Math.random()*So.length)],i=yo[Math.floor(Math.random()*yo.length)],r={id:this.ticketCounter++,stationIndex:e,customerName:i,items:[...n],fulfilled:n.map(()=>!1)};this.tickets.push(r),this.stationSlots[e]=r,Yt.playDoorChime(),this.customerManager&&this.customerManager.onOrderCreated(r),this.cafeEnv&&this.cafeEnv.updateStationDisplay(e,r)}getTicketAtStation(t){return this.stationSlots[t]||null}getNeededDrink(){for(const t of this.tickets)for(let e=0;e<t.items.length;e++)if(!t.fulfilled[e]){const n=t.items[e];if(n==="latte"||n==="caramel_latte")return n}return null}getNeededColdDrink(){for(const t of this.tickets)for(let e=0;e<t.items.length;e++)if(!t.fulfilled[e]){const n=t.items[e];if(n==="iced_matcha"||n==="berry_smoothie")return n}return null}getNeededPastry(){var t;for(const e of this.tickets)for(let n=0;n<e.items.length;n++)if(!e.fulfilled[n]){const i=e.items[n];if(((t=he[i])==null?void 0:t.category)==="pastry")return i}return null}deliverItems(t,e){let n=0;for(let r=0;r<e.capacity;r++){const o=e.inventory[r];if(o){for(let a=0;a<t.items.length;a++)if(!t.fulfilled[a]&&t.items[a]===o){t.fulfilled[a]=!0,e.removeItem(r),n++;break}}}return n===0?{success:!1,reason:`Needs ${t.items.filter((o,a)=>!t.fulfilled[a]).map(o=>{var a,c;return`${((a=he[o])==null?void 0:a.icon)||"📦"} ${((c=he[o])==null?void 0:c.name)||o}`}).join(", ")}!`}:(this.cafeEnv&&this.cafeEnv.updateStationDisplay(t.stationIndex,t),t.fulfilled.every(r=>r)?(e.triggerHappyReaction&&e.triggerHappyReaction(2),this.completeOrder(t,e.position)):(e.triggerHappyReaction&&e.triggerHappyReaction(1.2),Yt.playOrderBell(),this.ui.showFloatingMessage(e.position,"Partially served! Bring remaining item!","#ffd54f")),{success:!0})}completeOrder(t,e){let n=0;t.items.forEach(c=>{var l;n+=((l=he[c])==null?void 0:l.price)||4});const i=Pt.hasUpgrade("golden_jar")?1.25:1,r=(n*.25+Math.random()*1)*i,o=n+r;if(this.totalEarnings+=o,this.totalTips+=r,this.customersServed++,Pt.recordOrderCompleted(o,r),this.customerManager&&this.customerManager.onOrderFulfilled(t),this.cafeEnv){const c=t.stationIndex;this.cafeEnv.updateStationDisplay(c,t),setTimeout(()=>{this.cafeEnv&&!this.stationSlots[c]&&this.cafeEnv.updateStationDisplay(c,null)},2e3)}this.satisfactionRating=5,Yt.playCashRegister(),dn.spawnCelebrationBurst(e.x,e.y+.6,e.z,16),this.ui.showFloatingCash(e,o,r);const a=this.tickets.indexOf(t);a!==-1&&this.tickets.splice(a,1),this.stationSlots[t.stationIndex]=null}}class Qp{constructor(t=null){this.onQuickPickCallback=t,this.promptEl=document.getElementById("interaction-prompt"),this.promptActionEl=document.getElementById("prompt-action"),this.promptKeyEl=document.getElementById("prompt-key"),this.quickPickContainer=document.getElementById("quick-pick-container"),this.ordersContainer=document.getElementById("orders-container"),this.stationMenuEl=document.getElementById("station-menu"),this.stationMenuTitle=document.getElementById("station-menu-title"),this.stationMenuSub=document.getElementById("station-menu-sub"),this.stationMenuItems=document.getElementById("station-menu-items"),this.lastMenuSig="",this.statMoney=document.getElementById("stat-money"),this.statBalance=document.getElementById("stat-balance"),this.statTips=document.getElementById("stat-tips"),this.statRating=document.getElementById("stat-rating"),this.statServed=document.getElementById("stat-served"),this.traySlots=[document.getElementById("tray-slot-0"),document.getElementById("tray-slot-1"),document.getElementById("tray-slot-2")],this.recipeModal=document.getElementById("recipe-modal"),this.welcomeModal=document.getElementById("welcome-modal"),this.shopModal=document.getElementById("shop-modal"),this.settingsModal=document.getElementById("settings-modal"),this.lastStatsStr="",this.lastOrdersStr="",this.lastPromptAction="",this.setupModalEvents(),this.setupSettingsEvents(),this.setupShopEvents(),Pt.subscribe(()=>{this.updateShopDisplay()})}setQuickPickCallback(t){this.onQuickPickCallback=t}setupModalEvents(){const t=document.getElementById("btn-recipes"),e=document.getElementById("btn-close-recipes");t&&t.addEventListener("click",()=>this.toggleRecipeModal(!0)),e&&e.addEventListener("click",()=>this.toggleRecipeModal(!1));const n=document.getElementById("btn-upgrades"),i=document.getElementById("btn-close-shop");n&&n.addEventListener("click",()=>this.toggleShopModal(!0)),i&&i.addEventListener("click",()=>this.toggleShopModal(!1));const r=document.getElementById("btn-settings"),o=document.getElementById("btn-close-settings");r&&r.addEventListener("click",()=>this.toggleSettingsModal(!0)),o&&o.addEventListener("click",()=>this.toggleSettingsModal(!1)),window.addEventListener("keydown",a=>{var c,l,h;a.code==="KeyR"?this.toggleRecipeModal():a.code==="KeyU"?this.toggleShopModal():a.code==="Escape"&&((c=this.recipeModal)!=null&&c.classList.contains("hidden")?(l=this.shopModal)!=null&&l.classList.contains("hidden")?(h=this.settingsModal)!=null&&h.classList.contains("hidden")?this.toggleSettingsModal(!0):this.toggleSettingsModal(!1):this.toggleShopModal(!1):this.toggleRecipeModal(!1))})}setupSettingsEvents(){const t=document.getElementById("setting-master-vol"),e=document.getElementById("setting-bgm-vol"),n=document.getElementById("setting-sfx-vol"),i=document.getElementById("setting-sens"),r=document.getElementById("setting-shadows"),o=document.getElementById("btn-reset-save");t&&(t.value=Pt.data.settings.masterVolume),e&&(e.value=Pt.data.settings.bgmVolume),n&&(n.value=Pt.data.settings.sfxVolume),i&&(i.value=Pt.data.settings.cameraSensitivity),r&&(r.checked=Pt.data.settings.highQualityShadows),t&&t.addEventListener("input",a=>Pt.updateSettings({masterVolume:parseFloat(a.target.value)})),e&&e.addEventListener("input",a=>Pt.updateSettings({bgmVolume:parseFloat(a.target.value)})),n&&n.addEventListener("input",a=>Pt.updateSettings({sfxVolume:parseFloat(a.target.value)})),i&&i.addEventListener("input",a=>Pt.updateSettings({cameraSensitivity:parseFloat(a.target.value)})),r&&r.addEventListener("change",a=>Pt.updateSettings({highQualityShadows:a.target.checked})),o&&o.addEventListener("click",()=>{confirm("Are you sure you want to reset all career earnings and upgrades?")&&(Pt.resetAll(),this.showFloatingMessage({x:0,y:0,z:0},"Career Save Reset!","#ef5350",2500),this.toggleSettingsModal(!1))})}setupShopEvents(){this.updateShopDisplay()}updateShopDisplay(){const t=document.getElementById("shop-items-container"),e=document.getElementById("shop-balance");if(e&&(e.textContent=`$${Pt.data.career.currentBalance.toFixed(2)}`),!t)return;t.innerHTML="",Object.values(Lr).forEach(i=>{const r=Pt.hasUpgrade(i.id),o=Pt.canAffordUpgrade(i.id),a=document.createElement("div");a.className=`upgrade-card ${r?"owned":""}`,a.innerHTML=`
        <div class="upgrade-info">
          <span class="upgrade-icon">${i.icon}</span>
          <div>
            <div style="font-size: 15px; font-weight: 800; color: ${r?"#81c784":"#faecd8"};">${i.name}</div>
            <div style="font-size: 12px; color: #bcaaa4; margin-top: 2px;">${i.description}</div>
            <div style="font-size: 13px; font-weight: 800; color: #ffd700; margin-top: 4px;">Price: $${i.cost.toFixed(2)}</div>
          </div>
        </div>
      `;const c=document.createElement("button");r?(c.className="btn-buy owned-badge",c.textContent="OWNED ✓",c.disabled=!0):(c.className="btn-buy",c.textContent=`BUY ($${i.cost.toFixed(0)})`,c.disabled=!o,c.addEventListener("click",()=>{Pt.purchaseUpgrade(i.id)&&(this.showFloatingMessage({x:0,y:0,z:0},`⭐ Purchased ${i.name}!`,"#81c784",3e3),this.updateShopDisplay())})),a.appendChild(c),t.appendChild(a)})}toggleRecipeModal(t){if(!this.recipeModal)return;const e=this.recipeModal.classList.contains("hidden");(t!==void 0?!t:!e)?this.recipeModal.classList.add("hidden"):this.recipeModal.classList.remove("hidden")}toggleShopModal(t){if(!this.shopModal)return;const e=this.shopModal.classList.contains("hidden");(t!==void 0?!t:!e)?this.shopModal.classList.add("hidden"):(this.updateShopDisplay(),this.shopModal.classList.remove("hidden"))}toggleSettingsModal(t){if(!this.settingsModal)return;const e=this.settingsModal.classList.contains("hidden");(t!==void 0?!t:!e)?this.settingsModal.classList.add("hidden"):this.settingsModal.classList.remove("hidden")}hideWelcomeModal(){this.welcomeModal&&this.welcomeModal.classList.add("hidden")}showInteractionPrompt(t,e="E"){this.promptEl&&(this.promptEl.style.display="flex",this.promptActionEl.textContent=t,this.promptKeyEl.textContent=e,this.quickPickContainer&&(this.quickPickContainer.innerHTML=""))}hideInteractionPrompt(){this.promptEl&&(this.promptEl.style.display="none")}showStationMenu(t){if(!this.stationMenuEl)return;if(!t||!t.items||t.items.length===0){this.hideStationMenu();return}const e=`${t.title}_${t.items.map(n=>`${n.id}_${n.isNeeded}_${n.disabled}`).join("|")}`;this.lastMenuSig!==e&&(this.lastMenuSig=e,this.stationMenuEl.classList.remove("hidden"),this.stationMenuTitle&&(this.stationMenuTitle.textContent=t.title),this.stationMenuSub&&(this.stationMenuSub.textContent=t.subtitle||"Click or tap to choose:"),this.stationMenuItems&&(this.stationMenuItems.innerHTML="",t.items.forEach(n=>{const i=document.createElement("div");i.className=`station-item-card ${n.isNeeded?"needed":""} ${n.disabled?"disabled":""}`,i.innerHTML=`
          ${n.key?`<span class="station-item-key">${n.key}</span>`:""}
          <span class="station-item-icon">${n.icon||"📦"}</span>
          <span class="station-item-name">${n.label||n.name}</span>
          ${n.isNeeded?'<span class="station-item-needed-badge">⭐ Order</span>':""}
        `,i.addEventListener("click",r=>{r.stopPropagation(),!n.disabled&&this.onQuickPickCallback&&this.onQuickPickCallback(n.id)}),this.stationMenuItems.appendChild(i)})))}hideStationMenu(){this.stationMenuEl&&(this.stationMenuEl.classList.contains("hidden")||(this.stationMenuEl.classList.add("hidden"),this.lastMenuSig=""))}updateInventoryDisplay(t){const e=Pt.hasUpgrade("triple_tray");this.traySlots[2]&&(e?this.traySlots[2].classList.remove("hidden"):this.traySlots[2].classList.add("hidden"));const n=e?3:2;for(let i=0;i<n;i++){const r=this.traySlots[i];if(!r)continue;const o=t[i],a=r.querySelector(".tray-slot-icon"),c=r.querySelector(".tray-slot-label");o&&he[o]?(r.classList.add("filled"),a&&(a.textContent=he[o].icon),c&&(c.textContent=he[o].name)):(r.classList.remove("filled"),a&&(a.textContent=""),c&&(c.textContent="Empty"))}}updateStatsDisplay({money:t,tips:e,rating:n,served:i,balance:r}){const o=`${t.toFixed(2)}_${e.toFixed(2)}_${n}_${i}_${r==null?void 0:r.toFixed(2)}`;if(this.lastStatsStr!==o&&(this.lastStatsStr=o,this.statMoney&&(this.statMoney.textContent=`$${t.toFixed(2)}`),this.statBalance&&r!==void 0&&(this.statBalance.textContent=`$${r.toFixed(2)}`),this.statTips&&(this.statTips.textContent=`$${e.toFixed(2)}`),this.statServed&&(this.statServed.textContent=i),this.statRating)){const a=Math.max(1,Math.min(5,Math.round(n)));this.statRating.textContent="⭐".repeat(a)}}updateOrdersDisplay(t){if(!this.ordersContainer)return;const e=t.map(n=>`${n.id}_${n.fulfilled.join("")}`).join("|");this.lastOrdersStr!==e&&(this.lastOrdersStr=e,this.ordersContainer.innerHTML="",t.forEach(n=>{const i=document.createElement("div");i.className="order-capsule";const r=document.createElement("span");r.className="order-capsule-name",r.innerHTML=`<span style="background: #5d4037; color: #ffd700; padding: 2px 6px; border-radius: 4px; font-size: 11px; margin-right: 6px; font-weight: 800;">COUNTER #${n.stationIndex+1}</span> 🧑 ${n.customerName}`,i.appendChild(r);const o=document.createElement("div");o.className="order-capsule-items",n.items.forEach((a,c)=>{const l=he[a]||{name:a,icon:"📦"},h=document.createElement("span");h.className=`order-item-badge ${n.fulfilled[c]?"done":""}`,h.textContent=l.icon+(n.fulfilled[c]?" ✓":""),h.title=l.name,o.appendChild(h)}),i.appendChild(o),this.ordersContainer.appendChild(i)}))}showFloatingCash(t,e,n){const i=document.createElement("div");i.className="floating-popup",i.innerHTML=`⭐ +$${e.toFixed(2)} <span style="font-size: 14.5px; font-weight: 800; color: #81c784;">(+$${n.toFixed(2)} Tip!)</span> ⭐`,i.style.left="50%",i.style.top="45%",i.style.transform="translate(-50%, -50%)",document.body.appendChild(i),setTimeout(()=>{i.parentNode&&i.remove()},1500)}showFloatingMessage(t,e,n="#faecd8",i=1800){const r=document.createElement("div");r.className="floating-popup",r.textContent=e,r.style.color=n,r.style.fontSize="18px",r.style.left="50%",r.style.top="50%",r.style.transform="translate(-50%, -50%)",document.body.appendChild(r),setTimeout(()=>{r.parentNode&&r.remove()},i)}}class tm{constructor(t,e=[]){this.scene=t,this.colliders=e,this.root=new Mt,this.scene.add(this.root),this.position=new b(.5,0,4.5),this.root.position.copy(this.position),this.rotation=Math.PI*.85,this.root.rotation.y=this.rotation,this.speed=1.6,this.targetPos=new b().copy(this.position),this.state="idle_sit",this.stateTimer=4,this.animTime=0,this.tailTime=0,this.purrTimer=0,this.waypoints=[{pos:new b(0,0,6.2),name:"Sunny Window Spot",bias:"sleep"},{pos:new b(3.2,0,4),name:"Dining Table Area",bias:"sit"},{pos:new b(-4.5,0,4.2),name:"Window Lounge",bias:"sit"},{pos:new b(-7.2,0,1.2),name:"Near Plush Booth",bias:"sleep"},{pos:new b(-1.2,0,1.8),name:"Front Counter Corner",bias:"sit"},{pos:new b(6.5,0,3.2),name:"East Table Corner",bias:"walk"},{pos:new b(-8.2,0,-5.2),name:"Potted Plant Cozy Nook",bias:"sleep"}],this.createMaterials(),this.buildCatModel(),this.setupParticles(),this.id="cafe_cat_mocha",this.name="Mocha the Cafe Cat",this.type="cafe_cat",this.action="Pet Mocha the Cafe Cat",this.icon="🐱"}createMaterials(){this.gingerMat=new X({color:14645800,roughness:.45,metalness:.04}),this.creamMat=new X({color:16709098,roughness:.5,metalness:.02}),this.stripeMat=new X({color:10242069,roughness:.55}),this.pinkMat=new X({color:15764610,roughness:.35}),this.eyeMat=new X({color:2600544,roughness:.1,metalness:.2}),this.pupilMat=new Me({color:1118481}),this.eyeSpecMat=new Me({color:16777215}),this.collarMat=new X({color:13840175,roughness:.4}),this.brassMat=new X({color:13938487,metalness:.85,roughness:.25}),this.whiskerMat=new Me({color:4073251})}buildCatModel(){this.bodyGroup=new Mt,this.bodyGroup.position.y=.22,this.root.add(this.bodyGroup),this.torso=new Mt,this.bodyGroup.add(this.torso);const t=new Gt(.24,18,14);t.scale(.85,.9,1.45);const e=new R(t,this.gingerMat);e.castShadow=!0,e.receiveShadow=!0,this.torso.add(e);const n=new Gt(.235,16,12);n.scale(.72,.75,1.25);const i=new R(n,this.creamMat);i.position.set(0,-.06,.05),this.torso.add(i),[-.18,0,.18].forEach((U,k)=>{const Y=new ue(.205,.016+(k===1?.004:0),8,16,Math.PI*.75);Y.rotateX(Math.PI/2),Y.rotateZ(Math.PI*.62);const P=new R(Y,this.stripeMat);P.position.set(0,.06,U),this.torso.add(P)}),this.head=new Mt,this.head.position.set(0,.14,.3),this.torso.add(this.head);const r=new Gt(.18,18,16);r.scale(1.15,.95,1.05);const o=new R(r,this.gingerMat);o.castShadow=!0,this.head.add(o);const a=new Mt;a.position.set(0,-.05,.14),this.head.add(a);const c=new Gt(.065,12,10);c.scale(1.2,.9,.9);const l=new R(c,this.creamMat);l.position.set(-.045,0,0),a.add(l);const h=new R(c,this.creamMat);h.position.set(.045,0,0),a.add(h);const u=new Wn(.024,.022,4);u.rotateX(Math.PI);const f=new R(u,this.pinkMat);f.position.set(0,.02,.055),a.add(f),[-1,1].forEach(U=>{[-.015,.01].forEach(k=>{const Y=new st(.002,.002,.12,4),P=new R(Y,this.whiskerMat);P.rotation.z=U*(Math.PI/2+k*3),P.rotation.y=U*.2,P.position.set(U*.1,k,.03),a.add(P)})}),this.eyes=[],[-.075,.075].forEach((U,k)=>{const Y=new Mt;Y.position.set(U,.02,.145);const P=new Gt(.042,14,12);P.scale(.9,1.1,.7);const N=new R(P,this.eyeMat);Y.add(N);const H=new st(.01,.01,.065,8),$=new R(H,this.pupilMat);$.position.set(0,0,.026),Y.add($);const q=new R(new Gt(.011,8,8),this.eyeSpecMat);q.position.set(k===0?.012:-.012,.014,.032),Y.add(q),this.head.add(Y),this.eyes.push(Y)}),this.leftEar=this.createEar(!0),this.leftEar.position.set(-.11,.14,-.02),this.leftEar.rotation.set(-.1,.1,-.25),this.head.add(this.leftEar),this.rightEar=this.createEar(!1),this.rightEar.position.set(.11,.14,-.02),this.rightEar.rotation.set(-.1,-.1,.25),this.head.add(this.rightEar);const p=new ue(.15,.018,8,20);p.rotateX(Math.PI/2);const _=new R(p,this.collarMat);_.position.set(0,.02,.2),this.torso.add(_);const g=new Mt;g.position.set(0,-.09,.31);const m=new R(new Gt(.036,12,10),this.brassMat);g.add(m);const d=new R(new ue(.037,.006,6,14),this.brassMat);g.add(d),this.torso.add(g),this.frontLeftLeg=this.createLeg(!0,!0),this.frontLeftLeg.position.set(-.11,-.04,.2),this.torso.add(this.frontLeftLeg),this.frontRightLeg=this.createLeg(!1,!0),this.frontRightLeg.position.set(.11,-.04,.2),this.torso.add(this.frontRightLeg),this.backLeftLeg=this.createLeg(!0,!1),this.backLeftLeg.position.set(-.12,-.03,-.18),this.torso.add(this.backLeftLeg),this.backRightLeg=this.createLeg(!1,!1),this.backRightLeg.position.set(.12,-.03,-.18),this.torso.add(this.backRightLeg),this.tailRoot=new Mt,this.tailRoot.position.set(0,.05,-.32),this.torso.add(this.tailRoot);const E=new st(.038,.042,.16,10);E.translate(0,.08,0);const M=new R(E,this.gingerMat);this.tailRoot.add(M),this.tailMid=new Mt,this.tailMid.position.set(0,.16,0),this.tailRoot.add(this.tailMid);const w=new st(.032,.038,.16,10);w.translate(0,.08,0);const I=new R(w,this.gingerMat);this.tailMid.add(I),this.tailTip=new Mt,this.tailTip.position.set(0,.16,0),this.tailMid.add(this.tailTip);const A=new st(.022,.032,.14,10);A.translate(0,.07,0);const C=new R(A,this.creamMat);this.tailTip.add(C);const W=new R(new Gt(.022,8,8),this.creamMat);W.position.y=.14,this.tailTip.add(W),this.tailRoot.rotation.x=-1.2;const x=new Rn(.38,16);x.rotateX(-Math.PI/2);const T=new Me({color:0,transparent:!0,opacity:.32});this.groundShadow=new R(x,T),this.groundShadow.position.y=.012,this.root.add(this.groundShadow),this.root.traverse(U=>{U.isMesh&&(U.castShadow=!0,U.receiveShadow=!0)})}createEar(t){const e=new Mt,n=new Wn(.07,.12,4);n.rotateY(Math.PI/4);const i=new R(n,this.gingerMat);i.castShadow=!0,e.add(i);const r=new Wn(.048,.09,4);r.rotateY(Math.PI/4);const o=new R(r,this.pinkMat);return o.position.set(0,-.01,.02),e.add(o),e}createLeg(t,e){const n=new Mt,i=new st(.046,.038,.15,10),r=new R(i,this.gingerMat);r.position.y=-.075,r.castShadow=!0,n.add(r);const o=new Gt(.048,10,8);o.scale(1.1,.75,1.3);const a=new R(o,this.creamMat);a.position.set(0,-.15,.025),a.castShadow=!0,n.add(a);const c=new R(new Gt(.016,6,6),this.pinkMat);return c.position.set(0,-.17,.02),n.add(c),n}setupParticles(){this.particles=[],this.particleGroup=new Mt,this.scene.add(this.particleGroup)}spawnParticle(t="heart"){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d");n.textAlign="center",n.textBaseline="middle",n.font="42px sans-serif";let i="❤️";t==="paw"&&(i="🐾"),t==="sparkle"&&(i="✨"),t==="zzz"?(i="z",n.fillStyle="#b3e5fc",n.font='bold 38px "Segoe UI", sans-serif',n.fillText("zZ",32,32)):n.fillText(i,32,32);const r=new nn(e),o=new Gr({map:r,transparent:!0,opacity:.95}),a=new Fi(o);a.position.copy(this.position),a.position.y+=.55+Math.random()*.15,a.position.x+=(Math.random()-.5)*.3,a.position.z+=(Math.random()-.5)*.3,a.scale.set(.35,.35,.35),this.particleGroup.add(a),this.particles.push({sprite:a,velY:.45+Math.random()*.25,velX:(Math.random()-.5)*.2,life:1.6,maxLife:1.6})}pet(t){this.state="petted",this.stateTimer=3.5,this.purrTimer=2.5,Yt.playCatPurr(),setTimeout(()=>{Yt.playCatMeow()},450);for(let e=0;e<4;e++)setTimeout(()=>{this.spawnParticle(e%2===0?"heart":"paw")},e*220);if(t){const e=t.position.x-this.position.x,n=t.position.z-this.position.z;this.rotation=Math.atan2(e,n)}return{success:!0,message:"🐱 *Purrrrrr* Mocha loves the chin scratches! (+10% Tip Bonus)",bonus:.1}}update(t,e){this.animTime+=t,this.tailTime+=t,this.stateTimer-=t;for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];i.life-=t,i.sprite.position.y+=i.velY*t,i.sprite.position.x+=i.velX*t,i.sprite.material.opacity=Math.max(0,i.life/i.maxLife),i.sprite.scale.multiplyScalar(1+t*.2),i.life<=0&&(this.particleGroup.remove(i.sprite),i.sprite.material.dispose(),i.sprite.material.map.dispose(),this.particles.splice(n,1))}if(e&&this.state!=="petted"&&this.state!=="idle_sleep"){const n=e.x-this.position.x,i=e.z-this.position.z,r=Math.hypot(n,i);r>1.5&&r<3.2&&Math.random()<.006&&(this.targetPos.set(e.x-n/r*1.1,0,e.z-i/r*1.1),this.state="walk",this.stateTimer=4,this.spawnParticle("sparkle"))}switch(this.stateTimer<=0&&this.state!=="petted"&&this.pickNextAction(),this.state){case"walk":this.updateWalk(t);break;case"idle_sit":this.updateIdleSit(t);break;case"idle_sleep":this.updateIdleSleep(t);break;case"petted":this.updatePetted(t);break;case"stretch":this.updateStretch(t);break}this.root.position.copy(this.position),this.root.rotation.y=this.rotation}pickNextAction(){const t=Math.random();if(t<.45){const e=this.waypoints[Math.floor(Math.random()*this.waypoints.length)];this.targetPos.copy(e.pos),this.targetPos.x+=(Math.random()-.5)*.8,this.targetPos.z+=(Math.random()-.5)*.8,this.state="walk",this.stateTimer=12}else t<.75?(this.state="idle_sit",this.stateTimer=5+Math.random()*5):t<.92?(this.state="idle_sleep",this.stateTimer=8+Math.random()*8):(this.state="stretch",this.stateTimer=3.5)}updateWalk(t){const e=this.targetPos.x-this.position.x,n=this.targetPos.z-this.position.z;if(e*e+n*n<.2*.2){this.state=Math.random()>.4?"idle_sit":"idle_sleep",this.stateTimer=6+Math.random()*6;return}let o=Math.atan2(e,n)-this.rotation;for(;o<-Math.PI;)o+=Math.PI*2;for(;o>Math.PI;)o-=Math.PI*2;this.rotation+=o*Math.min(1,t*6);const a=this.speed*t;this.position.x+=Math.sin(this.rotation)*a,this.position.z+=Math.cos(this.rotation)*a,this.position.x=Math.max(-9,Math.min(9,this.position.x)),this.position.z=Math.max(-7.5,Math.min(7.5,this.position.z));const c=this.animTime*11,l=.55;this.frontLeftLeg.rotation.x=Math.sin(c)*l,this.frontRightLeg.rotation.x=-Math.sin(c)*l,this.backLeftLeg.rotation.x=-Math.sin(c)*l,this.backRightLeg.rotation.x=Math.sin(c)*l,this.bodyGroup.position.y=.22+Math.abs(Math.sin(c))*.025,this.torso.rotation.z=Math.sin(c*.5)*.04,this.torso.rotation.x=0,this.head.rotation.x=Math.sin(c)*.06,this.tailRoot.rotation.x=-1.1+Math.sin(c*.5)*.12,this.tailRoot.rotation.y=Math.sin(this.tailTime*4.5)*.35,this.tailMid.rotation.y=Math.sin(this.tailTime*4.5-.5)*.45,this.tailTip.rotation.y=Math.sin(this.tailTime*4.5-1)*.55}updateIdleSit(t){this.bodyGroup.position.y=.18,this.torso.rotation.set(-.35,0,0),this.frontLeftLeg.rotation.set(.35,0,0),this.frontRightLeg.rotation.set(.35,0,0),this.backLeftLeg.rotation.set(-.75,0,0),this.backRightLeg.rotation.set(-.75,0,0),this.head.rotation.x=.35+Math.sin(this.animTime*1.2)*.08,this.head.rotation.y=Math.sin(this.animTime*.7)*.35,this.leftEar.rotation.z=-.25+Math.sin(this.animTime*5)*(Math.sin(this.animTime*.8)>.7?.2:.02),this.rightEar.rotation.z=.25-Math.sin(this.animTime*6)*(Math.sin(this.animTime*.6)>.7?.2:.02),this.tailRoot.rotation.x=-.45,this.tailRoot.rotation.y=Math.sin(this.tailTime*2.2)*.45,this.tailMid.rotation.y=Math.sin(this.tailTime*2.2-.4)*.55,this.tailTip.rotation.y=Math.sin(this.tailTime*2.2-.8)*.65}updateIdleSleep(t){this.bodyGroup.position.y=.12,this.torso.rotation.set(0,0,0),this.frontLeftLeg.rotation.set(-1.3,0,0),this.frontRightLeg.rotation.set(-1.3,0,0),this.backLeftLeg.rotation.set(-1.4,0,0),this.backRightLeg.rotation.set(-1.4,0,0),this.head.rotation.set(-.25,.2,.1);const e=Math.sin(this.animTime*2)*.04;this.torso.scale.set(1+e*.5,1+e,1+e*.5),this.tailRoot.rotation.set(-.2,1.3,0),this.tailMid.rotation.set(0,.8,0),this.tailTip.rotation.set(0,.6,0),Math.floor(this.animTime*10)%32===0&&this.spawnParticle("zzz")}updatePetted(t){this.bodyGroup.position.y=.22,this.torso.rotation.set(.15,0,0),this.frontLeftLeg.rotation.set(-.15,0,0),this.frontRightLeg.rotation.set(-.15,0,0),this.backLeftLeg.rotation.set(.2,0,0),this.backRightLeg.rotation.set(.2,0,0),this.head.rotation.set(-.35+Math.sin(this.animTime*6)*.06,0,Math.sin(this.animTime*4)*.08),this.tailRoot.rotation.x=-1.3,this.tailRoot.rotation.y=Math.sin(this.tailTime*9)*.65,this.tailMid.rotation.y=Math.sin(this.tailTime*9-.3)*.75,this.tailTip.rotation.y=Math.sin(this.tailTime*9-.6)*.85,Math.random()<.04&&this.spawnParticle("heart")}updateStretch(t){this.bodyGroup.position.y=.16,this.torso.rotation.set(.4,0,0),this.frontLeftLeg.rotation.set(-.8,0,0),this.frontRightLeg.rotation.set(-.8,0,0),this.backLeftLeg.rotation.set(.6,0,0),this.backRightLeg.rotation.set(.6,0,0),this.head.rotation.set(-.4,0,0),this.tailRoot.rotation.set(-1.4,0,0),this.tailMid.rotation.set(.3,0,0),this.tailTip.rotation.set(.4,0,0)}}const wo=[14251830,5999706,4026521,10244747,13935475,4871528,12922928],Eo=[16638669,16108964,13933418,9262372],To=[2825494,6042391,12548671,2171169,13938487];class em{constructor(t,e,n,i=null){this.scene=t,this.ticket=e,this.stationIndex=n,this.customerManager=i,this.assignedTable=null,this.heldCup=null,this.diningTimer=0,this.root=new Mt,this.scene.add(this.root),this.position=new b((Math.random()-.5)*1.5,0,8.4),this.root.position.copy(this.position),this.rotation=Math.PI,this.root.rotation.y=this.rotation;const r=n===0?-.5:n===1?2.5:5.5;this.counterTarget=new b(r,0,1.45),this.doorExit=new b(0,0,8.8),this.scale=1.65,this.standingY=.91,this.greetTimer=0,this.speed=2.4,this.state="ENTERING",this.animTime=Math.random()*5,this.stateTimer=0,this.cheerTimer=0,this.buildCharacterMesh()}buildCharacterMesh(){const t=Eo[Math.floor(Math.random()*Eo.length)],e=wo[Math.floor(Math.random()*wo.length)],n=To[Math.floor(Math.random()*To.length)],i=Math.random()>.5?2834e3:4008735;this.skinMat=new X({color:t,roughness:.5}),this.outfitMat=new X({color:e,roughness:.6}),this.hairMat=new X({color:n,roughness:.7}),this.pantMat=new X({color:i,roughness:.6}),this.shoeMat=new X({color:2234385,roughness:.4}),this.eyeMat=new Me({color:1708555}),this.blushMat=new X({color:16747136,roughness:.4}),this.bodyGroup=new Mt,this.bodyGroup.scale.set(this.scale,this.scale,this.scale),this.bodyGroup.position.y=this.standingY,this.root.add(this.bodyGroup);const r=new Gt(.28,14,12);r.scale(.85,1.1,.75),this.torsoMesh=new R(r,this.outfitMat),this.torsoMesh.castShadow=!0,this.bodyGroup.add(this.torsoMesh);const o=new ue(.18,.05,8,16);o.rotateX(Math.PI/2);const a=new R(o,this.outfitMat);a.position.y=.28,this.bodyGroup.add(a),this.headGroup=new Mt,this.headGroup.position.set(0,.52,0),this.bodyGroup.add(this.headGroup);const c=new Gt(.22,16,14);c.scale(1,1.05,.95);const l=new R(c,this.skinMat);if(l.castShadow=!0,this.headGroup.add(l),[-.12,.12].forEach(p=>{const _=new Gt(.04,8,8);_.scale(1.2,.6,.4);const g=new R(_,this.blushMat);g.position.set(p,-.04,.18),this.headGroup.add(g)}),this.eyes=[],[-.075,.075].forEach(p=>{const _=new Gt(.035,8,8);_.scale(.85,1.1,.5);const g=new R(_,this.eyeMat);g.position.set(p,.02,.19),this.headGroup.add(g),this.eyes.push(g)}),Math.random()>.4){const p=new Gt(.235,16,12,0,Math.PI*2,0,Math.PI*.65),_=new X({color:e,roughness:.8}),g=new R(p,_);g.position.y=.04,g.rotation.x=-.15,this.headGroup.add(g);const m=new Gt(.06,8,8),d=new R(m,_);d.position.set(0,.28,-.06),this.headGroup.add(d)}else{const p=new Gt(.24,14,12,0,Math.PI*2,0,Math.PI*.7),_=new R(p,this.hairMat);_.position.set(0,.03,-.02),this.headGroup.add(_);for(let g=-2;g<=2;g++){const m=new Gt(.06,8,8),d=new R(m,this.hairMat);d.position.set(g*.05,.14,.17),this.headGroup.add(d)}}this.leftArm=this.createLimb(.08,.3,this.outfitMat,this.skinMat,!0),this.leftArm.position.set(-.28,.2,0),this.bodyGroup.add(this.leftArm),this.rightArm=this.createLimb(.08,.3,this.outfitMat,this.skinMat,!0),this.rightArm.position.set(.28,.2,0),this.bodyGroup.add(this.rightArm),this.leftLeg=this.createLimb(.09,.38,this.pantMat,this.shoeMat,!1),this.leftLeg.position.set(-.13,-.22,0),this.bodyGroup.add(this.leftLeg),this.rightLeg=this.createLimb(.09,.38,this.pantMat,this.shoeMat,!1),this.rightLeg.position.set(.13,-.22,0),this.bodyGroup.add(this.rightLeg);const u=new Rn(.36,16);u.rotateX(-Math.PI/2);const f=new Me({color:0,transparent:!0,opacity:.28});this.groundShadow=new R(u,f),this.groundShadow.position.y=.015,this.root.add(this.groundShadow)}createLimb(t,e,n,i,r){const o=new Mt,a=new st(t,t*.9,e*.7,8);a.translate(0,-e*.35,0);const c=new R(a,n);if(c.castShadow=!0,o.add(c),r){const l=new Gt(t*.95,8,8),h=new R(l,i);h.position.y=-e*.75,o.add(h)}else{const l=new Ct(t*1.8,t*1.1,t*2.4),h=new R(l,i);h.position.set(0,-e*.78,t*.4),h.castShadow=!0,o.add(h)}return o}updateOrderBubble(){}triggerCheer(){this.state="CHEERING",this.cheerTimer=1.8,Yt.playCustomerCheer()}triggerDineIn(t){this.assignedTable=t,this.state="CHEERING",this.cheerTimer=1.3,Yt.playCustomerCheer(),this.heldCup=new R(new st(.065,.045,.16,12),new X({color:16775917,roughness:.3})),this.heldCup.position.set(0,-.22,.05),this.rightArm.add(this.heldCup)}update(t){switch(this.animTime+=t,this.state){case"ENTERING":{const e=new b(this.counterTarget.x*.5,0,4.5);this.stepTowards(e,t),this.position.distanceTo(e)<.4&&(this.state="APPROACHING_COUNTER"),this.animateWalk(t);break}case"APPROACHING_COUNTER":{this.stepTowards(this.counterTarget,t),this.position.distanceTo(this.counterTarget)<.25&&(this.state="WAITING",this.position.copy(this.counterTarget),this.rotation=0,this.greetTimer=2),this.animateWalk(t);break}case"WAITING":{this.greetTimer=Math.max(0,this.greetTimer-t),this.bodyGroup.position.y=this.standingY+Math.sin(this.animTime*2.5)*.02,this.headGroup.rotation.y=Math.sin(this.animTime*.8)*.2,this.greetTimer>0?(this.leftArm.rotation.set(0,0,.1),this.rightArm.rotation.set(-2.2,0,Math.sin(this.animTime*9)*.35)):(this.leftArm.rotation.set(0,0,.1),this.rightArm.rotation.set(0,0,-.1)),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0);break}case"CHEERING":{this.cheerTimer-=t;const e=Math.abs(Math.sin(this.animTime*14))*.2;this.bodyGroup.position.y=this.standingY+e,this.leftArm.rotation.set(-2.5,0,-.4),this.rightArm.rotation.set(-2.5,0,.4),this.headGroup.rotation.x=-.3,this.cheerTimer<=0&&(this.assignedTable?(this.state="WALKING_TO_TABLE",this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(-.8,0,0)):this.state="LEAVING");break}case"WALKING_TO_TABLE":{const e=new b(this.assignedTable.chairX,0,this.assignedTable.chairZ);if(this.stepTowards(e,t),this.animateWalk(t),this.rightArm&&this.rightArm.rotation.set(-.8,0,0),this.position.distanceTo(e)<.35){this.position.copy(e),this.state="SEATED_DINING",this.diningTimer=14+Math.random()*8;const n=this.assignedTable.x-this.position.x,i=this.assignedTable.z-this.position.z;this.rotation=Math.atan2(n,i),this.heldCup&&(this.rightArm.remove(this.heldCup),this.heldCup=null),this.customerManager&&this.customerManager.placeDineInCupOnTable(this.assignedTable),this.bodyGroup.position.y=.54,this.leftLeg.rotation.set(-1.45,0,0),this.rightLeg.rotation.set(-1.45,0,0),this.leftArm.rotation.set(-.75,0,.2),this.rightArm.rotation.set(-.75,0,-.2)}break}case"SEATED_DINING":{this.diningTimer-=t,this.bodyGroup.position.y=.54+Math.sin(this.animTime*2.2)*.015,this.headGroup.rotation.y=Math.sin(this.animTime*.8)*.18,Math.sin(this.animTime*1.6)>.72?this.rightArm.rotation.set(-1.4,0,-.15):this.rightArm.rotation.set(-.75,0,-.2),this.diningTimer<=0&&(this.customerManager&&this.customerManager.onDineInFinished(this.assignedTable),this.bodyGroup.position.y=this.standingY,this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.state="LEAVING",Yt.playCustomerCheer());break}case"LEAVING":{this.stepTowards(this.doorExit,t),this.animateWalk(t),this.position.z>=8.6&&(this.state="DESPAWNED");break}}this.root.position.copy(this.position),this.root.rotation.y=this.rotation}stepTowards(t,e){const n=t.x-this.position.x,i=t.z-this.position.z;let o=Math.atan2(n,i)-this.rotation;for(;o<-Math.PI;)o+=Math.PI*2;for(;o>Math.PI;)o-=Math.PI*2;this.rotation+=o*Math.min(1,e*8);const a=Math.hypot(n,i),c=Math.min(a,this.speed*e);this.position.x+=Math.sin(this.rotation)*c,this.position.z+=Math.cos(this.rotation)*c}animateWalk(t){const e=this.animTime*9,n=.6;this.leftLeg.rotation.x=Math.sin(e)*n,this.rightLeg.rotation.x=-Math.sin(e)*n,this.leftArm.rotation.x=-Math.sin(e)*(n*.7),this.rightArm.rotation.x=Math.sin(e)*(n*.7),this.bodyGroup.position.y=this.standingY+Math.abs(Math.sin(e))*.05,this.headGroup.rotation.x=Math.sin(e)*.05}dispose(){this.assignedTable&&!this.assignedTable.hasTip&&(this.assignedTable.occupied=!1,this.assignedTable=null),this.heldCup&&this.rightArm&&(this.rightArm.remove(this.heldCup),this.heldCup=null),this.scene.remove(this.root)}}function nm(s=2.5){const t=new Mt,e=new st(.2,.16,.025,16),n=new X({color:16448250,roughness:.25}),i=new R(e,n);i.position.y=.015,i.castShadow=!0,t.add(i);const r=new st(.12,.09,.16,16),o=new R(r,n);o.position.set(-.04,.09,0),o.castShadow=!0,t.add(o);const a=new Is(.04,.08,16);a.rotateX(-Math.PI/2);const c=new Me({color:5121810,side:ke}),l=new R(a,c);l.position.set(-.04,.1,0),t.add(l);const h=new st(.1,.1,.024,16),u=new X({color:16766720,metalness:.9,roughness:.2}),f=new R(h,u);f.position.set(.12,.08,0),f.rotation.x=Math.PI/6,t.add(f),t.userData.coin=f;const p=new Gt(.045,8,8),_=new Me({color:16771899}),g=new R(p,_);return g.position.set(.12,.22,0),t.add(g),t.userData.sparkle=g,t}class im{constructor(t){this.scene=t,this.customers=new Map,this.tables=[{id:0,x:-6.5,z:4.5,chairX:-6.5,chairZ:3.55,occupied:!1,hasTip:!1,tipAmount:0,propGroup:null},{id:1,x:-2.5,z:5.5,chairX:-2.5,chairZ:4.55,occupied:!1,hasTip:!1,tipAmount:0,propGroup:null},{id:2,x:3.5,z:5.5,chairX:3.5,chairZ:4.55,occupied:!1,hasTip:!1,tipAmount:0,propGroup:null},{id:3,x:7.5,z:4.5,chairX:7.5,chairZ:3.55,occupied:!1,hasTip:!1,tipAmount:0,propGroup:null}]}getFreeTable(){return this.tables.find(t=>!t.occupied&&!t.hasTip)||null}placeDineInCupOnTable(t){t.propGroup&&(this.scene.remove(t.propGroup),t.propGroup=null);const e=new Mt;e.position.set(t.x,.85,t.z);const n=new R(new st(.11,.08,.18,16),new X({color:16775917,roughness:.3}));n.position.set(0,.09,-.2),n.castShadow=!0,e.add(n),this.scene.add(e),t.propGroup=e}onDineInFinished(t){t.propGroup&&(this.scene.remove(t.propGroup),t.propGroup=null),t.hasTip=!0,t.tipAmount=parseFloat((2+Math.random()*2).toFixed(2));const e=nm(t.tipAmount);e.position.set(t.x,.85,t.z),this.scene.add(e),t.propGroup=e}getNearestTableWithTip(t,e=2.4){let n=null,i=e*e;for(const r of this.tables)if(r.hasTip){const o=t.x-r.x,a=t.z-r.z,c=o*o+a*a;c<i&&(i=c,n=r)}return n}collectTip(t,e){if(!t.hasTip)return 0;const n=t.tipAmount;return Pt.recordCatPet(n),dn.spawnCoinPickup(t.x,.95,t.z),Yt.playCashRegister(),t.propGroup&&(this.scene.remove(t.propGroup),t.propGroup=null),t.hasTip=!1,t.occupied=!1,t.tipAmount=0,n}onOrderCreated(t){if(this.customers.has(t.id))return;const e=new em(this.scene,t,t.stationIndex,this);this.customers.set(t.id,e),Yt.playCustomerGreet()}onOrderUpdated(t){const e=this.customers.get(t.id);e&&e.updateOrderBubble()}onOrderFulfilled(t){const e=this.customers.get(t.id);if(e){const n=this.getFreeTable();n&&Math.random()<.45?(n.occupied=!0,e.triggerDineIn(n)):e.triggerCheer()}}update(t){for(const[e,n]of this.customers.entries())n.update(t),n.state==="DESPAWNED"&&(n.dispose(),this.customers.delete(e));for(const e of this.tables)e.hasTip&&e.propGroup&&e.propGroup.userData.coin&&(e.propGroup.userData.coin.rotation.y+=t*3.5,e.propGroup.userData.sparkle&&(e.propGroup.userData.sparkle.position.y=.22+Math.sin(performance.now()*.006)*.04))}}class sm{constructor(){this.container=document.getElementById("game-container"),this.isRunning=!1,this.isPaused=!1,this.lastTime=performance.now(),this.input={forward:0,backward:0,left:0,right:0,sprint:!1,interact:!1,discard:!1,rawDir:new b},this.initEngine(),this.initGame(),this.setupInput(),this.setupUI(),this.setupLifecycle(),requestAnimationFrame(this.tick.bind(this))}initEngine(){this.scene=new Sp,this.scene.background=new $t(1970700),this.scene.fog=new Br(1970700,.02),this.camera=new ze(52,window.innerWidth/window.innerHeight,.1,100),this.renderer=new ac({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const t=Pt.data.settings.highQualityShadows??!0;this.renderer.shadowMap.enabled=t,this.renderer.shadowMap.type=Ao,this.renderer.toneMapping=Ro,this.renderer.toneMappingExposure=1.15,this.container.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener("webglcontextlost",e=>{e.preventDefault(),console.warn("WebGL Context Lost! Pausing render loop until restored..."),this.isPaused=!0},!1),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{console.log("WebGL Context Restored! Reinitializing render state..."),this.isPaused=!1,this.lastTime=performance.now()},!1),this.tpCamera=new Zp(this.camera,this.renderer.domElement),Pt.data.settings.cameraSensitivity&&(this.tpCamera.sensitivity=Pt.data.settings.cameraSensitivity)}initGame(){this.saveManager=Pt,this.audio=Yt,dn.setScene(this.scene),this.ui=new Qp(t=>{this.stationManager&&this.stationManager.interactWithChoice(t)}),this.customerManager=new im(this.scene),this.ordersManager=new Jp(this.ui,this.customerManager),this.cafeEnv=new qp(this.scene),this.ordersManager.setCafeEnv(this.cafeEnv),this.player=new $p(this.scene,this.cafeEnv.colliders),this.cat=new tm(this.scene,this.cafeEnv.colliders),this.stationManager=new Kp(this.scene,this.cafeEnv.interactiveSpots,this.player,this.ordersManager,this.ui,this.cat,this.customerManager),Pt.subscribe(t=>{t&&t.settings&&(this.renderer&&(this.renderer.shadowMap.enabled=t.settings.highQualityShadows),this.tpCamera&&(this.tpCamera.sensitivity=t.settings.cameraSensitivity))})}setupInput(){window.addEventListener("keydown",n=>{if(!n.repeat){if(["Digit1","Digit2","Digit3","Digit4"].includes(n.code)){const i=this.stationManager.getAvailableChoices(this.stationManager.activeSpot),r=parseInt(n.code.replace("Digit",""))-1;if(i&&i[r]){this.stationManager.interactWithChoice(i[r].id);return}}switch(n.code){case"KeyW":case"ArrowUp":this.input.forward=1;break;case"KeyS":case"ArrowDown":this.input.backward=1;break;case"KeyA":case"ArrowLeft":this.input.left=1;break;case"KeyD":case"ArrowRight":this.input.right=1;break;case"ShiftLeft":case"ShiftRight":this.input.sprint=!0;break;case"KeyE":case"Space":this.triggerInteract();break;case"KeyX":this.player.discardTopItem();break}if(["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7"].includes(n.code)&&this.stationManager&&this.stationManager.activeSpot){const i=this.stationManager.getAvailableChoices(this.stationManager.activeSpot),r=i?i.items||i:[],o=parseInt(n.code.replace("Digit",""))-1;r&&r[o]&&!r[o].disabled&&this.stationManager.interactWithChoice(r[o].id)}}}),window.addEventListener("keyup",n=>{switch(n.code){case"KeyW":case"ArrowUp":this.input.forward=0;break;case"KeyS":case"ArrowDown":this.input.backward=0;break;case"KeyA":case"ArrowLeft":this.input.left=0;break;case"KeyD":case"ArrowRight":this.input.right=0;break;case"ShiftLeft":case"ShiftRight":this.input.sprint=!1;break}});const t=document.getElementById("touch-action-btn");t&&(t.addEventListener("touchstart",n=>{n.preventDefault(),this.triggerInteract()}),t.addEventListener("click",()=>{this.triggerInteract()}));const e=document.getElementById("touch-trash-btn");e&&(e.addEventListener("touchstart",n=>{n.preventDefault(),this.player.discardTopItem(),this.ui.showFloatingMessage(this.player.position,"🗑️ Discarded Item","#ef5350")}),e.addEventListener("click",()=>{this.player.discardTopItem(),this.ui.showFloatingMessage(this.player.position,"🗑️ Discarded Item","#ef5350")})),[0,1,2].forEach(n=>{const i=document.getElementById(`tray-slot-${n}`);i&&i.addEventListener("click",()=>{this.player.inventory[n]&&(this.player.removeItem(n),Yt.playTrash(),this.ui.showFloatingMessage(this.player.position,"🗑️ Discarded Item","#ef5350"))})}),this.setupTouchJoystick()}setupTouchJoystick(){const t=document.getElementById("joystick-base"),e=document.getElementById("joystick-thumb"),n=document.getElementById("touch-controls"),i=document.getElementById("touch-btn-container");if(("ontouchstart"in window||navigator.maxTouchPoints>0||window.innerWidth<=1024)&&(n&&(n.style.display="block"),i&&(i.style.display="flex")),!t||!e||!n)return;this.touchActive=!1;let o=null,a=0,c=0;const l=46,h=_=>{if(o===null)for(let g=0;g<_.changedTouches.length;g++){const m=_.changedTouches[g];if(m.clientX<window.innerWidth*.48){this.touchActive=!0,o=m.identifier,a=m.clientX,c=m.clientY,n.style.left=`${a}px`,n.style.top=`${c}px`,n.style.bottom="auto",n.style.transform="translate(-50%, -50%)",n.style.opacity="1",e.style.transform="translate(-50%, -50%)",this.input.rawDir.set(0,0,0),this.input.sprint=!1;break}}},u=(_,g)=>{let m=_-a,d=g-c;const E=Math.hypot(m,d);if(E<3){e.style.transform="translate(-50%, -50%)",this.input.rawDir.set(0,0,0),this.input.sprint=!1;return}const M=Math.atan2(d,m);E>l&&(a=_-Math.cos(M)*l,c=g-Math.sin(M)*l,n.style.left=`${a}px`,n.style.top=`${c}px`,m=_-a,d=g-c);const w=Math.min(E,l),I=Math.cos(M)*w,A=Math.sin(M)*w;e.style.transform=`translate(calc(-50% + ${I}px), calc(-50% + ${A}px))`,this.input.rawDir.x=I/l,this.input.rawDir.z=-A/l,this.input.sprint=!1},f=_=>{if(o!==null)for(let g=0;g<_.changedTouches.length;g++){const m=_.changedTouches[g];if(m.identifier===o){u(m.clientX,m.clientY);break}}},p=_=>{if(o!==null){for(let g=0;g<_.changedTouches.length;g++)if(_.changedTouches[g].identifier===o){o=null,this.touchActive=!1,n.style.left="24px",n.style.top="auto",n.style.bottom="24px",n.style.transform="none",n.style.opacity="0.65",e.style.transform="translate(-50%, -50%)",this.input.rawDir.set(0,0,0),this.input.sprint=!1;break}}};window.addEventListener("touchstart",h,{passive:!0}),window.addEventListener("touchmove",f,{passive:!0}),window.addEventListener("touchend",p,{passive:!0}),window.addEventListener("touchcancel",p,{passive:!0})}triggerInteract(){this.isRunning&&(this.player.bufferInteract(.18),this.stationManager.interact())}setupUI(){const t=document.getElementById("btn-start-game");t&&t.addEventListener("click",()=>{Yt.init(),this.ui.hideWelcomeModal(),this.isRunning=!0})}setupLifecycle(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}),document.addEventListener("visibilitychange",()=>{document.hidden?(this.isPaused=!0,Yt.stopBGM()):(this.isPaused=!1,this.lastTime=performance.now(),this.isRunning&&Yt.startBGM())}),window.addEventListener("blur",()=>{this.isPaused=!0,Yt.stopBGM()}),window.addEventListener("focus",()=>{this.isPaused=!1,this.lastTime=performance.now(),this.isRunning&&Yt.startBGM()})}tick(t){requestAnimationFrame(this.tick.bind(this));const e=(t-this.lastTime)/1e3;this.lastTime=t;const n=Math.min(e,.1);this.isPaused||n<=0||(this.touchActive||(this.input.rawDir.x=this.input.right-this.input.left,this.input.rawDir.z=this.input.forward-this.input.backward),this.isRunning?(this.player.update(n,this.input.rawDir,this.input.sprint,this.tpCamera.yaw),this.cat.update(n,this.player.position),this.customerManager.update(n),this.tpCamera.update(n,this.player.position),this.stationManager.update(n),this.ordersManager.update(n),this.ui.updateInventoryDisplay(this.player.inventory)):(this.cat.update(n,this.player.position),this.tpCamera.targetYaw+=n*.15,this.tpCamera.update(n,this.player.position)),dn.update(n),this.renderer.render(this.scene,this.camera))}}window.addEventListener("DOMContentLoaded",()=>{window.game=new sm});
