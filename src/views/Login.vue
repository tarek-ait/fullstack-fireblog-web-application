<template>
  <div class="form-wrap">
      <form class="login">
        <p class="login-register">
          Don't have an account
          <router-link class="router-link" :to="{name : 'Register'}">Register</router-link>
        </p>
        <h2>Login to Fireblog</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="icon svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
          </div>
          <div class="input">
            <input type="text" placeholder="Password" v-model="password">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock-alt" class="icon svg-inline--fa fa-lock-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zM264 392c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48zm32-168H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
          </div>
          <div class="error" v-show="error">{{ this.errorMsg }}</div>
        </div>
        <router-link class="forgot-password"  :to="{name : 'ForgotPassword'}">
          Forgot your password?
        </router-link>
        <button @click.prevent="signIn()">Sign in</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"


export default {
    name : "LoginView",
    components: {
    },
    data(){
      return {
        email :"",
        password : "",
        error : null,
        errorMsg : ""
       
      }
    },
    methods:{
      signIn() {
  firebase
    .auth()
    .signInWithEmailAndPassword(this.email, this.password)
    .then(() => {
      // Redirect to Home after successful login
      this.$router.push({ name: 'Home' });
      this.error = false; // Reset error state
      this.errorMsg = ""; // Clear error message
      this.$store.state.navigation = true; // display once again the navigation and the footer 
      // Log UID of the current user (may not be immediately available)
    })
    .catch((err) => {
      // Handle login errors
      this.error = true;
      this.errorMsg = err.message;
      console.error("Error signing in:", err);
    });
},


    }
}


</script>

<style lang="scss">  /**since the three veiews will have the same style */

.form-wrap{
  overflow:hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register{
    margin-bottom: 32px;

    .router-link{
      color: #000;
    }
  }



  form {
    flex-direction: column;
    padding: 0 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (min-width: 900px){
        padding: 0 50px;
    }

    h2{
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px){
          font-size: 40px;
      }
    }

    .inputs{
      width: 100%;
      max-width: 320px;

      .input{
          position: relative;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;


          input{
            width: 100%;
            border: none;
            align-items: center;
            justify-content: center;
            background-color: #f2f7f6;
            padding: 4px 4px 4px 36px;
            height: 50px;

            &:focus{
              outline: none;
            }
          }

          .icon{
            width: 12px;
            margin-top: 18px;
            position: absolute;
            left: 12px;
          }
      }
    }

    .forgot-password{
      text-decoration: none;
      color: black;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;   /**16 top 0 right and left and 32 top */
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;


      &:hover{
        border-color: #303030;
      }
    }

    /**now we work for the angle  */

    .angle{
      display: none;
      position: absolute;
      background-color: white;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;
      @media (min-width:900px){
        display: initial;
      }
    }
  }
  .background{
      display: none;
      flex: 2;
      background-size: cover;
      background-image: url('../assets/background.png');
      width: 100%;
      height: 100%;
      @media(min-width:900px){
        display: initial;
      }
    }
}








</style>