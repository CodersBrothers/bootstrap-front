define(['config', 'console', 'ajax'], function(config, console, ajax){

    var endpoint = 'auth/';


    /**
     * CONECTARSE A LA PLATAFORMA
     *
     * @param {String} email El correo con el que conectarse
     * @param {String} password La contraseña con la que conectarse
     * @param {Function} successCallback La función callback que se ejecuta si sale correcto
     * @param {Function} errorCallback La función callback que se ejecuta si falla
     */
    function login(email, password, successCallback, errorCallback){

        var params = {
                email: email,
                password: password,
                platformId: config.platformId
            };

        // Ampliamos el endpoint
        var url = endpoint + 'login/';

        // Hacemos la llamada
        ajax.create(url, params, successCallback, errorCallback);

    }

    /**
     * DESCONECTAR DE LA PLATAFORMA
     *
     * @param {Function} successCallback La función callback que se ejecuta si sale correcto
     * @param {Function} errorCallback La función callback que se ejecuta si falla
     */
    function logout(successCallback, errorCallback){

        // Ampliamos el endpoint
        var url = endpoint + 'logout/';

        // Hacemos la llamada
        ajax.create(url, {}, successCallback, errorCallback);

    }

    // Publicamos métodos
    return {
        login: login,
        logout: logout
    }

});