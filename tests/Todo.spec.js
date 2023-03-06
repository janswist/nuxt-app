import { mount } from'@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Todo from '../components/Todo.vue'

describe("Todo.vue", () => {
  const wrapper = mount(Todo)

  it("should render app title correctly", () => {
    const headerMsg = 'Todo list'

    expect(wrapper.find('h1').text()).toEqual(headerMsg)
  })
  
  it("should add new todo item correctly", async () => {
    const input = wrapper.find('input')
    await input.setValue('Groceries')
    expect(input.element.value).toBe('Groceries')

    await wrapper.find('input').trigger('submit')
    expect(wrapper.emitted()).toHaveProperty('submit')
  })
  
  it('should use formatDate function properly', () => {
    const providedDate = wrapper.vm.formatDate('2023-02-15T17:07:44.311Z')
    expect(providedDate).toBe('15/2/2023')
  })

  it('should have array type of storage', () => {
    const storage = wrapper.vm.storage
    expect(storage).toBeTypeOf('string')

    const todoList = wrapper.vm.todoList
    expect(todoList).toBeTypeOf('object') // array actually
    expect(todoList.length).toBeTypeOf('number') // to make sure it's array
  })

  it('should add and remove item from the list', () => {
    const todoList =          wrapper.vm.todoList,
          listLengthInitial = todoList.length,
          addItem =           wrapper.vm.addTodoItem,
          removeItem =        wrapper.vm.removeTodoItem
    
    addItem({target: { value: 'test item'}})
    expect(todoList.length - listLengthInitial).toBe(1)

    removeItem(0)
    expect(todoList.length).toBe(0)
  })
})