module.exports = [
    {
        /**
        * regular expression of URL
        */
        pattern: 'https://jsonplaceholder.typicode.com/(.*)',
        
        /**
        * returns the data
        *
        * @param match array Result of the resolution of the regular expression
        * @param params object sent by 'send' function
        * @param headers object set by 'set' function
        * @param context object the context of running the fixtures function
        */
        fixtures: function (match, params, headers, context) {
            console.log(match)
            switch (true) {
                case match[1].startsWith('posts'):
                return {
                    body: 'post name',
                }
                break;
                
                default:
                return {
                    body: 'lorem 1000',
                    id: 1,
                    title: 'testing'
                };
                break;
            }
        },
        
        /**
        * returns the result of the GET request
        *
        * @param match array Result of the resolution of the regular expression
        * @param data  mixed Data returns by `fixtures` attribute
        */
        get: function (match, data) {
            return {
                body: data
            };
        },
        
        /**
        * returns the result of the POST request
        *
        * @param match array Result of the resolution of the regular expression
        * @param data  mixed Data returns by `fixtures` attribute
        */
        post: function (match, data) {
            return {
                status: 201
            };
        }
    },
];