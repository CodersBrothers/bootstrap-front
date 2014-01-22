define(['config', 'console', 'i18next'], function(config, console, i18n){

    var languageStarted = false;

    /**
     * INICIAR i18n
     *
     * @param {String} namespace El namespace
     * @param {Function} callback La función callback
     */
    function start(namespace, callback){

        // Aplicamos el namespace
        config.i18next.ns = namespace;

        // Iniciamos
        i18n.init(config.i18next, function(){
            languageStarted = true;
            callback();
        });
    }

    /**
     * CARGAR UN IDIOMA
     *
     * @param {String} lang El idioma
     * @param {Function} callback la función callback
     */
    function setLang(lang, callback){
        i18n.setLng(lang, callback);
    }


    /**
     * CARGAR UN NAMESPACE
     *
     * @param {String} namespace El namespace
     * @param {Function} callback La función callback
     */
    function loadNamespace(namespace, callback){
        if(!languageStarted){
            start(namespace, callback);
        }else{
            i18n.loadNamespace(namespace, callback);
        }
    }

    return {
        start: start,
        setLang: setLang,
        loadNamespace: loadNamespace
    }

});
