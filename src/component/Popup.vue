<template>
  <ion-modal :is-open="showPopup">
    <ion-header>
      <ion-toolbar>
        <ion-title>
            <ion-item>
              <ion-content class="title-popup">Chọn món</ion-content>
              <ion-icon :icon="closeOutline" @click="closePopup"></ion-icon>
            </ion-item>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Slide of images -->
      <swiper pager="true" options="slideOptions">
        <swiper-slide
          pager="true"
          options="slideOptions"
          v-for="(image, index) in data.imgs"
          :key="index"
        >
          <img class="img-oder" :src="image.url" :alt="'Slide ' + (index + 1)" />
        </swiper-slide>
      </swiper>
      <!-- Input field -->
      <div>
        <ion-item lines="none">
          <ion-input label="Chọn món:" class="inputData" v-model="params.content_order" placeholder="vd: 'thịt gà rang , cá kho ,mướp xào'"></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-input label="Chọn giá:" type="number" class="inputData" v-model="params.price" placeholder="vd: '30,000 VND'"></ion-input>
        </ion-item>
        <ion-item lines="none">
          <ion-input label="Ghi chú:" class="inputData" v-model="params.note_order" placeholder="vd: 'Cho nhiều cơm, ít cơm'"></ion-input>
        </ion-item>
      </div>
      <!-- Buttons -->
      <ion-item class="footer-popup">
        <ion-button class="btn-popup btn-cancel" @click="closePopup">Hủy</ion-button>
        <ion-button class="btn-popup btn-submit" @click="submitData">Đặt</ion-button>
      </ion-item>
    </ion-content>
  </ion-modal>
</template>

<script lang="ts">
import { IonModal, IonInput, IonButton, IonTitle, IonToolbar, IonHeader, IonContent, IonIcon, IonItem } from "@ionic/vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { defineComponent, ref } from "vue";
import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
import { closeOutline } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonModal,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonInput,
    IonButton,
    IonContent,
    Swiper,
    SwiperSlide,
    IonIcon,
    IonItem
  },
  props: {
    showPopup: Boolean,
    data: {
      type: Object,
      default: () => {
        return {}
      },
      require: true
    },
  },
  data() {
    return {
      params: {
        content_order: '',
        note_order: '',
        price: '',
      }
    }
  },
  emits: ["close", "submit"],
  setup(props, { emit }) {
    const slideOptions = {
      slidesPerView: 1,
      spaceBetween: 20,
    };

    return {
      slideOptions,
      closeOutline
    };
  },
  component: {},
  methods: {
    closePopup() {
      this.$emit("close")
      this.params = {
        content_order: '',
        price: '',
        note_order: ''
      }
    },
    submitData() {
      this.$emit("submit", this.params)
      this.closePopup()
    }
  }
});
</script>
<style scoped>
.img-oder {
  width: 360px !important;
  height: 330px !important;
  padding: 10px;
  margin: 10px;
}
ion-input {
  margin: 4%;
  border-radius: 10px !important;
  font-size: 0.9em;
  border: 1px solid #f1f1f1 !important;
  max-width: 92vw;
  max-height: 10vh;
}
ion-input::part(label)  {
  padding-left: 20px;
}
.btn-popup {
  margin-left: 20px;
  width: 50%;
  height: 40px;
  margin-right: 10px;
  color: white;
  font-weight: 500;
}
.btn-cancel {
  --background: #c02929;
}
.footer-popup {
  height: 50px;
}
ion-content {
  --background: none;
  --padding-top: 15px;
}
ion-item {
  --height: 100%;
}
</style>
