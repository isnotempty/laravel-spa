function page (path) {
  return () => import(`~/views/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('welcome.vue') },

  { path: '/home', name: 'home', component: page('home.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') }
]
