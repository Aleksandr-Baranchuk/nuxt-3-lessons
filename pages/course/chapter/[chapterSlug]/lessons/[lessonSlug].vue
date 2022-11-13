<template>
  <div>
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lessonTitle }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <a
          v-if="lesson.sourceUrl"
          class="font-normal text-md text-gray-500"
          :href="lesson.sourceUrl"
      >
        Download Source Code
      </a>
      <a
          v-if="lesson.downloadUrl"
          class="font-normal text-md text-gray-500"
          :href="lesson.downloadUrl"
      >
        Download Video
      </a>
    </div>
    <video-player
        v-if="lesson.videoId"
        :videoId="lesson.videoId"
    />
    <p>{{ lesson.text }}</p>
    <lesson-complete-button :model-value="isLessonComplete" @update:modelValue="onToggleLessonComplete"/>
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

const chapter = computed(() => {
  return course.chapters.find(
      (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value.lessons.find(
      (lesson) => lesson.slug === route.params.lessonSlug
  );
});

const lessonTitle = computed(() => lesson.value.title)

useHead({
  title: lessonTitle
})

const progress = useLocalStorage('lesson-progress', []);

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value.number - 1]) {
    return false;
  }

  if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
    return false;
  }

  return progress.value[chapter.value.number - 1][lesson.value.number - 1];
});

const onToggleLessonComplete = () => {
  if (!progress.value[chapter.value.number - 1]) {
    progress.value[chapter.value.number - 1] = [];
  }

  progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value;
};

</script>
