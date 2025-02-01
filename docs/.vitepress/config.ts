import { defineConfig } from 'vitepress';
// @ts-ignore 型定義、なくたっていい
import markdonwItMultimdTable from 'markdown-it-multimd-table';
// @ts-ignore 型定義で世界は救えない
import markdownItScrollable from 'markdown-it-scrolltable';

export default defineConfig({
	title: 'FREESERVER Wiki!',
	description: 'FREESERVER公式のWiki',
	lang: 'ja-jp',
	head: [
		[ 'script', {}, "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-MCRHV3M');" ]
	],
	themeConfig: {
		outline: {
			label: '目次',
			level: [1, 2]
		},
		socialLinks: [
      { icon: 'github', link: 'https://github.com/freeserverproject/freeserver-wiki' }
    ],
		editLink: {
			pattern: 'https://github.com/freeserverproject/freeserver-wiki/edit/master/docs/:path',
			text: 'このページをGitHubで編集する'
		},
		lastUpdated: {
			text: '最終更新日'
		},
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
	sitemap: {
		hostname: 'https://wiki.freeserver.pro/'
	},
	markdown: {
		config: (md) => {
			md.use(markdonwItMultimdTable, {
				rowspan: true,
			});
			md.use(markdownItScrollable);
		},
		toc: {
			level: [1, 2, 3, 4]
		}
	}
})
