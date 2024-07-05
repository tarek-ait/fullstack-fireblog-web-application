<template>
    <div class="form-wrap">
      <form class="register">
        <p class="login-register">
          Already have an account have an account
          <router-link class="router-link" :to="{name : 'Login'}">Login</router-link>
        </p>
        <h2>Create your fireblog account</h2>
        <div class="inputs">
          
          <div class="input">
            <input type="text" placeholder="first name" v-model="firstName">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-alt" class="icon svg-inline--fa fa-user-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32c61.8 0 112 50.2 112 112s-50.2 112-112 112-112-50.2-112-112S194.2 32 256 32m128 320c52.9 0 96 43.1 96 96v32H32v-32c0-52.9 43.1-96 96-96 85 0 67.3 16 128 16 60.9 0 42.9-16 128-16M256 0c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144S335.5 0 256 0zm128 320c-92.4 0-71 16-128 16-56.8 0-35.7-16-128-16C57.3 320 0 377.3 0 448v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-70.7-57.3-128-128-128z"></path></svg>
          </div>
          <div class="input">
            <input type="text" placeholder="last name" v-model="lastName">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-alt" class="icon svg-inline--fa fa-user-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32c61.8 0 112 50.2 112 112s-50.2 112-112 112-112-50.2-112-112S194.2 32 256 32m128 320c52.9 0 96 43.1 96 96v32H32v-32c0-52.9 43.1-96 96-96 85 0 67.3 16 128 16 60.9 0 42.9-16 128-16M256 0c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144S335.5 0 256 0zm128 320c-92.4 0-71 16-128 16-56.8 0-35.7-16-128-16C57.3 320 0 377.3 0 448v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-70.7-57.3-128-128-128z"></path></svg>
          </div>
          <div class="input">
            <input type="text" placeholder="user name" v-model="userName">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-alt" class="icon svg-inline--fa fa-user-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32c61.8 0 112 50.2 112 112s-50.2 112-112 112-112-50.2-112-112S194.2 32 256 32m128 320c52.9 0 96 43.1 96 96v32H32v-32c0-52.9 43.1-96 96-96 85 0 67.3 16 128 16 60.9 0 42.9-16 128-16M256 0c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144S335.5 0 256 0zm128 320c-92.4 0-71 16-128 16-56.8 0-35.7-16-128-16C57.3 320 0 377.3 0 448v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-70.7-57.3-128-128-128z"></path></svg>
          </div>
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
        <button @click.prevent="register()">Sign up</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>

import firebase from 'firebase/app'
import "firebase/auth"
import  db from '../firebase/firebaseInit'

export default {
    name : "RegisterForm",
    components: {
      
    },
    data(){
      return {
        firstName:"",
        lastName:"",
        userName:"",
        email :"",
        password : "",
        error : null,
        errorMsg : ""
      }
    },
    methods :{
            async register() {
            if (
              this.email !== "" &&
              this.password !== "" &&
              this.firstName !== "" &&
              this.lastName !== "" &&
              this.userName !== "" // Fixed variable name here
            ) {
              this.error = false;
              this.errorMsg = "";
              this.$store.state.navigation = true;
              
              try {
                const createUser = await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
                const userData = {
                  firstName: this.firstName,
                  lastName: this.lastName,
                  username: this.userName, 
                  email: this.email,
                };
                
                await db.collection("users").doc(createUser.user.uid).set(userData); // we set the user data in here 
                this.$router.push({ name: "Home" });
                
              } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
              }
              
            } else {
              this.error = true;
              this.errorMsg = "Please fill out all the fields!";
            }
          }

    }
}

</script>


<style lang="scss">

</style>
