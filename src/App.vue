<template>
  <div id="app">
    <MessageList :messages="messages"/>
  </div>
</template>

<script>
import MessageList from './components/MessageList'

export default {
  name: 'app',
  data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),
  components: {
    MessageList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
