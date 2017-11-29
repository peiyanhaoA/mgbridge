<template>
  <div id="sidebar" class="h-100 d-inline-block ">
     <ul class="nav nav-pills bg-dark position-absolute h-100" id="pills-tab" role="tablist" >
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
    <div class="tab-content position-absolute" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <recorded></recorded>
        </div>
        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">home2</div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">home3</div>
    </div>
  </div>

</template>

<script>
import recorded from './recorded';
export default {
  name: 'sidebar',
  data(){
      return{}
  },
  components:{
      recorded
  }
}
</script>

<style>
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
