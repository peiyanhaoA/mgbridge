<template>
    <div id="bdetails" class="position-absolute">
        <div class="card position-absolute" id="listtable">
            <div style="height:20px;"></div>
            <h5 style="text-align:center">信息编辑</h5>
            <el-radio-group id="btns" v-model="tableView" size="mini">
                <el-radio-button class="btn" label="editOwner">房主编辑</el-radio-button>
                <el-radio-button class="btn" label="editRenter">房客编辑</el-radio-button>
            </el-radio-group>
            <keep-alive>
                <component :is="tableView"></component>
            </keep-alive>

    </div>
    </div>
</template>
<script>
import editOwner from './edit-owner.vue';
import editRenter from './edit-renter.vue'
export default {
    data(){
        return {
            tableView: 'editOwner',
            owner: {},
            renter: {}
        }
    },
    mounted(){
        this.$events.emit('infoEvent', this.$route.params.owner);
        this.$store.commit('creatUrl')
    },
    components:{
        editOwner,
        editRenter
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
    width: 550px;
    height: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
#btns{
    text-align: center;
}
.btn{
    width: 100px;
}
</style>

