<template>
  <div>
    <div class="content">
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
          <div>
            <v-header style="height: 30px"></v-header>
          </div>
          <div>
            <ul id="myTab" class="nav nav-tabs">
              <li class="active"><a href="#bloodInput" data-toggle="tab">指标</a></li>
              <li class=""><a href="#leaveMessage" data-toggle="tab">留言/回复</a></li>
              <li class=""><a href="#bloodHistory" data-toggle="tab">历史查看</a></li>
              <li class=""><a href="#uploadPic" data-toggle="tab">图片上传</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div style="height: 60px">
      </div>
        <div>
          <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade in active" id="bloodInput">
              <v-affirm></v-affirm>
              <v-bloodInput></v-bloodInput>
            </div>
            <div class="tab-pane fade" id="leaveMessage">
              <v-leaveMessage></v-leaveMessage>
            </div>
            <div class="tab-pane fade" id="bloodHistory">
              <v-bloodHistory></v-bloodHistory>
            </div>
            <div class="tab-pane fade" id="uploadPic">
              <v-uploadPic></v-uploadPic>
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
  import bloodHistory from '../bloodhistory/bloodHistory';
  import bloodInput from '../bloodinput/bloodInput';
  import leaveMessage from '../leavemessage/leaveMessage';
  import uploadPic from '../uploadPic/uploadPic';
  import header from '../header/header';
  import affirm from '../affirm/affirm';
  export default {
    components: {
      'v-header': header,
      'v-bloodInput': bloodInput,
      'v-leaveMessage': leaveMessage,
      'v-bloodHistory': bloodHistory,
      'v-uploadPic': uploadPic,
      'v-affirm': affirm
    }
  };

</script>
<style>
</style>
