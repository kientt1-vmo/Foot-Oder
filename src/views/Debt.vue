<template>
  <div>
    <MenuHeader></MenuHeader>
    <ion-page id="main-content" >
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-list>
          <ion-item class="item-table">
            <ion-label class="ion-text-center ion-width-30">Ngày</ion-label>
            <ion-label class="ion-text-center ion-width-30">Món</ion-label>
            <ion-label class="ion-text-center ion-width-30">Số tiền</ion-label>
          </ion-item>
          <ion-item v-for="(debt, index) in debts" :key="index">
            <ion-label class="ion-text-center ion-width-30">{{
              debt.date
            }}</ion-label>
            <ion-label class="ion-text-center ion-width-30">{{
              debt.item
            }}</ion-label>
            <ion-label class="ion-text-center ion-width-30"
              >{{ debt.amount }}k</ion-label
            >
          </ion-item>
        </ion-list>
        <div class="ion-margin-top ion-text-center">
          <h3 class="ion-text-end">Tổng: {{ calculatedTotalDebt }}k</h3>
          <h4 class="ion-text-end">Trạng thái: {{ status }}</h4>
          <ion-button
            class="ion-align-items-start"
            @click="showImageModal = true"
            >Trả nợ</ion-button
          >
        </div>
        <image-modal
          :show="showImageModal"
          @confirm="confirmPaymentAndDismiss"
          @dismiss="dismissModal"
        ></image-modal>
      </ion-content>
    </ion-page>
    <ion-alert
      :is-open="isOpen"
      header="Thông báo"
      message="Chờ admin xác nhận !!!"
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
  IonAlert,
} from "@ionic/vue";
import { computed, defineComponent, ref } from "vue";
import MenuHeader from "@/component/MenuHeader.vue";
import ImageModal from "@/component/ImageModal.vue";
export default defineComponent({
  name: "Debt",
  components: {
    MenuHeader,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonImg,
    ImageModal,
    IonAlert,
  },
  data() {
    return {
      uploadedImage: "",
      textInput: "",
      showImageModal: false,
    };
  },
  setup() {
    const debts = ref([
      { date: "2023-08-25", item: "Món A", amount: 100 },
      { date: "2023-08-26", item: "Món B", amount: 150 },
      { date: "2023-08-27", item: "Món C", amount: 200 },
      { date: "2023-08-24", item: "Món A", amount: 100 },
      { date: "2023-08-23", item: "Món B", amount: 150 },
    ]);
    const isOpen = ref(false);
    const showImageModal = ref(false);
    const status = ref("Chưa trả nợ");
    const calculatedTotalDebt = computed(() => {
      return debts.value.reduce((total, debt) => total + debt.amount, 0);
    });

    const confirmPaymentAndDismiss = () => {
      status.value = "Đang xác nhận";
      showImageModal.value = false;
      isOpen.value = true;
    };
    const dismissModal = () => {
      showImageModal.value = false;
      status.value = "Chưa trả nợ";
    };
    const alertButtons = computed(() => [
      {
        text: "OK",
        handler: dismissAlert,
      },
    ]);

    const dismissAlert = () => {
      isOpen.value = false;
    };
    return {
      debts,
      showImageModal,
      status,
      calculatedTotalDebt,
      confirmPaymentAndDismiss,
      dismissModal,
      isOpen,
      dismissAlert,
      alertButtons,
    };
  },

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
  methods: {},
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
.item-table{
  font-size: large;
}
ion-menu::part(backdrop) {
  background-color: rgba(35, 170, 211, 0.5);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0px 16px rgba(134, 48, 134, 0.18);
}
</style>
