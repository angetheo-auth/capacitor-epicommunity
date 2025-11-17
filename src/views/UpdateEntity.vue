<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>Update</ion-title>
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
        <ion-button color="primary">Update</ion-button>
      </div>

      <component :is="selectedForm" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { computed } from 'vue'
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton, IonIcon } from '@ionic/vue'
import { useRoute } from 'vue-router'

import CourseUpdate from '@/components/CourseUpdate.vue'
import PublicationUpdate from '@/components/PublicationUpdate.vue'
import ProjectUpdate from '@/components/ProjectUpdate.vue'
import PositionUpdate from '@/components/PositionUpdate.vue'

const route = useRoute()

const type = route.params.type

const formMap = {
  course: CourseUpdate,
  publication: PublicationUpdate,
  project: ProjectUpdate,
  position: PositionUpdate
}

const selectedForm = computed(() => formMap[type] || null)

const pageTitle = computed(() => {
  if (!type) return 'Update Item'
  return `Update ${type.charAt(0).toUpperCase() + type.slice(1)}`
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
