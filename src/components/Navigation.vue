<template>
  <header>
    <nav class="container"> <!-- the container style is  in the app vue file-->
        <div class="brading">
            <router-link class="header" :to="{ name :'Home'}">fireBlogs</router-link>
        </div>
       <div class="nav-links" style="text-align: center;"><!-- for the website view -->
        <ul v-show="!mobile">
            <router-link class="link" :to="{name: 'Home'}">Home</router-link>
            <router-link class="link" :to="{name: 'Blogs'}">Blogs</router-link>
            <router-link class="link" v-if="this.$store.state.user" :to="{name : 'CreatePost'}">Create Post</router-link>
            <router-link class="link" v-if="!this.$store.state.user" :to="{name: 'Login'}">Login/Register </router-link>
        </ul>

        <div class="profile" @click="toggleProfileMenu" v-show="this.$store.state.user " :style="{ 'transform': mobile ? 'translateX(-50px)' : 'translateX(0)' }" ref="profile"  >
            <span  style="color: white;">{{  this.$store.state.profileInitials }}</span>
            <div v-show="profileMenu" class="profile-menu">
                <div class="info">
                    <p class="initials">{{  this.$store.state.profileInitials }}</p>
                    <div class="right" >
                        <p>{{ this.$store.state.profileFirstName }}  {{ this.$store.state.profileLastName }}</p>
                        <p>{{ this.$store.state.profileUserName }}</p>
                        <p>{{ this.$store.state.profileEmail }}</p>
                    </div>
                </div>
                <div class="options">
                    <div class="option">
                        <routerLink :to="{name : 'Profile'}" class="option">
                            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-alt" class="icon svg-inline--fa fa-user-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32c61.8 0 112 50.2 112 112s-50.2 112-112 112-112-50.2-112-112S194.2 32 256 32m128 320c52.9 0 96 43.1 96 96v32H32v-32c0-52.9 43.1-96 96-96 85 0 67.3 16 128 16 60.9 0 42.9-16 128-16M256 0c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144S335.5 0 256 0zm128 320c-92.4 0-71 16-128 16-56.8 0-35.7-16-128-16C57.3 320 0 377.3 0 448v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-70.7-57.3-128-128-128z"></path></svg>
                            <p>profile</p>
                        </routerLink>
                    </div>
                    <div class="option">
                        <routerLink :to="{name : 'Admin'}" class="option">
                            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-crown" class="icon svg-inline--fa fa-user-crown fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 320c-28.71 0-42.6 16-89.6 16-47.09 0-60.82-16-89.6-16C60.17 320 0 380.17 0 454.4v9.6c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48v-9.6c0-74.23-60.17-134.4-134.4-134.4zM416 464c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16v-9.6C32 397.94 77.94 352 134.4 352c19.38 0 39.33 16 89.6 16 49.4 0 70.66-16 89.6-16 56.46 0 102.4 45.94 102.4 102.4v9.6zM224 288c70.7 0 128-57.31 128-128V0l-64 32-64-32-64 32L96 0v160c0 70.69 57.31 128 128 128zM128 51.78l32 16 64-32 64 32 32-16V112H128V51.78zm0 92.22h192v16c0 52.93-43.06 96-96 96s-96-43.07-96-96v-16z"></path></svg>
                            <p>Admin</p>
                        </routerLink>
                    </div>
                    <div @click="signOut" class="option" >
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="sign-out-alt"  class="icon svg-inline--fa fa-sign-out-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M272 112v51.6h-96c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C323.8 48 272 69.3 272 112zm192 144L320 400v-99.7H176v-88.6h144V112l144 144zM96 64h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-53 0-96-43-96-96V160c0-53 43-96 96-96z"></path></svg>
                        <p >Sign out</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </nav>
     
    <div class="b" style="margin-left: 5rem;">
        <svg aria-hidden="true"   v-show="mobile" @click="toggleMobileNav()" focusable="false" data-prefix="far" data-icon="bars" class="menu-icon svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg>
    </div>
    
    
    <transition name="mobile-nav"><!-- animations using vue.js, we will use this tarnsition to add the animation to the navigation bar -->
        <div v-show="mobileNav" class="mobile-nav"  >
            <ul style="display: flex;flex-direction: column">
                <router-link class="link" :to="{name: 'Home'}">Home</router-link>
                <router-link class="link" :to="{name: 'Blogs'}">Blogs</router-link>
                <router-link class="link" v-if="this.$store.state.user" :to="{name : 'CreatePost'}">Create Post</router-link>
                <router-link class="link"  v-if="!this.$store.state.user" :to="{name: 'Login'}"></router-link>
                <div @click="signOut" v-if="this.$store.state.user" class="option" style="display: flex;color: white;text-align: center; gap: 1rem;justify-content: center;align-items: center;margin-top: 10px;">
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="sign-out-alt" style="width: 30px;" class="icon svg-inline--fa fa-sign-out-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M272 112v51.6h-96c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C323.8 48 272 69.3 272 112zm192 144L320 400v-99.7H176v-88.6h144V112l144 144zM96 64h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-53 0-96-43-96-96V160c0-53 43-96 96-96z"></path></svg>
                    <p >Sign out</p>
                </div>
            </ul>
        </div>
    </transition>

   



  </header>
</template>

<script>

import firebase from 'firebase/app'
import  "firebase/auth"   // we import the entier library 

export default {
    name:'Navigation-view',
    components:{
    },
    data(){
        return{
            mobile: null, // indecating if we are in a mobile device 
            mobileNav: null, // indecating if we click on the navigation menu
            windowWidth: null, // get the window width
            profileMenu : false
        }
    },
    created(){
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen()
    },
    methods:{
        checkScreen(){
            this.windowWidth = window.innerWidth; // a javascript way to get the widht of the window 
            if(this.windowWidth <= 750){
                this.mobile = true;
            }else{
                this.mobile = false;
                this.mobileNav = false;
            }
        },
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },
        toggleProfileMenu(e){
             // so when know when we click on the profile icons to display the menu
             if(e.target === this.$refs.profile){
                this.profileMenu = !this.profileMenu
             }
        },
        signOut(){
            firebase.auth().signOut();
            this.$router.push({name: 'Home'});
            window.location.reload();
        }
    },
   
}

</script>

<style lang="scss" scoped >

.push-left{
    margin-left: 5rem;
}

    header{
        background-color: #fff;
        padding: 0 25px;
        box-shadow: 0px 4px 6px -1px rgba(0,0,0,0.1),0px 4px 6px -1px rgba(0,0,0,0.06);
        z-index: 99;
    }
    .link{
        font-weight: 500;
        padding: 0 8px;
        transition: color 0.3s ease;

        &:hover{
            color: #1eb8b8;
        }
    }
    nav{
        display: flex;
        padding: 25px 0;

        .brading{
            display: flex;
            align-items: center;

            .header{
                font-weight: 600;
                font-size: 24px;
                color: black;
                text-decoration: none;
            }
        }
    }
    .nav-links{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
        ul{
            margin-right: 32px ;
            margin-top: 1rem;
            .link{
                margin-right: 32px;
            }

            .link:last-child{
                margin-right: 0;
            }
        }
    }
    .menu-icon{
        cursor: pointer;
        position: absolute;
        top: 28px;
        right: 25px;  /* we are setting the width of the icon through this coordinations */
        height: 25px;
        width: auto;
    }
    .mobile-nav{
        padding: 20px;
        width: 70%;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        left: 0;
        background-color:#303030;
        top: 0;
        height: 100%;
        .link{
            color: white;
            padding: 15px 0;
        }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition: all 1s ease;
    }

    .mobile-nav-enter{
        transform: translateX(-250px); /* we can use these properties to add them on the navigation bar for tresor */ 
    }
  
    .mobile-nav-enter-to{
        transform: translateX(0);
    }

    .mobile-nav-leave-to{
        transform: translateX(-250px);
    }





    .profile{
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        background-color: #303030;  


        span{
            pointer-events: none;
        }
        .profile-menu{
            position: absolute;
            top: 50px;
            right: 0;
            width: 250px;
            background-color: #303030;
            box-shadow: inset;

            .info{
                display: flex;
                align-items: center;
                padding: 15px;
                border-bottom: 1px solid white;

                .initials{
                    position: initial;
                    width: 40px;
                    height: 40px;
                    background-color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #303030;
                }


                .right{
                    flex: 1;
                    margin-left: 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    p:nth-child(1){
                        font-size: 14px;
                        margin-bottom: 3px;
                    }

                    p:nth-child(2),
                    p:nth-child(3){
                        font-size: 12px;
                        margin-bottom: 3px;
                    }
                }
            }

            .options{
                    padding: 15px;
                    margin-bottom: 0;
                    .option{
                        text-decoration: none;
                        color: white;
                        display: flex;
                        align-items: center;
                        
                        width: 100%;
                        .icon{
                            width: 18px;
                            height: 18px;
                        }

                        p{
                            font-size:14px;
                            margin-left: 12px;
                            margin-top: 10px;
                        }
                        &:last-child{
                            margin-bottom: 0;
                        }
                    }
                }
        }
    }
</style>