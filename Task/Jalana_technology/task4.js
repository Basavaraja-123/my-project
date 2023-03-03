function LongestWord(sen) {
    // import * as re from 're';
    var length, length_greatest, longest_word, sen_split;
    length_greatest = 0;
    sen = sen.lower();
    sen = re.sub("[^abcdefghijklmnopqrstuvwxyz1234567890 ]", "", sen);
    sen_split = sen.split();
    for (var word, _pj_c = 0, _pj_a = sen_split, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        word = _pj_a[_pj_c];
        length = word.length;
        if ((length > length_greatest)) {
            [length_greatest, longest_word] = [length, word];
        }
    }
    return longest_word;
}
console.log(new LongestWord(input()));


