(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,t,a){e.exports=a(429)},241:function(e,t,a){},246:function(e,t,a){},336:function(e,t,a){},413:function(e,t,a){},415:function(e,t,a){},424:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(32),i=a.n(r),l=(a(241),a(20)),s=a(21),c=a(23),u=a(22),m=a(24),h=a(143),d=a.n(h),p=a(441),g=a(141),v=a(142),f=a(443),b=(a(246),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{className:"itemContainer"},o.a.createElement(p.a.Image,{src:this.props.bookCoverImg,as:"a",href:this.props.amazonLink,target:"_blank",className:"imageItem",style:{width:"50px !important"}}),o.a.createElement(p.a.Content,null,o.a.createElement(p.a.Header,{as:"a",href:this.props.amazonLink,target:"_blank"},this.props.bookName),o.a.createElement(p.a.Meta,null,o.a.createElement("span",{className:"cinema",href:this.props.amazonLink,target:"_blank"},this.props.bookAuthor)),o.a.createElement(p.a.Extra,null,o.a.createElement(g.a,{as:"a",color:"grey",image:!0,floated:"right"},o.a.createElement(v.a,{name:"numbered list"}),"Rank: ",this.props.index+1),o.a.createElement(g.a,{as:"a",color:"blue",image:!0},o.a.createElement(v.a,{name:"comments"}),"Mentions: ",this.props.numberOfMentions),o.a.createElement(g.a,{as:"a",color:"green",image:!0,floated:"right"},o.a.createElement(v.a,{name:"heart"}),"Claps: ",this.props.totalMentionsClaps)),o.a.createElement(p.a.Extra,null,o.a.createElement(f.a,{color:"yellow",floated:"right",size:"tiny"},o.a.createElement("a",{href:this.props.amazonLink,target:"_blank",rel:"noopener noreferrer",className:"LinkButtonContent"},"Available on Amazon")))))}}]),t}(o.a.Component)),E=a(52),x=(a(336),a(138)),y=a(436),k=a(437),C=a(446),O=a(442),M=a(438),j=a(440),S=function(){return"undefined"===typeof window?y.a.onlyTablet.minWidth:window.innerWidth},T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={modalOpen:!1},a.handleOpen=function(){return a.setState({modalOpen:!0})},a.handleClose=function(){return a.setState({modalOpen:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sorter,a=e.fixed,n=e.onSorterChange,r=e.onTagChange,i=[{value:"All Tags",text:"All Tags"},{value:"Art",text:"Art"},{value:"Artificial Intelligence",text:"Artificial Intelligence"},{value:"Business",text:"Business"},{value:"Creativity",text:"Creativity"},{value:"Cryptocurrency",text:"Cryptocurrency"},{value:"Culture",text:"Culture"},{value:"Data Science",text:"Data Science"},{value:"Dating",text:"Dating"},{value:"Design",text:"Design"},{value:"Economics",text:"Economics"},{value:"Education",text:"Education"},{value:"Entrepreneurship",text:"Entrepreneurship"},{value:"Feminism",text:"Feminism"},{value:"Future",text:"Future"},{value:"Health",text:"Health"},{value:"History",text:"History"},{value:"Innovation",text:"Innovation"},{value:"Inspiration",text:"Inspiration"},{value:"Investing",text:"Investing"},{value:"Leadership",text:"Leadership"},{value:"Life Lessons",text:"Life Lessons"},{value:"Life",text:"Life"},{value:"Lifestyle",text:"Lifestyle"},{value:"Love",text:"Love"},{value:"Machine Learning",text:"Machine Learning"},{value:"DesMarketingign",text:"Marketing"},{value:"Mental Health",text:"Mental Health"},{value:"Mindfulness",text:"Mindfulness"},{value:"Money",text:"Money"},{value:"Motivation",text:"Motivation"},{value:"Philosophy",text:"Philosophy"},{value:"Politics",text:"Politics"},{value:"Productivity",text:"Productivity"},{value:"Programming",text:"Programming"},{value:"Psychology",text:"Psychology"},{value:"Racism",text:"Racism"},{value:"Reading",text:"Reading"},{value:"Relationships",text:"Relationships"},{value:"Science",text:"Science"},{value:"Self Improvement",text:"Self Improvement"},{value:"Social Media",text:"Social Media"},{value:"Startup",text:"Startup"},{value:"Success",text:"Success"},{value:"Technology",text:"Technology"},{value:"User Experience",text:"User Experience"},{value:"Web Development",text:"Web Development"},{value:"Work",text:"Work"},{value:"Writing",text:"Writing"}],l=[{key:"R",value:"score",text:"Rank"},{key:"MN",value:"mentions",text:"Mentions"},{key:"CL",value:"claps",text:"Claps"}];return o.a.createElement("div",null,o.a.createElement(w,{fixed:a,categories:i,sortersOptions:l,handleClose:this.handleClose,onSorterChange:n,onTagChange:r,sorter:t}),o.a.createElement(W,{fixed:a,categories:i,sortersOptions:l,handleClose:this.handleClose,onSorterChange:n,onTagChange:r,sorter:t}),o.a.createElement(L,{handleClose:this.handleClose,modalState:this.state.modalOpen}))}}]),t}(o.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.fixed,a=e.categories,n=e.sortersOptions,r=e.onSorterChange,i=e.sorter,l=e.onTagChange;return o.a.createElement(y.a,{getWidth:S,minWidth:y.a.onlyTablet.minWidth},o.a.createElement(k.a,{text:!0,textAlign:"center"},o.a.createElement(L,null),o.a.createElement("div",{className:"filtersAreaContainer stickyFiltersDesktop "+(t?"stickyFiltersFixed":"StickyFiltersNoFixed")},o.a.createElement(C.a,{as:"h4",className:"filterItem"},o.a.createElement(v.a,{name:"filter"}),o.a.createElement(C.a.Content,null,o.a.createElement(O.a,{placeholder:"All Tags",search:!0,defaultValue:"All Tags",selection:!0,options:a,closeOnChange:!0,onChange:l}))),o.a.createElement(C.a,{as:"h4",className:"filterItem"},o.a.createElement(v.a,{name:"sort amount down"}),o.a.createElement(C.a.Content,null,o.a.createElement(O.a,{placeholder:i,defaultValue:i,selection:!0,options:n,closeOnChange:!0,onChange:r}))))))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a.handleContextRef=function(e){return a.setState({contextRef:e})},a.goToTop=function(){x.animateScroll.scrollToTop()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.state.contextRef,a=this.props,n=a.fixed,r=a.categories,i=a.sortersOptions,l=a.onSorterChange,s=a.sorter,c=a.onTagChange;return o.a.createElement(y.a,{getWidth:S,maxWidth:y.a.onlyMobile.maxWidth},o.a.createElement(M.a,{context:t},o.a.createElement("div",{className:"filtersAreaContainer stickyFiltersMobile "+(n?"stickyFiltersFixed":"")},o.a.createElement("div",null,o.a.createElement(v.a,{name:"filter"}),o.a.createElement(O.a,{placeholder:"All Tags",search:!0,defaultValue:"All",selection:!0,options:r,closeOnChange:!0,onChange:c})),o.a.createElement("div",null,o.a.createElement(v.a,{name:"sort amount down"}),o.a.createElement(O.a,(e={placeholder:"Rank"},Object(E.a)(e,"placeholder",s),Object(E.a)(e,"defaultValue",s),Object(E.a)(e,"selection",!0),Object(E.a)(e,"options",i),Object(E.a)(e,"closeOnChange",!0),Object(E.a)(e,"onChange",l),e))),o.a.createElement(v.a,{name:"long arrow alternate up",size:"large",className:"goToTopButton "+(n?"":"goToTopButtonHidden"),onClick:this.goToTop}))))}}]),t}(n.Component),L=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.modalState,a=e.handleClose;return o.a.createElement(j.a,{open:t,onClose:function(){return a()},size:"mini",closeIcon:!0},o.a.createElement(j.a.Header,null,"Coming Soon!"),o.a.createElement(j.a.Content,null,o.a.createElement(j.a.Description,null,o.a.createElement(C.a,null,"I'm working on it right now :-)"))))}}]),t}(n.Component),I=T,A=a(226),F=a.n(A),N=(a(413),a(439)),R=function(){return"undefined"===typeof window?y.a.onlyTablet.minWidth:window.innerWidth},P=1,z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).hideFixedMenu=function(){return a.setState({fixed:!1})},a.showFixedMenu=function(){return a.setState({fixed:!0})},a.onSorterChange=function(e,t){var n=t.value;a.state.sorter!==n&&a.setState({sorter:t.value,books:[],page:P})},a.onTagChange=function(e,t){var n=t.value;a.state.tag!==n&&a.setState({books:[],page:P,tag:t.value})},a.state={books:[],hasMoreItems:!0,sorter:"score",page:P,tag:"All Tags"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}},{key:"loadItems",value:function(e){var t=this,a="https://thebooksofmedium-api.herokuapp.com/books/"+this.state.tag+"/"+this.state.sorter+"/sub-page?limit=50&&page="+t.state.page;F.a.get(a,{cache:!1}).then(function(e,a){if(a){var n=t.state.books,o=t.state.page+1;a.docs.map(function(e){n.push(e)}),t.setState({books:n,page:o})}}).catch(function(e,a,n){t.setState({hasMoreItems:!1}),console.error("no more")})}},{key:"render",value:function(){var e=o.a.createElement("div",{className:"loader"},"Loading ..."),t=this.state,a=t.hasMoreItems,n=t.fixed,r=t.sorter,i=[];return this.state.books.map(function(e,t){var a=D(e.totalMentionsClaps,1);i.push(o.a.createElement(b,{key:t,id:e.id,bookName:e.bookName,bookAuthor:e.bookAuthor,amazonLink:e.amazonLink,bookCoverImg:e.bookCoverImg,totalMentionsClaps:a,numberOfMentions:e.numberOfMentions,score:e.score,index:t}))}),o.a.createElement("div",null,o.a.createElement(y.a,{getWidth:R,minWidth:y.a.onlyTablet.minWidth},o.a.createElement("div",{className:"bookListWrapperDesktop"},o.a.createElement(N.a,{once:!1,onTopPassed:this.showFixedMenu,onTopPassedReverse:this.hideFixedMenu,className:"stickyFiltersWarpper"},o.a.createElement(I,{fixed:n,sorter:r,onSorterChange:this.onSorterChange,onTagChange:this.onTagChange})),o.a.createElement(k.a,{text:!0,className:"bookListContainer"},o.a.createElement(d.a,{pageStart:0,loadMore:this.loadItems.bind(this),hasMore:a,loader:e},o.a.createElement("div",{className:"books"},o.a.createElement(p.a.Group,{divided:!0},i)))))),o.a.createElement(y.a,{getWidth:R,maxWidth:y.a.onlyMobile.maxWidth},o.a.createElement("div",{className:"bookListWrapperMobile"},o.a.createElement(N.a,{once:!1,onTopPassed:this.showFixedMenu,onTopPassedReverse:this.hideFixedMenu,className:"stickyFiltersWarpper"},o.a.createElement(I,{fixed:n,sorter:r,onSorterChange:this.onSorterChange,onTagChange:this.onTagChange})),o.a.createElement(k.a,{className:"bookListContainerMobile"},o.a.createElement(d.a,{pageStart:0,loadMore:this.loadItems.bind(this),hasMore:this.state.hasMoreItems,loader:e},o.a.createElement("div",{className:"books"},o.a.createElement(p.a.Group,{divided:!0},i)))))))}}]),t}(o.a.Component),D=function(e,t){var a,n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}];for(a=n.length-1;a>0&&!(e>=n[a].value);a--);return(e/n[a].value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[a].symbol},B=z,H=(a(415),a(445)),_=a(444),U=function(){return"undefined"===typeof window?y.a.onlyTablet.minWidth:window.innerWidth},V=function(e){var t=e.mobile;return o.a.createElement(k.a,{text:!0,textAlign:"center"},o.a.createElement(C.a,{as:"h2",content:"The most mentioned books on Medium",inverted:!0,style:{fontSize:t?"1.1em":"1.5em",fontWeight:"normal",marginBottom:0,marginTop:t?"0em":"1.5em"}}),o.a.createElement(C.a,{as:"h3",inverted:!0,style:{fontSize:t?"0.9em":"1em",fontWeight:"normal",marginTop:t?"0.5em":"1em",marginBottom:t?"0.5em":"1em"}},"I have analyzed every book ever mentioned on",o.a.createElement("a",{target:"_blank",href:"https://medium.com/",style:{color:"white"}},"\xa0Medium.com.\xa0\xa0"),"Here are the most popular ones."))},$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a.handleContextRef=function(e){return a.setState({contextRef:e})},a.hideFixedMenu=function(){return a.setState({fixed:!1})},a.showFixedMenu=function(){return a.setState({fixed:!0})},a.onLogoClick=function(){window.location="/"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.fixed;return o.a.createElement(y.a,{getWidth:U,minWidth:y.a.onlyTablet.minWidth},o.a.createElement(N.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},o.a.createElement(H.a,{textAlign:"center",style:{minHeight:100,padding:"0.5em 0em"},vertical:!0},o.a.createElement("div",{ref:this.handleContextRef},o.a.createElement(_.a,{fixed:t?"top":null,inverted:!t,pointing:!t,secondary:!t,size:"large",style:{height:"58px"}},o.a.createElement(k.a,null,o.a.createElement(_.a.Item,{as:"a",active:!0,onClick:this.onLogoClick},o.a.createElement("h1",null," The Books Of Medium ")),o.a.createElement(_.a.Menu,{position:"right"},o.a.createElement(J,null))))),o.a.createElement(V,null))),e)}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a.handleSidebarHide=function(){return a.setState({sidebarOpened:!1})},a.handleToggle=function(){return a.setState({sidebarOpened:!0})},a.onLogoClick=function(){window.location="/"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children;return o.a.createElement(y.a,{getWidth:U,maxWidth:y.a.onlyMobile.maxWidth,className:"mobileResponsiveContainer"},o.a.createElement(_.a,null,o.a.createElement(k.a,null,o.a.createElement(_.a.Item,{as:"a",header:!0,onClick:this.onLogoClick},"The Books Of Medium"),o.a.createElement(_.a.Menu,{position:"right"},o.a.createElement(J,null)))),o.a.createElement(H.a,{className:"mobileSegment"},o.a.createElement(V,{mobile:!0})),e)}}]),t}(n.Component),J=function(){return o.a.createElement(j.a,{size:"mini",closeIcon:!0,trigger:o.a.createElement(_.a.Item,{as:"a",header:!0},"About")},o.a.createElement(j.a.Header,null,"Disclaimer"),o.a.createElement(j.a.Content,null,o.a.createElement(j.a.Description,null,o.a.createElement("p",null,"TheBooksOfMedium is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com."))))},q=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement($,null,t),o.a.createElement(G,null,t))},K=(a(424),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(q,null,o.a.createElement(B,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(426);i.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[236,2,1]]]);
//# sourceMappingURL=main.4ed464de.chunk.js.map