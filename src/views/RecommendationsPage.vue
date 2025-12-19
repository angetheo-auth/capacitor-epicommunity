<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>Recommendations</ion-title>
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
    <ion-content class="ion-padding">
      <div class="header">
        <h2>{{ pageTitle }}</h2>
      </div>

      <component :is="selectedComponent" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { computed } from 'vue'
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton, IonIcon } from '@ionic/vue'
import { useRoute } from 'vue-router'
import { searchOutline,  notificationsOutline} from 'ionicons/icons';

import users from '@/components/recommendations/users.vue'
import courses from '@/components/recommendations/courses.vue'
import publications from '@/components/recommendations/publications.vue'    
import groups from '@/components/recommendations/groups.vue'

const route = useRoute()

const type = route.params.type

const compMap = {
  courses: courses,
  publications: publications,
  groups: groups,
  users: users
}

const selectedComponent = computed(() => compMap[type] || null)

const pageTitle = computed(() => {
  if (!type) return 'Recommendations'
  return `Recommended ${type.charAt(0).toUpperCase() + type.slice(1)}`
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
