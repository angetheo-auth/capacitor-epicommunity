<template>
  <ion-page>
    <ion-content class="signup-page">
      <div class="signup-container">
        <!-- LEFT SIDE -->
        <left-side  />

        <!-- RIGHT SIDE -->
        <div class="signup-right">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Sign Up</ion-card-title>
              <ion-card-subtitle>
                Fill the below form to become an <strong>EpiCommunity</strong> member.
              </ion-card-subtitle>
            </ion-card-header>

            <!-- FORM -->
            <ion-card-content>
              <ion-item>
                <ion-input v-model="firstName" label="First Name" label-placement="floating"></ion-input>
              </ion-item>
              <ion-note v-if="errors.firstName" color="danger">{{ errors.firstName }}</ion-note>
              <ion-item>
                <ion-input v-model="lastName" label="Last Name" label-placement="floating"></ion-input>
              </ion-item>
              <ion-note v-if="errors.lastName" color="danger">{{ errors.lastName }}</ion-note>
              <ion-item>
                <ion-input v-model="email" label="Email Address" label-placement="floating"></ion-input>
              </ion-item>
              <ion-note v-if="errors.email" color="danger">{{ errors.email }}</ion-note>
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

              <ion-item lines="none">
                <ion-checkbox v-model="agree" slot="start"></ion-checkbox>
                <ion-label>I agree to the <a href="https://www.epicommunity.auth.gr/legal/privacy_policy" @click="$event.stopPropagation()">EpiCommunity Privacy Policy</a>.</ion-label>
              </ion-item>
              <ion-note v-if="errors.agree" color="danger">{{ errors.agree }}</ion-note>

              <ion-button expand="block" @click="handleSubmit">Register</ion-button>
            </ion-card-content>
          </ion-card>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonNote, IonCardSubtitle, IonCheckbox, IonLabel } from "@ionic/vue"
import leftSide from "@/components/leftSide.vue"
import { ref, onMounted, onBeforeUnmount, computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const isMobile = ref(false)
const firstName = ref("")
const lastName = ref("")
const email = ref("")
const password = ref("")
const confirmPassword = ref("")
const errors = ref({})
const agree = ref(false)

function checkScreen() {
  isMobile.value = window.innerWidth < 990
}

onMounted(() => {
  checkScreen()
  window.addEventListener("resize", checkScreen)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreen)
})

function validateFirstName() {
  if (!firstName.value.trim()) {
    errors.value.firstName = "This field is required"
  } else if (firstName.value.length < 2) {
    errors.value.firstName = "First name must be at least 2 characters"
  } else {
    errors.value.firstName = ""
  }
}

function validateLastName() {
  if (!lastName.value.trim()) {
    errors.value.lastName = "This field is required"
  } else if (lastName.value.length < 2) {
    errors.value.lastName = "Last name must be at least 2 characters"
  } else {
    errors.value.lastName = ""
  }
}

function validateEmail() {
  if (!email.value.trim()) {
    errors.value.email = "This field is required"
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value)) {
      errors.value.email = "Please enter a valid email address"
    } else if (email.value === "used@email.com") {
      errors.value.email = "This email is already registered"
    } else {
      errors.value.email = ""
    }
  }
}

function validatePassword() {
  if (!password.value.trim()) {
    errors.value.password = "This field is required"
  } else {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    if (!passRegex.test(password.value)) {
      errors.value.password =
        "Password must have 1 upper, 1 lower, 1 number, and be at least 8 characters"
    } else {
      errors.value.password = ""
    }
  }
}

function validateConfirmPassword() {
  if (!confirmPassword.value.trim()) {
    errors.value.confirmPassword = "This field is required"
  } else if (confirmPassword.value !== password.value) {
    errors.value.confirmPassword = "Passwords do not match"
  } else {
    errors.value.confirmPassword = ""
  }
}

function validateAgreement() {
  if (!agree.value) {
    errors.value.agree = "You have to agree with the Privacy Policy"
  } else {
    errors.value.agree = ""
  }
}

function handleSubmit() {
  validateFirstName()
  validateLastName()
  validateEmail()
  validatePassword()
  validateConfirmPassword()
  validateAgreement()

  const hasErrors = Object.values(errors.value).some((e) => e)
  if (!hasErrors) {
    console.log("Form submitted:", {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    })
    router.push("/email-verification")
  }
}

const onPasswordInput = (event) => {
  password.value = event.detail.value || ""
}

const passwordStrengthClass = computed(() => {
  const value = password.value
  let score = 0

  if (value.length >= 8) score++
  if (/[A-Z]/.test(value)) score++
  if (/[a-z]/.test(value)) score++
  if (/[0-9]/.test(value)) score++
  if (/[^A-Za-z0-9]/.test(value)) score++

  if (score <= 1) return "weak"
  if (score === 2) return "medium"
  if (score === 3) return "strong"
  return "very-strong"
})
</script>


<style scoped>

.signup-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.signup-right {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 2;
}


@media (max-width: 990px) {
  .signup-container {
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
  .signup-container {
    flex-direction: column;
  }
  .signup-right {
    width: 100%;
    padding: 1rem;
  }
}

</style>
