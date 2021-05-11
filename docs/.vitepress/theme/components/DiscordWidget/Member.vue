<template>
	<div class="member">
		<div class="icon">
			<img :src="member.avatar_url" loading="lazy" alt="member-icon">
			<div class="status" :class="[member.status]"></div>
		</div>
		<span class="username">{{member.username}}</span>
		<span v-if="member.game" class="game">{{member.game.name}}</span>
	</div>
</template>
<script>
export default {
	name: 'Member',
	props: {
		member: {
			type: Object,
			required: true
		}
	}
}
</script>
<style scoped>
.member {
	display: flex;
	align-items: center;
	padding: 2px;
}

.member>.icon {
	width: 20px;
	height: 20px;
	position: relative;
	margin-right: 5px;
}

.member>.icon>img {
	vertical-align: top;
	width: 100%;
	height: 100%;
	border-radius: 100%;
}

.member>.icon>.status {
	position: absolute;
	border-radius: 100%;
	width: 8px;
	height: 8px;
	bottom: 0;
	right: 0;
}

.member>.icon>.status.online {
	background-color: #43b581;}
.member>.icon>.status.idle {
	background-color: #faa61a;}
.member>.icon>.status.dnd {
	background-color: #f04747;}

.member>.username {
	margin-right: auto;
}

.member>.game {
	color: #383838;
}
</style>