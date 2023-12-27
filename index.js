document.getElementById('menu-icon').onclick = function(){
    document.getElementById('mobile-menu').style.display = 'flex';
    document.getElementById('stop-scrolling').style.overflow = 'hidden';
    document.getElementById('black-box').style.display = 'block';
    document.getElementById('black-box').style.opacity = '0.5';
}
document.getElementById('menu-icon-closed').onclick = function(){
    document.getElementById('mobile-menu').style.display = 'none';
    document.getElementById('stop-scrolling').style.overflow = 'scroll';
    document.getElementById('black-box').style.display = 'none';
}