

// jest.mock('axios', () => ({
//   get: jest.fn(() => Promise.resolve({ data: 3 }))
// }))

import { shallowMount } from '@vue/test-utils'
import Form from '../src/components/Form'
import axios from 'axios'

describe('Form.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Form)
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('Calls axios.get', async () => {
    const result = await cmp.vm.onSubmit('an')

    expect(result).toEqual({ data: [3] })
    expect(cmp.vm.results).toEqual([3])
    expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?q=an')
  })

  describe('Properties', () => {
    it('returns the string in normal order if reversed property is not true', () => {
      cmp.setData({ inputValue: 'Yoo' })

      expect(cmp.vm.reversedInput).toBe('Yoo')
      expect(axios.get).not.toBeCalled()
    })

    it('returns the reversed string if reversed property is true', () => {
      cmp.setData({ inputValue: 'Yoo' })
      cmp.setProps({ reversed: true })

      expect(cmp.vm.reversedInput).toBe('ooY')
    })
  })

  describe('Watchers - inputValue', () => {
    let spy

    beforeAll(() => {
      spy = jest.spyOn(console, 'log')
    })

    afterEach(() => {
      spy.mockClear()
    })

    it('is not called if value is empty (trimmed)', next => {
      cmp.setData({ inputValue: '   ' })
      cmp.vm.$nextTick(() => {
        expect(spy).not.toBeCalled()
        next()
      })
    })

    it('is not called if values are the same', next => {
      cmp = shallowMount(Form, {
        data: () => ({ inputValue: 'foo' })
      })
      cmp.setData({ inputValue: 'foo' })
      cmp.vm.$nextTick(() => {
        expect(spy).not.toBeCalled()
        next()
      })
    })

    it('is called with the new value in other cases', next => {
      cmp.setData({ inputValue: 'foo' })
      cmp.vm.$nextTick(() => {
        expect(spy).toBeCalled()
        next()
      })
    })
  })
})
