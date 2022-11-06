const arr_links = document.querySelectorAll(".menu_link");
const arr_titles = document.querySelectorAll("h2");
const arr_blocks = document.querySelectorAll(".block");

for (let index = 0; index < arr_links.length; index++){
    arr_links[index].addEventListener("click", function(event) {
        console.log("Клик!");
        for (let index_2 = 0; index_2 < arr_titles.length; index_2++){
            if (arr_links[index].textContent.toLowerCase() == arr_titles[index_2].textContent.toLowerCase()){
                arr_titles[index_2].scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                });
            }
        };
        event.preventDefault();
    });
}

const menuBurger = document.querySelector(".menu_burger");
const headerMenu2 = document.querySelector(".header_menu_2");

menuBurger.addEventListener("click", function(event) {
    console.log("Клик!");
    headerMenu2.classList.toggle("header_menu_2_active");
    headerMenu2.classList.toggle("header_menu_2");
    if (headerMenu2.classList.contains("header_menu_2_active")){
        for (let index = 0; index < arr_blocks.length; index++){
            arr_blocks[index].style.opacity = "0.2";
        }
    };
    if (!headerMenu2.classList.contains("header_menu_2_active")){
        for (let index = 0; index < arr_blocks.length; index++){
            arr_blocks[index].style.opacity = "1";
        }
    }
});

const arr_links_2 = document.querySelectorAll(".header_menu_2_link");

for (let index = 0; index < arr_links_2.length; index++){
    arr_links_2[index].addEventListener("click", function(event) {
        console.log("Клик!");
        headerMenu2.classList.toggle("header_menu_2");
        headerMenu2.classList.toggle("header_menu_2_active");
        for (let index = 0; index < arr_blocks.length; index++){
            arr_blocks[index].style.opacity = "1";
        };
        for (let index_2 = 0; index_2 < arr_titles.length; index_2++){
            if (arr_links_2[index].textContent.toLowerCase() == arr_titles[index_2].textContent.toLowerCase()){
                arr_titles[index_2].scrollIntoView({
                    block: "start",
                    inline: "nearest",
                    behavior: "smooth"
                })
            }
        };
        event.preventDefault();
    })
}
