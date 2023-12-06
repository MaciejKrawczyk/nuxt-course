<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template>


<script setup lang="ts">

import {useCounter} from "~/composables/states";

const counter = useCounter()

</script>