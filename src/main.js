import { createApp } from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton.vue'
import MyCheckbox from './components/MyCheckbox.vue'
import MyInput from './components/MyInput.vue'
import MyPopup from './components/MyPopup.vue'
import money from 'v-money'

const app = createApp(App)

app.component(MyButton.name, MyButton)
app.component(MyCheckbox.name, MyCheckbox)
app.component(MyInput.name, MyInput)
app.component(MyPopup.name, MyPopup)
app.use(money)

app.mount('#app')
