<template>
  <div style=" overflow-y: scroll;">
    <el-form ref="form" :inline="true" :model="ownerInf" label-width="100px">
        <el-form-item label="房主名称">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.ownerName"></el-input>
        </el-form-item>
        <el-form-item label="民族">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.nationality"></el-input>
        </el-form-item>
        <el-form-item label="户籍">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.residence"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.personalid"></el-input>
        </el-form-item>
         <el-form-item label="手机号">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="房间类型">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.roomStatus"></el-input>
        </el-form-item>
        <el-form-item label="性别：">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.sex" >
              <el-option label="男" value="0"></el-option>
              <el-option label="女" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="结婚状况：">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.merriageStatus" placeholder="请选择">
              <el-option label="未婚" value="0"></el-option>
              <el-option label="已婚" value="1"></el-option>
              <el-option label="离异" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="政治面貌：">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.partyMember" placeholder="请选择">
              <el-option label="群众" value="0"></el-option>
              <el-option label="党员" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="志愿者：">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.volunteer" placeholder="请选择">
              <el-option label="非志愿者" value="0"></el-option>
              <el-option label="志愿者" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="就业状况：">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.employment" placeholder="请选择">
              <el-option label="未就业" value="0"></el-option>
              <el-option label="已就业" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="文化程度">
          <el-select size="mini" style="width:150px;" v-model="ownerInf.educationDegree" placeholder="请选择">
            <el-option label="文盲" value="0"></el-option>
            <el-option label="小学" value="1"></el-option>
            <el-option label="中学" value="2"></el-option>
            <el-option label="大学" value="3"></el-option>
            <el-option label="硕士" value="4"></el-option>
            <el-option label="博士" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="常住：">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.resident" placeholder="请选择">
              <el-option label="常住" value="0"></el-option>
              <el-option label="流动" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="老人">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.oldman" placeholder="请选择">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="独居老人">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.singleOld" placeholder="请选择">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="低保户">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.minLivings" placeholder="请选择">
              <el-option label="非低保" value="0"></el-option>
              <el-option label="低保边缘" value="1"></el-option>
              <el-option label="低保户" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="服役状态">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.serviceMan" placeholder="请选择">
              <el-option label="现役" value="1"></el-option>
              <el-option label="退役" value="0"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="是否残疾">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.disability" placeholder="请选择">
              <el-option label="正常" value="0"></el-option>              
              <el-option label="残疾" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="是否重疾">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.seriousHealth" placeholder="请选择">
              <el-option label="重疾" value="1"></el-option>
              <el-option label="正常" value="0"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="是否优抚">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.specialCare" placeholder="请选择">
              <el-option label="优抚" value="1"></el-option>
              <el-option label="非优抚" value="0"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="是否刑释">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.released" placeholder="请选择">
              <el-option label="正常" value="0"></el-option>
              <el-option label="刑释" value="1"></el-option>
              <el-option label="解教" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="是否矫正">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.corrected" placeholder="请选择">
              <el-option label="正常" value="0"></el-option>
              <el-option label="矫正" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="精神病">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.psychosis" placeholder="请选择">
              <el-option label="正常" value="0"></el-option>
              <el-option label="重精" value="1"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="监控">
            <el-select size="mini" style="width:150px;" v-model="ownerInf.monitoring" placeholder="请选择">
              <el-option label="正常" value="0"></el-option>
              <el-option label="监控" value="1"></el-option>
            </el-select>
        </el-form-item>
        <h5 style="text-align: center;">附加信息</h5>
        <el-form-item label="专业">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.profession"></el-input>
        </el-form-item>
        <el-form-item label="特长">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.speciality"></el-input>
        </el-form-item>
        <el-form-item label="身高">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.height"></el-input>
        </el-form-item>
        <el-form-item label="体重">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.weight"></el-input>
        </el-form-item>
         <el-form-item label="血型">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.bloodType"></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.resitdenceAdd"></el-input>
        </el-form-item>
        <el-form-item label="宗教信仰">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.religious"></el-input>
        </el-form-item>
        <el-form-item label="兵役详情">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.militaryDetail"></el-input>
        </el-form-item>
        <el-form-item label="工作单位">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.employer"></el-input>
        </el-form-item>
        <el-form-item label="职业名称">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.occupation"></el-input>
        </el-form-item>
         <el-form-item label="单位地址">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.employerAdd"></el-input>
        </el-form-item>
        <el-form-item label="单位电话">
            <el-input size="mini" style="width:150px;" v-model="ownerInf.employerPhone"></el-input>
        </el-form-item>
        <div id="ownerBtns">
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button @click="cancel">返回</el-button>
        </div>
      </el-form>
    </div>
</template>
<script>
export default {
  data(){
    return {
      ownerInf: {
            present:1,
            ownerName:'',
            sex:'',
            nationality:'',
            residence:'',
            personalid:'',
            roomStatus:'',
            phoneNumber:'',
            merriageStatus:'',
            partyMember:'',
            volunteer:'',
            employment:'',
            educationDegree:'',
            resident:'',
            oldman:'',
            oldmanAge:'',
            singleOld:'',
            minLivings:'',
            disability:'',
            seriousHealth:'',
            specialCare:'',
            serviceMan:'',
            retirement:'',
            released:'',
            corrected:'',
            psychosis:'',
            monitoring:'',
            resitdenceAdd:'',
            religious:'',
            militaryDetail:'',
            employer:'',
            occupation:'',
            employerAdd:'',
            employerPhone:'',
            profession:'',
            speciality:'',
            height:'',
            weight:'',
            bloodType:'',           
            documents:''

        },
        roomInfo: {}
    }
  },
  methods:{
    onSubmit(){
      let vm = this;
      this.$store.commit('writeOwner', {newOwner: vm.ownerInf});
    },
    cancel(){
      this.$router.go(-1);
    }
  },
  mounted(){
    let vm = this;
    vm.$events.on('infoEvent', function(data){
        for(let key in data){
            vm.ownerInf[key] = data[key]
        }
    });
  }
}
</script>
<style scoped>
 .el-form-item{
   margin-bottom: 0 ! important;
 }
 #ownerBtns{
   display: flex;
   justify-content: space-around;
 }
</style>
