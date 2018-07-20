require.register("config.jsenv",function(t,e,n){n.exports={BUILD:"git-53f81b1"}});var deferSrcSetters,show;deferSrcSetters=[],angular.element(document).ready(function(){var t,e,n,r,o=[];for(t=0,n=(e=deferSrcSetters).length;t<n;++t)r=e[t],o.push(r());return o}),angular.module("g0v.tw",["firebase","btford.markdown","pascalprecht.translate"]).config(["$httpProvider","$translateProvider"].concat(function(t,e){var n;if(t.defaults.useXDomain=!0,delete t.defaults.headers.common["X-Requested-With"],e.useStaticFilesLoader({prefix:"/translations/",suffix:".json"}),n=window.location.pathname.split("/")[1],(n.match("html")||document.title.match("找不到"))&&(n=window.navigator.userLanguage||window.navigator.language),"zh-TW"===n||"en-US"===n)return e.preferredLanguage(n)})).factory({fireRoot:["angularFireCollection"].concat(function(t){var e;return e="https://g0vfeedthefire.firebaseio.com",new Firebase(e)})}).directive("deferSrc",function(){return{restrict:"A",link:function(t,e,n,r){var o;return o=e.attr("defer-src"),deferSrcSetters.push(function(){return e.attr("src",o)})}}}).controller({EventCtrl:["$q","$http","$scope"].concat(function(t,e,n){return n.events=[],n.eventSources=[],n.eventsOf=function(n){var r;return r=t.defer(),e.get(n,{}).success(function(t){var e;return r.resolve(function(){var n,r,o,a=[];for(n=0,o=(r=t.entry).length;n<o;++n)e=r[n],moment(e.published).diff(moment())>0&&a.push(e);return a}())}),r.promise},n.fromSmallthonConfig=function(){var n;return n=t.defer(),e.get("/data/small-thon.json").success(function(t){return n.resolve(t),n.promise})},n.fromSmallthonConfig().then(function(t){var e;return e=t.data,n.eventSources=e.map(function(t){return t+"/events.json"}),n.eventSources.map(function(t){return n.eventsOf(t).then(function(t){return n.events=t.concat(n.events)})})})})}).controller({BlogCtrl:["$scope","angularFireCollection","fireRoot"].concat(function(t,e,n){return t.articles=e(n.child("feed/blog/articles").limit(2))})}).controller({FeaturedCtrl:["$scope","angularFireCollection"].concat(function(t,e){var n;return n=new Firebase("https://g0vhub.firebaseio.com/projects"),t.projects=e(n),t.nextProject=function(){if(void 0!==t.idx)return $("#prj-img").css("opacity",0),++t.idx,t.idx%=t.featured.length},t.$watch("projects.length",function(){var e,n,r,o,a;for(e=[],n=0,o=(r=t.projects).length;n<o;++n)a=r[n],a.thumbnail&&e.push(a);return t.featured=e,t.idx=Math.floor(Math.random()*t.featured.length)}),t.$watch("idx",function(e,n){if(void 0!==n)return t.project=t.featured[n]})})}).controller({CommuniqueCtrl:["$scope","$http","$element","$sce"].concat(function(t,e,n,r){return e.get("http://g0v-communique-api.herokuapp.com/api/1.0/entry/all?limit=50").success(function(e,n,o,a){return t.idx=0,t.nextCommunique=function(){if(void 0!==t.idx)return++t.idx,t.idx%=e.length},t.$watch("idx",function(n,o){var a,i,c,u;for(o=t.idx,void 0!==o&&(t.communique=e[o]),a=0,c=(i=t.communique.urls).length;a<c;++a)u=i[a],t.communique.content=t.communique.content.replace(u.name,'<a target="_blank" href="'+u.url+'">'+u.name+"</a>");return t.communique.content=r.trustAsHtml(t.communique.content)})}).error(function(e,n,o,a){return t.communique.content=r.trustAsHtml(n)})})}).controller({BuildIdCtrl:["$scope"].concat(function(t){var e;return e=require("config.jsenv"),t.buildId=e.BUILD})}).controller({langCtrl:["$scope","$window"].concat(function(t,e){return t.changeLang=function(t){var n;return n=e.location.pathname.split("/")[2],e.location.href="/"+t+"/"+n}})}).controller({SearchCtrl:["$http","$scope"].concat(function(t,e){var n,r;return n=10,e.input="",e.start=0,e.total=0,e.result=[],e.hasPrev=!1,e.hasNext=!1,e.date=function(t){return new Date(1e3*t).toDateString()},e.trunc=function(t,e){return t.length>e?t.substr(0,e-1)+"…":t},r=function(){var r;return r={query:{query_string:{query:e.input}},from:e.start,highlight:{fields:{content:{}}},aggs:{source_count:{terms:{field:"source"}}},sort:[{updated_at:"desc"}]},t.get("https://api.search.g0v.io/query.php?query="+encodeURIComponent(JSON.stringify(r))).success(function(t){var r,o,a;return r=t.hits,o=r.hits,a=r.total,e.total=a,e.hasPrev=0!==e.start,e.hasNext=e.start+n<e.total,e.result=o.map(function(t){return t._source})})},e.submit=function(){return e.start=0,r()},e.prev=function(){return e.start=0===e.start?0:e.start-n,scrollTo(0,0),r()},e.succ=function(){return e.start=e.start+n>=e.total?e.start:e.start+n,scrollTo(0,0),r()}})}),show=function(){var t,e;return t=$("#prj-img"),t.animate({opacity:1},500),e=[40+t.height()][0],$("#prj-img-div").animate({height:e+"px"},500)},$(function(){return $(".ui.dropdown").dropdown({on:"hover",transition:"fade"}),$(function(){return window.location.pathname.match(/projects.html$/)&&$(".navbar-wrapper").stickUp({parts:{0:"openGov",1:"openData",2:"socEngage",3:"newMedia",4:"policyFeedback",5:"comCollaboration"},itemClass:"menuItem",itemHover:"active",topMargin:"auto"}),window.location.pathname.match(/talk.html$/)&&$(".navbar-wrapper").stickUp({parts:{0:"newtalks",1:"talkvideo",2:"alltalks",3:"invitetalks"},itemClass:"menuItem",itemHover:"active",topMargin:"auto"}),$(function(){return $('a[href^="#"]').bind("click.smoothscroll",function(t){var e;return t.preventDefault(),e=this.hash,$("html, body").stop().animate({scrollTop:$(e).offset().top},900,"swing",function(){return window.location.hash=e})}),$(function(){$(".item .meta").each(function(){var t,e;if(t=$(this),e=/\d{4}\/\d{1,2}\/\d{1,2}$/.exec(t.text())){if(30<moment().diff(moment(e[0]),"days"))return;return t.closest(".item").addClass("recent-talk")}})})})})});