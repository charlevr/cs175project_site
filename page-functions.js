/*
Sources:
https://www.w3schools.com/howto/howto_js_active_element.asp
https://www.w3schools.com/css/css_display_visibility.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
http://thenewcode.com/630/Fade-In-Elements-Sequentially-with-CSS
*/

var btnContainer = document.getElementById("btns");
var buttons = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < buttons.length; i++)
{
    //console.log(buttons[i].textContent);
    buttons[i].addEventListener(
        "click",
        function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", " hide");

            var newPage = document.getElementById(this.innerText);
            newPage.className = newPage.className.replace(" hide", " active");
        }
    );
    
    buttons[i].addEventListener(
        "click",
        function() {
            var currentbtn = document.getElementsByClassName("btn-active");
            currentbtn[0].className = currentbtn[0].className.replace(" btn-active", "");

            this.className += " btn-active";
        }
    )
}