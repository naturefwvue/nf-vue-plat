<!--按钮-->
<template>
  <div>
    <el-row>
      <el-button @click="click(1)">
        <router-link to="/list/1/btn/1">添加</router-link>
      </el-button>
      <el-button @click="click(2)">修改</el-button>
      <el-button @click="click(3)">删除</el-button>
      <el-button @click="click(4)">查询</el-button>
    </el-row>
  </div>
</template>

<script>

export default {
  setup () {
    const click = (btnId) => {
      console.log(btnId)
    }

    return {
      click
    }
  }

}
</script>
