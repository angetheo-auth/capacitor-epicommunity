<template>
  <!-- Desktop layout -->
  <div class="desktop-layout">
    <div class="groups-header">
      <h2>Groups</h2>
    </div>
    <ion-grid class="groups-grid">
      <ion-row class="groups-header-row">
        <ion-col size="2">Moderators</ion-col>
        <ion-col size="4">Group Name</ion-col>
        <ion-col size="2">Members</ion-col>
        <ion-col size="2">Type</ion-col>
        <ion-col size="2">Actions</ion-col>
      </ion-row>

      <ion-row
        v-for="group in groups"
        :key="group.id"
        class="groups-row"
      >
        <ion-col size="2" class="moderators">
          <img
            v-for="(mod, index) in group.moderators"
            :key="index"
            :src="mod"
            class="avatar"
          />
        </ion-col>
        <ion-col size="4">
          <div class="group-title">{{ group.name }}</div>
          <div class="group-description">{{ group.description }}</div>
        </ion-col>
        <ion-col size="2">{{ group.members }}</ion-col>
        <ion-col size="2">
          <ion-badge
            :color="group.type === 'Open' ? 'success' : 'danger'"
          >
            {{ group.type }}
          </ion-badge>
        </ion-col>
        <ion-col size="2" class="actions">
          <ion-button size="small" fill="clear" color="primary">
            Edit
          </ion-button>
          <ion-button size="small" fill="clear" color="danger">
            Leave
          </ion-button>
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

  <!-- Mobile Layout -->
  <div class="mobile-layout">
    <ion-card v-for="group in groups" :key="group.id">
      <ion-card-header>
        <ion-item lines="none">
          <div>
            <ion-avatar>
              <img  v-for="(mod, index) in group.moderators" :key="index"  :src="mod" class="avatar"  />
            </ion-avatar>
          </div>
          <ion-label>
            <div class="group-title">{{ group.name }}</div>
            <p class="group-description">{{ group.description }}</p>
          </ion-label>
        </ion-item>
      </ion-card-header>
      <ion-card-content>
        <p><strong>Members:</strong> {{ group.members }}</p>
        <p>
          <strong>Type:</strong>
          <span class="badge" :class="group.type === 'Open' ? 'open' : 'closed'" >
            {{ group.type }}
          </span>
        </p>
        <div class="actions">
          <ion-button size="small" fill="clear">Edit</ion-button>
          <ion-button size="small" fill="clear" color="danger">
            Leave
          </ion-button>
        </div>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script setup>
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonBadge,
  IonRow, IonGrid, IonCol,
  IonAvatar
} from "@ionic/vue";

const groups = [
  {
    id: 1,
    name: "Group1",
    description: "group1 description",
    members: 6,
    type: "Closed",
    moderators: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ],
  },
  {
    id: 2,
    name: "Group2",
    description: "group2 description",
    members: 9,
    type: "Closed",
    moderators: ["https://ionicframework.com/docs/img/demos/avatar.svg"],
  },
  {
    id: 3,
    name: "Group3",
    description: "group3 description",
    members: 12,
    type: "Open",
    moderators: ["https://ionicframework.com/docs/img/demos/avatar.svg"],
  },
  {
    id: 4,
    name: "Group4",
    description: "group4 description",
    members: 15,
    type: "Open",
    moderators: ["https://ionicframework.com/docs/img/demos/avatar.svg"],
  },
  {
    id: 5,
    name: "Group5",
    description: "group5 description",
    members: 18,
    type: "Open",
    moderators: ["https://ionicframework.com/docs/img/demos/avatar.svg"],
  },
];
</script>

<style scoped>

.groups-header {
  text-align: center;
  margin-bottom: 1rem;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: -8px;
  border: 2px solid white;
}

.actions ion-button {
  margin-right: 0.25rem;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
}

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
</style>
