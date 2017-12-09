import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        roomInfo: [],
        buildings: [],
        ownerInfo: [],
        renterInfo: [],
        width: '',
        roomNum: '',
        oneOwner: {},
        oneRenter: {},
        oneRoom: {},
        hisOneOwner: [],
        hisOneRenter: [],
        clickBuildNum: '',
        URL: './static/shanshuiyuan/',
        creatUrl: '',
        color: ''
    },
    mutations:{
        saveCAndr(state,pay){
            state.color = pay.bgcolor;
            state.roomNum = pay.roomNum;
        },
        showRooms(state, paylode){
            state.clickBuildNum = paylode.building;
            $.ajax({
                method: 'post',
                url: '/api/getOwner',
                // dataType: 'json',
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
                    state.roomInfo = data.build;
                    state.renterInfo = data.renter;
                    state.ownerInfo = data.owner;
                }
               
            })
        },
        searchInfo(state){
            state.ownerInfo.forEach(function(e){
                console.log(e)
                if(e.length != 0){
                    console.log("113333333333")
                    console.log(e)
                    if(e[0].roomNumber == state.roomNum){
                        state.oneOwner = e[0];
                        state.hisOneOwner = e;
                        console.log(state.oneOwner)
                    }
                }
            });
            state.renterInfo.forEach(function(e){
                if(e.length != 0){
                    if(e[0][0].roomNumber == state.roomNum){
                        state.hisOneRenter = e
                    }
                }
            });
            state.roomInfo.forEach(function(e){
                if(e.roomNumber == state.roomNum){
                    state.oneRoom = e
                }
            })
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
            let writeRoomUrl = state.creatUrl + 'room.json';
            state.oneRoom.partyMember = pay.newOwner.partyMember;
            state.oneRoom.oldman = pay.newOwner.oldman;
            state.oneRoom.singleOld = pay.newOwner.singleOld;
            state.oneRoom.volunteer = pay.newOwner.volunteer;
            state.oneRoom.residence = pay.newOwner.residence;
            state.oneRoom.minLivings = pay.newOwner.minLivings;
            if(pay.newOwner.released != 0 || pay.newOwner.corrected == 1 || pay.newOwner.psychosis == 1 || pay.newOwner.monitoring == 1){
                state.oneRoom.bgColor = 'red';
            }else{
                if(pay.newOwner.roomStatus == 1){
                    state.oneRoom.bgColor = 'lightgreen';
                }else if(pay.newOwner.roomStatus == 2){
                    state.oneRoom.bgColor = 'lightblue';
                }else if(pay.newOwner.roomStatus == 3){
                    state.oneRoom.bgColor = 'yellow';
                }else if(pay.newOwner.roomStatus == 4){
                    state.oneRoom.bgColor = 'yellow'; 
                }else if(pay.newOwner.roomStatus == 5){
                    state.oneRoom.bgColor = 'yellow'; 
                }else{
                    state.oneRoom.bgColor = 'yellow'; 
                }
            }

            state.hisOneOwner.unshift(pay.newOwner)
            $.ajax({
                method: 'post',
                url: '/api/writeOwnerInfo',
                // contentType: 'json',
                data:{
                    writeUrl: writeUrl,
                    writeRoomUrl: writeRoomUrl,
                    newOwner: JSON.stringify(state.hisOneOwner),
                    newRoom: JSON.stringify(state.oneRoom)
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
