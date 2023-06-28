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

function onFormSubmit(e){
    e.preventDefault();
    const email = $("#email")
    const subject = $("#subject")
    const message = $("#message")

    if(!$(email).val()){
        alert("Tuliskan Email Anda !! ")
    } else if(!$(subject).val()){
        alert("Subject Harus Diisi !! ")
    } else if (!$(message).val()){
        alert("Message Tidak Boleh Kosong!!!")
    } else {
        alert("Form Terkirim")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}