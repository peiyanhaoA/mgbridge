<template>
  <div id="recorded" class="position-absolute h-100">
    <button type="button" class="close position-absolute my-2 text-dark" style="right:10px;font-size:30px;" aria-label="Close" @click="tab">
        <span aria-hidden="true">&times;</span>
    </button>
    <div class="card h-100" style="overflow:auto;width:600px;margin:0 auto;">
        <div class="card-body text-dark">        
            
            <form class="my-2">
                <h6>房屋信息录入</h6>
                <div class="row my-3">                    
                    <div class="col-sm-4">
                        <label class="recordLabel">楼栋</label>
                        <input class="recordForm"  type="text"  v-model="roomInfo.building">
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel" for="roomNumber">房号</label>
                        <input class="recordForm" id="roomNumber" type="text" v-model="roomInfo.roomNumber">                          
                    </div>
                </div>
                <h6 class="my-4">房主信息录入</h6>
                <p class="my-1 ">基本信息</p>
                <div class="row my-3">                    
                    <div class="col-sm-4">
                        <label class="recordLabel" for="ownerName">姓名</label>
                        <input class="recordForm" id="ownerName" type="text" v-model="ownerInfo.ownerName">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">性别</label>
                        <select class="recordForm" v-model="ownerInfo.sex">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">男</option>
                            <option value="1">女</option>
                        </select>                         
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">民族</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.nationality">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">身份证号</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.personalid">                        
                    </div>  
                    <div class="col-sm-6">
                        <label class="recordLabel">联系电话</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.phoneNumber">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">户籍标志</label>
                        <select class="recordForm" v-model="ownerInfo.residence">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非户籍</option>
                            <option value="1">户籍</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">婚姻状态</label>
                        <select class="recordForm" v-model="ownerInfo.merriageStatus">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">未婚</option>
                            <option value="1">已婚</option>
                            <option value="2">离异</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">政治面貌</label>
                        <select class="recordForm" v-model="ownerInfo.partyMember">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非党员</option>
                            <option value="1">党员</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否志愿者</label>
                        <select class="recordForm" v-model="ownerInfo.volunteer">
                            <option selected value="" disabled>请选择</option>
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">就业状态</label>
                        <select class="recordForm" v-model="ownerInfo.employment">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">未就业</option>
                            <option value="1">就业</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">文化程度</label>
                        <select class="recordForm" v-model="ownerInfo.educationDegree">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">文盲</option>
                            <option value="1">小学</option>
                            <option value="2">中学</option>
                            <option value="3">大学</option>
                            <option value="4">硕士</option>
                            <option value="5">博士</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否常驻</label>
                        <select class="recordForm" v-model="ownerInfo.resident">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">常驻</option>
                            <option value="1">流动</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">60岁以上</label>
                        <select class="recordForm" v-model="ownerInfo.oldman">
                            <option selected value="" disabled>请选择</option>
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>                         
                    </div>
                    <div class="col-sm-7">
                        <label class="recordLabel">是否独居老人</label>
                        <select class="recordForm" v-model="ownerInfo.singleOld">
                            <option selected value="" disabled>请选择</option>
                            <option value="1">非独居老人</option>
                            <option value="0">独居老人</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">困难户</label>
                        <select class="recordForm" v-model="ownerInfo.minLivings">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非低保户</option>
                            <option value="1">低保边缘户</option>
                            <option value="2">低保户</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否残疾</label>
                        <select class="recordForm" v-model="ownerInfo.disability">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">残疾</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否重疾</label>
                        <select class="recordForm" v-model="ownerInfo.seriousHealth">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">重疾</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否优抚</label>
                        <select class="recordForm" v-model="ownerInfo.specialCare">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非优抚</option>
                            <option value="1">优抚</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否现役</label>
                        <select class="recordForm" v-model="ownerInfo.serviceMan">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非现役</option>
                            <option value="1">现役</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否退役</label>
                        <select class="recordForm" v-model="ownerInfo.retirement">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非退役</option>
                            <option value="1">退役</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否刑释</label>
                        <select class="recordForm" v-model="ownerInfo.released">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">刑释</option>
                            <option value="2">解教</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否矫正</label>
                        <select class="recordForm" v-model="ownerInfo.corrected">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">矫正</option>
                        </select>                         
                    </div>
                    <div class="col-sm-8">
                        <label class="recordLabel">是否重度精神病</label>
                        <select class="recordForm" v-model="ownerInfo.psychosis">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">重度精神病</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否监控</label>
                        <select class="recordForm" v-model="ownerInfo.monitoring">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">监控人群</option>
                        </select>                         
                    </div>
                </div>
                <p class="my-1">附加信息</p>
                <div class="row">
                    <div class="col-sm-4">
                        <label class="recordLabel">专业</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.profession">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">特长</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.speciality">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">身高</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.height">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">体重</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.weight">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">血型</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.bloodType">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">地址</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.resitdenceAdd">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">宗教信仰</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.religious">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">兵役详情</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.militaryDetail">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">工作单位</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.employer">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">职业名称</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.occupation">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">单位地址</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.employerAdd">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">单位电话</label>
                        <input class="recordForm"  type="text" v-model="ownerInfo.employerPhone">                        
                    </div>
                    <div class="col-sm-3">
                        <label class="custom-file" style="z-index:0">
                            <input type="file" id="file" name="file" style="width:100%;opacity:0;" ref="file" @change="getFile($event)" required />
                            <span class="custom-file-control">选择文件</span>                            
                        </label>  
                    </div>
                    <div class="col-sm-12">
                        <span>{{fileName}}</span>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-12">
                        <button type="button" class="btn btn-outline-success" @click="addRenter">增加租客</button>
                    </div>
                    <div class="col-12">
                        <button type="button" class="btn btn-light"  aria-label="Close"  v-for="(renter,index) in renterArr">
                            <span>{{renter.tenantName}}</span>
                            <span aria-hidden="true" class="mx-2" @click="delRenter(index)">&times;</span>
                        </button>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-12 text-center">
                        <button type="button" class="btn btn-outline-secondary" @click="tab">取消</button>
                        <button type="button" class="btn btn-outline-danger mx-4" @click="saveAll">确定</button>
                    </div>
                </div>
            </form> 
        </div>
    </div>
    <recorded-renter></recorded-renter>
  </div>
</template>
<script>
import axios from 'axios';
import async from 'async';
import recordedRenter from './recorded-renter'
export default {
  name:'recorded',
  data(){
    return{
        roomInfo:{
            building:'',
            roomNumber:''
        },
        ownerInfo:{
            present:1,
            roomNumber:'',
            ownerName:'',
            sex:'',
            nationality:'',
            residence:'',
            personalid:'',
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
        renterArr:[],
        src:"",
        infos:{},
        fileName:'',
    }
  },
  methods:{
    getFile(el){
        var vm=this;
        var file=el.target;
        var formData=new FormData();
        formData.append('file',file.files[0]);
        var src=file.files[0].name,
            formart=src.split(".")[1];
        if(formart=="docx"||formart=="txt"||formart=="ppt"||formart=="xlsx"||formart=="zip"||
            formart=="rar"||formart=="doc" || formart=="pdf"){
            vm.fileName=src;
            axios.post('/api/profile',formData)
            .then(function(data){
                vm.ownerInfo.documents=data;
            })
            .catch(function(err){console.log(err)})
            
        }else{
            alert('文件不符合格式！');
        }
        
    },
    import_excel(){

    },
    tab(){
        this.$events.emit('tab','');
    },
    saveAll(){
        let vm=this;
        vm.ownerInfo.roomNumber=vm.roomInfo.roomNumber;
        if(vm.roomInfo.building == "" || vm.roomInfo.building == null || 
        vm.roomInfo.roomNumber == "" || vm.roomInfo.roomNumber == null){
            alert("房屋信息不完整！");
            return;
        }
        if(vm.ownerInfo.ownerName == "" || vm.ownerInfo.ownerName == null ||
        vm.ownerInfo.personalid == "" || vm.ownerInfo.personalid == null){
            alert("房主信息不完整！");
            return;
        }
        axios.post('/api/getAll',{
            roomInfo:vm.roomInfo,
            ownerInfo:vm.ownerInfo,
            renterArr:vm.renterArr
        })
        .then(function(data){           
            alert('添加成功');
            vm.tab();
        })
        .catch(function(err){
            console.log(err);
        });     
    },
    addRenter(){
        this.$events.emit('tenantDisp',true);
    },      
    delRenter(index){//删除租客
        this.renterArr.splice(index,1);
    }     
  },
  mounted(){
      let vm=this;
      vm.$events.on('renterInfo',function(val){
          val.roomNumber=vm.roomInfo.roomNumber;
          vm.renterArr.push(val);
      })
  },
  beforeDestroy(){
       
  },
  components:{
    recordedRenter
  }
  
}
</script>
<style scoped>
#recorded{

    top: 0;    
    left:200px;
    width:calc(100% - 200px);
    background-color:rgba(0,0,0,.3);
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

