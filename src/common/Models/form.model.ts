
export default class FORM {
    header?: {
        formName?: string;
        headerClass?: string;
    };
    fields?: Array<Fields>;
    buttons?: Array<BUTTON>;
    class?: string;
}

class Fields {
    type?:'textField' | 'password' | 'textArea' | 'dropOption' | 'switch' | 'slider';
    label?:{
        name : string;
        class ?: string;
        onPress ?: Function;
    };
    class?: string;
    parameterName : string;
    placeHolder?: string;
    defaultValue?: any;
    selectionOptions?:Array<{
        value : any;
        label : string;
        nextLine ?: boolean;
        class ?: string;
        icon ?: string;
    }>;
    multiline?: boolean;
    numberOfLines?: number;
    readOnly?: boolean;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'email-address' | 'phone-pad' | 'numeric';
    errorMessage?: string;
    validation?: {
        type?: 'number' | 'string' | 'decimal';
        maskedText?: string; /*  Eg -> 00/00/0000 value will replace 0 with actual data  */
        required?: boolean;
        minLength?: number;
        minValue?:number;  /* REQUIRED Field only for slider*/
        maxValue?:number;  /* REQUIRED Field only for slider*/
        maxLength?: number;
        regex_pattern?: {
            config_file_value: string;
        }
    };
    leftIcon?: ICON;
    rightIcon?: ICON;
}

class ICON {
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
    onPress?: Function;
}

class BUTTON {
    display_text?: string;
    disabled?: boolean;
    onPress?: Function;
    buttonClass?: string;
    icon?: ICON;
    type?: 'SUBMIT' | 'CLEAR';
}
