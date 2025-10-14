<template>
  <ion-page>
    <ion-content class="pw-page">
      <div class="pw-container">
        <!-- LEFT SIDE -->
        <left-side  />

        <!-- RIGHT SIDE -->
        <div class="pw-right">
            <ion-card>
                <ion-card-header>
                  <ion-card-title>Password Reset</ion-card-title>
                  <ion-card-subtitle>
                    Please provide your e-mail in order to reset your password.
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-item>
                        <ion-input label="Email Address" label-placement="floating"></ion-input>
                    </ion-item>
                    <ion-button expand="block" color="primary" router-link="password-reset">Send Password Reset Link</ion-button>
                    -------------------------------OR--------------------------------
                    <ion-button expand="block" fill="outline" color="primary" router-link="signin">Login</ion-button>
                </ion-card-content>
            </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import {
  IonInput, IonPage, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonItem
} from "@ionic/vue";
import leftSide from "@/components/leftSide.vue";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

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

.pw-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.pw-right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 2;
}

/* Applies only on mobile */
@media (max-width: 990px) {
  .pw-container {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    min-height: 100vh;     
    padding: 1.5rem;
  }
}

@media (max-width: 992px) {
  .pw-container {
    flex-direction: column;
  }
  .pw-right {
    width: 100%;
    padding: 1rem;
  }
}

</style>
