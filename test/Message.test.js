import { mount } from 'vue-test-utils'
import Message from '../src/components/Message'

describe('Message.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = mount(Message, {
      propsData: {
        message: 'Cat'
      }
    })
  })

  it('calls handleClick when click on message', () => {
    cmp.vm.handleClick = jest.fn()
    // or triggering it: const spy = spyOn(cmp.vm, 'handleClick')
    // or use setMethods
    cmp.update() // Forces to re-render, applying changes on template. Necessary when tempalte needs to update

    const el = cmp.find('.message').trigger('click')
    expect(cmp.vm.handleClick).toBeCalled()
  })

  it('triggers a message-clicked event when a handleClick method is called', () => {
    const stub = jest.fn()
    cmp.vm.$on('message-clicked', stub)

    cmp.vm.handleClick()
    expect(stub).toBeCalledWith('Cat')
  })
})
