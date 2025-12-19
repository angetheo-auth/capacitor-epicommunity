<template>
  <div class="form-section">
    <h2>Research Information</h2>
    <ion-grid>
      <ion-row>
        <ion-col size="12" size-md="6">
          <ion-label>Institution/Organization</ion-label>
          <ion-input></ion-input>
        </ion-col>

        <ion-col size="12" size-md="6">
          <ion-label>Research Level</ion-label>
          <ion-select placeholder="R1">
            <ion-select-option value="R1">R1</ion-select-option>
            <ion-select-option value="R2">R2</ion-select-option>
            <ion-select-option value="R3">R3</ion-select-option>
            <ion-select-option value="R4">R4</ion-select-option>
          </ion-select>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size="12" size-md="6">
          <div class="chips-input">
            <ion-label>Profile Descriptors</ion-label>
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
          </div>
        </ion-col>

        <ion-col size="12" size-md="6">
          <ion-label>Alliance</ion-label>
          <ion-input></ion-input>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size="12" size-md="8">
          <ion-label>Import from Europass</ion-label>
          <ion-input>
            <p slot="start" aria-hidden="true">@</p>
          </ion-input>
        </ion-col>

        <ion-col size="12" size-md="4" class="ion-text-center">
          <ion-avatar style="width:100px; height:100px; margin:auto;">
            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-button expand="block" color="primary" size="small" style="margin-top:8px;">
            Change Photo
          </ion-button>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size="12">
          <ion-button color="primary">Save</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>

  <div class="form-section">
    <h2>Personal Information</h2>
    <ion-grid>
      <ion-row>
        <ion-col size="12" size-md="6">
          <ion-label>Date of Birth</ion-label>
          <ion-input type="date"></ion-input>
        </ion-col>

        <ion-col size="12" size-md="6">
          <ion-label>Nationalities</ion-label>
          <ion-select>
            <ion-select-option>Greek</ion-select-option>
            <ion-select-option>French</ion-select-option>
          </ion-select>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size="12" size-md="4">
          <ion-label>Phone</ion-label>
          <ion-input>
            <ion-icon slot="start" :icon="callOutline"></ion-icon>
          </ion-input>
        </ion-col>

        <ion-col size="12" size-md="4">
          <ion-label>Personal Site</ion-label>
          <ion-input>
            <ion-icon slot="start" :icon="openOutline"></ion-icon>
          </ion-input>
        </ion-col>

        <ion-col size="12" size-md="4">
          <ion-label>Email 2</ion-label>
          <ion-input>
            <p slot="start" aria-hidden="true">@</p>
          </ion-input>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col></ion-col>
        <h4>Adress</h4>
        <ion-col></ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12" size-md="3">
          <ion-label>Full Address</ion-label>
          <ion-input>
            <ion-icon slot="start" :icon="locationOutline"></ion-icon>
          </ion-input>
        </ion-col>

        <ion-col size="12" size-md="3">
          <ion-label>Country</ion-label>
          <ion-input>
            <ion-icon slot="start" :icon="globeOutline"></ion-icon>
          </ion-input>
        </ion-col>

        <ion-col size="12" size-md="3">
          <ion-label>City</ion-label>
          <ion-input>
            <ion-icon slot="start" :icon="mapOutline"></ion-icon>
          </ion-input>
        </ion-col>

        <ion-col size="12" size-md="3">
          <ion-label>Postal Code</ion-label>
          <ion-input>
            <ion-icon slot="start" :icon="mailOutline"></ion-icon>
          </ion-input>
        </ion-col>
      </ion-row>

      <ion-row>
        <ion-col size="12">
          <ion-button color="primary">Save</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>


<script setup>
import { IonLabel, IonAvatar, IonButton, IonGrid, IonRow, IonCol, IonInput, IonModal, IonDatetime, IonChip, IonIcon, IonSelectOption, IonSelect, IonDatetimeButton} from '@ionic/vue';
import { callOutline, closeOutline, globeOutline, locationOutline, mailOutline, mapOutline, openOutline } from 'ionicons/icons'
</script>

<style scoped>

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
.form-section {
  background: var(--ion-color-light);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
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
  .form-section {
    background: var(--ion-color-dark);
  }
}
ion-label{
  padding-bottom: 3px;
  font-size: 14px;
}
</style>
