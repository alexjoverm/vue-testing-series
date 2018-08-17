import { shallowMount } from '@vue/test-utils'
import App from '../src/App'

describe('App.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(App)
    cmp.setData({ messages: ['Cat'] });
  })

  it('equals messages to ["Cat"]', () => {
    expect(cmp.vm.messages).toEqual(['Cat'])
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})

/**
 * Without vue-test-utils
 */
// import Vue from 'vue'
// import App from '../src/App'

// describe('App.test.js', () => {
//   let cmp, vm

//   beforeEach(() => {
//     cmp = Vue.extend(App)
//     vm = new cmp({
//       data: {
//         messages: ['Cat']
//       }
//     }).$mount()
//   })

//   it('equals messages to ["Cat"]', () => {
//     expect(vm.messages).toEqual(['Cat'])
//   })

//   it('has the expected html structure', () => {
//     expect(vm.$el).toMatchSnapshot()
//   })
// })
