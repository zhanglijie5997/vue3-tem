 <template>
  <div class="indexBox" ref="indexRef" >
    <div class="index" >
        
    </div>
  </div>
</template>

<script lang="ts">
import {  defineComponent, onMounted, ref, toRefs } from "vue";
// import { Toast } from "vant";
import index from './index';
// import BScroll from 'better-scroll';
import BS from '@utils/bs/bs'

export default defineComponent({
  setup() {
    const { state, grade, getBookDetailAsync } = index();
    const indexRef = ref<HTMLDivElement>();
    onMounted(() => {
        BS(getBookDetailAsync(), indexRef, '.indexBox')
    });
    return {
      ...toRefs(state),
      grade,
      indexRef,
    };
  },
});

</script>

<style lang="scss" scoped>
@import './index.module.scss';
</style>
