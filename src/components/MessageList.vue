<template>
    <ul>
        <Message :message="message" v-for="message in messages"/>
    </ul>
</template>

<script>
import Message from './Message'

export default {
  props: ['messages'],
  components: {
    Message
  }
}
</script>
