import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import MessageList from '../src/components/MessageList'
import Message from '../src/components/Message'

describe('MessageList.test.js', () => {
  let cmp

  beforeEach(() => {
    const messageWrapper = {
      render(h) {
        return h(Message, { props: { message: 'hey yo' } })
      }
    }

    cmp = shallowMount(MessageList, {
      slots: {
        default: messageWrapper
      }
    })
  })

  it('Messages are inserted in a MessageList component', () => {
    const list = cmp.find(MessageList)
    expect(list.find(Message).isVueInstance()).toBe(true)
  })

  it('Header slot renders a default header text', () => {
    const header = cmp.find('.list-header')
    expect(header.text().trim()).toBe('This is a default header')
  })

  it('Header slot is rendered withing .list-header', () => {
    const component = shallowMount(MessageList, {
      slots: {
        header: '<div>What an awesome header</div>'
      }
    })

    const header = component.find('.list-header')
    expect(header.text().trim()).toBe('What an awesome header')
  })

  it('Message length is higher than 5', () => {
    const messages = cmp.findAll(Message)
    messages.wrappers.forEach(c => {
      expect(c.vm.message.length).toBeGreaterThan(5)
    })
  })

  // it('has received ["Cat"] as the message property', () => {
  //   expect(cmp.vm.messages).toEqual(['Cat'])
  // })

  // it('has the expected html structure', () => {
  //   expect(cmp.element).toMatchSnapshot()
  // })

  // it('is a MessageList component', () => {
  //   expect(cmp.is(MessageList)).toBe(true)

  //   // Or with CSS selector
  //   expect(cmp.is('ul')).toBe(true)
  // })

  // it('contains a Message component', () => {
  //   expect(cmp.contains(Message)).toBe(true)

  //   // Or with CSS selector
  //   expect(cmp.contains('.message')).toBe(true)
  // })

  // // Vue instance
  // it('Both MessageList and Message are vue instances', () => {
  //   expect(cmp.isVueInstance()).toBe(true)
  //   expect(cmp.find(Message).isVueInstance()).toBe(true)
  // })

  // it('Message has a "message" property equals to "Cat"', () => {
  //   expect(cmp.find(Message).hasProp('message', 'Cat')).toBe(true)
  // })

  // // Structure
  // it('Message element exists', () => {
  //   expect(cmp.find('.message').exists()).toBe(true)
  // })

  // it('Message is not empty', () => {
  //   expect(cmp.find(Message).isEmpty()).toBe(false)
  // })

  // it('Message has a class attribute set to "message"', () => {
  //   expect(cmp.find(Message).hasAttribute('class', 'message')).toBe(true)
  // })

  // // Style
  // it('Message component has the .message class', () => {
  //   expect(cmp.find(Message).hasClass('message')).toBe(true)
  // })

  // it('Message component has style padding-top: 10', () => {
  //   expect(cmp.find(Message).hasStyle('padding-top', '10')).toBe(true)
  // })

  // it('Calls handleMessageClick when @message-click happens', () => {
  //   cmp.vm.handleMessageClick = jest.fn()
  //   cmp.update()
  //   // const stub = jest.fn()
  //   // cmp.setMethods({ handleMessageClick: stub })

  //   const el = cmp.find(Message).vm.$emit('message-clicked', 'cat')

  //   expect(cmp.vm.handleMessageClick).toBeCalledWith('cat')
  // })
})
