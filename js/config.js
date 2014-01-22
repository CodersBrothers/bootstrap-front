define({
    debug: true,
    serverUrl: 'http://localhost:3000/',
    apiUrl: 'api/v1/whitelabel/',
    name: 'WidPlay',
    platformId: '52850b2261ed6b3765000016',
    user: {
        lang: 'es_ES'
    },
    i18next: {
        resGetPath: 'modules/__ns__/locales/__lng__.json',
        lang: 'esES',
        //preload: ['esES', 'enUS'],
        //namespaces: ['mainLoading', 'test'],
        //ns: 'mainLoading',
        //getAsync: false,
        fallbackLng: 'esES',
        fallbackLng: false,
        useCookie: true,
        detectLngFromHeaders: false,
        debug: true,
        //useLocalStorage: true
    },
    requirejs: {
        baseUrl: 'js/kernel/',
        paths: {

            // Librerías
            jquery: '../libs/jquery-2.0.3.min',
            handlebars: '../libs/handlebars-v1.3.0',
            i18next: '../libs/i18next.amd.withJQuery-1.7.1.min',
            underscore: '../libs/underscore-min',

            // Cosas de core
            ajax: 'ajax',
            console: 'console',
            template: 'template',
            module: 'module',

            // Modulos
            mMainLoading: '../modules/mainLoading',

            // Casos de uso
            uLogin: '../useCases/login'

        },
        shim: {
            underscore: {
                exports: '_'
            },
            handlebars: {
                exports: 'Handlebars'
            }
        }
    }
});