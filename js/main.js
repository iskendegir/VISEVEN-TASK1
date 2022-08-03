var searchFlag = true;
var menuFlag = true;

function openSearch() {
    var search = document.getElementById('searchInput');

    if (searchFlag) {
        search.classList.add("search-open");
        searchFlag = false;
    }
    else {
        search.classList.remove("search-open");
        searchFlag = true;
    }
}

function openMenu() {
    var menu = document.getElementById('navigation');
    var body = document.getElementsByTagName('body')[0];

    if (menuFlag) {
        menu.classList.add("menu-open");
        body.classList.add("oh");
        menuFlag = false;
    }
    else {
        menu.classList.remove("menu-open");
        body.classList.remove("oh");
        menuFlag = true;
    }
}
