<template>
  <!--列表容器-->
  <div class="home">
    <nfFind/>
    <nfButton/>{{moduleId}}<br>
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
import { useStore } from 'vuex'

export default {
  name: 'PackList',
  components: {
    nfButton,
    nfFind,
    nfPager,
    nfGrid
  },
  props: {
    moduleId: Number
  },
  setup () {
    const store = useStore()
    const aa = store.state.actionManage.tabs

    console.log('aa', aa)
  }
}
</script>
