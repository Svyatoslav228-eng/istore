"use strict";
// adaptation changes
let nav_bar_block = document.querySelector('.navigation_bar');
let nav_bar_to_change = nav_bar_block.childNodes[1];
if (window.innerWidth < 998) {
    nav_bar_to_change.classList.remove('container');
    nav_bar_to_change.classList.add('container-fluid');
}
window.addEventListener('resize', () => {
    if (window.innerWidth < 998) {
        nav_bar_to_change.classList.remove('container');
        nav_bar_to_change.classList.add('container-fluid');
    }
    else if (window.innerWidth > 998) {
        nav_bar_to_change.classList.remove('container-fluid');
        nav_bar_to_change.classList.add('container');
    }
});
let header_ul_list_to_remove = Array.from(document.getElementsByClassName('header_li_set_nav_bar'));
window.addEventListener('resize', () => {
    if (window.innerWidth < 1369) {
        header_ul_list_to_remove[10].style.display = 'none';
        header_ul_list_to_remove[11].style.display = 'none';
        header_ul_list_to_remove[12].style.display = 'none';
    }
    else if (window.innerWidth > 1271) {
        header_ul_list_to_remove[10].style.display = 'block';
        header_ul_list_to_remove[11].style.display = 'block';
        header_ul_list_to_remove[12].style.display = 'block';
    }
});
if (window.innerWidth < 1369) {
    header_ul_list_to_remove[10].style.display = 'none';
    header_ul_list_to_remove[11].style.display = 'none';
    header_ul_list_to_remove[12].style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// добавление разделительной черты между сервисными товарами 
let feature_block = Array.from(document.getElementsByClassName('col-12 col-md-6 col-xl-4'));
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        for (let i = 0; i < feature_block.length; i++)
            feature_block[i].classList.add('splitter_class');
    }
    else {
        for (let i = 0; i < feature_block.length; i++)
            feature_block[i].classList.remove('splitter_class');
    }
});
if (window.innerWidth <= 768) {
    for (let i = 0; i < feature_block.length; i++)
        feature_block[i].classList.add('splitter_class');
}
//////////////////////////////////////////////////////////////////////////////
