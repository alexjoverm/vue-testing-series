import { mount } from '@vue/test-utils'
import Message from '../src/components/Message'

const createCmp = propsData => mount(Message, { propsData })

describe('Message.test.js', () => {
  let cmp

  describe('Properties', () => {
    it('has a message property', () => {
      cmp = createCmp({ message: 'hey' })
      expect(cmp.props().message).toBe('hey')
    })

    it("has a cat property, since it's added as an attribute", () => {
      cmp = createCmp({ cat: 'hey', message: 'hey' })
      expect(cmp.props().cat).toBeUndefined()
    })

    it('Paco is the default author', () => {
      cmp = createCmp({ message: 'hey' })
      expect(cmp.props().author).toBe('Paco')
    })

    describe('Validation', () => {
      const message = createCmp({ message: 'hey' }).vm.$options.props.message

      it('message is of type string', () => {
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
      const handleClick = jest.fn()
      cmp.setMethods({ handleClick })
      const el = cmp.find('.message').trigger('click')

      expect(handleClick).toBeCalled()
    })

    it('triggers a message-clicked event when a handleClick method is called', () => {
      const stub = jest.fn()
      cmp.vm.$on('message-clicked', stub)
      cmp.vm.handleClick()

      expect(stub).toBeCalledWith('Cat')
    })

    it('calls handleMessageClick when @message-click happens', () => {
      const el = cmp.find('.message').vm.$emit('message-clicked', 'Cat')

      expect(cmp.emitted()['message-clicked'][0]).toEqual(['Cat'])
    })
  })
})
