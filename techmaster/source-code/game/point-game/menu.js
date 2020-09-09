const btn_play = document.getElementById('btn-play');
const btn_exit = document.getElementById('btn-exit');

const play = document.getElementById('play')
const menu_item = document.getElementById('menu-items');

btn_play.addEventListener('click',function(){
    menu_item.style.height = '120px';
    play.style.display = 'block';
    play.style.display = 'flex';
    play.style.justifyContent = 'center';
})

btn_exit.addEventListener('click', function() {
    play.style.display = 'none';
    menu_item.style.style.height = '100vh';
})