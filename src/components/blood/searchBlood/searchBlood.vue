<template>
  <form role="form">
    <div class="form-group col-xs-6">
      <label for="" class="col-xs-offset-1">早餐前</label>
      <input type="text" class="form-control" id="" placeholder="Enter text" v-bind:readonly="isreadonly">
    </div>
    <div class="form-group col-xs-6">
      <label for="" class="col-xs-offset-1">早餐后</label>
      <input type="text" class="form-control " id="" placeholder="text" v-bind:readonly="isreadonly">
    </div>
    <div class="form-group col-xs-6">
      <label for="" class="col-xs-offset-1">午餐前</label>
      <input type="text" class="form-control" id="" placeholder="Enter text" v-bind:readonly="isreadonly">
    </div>
    <div class="form-group col-xs-6">
      <label for="" class="col-xs-offset-1">午餐后</label>
      <input type="text" class="form-control " id="" placeholder="text" v-bind:readonly="isreadonly">
    </div>
    <div class="form-group col-xs-6">
      <label for="" class="col-xs-offset-1">晚餐前</label>
      <input type="text" class="form-control" id="" placeholder="Enter text" v-bind:readonly="isreadonly">
    </div>
    <div class="form-group col-xs-6">
      <label for="" class="col-xs-offset-1">晚餐后</label>
      <input type="text" class="form-control " id="" placeholder="text" v-bind:readonly="isreadonly">
    </div>
    <div class="form-group col-xs-6">
      <label for="" class="col-xs-offset-1"> 睡&nbsp;&nbsp;&nbsp;前</label>
      <input type="text" class="form-control" id="" placeholder="Enter text" v-bind:readonly="isreadonly">
    </div>
    <div class="form-group col-xs-6">
      <label for="" class="col-xs-offset-1"> 凌&nbsp;&nbsp;&nbsp; 晨</label>
      <input type="text" class="form-control " id="" placeholder="text" v-bind:readonly="isreadonly">
    </div>
    <div class="form-group col-xs-1">
    </div>
    <div class="form-group col-xs-5">
      <div style="height: 40px">
      </div>
      <button type="button" class="btn btn-danger btn-lg btn-block" @click="changeInfo">修改</button>
    </div>
    <div class="form-group col-xs-5">
      <div style="height: 40px">
      </div>
      <button type="button" class="btn btn-primary btn-lg btn-block" @click="commit">提交</button>
    </div>
  </form>
</template>
<style>

</style>
<script>
  export default {
    data() {
      return {
        isreadonly: true
      };
    },
    methods: {
      changeInfo: function () {
        if (window.confirm('是否需要修改血糖值？')) {
          this.isreadonly = false;
        }
      },
      commit: function () {
        if (window.confirm('确认提交血糖信息！')) {
            this.isreadonly = true;
        }
      }
    }
  };

</script>
