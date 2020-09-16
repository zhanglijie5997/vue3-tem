 <template>
  <div class="indexBox" ref="indexRef" >
    <div class="index" >
        <div class="header boxShadow">
        <div class="top">
            <div class="left boxShadow">
            <img :src="coverImg" alt="">
            </div>
            <div class="right">
            <p>{{ name }}</p>
            <p>{{ press }}</p>
            <p>{{ author }}</p>
            <p><span class="symbol">￥</span> <span class="money">{{ price }}</span></p>
            </div>
        </div>
        </div>

        <!-- 精彩解读 -->
        <div class="body boxShadow">
        <div class="bodyDetail">
            <p class="ready">精彩解读</p>
            <ul>
            <li v-for="_ in list" :key="_.id">
                <img v-if="_.coverImgUrl" :src="JSON.parse( _.coverImgUrl.imgUrl)" alt="" class="cover boxShadow"/>
                <div class="detail">
                <p>{{ _.name }}</p>
                <p>{{ _.description }}</p>
                </div>
            </li>
            </ul>
        </div> 
        </div>

        <!-- 主编推荐语 -->
        <div class="recommend  boxShadow details">
        <p class="ready">主播推荐语</p>
        <div class="recommendContent">
            <div class="left">
            <img :src="base + 'left.png'" alt="" />
            </div>
            <p class="contentText">{{ recommend }}</p>
            <div class="right">
            <img :src="base + 'right.png'" alt="" />
            </div>
        </div>
        </div>

        <!-- 内容简介 -->
        <div class="detailMsg boxShadow details">
        <p class="ready">内容简介</p>
        <div class="detailMsgContent">
            {{ introduction }}
        </div>
        </div>
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
