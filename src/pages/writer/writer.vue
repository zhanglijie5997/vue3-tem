<template>
  <div class="writerBox" ref="writerRef">
    <div class="writer">
        <div class="line"></div>
        <!-- 作者信息 -->
        <div class="userMsg width690">
            <p>[{{ country }}]{{ author }}</p>
            <p>{{ description }}</p>
        </div>
        <!-- 分割线 -->
        <!-- <div class="line"></div> -->
        <!-- 作者头像等信息 -->
        <!-- <div class="userDetail width690">
            <div class="header">
                <div class="left">
                    <div class="avatar">
                        <img src="" alt="" srcset="" />
                    </div>
                    <div class="userName">
                        <div class="userNameAndTags">
                            <p>用户名</p>
                            <p>用户标签</p>
                        </div>
                        <div class="attention">
                            1.2万人关注
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img src="https://heybooks-test-console.oss-cn-shenzhen.aliyuncs.com/img/host/force.png" alt="">
                    <p>关注</p>
                </div>
            </div>

            <div class="userIntro width690 boxShadow">
                <p>
                    个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介（70字以内…)
                </p>
            </div>
            
        </div> -->
        <!-- 分割线 -->
        <div class="line"></div>

        <!-- 全部著作 -->
        <div class="allWorks width690">
            <div class="title">
                <p class="ready">全部著作</p>
                <p>共4本</p>
            </div>
            <!-- 列表 -->
            <div class="list">
                <ul>
                    <li v-for="_ in list" :key="_.id">
                        <div class="left writerBoxShadow">
                            <img :src="_.coverImgUrl" alt="" />
                        </div>
                        <div class="right">
                            <div class="rightTitleBox">
                                <div class="bookName">
                                    {{ _.name }}
                                </div>
                                <div class="bookIntro">
                                    查看书籍
                                </div>
                            </div>
                            <!-- 数据信息 -->
                            <div class="content showTwoText">
                                {{ _.description }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs } from "vue";
import writer from './writer';
import BS from '@utils/bs/bs'

export default defineComponent({
  setup() {
    const { getDetailAsync, authorData, list } = writer();
    const writerRef = ref<HTMLDivElement>();
    // const bs = ref<BScroll>();
    onMounted(() => {
        BS(getDetailAsync(), writerRef, '.writerBox');

        // getDetailAsync().then(() => {
        //     setTimeout(() => {
        //         if(!bs.value) {
        //             bs.value = new BScroll(writerRef.value ?? '.writerBox', {
        //                 probeType: 3,
        //                 click: true,
        //             });
        //         }else {
        //             bs.value.refresh()
        //         }
        //     }, 1)
        // })
    })

    return {
        ...toRefs(authorData),
        list
    };
  },
});
</script>

<style scoped lang="scss">
@import "./writer.scss";
</style>
