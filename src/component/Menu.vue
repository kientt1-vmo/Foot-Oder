<template>
  <ion-grid>
    <ion-row>
      <div v-for="item in slots" >
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
              <div>Thời gian order: {{item.start_time_order}} - {{item.end_time_order}}</div>
              <div>Số lượng giới hạn: {{item.limit_slot}} suất</div>
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
      </div>

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
  data() {
    return {
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
          start_time_order: '10:30',
          end_time_order: '11:15',
          limit_slot: 30
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
          start_time_order: '10:30',
          end_time_order: '11:15',
          limit_slot: 20
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
          start_time_order: '10:30',
          end_time_order: '11:15',
          limit_slot: 30
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
          start_time_order: '10:30',
          end_time_order: '11:15',
          limit_slot: 30
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
          start_time_order: '10:30',
          end_time_order: '11:15',
          limit_slot: 30
        }
      ],
    }
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
  .img-card {
    height: 210px;
  }
}
</style>