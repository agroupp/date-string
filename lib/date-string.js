'use strict';
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Formats date according to RFC2822
 * @param {Date} date Date object to format
 * @return {string}
 */
module.exports = function(date){
    if (date && typeof date === 'object' && date instanceof Date){
        let day = (date.getDate() < 10)? `0${date.getDate().toString()}` : date.getDate().toString();
        let hours = (date.getHours() < 10)? `0${date.getHours().toString()}` : date.getHours().toString();
        let minutes = (date.getMinutes() < 10)? `0${date.getMinutes().toString()}` : date.getMinutes().toString();
        let seconds = (date.getSeconds() < 10)? `0${date.getSeconds().toString()}` : date.getSeconds().toString();
        let tzHours = (date.getTimezoneOffset() / 60) | 0;
        let zoneSign = (tzHours < 0) ? '+' : '-';
        tzHours = (tzHours < 0) ? tzHours * -1 : tzHours;
        let tzHoursStr = (tzHours < 10) ? `0${tzHours}` : `${tzHours}`;
        let tzMinutes = date.getTimezoneOffset() % 60;
        tzMinutes = (tzMinutes < 0) ? tzMinutes * -1 : tzMinutes;
        let tzMinutesStr = (tzMinutes < 10) ? `0${tzMinutes}` : `${tzMinutes}`;
        const tz = `${zoneSign}${tzHoursStr}${tzMinutesStr}`;
        return `${dayNames[date.getDay()]}, ${day} ${months[date.getMonth()]} ${date.getFullYear()} ${hours}:${minutes}:${seconds} ${tz}`;        
    }
}