////////////////MENU//////////////////////
  function verMenu(){
       document.getElementById('menu').classList.toggle('verMenu');
   }

   var menu = document.getElementById('menu');
   menu.addEventListener('touchstart',toco,true);
   menu.addEventListener('touchmove',mover,true);
   menu.addEventListener('touchend',fin,true);

   function toco(event){
    toqueInicialX = event.targetTouches[0].pageX;
   }


   function mover(event){
    toque = event.targetTouches[0];
    menu.style.transition = "0s all";
    
    
    anchoMenu = document.querySelector('#body').offsetWidth;
    
    desplazamiento= toqueInicialX-toque.pageX;

    if(toque.pageX < anchoMenu){
        menu.style.marginLeft ="-"+desplazamiento+"px";
    }

   }

   function fin (){
    menu.style.transition = ".3s all";
    
    if(toque.pageX < 150){
        menu.classList.toggle('verMenu');
        toque="";
    }
    menu.style.marginLeft="0px";

   }
   ////////////////MENU//////////////////////