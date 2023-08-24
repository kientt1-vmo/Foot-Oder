<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu </ion-title>
      </ion-toolbar>
      <ion-list class="list">
        <ion-button class="btn-menu">
          <ion-label>Trang chủ</ion-label>
        </ion-button>
        <ion-button class="btn-menu">
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
        <ion-buttons>
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <Menu></Menu>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonCard,
  IonGrid,
  IonCardHeader,
  IonCardContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonButton,
  IonImg,
  IonLabel
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import Popup from "@/component/Popup.vue";
import Menu from "@/component/Menu.vue"
export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonList,
    IonButton,
    IonCard,
    IonGrid,
    IonCardHeader,
    IonCardContent,
    IonImg,
    Popup,
    Menu,
    IonLabel,
  },
  setup() {
    const showPopup = ref(false);

    const closePopup = () => {
      showPopup.value = false;
    };

    const handleSubmit = (inputData: any) => {
      console.log("Submitted data:", inputData);
    };

    return {
      showPopup,
      closePopup,
      handleSubmit,
    };
  },
});
</script>
<style scoped>
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
</style>
