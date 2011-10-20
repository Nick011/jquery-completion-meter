/**
 * jQuery plugin: Percent Completed Meter
 * Created by Nick Hagianis
 * Date: 1/28/11
 *
 * You are free to use, modify, and redistribute any and all parts of this code as you see fit.
 * There is no warranty, and I'm not liable if it breaks or breaks any other code in your project.
 */

(function($){
    $.fn.percentComplete = function(selector, color, size){
        return this.each(function(){
            var fieldCount = $(selector).not(":radio").length;
            var names = [];
            $(selector+":radio").each(function(){
		var n = $(this).attr('name');
                if(names.indexOf(n) < 0){
                    names.push(n);
                }
            });
            fieldCount = fieldCount + names.length;
            if(fieldCount){
                var completeCount = $(selector+"[value!='']").not(":checkbox").not(":radio").length + $(selector+":checked").length;
                var percentComplete = Math.round((completeCount / fieldCount) * 100);
                $(this).empty().append(percentComplete + "% Complete<br><div><div>&nbsp;</div></div>").children("div").css({"width": size, "border": "1px solid"+color}).children("div").css({"width": percentComplete+"%", "background-color":color});
            }
        });
    };
})(jQuery);
