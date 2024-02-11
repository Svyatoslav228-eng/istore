"use strict";
/////////////////////////////////////////////main page logic start///////////////////////////////////////////////////////////////////////// 
var _a;
//////////////////////////////////////////////////iphone inf unpacking and collecting start/////////////////////////////////////////////////////////////////////////// 
let getStringIphonesInf = localStorage.getItem('iphones_inf');
let global_memory_mass = [];
let obj_mass_of_current_phone = [];
let Iphones_obj = JSON.parse(getStringIphonesInf);
for (const key in Iphones_obj) {
    if (key === current_phone_name) {
        for (let i = 0; i < Iphones_obj[key].length; i++)
            obj_mass_of_current_phone.push(Iphones_obj[key][i]);
    }
}
CreatingCardUsedJSONInf('justGen');
//////////////////////////////////////////////////iphone inf unpacking and collecting end/////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////filter creating start///////////////////////////////////////////////////////////////////// 
// обращаемся к блоку цвета
let filter_color_block = Array.from(document.getElementsByClassName('colors_to_filter_ul'));
console.log(filter_color_block);
// обращаемся к блоку памяти
// let filter_memory_block = document.querySelector('.memory_to_filter_ul') as HTMLUListElement;
let filter_memory_block = Array.from(document.getElementsByClassName('memory_to_filter_ul'));
// тут берем определенный массив по ключу объекта colors_obj
let color_mass = colors_obj[current_phone_name];
// global_memory_mass - это массив, который собирает данные о памяти каждого телефона в каталоге
// после этого создается новый массив в Set, кототорый хранит данные дез дублежа
let unique_memory_mass = [...new Set(global_memory_mass)];
// опять же все сделано во имя адаптации: если ширина экрана больше, то кидаем элементы в родительский блок для пк, если меньше - в модальное окно 
window.innerWidth > 1426 ? RequestGenFuncToGenIn(filter_color_block[1]) : RequestGenFuncToGenIn(filter_color_block[0]);
function RequestGenFuncToGenIn(filter_color_block) {
    for (let i = 0; i < color_mass.length; i++) {
        for (let named_key in decoded_colors_obj) {
            // сравниваем данные decoded_colors_obj объекта и данные объекта colors_obj по определенному названию телефона на который тапнул пользователь
            if (decoded_colors_obj[named_key] === color_mass[i])
                // DOMCreating.ts   
                GenFilterColourSettings(filter_color_block, named_key, true, color_mass[i]);
        }
    }
}
window.innerWidth > 1426 ? RequestToGenMemoryBlock(filter_memory_block[1]) : RequestToGenMemoryBlock(filter_memory_block[0]);
function RequestToGenMemoryBlock(filter_memory_block) {
    for (let i = 0; i < unique_memory_mass.length; i++)
        // DOMCreating.ts   
        GenFilterColourSettings(filter_memory_block, unique_memory_mass[i], false);
}
let color_filter_parent_block = Array.from(document.getElementsByClassName('colour_filter'));
if (window.innerWidth > 1426) {
    const filterCheckBoxes = Array.from(color_filter_parent_block[1].getElementsByClassName('checkBoxFilter'));
    const colorNameBlocks = Array.from(color_filter_parent_block[1].getElementsByClassName('color_name'));
    // CreatingProductCard.ts
    FilteringByColor(filterCheckBoxes, colorNameBlocks);
}
else {
    const filterCheckBoxes = Array.from(color_filter_parent_block[0].getElementsByClassName('checkBoxFilter'));
    const colorNameBlocks = Array.from(color_filter_parent_block[0].getElementsByClassName('color_name'));
    // CreatingProductCard.ts
    FilteringByColor(filterCheckBoxes, colorNameBlocks);
}
// let memory_filter_parent_block = document.querySelector('.memory_filter') as HTMLElement
let memory_filter_parent_block = Array.from(document.getElementsByClassName('memory_filter'));
if (window.innerWidth > 1426) {
    const filterCheckBoxes = Array.from(memory_filter_parent_block[1].getElementsByClassName('checkBoxFilter'));
    const memoryNameBlocks = Array.from(memory_filter_parent_block[1].getElementsByClassName('color_name'));
    // CreatingProductCard.ts
    FilterByMemory(filterCheckBoxes, memoryNameBlocks);
}
else {
    const filterCheckBoxes = Array.from(memory_filter_parent_block[0].getElementsByClassName('checkBoxFilter'));
    const memoryNameBlocks = Array.from(memory_filter_parent_block[0].getElementsByClassName('color_name'));
    // CreatingProductCard.ts
    FilterByMemory(filterCheckBoxes, memoryNameBlocks);
}
// filter by price 
let FilterPriceBtns = Array.from(document.getElementsByClassName('btn_to_filter_by_price'));
for (let i = 0; i < FilterPriceBtns.length; i++) {
    FilterPriceBtns[i].addEventListener('click', () => {
        let inputFilterBlock = Array.from(document.getElementsByClassName('input_filter'));
        let [input_from, input_to] = [inputFilterBlock[i].querySelector('.input_from'), inputFilterBlock[i].querySelector('.input_to')];
        let mass = [];
        for (let i = 0; i < obj_mass_of_current_phone.length; i++) {
            let getObj = obj_mass_of_current_phone[i];
            let getPhonePrice = getObj[`${current_phone_name}_price`];
            // идет проверка на то, является ли это сттрока, ведь, если у меня не будет этой проверки, typescript будет думать, что 'getPhonePrice' can be never type и будет посылать меня куда подальше
            if (typeof getPhonePrice === 'string') {
                // убираю все пробелы с помощью regular expressions и преобразую в integer: так легче работать, чтобы убать все лишнее говно, кроме нужных мне цифр
                if (parseInt(getPhonePrice.replace(/\s+/g, "")) >= parseInt(input_from.value) && parseInt(getPhonePrice.replace(/\s+/g, "")) <= parseInt(input_to.value))
                    mass.push(getObj);
            }
        }
        // очистка полей ввода
        input_from.value = input_to.value = '';
        if (mass.length > 0) {
            let block_to_dell_inf = document.querySelector('.test_block');
            block_to_dell_inf.innerText = '';
            let phone_storage;
            let phone_color;
            for (let i = 0; i < mass.length; i++) {
                let objToGen = mass[i];
                for (const key in objToGen) {
                    let getInnerObj = objToGen[key];
                    for (const key in getInnerObj) {
                        switch (key) {
                            case 'Внутренняя память':
                                phone_storage = getInnerObj[key];
                                break;
                            case 'Цвет':
                                phone_color = getInnerObj[key];
                                break;
                        }
                    }
                }
                CreatePhoneCard(current_phone_name, phone_storage, phone_color, objToGen[Object.keys(objToGen)[0]], objToGen[Object.keys(objToGen)[1]]);
            }
        }
    });
}
// reset filtering by price
(_a = document.querySelector('.reset_filter_by_price')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    let block_to_dell_inf = document.querySelector('.test_block');
    block_to_dell_inf.innerText = '';
    // ещё раз говорю, что не зря перелопатил часть кода, которая отвечает за генерацию карточек (писал об этом в КП2 — преальфа на 26.03, если помните, конечно :) ), теперь достаточно только вызывать 
    CreatingCardUsedJSONInf('justGen');
});
////////////////////////////////////////////////////////filter creating end///////////////////////////////////////////////////////////////////// 
// adding product into basket but remover from basket into another file whick is connected
// инициализация кнопок "в корзины"
let buy_btns = Array.from(document.getElementsByClassName('buy_btn'));
// инициализация кнопок "сравнение"
// инициализация того самого счетка товаров, который находить на HTML странице (получается массив, потому что такой элемент не один)
let visual_counter = Array.from(document.getElementsByClassName('number_of_choosen_goods'));
// очиститель информации из корзины (используется после перезагрузки страницы)
let basket_block_remover = Array.from(document.getElementsByClassName('compation_text'));
let total_phone_price_block = document.querySelector('.phone_total_price_block');
let block_to_push_price = document.querySelector('.total_price');
// счетчик, показывающий на то, есть ли элементы в корзине
let goods_to_basket_counter = 0;
// mobile variables
let mobile_compation_text_wrapper = document.querySelector('.compation_block_mobile');
let mobile_compaction_text = mobile_compation_text_wrapper.querySelector('.compation_text');
// let text_empty_block_remover = mobile_compaction_text.querySelector('.empty_block') as HTMLElement;
let total_price_mobile_block = mobile_compation_text_wrapper.querySelector('.phone_total_price_block');
let mobile_block_to_push_price = mobile_compation_text_wrapper.querySelector('.total_price');
let mobile_visual_basket_counter = document.querySelector('.number_of_choosen_goods_id_mobile');
// обработчик нажатия на кнопку "в корзину" (возможность добавлять товар в корзину как и на мобилке, так и на пк (либо устройства, с большим разрешением экрана))
for (let i = 0; i < buy_btns.length; i++) {
    buy_btns[i].addEventListener('click', () => {
        if (window.innerWidth < 998)
            AddingProductToBasketIndepentenly(i, mobile_compaction_text, total_price_mobile_block, mobile_visual_basket_counter, mobile_block_to_push_price, 'Mobile');
        else
            AddingProductToBasketIndepentenly(i, basket_block_remover[1], total_phone_price_block, visual_counter[1], block_to_push_price, 'PC');
    });
}
// далее идет проверка на уже наличие элемента в localStorage, если же он имеется, то инфа собирается и записывается в корзину
if ('basket_phones' in localStorage) {
    let getBasketMassFromLocalStorage = localStorage.getItem('basket_phones');
    basket_block_remover[1].innerText = '';
    if (total_phone_price_block.classList.contains('hide')) {
        total_phone_price_block.classList.remove('hide');
    }
    let parsedBasketMass = JSON.parse(getBasketMassFromLocalStorage);
    visual_counter[1].classList.remove('hide');
    visual_counter[1].innerText = `${parsedBasketMass.length}`;
    // тк ключи у всех одинаковые, можно просто брать первый попавшийся объект с ключами, на выходе получать массив ключей и с ним играться
    let getKeys = Object.keys(parsedBasketMass[parsedBasketMass.length - 1]);
    for (let i = 0; i < parsedBasketMass.length; i++) {
        let obj = parsedBasketMass[i];
        // а играться с массивом ключей можно тут:
        // просто обращаемся к массиву по индексу, получаем название ключа, а после этого обращаемся к самому объекту
        // также, в парамент функции кидаем юнион с названием того, с чем мы собираемся работать (такая же ситуация с добавлением элементов в корзину сравнения - 810 строка, либо ('comparison_basket_phones' in localStorage) для поиска)
        CreateBusketChoosenPhoneInfCatalog(obj[getKeys[0]], obj[getKeys[1]], obj[getKeys[2]], obj[getKeys[3]], obj[getKeys[4]], 'basket');
    }
    // запись полной стоимости товаров корзины
    block_to_push_price.innerText = `${localStorage.getItem('total_price')} BYN`;
}
let goods_to_compBasket_counter = 0;
// adding product into comparison basket but remover from comparison basket into another file which is connected
let block_move_to_comparison = document.querySelector('.comp_block_inf');
let comp_btns = Array.from(document.getElementsByClassName('comp_btn'));
for (let i = 0; i < comp_btns.length; i++) {
    comp_btns[i].addEventListener('click', () => {
        let text_empty_block_remover = basket_block_remover[0].querySelector('.empty_block');
        goods_to_compBasket_counter = 1;
        localStorage.setItem('number_of_goods_in_CompBasket', `${goods_to_compBasket_counter}`);
        if (text_empty_block_remover && block_move_to_comparison) {
            if (!text_empty_block_remover.classList.contains('hide')) {
                text_empty_block_remover.classList.add('hide');
            }
            if (block_move_to_comparison.classList.contains('hide')) {
                block_move_to_comparison.classList.remove('hide');
            }
        }
        let get_current_phone_inf = obj_mass_of_current_phone[i];
        // инициализация или преинициализация переменных, которые используются как характеристики телефона
        let [phone_picture, phone_price, phone_storage, phone_color] = [
            // тк в своем json файле я сделал так, что картинки и цена отделены от всех и находятся на первых позициях, то я их просто собираю по первым двух ключам
            get_current_phone_inf[Object.keys(get_current_phone_inf)[1]],
            get_current_phone_inf[Object.keys(get_current_phone_inf)[0]],
            '', ''
        ];
        // обход и находения нужных ключей и сбор из них информации
        for (const key in get_current_phone_inf) {
            let inner_key = get_current_phone_inf[key];
            for (const key in inner_key) {
                if (key === 'Внутренняя память')
                    phone_storage = inner_key[key];
                else if (key === 'Цвет')
                    phone_color = inner_key[key];
            }
        }
        // убираем скрывающий класс из счетчика количества товаров в корзине
        visual_counter[0].classList.remove('hide');
        visual_counter[0].style.right = '53px';
        if ('comparison_basket_phones' in localStorage) {
            let getBasketMassFromLocalStorage = localStorage.getItem('comparison_basket_phones');
            let parsedBasketMass = JSON.parse(getBasketMassFromLocalStorage);
            FunctionToAddElemInObj(parsedBasketMass, visual_counter[0], phone_picture, phone_storage, phone_color, phone_price, Object.keys(get_current_phone_inf)[0].slice(0, -6), 'comparison_basket_phones', '', `${i}`);
        }
        else {
            let comparison_basket_mass = [];
            FunctionToAddElemInObj(comparison_basket_mass, visual_counter[0], phone_picture, phone_storage, phone_color, phone_price, Object.keys(get_current_phone_inf)[0].slice(0, -6), 'comparison_basket_phones', '', `${i}`);
        }
        PushComparisonMobCounter();
        CreateBusketChoosenPhoneInfCatalog(phone_picture, phone_storage, phone_color, phone_price, Object.keys(get_current_phone_inf)[0].slice(0, -6), 'comparison');
    });
}
if ('comparison_basket_phones' in localStorage) {
    let getBasketMassFromLocalStorage = localStorage.getItem('comparison_basket_phones');
    basket_block_remover[0].innerText = '';
    if (block_move_to_comparison.classList.contains('hide')) {
        block_move_to_comparison.classList.remove('hide');
    }
    let parsedCompBasketMass = JSON.parse(getBasketMassFromLocalStorage);
    visual_counter[0].classList.remove('hide');
    visual_counter[0].style.right = '53px';
    visual_counter[0].innerText = `${parsedCompBasketMass.length}`;
    // тк ключи у всех одинаковые, можно просто брать первый попавшийся объект с ключами, на выходе получать массив ключей и с ним играться
    let getKeys = Object.keys(parsedCompBasketMass[parsedCompBasketMass.length - 1]);
    for (let i = 0; i < parsedCompBasketMass.length; i++) {
        let obj = parsedCompBasketMass[i];
        CreateBusketChoosenPhoneInfCatalog(obj[getKeys[0]], obj[getKeys[1]], obj[getKeys[2]], obj[getKeys[3]], obj[getKeys[4]], 'comparison');
    }
}
// получение иконки сравнения в карточке продукта
let comparisonBtns = Array.from(document.getElementsByClassName('comparesonBtn'));
for (let i = 0; i < comparisonBtns.length; i++) {
    comparisonBtns[i].addEventListener('mouseenter', () => comparisonBtns[i].style.fill = 'rgb(10, 132, 255)');
    comparisonBtns[i].addEventListener('mouseleave', () => !comparisonBtns[i].getAttribute('id') ? comparisonBtns[i].style.fill = '#bdbdbd' : '');
}
// получение иконки лайка в карточке продукта
let likeBtns = Array.from(document.getElementsByClassName('likeBtn'));
for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener('mouseenter', () => likeBtns[i].style.fill = 'rgb(10, 132, 255)');
    likeBtns[i].addEventListener('mouseleave', () => likeBtns[i].style.fill = '#bdbdbd');
}
let btn_elem_in_storage_block = Array.from(document.getElementsByClassName('btn_elem_in_storage'));
let text_block_show = Array.from(document.getElementsByClassName('text_block'));
for (let i = 0; i < btn_elem_in_storage_block.length; i++) {
    btn_elem_in_storage_block[i].addEventListener('mouseenter', () => {
        text_block_show[i].style.display = 'block';
    });
    btn_elem_in_storage_block[i].addEventListener('mouseleave', () => {
        text_block_show[i].style.display = 'none';
    });
}
////////////////////////////////////////////////////main page logic end///////////////////////////////////////////////////////////
let showModalFilterBtn = document.querySelector('.filter_btn_for_mobile');
let modalFilterBlock = document.querySelector('.modal_filter_block');
let getBody = document.querySelector('body');
let closeModalFilterWindow = document.querySelector('.close_btn');
let getDardkerBackGround = document.querySelector('.darkerBackGround');
showModalFilterBtn.addEventListener('click', () => {
    modalFilterBlock.classList.add('modal_filter_fade_in');
    getBody.classList.add('body_to_stuck');
    getDardkerBackGround.style.position = 'absolute';
    getDardkerBackGround.classList.add('darkerBackGround_fade_in');
});
closeModalFilterWindow.addEventListener('click', () => {
    modalFilterBlock.classList.remove('modal_filter_fade_in');
    getBody.classList.remove('body_to_stuck');
    getDardkerBackGround.style.position = 'unset';
    getDardkerBackGround.classList.remove('darkerBackGround_fade_in');
});
