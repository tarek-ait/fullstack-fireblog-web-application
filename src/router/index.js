import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ForgotPassword from './../views/ForgotPassword.vue';
import Profile from '../views/Profile.vue';
import Admin from './../views/Admin.vue';
import CreatePost from './../views/CreatePost.vue';
import BlogPreview from './../views/BlogPreview.vue';
import viewBlog from './../views/ViewBlog.vue';
import EditBlog from './../views/EditBlog.vue';


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta : { // this is for naming and giving a title for our routers 
      title : 'Home',
      // requiresAuth : false
    }
  },
  {
    path: "/blog",
    name: "Blogs",
    component: Blogs, 
    meta : {
      title : 'Blogs',
      // requiresAuth : false
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login, 
    meta : {
      title : 'Login',
      // requiresAuth : false
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register, 
    meta : {
      title : 'Register',
      // requiresAuth : false

    }
  },
  {
    path: "/forgotPassword",
    name: "ForgotPassword",
    component: ForgotPassword, 
    meta : {
      title : 'Forgot Password',
      // requiresAuth : false,
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin, 
    meta : {
      title : 'Admin',
      // requiresAuth : true,
      // requiresAdmin : true, 

    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile, 
    meta : {
      title : 'Profile',
      // requiresAuth : true,
    }
  },
  {
    path: "/Create-post",
    name: "CreatePost",
    component: CreatePost, 
    meta : {
      title : 'Create Post',
      // requiresAuth : true,
      // requiresAdmin : true, 
    }
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: BlogPreview, 
    meta : {
      title : 'Preview Blogpost',
    }
  },
  {
    path: "/view-blog/:blogid",
    name: "viewBlog",
    component: viewBlog, 
    meta : {
      title : 'View Blog Post',
      // requiresAuth : true,
    }
  },
  {
    path: "/edit-blog/:blogid",
    name: "EditBlog",
    component: EditBlog, 
    meta : {
      title : 'Edit Blog Post',
      // requiresAuth : true,
      // requiresAdmin : true,
    }
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeEach((to,from,next) =>{
  document.title = `${to.meta.title} | FireBlog ` // and then we cand add statci title if we want to 
  next()
})

export default router
