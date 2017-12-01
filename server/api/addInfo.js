const express = require('express');
const router = express.Router();
const fs = require('fs');

//增加房屋信息
router.post('/room', function(req, res) {
    let json = req.body;
    fs.open('./src/data/room.json', 'r+', function(err, fd) {
        if (err) {
            console.log(err)
        } else {
            fs.readFile('./src/data/room.json', function(err, data) {
                if (err) return console.error(err);

                res.send(data.toString());
                fs.close(fd);
            });
        }
    })
});

module.exports = router;