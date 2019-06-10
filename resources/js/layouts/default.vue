<template>
  <div class="main-layout">
    <div class="container">
      <navbar />
      <child />
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
