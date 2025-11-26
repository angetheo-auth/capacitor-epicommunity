<template>
  <ion-header :translucent="true">
    <ion-toolbar color="primary">
      <ion-buttons slot="start">
        <ion-menu-button color="light"></ion-menu-button>
      </ion-buttons>
      <ion-title></ion-title>
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
  <ion-content class="ion-padding">
    <ion-card>
        <ion-card-header>
            <ion-card-title>{{ entity.title }}</ion-card-title>
            <ion-card-subtitle>{{ entity.dateRange }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <div class="entity-header">
              <img :src="entity.image" alt="Entity image" />
          </div>
          <ion-item lines="full">
              <p slot="start">Comments: {{ entity.comments }} Views: {{ entity.views }}</p>
              <p slot="end">Endorsements: {{ entity.endorsements }}</p>
              <ion-buttons slot="end">
                <ion-button shape="round" fill="solid" color="medium">
                  <ion-icon :icon="shareSocialOutline"></ion-icon>
                </ion-button>
                <ion-button shape="round" fill="solid" color="primary">
                  <ion-icon :icon="shareOutline"></ion-icon>
                </ion-button>
              </ion-buttons>
          </ion-item>
          <!-- Description -->
          <template v-if="type === 'course'">
            <ion-item lines="none">
              <h2><strong>Description</strong></h2>
            </ion-item>
            <ion-item lines="none">
              <p>{{ entity.description }}</p>
            </ion-item>
            <ion-item lines="none">
              <h2><strong>Learning Outcomes</strong></h2>
            </ion-item>
            <ion-item lines="none">
              <p>{{ entity.learningOutcomes }}</p>
            </ion-item>
            <ion-item lines="none">
              <h2><strong>Course Details</strong></h2>
            </ion-item>
            <!-- all this data can be passed dynamically via the entity prop -->
            <ion-grid>
              <ion-row>
                <ion-col size="12" size-md="4">
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="clipboardOutline"></ion-icon>
                    <p>Institution: Aristotle University of Thessaloniki</p>
                  </ion-row>
                  <ion-row><p>ECTS: 5</p></ion-row>
                  <ion-row><p>Target Group: R1</p></ion-row>
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="bookOutline"></ion-icon>
                    <p>Course Format: MOOC</p>
                  </ion-row>
                </ion-col>

                <ion-col size="12" size-md="4">
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="walletOutline"></ion-icon>
                    <p>Cost: 500</p>
                  </ion-row>
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="mailOutline"></ion-icon>
                    <p>Contact Email: test@organization.com</p>
                  </ion-row>
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="personOutline"></ion-icon>
                    <p>Contact Person: Name Last</p>
                  </ion-row>
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="linkOutline"></ion-icon>
                    <p>Course Link: www.fakelink.com</p>
                  </ion-row>
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="languageOutline"></ion-icon>
                    <p>Language of Instruction: English</p>
                  </ion-row>
                </ion-col>

                <ion-col size="12" size-md="4">
                  <h2><strong>Co-Teachers</strong></h2>
                  <ion-row>
                    <ion-col>
                      <strong>Name</strong>
                    </ion-col>
                    <ion-col>
                      <strong>Has Profile</strong>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>
                      <p>User Name 1</p>
                    </ion-col>
                    <ion-col>
                      <p class="danger-text">No</p>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>
                      <p>User Name 2</p>
                    </ion-col>
                    <ion-col>
                      <p class="success-text">Yes</p>
                    </ion-col>
                  </ion-row>
                </ion-col>
              </ion-row>
            </ion-grid>
            <ion-item lines="none">
              <h2><strong>Tags</strong></h2>
            </ion-item>
            <ion-item lines="none">
              <p class="primary-text">#Tag 0  #Tag 1  #Tag 2</p>
            </ion-item>
            <ion-item>
              <ion-avatar>
                <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
              </ion-avatar>
              <ion-label class="ion-padding">
                <p><strong>John Doe, </strong>Teacher</p>
                <p>R4</p>
              </ion-label>
            </ion-item>
          </template>

          <template v-else-if="type === 'project'">
            <ion-item lines="none">
              <h2><strong>Description</strong></h2>
            </ion-item>
            <ion-item lines="none">
              <p>{{ entity.description }}</p>
            </ion-item>
            <ion-item lines="none">
              <h2><strong>Tags</strong></h2>
            </ion-item>
            <ion-item lines="none">
              <p class="primary-text">#Tag 0  #Tag 1  #Tag 2</p>
              <p slot="end"><strong>Group:</strong> Group name</p>
            </ion-item>
            <ion-item lines="none">
              <ion-avatar>
                <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
              </ion-avatar>
              <ion-label class="ion-padding">
                <p><strong>John Doe</strong></p>
                <p>R1</p>
              </ion-label>
            </ion-item>
          </template>

          <template v-else-if="type === 'publication'">
            <ion-item lines="none">
              <h2><strong>Description</strong></h2>
            </ion-item>
            <ion-item lines="none">
              <p>{{ entity.description }}</p>
            </ion-item>
            <ion-item lines="none">
              <h2><strong>Tags</strong></h2>
            </ion-item>
            <ion-item lines="none">
              <p class="primary-text">#Tag 0  #Tag 1  #Tag 2</p>
            </ion-item>
            <ion-grid>
              <ion-row>
                <ion-col size="12" size-md="6">
                  <h2><strong>Author</strong></h2>
                  <ion-item lines="none">
                    <ion-avatar>
                      <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                    </ion-avatar>
                    <ion-label class="ion-padding">
                      <p><strong>John Doe, </strong>Teacher</p>
                      <p>R4</p>
                    </ion-label>
                  </ion-item>
                  
                </ion-col>
                <ion-col size="12" size-md="6">
                  <h2><strong>Co-Authors</strong></h2>
                  <ion-row>
                    <ion-col>
                      <strong>Name</strong>
                    </ion-col>
                    <ion-col>
                      <strong>Has Profile</strong>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>
                      <p>User Name 1</p>
                    </ion-col>
                    <ion-col>
                      <p class="danger-text">No</p>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>
                      <p>User Name 2</p>
                    </ion-col>
                    <ion-col>
                      <p class="success-text">Yes</p>
                    </ion-col>
                  </ion-row>
                </ion-col>
              </ion-row>
            </ion-grid>
          </template>

          <template v-else-if="type === 'position'">
            <ion-item lines="none">
              <h2><strong>Description</strong></h2>
            </ion-item>
            <ion-item lines="none">
              <p>{{ entity.description }}</p>
            </ion-item>
            <ion-item lines="none">
              <h2><strong>Tags</strong></h2>
            </ion-item>
            <ion-item lines="none">
              <p class="primary-text">#Tag 0  #Tag 1  #Tag 2</p>
            </ion-item>
            <ion-item lines="none">
              <ion-avatar>
                <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
              </ion-avatar>
              <ion-label class="ion-padding">
                <p><strong>John Doe, </strong>Employer</p>
                <p>R1</p>
              </ion-label>
            </ion-item>
            <h2><strong>Employer details</strong></h2>
            <ion-grid>
              <ion-col>
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="briefcaseOutline"></ion-icon>
                    <p>Organization title</p>
                  </ion-row>
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="mailOutline"></ion-icon>
                    <p>test@organization.com</p>
                  </ion-row>
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="linkOutline"></ion-icon>
                    <p>testorg.com</p>
                  </ion-row>
                  <ion-row>
                    <ion-icon class="ion-margin-end" :icon="businessOutline"></ion-icon>
                    <p>City, Country</p>
                  </ion-row>
                </ion-col>
            </ion-grid>
          </template>

          <!-- Comments -->
          <ion-item lines="none">
            <h2>{{ entity.demoComments.length }} Responses</h2>
          </ion-item>
          <ion-item lines="none">
            <ion-input placeholder="Post a comment...">
              <ion-icon slot="start" :icon="chatboxOutline"></ion-icon>
            </ion-input>
          </ion-item>
          <ion-list>
            <ion-item v-for="comment in entity.demoComments" :key="comment.id">
              <ion-avatar>
                <img alt="Profile Picture" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
              </ion-avatar>
              <ion-label class="ion-padding">
                <strong>{{ comment.user }}</strong>
                <p>{{ comment.time }}</p>
                {{ comment.text }}
                <ion-button fill="clear">Reply</ion-button>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script setup>
import { IonAvatar, IonLabel, IonContent, IonItem, IonButtons, IonInput, IonList, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonMenuButton, IonTitle } from '@ionic/vue'
import { searchOutline,  notificationsOutline, bookOutline, briefcaseOutline, businessOutline, chatboxOutline, clipboardOutline, languageOutline, linkOutline, mailOutline, personOutline, shareOutline, shareSocialOutline, walletOutline } from 'ionicons/icons'

const props = defineProps({
  type: { type: String, default: 'course' }
})

const entities = {
  course: {
    title: 'Course #1 Title',
    dateRange: '05/05/2022 – Present',
    image: '/course-image.jpg',
    comments: '2',
    views: '1k',
    endorsements: '200',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident, dicta harum assumenda unde quaerat neque sapiente inventore dolorem, nobis deserunt.',
    learningOutcomes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident, dicta harum assumenda unde quaerat',
    demoComments: [
      { id: 1, user: 'Pumpy Jack', time: '21 seconds ago', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
      { id: 2, user: 'Mary Sue', time: '1 hour ago', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' }
    ]
  },

  position: {
    title: 'Position #1 Title',
    dateRange: '05/05/2021 – On-going',
    image: '/positions-image.jpg',
    comments: '2',
    views: '1k',
    endorsements: '200',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident.',
    employer: 'ACME Corporation',
    contact: 'test@organization.com',
    location: 'City, Country',
    demoComments: [
      { id: 1, user: 'Leon Kenedy', time: '1 hour ago', text: 'Lorem ipsum dolor sit amet' },
      { id: 2, user: 'Sam Smith', time: '21 seconds ago', text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' }
    ]
  },

  project: {
    title: 'Project #1 Title',
    dateRange: '01/01/2022 – 12/31/2022',
    image: '/project-image.jpg',
    comments: '4',
    views: '3k',
    endorsements: '150',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident.',
    technologies: ['Vue.js', 'Ionic', 'Firebase', 'TailwindCSS'],
    demoComments: [
      { id: 1, user: 'Ada Wong', time: '1 hour ago', text: 'Sed ut perspiciatis unde omnis iste natus' },
      { id: 2, user: 'Jack Prim', time: '21 seconds ago', text: 'Lorem ipsum dolor sit amet' },
      { id: 3, user: 'Ben Hunter', time: '4 days ago', text:'Perspiciatis unde omnis iste'}
    ]
  },

  publication: {
    title: 'Publication #1 Title',
    dateRange: 'Published: 2023',
    image: '/publication-image.jpg',
    comments: '1',
    views: '800',
    endorsements: '50',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam consequuntur cupiditate provident, dicta harum assumenda unde quaerat neque sapiente inventore dolorem, nobis deserunt.',
    journal: 'Journal of Web Engineering',
    doi: '10.1234/jwe.2023.4567',
    authors: 'John Doe, Jane Doe',
    demoComments: [
      { id: 1, user: 'Paul Phoenix', time: '21 seconds ago', text: 'Sed ut perspiciatis unde omnis iste natus' }
    ]
  }
}
const entity = entities[props.type]
</script>


<style scoped>

@media (max-width: 768px) {
  .entity-header img {
    max-width: 100%; /* makes it perfectly responsive on mobile */
    border-radius: 8px;
    box-shadow: none;
  }
}
.entity-header img {
  display: block;
  width: 100%;
  max-width: 500px;          /* limit the size to fit nicely on desktop */
  height: auto;
  border-radius: 12px;       /* subtle rounded corners like in your screenshots */
  margin: 1rem auto;         /* centers the image horizontally */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); /* gentle depth effect */
}
.primary-text{
  color: var(--ion-color-primary)
}
.success-text{
  color: var(--ion-color-success)
}
.danger-text{
  color: var(--ion-color-danger)
}
</style>
