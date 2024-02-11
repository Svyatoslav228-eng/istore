document.querySelector('button').addEventListener('click', ()=>{
    let file = document.querySelector('#file_loader').files[0];
    console.log(file);
    let reader = new FileReader();  
    reader.readAsText(file);
    reader.onload = function(){
        localStorage.setItem('iphones_inf', reader.result);
    }
});