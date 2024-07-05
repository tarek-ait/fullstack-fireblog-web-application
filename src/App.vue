<template>
  <div class="app-wrapper">
    <div class="app"  v-if="this.$store.state.postLoaded">
      <Navigation v-if="this.$store.state.navigation"></Navigation>
      <router-view />
      <Footer v-if="this.$store.state.navigation" ></Footer>
    </div>
  </div>
</template>


<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue' 
import firebase from 'firebase/app'
import "firebase/auth"

export default {
  name: "app",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser",user) // the user is singed in 
      if (user){
        this.$store.dispatch("getCurrentUser")
      }
    }),
    this.checkRouter();
    this.$store.dispatch("getPosts");
  },
  mounted() {},
  methods: {

    // getting the router we are at, so we can display the navigation or not, and then we must check this fucntion whenever we change the router
    checkRouter(){
      if(this.$route.name == 'Login' || this.$route.name == 'Register' || this.$route.name == 'ForgotPassword'){
        this.$store.state.navigation = false;
      }
    }
  },
  watch: {
    $route(){ // whenever the router is changed, we run the function checkrouter
      this.checkRouter();
    }
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow{
  margin-left: 12px;
  width: 12px;
  path{
    fill: #000;
  }
}



.blog-card-wrap{

  background-color: #f1f1f1;
  padding: 10px;
  padding-top: 40px;
  @media (min-width: 500px) {
    padding: 100px;
  }

  .blog-cards{
    display:grid;
    gap: 32px;
    grid-template-columns: 1fr;


    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr); // this means two cards for row 
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr); // this means two cards for row 
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr); // this means two cards for row 
    }

  }
}



/* BUTTONS styles in our application* */

button,
.router-btn{
  transition: 0.5s all ease;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303033;
  color: white;
  border-radius: 20px;
  border-radius: none;
  text-transform: uppercase;


  &:focus{
    outline: none;
  }

  &:hover{
    background-color: rgba(48, 48, 51, 0.7);
  }
}

.button-ghost{
  color: black;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media(min-width:700px){
    margin-top: 0;
    margin-left: 8px;
  }


  i{
    margin-left: 8px;
  }
}

.button-light{
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

.button-inactive{
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128,128,128,0.5) !important; 
}

.error{
  text-align: center;
  font-size: 12px;
  color: red;
}

</style>

