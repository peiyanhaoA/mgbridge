import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        rows: [],
        cols: [],
        roomInfo: [],
        ownerInfo: [],
        renterInfo: [],
        budingDetials: false,
        bgColor: '',
        personInfo: false,
        roomNum: ''
    },
    mutations:{
        getInfo(state, pay){
            $.ajax({
                method: 'post',
                url: '/api/obtain',
                data: {
                    building: pay.text
                },
                success(res){
                    state.rows = res.rows;
                    state.roomInfo = res.roomInfo;
                    state.ownerInfo = res.ownerInfo;
                    state.renterInfo = res.renterInfo;
                    res.cols.forEach(function(e){
                        if(e.split('')[0] == 0){
                            state.cols.push(e.split('')[1]);
                        }else{
                            state.cols.push(e);
                        }
                    });
                   
                    state.renterInfo.forEach(function(e){
                        // console.log(e.length)
                        if(e.length == 2){
                            state.bgColor = 'yellow';
                        }
                    });
                    state.budingDetials = true;
                }
            });
        },
        changebudingDetials(state, palody){
            state.roomNum = palody.roomNum;
            if(state.budingDetials){
                state.budingDetials = false;
                state.personInfo = true;
            }else{
                state.budingDetials = true;
                state.personInfo = false;
            }
        },
        closebudingDetials(state){
            state.budingDetials = false;
        }
    },
    actions:{
        
    }
});
