$(document).ready(function(){
    var inputs = $("input[type='text']");
    var rawr = 1;

    $('#price_mov, #min, #max, #plot, #pred').on('click', function(){
        var $pm_Check  = $('#price_mov').is(':checked');
        var $min_Check  = $('#min').is(':checked');
        var $max_Check  = $('#max').is(':checked');
        var $plot_Check  = $('#plot').is(':checked');
        var $pred_Check = $('#pred').is(':checked'); 
        var num_datetime = ('.date_time').length;
        while(rawr<2){
            if($pm_Check || $min_Check || $max_Check || $plot_Check){
                $('.date_time').clone().appendTo('.date_time_main');
                rawr+=1;
            }
        }
        if (rawr = 2){
            if (($pred_Check == 1) && (($pm_Check || $min_Check || $max_Check || $plot_Check)== 0)){
                rawr = 1; 
                $('date_time').slice(1,2).remove();
            }
            if(($pred_Check || $pm_Check || $min_Check || $max_Check || $plot_Check)== 0){
                rawr = 1;
                $('date_time').slice(1,2).remove();
            }
        }
    });

    $.each(inputs, function (i, obj) {
        $(obj).val($(obj).attr('data-placeholder'));
        $(obj).on('focus', function () {
            if ($(this).val() == $(this).attr('data-placeholder')) {
                $(this).val('');
            }
        });
        $(obj).on('blur', function () {
            if ($(this).val() == '') {
                $(this).val($(this).attr('data-placeholder'));
            }
        });
    });
})