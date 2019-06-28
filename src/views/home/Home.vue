<template>
  <div>
    <HomeHeader/>
    <HomeSwiper/>
    <HomeIcons/>
    <HomeRecommend/>
    <HomeWeekend/>
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeSwiper from './components/Swipers'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'

  export default {
    name: 'home',
    components: {
      HomeHeader, HomeSwiper, HomeIcons, HomeRecommend,HomeWeekend
    }
  }
</script>
