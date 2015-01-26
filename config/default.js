module.exports = (function () {

    'use strict';

    return {
        author: {
            email: 'manovotny@gmail.com',
            name: 'Michael Novotny',
            url: 'http://manovotny.com',
            username: 'manovotny'
        },
        files: {
            browserify: 'bundle'
        },
        paths: {
            curl: 'curl_downloads',
            source: 'src',
            translations: 'lang'
        },
        project: {
            composer: {
                name: 'manovotny/williambutlerart',
                type: 'project' // Should be `library` or `project`.
            },
            description: 'A customized landing page for williambutlerart.com.',
            git: 'git://github.com/manovotny/williambutlerart.com.git',
            name: 'William Butler Art',
            slug: 'williambutlerart',
            type: 'theme', // Should be `plugin` or `theme`.
            url: 'https://github.com/manovotny/williambutlerart.com',
            version: '1.0.0'
        }
    };

}());
