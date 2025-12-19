<template>
  <!-- Desktop layout -->
  <div class="desktop-layout">
    <div class="groups-header">
      <h2>Members</h2>
    </div>
    <ion-grid class="groups-grid">
      <ion-row class="groups-header-row">
        <ion-col size="2"><strong>Image</strong></ion-col>
        <ion-col size="2"><strong>Member Nam</strong>e</ion-col>
        <ion-col size="2"><strong>Joined</strong></ion-col>
        <ion-col size="2"><strong>Role</strong></ion-col>
        <ion-col size="2"><strong>Permissions</strong></ion-col>
        <ion-col size="2"><strong>Actions</strong></ion-col>
      </ion-row>

      <ion-row
        v-for="member in members"
        :key="member.id"
        class="members-row"
      >
        <ion-col size="2" >
          <img
            v-for="(mod, index) in member.image"
            :key="index"
            :src="mod"
            class="avatar"
          />
        </ion-col>
        <ion-col size="2">
          <div>{{ member.name }}</div>
        </ion-col>
        <ion-col size="2">
          <div>{{ member.joined }}</div>
        </ion-col>
        <ion-col size="2">
          <ion-badge
            :color="member.role === 'Moderator' ? 'warning' : 'success'"
          >
            {{ member.role }}
          </ion-badge>
        </ion-col>
        <ion-col size="2">{{ member.permissions }}</ion-col>
        <ion-col size="2" class="actions">
            <template v-if="member.actions">
                <ion-button size="small" fill="clear" color="primary">Edit</ion-button>
                <ion-button size="small" fill="clear" color="danger">Remove</ion-button>
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

    <!-- Mobile layout -->
    <div class="mobile-layout">
    <ion-card v-for="member in members" :key="member.id">
        <ion-card-header>
        <ion-item lines="none">
            <div slot="start">
              <ion-avatar>
                <img
                  v-for="(img, index) in member.image"
                  :key="index"
                  :src="img"
                  class="avatar"
                />
              </ion-avatar>
            </div>
            <ion-label>
            <div class="member-name">{{ member.name }}</div>
            <p class="joined">Joined: {{ member.joined }}</p>
            </ion-label>
        </ion-item>
        </ion-card-header>

        <ion-card-content>
        <p>
            <strong>Role:</strong>
            <ion-badge
            :color="member.role === 'Moderator' ? 'warning' : 'success'"
            >
            {{ member.role }}
            </ion-badge>
        </p>

        <p>
            <strong>Permissions:</strong> {{ member.permissions }}
        </p>

        <div class="actions" v-if="member.actions">
            <ion-button size="small" fill="clear" color="primary">
            Edit
            </ion-button>
            <ion-button size="small" fill="clear" color="danger">
            Remove
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

const members = [
  {
    id: 1,
    name: "User Name 1",
    permissions: "Full",
    joined: "5/5/2025",
    role: "Moderator",
    image: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ],
    actions: false
  },
  {
    id: 2,
    name: "User Name 2",
    permissions: "Full",
    joined: "5/5/2025",
    role: "Moderator",
    image: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ],
    actions: false
  },
  {
    id: 3,
    name: "User Name 3",
    permissions: "Read/Write Wall",
    joined: "10/5/2025",
    role: "Member",
    image: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ],
    actions: true
  },
  {
    id: 4,
    name: "User Name 4",
    permissions: "Read/Write Wall",
    joined: "10/5/2025",
    role: "Member",
    image: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ],
    actions: true
  },
  {
    id: 5,
    name: "User Name 5",
    permissions: "Read/Write Wall",
    joined: "10/5/2025",
    role: "Member",
    image: [
      "https://ionicframework.com/docs/img/demos/avatar.svg",
    ],
    actions: true
  },
];
</script>

<style scoped>

.member-header {
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
    display: block !important;
  }
  .mobile-layout {
    display: none;
  }
}
</style>
