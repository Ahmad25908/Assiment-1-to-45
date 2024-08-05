var ordinal_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinal_numbers_1 = ordinal_numbers; _i < ordinal_numbers_1.length; _i++) {
    var num = ordinal_numbers_1[_i];
    var stuff = void 0;
    if (num === 1) {
        stuff = "st";
    }
    else if (num === 2) {
        stuff = "nd";
    }
    else if (num === 3) {
        stuff = "rd";
    }
    else {
        stuff = "th";
    }
    console.log("".concat(num).concat(stuff));
}
