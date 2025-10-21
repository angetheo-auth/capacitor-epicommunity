<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>Profile Create</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
        <div class="progress-wrapper">
            <div class="progress-container">
                <div v-for="(step, index) in steps" :key="index" class="progress-step" :class="{ active: currentStep === index + 1 }" @click="goToStep(index + 1)">
                    <div class="circle">{{ index + 1 }}</div>
                    <p>{{ step.label }}</p>
                </div>
            </div>
        </div>

        <div v-if="currentStep === 1" class="step-content">
            <h2>Research Information</h2>
            <ion-grid>
                <ion-row>
                    <ion-col size="12" size-md="6">
                        <ion-label>Institution/Organization</ion-label>
                        <ion-input v-model="form.institution"></ion-input>
                        <div class="chips-input">
                            <ion-label>Profile Descriptors</ion-label>
                            <div class="chips-container">
                                <ion-chip color="medium">
                                    <ion-label>LMS</ion-label>
                                    <ion-icon :icon="closeOutline"></ion-icon>
                                </ion-chip>
                                <ion-chip color="medium">
                                    <ion-label>Drupal</ion-label>
                                    <ion-icon :icon="closeOutline"></ion-icon>
                                </ion-chip>
                            </div>
                        </div>
                        <ion-label>Import from Europass</ion-label>
                        <ion-input label="Optional: If you have a Europass profile, you can use it to import your information regarding the steps 2, 3, 4." label-placement="stacked" v-model="form.importEuropass">
                            <p slot="start" aria-hidden="true">@</p>
                        </ion-input>

                    </ion-col>  
                    <ion-col size="12" size-md="6">
                        <div class="custom-select">
                            <ion-label>Research Level</ion-label>
                            <ion-select interface="popover" placeholder="R1" v-model="form.researchLevel" >
                                <ion-select-option value="R1">R1</ion-select-option>
                                <ion-select-option value="R2">R2</ion-select-option>
                                <ion-select-option value="R3">R3</ion-select-option>
                                <ion-select-option value="R4">R4</ion-select-option>
                            </ion-select>
                        </div>
                        <ion-label>Alliance</ion-label>
                        <ion-input v-model="form.alliance"></ion-input>
                        <ion-label>ORCID </ion-label>
                        <ion-input label="Optional: If you have ORCID, please feel free to fill the field bellow" label-placement="stacked" v-model="form.orchid">
                            <p slot="start" aria-hidden="true">#</p>
                        </ion-input>
                    </ion-col>
                </ion-row>
            
            </ion-grid>
            
        </div>

        <div v-else-if="currentStep === 2" class="step-content">
            <ion-grid>
                <ion-row>
                    <h2>Personal Information</h2>
                </ion-row>
                <ion-row>
                    <ion-col size="12" size-md="9">
                        <ion-row>
                            <ion-col size="12" size-md="6">
                                <ion-label>Date of Birth</ion-label>
                                <ion-input type="date" v-model="form.dateOfBirth"></ion-input>
                            </ion-col>
                            <ion-col size="12" size-md="6">
                                <ion-label>Nationalities</ion-label>
                                <ion-select v-model="form.nationalities">
                                    <ion-select-option>Greek</ion-select-option>
                                    <ion-select-option>French</ion-select-option>
                                </ion-select>
                            </ion-col>
                            <ion-col size="12" size-md="4">
                                <ion-label>Phone</ion-label>
                                <ion-input v-model="form.phone">
                                    <ion-icon slot="start" :icon="callOutline"></ion-icon>
                                </ion-input>
                            </ion-col>
                            <ion-col size="12" size-md="4">
                                <ion-label>Personal Site</ion-label>
                                <ion-input v-model="form.personalSite">
                                    <ion-icon slot="start" :icon="openOutline"></ion-icon>
                                </ion-input>
                            </ion-col>
                            <ion-col size="12" size-md="4">
                                <ion-label>Email 2</ion-label>
                                <ion-input v-model="form.email2">
                                    <p slot="start" aria-hidden="true">@</p>
                                </ion-input>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <h2>Address</h2>
                        </ion-row>
                        <ion-row>
                            <ion-col size="12" size-md="6">
                                <ion-label>Full Address</ion-label>
                                <ion-input v-model="form.fulladdress">
                                    <ion-icon slot="start" :icon="locationOutline"></ion-icon>
                                </ion-input>
                            </ion-col>
                            <ion-col size="12" size-md="6">
                                <ion-label>Country</ion-label>
                                <ion-input v-model="form.country">
                                    <ion-icon slot="start" :icon="globeOutline"></ion-icon>
                                </ion-input>
                            </ion-col>
                            <ion-col size="12" size-md="6">
                                <ion-label>City</ion-label>
                                <ion-input v-model="form.city">
                                    <ion-icon slot="start" :icon="mapOutline"></ion-icon>
                                </ion-input>
                            </ion-col>
                            <ion-col size="12" size-md="6">
                                <ion-label>Postal Code</ion-label>
                                <ion-input v-model="form.postalCode">
                                    <ion-icon slot="start" :icon="mailOutline"></ion-icon>
                                </ion-input>
                            </ion-col>
                        </ion-row>
                    </ion-col>
                    <ion-col size="12" size-md="3" class="photo-col">
                        <div class="photo-wrapper">
                            <ion-avatar class="profile-photo">
                            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Profile" />
                            </ion-avatar>
                            <ion-button color="primary" class="ion-margin-top">
                            Change Photo
                            </ion-button>
                        </div>
                    </ion-col>
                </ion-row>
            </ion-grid>

        </div>

        <div v-else-if="currentStep === 3" class="step-content">
            <div class="section-header">
                <h2>Courses</h2>
                <ion-button size="small" color="primary"  @click="openModal('course')">Add New Course</ion-button>
            </div>

            <div class="horizontal-scroll">
                <ion-card v-for="(course, index) in courses" :key="index" class="course-card">
                    <ion-item>
                        <ion-card-title>Course {{ index }}</ion-card-title>
                        <ion-button fill="clear" color="medium" slot="end" @click="showActions = true">
                            <ion-icon :icon="ellipsisVertical"></ion-icon>
                        </ion-button>
                    </ion-item>

                    <ion-card-content>
                        <strong>{{ course.title }}</strong>
                        <p>{{ course.description }}</p>
                        <ion-chip v-for="tag in course.tags" :key="tag">{{ tag }}</ion-chip>
                    </ion-card-content>

                    <ion-action-sheet :is-open="showActions" header="Actions" :buttons="actionButtons" @didDismiss="showActions = false"/>
                </ion-card>
            </div>

            <div class="section-header">
                <h2>Publications</h2>
                <ion-button size="small" color="primary" @click="openModal('publication')">Add New Publication</ion-button>
            </div>

            <div class="horizontal-scroll">
                <ion-card v-for="(pub, index) in publications" :key="index" class="course-card">
                    <ion-item>
                        <ion-card-title>Publication {{ index }}</ion-card-title>
                        <ion-button fill="clear" color="medium" slot="end" @click="showActions = true">
                            <ion-icon :icon="ellipsisVertical"></ion-icon>
                        </ion-button>
                    </ion-item>

                <ion-card-content>
                    <strong>{{ pub.title }}</strong>
                    <p>{{ pub.description }}</p>
                    <ion-chip v-for="tag in pub.tags" :key="tag">{{ tag }}</ion-chip>
                </ion-card-content>

                <ion-action-sheet :is-open="showActions" header="Actions" :buttons="actionButtons" @didDismiss="showActions = false"/>
                </ion-card>
            </div>

            <div class="section-header">
                <h2>Projects</h2>
                <ion-button size="small" color="primary" @click="openModal('project')">Add New Project</ion-button>
            </div>

            <div class="horizontal-scroll">
                <ion-card v-for="(prj, index) in projects" :key="index" class="course-card">
                    <ion-item>
                        <ion-card-title>Project {{ index }}</ion-card-title>
                        <ion-button fill="clear" color="medium" slot="end" @click="showActions = true">
                            <ion-icon :icon="ellipsisVertical"></ion-icon>
                        </ion-button>
                    </ion-item>

                <ion-card-content>
                    <strong>{{ prj.title }}</strong>
                    <p>{{ prj.description }}</p>
                    <ion-chip v-for="tag in prj.tags" :key="tag">{{ tag }}</ion-chip>
                </ion-card-content>

                <ion-action-sheet :is-open="showActions" header="Actions" :buttons="actionButtons" @didDismiss="showActions = false"/>
                </ion-card>
            </div>

             <div class="section-header">
                <h2>Positions</h2>
                <ion-button size="small" color="primary" @click="openModal('position')">Add New Position</ion-button>
            </div>

            <div class="horizontal-scroll">
                <ion-card v-for="(ps, index) in positions" :key="index" class="course-card">
                    <ion-item>
                        <ion-card-title>Position {{ index }}</ion-card-title>
                        <ion-button fill="clear" color="medium" slot="end" @click="showActions = true">
                            <ion-icon :icon="ellipsisVertical"></ion-icon>
                        </ion-button>
                    </ion-item>

                <ion-card-content>
                    <strong>{{ ps.title }}</strong>
                    <p>{{ ps.description }}</p>
                    <ion-chip v-for="tag in ps.tags" :key="tag">{{ tag }}</ion-chip>
                </ion-card-content>

                <ion-action-sheet :is-open="showActions" header="Actions" :buttons="actionButtons" @didDismiss="showActions = false"/>
                </ion-card>
            </div>
            <!-- MODAL -->
            <ion-modal :is-open="isModalOpen" @didDismiss="closeModal">
                <ion-header>
                <ion-toolbar>
                    <ion-title>{{ modalTitle }}</ion-title>
                    
                </ion-toolbar>
                </ion-header>

                <ion-content class="ion-padding">
                    <component :is="activeFormComponent" />
                    <ion-buttons>
                        <ion-button @click="closeModal">Cancel</ion-button>
                        <ion-button fill="solid" color="primary" @click="closeModal">Create</ion-button>
                    </ion-buttons>
                </ion-content>
            </ion-modal>
        </div>

        <div v-else-if="currentStep === 4" class="step-content">
            <h2>Language Skills</h2>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <div class="chips-input">
                            <ion-label>First Language</ion-label>
                            <div class="chips-container">
                                <ion-chip color="medium">
                                    <ion-label>English</ion-label>
                                    <ion-icon :icon="closeOutline"></ion-icon>
                                </ion-chip>
                            </div>
                        </div>
                    </ion-col>
                    <ion-col>
                        <div class="chips-input">
                            <ion-label>Other Languages</ion-label>
                            <div class="chips-container">
                                <ion-chip color="medium">
                                    <ion-label>German</ion-label>
                                    <ion-icon :icon="closeOutline"></ion-icon>
                                </ion-chip>
                            </div>
                        </div> 
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-label>
                        Digital Skills
                    </ion-label>
                    <ion-input></ion-input>
                </ion-row>
                <ion-row>
                    <ion-label>
                        Communication/Interpersonal Sills
                    </ion-label>
                    <ion-input></ion-input>
                </ion-row>
                <ion-row>
                    <ion-label>
                        Management/Leadership Skills
                    </ion-label>
                    <ion-input></ion-input>
                </ion-row>
            </ion-grid>
        </div>

        <!-- Navigation Buttons -->
        <div class="step-nav">
            <ion-button fill="outline" @click="handleBack">
                {{ currentStep === 1 ? "Change Role" : "Back" }}
            </ion-button>
            <ion-button color="primary" @click="handleNext">
                {{ currentStep === steps.length ? "Finish" : "Next" }}
            </ion-button>
        </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonActionSheet, IonItem, IonInput, IonTextarea, IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonLabel, IonChip, IonIcon, IonAvatar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonModal } from "@ionic/vue";
import { callOutline, ellipsisVertical, pencilOutline, trashOutline, closeOutline, globeOutline, locationOutline, mailOutline, mapOutline, openOutline, ellipsisVerticalOutline } from "ionicons/icons";
import CourseForm from "@/components/CourseForm.vue";
import PublicationForm from "@/components/PublicationForm.vue";
import ProjectForm from "@/components/ProjectForm.vue";
import PositionForm from "@/components/PositionForm.vue";

const router = useRouter();
const steps = [
    { label: "Research Information" },
    { label: "Personal Information" },
    { label: "Courses & Publications" },
    { label: "Skills" },
];

const currentStep = ref(1);

const form = ref({
    institution: "",
    researchLevel: "",
    importEuropass: "",
    firstName: "",
    lastName: "",
    courses: "",
    skills: "",
    alliance: "",
    orchid: "",
    dateOfBirth: "",
    nationalities: [],
    phone: "",
    personalSite: "",
    email2: "",
    fulladdress: "",
    country: "",
    city: "",
    postalCode: "",

});

const nextStep = () => {
    if (currentStep.value < steps.length) currentStep.value++;
};

const prevStep = () => {
    if (currentStep.value > 1) currentStep.value--;
};

const handleBack = () => {
    if (currentStep.value === 1) {
        router.push("/role-selection");
    } else {
        prevStep();
    }
};

const handleNext = () => {
    if (currentStep.value === steps.length) {
        router.push("/profile/Profile");
    }else{
        nextStep();
    }
};

const goToStep = (step: number) => {
    currentStep.value = step;
};

const courses = [
    { title: "Course title 0", description: "Course description 0", tags: ["LMS", "Drupal"] },
    { title: "Course title 1", description: "Course description 1", tags: ["LMS", "Drupal"] },
];

const publications = [
    { title: "Publication title 0", description: "Publication description 0", tags: ["LMS", "Drupal"] },
    { title: "Publication title 1", description: "Publication description 1", tags: ["LMS", "Drupal"] },
    { title: "Publication title 2", description: "Publication description 2", tags: ["LMS", "Drupal"] },
    { title: "Publication title 3", description: "Publication description 3", tags: ["LMS", "Drupal"] },
];
const projects = [
    { title: "Project title 0", description: "Project description 0", tags: ["LMS", "Drupal"] },
    { title: "Project title 1", description: "Project description 1", tags: ["LMS", "Drupal"] },
];
const positions = [
    { title: "Position title 0", description: "Position description 0", tags: ["LMS", "Drupal"] },
    { title: "Position title 1", description: "Position description 1", tags: ["LMS", "Drupal"] },
    { title: "Position title 2", description: "Position description 2", tags: ["LMS", "Drupal"] },
];

const isModalOpen = ref(false);
const activeType = ref<"course" | "publication" | "project" | "position" | null>(null);

const openModal = (type: typeof activeType.value) => {
  activeType.value = type;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  activeType.value = null;
};

const activeFormComponent = computed(() => {
    switch (activeType.value) {
        case "course":
        return CourseForm;
        case "publication":
        return PublicationForm;
        case "project":
        return ProjectForm;
        case "position":
        return PositionForm;
        default:
        return null;
    }
});

const modalTitle = computed(() => {
    switch (activeType.value) {
        case "course":
        return "Add New Course";
        case "publication":
        return "Add New Publication";
        case "project":
        return "Add New Project";
        case "position":
        return "Add New Position";
        default:
        return "";
    }
});

const showActions = ref(false)

const actionButtons = [
  {
    text: 'Edit',
    icon: pencilOutline,
    handler: () => {
      console.log('Edit clicked')
    }
  },
  {
    text: 'Delete',
    role: 'destructive',
    icon: trashOutline,
    handler: () => {
      console.log('Delete clicked')
    }
  },
  {
    text: 'Cancel',
    role: 'cancel'
  }
]
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
.chips-container {
    margin-bottom: 1rem;
}
.photo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.profile-photo {
    width: 120px;
    height: 120px;
    margin-bottom: 0.5rem;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
}

.horizontal-scroll {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
}

.course-card {
  flex: 0 0 auto;
  width: 250px;
  scroll-snap-align: start;
}

.course-card ion-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
</style>
