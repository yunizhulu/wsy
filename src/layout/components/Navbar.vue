<template>
  <div class="navbar">
    <!-- 侧边栏折叠按钮 -->
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <!-- 页面标题 -->
    <Title></Title>

    <!-- 面包屑导航 -->
    <breadcrumb class="breadcrumb-container" />

    <!-- 用户信息和操作菜单 -->
    <div class="right-menu">
      <el-dropdown class="avatar-container">
        <!-- 用户头像显示区域 -->
        <div class="avatar-wrapper" @click="outerVisible = true">
          <img src="@/assets/touxiang.jpg" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <!-- 用户操作下拉菜单 -->
      </el-dropdown>

      <el-dialog
        title="外层 Dialog"
        :visible.sync="outerVisible"
        width="100%"
        class="userInfo"
        top="0"
        fullscreen
      >
        <el-dialog
          width="30%"
          title="内层 Dialog"
          :visible.sync="innerVisible"
          append-to-body
        >
        </el-dialog>
        <div slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = true">个人资料</el-button>
          <el-button class="chang">注销登录</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import Title from "@/components/Title";
export default {
  components: {
    Breadcrumb,
    Hamburger,
    Title,
  },
  data() {
    return {
      outerVisible: false,
      innerVisible: false,
    };
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {
    // 切换侧边栏的显示状态
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    // 退出登录
    logout() {
      // 清除本地存储的登录凭证(token)
      localStorage.removeItem("token");
      // 跳转到登录页面，并携带当前路由作为重定向参数
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    .userInfo {
      width: 350px;
      height: 300px;
      background-color: #5a5e66;
      position: absolute;
      left: 950px;
      top: 50px;
      .dialog-footer {
        transform: translateY(65px);
        display: flex;
        flex-direction: column;
        .chang {
          transform: translateX(-10px);
          width: 310px;
        }
      }
    }

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
