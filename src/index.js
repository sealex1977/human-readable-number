module.exports = function toReadable (number) {
    const arrTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',];
	const arrHundred = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred',]
	let count = ' ' + String(number);

	if (number < 20) {
		return arrTwenty[number];

	} else if (number < 100) {
		if (+count[2] === 0) {
			return arrHundred[+count[1]];
		} else {
			return arrHundred[+count[1]] + ' ' + arrTwenty[+count[2]]
		}

	} else if (number < 1000) {
		if (+count[2] === 0 && +count[3] === 0) {
			return arrTwenty[+count[1]] + ' ' + 'hundred';
		} else if (+count[2] === 0 && +count[3] !== 0) {
			return arrTwenty[+count[1]] + ' ' + 'hundred' + ' ' + arrTwenty[+count[3]];
		} else if (+count[2] !== 0 && +count[3] === 0) {
			return arrTwenty[+count[1]] + ' ' + 'hundred' + ' ' + arrHundred[+count[2]];
		} else if (+count[2] ===1) {
			return arrTwenty[+count[1]] + ' ' + 'hundred' + ' ' + arrTwenty[+(count[2] + count[3])];
		} else {
			return arrTwenty[+count[1]] + ' ' + 'hundred' + ' ' + arrHundred[+count[2]] + ' ' + arrTwenty[+count[3]];
		}
	}
}