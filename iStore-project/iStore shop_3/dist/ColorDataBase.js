"use strict";
/////////////////////////////////color database start////////////////////////////////////////////// 
let colors_obj = {
    'iPhone 14 Pro Max': ['#574f6f', '#F5F5F0'],
    'iPhone 14 Pro': ['#574f6f'],
    'iPhone 13 Pro Max': ['#F9E5C9', '#9BB5CE'],
    'iPhone 13 Pro': ['#F9E5C9', '#9BB5CE', '#5C5B57'],
    'iPhone 13 mini': ['#A50011', '#FAE0D8'],
    'iPhone 12 Pro Max': ['#2E4755'],
    'iPhone 12 Pro': ['#2E4755', '#F9E5C9'],
    'iPhone 12': ['#E1F8DC', '#A50011', '#B8AFE6', '#043458', '#201D24', '#FBF7F4'],
    'iPhone 12 mini': ['#201D24', '#043458'],
    'iPhone 11 Pro Max': ['#4E5851', '#535150'],
    'iPhone 11 Pro': ['#4E5851', '#535150', '#F9E5C9', '#F5F5F0'],
    'iPhone 11': ['#A50011', '#FBF7F4', '#201D24', '#E1F8DC', '#FFE681', '#B8AFE6'],
    'iPhone XR': ['#A50011', '#FBF7F4', '#201D24', '#EE7762', '#FFE681', '#043458'],
    'iPhone Xs': ['#F9E5C9', '#535150', '#F5F5F0'],
    'iPhone SE': ['#A50011', '#FBF7F4', '#201D24'],
    'iPhone X': ['#F5F5F0', '#535150'],
    'iPhone 8': ['#F5F5F0', '#535150', '#F9E5C9', '#A50011']
};
let decoded_colors_obj = {
    'Deep Purple': '#574f6f',
    'Серебристый': '#F5F5F0',
    'Золотой': '#F9E5C9',
    'Небесно‑голубой': '#9BB5CE',
    'Графитовый': '#5C5B57',
    '(PRODUCT)RED': '#A50011',
    'Розовый': '#FAE0D8',
    '«Тихоокеанский синий»': '#2E4755',
    'Зелёный': '#E1F8DC',
    'Фиолетовый': '#B8AFE6',
    'Синий': '#043458',
    'Чёрный': '#201D24',
    'Белый': '#FBF7F4',
    'Тёмно-зелёный': '#4E5851',
    'Серый космос': '#535150',
    'Желтый': '#FFE681',
    'Коралловый': '#EE7762'
};
/////////////////////////////////color database end////////////////////////////////////////////// 
// input phone name into empty page
let current_phone_name = localStorage.getItem('iphone_name_to_set');
document.title = `${current_phone_name} купить в Беларуси: Минск, Гродно, Витебск`;
const get_breadcrumb = Array.from(document === null || document === void 0 ? void 0 : document.getElementsByClassName('future_phone_name'));
let modalFilterWindowIphone = document.querySelector('.phone_name_modal_window').innerText = `Выберите ${current_phone_name}`;
for (let i = 0; i < get_breadcrumb.length; i++) {
    if (current_phone_name)
        get_breadcrumb[i].innerText = current_phone_name;
}
//////////////////////////////////////////////////////////////////////////////////////////////////// 
