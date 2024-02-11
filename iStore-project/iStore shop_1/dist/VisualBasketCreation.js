"use strict";
// busket creating
function CreateBusketChoosenPhoneInf(phone_picture, phone_memory, phone_color, phone_price, phone_model, parent_block) {
    let inner_storage_inf_wrapper = document.createElement('div');
    inner_storage_inf_wrapper.setAttribute('class', 'inner_storage_inf');
    parent_block.appendChild(inner_storage_inf_wrapper);
    let phone_picture_modal_win_wrapper = document.createElement('div');
    phone_picture_modal_win_wrapper.setAttribute('class', 'inner_storage_inf_img_block');
    inner_storage_inf_wrapper.appendChild(phone_picture_modal_win_wrapper);
    let phone_img = document.createElement('img');
    phone_img.src = phone_picture;
    phone_picture_modal_win_wrapper.appendChild(phone_img);
    let phone_inf_modal_win_wrapper = document.createElement('div');
    phone_inf_modal_win_wrapper.setAttribute('class', 'inner_storage_inf_iphone_information');
    inner_storage_inf_wrapper.appendChild(phone_inf_modal_win_wrapper);
    let p_phone_title_name = document.createElement('p');
    p_phone_title_name.setAttribute('class', 'inner_storage_inf_phone_title');
    p_phone_title_name.innerText = `${phone_model}, ${phone_memory}, ${phone_color}`;
    phone_inf_modal_win_wrapper.appendChild(p_phone_title_name);
    let p_phone_ammount = document.createElement('p');
    p_phone_ammount.setAttribute('class', 'inner_storage_inf_amout');
    p_phone_ammount.innerText = `Количество: ${1}`;
    phone_inf_modal_win_wrapper.appendChild(p_phone_ammount);
    let price_div_block = document.createElement('div');
    price_div_block.setAttribute('class', 'inner_storage_inf_price');
    price_div_block.innerText = phone_price;
    phone_inf_modal_win_wrapper.appendChild(price_div_block);
    let remove_from_shopList = document.createElement('button');
    remove_from_shopList.setAttribute('class', 'cancel_buying_block');
    remove_from_shopList.innerHTML = `<svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>`;
    inner_storage_inf_wrapper.appendChild(remove_from_shopList);
}
////////////////////////////////////////////////////////////////////////////////////////////////// 
// visual appearance of basket blocks
function AddVisualBasketsShow(show_products_modal_blocks, classNameToShow) {
    show_products_modal_blocks.classList.add(classNameToShow);
}
function RemoveVisualBasketsShow(index) {
    if (show_products_modal_blocks[index].classList.contains('comp_block_show'))
        show_products_modal_blocks[index].classList.remove('comp_block_show');
    else
        show_products_modal_blocks[index].classList.remove('comp_block_show_2');
}
////////////////////////////////////////////////////////////////////////////////////////
