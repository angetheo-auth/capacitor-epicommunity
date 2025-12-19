<template>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="8">
            <ion-label>Project Title</ion-label>
            <ion-input value="Project #1 Title"></ion-input>

            <ion-label>Project Description</ion-label>
            <ion-textarea value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident, dicta harum assumenda unde quaerat neque sapiente inventore dolorem, nobis deserunt."></ion-textarea>
        
            <ion-label>Project Link</ion-label>
            <ion-input value="https://project.org"></ion-input>

            <ion-row>
              <ion-col size="12" size-md="6">
                <ion-label>From</ion-label>
                <ion-datetime-button datetime="datetime"></ion-datetime-button>
                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime id="datetime" presentation="date"></ion-datetime>
                </ion-modal>
              </ion-col>

              <ion-col size="12" size-md="6">
                <ion-label>To</ion-label>
                <ion-datetime-button datetime="datetime"></ion-datetime-button>
                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime id="datetime" presentation="date"></ion-datetime>
                </ion-modal>
              </ion-col>
            </ion-row>

            <ion-label>Project Logo</ion-label>
            <div class="upload-box">
              Upload a file or drag and drop
            </div>
          </ion-col>

          <!-- RIGHT SIDE: Creator Info Card -->
          <ion-col size="12" size-md="4">
            <ion-card>
              <ion-card-content>
                <ion-label>Created By</ion-label>
                <ion-select placeholder="John Doe">
                  <ion-select-option value="user1">User 1</ion-select-option>
                  <ion-select-option value="user2">User 2</ion-select-option>
                </ion-select>

                <ion-label>Post Date</ion-label>
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
                  <ion-label>On-going</ion-label>
                  <ion-toggle ></ion-toggle>
                  <ion-label>Create Project Group</ion-label>
                  <ion-toggle ></ion-toggle>
                </ion-item>
                <ion-label>Group Name</ion-label>
                <ion-input placeholder="Enter group name"></ion-input>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
</template>

<script setup>
import { IonItem, IonLabel, IonTextarea, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonInput, IonToggle, IonContent, IonModal, IonDatetime, IonChip, IonIcon, IonSelectOption, IonSelect, IonDatetimeButton} from '@ionic/vue';
import { closeOutline } from 'ionicons/icons'
</script>

<style scoped>

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
