<template>
  <div>
    <MenuHeader></MenuHeader>
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Đánh giá của bạn</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-page class="container">
          <ion-content class="ion-padding">
            <input type="file" @change="handleImageChange" accept="image/*" />
            <ion-img class="img" v-if="uploadedImage" :src="uploadedImage" />
            <ion-input
              v-model="textInput"
              placeholder="  Để lại đánh giá của bạn"
            ></ion-input>
            <ion-button class="ion-margin" @click="handleClose"
              >Cancel</ion-button
            >
            <ion-button @click="handleSubmit"
              >Submit</ion-button
            >
          </ion-content>
        </ion-page>
      </ion-content>
    </ion-page>
    <ion-alert
      :is-open="isOpen"
      header="Thông báo"
      sub-header="Bạn đã gửi đánh giá thành công"
      message="Cảm ơn bạn đã sử dụng dịch vụ"
      :buttons="alertButtons"
      @ionBackdropTap="dismissAlert"
    ></ion-alert>
  </div>
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
  IonMenuButton,
  IonButtons,
  IonAlert,
} from "@ionic/vue";
import { computed, defineComponent, ref } from "vue";
import MenuHeader from "@/component/MenuHeader.vue";
export default defineComponent({
  name: "FeedBack",
  components: {
    MenuHeader,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonButtons,
    IonImg,
    IonMenuButton,
    IonAlert,
  },
  data() {
    return {
      uploadedImage: "",
      textInput: "",
    };
  },
  setup() {
    const isOpen = ref(false);
    const openAlert = () => {
      isOpen.value = true;
    };
    const dismissAlert = () => {
      isOpen.value = false;
    };
    const alertButtons = computed(() => [
      {
        text: "OK",
        handler: dismissAlert,
      },
    ]);
    return {
      openAlert,
      isOpen,
      dismissAlert,
      alertButtons,
    };
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
      this.openAlert();
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
