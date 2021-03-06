"use strict"

const isString = function(s) {
    return typeof(s) === 'string' || s instanceof String;
}

const isPositiveReal = function(num) {
    if(isNaN(num)) {
        return false
    } else if(num <= 0) {
        return false
    } else {
        return true
    }
}

const alertErrorCatcher = function(fn) {
    try {
        fn()
    } catch(error) {
        customAlert(error, "#A00")
        throw error
    }
}

const moneyFormatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
}).format

const checkImageUrl = function(url) {
    if(url.match === undefined) return false
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null)
}
