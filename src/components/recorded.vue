<template>
  <div id="recorded" class="position-absolute" v-if="disp">
    <div class="card h-100" style="overflow:auto;">
        <div class="card-body text-dark">
            <button type="button" class="close float-right" aria-label="Close" @click="disp=false">
                <span aria-hidden="true">&times;</span>
            </button>
            <form >
                <h6 class="">房屋信息录入</h6>
                <div class="row my-3">                    
                    <div class="col-sm-4">
                        <label class="recordLabel" for="zone">楼栋</label>
                        <select class="recordForm" id="building">
                            <option selected value="" disabled>请选择</option>
                            <option value="15">15</option>
                            <option value="16" disabled>16</option>
                            <option value="17" disabled>17</option>
                            <option value="18" disabled>18</option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel" for="roomNumber">房号</label>
                        <input class="recordForm" id="roomNumber" type="text">                          
                    </div>
                </div>
                <h6 class="my-4">房主信息录入</h6>
                <p class="my-1 ">基本信息</p>
                <div class="row my-3">                    
                    <div class="col-sm-4">
                        <label class="recordLabel" for="ownerName">姓名</label>
                        <input class="recordForm" id="ownerName" type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">性别</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>                         
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">民族</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">身份证号</label>
                        <input class="recordForm"  type="text">                        
                    </div>  
                    <div class="col-sm-6">
                        <label class="recordLabel">联系电话</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">户籍标志</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="户籍">户籍</option>
                            <option value="非户籍">非户籍</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">婚姻状态</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="未婚">未婚</option>
                            <option value="已婚">已婚</option>
                            <option value="离异">离异</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">政治面貌</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="非党员">非党员</option>
                            <option value="党员">党员</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否志愿者</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">就业状态</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="未就业">未就业</option>
                            <option value="就业">就业</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">文化程度</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="文盲">文盲</option>
                            <option value="小学">小学</option>
                            <option value="中学">中学</option>
                            <option value="大学">大学</option>
                            <option value="硕士">硕士</option>
                            <option value="博士">博士</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否常驻</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="常驻">常驻</option>
                            <option value="流动">流动</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">60岁以上</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">困难户</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="非低保户">非低保户</option>
                            <option value="低保边缘户">低保边缘户</option>
                            <option value="低保户">低保户</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否残疾</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="正常">正常</option>
                            <option value="残疾">残疾</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否重疾</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="正常">正常</option>
                            <option value="重疾">重疾</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否优抚</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="非优抚">非优抚</option>
                            <option value="优抚">优抚</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否现役</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="非现役">非现役</option>
                            <option value="现役">现役</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否退役</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="非退役">非退役</option>
                            <option value="退役">退役</option>
                        </select>                         
                    </div>
                    <!--<div class="col-sm-6">
                        <label class="recordLabel">是否刑释</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="正常">正常</option>
                            <option value="刑释">刑释</option>
                            <option value="解教">解教</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否矫正</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="正常">正常</option>
                            <option value="矫正">矫正</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否矫正</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="正常">正常</option>
                            <option value="矫正">矫正</option>
                        </select>                         
                    </div>-->
                </div>
                <p class="my-1">附加信息</p>
                <div class="row">
                    <div class="col-sm-4">
                        <label class="recordLabel">专业</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">特长</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">身高</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">体重</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">血型</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">地址</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">宗教信仰</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">兵役详情</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">工作单位</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">职业名称</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">单位地址</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">单位电话</label>
                        <input class="recordForm"  type="text">                        
                    </div>                    
                </div>
                <div class="row my-2">
                    <div class="col-12">
                        <button type="button" class="btn btn-outline-success">增加租客</button>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-12 text-center">
                        <button type="button" class="btn btn-outline-secondary">取消</button>
                        <button type="button" class="btn btn-outline-danger mx-4">确定</button>
                    </div>
                </div>
            </form> 
            
              
        </div>
    </div>
    <div class="card position-absolute" style="margin:auto;top:0;right:0;bottom:0;left:0;width:600px;height:600px;overflow:auto" v-if="tenantDisp">
        <div class="card-body">
            <form>
                <h6 class="my-4">房客信息录入</h6>
                <p class="my-1 ">基本信息</p>
                <div class="row my-3">                    
                    <div class="col-sm-4">
                        <label class="recordLabel" for="ownerName">姓名</label>
                        <input class="recordForm" id="ownerName" type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">性别</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>                         
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">民族</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">身份证号</label>
                        <input class="recordForm"  type="text">                        
                    </div>  
                    <div class="col-sm-6">
                        <label class="recordLabel">联系电话</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">户籍标志</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="户籍">户籍</option>
                            <option value="非户籍">非户籍</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">婚姻状态</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="未婚">未婚</option>
                            <option value="已婚">已婚</option>
                            <option value="离异">离异</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">政治面貌</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="非党员">非党员</option>
                            <option value="党员">党员</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否志愿者</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">就业状态</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="未就业">未就业</option>
                            <option value="就业">就业</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">文化程度</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="文盲">文盲</option>
                            <option value="小学">小学</option>
                            <option value="中学">中学</option>
                            <option value="大学">大学</option>
                            <option value="硕士">硕士</option>
                            <option value="博士">博士</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否常驻</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="常驻">常驻</option>
                            <option value="流动">流动</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">60岁以上</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="1">是</option>
                            <option value="0">否</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">困难户</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="非低保户">非低保户</option>
                            <option value="低保边缘户">低保边缘户</option>
                            <option value="低保户">低保户</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否残疾</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="正常">正常</option>
                            <option value="残疾">残疾</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否重疾</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="正常">正常</option>
                            <option value="重疾">重疾</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否优抚</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="非优抚">非优抚</option>
                            <option value="优抚">优抚</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否现役</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="非现役">非现役</option>
                            <option value="现役">现役</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否退役</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="非退役">非退役</option>
                            <option value="退役">退役</option>
                        </select>                         
                    </div>
                    <!--<div class="col-sm-6">
                        <label class="recordLabel">是否刑释</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="正常">正常</option>
                            <option value="刑释">刑释</option>
                            <option value="解教">解教</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否矫正</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="正常">正常</option>
                            <option value="矫正">矫正</option>
                        </select>                         
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">是否矫正</label>
                        <select class="recordForm">
                            <option selected value="" disabled>请选择</option>
                            <option value="正常">正常</option>
                            <option value="矫正">矫正</option>
                        </select>                         
                    </div>-->
                </div>
                <p class="my-1">附加信息</p>
                <div class="row">
                    <div class="col-sm-4">
                        <label class="recordLabel">专业</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">特长</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">身高</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">体重</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">血型</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-4">
                        <label class="recordLabel">地址</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">宗教信仰</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">兵役详情</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">工作单位</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">职业名称</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">单位地址</label>
                        <input class="recordForm"  type="text">                        
                    </div>
                    <div class="col-sm-6">
                        <label class="recordLabel">单位电话</label>
                        <input class="recordForm"  type="text">                        
                    </div>                    
                </div>
                <div class="row my-4">
                    <div class="col-12 text-center">
                        <button type="button" class="btn btn-outline-secondary">取消</button>
                        <button type="button" class="btn btn-outline-danger mx-4">确定</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'recorded',
  data(){
    return{
        disp:true,
        tenantDisp:true
    }
  },
  methods:{

  },
  components:{
    
  }
  
}
</script>
<style scoped>
#recorded{
    top: 0;
    right: 10px;
    width: 600px;
    height: 100%;
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

