import { createStore } from 'vuex'
import firebase from 'firebase/app'
import "firebase/auth"
import  db from '../firebase/firebaseInit'


export default createStore({
  state: {
    blogPosts:[], // here we will store all our blog posts 
    postLoaded : null , 
    blogHTML:"create your blog post here !! ",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: "",
    blogPhotoPreview: null,
    editPost:null,
    navigation:true,
    user:null,
    profileEmail:null,
    profileFirstName:null,
    profileLastName:null,
    profileUserName:null,
    profileId:null,
    profileInitials:null
  },
  getters: {
    blogPostsFeed(state){
      return state.blogPosts.slice(0,2)   // getting the two newest values of the array of the posts
    },
    blogPostsCards(state){
      return state.blogPosts.slice(2,6) // getting the last 4 newst posts
    }
  },
  mutations: {
    newBlogPost(state,payload){
      state.blogHTML= payload;
    },
    updateBlogTitle(state,payload){
      state.blogTitle = payload;
    },
    fileNameChange(state,payload){
      state.blogPhotoName = payload;
    },
    createFileURL(state,payload){
      state.blogPhotoFileURL = payload;
      console.log(state.blogPhotoFileURL)
    },
    openPhotoPreview(state){
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    toggleEditPost(state,payload){
      state.editPost = payload;
    },
    updateUser(state,payload){
      state.user = payload
    },
    setProfileInfo(state,doc){
      state.profileId = firebase.auth().currentUser.uid;  // get the current user and then assign the uid to the profile ID
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUserName = doc.data().userName
      state.user = true;
    },
    setProfileInitials(state){
      const first = state.profileFirstName.charAt(0).toUpperCase();
      const second = state.profileLastName.charAt(0).toUpperCase();
      state.profileInitials = first + second 
    },
    changeFirstName(state,payload){
      state.profileFirstName = payload
    },
    changeLastName(state,payload){
      state.profileLastName = payload
    },
    changeUserName(state,payload){
      state.profileUserName = payload
    },
    filterBlogPost(state,payload){
      state.blogPosts = state.blogPosts.filter(post => post.blogId !== payload) // we filter the array of post, so it gives a better ux
    },
    setBlogState(state,payload){
      state.blogHTML = payload.blogHTML;
      state.blogTitle = payload.blogTitle;
      state.blogPhotoFileURL = payload.blogCoverPhoto;
      state.blogPhotoName =payload.blogCoverPhotoName;
    }
  },
  actions: {
    async getCurrentUser({commit}){
      const database = await db.collection('users').doc(firebase.auth().currentUser.uid); // a bette practice is to not change the state inside an action but a mutation thus we will use the commit 
      const dbResults = await  database.get();
      commit("setProfileInfo",dbResults); 
      commit("setProfileInitials");
    },
    async changeUserData({commit,state}){
      const database = await db.collection("users").doc(state.profileId); 
      await database.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUserName
      });
      commit("setProfileInitials");
    },
    async getPosts({ state }){
      const dataBase = await db.collection("blogPosts").orderBy("date","desc");
      const dbResults = await dataBase.get() // getting the data (array of items)
      dbResults.forEach((doc) => {
        // we need to do a little filtering so we don't add the same posts
        if(!state.blogPosts.some(post => post.blogId === doc.id)){
          const data = {
            blogId : doc.data().blogId,
            blogHTML : doc.data().blogHTML,
            blogCoverPhoto : doc.data().blogCoverPhoto,
            blogTitle : doc.data().blogTitle,
            blogDate : doc.data().date,
            blogCoverPhotoName : doc.data().blogCoverPhotoName,
            postedBy : doc.data().postedBy
          };
          state.blogPosts.push(data); // we push the data to our array 
        }
    })
    state.postLoaded = true; // we set the postLoaded to true so that we have returned all the posts
  },
  async updatePost({commit , dispatch}, payload){
    commit('filterBlogPost', payload) // getting the post 
    await dispatch("getPosts") 
  },
  async deletePost({ commit },payload){
    const getPost = await db.collection("blogPosts").doc(payload);
    await getPost.delete();  // we delete it from the database 

    commit('filterBlogPost', payload)
  }
  },
})
