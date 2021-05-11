import DefaultTheme from 'vitepress/theme';
import McAvatar from './components/McAvatar.vue';
import ItemSprite from './components/MinecraftSprite/ItemSprite.vue';
import DiscordWidget from './components/DiscordWidget/Widget.vue';

import { watch } from 'vue';

export default {
	...DefaultTheme,
	enhanceApp({ app, router }) {
		watch(router.route, () => {
			gtag('config', window.GA_MEASUREMENT_ID, {'page_path': router.route.path});
		});
		app.component('mc-avatar', McAvatar)
			.component('discord-widget', DiscordWidget)
			.component('item-sprite', ItemSprite);
	}
}
