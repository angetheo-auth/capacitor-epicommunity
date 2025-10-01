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
          
        </div>

        <!-- Mobile layout -->
        <div v-else class="mobile-layout">
          
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonListHeader, IonSelect, IonSelectOption, IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { searchOutline, notificationsOutline,} from 'ionicons/icons';
  import { ref, onMounted, onBeforeUnmount } from 'vue';
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
  color: #8c8c8c;
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
