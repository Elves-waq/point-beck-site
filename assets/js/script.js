
function menuToggle() {
    var menu = document.getElementById("menu-mobile");
   if (menu.style.display == 'none' || menu.style.display == ''){
        menu.style.display = 'block';          
       }else{
           menu.style.display = 'none';
       }
}