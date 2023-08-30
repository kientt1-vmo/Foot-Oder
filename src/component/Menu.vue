<template>
  <ion-grid>
    <ion-row>
      <div v-for="(item,index) in slots"
           :key="index"
      >
        <ion-card class="item-card">
          <ion-card-header>
            <ion-card-title class="card-title">{{item.type === 0 ? 'Trưa' : 'Chiều'}} ngày {{item.date}}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-img
                class="img-card"
                :src="item.imgs[0].url"
                alt="The Wisconsin State Capitol building in Madison, WI at night"
            >
            </ion-img>
            <div class="menu-info">
              <div >Loại: <span >{{ item.tags }}</span> </div>
              <div>Giá trung bình: {{item.price_min}} VND - {{item.price_max}} VND </div>
              <div>Thời gian order: {{convertDayJsToHM(item.start_time_order)}} - {{convertDayJsToHM(item.end_time_order)}}</div>
              <div>Số lượng giới hạn: {{item.limit_slot}} suất</div>
              <div>Người quản lý đơn: {{item.user_created}}</div>
            </div>
          </ion-card-content>
          <ion-card-content class="card-title">
            <ion-button :disabled="disableBtn(item.end_time_order)"  @click="eventClickOrder(item, index)"> Đặt </ion-button>
          </ion-card-content>
        </ion-card>
      </div>
      <popup
          :show-popup="showPopup"
          :data="selectedItem"
          @close="closePopup"
          @submit="handleSubmit"
      />
    </ion-row>
  </ion-grid>
  <ion-alert
      :is-open="isOpen"
      header="Thông báo"
      sub-header="Bạn đã order thành công"
      message="Mọi thông tin bạn có thể liên hệ người quản lý đơn hàng"
      :buttons="alertButtons"
      @didDismiss="setOpen(false)"
  ></ion-alert>
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
  IonAlert,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import Popup from "@/component/Popup.vue";
import dayjs from 'dayjs'
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
    IonRow,
    IonAlert
  },
  setup() {
    const showPopup = ref(false);

    const closePopup = () => {
      showPopup.value = false;
    };

    const handleSubmit = (inputData: any) => {
      isOpen.value = true;
    };

    const isOpen = ref(false);
    const alertButtons = [{text: 'Ok'}];

    const setOpen = (state: boolean) => {
      isOpen.value = state;
    };
    return {
      setOpen,
      alertButtons,
      isOpen,
      showPopup,
      closePopup,
      handleSubmit,
    };
  },
  data() {
    return {
      selectedItem: {},
      slots: [
        {
          id: 1,
          date: '24/08',
          type: 0,
          imgs: [
            {
              id: 1,
              url: 'https://f28-zpc.zdn.vn/5009534423386098833/27d0366c448296dccf93.jpg'
            },
            {
              id: 2,
              url: 'https://f6-zpc.zdn.vn/6177010835641017727/223ab771c69f14c14d8e.jpg'
            },
            {
              id: 3,
              url: 'https://f28-zpc.zdn.vn/9125341668619845222/71b6d3f9a21770492906.jpg'
            }
          ],
          tags: 'Cơm, Bún trộn, Cơm rang',
          price_min: '25.000',
          price_max: '50.000',
          start_time_order: '2023-08-30 15:08:55',
          end_time_order: '2023-08-30 14:08:55',
          limit_slot: 30,
          user_created: 'trungtn',
        },
        {
          id: 2,
          date: '24/08',
          type: 1,
          imgs: [
            {
              id: 4,
              url: 'https://dayphache.edu.vn/wp-content/uploads/2019/08/cach-lam-kem-cuon-Thai-Lan-don-gian.jpg'
            },
            {
              id: 5,
              url: 'https://cdn.tgdd.vn/Files/2021/08/10/1374160/hoc-cach-pha-tra-sua-o-long-dai-loan-thom-ngon-chuan-vi-ai-cung-me-202108100039248020.jpg'
            },
            {
              id: 6,
              url: 'https://images.foody.vn/res/g28/276239/prof/s/foody-mobile-hmb-jpg-584-636098889581416207.jpg'
            }
          ],
          tags: 'Kem Trà sữa Trà đào Nước ép',
          price_min: '20.000',
          price_max: '45.000',
          start_time_order: '2023-08-30 15:08:55',
          end_time_order: '2023-08-30 14:08:55',
          limit_slot: 20,
          user_created: 'trungtn',
        },
        {
          id: 3,
          date: '24/08',
          type: 0,
          imgs: [
            {
              id: 7,
              url: 'https://f28-zpc.zdn.vn/5009534423386098833/27d0366c448296dccf93.jpg'
            },
            {
              id: 8,
              url: 'https://f6-zpc.zdn.vn/6177010835641017727/223ab771c69f14c14d8e.jpg'
            },
            {
              id: 9,
              url: 'https://f28-zpc.zdn.vn/9125341668619845222/71b6d3f9a21770492906.jpg'
            }
          ],
          tags: 'Cơm, Bún trộn, Cơm rang',
          price_min: '25.000',
          price_max: '50.000',
          start_time_order: '2023-08-30 15:08:55',
          end_time_order: '2023-08-30 14:08:55',
          limit_slot: 30,
          user_created: 'trungtn',
        },
        {
          id: 4,
          date: '24/08',
          type: 0,
          imgs: [
            {
              id: 10,
              url: 'https://f28-zpc.zdn.vn/5009534423386098833/27d0366c448296dccf93.jpg'
            },
            {
              id: 11,
              url: 'https://f6-zpc.zdn.vn/6177010835641017727/223ab771c69f14c14d8e.jpg'
            },
            {
              id: 12,
              url: 'https://f28-zpc.zdn.vn/9125341668619845222/71b6d3f9a21770492906.jpg'
            }
          ],
          tags: 'Cơm, Bún trộn, Cơm rang',
          price_min: '25.000',
          price_max: '50.000',
          start_time_order: '2023-08-30 15:08:55',
          end_time_order: '2023-08-30 15:08:55',
          limit_slot: 30,
          user_created: 'trungtn',
        },
        {
          id: 5,
          date: '24/08',
          type: 1,
          imgs: [
            {
              id: 13,
              url: 'https://f28-zpc.zdn.vn/5009534423386098833/27d0366c448296dccf93.jpg'
            },
            {
              id: 14,
              url: 'https://f6-zpc.zdn.vn/6177010835641017727/223ab771c69f14c14d8e.jpg'
            },
            {
              id: 15,
              url: 'https://f28-zpc.zdn.vn/9125341668619845222/71b6d3f9a21770492906.jpg'
            }
          ],
          tags: 'Cơm, Bún trộn, Cơm rang',
          price_min: '25.000',
          price_max: '50.000',
          start_time_order: '2023-08-30 15:08:55',
          end_time_order: '2023-08-30 14:08:55',
          limit_slot: 30,
          user_created: 'trungtn',
        }
      ],
    }
  },
  methods: {
    eventClickOrder(item: any, index: any) {
      this.selectedItem = item
      this.showPopup = true
    },
    disableBtn(time: any) {
      return dayjs().isAfter(dayjs(time))
    },
    convertDayJsToHM(time: any) {
      return dayjs(time).format('h:mm A')
    }
  }
});
</script>

<style scoped>
.card-title {
  text-align: center;
}
.menu-info {
  font-weight: 800;
  margin: 10px 0 10px 0;
}
.img-card {
  border-radius: 8px;
}

.item-card {
  border-radius: 20px;
  border: solid;
}
@media screen and (min-width: 768px) {
  .item-card {
    width: 320px;
    height: 480px;
  }
  .img-card {
    height: 210px;
  }
}
</style>