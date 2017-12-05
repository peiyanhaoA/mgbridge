const express = require('express');
const router = express.Router();
const fs = require('fs');
const async = require('async');

//增加房主信息
router.post('/getAll', function(req, res) {
    let json = req.body;
    let building = json.building;
    let floor = '';
    let roomNumber = '';
    if (json.roomNumber.length == 3) {
        floor = '0' + json.roomNumber.substr(0, 1);
        roomNumber = json.roomNumber.substr(1, 2);
    } else if (json.roomNumber.length == 4) {
        floor = json.roomNumber.substr(0, 2);
        roomNumber = json.roomNumber.substr(2, 2);
    }
    let URL = './static/shanshuiyuan/' + building + '/' + floor + '/' + roomNumber;
    let infos = {};
    fs.readFile(URL + '/owner.json', function(err, data) {
        if (err) return console.error(err);
        infos.owner = data.toString();
    });
    fs.readFile(URL + '/renter.json', function(err, data) {
        if (err) return console.error(err);
        infos.renter = data.toString();
        res.send(infos);
    });
});

router.post('/saveAll', function(req, res) {
    console.log(req.body);
});

router.post('/obtain',function(req,res){
    let building = req.body.building;
    let floorurl = './static/shanshuiyuan/' + building;
    let rows = [];
    let col = [];
    let roomInfo = [];
    let ownerInfo = [];
    let renterInfo = [];
    fs.readdir(floorurl, function(err, floorFiles){
        floorFiles.forEach(function(e){
            col.push(e)
            let roomsUrl = floorurl + '/' + e;
            fs.readdir(roomsUrl, function(err, roomsFiles){//房间
                roomsFiles.forEach(function(el){
                   let roomUrl = roomsUrl + '/' + el;
                   fs.readdir(roomUrl, function(err, roomFiles){ // 每个房间
                        roomFiles.forEach(function(ele){
                            if(ele == 'owner.json'){
                                let ownerInfoUrl = roomUrl + '/' + ele;
                                fs.open(ownerInfoUrl, 'r', function(err, fd){
                                    fs.readFile(ownerInfoUrl,function(err, data){
                                        ownerInfo.push(data.toString());
                                        fs.close(fd);
                                    });
                                })
                               
                            }else if(ele == 'renter.json'){
                                let renterInfoUrl = roomUrl + '/' + ele;
                                fs.open(renterInfoUrl, 'r', function(err, fd){
                                    fs.readFile(renterInfoUrl,function(err, data){
                                        renterInfo.push(data.toString());
                                        fs.close(fd);
                                    });
                                })
                                
                            }else if(ele == 'room.json'){
                                let roomInfoUrl = roomUrl + '/' + ele;
                                fs.open(roomInfoUrl, 'r', function(err, fd){
                                    fs.readFile(roomInfoUrl,function(err, data){
                                        roomInfo.push(data.toString());
                                        fs.close(fd);
                                    });
                                })
                            }
                        })
                        
                   })
                   
                })
            })
        })
        let colUrl = floorurl + '/' + floorFiles[0];
        fs.readdir(colUrl, function(err, row){
            rows = row;
            // res.send(rows)
        })
    })
    setTimeout(function(){
        let infoObj = {
            cols: col,
            rows: rows,
            roomInfo: roomInfo,
            ownerInfo: ownerInfo,
            renterInfo: renterInfo
        };
        res.send(infoObj);
    },300)
})

module.exports = router;