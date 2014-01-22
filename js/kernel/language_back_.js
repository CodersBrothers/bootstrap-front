define(['console', 'underscore', 'jquery'], function(console, _, $){


    var html = '<div data-i18n="bienvenido"></div>';


    //var html = '<div data-i18n="[title]bienvenido,[tooltip]bienvenido,bienvenido"></div>';
    //replace(html, {bienvenido: 'Wellcome'})
    //"<div data-i18n="[title]bienvenido,[tooltip]bienvenido,bienvenido" title="Wellcome" tooltip="Wellcome">Wellcome</div>"
    function replace(html, i18nValues){

        var $html = $("<p>").append($(html)),
            $element,
            i18nValue,
            i18nValueParts,
            key,
            attr,
            $elements = $html.find('[data-i18n]');

        $.each($elements, function(){
            $element = $(this);
            i18nValue = $element.attr('data-i18n');

            i18nValueParts = i18nValue.split(',');

            i18nValueParts.forEach(function(part){
                part = part.trim();
                attr = part.match(/^\[(.*)\]/);
                if(attr){
                    key = part.replace('[' + attr[1] + ']', '');
                    $element.attr(attr[1], i18nValues[key]);
                }else{
                    switch($element.get(0).tagName){
                        case 'INPUT':
                            switch ($element.attr('type')) {
                                case 'text':
                                    $element.attr('placeholder', i18nValues[part]);
                                    break;
                                case 'button':
                                case 'submit':
                                    $element.attr('value', i18nValues[part]);
                                    break;
                            }
                            break;
                        case 'TEXTAREA':
                            $element.attr('placeholder', i18nValues[part]);
                            break;
                        default:
                            $element.text(i18nValues[part]);
                    }
                }
            });
        });

        return $html.html();

    }



    /**
     * USO
     * Obtenemos el template
     * Lo traducimos
     * Lo guardamos traducido
     * Con handlebars sustituimos las variables
     */

});