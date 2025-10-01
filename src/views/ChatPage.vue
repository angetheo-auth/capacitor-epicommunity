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
                    <ion-item v-for="(chat, i) in chats" :key="i" button @click="openChat(chat)" >
                        <ion-avatar slot="start">
                        <img :src="chat.avatar" />
                        </ion-avatar>
                        <ion-label>
                            <h2>{{ chat.name }}</h2>
                            <p>{{ chat.lastMessage }}</p>
                        </ion-label>
                        <ion-note slot="end">{{ chat.time }}</ion-note>
                    </ion-item>
                    </ion-list>
                </div>

                <div class="content" v-if="activeChat">
                    <ion-header class="chat-header desktop-chat-header">
                        <ion-toolbar>
                        <ion-title>{{ activeChat.name }}</ion-title>
                        </ion-toolbar>
                    </ion-header>

                    <div class="messages">
                        <div v-for="(msg, i) in activeChat.messages" :key="i" :class="['message', msg.from === 'me' ? 'sent' : 'received']">
                        <p>{{ msg.text }}</p>
                        <small>{{ msg.time }}</small>
                        </div>
                    </div>

                    <div class="chat-input">
                        <ion-item lines="none">
                            <ion-input v-model="newMessage" placeholder="Type your message..."></ion-input>
                            <ion-buttons slot="end">
                                <ion-button>
                                    <ion-icon slot="icon-only" :icon="happyOutline"></ion-icon>
                                </ion-button>
                                <ion-button>
                                    <ion-icon slot="icon-only" :icon="attachOutline"></ion-icon>
                                </ion-button>
                                <ion-button color="secondary" fill="solid" shape="round" @click="sendMessage">
                                    <ion-icon slot="icon-only" :icon="send"></ion-icon>
                                </ion-button>
                            </ion-buttons>
                        </ion-item>
                    </div>
                </div>
            </div>

            <!-- Mobile layout -->
            <div v-else class="mobile-layout">
                <div v-if="!activeChat" class="mobile-content">
                    <ion-list>
                        <ion-item v-for="(chat, i) in chats" :key="i" button @click="openChat(chat)" >
                            <ion-avatar slot="start">
                                <img :src="chat.avatar" />
                            </ion-avatar>
                            <ion-label>
                                <h2>{{ chat.name }}</h2>
                                <p>{{ chat.lastMessage }}</p>
                            </ion-label>
                            <ion-note slot="end">{{ chat.time }}</ion-note>
                        </ion-item>
                    </ion-list>
                </div>

                <div v-else class="mobile-content">
                    <ion-content :fullscreen="true">
                        <!-- Chat header (use div instead of ion-header!) -->
                        <div class="chat-header">
                        <ion-toolbar>
                            <ion-buttons v-if="isMobile && activeChat" slot="start">
                            <ion-button fill="clear" @click="activeChat = null">
                                <ion-icon :icon="arrowBack"></ion-icon>
                            </ion-button>
                            </ion-buttons>
                            <ion-title>{{ activeChat ? activeChat.name : "Chats" }}</ion-title>
                        </ion-toolbar>
                        </div>

                        <!-- Messages scroll area -->
                        <div class="messages">
                        <div
                            v-for="(msg, i) in activeChat?.messages || []"
                            :key="i"
                            :class="['message', msg.from === 'me' ? 'sent' : 'received']"
                        >
                            <p>{{ msg.text }}</p>
                            <small>{{ msg.time }}</small>
                        </div>
                        </div>
                    </ion-content>

                    <!-- Input ALWAYS in ion-footer -->
                    <ion-footer v-if="activeChat">
                        <ion-toolbar>
                        <ion-item lines="none">
                            <ion-input v-model="newMessage" placeholder="Type a message..."></ion-input>
                            <ion-buttons slot="end">
                                <ion-button>
                                    <ion-icon slot="icon-only" :icon="happyOutline"></ion-icon>
                                </ion-button>
                                <ion-button>
                                    <ion-icon slot="icon-only" :icon="attachOutline"></ion-icon>
                                </ion-button>
                                <ion-button color="secondary" fill="solid" shape="round" @click="sendMessage">
                                    <ion-icon slot="icon-only" :icon="send"></ion-icon>
                                </ion-button>
                            </ion-buttons>
                        </ion-item>
                        </ion-toolbar>
                    </ion-footer>
                </div>
            </div>
        </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonLabel, IonItem, IonList, IonAvatar, IonNote, IonInput, IonButtons, IonButton, IonIcon, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,} from "@ionic/vue";
import { searchOutline, notificationsOutline, arrowBack, send, attachOutline, happyOutline, } from "ionicons/icons";
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMobile = ref(false);

function checkScreen() {
  isMobile.value = window.innerWidth < 990;
}

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreen);
});

const chats = ref([
  {
    name: "John Doe",
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    lastMessage: "Lorem ipsum",
    time: "5:00 PM",
    messages: [
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", from: "other", time: "5:00 PM" },
      { text: "Lorem ipsum dolor sit amet.", from: "me", time: "5:01 PM" },
    ],
  },
  {
    name: "Jane Smith",
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg",
    lastMessage: "Lorem ipsum",
    time: "6:00 PM",
    messages: [
      { text: "Lorem ipsum dolor sit amet.", from: "other", time: "6:00 PM" },
      { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", from: "me", time: "6:02 PM" },
    ],
  },
]);

const activeChat = ref(null as null | any);
const newMessage = ref("");

const openChat = (chat: any) => {
  activeChat.value = chat;
};

const sendMessage = () => {
  if (!newMessage.value.trim()) return;
  activeChat.value.messages.push({
    text: newMessage.value,
    from: "me",
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
  newMessage.value = "";
};
</script>

<style scoped>
.desktop-layout {
  display: flex;
  height: calc(100vh - 56px);
}

.sidebar {
  flex: 0 0 280px;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.messages {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.message {
  max-width: 70%;
  padding: 0.5rem 1rem;
  border-radius: 12px;
}

.message.sent {
  align-self: flex-end;
  background: var(--ion-color-secondary);
  color: white;
}

.message.received {
  align-self: flex-start;
  background: var(--ion-color-light-shade);
  color: var(--ion-color-medium);
}

.chat-input {
  border-top: 1px solid #ddd;
  padding: 0.25rem;
}

.empty-chat {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: #888;
}

.mobile-layout {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 56px);
}

.mobile-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.mobile-content .messages {
  flex: 1;
}
.chat-header {
  border-bottom: 1px solid #ddd;
}

.desktop-chat-header {
  flex-shrink: 0;
}

.mobile-chat-header {
  flex-shrink: 0;
  position: sticky;
  top: 0;
  z-index: 5;
}

</style>
