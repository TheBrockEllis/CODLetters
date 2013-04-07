CODLetters.js is a small jQuery library for creating a Call of Duty like animation for a string of words.

Useage:

Simply include the jQuery library and CODLetters.js in your file, like so:

<script src="jquery.js" type="text/javascript"></script>
<script src="CODLetters.js" type="text/javascript"></script>

Then target a DOM element on your pagei and feed it a string to animate, like so:

$('#your-selected-div').CODLetters("All your base are belong to us!");

The library has parameters that can be customized:

$('#your-selected-div').CODLetters("Capture the objective!", {
    "size" : "34px", //size in pixels of the animated text
    "delay" : "500", //delay in miliseconds between animations
    "color" : "#B0B0B0" //color of text      
});



