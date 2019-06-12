<template>
  <section>
    <div class="level">
      <div class="level-left">
        Dashboard
      </div>
      <div class="level-right">
        <ul class="navbar-menu">
          <li class="navbar-item">
            <a href="#" @click.prevent="logout">
              Logout
              <span class="icon">
                <i class="mdi mdi-arrow-right" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
