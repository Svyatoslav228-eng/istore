"use strict";
// удаление элементов массива товаров корзины, либо товаров из блока сранения товаров
// тут тоже :)
function RemovingElFromBasketOrComprBasket(parentWithCancelBtns, visual_counter, LocalStorageBasketsUsed, BasketsUsed, typeOfFooterBlock, parent_block, price_parent_block) {
    // при наведении на иконку корзины, кроме выподающего модального окна, инициализируются "крестики" удаления элемента из корзины
    let [cancel_btns, inf_to_del] = [
        Array.from(parentWithCancelBtns.getElementsByClassName('cancel_buying_block')),
        // получаем блок корзины с информацией, где нужно удалить информацию
        parentWithCancelBtns.querySelector('.compation_text')
    ];
    for (let j = 0; j < cancel_btns.length; j++) {
        cancel_btns[j].addEventListener('click', () => {
            // после клика на "крестик" получаем информацию из localStorage
            let getBasketPhonesInf = localStorage.getItem(LocalStorageBasketsUsed);
            inf_to_del.innerText = '';
            let parsedBasketPhonesInf = JSON.parse(getBasketPhonesInf);
            if (BasketsUsed === 'basket') {
                // получаем цену телефона, на который нажал пользователь (обращаемся к массиву объектов по индексу и по ключу "price" берем число, попутно сжимая его с помощью RegExp)
                let getPrice = parseInt(parsedBasketPhonesInf[j]['price'].replace(/\s+/g, ""));
                ChangingTotalPriceForBasket(getPrice, price_parent_block);
            }
            // далее десериализуем json строку и удаляем элемент по индексу
            if (cancel_btns.indexOf(cancel_btns[j]) > -1)
                parsedBasketPhonesInf.splice(cancel_btns.indexOf(cancel_btns[j]), 1);
            // если длина массива не 0, то пересоздаем элементы без уже одного элемента
            if (parsedBasketPhonesInf.length !== 0) {
                localStorage.setItem(LocalStorageBasketsUsed, JSON.stringify(parsedBasketPhonesInf));
                for (let k = 0; k < parsedBasketPhonesInf.length; k++) {
                    let obj = parsedBasketPhonesInf[k];
                    CreateBusketChoosenPhoneInf(obj['picture'], obj['memory'], obj['color'], obj['price'], obj['model'], parent_block);
                }
                visual_counter.innerText = parsedBasketPhonesInf.length;
                // вызываем эту функцию ещё раз рекурсовно, потому что, видимо, в корзине есть ещё элементы, которые, возможно, пользователь решит удалить
                RemovingElFromBasketOrComprBasket(parentWithCancelBtns, visual_counter, LocalStorageBasketsUsed, BasketsUsed, typeOfFooterBlock, parent_block, price_parent_block);
            }
            // если же 0, то удаляем ключ, скрываем счетчик, total price корзины и добавляем надпись о пустой корзине
            else {
                localStorage.removeItem(LocalStorageBasketsUsed);
                visual_counter.classList.add('hide');
                if (BasketsUsed === 'basket')
                    IfEmptyBasketOrCompLocStor(inf_to_del, 'Ваша корзина пуста', typeOfFooterBlock);
                else
                    IfEmptyBasketOrCompLocStor(inf_to_del, 'В сравнении пока ничего нет', typeOfFooterBlock);
            }
        });
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function RemovingElFromBasketIndependently(show_products_modal_block, textInfBlock, svgChangeColor, className, visualCounter, footerTotalElement, price_block_to_push) {
    AddVisualBasketsShow(show_products_modal_block, className);
    // visual effects
    svgChangeColor.style.fill = '#0a84ff';
    svgChangeColor.style.color = '#0a84ff';
    // *чтобы понять, что тут происходит, нужно посмотреть ts файл 3 страницы (для быстрого поиска нужной строчки кода напишите в поиске "buy_btns" и смотрите в слушатель ивентов, там написано про ключ "number_of_goods_in_basket")
    // идет проверка на наличие особого ключа, если этот ключ есть, значит, имеется товар в корзине
    if ('number_of_goods_in_basket' in localStorage) {
        // далее мы удаляем этот ключ (предыстория того, почему у меня в голове возникла такая реализация - напишу в файле проделанной работы)
        localStorage.removeItem('number_of_goods_in_basket');
        // запускаем функцию удаления элементов из корзины
        RemovingElFromBasketOrComprBasket(show_products_modal_block, visualCounter, 'basket_phones', 'basket', footerTotalElement, textInfBlock, price_block_to_push);
    }
}
// изменение значений полной целы (total price) для корзины товаров
function ChangingTotalPriceForBasket(getPrice, parent_block_to_push_price) {
    // очищаем данные старой цены, чтобы записать новые
    parent_block_to_push_price.innerText = '';
    // записываем
    parent_block_to_push_price.innerText = `${parseInt(localStorage.getItem('total_price')) - getPrice} BYN`;
    // переписываем в localStorage total price
    localStorage.setItem('total_price', `${parseInt(localStorage.getItem('total_price')) - getPrice}`);
}
////////////////////////////////////////////////////////////////////////////// 
