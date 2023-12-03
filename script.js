let filemanager = document.querySelector('.filemanager');

let items = Array.from(filemanager.querySelectorAll('.ygtvitem'));

let files = [];

let output = "";

for(let i = 0; i < items.length; i++) {
    let item = items[i];
    if(item.querySelector('.ygtvitem')) {
        // C'est un dossier
        let table = item.querySelector('table');
        let level;
        for (level = 0; level <= 5; level++) {
            if(table.classList.contains('ygtvdepth' + level)) {
                break;
            }
        }
        level++;
        output += '<h' + level + '>' + item.querySelector('.fp-filename').innerHTML + '</h' + level + '>';
    } else {
        // C'est un fichier
        let img = item.querySelector('img');
        let thumbnail = img.src.replace('?preview=tinyicon', '?preview=thumb');
        let link = img.src.replace('?preview=tinyicon', '?link=open');
        output += '<a href="' + link + '" target="_blank"><img src="' + thumbnail + '"></a>';
    }
}

filemanager.innerHTML += output;
