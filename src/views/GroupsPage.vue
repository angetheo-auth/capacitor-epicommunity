<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>Groups</ion-title>
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
      <div class="desktop-layout">
        <h2>Groups</h2>
        <ion-grid>
            <ion-row class="ion-align-items-center ion-justify-content-between ion-margin-bottom">
                <ion-col size="12" size-md="6">
                <ion-button color="primary" @click="createGroup">
                    Create new Group
                </ion-button>
                </ion-col>
                <ion-col size="12" size-md="6" class="ion-text-right">
                <ion-searchbar placeholder="Search..." v-model="searchQuery"></ion-searchbar>
                </ion-col>
            </ion-row>
        </ion-grid>
        <ion-grid class="groups-grid">
        <ion-row class="groups-header-row">
          <ion-col size="2"><strong>Moderators</strong></ion-col>
          <ion-col size="3"><strong>Name</strong></ion-col>
          <ion-col size="1.5"><strong>Members</strong></ion-col>
          <ion-col size="2"><strong>Tags</strong></ion-col>
          <ion-col size="1.5"><strong>Type</strong></ion-col>
          <ion-col size="2"><strong>Actions</strong></ion-col>
        </ion-row>

        <ion-row v-for="group in groups" :key="group.id" class="groups-row" @click="gotoGroup">
          <ion-col size="2" class="moderators">
            <img v-for="(mod, index) in group.moderators"
                :key="index"
                :src="mod"
                class="avatar" />
          </ion-col>
          <ion-col size="3">
            <div class="group-title">{{ group.name }}</div>
            <div class="group-description">{{ group.description }}</div>
          </ion-col>
          <ion-col size="1.5">{{ group.members }}</ion-col>
          <ion-col size="2">
            <ion-chip
              v-for="tag in group.tags"
              :key="tag"
              color="primary"
              outline
              class="tag-chip"
            >
              <ion-label>#{{ tag }}</ion-label>
            </ion-chip>
          </ion-col>
          <ion-col size="1.5">
            <ion-badge :color="group.type === 'Open' ? 'success' : 'danger'">
              {{ group.type }}
            </ion-badge>
          </ion-col>

          <ion-col size="2" class="actions">

            <template v-if="group.userState === 'member'">
              <ion-button size="small" fill="clear" color="primary">Edit</ion-button>
              <ion-button size="small" fill="clear" color="danger">Leave</ion-button>
            </template>

            <template v-else-if="group.userState === 'pending'">
              <ion-button size="small" fill="clear" color="warning">Apply</ion-button>
              <ion-button size="small" fill="clear" color="success">Endorse</ion-button>
            </template>

            <template v-else>
              <ion-button size="small" fill="clear" color="secondary">Join</ion-button>
              <ion-button size="small" fill="clear" color="success">Endorse</ion-button>
            </template>

            </ion-col>

          </ion-row>
        </ion-grid>
        <div class="pagination">
          <ion-button fill="clear" size="small">&laquo;</ion-button>
          <ion-button fill="clear" size="small">1</ion-button>
          <ion-button fill="clear" size="small">2</ion-button>
          <ion-button fill="clear" size="small">3</ion-button>
          <ion-button fill="clear" size="small">&raquo;</ion-button>

          <ion-select
            interface="popover"
            placeholder="5"
            class="page-size"
          >
            <ion-select-option value="5">5</ion-select-option>
            <ion-select-option value="10">10</ion-select-option>
            <ion-select-option value="20">20</ion-select-option>
          </ion-select>
        </div>
      </div>
      <div class="mobile-layout">
        <ion-item>
          <ion-searchbar placeholder="Search..." v-model="searchQuery"></ion-searchbar>
        </ion-item>
        <ion-card v-for="group in groups" :key="group.id" class="ion-margin" @click="gotoGroup">
          <ion-card-header>
            <ion-item lines="none">
              <div slot="start" class="moderators">
                <img
                  v-for="(mod, index) in group.moderators"
                  :key="index"
                  :src="mod"
                  class="avatar"
                />
              </div>

              <ion-label>
                <div class="group-title">{{ group.name }}</div>
                <p class="group-description">{{ group.description }}</p>

                <div class="tag-container">
                  <ion-chip
                    outline
                    color="primary"
                    v-for="tag in group.tags"
                    :key="tag"
                    class="tag-chip"
                  >
                    <ion-label>#{{ tag }}</ion-label>
                  </ion-chip>
                </div>
              </ion-label>
            </ion-item>
          </ion-card-header>

          <ion-card-content>
            <p><strong>Members:</strong> {{ group.members }}</p>
            <p>
              <strong>Type: </strong>
              <span class="badge" :class="group.type === 'Open' ? 'open' : 'closed'" >
                {{ group.type }}
              </span>
            </p>
            <div class="actions">
              <template v-if="group.userState === 'member'">
                <ion-button size="small" fill="clear" color="primary">Edit</ion-button>
                <ion-button size="small" fill="clear" color="danger">Leave</ion-button>
              </template>

              <template v-else-if="group.userState === 'pending'">
                <ion-button size="small" fill="clear" color="warning">Apply</ion-button>
                <ion-button size="small" fill="clear" color="success">Endorse</ion-button>
              </template>

              <template v-else>
                <ion-button size="small" fill="clear" color="secondary">Join</ion-button>
                <ion-button size="small" fill="clear" color="success">Endorse</ion-button>
              </template>

            </div>
          </ion-card-content>
        </ion-card>
        <ion-fab class="fab-fixed">
          <ion-fab-button @click="createGroup">
            <ion-icon :icon="addOutline"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {IonBadge, IonPage, IonFab, IonFabButton, IonToolbar, IonHeader, IonButtons, IonButton, IonMenuButton, IonTitle, IonIcon, IonSelect, IonSelectOption, IonContent, IonRow, IonGrid, IonCol, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonLabel, IonItem, IonChip } from "@ionic/vue";
import { searchOutline,  notificationsOutline, addOutline} from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

const groups = [
  {
    id: 1,
    name: "Group1",
    description: "group1 description",
    members: 6,
    type: "Closed",
    tags: ["Tag1", "Tag2"],
    userState: "member",
    moderators: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ]
  },
  {
    id: 2,
    name: "Group2",
    description: "group2 description",
    members: 9,
    type: "Closed",
    tags: ["Tag1"],
    userState: "member",
   moderators: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ]
  },
  {
    id: 3,
    name: "Group3",
    description: "group3 description",
    members: 12,
    type: "Closed",
    tags: ["Tag1", "Tag2"],
    userState: "pending", // Apply case
    moderators: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ]
  },
  {
    id: 4,
    name: "Group4",
    description: "group4 description",
    members: 15,
    type: "Open",
    tags: ["Tag1"],
    userState: "not-member",
   moderators: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ]
  },
  {
    id: 5,
    name: "Group5",
    description: "group5 description",
    members: 18,
    type: "Open",
    tags: ["Tag2"],
    userState: "not-member",
   moderators: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ]
  },
];

function createGroup() {
  router.push(`/create-group`)
}
function gotoGroup(){
  router.push(`/group-entity`)
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
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
}
.actions ion-button {
  margin-right: 0.25rem;
}

.fab-fixed {
  position: fixed !important;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: -8px;
  border: 2px solid white;
}
.group-description{
  color: var(--ion-color-medium)
}
.groups-row{
  border-radius: 10px;
  margin-top: 4px;
  padding: 5px;
  background-color: var(--ion-color-light-shade);
}

@media (prefers-color-scheme: dark) {
  .groups-row{
    background-color : var(--ion-color-dark-shade);
  }
}
</style>