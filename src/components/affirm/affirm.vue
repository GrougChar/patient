<template>
  <div>
    <button type="button" class="btn btn-success btn-circle btn-xl" @click="write" id="dd"><i class="glyphicon glyphicon-link"></i></button>
    <input type="datetime-local" v-model='time' />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        time: ''
      };
    },
    methods: {
      write: function () {
        window.console.log(this.time);
      }
    }
  };

</script>
<style>
  .btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
  }
  
  .btn-circle.btn-lg {
    width: 50px;
    height: 50px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
    border-radius: 25px;
  }
  
  .btn-circle.btn-xl {
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    font-size: 24px;
    line-height: 1.33;
    border-radius: 35px;
  }

</style>
