<template>
<div>
  <div class="col-xs-offset-10">
    <button type="button" class="btn btn-success  btn-sm" @click="relogin">重新登录</button>
  </div>
</div>
</template>
<style>

</style>
<script>
  export default {
    methods: {
      relogin: function () {
        window.console.log('relogin');
        this.$router.push('/Login');
      }
    }
  };
</script>
