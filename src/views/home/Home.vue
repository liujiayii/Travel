<template>
  <div>
    <HomeHeader/>
    <HomeSwiper :list="swiperList"/>
    <HomeIcons :list="iconList"/>
    <HomeRecommend :list="recommendList"/>
    <HomeWeekend :list="weekendList"/>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swipers'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
  import axios from 'axios'

  export default {
    name: 'home',
    components: {
      HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend
    },
    data() {
      return {
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city=' + this.$store.state.city)
          .then(this.getHomeInfoSuc)
      },
      getHomeInfoSuc(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted() {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated() {
      if (this.lastCity !== this.city) {
        this.getHomeInfo()
      }
    }
  }
</script>
