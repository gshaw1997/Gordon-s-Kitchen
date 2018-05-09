export function titleCase(text) {
    const words = text.split(' ');
    const upperCaseWords = [];
    for (const word of words) {
        const firstChar = word.charAt(0);
        const upperChar = firstChar.toUpperCase();
        const upperCaseWord = word.replace(firstChar, upperChar);
        upperCaseWords.push(upperCaseWord);
    }
    return upperCaseWords.join(' ');
}