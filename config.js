docute.init({
    landing: 'landing.html',
    title: 'Mirror in mirror',
    repo: 'jamesyangget/mirrors',
    twitter: 'james_ya_',
    'edit-link': 'https://github.com/jamesyangget/mirrors/tree/master/',
    nav: {
        default: [{
            title: '首页', path: '/'
        },
        {
            title: '支持 Mirror in mirror', path: '/support'
        }]
    },
    plugins: [
        docsearch({
            indexName: 'mirrors',
            url: 'https://mirrors.js.org'
        }),
        evanyou()
    ]
});
