<template>
  <div id="eventHanding">
    <div class="card position-absolute" style="width:100px;height:100px;top:0;bottom:0;left:0;right:0;margin:auto;"></div>
    
  </div>

</template>

<script>
export default {
  name: 'eventHanding',
  data(){
      return{}
  },
  methods:{
      tab(val){
          let vm=this;
          vm.$events.emit('tab',val);          
      }
  },
  components:{
  }
}
</script>

<style>
#eventHanding{
   
}
</style>
