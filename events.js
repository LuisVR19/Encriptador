function encrypt(){
    var textArea = document.getElementById('text');
    var txtOriginal = textArea.value;
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

}

function desEncrypt(){
    var textArea = document.getElementById('text');
    var txtOriginal = textArea.value;
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

}

function showCopyButton(){
    var copyButton = document.getElementById("copyButton");

    copyButton.classList.add("secondary-button");
    copyButton.classList.remove("hide");
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
  
/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/