function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    const result = [];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const pairNumber = i * 5 + j + 1; // Start numbering from 1
            const entry = `${pairNumber}  | ${majorColors[i]}     | ${minorColors[j]}`;
            result.push(entry);
        }
    }
    return result;
}

module.exports = { print_color_map };
