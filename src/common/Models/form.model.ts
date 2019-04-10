
export default class FORM {
    header?: {
        formName?: string;
        headerClass?: string;
    };
    groups?: Array<Groups>;
    buttons?: Array<BUTTON>;
    class?: string;
}

class Fields {
    type?:'textField' | 'password' | 'textArea' | 'dropOption' | 'switch';
    label?:{
        name : string;
        class ?: string;
        onPress ?: Function;
    };
    class?: string;
    parameterName : string;
    placeHolder?: string;
    defaultValue?: string;
    selectionOptions?:Array<{
        value : string;
        label ?: string;
        nextLine ?: boolean;
        class ?: string;
    }>;
    multiline?: boolean;
    numberOfLines?: number;
    readOnly?: boolean;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'email-address' | 'phone-pad' | 'numeric';
    errorMessage?: string;
    validation?: {
        type?: 'number' | 'string';
        maskedText?: string; /*  Eg -> 00/00/0000 value will replace 0 with actual data  */
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        regex_pattern?: {
            config_file_value: string;
        }
    };
    leftIcon?: ICON;
    rightIcon?: ICON;
}

class Groups {
    groupHeader?: {
        groupName?: string;
        headerClass?: string;
    };
    fields?: Array<Fields>;
    groupType?: string;
    groupClass?: string;
    groupButtons?: Array<BUTTON>;
    groupAction?: {
        action?: string;
        groupElementName?: string;
    }
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
