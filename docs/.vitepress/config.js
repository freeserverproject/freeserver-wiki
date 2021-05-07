module.exports = {
	title: 'FREESERVER Wiki!',
	description: 'FREESERVER公式のWiki',
	themeConfig: {
		repo: 'freeserverproject/freeserver-wiki',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'このページをGitHubで編集する',
		lastUpdated: '最終更新日',
		nav: [
			{ text: 'トップ', link: '/' },
			{ text: '初心者指南', link: '/beginners-guide' },
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
