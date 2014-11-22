/**
 * @name lib
 */
function init() {
    $('input[type=text]').on('focus', function () {
        $('input[type=text]').removeClass('current');
        $(this).addClass('current');
    });
}
var setAction = function (e) {
    var val = $(e.target).val();
    $('.current').parent().find('.action').text(val);
};

var setOperand = function (e) {
    var val = $(e.target).val();
    $('.current').next('.operand').text(val);
};

$('#plus').on('click', setAction);
$('#minus').on('click', setAction);
$('#x').on('click', setOperand);
$('#y').on('click', setOperand);

init();