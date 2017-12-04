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
                        <label class="custom-file">
                            <input type="file" id="file" style="width:100%;opacity:0;" ref="file" @change="getFile($event)" required>
                            <span class="custom-file-control">选择文件</span>
                            
                        </label>  
                        <img :src="src">                 
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-12">
                        <button type="button" class="btn btn-outline-success" @click="tenantDisp=true">增加租客</button>
                    </div>
                    <div class="col-12">
                        <button type="button" class="close" aria-label="Close" v-for="renter in renterArr">
                            <span>{{renter.tenantName}}</span>
                            <span aria-hidden="true" @click="delRenter">&times;</span>
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
    <!--租客信息-->
    <div class="card position-absolute h-100" style="margin:auto;top:0;right:0;bottom:0;left:0;width:600px;overflow:auto" v-if="tenantDisp">
        <div class="card-body">
            <form>
                <h6 class="my-4">房客信息录入</h6>
                <p class="my-1 ">基本信息</p>
                <div class="row my-3">                    
                    <div class="col-sm-4">
                        <label class="recordLabel" for="ownerName">姓名</label>
                        <input class="recordForm" id="ownerName" type="text" v-model="renterInfo.tenantName">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">性别</label>
                        <select class="recordForm" v-model="renterInfo.sex">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">男</option>
                            <option value="1">女</option>
                        </select>                         
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">民族</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.nationality">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">身份证号</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.personalid">                        
                    </div>  
                    <div class="col-sm-6">
                        <label class="recordLabel">联系电话</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.phoneNumber">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">与户主关系</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.relationShip">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">住宿方式</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.rental">                        
                    </div>
                    <div class="col-sm-7">
                        <label class="recordLabel">租赁开始日期</label>
                        <input class="recordForm"  type="date" v-model="renterInfo.leaseStart">                        
                    </div>
                    <div class="col-sm-7">
                        <label class="recordLabel">租赁截止日期</label>
                        <input class="recordForm"  type="date" v-model="renterInfo.leaseEnd">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">户籍标志</label>
                        <select class="recordForm" v-model="renterInfo.residence">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非户籍</option>
                            <option value="1">户籍</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">婚姻状态</label>
                        <select class="recordForm" v-model="renterInfo.merriageStatus">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">未婚</option>
                            <option value="1">已婚</option>
                            <option value="2">离异</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">政治面貌</label>
                        <select class="recordForm" v-model="renterInfo.partyMember">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非党员</option>
                            <option value="1">党员</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否志愿者</label>
                        <select class="recordForm" v-model="renterInfo.volunteer">
                            <option selected value="" disabled>请选择</option>
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">就业状态</label>
                        <select class="recordForm" v-model="renterInfo.employment">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">未就业</option>
                            <option value="1">就业</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">文化程度</label>
                        <select class="recordForm" v-model="renterInfo.educationDegree">
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
                        <select class="recordForm" v-model="renterInfo.resident">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">常驻</option>
                            <option value="1">流动</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">60岁以上</label>
                        <select class="recordForm" v-model="renterInfo.oldman">
                            <option selected value="" disabled>请选择</option>
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>                         
                    </div>
                    <div class="col-sm-7">
                        <label class="recordLabel">是否独居老人</label>
                        <select class="recordForm" v-model="renterInfo.singleOld">
                            <option selected value="" disabled>请选择</option>
                            <option value="1">非独居老人</option>
                            <option value="0">独居老人</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">困难户</label>
                        <select class="recordForm" v-model="renterInfo.minLivings">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非低保户</option>
                            <option value="1">低保边缘户</option>
                            <option value="2">低保户</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否残疾</label>
                        <select class="recordForm" v-model="renterInfo.disability">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">残疾</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否重疾</label>
                        <select class="recordForm" v-model="renterInfo.seriousHealth">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">重疾</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否优抚</label>
                        <select class="recordForm" v-model="renterInfo.specialCare">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非优抚</option>
                            <option value="1">优抚</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否现役</label>
                        <select class="recordForm" v-model="renterInfo.serviceMan">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非现役</option>
                            <option value="1">现役</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否退役</label>
                        <select class="recordForm" v-model="renterInfo.retirement">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">非退役</option>
                            <option value="1">退役</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否刑释</label>
                        <select class="recordForm" v-model="renterInfo.released">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">刑释</option>
                            <option value="2">解教</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否矫正</label>
                        <select class="recordForm" v-model="renterInfo.corrected">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">矫正</option>
                        </select>                         
                    </div>
                    <div class="col-sm-8">
                        <label class="recordLabel">是否重度精神病</label>
                        <select class="recordForm" v-model="renterInfo.psychosis">
                            <option selected value="" disabled>请选择</option>
                            <option value="0">正常</option>
                            <option value="1">重度精神病</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否监控</label>
                        <select class="recordForm" v-model="renterInfo.monitoring">
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
                        <input class="recordForm"  type="text" v-model="renterInfo.profession">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">特长</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.speciality">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">身高</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.height">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">体重</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.weight">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">血型</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.bloodType">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">地址</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.resitdenceAdd">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">宗教信仰</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.religious">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">兵役详情</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.militaryDetail">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">工作单位</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.employer">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">职业名称</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.occupation">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">单位地址</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.employerAdd">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">单位电话</label>
                        <input class="recordForm"  type="text" v-model="renterInfo.employerPhone">                        
                    </div>                    
                </div>
                <div class="row my-4">
                    <div class="col-12 text-center">
                        <button type="button" class="btn btn-outline-secondary" @click="cancelRenter">取消</button>
                        <button type="button" class="btn btn-outline-danger mx-4" @click="saveRenter">确定</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import async from 'async';
export default {
  name:'recorded',
  data(){
    return{
        tenantDisp:false,//租客信息录入界面
        roomInfo:{
            building:'',
            roomNumber:''
        },
        ownerInfo:{
            present:'',
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
            photos:[],
            documents:[]

        },
        renterInfo:{
            present:'',
            tenantName:'',
            sex:'',
            nationality:'',
            residence:'',
            personalid:'',
            phoneNumber:'',
            relationShip:'',
            rental:'',
            leaseStart:'',
            leaseEnd:'',
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
            photos:[],
            documents:[]

        },
        renterArr:[],
        src:"",
        infos:{}
    }
  },
  methods:{
      initRenter(){
          this.renterInfo={
            present:'',
            tenantName:'',
            sex:'',
            nationality:'',
            residence:'',
            personalid:'',
            phoneNumber:'',
            relationShip:'',
            rental:'',
            leaseStart:'',
            leaseEnd:'',
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
            photos:[],
            documents:[]

          }
      },
      getFile(el){
          console.log(this.$refs.file.files[0]);
          this.src=this.$refs.file.files[0].type+'/'+this.$refs.file.files[0].name;
          console.log(el.target.result);

      },
      tab(){
          this.$events.emit('tab','');
      },
      saveAll(){
        let vm=this;
        if(vm.roomInfo.building == "" || vm.roomInfo.building == null || 
        vm.roomInfo.roomNumber == "" || vm.roomInfo.roomNumber == null){
            alert("房屋信息不完整！");
            return;
        }
        if(vm.renterInfo.ownerName == "" || vm.renterInfo.ownerName == null ||
        vm.renterInfo.personalid == "" || vm.renterInfo.personalid == null){
            alert("房主信息不完整！");
            return;
        } 
        async.waterfall([
            function(cb){
                axios.post('/api/getAll',vm.roomInfo)
                .then(function(data){           
                    data.data.owner=JSON.parse(data.data.owner);
                    data.data.renter=JSON.parse(data.data.renter);

                    data.data.owner.push(vm.ownerInfo);
                    data.data.renter.concat(vm.renterArr);
                    cb(null,data.data); 
                })
                .catch(function(err){
                    cb(err);
                });     
            },
            function(infos,cb){
                axios.post('/api/saveAll',infos)
                .then(function(){cb(null)})
                .catch(function(err){console.log(err);})
            }
        ])       
             

      },
      cancelRenter(){
          this.tenantDisp=false;
          this.initRenter();
      },
      saveRenter(){
        let vm=this;
        
        if(vm.renterInfo.tenantName == "" || vm.renterInfo.tenantName == null || 
        vm.renterInfo.personalid == "" || vm.renterInfo.personalid == null){
            alert('房客基本信息不完整！');
            return;
        }else{
            vm.renterArr.push(vm.renterInfo);
        }
        vm.tenantDisp=false;
        vm.initRenter();
      },
      delRenter(){//删除租客

      }

  },
  mounted(){
    //   axios.post('/api/room')
    //   .then(function(res){
    //       console.log(res);
    //   })
    //   .catch(function(err){
    //       console.log(err);
    //   })
  },
  beforeDestroy(){
       
  },
  components:{
    
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

