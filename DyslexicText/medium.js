// const dracTxt.load( "https://www.cs.cmu.edu/~rgs/drac-1.html" );
// console.log("Drac Text:", draxTxt);

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
            
            // this whole section is accounting for the fact that my code doesn't know if a character is a letter or just punctuation
            var add = 0;
            for (let m = 0; m < chars.length; m++) {
                if (chars[m] == '"') {
                    add+=1;
                }
            }

            boldednum+=add;

            chars.splice(boldednum, 0, "</span>");
        }
        // else if (words[j].length % 2 == 0) {
        //     let chars = words[j].split('');
        //     console.log("chars even", j, chars);
        // }
        else {
            var chars = words[j].split('');
            let boldednum = Math.round(chars.length / 2);
            
            // this whole section is accounting for the fact that my code doesn't know if a character is a letter or just punctuation
            var sub = 0;
            for (let m = 0; m < chars.length; m++) {
                
                if (chars[m] == ',' && (chars.length % 2 != 0 || chars.length <= 4)) {
                    sub+=1;
                }
                else if (chars[m] == '.' && (chars.length % 2 != 0 || chars.length <= 4)) {
                    sub+=1;
                }
                else if (chars[m] == ';' && (chars.length % 2 != 0 || chars.length <= 4)) {
                    sub+=1;
                }
                else if (chars[m] == '.' && (chars.length % 2 != 0 || chars.length <= 4)) {
                    sub+=1;
                }
                else if (chars[m] == '-' && m != 1 && (chars.length % 2 != 0 || chars.length <= 4)) {
                    sub+=1;
                }
                else if (chars[m] == '-' && m == 1 && (chars.length % 2 != 0 || chars.length <= 4)) {
                    sub-=2;
                }
                else if (chars[m] == ')' && chars.length != 8 && (chars.length % 2 != 0 || chars.length > 4)) {
                    sub+=1;
                }
                // else if (chars[m] == '"' && (chars.length % 2 != 0 || chars.length >= 4)) {
                //     sub+=1;
                // }
                else if (chars[m] == ':' && m == chars.length-1 && (chars.length % 2 != 0 || chars.length >= 4)) {
                    sub+=1;
                }
                else if (chars[m] == '?' && (chars.length % 2 != 0 || chars.length <= 4)) {
                    sub+=1;
                }
                else if (chars[m] == "'" && (chars.length % 2 != 0 || chars.length <= 4)) {
                    sub+=1;
                }
                else if (chars[m] == "!" && (chars.length % 2 != 0 || m == chars.length - 2 || chars.length == 4)) {
                    sub+=1;
                }
                
            }
            
            if (sub < boldednum) {
                boldednum -= sub;
            }
            
            chars.splice(boldednum, 0, "</span>");
        }

        chars.splice(0, 0, "<span id='outer'><span id='inner'>");

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

    const parray = wordarray.join("&nbsp</span>");
    console.log(parray[0]);

    paragraphs[i].innerHTML = parray
}
