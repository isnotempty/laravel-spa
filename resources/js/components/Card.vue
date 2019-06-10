<template>
  <section class="card">
    <header :class="{ 'padding' : padding }">
      <section v-if="title">
        <h1 class="title">{{ title }}</h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
      </section>
      <slot name="header" />
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <slot name="footer" />
    </footer>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    subtitle: String,
    padding: Boolean
  }
}
</script>
