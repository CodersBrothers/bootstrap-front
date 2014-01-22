/**
 * SISTEMA ENCARGADO DE GESTIONAR LOS MÓDULOS
 */
define(['config', 'console', 'template', 'language'], function(config, console, template, language){

    /**
     * OBTIENE UN TEMPLATE DE UN MODULO Y LO RENDERIZA
     *
     * @param {String} moduleName El nombre del módulo
     * @param {String} viewName El nombre de la vista
     * @param {Object} context El objeto a modo modelo para unir con la vista
     * @param {Function} callback La función callback a ejecutar
     */
    function get(moduleName, viewName, context, callback){

        // Cargamos el idioma
        language.loadNamespace(moduleName, function(){

            // Obtenemos la vista
            var src = 'modules/' + moduleName + '/views/' + viewName + '.html';
            template.getAndCompile(src, context, callback);

        });

    }

    // Métodos públicos
    return {
        get: get
    }

});