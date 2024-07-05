<template>
  <div class="modal">
    <div class="modal-content">
        <p>{{ this.modalMessage }}</p>
        <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
    name:"ModalPop",
    props: ["modalMessage"],
    methods:{
        closeModal(){
            this.$emit("close-modal");
        }
    }
}
</script>

<style lang="scss" scoped>

.modal{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 101;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    position: absolute;
    
    .modal-content{
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 8px;
        width: 300px;
        padding: 40px 30px;

        p{
            text-align: center;
            color: black;
        }


        button{
            align-self: center;
        }
    }
}
</style>