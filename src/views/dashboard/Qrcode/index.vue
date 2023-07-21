<template>
      <div class="el-card_body">
        <div class="el_head">
            <span>小程序二维码</span>
        </div>
        <div class="qrcode">
            <img src="../Qrcode/images/qrcode.jpeg" alt="">
        </div>
      </div>
  </template>
  
  <script>  

  </script>
  
  <style lang="scss" scoped>
  .el-card_body {
    width: 220px;
    height: 245px;
    background-color: #fff;
    .el_head{
        border-bottom: 1px solid #ebeef5;
        padding: 18px 20px;
    }
    .qrcode {
      text-align: center;
        padding: 20px;
        img{
            widows: 148px;
            height: 148px;
            border: 1px dashed #ebeef5;
        }
    }
  }

  </style>
  