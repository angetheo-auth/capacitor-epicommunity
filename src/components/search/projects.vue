<template>
    <div class="desktop-layout">
        <div class="filter-bar">
            <ion-select label="Field: " label-placement="floating">

            </ion-select>
            <ion-select label="Type: " label-placement="floating">

            </ion-select>
            <ion-input label="Value: " label-placement="floating" placeholder="Search..."></ion-input>
            <ion-buttons>
                <ion-button color="primary" fill="solid">
                    Go
                </ion-button>
                <ion-button color="medium" fill="outline">
                    Reset
                </ion-button>
            </ion-buttons>
        </div>
        <ion-grid>
            <ion-row>
                <ion-col size="1"></ion-col>
                <ion-col size="2"><strong>Project Name</strong></ion-col>
                <ion-col size="5"><strong>Description</strong></ion-col>
                <ion-col size="1"><strong>Annotations</strong></ion-col>
                <ion-col size="1"><strong>Views</strong></ion-col>
                <ion-col size="1"><strong>Endorsements</strong></ion-col>
                <ion-col size="1"><strong>Actions</strong></ion-col>
            </ion-row>

            <ion-row 
                v-for="rec in recs" 
                :key="rec.id" 
                class="row"
            >
                <ion-col class="avatar-col" size="1">
                    <ion-avatar class="avatar">
                        <img :src="rec.image" />
                    </ion-avatar>
                </ion-col>
                <ion-col size="2">
                    <div>{{ rec.name }}</div>
                    <div class="description">Published on · {{ rec.created }}</div>
                </ion-col>

                <ion-col size="5">{{ rec.description }}</ion-col>
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

                <ion-col size="1">{{ rec.views }}</ion-col>
                <ion-col size="1">{{ rec.endorsements }}</ion-col>
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
        <div class="filter-bar-mobile">
            <ion-select label="Field: " label-placement="floating">

            </ion-select>
            <ion-select label="Type: " label-placement="floating">

            </ion-select>
            <ion-input label="Value: " label-placement="floating" placeholder="Search..."></ion-input>
            <ion-buttons>
                <ion-button color="primary" fill="solid">
                    Go
                </ion-button>
                <ion-button color="medium" fill="outline">
                    Reset
                </ion-button>
            </ion-buttons>
        </div>
        <ion-card 
            v-for="rec in recs" 
            :key="rec.id" 
            class="ion-margin"
        >
            <ion-card-header>
                <ion-item lines="none">
                    <div>
                        <ion-avatar class="avatar">
                            <img :src="rec.image"  />
                        </ion-avatar>
                    </div>
                    <ion-label class="ion-padding-start">
                        <div>{{ rec.name }}</div>
                        <p class="description">Published on · {{ rec.created }}</p>

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
                <p><strong>Views:</strong> {{ rec.views }}</p>
                <p><strong>Endorsements:</strong> {{ rec.endorsements }}</p>

                <ion-button size="small" fill="outline" slot="end" color="success">
                    <ion-icon slot="start" :icon="eyeOutline"></ion-icon>
                    View
                </ion-button>
            </ion-card-content>
        </ion-card>
    </div>
</template>

<script setup>
import { IonButton, IonAvatar, IonIcon, IonRow, IonGrid, IonCol, IonCard, IonCardContent, IonCardHeader, IonLabel, IonItem, IonChip, IonSelect, IonSelectOption, IonInput, IonButtons } from "@ionic/vue";
import { eyeOutline } from 'ionicons/icons';

const recs = [
  {
    id: 1,
    image: "/project-image.jpg",
    name: "Project 1",
    created: "2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident",            
    annotations: ["Tag1", "Tag2", "Tag3"],
    views: 90,
    endorsements: 50,
  },
  {
    id: 2,
    image: "/project-image.jpg",
    name: "Project 2",
    created: "2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident",            
    annotations: ["Tag1", "Tag2", "Tag3"],
    views: 320,
    endorsements: 140,
  },
  {
    id: 3,
    image: "/project-image.jpg",
    name: "Project 3",
    created: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident",            
    annotations: ["Tag1", "Tag2", "Tag3"],
    views: 290,
    endorsements: 120,
  },
  {
    id: 4,
    image: "/project-image.jpg",
    name: "Project 4",
    created: "2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident",            
    annotations: ["Tag1", "Tag2", "Tag3"],
    views: 620,
    endorsements: 200,
  },
  {
    id: 5,
    image: "/project-image.jpg",
    name: "Project 5",
    created: "2014",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident",       
    annotations: ["Tag1", "Tag2", "Tag3"],
    views: 120,
    endorsements: 50,
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
.poster{
    display: flex;
    align-items: center;
}
@media (prefers-color-scheme: dark) {
  .row{
    background-color : var(--ion-color-dark-shade);
  }
}

.filter-bar {
  display: flex;
  align-items: center;
  gap: 1rem;               
  padding: 1rem 0;
  flex-wrap: nowrap;         
}

.filter-bar-mobile {
  display: flex;
  align-items: center;
  gap: 1rem;        
  padding: 1rem 0;
  flex-wrap: wrap;
}
ion-input,
ion-select,
ion-textarea {
  --background: var(--ion-color-light);
  --color: var(--ion-text-color);
  --border-radius: 8px;
  --border-width: 1px;
  --border-style: solid;
  --padding-start: 12px;
  --padding-end: 12px;
  margin-bottom: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
@media (prefers-color-scheme: dark) {
  ion-input,
  ion-select,
  ion-textarea {
    --background: var(--ion-color-dark-shade);
  }
}
</style>