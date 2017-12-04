import axios from 'axios';

export function getOwner(room) {
    //val==房屋信息
    axios.post('/api/all', room)
        .then(function(infos) {
            return infos;
        })
        .catch(function(err) {
            console.log(err);
        })
}