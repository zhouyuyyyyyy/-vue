<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicConter">
      <van-swipe
        class="my-swipe"
        :show-indicators="false"
        :loop="false"
        :width="150"
      >
        <van-swipe-item v-for="item in gedanlist" :key="item">
          <router-link :to="{path:'/itemMusic' , query:{id:item.id}}">
            <img :src="item.picUrl" alt="/" />

            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-kaishi"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>

            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>


<script>
import { getMusic } from "@/request/api/ajax.js";
export default {
  data() {
    return {
      gedanlist: [],
    };
  },
  methods: {
    async getGedan() {
      let res = await getMusic();
      // console.log(res);
      this.gedanlist = res.data.result;
    },
    changeCount: function (num) {
      if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },
  },
  mounted() {
    this.getGedan();
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  overflow: hidden;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 0.02rem solid #676464;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicConter {
    width: 250%;
    height: 4rem;
    position: relative;
    display: flex;
    // justify-content: center;
    align-items: center;

    .van-swipe-item {
      margin-right: 6px;
    }

    img {
      width: 100%;
      height: 75%;
      overflow: hidden;
      border-radius: 0.2rem;
      // margin: .06rem;
    }

    .playCount {
      position: absolute;
      top: 0;
      right: 0;
      color: #fefbfb;
    }
    .my-swipe {
      width: 42%;
      height: 100%;
      display: flex;
      .name {
        line-height: 0.36rem;
      }
    }
  }
}
</style>