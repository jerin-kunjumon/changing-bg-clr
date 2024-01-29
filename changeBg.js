let result = document.getElementById("GFG");
 
        function changeColor(color) {
            document.body.style.background = color;
        }
 
        function myFunc(color) {
            changeColor(color);
            result.innerHTML = "Background Color changed";
        }     