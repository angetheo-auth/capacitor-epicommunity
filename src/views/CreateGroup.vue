<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>Create</ion-title>
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
      <div class="header">
        <h2>Create New Group</h2>
        <ion-button color="primary">Create</ion-button>
      </div>

      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="8">
            <ion-label>Group Title</ion-label>
            <ion-input placeholder="Title"></ion-input>

            <ion-label>Group Description</ion-label>
            <ion-textarea placeholder="Description"></ion-textarea>
        
            <ion-label>Meeting Link</ion-label>
            <ion-input placeholder="URL"></ion-input>

            <ion-label>EPICluster ID</ion-label>
            <ion-input placeholder="ID"></ion-input>

            <ion-label>EPICradle ID</ion-label>
            <ion-input placeholder="ID"></ion-input>
          </ion-col>

          <ion-col size="12" size-md="4">
            <ion-card>
              <ion-card-content>
                <ion-label>Created by</ion-label>
                <ion-select placeholder="John Doe">
                  <ion-select-option value="user1">User 1</ion-select-option>
                  <ion-select-option value="user2">User 2</ion-select-option>
                </ion-select>

                <ion-label>Creation Date</ion-label>
                <ion-datetime-button datetime="datetime"></ion-datetime-button>
                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime id="datetime" presentation="date"></ion-datetime>
                </ion-modal>

                <ion-label>Tags</ion-label>
                <div class="chips-container">
                  <ion-chip color="medium">
                    <ion-label>LMS</ion-label>
                    <ion-icon :icon="closeOutline"></ion-icon>
                  </ion-chip>
                  <ion-chip color="medium">
                    <ion-label>Drupal</ion-label>
                    <ion-icon :icon="closeOutline"></ion-icon>
                  </ion-chip>
                </div>
                <ion-item lines="none">
                  <ion-label>Open Group</ion-label>
                  <ion-toggle ></ion-toggle>
                </ion-item>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonButtons, IonButton, IonMenuButton, IonToolbar, IonTitle, IonHeader, IonItem, IonLabel, IonTextarea, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonInput, IonToggle, IonContent, IonModal, IonDatetime, IonChip, IonIcon, IonSelectOption, IonSelect, IonDatetimeButton} from '@ionic/vue';
import { searchOutline,  notificationsOutline, closeOutline} from 'ionicons/icons';

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
}
.upload-box {
  border: 1px dashed var(--ion-color-medium);
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  color: var(--ion-color-medium);
  font-size: 14px;
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

.chips-container {
  background: var(--ion-color-light);
  color: var(--ion-text-color);
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

@media (prefers-color-scheme: dark) {
  ion-input,
  ion-select,
  ion-textarea {
    --background: var(--ion-color-dark-shade);
  }
  .chips-container{
    background: var(--ion-color-dark-shade);
  }
}
</style>

