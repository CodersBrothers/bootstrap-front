require(['console', 'auth/auth', 'jquery', 'mMainLoading'], function(console, auth, $, mainLoading){

    /**
     * CONECTAR
     */
    function login(){

        var email = 'qweqwe@gmail.com',
            password = 'qweqweqw';
        auth.login(email, password, function(){

            // Borramos la pantalla de loading
            mainLoading.remove();

            console.log('CONECTADO');

        }, function(){
            console.log('ERROR!!');
        });

    }

    //$('#login').on('click', login);
    login();

});