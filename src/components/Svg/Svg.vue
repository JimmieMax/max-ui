<template>
  <img
    :class="['m-svg',`m-svg-${name}`]"
    :src="src"
    :width="width"
    :height="height"
  />
</template>

<script>
import svgList from "./svg-list";
export default {
  name: "MSvg",
  props: {
    name: String,
    width: {
      type: Number,
      default: 20
    },
    height: {
      type: Number,
      default: 20
    }
  },
  computed: {
    src() {
      return svgList[this.name];
    }
  }
};
</script>
