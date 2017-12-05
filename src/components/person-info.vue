<template>
   <div id="bdetails" class="position-absolute">
        <div class="card position-absolute" id="listtable">
            <table class="table">
                <tbody>
                    <tr>
                        <td></td>
                        <td>房主姓名</td>
                        <td>Otto</td>
                        <td>联系电话</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
                 <tbody>
                    <tr>
                        <td>房客姓名</td>
                        <td>身份证号</td>
                        <td>联系电话</td>
                        <td>租赁截止日期</td>
                        <td>录入者</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
             </table>
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted () {
        this.$events.on('testEvent', eventData => console.log(eventData));
    }
}
</script>
<style scoped>
#bdetails{
    width: calc(100% - 200px);
    height: 100%;
    left: 200px;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
}
#listsCard{
    width: 600px;
    height: 100%;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
</style>
