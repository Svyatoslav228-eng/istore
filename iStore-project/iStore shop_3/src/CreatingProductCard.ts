// собираем нужную информацию о телефоне (phone name, phone storage, phone price) из localStorage
function CreatingCardUsedJSONInf(checker:FilterSetOrJustGen, choosed_filter_thing?:string){
    let phone_storage = '';
    let phone_color = '';

    for (let i = 0; i < obj_mass_of_current_phone.length; i++) {
        let current_phone = obj_mass_of_current_phone[i]
        for (const key in current_phone) {

            let inner_obj:object = current_phone[key as keyof typeof current_phone];

            for (const inner_key in inner_obj) {
                switch(inner_key){
                    case 'Внутренняя память':
                        phone_storage = inner_obj[inner_key as keyof typeof inner_obj];
                        global_memory_mass.push(phone_storage);
                        break;
                    case 'Цвет':
                        phone_color = inner_obj[inner_key as keyof typeof inner_obj];
                        break;
                }
                if(phone_storage.trim() !== '' && phone_color.trim() !== '' && current_phone_name){
                    switch(checker){

                        case 'justGen':
                            CreatePhoneCard(current_phone_name, phone_storage, phone_color, current_phone[Object.keys(current_phone)[0] as keyof typeof current_phone], current_phone[Object.keys(current_phone)[1] as keyof typeof current_phone])
                            phone_storage = phone_color = '';

                            break;

                        case 'colorFilter':
                            if(phone_color === choosed_filter_thing){
                                CreatePhoneCard(current_phone_name, phone_storage, phone_color, current_phone[Object.keys(current_phone)[0] as keyof typeof current_phone], current_phone[Object.keys(current_phone)[1] as keyof typeof current_phone])
                                phone_storage = phone_color = '';
                            }
                            break;

                        case 'memoryFilter':
                            if(phone_storage === choosed_filter_thing){
                                CreatePhoneCard(current_phone_name, phone_storage, phone_color, current_phone[Object.keys(current_phone)[0] as keyof typeof current_phone], current_phone[Object.keys(current_phone)[1] as keyof typeof current_phone])
                                phone_storage = phone_color = '';
                            }
                            break;
                    }
                }
            }
        }
    }
}


function FilterByMemory(filterMemoryCheckBoxes:HTMLInputElement[], memoryNameBlocks:HTMLElement[]){
    for (let i = 0; i < filterMemoryCheckBoxes.length; i++) {
        filterMemoryCheckBoxes[i].addEventListener('click',()=>{
            let catalog_block = document.querySelector('.test_block') as HTMLElement;
    
            if(filterMemoryCheckBoxes[i].checked === true){
                catalog_block.innerText = '';
    
                let checked_phone_memory = memoryNameBlocks[i].innerText;
    
                CreatingCardUsedJSONInf('memoryFilter', checked_phone_memory);
            }
            else{
                catalog_block.innerText = '';
                CreatingCardUsedJSONInf('justGen');
            }
        })
    }
}


function FilteringByColor(filterCheckBoxes:HTMLInputElement[], colorNameBlocks:HTMLElement[]){
    for (let i = 0; i < filterCheckBoxes.length; i++) {
        filterCheckBoxes[i].addEventListener('click',()=>{
    
            let catalog_block = document.querySelector('.test_block') as HTMLElement;
    
            if(filterCheckBoxes[i].checked === true){
                catalog_block.innerText = '';
    
                let checked_phone_color = colorNameBlocks[i].innerText;
    
                CreatingCardUsedJSONInf('colorFilter', checked_phone_color);
            }
            else{
                catalog_block.innerText = '';
                CreatingCardUsedJSONInf('justGen');
            }     
        })
    }
}
