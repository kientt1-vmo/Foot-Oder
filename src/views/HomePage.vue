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
        <ion-button href="/debts" class="btn-menu">
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
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div v-show="$route.path === '/home'">
        <Menu></Menu>
      </div>
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
    return {};
  },
  computed: {
    title() {
      if (this.$route.path == '/feedback') {
        return 'Đánh giá'
      } else if (this.$route.path == '/debts') {
        return 'Khoản nợ'
      }
      return 'Trang chủ'
    }
  }
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
ion-menu::part(backdrop) {
  background-color: rgba(35, 170, 211, 0.5);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0px 16px rgba(134, 48, 134, 0.18);
}
</style>
