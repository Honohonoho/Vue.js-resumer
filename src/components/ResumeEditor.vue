<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.visibleItems"
            :class="{active: item === selected}"
            @click="selected = item"
            >
          {{index}}
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.visibleItems" v-show="item === selected">
        {{resume[item]}}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ResumeEditor',
  data() {
    return {
      selected: 'profile',
      resume: {
        visibleItems: ['profile','work history','education','projects','awards','contacts','others'],
        profile: {
          name: '',
          city: '',
          title: ''
        },
        'work history': [],
        education: [],
        projects: [],
        awards: [],
        contacts: [],
        other: []
      }
    }
  }
}
</script>

<style lang="scss">
  #resumeEditor{
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    >nav{
      width: 80px;
      background: #000;
      color: #fff;
      >ol{
        >li{
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 16px;
          &:active{
            background: #fff;
            color: #000;
          }
        }
      }
    }
  }
  ol{
    list-style: none;
  }
</style>


