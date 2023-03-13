<template>
  <div class="prose container mx-auto my-2">
    <h1>
      Hello, world!
    </h1>
    <nuxt-link to="/course" class="rounded text-white font-bold py-2 px-4 cursor-pointer no-underline bg-green-500">
      GO TO COURSE
    </nuxt-link>
    <p class="text-red-400" v-if="error">
      {{ error }}
    </p>
    <div>
      <h2>Users: </h2>
      <pre>
        {{ data }}
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const {data, error} = useFetch('/api/users');
</script>
