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
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-grid>
      <ion-row>
        <ion-card class="item-card">
          <ion-card-header>
            <ion-card-title class="card-title">Trưa ngày 22/08</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-img
                class="img-card"
                src="https://f18-zpc.zdn.vn/8038687805436259717/f801ad2366f4b4aaede5.jpg"
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            >
            </ion-img>
            <div class="menu-info">
              <div>Loại: Cơm , cơm rang, bún </div>
              <div>Giá trung bình: 25k-50k</div>
              <div>Thời gian order: 11h50- 12h30</div>
              <div>Số lượng giới hạn: 30 suất</div>
            </div>
          </ion-card-content>
          <ion-card-content class="card-title">
            <ion-button>
              Đặt
            </ion-button>
          </ion-card-content>
        </ion-card>
        <ion-card class="item-card">
          <ion-card-header>
            <ion-card-title class="card-title">Trưa ngày 22/08</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-img
                class="img-card"
                src="https://f18-zpc.zdn.vn/8038687805436259717/f801ad2366f4b4aaede5.jpg"
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            >
            </ion-img>
            <div class="menu-info">
              <div>Loại: Cơm , cơm rang, bún </div>
              <div>Giá trung bình: 25k-50k</div>
              <div>Thời gian order: 11h50- 12h30</div>
              <div>Số lượng giới hạn: 30 suất</div>
            </div>
          </ion-card-content>
          <ion-card-content class="card-title">
            <ion-button>
              Đặt
            </ion-button>
          </ion-card-content>
        </ion-card>
        <ion-card class="item-card">
          <ion-card-header>
            <ion-card-title class="card-title">Trưa ngày 22/08</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-img
                class="img-card"
                src="https://f18-zpc.zdn.vn/8038687805436259717/f801ad2366f4b4aaede5.jpg"
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            >
            </ion-img>
            <div class="menu-info">
              <div>Loại: Cơm , cơm rang, bún </div>
              <div>Giá trung bình: 25k-50k</div>
              <div>Thời gian order: 11h50- 12h30</div>
              <div>Số lượng giới hạn: 30 suất</div>
            </div>
          </ion-card-content>
          <ion-card-content class="card-title">
            <ion-button>
              Đặt
            </ion-button>
          </ion-card-content>
        </ion-card>
        <ion-card class="item-card">
          <ion-card-header>
            <ion-card-title class="card-title">Trưa ngày 22/08</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-img
                class="img-card"
                src="https://f18-zpc.zdn.vn/8038687805436259717/f801ad2366f4b4aaede5.jpg"
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            >
            </ion-img>
            <div class="menu-info">
              <div>Loại: Cơm , cơm rang, bún </div>
              <div>Giá trung bình: 25k-50k</div>
              <div>Thời gian order: 11h50- 12h30</div>
              <div>Số lượng giới hạn: 30 suất</div>
            </div>
          </ion-card-content>
          <ion-card-content class="card-title">
            <ion-button>
              Đặt
            </ion-button>
          </ion-card-content>
        </ion-card>
      </ion-row>
    </ion-grid>
  </ion-page>

</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonCard, IonGrid, IonCardHeader, IonCardContent,
          IonPage, IonTitle, IonToolbar, IonItem, IonList , IonButton, IonImg
        } from '@ionic/vue';
import { defineComponent } from 'vue';

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