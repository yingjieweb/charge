<template>
  <div class="sorry">
    <span id="tipNum">{{count}}</span>
  </div>
</template>

<script>
  export default {
    name: "NotFound",
    data() {
      return {
        targetUrl: "https://yingjieweb.github.io/navigator/dist/index.html",  //倒计时结束跳转页面
        count: 9,
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      load() {
        setInterval(()=>{
          if (this.count !== 0){
            this.count --
          }else {
            window.location.href = this.targetUrl;
            window.clearInterval(this.timeout);
          }
        },900)
      }
    }
  }
</script>

<style scoped>
  .sorry {
    height: 530px;
    background-image: url(http://www.qijishow.com/img/sorry.jpg);
    background-repeat: no-repeat;
    background-position: 96px 84px;
    width: 524px;
    margin-right: auto;
    margin-left: auto;
    font-family: Impact;
    font-size: 400px;
    color: #BDBDBD;
    line-height: 460px;
    padding-top: 338px;
    padding-left: 332px;
  }
</style>
