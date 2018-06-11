if (process.env.NODE_ENV === 'production'){

    module.exports = {

        host :  'https://',
        server: {
            port: process.env.NODE_APP_INSTANCE || 3003
        },
        app: {
            name: 'myTestProj'
        },
        database: {
            'master': {
                host: '',
                user: '',
                password: '',
                port: '',
                database: '',
                connectionLimit: 10
            },
            'slave': {
                host: '',
                user: '',
                password: '',
                port: '',
                database: '',
                connectionLimit: 15
            }
        }
    }
} else if (process.env.NODE_ENV === 'testing'){
    module.exports = {
        host :  'http://',

        server: {
            port: process.env.NODE_APP_INSTANCE || 3003
        },
        app: {
            name: 'myTestProj'
        },
        database: {
            'master': {
                host: '',
                user: '',
                password: '',
                port: '',
                database: '',
                connectionLimit: 20
            },
            'slave': {
                host: '',
                user: '',
                password: '',
                port: '',
                database: '',
                connectionLimit: 20
            }
        }
    }
} else {
    module.exports = {
        host : 'http://',

        server: {
            port: process.env.NODE_APP_INSTANCE || 3003
        },
        app: {
            name: 'myTestProj'
        },
        database: {
            'master': {
                host: '',
                user: '',
                password: '',
                port: '',
                database: '',
                connectionLimit: 10
            },
            'slave': {
                host: '',
                user: '',
                password: '',
                port: '',
                database: '',
                connectionLimit: 10
            }
        }
    }
}



