<!--
 * @Desc: DragBox
 * @Author: Jimmie
 * @Date: 2020-01-22 11:00:11
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 -->
<template>
  <div
    class="m-drag-box"
    draggable="true"
    @dragstart="handleDragStart"
    @dragenter="handleDragEnter"
    @dragend="handleDragEnd"
  >
    <div ref="content" class="m-drag-box-content">
      <slot></slot>
    </div>
    <div ref="ghost" class="m-drag-box-ghost">
      <slot name="ghost"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MDragBox",
  props: {
    name: String
  },
  methods: {
    handleDragStart(event) {
      const { ghost, content} = this.$refs;
      const _ghost = ghost.innerHTML? ghost : content
      event.dataTransfer.setDragImage(_ghost, 0, 0);
      window.console.log(event);
    },
    handleDragEnter(event) {
      window.console.log(event);
    },
    handleDragEnd(event) {
      window.console.log(event);
    }
  }
};
</script>

<style lang="less">
@component: m-drag-box;
.@{component} {
  .@{component}-ghost {
    position: fixed;
    top: 0;
    transform: translateY(-100%);
  }
}
</style>
