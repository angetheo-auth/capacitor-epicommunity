<template>
  <ion-page>
    <ion-content>
      <div class="header">
        <h2>{{ pageTitle }}</h2>
        <ion-button color="primary">Create</ion-button>
      </div>

      <component :is="selectedForm" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { computed } from 'vue'
import { IonPage, IonContent, IonButton } from '@ionic/vue'
import { useRoute } from 'vue-router'

import CourseForm from '@/components/CourseForm.vue'
import PublicationForm from '@/components/PublicationForm.vue'
import ProjectForm from '@/components/ProjectForm.vue'
import PositionForm from '@/components/PositionForm.vue'

const route = useRoute()

const type = route.params.type

const formMap = {
  course: CourseForm,
  publication: PublicationForm,
  project: ProjectForm,
  position: PositionForm
}

const selectedForm = computed(() => formMap[type] || null)

const pageTitle = computed(() => {
  if (!type) return 'Create Item'
  return `Create New ${type.charAt(0).toUpperCase() + type.slice(1)}`
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
}
</style>
