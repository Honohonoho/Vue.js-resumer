import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      selected: 'profile',
      resume: {
        config: [
          {'field': 'profile',icon: 'id'},
          {'field': 'workHistory',icon: 'work'},
          {'field': 'education',icon: 'book'},
          {'field': 'projects',icon: 'heart'},
          {'field': 'awards',icon: 'cup'},
          {'field': 'contacts',icon: 'phone'},
        ],
        profile: {
          name: '李某',
          city: '西安',
          title: '前端新人',
          birthday: '1993-01-01'
        },
        'workHistory': [
          {company: 'B公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
            我的主要工作如下:
            1. 完成既定产品需求。
            2. 修复 bug。`},
          {company: 'A公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
            我的主要工作如下:
            1. 完成既定产品需求。
            2. 修复 bug。`},
        ],
        education: [
          {school: '某大学',content: '硕士'},
          {school: '某大学',content: '本科'},
        ],
        projects: [
          {name: 'project A',content: '文字'},
          {name: 'project B',content: '文字'},
        ],
        awards: [
          {name: '人品爆炸',content: '连续十次获得「再来一瓶」奖励'},
          {name: '奖学金',content: '一等奖学金'},
        ],
        contacts: [
          {contact: 'phone',content: '13812345678'},
          {contact: 'qq', content: '12345678'},
        ],
      }
    },
    mutations: {
        switchTab(state,payload){
          state.selected = payload
        },
        updateResume(state, {path, value}){
          objectPath.set(state.resume, path, value)
        }
    }
})