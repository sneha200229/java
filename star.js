var arrey = [10, 12, 15, 8, 2]
var temp = 0
for (i = 0; i <= arrey.length; i++) {
    if (arrey[i] > temp) {
        temp = arrey[i]
    }
}
console.log(temp);
