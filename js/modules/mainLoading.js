define(['console', 'jquery'], function(config, $){

    /**
     * BORRAMOS EL LOADING INICIAL
     */
    function remove(){
        $('#mainLoading').remove();
    }

    return {
        remove: remove
    }

});