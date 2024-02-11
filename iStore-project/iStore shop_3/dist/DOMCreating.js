"use strict";
////////////////////////////////DOM creating functions start/////////////////////////////////////////// 
function CreatePhoneCard(phone_name, numberOfStorage, phoneColor, iphone_price, phone_picture) {
    // создание карточки продукта :)
    let catalog_list_wrapper = document.querySelector('.test_block');
    let main_parent_wrapper = document.createElement('div');
    main_parent_wrapper.setAttribute('class', 'product_block');
    catalog_list_wrapper.appendChild(main_parent_wrapper);
    let card_block = document.createElement('div');
    card_block.setAttribute('class', 'card');
    card_block.style.borderRadius = '0px';
    card_block.style.border = 'none';
    card_block.style.borderRight = '1px solid rgba(0, 0, 0, .1)';
    card_block.style.borderBottom = '1px solid rgba(0, 0, 0, .1)';
    main_parent_wrapper.appendChild(card_block);
    let iphone_img_block = document.createElement('div');
    iphone_img_block.setAttribute('class', 'imgBx');
    card_block.appendChild(iphone_img_block);
    let imgs = document.createElement('img');
    imgs.src = phone_picture;
    imgs.style.width = '230px';
    iphone_img_block.appendChild(imgs);
    let content_box = document.createElement('div');
    content_box.setAttribute('class', 'contentBx');
    card_block.appendChild(content_box);
    let h2_text = document.createElement('h2');
    h2_text.style.fontSize = '13.5px';
    h2_text.style.marginBottom = '10px';
    h2_text.textContent = `${phone_name}, ${numberOfStorage} ${phoneColor}`;
    content_box.appendChild(h2_text);
    let phone_price = document.createElement('p');
    phone_price.setAttribute('class', 'price');
    phone_price.textContent = `Цена: ${iphone_price}`;
    content_box.appendChild(phone_price);
    let choose_color_block = document.createElement('div');
    choose_color_block.setAttribute('class', 'color');
    content_box.appendChild(choose_color_block);
    let h3_color_header = document.createElement('h6');
    h3_color_header.style.marginBottom = '0px';
    h3_color_header.textContent = 'Доступные цвета:';
    choose_color_block.appendChild(h3_color_header);
    // available colours gen
    GenSpans(choose_color_block, phone_name);
    let buy_block = document.createElement('div');
    buy_block.setAttribute('class', 'buy_com_like');
    content_box.appendChild(buy_block);
    let comp_btn_create = document.createElement('button');
    comp_btn_create.setAttribute('class', 'comp_btn');
    comp_btn_create.innerHTML = `<svg _ngcontent-jkg-c173="" width="26" height="26" class = "comparesonBtn" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-jkg-c173="" d="M9.15568 21.713L8.05029 25.0097H18.7097L17.6043 21.713H9.15568Z"></path><path _ngcontent-jkg-c173="" d="M0.879883 14.2955C0.879883 16.359 2.565 18.0318 4.64364 18.0318C6.72233 18.0318 8.40739 16.359 8.40739 14.2955H0.879883Z"></path><path _ngcontent-jkg-c173="" d="M18.3525 14.2955C18.3525 16.359 20.0377 18.0318 22.1163 18.0318C24.195 18.0318 25.88 16.359 25.88 14.2955H18.3525Z"></path><path _ngcontent-jkg-c173="" d="M4.64423 8.16788L6.5405 12.6472H8.33046L5.88814 6.87793H12.5564V20.0648H14.2047V6.87793H20.873L18.4307 12.6472H20.2206L22.1168 8.16788L24.013 12.6472H25.8031L22.6629 5.22957H14.2047V3.08544C14.6972 2.80038 15.0289 2.26818 15.0289 1.65812C15.0289 0.747736 14.2909 0.00976562 13.3805 0.00976562C12.4701 0.00976562 11.7322 0.747736 11.7322 1.65812C11.7322 2.26813 12.0638 2.80038 12.5564 3.08544V5.22957H4.09813L0.958008 12.6472H2.74802L4.64423 8.16788Z"></path></svg>`;
    buy_block.appendChild(comp_btn_create);
    let div_buy_wrapper_btn = document.createElement('div');
    div_buy_wrapper_btn.setAttribute('class', 'buy_block');
    buy_block.appendChild(div_buy_wrapper_btn);
    let buy_btn_create = document.createElement('a');
    buy_btn_create.setAttribute('class', 'buy_btn');
    buy_btn_create.innerText = 'В корзину';
    div_buy_wrapper_btn.appendChild(buy_btn_create);
    let like_btn_create = document.createElement('button');
    like_btn_create.setAttribute('id', 'like_btn');
    like_btn_create.innerHTML = `<svg _ngcontent-jkg-c173="" width="27" height="26" class = 'likeBtn' viewBox="0 0 27 26" fill="#bdbdbd" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-jkg-c173="" d="M23.6994 4.0622L23.7044 4.06744L23.7094 4.0726C25.0429 5.42938 25.8797 7.23954 25.8797 9.13058C25.8797 11.052 25.1518 12.8103 23.7972 14.1886L13.4538 24.7129L3.11032 14.1886L3.10524 14.1834L3.10009 14.1783C1.76117 12.8549 1.02783 11.0604 1.02783 9.13058C1.02783 7.20921 1.75572 5.4509 3.11032 4.0726L3.1154 4.06744L3.1204 4.0622C4.4206 2.70035 6.17622 1.96094 8.05706 1.96094C9.77061 1.96094 11.4227 2.61897 12.7418 3.80327L13.4199 4.41206L14.0889 3.79326C15.3548 2.62231 17 1.96094 18.7627 1.96094C20.6435 1.96094 22.3992 2.70035 23.6994 4.0622Z" stroke="#BDBDBD" stroke-width="2"></path></svg>`;
    buy_block.appendChild(like_btn_create);
}
// фукнция создания доступных цветов в карточке продукта (смотрите строение DOM'а карточки, так, возможно, сразу не понятно)
function GenSpans(choose_color_block, phone_name) {
    // параметры:
    // первый - прилетат родитель, в который пихаем спаны
    // воторой - прилает название телефона, к которому в объекте цветов colors_obj мы обращаемся и получаем массив hex значений
    // вот тут собираем массив hex кодов
    let colors_mass = colors_obj[phone_name];
    // создаем столько спанов, сколько цветов в массиве, попутно окрашивая фон спана в нужный цвет
    for (let i = 0; i < colors_mass.length; i++) {
        let span_color_create = document.createElement('span');
        span_color_create.style.background = colors_mass[i];
        choose_color_block.appendChild(span_color_create);
    }
}
// creating color and memory lists
function GenFilterColourSettings(main_filter_block, phone_characts, filter_checker, phone_colors_mass) {
    // так, на счет параметров: 
    // первый параметр - это парамент, в который прилетат родительский блок, в который мы будем пихать нашу инфу
    // второй параметр - параметр, в который прилетает: либо количество памяти (в зависимости от filter_checker, но об этом позже), либо название цвета
    // третий параметр - параметр, в который прилетает булевское значений, которое используется в проверке на 307 строке
    // *описание работы 210 строки*
    // если прилетает true и значение phone_colors_mass не undefined, то заходим и создаем отдельный блок с цветным квадратом (отличие ul листа цвета и памяти заключается в наличии этого цветного квадратика, если не понятно, посмотрите на html странице), после создается текстовая строка с названием цвета 
    // а если же false то создаем просто блок с текстом
    // описывать создание каждого элемента не буду, там свое ветвление
    let li_create = document.createElement('li');
    main_filter_block.appendChild(li_create);
    let content_main_wrapper_div = document.createElement('div');
    content_main_wrapper_div.setAttribute('class', 'content_main_wrapper');
    li_create.appendChild(content_main_wrapper_div);
    let label_create = document.createElement('label');
    label_create.setAttribute('class', 'label_set');
    content_main_wrapper_div.appendChild(label_create);
    let div_checkBox = document.createElement('div');
    div_checkBox.setAttribute('class', 'checkbox_input_wrapper');
    label_create.appendChild(div_checkBox);
    let input_checkBox = document.createElement('input');
    input_checkBox.type = 'checkbox';
    input_checkBox.setAttribute('class', 'checkBoxFilter');
    div_checkBox.appendChild(input_checkBox);
    let color_type_span = document.createElement('span');
    color_type_span.setAttribute('class', 'color_type');
    label_create.appendChild(color_type_span);
    if (filter_checker && phone_colors_mass) {
        let create_color_place_block = document.createElement('div');
        create_color_place_block.setAttribute('class', 'color_place');
        create_color_place_block.style.background = phone_colors_mass;
        color_type_span.appendChild(create_color_place_block);
    }
    let create_text_place_block = document.createElement('div');
    create_text_place_block.setAttribute('class', 'color_name');
    create_text_place_block.innerText = phone_characts;
    color_type_span.appendChild(create_text_place_block);
}
// busket creating
function CreateBusketChoosenPhoneInfCatalog(phone_picture, phone_memory, phone_color, phone_price, phone_model, BasketOrComparison, IfMobile) {
    let main_parent_to_push = Array.from(document.getElementsByClassName('compation_text'));
    let inner_storage_inf_wrapper = document.createElement('div');
    inner_storage_inf_wrapper.setAttribute('class', 'inner_storage_inf');
    // проверка через юнион на то, в какую часть корзин полетит изображение (модальное окно корзины либо в модальное окно сравнения)
    if (IfMobile) {
        let mobile_compation_text_wrapper = document.querySelector('.compation_block_mobile');
        let mobile_basket_block = mobile_compation_text_wrapper.querySelector('.compation_text');
        mobile_basket_block.appendChild(inner_storage_inf_wrapper);
    }
    else {
        if (BasketOrComparison === 'basket')
            main_parent_to_push[1].appendChild(inner_storage_inf_wrapper);
        else
            main_parent_to_push[0].appendChild(inner_storage_inf_wrapper);
    }
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
    if (current_phone_name)
        p_phone_title_name.innerText = `${phone_model}, ${phone_memory}, ${phone_color}`;
    phone_inf_modal_win_wrapper.appendChild(p_phone_title_name);
    let p_phone_ammount = document.createElement('p');
    p_phone_ammount.setAttribute('class', 'inner_storage_inf_amout');
    p_phone_ammount.innerText = `Количество: ${1}`;
    phone_inf_modal_win_wrapper.appendChild(p_phone_ammount);
    let price_div_block = document.createElement('div');
    price_div_block.setAttribute('class', 'inner_storage_inf_price');
    price_div_block.innerText = `${phone_price}`;
    phone_inf_modal_win_wrapper.appendChild(price_div_block);
    let remove_from_shopList = document.createElement('button');
    remove_from_shopList.setAttribute('class', 'cancel_buying_block');
    remove_from_shopList.innerHTML = `<svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>`;
    inner_storage_inf_wrapper.appendChild(remove_from_shopList);
}
////////////////////////////////DOM creating functions end/////////////////////////////////////////// 
////////////////////////////////mobile functions adding start/////////////////////////////////////////// 
// функция, для установки значения счетчика сравнения на мобилке
function PushComparisonMobCounter() {
    let comparison_mobile_counter = document.querySelector('.comparison_mobile_counter');
    let comparison_array_length = JSON.parse(localStorage.getItem('comparison_basket_phones'));
    if (comparison_array_length) {
        comparison_mobile_counter.style.display = 'block';
        comparison_mobile_counter.innerText = `${comparison_array_length.length}`;
    }
}
////////////////////////////////mobile functions adding end///////////////////////////////////////////
