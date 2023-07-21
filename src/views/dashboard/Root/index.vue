<template>
    <div>
        <div class="el-card_body">
              <div class='flex_low'>
                    <span style='height:98px;width:98px;line-height:98px'><img src="./images/touxiang.jpg"></span>
              </div>
              <div class="infoBox"> 
                <div class="info-item rootname">
                    <span>闫紫薇</span>
                </div>

                <div class="info-item">
                    <span  class="label">入职时间</span>
                    <span class="value">2023-07-18 00:00:00</span>
                </div>

                <div class="info-item">
                    <span  class=" label">所属团队</span>
                    <span class="value">默认</span>
                </div>

                <div class="info-item">
                    <span  class="label ">使用权限</span>
                   
                </div>

                <div class="info-item">
                    <span  class="label ">职位</span>
                    <span  class="value">超级管理员</span>  
                </div>

                <div class="info-item">
                    <span  class="label ">等级</span>            
                </div>

                <div class="info-item">
                    <span  class="label ">工号</span>            
                </div>
                <el-button type="primary" size="mini" class="btn">详细</el-button>
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