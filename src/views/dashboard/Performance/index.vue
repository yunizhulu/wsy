<template>
    <div>
        <div class="el-card_body">
              <div class="infoBox"> 
        
                <div class="info-item">
                    <span  class="label">当月业绩</span>
                    <span class="value">0</span>
                </div>

                <div class="info-item">
                    <span  class=" label">上月业绩</span>
                    <span class="value">0</span>
                </div>

                <div class="info-item">
                    <span  class="label ">我的客户</span>
                    <span class="value">69</span>
                   
                </div>

                <div class="info-item">
                    <span  class="label ">逾期客户  </span>
                    <span  class="value">超级管理员</span>  
                </div>

                <div class="info-item">
                    <span  class="label ">TOP.1业绩</span>  
                    <span class="value">暂无数据</span>          
                </div>

                <div class="info-item">
                    <span  class="label ">我的总业绩</span>  
                    <span class="value">2023-07-18 19:29:16</span>          
                </div>
                
                <div class="info-item">
                    <span  class="label ">上次登录时间</span>   
                    <span class="value">0</span>         
                </div>

                <div class="info-item">
                    <span  class="label ">登录方式 </span>    
                    <span class="value">账号密码</span>        
                </div>
              </div>  
        </div>
    </div>
</template>

<script>

</script>


<style lang='scss' scoped>
    .el-card_body{
        display: flex;
        padding: 20px;
        width:580px;
        height:275px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: #fff;
        .flex_low {
            span {
                display:inline-block;
                img {
                    width:98px;
                    height:98px;
                    border-radius: 50%;
                }
            }
        }
        .infoBox{
            width: 420px;
            height: 248px;
            margin-left: 20px;
            position: relative;
            .info-item{
                display: flex;
                margin-bottom: 10px;
                .label {
                    width: 120px;
                    color: #303333;
                }
            }
            .rootname {
             font-size: 22px;
             padding-bottom: 10px;
            }
            .btn{
                position: absolute;
                right: 0;
                bottom: 0;
            }
        }
    }
</style>