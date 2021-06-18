function reverseString(str) {
    let strarr = str.split("");
    let a = 0;
    let b = strarr.length-1;
    while(a <= b) {
        let tmp = strarr[a];
        strarr[a] = strarr[b];
        strarr[b] = tmp;
        a += 1;
        b -= 1;
    }
    return strarr.join("");
}

console.log(reverseString("vickoman")); // Should be print namokciv