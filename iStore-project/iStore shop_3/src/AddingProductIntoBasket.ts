// данная функция - своего рода инициализатор и заполнитель массива объектов корзины
// что на счет параметров?
// в него прилет массив, в который мы хотим посметить нашу новую информацию
// далее прилетает переменная с счетчиком в который мы будем помещать кол-во товаров
// далее прилетает информация о телефоне, на который нажал пользователь
function FunctionToAddElemInObj<T extends string>(mass_to_push:object[], visual_HTML_counter:HTMLElement, phone_picture:T, phone_storage:T, phone_color:T, phone_price:T, phone_model:T, localStorage_name:T, phone_index?:T, phone_compar_index?:T):void{
    let current_phone_data_block: { [key: string]: string | number } = {};
    
    current_phone_data_block['picture'] = phone_picture;
    current_phone_data_block['memory'] = phone_storage;
    current_phone_data_block['color'] = phone_color;
    current_phone_data_block['price'] = phone_price;
    current_phone_data_block['model'] = phone_model;
    current_phone_data_block['phone_index'] = phone_index || '';
    current_phone_data_block['phone_copm'] = phone_compar_index || '';

    mass_to_push.push(current_phone_data_block);


    visual_HTML_counter.innerText = `${mass_to_push.length}`;

    localStorage.setItem(localStorage_name, JSON.stringify(mass_to_push));
}



function AddingProductToBasketIndepentenly(index: number, text_empty_block: HTMLElement, total_price_block:HTMLElement, bakset_visual_counter:HTMLElement, price_block_to_push:HTMLElement, PcOrMobile:PcVsMobile){
    // после чего записывается 1 (эквивалент true) и летит эта запись в localStorage, для удаления элементов из корзины (удаление элементтов из корзины в файле первой страницы)
    goods_to_basket_counter = 1;
    localStorage.setItem('number_of_goods_in_basket', `${goods_to_basket_counter}`);


    text_empty_block.innerText = '';

    if(total_price_mobile_block){
        if(total_price_block.classList.contains('hide')){
            total_price_block.classList.remove('hide');
        }
    }


    let get_current_phone_inf = obj_mass_of_current_phone[index];


    // инициализация или преинициализация переменных, которые используются как характеристики телефона
    let [phone_picture, phone_storage, phone_color, price_counter] = [
        // тк в своем json файле я сделал так, что картинки и цена отделены от всех и находятся на первых позициях, то я их просто собираю по первым двух ключам
        get_current_phone_inf[Object.keys(get_current_phone_inf)[1] as keyof typeof get_current_phone_inf],
        '','', 0
    ];

    let phone_price:string = get_current_phone_inf[Object.keys(get_current_phone_inf)[0] as keyof typeof get_current_phone_inf];


    // берем значение, преобразуем его в число
    if(typeof phone_price === 'string')
        price_counter = parseInt(phone_price.replace(/\s+/g, ""))



    // обход и находения нужных ключей и сбор из них информации
    for (const key in get_current_phone_inf) {
        let inner_key:object = get_current_phone_inf[key as keyof typeof get_current_phone_inf];

        for (const key in inner_key) {
            if(key === 'Внутренняя память')
                phone_storage = inner_key[key as keyof typeof inner_key];
            else if(key === 'Цвет')
                phone_color = inner_key[key as keyof typeof inner_key];
        }   
    }

    // убираем скрывающий класс из счетчика количества товаров в корзине
    bakset_visual_counter.classList.remove('hide');


    // после клика "в корзину" идет проверка на наличие массива объектов элементов, которые, возможно, были уже выбраны
    // если же такого ключа нет, то заполняется объект, потом эти данные пушаться в массив и летят в localStorage
    // а вот если же такой ключ имеется, то мы создаем буферный массив в который прилетает содержимое localStorage по этому ключу, дополняется и записывается заново
    if('basket_phones' in localStorage){
        let parsedBasketMass = JSON.parse(localStorage.getItem('basket_phones')!);

        price_block_to_push.innerText = `${parseInt(localStorage.getItem('total_price')!) + price_counter} BYN`;

        localStorage.setItem('total_price', `${parseInt(localStorage.getItem('total_price')!) + price_counter}`);


        FunctionToAddElemInObj(parsedBasketMass, bakset_visual_counter, phone_picture, phone_storage, phone_color, phone_price, Object.keys(get_current_phone_inf)[0].slice(0, -6), 'basket_phones', `${index}`);
    }
    else{
        let basket_mass:object[] = [];

        localStorage.setItem('total_price', `${price_counter}`);

        FunctionToAddElemInObj(basket_mass, bakset_visual_counter, phone_picture, phone_storage, phone_color, phone_price, Object.keys(get_current_phone_inf)[0].slice(0, -6), 'basket_phones', `${index}`);

        price_block_to_push.innerText = '';
        price_block_to_push.innerText = `${price_counter} BYN`;
    }

    
    let BasketPhones = JSON.parse(localStorage.getItem('basket_phones')!);

    if(PcOrMobile === 'Mobile'){
        for (let i = 0; i < BasketPhones.length; i++) 
            CreateBusketChoosenPhoneInfCatalog(BasketPhones[i]['picture'], BasketPhones[i]['memory'], BasketPhones[i]['color'], BasketPhones[i]['price'], BasketPhones[i]['model'], 'basket', 'mobile');
    }
    else{
        for (let i = 0; i < BasketPhones.length; i++) 
            CreateBusketChoosenPhoneInfCatalog(BasketPhones[i]['picture'], BasketPhones[i]['memory'], BasketPhones[i]['color'], BasketPhones[i]['price'], BasketPhones[i]['model'], 'basket');
    }
}