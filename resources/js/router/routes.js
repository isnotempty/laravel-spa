function page (path) {
  return () => import(`~/views/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') }
]
