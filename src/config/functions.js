
function getCategories(arrOfObjects) {
    var categories = ['ALL'];
    arrOfObjects.forEach(obj => {
        var lw = obj.category.map(v => v.toLowerCase())
        categories.push.apply(categories, lw);
    });
    console.log("itemsss - ", categories);
    return categories.filter(function (elem, pos) {
        return categories.indexOf(elem) == pos;
    });
}

function getCategoryImages(arrOfObjects, category, sortByKey) {
    var images = getImageCollections(arrOfObjects, sortByKey);
    return images.filter((data) => {
        return (data.category == category || category == 'ALL')
    });
}

function getImageCollections(arrOfObjects, sortByKey) {
    arrOfObjects.filter((obj) => {
        return !obj.hide;
    });
    return sortby(arrOfObjects, sortByKey);
}

function getColumnView(arrOfObjects, noOfColumns, sortByKey) {
    var imageData = getImageCollections(arrOfObjects, sortByKey);
    var columnView = [];
    for (var j = 1; j <= noOfColumns; j++) {
        var arr = [];
        for (var i = j - 1; i < imageData.length; i = i + noOfColumns) {
            arr.push(imageData[i]);
        }
        columnView.push(arr);
    }
    return columnView;
}

function getEvents(arrOfObjects, sortByKey) {
    const events = arrOfObjects.filter((obj) => {
        return (!obj.hide && obj.isEvent);
    });
    return sortby(events, sortByKey);
}

function sortby(arrOfObjects, sortby) {
    if ((sortby.toLowerCase()).indexOf("date") == -1) {
        arrOfObjects.sort(function (a, b) {
            return a.sortby > b.sortby;
        });
    } else {
        arrOfObjects.sort(function (a, b) {
            return new Date(b.createdDate) - new Date(a.createdDate);
        });
    }
    return arrOfObjects;
}


export default {
    getColumnView,
    getImageCollections,
    sortby,
    getEvents,
    getCategories,
    getCategoryImages
}