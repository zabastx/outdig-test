<template>
  <label class="check">
      <input class="check__input" type="checkbox" :disabled="disabled">
      <span class="check__box"></span>
      <slot />
  </label>
</template>

<script>
export default {
    name: 'my-checkbox',
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.check {
    padding-left: 30px;
    display: block;
    cursor: url('../assets/pointer.svg') 6 0, pointer;
    line-height: 24px;
    &:hover &__box {
        border: 1px solid #000;
    }
    &:hover &__input:checked + &__box {
        border: none;
    }
    &__input {
        position: absolute;
        appearance: none;
        &:checked + .check__box {
            background-image: url('../assets/checkbox_click.svg');
            border: none;
        }
        &:disabled + .check__box {
            border: none;
            background-image: url('../assets/checkbox_disabled.svg');
        }
    }
    &__box {
        position: absolute;
        margin-left: -30px;
        border: 1px solid #DFE3E6;
        border-radius: 6px;
        width: 20px;
        height: 20px;
    }
}
</style>