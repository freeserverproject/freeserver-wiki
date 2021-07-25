import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';

import McAvatar from './components/McAvatar.vue';
import ItemSprite from './components/MinecraftSprite/ItemSprite.vue';
import InvSprite from './components/MinecraftSprite/InvSprite.vue';
import DiscordWidget from './components/DiscordWidget/Widget.vue';

import './custom.css';

import { watch } from 'vue';

export default {
	NotFound: DefaultTheme.NotFound,
	Layout,
	enhanceApp({ app, router }) {
		if (typeof window !== 'undefined') watch(router.route, () => {
			window.dataLayer.push({
				'event': 'router-update'
			})
		});

		app.component('mc-avatar', McAvatar)
			.component('discord-widget', DiscordWidget)
			.component('item-sprite', ItemSprite)
			.component('inv-sprite', InvSprite);
	}
}
