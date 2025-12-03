<template>
    <div class="desktop-layout">
        <p>Based on annotations</p>
        <ion-grid>
            <ion-row>
                <ion-col size="1"></ion-col>
                <ion-col size="2"><strong>Crouse Name</strong></ion-col>
                <ion-col size="3"><strong>Description</strong></ion-col>
                <ion-col size="2"><strong>Offered By</strong></ion-col>
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
                    <div class="description">Posted on · {{ rec.created }}</div>
                </ion-col>

                <ion-col size="3">{{ rec.description }}</ion-col>
                <ion-col size="2">
                    <div class="poster">
                        <ion-avatar class="avatar">
                            <img alt="Profile Picture" :src="rec.posterAvatar"/>
                        </ion-avatar>
                        <ion-label class="ion-padding">
                            <p>{{rec.poster}}</p>
                            <p>{{rec.posterLevel}}</p>
                        </ion-label>
                    </div>
                </ion-col>
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
        <p>Based on annotations</p>
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
                        <p class="description">Posted on · {{ rec.created }}</p>

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
                <p>Offered by:</p>
                <div class="poster">
                    <ion-avatar class="avatar">
                        <img alt="Profile Picture" :src="rec.posterAvatar"/>
                    </ion-avatar>
                    <ion-label class="ion-padding">
                        <p>{{rec.poster}}</p>
                        <p>{{rec.posterLevel}}</p>
                    </ion-label>
                </div>
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
import { IonButton, IonAvatar, IonIcon, IonRow, IonGrid, IonCol, IonCard, IonCardContent, IonCardHeader, IonLabel, IonItem, IonChip } from "@ionic/vue";
import { eyeOutline } from 'ionicons/icons';

const recs = [
  {
    id: 1,
    image: "/course-image.jpg",
    name: "Course 1",
    created: "12/3/2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident",            
    poster: "User Name 1",
    posterLevel: "R1",
    posterAvatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    annotations: ["Tag1", "Tag2", "Tag3"],
    views: 90,
    endorsements: 50,
  },
  {
    id: 2,
    image: "/course-image.jpg",
    name: "Course 2",
    created: "6/6/2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident",            
    poster: "User Name 2",
    posterLevel: "R1",
    posterAvatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    annotations: ["Tag1", "Tag2", "Tag3"],
    views: 320,
    endorsements: 140,
  },
  {
    id: 3,
    image: "/course-image.jpg",
    name: "Course 3",
    created: "9/9/2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident",            
    poster: "User Name 3",
    posterLevel: "R2",
    posterAvatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    annotations: ["Tag1", "Tag2", "Tag3"],
    views: 290,
    endorsements: 120,
  },
  {
    id: 4,
    image: "/course-image.jpg",
    name: "Course 4",
    created: "6/2/2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident",            
    poster: "User Name 4",
    posterLevel: "R3",
    posterAvatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    annotations: ["Tag1", "Tag2", "Tag3"],
    views: 620,
    endorsements: 200,
  },
  {
    id: 5,
    image: "/course-image.jpg",
    name: "Course 5",
    created: "9/9/2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident",            
    poster: "User Name 5",
    posterLevel: "R1",
    posterAvatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
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
</style>