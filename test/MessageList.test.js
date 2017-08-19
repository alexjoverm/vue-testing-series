import { mount } from 'vue-test-utils'
import MessageList from '../src/components/MessageList'

describe('MessageList.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(MessageList, {
      // Beaware that props is overriden using `propsData`
      propsData: {
        messages: ['Cat']
      }
    })
  })

  it('has received ["Cat"] as the message property', () => {
    expect(cmp.vm.messages).toEqual(['Cat'])
  })

  it('contains 1 li element, with', () => {
    expect(cmp.findAll('li').length).toBe(1)
    expect(cmp.findAll('li').at(0).text()).toMatch('Cat')
  })

  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
