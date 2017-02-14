<template>
  <div>
    <div class="content ">
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container bcolorheader ">
          <div class="col-xs-1 htop">
            <button class="button button button-plain button-border button-circle" @click="backMainPage"><i class="glyphicon glyphicon-arrow-left"></i></button>
          </div>
          <div>
            <v-header style="height: 60px"></v-header>
          </div>
          <div class="col-xs-3">
            <button type="button" class="btn btn-warning btn-sm" @click="bloodinputpage(1)">输入血糖</button>
          </div>
          <div class="col-xs-3">
            <button type="button" class="btn btn-warning  btn-sm" @click="bloodinputpage(2)">查看血糖</button>
          </div>
          <!--<div class="col-xs-3">
                <button type="button" class="btn btn-warning btn-sm" @click="bloodinputpage(3)">上传照片</button>
              </div>-->
          <div class="col-xs-3">
            <button type="button" class="btn btn-warning  btn-sm" @click="bloodinputpage(3)">留言/回复<span class="badge">42</span></button>
          </div>
        </div>
      </nav>
      <div style="height: 120px">
      </div>
      <div>
        <div>
          <div v-show="bloodinput">
            <v-bloodInput></v-bloodInput>
          </div>
          <div v-show="leaveMessage">
            <v-leaveMessage></v-leaveMessage>
          </div>
          <div v-show="bloodHistory">
            <v-bloodHistory></v-bloodHistory>
          </div>
          <div v-show="uploadPic">
            <v-uploadPic></v-uploadPic>
          </div>
          <div v-show="searchBlood">
            <v-searchBlood></v-searchBlood>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import bloodHistory from '../blood/bloodhistory/bloodHistory';
  import bloodInput from '../blood/bloodinput/bloodInput';
  import searchBlood from '../blood/searchBlood/searchBlood';
  import leaveMessage from '../blood/leavemessage/leaveMessage';
  import uploadPic from '../blood/uploadPic/uploadPic';
  import header from '../header/header';
  export default {
    data() {
      return {
        bloodinput: true,
        leaveMessage: false,
        bloodHistory: false,
        uploadPic: false,
        searchBlood: false
      };
    },
    components: {
      'v-header': header,
      'v-bloodInput': bloodInput,
      'v-leaveMessage': leaveMessage,
      'v-bloodHistory': bloodHistory,
      'v-uploadPic': uploadPic,
      'v-searchBlood': searchBlood
    },
    methods: {
      bloodinputpage: function (n) {
        if (n === 1) {
          this.bloodinput = true;
          this.leaveMessage = false;
          this.bloodHistory = false;
          this.uploadPic = false;
          this.searchBlood = false;
        }
        if (n === 2) {
          this.bloodinput = false;
          this.leaveMessage = false;
          this.bloodHistory = false;
          this.uploadPic = false;
          this.searchBlood = true;
        }
        if (n === 3) {
          this.bloodinput = false;
          this.leaveMessage = true;
          this.bloodHistory = false;
          this.uploadPic = false;
          this.searchBlood = false;
        }
        if (n === 4) {
          this.bloodinput = false;
          this.leaveMessage = false;
          this.bloodHistory = false;
          this.uploadPic = true;
        }
      },
      backMainPage: function () {
        this.$router.push('/MainPage');
      }
    }
  };

</script>
<style>
  .bcolor {
    background-color: rgb(240, 173, 78)
  }
  
  .hg {
    margin-left: 10px;
  }
  
  .bcolorheader {
    background-color: rgb(34, 159, 253)
  }
  
  .htop {
    margin-top: 10px;
  }

</style>
