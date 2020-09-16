<template>
  <div class="hostBox" ref="hostRef" @click="close">
    <div class="host" >
        <div class="bg">
        <div class="top">
            <!-- 查看更多 -->
            <div class="more" @click="changeShowMoreStatus">
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
        <!-- 更多菜单 -->
        <div v-if="showMoreStatus" class="moreMenu">
            <ul>
            <li v-for="(_) in moreMenu" :key="_.id" @click="goAppStore($event, _)">
                <img :src="_.img" alt="" />
                <p>{{ _.name }}</p>
            </li>
            </ul>
        </div>
        </div>
        <!-- 用户信息 -->
        <div class="userMsgBox">
            <div class="userMsg">
                <div class="avatar">
                    <img :src="headUrl" alt="">
                </div>
                <div class="floatRight">
                    <!-- 关注 -->
                    <div class="focus">
                        <img src='https://heybooks-test-console.oss-cn-shenzhen.aliyuncs.com/img/host/force.png' alt="">
                        <p>关注</p>
                    </div>
                    <!-- 聊天 -->
                    <div class="chat">
                        <img src="https://heybooks-test-console.oss-cn-shenzhen.aliyuncs.com/img/host/chat.png" alt="">
                    </div>
                </div>
                <!-- 用户信息 -->
                <div class="userMsgDetail">
                <p class="nickname">{{ author }}</p>
                
                </div>
                <div class="intro width690">
                    <p class="introMsg">{{ description }}</p>
                    <div class="about">
                        <p>关于TA</p> 
                        <img :src="rightImg" alt="">
                    </div>
                </div>
                <!-- 标签 -->
                <div class="tags width690">
                    <ul>
                        <li v-for="_ in tags" :key="_.id">
                            {{ _.tagName }}
                        </li>
                    </ul>
                </div>
                <!-- 关注 / 粉丝 -->
                <div class="fans width690">
                    <p class="focus">
                        <span>800</span>
                        <span>关注</span>
                    </p>
                    <p class="fansDetail">
                        <span>1.2万</span>
                        <span>粉丝</span>
                    </p>
                </div>
                <!-- 分割线 -->
                <div class="line"></div>

                <!-- 广告位 -->
                <img :src="bgImg" alt="" class="advertising">

                <!-- 解读 -->
                <div class="unscramble width690">
                <p>解读 ( 36 )</p>
                <ul class="list">
                    <li >
                    <div class="cover">
                        <img src="https://heybooks-test-console.oss-cn-shenzhen.aliyuncs.com/img/host/person-reading-book-and-holding-coffee-1550648%402x.png" alt="">
                    </div>
                    <div class="content">
                        <p>标题</p>
                        <p class="showTwoText">点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师</p>
                    </div>
                    </li>
                </ul>
                </div>

                <!-- 分割线 -->
                <div class="line"></div>

                <!-- 声音 -->
                <div class="unscramble width690 sone">
                <p>声音 ( 36 )</p>
                <ul class="list">
                    <li >
                        <div class="cover">
                            <img src="https://heybooks-test-console.oss-cn-shenzhen.aliyuncs.com/img/host/person-reading-book-and-holding-coffee-1550648%402x.png" alt="">
                        </div>
                        <div class="content">
                            <p>标题</p>
                            <p class="showTwoText">点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师</p>
                        </div>
                    </li>
                    <li >
                        <div class="cover">
                            <img src="https://heybooks-test-console.oss-cn-shenzhen.aliyuncs.com/img/host/person-reading-book-and-holding-coffee-1550648%402x.png" alt="">
                        </div>
                        <div class="content">
                            <p>标题</p>
                            <p class="showTwoText">点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师</p>
                        </div>
                    </li>
                    <li >
                        <div class="cover">
                            <img src="https://heybooks-test-console.oss-cn-shenzhen.aliyuncs.com/img/host/person-reading-book-and-holding-coffee-1550648%402x.png" alt="">
                        </div>
                        <div class="content">
                            <p>标题</p>
                            <p class="showTwoText">点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师点卡还是看的哈凉山大火乐山电力哈里斯好滴啦黄老师</p>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs } from 'vue';
import host from "./host";
import BS from '@utils/bs/bs'
export default defineComponent({
  setup() {
    const { goAppStore, close, moreMenu, rightImg, bgImg, showMoreStatus, getAuthorAsync, changeShowMoreStatus, authorData, list } = host();
    console.log(moreMenu);
    const hostRef = ref<HTMLDivElement>();
    onMounted(() => {
        BS(getAuthorAsync(), hostRef, '.hostBox');
    })
    return {
      list,
      moreMenu,
      rightImg,
      bgImg,
      showMoreStatus,
      changeShowMoreStatus,
      hostRef,
      close,
      goAppStore,
      ...toRefs(authorData)
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./host.scss";
</style>
