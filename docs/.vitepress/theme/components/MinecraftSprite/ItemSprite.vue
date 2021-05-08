<template>
	<sprite class="item-sprite" :pos="pos"/>
</template>
<script>
import Sprite from './Sprite.vue';
import items from './items.js';

export default {
	name: 'ItemSprite',
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
			return Number(items[this.name].pos)
		}
	}
}
</script>
<style scoped>
.item-sprite {
	background-image: url('../../sprites/ItemCSS.png');
}
</style>