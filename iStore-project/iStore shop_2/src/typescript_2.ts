const iphone_blocks = Array.from(document.getElementsByClassName('iphone_item_block') as HTMLCollectionOf<HTMLElement>);

for (let i = 0; i < iphone_blocks.length; i++){
    iphone_blocks[i].addEventListener('click', ()=>{
        let current_iphone_name = iphone_blocks[i].querySelector('.iphone_destrip_wrapper') as HTMLElement;
        localStorage.setItem('iphone_name_to_set', current_iphone_name.innerText);
    });
}

console.log(localStorage);