<template>
  <section class="card">
    <header :class="{ 'padding' : padding }">
        <h1 v-if="title" class="title">
          <i v-if="icon" :class="icon" />
          {{ title }}
        </h1>
        <h2 v-if="title && subtitle" class="subtitle">
          {{ subtitle }}
        </h2>
      <slot name="header" />
      <article v-if="errors.has('error')" class="message margin-top is-danger">
        <div class="message-body">
          {{ errors.get('error') }}
        </div>
      </article>
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
    padding: Boolean,
    errors: Object,
    icon: String
  }
}
</script>
