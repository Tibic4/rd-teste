const item_submenu = document.querySelectorAll('li.has_submenu');
const btn_menu = document.querySelector('.btn_menu');
const btn_close_menu = document.querySelector('.btn_close_menu');
const menu = document.querySelector('.header_menu');

item_submenu.forEach((item) => {

    item.addEventListener('click', (e) => {

        e.preventDefault()
        item.querySelector('ul.submenu').classList.toggle('open_submenu')

    });

});

btn_menu.addEventListener('click', () => {

    menu.classList.add('open_header_menu')

});
btn_close_menu.addEventListener('click', () => {

    menu.classList.remove('open_header_menu')

});




/* ============================= slide card mobile =============================== */
const card_33 = document.querySelectorAll('.card-33');
const dots = document.querySelectorAll('.dots_card .dot');

let count = 1;
let total_cards = card_33.length;
let tempo_card = 2000;

setInterval(function(){

    card_33.forEach((item) => {

        item.classList.remove('d-block');

    });

    dots.forEach((item) => {

        item.classList.remove('dot_full');

    });

    if(count == total_cards){
        count = 0;
        card_33[count].classList.add('d-block');
        dots[count].classList.add('dot_full');
        count++
    }else{
        card_33[count].classList.add('d-block');
        dots[count].classList.add('dot_full');
        count++
    }
    

},tempo_card);

/* ============================= slide card mobile =============================== */





/* ========================= formulário ============================= */
const maskphone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}
const btn_pass_confirm = document.querySelector('.btn-pass-confirm');
const pass_confirm = document.querySelector('.pass-confirm');

btn_pass_confirm.addEventListener('click', () =>{

    if(pass_confirm.getAttribute('data-pass') == 1){
        btn_pass_confirm.setAttribute('src', 'assets/img/open-eye.png');
        pass_confirm.setAttribute('type','text');
        pass_confirm.setAttribute('data-pass','0');
    }else{
        btn_pass_confirm.setAttribute('src', 'assets/img/close-eye.png');
        pass_confirm.setAttribute('type','password');
        pass_confirm.setAttribute('data-pass','1');
    }

});

const btn_pass_confirm_2 = document.querySelector('.btn-pass-confirm-2');
const pass_confirm_2 = document.querySelector('.pass-confirm-2');

btn_pass_confirm_2.addEventListener('click', () =>{

    if(pass_confirm_2.getAttribute('data-pass') == 1){
        btn_pass_confirm_2.setAttribute('src', 'assets/img/open-eye.png');
        pass_confirm_2.setAttribute('type','text');
        pass_confirm_2.setAttribute('data-pass','0');
    }else{
        btn_pass_confirm_2.setAttribute('src', 'assets/img/close-eye.png');
        pass_confirm_2.setAttribute('type','password');
        pass_confirm_2.setAttribute('data-pass','1');
    }

});

document.getElementById('have_site').addEventListener('change', () => {
    if(document.getElementById('have_site').checked){
        document.getElementById("seu_site").required = true;
    }
});

document.getElementById('have_not_site').addEventListener('change', () => {
    if(document.getElementById('have_not_site').checked){
        document.getElementById("seu_site").required = false;
    }
});

const hasUpper = (str) => /[A-Z]/.test(str);
const hasMinus = (str) => /[a-z]/.test(str);
const hasNumber = (str) => /[0-9]/.test(str);
const length_str = (str) => {return str.length};

function check_senha(senha){

    if(hasUpper(senha) && hasMinus(senha) && hasNumber(senha) && length_str(senha) >= 6 && length_str(senha) <= 10){
        return true;
    }else{
        return false
    }

}

function send_form(e){

    //e.preventDefault();

    
    
    let formName = document.getElementById("nome").value;
    let formEmail = document.getElementById("email").value;
    let formTel = document.getElementById("telefone").value;
    let formCargo = document.getElementById("cargo").value;
    let formSenha = document.getElementById("senha").value;
    let formSenhaConfirma = document.getElementById("confirma_senha").value;
    let formSite = document.getElementById("seu_site").value;
    let haveSite = document.getElementById("have_site");
    let haveNoSite = document.getElementById("have_not_site");

    let params = "formName="+formName+"&formEmail="+formEmail+"&formTel="+formTel+"&formCargo="+formCargo+"&formSenhaConfirma="+formSenhaConfirma+"&formSite="+formSite;

    if(formName != "" && formEmail != "" && formTel != "" && formCargo != "" && formSenha != "" && formSenhaConfirma != ""){

            if(check_senha(formSenha)){
            
                if(formSenha == formSenhaConfirma){
                        document.querySelector('.btn_form').innerHTML = "Enviando...";
                        e.preventDefault();
        
                        const xmlhttp = new XMLHttpRequest();
                        xmlhttp.onload = function() {
                            let resposta = this.status;
                    
                            //alert(resposta);
                    
                            if(resposta == 200){
                                document.getElementById("nome").value = "";
                                document.getElementById("email").value = "";
                                document.getElementById("telefone").value = "";
                                document.getElementById("cargo").value = "";
                                document.getElementById("confirma_senha").value = "";
                                document.getElementById("senha").value = "";
                                document.getElementById("seu_site").value = "";
    
                                document.querySelector('.btn_form').innerHTML = "Criar Conta";

                                document.querySelector('form.form').innerHTML = "<strong style='color: green'>Obrigrado!, entraremos em contato";
                            }
                            
                            
                        }
                    
                        xmlhttp.open("POST", "https://rdstation-signup-psel.herokuapp.com", true);
                        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xmlhttp.send(params);        
                        
                    
                }else{
                    alert('As senhas devem ser iguais');
                    document.querySelector('.btn_form').innerHTML = "Criar Conta";
                    e.preventDefault();
                }
            }else{
                alert('A senha deve atender aos requisitos mínimos de segurança:\n - Mínimo de 6 caracteres;\n - Máximo de 10 caracteres;\n - Pelo menos uma letra maiuscula e uma letra minuscula;\n - Pelo menos um número');
                document.querySelector('.btn_form').innerHTML = "Criar Conta";
                e.preventDefault();
                
            }
        
    }else{
        document.querySelector('.btn_form').innerHTML = "Criar Conta";
        e.preventDefault()
    }

}

/* ========================= formulário ============================= */

const modal_video = document.querySelector('.modal_video');

document.getElementById('play_video').addEventListener('click', () => {
    player.playVideo();
    document.querySelector('.modal_video').classList.add('open_modal');
});


modal_video.addEventListener('click', (e) => {

    if(e.currentTarget.classList.contains('modal_video')){
        stopVideo();
        document.querySelector('.modal_video').classList.remove('open_modal');
    }
    
});

