<template>
  <div
      class="p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center"
  >
    <div class="prose mb-12">
      <h1>
        <span class="font-medium">
          Course:
          <span class="font-bold">Mastering Nuxt 3</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
          class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <!-- All the lessons for the course listed here -->


        <ul class="text-sm space-y-1 mb-4 flex flex-col max-w-[200px]">
          <li v-for="chapter in course.chapters" :key="chapter.slug">
            <h4>
              {{chapter.title}};
            </h4>
            <br>
            Lessons:
            <ol>
              <li v-for="lesson in chapter.lessons" :key="lesson.slug">
                <nuxt-link
                  :to="lesson.path"
                  class="hover:underline no-underline"
                  :class="lesson.path === $route.fullPath ? 'text-blue-500': 'text-gray-600'"
                >
                  {{lesson.title}}
                </nuxt-link>
              </li>
            </ol>
          </li>
        </ul>
      </div>

      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <nuxt-page/>
      </div>
    </div>
  </div>
</template>

<script setup>
const course = useCourse();
</script>