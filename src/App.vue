<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <!--导航-->
          <NavMenu/>
        </el-aside>
        <el-container>
          <el-main>
            <!--动态标签-->
            <nfTabs/>
            <!--列表页面-->
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
  </el-container>
  </div>

</template>

<script>

import NavMenu from '@/components/public/NavMenu.vue'
import nfTabs from '@/components/public/nfTabs.vue'

export default {
  name: 'appMain',
  props: {
    msg: String
  },
  components: {
    NavMenu,
    nfTabs
  },
  setup () {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    return {
      handleOpen,
      handleClose
    }
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #92969b;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #fafafa;
    color: #333;
    text-align: left;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
