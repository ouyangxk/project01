<template>
  <div class="container">
    <div class="swiper-bg"
         :style="{backgroundColor: slidesColor[index]}"></div>
    <div class="stage">
      <ul class="category-nav">
        <li
          v-for="(item, index) in navbars"
          :key="index"
          class="cate-nav-item">
          <div class="cent">
          &nbsp;&nbsp;{{ item.text }}
          <div class="cs">
            <table class="Ptable">
			<tbody>
				<tr>
					<td class="tdwidth"><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td class="tdwidth"><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
          <td class="tdwidth"><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
          <td class="tdwidth"><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
				<tr>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
				<tr>
				  <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
				<tr>
				 <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
        <tr>
				 <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
        <tr>
				 <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
        <tr>
				 <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
        <tr>
				 <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
        <tr>
				 <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
        <tr>
				 <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
        <tr>
				 <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
        <tr>
				 <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>
        <tr>
				 <td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
					<td><a href="/#/goods?name=jiazhua" style="text-decoration : none">零食</a></td>
				</tr>

			</tbody>
		</table>

          </div>
          </div>
        </li>
      </ul>
      <!-- 轮播图 -->
      <div class="swiper">
        <Swiper :slides="slidesImage" v-model="index"></Swiper>
      </div>
    </div>
    <div class="rec-banner">
      <h1 class="banner-title1">精品推荐</h1>
      <ul class="rec-list">
        <li
          class="rec-card"
          v-for="(item, index) in goods"
          :key="index"
          @click="togglePage(item)">
          <img class="rec-media" :src="item.cover"/>
          <div class="rec-profile">
            <h4>{{ item.text }}</h4>
            <p class="rec-params">
              原价: <span class="rec-price">￥{{ item.price }}</span>&nbsp;
              促销价: <span class="rec-online-price">￥{{ item.onlinePrice }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
     <div class="rec-banner">
      <h1 class="banner-title2">好物推荐</h1>
      <ul class="rec-list">
        <li
          class="rec-card"
          v-for="(item, index) in goods"
          :key="index"
          @click="togglePage(item)">
          <img class="rec-media" :src="item.cover"/>
          <div class="rec-profile">
            <h4>{{ item.text }}</h4>
            <p class="rec-params">
               现价: <span class="rec-online-price">￥{{ item.onlinePrice }}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class='footer'>
              <span>
                <a href=":;">关于我们 </a> | <a href=":;">联系我们 </a> |
                <a href=":;">联系客服 </a> |<a href=":;">合作招商 </a> |
                <a href=":;">商家帮助 </a> | <a href=":;">营销中心 </a> |
                <a href=":;">手机商城 </a> | <a href=":;">友情链接</a> |
                <a href=":;">销售联盟 </a> | <a href=":;">风险检测 </a> |
                <a href=":;">隐私政策 </a> | <a href=":;">Select Region </a>
              </span>
              <div>
                mi.com 京ICP证110507号 京ICP备10046444号
                京公网安备11010802020134号 京网文[2014]0059-0009号
              </div>
              <div>
                违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我的测试
              </div>
  </div>
  </div>
</template>

<script>
  import Swiper from '@/widgets/Swiper'
  import mock from '@/mock/mock'
  export default {
    name: 'Index',
    components: { Swiper },
    data () {
      return {
        index: 0
      }
    },
    computed: {
      navbars () {
        return mock.navbars
      },
      goods () {
        return mock.goods
      },
      slidesColor () {
        return mock.goods.map(item => item.color)
      },
      slidesImage () {
        return mock.goods.map(item => item.poster)
      }
    },
    methods: {
      togglePage (item) {
        this.$router.push({ path: 'goods', query: { name: item.name } })
      }
    }
  }
</script>

<style scoped>
.tdwidth{
  width:120px;
}
.cent:hover .cs{ 
color: #656e73; 
opacity: 1; 
}
.cs{ 
margin-left:188px;
width:500px; 
height:500px; 
background:rgb(255, 255, 255); 
top:0px; 
position:absolute; 
display: block; 
font-size: 12px; 
transition: 0.3s; 
-webkit-transition: .5s; 
-moz-transition: .5s; 
} 
  .container {
    position: relative;
    background-color: #f5f5f5;
    border-bottom: 1px solid transparent;
  }
  .swiper-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background-color: #e5e5e5;
    
  }
  .stage {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
    background-color: #789;
  }
  .category-nav {
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 500px;
    z-index: 2;
    list-style: none;
    background-color: rgba(0, 0, 0, 0.55);
  }
  .cate-nav-item {
    padding-left: 12px;
    line-height: 35.7143px;
    color: #fff;
    cursor: pointer;
  }
  .cate-nav-item:hover {
    color: #787878;
    background-color: rgba(255, 255, 255);
  }
  .cate-nav-icon {
    opacity: .5;
  }
  .swiper {
    height: 500px;
    background-color: #e8e8e8;
  }
  .rec-banner {
    margin: 30px auto;
    padding-top: 30px;
    padding-bottom: 50px;
    width: 1120px;
    background-color: #fff;
  }
  .banner-title1 {
    padding: 8px 15px;
    color: chartreuse;
  }
   .banner-title2 {
    padding: 8px 15px;
    color:cyan;
  }
  .rec-list {
    list-style: none;
  }
  .rec-card {
    display: inline-block;
    width: 25%;
    text-align: center;
    vertical-align: top;
    cursor: pointer;
  }
  .rec-media {
    width: 240px;
  }
  .rec-profile {
    width: 200px;
    display: inline-block;
    color: #444;
  }
  .rec-price {
    text-decoration: line-through;
  }
  .rec-online-price {
    color: #ff0036;
    font-size: 16px;
  }
  .rec-params {
    font-size: 12px;
    color: #888;
  }
    .footer{
    width: 100%;
    height: 100px;
    background-color: cornsilk;
    text-align: center;
  }
</style>
