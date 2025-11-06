<template>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="8">
            <ion-label>Course Title</ion-label>
            <ion-input placeholder="Title"></ion-input>

            <ion-row>
              <ion-col size="12" size-md="6">
                <ion-label>Course Description</ion-label>
                <ion-textarea placeholder="Description"></ion-textarea>
              </ion-col>
              <ion-col size="12" size-md="6">
                <ion-label>Learning Outcomes</ion-label>
                <ion-textarea placeholder="Outcomes"></ion-textarea>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12" size-md="4">
                <ion-label>Institution</ion-label>
                <ion-select placeholder="AUTh">
                  <ion-select-option value="auth">AUTh</ion-select-option>
                  <ion-select-option value="Harvard">Harvard</ion-select-option>
                </ion-select>
              </ion-col>
              <ion-col size="12" size-md="4">
                <ion-label>ECTS</ion-label>
                <ion-input placeholder="ECTS"></ion-input>
              </ion-col>
              <ion-col size="12" size-md="4">
                <ion-label>Course Format</ion-label>
                <ion-select placeholder="E-learning/online">
                  <ion-select-option value="online">E-learning/online</ion-select-option>
                  <ion-select-option value="inPerson">In Person</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12" size-md="4">
                <ion-label>Target Group</ion-label>
                <ion-select placeholder="R1">
                  <ion-select-option value="r1">R1</ion-select-option>
                  <ion-select-option value="r2">R2</ion-select-option>
                  <ion-select-option value="r3">R3</ion-select-option>
                  <ion-select-option value="r4">R4</ion-select-option>
                </ion-select>
              </ion-col>
              <ion-col size="12" size-md="4">
                <ion-label>Cost</ion-label>
                <ion-input placeholder="Cost €"></ion-input>
              </ion-col>
              <ion-col size="12" size-md="4">
                <ion-label>Language of Instruction</ion-label>
                <ion-input placeholder="Language"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="12" size-md="4">
                <ion-label>Course Link</ion-label>
                <ion-input placeholder="URL"></ion-input>
              </ion-col>
              <ion-col size="12" size-md="4">
                <ion-label>Contact Person</ion-label>
                <ion-input placeholder="Name"></ion-input>
              </ion-col>
              <ion-col size="12" size-md="4">
                <ion-label>Contact Email</ion-label>
                <ion-input type="email" placeholder="Email"></ion-input>
              </ion-col>
            </ion-row>
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

            <ion-label>Course Logo</ion-label>
            <div class="upload-box">
              Upload a file or drag and drop
            </div>
          </ion-col>

          <!-- RIGHT SIDE: Creator Info Card -->
          <ion-col size="12" size-md="4">
            <ion-card>
              <ion-card-content>
                <ion-label>Offered By</ion-label>
                <ion-select placeholder="Select user">
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
                <ion-label>Co-Teacher</ion-label>
                <ion-input placeholder="Co-Teacher" helper-text="If more thatn one Co-Teachers, separate with comma."></ion-input>
                <ion-item lines="none">
                  <ion-label>On-going</ion-label>
                  <ion-toggle ></ion-toggle>
                </ion-item>
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
