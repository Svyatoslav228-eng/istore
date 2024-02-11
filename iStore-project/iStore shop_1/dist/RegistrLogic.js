"use strict";
var _a;
// check person's policy in modal block and receive regist data
let parent_modal_block = document.querySelector('.modal_win');
let accept_btn = document.querySelector('.accept_btn_wrapper');
function GuardChecker(personObjToCheck) {
    for (const key in personObjToCheck) {
        if (personObjToCheck[key].trim() === '')
            return false;
    }
    return true;
}
parent_modal_block.addEventListener('change', (e) => {
    // this if block just to change btn color
    if (e.target.checked) {
        accept_btn.style.opacity = '1';
        accept_btn.addEventListener('click', () => {
            // but this if block is for ability to receive person inf
            if (e.target.checked) {
                // just init
                let [login_input, password_input, cardNumber_input, exp_month, exp_year, ccv_code] = [
                    document.querySelector('#login'),
                    document.querySelector('#password'),
                    document.querySelector('#card__number'),
                    document.querySelector('#card__expiration__month'),
                    document.querySelector('#card__expiration__year'),
                    document.querySelector('.card__ccv__input')
                ];
                //////////////////////////////////////
                let warning_parent_block = document.querySelector('.modal_win_inputs_block_wrapper');
                let warning_block = warning_parent_block.querySelector('.warning');
                // создание объекта юзера 
                let logIn_obj = { login: login_input.value, password: password_input.value, card_number: cardNumber_input.value, card_exp_month: exp_month.value, card_exp_year: exp_year.value, ccv_code: ccv_code.value };
                // чуть доработал, сделал так называемый typeGuard, который проверяет каждый ключ, если он пустой (просто пустая строка === незаполненный), тогда объект не записывается в localStorage и пользователь идет гулять
                if (GuardChecker(logIn_obj)) {
                    warning_block.classList.add('hide');
                    localStorage.setItem('person_logIn_inf', JSON.stringify(logIn_obj));
                    login_input.value = password_input.value = cardNumber_input.value = exp_month.value = exp_year.value = ccv_code.value = '';
                    registrModalBlockChange();
                }
                else
                    warning_block.classList.remove('hide');
            }
        });
    }
    else {
        if (e.target.checked)
            accept_btn.style.opacity = '1';
        else
            accept_btn.style.opacity = '0.65';
    }
});
// log out btn  
(_a = parent_modal_block.querySelector('#exit_from_account_btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    localStorage.removeItem('person_logIn_inf');
    let [child_to_hide, welcome_page, logIn_icon] = [
        document.querySelector('.modal_inf_wrapper'),
        document.querySelector('.welcome_greeting_block'),
        document.querySelector('#user_name')
    ];
    child_to_hide.classList.remove('hide');
    welcome_page.style.display = 'none';
    logIn_icon.innerText = 'Личный кабинет';
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// register check: if localStorage is not empty we get element's special entrance key and work with it
if (localStorage.getItem('person_logIn_inf') !== null)
    registrModalBlockChange();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function registrModalBlockChange() {
    let congrat_entrance = parent_modal_block.querySelector('.inner_modal_window');
    let child_to_hide = congrat_entrance.querySelector('.modal_inf_wrapper');
    child_to_hide.classList.add('hide');
    let receive_localStorage_inf = localStorage.getItem('person_logIn_inf');
    let parsed_localStorage_inf = JSON.parse(receive_localStorage_inf);
    let logIn_icon = document.querySelector('#user_name');
    logIn_icon.innerText = parsed_localStorage_inf.login;
    congrat_entrance.style.height = '700px';
    let welcome_block = document.querySelector('.welcome_greeting_block');
    welcome_block.style.display = 'flex';
}
