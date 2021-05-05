<template>
	<img :style="{width: `${width}px`, height: `${height}px`}" :src="avatarURL" alt="minecraft-avatar" loading="lazy" :width="width" :height="height" class="mc-avatar">
</template>
<script>
export default {
	name: 'McAvatar',
	props: {
		user: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: 'helm'
		},
		width: {
			type: String,
			default: '32'
		},
		height: {
			type: String,
			default: ''
		}
	},
	computed: {
		avatarURL() {
			return `https://minotar.net/${this.type}/${this.user}/16`
		}
	}
}
</script>
<style scoped>
img {
	image-rendering: pixelated;
	vertical-align:top;
}
</style>