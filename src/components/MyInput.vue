<template>
  <label class="text" :class="{ error: error || parentError }">
      <slot>Текст</slot>
      <input type="text" class="text__input" :placeholder="placeholder" 
      :disabled="disabled"
      :value="modelValue"
      @blur="onBlur"
      @input="onInput"
      required
      v-money="modelValue !== null ? money : null"
      >
      <span v-show="error || parentError" class="error__text">Поле обязательно для заполнения</span>
  </label>
</template>

<script>
export default {
    name: 'my-input',
    data() {
        return {
            placeholder: 'Введите данные',
            error: false,
            money: {
                thousands: ' ',
                prefix: '',
                suffix: ' ₽',
                precision: 0
            }
        }
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        modelValue: [String, Number],
        parentError: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onInput(e) {
            this.$emit('update:modelValue', e.target.value)
            this.error = false
        },
        onBlur(e) {
            if (!e.target.value) {
                this.error = true
                this.placeholder = ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.text {
    font-size: 14px;
    line-height: 24px;
    display: block;
    &__input {
        border: 1px solid #DFE3E6;
        border-radius: 3px;
        display: block;
        color: #000;
        font-family: 'Lab Grotesque';
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        caret-color: #808080;
        padding: 8px 10px;
        width: 100%;
        margin-top: 8px;
        &:focus {
            outline: none;
        }
        &:hover {
            border: 1px solid #000;
        }
        &:disabled {
            border: 1px solid #808080;
            background: none;
        }
    }
}

.error {
    input {
        border: 1px solid #EA0029;
    }
    &__text {
        font-size: 10px;
        line-height: 12px;
        color: #EA0029;
    }
}
</style>