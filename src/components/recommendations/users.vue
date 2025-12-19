<template>
    <div class="desktop-layout">
        <p>Based on annotations</p>
        <ion-grid>

            <ion-row>
                <ion-col size="1.5"></ion-col>
                <ion-col size="2"><strong>Name</strong></ion-col>
                <ion-col size="2"><strong>Institutions/Organizations</strong></ion-col>
                <ion-col size="1.5"><strong>Profile Annotations</strong></ion-col>
                <ion-col size="1.5"><strong>Research Level</strong></ion-col>
                <ion-col size="1.5"><strong>Profile Views</strong></ion-col>
                <ion-col size="2"><strong>Actions</strong></ion-col>
            </ion-row>

            <ion-row 
                v-for="rec in annotationRecs" 
                :key="rec.id" 
                class="row"
            >
                <ion-col size="1.5">
                    <img :src="rec.avatar" class="avatar" />
                </ion-col>

                <ion-col size="2">
                    <div>{{ rec.name }}</div>
                    <div class="description">Joined at · {{ rec.joined }}</div>
                </ion-col>

                <ion-col size="2">{{ rec.institution }}</ion-col>

                <ion-col size="1.5">
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

                <ion-col size="1.5">{{ rec.researhLevel }}</ion-col>
                <ion-col size="1.5">{{ rec.profileViews }}</ion-col>

                <ion-col size="2">
                    <ion-button size="small" fill="outline" color="success">
                        <ion-icon slot="start" :icon="personAddOutline"></ion-icon>
                        Send Request
                    </ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>

    <!-- Mobile -->
    <div class="mobile-layout">
        <p>Based on annotations</p>

        <ion-card 
            v-for="rec in annotationRecs" 
            :key="rec.id" 
            class="ion-margin"
        >
            <ion-card-header>
                <ion-item lines="none">
                    <div>
                        <ion-avatar class="avatar">
                            <img :src="rec.avatar" />
                        </ion-avatar>
                    </div>
                    <ion-label class="ion-padding-start">
                        <div>{{ rec.name }}</div>
                        <p class="description">Joined at · {{ rec.joined }}</p>

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
                <p><strong>Institutions/Organizations:</strong> {{ rec.institution }}</p>
                <p><strong>Research Level:</strong> {{ rec.researhLevel }}</p>
                <p><strong>Profile Views:</strong> {{ rec.profileViews }}</p>

                <ion-button size="small" fill="outline" slot="end" color="success">
                    <ion-icon slot="start" :icon="personAddOutline"></ion-icon>
                    Send Request
                </ion-button>
            </ion-card-content>
        </ion-card>
    </div>

    <!-- Desktop -->
    <div class="desktop-layout" style="margin-top: 24px;">
        <p>Based on institution</p>
        <ion-grid class="groups-grid">

            <ion-row class="groups-header-row">
                <ion-col size="1.5"></ion-col>
                <ion-col size="2"><strong>Name</strong></ion-col>
                <ion-col size="2"><strong>Institutions/Organizations</strong></ion-col>
                <ion-col size="1.5"><strong>Profile Annotations</strong></ion-col>
                <ion-col size="1.5"><strong>Research Level</strong></ion-col>
                <ion-col size="1.5"><strong>Profile Views</strong></ion-col>
                <ion-col size="2"><strong>Actions</strong></ion-col>
            </ion-row>

            <ion-row 
                v-for="rec in institutionRecs" 
                :key="rec.id" 
                class="row"
            >
                <ion-col size="1.5">
                    <img :src="rec.avatar" class="avatar" />
                </ion-col>

                <ion-col size="2">
                    <div>{{ rec.name }}</div>
                    <div class="description">Joined at · {{ rec.joined }}</div>
                </ion-col>

                <ion-col size="2">{{ rec.institution }}</ion-col>

                <ion-col size="1.5">
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

                <ion-col size="1.5">{{ rec.researhLevel }}</ion-col>
                <ion-col size="1.5">{{ rec.profileViews }}</ion-col>

                <ion-col size="2">
                    <ion-button size="small" fill="outline" color="success">
                        <ion-icon slot="start" :icon="personAddOutline"></ion-icon>
                        Send Request
                    </ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>


    <!-- Mobile -->
    <div class="mobile-layout">
        <p>Based on institution</p>

        <ion-card 
            v-for="rec in institutionRecs" 
            :key="rec.id" 
            class="ion-margin"
        >
            <ion-card-header>
                <ion-item lines="none">
                    <div>
                        <ion-avatar class="avatar">
                            <img :src="rec.avatar" />
                        </ion-avatar>
                    </div>
                    <ion-label class="ion-padding-start">
                        <div>{{ rec.name }}</div>
                        <p class="description">Joined at · {{ rec.joined }}</p>

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
                <p><strong>Institutions/Organizations:</strong> {{ rec.institution }}</p>
                <p><strong>Research Level:</strong> {{ rec.researhLevel }}</p>
                <p><strong>Profile Views:</strong> {{ rec.profileViews }}</p>

                <ion-button size="small" fill="outline" slot="end" color="success">
                    <ion-icon slot="start" :icon="personAddOutline"></ion-icon>
                    Send Request
                </ion-button>
            </ion-card-content>
        </ion-card>
    </div>
</template>

<script setup>
import { IonButton, IonIcon, IonRow, IonGrid, IonCol, IonCard, IonCardContent, IonCardHeader, IonLabel, IonItem, IonChip, IonAvatar } from "@ionic/vue";
import { personAddOutline } from 'ionicons/icons';

const recs = [
  {
    id: 1,
    name: "User Name 1",
    joined: "5/5/2025",
    institution: "Institution 1",            
    annotations: ["Tag1", "Tag2", "Tag3"],     
    researhLevel: "R2",
    profileViews: 120,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  {
    id: 2,
    name: "User Name 2",
    joined: "6/5/2025",
    institution: "Institution 2",            
    annotations: ["Tag1", "Tag2", "Tag3"],     
    researhLevel: "R2",
    profileViews: 230,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  {
    id: 3,
    name: "User Name 3",
    joined: "2/12/2025",
    institution: "Institution 3",            
    annotations: ["Tag1", "Tag2", "Tag3"],     
    researhLevel: "R4",
    profileViews: 620,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  {
    id: 4,
    name: "User Name 4",
    joined: "22/10/2025",
    institution: "Institution 4",            
    annotations: ["Tag1", "Tag2", "Tag3"],     
    researhLevel: "R3",
    profileViews: 520,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  {
    id: 5,
    name: "User Name 5",
    joined: "16/8/2025",
    institution: "Institution 5",            
    annotations: ["Tag1", "Tag2", "Tag3"],     
    researhLevel: "R1",
    profileViews: 110,
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
];
const annotationRecs = recs.slice(0, 2);
const institutionRecs = recs.slice(2);
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