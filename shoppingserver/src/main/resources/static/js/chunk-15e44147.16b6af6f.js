(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15e44147"],{"3e6f":function(t,a,e){"use strict";e("ed26")},"5ebe":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"container"}},[e("el-row",{attrs:{id:"description"}},[e("el-col",{attrs:{span:4}},[e("img",{staticStyle:{width:"100%","border-radius":"15px"},attrs:{src:t.detail.img,alt:"",onerror:"this.src='//iconfont.alicdn.com/s/210a299f-edad-4fc5-8396-9f743633f209_origin.svg';"}})]),e("el-col",{attrs:{span:20}},[e("div",{staticStyle:{"text-align":"left",padding:"10px 20px"}},[e("p",{staticStyle:{"font-weight":"bold","margin-top":"5px"}},[t._v(t._s(t.detail.goodsName))]),e("p",{staticStyle:{"word-wrap":"break-word"}},[t._v(t._s(t.detail.description))]),e("p",{staticStyle:{color:"#666666",position:"absolute",bottom:"12px"}},[e("i",{staticClass:"el-icon-s-shop",staticStyle:{"font-size":"25px"}}),t._v(" "+t._s(t.detail.storeName)+" "),e("el-button",{staticStyle:{padding:"0","font-size":"18px"},attrs:{type:"text"}},[t._v(" 进店逛逛>>")])],1),e("br")])]),e("span",{staticClass:"price"},[t._v("￥"+t._s(t.detail.price))]),e("div",{staticStyle:{position:"absolute",bottom:"20px",right:"20px"}},[e("el-button",{attrs:{type:"primary",round:""},on:{click:t.addToCart}},[t._v("加入购物车")]),e("el-button",{attrs:{type:"primary",round:""},on:{click:t.buyNow}},[t._v("立即购买")])],1)],1),e("div",{attrs:{id:"comment"}},[e("br"),t._m(0),e("hr"),e("br"),0===t.comments.length?e("div",[e("p",[t._v("暂无评价")])]):t._l(t.comments,(function(t){return e("Comment",{key:t.id,attrs:{data:t}})})),e("el-pagination",{ref:"page",attrs:{background:"",layout:"total, prev, pager, next","page-size":5,total:t.totalComments},on:{"current-change":t.currentChange}})],2)],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h3",[e("i",{staticClass:"el-icon-chat-dot-square",staticStyle:{"font-size":"larger",position:"relative",top:"3px"}}),t._v(" 用户评价 ")])}],s=e("b85c"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"comment"},[e("el-row",[e("span",{staticStyle:{position:"absolute",right:"20px",color:"#888888"}},[t._v(t._s(t.commentData.date))]),e("div",{staticStyle:{position:"absolute"}},[e("el-avatar",{attrs:{size:50}},[e("img",{staticStyle:{width:"50px"},attrs:{src:t.commentData.avatar}})])],1),e("div",{staticStyle:{"margin-left":"70px"}},[e("div",{staticStyle:{height:"30px","margin-top":"10px"}},[e("div",{staticStyle:{"font-weight":"bold","margin-bottom":"10px",float:"left"}},[t._v(" "+t._s(t.commentData.nickname)+" ")]),e("div",{staticStyle:{float:"left","margin-left":"30px"}},[e("el-rate",{attrs:{colors:t.colors,disabled:""},model:{value:t.commentData.stars,callback:function(a){t.$set(t.commentData,"stars",a)},expression:"commentData.stars"}})],1)]),e("div",{staticClass:"comment-content"},[t._v(" "+t._s(t.commentData.content)+" ")])]),e("div",[e("div",{staticStyle:{width:"100px",float:"right"}},[e("i",{ref:"cai",staticClass:"iconfont icon-ali-cai icons",staticStyle:{position:"relative",top:"2px"},on:{click:t.cai}}),e("span",{staticStyle:{"font-size":"20px",float:"left"}},[t._v(" ("+t._s(t.commentData.numOfCai)+")")])]),e("div",{staticStyle:{width:"100px",float:"right"}},[e("i",{ref:"zan",staticClass:"iconfont icon-ali-zan icons",on:{click:t.zan}}),e("span",{staticStyle:{"font-size":"20px",float:"left"}},[t._v(" ("+t._s(t.commentData.numOfZan)+")")])]),e("div",{staticStyle:{width:"60px",float:"right"}},[e("i",{staticClass:" el-icon-chat-line-round icons",staticStyle:{"font-size":"28px",position:"relative",top:"-2px"}})])])])],1)},c=[],l={name:"Comment",props:["data"],data:function(){return{commentData:null,colors:["#99A9BF","#F7BA2A","#FF9900"],zanClicked:!1,caiClicked:!1}},methods:{zan:function(){this.caiClicked?this.zanClicked?(this.zanClicked=!1,this.commentData.numOfZan--,this.$refs.zan.style.color="black"):(this.zanClicked=!0,this.commentData.numOfZan++,this.caiClicked=!1,this.commentData.numOfCai--,this.$refs.zan.style.color="rgb(18,150,219)",this.$refs.cai.style.color="black"):(this.zanClicked=!this.zanClicked,this.zanClicked?(this.commentData.numOfZan++,this.$refs.zan.style.color="rgb(18,150,219)"):(this.commentData.numOfZan--,this.$refs.zan.style.color="black"))},cai:function(){this.zanClicked?this.caiClicked?(this.caiClicked=!1,this.numOfCai--,this.$refs.cai.style.color="black"):(this.caiClicked=!0,this.commentData.numOfCai++,this.zanClicked=!1,this.commentData.numOfZan--,this.$refs.cai.style.color="rgb(18,150,219)",this.$refs.zan.style.color="black"):(this.caiClicked=!this.caiClicked,this.caiClicked?(this.commentData.numOfCai++,this.$refs.cai.style.color="rgb(18,150,219)"):(this.commentData.numOfCai--,this.$refs.cai.style.color="black"))}},created:function(){this.commentData=this.data}},r=l,m=(e("3e6f"),e("2877")),d=Object(m["a"])(r,n,c,!1,null,"80e60eac",null),u=d.exports,p={components:{Comment:u},data:function(){return{detail:{goodsName:null,img:null,storeId:null,description:null,price:null},totalComments:0,totalCommentsPages:0,comments:[]}},methods:{addToCart:function(){var t=this;this.$http.post("/shopcart/add",{productId:this.$route.params.id,userId:JSON.parse(localStorage.getItem("userInform")).userId,productPrice:this.detail.price}).then((function(a){1e4===a.code&&t.$message.success("添加成功！")}))},buyNow:function(){},getCommentByPage:function(t,a){var e=this;this.$http.get("/product/detail-comments/"+this.$route.params.id,{pageNum:t,limit:a}).then((function(t){if(1e4===t.code){e.totalComments=t.data.count,e.totalCommentsPages=t.data.pageCount,e.comments=[];var a,i=Object(s["a"])(t.data.list);try{for(i.s();!(a=i.n()).done;){var o=a.value;e.comments.push({id:o.commId,stars:1===o.commType?5:0===o.commType?3:1,avatar:o.userImg,nickname:o.nickname,date:o.replyTime?o.replyTime.substring(0,10):null,content:o.commContent,numOfZan:Math.floor(100*Math.random()),numOfCai:Math.floor(100*Math.random())})}}catch(n){i.e(n)}finally{i.f()}}}))},currentChange:function(t){this.getCommentByPage(t,5)}},created:function(){var t=this;this.$http.get("/product/detail-info/"+this.$route.params.id).then((function(a){1e4===a.code&&(t.detail={goodsName:a.data.product.productName,img:a.data.productImgs&&0!==a.data.productImgs.length?a.data.productImgs[0].url:"//iconfont.alicdn.com/s/210a299f-edad-4fc5-8396-9f743633f209_origin.svg",storeId:a.data.product.shopID,description:a.data.product.content,price:a.data.productSkus&&0!==a.data.productSkus.length?a.data.productSkus[0].sellPrice:null},t.getCommentByPage(1,5))}))}},f=p,h=(e("6189"),Object(m["a"])(f,i,o,!1,null,"128f7a72",null));a["default"]=h.exports},6189:function(t,a,e){"use strict";e("e46d")},e46d:function(t,a,e){},ed26:function(t,a,e){}}]);
//# sourceMappingURL=chunk-15e44147.16b6af6f.js.map