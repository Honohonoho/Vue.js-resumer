<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resume</span>
      <div class="actions">
        <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          我就是 slot 内容
        </MyDialog>
        <a class="button" href="#">登录</a>
        <button class="button primary">保存</button>
        <button class="button">预览</button>
      </div>
    </div>
  </div>
</template>

<script>
import MyDialog from './MyDialog'

export default {
  name: 'Topbar',
  data(){
    return {
      signUpDialogVisible: false
    }
  },
  components: {
    MyDialog
  }
}
</script>

<style scoped lang="scss"> //scoped 属性会自动添加一个唯一的属性（比如 data-v-21e5b78）为组件内 CSS 指定作用域
  #topbar{
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    >.wrapper{
      min-width: 1024px;
      max-width: 1440px;
      margin: 0 auto;
      height: 64px;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    >.logo{
      font-size: 24px;
      color: #000;
    }
  }
  .button{
    width: 72px;
    height: 32px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background: #ddd;
    color: #222;
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    vertical-align: middle;
    &:hover{
      box-shadow: 1px 1px 1px hsla(0,0,0,0.50)
    }
    &.primary{
      background: #02af5f;
      color: #fff;
    }
  }
  .action > a{

  }
</style>