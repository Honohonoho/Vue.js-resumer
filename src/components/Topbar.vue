<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resume</span>
      <div class="actions">
        <button class="primary">保存</button>
        <button>预览</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topbar'  
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
  button{
    width: 72px;
    height: 32px;
    border: none;
    cursor: pointer;
    font-size: 18px;
    background: #ddd;
    color: #222;
    &:hover{
      box-shadow: 1px 1px 1px hsla(0,0,0,0.50)
    }
    &.primary{
      background: #02af5f;
      color: #fff;
    }
  }
</style>