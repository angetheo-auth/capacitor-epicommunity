<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
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
      <div id="container">
        <!-- Desktop layout -->
        <div v-if="!isMobile" class="desktop-layout">
          <div class="sidebar">
            <ion-list>
              <ion-list-header>
                <ion-avatar>
                  <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                </ion-avatar>
              </ion-list-header>
              <ion-item v-for="item in menuItems" :key="item.id" button :class="{ selected: selectedMenu === item.id }" @click="selectedMenu = item.id">
                  <ion-label>{{ item.title }}</ion-label>
              </ion-item>
              <ion-item>
                <ion-buttons>
                  <ion-button fill="solid" color="primary">
                    export profile
                  </ion-button>
                  <ion-button fill="outline" color="danger">
                    <ion-icon :icon="trashBinOutline"></ion-icon>
                    delete account
                  </ion-button>
                </ion-buttons>
              </ion-item>
            </ion-list>
          </div>
          <div class="content">
            <component :is="getComponent(selectedMenu)" />
          </div>
        </div>

        <!-- Mobile layout -->
        <div v-else class="mobile-layout">
          <div class="mobile-menu">
            <ion-item>
              <ion-select :value="selectedMenu" @ionChange="selectedMenu = $event.detail.value" interface="popover" placeholder="Select Section">
                <ion-select-option v-for="item in menuItems" :key="item.id" :value="item.id">
                  {{ item.title }}
                </ion-select-option>
              </ion-select>
            </ion-item>
          </div>
          
          <div class="mobile-content">
            <component :is="getComponent(selectedMenu)" />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonListHeader, IonSelect, IonSelectOption, IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { searchOutline, notificationsOutline, trashBinOutline} from 'ionicons/icons';
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
  import generalInformation from '@/components/profile/generalInformation.vue';
  import courses from '@/components/profile/courses.vue';
  import projects from '@/components/profile/projects.vue';
  import publications from '@/components/profile/publications.vue';
  import positions from '@/components/profile/positions.vue';
  import skills from '@/components/profile/skills.vue';
  import groups from '@/components/profile/groups.vue';
  import badges from '@/components/profile/badges.vue';
  import friendsList from '@/components/profile/friendsList.vue';

  const isMobile = ref(false);

  function checkScreen() {
    isMobile.value = window.innerWidth < 990;
  }

  onMounted(() => {
    checkScreen();
    window.addEventListener('resize', checkScreen);
  });

  onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen);
  });

  
  const selectedMenu = ref("generalInformation");

  const menuItems = [
      { title: "General Information", id: "generalInformation" },
      { title: "Courses", id: "courses" },
      { title: "Projects", id: "projects" },
      { title: "Publications", id: "publications"},
      { title: "Positions", id: "positions"},
      { title: "Skills", id:"skills"},
      { title: "Groups", id: "groups"},
      { title: "Badges", id: "badges"},
      { title: "Friends List", id: "friendsList"}
  ];
  
  function getComponent(menuId: any) {
      switch (menuId) {
          case "courses":
          return courses;
          case "projects":
          return projects;
          case "publications":
          return publications;
          case "positions":
          return positions;
          case "skills":
          return skills;
          case "groups":
          return groups;
          case "badges":
          return badges;
          case "friendsList":
          return friendsList;
          default:
          return generalInformation;
      }
  }

</script>

<style scoped>
#container {
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: var(--ion-color-medium);
  margin: 0;
}

#container a {
  text-decoration: none;
}

.desktop-layout {
  display: flex;              
  height: 100%;               
}

.content {
  flex: 1;                    
  padding: 1.5rem;            
  overflow-y: auto;           
}

.mobile-layout {
  display: flex;
  flex-direction: column;
}

.mobile-menu {
  position: sticky;
  top: 0;
  z-index: 10;
}

.mobile-content {
  padding: 1rem;
}


.sidebar {
  flex: 0 0 300px;                     
  padding: 1rem 0;   
  margin-left: 20px;         
}


</style>
