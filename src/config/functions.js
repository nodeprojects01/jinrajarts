
function sortBy(arrOfObjects, keyName) {
    if ((keyName.toLowerCase()).indexOf("date") == -1) {
        arrOfObjects.sort(function (a, b) {
            return a.keyName > b.keyName;
        });
    } else {
        arrOfObjects.sort(function (a, b) {
            return new Date(b.createdDate) - new Date(a.createdDate);
        });
    }
    return arrOfObjects;
}

function getImagesData(arrOfObjects) {
    return arrOfObjects.filter((obj) => {
        return !obj.hide;
    });
}

function getCategories(arrOfObjects) {
    var imageData = getImagesData(arrOfObjects);
    var categories = ['ALL'];
    imageData.forEach(obj => {
        var lw = obj.category.map(v => v.toLowerCase())
        categories.push.apply(categories, lw);
    });
    return categories.filter(function (elem, pos) {
        return categories.indexOf(elem) == pos;
    });
}

function getCategoryImages(arrOfObjects, category, sortByKey) {
    var imageData = getImagesData(arrOfObjects);
    var categoryImages = imageData.filter((data) => {
        console.log(category.toLowerCase(), data.category.includes(category.toLowerCase()));
        return (data.category.includes(category.toLowerCase()) || category == 'ALL')
    });
    var sortedImageData = sortBy(categoryImages, sortByKey);
    return sortedImageData;
}

function getColumnView(arrOfObjects, noOfColumns, sortByKey, displayCount) {
    var imageData = getImagesData(arrOfObjects);
    var sortedImageData = sortBy(imageData, sortByKey);
    if (displayCount != 0)
        sortedImageData = sortedImageData.slice(0, displayCount);
    var columnView = [];
    for (var j = 1; j <= noOfColumns; j++) {
        var arr = [];
        for (var i = j - 1; i < sortedImageData.length; i = i + noOfColumns) {
            arr.push(sortedImageData[i]);
        }
        columnView.push(arr);
    }
    return columnView;
}

function getEvents(arrOfObjects, sortByKey, displayCount) {
    var imageData = getImagesData(arrOfObjects);
    const events = imageData.filter((obj) => {
        return (!obj.hide && obj.isEvent);
    });
    var sortedImageData = sortBy(events, sortByKey);
    if (displayCount != 0)
        sortedImageData = sortedImageData.splice(0, displayCount);
    return sortedImageData;
}

export default {
    getColumnView,
    getEvents,
    getCategories,
    getCategoryImages
}