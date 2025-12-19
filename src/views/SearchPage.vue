<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light" />
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
        <ion-buttons slot="end" class="ion-margin-end">
          <ion-button>
            <ion-icon slot="icon-only" :icon="searchOutline" />
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" :icon="notificationsOutline" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
        <div class="desktop-layout">
            <div class="header">
                <h2>{{ pageTitle }}</h2>

                <ion-button 
                v-if="showCreateButton" 
                color="primary"
                @click="goToCreate"
                >
                Create New {{ capitalizedType }}
                </ion-button>
            </div>

            <component :is="selectedGrid" />  
        </div>
        <div class="mobile-layout">
            

            <component :is="selectedGrid" />
            <ion-fab v-if="showCreateButton" class="fab-fixed">
                <ion-fab-button @click="goToCreate">
                    <ion-icon :icon="addOutline"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </div>
    </ion-content>
  </ion-page>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonTitle, IonMenuButton, IonIcon, IonFab, IonFabButton } from '@ionic/vue'
import { searchOutline, notificationsOutline, addOutline } from 'ionicons/icons'

import courses from '@/components/search/courses.vue'
import projects from '@/components/search/projects.vue'
import publications from '@/components/search/publications.vue'
import groups from '@/components/search/groups.vue'
import users from '@/components/search/users.vue'

const route = useRoute()
const router = useRouter()

const type = computed(() => route.params.type)

const gridMap = {
  courses: courses,
  publications: publications,
  projects: projects,
  groups: groups,
  users: users
}

const selectedGrid = computed(() => gridMap[type.value] || null)

const capitalizedType = computed(() => {
  if (!type.value) return ''

  const singular = type.value.endsWith('s') ? type.value.slice(0, -1) : type.value
  return singular.charAt(0).toUpperCase() + singular.slice(1)
})

const pageTitle = computed(() => (type.value ? `${capitalizedType.value} Search` : 'Search Items'))

const showCreateButton = computed(() =>
  ['courses', 'publications', 'projects', 'groups'].includes(type.value)
)

function goToCreate() {
  if (type.value === 'groups') {
    router.push('/create-group')
    return
  }
  router.push(`/create-entity/${type.value}`)
}
</script>

<style scoped>
    
.desktop-layout {
  display: none;
}
.mobile-layout {
  display: block;
}

@media (min-width: 768px) {
  .desktop-layout {
    display: block;
  }
  .mobile-layout {
    display: none;
  }
}
.fab-fixed {
  position: fixed !important;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
}
</style>
