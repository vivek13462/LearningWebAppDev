/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true, camelcase: true */
var main = function () {
    'use strict';

    var addCommentFromInputBox = function () {
        var $newcomment;

        if ($('.comment-input input').val() !== '') {
            $newcomment = $('<p>').text($('.comment-input input').val());
            $newcomment.hide();
            $('.comments').append($newcomment);
            $newcomment.fadeIn();
            $('.comment-input input').val('');
        }
    };
    
    
    
    var addCommentFromInputBoxuser2 = function () {
        var $newcomment;

        if ($('.comment-inputuser2 input').val() !== '') {
            $newcomment = $('<p>').text($('.comment-inputuser2 input').val());
            $newcomment.hide();
            $('.commentsuser2').append($newcomment);
            $newcomment.fadeIn();
            $('.comment-inputuser2 input').val('');
        }
    };
    
    

    $('.comment-input button').on('click', function () {
        addCommentFromInputBox();
    });

    $('.comment-input input').on('keypress', function (event) {
        if (event.keyCode === 13) {
          addCommentFromInputBox();
        }
    });
    
    
        $('.comment-inputuser2 button').on('click', function () {
        addCommentFromInputBoxuser2();
    });

    $('.comment-inputuser2 input').on('keypress', function (event) {
        if (event.keyCode === 13) {
          addCommentFromInputBoxuser2();
        }
    });
    
    
};

$(document).ready(main);
