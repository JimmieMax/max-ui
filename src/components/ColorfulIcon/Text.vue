<template>
  <object
    class="m-colorful-icon"
    :data="name+'.svg'"
    type="image/svg+xml"
  >
  </object>
</template>

<script>
export default {
  name: "MColorfulIcon",
  props: {
    name: String,
  }
};
</script>


<style lang="less">
.m-colorful-icon {
  
}
</style>
