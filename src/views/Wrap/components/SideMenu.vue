<template>
  <div class="slide-menu">
    <el-menu @select="goToTarget" :default-active="$route.name" class="el-menu-vertical-demo">
      <el-menu-item v-for="(item,index) in routes" :key="index" :index="item.name">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { subRoutes } from '@/router/route.config';
import { Route } from 'vue-router';

@Component({
  name: 'SideMenu'
})
export default class SideMenu extends Vue {
  public routes = subRoutes.map((item) => {
    return {
      title: item.meta.title,
      name: item.name,
      icon: item.meta.icon
    };
  });

  public goToTarget(name: string): void {
    this.$router.push({ name });
  }
}
</script>

<style lang='less'>
.slide-menu {
  width: 100%;
  height: 100%;
}
</style>