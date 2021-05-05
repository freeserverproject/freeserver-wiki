<template>
	<div class="discord-widget" v-if="!loaded">
		<header>
			<h1>{{serverData.name}}</h1>
			<span><strong>{{serverData.presence_count}}</strong>人がオンライン</span>
		</header>
		<main>
			<h5>オンラインのメンバー</h5>
			<div class="members">
				<member v-for="member in serverData.members" :key="member.id" :member="member"/>
			</div>
		</main>
		<footer>
			<a v-if="serverData.instant_invite" target="_blank" :href="serverData.instant_invite" class="connect">参加</a>
		</footer>
	</div>
</template>
<script>
import Member from './Member.vue';
export default {
	name: 'DiscordWidget',
	components: {
		Member
	},
	data: () => ({
		loading: true,
		serverData: {}
	}),
	props: {
		url: {
			type: String,
			required: true
		}
	},
	async created () {
		this.serverData = await (await fetch(this.url)).json();
		this.loaded = false;
	}
}
</script>
<style scoped>
.discord-widget {
	max-width: 500px;
}
header {
	display: flex;
	align-items: center;
	background-color: #7289da;
	color: white;
	padding: 20px 15px;
	border-radius: 4px 4px 0 0;
}

header>h1 {
	margin: 0;
	margin-right: auto;
	font-size: 1.8rem;
	font-weight: 400;
}

main {
	padding: 13px;
	max-height: 400px;
	overflow-y: scroll;
	box-shadow: 0px -10px 10px -10px #0000003e inset;
	color: #8a8e94;
}

main>h5 {
	padding: 5px 0;
}

main>.members {
	padding-left: 10px
}

footer {
	padding: 8px;
	display: flex;
}

footer>a {
	margin-left: auto;
	display: inline-block;
	width: 100px;
	text-align: center;
	border: 1px solid #3eaf7c;
	border-radius: 3px;
	padding: 3px
}
</style>