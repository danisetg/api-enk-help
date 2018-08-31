// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            database: 'enkarga-help',
            user: 'root',
            password: null,
        }
    },

    production: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            database: 'enkarga-help',
            username: 'root',
            password: null,
        }
    }

};
