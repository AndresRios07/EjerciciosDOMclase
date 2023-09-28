function Relink() { 
    let numero_random = Math.floor(Math.random() * 3);
    let lista_links = [
        "https://www.google.com/intl/es-419/gmail/about",
        "https://outlook.live.com/",
        "https://mail.yahoo.com/",
    ];
    window.location.href = lista_links[numero_random];
}