<template>
  <ion-grid>
    <ion-row>
      <ion-col size="12">
        <ion-card>
          <ion-item>
            <ion-avatar>
              <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
            </ion-avatar>
            <ion-label>
              <p><strong>John Doe</strong></p>
              <p class="role">Moderator</p>
            </ion-label>
          </ion-item>
          <ion-card-content>
            <ion-card-title>
              Announcement #1
            </ion-card-title>
            <ion-item lines="none">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum neque ac eros bibendum, vitae placerat felis molestie. </p>
            </ion-item>
            <ion-badge color="primary">
              01 June 2025
            </ion-badge>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12">
        <ion-card>
          <ion-item>
            <ion-avatar>
              <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
            </ion-avatar>
            <ion-label>
              <p><strong>John Doe</strong></p>
              <p class="role">Moderator</p>
            </ion-label>
          </ion-item>
          <ion-card-content>
            <ion-card-title>
              Announcement #2
            </ion-card-title>
            <ion-item lines="none">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum neque ac eros bibendum, vitae placerat felis molestie. </p>
            </ion-item>
            <ion-badge color="primary">
              02 June 2025
            </ion-badge>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12">
        <ion-card>
          <ion-item>
            <ion-avatar>
              <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
            </ion-avatar>
            <ion-label>
              <p><strong>John Doe</strong></p>
              <p class="role">Moderator</p>
            </ion-label>
          </ion-item>
          <ion-card-content>
            <ion-card-title>
              Announcement #3
            </ion-card-title>
            <ion-item lines="none">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum neque ac eros bibendum, vitae placerat felis molestie. </p>
            </ion-item>
            <ion-badge color="primary">
              15 June 2025
            </ion-badge>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>


<script setup>
import { IonGrid, IonRow, IonCol, IonCard, IonCardTitle, IonBadge, IonCardContent, IonAvatar, IonItem, IonLabel} from "@ionic/vue";


</script>

<style scoped>
.role{
  color: var(--ion-color-warning)
}
</style>
