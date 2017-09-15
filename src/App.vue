<template>
  <div id="app">
    <MessageList>
      <header slot="header">
        Awesome header
      </header>
      <Message @message-clicked="handleMessageClick" :message="message" v-for="message in messages" :key="message" />
    </MessageList>
  </div>
</template>

<script>
import MessageList from 'components/MessageList'
import Message from '@/components/Message'

export default {
  name: 'app',
  data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),
  methods: {
    handleMessageClick(message) {
      console.log(message)
    }
  },
  components: {
    MessageList,
    Message
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
