import BUTTON from './formModels/button.model'

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
    type?:'textField' | 'password' ;
    label?:{
        name : string;
        class ?: string;
    };
    class?: string;
    parameterName : string;
    placeHolder?: string;
    defaultValue?: string;
    multiline?: boolean;
    numberOfLines?: number;
    editable?: boolean;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'email-address' | 'phone-pad' | 'numeric';
    errorMessage?: string;
    validation?: {
        type?: 'number' | 'string';
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        regex_pattern?: {
            config_file_value: string;
        }
    };
    leftIcon?: {
        name : string,
        type : string,
        color ?: string
    };
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