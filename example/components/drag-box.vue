<template>
  <div
    :class="$options.name"
    :ref="$options.name"
  >
    <m-drag-box>
      Jimmie
      <template #ghost>Jimmie Max</template>
    </m-drag-box>
    <m-drag-box>Jane</m-drag-box>
  </div>
</template>

<script>
export default {
  name: "drag-box",
  data() {
    return {};
  }
};
</script>

<style lang="less">
@name: drag-box;
.@{name} {
}
</style>
