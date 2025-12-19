<template>
  <ion-modal :is-open="isOpen" @didDismiss="close">
    <div class="modal-container">

      <h2>{{ title }}</h2>
      <p>{{ message }}</p>

      <div class="actions">
        <ion-button fill="outline" @click="close">Cancel</ion-button>
        <ion-button color="danger" @click="confirm">Delete</ion-button>
      </div>

    </div>
  </ion-modal>
</template>

<script setup>
import { IonModal, IonButton } from "@ionic/vue";
import { ref } from "vue";

const isOpen = ref(false)
const title = ref("")
const message = ref("")
let confirmCallback = () => {}

function open(options) {
  title.value = options.title || "Confirm Delete"
  message.value = options.message || "Are you sure?"
  confirmCallback = options.onConfirm || (() => {})
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function confirm() {
  confirmCallback()
  close()
}

// expose functions to parent
defineExpose({ open })
</script>

<style scoped>
  .modal-container {
    padding: 20px;
  }
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 20px;
  }
</style>
