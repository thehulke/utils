var utils = (function() {


    /**
     * convertToBaseTwo - Converting base 10 to base 2
     *
     * @param  {Integer} num - base 10 number
     * @param  {string}  type - type of variable to return ("array/string")
     *                          default - returns array
     * @return {Array}     base 2 number.
     */
    var convertToBaseTwo = function(num, type) {
        var remainder = 0;
        var finalNum = [];
        // If no number is sent to the function
        if (!num) {
            return 0;
        }
        // Converting operation
        while (Math.floor(num) !== 0) {
            finalNum.unshift(Math.floor(num % 2));
            num = num / 2;
        }

        switch (type) {
            case 'string':
                var str = finalNum.reduce(function(previousValue, currentValue, currentIndex, array) {
                    return previousValue.toString() + currentValue.toString();
                });
                //Use case
                str = str === 1 ? "01" : str;
                return str;
                break;

            default:
                return finalNum;

        }
    };

    //////////////////////////////////////////////////
    // currently returns 1 function. to be updated
    //////////////////////////////////////////////////
    return {
        convertToBaseTwo: convertToBaseTwo
    };

})();
