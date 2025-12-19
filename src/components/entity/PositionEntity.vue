<template>
    <ion-item lines="none">
        <h2><strong>Description</strong></h2>
    </ion-item>
    <ion-item lines="none">
        <p>{{ entity.description }}</p>
    </ion-item>
    <ion-item lines="none">
        <h2><strong>Tags</strong></h2>
    </ion-item>
    <ion-item lines="none">
        <p class="primary-text">#Tag 0  #Tag 1  #Tag 2</p>
    </ion-item>
    <ion-grid>
        <ion-row>
        <ion-col size="12" size-md="6">
            <h2><strong>Author</strong></h2>
            <ion-item lines="none">
            <ion-avatar>
                <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
            </ion-avatar>
            <ion-label class="ion-padding">
                <p><strong>John Doe, </strong>Teacher</p>
                <p>R4</p>
            </ion-label>
            </ion-item>
            
        </ion-col>
        <ion-col size="12" size-md="6">
            <h2><strong>Co-Authors</strong></h2>
            <ion-row>
            <ion-col>
                <strong>Name</strong>
            </ion-col>
            <ion-col>
                <strong>Has Profile</strong>
            </ion-col>
            </ion-row>
            <ion-row>
            <ion-col>
                <p>User Name 1</p>
            </ion-col>
            <ion-col>
                <p class="danger-text">No</p>
            </ion-col>
            </ion-row>
            <ion-row>
            <ion-col>
                <p>User Name 2</p>
            </ion-col>
            <ion-col>
                <p class="success-text">Yes</p>
            </ion-col>
            </ion-row>
        </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup>
import { IonItem, IonGrid, IonRow, IonCol, IonAvatar, IonLabel } from '@ionic/vue'

defineProps({
  entity: Object
})
</script>
<style scoped>
    .primary-text{
  color: var(--ion-color-primary)
}
.success-text{
  color: var(--ion-color-success)
}
.danger-text{
  color: var(--ion-color-danger)
}
</style>