<template>
  <ion-card>
    <!-- Header -->
    <ion-item lines="none">
      <ion-avatar slot="start">
        <img :src="avatar" alt="User avatar" />
      </ion-avatar>
      <ion-label>
        <h2>{{ user }}</h2>
        <p>{{ date }}</p>
      </ion-label>
      <ion-button fill="clear" slot="end">
        <ion-icon :icon="ellipsisVertical"></ion-icon>
      </ion-button>
    </ion-item>

    <!-- Image -->
    <div class="card-image">
      <img :src="image"/>
    </div>

    <!-- Content -->
    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle>{{ description }}</ion-card-subtitle>
    </ion-card-header>

    <!-- Tags -->
    <ion-card-content>
      <div class="tags">
        <ion-chip color="primary" v-for="tag in tags" :key="tag">
          <ion-label>#{{ tag }}</ion-label>
        </ion-chip>
      </div>
    </ion-card-content>

    
    <!-- Stats -->
    <ion-item lines="none">

      <div class="stat" v-if="members && members.length">
        <ion-icon :icon="peopleOutline"></ion-icon>
        <span>Members: {{ members.length }} </span>
      </div>

      <ion-buttons slot="end">
        <ion-button fill="clear">
          <ion-icon :icon="shareSocial"></ion-icon>
          <ion-icon :icon="arrowUpLeftBoxOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-item>
    <ion-item>
      <ion-label>
        <small>
          Comments: {{ stats.comments }} | Views: {{ stats.views }} | Endorsements: {{ stats.endorsements }}
        </small>
      </ion-label>
    </ion-item>
    <!-- Comment box -->
    <ion-item lines="none">
      <ion-input placeholder="Post a comment..."></ion-input>
    </ion-item>
  </ion-card>
</template>

<script setup>
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonCardContent, IonItem, IonAvatar, IonLabel, IonButton,
  IonIcon, IonChip, IonInput, IonButtons
} from '@ionic/vue'
import { arrowUpLeftBoxOutline, ellipsisVertical, shareSocial } from 'ionicons/icons'

defineProps({
  user: String,
  avatar: String,
  date: String,
  image: String,
  title: String,
  description: String,
  tags: Array,
  stats: Object,
  members: Array
})
</script>
