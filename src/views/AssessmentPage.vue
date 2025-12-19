<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>Assessment</ion-title>
        <ion-buttons slot="end" class="ion-margin-end">
            <ion-button>
              <ion-icon slot="icon-only" :icon="searchOutline"></ion-icon>
            </ion-button>
            <ion-button>
              <ion-icon slot="icon-only" :icon="notificationsOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <div class="role-selection">

    <div class="mobile-role-select">
        <ion-select v-model="selectedRole" placeholder="Select role" class="ion-padding">
        <ion-select-option value="researcher">Researcher Role</ion-select-option>
        <ion-select-option value="teacher">Teacher Role</ion-select-option>
        <ion-select-option value="entrepreneur">Entrepreneurial Role</ion-select-option>
        <ion-select-option value="service">Service Role</ion-select-option>
        </ion-select>
    </div>

    <ion-grid class="desktop-role-cards">
        <ion-row>
        <ion-col size="12" size-md="3" v-for="role in roles" :key="role.value">
            <div class="role-card" :class="{ active: selectedRole === role.value }"
                @click="selectedRole = role.value">
            <ion-icon :icon="role.icon" class="role-icon"></ion-icon>
            <h3>{{ role.title }}</h3>
            <p>{{ role.description }}</p>
            </div>
        </ion-col>
        </ion-row>
    </ion-grid>

    </div>

    <ion-content>
        <div class="progress-wrapper">
            <div class="progress-container">
                <div v-for="(step, index) in steps" :key="index" class="progress-step" :class="{ active: currentStep === index + 1 }" @click="goToStep(index + 1)">
                    <div class="circle">{{ index + 1 }}</div>
                    <p>{{ step.label }}</p>
                </div>
            </div>
        </div>
        <ion-card v-for="item in criteria" :key="item.id" class="criteria-card">
            <ion-grid>
                <ion-row class="criteria-row">

                <!-- Criteria -->
                <ion-col size="12" size-md="2">
                    <h3 class="criteria-title">{{ item.title }}</h3>
                </ion-col>

                <!-- Description -->
                <ion-col size="12" size-md="6">
                    <p class="criteria-desc">{{ item.description }}</p>
                </ion-col>

                <!-- Comment -->
                <ion-col size="12" size-md="3">
                    <ion-textarea
                    placeholder="Leave a comment (Max 300 characters)"
                    :counter="true"
                    v-model="item.comment"
                    ></ion-textarea>
                </ion-col>

                <!-- Rating -->
                <ion-col size="12" size-md="1" class="rating-col">
                  <div v-if="isMobile" class="rating-wrapper">
                    <div>
                      <ion-segment v-model="item.rating">
                          <ion-segment-button value="1">1</ion-segment-button>
                          <ion-segment-button value="2">2</ion-segment-button>
                          <ion-segment-button value="3">3</ion-segment-button>
                          <ion-segment-button value="4">4</ion-segment-button>
                          <ion-segment-button value="5">5</ion-segment-button>
                      </ion-segment>
                    </div>
                  </div>
                  <div v-else>
                    <ion-select v-model="item.rating" interface="popover" placeholder="1">
                      <ion-select-option value="1">1</ion-select-option>
                      <ion-select-option value="2">2</ion-select-option>
                      <ion-select-option value="3">3</ion-select-option>
                      <ion-select-option value="4">4</ion-select-option>
                      <ion-select-option value="5">5</ion-select-option>
                    </ion-select>
                  </div>
                </ion-col>
                </ion-row>
            </ion-grid>
        </ion-card>

        <div class="step-nav">
        <ion-button fill="outline" :disabled="currentStep === 1" @click="prevStep">Back</ion-button>
        <ion-button color="primary" @click="nextStep">
          {{ currentStep === steps.length ? "Finish" : "Next" }}
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import {
  IonPage,
  IonMenuButton,
  IonHeader,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonActionSheet,
  IonItem,
  IonInput,
  IonTextarea,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonChip,
  IonIcon,
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonModal
} from '@ionic/vue'

import {
  searchOutline,
  notificationsOutline,
  bookOutline,
  businessOutline,
  bulbOutline,
  libraryOutline
} from 'ionicons/icons'

const isMobile = ref(window.innerWidth < 768)

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768
})

const steps = [
  { label: 'Core Criteria' },
  { label: 'Specific Criteria' },
  { label: 'Personal Criteria' }
]

const currentStep = ref(1)

const selectedRole = ref('researcher')

const roles = [
  {
    value: 'researcher',
    title: 'Researcher Role',
    description: 'Researcher role description',
    icon: libraryOutline
  },
  {
    value: 'teacher',
    title: 'Teacher Role',
    description: 'Teacher role description',
    icon: bookOutline
  },
  {
    value: 'entrepreneur',
    title: 'Entrepreneurial Role',
    description: 'Entrepreneurial role description',
    icon: bulbOutline
  },
  {
    value: 'service',
    title: 'Service Role',
    description: 'Service role description',
    icon: businessOutline
  }
]

const criteria = ref([
  {
    id: 1,
    title: 'Carry Out Research',
    description:
      'Ability for critical analysis, evaluation and synthesis of new and complex ideas; to conduct research under supervision or independently to advance a research agenda and to take the lead in executing collaborative research projects. Development of a strategic vision on the future of the research field and contribute through original research by developing a substantial body of work, innovation or application.',
    comment: '',
    rating: '1'
  },
  {
    id: 2,
    title: 'Subject Matter Expertise',
    description:
      'Understanding of a field of study and subject area and the ability to conceive, design, implement and adapt a substantial programme of research with integrity in the subject area using the appropriate research methodologies and approaches',
    comment: '',
    rating: '1'
  },
  {
    id: 3,
    title: 'Value team science',
    description:
      'Contribute and engage in collaborative, team-based research and share tasks and responsibilities equally among all team members and empower and support young researchers',
    comment: '',
    rating: '1'
  }
])

const nextStep = () => {
  if (currentStep.value < steps.length) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const goToStep = (step) => {
  currentStep.value = step
}
</script>


<style scoped>
.progress-wrapper {
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.progress-wrapper::-webkit-scrollbar {
    display: none; 
}

.progress-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 2rem;
    gap: 2rem;
    min-width: max-content;
    padding: 0 0.5rem;
}

.progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--ion-color-medium);
    cursor: pointer;
    white-space: nowrap;
}

.progress-step.active {
    color: var(--ion-color-primary);
}

.circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background:var(--ion-color-medium);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #fff;
    transition: all 0.3s ease;
}

.progress-step.active .circle {
    background: var(--ion-color-primary);
}

.step-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
}

.step-content h2 {
    margin-bottom: 1rem;
}

.step-nav {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    max-width: 800px;
    margin-inline: auto;
}

ion-input,
ion-select,
ion-textarea {
    margin-bottom: 1rem;
}

.horizontal-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
}

.role-selection {
  margin-bottom: 2rem;
}

/* Desktop role cards */
.desktop-role-cards {
  display: block;
}

.role-card {
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid var(--ion-color-light);
  background: var(--ion-color-light);
  cursor: pointer;
  transition: 0.2s;
  text-align: center;
}
.role-card.active {
  border-color: var(--ion-color-primary);
}
.role-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

/* Mobile dropdown */
.mobile-role-select {
  display: none;
  margin-bottom: 1rem;
}
.criteria-card {
  padding: 12px;
  margin-bottom: 16px;
}

.criteria-title {
  font-weight: 600;
  font-size: 1rem;
}

.criteria-desc {
  font-size: 0.9rem;
  color: var(--ion-color-medium);
}

.rating-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rating-col {
  text-align: center;
}

@media (max-width: 768px) {
  .rating-wrapper ion-segment {
    transform: scale(0.85);
  }
}

/* Swap desktop → mobile */
@media (max-width: 768px) {
  .desktop-role-cards {
    display: none;
  }
  .mobile-role-select {
    display: block;
  }
}


@media (max-width: 768px) {
    .progress-container {
        justify-content: flex-start; 
        gap: 1.5rem;
    }

    .step-nav {
        flex-direction: column;
        gap: 1rem;
    }
}

ion-input,
ion-select,
ion-textarea {
  --background: var(--ion-color-light);
  --color: var(--ion-text-color);
  --border-radius: 8px;
  --border-width: 1px;
  --border-style: solid;
  --padding-start: 12px;
  --padding-end: 12px;
  margin-bottom: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
@media (prefers-color-scheme: dark) {
  ion-input,
  ion-select,
  ion-textarea {
    --background: var(--ion-color-dark-shade);
  }
  
.role-card {
  background: var(--ion-color-dark);
  border: 1px solid var(--ion-color-dark-shade);
}
}

</style>
