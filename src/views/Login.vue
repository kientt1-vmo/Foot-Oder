<template>
  <div>
    <div class="border-form">
      <ion-title class="title-login">Đăng nhập</ion-title>
      <ion-grid>
        <ion-row>
          <form class="form-login">
            <ion-input
                id="username"
                label="User name"
                label-placement="floating"
                v-model="username"
                name="username"
                :counter="true"
                :maxlength="40"
                type="text"
                :counter-formatter="customFormatter"
                @input="handleValidateUserName"
            >
            </ion-input>
             <ion-text color="danger">
              <p v-show="usernameValid" >Username is required</p>
            </ion-text>
            <ion-input
                id="custom-input"
                label="Password"
                v-model="password"
                name="password"
                label-placement="floating"
                :counter="true"
                :maxlength="40"
                type="password"
                :counter-formatter="customFormatter"
                @input="handleValidatePassword"
            >
            </ion-input>
             <ion-text color="danger">
              <p v-show="passwordValid">Password is required</p>
            </ion-text>
          </form>
        </ion-row>
        <div class="btn-spacing">
          <ion-buttons class="btn-login" >
            <ion-button @click="onLogin()" type="submit" expand="block"
                        class="button-login"
                        :class="(usernameValid || passwordValid)  || (!username || !password) ? 'btn-disable' : 'btn-active'"
                        :disabled="(usernameValid || passwordValid) || (!username || !password)"
            >
              Đăng nhập
            </ion-button>
          </ion-buttons>
        </div>
        <ion-text color="danger" class="error-custom">
          <p v-show="logError">{{logError}}</p>
        </ion-text>
      </ion-grid>
    </div>
  </div>
</template>

<script  lang="ts">
import
{
  IonCol,
  IonGrid,
  IonRow ,
  IonInput,
  IonTitle,
  IonButton,
  IonButtons,
  IonText,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Login",
  components: {
    IonCol, IonGrid, IonRow, IonInput, IonTitle, IonButton, IonToolbar , IonText, IonButtons
  },
  setup() {},
  data() {
    return {
      username: '',
      password: '',
      submitted: false,
      passwordValid: false,
      usernameValid: false,
      logError: '',
      accounts:
      [
        {
          username: 'kientt1@vmogroup.com',
          password: '12345678901'
        },
        {
          username: 'trungtn',
          password: 'trungdeptrai'
        },
        {
          username: '1',
          password: '1'
        },
      ]
    }
  },

  methods: {
    customFormatter(inputLength: any, maxLength: any) {
      return `${maxLength - inputLength}`;
    },
    handleValidatePassword(e:any) {
      this.passwordValid = !e.data;
    },
    handleValidateUserName(e:any) {
      this.usernameValid = !e.data;
    },
    onLogin() {
      if (!this.passwordValid && !this.usernameValid)  {
        const user = {
          username: this.username,
          password: this.password
        }
        this.accounts.forEach((item:any) => {
          if (item.username == user.username && item.password == user.password) {
            window.location.replace('/home')
          } else {
            this.logError = 'Username or password is false'
          }
        })
      } else {
        this.logError = 'Error'
      }
    },
  }
})
</script>

<style scoped>
ion-col {
  background-color: #135d54;
  border: solid 1px #fff;
  color: #fff;
  text-align: center;
}
.title-login {
  text-align: center;
  margin: 2% 0 2% 0;
}
.button-login {
  text-align: center;
  height: 40px;
  border-radius: 8px;
  border: solid 1px;
}
.btn-disable {
  background-color: #323432;
}
.btn-active {
  background-color: #28a745;
}
.btn-spacing {
  display: flex;
  justify-content: center;
  padding-top: 3%;
}
.border-form {
  margin: 2% 2% 2% 2%;
  padding: 20px 20px 20px 20px;
  border: solid 1px;
}
.form-login {
  width: 100%;
}
.error-custom {
  text-align: center;
}
</style>