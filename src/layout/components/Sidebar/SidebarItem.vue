<template>
  <!-- 如果菜单项未隐藏，则渲染菜单内容 -->
  <div v-if="!item.hidden">
    <!-- 判断是否有一个显示的子菜单，并且没有其他子菜单或其他子菜单都被隐藏，并且当前菜单项不是始终显示的 -->
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
        (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
        !item.alwaysShow
      "
    >
      <!-- 如果只有一个显示的子菜单，则渲染菜单项 -->
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <!-- 渲染菜单项的内容 -->
          <item
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="onlyOneChild.meta.title"
          />
        </el-menu-item>
      </app-link>
    </template>

    <!-- 如果有多个子菜单或当前菜单项是始终显示的，则渲染子菜单 -->
    <el-submenu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <!-- 渲染子菜单的标题 -->
      <template slot="title">
        <item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <!-- 递归渲染子菜单项 -->
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import Item from "./Item";
import AppLink from "./Link";

export default {
  name: "SidebarItem",
  components: { Item, AppLink },
  props: {
    // 当前菜单项对象
    item: {
      type: Object,
      required: true,
    },
    // 是否为嵌套菜单项
    isNest: {
      type: Boolean,
      default: false,
    },
    // 基本路径，用于解析菜单项的路径
    basePath: {
      type: String,
      default: "",
    },
  },
  data() {
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    // 判断是否只有一个显示的子菜单
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // 临时设置（如果只有一个显示的子菜单将被使用）
          this.onlyOneChild = item;
          return true;
        }
      });

      // 当只有一个子菜单时，默认显示子菜单
      if (showingChildren.length === 1) {
        return true;
      }

      // 如果没有子菜单需要显示，则显示父菜单
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
    // 解析菜单项的路径
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>
