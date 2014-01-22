/**
 * SISTEMA QUE SIRVE PARA OBTENER VISTAS Y UNIRLAS A UN MODELO
 */
define(['console', 'i18next', 'handlebars', 'jquery'], function(console, i18n, Handlebars, $){

    // Helper que integra i18next con Handlebars
    // Uso <div>{{t("my.key")}}</div>
    Handlebars.registerHelper('t', function(i18n_key) {
        var result = i18n.t(i18n_key);
        return new Handlebars.SafeString(result);
    });


    /**
     * OBTENER EL HTML
     *
     * @param {String} src La ruta de la vista
     * @param {Function} callback La función  callback a ejecutar
     */
    function get(src, callback){
        $.get(src, callback);
    }

    /**
     * UNIR EL VISTA CON DATOS
     *
     * @param {String} source El html usdo como vista
     * @param {Object} context Los datos que ha de unir al html vista
     */
    function compile(source, context){
        var template = Handlebars.compile(source);
        var html = template(context);
        return $(html).i18n();
    }

    /**
     * OBTENER Y COMPILAR UN TEMPLATE
     *
     * @param {String} src La ruta del fichero
     * @param {Object} context El contexto (modelo) con el que mezclar la vista
     * @param {Function} callback La función callback a ejecutar
     */
    function getAndCompile(src, context, callback){

        // Obtenemos el template
        get(src, function(source){

            // Compilamos
            var compiledHtml = compile(source, context);

            // Devolvemos
            callback(compiledHtml);

        });

    }

    // Métodos públicos
    return {
        get: get,
        compile: compile,
        getAndCompile: getAndCompile
    }
});