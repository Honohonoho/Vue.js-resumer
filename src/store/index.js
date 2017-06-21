import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      selected: 'profile',
      user: {
        id: '',
        username: ''
      },
      resumeConfig: [
        {'field': 'profile',icon: 'id',keys: ['name','city','title','birthday']},
        {'field': 'workHistory',icon: 'work',type: 'array',keys: ['company','details']},
        {'field': 'education',icon: 'book',type: 'array',keys: ['school','details']},
        {'field': 'projects',icon: 'heart',type: 'array',keys: ['name','details']},
        {'field': 'awards',icon: 'cup',type: 'array',keys: ['name','details']},
        {'field': 'contacts',icon: 'phone',type: 'array',keys: ['contact','details']},
      ],
      resume: {

      }
    },
    mutations: {
      initState(state, payload){
        state.resumeConfig.map((item)=>{
          if(item.type === 'array'){
            //state.resume[item.field] = [] // 这样写 Vue 无法监听属性变化
            Vue.set(state.resume, item.field, [])
          }else{
            //state.resume[item.field] = [] // 这样写 Vue 无法监听属性变化
            Vue.set(state.resume, item.field, {})
            item.keys.map((key)=>{
              //state.resume[item.field] = [] // 这样写 Vue 无法监听属性变化
              Vue.set(state.resume[item.field], key, '')
            })
          }
        })
        Object.assign(state, payload)
      },
      switchTab(state,payload){
        state.selected = payload
        localStorage.setItem('state', JSON.stringify(state))
      },
      updateResume(state, {path, value}){
        objectPath.set(state.resume, path, value)
        localStorage.setItem('state', JSON.stringify(state))
      },
      setUser(state, payload){
        Object.assign(state.user, payload) // Object.assign()向已有对象上添加属性,添加到对象上的新属性不会触发更新
      },
      removeUser(state){
        state.user.id = ''
      },
      addResumeSubfield(state, {field}){
        let empty = {}
        state.resume[field].push(empty)
        state.resumeConfig.filter((i)=>i.field === field)[0].keys.map((key)=>{
          Vue.set(empty, key, '')
        })
      },
      removeResumeSubfield(state, {field,index}){
        state.resume[field].splice(index,1)
      }
    }
})