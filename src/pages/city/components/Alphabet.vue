<template>
	<ul class="alphabet-list">
		<li class="item" 
			v-for="item of letters" 
			:key="item"
			:ref="item"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchEnd="handleTouchEnd"
			@click="handleLetterClick"
		>{{item}}</li>
	</ul>
</template>

<script>
	export default {
		name:'CityAlphabet',
		props:{
			cities: Object
		},
		computed:{
			letters(){
				const letters = []
				for (let i in this.cities){
					letters.push(i)
				}
				return letters
			}
		},
		data() {
			return {
				touchStatus: false,
				startY:0,
				timer:null
			}
		},
		updated() {
			this.startY = this.$refs['A'][0].offsetTop
		},
		methods:{
			handleLetterClick(e){
				this.$emit('change',e.target.innerText)
			},
			handleTouchStart(){
				this.touchStatus = true
			},
			handleTouchMove(e){
				if(this.touchStatus){
					if(this.timer){
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(()=>{
						const touchY = e.touches[0].clientY - 75
						const index = Math.floor((touchY-this.startY)/20)
						if(index>=0 && index<this.letters.length){
							this.$emit('change', this.letters[index])
						}
					},16)
					
					
				}
			},
			handleTouchEnd(){
				this.touchStatus = false
			}
		}
	}
</script>

<style scoped>
	.alphabet-list{
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		right: 0;
		top: 1.54rem;
		bottom: 0;
		width: .4rem;
	}
	.alphabet-list .item{
		line-height: .4rem;
		text-align: center;
		color: #00bcd4;
	}
</style>