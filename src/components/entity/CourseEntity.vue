<template>
    <ion-item lines="none">
        <h2><strong>Description</strong></h2>
    </ion-item>

    <ion-item lines="none">
        <p>{{ entity.description }}</p>
    </ion-item>

    <ion-item lines="none">
        <h2><strong>Learning Outcomes</strong></h2>
    </ion-item>

    <ion-item lines="none">
        <p>{{ entity.learningOutcomes }}</p>
    </ion-item>
    <ion-item lines="none">
        <h2><strong>Course Details</strong></h2>
    </ion-item>


    <!-- all this data can be passed dynamically via the entity prop -->
    <ion-grid>
        <ion-row>
        <ion-col size="12" size-md="4">
            <ion-row>
                <ion-icon class="ion-margin-end" :icon="clipboardOutline"></ion-icon>
                <p>Institution: Aristotle University of Thessaloniki</p>
            </ion-row>
            <ion-row><p>ECTS: 5</p></ion-row>
            <ion-row><p>Target Group: R1</p></ion-row>
            <ion-row>
                <ion-icon class="ion-margin-end" :icon="bookOutline"></ion-icon>
                <p>Course Format: MOOC</p>
            </ion-row>
        </ion-col>

        <ion-col size="12" size-md="4">
            <ion-row>
                <ion-icon class="ion-margin-end" :icon="walletOutline"></ion-icon>
                    <p>Cost: 500</p>
            </ion-row>
            <ion-row>
                <ion-icon class="ion-margin-end" :icon="mailOutline"></ion-icon>
                <p>Contact Email: test@organization.com</p>
            </ion-row>
            <ion-row>
                <ion-icon class="ion-margin-end" :icon="personOutline"></ion-icon>
                <p>Contact Person: Name Last</p>
            </ion-row>
            <ion-row>
                <ion-icon class="ion-margin-end" :icon="linkOutline"></ion-icon>
                <p>Course Link: www.fakelink.com</p>
            </ion-row>
            <ion-row>
                <ion-icon class="ion-margin-end" :icon="languageOutline"></ion-icon>
                <p>Language of Instruction: English</p>
            </ion-row>
        </ion-col>

        <ion-col size="12" size-md="4">
            <h2><strong>Co-Teachers</strong></h2>
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
    <ion-item lines="none">
        <h2><strong>Tags</strong></h2>
    </ion-item>
    <ion-item lines="none">
        <p class="primary-text">#Tag 0  #Tag 1  #Tag 2</p>
    </ion-item>
    <ion-item>
        <ion-avatar>
        <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
        </ion-avatar>
        <ion-label class="ion-padding">
        <p><strong>John Doe, </strong>Teacher</p>
        <p>R4</p>
        </ion-label>
    </ion-item>
</template>

<script setup>
import { IonItem, IonGrid, IonRow, IonCol, IonIcon, IonAvatar, IonLabel } from '@ionic/vue'

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