<template>
    <button :class="classes" @click.prevent>
        <slot>Кнопка</slot>
    </button>
</template>

<script>
export default {
    name: 'my-button',
    data() {
        return {
            classes: {
                btn: true,
                ['btn__'+this.btnType]: true
            }
        }
    },
    props: {
        btnType: {
            type: String,
            default: 'text'
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    font-family: 'Lab Grotesque';
    font-weight: 500;
    color: #fff;
    border-radius: 6px;
    background: none;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    line-height: 24px;
    height: 56px;
    margin: auto;
    &__text {
        color: #EA0029;
        font-size: 14px;
        line-height: 24px;
        height: initial;
        border-radius: 0;
        padding: 0;
        &:hover {
            color: #F53A31;
        }
    }
    &__fill {
        background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
        box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
        &:hover {
            background: #EA0029;
        }
        &:disabled {
            background: #BEC5CC;
            box-shadow: none;
        }
    }
    &__white {
        border: 1px solid #fff;
        &:hover {
            color: #000;
            background: #fff;
        }
        &:disabled {
            background: #BEC5CC;
            color: #fff;
            border: none;
        }
    }
}

@media (max-width: 453px) {
    .btn {
        height: 40px;
        &__fill, &__white {
            font-size: 12px;
            line-height: 16px;
        }
    }
}
</style>