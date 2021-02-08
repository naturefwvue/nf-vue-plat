<!--标签-->
<template>
  <!--
  <div style="margin-bottom: 20px;">
    <el-button
      size="small"
      @click="addTab(editableTabsValue)"
    >
      add tab
    </el-button>
  </div>-->
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    closable
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="(item, index) in editableTabs"
      :key="item.name + index"
      :label="item.title"
      :name="item.name"
    ></el-tab-pane>
  </el-tabs>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()

    const editableTabsValue = ref('2')
    const editableTabs = store.state.actionManage.tabs
    const tabIndex = ref(1)

    // 事件
    const addTab = (targetName) => {
      const newTabName = ++tabIndex.value + ''
      editableTabs.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue = newTabName
    }
    const removeTab = (targetName) => {
      const tabs = editableTabs
      let activeName = editableTabsValue.value
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      editableTabsValue.value = activeName
      editableTabs.length = 0
      editableTabs.push(...tabs.filter(tab => tab.name !== targetName))
    }

    return {
      editableTabsValue,
      editableTabs,
      tabIndex,
      addTab,
      removeTab
    }
  }

}
</script>
