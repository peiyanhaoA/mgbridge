<template>
  <div id="recorded" class="position-absolute h-100">
    <button type="button" class="close position-absolute my-2 text-dark" style="right:10px;font-size:30px;" aria-label="Close" @click="tab">
        <span aria-hidden="true">&times;</span>
    </button>
    <div class="card h-100" style="overflow:auto;width:600px;margin:0 auto;">
        <div class="card-body text-dark">        
            
            <form >
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
                            
                            <option value="0" selected>男</option>
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
                        <label class="recordLabel">房屋状态</label>
                        <select class="recordForm" v-model="ownerInfo.roomStatus">
                            
                            <option value="1">自住</option>
                            <option value="2">出租</option>
                            <option value="3">未拿房</option>
                            <option value="4">装修中</option>
                            <option value="5">房主失联中</option>
                            <option value="6" disabled>门面房</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">户籍标志</label>
                        <select class="recordForm" v-model="ownerInfo.residence">
                            
                            <option value="0" selected>非户籍</option>
                            <option value="1">户籍</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">婚姻状态</label>
                        <select class="recordForm" v-model="ownerInfo.merriageStatus">
                            
                            <option value="0" selected>未婚</option>
                            <option value="1">已婚</option>
                            <option value="2">离异</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">政治面貌</label>
                        <select class="recordForm" v-model="ownerInfo.partyMember">
                            
                            <option value="0" selected>非党员</option>
                            <option value="1">党员</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否志愿者</label>
                        <select class="recordForm" v-model="ownerInfo.volunteer">
                            
                            <option value="1">是</option>
                            <option value="0" selected>否</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">就业状态</label>
                        <select class="recordForm" v-model="ownerInfo.employment">
                            
                            <option value="0" selected>未就业</option>
                            <option value="1">就业</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">文化程度</label>
                        <select class="recordForm" v-model="ownerInfo.educationDegree">
                            
                            <option value="0" selected>文盲</option>
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
                            
                            <option value="0" selected>常驻</option>
                            <option value="1">流动</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">60岁以上</label>
                        <select class="recordForm" v-model="ownerInfo.oldman">
                            
                            <option value="1">是</option>
                            <option value="0" selected>否</option>
                        </select>                         
                    </div>
                    <div class="col-sm-7">
                        <label class="recordLabel">是否独居老人</label>
                        <select class="recordForm" v-model="ownerInfo.singleOld">
                            
                            <option value="1">非独居老人</option>
                            <option value="0" selected>独居老人</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">困难户</label>
                        <select class="recordForm" v-model="ownerInfo.minLivings">
                            
                            <option value="0" selected>非低保户</option>
                            <option value="1">低保边缘户</option>
                            <option value="2">低保户</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否残疾</label>
                        <select class="recordForm" v-model="ownerInfo.disability">
                            
                            <option value="0" selected>正常</option>
                            <option value="1">残疾</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否重疾</label>
                        <select class="recordForm" v-model="ownerInfo.seriousHealth">
                            
                            <option value="0" selected>正常</option>
                            <option value="1">重疾</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否优抚</label>
                        <select class="recordForm" v-model="ownerInfo.specialCare">
                            
                            <option value="0" selected>非优抚</option>
                            <option value="1">优抚</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否现役</label>
                        <select class="recordForm" v-model="ownerInfo.serviceMan">
                            
                            <option value="0" selected>非现役</option>
                            <option value="1">现役</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否退役</label>
                        <select class="recordForm" v-model="ownerInfo.retirement">                            
                            <option value="0" selected>非退役</option>
                            <option value="1">退役</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否刑释</label>
                        <select class="recordForm" v-model="ownerInfo.released">
                            
                            <option value="0" selected>正常</option>
                            <option value="1">刑释</option>
                            <option value="2">解教</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否矫正</label>
                        <select class="recordForm" v-model="ownerInfo.corrected">
                            
                            <option value="0" selected>正常</option>
                            <option value="1">矫正</option>
                        </select>                         
                    </div>
                    <div class="col-sm-8">
                        <label class="recordLabel">是否重度精神病</label>
                        <select class="recordForm" v-model="ownerInfo.psychosis">
                            
                            <option value="0" selected>正常</option>
                            <option value="1">重度精神病</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否监控</label>
                        <select class="recordForm" v-model="ownerInfo.monitoring">
                            
                            <option value="0" selected>正常</option>
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
                    <div class="col-6 ">
                        <button type="button" class="btn btn-outline-secondary" @click="tab">取消</button>
                        <button type="button" class="btn btn-outline-danger mx-4" @click="saveAll">确定</button>
                    </div>
                </div>
            </form> 
            <hr>
            <!--<button type="button" class="btn btn-outline-success" @click="batchDisp=true">批量导入</button>
            <form class="my-4" v-if="batchDisp">
                <div class="row">
                    <div class="col-sm-4">
                        <label class="custom-file" style="z-index:0">
                            <input type="file" id="excel" name="excel" style="width:100%;opacity:0;" ref="file" @change="getExcels($event)" required />
                            <span class="custom-file-control">批量导入房主信息</span>                            
                        </label>  
                    </div>
                    <div class="col-sm-4">
                        <label class="custom-file" style="z-index:0">
                            <input type="file" id="excel" name="excel" style="width:100%;opacity:0;" ref="file" @change="import_excel($event)" required />
                            <span class="custom-file-control">批量导入房客信息</span>                            
                        </label>  
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <span>{{excel1}}</span>
                    </div>
                    <div class="col-sm-4">                        
                        <span>{{excel2}}</span>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-6">
                        <button type="button" class="btn btn-outline-secondary" @click="tab">取消</button>
                        <button type="button" class="btn btn-outline-danger mx-4" @click="importSave">导入</button>
                    </div>
                </div>
            </form>-->
        </div>
    </div>
    
    <recorded-renter></recorded-renter>
  </div>
</template>
<script>
import axios from 'axios';
import async from 'async';
import recordedRenter from './recorded-renter';
import XLSX from 'xlsx';
/**var wb; //读取完成的数据
var rABS = false; //是否将文件读取为二进制字符串
var fileDt = null;
function importfile(obj) { //导入
    if (!obj.files || !obj.files[0]) {
        return;
    }
    var f = obj.files[0];
    var reader = new FileReader();
    
    if (rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
    return reader.onload = function(e) {
        var data = e.target.result;        
        if (rABS) {
            wb = XLSX.read(btoa(fixdata(data)), { //手动转化
                type: 'base64'
            });
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }
        var result={};
        wb.SheetNames.forEach(function(sheetName){
            var row=XLSX.utils.sheet_to_json(wb.Sheets[sheetName],{header:1});
            if(row.length) result[sheetName]=row;
        })
        fileDt=JSON.parse(JSON.stringify(result, 2, 2))
        console.log(fileDt);
        // fileDt = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        // console.log(fileDt);
    };
}

function fixdata(data) { //文件流转BinaryString
    var o = "",
        l = 0,
        w = 10240;
    for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
}*/
export default {
  name:'recorded',
  data(){
    return{
        batchDisp:false,
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
            documents:'',
            bgColor:'yellow'
        },
        renterArr:[],
        src:"",
        infos:{},
        fileName:'',
        excel1:'',
        excel2:'',
        ownerExcel:[]
    }
  },
  methods:{
    getFile(el){//保存文件到服务器
        var vm=this;
        var file=el.target;
        var formData=new FormData();
        formData.append('file',file.files[0]);
        var src=file.files[0].name,
            formart=src.split(".")[1];
        if(formart=="docx"||formart=="txt"||formart=="ppt"||formart=="xlsx"|| formart=="zip"||
            formart=="rar"||formart=="doc" || formart=="pdf"){
            vm.fileName=src;
            axios.post('/api/profile',formData)
            .then(function(data){
                console.log(data);
                vm.ownerInfo.documents=data.data;
            })
            .catch(function(err){console.log(err)})
            
        }else{
            alert('文件不符合格式！');
        }        
    },
    /**getExcels(el){//导入表格，批量导入房主和房客
        var vm=this;
        var obj=el.target;
        importfile(obj);
        setTimeout(function(){
            console.log(fileDt);
            for(var i=1;i<fileDt.Sheet1.length;i++){
                let row=fileDt.Sheet1[i];
                vm.ownerExcel.push({
                    present:1,
                    vilage:row[0],
                    building:row[1],
                    unit:row[3],
                    roomNumber:row[4],
                    personNumber:row[7],
                    relationShip:row[8],
                    ownerName:row[9],
                    sex:row[13],
                    nationality:row[16],
                    residence:row[22],
                    personalid:row[11],
                    roomStatus:row[10],
                    phoneNumber:row[18],
                    merriageStatus:row[17],
                    partyMember:row[36],
                    volunteer:'',
                    employment:row[28],
                    educationDegree:row[20],
                    resident:row[22],
                    oldman:row[40],
                    singleOld:row[42],
                    minLivings:row[32],
                    disability:row[34],
                    seriousHealth:row[35],
                    specialCare:row[37],
                    serviceMan:row[38],
                    retirement:row[39],
                    released:row[44],
                    corrected:row[45],
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
                })
            }
            console.log(vm.ownerExcel)            
        },100)        
    },
    importSave(){
        console.log('--------------');
        let vm = this;
        axios.post('/api/batch',vm.ownerExcel)
        .then(function(){console.log('sss')})
        .catch(function(err){console.log(err)})
    },*/
    tab(){
        this.$router.push('/home')
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

        if(vm.ownerInfo.released == 1 || vm.ownerInfo.corrected == 1 ||
         vm.ownerInfo.psychosis == 1 || vm.ownerInfo.monitoring == 1){
           vm.ownerInfo.bgColor='red';
            console.log('=============');
           
        }else{
            console.log('--------');
            if(vm.ownerInfo.roomStatus == 1){
                vm.ownerInfo.bgColor='lightgreen';
            }else if(vm.ownerInfo.roomStatus == 2){
                vm.ownerInfo.bgColor='lightblue';
            }else if(vm.ownerInfo.roomStatus == 3){
                vm.ownerInfo.bgColor='yellow';
            }else if(vm.ownerInfo.roomStatus == 4){
                vm.ownerInfo.bgColor='yellow';
            }else if(vm.ownerInfo.roomStatus == 5){
                vm.ownerInfo.bgColor='yellow';
            }else{
                vm.ownerInfo.bgColor='yellow';
            }
        }
        
        axios.post('/api/getAll',{
            roomInfo:vm.roomInfo,
            ownerInfo:vm.ownerInfo,
            renterArr:vm.renterArr
        })
        .then(function(data){    
            console.log('00000000000000');       
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

