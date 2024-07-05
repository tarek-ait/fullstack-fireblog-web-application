<template>
  <div class="blog-wrapper  shadow" :class="{'no-user' : !this.$store.state.user}">
        <div class="blog-content" style="">
            <div class="div">
                <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>  <!-- we check if we are at the welcome page so called the hero section -->
                <h2 v-else>{{ post.blogTitle }}</h2>
                <p v-if="post.welcomeScreen">{{  post.blogPost }}</p>
                <p v-else class="content-preview" v-html="post.blogHTML"></p>
                <router-link class="link link-light" to="#" v-if="post.welcomeScreen">
                    Login/Register
                </router-link>
                <router-link class="link link-dark" :to="{name: 'viewBlog' , params: {blogid: this.post.blogId} }" v-else>
                    View the Post
                    <svg aria-hidden="true" style="width: 30px; color: #303030;" focusable="false" data-prefix="fal" data-icon="arrow-right" class="icon svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
                </router-link>
            </div>
        </div>
        <div class="blog-photo">
                <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)">
                <img v-else :src="post.blogCoverPhoto"  alt="">
        </div>
  </div>
</template>

<script>
export default {
    name: 'blogPost',
    props: [ 'post'],
     // getting the post from the parent file 
    components:{
        
    }
}
</script>

<style scoped lang="scss">

.blog-wrapper{
    display: flex;
    flex-direction: column;
}
.div h2{
    font-size: 32px;
    font-weight: 300px;
    text-transform: uppercase;
    margin-bottom: 24px;
}
.div p{
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
}
.blog-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 4;
    order: 2;
}
.div{
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    padding: 72px 24px;
}  
.content-preview{
    font-size: 13px;
    max-height: 24px;
    width: 250px; /* we should ajust this when we get to the firebase  */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* adding three dots at the content */
}        
.link{
    display: inline-flex;
    align-items: center;
    margin-top: 32px;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: all .5s ease-in;
    font-size: 20px;
    gap: 1rem;
}
.link:hover{
        border-bottom-color: #303030;
}
.link-light:hover{
    border-bottom-color: white;
}  
.blog-photo{
    order:1;
    flex: 5;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),rgba(0,0,0,0.06);
}

.blog-photo  img{
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.arrow{
    width: 40px;
}


.no-user:first-child{
    .blog-content{
        background-color: #303030;
        color: #fff;
        padding: 70px;
    }
    .arrow{
        path{
            fill: white;
        }
    }
}   

.blog-wrapper:nth-child(even){
    .blog-content{
        order: 2;
    }
    .blog-photo{
        order: 1;
    }
}
@media (min-width:700px){
        .blog-wrapper{
            min-height: 650px;
            max-height: 650px;
            flex-direction: row;
        }       
        .div{
            padding: 0 24px;
        }

        .div h2{
            font-size: 40px;
        }
        .blog-photo{
            order: 2;
        }
}
@media(min-width: 800px){

}

</style>