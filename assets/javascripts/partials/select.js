$(function() {


    $("select[name='gender']").on('change', function() {
        if ($('#A[value=Man]').is(':selected')) {
          $( ".canvas__value").html('Man looking for a woman');
        //}else if ($('#B[value=https://iamslavic.com]').is(':selected')) {
        }else if ($('#B[value=Woman]').is(':selected')) {
          $( ".canvas__value").html('Woman looking for a man');
        }
    })
    // jQuery("#canvas__select").change(function () {
    //     location.href = jQuery(this).val();
    // })
});
