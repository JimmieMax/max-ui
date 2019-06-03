<template>
  <button
    class="m-button"
    :class="typeClass"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MButton",
  props: {
    type: String
  },
  computed: {
    typeClass() {
      let typeClass = "";
      switch (this.type) {
        case "primary":
          typeClass = "m-button-primary";
          break;
        case "disabled":
          typeClass = "m-button-disable";
          break;
      }
      return typeClass;
    }
  }
};
</script>

<style lang="less">
.m-button {
  &.m-button-disable {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  }
  &.m-button-primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
  }
}
</style>


