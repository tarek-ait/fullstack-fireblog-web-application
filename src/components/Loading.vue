<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script>
export default {
    name : "loadingAnimation"
}
</script>


<style lang="scss">


.loading{
    top: 0;
    z-index: 101;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    @keyframes spin{  /**this will make the span spoin and rotate 360 degree  */
        to {
            transform: rotateZ(360deg);
        }
    }
    span{
        display: block;
        width: 60px;
        height: 60px;
        margin: auto;
        border: 3px solid transparent;
        border-top-color: white;
        border-bottom-color: white;
        border-radius: 50%;
        animation: spin ease 1000ms infinite;  /** this is for the animation  */
    } 
    
    
    
    }
</style>