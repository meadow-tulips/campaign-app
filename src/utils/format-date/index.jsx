const getMonthInLetters = (monthVal) => {
    switch(monthVal) {
        case 1:
            return 'Jan'
        case 2:
            return 'Feb'
        case 3:
            return 'Mar'
        case 4:
            return 'Apr'
        case 5:
            return 'May'
        case 6:
            return 'Jun'
        case 7:
            return 'Jul'
        case 8:
            return 'Aug'
        case 9:
            return 'Sep'
        case 10:
            return 'Oct'
        case 11:
            return 'Nov'
        case 12:
            return 'Dec'
        default:
            return '';
    }
}


const formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const formateDateInDateMonthYear = (date) => {
    if(!date) return '';
    let d = new Date(date);
    return d.getDate() + ' ' + getMonthInLetters(d.getMonth()) + ' ' + d.getFullYear();
}

export {
    formatDate,
    formateDateInDateMonthYear
}
