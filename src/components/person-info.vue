<template>
   <div id="bdetails" class="position-absolute">
        <div class="card position-absolute" id="listtable">
            <table class="table table-bordered" @dblclick="edit">
                <tbody>
                    <tr>
                        <td v-text="this.$store.state.roomNum" :style="{'background-color': this.$store.state.bgColor}"></td>
                        <td>房主姓名</td>
                        <td></td>
                        <td>联系电话</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
                 <tbody>
                    <tr>
                        <td>房客姓名</td>
                        <td>身份证号</td>
                        <td>联系电话</td>
                        <td>租赁截止日期</td>
                        <td>录入者</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div id="btns" class="d-flex justify-content-end">
                <button style="margin-right:40px;background-color:blueviolet; color: white;" @click="goDetails" type="button" class="btn btn-sm">返回</button>
            </div>

        </div>
  </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        goDetails(){
            this.$store.commit('changebudingDetials',{roomNum: ''})
        },
        edit(ev){
            console.log(ev)
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
#listtable{
    width: 600px;
    height: 400px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
#btns{
    margin-top: 10px;
}
td{
    text-align: center;
}
</style>
