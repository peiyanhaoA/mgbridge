<template>
  <div id="sidebar" class="h-100 d-inline-block position-absolute">
     <ul class="nav nav-pills bg-dark h-100" id="pills-tab" role="tablist" >
        <li style="height:80px"></li>
        <li class="nav-item">
            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                <span>信息</span><span>录入</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                <span>事件处理</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">用户管理</a>
        </li>
        <li class="fold position-absolute fixed-bottom text-white border-top border-secondary">折叠</li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'sidebar',
  data(){
      return{}
  },
  components:{
  }
}
</script>

<style>
#sidebar{
    top:0;
    left:0;
}
ul{
    width:200px;
}
ul.nav{
    display:block;
}
ul li{
    width:100%;
}
.nav-pills .nav-link{
    border-radius:0!important;
}
.fold{
    text-align:center;    
}
.tab-content{
    right:20px;
    bottom:20px;
}

</style>
