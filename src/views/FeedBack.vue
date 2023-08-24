<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu </ion-title>
      </ion-toolbar>
      <ion-list class="list">
        <ion-button href="home" class="btn-menu">
          <ion-label>Trang chủ</ion-label>
        </ion-button>
        <ion-button href="/feedback" class="btn-menu">
          <ion-label>Feedback</ion-label>
        </ion-button>
        <ion-button class="btn-menu">
          <ion-label>Khoản nợ</ion-label>
        </ion-button>
      </ion-list>
    </ion-header>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-page class="container">
        <ion-toolbar>
          <ion-title>Image Upload</ion-title>
        </ion-toolbar>
        <ion-content class="ion-padding">
          <input type="file" @change="handleImageChange" accept="image/*" />
          <ion-img class="img" v-if="uploadedImage" :src="uploadedImage" />
          <ion-input
            v-model="textInput"
            placeholder="Để lại đánh giá của bạn"
          ></ion-input>
          <ion-button @click="handleClose">Cancel</ion-button>
          <ion-button @click="handleSubmit">Submit</ion-button>
        </ion-content>
      </ion-page>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeedBack",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonImg,
  },
  data() {
    return {
      uploadedImage: "",
      textInput: "",
    };
  },
  setup() {},
  computed: {
    title() {
      if (this.$route.path == "/feedback") {
        return "Đánh giá";
      } else if (this.$route.path == "/debts") {
        return "Khoản nợ";
      }
      return "Trang chủ";
    },
  },
  methods: {
    handleImageChange(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.uploadedImage = e.target?.result as string;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    handleSubmit() {
      this.uploadedImage = "";
      this.textInput = "";
    },
    handleClose() {
      this.uploadedImage = "";
      this.textInput = "";
    },
  },
});
</script>

<style scoped>
.container {
  margin-top: 50px;
}
.img {
  max-width: 200px;
  max-height: 300px;
}
.list {
  border-top: solid 1px;
}
.btn-menu {
  width: 95%;
  --background: #7e7e7e;
  margin: 4px 10px 4px 10px;
  color: white;
  font-weight: 700;
  height: 40px;
}
ion-menu::part(backdrop) {
  background-color: rgba(35, 170, 211, 0.5);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0px 16px rgba(134, 48, 134, 0.18);
}
</style>
