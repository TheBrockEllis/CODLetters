(function( $ ){

    $.fn.CODLetters = function(string, options) {  

        // Create some defaults, extending them with any options that were provided
        var settings = $.extend( {
            'color'         : '#000',
            'background-color' : '#FFF'
        }, options);
    
        return this.each(function() {
 
            var len = string.length;
            var output = '';

            for(var i=0; i < len; i++){
                var letter = string[i];
                output += letter;
                
                //alert(output);
                
                $(this).delay(2000).queue(function(){ 
                    $(this).html(output).dequeue(); 
                });
                
            }
            
        });

    }; //end function

})( jQuery );

//calling the function
//$('#CODLetters').CODLetters('Call of Duty Letters');
