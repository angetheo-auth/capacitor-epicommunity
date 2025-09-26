<template>
  <!-- Desktop layout -->
  <div class="desktop-layout">
    <div class="skills-header">
      <h2>Skills</h2>
      <ion-button size="small" color="primary">Edit Skills</ion-button>
    </div>
    <ion-grid>
      <ion-row>
        <ion-col size="12" size-sm="6" size-md="3" v-for="category in categories" :key="category.id">
          <ion-card class="category-card">
            <ion-card-header>
              <ion-icon :icon="category.icon" class="category-icon" />
              <ion-card-title>{{ category.title }}</ion-card-title>
              <ion-card-subtitle>{{ category.description }}</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid>
      <ion-row>
        <ion-col size="12" size-sm="6" size-md="3" v-for="category in categories" :key="'skills-' + category.id">
          <ion-card class="skills-card">
            <ion-list>
              <ion-item v-for="(skill, index) in skills[category.id]" :key="index" lines="none">
                <ion-label>{{ skill }}</ion-label>
              </ion-item>
            </ion-list>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>

  <!-- Mobile layout -->
  <div class="mobile-layout">
    <ion-accordion-group>
      <ion-accordion v-for="category in categories" :key="category.id" :value="category.id">
        <ion-item slot="header">
          <ion-icon :icon="category.icon" slot="start" color="secondary"/>
          <ion-label>
            <div class="accordion-title">{{ category.title }}</div>
            <div class="accordion-subtitle">{{ category.description }}</div>
          </ion-label>
        </ion-item>

        <div class="ion-padding" slot="content">
          <ion-list>
            <ion-item v-for="(skill, index) in skills[category.id]" :key="index"lines="none">
              <ion-label>{{ skill }}</ion-label>
            </ion-item>
          </ion-list>
        </div>
      </ion-accordion>
    </ion-accordion-group>
  </div>
</template>


<script setup>
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonList, IonItem, IonLabel, IonButton, IonAccordionGroup, IonAccordion} from "@ionic/vue";
import { peopleOutline, settingsOutline, languageOutline, hardwareChipOutline} from "ionicons/icons";

const categories = [
  {
    id: "communication",
    title: "Communication/Interpersonal Skills",
    description: "Communication/Interpersonal skills description",
    icon: peopleOutline,
  },
  {
    id: "organizational",
    title: "Organizational Skills",
    description: "Organizational skills description",
    icon: settingsOutline,
  },
  {
    id: "digital",
    title: "Digital Skills",
    description: "Digital skills description",
    icon: hardwareChipOutline,
  },
  {
    id: "language",
    title: "Language Skills",
    description: "Language skills description",
    icon: languageOutline,
  },
];

const skills = {
  communication: [
    "Communication skill 1",
    "Interpersonal skill 2",
    "Interpersonal skill 3",
    "Communication skill 4",
  ],
  organizational: [
    "Organizational skill 1",
    "Organizational skill 2",
    "Organizational skill 3",
    "Organizational skill 4",
  ],
  digital: [
    "Digital skill 1",
    "Digital skill 2",
    "Digital skill 3",
    "Digital skill 4",
  ],
  language: [
    "Language skill 1",
    "Language skill 2",
    "Language skill 3",
    "Language skill 4",
  ],
};
</script>

<style scoped>
.skills-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
}

.category-card {
  text-align: center;
  padding: 1rem;
  border: 2px solid #3b82f6;
  border-radius: 10px;
}

.category-icon {
  font-size: 2rem;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.skills-card {
  padding: 0.5rem;
}

ion-item {
  --min-height: 40px;
}

.accordion-title {
  font-weight: bold;
  font-size: 1rem;
  color: #3b82f6;
}

.accordion-subtitle {
  font-size: 0.8rem;
}


.desktop-layout {
  display: none;
}
.mobile-layout {
  display: block;
}

@media (min-width: 768px) {
  .desktop-layout {
    display: block;
  }
  .mobile-layout {
    display: none;
  }
}
</style>
