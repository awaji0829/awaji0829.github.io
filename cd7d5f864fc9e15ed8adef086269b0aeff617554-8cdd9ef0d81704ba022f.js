"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[84],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return b},S:function(){return j},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(4811),a(5697)),i=a.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var u,m=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,d=s(e,f);return r.createElement("img",o({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},v=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,h),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(y,o({},c,t,{sizes:d,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,a=s(e,w);return t?r.createElement(v,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(v,o({},e)),r.createElement("noscript",null,r.createElement(v,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var L,C,S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:S},_=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],T=new Set,N=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=s(e,_),y=i.width,v=i.height,w=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,v,w),E=b.style,S=b.className,k=s(b,x),N=(0,r.useRef)(),I=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(u=m);var O=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,v);return(0,r.useEffect)((function(){L||(L=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=N.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void T.add(I)):C&&T.has(I)?void 0:(L.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;N.current&&(N.current.innerHTML=r(o({isLoading:!0,isLoaded:T.has(I),image:i},h)),T.has(I)||(e=requestAnimationFrame((function(){N.current&&(t=n(N.current,I,T,c,p,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){T.has(I)&&C&&(N.current.innerHTML=C(o({isLoading:T.has(I),isLoaded:T.has(I),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},k,{style:o({},E,c,{backgroundColor:d}),className:S+(u?" "+u:""),ref:N,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(N,e):null}));I.propTypes=k,I.displayName="GatsbyImage";var O,q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),R={src:i().string.isRequired,alt:S,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(O=I,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,q);return n&&console.warn(n),a?r.createElement(O,o({image:a},i)):(console.warn("Image not loaded",t),null)});j.displayName="StaticImage",j.propTypes=R},8771:function(e,t,a){var r=a(7294),n=a(1597),i=a(7059);t.Z=function(){var e,t=null===(e=(0,n.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return r.createElement("div",{className:"bio"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/party_mimo.png",width:150,height:150,quality:95,alt:"Profile picture",__imageData:a(4354)}),(null==t?void 0:t.name)&&r.createElement("p",null,"우당탕탕"," "))}},8678:function(e,t,a){var r=a(7294),n=a(1597);t.Z=function(e){var t,a=e.location,i=e.title,o=e.children,s="/"===a.pathname;return t=s?r.createElement("h1",{className:"main-heading"},r.createElement(n.Link,{to:"/"},i)):r.createElement(n.Link,{className:"header-link-home",to:"/"},i),r.createElement("div",{className:"global-wrapper","data-is-root-path":s},r.createElement("header",{className:"global-header"},t),r.createElement("main",null,o),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,a){var r=a(7294),n=a(1597),i=void 0===arguments?void 0:arguments,o=function(e){var t,a,o,s=e.description,l=(e.lang,e.title),c=e.children,d=(0,n.useStaticQuery)("2841359383").site,u=s||d.siteMetadata.description,m=null===(t=d.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,m?l+" | "+m:l),r.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-WGQ1VP2J0Z"}),r.createElement("script",null,"window.dataLayer = window.dataLayer || []; function gtag()",window&&window.dataLayer&&window.dataLayer.push(i),"gtag('js', new Date()); gtag('config', 'G-WGQ1VP2J0Z');"),r.createElement("meta",{name:"description",content:u}),r.createElement("meta",{name:"google-site-verification",content:"PpF0Q2ZYamo3M5yXIBwlt-R9bIpkmRfXj2w9nzLT1go"}),r.createElement("meta",{property:"og:title",content:l}),r.createElement("meta",{property:"og:description",content:u}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=d.siteMetadata)||void 0===a||null===(o=a.social)||void 0===o?void 0:o.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:l}),r.createElement("meta",{name:"twitter:description",content:u}),c)};o.defaultProps={description:""},t.Z=o},4354:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/e24e0b283e3f5a5b02fab32257054364/01986/party_mimo.png","srcSet":"/static/e24e0b283e3f5a5b02fab32257054364/01986/party_mimo.png 150w,\\n/static/e24e0b283e3f5a5b02fab32257054364/c0d5f/party_mimo.png 300w","sizes":"150px"},"sources":[{"srcSet":"/static/e24e0b283e3f5a5b02fab32257054364/95309/party_mimo.avif 150w,\\n/static/e24e0b283e3f5a5b02fab32257054364/288e4/party_mimo.avif 300w","type":"image/avif","sizes":"150px"},{"srcSet":"/static/e24e0b283e3f5a5b02fab32257054364/7ddcc/party_mimo.webp 150w,\\n/static/e24e0b283e3f5a5b02fab32257054364/dd79f/party_mimo.webp 300w","type":"image/webp","sizes":"150px"}]},"width":150,"height":150}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-8cdd9ef0d81704ba022f.js.map