<template>
  <div>
    event id: {{ $route.params.id }}
  </div>
</template>

<script setup>

const nuxt = useNuxtApp()

const route = useRoute();
console.log(route.params.id)

</script>