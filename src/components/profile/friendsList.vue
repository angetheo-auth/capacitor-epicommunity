<template>
  <div class="desktop-layout">
    <div class="section-title">
      <h2>Friends List</h2>
    </div>
    <ion-grid>
      <ion-row class="ion-align-items-center ion-justify-content-between ion-margin-bottom">
        <ion-col size="12" size-md="6">
          <ion-button color="primary">
            Find new Friends
          </ion-button>
          <ion-button fill="outline" size="small">+</ion-button>
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
    <ion-searchbar placeholder="Search..." v-model="searchQuery"></ion-searchbar>
    <ion-fab class="fab-fixed">
      <ion-fab-button>
        <ion-icon :icon="addOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>
  <ion-grid class="friends-grid">
    <ion-row>
      <ion-col size="12" size-md="6" v-for="friend in friends" :key="friend.id">
        <ion-card>
          <ion-card-header>
            <ion-item lines="none">
              <ion-avatar slot="start">
                <img :src="friend.avatar" alt="Friend" />
              </ion-avatar>
              <ion-label>
                <h2>{{ friend.name }}</h2>
                <p>{{ friend.role }}</p>
              </ion-label>
            </ion-item>
          </ion-card-header>

          <ion-card-content>
            <p class="progress-label">Profile Completion: {{ friend.completion }}%</p>
            <ion-progress-bar
              :value="friend.completion / 100"
              color="primary"
            ></ion-progress-bar>

            <div class="actions">
              <ion-button size="small" color="primary">Message</ion-button>
              <ion-button size="small" fill="outline">
                Profile
              </ion-button>
            </div>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
  <div class="desktop-layout">
    <div class="pagination">
      <ion-select interface="popover" placeholder="5" class="page-size">
        <ion-select-option value="10">10</ion-select-option>
        <ion-select-option value="20">20</ion-select-option>
        <ion-select-option value="50">50</ion-select-option>
      </ion-select>
    </div>
  </div>


</template>

<script setup>
import {IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonAvatar, IonItem, IonLabel, IonButton, IonProgressBar, IonSearchbar, IonSelect, IonSelectOption} from "@ionic/vue";
import {addOutline} from 'ionicons/icons';
const friends = [
  {
    id: 1,
    name: "User Name 2",
    role: "R1",
    completion: 20,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  {
    id: 2,
    name: "User Name 3",
    role: "R2",
    completion: 40,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  {
    id: 3,
    name: "User Name 4",
    role: "R3",
    completion: 80,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  {
    id: 4,
    name: "User Name 5",
    role: "R4",
    completion: 30,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
];
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
.friends-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.search-bar {
  flex: 1;
  min-width: 200px;
}

.progress-label {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--ion-color-medium);
}

.actions {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: flex-end;
}

.pagination {
  margin: 1rem;
  display: flex;
  justify-content: flex-start;
}

.page-size {
  width: 80px;
}

.fab-fixed {
  position: fixed !important;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}
</style>
