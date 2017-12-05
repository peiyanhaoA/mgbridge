<template>
  <div id="bdetails" class="position-absolute">
      <div class="card position-absolute" id="listsCard">
          <h3><b>楼层走访统计表</b></h3>
        <div id="lists">
            <div v-for="(col) in this.$store.state.cols" id="colD" class="d-flex justify-content-around">
                <div id="rowD" v-for="(row) in rows" class="d-flex justify-content-around">
                    <span id="roomNum" @click="showPersonInfo($event)" :style="{'background-color': bgColor}">{{ col + row}}</span>
                    <span id="icon"></span>
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
            rows: this.$store.state.rows,
            bgColor: this.$store.state.bgColor
        }
    },
    methods:{
        goBack(){
            this.$store.commit('changebudingDetials')
        },
        showPersonInfo(e){
            console.log(e.target.innerText)
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
    width: 90px;
    height: 20px;
}
#roomNum, #icon {
    display: inline-block;
    border: 1px solid #ccc;
    width: 50px;
    height: 20px;
    text-align: center;
    cursor: pointer;
}

</style>
