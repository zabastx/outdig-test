<template>
  <div class="popup__bg">
    <form class="popup">
        <button type="button" class="popup__btn" @click.prevent="$emit('close')"></button>
        <h1>Налоговый вычет</h1>
        <p class="description">
            Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
        </p>
        <my-input v-model.lazy="salary" :parentError="error">Ваша зарплата в месяц</my-input>
        <my-button @click="calc">Рассчитать</my-button>
        <div class="result">
            <p>
                Итого можете внести в качестве досрочных:
            </p>
            <transition-group name="list">
                <my-checkbox v-for="item in payArr" :key="item.id">
                    <span>{{item.value}} рублей </span>
                    <span class="grey">{{inYear(item.id+1)}}</span>
                    <hr>
                </my-checkbox>
            </transition-group>
        </div>
        <div class="tags">
            <span class="what">
                Что уменьшаем?
            </span>
            <button type="button" :class="{ tag: true, active: tagged == 1 }" @click="tagged = 1">Платёж</button>
            <button type="button" :class="{ tag: true, active: tagged == 2 }" @click="tagged = 2">Срок</button>
        </div>
        <my-button btn-type="fill">Добавить</my-button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'my-popup',
    emits: ['close'],
    data() {
        return {
            tagged: 1,
            salary: null,
            error: false,
            sum: 260000,
            payArr: []
        }
    },
    methods: {
        calc() {
            if (!this.salary) return this.error = true
            let valArr = this.salary.split(' ')
            valArr.pop()
            const result = Number(valArr.join(''))
            this.payArr = this.payments(result * 12 * 0.13)
        },
        payments(val) {
            let arr = []
            let paid = 0
            for (let id = 0; ; id++) {
                if (paid + val >= this.sum) {
                    arr.push({
                        id,
                        value: this.sum - paid
                    })
                    break
                }
                arr.push({
                        id,
                        value: val
                    })
                paid += val
            }
            return arr
        },
        inYear(year) {
            const years = [
                `в ${year}-ый год`,
                `во ${year}-ой год`,
                `в ${year}-ий год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ой год`,
                `в ${year}-ой год`,
                `в ${year}-ой год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`,
                `в ${year}-ый год`
            ]
            return years[year-1]
        }
    },
    watch: {
        salary() {
            this.error = !!!this.salary
        }
    }
}
</script>

<style lang="scss" scoped>
hr {
    color: #DFE3E6;
    border: none;
    border-top: 1px solid;
}

.grey {
    color: #808080;
}

.popup {
    max-width: 552px;
    width: 100%;
    padding: 30px;
    z-index: 11;
    background: #fff;
    position: relative;
    border-radius: 30px;
    margin: auto;
    animation: fade 200ms ease-in forwards;
    &__btn {
        border: none;
        background: url('../assets/close.svg');
        position: absolute;
        top: 25px;
        right: 25px;
        height: 18px;
        width: 18px;
        padding: 0;
        z-index: 12;
    }
    h1 {
        margin: 0;
    }
    .description {
        color: #808080;
        margin: 16px auto 24px;
    }
    &__bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9;
        background-color: #b2b2b2;
        display: flex;
        place-items: center;
        min-height: 100vh;
        height: max-content;
    }
}

.tags {
    margin-top: 28px;
    margin-bottom: 40px;
    * {
        display: inline-block;
    }
    *:first-child {
        margin-right: 32px;
    }
    *:last-child {
        margin-left: 16px;
    }
}

.tag {
    background: #EEF0F2;
    border-radius: 50px;
    padding: 6px 12px;
    border: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    &:hover {
        background: #DFE3E6;
    }
}

.active {
    background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
    color: #fff;
    &:hover {
        background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
    }
}

.btn__fill {
    width: 100%;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 300ms ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}


@keyframes fade {
    0% {
        transform: scale(0.7);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .popup {
        max-width: 453px;
    }
}

@media (max-width: 453px) {
    .popup {
        border-radius: 0;
        padding: 16px;
        position: relative;
        min-height: 100vh;
        .btn__fill {
            width: calc(100% - 32px);
            position: absolute;
            bottom: 16px;
        }
        .what {
            display: block;
            margin: 24px auto;
        }
        .tags {
            margin-bottom: 80px;
        }
    }
}
</style>