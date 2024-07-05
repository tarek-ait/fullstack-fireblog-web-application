<template>
    <div class="create-post">
        <BlogCoverPreview  v-show="this.$store.state.blogPhotoPreview"></BlogCoverPreview>
        <Loading v-show="loading"></Loading>
        <div class="container">
        <div v-show="this.errorMsg " :class="{ invisible: !this.errorMsg }" class="err-message">
          <p><span>Error:</span>{{ this.errorMsg }}</p>
        </div>
        <div class="blog-info">
          <input type="text" placeholder="Enter Blog Title" v-model="blogTitle" />
          <div class="upload-file">
            <label for="blog-photo">Upload Cover Photo</label>
            <input type="file" ref="blogPhoto" id="blog-photo" @change="fileChange" accept=".png, .jpg, ,jpeg" /> <!-- when uploading a photo it will fire a change ee=vebt-->
            <button  class="preview" style="outline: none;border: none;" :class="{ 'button-inactive': !this.$store.state.blogPhotoFileURL }" @click="openPreview">
              Preview Photo
            </button>
            <span>File Chosen: <span style="font-weight: 600;">{{ this.$store.state.blogPhotoName }}</span> </span>
          </div>
        </div>
        <div class="editor">
          <quillEditor  :options="editorOptions" v-model:value="blogHTML"  />
        </div>
        <div class="blog-actions">
          <button @click="uploadBlog">Publish Blog</button>
          <router-link class="router-button" :to="{name: 'BlogPreview'}">Post Preview</router-link>
        </div>
      </div>
    </div>
  </template>
  

<script>
import BlogCoverPreview from '../components/BlogCoverPreview.vue'
import Loading from '../components/Loading.vue'
import firebase from "firebase/app"
import 'firebase/storage'
import  db from '../firebase/firebaseInit'
import { quillEditor } from 'vue3-quill'


export default {
  name: "CreatePost",
  components:{
    BlogCoverPreview,
    Loading,
    quillEditor
  },
  data() {
    return {
      file: null,
      error: null,
      errorMsg: null,
      loading: null,
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
    };
  },
  methods:{
    fileChange(){
        this.file = this.$refs.blogPhoto.files[0] // get the file by the ref, it will be an array of files 
        const fileName = this.file.name;
        this.$store.commit("fileNameChange",fileName);
        this.$store.commit("createFileURL",URL.createObjectURL(this.file)); // creating an URL for our new file

    },
    openPreview(){
        this.$store.commit("openPhotoPreview")
    },
    imageHandler(file,Editor,cursorLocation,resetUploader){
        const storageRef = firebase.storage().ref();    
        const docRef = storageRef.child(`document/blogPostPhotos/${file.name}`);
            docRef.put(file).on("state changed",
            (snapshot) => {
                console.log(snapshot);
            },
            (err)=>{
                console.log(err)
            },
            async () => {
                const downloadURL = await docRef.getDownloadURL()
                Editor.insertEmbed(cursorLocation,"image",downloadURL)
                resetUploader()
            }
        )
    },
    uploadBlog(){
        if(this.blogTitle !== 0 && this.blogHTML.length !== 0){
            // in case the user fill his post
            if(this.file){
                // everything is true
                this.loading = true;
                const storageRef = firebase.storage().ref(); // we get the access to the storage from firebase 
                const docRef = storageRef.child(`documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`)  

                docRef.put(this.file).on("state_changed",
                (snapshot) =>{
                    console.log(snapshot)
                },
                (err) => {
                    // loading animation
                    console.log(err)
                },
                async () => {

                    const downloadURL = await docRef.getDownloadURL()
                    const timestamp = await Date.now()
                    const dataBase = await db.collection("blogPosts").doc();
                    // setting our data
                    await dataBase.set({
                        blogId : dataBase.id,
                        blogHTML : this.blogHTML,
                        blogCoverPhoto : downloadURL,
                        blogCoverPhotoName : this.blogCoverPhotoName,
                        blogTitle : this.blogTitle,
                        profileId : this.profileId,
                        date : timestamp,
                        postedBy : this.$store.state.profileUserName,
                    })
                    await this.$store.dispatch("getPosts") // push the new post
                    this.loading = false;
                    this.$router.push({name: "viewBlog" , params : {blogid: dataBase.id}})
                }
            )
                return;
            } // the else block of the second if 
                this.loading = false;
                this.error = true
                this.errorMsg = "Please ensure you uploaded a blog cover photo"
                setTimeout(() => {
                    this.error = false
                },5000);
                return;
            } // the else block of the first if
            this.loading = false;
            this.error = true;
            this.errorMsg = "Please ensure that blog title and the blog post appears";
            setTimeout(() => {
                this.error = false;
            },5000);
            return;
        },
    // now if the user upload a photot from the text editor 
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
    blogCoverPhotoName() {
      return this.$store.state.blogPhotoName;
    },
    blogTitle: {
      get() {
        return this.$store.state.blogTitle;
      },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      },
    },
    blogHTML: {
      get() {
        return this.$store.state.blogHTML;
      },
      set(payload) {
        this.$store.commit("newBlogPost", payload);
      },
    },
  },
  
};

</script>

<style lang="scss">

@media (max-width: 768px) {
  .blog-info, .upload-file {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justfiy-content: center;
  }

  .upload-file input[type="file"] {
    font-size: 14px; /* Adjust input size for smaller screens */
  }

  .preview {
    width: 100%; /* Make the button full width on smaller screens */
    padding: 12px 0; /* Increase padding for easier clicking */
  }
}


    .create-post{
        position: relative;
        height: 100%;

        button{
            margin-top: 0;
        }
        
        label,
        button,
        .router-button{
            transition: all 0.5s ease-in-out;
            align-self: center;
            font-size: 14PX;
            cursor: pointer;
            border-radius: 20px;
            padding: 12px 24px;
            color: white;
            background-color: #303030;
            text-decoration: none;
        
            &:hover{
                background-color: rgba(48,48,48,0.7);
            }
        }
        
        .container{
            position: relative;
            height: 100%;
            padding: 10px 25px 16px;
        }

        /** */error styling

        .invisible{
            opacity: 0 !important;
        }

        .err-message{
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            color: white;
            margin-bottom: 10px;
            background-color: #303030;
            opacity: 1;
            transition: all 0.5s ease;

            p{
                font-size: 14px;
            }

            span{
                font-weight: 600;
            }
        }

        .blog-info{
            display: flex;
            margin-bottom: 32px;

            input:nth-child(1){
                min-width: 300px;
            }

            input{
                transition: .5s all ease-in-out;
                padding: 10px 4px;
                border: none;
                border-bottom: 1px solid #303030;

                &:focus{
                    outline: none;
                    /** there is a box shadow for this one to */
                }
            }

            .upload-file{
                flex: 1;
                margin-left: 16px;
                position: relative;
                display: flex;


                input{
                    display: none;
                }

                .preview{
                    margin-left: 16px;
                    text-transform: initial; /** because it is upercase by default */
                }

                span{
                    font-size: 16px;
                    margin-left: 16px;
                    align-self: center;
                }
            }
        }

        /** if we did the scoped tag on the style then we won't  have the ability to modify the styme of the text editor */

        .editor{
            display: flex;
            flex-direction: column;
            height: 60vh;

            .quillWrapper{
                position: relative;
                display: flex;
                flex-direction: column;
                height: 100%;
            }

            .ql-container{
                display: flex;
                flex-direction: column;
                height: 100%;
                overflow: scroll;
            }

            .ql-editor{
                padding: 20px 16px 30px;
            }
        }

        .blog-actions{
            margin-top: 32px;


            button{
                margin-right: 16px;
            }
        }
}
</style>