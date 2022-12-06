// const dracTxt = document.DOCUMENT_TYPE_NODE("DyslexicText/Dracula- Chapter 1.webloc");

let paragraphs = document.body.getElementsByTagName("p");

for (let i=0; i < paragraphs.length; i++) {
    // console.log("paragraph", i, paragraphs[i]);

    let str = paragraphs[i].innerText;
    console.log("paragraph", i, str);

    var words = str.split(' ');
    console.log("words", i, words);

    var array = [];

    for (let j=0; j < words.length; j++) {
        if (words[j].length <= 3) {
            var chars = words[j].split('');
            let boldednum = 1;
            chars.splice(boldednum, 0, "</span>");
        }
        // else if (words[j].length % 2 == 0) {
        //     let chars = words[j].split('');
        //     console.log("chars even", j, chars);
        // }
        else {
            var chars = words[j].split('');
            let boldednum = Math.round(chars.length / 2);
            chars.splice(boldednum, 0, "</span>");
        }

        chars.splice(0, 0, "<span>");

        array.push(chars);
    }

    console.log(array);
    const wordarray = [];

    for (let k=0; k < array.length; k++) {
        const wordp = array[k].join('');
        console.log(wordp);
        wordarray.push(wordp)
    }

    console.log(wordarray);

    const parray = wordarray.join('&nbsp;');
    console.log(parray[0]);

    paragraphs[i].innerHTML = parray
}
