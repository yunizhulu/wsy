<template>
  <div>
    <div class="signed" style="margin-bottom: 30px">
      <div class="top">

        <div style="display:flex;">
            <span class="el-icon-s-claim"></span>
            <span style="margin-left: 8px">已签到</span>
        </div>

        <div style="margin-left: 8px">
          <el-select v-model="value" placeholder="请选择" size="mini">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

      </div>

      <ul>
        <li>
          <img src="./images/1.gif" />
          <h1>容宝琦<span> (默认)</span></h1>
        </li>
      </ul>
    </div>

    <div class="unsigned bot">
      <div class="bot_top">
        <span class="el-icon-s-claim"></span>
        <span style="margin-left: 8px">未签到</span>
      </div>

      <ul>
        <li>
          <img src="./images/1.gif" />
          <h1>彭于晏<span> (默认)</span></h1>
        </li>

        <li>
          <img src="./images/1.gif" />
          <h1>吴彦祖<span> (默认)</span></h1>
        </li>

        <li>
          <img src="./images/1.gif" />
          <h1>钟文斌<span> (默认)</span></h1>
        </li>

        <li>
          <img src="./images/1.gif" />
          <h1>王聪<span> (默认)</span></h1>
        </li>

        <li>
          <img src="./images/1.gif" />
          <h1>闫紫薇<span> (默认)</span></h1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "打卡时间",
        },
        {
          value: "选项2",
          label: "派单量",
        },
        {
          value: "选项3",
          label: "成单量",
        },
      ],
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  display: flex;
  span {
    font-size: 20px;
  }
  .top_1{
    display: flex;
  }
}
.signed,
.unsigned {
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    width: 100%;
    display: flex;
    li {
      width: 156px;
      height: 150px;
      list-style: none;
      text-align: center;
      background-color: #fff;
      margin-right: 12px;
      padding: 10px;
      cursor: pointer;
      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      h1 {
        font-size: 16px;
        font-weight: 500;
        span {
          color: #b7b7b7;
        }
      }
    }
    li:hover {
      /* 添加 box-shadow 属性来实现灰色阴影效果 */
      box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.3);
    }
  }
}
.bot {
  flex-direction: column;
  .bot_top {
    width: 100%;
    span {
      font-size: 20px;
    }
  }
}
</style>
