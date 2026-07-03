function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const uniqueChars = new Set(s);
    for (const char of uniqueChars) {
        const countInS = [...s].filter(c => c === char).length;
        const countInT = [...t].filter(c => c === char).length;
        if (countInS !== countInT) {
            return false;
        }
    }
    return true;
}