const week = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

function weekday(date) {
    if (date.getDay() >= 0 && date.getDay() <= 6) {
      return week[date.getDay()];
    } else {
      return "I highly doubt you gave me a proper date.";
    }
}

function snippet(string, maxLength) {
  if (maxLength >= string.length) {
    return string;
  } else if (maxLength < string.length) {
    return string.substring(0, maxLength - 1) + '...';
  } else {
    return "Something has gone horribly wrong!";
  }
}

numProps(obj) {
  if (typeof obj === 'object') {
    return Object.keys(obj).length;
  } else {
    return "I'm not even sure you handed in an object.";
  }
}

filterBetween(array, min, max) {
  var answer = [];
  if (typeof array !== 'array' || typeof min !== 'number' || typeof max !== 'number') {
    return 'invalid input attempt';
  } else {
    for (var i = 0; i < array.length; i++ ) {
      if (array[i] <= max && array[i] >= min) {
        answer.push(array[i]);
      }
    }
    return answer;
  }
}
