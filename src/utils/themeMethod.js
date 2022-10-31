/**
 * create 0 - 1000 greyScale
 * @param {Number} scaleOffset
 * @returns {{color : string}}
 */
export function createGreyScale(scaleOffset) {
    let b = "hsla(0, 0%, {x}%, 1)";
    return Array.from({ length: scaleOffset + 1 }).reduce((p, n, i) => {
        let key = `black_${(scaleOffset - i) * 100}`;
        n = b.replace("{x}", i * 10);
        p[key] = n;
        return p;
    }, {});
}

/**
 * opacity to color
 * @param {String} $color
 * @param {Number} value
 * @returns
 */
export function adjustAphla(color, value) {
    return color.replace(/(\d.?)\)$/, `${value})`);
}
