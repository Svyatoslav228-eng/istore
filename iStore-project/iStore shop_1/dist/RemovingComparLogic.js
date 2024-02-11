"use strict";
function RemovingElFromCompIndependently(show_products_modal_block, textInfBlock, svgChangeColor, className, visualCounter) {
    AddVisualBasketsShow(show_products_modal_block, className);
    // visual effects
    svgChangeColor.style.fill = '#0a84ff';
    svgChangeColor.style.color = '#0a84ff';
    // логика работы описана выше
    if ('number_of_goods_in_CompBasket' in localStorage) {
        localStorage.removeItem('number_of_goods_in_CompBasket');
        RemovingElFromBasketOrComprBasket(show_products_modal_block, visualCounter, 'comparison_basket_phones', 'comparison', total_phone_comp_block_adder, textInfBlock);
    }
}
