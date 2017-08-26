import { mount } from 'vue-test-utils'
import Message from '../src/components/Message'

const createCmp = propsData => mount(Message, { propsData })

describe('Message.test.js', () => {
  let cmp

  describe('Properties', () => {
    it('has a message property', () => {
      cmp = createCmp({ message: 'hey' })
      expect(cmp.hasProp('message', 'hey')).toBeTruthy()
    })

    it('has no cat property', () => {
      cmp = createCmp({ cat: 'hey', message: 'hey' })
      expect(cmp.hasProp('cat', 'hey')).toBeFalsy()
    })

    it('Paco is the default author', () => {
      cmp = createCmp({ message: 'hey' })
      expect(cmp.hasProp('author', 'Paco')).toBeTruthy()
    })

    describe('Validation', () => {
      const message = createCmp().vm.$options.props.message

      it('message is of type string', () => {
        console.log(message)
        expect(message.type).toBe(String)
      })

      it('message is required', () => {
        expect(message.required).toBeTruthy()
      })

      it('message has at least length 2', () => {
        expect(message.validator && message.validator('a')).toBeFalsy()
        expect(message.validator && message.validator('aa')).toBeTruthy()
      })
    })
  })

  describe('Events', () => {
    beforeEach(() => {
      cmp = createCmp({ message: 'Cat' })
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
})
