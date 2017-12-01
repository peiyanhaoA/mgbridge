<template>
  <div>
    <div id="login_d" :style="{'background-image':bg}">
      <div class="card position-absolute" id="info">
          <h3><b>流动人口管理系统</b></h3>
          <div id="login_ipt" class="d-flex flex-column justify-content-around">
            <div style="text-align:center;">
              <input class="uname" type="text" placeholder="请输入用户名">
            </div>
            <div style="text-align:center;">
              <input class="password" type="password" placeholder="请输入密码">
            </div>
            <div style="text-align:center;">
              <input class="verification" type="text" placeholder="验证码">
              <span class="canva"></span>
            </div>
            <div style="text-align:center;">
              <button @click="login">登录</button>
            </div>
          </div>
      </div>
    </div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      bg: "url(" + require("../assets/nanjing.jpg") + ")"
    }
  },
  methods:{
    login(){
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>

#login_d{
	width: 100%;
	height: 100%;

  background-size: 100% 100%;
}
#info{
	width: 430px;
	height: 350px;
	margin: auto;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
  background-color: rgba(0, 0, 0, .1);
  border-radius: 20px;
}
h3{
  color: red;
  text-align: center;
  letter-spacing: 16px;
  margin-top: 25px;
  font-family: 'STCaiyun';
}
#login_ipt{
  height: 220px;
  margin-top: 30px;
}
input{
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgba(0, 0, 0, .1);
  outline:none;
}
.uname, .password{
  width: 240px;
  font-size: 15px;
  text-align: center;
  height: 30px;
  border-radius: 20px;
}
.verification{
  width: 100px;
  text-align: center;
  font-size: 15px;
  height: 30px;
}
.canva{
  display: inline-block;
  width: 100px;
  border: 1px solid rgba(0, 0, 0, .1);
  height: 30px;
  vertical-align: top;
}
button{
  width: 240px;
  background-color: #4169E1;
  border: none;
  outline: none;
  color: white;
  letter-spacing: 5px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
}
</style>

