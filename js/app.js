var deferSrcSetters,show;deferSrcSetters=[],angular.element(document).ready(function(){var e,t,n,r,i=[];for(e=0,n=(t=deferSrcSetters).length;e<n;++e)r=t[e],i.push(r());return i}),angular.module("g0v.tw",["firebase"]).factory({fireRoot:["angularFireCollection"].concat(function(e){var t;return t="https://g0vsite.firebaseio.com",new Firebase(t)})}).directive("deferSrc",function(){return{restrict:"A",link:function(e,t,n,r){var i;return i=t.attr("defer-src"),deferSrcSetters.push(function(){return t.attr("src",i)})}}}).controller({EventCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(e,t,n){return e.events=t(n.child("feed/events/articles").limit(2))})}).controller({BlogCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(e,t,n){return e.articles=t(n.child("feed/blog/articles").limit(10))})}).controller({FeaturedCtrl:["$scope","angularFireCollection"].concat(function(e,t){var n;return n=new Firebase("https://g0vhub.firebaseio.com/projects"),e.projects=t(n),e.nextProject=function(){if(e.idx===void 8)return;return $("#prj-img").css("opacity",0),++e.idx,e.idx%=e.featured.length},e.$watch("projects.length",function(){var t,n,r,i,s;t=[];for(n=0,i=(r=e.projects).length;n<i;++n)s=r[n],s.thumbnail&&t.push(s);return e.featured=t,e.idx=Math.floor(Math.random()*e.featured.length)}),e.$watch("idx",function(t,n){if(n!==void 8)return e.project=e.featured[n]})})}).controller({BuildIdCtrl:["$scope"].concat(function(e){return e.buildId=window.global.config.BUILD})}),show=function(){var e,t;return e=$("#prj-img"),e.animate({opacity:1},500),t=[40+e.height()][0],$("#prj-img-div").animate({height:t+"px"},500)},function(){var e={};e.exports={BUILD:"git-34b8645"},window.global||(window.global={}),window.global.config=e.exports}.call(this)