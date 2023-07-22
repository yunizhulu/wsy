<template>
  <div class="dashboard-container">
    <div class="top">
      <cardBody class="top_1"></cardBody>
      <Performance></Performance>
    </div>

    <div class="bot">
      <latestnews class="bot_1"></latestnews>
      <Announcement class="bot_1"></Announcement>
      <Qrcode></Qrcode>
    </div>
  </div>
</template>

<script>
import cardBody from './Root/index'
import Performance from './Performance/index.vue'
import Latestnews from './Latestnews/index.vue'
import Announcement from './Announcement/index.vue'
import Qrcode from './Qrcode/index.vue'
export default {
  name: 'Dashboard',
  components:{
    cardBody,
    Performance,
    Latestnews,
    Announcement,
    Qrcode
  },
  computed: {
 
  }
}
</script>

<style lang="scss" scoped>
.dashboard {

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.top{
  display: flex;
  margin-bottom: 20px;
  .top_1{
    margin-right: 20px;
  }
}
.bot{
  display: flex;
  .bot_1{
    margin-right: 20px;
  }
}


</style>
