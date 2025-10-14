<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>Dashboard</ion-title>
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
    <ion-content :fullscreen="true">
      <!--Desktop layout-->
      <div v-if="!isMobile" class="desktop-layout">
        <ion-grid>
          <ion-row>
            <ion-col size="12" size-lg="9">
              <!-- Stats Cards -->
              <ion-grid>
                <ion-row>
                  <ion-col size="6" size-md="3" v-for="(stat, i) in stats" :key="i">
                    <ion-card>
                      <ion-card-header>
                        <ion-card-title>
                          <ion-icon :icon=stat.icon :color=stat.color></ion-icon>
                        </ion-card-title>
                        <ion-card-title>{{ stat.value }}</ion-card-title>
                        <ion-card-subtitle>{{ stat.label }}</ion-card-subtitle>
                      </ion-card-header>
                    </ion-card>
                  </ion-col>
                </ion-row>
              </ion-grid>

              <!-- Charts -->
              <ion-grid>
                <ion-row>
                  <ion-col size="12" size-md="6">
                    <ion-card>
                      <ion-card-header>
                        <ion-card-title>Profile Strength</ion-card-title>
                      </ion-card-header>
                      <ion-card-content>
                        <div id="profile-strength-chart"></div>
                      </ion-card-content>
                    </ion-card>
                  </ion-col>
                  <ion-col size="12" size-md="6">
                    <ion-card>
                      <ion-card-header>
                        <ion-card-title>Profile Progression</ion-card-title>
                      </ion-card-header>
                      <ion-card-content>
                        <div id="profile-progression-chart"></div>
                      </ion-card-content>
                    </ion-card>
                  </ion-col>
                </ion-row>
              </ion-grid>

              <!-- Friends News -->
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Latest Friends News</ion-card-title>
                </ion-card-header>
                <ion-grid class="friends-header hidden-sm">
                  <ion-row>
                    <ion-col size="1"></ion-col>
                    <ion-col size="3"><strong>Friend Name</strong></ion-col>
                    <ion-col size="3"><strong>Feed Overview</strong></ion-col>
                    <ion-col size="2"><strong>Status</strong></ion-col>
                    <ion-col size="3"><strong>Actions</strong></ion-col>
                  </ion-row>
                </ion-grid>
                <ion-grid class="friends-body">
                  <ion-row v-for="friend in friends" :key="friend.id" class="friend-row" >
                    <!-- Avatar -->
                    <ion-col size="1"  class="avatar-col">
                      <ion-avatar>
                        <img :src="friend.avatar" alt="friend" />
                      </ion-avatar>
                    </ion-col>
                    <!-- Friend Name -->
                    <ion-col size="3"  class="friend-info">
                      <strong>{{ friend.name }}</strong>
                      <p>{{ friend.role }}</p>
                    </ion-col>

                    <!-- Feed Overview -->
                    <ion-col size="3" >
                      {{ friend.feed }}
                    </ion-col>

                    <!-- Status -->
                    <ion-col size="2" >
                      <ion-badge :color="friend.status === 'Active' ? 'success' : 'danger'">
                        {{ friend.status }}
                      </ion-badge>
                    </ion-col>

                    <!-- Actions -->
                    <ion-col size="3"  class="actions">
                      <ion-button fill="clear" size="small" color="tertiary">
                        <ion-icon slot="start" :icon=personOutline></ion-icon>
                        Visit Profile</ion-button>
                      <ion-button fill="clear" size="small" color="secondary">
                        <ion-icon slot="start" :icon=chatboxOutline></ion-icon>
                        Message</ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card>
            </ion-col>

            <!-- RIGHT SIDE: Sidebar -->
            <ion-col size="12" size-lg="3">
              <!-- Recent Activity -->
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Recent Activity</ion-card-title>
                </ion-card-header>
                <ion-list>
                  <ion-item v-for="(act, i) in activities" :key="i">
                    <ion-icon :icon="act.icon" slot="start" :color="act.color"></ion-icon>
                    <ion-label>{{ act.text }}</ion-label>
                  </ion-item>
                </ion-list>
              </ion-card>

              <!-- Important Messages -->
              <ion-col size="12" size-md="6">
                <ion-card>
                  <ion-item>
                    <strong>Important EPICommunity Messages</strong>
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
                    <ion-card-subtitle>{{ additions[currentIndex].date }}</ion-card-subtitle>
                    <p>{{ additions[currentIndex].description }}</p>
                    <ion-item lies="none">
                      <ion-button size="small" fill="solid" slot="start" color="primary">
                        View Notes
                      </ion-button>
                      <ion-button size="small" fill="outline" slot="end">
                        Dismiss
                      </ion-button>
                    </ion-item>
                  </ion-card-content>
                  
                </ion-card>
              </ion-col>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <!--Mobile layout-->
      <div v-else class="mobile-layout">
        <ion-tabs>
          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="stats">
              <ion-icon :icon="barChartOutline" />
              <ion-label>Stats</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="activity">
              <ion-icon :icon="peopleOutline" />
              <ion-label>Activity</ion-label>
            </ion-tab-button>
          </ion-tab-bar>

          <ion-tab tab="stats">
            <ion-content class="stats-content">
                <ion-grid>
                  <ion-row>
                    <ion-col size="12">
                      <!-- Stats Cards -->
                      <ion-grid>
                        <ion-row>
                          <ion-col size="6" size-md="3" v-for="(stat, i) in stats" :key="i">
                            <ion-card>
                              <ion-card-header>
                                <ion-card-title>
                                  <ion-icon :icon=stat.icon :color=stat.color></ion-icon>
                                </ion-card-title>
                                <ion-card-title>{{ stat.value }}</ion-card-title>
                                <ion-card-subtitle>{{ stat.label }}</ion-card-subtitle>
                              </ion-card-header>
                            </ion-card>
                          </ion-col>
                        </ion-row>
                      </ion-grid>

                      <!-- Charts -->
                      <ion-grid>
                        <ion-row>
                          <ion-col size="12" size-md="6">
                            <ion-card>
                              <ion-card-header>
                                <ion-card-title>Profile Strength</ion-card-title>
                              </ion-card-header>
                              <ion-card-content>
                                <div id="profile-strength-chart"></div>
                              </ion-card-content>
                            </ion-card>
                          </ion-col>
                          <ion-col size="12" size-md="6">
                            <ion-card>
                              <ion-card-header>
                                <ion-card-title>Profile Progression</ion-card-title>
                              </ion-card-header>
                              <ion-card-content>
                                <div id="profile-progression-chart"></div>
                              </ion-card-content>
                            </ion-card>
                          </ion-col>
                        </ion-row>
                      </ion-grid>
                    </ion-col>
                  </ion-row>
              </ion-grid>
            </ion-content>
          </ion-tab>

          <ion-tab tab="activity">
            <ion-content>
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Recent Activity</ion-card-title>
                </ion-card-header>
                <ion-list>
                  <ion-item v-for="(act, i) in activities" :key="i">
                    <ion-icon :icon="act.icon" slot="start" :color=act.color></ion-icon>
                    <ion-label>{{ act.text }}</ion-label>
                  </ion-item>
                </ion-list>
              </ion-card>

              <ion-card>
                <ion-item>
                  <strong>Important EPICommunity Messages</strong>
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
                  <ion-card-subtitle>{{ additions[currentIndex].date }}</ion-card-subtitle>
                  <p>{{ additions[currentIndex].description }}</p>
                  <ion-item lies="none">
                    <ion-button size="small" fill="solid" slot="start" color="primary">
                      View Notes
                    </ion-button>
                    <ion-button size="small" fill="outline" slot="end">
                      Dismiss
                    </ion-button>
                  </ion-item>
                </ion-card-content>
                
              </ion-card>

              <ion-card>
                <ion-card-header>
                  <ion-card-title>Latest Friends News</ion-card-title>
                </ion-card-header>

                <ion-list>
                  <ion-item v-for="friend in friends" :key="friend.id" lines="full">
                    <ion-avatar slot="start">
                      <img :src="friend.avatar" alt="friend" />
                    </ion-avatar>
                    <ion-label>
                      <h2>{{ friend.name }}</h2>
                      <p>{{ friend.role }}</p>
                      <p>{{ friend.feed }}</p>
                      <ion-badge :color="friend.status === 'Active' ? 'success' : 'danger'">
                        {{ friend.status }}
                      </ion-badge>
                      <div class="actions">
                        <ion-button fill="clear" size="small" color="tertiary">
                          <ion-icon slot="start" :icon="personOutline"></ion-icon>
                          Visit Profile
                        </ion-button>
                        <ion-button fill="clear" size="small" color="secondary">
                          <ion-icon slot="start" :icon="chatboxOutline"></ion-icon>
                          Message
                        </ion-button>
                      </div>
                    </ion-label>
                  </ion-item>
                </ion-list>
              </ion-card>

            </ion-content>
          </ion-tab>
        </ion-tabs>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
  import {IonButtons,IonButton,IonIcon,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonList,IonItem,IonLabel,IonGrid,IonRow,IonCol,IonBadge,IonAvatar,IonTab,IonTabBar,IonTabButton,IonTabs} from "@ionic/vue";
  import { chevronBackOutline, chevronForwardOutline, notificationsOutline, schoolOutline, peopleOutline, thumbsUpOutline, clipboardOutline, bookmarkOutline, personOutline, chatboxOutline, barChartOutline, searchOutline, bookOutline, briefcaseOutline } from "ionicons/icons";
  import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
  import Highcharts from "highcharts";
  import HighchartsMore from "highcharts/highcharts-more";

  const isMobile = ref(false);

  function checkScreen() {
    isMobile.value = window.innerWidth < 990;
  }

  onMounted(() => {
    checkScreen();
    window.addEventListener('resize', checkScreen);
    initCharts();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreen);
  });

    
  watch(isMobile, async () => {
    await nextTick();
    initCharts();
  });

  function initCharts() {
    if (document.getElementById('profile-strength-chart')) {
      Highcharts.chart('profile-strength-chart', {
        chart: { type: 'pie', backgroundColor: 'transparent' },
        title: { text: '' },
        series: [{
          name: 'Profile Strength',
          data: [
            { name: 'Publications', y: 62 },
            { name: 'Projects', y: 30 },
            { name: 'Courses', y: 8 }
          ]
        }]
      });
    }

    if (document.getElementById('profile-progression-chart')) {
      HighchartsMore.chart('profile-progression-chart', {
        chart: { polar: true, type: "line",backgroundColor: 'transparent' },
        title: { text: "" },
        xAxis: {
          categories: ["Research", "Teaching", "Innovation", "Society"],
          tickmarkPlacement: "on",
          lineWidth: 0
        },
        yAxis: {
          gridLineInterpolation: "polygon",
          lineWidth: 0,
          min: 0
        },
        series: [
          {
            name: "Previous Month",
            data: [60, 70, 50, 80],
            pointPlacement: "on"
          },
          {
            name: "This Month",
            data: [80, 90, 65, 85],
            pointPlacement: "on"
          }
        ]
      });
    }
  }

  const additions = ref([
    {
      title: "Lorem #1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id laoreet elit.Mauris eros urna, pretium sit amet orci sed, aliquet tincidunt ex. Vivamus sit amet diam ornare nulla tempus tempus. Sed aliquet dolor massa. ",
      date: "01 June 2021"
    },
    {
      title: "Lorem #2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id laoreet elit.Mauris eros urna, pretium sit amet orci sed, aliquet tincidunt ex. Vivamus sit amet diam ornare nulla tempus tempus. Sed aliquet dolor massa. ",
      date: "15 July 2021"
    },
    {
      title: "Lorem #3",
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

  const stats = ref([
    { icon: thumbsUpOutline,  value: 4710, label: "Endorsements", color: "secondary" },
    { icon: clipboardOutline, value: 31, label: "Assessments", color: "tertiary" },
    { icon: bookmarkOutline, value: 2149, label: "Profile Score", color: "warning" },
    { icon: personOutline, value: 1520, label: "Unique Visitors", color: "success" }
  ]);

  const friends = ref([
    {
      id: 1,
      name: "John Doe",
      role: "R1",
      avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
      feed: "Added new Course",
      status: "Inactive",
    },
    {
      id: 2,
      name: "John Doe",
      role: "R1",
      avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
      feed: "Added new Course",
      status: "Active",
    },
    {
      id: 3,
      name: "John Doe",
      role: "R1",
      avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
      feed: "Added new Course",
      status: "Inactive",
    },
    {
      id: 4,
      name: "John Doe",
      role: "R1",
      avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
      feed: "Added new Course",
      status: "Active",
    },
  ]);

  const activities = ref([
    { text: "50 new Courses", icon: schoolOutline, color: "secondary" },
    { text: "50 new Users", icon: clipboardOutline, color: "tertiary" },
    { text: "10 new Publications", icon: bookOutline, color: "danger" },
    { text: "5 new Positions", icon: briefcaseOutline, color: "primary" },
    { text: "20 new Users", icon: personOutline, color: "success" },
    { text: "15 new Groups", icon: peopleOutline, color: "warning" }
  ]);

</script>

<style scoped>
  .stats-content {
    --padding-top: 40px;
  }
</style>