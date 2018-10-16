<template>
	<div class="weekend">
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" class="item-img">
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
	export default{
		name:'HomeWeekend',
		props:{
			list:Array
		}
	}
</script>

<style>
	.weekend .title{
		line-height: .8rem;
		background: #eee;
		text-indent: .2rem;
	}
	.weekend .item{
		
	}
	.weekend .item-img-wrapper{
		height: 0;
		overflow: hidden;
		padding-bottom: 37.09%;
	}

	.weekend .item-img{
		width: 100%;
	}
	.weekend .item-info{
		padding: .1rem;
	}
	.weekend .item.title{
		line-height: .54rem;
		font-size: .32rem;
	}
	.weekend .item-desc{
		line-height: .4rem;
		color: #ccc;
	}
</style>
