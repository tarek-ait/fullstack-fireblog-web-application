<template>
    <footer>
      <div class="container-fluid">
          <div class="left">
              <div class="col-1">
                  <router-link class="header" :to="{ name :'Home'}">FireBlogs</router-link>
                  <ul style="padding-left: none;">
                      <li>
                          <a href="#" class="svg-icon"><i class='bx bxl-youtube icon-bx' ></i></a>
                      </li>
                      <li>
                          <a href="#" class="svg-icon"><i class='bx bxl-twitter icon-bx' ></i></a>
                      </li>
                      <li>
                          <a href="#" class="svg-icon"><i class='bx bxl-instagram-alt icon-bx' ></i></a>
                      </li>
                      <li>
                          <a href="#" class="svg-icon"><i class='bx bxl-linkedin-square icon-bx'></i></a>
                      </li>
                  </ul>
              </div>
              <div class="col-2">
                  <ul>
                      <router-link class="link" :to="{ name :'Home'}">Home</router-link>
                      <router-link class="link" :to="{ name :'Blogs'}">Blogs</router-link>
                      <router-link class="link" v-if="this.$store.state.user" :to="{name : 'CreatePost'}">Create Post</router-link>
                      <router-link v-if="!this.$store.state.user" class="link" :to="{ name : 'Login' }">Log In / Register</router-link>
                  </ul>
              </div>
          </div>
          <div class="right">
              <p>Copy Rights 2024 All Rights Reserved</p>
          </div>
      </div>
      <h1 style="font-size:15px;margin-top:3rem;margin-bottom:3rem;font-weight:600;">Made with ❤️ by Tarek Ait Ahmed</h1>
    </footer>
  </template>
  
  <script>


  export  default {
      name: 'Footer-view',
      components:{
          // handling our svgs into components which is more clear
      }
  }
  
  </script>
 <style lang="scss" scoped>


 footer {
   margin-top: auto;
   padding: 100px 25px;
   background-color: #303030;
   .container-fluid {
     display: flex;
     flex-direction: column;
     gap: 32px;
     @media (min-width: 800px) {
       flex-direction: row;
       gap: 0px;
     }
 
      div {
       display: flex;
       flex: 1;
     }
 
     .left {
       gap: 32px;
       color: #fff;
       display: flex;
       flex-direction: column;
       align-items: center;
       @media (min-width: 800px) {
         flex-direction: row;
         align-items: initial;
         gap: 0;
       }
 
       .header {
         text-align: center;
         font-size: 24px;
         color: #fff;
         margin-bottom: 16px;
         text-decoration: none;
         font-weight: 600;
         @media (min-width: 800px) {
           text-align: initial;
         }
       }
       ul {
         gap: 16px;
         list-style: none;
         display: flex;
       }
 
       .col-1,
       .col-2 {
         gap: 32px;
         display: flex;
         flex: 1;
         @media (min-width: 800px) {
           gap: 0;
         }
       }
 
       .col-1 {
         flex-direction: column;
 
         h2 {
           text-align: center;
           @media (min-width: 800px) {
             text-align: initial;
           }
         }
         ul {
           margin-top: auto;
 
           li {
             display: flex;
             align-items: center;
             i{
              color: white;
              font-size: 35px;
            }
           }
         }
       }
 
       .col-2 {
         ul {
           height: 100%;
           justify-content: center;
           flex-direction: row;
           flex-wrap: wrap;
           @media (min-width: 800px) {
             flex-direction: column;
           }
           .link {
             font-size: 16px;
             font-weight: 500;
             color: #fff;
             text-decoration: none;
           }
         }
       }
     }
 
     .right {
       gap: 32px;
       color: #fff;
       align-items: center;
       flex-direction: column;
       @media (min-width: 800px) {
         align-items: flex-end;
         gap: 0;
       }
     }
 
     p {
       margin-top: auto;
     }
   }
 }
 </style>