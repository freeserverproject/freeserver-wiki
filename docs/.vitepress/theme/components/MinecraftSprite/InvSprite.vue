<template>
	<sprite class="inv-sprite" :pos="pos" :spriteSize="512"/>
</template>
<script>
import Sprite from './Sprite.vue';
import invs from './invs.js';

export default {
	name: 'InvSprite',
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
            console.log(Number(invs[this.name]?.pos || invs['Grass Block']?.pos))
			return Number(invs[this.name]?.pos || invs['Grass Block']?.pos);
		}
	}
}
</script>
<style scoped>
.inv-sprite {
	background-image: url('../../sprites/InvSprite.png');
}
</style>
