<template>
  <div>
    <el-col :span="12" class="col_box">
      <div class="title_1">{{title_1}}</div>
      <div class="title_2">{{title_2}}</div>
      <div class="title_3">
        <span class="title_3_1">{{title_3_1}}</span>
        <span class="title_3_2">{{title_3_2}}</span>
      </div>
      <img class="cover" :src="cover">
      <div>
        <el-button round class="to_login" @click="change" type="success" plain>{{buttonTitle}}</el-button>
      </div>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: 'Bookmark',
    props: ['title_1', 'title_2', 'title_3_1', 'title_3_2', 'cover', 'buttonTitle'],
    data() {
      return {
        
      }
    },
    methods: {
      change() {
        this.$emit('change');
      }
    }
  }
</script>

<style scoped>
  .col_box {
    text-align: center;
    padding: 30px 0px;
  }

  .title_1 {
    line-height: 27px;
    color: #b5b824;
    font-size: 27px;
    letter-spacing: 2px;
    font-family: 'Times New Roman', Times, serif;
  }

  .title_2 {
    line-height: 27px;
    color: #b5b824;
    font-size: 27px;
    letter-spacing: 2px;
    font-family: 'Times New Roman', Times, serif;
  }

  .title_3 {
    margin-top: 15px;
    font-size: 15px;
    letter-spacing: 2px;
    font-family: 'Times New Roman', Times, serif;
  }

  .title_3_1 {
    color: #18c7d3;
  }

  .title_3_2 {
    color: #18c7d3;
  }

  .cover {
    margin-top: 15px;
    width: 150px;
    height: 150px;
  }

  .to_login {
    margin-top: 15px;
  }
</style>