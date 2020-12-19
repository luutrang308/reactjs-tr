// 1: Hãy viết 1 hàm nhập vào 2 array, kiểm tra xem 2 array có khớp 100% các value với nhau về cả giá trị và index không
const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 5]
const arr4 = [1, 2, 3, 4, 5]
function arraysIdentical(a, b) {
    let i = arr1.length;
    if (i != arr2.length) return false;
    while (i--) {
        if (arr[i] !== brr[i]) return false;
    }
    return true;
};