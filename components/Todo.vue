<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'vue-todo'

function formatDate(date: Date): string {
  date = new Date(date)
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}

const storage = process.client
  ? (localStorage.getItem(STORAGE_KEY) || '[]')
  : '[]'

const todoList = ref(JSON.parse(storage))

function addTodoItem(e: Event){
  const content = (e.target as HTMLInputElement).value.trim()
  if (content) {
    todoList.value.push({
      id: Date.now(),
      createdAt: new Date(),
      content
    });
    
    (e.target as HTMLInputElement).value = '';
  }
}

function removeTodoItem(index: number){
  todoList.value.splice(index, 1)
}

watchEffect(() => {
  if(process.client){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList.value))
  }
})
</script>

<template lang="pug">
.container
  .inner-box
    h1 Todo list

    input(
      autofocus
      name="newtodo"
      placeholder="What's to do?"
      @keyup.enter="addTodoItem"
    )
    
    ClientOnly
      ul
        li(v-for="(item, index) in todoList" :key="item + index")
          .item
            span.item-name
              | {{ item.content }}
            
            span.delete-button(@click="removeTodoItem(index)")
              | &times;
          br
          span.todo-date {{ formatDate(item.createdAt) }}<br>

</template>

<style scoped lang="sass">
*
  box-sizing: border-box

.container 
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

.inner-box
  min-width: 250px
  max-width: 400px

h1
  font-weight: 500
  font-size: 2.6rem
  top: -10px
  text-align: center
  @media (min-width: 1024px)
    text-align: left

input
  width: 100%
  padding: 10px 25px
  font-size: 25px
  text-align: left

.todo-date
  font-size: 14px
  color: grey

ul
  padding: 0

  li
    padding: 10px 0
    list-style-type: none

    .item
      display: flex
      justify-content: space-between
    
    .item-name
      font-size: 30px
    
    .delete-button
      font-size: 30px
      cursor: pointer

    &:not(:last-child)
      border-bottom: 1px solid lightgray
</style>
