/* jshint browser: true, jquery: true, camelcase: true, indent: 2, undef: true, quotmark: single, maxlen: 80, trailing: true, curly: true, eqeqeq: true, forin: true, immed: true, latedef: true, newcap: true, nonew: true, unused: true, strict: true */
var main = function () {
    "use strict";

    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };
    
    
    
    var addCommentFromInputBoxuser2 = function () {
        var $new_comment;

        if ($(".comment-inputuser2 input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-inputuser2 input").val());
            $new_comment.hide();
            $(".commentsuser2").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-inputuser2 input").val("");
        }
    };
    
    

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
          addCommentFromInputBox();
        }
    });
    
    
        $(".comment-inputuser2 button").on("click", function (event) {
        addCommentFromInputBoxuser2();
    });

    $(".comment-inputuser2 input").on("keypress", function (event) {
        if (event.keyCode === 13) {
          addCommentFromInputBoxuser2();
        }
    });
    
    
};

$(document).ready(main);
