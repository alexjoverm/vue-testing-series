

// jest.mock('axios', () => ({
//   get: jest.fn(() => Promise.resolve({ data: 3 }))
// }))

import { shallow } from 'vue-test-utils'
import Form from '../src/components/Form'
import axios from 'axios'

describe('Form.test.js', () => {
  let cmp

  beforeEach(() => {
    cmp = shallow(Form)
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
      cmp.vm.inputValue = 'Yoo'
      expect(cmp.vm.reversedInput).toBe('Yoo')
      expect(axios.get).not.toBeCalled()
    })

    it('returns the reversed string if reversed property is true', () => {
      cmp.vm.inputValue = 'Yoo'
      cmp.setProps({ reversed: true })
      expect(cmp.vm.reversedInput).toBe('ooY')
    })
  })
})
