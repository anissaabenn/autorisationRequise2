function controle(){    
    let age = prompt('Pouvez-vous voter ? Quel âge avez vous ?'); 
    if(age < 18){
       
        window.location.assign("https://www.google.fr");
        windows.alert("vous êtes mineur");
    }else{

        
        
        windows.alert("vous êtes majeur");
    }
}

controle();