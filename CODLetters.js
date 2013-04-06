(function( $ ){

    $.fn.CODLetters = function(input, options) {  

        // Create some defaults, extending them with any options that were provided
        var settings = $.extend( {
            'color'     : '#000',
            'size'      : '36px',
            'family'    : 'Arial',
            'delay'     : '200'
        }, options);
    

        return this.each(function() {

            var target = $(this);
            target.css("color", settings.color)
                  .css("font-size", settings.size)
                  .css("font-family", settings.family);
 
            var len = input.length;
            var partial = '', 
                output = '';

            var i = 0; 

            function myLoop () {   
                setTimeout(function () {
                    var letter = input[i]; //works fine 
                    partial = partial + letter; //works fine 
                   
                    var d = 0;
                    var random = '';
                    var diff = len - partial.length;
                    while(d < diff){
                        random += String.fromCharCode(65 + Math.floor(Math.random()*53) );
                        d++;
                    }

                    var output = partial + random;
                
                    target.html(output);
                    
                    var random = '';
                    var output = '';
                    
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
