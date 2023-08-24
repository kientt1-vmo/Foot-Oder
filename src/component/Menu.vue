<template>
  <ion-grid>
    <ion-row>
      <ion-card class="item-card">
        <ion-card-header>
          <ion-card-title class="card-title"
          >Trưa ngày 22/08</ion-card-title
          >
        </ion-card-header>
        <ion-card-content>
          <ion-img
              class="img-card"
              src="https://f18-zpc.zdn.vn/8038687805436259717/f801ad2366f4b4aaede5.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
          >
          </ion-img>
          <div class="menu-info">
            <div>Loại: Cơm , cơm rang, bún</div>
            <div>Giá trung bình: 25k-50k</div>
            <div>Thời gian order: 11h50- 12h30</div>
            <div>Số lượng giới hạn: 30 suất</div>
          </div>
        </ion-card-content>
        <ion-card-content class="card-title">
          <ion-button> Đặt </ion-button>
        </ion-card-content>
      </ion-card>
      <ion-card class="item-card">
        <ion-card-header>
          <ion-card-title class="card-title"
          >Trưa ngày 22/08</ion-card-title
          >
        </ion-card-header>
        <ion-card-content>
          <ion-img
              class="img-card"
              src="https://f18-zpc.zdn.vn/8038687805436259717/f801ad2366f4b4aaede5.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
          >
          </ion-img>
          <div class="menu-info">
            <div>Loại: Cơm , cơm rang, bún</div>
            <div>Giá trung bình: 25k-50k</div>
            <div>Thời gian order: 11h50- 12h30</div>
            <div>Số lượng giới hạn: 30 suất</div>
          </div>
        </ion-card-content>
        <ion-card-content class="card-title">
          <ion-button> Đặt </ion-button>
        </ion-card-content>
      </ion-card>
      <ion-card class="item-card">
        <ion-card-header>
          <ion-card-title class="card-title"
          >Trưa ngày 22/08</ion-card-title
          >
        </ion-card-header>
        <ion-card-content>
          <ion-img
              class="img-card"
              src="https://f18-zpc.zdn.vn/8038687805436259717/f801ad2366f4b4aaede5.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
          >
          </ion-img>
          <div class="menu-info">
            <div>Loại: Cơm , cơm rang, bún</div>
            <div>Giá trung bình: 25k-50k</div>
            <div>Thời gian order: 11h50- 12h30</div>
            <div>Số lượng giới hạn: 30 suất</div>
          </div>
        </ion-card-content>
        <ion-card-content class="card-title">
          <ion-button> Đặt </ion-button>
        </ion-card-content>
      </ion-card>
      <ion-card class="item-card">
        <ion-card-header>
          <ion-card-title class="card-title"
          >Trưa ngày 22/08</ion-card-title
          >
        </ion-card-header>
        <ion-card-content>
          <ion-img
              class="img-card"
              src="https://f18-zpc.zdn.vn/8038687805436259717/f801ad2366f4b4aaede5.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
          >
          </ion-img>
          <div class="menu-info">
            <div>Loại: Cơm , cơm rang, bún</div>
            <div>Giá trung bình: 25k-50k</div>
            <div>Thời gian order: 11h50- 12h30</div>
            <div>Số lượng giới hạn: 30 suất</div>
          </div>
        </ion-card-content>
        <ion-card-content class="card-title">
          <ion-button @click="showPopup = true"> Đặt </ion-button>
          <popup
              :show-popup="showPopup"
              @close="closePopup"
              @submit="handleSubmit"
          />
        </ion-card-content>
      </ion-card>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import {
  IonCardTitle,
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
  IonRow,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import Popup from "@/component/Popup.vue";
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
    IonCardTitle,
    IonRow
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
.card-title {
  text-align: center;
}
.menu-info {
  color: white;
  font-weight: 400;
  margin: 10px 0 10px 0;
}
.img-card {
  border-radius: 8px;
}
.item-card {
  border-radius: 20px;
}
@media screen and (min-width: 768px) {
  .item-card {
    width: 320px;
    height: 450px;
  }
}
</style>