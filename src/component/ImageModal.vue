<template>
  <ion-modal :is-open="show">
    <ion-header class="ion-text-center">
      <ion-toolbar>
        <ion-title>Mã QR</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-center">
      <ion-img
        class="full-width"
        src="https://tse2.mm.bing.net/th?id=OIP.DLME37PkypABEXbcBXfzIAHaFg&pid=Api&P=0&h=220"
        alt="Ảnh xác nhận trả nợ"
      ></ion-img>
      <ion-button expand="full" class="button-cancel" @click="dismissModal"
        >Hủy</ion-button
      >
      <ion-button
        expand="full"
        class="button-confirm"
        @click="confirmPaymentAndDismiss"
        >Xác nhận</ion-button
      >
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
</style>
