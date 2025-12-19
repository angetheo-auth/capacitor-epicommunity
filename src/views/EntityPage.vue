<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light" />
        </ion-buttons>

        <ion-title />

        <ion-buttons slot="end">
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
      <ion-card>

        <ion-card-header>
          <ion-card-title>{{ entity.title }}</ion-card-title>
          <ion-card-subtitle>{{ entity.dateRange }}</ion-card-subtitle>

          <div class="entity-header">
            <img :src="entity.image" />
          </div>

          <ion-item lines="full">
            <p slot="start">
              Comments: {{ entity.comments }} · Views: {{ entity.views }}
            </p>
            <p slot="end">
              Endorsements: {{ entity.endorsements }}
            </p>
          </ion-item>
          <ion-buttons slot="end">
            <ion-button shape="round" fill="solid" color="medium">
              <ion-icon :icon="shareSocialOutline"></ion-icon>
            </ion-button>
            <ion-button shape="round" fill="solid" color="primary">
              <ion-icon :icon="shareOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-card-header>

        <ion-card-content>
          <component :is="entityComponent" :entity="entity" />

          <ion-item lines="none">
            <h2>{{ entity.demoComments.length }} Responses</h2>
          </ion-item>

          <ion-item lines="none">
            <ion-input placeholder="Post a comment...">
              <ion-icon slot="start" :icon="chatboxOutline"></ion-icon>
            </ion-input>
          </ion-item>

          <ion-list>
            <ion-item
              v-for="comment in entity.demoComments"
              :key="comment.id"
            >
              <ion-avatar>
                <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </ion-avatar>

              <ion-label class="ion-padding">
                <strong>{{ comment.user }}</strong>
                <p>{{ comment.time }}</p>
                {{ comment.text }}
                <ion-button fill="clear">Reply</ion-button>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>

      </ion-card>
    </ion-content>
  </ion-page>
  
</template>

<script setup>
import { IonContent, IonPage, IonHeader, IonItem, IonInput, IonLabel, IonAvatar, IonList, IonCardHeader, IonCardTitle, IonCardSubtitle, IonToolbar, IonButtons, IonButton, IonIcon, IonCard, IonCardContent, IonMenuButton, IonTitle } from '@ionic/vue'
import { searchOutline, notificationsOutline, shareOutline, shareSocialOutline, chatboxOutline } from 'ionicons/icons'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import CourseEntity from '@/components/entity/CourseEntity.vue'
import ProjectEntity from '@/components/entity/ProjectEntity.vue'
import PublicationEntity from '@/components/entity/PublicationEntity.vue'
import PositionEntity from '@/components/entity/PositionEntity.vue'

const route = useRoute()
const type = route.fullPath.split('/')[2]

const entityMap = {
  course: CourseEntity,
  project: ProjectEntity,
  publication: PublicationEntity,
  position: PositionEntity
}

const entities = {
  course: {
    title: 'Course #1 Title',
    dateRange: '05/05/2022 – Present',
    image: '/course-image.jpg',
    comments: '2',
    views: '1k',
    endorsements: '200',
    description: 'Lorem ipsum...',
    learningOutcomes: 'Lorem ipsum...',
    demoComments: [
      { id: 1, user: 'Pumpy Jack', time: '21 seconds ago', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
      { id: 2, user: 'Mary Sue', time: '1 hour ago', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' }
    ]
  },

  project: {
    title: 'Project #1 Title',
    dateRange: '01/01/2022 – 12/31/2022',
    image: '/project-image.jpg',
    comments: '4',
    views: '3k',
    endorsements: '150',
    description: 'Lorem ipsum...',
    demoComments: [
      { id: 1, user: 'Leon Kenedy', time: '1 hour ago', text: 'Lorem ipsum dolor sit amet' },
      { id: 2, user: 'Sam Smith', time: '21 seconds ago', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' }
    ]
  },

  publication: {
    title: 'Publication #1 Title',
    dateRange: 'Published: 2023',
    image: '/publication-image.jpg',
    comments: '1',
    views: '800',
    endorsements: '50',
    description: 'Lorem ipsum...',
    demoComments: [
      { id: 1, user: 'Ada Wong', time: '1 hour ago', text: 'Sed ut perspiciatis unde omnis iste natus' },
      { id: 2, user: 'Jack Prim', time: '21 seconds ago', text: 'Lorem ipsum dolor sit amet' },
      { id: 3, user: 'Ben Hunter', time: '4 days ago', text:'Perspiciatis unde omnis iste'}
    ]
  },

  position: {
    title: 'Position #1 Title',
    dateRange: '05/05/2021 – On-going',
    image: '/positions-image.jpg',
    comments: '2',
    views: '1k',
    endorsements: '200',
    description: 'Lorem ipsum...',
    demoComments: [
      { id: 1, user: 'Paul Phoenix', time: '21 seconds ago', text: 'Sed ut perspiciatis unde omnis iste natus' }
    ]
  }
}
const entity = computed(() => entities[type])
const entityComponent = computed(() => entityMap[type])

</script>

<style scoped>

@media (max-width: 768px) {
  .entity-header img {
    max-width: 100%; 
    border-radius: 8px;
    box-shadow: none;
  }
}
.entity-header img {
  display: block;
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;     
  margin: 1rem auto;         
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); 
}

</style>