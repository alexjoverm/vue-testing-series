<template>
    <li style="padding-top: 10px" class="message">{{message}}</li>
</template>

<script>
  export default {
    name: 'Message',
    props: ['message']
  }
</script>
