<template>
	<div class="home-header">
		<div class="header-left">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市景点、游玩主题
		</div>
		<router-link to="/city">
				<div class="header-right">
					{{this.city}}
					<span class="iconfont arrow-icon">&#xe64a;</span>
				</div>
		</router-link>
		
	</div>
  
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name:'HomeHeader',
		computed:{
			...mapState(['city'])
		}
	}
</script>

<style>
	.home-header{
		display: flex;
		line-height: .86rem;
		background: #00bcd4;
		color: #fff;
	}
	.header-left{
		width: .64rem;
		float: left;
	}
	.header-left .back-icon{
		text-align: center;
		font-size: .4rem;
	}
	.header-input{
		background: #fff;
		flex: 1;
		border-radius: .1rem;
		margin-top: .12rem;
		margin-left: .2rem;
		line-height: .64rem;
		height: .64rem;
		color: #ccc;
		padding-left: .2rem;
	}
	.header-right{
		min-width: 1.04rem;
		padding: 0 .1rem;
		float: right;
		text-align: center;
		color: #fff;
	}
	.header-right .arrow-icon{
		margin-left: -.04rem;
		font-size: .24rem;
	}
	
</style>