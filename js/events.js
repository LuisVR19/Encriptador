function encrypt(){
    var textArea = document.getElementById('text');
    var txtOriginal = textArea.value.toLowerCase();
    var txtEncrypt = '';

    for (var i = 0; i < txtOriginal.length; i++) {
        if (txtOriginal[i] === 'e')
            txtEncrypt += 'enter';
        else if(txtOriginal[i] === 'i')
            txtEncrypt += 'imes';
        else if(txtOriginal[i] === 'a')
            txtEncrypt += 'ai';
        else if(txtOriginal[i] === 'o')
            txtEncrypt += 'ober';
        else if(txtOriginal[i] === 'u')
            txtEncrypt += 'ufat';
        else
            txtEncrypt += txtOriginal[i];
    }

    document.getElementById('resuilt').value = txtEncrypt;
    textArea.value = '';


    showCopyButton();
    cleanRigth();

}

function desEncrypt(){
    var textArea = document.getElementById('text');
    var txtOriginal = textArea.value.toLowerCase();;
    var txtEncrypt = '';
    var temp = '';
    for (var i = 0; i < txtOriginal.length; i++) {
        txtEncrypt += txtOriginal[i];

        if (txtOriginal[i] === 'e')
            i += 4;
        if(txtOriginal[i] === 'i')
            i += 3;
        if(txtOriginal[i] === 'a')
            i += 1;
        if(txtOriginal[i] === 'o')
            i += 3;
        if(txtOriginal[i] === 'u')
            i += 3;
    }

    document.getElementById('resuilt').value = txtEncrypt;
    textArea.value = '';
    showCopyButton();
    cleanRigth();

}

function showCopyButton(){
    var copyButton = document.getElementById("copyButton");

    copyButton.classList.add("secondary-button");
    copyButton.classList.remove("hide");
}

function cleanRigth(){
    document.getElementById('rigth-stuff').classList.add('erase');
    document.getElementById('container-result').classList.remove('erase');
    document.getElementById('container-result').classList.add('container-result');
}

function updateClipboard() {

    navigator.clipboard.writeText(document.getElementById('resuilt').value).then(
      () => {
        document.getElementById("copyButton").textContent = 'Copiado!!';
      },
      () => {

      },
    );
}

function validarTexto(textarea) {
    var texto = textarea.value;
    // Reemplazar caracteres especiales y mayúsculas con una cadena vacía
    texto = texto.replace(/[^\w\s]/gi, '').toLowerCase();
    textarea.value = texto;
}
  
/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/