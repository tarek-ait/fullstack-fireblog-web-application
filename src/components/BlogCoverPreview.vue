<template>
  <div class="modal">
    <div class="modal-content">
        <svg aria-hidden="true" @click="closePreview" focusable="false" data-prefix="fal" data-icon="times-circle" class="icon svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm94.8-285.3L281.5 256l69.3 69.3c4.7 4.7 4.7 12.3 0 17l-8.5 8.5c-4.7 4.7-12.3 4.7-17 0L256 281.5l-69.3 69.3c-4.7 4.7-12.3 4.7-17 0l-8.5-8.5c-4.7-4.7-4.7-12.3 0-17l69.3-69.3-69.3-69.3c-4.7-4.7-4.7-12.3 0-17l8.5-8.5c4.7-4.7 12.3-4.7 17 0l69.3 69.3 69.3-69.3c4.7-4.7 12.3-4.7 17 0l8.5 8.5c4.6 4.7 4.6 12.3 0 17z"></path></svg>
        <img :src="this.blogCoverPhoto" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:"BlogCoverPhoto",
    components:{
    },
    methods:{
        closePreview(){
            this.$store.commit("openPhotoPreview");
        }
    },
    computed:{
        blogCoverPhoto(){
            return this.$store.state.blogPhotoFileURL;
        }
    }
}
</script>

<style lang="scss" scoped>

.modal{
    margin-top: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1000;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height:100%;
    position: absolute;
    
    .modal-content{
        background-color: #fff;
        position: relative;
        border-radius: 12px;
        width: 600px;
        height: 400px;
        padding: 50px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);

        .icon{
            width: 24px;
            height: auto;
            cursor: pointer;
            font-size: 24px;
            position: absolute;
            top: 15px;
            right: 15px;
            color: #303030;
        }

        img{
            margin-top: 16px;
            display: block;
            width: auto;
            height: 100%;
            /** there  is a shadow for this one to */
        }
    }
}
</style>