const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|support)/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'mirrors',
    repo: 'jamesyangget/mirrors',
    twitter: 'james_ya_',
    'edit-link': 'https://github.com/jamesyangget/mirrors/blob/master/',
    nav: {
        default: [
            {
                title: 'Home', path: '/home'
            },
            {
                title: 'Support APlayer', path: '/support'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/zh-Hans/'
            },
            {
                title: '支持 APlayer', path: '/zh-Hans/support'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'mirrors',
            tags: ['english', 'zh-Hans'],
            url: 'https://mirrors.js.org'
        }),
        evanyou(),
    ]
});
