<!--分页-->
<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="1000"
    :current-page="currentPage"
    @current-change="currentChange">
  </el-pagination>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const currentPage = ref(2)
    const currentChange = (currPager) => {
      console.log('currPager', currPager)
    }
    return {
      currentPage,
      currentChange
    }
  }

}
</script>
