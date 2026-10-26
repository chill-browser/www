import '@fontsource-variable/instrument-sans'
import './app.css'
import { mount } from 'svelte'
import Welcome from './Welcome.svelte'

const app = mount(Welcome, {
  target: document.getElementById('app')!,
})

export default app
