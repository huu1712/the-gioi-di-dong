const itemMenu = document.querySelectorAll('.menu-item')

itemMenu.forEach(function (item) {
    item.addEventListener("click", function () {
        itemMenu.forEach(function (item) {
            item.classList.remove('active')
        })
        this.classList.add('active')
    })
})
