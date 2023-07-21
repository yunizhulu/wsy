<template>
  <div>
    <div class="el-card_body">
      <div class="el-card-head">
        <div class="row">
          <span>最新资讯</span>
          <span>查看更多</span>
        </div>  
      </div>
      <div class="el_card_main">
        <div class="el_card_info">
          <table>
            <tr>
              <div class="cell"><td style="width: 80px">2023-05-09</td></div>
              <div class="cell"><td style="width:290px">CRM v3.23版本更新</td></div>
            </tr>
          
            <tr>
              <div class="cell"><td style="width: 80px">2023-05-09</td></div>
              <div class="cell"><td style="width:290px">CRM v3.23版本更新</td></div>
            </tr>

            <tr>
              <div class="cell"><td style="width: 80px">2023-05-09</td></div>
              <div class="cell"><td style="width:290px">CRM v3.23版本更新</td></div>
            </tr>

            <tr>
              <div class="cell"><td style="width: 80px">2023-05-09</td></div>
              <div class="cell"><td style="width:290px">CRM v3.23版本更新</td></div>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.el-card_body {
  display: flex;
  flex-direction: column;
  width: 460px;
  height: 245px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #fff;
  .el-card-head {
    width: 100%;
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    .row {
      display: flex;
      height: 20px;
      justify-content: space-between;
      span {
        cursor: pointer;
      }
    }
  }
  .el_card_main {
    padding: 20px;

    tr {
      display: flex;
      padding: 4px 0;
      border-bottom: 1px solid #ebeef5;
      cursor: pointer;
      .cell {
        padding: 0 10px 0 14px;
        font-size: 14px;
        color: #606266;
        
      }
      & :nth-child(1){
            display: flex;
            align-items: center;
        }
    }

    tr:hover {
  
      background-color: #f0f2f5;
    }
    tr:hover .cell {
      color: #1ec2a0;
    }
  }
}
</style>
