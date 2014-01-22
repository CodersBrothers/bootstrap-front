define(['config', 'console', 'jquery'], function(config, console, $){

    var hash;

    /**
     * LLAMADA
     *
     * @param {String} method El tipo de llamada a hacer
     * @param {String} endpoint El endpoint donde llamar
     * @param {Object} params Los parámetros detallados
     * @param {Function} successCallback La función callback a ejecutar si es correcto
     * @param {Function} errorCallback La función callback a ejecutar si ocurre algún problema
     */
    function call(method, endpoint, params, successCallback, errorCallback){

        // Url a la que llamar
        var url = config.serverUrl + config.apiUrl + endpoint;

        // Añadimos el hash si lo necesita
        params = addHashToParams(params);

        // Llamada
        $.ajax({
            type: method,
            url: url,
            data: params,
            error: errorCallback,
            success: successCallback
        });
    }

    /**
     * AÑADE EL HASH A LOS PARÁMETROS
     *
     * @params {Object} params Los parámetros
     */
    function addHashToParams(params){
        if(hash){
            params.hash = hash;
        }
        return params;
    }

    /**
     * GUARDA EL HASH
     * Esto solo será llamado desde el método de login
     *
     * @param {String} hashToSave La cadena a guardarse
     */
    function setHash(hashToSave){
        hash = hashToSave;
    }


    /**
     * CREAR
     *
     * @param {String} endpoint El endpoint donde llamar
     * @param {Object} params Los parámetros detallados
     * @param {Function} successCallback La función callback a ejecutar si es correcto
     * @param {Function} errorCallback La función callback a ejecutar si ocurre algún problema
     */
    function create(endpoint, params, successCallback, errorCallback){
        call('POST', endpoint, params, successCallback, errorCallback);
    }

    /**
     * LEER
     *
     * @param {String} endpoint El endpoint donde llamar
     * @param {Object} params Los parámetros detallados
     * @param {Function} successCallback La función callback a ejecutar si es correcto
     * @param {Function} errorCallback La función callback a ejecutar si ocurre algún problema
     */
    function read(endpoint, params, successCallback, errorCallback){
        call('GET', endpoint, params, successCallback, errorCallback);
    }

    /**
     * ACTUALIZAR
     *
     * @param {String} endpoint El endpoint donde llamar
     * @param {Object} params Los parámetros detallados
     * @param {Function} successCallback La función callback a ejecutar si es correcto
     * @param {Function} errorCallback La función callback a ejecutar si ocurre algún problema
     */
    function update(endpoint, params, successCallback, errorCallback){
        call('UPDATE', endpoint, params, successCallback, errorCallback);
    }

    /**
     * BORRAR
     *
     * @param {String} endpoint El endpoint donde llamar
     * @param {Object} params Los parámetros detallados
     * @param {Function} successCallback La función callback a ejecutar si es correcto
     * @param {Function} errorCallback La función callback a ejecutar si ocurre algún problema
     */
    function remove(endpoint, params, successCallback, errorCallback){
        call('DELETE', endpoint, params, successCallback, errorCallback);
    }

    // Métodos públicos
    return {
        setHash: setHash,
        create: create,
        read: read,
        update: update,
        remove: remove
    };

});