<template>
  <div id="userManage" class="position-absolute h-100">
    <button type="button" class="close position-absolute my-2 text-dark" style="right:10px;font-size:30px;" aria-label="Close" @click="tab">
        <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>
<script>
export default {
  data(){
      return {

      }
  },
  methods:{
        tab(){
            this.$router.push('/home')        
        }
  }
}
</script>
<style scoped>
#userManage{
    top: 0;    
    left:200px;
    width:calc(100% - 200px);
    background-color:rgba(0,0,0,.3);
}
</style>
