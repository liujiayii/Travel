<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list" :key="item.id" class="search-item border-bottom" @click="handleCity(item.name)">
          {{item.name}}
        </li>
        <li v-show="!list.length" class="search-item border-bottom">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Search",
    props: {
      cities: Object
    },
    data() {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    methods: {
      handleCity(city) {
        this.$store.commit('changeCity', city)
        this.$router.push({path: '/'})
      }
    },
    watch: {
      keyword() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 200)
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.search)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .search
    height .72rem
    padding 0 .2rem
    background $bgColor

    .search-input
      box-sizing border-box
      height .62rem
      line-height .62rem
      padding 0 .1rem
      width 100%
      text-align center
      border-radius .06rem
      color #666

  .search-content
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    z-index 2

    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      color #666

</style>
