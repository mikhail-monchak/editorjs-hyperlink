!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Hyperlink=t():e.Hyperlink=t()}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){var i=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],l=t.base?r[0]+t.base:r[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=s(u),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(h)):a.push({identifier:u,updater:g(h,t),references:1}),i.push(u)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,v=0;function g(e,t){var n,i,o;if(t.singleton){var r=v++;n=f||(f=c(t)),i=h.bind(null,n,r,!1),o=h.bind(null,n,r,!0)}else n=c(t),i=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);a[o].references--}for(var r=l(e,t),c=0;c<n.length;c++){var u=s(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,".ce-inline-tool-hyperlink-wrapper {\n    outline: none;\n    border: 0;\n    border-radius: 0 0 4px 4px;\n    margin: 0;\n    font-size: 13px;\n    padding: 10px;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: none;\n    font-weight: 500;\n    border-top: 1px solid rgba(201,201,204,.48);\n}\n\n.ce-inline-tool-hyperlink-wrapper.ce-inline-tool-hyperlink-wrapper--showed {\n    display: block;\n}\n\n.ce-inline-tool-hyperlink--input,\n.ce-inline-tool-hyperlink--select-target,\n.ce-inline-tool-hyperlink--select-rel {\n    border: 1px solid rgba(201,201,204,.48);\n    -webkit-box-shadow: inset 0 1px 2px 0 rgba(35,44,72,.06);\n    box-shadow: inset 0 1px 2px 0 rgba(35,44,72,.06);\n    border-radius: 3px;\n    padding: 5px 8px;\n    margin-bottom: 10px;\n    outline: none;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.ce-inline-tool-hyperlink--select-target,\n.ce-inline-tool-hyperlink--select-rel {\n    width: 48%;\n    display: inline-block;\n}\n.ce-inline-tool-hyperlink--select-target {\n    margin-right: 2%;\n}\n.ce-inline-tool-hyperlink--select-rel {\n    margin-left: 2%;\n}\n\n.ce-inline-tool-hyperlink--button {\n    display: block;\n    width: 100%;\n    background-color: #34c38f;\n    color: #fff;\n    padding: 7px 0;\n    border: none;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}var t,n,r;return t=e,r=[{key:"range",get:function(){var e=window.getSelection();return e&&e.rangeCount?e.getRangeAt(0):null}},{key:"rect",get:function(){var e,t=document.selection,n={x:0,y:0,width:0,height:0};if(t&&"Control"!==t.type)return e=t.createRange(),n.x=e.boundingLeft,n.y=e.boundingTop,n.width=e.boundingWidth,n.height=e.boundingHeight,n;if(!window.getSelection)return n;if(null===(t=window.getSelection()).rangeCount||isNaN(t.rangeCount))return n;if(0===t.rangeCount)return n;if((e=t.getRangeAt(0).cloneRange()).getBoundingClientRect&&(n=e.getBoundingClientRect()),0===n.x&&0===n.y){var i=document.createElement("span");if(i.getBoundingClientRect){i.appendChild(document.createTextNode("​")),e.insertNode(i),n=i.getBoundingClientRect();var o=i.parentNode;o.removeChild(i),o.normalize()}}return n}},{key:"text",get:function(){return window.getSelection?window.getSelection().toString():""}}],(n=[{key:"isElement",value:function(e){return e&&"object"===i(e)&&e.nodeType&&e.nodeType===Node.ELEMENT_NODE}},{key:"isContentEditable",value:function(e){return"true"===e.contentEditable}},{key:"isNativeInput",value:function(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)}},{key:"canSetCaret",value:function(e){var t=!0;if(this.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t=this.isContentEditable(e);return t}},{key:"CSS",value:function(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}},{key:"anchorNode",value:function(){var e=window.getSelection();return e?e.anchorNode:null}},{key:"anchorElement",value:function(){var e=window.getSelection();if(!e)return null;var t=e.anchorNode;return t?this.isElement(t)?t:t.parentElement:null}},{key:"anchorOffset",value:function(){var e=window.getSelection();return e?e.anchorOffset:null}},{key:"isCollapsed",value:function(){var e=window.getSelection();return e?e.isCollapsed:null}},{key:"isAtEditor",value:function(){var t=e.get(),n=t.anchorNode||t.focusNode;n&&n.nodeType===Node.TEXT_NODE&&(n=n.parentNode);var i=null;return n&&(i=n.closest(".".concat(e.CSS.editorZone))),i&&i.nodeType===Node.ELEMENT_NODE}},{key:"isSelectionExists",value:function(){return!!e.get().anchorNode}},{key:"get",value:function(){return window.getSelection()}},{key:"setCursor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=document.createRange(),i=window.getSelection();if(this.isNativeInput(e)){if(!this.canSetCaret(e))return;return e.focus(),e.selectionStart=e.selectionEnd=t,e.getBoundingClientRect()}return n.setStart(e,t),n.setEnd(e,t),i.removeAllRanges(),i.addRange(n),n.getBoundingClientRect()}},{key:"removeFakeBackground",value:function(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}},{key:"setFakeBackground",value:function(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}},{key:"save",value:function(){this.savedSelectionRange=e.range}},{key:"restore",value:function(){if(this.savedSelectionRange){var e=window.getSelection();e.removeAllRanges(),e.addRange(this.savedSelectionRange)}}},{key:"clearSaved",value:function(){this.savedSelectionRange=null}},{key:"collapseToEnd",value:function(){var e=window.getSelection(),t=document.createRange();t.selectNodeContents(e.focusNode),t.collapse(!1),e.removeAllRanges(),e.addRange(t)}},{key:"findParentTag",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,i=window.getSelection(),o=null;if(!i||!i.anchorNode||!i.focusNode)return null;var r=[i.anchorNode,i.focusNode];return r.forEach((function(i){for(var r=n;r>0&&i.parentNode&&(i.tagName!==e||(o=i,t&&i.classList&&!i.classList.contains(t)&&(o=null),!o));)i=i.parentNode,r--})),o}},{key:"expandToTag",value:function(e){var t=window.getSelection();t.removeAllRanges();var n=document.createRange();n.selectNodeContents(e),t.addRange(n)}}])&&o(t.prototype,n),r&&o(t,r),e}();n(0);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(t){var n=t.api,i=t.config;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.toolbar=n.toolbar,this.inlineToolbar=n.inlineToolbar,this.tooltip=n.tooltip,this.i18n=n.i18n,this.config=i,this.selection=new r,this.commandLink="createLink",this.commandUnlink="unlink",this.CSS={wrapper:"ce-inline-tool-hyperlink-wrapper",wrapperShowed:"ce-inline-tool-hyperlink-wrapper--showed",button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"ce-inline-tool-hyperlink--input",selectTarget:"ce-inline-tool-hyperlink--select-target",selectRel:"ce-inline-tool-hyperlink--select-rel",buttonSave:"ce-inline-tool-hyperlink--button"},this.targetAttributes=["_blank","_self","_parent","_top"],this.relAttributes=["alternate","author","bookmark","external","help","license","next","nofollow","noreferrer","noopener","prev","search","tag"],this.nodes={button:null,wrapper:null,input:null,selectTarget:null,selectRel:null,buttonSave:null},this.inputOpened=!1}var t,n,i;return t=e,i=[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{a:{href:!0,target:!0,rel:!0}}}}],(n=[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(this.iconSvg("link",14,10)),this.nodes.button.appendChild(this.iconSvg("unlink",15,11)),this.nodes.button}},{key:"renderActions",value:function(){var e,t=this;for(this.nodes.wrapper=document.createElement("div"),this.nodes.wrapper.classList.add(this.CSS.wrapper),this.nodes.input=document.createElement("input"),this.nodes.input.placeholder="https://...",this.nodes.input.classList.add(this.CSS.input),this.nodes.selectTarget=document.createElement("select"),this.nodes.selectTarget.classList.add(this.CSS.selectTarget),this.addOption(this.nodes.selectTarget,"-- Target --",""),e=0;e<this.targetAttributes.length;e++)this.addOption(this.nodes.selectTarget,this.targetAttributes[e],this.targetAttributes[e]);for(this.nodes.selectRel=document.createElement("select"),this.nodes.selectRel.classList.add(this.CSS.selectRel),this.addOption(this.nodes.selectRel,"-- Rel --",""),e=0;e<this.relAttributes.length;e++)this.addOption(this.nodes.selectRel,this.relAttributes[e],this.relAttributes[e]);return this.nodes.buttonSave=document.createElement("button"),this.nodes.buttonSave.type="button",this.nodes.buttonSave.classList.add(this.CSS.buttonSave),this.nodes.buttonSave.innerHTML=this.i18n.t("Save"),this.nodes.buttonSave.addEventListener("click",(function(e){t.savePressed(e)})),this.nodes.wrapper.appendChild(this.nodes.input),this.nodes.wrapper.appendChild(this.nodes.selectTarget),this.nodes.wrapper.appendChild(this.nodes.selectRel),this.nodes.wrapper.appendChild(this.nodes.buttonSave),this.nodes.wrapper}},{key:"surround",value:function(e){if(e){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());var t=this.selection.findParentTag("A");if(t)return this.selection.expandToTag(t),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()}},{key:"checkState",value:function(){var e=this.selection.findParentTag("A");if(e){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var t=e.getAttribute("href"),n=e.getAttribute("target"),i=e.getAttribute("rel");this.nodes.input.value=t||"",this.nodes.selectTarget.value=n||"",this.nodes.selectRel.value=i||"",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!e}},{key:"clear",value:function(){this.closeActions()}},{key:"toggleActions",value:function(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}},{key:"openActions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.nodes.wrapper.classList.add(this.CSS.wrapperShowed),e&&this.nodes.input.focus(),this.inputOpened=!0}},{key:"closeActions",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.selection.isFakeBackgroundEnabled){var t=new r;t.save(),this.selection.restore(),this.selection.removeFakeBackground(),t.restore()}this.nodes.wrapper.classList.remove(this.CSS.wrapperShowed),this.nodes.input.value="",this.nodes.selectTarget.value="",this.nodes.selectRel.value="",e&&this.selection.clearSaved(),this.inputOpened=!1}},{key:"savePressed",value:function(e){var t=this;e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();var n=this.nodes.input.value||"",i=this.nodes.selectTarget.value||"",o=this.nodes.selectRel.value||"";if(n.trim()||(this.selection.restore(),this.unlink(),e.preventDefault(),this.closeActions()),!this.validateURL(n))return this.tooltip.show(this.nodes.input,"Pasted link is not valid.",{placement:"top"}),void setTimeout((function(){t.tooltip.hide()}),1e3);n=this.prepareLink(n),this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink(n,i,o),this.selection.collapseToEnd(),this.inlineToolbar.close()}},{key:"validateURL",value:function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}},{key:"prepareLink",value:function(e){return e=e.trim(),e=this.addProtocol(e)}},{key:"addProtocol",value:function(e){if(/^(\w+):(\/\/)?/.test(e))return e;var t=/^\/[^/\s]/.test(e),n="#"===e.substring(0,1),i=/^\/\/[^/\s]/.test(e);return t||n||i||(e="http://"+e),e}},{key:"insertLink",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=this.selection.findParentTag("A");i?this.selection.expandToTag(i):(document.execCommand(this.commandLink,!1,e),i=this.selection.findParentTag("A")),i&&(t?i.target=t:i.removeAttribute("target"),n?i.rel=n:i.removeAttribute("rel"))}},{key:"unlink",value:function(){document.execCommand(this.commandUnlink)}},{key:"iconSvg",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,i=document.createElementNS("http://www.w3.org/2000/svg","svg");return i.classList.add("icon","icon--"+e),i.setAttribute("width",t+"px"),i.setAttribute("height",n+"px"),i.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(e,'"></use>'),i}},{key:"addOption",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=document.createElement("option");i.text=t,i.value=n,e.add(i)}},{key:"shortcut",get:function(){return this.config.shortcut||"CMD+L"}},{key:"title",get:function(){return"Hyperlink"}}])&&a(t.prototype,n),i&&a(t,i),e}();t.default=s}])}));