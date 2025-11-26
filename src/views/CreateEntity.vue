<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>Create</ion-title>
        <ion-buttons slot="end" class="ion-margin-end">
            <ion-button>
              <ion-icon slot="icon-only" :icon="searchOutline"></ion-icon>
            </ion-button>
            <ion-button>
              <ion-icon slot="icon-only" :icon="notificationsOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
      </ion-toolbar>
    </ion-header>
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
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton, IonIcon } from '@ionic/vue'
import { useRoute } from 'vue-router'
import { searchOutline,  notificationsOutline} from 'ionicons/icons';

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
