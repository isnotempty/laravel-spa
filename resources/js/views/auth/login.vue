<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <section>
    <card title="Test title" subtitle="test subtitle" padding>
      <section class="bg-gray">
        <div class="padding">
          <!-- email -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input" v-model="form.email" :class="{ 'is-danger' : form.errors.has('email') }">
              <span class="icon is-small is-left">
                <i class="mdi mdi-email" />
              </span>
            </div>
            <p class="help is-danger" v-if="form.errors.has('email')">
              {{ form.errors.get('email') }}
            </p>
          </div>
          <!-- pass -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input" v-model="form.password" :class="{ 'is-danger' : form.errors.has('password') }">
              <span class="icon is-small is-left">
                <i class="mdi mdi-fingerprint" />
              </span>
            </div>
            <p class="help is-danger" v-if="form.errors.has('password')">
              {{ form.errors.get('password') }}
            </p>
          </div>
        </div>
      </section>

      <template v-slot:footer>
        <section class="level padding">
          <div class="level-left">
            <label class="checkbox">
              <input type="checkbox" v-model="form.remember">
              Remember me
            </label>
          </div>
          <div class="level-right">
            <button class="button is-success is-small" @click="login">
              login
            </button>
          </div>
        </section>
      </template>
    </card>
  </section>
</template>

<script>
import Form from 'vform'

export default {
  layout: 'hero',
  name: 'Login',

  data: () => ({
    form: new Form({
      email: '',
      password: '',
      remember: true
    })
  }),

  methods: {
    login () {
      console.log('test')
      this.from.post('/api/login')
        .then(({ data }) => { console.log(data) })
    }
  }
}
</script>
