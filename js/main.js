require(['config'], function(config){

    // Aplicamos la config
    requirejs.config(config.requirejs);

    // Cargamos todos los useCases
    require(['console', 'language', 'docker', 'jquery', 'i18next'], function(console, language, docker, $, i18n){

        //language.start(function(){

            docker.get('mainLoading', 'main', {}, function(html){

                $('body').append(html);
                console.log('-----------------------------------------');

                setTimeout(function(){

                    docker.get('test', 'main', {}, function(html){

                        console.log('-----------------------------------------');
                        $('body').append(html);
                        $("#test").remove();

                        setTimeout(function(){

                            $('body').i18n();
                            //console.log(i18n.t("test:child", { count: 0 }));
                            //console.log(i18n.t("test:child", { count: 1 }));

                            i18n.setLng('enUS', function(){

                                $('body').i18n();

                                /*
                                console.log('-----------------------------------------');
                                $('body').i18n();

                                setTimeout(function(){

                                    i18n.setLng('esES', function(){

                                        $('body').i18n();
                                        console.log('-----------------------------------------');
                                        //console.log(i18n.t("loading"));
                                        //console.log(i18n.t("mainLoading:loading"));
                                        //console.log(i18n.t("test:loading"));

                                    });

                                }, 2000);
                                */

                            });

                        }, 2000);

                    });

                }, 2000);

            });

        //});

    });
});



