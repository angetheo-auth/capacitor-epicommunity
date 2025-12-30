<template>
    <ion-page>
        <ion-content class="role-container" >
            <div class="role-header">
                <h2>Select Role</h2>
                <p>Selecting a role is mandatory to continue to the EPICommunity platform.</p>
            </div>
            <div class="role-options">
                <ion-card class="role-card" :class="{selected: selectedRole === 'subscriber'}" @click="selectRole('subscriber')">
                    <ion-card-header>
                        <div class="role-icon">
                            <ion-icon :icon="personOutline" color="primary"></ion-icon>
                        </div>
                        <ion-card-title>Subscriber</ion-card-title>
                        <ion-card-subtitle>Search • No Groups • Limited Profile Information</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-content>
                        With the Subscriber role you can utilize the advance search mechanisms of the EPICommunity to find researchers that match your needs.
                    </ion-card-content>
                </ion-card>
                <ion-card class="role-card" :class="{ selected: selectedRole === 'member' }" @click="selectRole('member')">
                    <ion-card-header>
                        <div class="role-icon">
                            <ion-icon :icon="personAddOutline" color="primary"></ion-icon>
                        </div>
                        <ion-card-title>Member</ion-card-title>
                        <ion-card-subtitle>Search • Groups • Peer Evaluation • Dashboard • Advanced Profile</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-content>
                        With the Member role you can user the EPICommunity platform and its capabilities to its extend. From Search, to Groups, Peer-to-Peer Evaluation, Interact with the entities of the community. Send private messages and much more.
                    </ion-card-content>
                </ion-card>
            </div>
            <div class="next-container">
              <ion-button expand="block" color="primary" class="next-btn" router-link="profile-creation">Next</ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>
<script setup >
    import { IonPage, IonContent, IonHeader, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonButton } from "@ionic/vue";
    import { personOutline, personAddOutline } from 'ionicons/icons';
    import { ref } from "vue";
    
    const selectedRole = ref(null);

    const selectRole = (role) => {
    selectedRole.value = role;
};

</script>

<style scoped>
.role-container {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem;
}

.role-header {
  align-self: flex-start;
  margin-left: 3rem;
  margin-bottom: 2rem;
}

.role-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.role-header p {
  font-size: 0.95rem;
}

.role-options {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
}

.role-card {
  flex: 1 1 45%;
  min-width: 320px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  text-align: center;
}

.role-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.role-card.selected {
  border: 2px solid var(--ion-color-primary);
}

.role-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.role-action {
  margin: 1.2rem 0;
  display: flex;
  justify-content: center;
}

.next-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.next-btn {
  width: 150px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .role-header {
    align-self: center;
    margin-left: 0;
    text-align: center;
  }

  .role-options {
    flex-direction: column;
    align-items: center;
  }

}
</style>