{

    let buildGallery = () => {
        
        let filemanager = document.querySelector('.filemanager');
        
        if(!filemanager?.querySelector('.ygtvitem')) {
            setTimeout(buildGallery, 100);
            return;
        }

        let items = Array.from(filemanager.querySelector('.ygtvitem').querySelectorAll('.ygtvitem'));

        let files = [];

        let output = '';

        let current = [];

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            let table = item.querySelector('table');
            let level;
            for (level = 0; level <= 5; level++) {
                if (table.classList.contains('ygtvdepth' + level)) {
                    break;
                }
            }

            // console.log(item, level, current, item.querySelector('.fp-filename')?.innerHTML);
            if (level > current.length) {

            } else {
                while (level < current.length) {
                    output += '</div>';
                    current.pop();
                }
            }
            if (item.querySelector('.ygtvitem')) {
                // C'est un dossier
                let title = item.querySelector('.fp-filename').innerHTML;
                current.push(title);
                output += '<div class="gallery-folder">';
                //current = current.slice(0, level);
                // current.push(title);
                output += '<h' + (level + 1) + '>' + title + '</h' + (level + 1) + '>';
            } else {
                // C'est un fichier
                let title = item.querySelector('.fp-filename').innerHTML;
                let img = item.querySelector('img');
                let thumbnail = img.src.replace('?preview=tinyicon', '?preview=thumb');
                let link = img.src.replace('?preview=tinyicon', '?link=open');
                output += '<div class="gallery-item" title="' + title + '"><a href="' + link + '" target="_blank"><img src="' + thumbnail + '"></a><center>' + title + '</center></div>';
            }
        }

        output += '<style>.gallery-folder{border:1px solid black;margin:5px;padding:5px;} .gallery-item {display:inline-flex; flex-direction:column; margin:5px; width: 90px; } .gallery-item center { width: 100%; overflow:hidden; text-overflow: ellipsis; font-size: 75%; }</style>';

        filemanager.style.display = 'none';

        document.querySelector('.foldertree').innerHTML += output;
    }

    buildGallery();
}
