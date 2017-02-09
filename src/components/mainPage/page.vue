<template>
  <div>
    <div>
            <v-header style="height: 60px"></v-header>
          </div>
    <div class="bh">
      <button class="button button-primary button-box button-giant button-longshadow-right" @click="intoblood">
      查看血糖信息
      </button>
    </div>
    <div class="bh">
      <button class="button button-caution button-box button-raised button-giant button-longshadow">
    查看血糖信息
      </button>
    </div>
    <div class="bh">
      <button class="button button-action button-box button-giant button-longshadow-left">
        查看血糖信息
      </button>
    </div>
    <div class="bh">
      <button class="button button-highlight button-box button-giant button-longshadow-right ">
          查看血糖信息
      </button>
    </div>
  </div>
</template>

<script>
import header from '../header/header';
  export default {
    components: {
      'v-header': header
    },
    methods: {
      intoblood: function () {
        this.$router.push('/BloodPage');
      }
    }
  };

</script>
<style>
  .bh {
    margin: 0 auto;
    height: 100px;
  }

</style>
