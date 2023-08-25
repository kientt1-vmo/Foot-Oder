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
</template>
<script setup lang="ts">

import {IonButton, IonHeader, IonLabel, IonList, IonMenu, IonTitle, IonToolbar} from "@ionic/vue";
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