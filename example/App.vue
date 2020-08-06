<template>
  <div
    :id="$options.name"
    :ref="$options.name"
  >
    app
    <drag-box />
    <img-lazy-load />
  </div>
</template>

<script>
import DragBox from "./components/drag-box";
import ImgLazyLoad from "./components/img-lazy-load";
export default {
  name: "app",
  components: {
    DragBox,
    ImgLazyLoad,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less">
@name: app;
.@{name} {
}
</style>
