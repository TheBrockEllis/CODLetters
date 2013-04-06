(function( $ ){

    $.fn.CODLetters = function(string, options) {  

        // Create some defaults, extending them with any options that were provided
        var settings = $.extend( {
            'color'     : '#000',
            'size'      : '36px',
            'family'    : 'Arial',
            'delay'     : '100'
        }, options);
    

        return this.each(function() {

            var target = $(this);
            target.css("color", settings.color)
                  .css("font-size", settings.size)
                  .css("font-family", settings.family);
 
            var len = string.length;
            var output = '';

            var i = 0; 

            function myLoop () {   
                setTimeout(function () {
                    var letter = string[i];
                    output += letter;

                    var difference = len - output.length;
                    console.log(difference);

                    target.html(output);
                    i++;                   
                    if (i < len) {         
                        myLoop();            
                    }                      
                }, settings.delay)
            }

            myLoop();                     
            
        });

    }; //end function

})( jQuery );

//calling the function
//$('#CODLetters').CODLetters('Call of Duty Letters');
