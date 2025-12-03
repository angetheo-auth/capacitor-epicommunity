<template>
    <div class="desktop-layout">
        <p>Based on annotations</p>
        <ion-grid>
            <ion-row>
                <ion-col size="2"><strong>Group Name</strong></ion-col>
                <ion-col size="7"><strong>Description</strong></ion-col>
                <ion-col size="1"><strong>Annotations</strong></ion-col>
                <ion-col size="1"><strong>Members</strong></ion-col>
                <ion-col size="1"><strong>Actions</strong></ion-col>
            </ion-row>

            <ion-row 
                v-for="rec in recs" 
                :key="rec.id" 
                class="row"
            >
                <ion-col size="2">
                    <div>{{ rec.name }}</div>
                    <div class="description">Created on · {{ rec.created }}</div>
                </ion-col>

                <ion-col size="7">{{ rec.description }}</ion-col>

                <ion-col size="1">
                    <ion-chip 
                        v-for="tag in rec.annotations"
                        :key="tag"
                        color="primary"
                        outline
                        class="tag-chip"
                    >
                        <ion-label>#{{ tag }}</ion-label>
                    </ion-chip>
                </ion-col>

                <ion-col size="1">{{ rec.members }}</ion-col>
                <ion-col size="1">
                    <ion-button size="small" fill="outline" color="success">
                        <ion-icon slot="start" :icon="eyeOutline"></ion-icon>
                        View
                    </ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>


    <!-- Mobile -->
    <div class="mobile-layout">
        <p>Based on annotations</p>

        <ion-card 
            v-for="rec in recs" 
            :key="rec.id" 
            class="ion-margin"
        >
            <ion-card-header>
                <ion-item lines="none">
                    <ion-label>
                        <div>{{ rec.name }}</div>
                        <p class="description">Created on · {{ rec.created }}</p>

                        <div class="tag-container">
                            <ion-chip
                                outline
                                color="primary"
                                v-for="tag in rec.annotations"
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
                <p><strong>Description:</strong> {{ rec.description }}</p>
                <p><strong>Members:</strong> {{ rec.members }}</p>

                <ion-button size="small" fill="outline" slot="end" color="success">
                    <ion-icon slot="start" :icon="eyeOutline"></ion-icon>
                    View
                </ion-button>
            </ion-card-content>
        </ion-card>
    </div>
</template>

<script setup>
import { IonButton, IonIcon, IonRow, IonGrid, IonCol, IonCard, IonCardContent, IonCardHeader, IonLabel, IonItem, IonChip } from "@ionic/vue";
import { eyeOutline } from 'ionicons/icons';

const recs = [
  {
    id: 1,
    name: "Group 1",
    created: "5/5/2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident, dicta harum assumenda unde quaerat neque sapiente inventore dolorem",            
    annotations: ["Tag1", "Tag2", "Tag3"],
    members: 5,
  },
  {
    id: 2,
    name: "Group 2",
    created: "3/8/2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident, dicta harum assumenda unde quaerat neque sapiente inventore dolorem",            
    annotations: ["Tag1", "Tag2", "Tag3"],
    members: 12,
  },
  {
    id: 3,
    name: "Group 3",
    created: "18/2/2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident, dicta harum assumenda unde quaerat neque sapiente inventore dolorem",            
    annotations: ["Tag1", "Tag2", "Tag3"],
    members: 8,
  },
  {
    id: 4,
    name: "Group 4",
    created: "2/3/2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident, dicta harum assumenda unde quaerat neque sapiente inventore dolorem",            
    annotations: ["Tag1", "Tag2", "Tag3"],
    members: 6,
  },
  {
    id: 5,
    name: "Group 5",
    created: "9/9/2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident, dicta harum assumenda unde quaerat neque sapiente inventore dolorem",            
    annotations: ["Tag1", "Tag2", "Tag3"],
    members: 3,
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

.actions ion-button {
  margin-right: 0.25rem;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: -8px;
  border: 2px solid white;
}
.description{
  color: var(--ion-color-medium)
}

.row{
  border-radius: 10px;
  margin-top: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: var(--ion-color-light-shade);
}

@media (prefers-color-scheme: dark) {
  .row{
    background-color : var(--ion-color-dark-shade);
  }
}
</style>