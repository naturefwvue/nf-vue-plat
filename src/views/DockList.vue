<template>
  <!--列表容器-->
  <div class="home">
    <nfFind/>
    <nfButton/><br>
    <nfGrid/>
    <nfPager/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import nfButton from '@/components/public/nfButton.vue'
import nfFind from '@/components/public/nfFind.vue'
import nfGrid from '@/components/public/nfGrid.vue'
import nfPager from '@/components/public/nfPager.vue'

export default {
  name: 'DockList',
  components: {
    nfButton,
    nfFind,
    nfPager,
    nfGrid
  },
  props: {
    pageId: Number
  }
}
</script>
