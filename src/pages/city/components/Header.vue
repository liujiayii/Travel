<template>
	<div class="city-header">
		城市选择
		<router-link to="/">
			<div class="iconfont header-back">&#xe624;</div>
		</router-link>
		
	</div>
</template>

<script>
	export default {
		name:'CityHeader'
	}
</script>

<style scoped>
	.city-header{
		position: relative;
		height: .86rem;
		line-height: .86rem;
		overflow: hidden;
		color: #fff;
		text-align: center;
		background: #00bcd4;
		font-size: .32rem;
	}
	.header-back{
		position: absolute;
		left: 0;
		top: 0;
		width: .64rem;
		text-align: center;
		font-size: .4rem;
		color: #fff;
	}
</style>