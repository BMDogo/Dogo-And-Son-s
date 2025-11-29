const showSider = document.getElementById('showSide');
const siderBar = document.getElementById('sidebar');
const closeSider = document.getElementById('closeSide')
showSider.addEventListener('click', show);
function show(){
    siderBar.classList.toggle('show');
}
closeSider.addEventListener('click', close);
function close(){
    siderBar.classList.remove('show');
}