<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <section>
    <card title="Test title" subtitle="test subtitle" padding>
      <section class="bg-gray">
        <div class="padding">
          <!-- email -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input">
              <span class="icon is-small is-left">
              <i class="mdi mdi-email"></i>
            </span>
            </div>
            <p class="help is-danger">error</p>
          </div>
          <!-- pass -->
          <div class="field">
            <div class="control has-icons-left has-icons-right">
              <input class="input">
              <span class="icon is-small is-left">
              <i class="mdi mdi-fingerprint"></i>
            </span>
            </div>
            <p class="help is-danger">error</p>
          </div>
        </div>
      </section>

      <template v-slot:footer>
        <section class="level padding">
          <div class="level-left">
            <label class="checkbox">
              <input type="checkbox">
              Remember me
            </label>
          </div>
          <div class="level-right">
            <button class="button is-success is-small">login</button>
          </div>
        </section>
      </template>
    </card>
  </section>
</template>

<script>
export default {
  layout: 'hero',
  name: 'Login',

  data: () => ({
    email: '',
    password: ''
  })
}
</script>
