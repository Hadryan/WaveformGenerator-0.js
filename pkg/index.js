var M=a=>{throw TypeError(a)};var G=(a,e,t)=>e.has(a)||M("Cannot "+t);var o=(a,e,t)=>(G(a,e,"read from private field"),t?t.call(a):e.get(a)),l=(a,e,t)=>e.has(a)?M("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t),f=(a,e,t,r)=>(G(a,e,"write to private field"),r?r.call(a,t):e.set(a,t),t);var A={waveformWidth:500,waveformHeight:80,waveformColor:"#000",barAlign:"center",barWidth:1,barGap:0,drawMode:"png"};async function $(a){return new Promise((e,t)=>{new AudioContext().decodeAudioData(a,n=>{n?e(n):t(new Error("Could not decode audio data"))})})}function y(a,e){let t=document.createElement("svg");return t.id=crypto.randomUUID(),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("version","1.1"),t.setAttributeNS(null,"viewBox",`0 0 ${a} ${e}`),t}function B(a,e){let t=document.createElement("canvas");return t.id=crypto.randomUUID(),t.width=a,t.height=e,t}var p,b,c,g,w,d,S=class{constructor(e){l(this,p);l(this,b);l(this,c);l(this,g);l(this,w);l(this,d,A);f(this,p,e)}async getWaveform(e=A){f(this,d,Object.assign({},A,e));let{waveformWidth:t,waveformHeight:r,drawMode:n}=o(this,d);return o(this,b)||f(this,b,await $(o(this,p).slice(0))),n==="png"?(f(this,g,B(t,r)),f(this,w,o(this,g).getContext("2d"))):n==="svg"&&(f(this,c,y(t,r)),o(this,c).appendChild(this.generateSVGStylesheet())),this.drawWaveform(o(this,b)),n==="png"?o(this,g).toDataURL():`data:image/svg+xml;base64,${btoa(`<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">${o(this,c).outerHTML}`)}`}generateSVGStylesheet(){let{waveformColor:e,barWidth:t,barGap:r}=o(this,d),n=document.createElement("style");n.setAttribute("type","text/css");let s=r!==0?t*Math.abs(1-r):t;return n.appendChild(document.createTextNode(`path{stroke:${e};stroke-width:${s}}`)),n}drawBarToCanvas(e,t,r){let{waveformColor:n,barWidth:s}=o(this,d),i=Math.floor(e-1),h=Math.floor(t-1);o(this,w).fillStyle=n,o(this,w).fillRect(i,h,s,r)}drawBarToSVG(e,t,r){let n=document.createElement("path");n.setAttribute("d",`M${e} ${t} L${e} ${t} L${e} ${t+r} L${e} ${t+r} L${e} ${t} Z`),o(this,c).appendChild(n)}drawBar({position:e,height:t}){let{barGap:r,barAlign:n,waveformHeight:s,drawMode:i}=o(this,d),{barWidth:h}=o(this,d);r!==0&&(h*=Math.abs(1-r));let v=e+h/2,u;switch(n){case"top":u=0;break;case"bottom":u=s-t;break;case"center":default:u=s/2-t/2;break}if(i==="png")this.drawBarToCanvas(v,u,t);else if(i==="svg")this.drawBarToSVG(v,u,t);else throw new Error(`Unsupported drawMode in options; ${i}. Allowed: png, svg`)}bufferMeasure(e,t,r){let n=0;for(let s=e,i=e+t-1;e<=i?s<=i:s>=i;e<=i?s++:s--)n+=r[s]**2;return Math.sqrt(n/r.length)}drawWaveform(e){let t=e.getChannelData(0),{waveformWidth:r,waveformHeight:n,barWidth:s}=o(this,d),i=Math.floor(t.length/r),h=[],v=[];for(let m=0;m<r;m+=s){let C={position:m,height:this.bufferMeasure(m*i,i,t)};v.push(C.height),h.push(C)}let u=n/Math.max.apply(null,v);for(let{position:m,height:C}of h)this.drawBar({position:m,height:C*u})}};p=new WeakMap,b=new WeakMap,c=new WeakMap,g=new WeakMap,w=new WeakMap,d=new WeakMap;var E=S;export{E as default};
//# sourceMappingURL=index.js.map
