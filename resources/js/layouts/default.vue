<template>
  <div class="main-layout">
    <div class="container">
      <navbar />
      <div class="columns">
        <div class="column is-one-fifth">
          Sidebar
        </div>
        <div class="column">
          <child />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar'
export default {
  name: 'Default',
  components: { Navbar }
}
</script>
