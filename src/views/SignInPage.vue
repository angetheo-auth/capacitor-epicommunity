<template>
  <ion-page>
    <ion-content class="signin-page">
      <div class="signin-container">
        <!-- LEFT SIDE -->
        <left-side  />

        <!-- RIGHT SIDE -->
        <div class="signin-right">
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Sign In</ion-card-title>
                    <ion-card-subtitle>
                        A few more clicks to sign in to your EPICommunity account. 
                    </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-item>
                        <ion-input v-model="email" label="Email Address" label-placement="floating"></ion-input>
                    </ion-item>
                    <ion-note v-if="errors.email" color="danger">{{ errors.email }}</ion-note>
                    <ion-item>
                        <ion-input v-model="password" label="Password" type="password" label-placement="floating"></ion-input>
                    </ion-item>
                    <ion-note v-if="errors.password" color="danger">{{ errors.password }}</ion-note>
                    <ion-item>
                        <ion-checkbox slot="start"></ion-checkbox>
                        <ion-label>Remember me</ion-label>
                        <router-link to="/password-reset-request">Forgot Password?</router-link>
                    </ion-item>
                    <ion-button expand="block" @click="handleSubmit">Log In</ion-button>
                    <ion-button expand="block" fill="outline" router-link="/signup">Register</ion-button>
                    
                    <ion-label>By signing up you agree to our <a href="https://www.epicommunity.auth.gr/legal/terms">Terms and Contidions</a> & <a href="https://www.epicommunity.auth.gr/legal/privacy_policy">Privacy Policy</a></ion-label>
                   
                </ion-card-content>
            </ion-card>
            
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup>
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonCheckbox, IonCardSubtitle, IonNote, IonLabel } from '@ionic/vue'
import leftSide from '@/components/leftSide.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isMobile = ref(false)
const email = ref('')
const password = ref('')
const errors = ref({})

function checkScreen() {
  isMobile.value = window.innerWidth < 990
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen)
})

function validateEmail() {
  if (!email.value.trim()) {
    errors.value.email = 'This field is required'
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value)) {
      errors.value.email = 'Please enter a valid email address'
    } else if (email.value === 'test@epicur.com') {
      errors.value.email = ''
    } else {
      errors.value.email = 'These credentials do not match our records'
    }
  }
}

function validatePassword() {
  if (!password.value.trim()) {
    errors.value.password = 'This field is required'
  } else if (password.value === 'Test1234') {
    errors.value.password = ''
  } else {
    errors.value.password = 'These credentials do not match our records'
  }
}


function handleSubmit() {
  validateEmail()
  validatePassword()
  if (!errors.value.email && !errors.value.password) {
    console.log('Form submitted:', { email: email.value, password: password.value })
    router.push('/dashboard')
  }
}
</script>

<style scoped>

.signin-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.signin-right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 2;
}


/* Applies only on mobile */
@media (max-width: 990px) {
  .signin-container {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    min-height: 100vh;     
    padding: 1.5rem;
  }
}

@media (max-width: 992px) {
  .signin-container {
    flex-direction: column;
  }
  .signin-right {
    width: 100%;
    padding: 1rem;
  }
}

</style>
