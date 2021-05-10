import DefaultTheme from 'vitepress/theme';
import McAvatar from './components/McAvatar.vue';
import ItemSprite from './components/MinecraftSprite/ItemSprite.vue';
import DiscordWidget from './components/DiscordWidget/Widget.vue';

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component('mc-avatar', McAvatar)
			.component('discord-widget', DiscordWidget)
			.component('item-sprite', ItemSprite);
	}
}
