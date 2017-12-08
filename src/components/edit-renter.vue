<template>
    <div style="width:100%;height:100%;">
      <div v-show="bindRoomerShow">
          <span style="margin-left:10px;cursor: pointer;" v-for="(roomer, index) in this.$store.state.hisOneRenter" @click="bindRoomer(index)">{{ roomer.tenantName }}</span>
      </div>
      <div style="height:480px; overflow-y: scroll;">
        <el-form ref="form" :inline="true" :model="renterInf" label-width="100px">
          <el-form-item label="房客名称">
              <el-input size="mini" style="width:150px;" v-model="renterInf.tenantName"></el-input>
          </el-form-item>
          <el-form-item label="民族">
              <el-input size="mini" style="width:150px;" v-model="renterInf.nationality"></el-input>
          </el-form-item>
          <el-form-item label="性别：">
              <el-select size="mini" style="width:150px;" v-model="renterInf.sex" placeholder="请选择">
                <el-option label="男" value="0"></el-option>
                <el-option label="女" value="1"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="户籍">
              <el-input size="mini" style="width:150px;" v-model="renterInf.residence"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
              <el-input size="mini" style="width:150px;" v-model="renterInf.personalid"></el-input>
          </el-form-item>
          <el-form-item label="手机号">
              <el-input size="mini" style="width:150px;" v-model="renterInf.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="与户主关系">
              <el-input size="mini" style="width:150px;" v-model="renterInf.relationShip"></el-input>
          </el-form-item>
          <el-form-item label="住宿方式">
              <el-input size="mini" style="width:150px;" v-model="renterInf.rental"></el-input>
          </el-form-item>
          <el-form-item label="开始日期">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="renterInf.leaseStart" style="width: 150px;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="截止日期">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="renterInf.leaseEnd" style="width: 150px;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="结婚状况：">
              <el-select size="mini" style="width:150px;" v-model="renterInf.merriageStatus" placeholder="请选择">
                <el-option label="未婚" value="0"></el-option>
                <el-option label="已婚" value="1"></el-option>
                <el-option label="离异" value="2"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="政治面貌：">
              <el-select size="mini" style="width:150px;" v-model="renterInf.partyMember" placeholder="请选择">
                <el-option label="群众" value="0"></el-option>
                <el-option label="党员" value="1"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="志愿者：">
              <el-select size="mini" style="width:150px;" v-model="renterInf.volunteer" placeholder="请选择">
                <el-option label="非志愿者" value="0"></el-option>
                <el-option label="志愿者" value="1"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="就业状况：">
              <el-select size="mini" style="width:150px;" v-model="renterInf.employment" placeholder="请选择">
                <el-option label="未就业" value="0"></el-option>
                <el-option label="已就业" value="1"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="文化程度">
            <el-select size="mini" style="width:150px;" v-model="renterInf.educationDegree" placeholder="请选择">
              <el-option label="文盲" value="0"></el-option>
              <el-option label="小学" value="1"></el-option>
              <el-option label="中学" value="2"></el-option>
              <el-option label="大学" value="3"></el-option>
              <el-option label="硕士" value="4"></el-option>
              <el-option label="博士" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="常住：">
              <el-select size="mini" style="width:150px;" v-model="renterInf.resident" placeholder="请选择">
                <el-option label="常住" value="0"></el-option>
                <el-option label="流动" value="1"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="老人">
              <el-select size="mini" style="width:150px;" v-model="renterInf.oldman" placeholder="请选择">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="独居老人">
              <el-select size="mini" style="width:150px;" v-model="renterInf.singleOld" placeholder="请选择">
                <el-option label="是" value="1"></el-option>
                <el-option label="否" value="0"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="低保户">
              <el-select size="mini" style="width:150px;" v-model="renterInf.minLivings" placeholder="请选择">
                <el-option label="非低保" value="0"></el-option>
                <el-option label="低保边缘" value="1"></el-option>
                <el-option label="低保户" value="1"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="服役状态">
              <el-select size="mini" style="width:150px;" v-model="renterInf.serviceMan" placeholder="请选择">
                <el-option label="现役" value="1"></el-option>
                <el-option label="退役" value="0"></el-option>
              </el-select>
          </el-form-item>

          <el-form-item label="是否残疾">
              <el-select size="mini" style="width:150px;" v-model="renterInf.disability" placeholder="请选择">
                <el-option label="正常" value="0"></el-option>              
                <el-option label="残疾" value="1"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="是否重疾">
              <el-select size="mini" style="width:150px;" v-model="renterInf.seriousHealth" placeholder="请选择">
                <el-option label="重疾" value="1"></el-option>
                <el-option label="正常" value="0"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="是否优抚">
              <el-select size="mini" style="width:150px;" v-model="renterInf.specialCare" placeholder="请选择">
                <el-option label="优抚" value="1"></el-option>
                <el-option label="非优抚" value="0"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="是否刑释">
              <el-select size="mini" style="width:150px;" v-model="renterInf.released" placeholder="请选择">
                <el-option label="正常" value="0"></el-option>
                <el-option label="刑释" value="1"></el-option>
                <el-option label="解教" value="2"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="是否矫正">
              <el-select size="mini" style="width:150px;" v-model="renterInf.corrected" placeholder="请选择">
                <el-option label="正常" value="0"></el-option>
                <el-option label="矫正" value="1"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="精神病">
              <el-select size="mini" style="width:150px;" v-model="renterInf.psychosis" placeholder="请选择">
                <el-option label="正常" value="0"></el-option>
                <el-option label="重精" value="1"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="监控">
              <el-select size="mini" style="width:150px;" v-model="renterInf.monitoring" placeholder="请选择">
                <el-option label="正常" value="0"></el-option>
                <el-option label="监控" value="1"></el-option>
              </el-select>
          </el-form-item>
          <h5 style="text-align: center;">附加信息</h5>
          <el-form-item label="专业">
              <el-input size="mini" style="width:150px;" v-model="renterInf.profession"></el-input>
          </el-form-item>
          <el-form-item label="特长">
              <el-input size="mini" style="width:150px;" v-model="renterInf.speciality"></el-input>
          </el-form-item>
          <el-form-item label="身高">
              <el-input size="mini" style="width:150px;" v-model="renterInf.height"></el-input>
          </el-form-item>
          <el-form-item label="体重">
              <el-input size="mini" style="width:150px;" v-model="renterInf.weight"></el-input>
          </el-form-item>
          <el-form-item label="血型">
              <el-input size="mini" style="width:150px;" v-model="renterInf.bloodType"></el-input>
          </el-form-item>
          <el-form-item label="地址">
              <el-input size="mini" style="width:150px;" v-model="renterInf.resitdenceAdd"></el-input>
          </el-form-item>
          <el-form-item label="宗教信仰">
              <el-input size="mini" style="width:150px;" v-model="renterInf.religious"></el-input>
          </el-form-item>
          <el-form-item label="兵役详情">
              <el-input size="mini" style="width:150px;" v-model="renterInf.militaryDetail"></el-input>
          </el-form-item>
          <el-form-item label="工作单位">
              <el-input size="mini" style="width:150px;" v-model="renterInf.employer"></el-input>
          </el-form-item>
          <el-form-item label="职业名称">
              <el-input size="mini" style="width:150px;" v-model="renterInf.occupation"></el-input>
          </el-form-item>
          <el-form-item label="单位地址">
              <el-input size="mini" style="width:150px;" v-model="renterInf.employerAdd"></el-input>
          </el-form-item>
          <el-form-item label="单位电话">
              <el-input size="mini" style="width:150px;" v-model="renterInf.employerPhone"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div id="renterBtns">
              <el-button size="mini" type="primary" :disabled="disabledSave" @click="onSubmit">保存</el-button>
              <el-button size="mini" type="primary" @click="deleRenter">删除</el-button>
              <el-button size="mini" type="primary" @click="cancel">取消</el-button>
          </div>
    </div>
  
</template>
<script>
export default {
  data(){
    return {
      renterInf: {
        tenantName:'',//名字
        sex:'',//性别
        nationality:'',//民族
        residence:'',//户籍
        personalid:'',//身份证号
        phoneNumber:'',//手机号
        relationShip:'',//与户主关系
        rental:'',//住宿方式
        leaseStart:'',//租住开始时间
        leaseEnd:'',//租住结束时间
        merriageStatus:'',//是否结婚
        partyMember:'',//党员与否
        volunteer:'',//志愿者
        employment:'',//就业状况
        educationDegree:'',//文化程度
        resident:'',//常驻
        oldman:'',//老人
        oldmanAge:'',//
        singleOld:'',//独居老人
        minLivings:'',//低保户
        disability:'',//残疾
        seriousHealth:'',//重疾
        specialCare:'',//优抚
        serviceMan:'',//现役
        retirement:'',//退役
        released:'',//刑释
        corrected:'',//矫正
        psychosis:'',//重精
        monitoring:'',//监控
        resitdenceAdd:'',//地址资料
        religious:'',//宗教信仰
        militaryDetail:'',//兵役情况
        employer:'',//工作单位
        occupation:'',//职业
        employerAdd:'',//单位地址
        employerPhone:'',//单位电话
        profession:'',//专业
        speciality:'',//特长
        height:'',//身高
        weight:'',//体重
        bloodType:'', // 血型
        editor: '', //录入者
        uDate: ''  // 更新时间
      },
      bindRoomerShow: false,
      lodger: this.$store.state.hisOneRenter[0],
      index: null,
      disabledSave: true
    }
  },
  mounted(){
      console.log(this.$store.state.hisOneRenter[0])
    if(this.$store.state.hisOneRenter[0].length != 0){
      this.bindRoomerShow = true;
    }
  },
  methods: {
    onSubmit(){
      let lodger = [];
      this.lodger.forEach(function(e , i){
          if(i == this.index){
             lodger.push(this.renterInf) 
          }else{
             lodger.push(e) 
          }
      });
      this.$router.commit('writeRanter',{lodger: lodger})
    },
    cancel(){
      this.$router.push({name: 'personInfo'});
    },
    deleRenter(){
        let lodger = [];
        this.lodger.forEach(function(e , i){
            lodger.push(e) 
        });
        lodger.splice(index,1)
        this.$router.commit('writeRanter',{lodger: lodger})
    },
    bindRoomer(index){
        this.index = index;
        this.disabled = false;
        let tenant = lodger[index]
        for(let key in tenant){
            this.renterInf[key] =  tenant[key]
        }
    }
  }
}
</script>
<style scoped>
.el-form-item{
   margin-bottom: 0 ! important;
   
 }
 #renterBtns{
   display: flex;
   justify-content: space-around;
 }
</style>
