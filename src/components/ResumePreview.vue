<template>
  <div id="resumePreview">
    <section data-name="profile" v-show="resume.profile">
    <h1>
      {{resume.profile.name}}
    </h1>
    <h2>{{resume.profile.title}}</h2>
    <p>
      <small>{{resume.profile.city}}</small>
      <small>{{resume.profile.birthday}}</small>
    </p>
    </section>

    <section data-name="workHistory" v-show="resume.workHistory">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item.company}}</h3>
          <p v-show="item.content">{{item.content}}</p>
        </li>
      </ol>
    </section>

    <section data-name="education" v-show="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>
            {{item.school}}
            <span v-show="item.content"> - {{item.content}}</span>
          </h3>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'resumePreview',
  computed: {
    resume(){
      return this.$store.state.resume
    }
  },
  create(){
    console.log(this.resume)
  }
}
</script>

<style lang="scss">
  #resumePreview{
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    padding: 2em;
    color: #333;
    line-height: 1.2;
    *{
      box-sizing: border-box;
      font-variant: normal;
      font-weight: normal;
    }
    ol{
      list-style: none;
    }
    p{
      white-space: pre-line;
    }
    section[data-name="profile"]{
      >h1{
        margin: .1em 0;
        font-size: 4em;
      }
    }
    section[data-name="workHistory"]{
      li + li{
        margin-top: 1em;
      }
      li{
        h3{
          border-bottom: 1px solid #999;
          padding-bottom: .3em;
          margin-bottom: .3em;
        }
      }
    }
    section[data-name="education"]{
      li{
        line-height: 1.5;
      }
    }
  }
</style>