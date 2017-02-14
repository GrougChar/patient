<template>
    <div class="col-xs-offset-5 htoplogin row">
      <button type="button" class="btn btn-success  btn-sm" @click="relogin">修改<i class="glyphicon glyphicon-cog"></i></button>
      <button type="button" class="btn btn-success  btn-sm" @click="relogin">退出<i class="glyphicon glyphicon-remove"></i></button>
    </div>
</template>
<style>
.htoplogin {
margin-top: 10px;
}
</style>
<script>
  export default {
    compontent: {
    },
    methods: {
      relogin: function () {
        window.console.log('relogin');
        this.$router.push('/Login');
      }
    }
  };

</script>
