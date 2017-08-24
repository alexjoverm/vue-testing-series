<template>
    <li
      style="margin-top: 10px"
      class="message"
      @click="handleClick">
        {{message}}
    </li>
</template>

<script>
  export default {
    name: 'Message',
    props: ['message'],
    methods: {
      handleClick() {
        console.log('lalala')
        this.$emit('message-clicked', this.message)
      }
    }
  }
</script>
