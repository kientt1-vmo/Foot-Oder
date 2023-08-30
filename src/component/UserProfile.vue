<template>
  <div>
    <div class="user-profile">
      <div class="avatar-container" id="popover-button">
        <ion-avatar class="avatar">
          <img :src="userAvatar" alt="User Avatar" />
        </ion-avatar>
      </div>
      <ion-popover
        trigger="popover-button"
        :dismiss-on-select="true"
      >
        <ion-content>
          <ion-list>
            <ion-item class="email-user"  :detail="false"
              >kientt1@vmogroup.com</ion-item
            >
            <ion-item @click="logout" :button="true" :detail="true"
              >Đăng xuất</ion-item
            >
          </ion-list>
        </ion-content>
      </ion-popover>
    </div>
  </div>
</template>

<script lang="ts">
import {
  IonAvatar,
  IonIcon,
  IonList,
  IonItem,
  IonPopover,
  IonButton,
  IonContent
} from "@ionic/vue";
import { ComputedRef, defineComponent, ref } from "vue";
import { logOutOutline } from "ionicons/icons";

export default defineComponent({
  name: "UserProfile",
  components: {
    IonAvatar,
    IonIcon,
    IonList,
    IonItem,
    IonPopover,
    IonButton,
    IonContent
  },

  data() {
    return {
      userAvatar:
        "https://lh3.googleusercontent.com/a/AAcHTtd2oEzgN7BDzpTlCv48tv2fKpq_XmhRalspL4t3qf-q=s288-c-no",
      logOutOutline: logOutOutline,
      showLogoutButton: false,
      showDropdown: false,
    };
  },
  setup() {
    const showSettings = ref(false);
    const toggleSettings = () => {
      showSettings.value = !showSettings.value;
    };
    return {
      showSettings,
      toggleSettings,
    };
  },
  methods: {
    logout() {
      window.location.href = "/login";
    },
  },
});
</script>

<style scoped>
.user-profile {
  display: flex;
  align-items: center;
}

.avatar-container {
  margin-right: 10px;
}

.avatar {
  --border-radius: 50%;
  width: 40px;
  height: 40px;
}

.settings-icon {
  font-size: 24px;
}
.email-user {
  font-weight: bold;
}
</style>
