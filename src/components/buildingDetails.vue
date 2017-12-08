<template>
  <div id="bdetails" class="position-absolute">
      <div class="card position-absolute" id="listsCard">
          <h3><b>楼层走访统计表（<span>{{ $route.params.building }}</span>栋<span>{{ this.$store.state.ownerInfo.length }}</span>户）</b></h3>
        <div id="lists">
             <div class="d-flex flex-wrap" :style="{width: this.$store.state.width, 'margin-left': '20px'}">
                 <div id="rowD" v-for="(room, index) in this.$store.state.ownerInfo">
                    <span id="roomNum" @click="showPersonInfo($event, index)" :style="{'background-color': bgcolor[index]}">{{room[0].roomNumber}}</span>
                    <span id="icon">
                        <span v-if="room.partyMember == 1">☆</span>
                        <span v-if="room.oldman == 1">□</span>
                        <span v-if="room.singleOld == 1">☾</span>
                        <span v-if="room.volunteer == 1">ღ</span>
                        <span v-if="room.residence == 0">√</span>
                        <span v-if="room.minLivings == 2">△</span>
                    </span>
                </div>
             </div>
        </div>
        <div id="btns" class="d-flex justify-content-end">
            <button style="margin-right:40px;background-color:blueviolet; color: white;" @click="goBack" type="button" class="btn btn-sm">返回</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            bgcolor: this.$store.state.bgcolor
        }
    },
    methods:{
        goBack(){
            this.$router.push({path: '/home'})
        },
        showPersonInfo(e, index){
            
          this.$router.push({name: 'personInfo',params: { roomNum: e.target.innerText, index: index }})
        }
    }
}
</script>
<style scoped>
#bdetails{
    width: calc(100% - 200px);
    height: 100%;
    left: 200px;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
}
#listsCard{
    width: 600px;
    height: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
h3{
    text-align: center;
    margin-top: 20px;
}
#lists{
    width: 100%;
    height: 530px;
    overflow-y: scroll;
    margin-top: 10px;
}
#btns{
    margin-top: 10px;
}
#colD{
    width: 870px;
    margin: 0 30px 0 25px;
}
#rowD{
    width: 105px;
    height: 20px;
}
#roomNum, #icon {
    display: inline-block;
    border: 1px solid #ccc;
    width: 50px;
    height: 20px;
    text-align: center;
    cursor: pointer;
    vertical-align: top;
}

</style>
