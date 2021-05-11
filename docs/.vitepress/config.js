module.exports = {
	title: 'FREESERVER Wiki!',
	description: 'FREESERVER公式のWiki',
	lang: 'ja-JP',
	head: [
		[ 'script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-6SGQWYJL40', async: true } ],
		[ 'script', {}, `window.GA_MEASUREMENT_ID = 'G-6SGQWYJL40';window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());`]
	],
	themeConfig: {
		repo: 'freeserverproject/freeserver-wiki',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'このページをGitHubで編集する',
		lastUpdated: '最終更新日',
		nav: [
			{ text: 'トップ', link: '/' },
			{ text: 'プライバシーポリシー', link: '/privacy-policy' },
			{ text: '初心者指南', link: '/beginners-guide' }
		]
	},
	markdown: {
		config: (md) => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
		}
	}
}
