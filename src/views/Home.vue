<template>

  <div>
      <div class="home">
         <blogPost v-if="!this.$store.state.user" :post="welcomeScreen"></blogPost><!-- we need to bind the data from the parent to the component blogpost-->
         <blogPost :post="post" v-for="(post , index) in blogPostsFeed" :key="index"></blogPost><!-- for the three other firblog posts , w could have add the three manually but it is more smart and impressive-->
        <div class="blog-card-wrap">
          <div class="container-fluid">
            <h3 style="margin-bottom: 2rem;">View more recent Blogs</h3>
              <div class="blog-cards">
                <blogCards :post="post" v-for="( post , index ) in blogPostsCards" :key="index"></blogCards>
              </div>
          </div>
        </div>
        <div v-if="!this.$store.state.user" class="updates">
          <div class="container-fluid2">
            <h2>Never miss a Post. Register for your free account to day</h2>
            <router-link :to="{name : 'Register'}" class="router-btn" style="display: flex; align-items: center;justify-content: space-between;gap: 1rem;" >
              Register for FireBlogs
              <svg aria-hidden="true" style="width: 40px;" focusable="false" data-prefix="fal" data-icon="arrow-right" class="icon svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
            </router-link>
          </div>
        </div>
        </div>
  </div>
  
</template>

<script>
import blogCards from '../components/BlogCard.vue';
import blogPost from '../components/BlogPost.vue';


export default {
  name: "HomeView",
  components: {
    blogPost,
    blogCards,
  },
  data(){
    return {
      welcomeScreen:{
        title: "Welcome!",
        blogPost: "i just built that so my firends could post and to share thier thoughts here and also its kinda cool tbh, so if you got this link then you should post something, else i'll hang my self in my room and end my miserable life (please keep it familyfriendly)",
        welcomeScreen: true,
        photo:"coding"
      }, 
    }
  },
  computed:{
    blogPostsCards(){
      return this.$store.getters.blogPostsCards;
    },
    blogPostsFeed(){
      return this.$store.getters.blogPostsFeed;
    }
  }
};
</script>


<style lang="scss">
  .blog-card-wrapp{
    h3{
      font-weight: 300;
      font-size: 28px;
      margin-bottom: 32px;
    }
  }

  .arrow{
    path{
      fill: white;
    }
  }

  .updates{
    padding: 0 100px ;
    .container-fluid2{
      padding: 100px 25px;
      display: flex;
      flex-direction: column;
      
      align-items: center;
      @media (min-width:800px){
        padding: 125px 25px;
        flex-direction: row;
      }

      .router-btn{
        display: flex;
        font-size: 14px;
        text-decoration: none;
        @media(min-width:800px){
          margin-left: auto;
        }
      }

      h2{
        font-weight: 400;
        font-size: 32px;
        max-width: 425px;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        @media(min-width:800px){
          text-align: initial;
          font-size: 40px;
        }
      }
    }
  }
</style>