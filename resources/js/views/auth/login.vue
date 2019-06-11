<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <section>
    <card title="Test title" subtitle="test subtitle" :message="message" padding>
      <section class="bg-gray">
        <div class="padding">
          <!-- email -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input v-model="form.email" class="input" :class="{ 'is-danger' : form.errors.has('email') }">
              <span class="icon is-small is-left">
                <i class="mdi mdi-email" />
              </span>
            </div>
            <p v-if="form.errors.has('email')" class="help is-danger">
              {{ form.errors.get('email') }}
            </p>
          </div>
          <!-- pass -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input v-model="form.password" class="input" :class="{ 'is-danger' : form.errors.has('password') }">
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
              <input v-model="form.remember" type="checkbox">
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
    remember: true,
    message: {
      message: null,
      type: 'is-success'
    }
  }),

  methods: {
    async login () {
      await this.form.post('/api/login')
        .then(response => {
          console.log(response)
        })
        .catch(e => {
          this.message.type = 'is-danger'
          this.message.message = this.form.errors.get('error')
        })
    }
  }
}
</script>
