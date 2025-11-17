<template>
  <ion-card button @click="goToEntity">
    <ion-item lines="none">
      <ion-avatar slot="start">
        <img :src="avatar" alt="User avatar" />
      </ion-avatar>
      <ion-label>
        <h2>{{ user }}</h2>
        <p>{{ date }}</p>
      </ion-label>
      <ion-button fill="clear" slot="end" @click.stop="showActions = true">
        <ion-icon :icon="ellipsisVertical"></ion-icon>
      </ion-button>
    </ion-item>

    <div class="card-image">
      <img :src="image"/>
    </div>

    <ion-card-header>
      <ion-card-title>{{ title }}</ion-card-title>
      <ion-card-subtitle>{{ description }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <div class="tags">
        <ion-chip color="primary" v-for="tag in tags" :key="tag">
          <ion-label>#{{ tag }}</ion-label>
        </ion-chip>
      </div>
    </ion-card-content>

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
    <ion-item lines="none">
      <ion-input placeholder="Post a comment..."></ion-input>
    </ion-item>
    <ion-action-sheet :is-open="showActions" header="Actions" :buttons="actionButtons" @didDismiss="showActions = false"/>
  </ion-card>
</template>

<script setup>
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonAvatar, IonLabel, IonButton, IonIcon, IonChip, IonInput, IonButtons, IonActionSheet} from '@ionic/vue'
import { arrowUpLeftBoxOutline, ellipsisVertical, shareSocial, peopleOutline, pencil, trash } from 'ionicons/icons'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const props = defineProps({
  user: String,
  avatar: String,
  date: String,
  image: String,
  title: String,
  description: String,
  tags: Array,
  stats: Object,
  members: Array,
  type: String
})

const router = useRouter();

const showActions = ref(false)

function goToEntity() {
  // there would be an id for each individual entity here 
  router.push(`/entity/${props.type}`)
}

const actionButtons = [
  {
    text: 'Edit',
    icon: pencil,
    handler: () => {
      router.push(`/update-entity/${props.type}`)
      console.log('Edit clicked')
    }
  },
  {
    text: 'Delete',
    role: 'destructive',
    icon: trash,
    handler: () => {
      console.log('Delete clicked')
    }
  },
  {
    text: 'Cancel',
    role: 'cancel'
  }
]
</script>