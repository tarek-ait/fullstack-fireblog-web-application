<template>
  <div  class="admin">
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <H2>Add Admin</H2>
        <div class="input">
          <input type="text" placeholder="Enter user emain to make them an admin" id="addAdmin" v-model="adminEmail">
        </div>
        <span>{{ this.functionMsg }}</span>
        <button class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminView",
  components:{

  },
  data(){
    return{
      adminEmail:"",
      functionMsg: null,
    }
  }

  // in this section of the project we will need to upgrade our plan for firebase inorder to use those functions which is not free and since we can't pay, we will not continue this section
}
</script>

<style  lang="scss" scoped>


.admin{
  .container{
    max-width: 1000px;
    padding: 60px 25px;


    h2{
      text-align: center;
      margin-bottom: 16px;
      font-weight: bold;
      font-size: 16px;
    }


    .admin-info{
      border-radius: 8px;
      /** there is a box shadow but i'm too lazy to write it down */
      padding: 32px;
      background-color: #f1f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      span{
        font-size: 14px;
      }

      h2{
        font-weight: 300;
      }

      .input{
        margin: 16px 0;

        label{
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }

        input{
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 50px;
          @media(min-width:900px){

          }

          &:focus{
            outline: none;
          }
        }
      }

      button{
        align-self: center;
      }
    }
  }



}
</style>