<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <section>
    <card
      title="Login"
      :errors="form.errors"
      icon="mdi mdi-fingerprint"
      padding
    >
      <section class="bg-gray">
        <div class="padding">
          <!-- email -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                name="email"
                type="email"
                v-model="form.email"
                :class="{ 'is-danger' : form.errors.has('email') }"
              >
              <span class="icon is-small is-left">
                <i class="mdi mdi-mail-ru" />
              </span>
            </div>
            <p v-if="form.errors.has('email')" class="help is-danger">
              {{ form.errors.get('email') }}
            </p>
          </div>
          <!-- pass -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                name="password"
                type="password"
                v-model="form.password"
                :class="{ 'is-danger' : form.errors.has('password') }"
              >
              <span class="icon is-small is-left">
                <i class="mdi mdi-fingerprint" />
              </span>
            </div>
            <p v-if="form.errors.has('password')" class="help is-danger">
              {{ form.errors.get('password') }}
            </p>
          </div>
        </div>
      </section>

      <template v-slot:footer>
        <section class="level padding">
          <div class="level-left">
            <label class="checkbox">
              <input v-model="remember" type="checkbox">
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
      password: ''
    }),
    remember: true
  }),

  methods: {
    async login () {
      const { data } = await this.form.post('/api/login')


      // this.$store.dispatch('auth/saveToken', {
      //   user: response.data.data,
      //   token: response.data.meta.token,
      //   remember: this.remember
      // })
      // this.$router.push({ name: 'home' })
    }
  }
}
</script>
