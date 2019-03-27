export default class TEXTINPUT {
    placeHolder?: string;
    label?: string;
    defaultValue?: string;
    onChangeText?: Function;
    multiline?: boolean;
    numberOfLines?: number;
    editable?:boolean;
    keyboardType?: string;
    errorMessage?:string;
    validation?: {
        isPassword?:boolean;
        required?: boolean;
        minLength?: number;
        maxLength?: number;
        regex_pattern?: {
            config_file: string;
            parameter_name: string
        }
    };
    leftIcon?: {
        name : string,
        type : string,
        color ?: string
    };
    rightIcon?: {
        name : string,
        type : string,
        color ?: string
    }
}
