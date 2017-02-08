<template>
<div>
    <router-view></router-view>
    <div class="detail-wrapper clearfix">
      <div class="detail-main">
      </div>
    </div>
    <v-footer class="footer"></v-footer>
</div> 
</template>
<script>
  import foots from './components/foots/foot';
  export default {
     components: {
      'v-footer': foots
    }
  };
</script>
<style>
</style>
