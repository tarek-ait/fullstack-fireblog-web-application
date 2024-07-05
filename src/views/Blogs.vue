<template>
  <div class="blog-card-wrap">
      <div class="blog-cards container">
        <div class="toggle-edit" v-show="this.$store.state.profileEmail == 'tarekaitahmed0@gmail.com' ">
          <span>
            toggle editing post
          </span>
          <input type="checkbox" v-model="editPost">
        </div>
        <blogCard :post="post" v-for="( post , index ) in blogPosts" :key="index"></blogCard> <!-- we do a loop and each time we pass the post -->
      </div>
  </div>
</template>

<script>
import BlogCard  from '../components/BlogCard.vue';
export default {
    name:'BlogsView',
    components:{
      BlogCard
    },
    computed:{
      blogPosts(){
        return this.$store.state.blogPosts;
      },
      editPost: { // this is an object 
        get(){
          return this.$store.state.editPost;  // we get the value 
        },
        set(payload){  // then we change the value 
          this.$store.commit('toggleEditPost', payload); // the commit is a mutation for updating the state 
        }
      },
    },
    // we call the function so the editpost is to be false, when we leave the 
    beforeUnmount(){ // when leaving this view then the edit value will be false, this already exists (before destroy)
      this.$store.commit('toggleEditPost', false);
    }
}
// working on this view will continue for tmrw or another date
</script>
 

<style  lang="scss" scoped>

.blog-card-wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }



.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;
    


    span {
      margin-right: 16px;
    }

    /* you should check on the toggeling button*/
    input[type="checkbox"] {
      cursor: pointer;
      position: relative;
      border: none;
      -webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 20px;
      top: 0;
      left: 0;
      background: #303030;
      transform: scale(1.1);
      transition: 750ms ease all;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input:checked[type="checkbox"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>