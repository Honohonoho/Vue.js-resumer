<template>
  <div id="app">
    <Topbar/>
    <ResumeEditor/>
    <ResumePreview/>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'

import Topbar from './components/Topbar'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/resumePreview'

export default {
  name: 'app',
  data: function(){
    return {
      text: '你好'
    }
  },
  components: {Topbar, ResumeEditor, ResumePreview}
}
</script>

<style>

</style>
