<template>
  <i
    class="m-icon"
    :class="'m-icon-'+name"
  >
  </i>
</template>

<script>
export default {
  name: "MIcon",
  props: {
    svg: {
      type: Boolean,
      default: false
    },
    name: String,
  }
};
</script>


<style lang="less">
.m-icon {
}
</style>
