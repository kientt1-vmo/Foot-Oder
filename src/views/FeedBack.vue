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
          <ion-buttons slot="end">
            <UserProfile class="ion-padding" />
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true" class="ion-padding">
        <ion-item>
          
          <ion-button class="btn-take-photo" color="primary" @click="takePhoto"  icon-only
            >
            <ion-icon class="ion-photo" :icon="cameraOutline"></ion-icon>
            Chụp ảnh
            </ion-button>
        </ion-item>
        <ion-item>
          <input type="file" @change="handleImageChange" accept="image/*" />
        </ion-item>
        <ion-item v-if="uploadedImage">
          <ion-img class="img" :src="uploadedImage" />
        </ion-item>

        <ion-item>
          <ion-textarea
            v-model="textInput"
            class="text-area"
            label="Đánh giá:"
            placeholder="Để lại đánh giá của bạn"
          ></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-button class="btn-popup" color="danger" @click="handleClose"
            >Hủy bỏ</ion-button
          >
          <ion-button class="btn-popup" color="success" @click="handleSubmit"
            >Đánh giá</ion-button
          >
        </ion-item>
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
  IonTextarea,
  IonIcon 
} from "@ionic/vue";
import { computed, defineComponent, ref } from "vue";
import MenuHeader from "@/component/MenuHeader.vue";
import UserProfile from "@/component/UserProfile.vue";
import { Camera, CameraResultType } from "@capacitor/camera";
import { cameraOutline } from 'ionicons/icons';

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
    UserProfile,
    IonTextarea,
    IonIcon 
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
      cameraOutline
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
    async takePhoto() {
      try {
        const image = await Camera.getPhoto({
          resultType: CameraResultType.DataUrl,
        });
        this.handlePhotoCapture(image.dataUrl);
      } catch (error) {
        console.error("Error taking photo:", error);
      }
    },
    handlePhotoCapture(dataUrl: string | undefined) {
      if (dataUrl) {
        this.uploadedImage = dataUrl;
      }
    },
  },
});
</script>

<style scoped>
.img {
  max-width: 200px;
  max-height: 300px;
}

ion-menu::part(backdrop) {
  background-color: rgba(35, 170, 211, 0.5);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0 16px rgba(134, 48, 134, 0.18);
}
.btn-popup {
  margin-left: 20px;
  width: 50%;
  max-width: 200px;
  height: 40px;
  margin-right: 10px;
  color: white;
  font-weight: 500;
}
.btn-take-photo {
  width: 40%;
  height: 40px;
  margin-bottom: 10px;
}
.ion-photo{
  margin-right: 5px;
}
.text-area {
  min-height: 200px;
  padding: 4px 0 4px 0;
  margin: 8px 0 8px 0;
}
</style>
