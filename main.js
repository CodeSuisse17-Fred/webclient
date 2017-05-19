$(document).ready(function(){
    var inputs = $("input[type='text']");
    var rawr = 1;

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