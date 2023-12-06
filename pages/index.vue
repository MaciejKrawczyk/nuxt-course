<template>
  <div>
    <Profile/>
    index page
  </div>
</template>


<script setup>
definePageMeta({
  middleware: 'auth2'
})

const {sayHello} = useUtils()
sayHello()

</script>
