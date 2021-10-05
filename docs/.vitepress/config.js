/**
 * @type {import('vitepress/types').UserConfig}
 */
module.exports = {
	title: 'FREESERVER Wiki!',
	description: 'FREESERVER公式のWiki',
	lang: 'ja-jp',
	head: [
		[ 'script', {}, "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-MCRHV3M');" ]
	],
	themeConfig: {
		repo: 'freeserverproject/freeserver-wiki',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'このページをGitHubで編集する',
		lastUpdated: '最終更新日',
		nav: [
			{ text: 'トップ', link: '/' },
			{ text: 'プライバシーポリシー', link: '/privacy-policy.html' },
			{ text: '初心者指南', link: '/beginners-guide.html' }
		],
		algolia: {
			appId: 'CPPGR9UZ5R',
      apiKey: '4c058eb492546b15dd53c1effc396048',
      indexName: 'prod_freeserver-wiki'
    }
	},
	markdown: {
		config: (md) => {
			md.use(require('markdown-it-multimd-table'), {
				rowspan: true,
			});
			md.use(require('markdown-it-scrolltable'));
		},
		toc: {
			includeLevel: [1, 2, 3, 4]
		}
	}
}
