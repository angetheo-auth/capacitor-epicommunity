<template>
  <div class="section-title">
    <h2>General Information</h2>
  </div>
  <ion-grid>
    <ion-row>
      <!-- Summary Card -->
      <ion-col size="12" size-md="6">
        <ion-card>
          <ion-item>
            <ion-icon slot="start" :icon="peopleOutline"></ion-icon>
            <ion-label class="item-label">
              <div class="label-content">
                <strong>Friends</strong>
                <span class="value">19</span>
              </div>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon slot="start" :icon="createOutline"></ion-icon>
            <ion-label class="item-label">
              <div class="label-content">
                <strong>Assessments</strong>
                <span class="value">27</span>
              </div>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-icon slot="start" :icon="clipboardOutline"></ion-icon>
            <ion-label class="item-label">
              <div class="label-content">
                <strong>Profile Score</strong>
                <span class="value" >2100</span>
              </div>
            </ion-label>
          </ion-item>
        </ion-card>
      </ion-col>
      <!-- Latest Additions -->
      <ion-col size="12" size-md="6">
        <ion-card>
          <ion-item>
            <strong>Latest Additions</strong>
            <ion-buttons slot="end">
              <ion-button  @click="prevAddition" :disabled="currentIndex === 0">
                <ion-icon slot="icon-only" :icon="chevronBackOutline"></ion-icon>
              </ion-button>
              <ion-button  @click="nextAddition" :disabled="currentIndex === additions.length - 1">
                <ion-icon slot="icon-only" :icon="chevronForwardOutline"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-item>
          <ion-card-content>
            <ion-card-title> {{ additions[currentIndex].title }}</ion-card-title>
            <p>{{ additions[currentIndex].description }}</p>
            <ion-item lies="none">
              <ion-chip color="primary">{{ additions[currentIndex].date }}</ion-chip>
              <ion-button size="small" color="primary" slot="end">
                View Publication
              </ion-button>
            </ion-item>
            
          </ion-card-content>
          
        </ion-card>
      </ion-col>
    </ion-row>

    <ion-row>
      <!-- Top Categories -->
      <ion-col size="12" size-md="6">
        <ion-card>
          <ion-item>
            <strong>Top Categories</strong>
          </ion-item>
          <ion-card-content>
            <ion-segment v-model="selectedCategory" value="LMS">
              <ion-segment-button value="LMS">
                <ion-icon :icon="cubeOutline"></ion-icon>
                <ion-label>LMS</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Java">
                <ion-icon :icon="codeOutline"></ion-icon>
                <ion-label>JAVA</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Bootstrap">
                <ion-icon :icon="pulseOutline"></ion-icon>
                <ion-label>Bootstrap</ion-label>
              </ion-segment-button>
            </ion-segment>
            <div v-if="currentCategory">
              <ion-item>
                <ion-label slot="start">
                  <strong>{{ currentCategory.name }}</strong>
                  <p>Your impact score in {{ currentCategory.name }} category</p>
                </ion-label>
                <ion-chip color="success">{{ currentCategory.score }}%</ion-chip>
                <ion-progress-bar :value="currentCategory.score / 100" color="primary"></ion-progress-bar>
              </ion-item>
            </div>
          </ion-card-content>
        </ion-card>
      </ion-col>
      <!-- Profile Completion -->
      <ion-col size="12" size-md="6">
        <ion-card>
          <ion-item>
            <ion-label>
              <div class="completion-header">
                <strong>Profile Completion</strong>
                <ion-card-subtitle class="ion-padding">The profile completion indicates</ion-card-subtitle>
                <ion-card-subtitle>70%</ion-card-subtitle>
                <ion-progress-bar value="0.7" color="primary"></ion-progress-bar>
              </div>
            </ion-label>
          </ion-item>
          
          <ion-item>
            <ion-icon slot="start" :icon="cubeOutline"></ion-icon>
            <ion-label class="item-label">
              <div class="label-content">
                <strong>Badges</strong>
                <span class="value" >2</span>
              </div>
            </ion-label>
          </ion-item>
          
          <ion-item>
            <ion-icon slot="start" :icon="cubeOutline"></ion-icon>
            <ion-label class="item-label">
              <div class="label-content">
                <strong>Given Assessments</strong>
                <span class="value" >5</span>
              </div>
            </ion-label>
          </ion-item>
        </ion-card>
      </ion-col>
    </ion-row>

    <ion-row>
      <!-- Latest Assessments -->
      <ion-col size="12" size-md="6" >
        <ion-card>
          <ion-item>
            <strong>Latest Assessments</strong>
          </ion-item>
          <ion-item lines="none"v-for="assessor in assessors" :key="assessor.id">
            <ion-avatar slot="start">
              <img :src="assessor.avatar" alt="assesor" />
            </ion-avatar>
            <ion-label>
              <h2>{{ assessor.name }}</h2>
              <p>{{ assessor.role }}</p>
            </ion-label>
            <ion-label slot="end">
              <p>{{ assessor.date }}</p>
            </ion-label>
          </ion-item>
        </ion-card>
      </ion-col>
      <!-- Profile Score Progress -->
      <ion-col size="12" size-md="6">
        <ion-card>
          <ion-item>
            <strong>Profile Score Progress</strong>
            <ion-button fill="outline" size="small" slot="end">Export</ion-button>
      
          </ion-item>
          <ion-item>
            <ion-text color="primary" class="ion-padding">•</ion-text>
            <ion-text>Profile score over time</ion-text>
            <ion-select placeholder="Filter by Month" interface="popover" slot="end">
              <ion-select-option value="month">By Month</ion-select-option>
              <ion-select-option value="week">By Week</ion-select-option>
              <ion-select-option value="year">By Year</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-card-content>
            <div id="profile-score-chart" style="width: 100%; height: 300px;"></div>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>


</template>

<script setup>
  import { IonCard, IonText, IonSelect, IonSelectOption, IonCol, IonGrid, IonRow, IonItem, IonSegment, IonSegmentButton, IonIcon, IonLabel, IonChip, IonCardTitle, IonCardContent, IonCardSubtitle, IonButtons, IonButton, IonProgressBar} from '@ionic/vue';
  import {clipboardOutline, createOutline, peopleOutline, chevronBackOutline, chevronForwardOutline, cubeOutline, codeOutline, pulseOutline} from 'ionicons/icons';
  import { ref, onMounted, computed} from "vue";
  import Highcharts from "highcharts";

  const additions = ref([
    {
      title: "Publication #1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id laoreet elit.Mauris eros urna, pretium sit amet orci sed, aliquet tincidunt ex. Vivamus sit amet diam ornare nulla tempus tempus. Sed aliquet dolor massa. ",
      date: "01 June 2021"
    },
    {
      title: "Publication #2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id laoreet elit.Mauris eros urna, pretium sit amet orci sed, aliquet tincidunt ex. Vivamus sit amet diam ornare nulla tempus tempus. Sed aliquet dolor massa. ",
      date: "15 July 2021"
    },
    {
      title: "Publication #3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id laoreet elit.Mauris eros urna, pretium sit amet orci sed, aliquet tincidunt ex. Vivamus sit amet diam ornare nulla tempus tempus. Sed aliquet dolor massa. ",
      date: "30 August 2021"
    }
  ]);

  const currentIndex = ref(0);

  const prevAddition = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };

  const nextAddition = () => {
    if (currentIndex.value < additions.value.length - 1) {
      currentIndex.value++;
    }
  };

  onMounted(() => {
    Highcharts.chart("profile-score-chart", {
      chart: {
        type: "line",
        backgroundColor: "transparent",
      },
      title: { text: "" },
      xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: { style: { color: "#666" } },
      },
      yAxis: {
        title: { text: "Score" },
        gridLineColor: "#eee",
        labels: { style: { color: "#666" } },
      },
      legend: { enabled: false },
      credits: { enabled: false },
      series: [
        {
          name: "Profile Score",
          data: [200, 300, 450, 700, 650, 800, 1000, 950, 1100, 1200, 1150, 1250],
          color: "#164E63", 
        },
      ],
    });
  });

const selectedCategory = ref("LMS");

const categories = ref([
  { name: "LMS", score: 7 },
  { name: "Java", score: 15 },
  { name: "Bootstrap", score: 40 },
]);
const currentCategory = computed(() =>
  categories.value.find((c) => c.name === selectedCategory.value)
);
  
const assessors = [
  {
    id: 1,
    name: "User Name 2",
    role: "R1",
    date: "1/5/2021",
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  {
    id: 2,
    name: "User Name 3",
    role: "R2",
    date: "15/6/2021",
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  {
    id: 3,
    name: "User Name 4",
    role: "R3",
    date: "30/8/2021",
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
  {
    id: 4,
    name: "User Name 5",
    role: "R4",
    date: "5/7/2021",
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
  },
];
</script>

<style scoped>
  .section-title {
    margin-bottom: 1rem;
  }

  .section-title h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }

  .item-label {
    display: flex;
    width: 100%;
  }

  .label-content {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 100%;
  }

  .value {
    font-weight: 600;
    color: var(--ion-color-primary);
  }
</style>