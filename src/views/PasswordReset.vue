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
                  <ion-card-title>Password Reset</ion-card-title>
                  <ion-card-subtitle>
                    Complete the password reset by filling the form.
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                    <ion-item>
                        <ion-input label="Email" label-placement="floating" value="user@email.com"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-input v-model="password" label="Password" type="password" label-placement="floating" @ionInput="onPasswordInput"></ion-input>
                    </ion-item>
                    <ion-note v-if="errors.password" color="danger">{{ errors.password }}</ion-note>

                    <!-- Password Strength Bar -->
                    <div v-if="password" class="password-strength">
                        <div class="strength-bar" :class="passwordStrengthClass"></div>
                    </div>

                    <ion-item>
                        <ion-input v-model="confirmPassword" label="Confirm Password" type="password" label-placement="floating"></ion-input>
                    </ion-item>
                    <ion-note v-if="errors.confirmPassword" color="danger">{{ errors.confirmPassword }}</ion-note>
                    <ion-button expand="block" @click="handleSubmit">Reset</ion-button>
                </ion-card-content>
            </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup>
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonCardSubtitle, IonInput, IonNote, IonItem } from '@ionic/vue'
import leftSide from '@/components/leftSide.vue'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isMobile = ref(false)
const password = ref('')
const confirmPassword = ref('')
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

function validatePassword() {
  if (!password.value.trim()) {
    errors.value.password = 'This field is required'
  } else {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    if (!passRegex.test(password.value)) {
      errors.value.password =
        'Password must have 1 upper, 1 lower, 1 number, and be at least 8 characters'
    } else if (password.value === 'oldPassword1') {
      errors.value.password = "New password can't be the same as the old password"
    } else {
      errors.value.password = ''
    }
  }
}

function validateConfirmPassword() {
  if (!confirmPassword.value.trim()) {
    errors.value.confirmPassword = 'This field is required'
  } else if (confirmPassword.value !== password.value) {
    errors.value.confirmPassword = 'Passwords do not match'
  } else {
    errors.value.confirmPassword = ''
  }
}

function handleSubmit() {
  validatePassword()
  validateConfirmPassword()

  const hasErrors = Object.values(errors.value).some((e) => e)
  if (!hasErrors) {
    console.log('Form submitted:', {
      password: password.value
    })
    router.push('/email-verification')
  }
}

const onPasswordInput = (event) => {
  password.value = event.detail.value || ''
}

const passwordStrengthClass = computed(() => {
  const value = password.value
  let score = 0

  if (value.length >= 8) score++
  if (/[A-Z]/.test(value)) score++
  if (/[a-z]/.test(value)) score++
  if (/[0-9]/.test(value)) score++
  if (/[^A-Za-z0-9]/.test(value)) score++

  if (score <= 1) return 'weak'
  if (score === 2) return 'medium'
  if (score === 3) return 'strong'
  return 'very-strong'
})
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


.password-strength {
  height: 6px;
  width: 100%;
  background: #e0e0e0;
  border-radius: 4px;
  margin: 0.5rem 0 1rem;
}

.strength-bar {
  height: 100%;
  width: 0;
  border-radius: 4px;
  transition: width 0.3s ease, background 0.3s ease;
}

.strength-bar.weak {
  width: 25%;
  background: #ef4444; 
}

.strength-bar.medium {
  width: 50%;
  background: #f59e0b;
}

.strength-bar.strong {
  width: 75%;
  background: #10b981;
}

.strength-bar.very-strong {
  width: 100%;
  background: #0284c7; 
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
