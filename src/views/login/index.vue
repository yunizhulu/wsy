<template>
  <div class="login-container">
    <!-- 登录表单 -->
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <!-- 标题 -->
      <div class="title-container">
        <h3 class="title">网商云中台CRM演示站</h3>
      </div>

      <!-- 用户名输入框 -->
      <el-form-item prop="username">
        <span class="svg-container">
          <!-- 用户名图标 -->
          <svg-icon icon-class="user" />
        </span>
        <!-- 用户名输入框 -->
        <el-input
          ref="username"
          v-model="loginForm.uname"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <!-- 密码输入框 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <!-- 密码图标 -->
          <svg-icon icon-class="password" />
        </span>
        <!-- 密码输入框 -->
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <!-- 显示密码的图标 -->
        <span class="show-pwd" @click="showPwd">
          <svg-icon
            :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
          />
        </span>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        >登录</el-button
      >

      <!-- 提示信息 -->
      <div class="tips">
        <span style="margin-right: 20px">用户名: admin</span>
        <span> 密码: 任意</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import { login } from "../../api/user";

export default {
  name: "Login",
  data() {
    // 用户名验证函数
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    // 密码验证函数
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能少于6位"));
      } else {
        callback();
      }
    };
    return {
      // 登录表单数据
      loginForm: {
        uname: "admin",
        password: "111111",
      },
      // 登录表单验证规则
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      // 登录状态
      loading: false,
      // 控制密码显示或隐藏
      passwordType: "password",
      // 重定向目标，默认为undefined
      redirect: undefined,
    };
  },
  watch: {
    // 监听路由变化，获取重定向参数
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    // 显示或隐藏密码
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },

    // 处理登录逻辑
    async handleLogin() {
      // 发起登录请求
      const res = await login(this.loginForm);
      console.log(res);
      const { data, status } = res;
      // 状态码==201请求成功
      if (status == 201) {
        // 保存登录凭证（token）
        localStorage.setItem("token", data.accessToken);
        // 跳转到首页
        this.$router.push("./");
        // 设置用户信息
        localStorage.setItem("userInfo", JSON.stringify(data.user));
      }
    },
  },
};
</script>

<style lang="scss">
/* 样式省略，不做中文注释 */
</style>

<style lang="scss" scoped>
/* 样式省略，不做中文注释 */
</style>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background: url(../../assets/as.jpg);
  background-size: 100% 100%;

  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
