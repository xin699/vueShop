<template>
 <div class="footer">
     <ul>
        <router-link  to="/msite" tag="li">
          <div class="footer-logo">
            <i class="iconfont icon-waimai"></i>
          </div>
          <span>外卖</span>
        </router-link>
        <router-link  to="/search" tag="li">
          <div class="footer-logo">
            <i class="iconfont icon-sousuo"></i>
          </div>
          <span>搜索</span>
        </router-link>
        <router-link  to="/profile" tag="li">
          <div class="footer-logo">
            <i class="iconfont icon-icon-"></i>
          </div>
          <span>订单</span>
        </router-link>
        <router-link  to="/order" tag="li">
          <div class="footer-logo">
            <i class="iconfont icon-wode"></i>
          </div>
          <span>我的</span>
        </router-link>
     </ul>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang='scss'>
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    border: 1px solid #eee;
    font-size: 14px;
    box-sizing: border-box;
    ul {
      height: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .router-link-exact-active, .router-link-active {
        color: red;
      }
      .footer-logo {
        padding-bottom: 2px;
      }
    }
  }
</style>
