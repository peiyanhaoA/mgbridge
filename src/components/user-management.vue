<template>
  <div id="userManage" class="position-absolute h-100">
    <button type="button" class="close position-absolute my-2 text-dark" style="right:10px;font-size:30px;" aria-label="Close" @click="tab">
        <span aria-hidden="true">&times;</span>
    </button>
    <div class="card position-absolute" style="overflow-y:auto;width:660px;height:400px;margin:auto;top:0;right:0;bottom:0;left:0;">
        <el-table :data="managers"  max-height="400" style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="manager">
                    <el-form label-position="left" class="demo-table-expand">
                        <el-form-item label="姓名">
                            <span>{{ manager.row.username }}</span>
                        </el-form-item>
                        <el-form-item label="性别">
                            <span>{{ manager.row.sex }}</span>
                        </el-form-item>
                        <el-form-item label="职务">
                            <span>{{ manager.row.position }}</span>
                        </el-form-item>
                        <el-form-item label="网格管理">
                            <span>{{ manager.row.gridManagement }}</span>
                        </el-form-item>
                        <el-form-item label="工作分工" >
                            <span>{{ manager.row.work }}</span>
                        </el-form-item>
                        <el-form-item label="志愿者队伍">
                            <span>{{ manager.row.voluteerTeam }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="姓名">
                <template slot-scope="scope">
                    <el-input type="text" v-model="scope.row.username" size="mini" :disabled="scope.row.working" auto-complete="off"></el-input>
                </template>
            </el-table-column>
            <el-table-column label="性别">
                <template slot-scope="scope">                   
                    <el-select v-model="scope.row.sex" size="mini" :disabled="scope.row.working" placeholder="请选择活动区域">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column label="职务" prop="position"></el-table-column>
            <el-table-column label="操作" style="width:30%">
                <template slot-scope="scope">
                    <el-button size="mini" v-if="scope.row.working" @click="handleEdit(scope.$index, scope.row)">
                        <span  >编辑</span>
                    </el-button>
                    <el-button size="mini" v-else @click="save(scope.$index, scope.row)">
                        <span>保存</span>
                    </el-button>
                    <el-button size="mini" type="danger" @click.native.prevent="handleDel(scope.$index,managers)"
                   >删除</el-button>
                </template>
            </el-table-column>
            
        </el-table>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
      return {
        managers:[]
      }
  },
  methods:{
        tab(){
            this.$router.push('/home')        
        },
        handleEdit(index,info){
            let vm=this;
            info.working=false;
            info.username=info.username+' ';          
        },
        save(index,info){
            let vm=this;
            info.working=true;
            info.username=info.username+' '; 
        },
        handleDel(index,rows){
            rows.splice(index,1);
        }
  },
  created(){
      var vm=this;
      axios.post('/api/getManager')
      .then(function(req){
          vm.managers=req.data;
      })

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
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
    color: #99a9bf;        
}

</style>
