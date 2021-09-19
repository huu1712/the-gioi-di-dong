const itemMenu = document.querySelectorAll('.menu-item')

itemMenu.forEach(function (item) {
    //cách 1
    // item.addEventListener("click", function () {
    //     itemMenu.forEach(function (item) {
    //         item.classList.remove('active')
    //     })
    //     this.classList.add('active')
    // })
    //cách 2
    item.addEventListener("click", function () {
        [...item.parentElement.children].forEach(sib => sib.classList.remove('active'))
        item.classList.add('active')
    })
})
