<template>
  <!-- Desktop -->
  <div class="desktop-layout">
    <div class="section-title">
      <h2>Badge List</h2>
    </div>
    <ion-grid>
      <ion-row class="desktop-badges">
        <ion-col v-for="badge in badges" :key="'desktop-' + badge.id" class="badge-col">
          <ion-card>
            <ion-card-header>
              <div class="badge-icon">
                <ion-icon :icon="badge.icon" color="secondary"></ion-icon>
              </div>
              <ion-card-title>{{ badge.title }}</ion-card-title>
              <ion-card-subtitle color="secondary">Issued: {{ badge.date }}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <p>{{ badge.description }}</p>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
    <div class="pagination">
      <ion-select interface="popover" placeholder="5" class="page-size">
        <ion-select-option value="5">5</ion-select-option>
        <ion-select-option value="10">10</ion-select-option>
        <ion-select-option value="20">20</ion-select-option>
      </ion-select>
    </div>
  </div>

  <!-- Mobile -->
  <div class="mobile-layout">
    <div class="vertical-container">
      <div v-for="badge in badges" :key="'mobile-' + badge.id" class="vertical-item">
        <ion-card>
          <ion-card-header>
            <div class="badge-icon">
              <ion-icon :icon="badge.icon" color="secondary"></ion-icon>
            </div>
            <ion-card-title>{{ badge.title }}</ion-card-title>
            <ion-card-subtitle color="secondary">Issued: {{ badge.date }}</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>{{ badge.description }}</p>
          </ion-card-content>
        </ion-card>
      </div>
    </div>
  </div>

</template>

<script setup>
import {IonCol, IonRow, IonGrid, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonSelect, IonSelectOption } from '@ionic/vue'
import { bookOutline, createOutline } from 'ionicons/icons'

const badges = [
  {
    id: 1,
    icon: bookOutline,
    title: "Most Liked Course",
    date: "5/5/2022",
    description: "A badge given to the users, who have a course in the top 10% of the most liked courses."
  },
  {
    id: 2,
    icon: createOutline,
    title: "Peer Revierwer",
    date: "12/5/2022",
    description: "A badge given to a user for a given number of assessments done by them."
  }
]
</script>

<style scoped>
.desktop-layout {
  display: none;
}
.mobile-layout {
  display: block;
}
.desktop-badges {
  display: flex;
  flex-wrap: nowrap;    
  overflow-x: auto;     
  gap: 1rem;
}

.badge-col {
  flex: 0 0 auto;       
  max-width: 250px;    
}

@media (min-width: 768px) {
  .desktop-layout {
    display: block;
  }
  .mobile-layout {
    display: none;
  }
}
.section-title {
  margin-bottom: 1rem;
}

.section-title h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}
.vertical-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.vertical-item {
  width: 100%;
}
.pagination {
  margin: 1rem;
}
.badge-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
}

ion-card-title {
  text-align: center;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

ion-card-subtitle {
  text-align: center;
}

</style>