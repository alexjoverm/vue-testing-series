<template>
    <ul>
        <Message
          @message-clicked="handleMessageClick"
          :message="message"
          v-for="message in messages"
          :key="message"/>
    </ul>
</template>

<script>
import Message from './Message'

export default {
  name: 'MessageList',
  props: ['messages'],
  methods: {
    handleMessageClick(message) {
      console.log(message)
    }
  },
  components: {
    Message
  }
}
</script>
