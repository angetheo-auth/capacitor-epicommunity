<template>
  <ion-page>
    <ion-content class="eVer-page">
      <div class="eVer-container">
        <!-- LEFT SIDE -->
        <left-side  />

        <!-- RIGHT SIDE -->
        <div class="eVer-right">
            <ion-card>
                <ion-card-header>
                  <ion-card-title>Verify Your Email Address</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <p>Before proceeding to the EPICommunity, please check your email for a verification link. If you did not receive the email, click the button to get another.</p>
                    <ion-button class="ion-padding" color="primary">Request another</ion-button>
                </ion-card-content>
            </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import {
  IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton
} from "@ionic/vue";
import leftSide from "@/components/leftSide.vue";
import { ref, onMounted, onBeforeUnmount} from "vue";

const isMobile = ref(false);

function checkScreen() {
  isMobile.value = window.innerWidth < 990;
}
onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreen);
});

</script>

<style scoped>

.eVer-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.eVer-right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 2;
}

/* Applies only on mobile */
@media (max-width: 990px) {
  .eVer-container {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    min-height: 100vh;     
    padding: 1.5rem;
  }
}

@media (max-width: 992px) {
  .eVer-container {
    flex-direction: column;
  }
  .eVer-right {
    width: 100%;
    padding: 1rem;
  }
}

</style>
