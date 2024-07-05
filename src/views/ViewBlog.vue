<template>
    <div class="post-view"  v-if="currentBlog">
      <div class="container quillWrapper">
        <div style="display: flex;align-items: center;justify-content: space-between;">
            <h2>{{ this.currentBlog[0].blogTitle }}</h2>
            <h2>{{ this.currentBlog[0].postedBy }}</h2>
        </div>

          <h4>Posted on:  {{ new Date(this.currentBlog[0].blogDate).toLocaleString('en-us',{dateStyle : "long"}) }}</h4>
          <img :src="this.currentBlog[0].blogCoverPhoto" alt="">
          <div class="post-content ql-editor" v-html="currentBlog[0].blogHTML"></div>
      </div>
    </div>
  </template>

<script>
export default {
    name:"ViewBlog",
    data(){
        return{
            currentBlog : null,
        }
    },
    async mounted(){
        try {
            this.currentBlog = await this.$store.state.blogPosts.filter((post) => {
                return post.blogId === this.$route.params.blogid
            })
        } catch (error) {
            console.error("Failed to fetch blog post:", error);
            // Handle the error appropriately
        }
    },
}
</script>

<style lang="scss">
    .post-view{
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 24px;
    }
</style>