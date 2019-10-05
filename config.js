const langs = [
    { title: '简体中文', path: '/', matchPath: /^\/(home|support)/ },
    { title: 'English', path: '/en-us/', matchPath: /^\/en-us/ },
];

docute.init({
    landing: 'landing.html',
    title: 'Mirror in mirror',
    repo: 'jamesyangget/mirrors',
    twitter: 'james_ya_',
    'edit-link': 'https://github.com/jamesyangget/mirrors/tree/master/',
    nav: {
        default: [{
            title: '首页', 
            path: '/'
        },
        {
            title: '支持 Mirror in mirror', 
            path: '/support'
        },
        {
            title: '选择语言', 
            type: 'dropdown', 
            items: langs
        }],
        'en-us': [{
            title: 'Home', 
            path: '/en-us/'
        },
        {
            title: 'Support Mirror in mirror', 
            path: '/en-us/support'
        },
        {
            title: 'Languages', 
            type: 'dropdown', 
            items: langs
        }],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'mirrors',
            tags: ['english', 'zh-Hans'],
            url: 'https://mirrors.js.org'
        }),
        evanyou()
    ]
});