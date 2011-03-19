var UI = function() {};

UI.init = function() {
    $("input").each(function(){
        $(this).focus(function(){
            $(this).addClass("focus");
        });
        $(this).blur(function(){
            $(this).removeClass("focus");
        });
    });

	//make HTML5 placeholders work in non supportive browsers
	$("input[placeholder]").each(function(){
    	if($(this).val()==""){
      		$(this).addClass("placeholder");
      		$(this).val($(this).attr("placeholder"));
      		$(this).focus(function(){
        		if($(this).val()==$(this).attr("placeholder")) $(this).val("");
        		$(this).removeClass("placeholder");
     	 	});
	        $(this).blur(function() {
        		if($(this).val()=="") {
	   				$(this).addClass("placeholder");
           			$(this).val($(this).attr("placeholder"));
        		}
        	});
    	}
	});

    $('form').submit(function(evt){
        $('input[placeholder]', this).each(function(){
		    if($(this).attr("placeholder") == $(this).val()) {
                $(this).val('');
    	    }
	    });
    });
	
    
    $(".form_toggle input").click(function() {                                   
        if ($(this).attr("type") == "radio") {                                  
            $("input[name=" + $(this).attr("name") + "]").parents().removeClass("selected");
        }
        if ($(this).attr("checked")) {
            $(this).parent().addClass("selected");
        } else {                                  
            $(this).parent().removeClass("selected");
        }
    });
};