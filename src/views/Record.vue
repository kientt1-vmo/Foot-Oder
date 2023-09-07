<template>
  <div>
    <MenuHeader></MenuHeader>
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Ghi âm</ion-title>
          <ion-buttons slot="end">
            <UserProfile class="ion-padding" />
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-button class="btn-record" color="warning" @click="toggleRecording">
        {{ isRecording ? "Dừng ghi âm" : "Bắt đầu ghi" }}
      </ion-button>
      <ion-list>
        <ion-item v-for="(file, index) in recordedFiles" :key="index">
          {{ file.name }}
          <ion-button @click="playRecording(index)">Phát lại</ion-button>
          <ion-button color="danger" @click="deleteRecording(index)"
            >Xóa</ion-button
          >
        </ion-item>
      </ion-list>
    </ion-page>
  </div>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonImg,
  IonMenuButton,
  IonButtons,
  IonAlert,
  IonTextarea,
  IonIcon,
} from "@ionic/vue";
import MenuHeader from "@/component/MenuHeader.vue";
import { defineComponent, ref } from "vue";
import UserProfile from "@/component/UserProfile.vue";

export default defineComponent({
  name: "Record",
  components: {
    MenuHeader,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonButtons,
    IonImg,
    IonMenuButton,
    IonAlert,
    IonTextarea,
    IonIcon,
    UserProfile,
  },
  data() {
    return {
      isRecording: false,
      recordedFiles: [] as File[],
      mediaRecorder: null as MediaRecorder | null,
      audioPlayer: new Audio(),
    };
  },
  methods: {
    toggleRecording() {
      if (this.isRecording) {
        this.mediaRecorder?.stop();
        this.isRecording = false;
      } else {
        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then((stream) => {
            const chunks: Blob[] = [];
            this.mediaRecorder = new MediaRecorder(stream);
            this.mediaRecorder.addEventListener("dataavailable", (e) => {
              chunks.push(e.data);
            });
            this.mediaRecorder.addEventListener("stop", () => {
              const blob = new Blob(chunks, { type: "audio/mp3" });
              const recordedFile = new File([blob], "recorded_audio.mp3");
              this.recordedFiles.push(recordedFile);
            });
            this.mediaRecorder.start();
            this.isRecording = true;
          })
          .catch((error) => {
            console.error("Lỗi khi truy cập thiết bị ghi âm:", error);
          });
      }
    },
    playRecording(index: number) {
      const file = this.recordedFiles[index];
      this.audioPlayer.src = URL.createObjectURL(file);
      this.audioPlayer.play();
    },
    deleteRecording(index: number) {
      this.recordedFiles.splice(index, 1);
    },
  },
});
</script>

<style scoped>
.btn-record {
  position: fixed;
  bottom: 20px;
  right: 137px;
}
</style>
