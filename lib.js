/**
 * @name lib
 */

/**
 * Действия
 * @type {+|-}
 */
var actions;

/**
 * Объект хранящий числа системы уравнений. Действия и X и Y не учитываются
 *
 * @example
 * | 11 + 12 = 13
 * |
 * | 21 - 22 = 23
 *
 * @type {{11: number, 12: number, 13: number, 21: number, 22: number, 23: number}}
 */
var nums = {11:0, 12:0, 13:0, 21:0, 22:0, 23:0};

/**
 * Инициализирует приложение
 */
function init() {
    // при клике в поле будем ставить класс current чтобы знать где пользователь счас пишет
    $('input[type=text]').on('focus', function () {
        // убираем со всех инпутов в том числе и где в прошлый раз писал
        $('input[type=text]').removeClass('current');

        // ставим класс к текущему инпуту
        $(this).addClass('current');
    });

    // ставим курсор в первое поле
    $('input[type=text]').eq(0).focus();
}

/**
 * Устанавливает знак + или - после поля в котором пишем
 * @param e
 */
var setAction = function (e) {
    // получаем значение из кнопки
    var val = $(e.target).val();

    // cтавим в блок с классом action
    $('.current').parent().find('.action').text(val);
};

/**
 * Читает и сохраняет числа что навводил пользователь
 */
function parseNums() {
    $.each(nums, function (i, num) {
        var row = Math.floor(i / 10) - 1;
        summand = $('.equation').eq(row).children('.summand').eq((i % 10) - 1).val();
        nums[i] = summand;
    });
}

/**
 * Проверяет не введены ли буквы
 * @returns {Boolean}
 */
function validate() {
    return true;
}

/**
 * Читает и сохраняет матем.действия кот ввел пользователь
 */
function parseActions() {
    actions = {
        0:$('.equation').eq(0).find('.action').text(),
        1:$('.equation').eq(1).find('.action').text()
    };
}

/**
 * Установка реакции на клик плюс
 */
$('#plus').on('click', setAction);

/**
 * Установка реакции на клик минус
 */
$('#minus').on('click', setAction);

//$('#x').on('click', setOperand);
//$('#y').on('click', setOperand);

/**
 * Рассчет системы уравнений
 */
$('#calc').on('click', function () {
    if(validate()) {
        parseNums();
        parseActions();
        console.log("nums = ", nums);
        console.log("act = ", actions);

        try {
            var x = (nums['13'] * nums['22'] - nums['23'] * nums['12']) /
                (nums['11'] * nums['22'] - nums['21'] * nums['12']);
        } catch (e) {
            console.log("e = ", e);
        }

        try {
            var y = (nums['11'] * nums['23'] - nums['21'] * nums['13']) /
                (nums['11'] * nums['22'] - nums['21'] * nums['12']);
        } catch (e) {
            console.log("e = ", e);
        }
        console.log("x = ", x);
        console.log("y = ", y);
    }
});

init();
