/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */
define(["GlobalUtils","PageInfo"],function(a,b){function c(){var a=document.createElement("div");return a.addEventListener("mousewheel",Browser.overrideScroll,!0),a.id="evernotePreviewContainer",a.className="evernotePreviewContainer evernotePreviewUrlContainer",a.style.setProperty("line-height","normal","important"),a}function d(){Ca.parentNode||document.documentElement.appendChild(Ca);var a=window.getComputedStyle(Ca,""),b=parseInt(a.getPropertyValue("width")),c=parseInt(a.getPropertyValue("height"));b&&c&&(Ca.style.marginLeft=0-b/2+"px",Ca.style.marginTop=0-c/2+"px"),na.fixPosition(!0)}function e(){na.fixPosition(!1),Ca.parentNode&&Ca.parentNode.removeChild(Ca)}function f(c,d,e,f,g){var h,i,j={"http://localhost/favicon.ico":!0},k=a.createTitleAndLinkPortionOfUrlClipContent(c,d),l=k.content,m=k.textPortion,n=k.link,o=k.url,p=document.createElement("div"),q=document.createElement("img"),r=document.createElement("img"),s=document.createElement("div");if(""!=f.trim()&&(f.length<500?s.textContent=f:s.textContent=f.slice(0,500)+"...",s.style.fontFamily="Helvetica, Arial, sans-serif",s.style.fontSize="12px",s.style.color="#0C0C0C",s.style.display="block",s.style.whiteSpace="normal",s.style.marginTop="15px",s.style.maxHeight="154px",s.style.overflow="hidden",m.appendChild(s)),b.getThumbnail(function(a){if(h=!0,a.src){var b=150;p.style.position="relative",p.style.display="inline-block",p.style.margin="15px 30px 0px 0px",p.style.overflow="hidden",p.style.verticalAlign="top",q.setAttribute("thumbnail",a.src),wa=q,Browser.sendToExtension({name:"cropImage",url:a.src,cropToWidth:b,cropToHeight:b}),q.style.maxWidth="none",q.style.maxHeight="none",q.style.verticalAlign="top",q.style.margin="0",q.style.padding="0",p.appendChild(q),m.parentNode?l.insertBefore(p,m):l.appendChild(p)}i&&g(l)}),e&&!j[e.toLowerCase()])r.onload=function(){i=!0,r.style.display="inline-block",r.style.border="none",r.style.width="16px",r.style.height="16px",r.style.padding="0px",r.style.margin="0px 8px -2px 0px",r.width="16",r.height="16",n.insertBefore(r,o),h&&g(l)},r.onerror=function(){i=!0,h&&g(l)},r.src=e;else if(i=!0,h)return l}function g(a,b,c){wa&&(a.datauri?(wa.src=a.datauri,wa.width=a.width,wa.height=a.height,wa.removeAttribute("thumbnail")):(wa.parentNode.parentNode.removeChild(wa.parentNode),wa=null))}function h(a,c,e){function g(a){Ca.innerHTML="",Ca.appendChild(a),d()}ma=!1;var h=b.getUrl();i(),na.gray(),b.getSnippet(function(a){var c=f(b.getTitle(),h,b.getFavIconUrl(),a,g);c&&(Ca.innerHTML="",Ca.appendChild(c),d())})}function i(){document.body.style.overflowY="",document.body.style.overflowX="",na.reset(),na.hide(),oa.reset(),oa.removeVeil(),e(),U(),s(),m(),v()}function j(){za=null,Aa=null,Ba=null,ua&&ua.parentNode&&(ua.parentNode.removeChild(ua),document.documentElement.classList.remove("clearlyBeforeVisible")),V(),FIREFOX&&(qa=null,ta=null)}function k(a){a=a||null,sa&&sa.highlight__deleteAllHighlights(a),ra&&ra.highlight__deleteAllHighlights(a)}function l(a){a?(sa||(sa={settings:{path:Browser.extension.getURL("clearly/highlight/")},window:qa.iframe.contentWindow,jQuery:window.jQuery},sa=initClearlyComponent__highlight(sa),sa.insertCSS(),sa.addMouseHandlers(),EDGE||(qa.iframe.contentWindow.clearlyHighlight=sa)),sa.enable()):(ra||(ra={settings:{path:Browser.extension.getURL("clearly/highlight/")},window:window,jQuery:window.jQuery},ra=initClearlyComponent__highlight(ra),ra.insertCSS(),ra.addMouseHandlers()),ra.enable())}function m(){ra&&ra.disable(),qa&&qa.iframe.contentWindow.clearlyHighlight&&qa.iframe.contentWindow.clearlyHighlight.disable()}function n(a){if(va=window.pageYOffset,xa){var c;if("undefined"!=typeof b&&(c=b.getSelectionFrame()),c){var d={width:c.width,height:c.height,top:c.offsetTop,bottom:c.height+c.offsetTop,left:c.offsetLeft,right:c.width+c.offsetLeft};na.revealStaticRect(na.expandRect(d,-9),c,!0),na.show()}else na.outlineElement(xa,a,!0);l()}else log.warn("Couldn't find a preview element. We should switch to 'full page' mode.")}function o(a,c,d){if(ma=!0,window.focus(),i(),xa){var e=xa.getBoundingClientRect();(!e||e&&0==e.width&&0==e.height)&&(xa=null)}xa?(n(a.scrollToElement),ya>1&&na.setPageCount(ya-1)):b.getDefaultArticle(function(a){xa=a,n(!0),b.getNextPages(function(a,b){ya=Math.max(a.length,b.length),ya>1&&na.setPageCount(ya-1)})})}function p(){ma=!1,window.focus(),i(),qa?q():r()}function q(){document.body.classList.add("clearlyBeforeVisible"),document.documentElement.classList.add("clearlyBeforeVisible"),qa.iframe.classList.add("evernoteClipperVisible"),l(!0)}function r(){qa={callbacks:{frameCreated:function(){qa.applyUnencodedOptions(qa.defaultThemes.newsprint),qa.loadGoogleFontsRequiredByAppliedOptions(),qa.iframe.addEventListener(Browser.whichTransitionEnd(),function(a){"width"===a.propertyName&&(this.classList.contains("evernoteClipperVisible")?(document.body.classList.add("clearlyVisible"),document.documentElement.classList.add("clearlyVisible"),qa.iframe.contentDocument.body.classList.add("clearlyWaiting"),0==qa.pagesCount?b.getDefaultArticle(function(a,c){qa.addNewPage(c,window.location.href),qa.iframe.contentDocument.body.classList.add("clearlyReady"),b.getNextPages(function(a,b){for(var c=qa.pagesCount;c<b.length;c++)qa.addNewPage(b[c],window.location.href)})}):qa.iframe.contentDocument.body.classList.add("clearlyReady")):(document.body.classList.remove("clearlyVisible","clearlyBeforeVisible"),document.documentElement.classList.remove("clearlyVisible","clearlyBeforeVisible")))});var a=qa.iframe.contentDocument.createElement("link");a.rel="stylesheet",a.href=Browser.extension.getURL("clearly/reformat/css/additional.css"),qa.iframe.contentDocument.body.appendChild(a),qa.iframe.contentWindow.loading=qa.iframe.contentDocument.createElement("div"),qa.iframe.contentWindow.loading.id="loading",qa.iframe.contentDocument.body.appendChild(qa.iframe.contentWindow.loading),q()}},settings:{path:Browser.extension.getURL("clearly/reformat/"),pageLabel:function(a){return Browser.i18n.getMessage("page",[a.toString()])},onCreateFrameUseThisId:"evernoteClearlyArticle",onCreateFrameDoNotInsertCSS:!0,onCreateFrameUseThisURLAsTheLocation:FIREFOX?Browser.getExtensionURL("iframe_stub.html"):""},window:window,jQuery:window.jQuery},qa=initClearlyComponent__reformat(qa),qa.createFrame()}function s(){qa&&qa.iframe&&(qa.iframe.contentDocument.body.classList.remove("clearlyWaiting","clearlyReady"),qa.iframe.classList.remove("evernoteClipperVisible"))}function t(){return qa}function u(){if(ma=!1,window.focus(),i(),ua&&ua.parentNode)ua.classList.remove("evernoteClipperHidden"),document.documentElement.classList.add("clearlyBeforeVisible");else{var a=document.createElement("div");a.classList.add("evernoteLargeLoading"),document.documentElement.appendChild(a),ta?ta.createFrame():"function"==typeof initClearlyComponent__reformat_custom?(ta={callbacks:{frameCreated:function(){ua=ta.iframe,document.documentElement.classList.add("clearlyBeforeVisible"),Browser.sendToExtension({name:"getPersistentValue",key:b.getCustomFormatSiteName(b.isCustomFormat().id)+"UncheckedSections"})}},settings:{path:Browser.extension.getURL("clearly/reformat_custom/"),cssFontsFile:Browser.extension.getURL("content/"+(SAFARI?"safari":"chrome")+"_fonts.css"),onCreateFrameDoNotInsertCSS:!0,onCreateFrameUseThisId:"evernoteClearlyCustom",onCreateFrameUseThisURLAsTheLocation:FIREFOX?Browser.getExtensionURL("iframe_stub.html"):""},window:window,jQuery:jQuery},ta=initClearlyComponent__reformat_custom(ta),ta?ta.createFrame():log.warn("could not initialize clearly custom reformat")):log.warn("could not find clearly custom reformat")}}function v(){ua&&ua.parentNode&&(ua.classList.add("evernoteClipperHidden"),document.documentElement.classList.remove("clearlyBeforeVisible"))}function w(){return ta.getContentToSaveNode()}function x(){return ta.getUncheckedSections()}function y(a){ta&&ta.setUncheckedSections(b.isCustomFormat().id,a)}function z(){for(var a=document.getElementsByClassName("evernoteLargeLoading");a.length;){var b=a[0];b.parentNode.removeChild(b)}}function A(a,b){if(!a)return log.warn("Can't determine if 'null' is interesting (it's probably not)."),!1;if(a===window.document)return!1;if(""==a.textContent.trim()&&0===a.getElementsByTagName("img").length)return!1;var c=a.getBoundingClientRect();if(!c.width||!c.height)return!1;var d=getComputedStyle(a);return"hidden"!==d.visibility&&"none"!==d.display&&(!a.parentNode||!b.parentNode||a.parentNode!=b&&b.parentNode!=a||!B(a,b))}function B(a,b){var c=a.getBoundingClientRect(),d=b.getBoundingClientRect();return(c.bottom!=d.bottom||c.height!=d.height||c.left!=d.left||c.right!=d.right||c.top!=d.top||c.width!=d.width)&&((a.textContent!==b.textContent||a.getElementsByTagName("img").length!==b.getElementsByTagName("img").length)&&void 0)}function C(a){for(var b=0;b<a.children.length;b++){if(B(a.children[b],a))return C(a.children[b]);if(A(a.children[b],a))return a.children[b]}return a}function D(){return xa}function E(a){function c(){var a=Ca.querySelector("[thumbnail]");a&&a.parentNode.parentNode.removeChild(a.parentNode);for(var b=new XMLSerializer,c="",d=0;d<Ca.children.length;d++)c+=b.serializeToString(Ca.children[d]);return c.replace(/\sxmlns=(?:'[^']+'|"[^"]+")/gi,"")}return Ca.innerHTML?c():void b.getSnippet(function(d){var e=f(b.getTitle(),b.getUrl(),b.getFavIconUrl(),d,function(b){b&&(Ca.innerHTML="",Ca.appendChild(b),a(c()))});e&&(Ca.innerHTML="",Ca.appendChild(e),a(c()))})}function F(){for(var a=xa.parentNode;a;){if(A(a,xa)){a.enNudgeDescendToNode=xa,xa=a;break}a=a.parentNode}}function G(){if(xa.enNudgeDescendToNode){var a=xa.enNudgeDescendToNode;delete xa.enNudgeDescendToNode,xa=a}else xa=C(xa)}function H(){if(ma){var a=xa;F(),a!==xa&&na.outlineElement(xa,!1,!0,!0)}}function I(){if(ma){var a=xa;G(),a!==xa&&na.outlineElement(xa,!1,!0,!0)}}function J(){if(ma)for(var a=xa.previousElementSibling;a;){if(A(a,xa)){xa=a,na.outlineElement(xa,!1,!0,!0);break}a=a.previousElementSibling}}function K(){if(ma)for(var a=xa.nextElementSibling;a;){if(A(a,xa)){xa=a,na.outlineElement(xa,!1,!0,!0);break}a=a.nextElementSibling}}function L(){var a=4,b=document.body.scrollWidth,c=document.body.scrollHeight;return 0==document.body.scrollHeight&&document.body.children.length>0&&(c=document.body.children[0].scrollHeight),rect={bottom:c-a,top:a,left:a,right:b-a,width:b-2*a,height:c-2*a}}function M(){ma=!1;var a=L();i(),na.revealStaticRect(a,document.body,null,!0),na.show(),l()}function N(){ma=!1,i()}function O(){var a=document.createElement("div");return a.id="evernoteEmailPreview",a.addEventListener("mousewheel",Browser.overrideScroll,!0),a}function P(){i(),V(),Da=O(),Browser.sendToExtension({name:"bounce",message:{name:"gt_setSaveReady",value:!1}}),na.reset(),na.fixPosition(!0),na.blockMouse(!0),na.gray(),Da.innerHTML="";var a=document.createElement("div");a.classList.add("evernoteLargeLoading"),Da.appendChild(a),W();var b=document.createElement("div"),c=document.createElement("div");c.className="evernoteEmailHeader evernoteEmailBig",b.appendChild(c);var d=document.createElement("div");d.id="evernoteEmailParticipants",d.className="evernoteEmailHeader evernoteEmailSmall",b.appendChild(d);var e=document.createElement("div");e.className="evernoteEmailDivider evernoteEmailLight evernoteEmailLong",b.appendChild(e);var f=document.createElement("div");f.id="evernoteEmailSelectAllMessages",f.className="evernoteEmailHeader evernoteEmailMedium evernoteEmailSelectedMessage";var g=document.createElement("div");g.className="evernoteEmailCheckbox",g.addEventListener("click",function(){var a=document.querySelectorAll(".evernoteEmail");if(/evernoteEmailSelectedMessage/.test(this.parentNode.className))for(var b=0;b<a.length;b++)R(a.item(b));else for(var b=0;b<a.length;b++)Q(a.item(b))}),f.appendChild(g);var h=document.createElement("span");h.innerText=Browser.i18n.getMessage("selectAllMessages"),f.appendChild(h),b.appendChild(f),pa.getThread(function(a,f){if(a){Browser.sendToExtension({name:"bounce",message:{name:"gt_setTitle",title:a.subject}}),c.innerText=a.subject,a.participants&&Object.keys(a.participants).length>0&&(d.innerText=Browser.i18n.getMessage("participants")+": "+Object.keys(a.participants).join(", "));for(var h=0;h<a.messages.length;h++){0!=h&&(e=document.createElement("div"),e.className="evernoteEmailDivider evernoteEmailDark evernoteEmailShort",b.appendChild(e));var j=document.createElement("div");j.className="evernoteEmail evernoteEmailSelectedMessage",g=document.createElement("div"),g.className="evernoteEmailCheckbox",g.addEventListener("click",function(){/evernoteEmailSelectedMessage/.test(this.parentNode.className)?R(this.parentNode):Q(this.parentNode)}),j.appendChild(g);var k=document.createElement("div"),l=document.createElement("span");l.className="evernoteEmailHeader evernoteEmailMedium",l.innerText=a.messages[h].author.name+" ",k.appendChild(l);var m=document.createElement("span");m.className="evernoteEmailDimmed evernoteEmailSmall evernoteEmailRight",m.innerText=a.messages[h].date,k.appendChild(m),j.appendChild(k);var n=document.createElement("div");if(n.className="evernoteEmailBody",n.innerHTML=a.messages[h].body,j.appendChild(n),a.messages[h].attachments.length>0){var o=document.createElement("div");o.className="evernoteEmailAttachments";for(var p=0;p<a.messages[h].attachments.length;p++){var q=document.createElement("div"),r=document.createElement("input");r.type="checkbox",r.checked="true",r.addEventListener("click",function(){this.parentNode.getAttribute("evernoteIgnoreAttachment")?S(this.parentNode):T(this.parentNode)});var s=document.createElement("span");s.className="evernoteEmailSmall";var t=document.createElement("span");t.className="evernoteEmailDimmed evernoteEmailSmall evernoteEmailSize",s.textContent=a.messages[h].attachments[p].name,t.textContent="("+a.messages[h].attachments[p].size+")",q.setAttribute("evernote_attachment_url",a.messages[h].attachments[p].url),q.setAttribute("evernote_attachment_name",s.textContent),q.setAttribute("evernote_attachment_mime",a.messages[h].attachments[p].mime),q.appendChild(r),q.appendChild(s),q.appendChild(t),o.appendChild(q)}j.appendChild(o)}b.appendChild(j)}z(),Da.appendChild(b)}else log.warn(f),i(),alert(Browser.i18n.getMessage("popup_couldntStart"));Browser.sendToExtension({name:"bounce",message:{name:"gt_setSaveReady",value:!0}})})}function Q(a){a.className+=" evernoteEmailSelectedMessage";var b=a.children[1].firstElementChild;b.className=b.className.replace(/\s*evernoteEmailDimmed/g,""),document.querySelectorAll(".evernoteEmail").length===document.querySelectorAll(".evernoteEmail.evernoteEmailSelectedMessage").length&&(document.querySelector("#evernoteEmailSelectAllMessages").className+=" evernoteEmailSelectedMessage")}function R(a){a.className=a.className.replace(/\s*evernoteEmailSelectedMessage/g,"");var b=a.children[1].firstElementChild;b.className+=" evernoteEmailDimmed";var c=document.querySelector("#evernoteEmailSelectAllMessages");c.className=c.className.replace(/\s*evernoteEmailSelectedMessage/g,"")}function S(a){a.removeAttribute("evernoteIgnoreAttachment")}function T(a){a.setAttribute("evernoteIgnoreAttachment","true")}function U(){Da&&(Da.style.display="none")}function V(){Da.parentNode&&Da.parentNode.removeChild(Da)}function W(){Da.parentNode||document.documentElement.appendChild(Da),Da.style.display="block"}function X(){if(Da){for(var a=Da.firstElementChild,c=a.querySelectorAll('.evernoteEmailCheckbox, #evernoteEmailSelectAllMessages, .evernoteEmail:not(.evernoteEmailSelectedMessage), [evernoteignoreattachment="true"]'),d=0;d<c.length;d++)if(c.item(d).parentNode){if(c.item(d).matchesSelector&&c.item(d).matchesSelector(".evernoteEmail")||c.item(d).msMatchesSelector&&c.item(d).msMatchesSelector(".evernoteEmail")){var e=c.item(d).previousElementSibling;e&&/evernoteEmailDivider/.test(e.className)&&/evernoteEmailShort/.test(e.className)||(e=c.item(d).nextElementSibling),e&&e.parentNode&&/evernoteEmailDivider/.test(e.className)&&/evernoteEmailShort/.test(e.className)&&e.parentNode.removeChild(e)}if("evernoteEmailSelectAllMessages"==c.item(d).id){var f=document.createElement("a");f.id="evernoteEmailLinkBack",f.className="evernoteEmailHeader evernoteEmailMedium",f.target="_blank",f.href=document.location.href;var g=document.createElement("div");g.id="evernoteEmailLinkBackArrow",f.appendChild(g);var h=document.createElement("span"),i="";b.isGmailThread()?i=Browser.i18n.getMessage("openConvoInGmail"):b.isGoogleInboxThread()&&(i=Browser.i18n.getMessage("openConvoInGoogleInbox")),h.innerText=i,f.appendChild(h),c.item(d).parentNode.insertBefore(f,c.item(d))}c.item(d).parentNode.removeChild(c.item(d))}var j=a.querySelector(".evernoteEmailDivider.evernoteEmailLong");return j&&(j.className=j.className.replace(/\s*evernoteEmailLong/g," evernoteEmailShort")),a}return null}function Y(){for(var a="",b=["#evernoteEmailPreview .evernoteEmailHeader, #evernoteEmailPreview .evernoteEmailDimmed, #evernoteEmailPreview .evernoteEmailAttachments","#evernoteEmailPreview .evernoteEmailHeader","#evernoteEmailPreview .evernoteEmailBig","#evernoteEmailPreview .evernoteEmailMedium","#evernoteEmailPreview .evernoteEmailSmall","#evernoteEmailPreview .evernoteEmailRight","#evernoteEmailPreview .evernoteEmailDimmed","#evernoteEmailPreview .evernoteEmailDivider","#evernoteEmailPreview .evernoteEmailLight","#evernoteEmailPreview .evernoteEmailDark","#evernoteEmailPreview .evernoteEmailLong","#evernoteEmailPreview .evernoteEmailShort","#evernoteEmailParticipants","#evernoteEmailLinkBack","#evernoteEmailLinkBackArrow","#evernoteEmailPreview .evernoteEmail","#evernoteEmailPreview .evernoteEmailBody","#evernoteEmailPreview .evernoteEmailAttachments","#evernoteEmailPreview .evernoteEmailAttachments .evernoteEmailSize"],c=["font-family: Helvetica, Arial, sans-serif !important;","color: #333333 !important; font-weight: bold !important;","font-size: 15px !important;","font-size: 14px !important;","font-size: 12px !important;","float: right !important;","color: #888888 !important;","height: 1px !important;","background-color: #E9E9E9 !important;","background-color: #B3B3B3 !important;","left: -48px !important; position: relative !important; width: calc(100% + 96px) !important;","width: 100% !important;","margin: 16px 0 29px 0 !important;","display: block; margin: 22px 0 8px 0 !important; position: relative !important; text-decoration: none !important;","background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAr0lEQVQoU2NkwAKMjY35gcLTzp49G41NHlmMEV2BgYGBNRMT0xJGRkYFoAEY8ujqkRWwGBoa1gI1VwMVMYMUEm2Arq6uEisr62KgrVbINhBlgJGRUQxQ41SgRj5C/sUmzwh0dhzQ2ZPJNgBkKtQLS4EusSDWC8CY+g9SixKIQME6oFgVMYGIzQCw5UAJm////4OiUR5fIOI0AGoIP9CQGefOnYvEFbB4DSAmNmAGAABi7TE0OfL+0wAAAABJRU5ErkJggg==) !important;background-repeat: no-repeat !important; background-size: 16px 11px !important;display: inline-block; height: 11px !important; margin-right: 12px; width: 16px !important;","margin: 24px 0 !important; position: relative !important;","color: #222; font-family: Arial, sans-serif; font-size: 13px; margin-top: 24px !important;","padding: 20px 0 0 40px !important;","margin-left: 10px !important;"],d=0;d<b.length;d++)a+=b[d]+"{"+c[d]+"}";var e=document.createElement("style");e.innerText=a,document.head||(document.head=document.createElement("head")),document.head.appendChild(e)}function Z(a,b){var c={top:Math.min(a.top,b.top),bottom:Math.max(a.bottom,b.bottom),left:Math.min(a.left,b.left),right:Math.max(a.right,b.right)};return c.width=c.right-c.left,c.height=c.bottom-c.top,c}function $(a,b){return!a&&!b||!!a&&(!!b&&(a.top==b.top&&(a.bottom==b.bottom&&(a.left==b.left&&(a.right==b.right&&(a.width==b.width&&a.height==b.height))))))}function _(a){if(0!==a.endOffset||a.endContainer.nodeType!==Node.ELEMENT_NODE){var b=a.getBoundingClientRect(),c={top:b.top,bottom:b.bottom,left:b.left,right:b.right,width:b.width,height:b.height};return c}var d=null;try{d=a.endContainer.getBoundingClientRect()}catch(a){log.warn("Couldn't get a bounding client rect for our end element, maybe it's a text node.")}for(var e=!1,f=[],g=a.getClientRects(),h=0;h<g.length;h++)$(d,g[h])&&!e?e=!0:f.push(g[h]);if(0==f.length)return a.getBoundingClientRect();if(1==f.length)return f[0];for(var b=f[0],h=1;h<f.length;h++)b=Z(b,f[h]);return b}function aa(a){return"rtl"!=document.dir&&(!(a.bottom<0&&a.top<0)&&!(a.left<0&&a.right<0))}function ba(a,b){var c=b,d=a.getBoundingClientRect();if(d={bottom:d.bottom+window.scrollY,height:d.height,left:d.left+window.scrollX,right:d.right+window.scrollX,top:d.top+window.scrollY,width:d.width},!aa(d))return c;var e=getComputedStyle(a);if("none"==e.display)return c;if("hidden"==e.overflowX||"hidden"==e.overflowY)return c;if(d.width*d.height>1&&(c=Z(d,b)),a.children)for(var f=0;f<a.children.length;f++)c=ba(a.children[f],c);return c}function ca(a,b){if(b)return L();if(!a)return{top:0,bottom:0,left:0,right:0,width:0,height:0};var c=a.getBoundingClientRect();return ba(a,{bottom:c.bottom+window.scrollY,height:c.height,left:c.left+window.scrollX,right:c.right+window.scrollX,top:c.top+window.scrollY,width:c.width})}function da(){var a;if(void 0!==typeof b&&!za){a=b.getSelection(),za=[],Aa=[];for(var c=0;c<a.rangeCount;c++)za.push(a.getRangeAt(c).cloneRange()),Aa.push([za[c].startOffset,za[c].endOffset]);Ba=b.getSelectionFrame()}if(!a){a=window.getSelection(),a.removeAllRanges();for(var d=0;d<za.length;d++){var e=document.createRange();if((za[d].startContainer.length||za[d].startContainer.childNodes.length)<Aa[d][0])for(var f=0,c=0;c<za[d].startContainer.childNodes.length;c++){var g=za[d].startContainer.childNodes[c],h=0;if(h=g.getAttribute&&g.getAttribute("clearly_highlight_id")?(g.innerText||g.textContent).length:g.length||g.childNodes.length,f+=h,f>=Aa[d][0]){e.setStart(g,Aa[d][0]-(f-h));break}}else e.setStart(za[d].startContainer,Aa[d][0]);if((za[d].endContainer.length||za[d].endContainer.childNodes.length)<Aa[d][1])for(var f=0,c=0;c<za[d].endContainer.childNodes.length;c++){var g=za[d].endContainer.childNodes[c],h=0;if(h=g.getAttribute&&g.getAttribute("clearly_highlight_id")?(g.innerText||g.textContent).length:g.length||g.childNodes.length,f+=h,f>=Aa[d][1]){e.setEnd(g,Aa[d][1]-(f-h));break}}else e.setEnd(za[d].endContainer,Aa[d][1]);a.addRange(e)}}return a}function ea(){va&&window.scrollTo(0,va),ma=!1;var a=da();na.reset();var b=null;Ba&&(b=Ba.getBoundingClientRect());var c,d,e;if(a)for(i(),na.reset(),e=0;e<a.rangeCount;e++)c=a.getRangeAt(e),d=_(c),d.top+=window.pageYOffset,d.bottom+=window.pageYOffset,d.left+=window.pageXOffset,d.right+=window.pageXOffset,b&&(d.left+=b.left,d.right+=b.left,d.top+=b.top,d.bottom+=b.top),na.revealStaticRect(d,Ba,!1),na.show();na.show()}function fa(a,b){var c=parseFloat(na.getElement().style.borderTopWidth),d=parseFloat(na.getElement().style.borderRightWidth),e=parseFloat(na.getElement().style.borderBottomWidth),f=parseFloat(na.getElement().style.borderLeftWidth),g=parseFloat(na.getElement().style.width),h=parseFloat(na.getElement().style.height);return!(a<g-d&&a>f&&b>c&&b<h-e)}function ga(a){i(),na.reset(),na.gray(a)}function ha(a){xa=a}function ia(){va&&window.scrollTo(0,va),ga("transparent"),oa.reset(),oa.showVeil(),oa.setColor("rgba(0, 0, 0, 0.27)"),oa.enableCrosshair()}function ja(a){a.key===b.getCustomFormatSiteName(b.isCustomFormat().id)+"UncheckedSections"&&(a.value&&a.value[a.currentUserId]&&y(a.value[a.currentUserId]),b.getCustomFormatReformattedData(function(a){z(),ta.displayDetected(a)}))}function ka(){i()}var la={},ma=!1,na=new ContentVeil,oa=new Veil,pa=new GmailClipper,qa=null,ra=null,sa=null,ta=null,ua=null;b.isGmail()&&Y();var va,wa,xa=null,ya=0,za=null,Aa=null,Ba=null,Ca=c(),Da=O();return Browser.addMessageHandlers({clearPreview:i,previewArticle:o,previewClearly:p,previewCustom:u,previewEmail:P,previewFullPage:M,previewPdf:N,previewSelection:ea,previewSkitch:ia,previewUrl:h,receiveCroppedImage:g,receivePersistentValue:ja,receiveScreenshot:ka}),la.clear=i,la.clearHighlights=k,la.getArticleElement=D,la.getUrlElement=E,la.getClearlyReformat=t,la.getCustomElementContent=w,la.getCustomElementUncheckedSections=x,la.looksInteresting=A,la.computeDescendantBoundingBox=ca,la.getEmailElement=X,la.ensureSelectionIsShown=da,la.expandPreview=H,la.contractPreview=I,la.moveToElementAbove=J,la.moveToElementBelow=K,la.isPointOnVeil=fa,la.reset=j,la.gray=ga,la.setElement=ha,la});