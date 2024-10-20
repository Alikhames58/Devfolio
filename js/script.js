// Nav
let list = document.querySelectorAll(".navbar-nav .nav-link");
list.forEach( el => {
    el.addEventListener("click" , function(){
        list.forEach(li => {
            li.classList.remove("active")
        })
        el.classList.add("active")
    })
})