import React from 'react';
configValues = require('../../configs/values.json')

export class BaseClass extends React.Component {
    constructor(props) {
        super(props);
    }
    //Return string in lowerCase
    convertToLowerCase(input) {
        if (this.isNotNullString(input)) {
            return input.toLocaleLowerCase();
        }
    }
    //Return string in UpperCase
    convertToUpperCase(input) {
        if (this.isNotNullString(input)) {
            return input.toLocaleUpperCase();
        }
    }

    //Return string in CamelCase
    convertToCamelCase(input) {
        if (this.isNotNullString(input)) {
            return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
        }
    }

    //Return string in SentenceCase
    convertToSentenceCase(input) {
        if (this.isNotNullString(input)) {
            let text = input;
            let result = text.replace(/([A-Z])/g, " $1");
            let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
            return finalResult
        }
    }
    
    // Returns true if input is not undefined , else returns false
    isNotUndefined(input) {
        if (input != undefined) {
            return true;
        } else {
            return false;
        }
    }

    // Returns true if input is  undefined , else returns false
    isUndefined(input) {
        if (input == undefined) {
            return true;
        } else {
            return false;
        }
    }

    // Returns true if input is  null , else returns false
    isNull(input) {
        if (this.isUndefined(input) && input == null) {
            return true;
        } else {
            return false;
        }
    }

    // Returns true if input is not null , else returns false
    isNotNull(input) {
        if (this.isNotUndefined(input) && input != null) {
            return true;
        } else {
            return false;
        }
    }

    // Returns true if input is  null , else returns false
    isNullString(input) {
        if (this.isNull(input) || input == '') {
            return true;
        } else {
            return false;
        }
    }

    // Returns true if input is not null , else returns false
    isNotNullString(input) {
        if (this.isNotNull(input) && input != '') {
            return true;
        } else {
            return false;
        }
    }

    // Returns true if input is  null array , else returns false
    isNotNullArray(input) {
        if (this.isNotNull(input) && input.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    // Returns true if input is not null array , else returns false
    isNullArray(input) {
        if (this.isNull(input) || input.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    // Returns true if input is not null object , else returns false
    isNotNullObject(input) {
        if (this.isNotNull(input) && JSON.stringify(input) != '{}') {
            return true;
        } else {
            return false;
        }
    }

    // Returns true if input is  null object, else returns false
    isNullObject(input) {
        if (this.isNull(input) || JSON.stringify(input) == '{}') {
            return true;
        } else {
            return false;
        }
    }

    // Returns true if input is  null , else returns false
    validateRegex(input,regex) {
        let patt = new RegExp(configValues['regex_pattern'][regex]['regex']);
        return patt.test(input);
    }

    getRegexErrorMessge(regex) {
        return configValues['regex_pattern'][regex]['errorMessage']
    }
}