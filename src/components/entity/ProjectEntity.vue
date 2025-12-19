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
    <p slot="end"><strong>Group:</strong> Group name</p>
  </ion-item>
  <ion-item lines="none">
    <ion-avatar>
      <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
    </ion-avatar>
    <ion-label class="ion-padding">
      <p><strong>John Doe</strong></p>
      <p>R1</p>
    </ion-label>
  </ion-item>
</template>

<script setup>
import { IonItem, IonAvatar, IonLabel } from '@ionic/vue'

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