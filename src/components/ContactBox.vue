<template>
  <div :class="{ selected: selected }" @click="handleClick">
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "surname", "selected"],
  computed: {
    fullName() {
      return `${this.name}, ${this.surname}`;
    }
  },
  methods: {
    handleClick() {
      this.$emit("contact-click", this.id);
    }
  }
};
</script>
