/*! Copyright 2009-2017 Evernote Corporation. All rights reserved. */
define(["GlobalUtils","isTest","topFrame!pageVisible!"],function(a,b){function c(){if(qa)return qa;for(var a in ha)if(ha[a].regex.test(document.location.href))return a;return null}function d(a){for(var b=a||document,c=b.getElementsByTagName("img"),d=null,e=0,f=0;f<c.length;f++){var g=c[f].width*c[f].height;g>e&&(d=c[f],e=g)}return d}function e(a){var b=a?a[0]:null;a:for(;b;){for(var c=a.length,d=0;d<c;d++)if(!b.contains(a[d])){b=b.parentNode;continue a}break}return b}function f(a){a=a||window;var b=a.location.host;return/^www\./.test(b)&&(b=b.substr(4)),b}function g(a){var a=a||window,b=f(a);if(ea[b]){var c=a.document||document,d=ea[b].join(","),e=c.querySelector(d);if(e)return e}return null}function h(a){var b=f();if(fa[b]){var c=document.querySelector(fa[b].container);if(c){var h=c.querySelectorAll(fa[b].include);if(h&&h.length>0){for(var i=h[h.length-1].nextElementSibling,k=document.createElement("div"),l=0;l<h.length;l++)k.appendChild(h[l]);return i.parentNode.insertBefore(k,i),k}}}var m=g();if(null!==m)return m;if(ga.indexOf(b)!=-1){var k=d();if(k)return k}if(qa){var k=document.querySelector(ha[qa].content);return k&&""!=k.textContent.trim()||(k=document.createElement("div"),document.body.insertBefore(k,document.body.firstChild)),k}if(/\.(jpe?g|gif|png)$/i.test(location.href)){var n=document.getElementsByTagName("img")[0];if(n&&n.parentNode===document.body)return n}if("frameset"==document.body.nodeName.toLowerCase()){na=!0;var o=j();if(o&&o.contentDocument&&o.contentDocument.documentElement){oa=o;var k=o.contentDocument.documentElement;if(k)return k}}if(a&&a._elements){var k=e(a._elements);if(k)return k.nodeType===Node.TEXT_NODE&&(k=k.parentNode),k}return document.body}function i(a){var b=FIREFOX?76e4:1048576;document.body.innerHTML.length>b?(log.warn("Page over 1mb, skipping article detection."),ia.push(h(null)),ja.push(ia[ia.length-1].outerHTML),a()):"function"==typeof initClearlyComponent__detect?($={callbacks:{finished:function(b){ia.push(h(b)),b&&b._html&&ja.push(b._html),a()}},getSpecialCaseArticle:g,window:window,jQuery:window.jQuery},$=initClearlyComponent__detect($),$?$.start():(log.warn("failed to initiate clearly detect component"),ia.push(h(null)),ja.push(ia[ia.length-1].outerHTML),a())):(log.warn("Couldn't find clearly detect!"),ia.push(h(null)),ja.push(ia[ia.length-1].outerHTML),a())}function j(){for(var a=document.getElementsByTagName("frame"),b=null,c=0,d=0;d<a.length;d++)if(a[d].width&&a[d].height){var e=a[d].width*a[d].height;e>c&&(b=a[d],c=e)}return b}function k(a){ia.length&&ia[0].parentNode&&ia[0].getBoundingClientRect&&0!=ia[0].getBoundingClientRect().width?a(ia[0],ja[0]):(l(),i(function(){a(ia[0],ja[0])}))}function l(){ia=[],ja=[],ka=[],la=!0}function m(a){return a&&ka.push(a),la?(la=!1,n(function(){o()})):a&&a(ia,ja),ia}function n(a){"function"==typeof initClearlyComponent__next?(_={callbacks:{newPageFound:function(b){if(b){var c=e(b._elements);c&&ia.push(c),b._html&&ja.push(b._html)}a()}},settings:{onCreateNextPagesContainerUseThisId:"evernoteClearlyNextContainer"},detectComponentInstance:$},_=initClearlyComponent__next(_),_?(_.createNextPagesContainer(),_.start()):(log.warn("failed to initiate clearly next component"),a())):(log.warn("Couldn't find clearly next!"),a())}function o(){for(var a=0;a<ka.length;a++)ka[a](ia,ja)}function p(){var a=q();if(pa=[],a)for(var b=0;b<a.rangeCount;b++){var c=a.getRangeAt(b);pa[b]=c}}function q(){var a=window.getSelection();if(a&&a.rangeCount&&!a.isCollapsed)return a;for(var b=[],c=document.getElementsByTagName("iframe"),d=0;d<c.length;d++)b.push(c[d]);for(var e=document.getElementsByTagName("frame"),d=0;d<e.length;d++)b.push(e[d]);for(var f=document.location.href.replace(/^(https?:\/\/.*?)\/.*/i,"$1").toLowerCase(),d=0;d<b.length;d++)if(!b[d].src||b[d].src.toLowerCase().substr(0,f.length)===f)try{var g=b[d].contentDocument;if(g){var h=g.getSelection();if(h&&h.rangeCount&&!h.isCollapsed)return ma=!0,oa=b[d],h}else log.warn("iframe contained no Document object.")}catch(a){}return null}function r(){var a=window.getSelection();a.removeAllRanges();for(var b=0;b<pa.length;b++)a.addRange(pa[b])}function s(b,c,d,e,f,g){if(b.nodeType==Node.TEXT_NODE){if(e||!qa){var h,i=v(b,f);return h=g?a.removePunctuation(i.trim()).replace(/\s+/g," "):i.trim().replace(/\s+/g," ")," "===h||""===h?c:c+" "+h}return c}var j=["script","noscript","style"];if(b.nodeType==Node.ELEMENT_NODE&&j.indexOf(b.nodeName.toLowerCase())==-1){if(/^evernote.+Tools$/.test(b.id))return c;for(var k=0;k<b.childNodes.length;k++){if(qa){if(u(b.childNodes[k]))continue;c=t(b)||e?f?s(b.childNodes[k],c,d,!0,f,g):s(b.childNodes[k],c,d,!0,b,g):s(b.childNodes[k],c,d,!1,null,g)}else c=s(b.childNodes[k],c,d,!1,null,g);if(c.length>d)return c}}return c}function t(a){var b=ha[qa].allowedElements;return!!(a.matchesSelector&&a.matchesSelector(b)||a.msMatchesSelector&&a.msMatchesSelector(b))}function u(a){var b=ha[qa].bannedSubelements;return!!b&&!!(a.matchesSelector&&a.matchesSelector(b)||a.msMatchesSelector&&a.msMatchesSelector(b))}function v(a,b){var c=a.textContent;if(qa){var d;if("Baidu"==qa?(d=b.parentNode.parentNode.querySelector(".g"),d&&(d=d.textContent)):"Yandex"==qa||"YandexRU"==qa?(d=b.parentNode.querySelector(".b-serp-item__title-link, .serp-item__title-link"),d&&(d=d.href)):d=b.href,d){var e={wikipedia:/(.*)[-|\u2013|\u2014]/,youtube:/(.*)[-|\u2013|\u2014]/,facebook:/(.*)\|/,wiktionary:/(.*)-\sWiktionary/,stumbleupon:/(.*)\|\sStumbleUpon\.com/};for(var f in e)if(new RegExp(f).test(d)){var g=e[f],h=g.exec(c);if(h)return b.setAttribute("sawdivider",!0),h[1];if(b.getAttribute("sawdivider"))return""}}if(/(\d+\slikes)|(\d+\stalking\sabout\sthis)/.test(c))return c.replace(/(\d+\slikes)|(\d+\stalking\sabout\sthis)/g," ");if(/Definition from Wiktionary, the free dictionary. Jump to: navigation, search/.test(c))return c.replace(/Definition from Wiktionary, the free dictionary. Jump to: navigation, search/g," ")}return c}function w(){var a=document.title,b=x();if(b)a=b;else{var c=document.querySelector("meta[property='og:title'][content]");c&&(a=c.getAttribute("content"))}if(qa)if(ha[qa].titleTrim)a=ha[qa].titleTrim(a);else{var d=a.split(" - ");a=a.replace(" - "+d[d.length-1],"")}return H()&&(a=FIREFOX?"PDF - "+document.title:"PDF - "+document.domain),a.trim()}function x(){var a=document.querySelector("[itemtype$='VideoObject'] [itemprop='name']");if(a){if(a.hasAttribute("content")&&a.getAttribute("content").trim())return a.getAttribute("content").trim();if(a.textContent&&a.textContent.trim())return a.textContent.trim()}return null}function y(){return"cafe.daum.net"===document.location.hostname?document.location.href:S()||T()||U()||V()||document.location.href}function z(){if(qa){var a=document.querySelector(ha[qa].searchBox);if(a||(a=document.querySelector(ha[qa].searchBoxAlt)),a){var b=a.value.trim();if(b.length>0)return b}}return null}function A(a){var b="",c=B();if(c&&(b=c),!b){var d=document.querySelector("meta[property='og:description'][content]");d&&d.content.trim()&&(b=d.content.trim())}if(!b){var e=document.querySelector("[itemprop='description']");e&&(e.content&&e.content.trim()?b=e.content.trim():e.textContent&&e.textContent.trim()&&(b=e.textContent.trim()))}if(!b){var f=document.querySelector("meta[name='description'][content], meta[name='Description'][content]");f&&(b=f.content.trim())}if(!b){var g=document.querySelectorAll("[itemprop='articleBody']"),h=Array.prototype.map.call(g,function(a){return a.textContent.trim()?a.textContent.trim():""}).join(" ");h.trim()&&(b=h.trim())}b?a(b.substr(0,da)):k(function(b){a(s(b,"",da,!1,null,!1))})}function B(){var a=document.querySelector("[itemtype$='VideoObject'] [itemprop='description']");if(a){if(a.hasAttribute("content")&&a.getAttribute("content").trim())return a.getAttribute("content").trim();if(a.textContent&&a.textContent.trim())return a.textContent.trim()}return null}function C(){var a="",b=5e3,c=q();if(c){var d=c.getRangeAt(0).cloneContents(),e=document.createElement("div");e.appendChild(d),a=s(e,"",b,!1,null,!0)}else a=ia.length?s(ia[0],"",b,!1,null,!0):s(document.body,"",b,!1,null,!0);return a=w()+" "+a}function D(){return oa}function E(a,b,c,d){var e=q(),f={url:y(),selection:null!==e||pa.length>0,selectionIsInFrame:ma,recommendationText:C(!1),query:z(),searchEngine:qa,favIconUrl:W(),documentIsFrameset:na,pdf:H(),gmailThread:P()||O(),gmail:M()};d&&d(f)}function F(a){Browser.sendToExtension({name:"simSearch_receivePageInfo",info:a})}function G(a,b,c){"undefined"!=typeof SAFARI&&SAFARI&&!a.sendToTab&&pa.length>0&&null==q()&&r(),i(function(c){E(c,a,b,F)})}function H(){if(document.querySelector("embed[type='application/pdf']"))return document.querySelector("embed[type='application/pdf']").src;if("pdf.js"===document.domain)return document.location.href;if(/^https?:\/\/docs\.google\.com\/viewer\?url=.+/.test(document.location.href)){for(var a=0;a<document.scripts.length;a++)if(/gviewApp\.setFileData/.test(document.scripts[a].innerText)){if(/mimeType.+application\/pdf/.test(document.scripts[a].innerText)){var b=/^https?:\/\/docs\.google\.com\/viewer\?url=(.+?)(?:$|&)/.exec(document.location.href);return decodeURIComponent(b[1])}break}}else if(V())return V();return null}function I(a){var b={linked_in:"linkedin",amazon:"amazon",youtube:"youtube"};return b[a]}function J(){if(aa)return aa.check();if("function"==typeof initClearlyComponent__detect_custom){if(aa={callbacks:{finished:function(a){ba(a)}},jQuery:jQuery,window:window},aa=initClearlyComponent__detect_custom(aa))return aa.check();log.warn("Couldn't initialize clearly custom detect")}else log.warn("Couldn't find clearly custom detect!");return!1}function K(a){ba=a,aa.start()}function L(){return/^https:\/\/outlook(-sdf)?\.(office|live)\.com/.test(document.location.href)}function M(){return/^https:\/\/mail\.google\.com\/mail\//.test(document.location.href)}function N(){return/^https:\/\/inbox\.google\.com/.test(document.location.href)}function O(){return!!N()&&!!document.querySelector(ea["inbox.google.com"])}function P(){if(M()){var a=document.querySelectorAll("span > div > span > [src='images/cleardot.gif']");if(a.length>0)return!0;var b=document.querySelectorAll("div.bodycontainer > div.maincontent");if(b.length>0)return!0}return!1}function Q(a){var b="",c=R();if(c)b=c;else{var e=document.querySelector("meta[property='twitter:image'][content]");e?b=e.content:(e=document.querySelector("[itemtype$='ImageObject'] [itemprop='url'][src]"),e?b=e.src:(e=document.querySelector("meta[property='og:image'][content]"),e&&(b=e.content)))}b?a({src:b}):k(function(b){var c=d(b);a({src:c?c.src:null})})}function R(){var a=document.querySelector("[itemtype$='VideoObject'] [itemprop='thumbnailUrl'][href]");return a&&a.href.trim()?a.href.trim():null}function S(){var a=document.querySelector("[itemtype$='VideoObject'] [itemprop='url'][href]");return a&&a.href.trim()?a.href.trim():null}function T(){for(var a=["https://github.com/","http://cafe.daum.net/","https://www.everlane.com/"],b=document.location.href,c=!1,d=0;d<a.length;d++)0===b.indexOf(a[d])&&(c=!0);var e=document.querySelector("meta[property='og:url'][content]");if(e&&e.content&&!c){var b=e.content;return/^https?:\/\//i.test(b)||(b=/^\//.test(b)?document.origin+b:document.origin+"/"+b),b}return null}function U(){if(!M()){var a=document.querySelector("link[rel='canonical']");if(a)return a.href}return null}function V(){var a=/^chrome-extension:\/\/(?:encfpfilknmenlmjemepncnlbbjlabkc|oemmndcbldboiebfnladdacbdfmadadm)\/(.+)/.exec(document.location.href);return a?a[1]:null}function W(){var a=document.querySelector("link[rel~='icon']");return a?a.href:location.origin+"/favicon.ico"}function X(){return new Promise(function(a,b){Browser.runAfterDomLoaded(function(){var b;switch(document.querySelector("img[data-bttrlazyloading-lg-src], img[data-bttrlazyloading-lg]")?b="bttrLazyLoading":document.querySelector("img.lazyload, img.lazyloaded, img.lazyloading")&&(b="lazysizes"),b){case"bttrLazyLoading":for(var c=document.querySelectorAll("img[data-bttrlazyloading-lg-src], img[data-bttrlazyloading-lg]"),d=0,e=c.length;d<e;d++){var f=c[d];if(!f.getAttribute("src")){var g=f.getAttribute("data-bttrlazyloading-lg-src")||f.getAttribute("data-bttrlazyloading-md-src")||f.getAttribute("data-bttrlazyloading-sm-src")||f.getAttribute("data-bttrlazyloading-xs-src");g||(g=f.getAttribute("data-bttrlazyloading-lg")||f.getAttribute("data-bttrlazyloading-md")||f.getAttribute("data-bttrlazyloading-sm")||f.getAttribute("data-bttrlazyloading-xs"),g=JSON.parse(g).src),f.setAttribute("src",g)}}break;case"lazysizes":for(var c=document.querySelectorAll("img.lazyload, img.lazyloaded, img.lazyloading"),d=0,e=c.length;d<e;d++){var g,f=c[d];g="PICTURE"==f.parentNode.tagName?Y(f.parentNode):f.getAttribute("data-src")||Z(f.getAttribute("data-srcset")),g?f.setAttribute("src",g):log.warn("Image hasn't atrribute for lazy loading (lazysizes.js library)")}}a()})})}function Y(a){for(var b=a.querySelectorAll("source"),c=Z(b[0].getAttribute("data-srcset")),d=0;d<b.length;d++)window.matchMedia(b[d].getAttribute("media")).matches&&(c=Z(b[d].getAttribute("data-srcset")));return c}function Z(a){var b=/(?:[^"'\s,]+\s*(?:\s+\d+[wx])(?:,\s*)?)/gm;return a?a.match(b)?a.match(b)[0].split(" ")[0]:a:null}var $,_,aa,ba,ca={},da=510,ea={"tagesspiegel.de":["div.ts-article-area"],"penny-arcade.com":["#comic img"],"io9.gizmodo.com":["div.main__content"],"aspicyperspective.com":["div.entry-content"],"reddit.com":["#siteTable"],"thewirecutter.com":["div#content"],"katespade.com":["div#pdpMain"],"threadless.com":["section.product_section"],"yelp.com":["div#bizBox"],"flickr.com":["div#photo"],"instagr.am":["div.stage > div.stage-inner"],"stackoverflow.com":["#mainbar"],"makeprojects.com":["div#guideMain"],"cookpad.com":["div#main #recipe"],"imgur.com":["div.image"],"smittenkitchen.com":["div.entry"],"allrecipes.com":["div#content-wrapper"],"qwantz.com":["img.comic"],"questionablecontent.net":["img#strip"],"cad-comic.com":["div#content"],"twitter.com":[".permalink","div.content-main"],"blog.evernote.com":[".post"],"outlook.office.com":["[role='region']:nth-of-type(3)","#Item\\.MessagePartBody"],"outlook.live.com":["[role='region']:nth-of-type(3)","#Item\\.MessagePartBody"],"outlook-sdf.live.com":["[role='region']:nth-of-type(3)","#Item\\.MessagePartBody"],"inbox.google.com":["[aria-expanded=true][aria-multiselectable=false],[aria-expanded=true][aria-multiselectable=true] .scroll-list-item-open"]},fa={"blog.evernote.com":{container:"#page-wrap > section > article",include:"h2, .p-meta, .post-meta, .thumbnail, .art-content"},"kirei.biglobe.ne.jp":{container:"div#main",include:".recipeTitle, .recipeMain, #howTo"},"nomnompaleo.com":{container:"section article.text",include:"header, section"},"foodnetwork.com":{container:"#fn-w",include:".rcp-head, .tabnav, #recipe-lead, .w-inner, .body-text"}},ga=["xkcd.com"],ha={Baidu:{regex:/^https?:\/\/([^.\/]+\.)?baidu\.(com|cn)/i,content:"#container",searchBox:"input[name=wd]",allowedElements:"h3.t a[data-click], .f font[size='-1']",bannedSubelements:"span.g, .m, .c",titleTrim:function(a){var b=/(.+)_\u767E\u5EA6\u641C\u7D22/;return b.test(a)?b.exec(a)[1]:a}},Bing:{regex:/^https?:\/\/([^.\/]+\.)?bing\.com\/search/i,content:"#results_container, #b_results",searchBox:"input[name=q]",allowedElements:"div.sb_tlst a, div.sa_mc p, .b_algo h2 a, .b_algo .b_caption p"},Daum:{regex:/^https?:\/\/search\.daum\.net\/search/i,content:"#mArticle .inner_article",searchBox:"input[name=q]",allowedElements:".coll_cont ul .wrap_tit a, .coll_cont ul .f_eb.desc",titleTrim:function(a){var b=/(.+)\s\u2013/;return b.test(a)?b.exec(a)[1]:a}},Google:{regex:a.buildGoogleRegEx(),content:"#rso",searchBox:"input[name=q][type=hidden]",searchBoxAlt:"input[name=q]",allowedElements:"a.l, span.st",bannedSubelements:"span.f"},Naver:{regex:/^https?:\/\/search\.naver\.com\/search\.naver/i,content:"#content",searchBox:"input[name=query]",allowedElements:".type01 dt a, .type01 dd:not(.txt_inline):not(.txt_block):not(.review):not([style*='display:none'])",titleTrim:function(a){var b=/(.+)\s\u003A/;return b.test(a)?b.exec(a)[1]:a}},Yahoo:{regex:/^https?:\/\/([^.\/]+\.)*yahoo\.com\/s(earch|\?)/i,content:"#web",searchBox:"input[name=p]",allowedElements:".title, .aAbs",bannedSubelements:".fc-2nd, .TumblrV2, .Img, .Video, .sys_news_auto"},YahooJP:{regex:/^https?:\/\/([^.\/]+\.)*yahoo\.co\.jp\/s(earch|\?)/i,content:"#WS2m",searchBox:"input[name=p]",allowedElements:"#WS2m .hd h3 a, #WS2m .bd p",bannedSubelements:"#WS2m .bd p.dlink",titleTrim:function(a){var b=/\u300C(.+)\u300D/;return b.test(a)?b.exec(a)[1]:a}},Yandex:{regex:/^https?:\/\/([^.\/]+\.)?yandex\.(com|ru)\/search/,content:".serp-list",searchBox:"input[name=text]",allowedElements:".serp-item__title-link, .serp-item__text",bannedSubelements:".serp-item__date",titleTrim:function(a){var b=/(.+)\s+\u2014/;return b.test(a)?b.exec(a)[1]:a}}},ia=[],ja=[],ka=[],la=!0,ma=!1,na=!1,oa=null,pa=[],qa=c();return Browser.addMessageHandlers({getInfo:G}),"undefined"!=typeof SAFARI&&SAFARI&&(window.addEventListener("mouseup",p),Browser.addKeyboardHandlers({"65 + 91":p})),ca.getCustomFormatSiteName=I,ca.getCustomFormatReformattedData=K,ca.getThumbnail=Q,ca.getDefaultArticle=k,ca.getNextPages=m,ca.getCanonicalUrl=U,ca.getSelection=q,ca.getSelectionFrame=D,ca.getPdfUrl=H,ca.getRecommendationText=C,ca.getSearchQuery=z,ca.getTitle=w,ca.getUrl=y,ca.getFavIconUrl=W,ca.getSnippet=A,ca.isCustomFormat=J,ca.isOutlookMail=L,ca.isGmail=M,ca.isGmailThread=P,ca.isGoogleInboxThread=O,ca.isSearchEngine=c,ca.getRealUrlFromOperaPdfViewerUrl=V,ca.lazyImagesLoad=X,ca.__defineGetter__("documentIsFrameset",function(){return na}),b&&(ca.findArticle=i,ca.findImage=d,ca.getCommonAncestor=e,ca.pickArticle=h,ca.refreshSearchEngine=function(){qa=c()},ca.__defineSetter__("findArticle",function(a){i=a})),ca});