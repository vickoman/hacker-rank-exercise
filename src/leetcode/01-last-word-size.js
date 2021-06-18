function lenghtOfLastWord(str) {
    let c = 0;
    let n = str.length;
    let i = 0;
    while(i < n) {
        if(str[i] !== " ") {
            c += 1;
            i += 1;
        } else {
            while( i < n && str[i] === " ") {
                i += 1;
            }
            if(i === n) {
                return c;
            } else {
                c = 0;
            }
        }
    }
    return c;
}

console.log(lenghtOfLastWord("Hellos  ")); //Expected 5