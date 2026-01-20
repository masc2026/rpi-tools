import './assets/tailwind.css';
import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const app = createApp(App);
const head = createHead();

// Globale Registrierung der Komponenten
app.component('TabGroup', TabGroup)
app.component('TabList', TabList)
app.component('TabUlator', Tab)
app.component('TabPanels', TabPanels)
app.component('TabPanel', TabPanel)

app.use(head);
app.mount('#app');