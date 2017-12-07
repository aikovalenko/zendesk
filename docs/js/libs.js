function clipper(e,t){return function(n){return n>t?t:n<e?e:n}}window.Modernizr=function(e,t,n){function r(e){v.cssText=e}function o(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&v[o]!==n)return"pfx"!=t||o}return!1}function s(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return!1===r?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function c(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+w.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?a(i,t):(i=(e+" "+b.join(r+" ")+r).split(" "),s(i,t,n))}var l,u,f={},d=t.documentElement,p="modernizr",h=t.createElement(p),v=h.style,m=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",w=y.split(" "),b=y.toLowerCase().split(" "),g={},$=[],x=$.slice,k=function(e,n,r,o){var i,a,s,c,l=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=o?o[r]:p+(r+1),l.appendChild(s);return i=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),l.id=p,(u?l:f).innerHTML+=i,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",c=d.style.overflow,d.style.overflow="hidden",d.appendChild(f)),a=n(l,e),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),d.style.overflow=c),!!a},C={}.hasOwnProperty;u=o(C,"undefined")||o(C.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return C.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=x.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(x.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(x.call(arguments)))};return r}),g.csstransforms=function(){return!!c("transform")},g.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in d.style&&k("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e};for(var P in g)u(g,P)&&(l=P.toLowerCase(),f[l]=g[P](),$.push((f[l]?"":"no-")+l));return f.addTest=function(e,t){if("object"==typeof e)for(var r in e)u(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,d.className+=" "+(t?"":"no-")+e,f[e]=t}return f},r(""),h=null,f._version="2.8.3",f._prefixes=m,f._domPrefixes=b,f._cssomPrefixes=w,f.testProp=function(e){return a([e])},f.testAllProps=c,f.testStyles=k,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+$.join(" "),f}(0,this.document);var opacityClipper=clipper(0,1);$(function(){function e(){window.location.search=$.param({query:$("#quick-search").val(),status:$("#request-status-select").val(),organization_id:$("#request-organization-select").val()})}var t=$(window),n=$("[data-hero-unit]"),r=n.find("[data-hero-bg]"),o=n.find("[data-search-box]"),i=$("[data-topbar]"),a=parseInt(i.height()),s=$("[data-scroll-to-top]");s.click(function(){return $("html, body").animate({scrollTop:0},1e3),!1});var c=function(){var e=t.scrollTop();e>a?s.addClass("is-active"):s.removeClass("is-active"),n.length&&(r.css({"-moz-transform":"translate3d(0px,"+e/-3+"px, 0px)","-webkit-transform":"translate3d(0px,"+e/-3+"px, 0px)",transform:"translate3d(0px,"+e/-3+"px, 0px)"}),o.css({opacity:opacityClipper(1-opacityClipper(.003*e))}))};/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)||Modernizr.csstransforms3d&&t.on("scroll.theme",c),$("[data-toggle-menu]").click(function(){$(this).toggleClass("is-active"),$("[data-menu]").toggle()}),$(".share a").click(function(e){e.preventDefault(),window.open(this.href,"","height = 500, width = 500")}),$(".share-label").on("click",function(e){e.stopPropagation();var t="true"==this.getAttribute("aria-selected");this.setAttribute("aria-selected",!t),$(".share-label").not(this).attr("aria-selected","false")}),$(document).on("click",function(){$(".share-label").attr("aria-selected","false")}),$("#request-status-select, #request-organization-select").on("change",function(){e()}),$("#quick-search").on("keypress",function(t){13===t.which&&e()})});or.userAgent || navigator.vendor || window.opera)) {
    if (Modernizr.csstransforms3d) {
      $window.on('scroll.theme', bindEffects);
    }
  }

  $('[data-toggle-menu]').click(function(){
    $(this).toggleClass('is-active');
    $('[data-menu]').toggle();
  });

  // Social share popups
  $('.share a').click(function(e) {
    e.preventDefault();
    window.open(this.href, '', 'height = 500, width = 500');
  });

  // Toggle the share dropdown in communities
  $('.share-label').on('click', function(e) {
    e.stopPropagation();
    var isSelected = this.getAttribute('aria-selected') == 'true';
    this.setAttribute('aria-selected', !isSelected);
    $('.share-label').not(this).attr('aria-selected', 'false');
  });

  $(document).on('click', function() {
    $('.share-label').attr('aria-selected', 'false');
  });

  // Submit search on select change
  $('#request-status-select, #request-organization-select')
    .on('change', function() {
      search();
    });

  // Submit search on input enter
  $('#quick-search').on('keypress', function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $('#quick-search').val(),
      status: $('#request-status-select').val(),
      organization_id: $('#request-organization-select').val()
    });
  }
});