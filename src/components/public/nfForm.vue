<!--按钮-->
<template>
<a-divider>
  按钮s
</a-divider>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const editableTabsValue = ref('2')

    return {
      editableTabsValue
    }
  }

}
</script>
