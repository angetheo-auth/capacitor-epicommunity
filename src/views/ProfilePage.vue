<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button color="light"></ion-menu-button>
        </ion-buttons>
        <ion-title>Profile</ion-title>
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
                <div class="sidebar-header">
                  <ion-avatar>
                    <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                  </ion-avatar>
                  <h2>User Name</h2>
                  <ion-button id="profile-options" color="medium">
                    <ion-icon :icon="ellipsisHorizontalOutline"></ion-icon>
                  </ion-button>

                  <ion-popover trigger="profile-options" trigger-action="click">
                    <ion-content>
                      <ion-list>
                        <ion-item button @click="handleHeaderOption('update')">
                          <ion-icon :icon="cubeOutline" size="small"></ion-icon>
                          <ion-label>Update Profile</ion-label>
                        </ion-item>
                        <ion-item button @click="handleHeaderOption('contactRequests')">
                          <ion-icon :icon="personAddOutline" size="small"></ion-icon>
                          <ion-label>Contact Requests</ion-label>
                        </ion-item>
                        <ion-item lines="none">
                          <ion-button expand="block" fill="solid" color="primary">
                            Sync
                          </ion-button>
                        </ion-item>
                      </ion-list>
                    </ion-content>
                  </ion-popover>
                </div> 
              </ion-list-header>
              <ion-item v-for="item in menuItems" :key="item.id" button :class="{ selected: selectedMenu === item.id }" @click="selectedMenu = item.id">
                <ion-icon :icon="item.icon" size="small"></ion-icon>
                <ion-label>{{ item.title }}</ion-label>
              </ion-item>
              <ion-item>
                <ion-buttons>
                  <ion-button fill="solid" color="primary">
                    export profile
                  </ion-button>
                  <ion-button fill="outline" color="danger" @click="handleDelete">
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
              <ion-select :value="selectedMenu" @ionChange="onSelectChange($event.detail.value)" interface="popover" placeholder="Select Section" >
                <ion-select-option v-for="item in menuItems" :key="item.id" :value="item.id">
                  {{ item.title }}
                </ion-select-option>
                <ion-select-option disabled>──────────</ion-select-option>
                <ion-select-option value="update">Update Profile</ion-select-option>
                <ion-select-option value="contactRequests">Contact Requests</ion-select-option>
                <ion-select-option value="sync">Sync</ion-select-option>
              </ion-select>
            </ion-item>
          </div>

          <div class="mobile-content">
            <component :is="getComponent(selectedMenu)" />
          </div>

          <div class="mobile-actions">
            <ion-button expand="block" fill="solid" color="primary">
              Export Profile
            </ion-button>
            <ion-button expand="block" fill="outline" color="danger" @click="handleDelete">
              <ion-icon :icon="trashBinOutline"></ion-icon>
              Delete Account
            </ion-button>
          </div>
        </div>

      </div>
      <DeleteConfirmModal ref="deleteModal" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonListHeader, IonSelect, IonPopover, IonSelectOption, IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAvatar } from '@ionic/vue'
import { searchOutline, notificationsOutline, trashBinOutline, ellipsisHorizontalOutline, cubeOutline, personAddOutline, pulseOutline, bookOutline, clipboardOutline, briefcaseOutline, listOutline, peopleOutline, shieldOutline, personOutline, schoolOutline } from 'ionicons/icons'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import generalInformation from '@/components/profile/generalInformation.vue'
import courses from '@/components/profile/courses.vue'
import projects from '@/components/profile/projects.vue'
import publications from '@/components/profile/publications.vue'
import positions from '@/components/profile/positions.vue'
import skills from '@/components/profile/skills.vue'
import groups from '@/components/profile/groups.vue'
import badges from '@/components/profile/badges.vue'
import friendsList from '@/components/profile/friendsList.vue'
import update from '@/components/profile/update.vue'
import contactRequests from '@/components/profile/contactRequests.vue'
import DeleteConfirmModal from '@/components/DeleteConfirmModal.vue'

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

function onSelectChange(value) {
  if (value !== 'sync') {
    selectedMenu.value = value
  }
}

const selectedMenu = ref('generalInformation')

const menuItems = [
  { title: 'General Information', id: 'generalInformation', icon: pulseOutline },
  { title: 'Courses', id: 'courses', icon: schoolOutline },
  { title: 'Projects', id: 'projects', icon: clipboardOutline },
  { title: 'Publications', id: 'publications', icon: bookOutline },
  { title: 'Positions', id: 'positions', icon: briefcaseOutline },
  { title: 'Skills', id: 'skills', icon: listOutline },
  { title: 'Groups', id: 'groups', icon: peopleOutline },
  { title: 'Badges', id: 'badges', icon: shieldOutline },
  { title: 'Friends List', id: 'friendsList', icon: personOutline }
]

function handleHeaderOption(option) {
  selectedMenu.value = option
}

function getComponent(menuId) {
  switch (menuId) {
    case 'courses':
      return courses
    case 'projects':
      return projects
    case 'publications':
      return publications
    case 'positions':
      return positions
    case 'skills':
      return skills
    case 'groups':
      return groups
    case 'badges':
      return badges
    case 'friendsList':
      return friendsList
    case 'update':
      return update
    case 'contactRequests':
      return contactRequests
    default:
      return generalInformation
  }
}

const deleteModal = ref(null)

function handleDelete() {
  console.log('modal attempt!')
  deleteModal.value?.open({
    title: 'Delete Profile?',
    message: 'Are you sure you want to delete this profile?',
    onConfirm: () => {
      console.log('Profile deleted!')
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
