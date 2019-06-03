<template>
  <span
    class="m-text"
    :class="{'m-text-disabled':disabled}"
  >
    <template v-if="disabled">
      <slot></slot>
    </template>
    <template v-else-if="code">
      <code>
        <slot></slot>
      </code>
    </template>
    <template v-else-if="underline">
      <u>
        <slot></slot>
      </u>
    </template>
    <template v-else-if="del">
      <del>
        <slot></slot>
      </del>
    </template>
    <template v-else-if="strong">
      <strong>
        <slot></slot>
      </strong>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </span>
</template>

<script>
export default {
  name: "MText",
  props: {
    disabled: Boolean,
    code: Boolean,
    underline: Boolean,
    del: Boolean,
    strong: Boolean
  }
};
</script>


<style lang="less">
.m-text {
  &.m-text-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    user-select: none;
  }
}
</style>
