// pc variables
let parent_comp_like_shopcar_block = document.querySelector('.header_buttons') as HTMLElement;
let comp_like_shopcar_logos_to_over = Array.from(parent_comp_like_shopcar_block?.getElementsByClassName('scales_icon_block') as HTMLCollectionOf<HTMLElement>);
let show_products_modal_blocks = Array.from(parent_comp_like_shopcar_block.getElementsByClassName('compation_block') as HTMLCollectionOf<HTMLElement>); 
let total_phone_price_block_adder = document.querySelector('.phone_total_price_block') as HTMLElement;  
let block_to_push_price_main_pages = document.querySelector('.total_price') as HTMLElement;
let total_phone_comp_block_adder = document.querySelector('.comp_block_inf') as HTMLElement;
let change_visual_counter =  Array.from(document.getElementsByClassName('number_of_choosen_goods') as HTMLCollectionOf<HTMLElement>);
let svg_pictures = Array.from(document.getElementsByClassName('ng-tns-c152-0') as HTMLCollectionOf<HTMLElement>);



// mobile modal basket open
let carShop_block = document.querySelector('.mobile_features_icons_shopcar') as HTMLDivElement;
let compation_carShop_mobile_block = carShop_block.querySelector('.compation_block_mobile') as HTMLDivElement;


// mobile variables
let total_phone_price_block_adder_mobile = compation_carShop_mobile_block.querySelector('.phone_total_price_block') as HTMLElement;
let price_block_mob_ver = compation_carShop_mobile_block.querySelector('.total_price') as HTMLElement;
let parent_comp_mobile_block = compation_carShop_mobile_block.querySelector('.compation_text') as HTMLElement;
let get_mobile_basket_counter = document.querySelector('.number_of_choosen_goods_id_mobile') as HTMLElement;
let mobile_shopCar_icon = document.querySelector('#mobileCarShopFill') as HTMLElement


// удаление элементов корзины/блока сравнения с расширенным navigation bar (не мобильное разрешение)
for (let i = 0; i < comp_like_shopcar_logos_to_over.length; i++){
    comp_like_shopcar_logos_to_over[i].addEventListener('mouseenter', ()=>{
        let parent_comp_phone_inf = show_products_modal_blocks[i].querySelector('.compation_text') as HTMLElement;

        if(i === 1)
            RemovingElFromBasketIndependently(show_products_modal_blocks[1], parent_comp_phone_inf, svg_pictures[7], 'comp_block_show', change_visual_counter[i], total_phone_price_block_adder, block_to_push_price_main_pages);
        else
            RemovingElFromCompIndependently(show_products_modal_blocks[0], parent_comp_phone_inf, svg_pictures[0], 'comp_block_show_2', change_visual_counter[i]);

    });
    comp_like_shopcar_logos_to_over[i].addEventListener('mouseleave', ()=>{
        svg_pictures[7].style.fill = svg_pictures[0].style.fill = '#fff';
        svg_pictures[7].style.color = svg_pictures[0].style.color = '#fff';

        RemoveVisualBasketsShow(i);   
    });
}




// удаление элементов корзины (мобильное разрешение)
carShop_block.addEventListener('mouseenter', ()=>{
    let parent_comp_phone_inf = compation_carShop_mobile_block.querySelector('.compation_text') as HTMLElement;

    RemovingElFromBasketIndependently(compation_carShop_mobile_block, parent_comp_phone_inf, mobile_shopCar_icon, 'compation_block_mobile_show', get_mobile_basket_counter, total_phone_price_block_adder_mobile, price_block_mob_ver);
});


carShop_block.addEventListener('mouseleave', ()=>{
    compation_carShop_mobile_block.classList.remove('compation_block_mobile_show');

    mobile_shopCar_icon.style.fill = mobile_shopCar_icon.style.fill = '#fff';
});







////////////////////////working with data in LocalStorage/////////////////////////////////////// 

// если имеется ключ данных о корзине сравнения в localStorage, то создаем данные корзины
if('comparison_basket_phones' in localStorage){
    // аналогично, как выше, только со своим ключом
    let just_checker = 1;
    localStorage.setItem('number_of_goods_in_CompBasket', `${just_checker}`);

    let parent_comp_phone_inf = show_products_modal_blocks[0].querySelector('.compation_text') as HTMLElement;


    // CreatingBasketOrCompBasedOnLocalStorage.ts
    PushBasketOrCompInfInLocStor('comparison_basket_phones', change_visual_counter[0], total_phone_comp_block_adder, parent_comp_phone_inf);

    // чуть меняю расположение иконки
    change_visual_counter[0].style.right = '53px';
}
else{
    let inf_to_del = show_products_modal_blocks[0].querySelector('.compation_text') as HTMLElement;  


    // CreatingBasketOrCompBasedOnLocalStorage.ts
    IfEmptyBasketOrCompLocStor(inf_to_del, 'В сравнении пока ничего нет', total_phone_comp_block_adder);
}
////////////////////////////////////////////////////////////////////////////////////////////////




// pushing data if screen is adaptated or if person use phone
// all functions here from CreatingBasketOrCompBasedOnLocalStorage.ts file
window.addEventListener('resize', ()=>{
    if(window.innerWidth < 998){
        PushBasketDataMobOrPc(compation_carShop_mobile_block, total_phone_price_block_adder_mobile, price_block_mob_ver, get_mobile_basket_counter);
        PushComparisonMobCounter();
    }
    else
        PushBasketDataMobOrPc(show_products_modal_blocks[1], total_phone_price_block_adder, block_to_push_price_main_pages, change_visual_counter[1]);
});
if(window.innerWidth < 998){
    PushBasketDataMobOrPc(compation_carShop_mobile_block, total_phone_price_block_adder_mobile, price_block_mob_ver, get_mobile_basket_counter);
    PushComparisonMobCounter();
}
else
    PushBasketDataMobOrPc(show_products_modal_blocks[1], total_phone_price_block_adder, block_to_push_price_main_pages, change_visual_counter[1]);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 








////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// search bar logic
document.querySelector('.input_btn')?.addEventListener('click', ()=>{
    let search_bar_inf = document.querySelector('#search_string') as HTMLInputElement;

    let getWholePhoneDataBase = localStorage.getItem('iphones_inf') || '{}';

    let parsedWholePhoneDataBase = JSON.parse(getWholePhoneDataBase);

    if(search_bar_inf.value.trim() !== '' && search_bar_inf.value in parsedWholePhoneDataBase){
        localStorage.setItem('iphone_name_to_set', search_bar_inf.value);

        let link_autoClick = document.createElement('a');
        link_autoClick.href = "../iStore shop_3/index.html";
        link_autoClick.click();
    }
    else{
        let warning_notice = document.querySelector('.warning') as HTMLElement
        warning_notice.classList.remove('hide');

        // just for fun
        setInterval(()=>{
            warning_notice.classList.add('hide')
        }, 2000)
    }
});



// в поиске есть 3 блока "самых популярных ввода", вот тут я его обрабатываю
let most_popular_searching = Array.from(document.getElementsByClassName('most_popular_search_good') as HTMLCollectionOf<HTMLSpanElement>);
for (let i = 0; i < most_popular_searching.length; i++) {
    most_popular_searching[i].addEventListener('click', ()=>{
        let getPhoneName = most_popular_searching[i].innerText;

        GetPhoneNameByClickToText(getPhoneName);
    });
}



// moving by links in site
function GetPhoneNameByClickToText(getPhoneName:string){
    localStorage.setItem('iphone_name_to_set', getPhoneName);
    let link_autoClick = document.createElement('a');
    link_autoClick.href = "../iStore shop_3/index.html";
    link_autoClick.click();
}



// переход на страницу каталога через модальное окна гамбургера (для мобилки)
let modal_hamburger_articles = Array.from(document.getElementsByClassName('modal_mobile_window_li') as HTMLCollectionOf<HTMLElement>);
for (let i = 0; i < modal_hamburger_articles.length; i++) {
    modal_hamburger_articles[i].addEventListener('click', ()=>{
        if(modal_hamburger_articles[i].innerText === 'iPhone'){
            let linkAutoClickToCatalog = document.createElement('a');
            linkAutoClickToCatalog.href = "../iStore shop_2/index.html";
            linkAutoClickToCatalog.click();
        }
    });
}



// переход к нужному телефону через выбор телефона в footer'е (для устройств в большим разрешением)
let footer_iphone_catalog = document.querySelector('.iphone_catalog') as HTMLElement;
let get_footer_iphone_catalog_models = Array.from(footer_iphone_catalog.getElementsByClassName('footer_nav_another_links') as HTMLCollectionOf<HTMLElement>);
for (let i = 0; i < get_footer_iphone_catalog_models.length; i++) {
    get_footer_iphone_catalog_models[i].addEventListener('click', ()=>{
        let getFooterPhoneName = get_footer_iphone_catalog_models[i].innerText;

        GetPhoneNameByClickToText(getFooterPhoneName);
    });
}



// переход к нужному телефону через выбор телефона в footer'е (для мобилок)
let footer_iphone_catalog_mobile = Array.from(document.getElementsByClassName('dropdown-menu background_settings') as HTMLCollectionOf<HTMLElement>);
for (let i = 0; i < footer_iphone_catalog_mobile[4].childNodes.length; i++) {
    footer_iphone_catalog_mobile[4].childNodes[i].addEventListener('click',()=>{
        let getFooterPhoneNameMobile = footer_iphone_catalog_mobile[4].childNodes[i] as HTMLElement;
        GetPhoneNameByClickToText(getFooterPhoneNameMobile.innerText);
    })
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////