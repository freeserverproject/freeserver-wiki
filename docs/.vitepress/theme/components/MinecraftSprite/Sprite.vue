<template>
	<span class="sprite" :style="{
		backgroundPosition: `-${x * scale}px -${y * scale}px`,
		width: `${size * scale}px`,
		height: `${size * scale}px`,
		backgroundSize: `${scale * spriteSize}px`
	}"></span>
</template>
<script>
export default {
	name: 'Sprite',
	props: {
		size: {
			type: Number,
			default: 16
		},
		spriteSize: {
			type: Number,
			default: 256
		},
		pos: {
			type: Number,
			default: 2
		},
		scale: {
			type: Number,
			default: 1
		}
	},
	computed: {
		_pos () {
			return this.pos - 1;
		},
		widthCount () {
			return this.spriteSize / this.size;
		},
		x () {
			return ( (this._pos % this.widthCount) || 0 ) * this.size;
		},
		y () {
			return Math.floor( this._pos / this.widthCount ) * this.size;
		}
	},
	mounted () {
		console.log(Math.floor( this._pos / this.widthCount ))
	}
}
</script>
<style scoped>
.sprite {
	display: inline-block;
	image-rendering: pixelated;
}
</style>