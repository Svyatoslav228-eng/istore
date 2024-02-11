"use strict";
var _a, _b, _c;
// modal windows open
let main_parent_block = document.querySelector('.nav_bar_ul_list');
const parent_show_modal_blocks = Array.from(main_parent_block === null || main_parent_block === void 0 ? void 0 : main_parent_block.getElementsByClassName('header_li_set_nav_bar'));
const modal_blocks = Array.from(main_parent_block === null || main_parent_block === void 0 ? void 0 : main_parent_block.getElementsByClassName('modal_menu_window'));
for (let i = 0; i < parent_show_modal_blocks.length; i++) {
    parent_show_modal_blocks[i].addEventListener('mouseover', () => {
        modal_blocks[i].style.display = 'block';
        let get_link = parent_show_modal_blocks[i].childNodes[1];
        get_link.style.color = '#0a84ff';
    });
    parent_show_modal_blocks[i].addEventListener('mouseout', () => {
        modal_blocks[i].style.display = 'none';
        let get_link = parent_show_modal_blocks[i].childNodes[1];
        get_link.style.color = '#a6a5a5';
    });
}
let modalWinIphones = Array.from(document.getElementsByClassName('iphones'));
for (let i = 0; i < modalWinIphones.length - 2; i++) {
    modalWinIphones[i].addEventListener('click', () => GetPhoneNameByClickToText(modalWinIphones[i].innerText));
}
// open/close more inf about shop
let open_more_inf_btn = document.querySelector('.btn_to_visual');
open_more_inf_btn === null || open_more_inf_btn === void 0 ? void 0 : open_more_inf_btn.addEventListener('click', () => {
    let remove_hide_set = document.querySelector('.hiden_inf_block');
    if (remove_hide_set.classList.contains('hide')) {
        remove_hide_set === null || remove_hide_set === void 0 ? void 0 : remove_hide_set.classList.remove('hide');
        let span_text_change = open_more_inf_btn.querySelector('span');
        span_text_change.innerText = 'Свернуть';
    }
    else {
        remove_hide_set === null || remove_hide_set === void 0 ? void 0 : remove_hide_set.classList.add('hide');
        let span_text_change = open_more_inf_btn.querySelector('span');
        span_text_change.innerText = 'Показать полностью';
    }
});
////////////////////////////////////////////////////////////////////////////
// envelope click btn
let parent_envelope_block = document.querySelector('.btn_area');
(_a = document.querySelector('.btn_area')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    let active_block = document.querySelector('.inner_btn_inf_wrapper');
    active_block.style.display === 'block' ? active_block.style.display = 'none' : active_block.style.display = 'block';
});
////////////////////////////////////////////////////////////////////////////
// modal block open to regist
let [personal_account_block, close_personal_accont_block, modal_block_remove_hide, make_dark_background] = [
    document.querySelector('.login_block'),
    document.querySelector('.close_modal_win_btn'),
    document.querySelector('.modal_enter_window_wrapper'),
    document.querySelector('.darker_background')
];
personal_account_block.addEventListener('click', () => {
    make_dark_background.style.opacity = '1';
    modal_block_remove_hide.classList.remove('hide');
});
close_personal_accont_block.addEventListener('click', () => {
    make_dark_background.style.opacity = '0';
    modal_block_remove_hide.classList.add('hide');
});
//////////////////////////////////////////////////////////////////// 
// modal block open to regist on mobile devices
let mobile_registr_block_open = document.querySelector('.open_reg_mobile_modal');
mobile_registr_block_open.addEventListener('click', () => {
    make_dark_background.style.opacity = '1';
    modal_block_remove_hide.classList.remove('hide');
});
// open card inf in modal registr block
let get_btn = document.querySelector('#modal_card_block_open');
get_btn.addEventListener('click', () => {
    let remove_hide_set = document.querySelector('.card_block_wrapper');
    if (remove_hide_set.classList.contains('hide')) {
        remove_hide_set === null || remove_hide_set === void 0 ? void 0 : remove_hide_set.classList.remove('hide');
        let span_text_change = document.querySelector('#open_status');
        span_text_change.innerText = 'Свернуть';
    }
    else {
        remove_hide_set === null || remove_hide_set === void 0 ? void 0 : remove_hide_set.classList.add('hide');
        let span_text_change = document.querySelector('#open_status');
        span_text_change.innerText = 'Ввести данные карты*';
    }
});
////////////////////////////////////////////////////////////////////////////////////////
// close/open search block
let bring_visual_to_search = document.querySelector('.header_search_container');
(_b = document.querySelector('.btn_to_search')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    var _a;
    bring_visual_to_search.style.display = 'block';
    (_a = document.querySelector('.cancel_block')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        bring_visual_to_search.style.display = 'none';
    });
});
(_c = document.querySelector('.mobile_features_icons_search')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    var _a;
    bring_visual_to_search.style.display = 'block';
    (_a = document.querySelector('.cancel_block')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        bring_visual_to_search.style.display = 'none';
    });
});
