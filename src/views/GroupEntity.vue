<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>Group</ion-title>
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
              <ion-item v-for="item in menuItems" :key="item.id" button :class="{ selected: selectedMenu === item.id }" @click="handleMenuClick(item.id)">
                <ion-icon :icon="item.icon" size="small"></ion-icon>
                <ion-label>{{ item.title }}</ion-label>
              </ion-item>
              <ion-item lines="none">
                <ion-button slot="end" fill="outline" color="danger" @click="handleDelete">
                <ion-icon :icon="trashBinOutline"></ion-icon>
                  Delete Group
                </ion-button>
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
              <ion-select v-model="selectedMenu" interface="popover" placeholder="Select Section">
                <ion-select-option
                  v-for="item in menuItems"
                  :key="item.id"
                  :value="item.id"
                >
                  {{ item.title }}
                </ion-select-option>
              </ion-select>
            </ion-item>
          </div>

          <div class="mobile-content">
            <component :is="getComponent(selectedMenu)" />
          </div>

          <div class="mobile-actions">
            <ion-button expand="block" fill="outline" color="danger" @click="handleDelete">
              <ion-icon :icon="trashBinOutline"></ion-icon>
              Delete Group
            </ion-button>
          </div>
        </div>

      </div>
      <DeleteConfirmModal ref="deleteModal" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonSelect, IonSelectOption, IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { searchOutline, notificationsOutline, trashBinOutline, pulseOutline, listOutline, peopleOutline, bookmarkOutline, createOutline } from 'ionicons/icons'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import generalInformation from '@/components/group/generalInformation.vue'
import members from '@/components/group/members.vue'
import wall from '@/components/group/wall.vue'
import membershipRequests from '@/components/group/membershipRequests.vue'
import DeleteConfirmModal from '@/components/DeleteConfirmModal.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMobile = ref(false)

function checkScreen() {
  isMobile.value = window.innerWidth < 990
}

onMounted(() => {
  checkScreen()
  window.addEventListener('resize', checkScreen)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreen)
})

const selectedMenu = ref('generalInformation')
const previousMenu = ref(selectedMenu.value)

const menuItems = [
  { title: 'General Information', id: 'generalInformation', icon: pulseOutline },
  { title: 'Members', id: 'members', icon: peopleOutline },
  { title: 'Wall', id: 'wall', icon: bookmarkOutline },
  { title: 'Edit Information', id: 'edit', icon: createOutline },
  { title: 'Membership Requests', id: 'membershipRequests', icon: listOutline }
]

function getComponent(menuId) {
  switch (menuId) {
    case 'members':
      return members
    case 'wall':
      return wall
    case 'membershipRequests':
      return membershipRequests
    default:
      return generalInformation
  }
}

function handleMenuClick(id) {
  if (id === 'edit') {
    router.push('/update-group')
    return
  }
  selectedMenu.value = id
}

watch(selectedMenu, (newVal) => {
  if (newVal === 'edit') {
    selectedMenu.value = previousMenu.value
    router.push('/update-group')
    return
  }
  previousMenu.value = newVal
})

const deleteModal = ref(null)

function handleDelete() {
  console.log('modal attempt!')
  deleteModal.value?.open({
    title: 'Delete Group?',
    message: 'Are you sure you want to delete this group?',
    onConfirm: () => {
      console.log('Group deleted!')
      // delete logic
    }
  })
}
</script>

<style scoped>
ion-icon {
  margin-right: 8px;

}

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

.sidebar-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
