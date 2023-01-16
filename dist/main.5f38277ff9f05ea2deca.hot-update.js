"use strict";
self["webpackHotUpdatevs_app"]("main",{

/***/ "../common/src/sdk-components/VideoRenderer.ts":
/*!*****************************************************!*\
  !*** ../common/src/sdk-components/VideoRenderer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeVideoRenderer": () => (/* binding */ makeVideoRenderer),
/* harmony export */   "videoRendererType": () => (/* binding */ videoRendererType)
/* harmony export */ });
/* harmony import */ var _SceneComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SceneComponent */ "../common/src/SceneComponent.ts");

class VideoRenderer extends _SceneComponent__WEBPACK_IMPORTED_MODULE_0__.SceneComponent {
    constructor() {
        super(...arguments);
        this.inputs = {
            src: null,
        };
        this.outputs = {
            texture: null,
        };
    }
    onInit() { }
    onInputsUpdated() {
        this.releaseTexture();
        const THREE = this.context.three;
        if (!this.inputs.src) {
            this.video.src = '';
            return;
        }
        if (this.inputs.src instanceof HTMLVideoElement) {
            this.video = this.inputs.src;
            this.video.src = 'https://flipcontents.s3.ap-northeast-2.amazonaws.com/CNP/HeyOrder%20%28Web%29/HeyOrder_Mobile.mp4';
            this.video.crossOrigin = 'anonymous';
            console.log(this.video);
            console.log(this.video.src);
        }
        else {
            this.video = this.createVideoElement();
            if (typeof this.inputs.src === 'string') {
                this.video.src = this.inputs.src;
            }
            else {
                this.video.srcObject = this.inputs.src;
            }
            this.video.load();
        }
        this.texture = new THREE.VideoTexture(this.video);
        this.texture.minFilter = THREE.LinearFilter;
        this.texture.magFilter = THREE.LinearFilter;
        this.texture.format = THREE.RGBAFormat;
        this.outputs.texture = this.texture;
        this.video.play();
    }
    onDestroy() {
        this.releaseTexture();
    }
    releaseTexture() {
        if (this.texture) {
            this.outputs.texture = null;
            this.texture.dispose();
        }
    }
    createVideoElement() {
        const video = document.createElement('video');
        video.crossOrigin = 'anonymous  | use-credentials';
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        return video;
    }
}
const videoRendererType = 'mp.videoRenderer';
function makeVideoRenderer() {
    return new VideoRenderer();
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b51ed12a79f39dbac589")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5f38277ff9f05ea2deca.hot-update.js.map