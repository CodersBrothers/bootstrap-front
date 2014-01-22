define(['config'], function(config){

    // Cacheamos el debug
    var debug = config.debug;

    /**
     * MENSAJE POR LA CONSOLA
     *
     * @param {String} message El mensaje a devolver por la consola
     */
    function log(message){
        if(debug){
            console.log(message);
        }
    }

    /**
     * PARA HACER UN TEST DE VELOCIDAD
     *
     * @param {String} title El titulo del test
     * @param {Number} times El titulo del test
     * @param {Function} fnCheck La función a testear
     * @param {Function} callback La función a testear
     */
    function checkTime(title, times, fnCheck, callback){

        if(debug){

            // Iniciamos la monitorización del test
            console.time(title);

            // Ejecutamos la función las veces que ha pedido
            for (var i = 0; i < times; i++) {
                fnCheck();
            }

            // Terminamos la monitorización del test
            console.timeEnd(title);

            // Ejecutamos la función final
            callback();

        }

    }

    // Exportamos los métodos
    return {
        log: log,
        checkTime: checkTime
    };

});