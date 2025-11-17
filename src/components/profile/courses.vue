<template>
  <!-- Desktop -->
  <div class="desktop-layout">
    <div class="section-title">
      <h2>Courses</h2>
    </div>
    <ion-grid>
      <ion-row class="ion-align-items-center ion-justify-content-between ion-margin-bottom">
        <ion-col size="12" size-md="6">
          <ion-button color="primary" @click="createPost">
            Create Course
          </ion-button>
        </ion-col>
        <ion-col size="12" size-md="6" class="ion-text-right">
          <ion-searchbar placeholder="Search..." v-model="searchQuery"></ion-searchbar>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12" size-md="4" v-for="post in posts" :key="'desktop-' + post.id">
          <card v-bind="post" />
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>

  <!-- Mobile -->
  <div class="mobile-layout">
    <div class="vertical-container">
      <div>
        <ion-searchbar placeholder="Search..." v-model="searchQuery"></ion-searchbar>
      </div>
      <div v-for="post in posts" :key="'mobile-' + post.id" class="vertical-item">
        <card v-bind="post" />
      </div>
    </div>
    <ion-fab class="fab-fixed">
      <ion-fab-button @click="createPost">
        <ion-icon :icon="addOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>

</template>

<script setup>
import { IonFab, IonFabButton, IonIcon, IonSearchbar, IonButton, IonCol, IonGrid, IonRow, IonToolbar, IonTitle } from '@ionic/vue';
import card from './card.vue'
import {addOutline} from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

function createPost() {
  router.push(`/create-entity/course`)
}

const posts = [
  {
    id: 1,
    user: 'John Doe',
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    date: '5/5/2022',
    image: '/course-image.jpg',
    title: 'Course Title 1',
    description: 'Course description 1',
    tags: ['Tag 0', 'Tag 1'],
    stats: { comments: 123, views: '5k', endorsements: '1k' },
    type: 'course'
  },
  {
    id: 2,
    user: 'Jane Smith',
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    date: '5/6/2022',
    image: '/course-image.jpg',
    title: 'Course Title 2',
    description: 'Course description 2',
    tags: ['Tag A', 'Tag B'],
    stats: { comments: 456, views: '3k', endorsements: '500' },
    type: 'course'
  },
  {
    id: 3,
    user: 'Alex Roe',
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    date: '5/7/2022',
    image: '/course-image.jpg',
    title: 'Course Title 3',
    description: 'Course description 3',
    tags: ['Tag X', 'Tag Y'],
    stats: { comments: 789, views: '10k', endorsements: '2k' },
    type: 'course'
  }
]
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
.section-title {
  margin-bottom: 1rem;
}

.section-title h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.controls-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.vertical-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.vertical-item {
  width: 100%;
}
.fab-fixed {
  position: fixed !important;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}

</style>