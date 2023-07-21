<template>
  <div>
    <div class="top_body">
      <div class="top_body_head">
        <!-- 合计 -->
        <div class="main">
          <div  class="main1">
            <span>合计</span>
            <div class="main2">￥<span>8888</span></div>
          </div>
        </div>
        <!-- 今日总结 -->
        <div class="main">
          <div  class="main1">
            <span>今日合计</span>
            <div class="main2">￥<span>8888</span></div>
          </div>
        </div>
        <!-- 昨日合计 -->
        <div class="main">
          <div  class="main1">
            <span>昨日合计</span>
            <div class="main2">￥<span>8888</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="bot_body">
      <!-- 顶部select 和日期选择器 -->
      <div class="card_head">
        <div class="head">
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select v-model="bm_value" placeholder="部门">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select v-model="tm_value" placeholder="团队">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select v-model="xs_value" placeholder="销售人员">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <div class="block">
            <el-date-picker
              v-model="value"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['00:00:00', '23:59:59']"
            >
            </el-date-picker>
          </div>
        </div>
      </div>

      <div class="rankbar">
        <!-- 人员列表 -->
        <ul>
          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>

          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>

          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>

          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>

          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>

          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>


          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>


          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>


          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>


          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>


          <li>
            <div class="rankbar_box1">
              <div class="rankbar_body">
                <p>root <span>(默认)</span></p>
                <div>￥<span>100</span></div>
              </div>
              <div>
                <img src="./images/1.gif" alt="" />
              </div>
            </div>
          </li>
        </ul>
        <!-- 排行列表 -->
        <div class="ranklist">
          <div class="ranklist_1">
            <img src="./images/1.gif" />
            <h1>root <span style="color: #b7b7b7">(默认)</span></h1>
            <div style="width: 50%; padding: 0 20px"></div>
            <div style="color: #b7b7b7">￥<span>1000</span></div>
          </div>

          <div class="ranklist_1">
            <img src="./images/1.gif" />
            <h1>root <span style="color: #b7b7b7">(默认)</span></h1>
            <div style="width: 50%; padding: 0 20px"></div>
            <div style="color: #b7b7b7">￥<span>1000</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 销售排行榜
      options: [
        {
          value: "选项1",
          label: "销售人员排行榜",
        },
        {
          value: "选项2",
          label: "部门排行榜",
        },
        {
          value: "选项3",
          label: "团队排行榜",
        },
      ],

      options1: [
        {
          value: "选项1",
          label: "人事部",
        },
        {
          value: "选项2",
          label: "教务处",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],

      options2: [
        {
          value: "选项1",
          label: "闫紫薇大队",
        },
        {
          value: "选项2",
          label: "二大队",
        },
        {
          value: "选项3",
          label: "三大队",
        },
      ],

      options3: [
        {
          value: "选项1",
          label: "闫紫薇",
        },
        {
          value: "选项2",
          label: "钟文斌",
        },
        {
          value: "选项3",
          label: "王聪",
        },
      ],
      value: "",
      value1: "",
      bm_value: "",
      tm_value: "",
      xs_value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.bot_body {
  width: 1250px;
  min-height: 435px;
  background-color: #fff;
  .card_head {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    .head {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  .rankbar {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 215px;
        padding: 20px;
        margin-right: 20px;
        margin-bottom: 20px;
        border: 1px solid #ebeef5;
        border-radius: 5px;
        .rankbar_box1 {
          display: flex;
          justify-content: space-between;
          img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
          }
          .rankbar_body {
            widows: 135px;
          }
        }
      }
    }
    .ranklist {
      width: 100%;
      padding: 20px 20px 20px 40px;
      .ranklist_1 {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        align-items: center;

        img {
          width: 40px;
          height: 40px;
          margin-right: 20px;
        }
        h1 {
          width: 150px;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
}

.top_body {
  margin-bottom: 20px;
  .top_body_head {
    display: flex;

    .main {
      width: 300px;
      height: 96px;
      padding: 20px;
      background-color: #1ec2a0;
      border-radius: 8px;
      color: #fff;
      margin-right: 20px;
      .main1{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        .main2{
          span {
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>
