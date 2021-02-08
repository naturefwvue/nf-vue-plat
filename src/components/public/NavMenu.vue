<template>
  <!--竖状菜单导航-->
  <el-menu
    :uniqueOpened="true"
    default-active="0"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>支撑平台</span>
      </template>
      <el-menu-item v-for="(item) in moduleList"
        :key="item.moduleId"
        :index="item.moduleId">
        {{item.title}}
      </el-menu-item>
      <el-menu-item index="1-2">
        配置信息
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const moduleList = {
  m100: {
    moduleId: 100,
    title: '数据库文档'
  },
  m102: {
    moduleId: 102,
    title: '查看数据库'
  },
  m103: {
    moduleId: 103,
    title: '查看表和字段'
  },
  m104: {
    moduleId: 104,
    title: '模块管理'
  },
  m105: {
    moduleId: 105,
    title: '配置前端'
  },
  m106: {
    moduleId: 106,
    title: '配置后端'
  }
}

export default {
  name: 'NavMenu',
  props: {
    msg: String
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const tabs = store.state.actionManage.tabs

    console.log('router', router)

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleSelect = (index, indexPath) => {
      console.log(typeof index)
      console.log(indexPath)
      console.log(tabs.filter((item) => item.id === index))
      // 判断是否已经存在
      if (tabs.filter((item) => item.id === index).length === 0) {
        // 添加动态tab
        tabs.push({
          id: index,
          title: moduleList['m' + index].title,
          name: moduleList['m' + index].title,
          content: ''
        })
      }
      // 路由跳转
      router.push({
        name: 'module',
        params: { moduleId: index }
      })
    }

    return {
      moduleList,
      handleSelect,
      handleOpen,
      handleClose
    }
  }
}
</script>
