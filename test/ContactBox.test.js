import { mount } from 'vue-test-utils'
import ContactBox from '../src/components/ContactBox'

const createContactBox = (id, name, surname, selected) =>
  mount(ContactBox, {
    propsData: { id, name, surname, selected }
  })

describe('ContactBox.test.js', () => {
  // it('fullName should be the combination of name + surname', () => {
  //   const cmp = createContactBox(0, 'John', 'Doe', false)
  //   expect(cmp.vm.fullName).toBe('John Doe')
  // })

  // it('should have a selected class when the selected prop is true', () => {
  //   const cmp = createContactBox(0, 'John', 'Doe', true)
  //   expect(cmp.classes()).toContain('selected')
  // })

  it('fullName should be the combination of name + surname', () => {
    const cmp = createContactBox(0, 'John', 'Doe', false)
    expect(cmp.element).toMatchSnapshot()
  })

  it('should have a selected class when the selected prop is true', () => {
    const cmp = createContactBox(0, 'John', 'Doe', true)
    expect(cmp.element).toMatchSnapshot()
  })

  it('should emit a contact-click with its id when the component is clicked', () => {
    const cmp = createContactBox(0, 'John', 'Doe', false)
    cmp.trigger('click')

    const payload = cmp.emitted('contact-click')[0][0]
    expect(payload).toBe(0)
  })
})
