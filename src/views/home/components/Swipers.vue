<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "Swipers",
    data() {
      return {
        swiperOption: {
          pagination: 'swiper-pagination',
          loop: true
        },
        swiperList: [{
          id: '001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
        }, {
          id: '002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/e440c31af79c0b9d1a1e84c577205562.jpg_750x200_0729c45b.jpg'
        }, {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1708/f1/ee65a13642c95c02.jpg_750x200_3440fec0.jpg'
        }]
      }
    },
    mounted() {
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background red !important

  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25%
    background #eee

    .swiper-img
      width 100%
</style>
