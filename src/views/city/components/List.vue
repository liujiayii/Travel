<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div v-for="item of hotCities" class="button-wrapper" :key="item.id" @click="handleCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div v-for="(item,key) of cities" class="area" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div v-for="innerItem of item" class="item border-bottom" :key="innerItem.id" @click="handleCity(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "List",
    props: {
      hotCities: Array,
      cities: Object,
      letter: String
    },
    methods: {
      handleCity(city) {
        this.$store.commit('changeCity', city)
        this.$router.push({path: '/'})
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #ccc

    &:after
      border-color #ccc

  .border-bottom
    &:before
      border-color #ccc

    &:after
      border-color #ccc

  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0

  .title
    line-height .54rem
    background #eee
    padding-left .2rem
    color #666
    font-size .26rem

  .button-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem

    .button-wrapper
      float left
      width 33.33%

      .button
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem

  .item-list
    .item
      line-height .76rem
      color #666
      padding-left .2rem
</style>
