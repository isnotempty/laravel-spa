import Vue from 'vue'
import Card from './Card'
import Child from './Child'

[
  Card,
  Child
].forEach(Component => {
  Vue.component(Component.name, Component)
})
