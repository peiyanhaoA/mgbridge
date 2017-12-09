<template>
   <div id="bdetails" class="position-absolute">
        <div class="card position-absolute" id="listtable">
            <table class="table table-bordered" @contextmenu.prevent="edit">
                <tbody>
                    <tr>
                        <td :style="{'background-color': this.$store.state.color}">{{ this.$store.state.roomNum}}</td>
                        <td>房主姓名</td>
                        <td>{{ this.$store.state.oneOwner.ownerName }}</td>
                        <td>联系电话</td>
                        <td>{{ this.$store.state.oneOwner.phoneNumber }}</td>
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
                </tbody>
                <tbody >
                    <tr v-for="lodger in this.$store.state.hisOneRenter[index]">
                        <td>{{ lodger.tenantName }}</td>
                        <td>{{ lodger.personalid }}</td>
                        <td>{{ lodger.phoneNumber }}</td>
                        <td>{{ lodger.leaseEnd }}</td>
                        <td>{{ lodger.editor }}</td>
                    </tr>
                </tbody>
            </table>
            <div id="btns" class="d-flex justify-content-between">
                <div style="margin-left:20px;">
                    <span v-if="ownerInfor.partyMember == 1">☆</span>
                    <span v-if="ownerInfor.oldman == 1">□</span>
                    <span v-if="ownerInfor.singleOld == 1">☾</span>
                    <span v-if="ownerInfor.volunteer == 1">ღ</span>
                    <span v-if="ownerInfor.residence == 0">√</span>
                    <span v-if="ownerInfor.minLivings == 2">△</span>
                    <span v-if="this.$store.state.color == 'red'">jiankong</span>
                </div>
                <ul class="pagination float-right" style="margin:0;padding:0;">
					<li class="page-item">
                        <a class="page-link" href="#" @click="Previous" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
					<li class="page-item">
                        <a class="page-link" href="#" @click="next" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
				</ul>
                <button style="margin-right:40px;background-color:blueviolet; color: white;" @click="goDetails" type="button" class="btn btn-sm">返回</button>
            </div>

        </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            ownerInfor: this.$store.state.oneOwner,
            index: 0
        }
    },
    methods: {
        goDetails(){
            this.$router.push({name: 'buildingDetails'});
        },
        edit(ev){
            this.$router.push({name: 'editInfo', params: {owner: this.$store.state.oneOwner}})
        },
        Previous(){
            if(this.index > 0){
                this.index -= 1;
            }
        },
        next(){
            if(this.index < this.$store.state.hisOneRenter.length - 1){
                this.index += 1;
            }
        }
    },
    mounted(){
        this.$store.commit('searchInfo')
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
    overflow-y: scroll;
}
#btns{
    margin-top: 10px;
}
td{
    text-align: center;
}
</style>
