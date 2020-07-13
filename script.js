const search = document.querySelector('.search');
const items = document.querySelectorAll('.data li');

search.addEventListener('input', () => {

    let val = search.value;
    
    items.forEach((item) => {
        let str = item.innerText;

        if (str.indexOf(val) === -1) {
            item.style.display = 'none';
            item.innerHTML = item.innerText;
        } else {
            item.style.display = 'block';
            item.innerHTML = insertMark(str, str.indexOf(val), val.length);
        }
    });

});


function insertMark(str, pos, len) {

    return str.slice(0, pos) + '<mark>' + str.slice(pos, pos + len) + '</mark>' + str.slice(pos + len);
}