(function( $ ){

    $.fn.CODLetters = function(string, options) {  

        // Create some defaults, extending them with any options that were provided
        var settings = $.extend( {
            'color'         : '#000',
            'background-color' : '#FFF'
        }, options);
    

        return this.each(function() {

            var target = $(this);
 
            var len = string.length;
            var output = '';

            var i = 0; 

            function myLoop () {   
                setTimeout(function () {
                    var letter = string[i];
                    output += letter;
                    target.html(output);
                    i++;                   
                    if (i < len) {         
                        myLoop();            
                    }                      
                }, 300)
            }

            myLoop();                     
            
        });

    }; //end function

})( jQuery );

//calling the function
//$('#CODLetters').CODLetters('Call of Duty Letters');
