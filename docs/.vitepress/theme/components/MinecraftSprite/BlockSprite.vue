<template>
	<sprite class="block-sprite" :pos="pos"/>
</template>
<script>
import Sprite from './Sprite.vue';
import items from './blocks.js';

export default {
	name: 'BlockSprite',
	components: {
		Sprite
	},
	props: {
		name: {
			type: String,
			required: true
		}
	},
	computed: {
		pos () {
			return Number(items[this.name]?.pos || items['']?.pos)
		}
	}
}
</script>
<style scoped>
.blcok-sprite {
	background-image: url('../../sprites/BlockCSS.png');
}
</style>
