import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        roomInfo: [],
        buildings: [],
        ownerInfo: [],
        bgcolor: [],
        renterInfo: [],
        width: '',
        roomNum: '',
        oneOwner: {},
        oneRenter: {},
        hisOneOwner: [],
        hisOneRenter: [],
        clickBuildNum: '',
        URL: './static/shanshuiyuan/',
        creatUrl: ''
    },
    mutations:{
        getRoomInfo(state, pay){
            state.roomInfo = pay.info
        },
        showRooms(state, paylode){
            state.clickBuildNum = paylode.building;
            $.ajax({
                method: 'post',
                url: '/api/getOwner',
                dataType: 'json',
                data:{
                    build: paylode.building
                },
                success(data){
                    
                    switch(data.rows.length){
                        case 8:
                        state.width = '850px';
                        break;
                        case 10:
                        state.width = '1055px';
                        break;
                    }
                    state.renterInfo = data.renter;
                    state.ownerInfo = data.owner;
                    state.ownerInfo.forEach(function(e){
                        if(e.released == 1 || e.corrected == 1 || e.psychosis == 1 || e.monitoring == 1){
                            state.bgcolor.push('red')
                        }else{
                            switch(e[0].roomStatus){
                                case 1: 
                                    state.bgcolor.push('lightgreen')
                                    break;
                                case 2: 
                                    state.bgcolor.push('lightblue')
                                    break;
                                case 3: 
                                    state.bgcolor.push('yellow')
                                    break;
                                case 4: 
                                state.bgcolor.push('yellow')
                                    break;
                                case 5: 
                                state.bgcolor.push('yellow')
                                    state.ownerInfo.icon = '○'
                                    break;
                                default :
                                state.bgcolor.push('yellow')
                                    break;
                            }
                        }
                    })
                }
            })
        },
        searchInfo(state, payload){
            state.roomNum = payload.roomNum;
            state.ownerInfo.forEach(function(e){
                if(e[0].roomNumber == payload.roomNum){
                    state.oneOwner = e[0];
                    state.hisOneOwner = e;
                }
            });
            state.renterInfo.forEach(function(e){
                if(e.length != 0){
                    if(e[0].roomNumber == payload.roomNum){
                        state.hisOneRenter = e;
                    }
                }
            });
        },
        creatUrl(state){
            let arrNew = state.roomNum.split('');
            let floor = '';
            let room = '';
            
            if(arrNew.length == 3){
              floor = '0' + arrNew[0];
              room = arrNew[1] + arrNew[2]
            }
            if(arrNew.length == 4){
              floor = arrNew[0] + arrNew[1];
              room = arrNew[2] + arrNew[3]
            }
            state.creatUrl = state.URL + state.clickBuildNum + '/' + floor + '/' + room + '/'; 
        },
        writeOwner(state, pay){
            let writeUrl = state.creatUrl + 'owner.json';
            state.hisOneOwner.unshift(pay.newOwner)
            $.ajax({
                method: 'post',
                url: '/api/writeOwnerInfo',
                // contentType: 'json',
                data:{
                    writeUrl: writeUrl,
                    newOwner: JSON.stringify(state.hisOneOwner)
                }
            })
        },
        writeRanter(state, pay){
            let writeRenterUrl = state.creatUrl + 'renter.json';
            state.hisOneRenter.unshift(pay.lodger);
            $.ajax({
                method: 'post',
                url: '/api/writeRenterInfo',
                // contentType: 'json',
                data:{
                    writeUrl: writeRenterUrl,
                    newRenter: JSON.stringify(state.hisOneRenter)
                }
            })
        }
    },
    actions:{
        
    }
});
