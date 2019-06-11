<template>
  <section class="card">
    <header :class="{ 'padding' : padding }">
      <section v-if="title">
        <h1 class="title">
          <i v-if="icon" :class="icon" />
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </section>
      <slot name="header" />
      <article v-if="message.message" class="message margin-top" :class="message.type">
        <div class="message-body">
          {{ message.message }}
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
    message: Object,
    icon: String
  }
}
</script>
