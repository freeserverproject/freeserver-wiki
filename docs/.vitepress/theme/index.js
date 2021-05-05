import DefaultTheme from 'vitepress/theme';
import McAvatar from './components/McAvatar.vue';
import DiscordWidget from './components/DiscordWidget/Widget.vue';

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component('mc-avatar', McAvatar);
		app.component('discord-widget', DiscordWidget);
	}
}
