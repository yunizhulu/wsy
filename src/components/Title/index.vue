<template>
  <div style="padding: 0 15px">
    <span data-v-7f6ac8d8="" class="el-breadcrumb__item">
      <span role="link" class="">
        <a data-v-7f6ac8d8="" href="#/" >
          <span class="router-link-active" data-v-7f6ac8d8="">网商云中台CRM演示站 </span>  /
        </a>
        <span role="presentation" class="el-breadcrumb__separator">/</span>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.router-link-active {
    height: 50px;
    font-size: 14px;
    line-height: 50px;
    font-weight: 700;
  
}
</style>
