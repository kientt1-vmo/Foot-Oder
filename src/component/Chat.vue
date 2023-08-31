<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Trò chuyện với chủ xốp :)</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item
          class="item-msg"
          v-for="message in messages"
          :key="message.id"
        >
          <div class="ion-margin-end">
            <ion-avatar class="message-avatar">
              <img :src="message.avatar" />
            </ion-avatar>
          </div>
          <div class="message-text">
            {{ message.text }}
            <div class="message-time">{{ message.timestamp }}</div>
          </div>
          <ion-button
            class="ion-margin-start"
            color="danger"
            @click="deleteMessage(message.id)"
          >
            <ion-icon :icon="trash"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-textarea
            class="ion-margin-start"
          v-model="newMessage"
          placeholder="Type your message"
        ></ion-textarea>
        <ion-button
          class="ion-padding"
          @click="sendMessage"
          :disabled="!newMessage"
          >Send</ion-button
        >
        <ion-button color="danger" href="/home">Back</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonTextarea,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { trash } from "ionicons/icons";
import { defineComponent } from "vue";
interface Message {
  id: number;
  text: string;
  avatar: string;
  timestamp: string;
  sending: boolean;
}
export default defineComponent({
  name: "Chat",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonTextarea,
    IonButton,
    IonIcon,
  },
  setup() {
    return {
      trash,
    };
  },

  data() {
    return {
      messages: [] as Message[],
      newMessage: "",
    };
  },
  created() {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      this.messages = JSON.parse(storedMessages);
    }
  },
  methods: {
    sendMessage() {
      if (!this.newMessage) {
        alert("Please enter a message before sending.");
        return;
      }

      const message = {
        id: Date.now(),
        text: this.newMessage,
        avatar:
          "https://lh3.googleusercontent.com/a/AAcHTtd2oEzgN7BDzpTlCv48tv2fKpq_XmhRalspL4t3qf-q=s288-c-no",
        timestamp: new Date().toLocaleString(undefined, {
          hour: "2-digit",
          minute: "2-digit",
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }),
        sending: true,
      };
      this.messages.push(message);
      this.newMessage = "";

      localStorage.setItem("chatMessages", JSON.stringify(this.messages));
      setTimeout(() => {
        message.sending = false; 
      }, 1000);
    },
    deleteMessage(messageId: number) {
      const messageIndex = this.messages.findIndex(
        (message) => message.id === messageId
      );
      if (messageIndex !== -1) {
        this.messages.splice(messageIndex, 1);

        localStorage.setItem("chatMessages", JSON.stringify(this.messages));
      }
    },
  },
});
</script>

<style scoped>
.message-text {
  word-break: break-word;
  margin-bottom: 4px;
}

.message-avatar {
  width: 40px;
  height: 40px;
  margin-bottom: 3px;
}
.item-msg {
  margin-top: 5px;
}
.message-time {
  font-size: 12px;
  color: gray;
  margin-top: 2px;
}
</style>
