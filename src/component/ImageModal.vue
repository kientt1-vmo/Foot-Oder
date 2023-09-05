<template>
  <ion-modal :is-open="show">
    <ion-header class="ion-text-center">
      <ion-toolbar>
        <ion-title>Mã QR</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-center">
      <ion-img
            class="img"
            src="/img/techcombank.png"
            alt="Ảnh xác nhận trả nợ"
        ></ion-img>
      <ion-button expand="full" class="button-cancel" @click="dismissModal">Hủy</ion-button>
      <ion-button
          expand="full"
          class="button-confirm"
          @click="confirmPaymentAndDismiss"
      >Xác nhận</ion-button>
    </ion-content>
  </ion-modal>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonModal,
  IonToolbar,
  IonTitle,
  IonItem
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageModal",
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonImg,
    IonModal,
    IonToolbar,
    IonTitle,
    IonItem
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    confirmPaymentAndDismiss() {
      this.$emit("confirm");
    },
    dismissModal() {
      this.$emit("dismiss");
    },
  },
});
</script>
<style scoped>
.button-confirm {
  margin-top: 10px;
}

.button-cancel {
  margin-top: 10px;
  --background: #c02929;
}
.img {
  padding: 2% 3%;
}
</style>
