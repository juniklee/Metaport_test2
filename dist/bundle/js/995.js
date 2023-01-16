(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[995],{35995:(t,i,h)=>{"use strict";h.d(i,{cC:()=>MaxRectsPacker});class Rectangle{constructor(t=0,i=0,h=0,e=0,s=!1,a){this.oversized=!1,this._rot=!1,this._allowRotation=void 0,this._dirty=0,this._width=t,this._height=i,this._x=h,this._y=e,this._data={},this._rot=s,this._allowRotation=a}static Collide(t,i){return t.collide(i)}static Contain(t,i){return t.contain(i)}area(){return this.width*this.height}collide(t){return t.x<this.x+this.width&&t.x+t.width>this.x&&t.y<this.y+this.height&&t.y+t.height>this.y}contain(t){return t.x>=this.x&&t.y>=this.y&&t.x+t.width<=this.x+this.width&&t.y+t.height<=this.y+this.height}get width(){return this._width}set width(t){t!==this._width&&(this._width=t,this._dirty++)}get height(){return this._height}set height(t){t!==this._height&&(this._height=t,this._dirty++)}get x(){return this._x}set x(t){t!==this._x&&(this._x=t,this._dirty++)}get y(){return this._y}set y(t){t!==this._y&&(this._y=t,this._dirty++)}get rot(){return this._rot}set rot(t){if(!1!==this._allowRotation&&this._rot!==t){const i=this.width;this.width=this.height,this.height=i,this._rot=t,this._dirty++}}get allowRotation(){return this._allowRotation}set allowRotation(t){this._allowRotation!==t&&(this._allowRotation=t,this._dirty++)}get data(){return this._data}set data(t){null!==t&&t!==this._data&&(this._data=t,"object"==typeof t&&t.hasOwnProperty("allowRotation")&&(this._allowRotation=t.allowRotation),this._dirty++)}get dirty(){return this._dirty>0}setDirty(t=!0){this._dirty=t?this._dirty+1:0}}class Bin{constructor(){this._dirty=0}get dirty(){return this._dirty>0||this.rects.some((t=>t.dirty))}setDirty(t=!0){if(this._dirty=t?this._dirty+1:0,!t)for(let t of this.rects)t.setDirty&&t.setDirty(!1)}}class MaxRectsBin extends Bin{constructor(t=e,i=e,h=0,a={}){super(),this.maxWidth=t,this.maxHeight=i,this.padding=h,this.freeRects=[],this.rects=[],this.verticalExpand=!1,this.options={smart:!0,pot:!0,square:!0,allowRotation:!1,tag:!1,exclusiveTag:!0,border:0,logic:s.MAX_EDGE},this.options=Object.assign(Object.assign({},this.options),a),this.width=this.options.smart?0:t,this.height=this.options.smart?0:i,this.border=this.options.border?this.options.border:0,this.freeRects.push(new Rectangle(this.maxWidth+this.padding-2*this.border,this.maxHeight+this.padding-2*this.border,this.border,this.border)),this.stage=new Rectangle(this.width,this.height)}add(...t){let i,h;if(1===t.length){if("object"!=typeof t[0])throw new Error("MacrectsBin.add(): Wrong parameters");h=t[0];let i=h.data&&h.data.tag?h.data.tag:h.tag?h.tag:void 0;if(this.options.tag&&this.options.exclusiveTag&&this.tag!==i)return}else{if(i=t.length>2?t[2]:null,this.options.tag&&this.options.exclusiveTag){if(i&&this.tag!==i.tag)return;if(!i&&this.tag)return}h=new Rectangle(t[0],t[1]),h.data=i,h.setDirty(!1)}const e=this.place(h);return e&&this.rects.push(e),e}repack(){let t=[];this.reset(),this.rects.sort(((t,i)=>{const h=Math.max(i.width,i.height)-Math.max(t.width,t.height);return 0===h&&t.hash&&i.hash?t.hash>i.hash?-1:1:h}));for(let i of this.rects)this.place(i)||t.push(i);for(let i of t)this.rects.splice(this.rects.indexOf(i),1);return t.length>0?t:void 0}reset(t=!1,i=!1){t&&(this.data&&delete this.data,this.tag&&delete this.tag,this.rects=[],i&&(this.options={smart:!0,pot:!0,square:!0,allowRotation:!1,tag:!1,border:0})),this.width=this.options.smart?0:this.maxWidth,this.height=this.options.smart?0:this.maxHeight,this.border=this.options.border?this.options.border:0,this.freeRects=[new Rectangle(this.maxWidth+this.padding-2*this.border,this.maxHeight+this.padding-2*this.border,this.border,this.border)],this.stage=new Rectangle(this.width,this.height),this._dirty=0}clone(){let t=new MaxRectsBin(this.maxWidth,this.maxHeight,this.padding,this.options);for(let i of this.rects)t.add(i);return t}place(t){let i,h,e=t.data&&t.data.tag?t.data.tag:t.tag?t.tag:void 0;if(!this.options.tag||!this.options.exclusiveTag||this.tag===e){if(h=t.hasOwnProperty("_allowRotation")&&void 0!==t.allowRotation?t.allowRotation:this.options.allowRotation,i=this.findNode(t.width+this.padding,t.height+this.padding,h),i){this.updateBinSize(i);let h=this.freeRects.length,e=0;for(;e<h;)this.splitNode(this.freeRects[e],i)&&(this.freeRects.splice(e,1),h--,e--),e++;return this.pruneFreeList(),this.verticalExpand=this.width>this.height,t.x=i.x,t.y=i.y,void 0===t.rot&&(t.rot=!1),t.rot=i.rot?!t.rot:t.rot,this._dirty++,t}if(this.verticalExpand){if(this.updateBinSize(new Rectangle(t.width+this.padding,t.height+this.padding,this.border,this.height+this.padding-this.border))||this.updateBinSize(new Rectangle(t.width+this.padding,t.height+this.padding,this.width+this.padding-this.border,this.border)))return this.place(t)}else if(this.updateBinSize(new Rectangle(t.width+this.padding,t.height+this.padding,this.width+this.padding-this.border,this.border))||this.updateBinSize(new Rectangle(t.width+this.padding,t.height+this.padding,this.border,this.height+this.padding-this.border)))return this.place(t)}}findNode(t,i,h){let e,a,r,d=Number.MAX_VALUE;for(let n in this.freeRects)a=this.freeRects[n],a.width>=t&&a.height>=i&&(e=this.options.logic===s.MAX_AREA?a.width*a.height-t*i:Math.min(a.width-t,a.height-i),e<d&&(r=new Rectangle(t,i,a.x,a.y),d=e)),h&&a.width>=i&&a.height>=t&&(e=this.options.logic===s.MAX_AREA?a.width*a.height-i*t:Math.min(a.height-t,a.width-i),e<d&&(r=new Rectangle(i,t,a.x,a.y,!0),d=e));return r}splitNode(t,i){if(!t.collide(i))return!1;if(i.x<t.x+t.width&&i.x+i.width>t.x){if(i.y>t.y&&i.y<t.y+t.height){let h=new Rectangle(t.width,i.y-t.y,t.x,t.y);this.freeRects.push(h)}if(i.y+i.height<t.y+t.height){let h=new Rectangle(t.width,t.y+t.height-(i.y+i.height),t.x,i.y+i.height);this.freeRects.push(h)}}if(i.y<t.y+t.height&&i.y+i.height>t.y){if(i.x>t.x&&i.x<t.x+t.width){let h=new Rectangle(i.x-t.x,t.height,t.x,t.y);this.freeRects.push(h)}if(i.x+i.width<t.x+t.width){let h=new Rectangle(t.x+t.width-(i.x+i.width),t.height,i.x+i.width,t.y);this.freeRects.push(h)}}return!0}pruneFreeList(){let t=0,i=0,h=this.freeRects.length;for(;t<h;){i=t+1;let e=this.freeRects[t];for(;i<h;){let s=this.freeRects[i];if(s.contain(e)){this.freeRects.splice(t,1),t--,h--;break}e.contain(s)&&(this.freeRects.splice(i,1),i--,h--),i++}t++}}updateBinSize(t){if(!this.options.smart)return!1;if(this.stage.contain(t))return!1;let i=Math.max(this.width,t.x+t.width-this.padding+this.border),h=Math.max(this.height,t.y+t.height-this.padding+this.border);if(this.options.allowRotation){const e=Math.max(this.width,t.x+t.height-this.padding+this.border),s=Math.max(this.height,t.y+t.width-this.padding+this.border);e*s<i*h&&(i=e,h=s)}return this.options.pot&&(i=Math.pow(2,Math.ceil(Math.log(i)*Math.LOG2E)),h=Math.pow(2,Math.ceil(Math.log(h)*Math.LOG2E))),this.options.square&&(i=h=Math.max(i,h)),!(i>this.maxWidth+this.padding||h>this.maxHeight+this.padding)&&(this.expandFreeRects(i+this.padding,h+this.padding),this.width=this.stage.width=i,this.height=this.stage.height=h,!0)}expandFreeRects(t,i){this.freeRects.forEach(((h,e)=>{h.x+h.width>=Math.min(this.width+this.padding-this.border,t)&&(h.width=t-h.x-this.border),h.y+h.height>=Math.min(this.height+this.padding-this.border,i)&&(h.height=i-h.y-this.border)}),this),this.freeRects.push(new Rectangle(t-this.width-this.padding,i-2*this.border,this.width+this.padding-this.border,this.border)),this.freeRects.push(new Rectangle(t-2*this.border,i-this.height-this.padding,this.border,this.height+this.padding-this.border)),this.freeRects=this.freeRects.filter((t=>!(t.width<=0||t.height<=0||t.x<this.border||t.y<this.border))),this.pruneFreeList()}}class OversizedElementBin extends Bin{constructor(...t){if(super(),this.rects=[],1===t.length){if("object"!=typeof t[0])throw new Error("OversizedElementBin: Wrong parameters");const i=t[0];this.rects=[i],this.width=i.width,this.height=i.height,this.data=i.data,i.oversized=!0}else{this.width=t[0],this.height=t[1],this.data=t.length>2?t[2]:null;const i=new Rectangle(this.width,this.height);i.oversized=!0,i.data=this.data,this.rects.push(i)}this.freeRects=[],this.maxWidth=this.width,this.maxHeight=this.height,this.options={smart:!1,pot:!1,square:!1}}add(){}reset(t=!1){}repack(){}clone(){return new OversizedElementBin(this.rects[0])}}const e=4096;var s;!function(t){t[t.MAX_AREA=0]="MAX_AREA",t[t.MAX_EDGE=1]="MAX_EDGE"}(s||(s={}));class MaxRectsPacker{constructor(t=e,i=e,h=0,a={}){this.width=t,this.height=i,this.padding=h,this.options={smart:!0,pot:!0,square:!1,allowRotation:!1,tag:!1,exclusiveTag:!0,border:0,logic:s.MAX_EDGE},this._currentBinIndex=0,this.bins=[],this.options=Object.assign(Object.assign({},this.options),a)}add(...t){if(1===t.length){if("object"!=typeof t[0])throw new Error("MacrectsPacker.add(): Wrong parameters");const i=t[0];if(i.width>this.width||i.height>this.height)this.bins.push(new OversizedElementBin(i));else{if(!this.bins.slice(this._currentBinIndex).find((t=>void 0!==t.add(i)))){let t=new MaxRectsBin(this.width,this.height,this.padding,this.options),h=i.data&&i.data.tag?i.data.tag:i.tag?i.tag:void 0;this.options.tag&&h&&(t.tag=h),t.add(i),this.bins.push(t)}}return i}{const i=new Rectangle(t[0],t[1]);if(t.length>2&&(i.data=t[2]),i.width>this.width||i.height>this.height)this.bins.push(new OversizedElementBin(i));else{if(!this.bins.slice(this._currentBinIndex).find((t=>void 0!==t.add(i)))){let t=new MaxRectsBin(this.width,this.height,this.padding,this.options);this.options.tag&&i.data.tag&&(t.tag=i.data.tag),t.add(i),this.bins.push(t)}}return i}}addArray(t){if(!this.options.tag||this.options.exclusiveTag)this.sort(t,this.options.logic).forEach((t=>this.add(t)));else{if(0===t.length)return;let i;t.sort(((t,i)=>{const h=t.data&&t.data.tag?t.data.tag:t.tag?t.tag:void 0,e=i.data&&i.data.tag?i.data.tag:i.tag?i.tag:void 0;return void 0===e?-1:void 0===h?1:e>h?-1:1}));let h=0;if(!this.bins.slice(this._currentBinIndex).find((e=>{let s=e.clone();for(let a=h;a<t.length;a++){const r=t[a],d=r.data&&r.data.tag?r.data.tag:r.tag?r.tag:void 0;if(0===a&&(i=d),d!==i)return i=d,this.sort(t.slice(h,a),this.options.logic).forEach((t=>e.add(t))),h=a,this.addArray(t.slice(a)),!0;if(void 0===d)return this.sort(t.slice(a),this.options.logic).forEach((t=>this.add(t))),h=t.length,!0;if(void 0===s.add(r))return!1}return this.sort(t.slice(h),this.options.logic).forEach((t=>e.add(t))),!0}))){const i=t[h],e=new MaxRectsBin(this.width,this.height,this.padding,this.options),s=i.data&&i.data.tag?i.data.tag:i.tag?i.tag:void 0;this.options.tag&&this.options.exclusiveTag&&s&&(e.tag=s),this.bins.push(e),this.addArray(t.slice(h))}}}reset(){this.bins=[],this._currentBinIndex=0}repack(t=!0){if(t){let t=[];for(let i of this.bins)if(i.dirty){let h=i.repack();h&&t.push(...h)}return void this.addArray(t)}if(!this.dirty)return;const i=this.rects;this.reset(),this.addArray(i)}next(){return this._currentBinIndex=this.bins.length,this._currentBinIndex}load(t){t.forEach(((t,i)=>{if(t.maxWidth>this.width||t.maxHeight>this.height)this.bins.push(new OversizedElementBin(t.width,t.height,{}));else{let h=new MaxRectsBin(this.width,this.height,this.padding,t.options);h.freeRects.splice(0),t.freeRects.forEach(((t,i)=>{h.freeRects.push(new Rectangle(t.width,t.height,t.x,t.y))})),h.width=t.width,h.height=t.height,t.tag&&(h.tag=t.tag),this.bins[i]=h}}),this)}save(){let t=[];return this.bins.forEach((i=>{let h={width:i.width,height:i.height,maxWidth:i.maxWidth,maxHeight:i.maxHeight,freeRects:[],rects:[],options:i.options};i.tag&&(h=Object.assign(Object.assign({},h),{tag:i.tag})),i.freeRects.forEach((t=>{h.freeRects.push({x:t.x,y:t.y,width:t.width,height:t.height})})),t.push(h)})),t}sort(t,i=s.MAX_EDGE){return t.slice().sort(((t,h)=>{const e=i===s.MAX_EDGE?Math.max(h.width,h.height)-Math.max(t.width,t.height):h.width*h.height-t.width*t.height;return 0===e&&t.hash&&h.hash?t.hash>h.hash?-1:1:e}))}get currentBinIndex(){return this._currentBinIndex}get dirty(){return this.bins.some((t=>t.dirty))}get rects(){let t=[];for(let i of this.bins)t.push(...i.rects);return t}}}}]);