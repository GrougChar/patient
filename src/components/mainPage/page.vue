<template>
  <div>
    <div>
      <v-header style="height: 60px"></v-header>
    </div>
    <div>
       <button class="button button-raised button-action button-circle button-giant bg">确认</br>时间</button>
    </div>
    <hr class="hr">
    <div class="bh">
      <button class="button button-primary button-box button-giant button-longshadow-left bg" @click="intoblood">
      查看血糖信息
      </button>
      
      <button class="button button-caution button-box button-raised button-giant button-longshadow-right bg">
    查看血压信息
      </button>
    </div>
    <div class="bh">
     <button class="button button-action button-box button-giant button-longshadow-left bg">
         查看其他信息 
      </button>
      <button class="button button-highlight button-box button-giant button-longshadow-right bg">
          开发中...
      </button>
    </div>
  </div>
</template>
<script>
  import header from '../header/header';
  import dataJson from 'static/data/configData';
  export default {
    components: {
      'v-header': header
    },
    methods: {
      intoblood: function () {
        this.$router.push('/BloodPage');
        this.$http({
            url: dataJson.url + 'oauth/token', // Login adress 大叔大婶大所大所大所大所多撒大所大所多
            params: {
            },
            headers: {
              'Authorization': 'Basic aGFvbWlvOmhhb21pb3NlY3JldA==',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(function (data) {
          }, function (data) {
            window.alert('errorpage');
          });
      }
    }
  };

</script>
<style>
  .bh {
    margin: 0 10px 20px;
    height: 100px;
  }
  
  .bg {
    margin: 0px 10px
  }
  

</style>
