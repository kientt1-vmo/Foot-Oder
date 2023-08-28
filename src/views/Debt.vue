<template>
  <div>
    <MenuHeader></MenuHeader>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Quản lý nợ</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-list>
          <ion-item>
            <ion-label class="ion-text-center ion-width-10">STT</ion-label>
            <ion-label class="ion-text-center ion-width-30">Ngày</ion-label>
            <ion-label class="ion-text-center ion-width-30">Món</ion-label>
            <ion-label class="ion-text-center ion-width-30">Số tiền</ion-label>
          </ion-item>
          <ion-item v-for="(debt, index) in debts" :key="index">
            <ion-label class="ion-text-center ion-width-10">{{
                index + 1
              }}</ion-label>
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
          <h3 class="ion-text-end">Tổng số nợ: {{ calculatedTotalDebt }}</h3>
          <h4 class="ion-text-end">Trạng thái: {{ status }}</h4>
          <ion-button class="ion-align-items-start" @click="showImageModal = true">Trả nợ</ion-button>
        </div>
        <ion-modal v-if="showImageModal" @ionModalDidDismiss="dismissModal">
          <ion-header class="ion-text-center">
            <ion-toolbar>
              <ion-title>Mã QR</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-text-center">
            <ion-img class="full-width"
                     src="https://tse2.mm.bing.net/th?id=OIP.DLME37PkypABEXbcBXfzIAHaFg&pid=Api&P=0&h=220"
                     alt="Ảnh xác nhận trả nợ"
            ></ion-img>
            <ion-button expand="full" @click="confirmPaymentAndDismiss">Xác nhận</ion-button>
          </ion-content>
        </ion-modal>
      </ion-content>
    </ion-page>
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
} from "@ionic/vue";
import { computed, defineComponent, ref } from "vue";
import MenuHeader from "@/component/MenuHeader.vue";

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
  },
  data() {
    return {
      uploadedImage: "",
      textInput: "",
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

    const showImageModal = ref(false);
    const status = ref("Chưa trả nợ");

    const calculatedTotalDebt = computed(() => {
      return debts.value.reduce((total, debt) => total + debt.amount, 0);
    });

    const confirmPaymentAndDismiss = () => {
      status.value = "Đang xác nhận";
      showImageModal.value = false;
    };

    const dismissModal = () => {
      showImageModal.value = false;
      status.value = "Chưa trả nợ";
    };

    return {
      debts,
      showImageModal,
      status,
      calculatedTotalDebt,
      confirmPaymentAndDismiss,
      dismissModal,
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
ion-menu::part(backdrop) {
  background-color: rgba(35, 170, 211, 0.5);
}

ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0px 16px rgba(134, 48, 134, 0.18);
}
</style>
