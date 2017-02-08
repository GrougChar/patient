<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div style="height: 80px">
        </div>
        <div class="panel panel-default">
          <div class="panel-heading text-center">登录信息</div>
          <div class="panel-body">
            <form>
              <div class="form-group has-feedback">
                <input type="text" class="form-control" name="username" placeholder="用户名" v-model="name" @focus="fs">
                <span class="glyphicon  glyphicon-user form-control-feedback"></span>
              </div>
              <div class="form-group has-feedback">
                <input type="password" class="form-control" name="password" placeholder="密码" v-model="password" @focus="fs">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div class="form-group">
                <div class="checkbox">
                  <label><input type="checkbox" name="remeber">记住密码 </label>
                </div>
              </div>
              <button type="button" class="btn btn-success btn-block btn-lg" @click="login">登录</button>
              <div style="height: 10px">
              </div>
              <div style="text-align: center" v-show="check">
                <button type="button" class="btn btn-warning btn-block btn-sm" disabled="disabled">请输入正确的用户名和密码</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import dataJson from 'static/data/configData';
  // window.console.log('+++++++', dataJson);
  export default {
    data() {
      return {
        name: 'test1',
        password: 'test1',
        check: false
      };
    },
    methods: {
      fs: function () {
        this.check = false;
      },
      login: function () {
        if (this.name === '' || this.password === '') {
          window.console.log('asds');
          this.check = true;
        } else {
          this.$http({
            url: dataJson.url + 'oauth/token', // Login adress
            params: {
              grant_type: 'password',
              client_id: 'haomio',
              username: this.name,
              password: this.password
            },
            headers: {
              'Authorization': 'Basic aGFvbWlvOmhhb21pb3NlY3JldA==',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(function (data) {
            this.$router.push('/MainPage');
          }, function (data) {
            window.alert('errorpage');
          });
        }
      }
    }
  };

</script>
<style>


</style>
