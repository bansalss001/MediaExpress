export default class BUTTON {
    display_text?: string;
    disabled?: boolean;
    onPress?: Function;
    buttonClass?: string;
    type?: 'solid' | 'clear' | 'outline';
    icon?: {
        iconName?: string;
        iconSize?: number;
        iconColor?: string;
    }
}
