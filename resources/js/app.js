import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import App from '~/components/App'

import '~/plagins'
import '~/components'

/* eslint-disable no-new */
new Vue({
  store,
  router,
  ...App
})
