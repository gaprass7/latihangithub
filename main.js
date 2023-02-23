function toggleDetail(e){
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-ex-item")
    const detail = $(item).children(".about-ex-item-detail")

    $(detail).slideToggle()
}