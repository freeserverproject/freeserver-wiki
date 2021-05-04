import DefaultTheme from 'vitepress/theme';
import McAvatar from './components/McAvatar.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('mc-avatar', McAvatar)
  }
}
