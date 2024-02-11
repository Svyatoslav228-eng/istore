"use strict";
// создание элементов корзины из localStorage 
function PushBasketOrCompInfInLocStor(localStorage_key, basketCounter, footer_visual_block, parent_block) {
    let getBasketPhonesInf = localStorage.getItem(localStorage_key);
    parent_block.innerText = '';
    let parsedBasketPhonesInf = JSON.parse(getBasketPhonesInf);
    if (basketCounter.classList.contains('hide'))
        basketCounter.classList.remove('hide');
    basketCounter.innerText = parsedBasketPhonesInf.length;
    for (let k = 0; k < parsedBasketPhonesInf.length; k++) {
        let obj = parsedBasketPhonesInf[k];
        CreateBusketChoosenPhoneInf(obj['picture'], obj['memory'], obj['color'], obj['price'], obj['model'], parent_block);
    }
    if (footer_visual_block.classList.contains('hide'))
        footer_visual_block.classList.remove('hide');
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// если имеется ключ данных о корзине в localStorage, то создаем данные корзины
// функция для заполнения полей корзины для определенного устройства, если мобильное устройства (это проверяется чуть ниже), тогда прилетат свои параметры
// ежели пк, то свои, соответственно
function PushBasketDataMobOrPc(compation_device_block, price_block_adder, total_price_block, basketCounter) {
    if ('basket_phones' in localStorage) {
        // этот checker сделан для того, чтобы была возможность зайди в цикл удаления элементов
        let just_checker = 1;
        localStorage.setItem('number_of_goods_in_basket', `${just_checker}`);
        let parent_comp_phone_inf = compation_device_block.querySelector('.compation_text');
        parent_comp_phone_inf.innerText = '';
        PushBasketOrCompInfInLocStor('basket_phones', basketCounter, price_block_adder, parent_comp_phone_inf);
        total_price_block.innerText = `${localStorage.getItem('total_price')} BYN`;
    }
    else {
        let inf_to_del = compation_device_block.querySelector('.compation_text');
        inf_to_del.innerText = '';
        IfEmptyBasketOrCompLocStor(inf_to_del, 'Ваша корзина пуста', price_block_adder, basketCounter);
    }
}
function PushComparisonMobCounter() {
    let comparison_mobile_counter = document.querySelector('.comparison_mobile_counter');
    let comparison_array_length = JSON.parse(localStorage.getItem('comparison_basket_phones'));
    if (comparison_array_length) {
        comparison_mobile_counter.style.display = 'block';
        comparison_mobile_counter.innerText = `${comparison_array_length.length}`;
    }
}
// если в localStorage пуст, то виртуально создаем надпись об пустоте того или иного модального окна
// (решил побаловаться гежериками :) )
function IfEmptyBasketOrCompLocStor(visual_counter_elem, warning_text, footer_visual_block, visualCounterToHide) {
    let p_text = document.createElement('div');
    p_text.setAttribute('class', 'empty_block');
    p_text.innerText = warning_text;
    visual_counter_elem.appendChild(p_text);
    if (!footer_visual_block.classList.contains('hide'))
        footer_visual_block.classList.add('hide');
    if (visualCounterToHide) {
        if (!visualCounterToHide.classList.contains('hide'))
            visualCounterToHide.classList.add('hide');
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
