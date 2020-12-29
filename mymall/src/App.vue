<template>
  <div>
     <el-container>
            <el-header>
                <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"><el-link :underline="false" href="/">ShiWen-MALL</el-link></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
                <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">
                     <el-link type="info" :underline="false" href="/#/order">订单中心</el-link> 
                     <el-link type="warning" :underline="false" href="/#/cart">购物车</el-link>
                     <el-link type="success" :underline="false" href="/#/login">登录</el-link>
                     <el-link type="Danger" :underline="false" href="/#/registry">注册</el-link>  
                  </div></el-col>
                </el-row>
            </el-header> 
        </el-container>    
    <router-view/>
    
  </div>
</template>

<script>

  export default {
   
    name: 'App',
    data() {
      return {
        isCollapse: true,
       };
     

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    } 
  }
</script>

<style>
.el-header, .el-footer {
    background-color: #d0ddec;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
   .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

 .el-submenu{
   width: 150px;
 }
 .el-menu-vertical-demo.el-menu--collapse.el-menu{
   width:150px;
 }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
 

</style>
