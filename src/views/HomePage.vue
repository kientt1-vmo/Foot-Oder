<template>
  <div>
    <MenuHeader></MenuHeader>
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons>
            <ion-menu-button></ion-menu-button>
            <ion-title>Trang chủ</ion-title>
          </ion-buttons>
          <UserProfile class="ion-padding" slot="end" />
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <div>
          <Menu></Menu>
        </div>
      </ion-content>
    </ion-page>
    <ion-icon
      v-show="showChatIcon"
      class="chat-icon"
      :icon="chatbubblesOutline"
      @click="goToChatPage"
    ></ion-icon>
  </div>
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
  IonLabel,
  IonIcon,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import Popup from "@/component/Popup.vue";
import Menu from "@/component/Menu.vue";
import MenuHeader from "@/component/MenuHeader.vue";
import UserProfile from "@/component/UserProfile.vue";
import { chatbubblesOutline } from "ionicons/icons";

export default defineComponent({
  components: {
    MenuHeader,
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
    UserProfile,
    IonIcon,
  },
  setup() {
    return {
      chatbubblesOutline,
    };
  },
  data() {
    return {
      showChatIcon: true,
    };
  },
  methods: {
    goToChatPage() {
      this.$router.push("/chat");
    },
  }
});
</script>

<style scoped>
.chat-icon {
  position: fixed;
  bottom: 50px;
  right: 40px;
  font-size: 35px;
  color: rgb(10, 10, 10);
  background-color: #fff;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
}
</style>
