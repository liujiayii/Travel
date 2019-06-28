<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Weekend",
    data() {
      return {
        recommendList: [{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1812/83/d532bca9d7b91a.jpg_r_640x214_c3069246.jpg',
          title: '大连圣亚海洋世家',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        }, {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1812/83/d532bca9d7b91a.jpg_r_640x214_c3069246.jpg',
          title: '大连圣亚海洋世家',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        }, {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1812/83/d532bca9d7b91a.jpg_r_640x214_c3069246.jpg',
          title: '大连圣亚海洋世家',
          desc: '浪漫大连首站，浪漫的海洋主题乐园'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem

  .item
    .item-img-wrapper
      overflow hidden
      height 0
      padding-bottom 33.9%

    .item-img
      width 100%

    .item-info
      padding .1rem

      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()

      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
</style>
