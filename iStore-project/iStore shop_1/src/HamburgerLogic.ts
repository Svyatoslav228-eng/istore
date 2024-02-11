// open hamburger modal nav window
// логика открытия окна гамбурбера
let hamburder_to_open = document.querySelector('.mobile_hamburger_wrapper') as HTMLSpanElement;
let hamburger = document.querySelector('.hamburger') as HTMLElement;
let modal_window_block = document.querySelector('.modal_nav_block_wrapper') as HTMLElement;
let hamburder_span = document.querySelector('.hamburger') as HTMLSpanElement;
let body_block = document.querySelector('body') as HTMLBodyElement;

let open_or_not:boolean = false;

function RemoveOrAdd<T extends DOMTokenList>(bodyLock:T, hamburder_manipulation:T, hamburder_span:T, modal_window_position:T, openingChecker:boolean):boolean{
    open_or_not = openingChecker;
    switch(openingChecker){
        case true:
            bodyLock.add('body_to_stuck');
            hamburder_manipulation.add('active_hamburder');
            hamburder_span.add('hide_middle_line_gamburger');
            modal_window_position.remove('hide');
            break;
        case false:
            bodyLock.remove('body_to_stuck');
            hamburder_manipulation.remove('active_hamburder');
            hamburder_span.remove('hide_middle_line_gamburger');
            modal_window_position.add('hide');
            break;
    }
    return open_or_not;
}


hamburder_to_open.addEventListener('click', ()=>{
    if(!open_or_not)
        open_or_not = RemoveOrAdd(body_block.classList, hamburger.classList, hamburder_span.classList, modal_window_block.classList, true);
    else{
        open_or_not = RemoveOrAdd(body_block.classList, hamburger.classList, hamburder_span.classList, modal_window_block.classList, false);
    }
});



// подсчеты высоты модального окна гамбургера
window.addEventListener('resize', ()=>{
    modal_window_block.style.maxHeight = `${window.innerHeight - 65}px`;
    // если человек с планшета зашел на мой сайт, к примеру, открыл модальное окно и случайно, или специально, перевернул устройство, тогда сами кликаем на гамбургер, таким образом закрываем его
    if(window.innerWidth > 1000 && open_or_not)
        hamburder_to_open.click();
});

if(window.innerWidth <= 768){
    modal_window_block.style.maxHeight = `${window.innerHeight - 65}px`;
}
//////////////////////////////////////////////////////////////////////////////////////////////////// 