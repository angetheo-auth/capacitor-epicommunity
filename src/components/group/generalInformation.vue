<template>
    <ion-grid>
    <ion-row>
      <ion-col size="12" size-md="6">
        <ion-card>
          <ion-item>
            <ion-icon slot="start" :icon="peopleOutline"></ion-icon>
            <ion-label class="item-label">
              <div class="label-content">
                <strong>Members</strong>
                <span class="value">19</span>
              </div>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-icon slot="start" :icon="clipboardOutline"></ion-icon>
            <ion-label class="item-label">
              <div class="label-content">
                <strong>Group type</strong>
                <span class="value">Open</span>
              </div>
            </ion-label>
          </ion-item>
        </ion-card>
      </ion-col>
      <ion-col size="12" size-md="6">
        <ion-card>
          <ion-item>Group 1 Name </ion-item>
          <ion-card-content>
            <ion-item lines="none">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum neque ac eros bibendum, vitae placerat felis molestie. </p>
            </ion-item>
            <div class="value">
              #Tag 0 #Tag 1 #Tag 2
            </div>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12">
        <ion-card>
          <ion-item>
            <ion-icon slot="start" :icon="thumbsUpOutline"></ion-icon>
            <ion-label class="item-label">
              <div class="label-content">
                <strong>Endorsements</strong>
                <span class="value">2000</span>
              </div>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-icon slot="start" :icon="eyeOutline"></ion-icon>
            <ion-label class="item-label">
              <div class="label-content">
                <strong>Views</strong>
                <span class="value">15000</span>
              </div>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-icon slot="start" :icon="medalOutline"></ion-icon>
            <ion-label class="item-label">
              <div class="label-content">
                <strong>Badges</strong>
                <span class="value">1</span>
              </div>
            </ion-label>
          </ion-item>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <p>Badge List</p>
    </ion-row>
    <ion-row>
      <ion-card>
        <ion-card-header>
          <div class="badge-icon">
            <ion-icon :icon="thumbsUpOutline" color="secondary"></ion-icon>
          </div>
          <ion-card-title>Most Endorsed Group</ion-card-title>
          <ion-card-subtitle color="secondary">Issued: 5/5/2025</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>A badge given to the group, which is in the top 10% of the most liked groups.</p>
        </ion-card-content>
      </ion-card>
    </ion-row>
  </ion-grid>


</template>

<script setup>
  import { IonCard, IonText, IonSelect, IonSelectOption, IonCol, IonGrid, IonRow, IonItem, IonSegment, IonSegmentButton, IonIcon, IonLabel, IonChip, IonCardTitle, IonCardHeader, IonCardContent, IonCardSubtitle, IonButtons, IonButton, IonProgressBar} from '@ionic/vue';
  import { clipboardOutline, eyeOutline, medalOutline, peopleOutline, thumbsUpOutline} from 'ionicons/icons';
  import { ref, computed} from "vue";

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
  .badge-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
  }

</style>