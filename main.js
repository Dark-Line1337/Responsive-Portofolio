const phone_navbar_container = document.getElementById("phone-navbar-container")

function phone_open_navbar() {
    phone_navbar_container.setAttribute('style' , 'display:block !important');
    phone_navbar_container.style.zIndex = 99999999;
}

function close_phone_navbar() {
    phone_navbar_container.style.display = "none";
    phone_navbar_container.style.zIndex = -1;
}