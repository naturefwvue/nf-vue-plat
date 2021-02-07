<template>
  <!--列表容器-->
  <div class="home">
    pageId:{{pageId}}<br>
    按钮<br>
    查询控件<br>
    显示列表<br>
    分页控件<br>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'DockList',
  props: {
    pageId: Number
  },
  components: {
  }
}
</script>
