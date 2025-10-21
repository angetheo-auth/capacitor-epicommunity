<template>
  <ion-grid>
    <!-- Course Title -->
    <ion-row>
      <ion-col size="12">
        <ion-item>
          <ion-label position="stacked">Course Title</ion-label>
          <ion-input placeholder="Title"></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>

    <!-- Description + Outcomes -->
    <ion-row>
      <ion-col size="12" size-md="6">
        <ion-item>
          <ion-label position="stacked">Course Description</ion-label>
          <ion-textarea placeholder="Description"></ion-textarea>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="6">
        <ion-item>
          <ion-label position="stacked">Learning Outcomes</ion-label>
          <ion-textarea placeholder="Outcomes"></ion-textarea>
        </ion-item>
      </ion-col>
    </ion-row>

    <!-- Institution / ECTS / Format -->
    <ion-row>
      <ion-col size="12" size-md="4">
        <ion-item>
          <ion-label position="stacked">Institution</ion-label>
          <ion-select placeholder="Select">
            <ion-select-option>AUTH</ion-select-option>
            <ion-select-option>MIT</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="4">
        <ion-item>
          <ion-label position="stacked">ECTS</ion-label>
          <ion-input placeholder="ECTS"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="4">
        <ion-item>
          <ion-label position="stacked">Course Format</ion-label>
          <ion-select placeholder="Select format">
            <ion-select-option>Online</ion-select-option>
            <ion-select-option>In-person</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-col>
    </ion-row>

    <!-- Target Group / Cost / Language -->
    <ion-row>
      <ion-col size="12" size-md="4">
        <ion-item>
          <ion-label position="stacked">Target Group</ion-label>
          <ion-input placeholder="e.g. R1"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="4">
        <ion-item>
          <ion-label position="stacked">Cost (€)</ion-label>
          <ion-input type="number" placeholder="Cost"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="4">
        <ion-item>
          <ion-label position="stacked">Language of Instruction</ion-label>
          <ion-input placeholder="Language"></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>

    <!-- Link / Contact -->
    <ion-row>
      <ion-col size="12" size-md="4">
        <ion-item>
          <ion-label position="stacked">Course Link</ion-label>
          <ion-input type="url" placeholder="URL"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="4">
        <ion-item>
          <ion-label position="stacked">Contact Person</ion-label>
          <ion-input placeholder="Name"></ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="4">
        <ion-item>
          <ion-label position="stacked">Contact Email</ion-label>
          <ion-input type="email" placeholder="Email"></ion-input>
        </ion-item>
      </ion-col>
    </ion-row>

    <!-- Dates -->
    <ion-row>
      <ion-col size="12" size-md="6">
        <ion-item>
          <ion-label position="stacked">From</ion-label>
          <ion-datetime presentation="date"></ion-datetime>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="6">
        <ion-item>
          <ion-label position="stacked">To</ion-label>
          <ion-datetime presentation="date"></ion-datetime>
        </ion-item>
      </ion-col>
    </ion-row>

    <!-- File Upload -->
    <ion-row>
      <ion-col size="12">
        <ion-item lines="none">
          <ion-label position="stacked">Course Logo</ion-label>
          <ion-button fill="outline" expand="block">
            Upload a file or drag and drop
          </ion-button>
        </ion-item>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonDatetime,
  IonButton,
} from "@ionic/vue";
</script>

<style scoped>
ion-item {
  --padding-start: 0;
}

ion-grid {
  --ion-grid-padding: 0;
  --ion-grid-column-padding: 0.5rem;
}

@media (max-width: 768px) {
  ion-col {
    margin-bottom: 0.75rem;
  }
}
</style>
