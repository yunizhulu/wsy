<template>
  <!-- 如果是外部图标，渲染一个带有自定义样式的 div，用于显示外部图标 -->
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />
  <!-- 如果是内部图标，渲染一个 <svg> 元素，并在其中使用 <use> 元素引用内部图标 -->
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
// 导入验证工具函数 isExternal
import { isExternal } from "@/utils/validate";

export default {
  name: "SvgIcon",
  props: {
    // 图标的类名，必需属性
    iconClass: {
      type: String,
      required: true,
    },
    // 自定义的类名，可选属性，默认为空字符串
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    // 判断图标是否来自外部链接
    isExternal() {
      return isExternal(this.iconClass);
    },
    // 获取图标名称，添加前缀 "#icon-" 用于在 <use> 元素中引用图标
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    // 组合图标的类名，如果有自定义类名则添加到 'svg-icon' 后面
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    },
    // 获取外部图标的样式
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        "-webkit-mask": `url(${this.iconClass}) no-repeat 50% 50%`,
      };
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
