const btnMenu = document.querySelector('.menu')
const btnClose = document.querySelector('.menu-close')
const navList = document.querySelector('.menu-rps')
const listItem = document.querySelectorAll('.menu-rps li')

function handleMenu(){
    btnMenu.onclick = ()=>{
        navList.classList.add('open')
    }
    btnClose.onclick = ()=>{
        navList.classList.remove('open')
    }
    for(var i = 0; i < listItem.length ; i++){
        listItem[i].onclick = ()=>{
            setTimeout(()=>{
                navList.classList.remove('open')
            }, 200)
        }
    }

}
handleMenu()