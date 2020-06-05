<template>
  <div
    :id="$options.name"
    :ref="$options.name"
  >
    app
    <drag-box /> 
  </div>
</template>

<script>
import DragBox from './components/drag-box';
export default {
  name: "app",
  components: {
      DragBox
  },
  data() {
    return {
        
    };
  }
};
</script>

<style lang="less">
@name: app;
.@{name} {
}
</style>
