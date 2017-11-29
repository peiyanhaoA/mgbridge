<template>
  <div id="recorded">
    <div class="card h-100">
        <div class="card-body text-dark">
            <h6>房屋信息录入</h6>
            <form class="my-4">
                <div class="row">                    
                    <div class="col-sm-6">
                        <label class="recordLabel" for="zone">楼栋</label>
                        <select class="recordForm" id="building">
                            <option value="15">15</option>
                            <option value="16" disabled>16</option>
                            <option value="17" disabled>17</option>
                            <option value="18" disabled>18</option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel" for="roomNumber">房号</label>
                        <input class="recordForm" id="roomNumber">                          
                    </div>
                </div>
            </form> 
            <h6>房主信息录入</h6>  
            <form></form>     
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'recorded',
  data(){
    return{

    }
  },
  methods:{

  },
  components:{
    
  }
  
}
</script>
<style scoped>
#recorded{
    width:400px;
    height:600px;
}
.recordLabel{
    width:30%;
    display:inline-block;
    font-size:14px;
}
.recordForm{
    width:60%;
    appearance:none;
    border:0;
    border-bottom:1px solid #BDBDBD;
    display:inline-block;
    outline:none;
}
</style>

