<template>
    <div class="user-avatar" @mouseenter="showPopover" @mouseleave="hidePopover">
      <img :src="avatar" alt="User Avatar" class="avatar-img">
      <div v-if="isPopoverVisible" class="popover">
        <h3>{{ 123 }}</h3>
        <p>{{ 12414 }}</p>
        <!-- 其他用户信息 -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserInfoPopover',
    props: {
      avatar: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      // 其他用户信息的 prop
      // ...
    },
    data() {
      return {
        isPopoverVisible: false,
      };
    },
    methods: {
      showPopover() {
        this.isPopoverVisible = true;
      },
      hidePopover() {
        this.isPopoverVisible = false;
      },
    },
  };
  </script>
  
  <style>
  .user-avatar {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
  
  .avatar-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .popover {
    position: absolute;
    bottom: -70px; /* 调整弹出框的位置 */
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    text-align: center;
  }
  
  .popover h3 {
    margin: 0;
    font-size: 16px;
  }
  
  .popover p {
    margin: 5px 0;
    font-size: 14px;
  }
  </style>
  