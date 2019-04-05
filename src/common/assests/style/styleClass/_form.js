import { FontForWeight, CalculateFontSize, CalculateLineHeight, AppColor } from '../index';
import { Color, FontSize } from '../../constants';

export default FormStyle = {
    formComponent: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    formMain: {
        flexDirection: 'column',
        padding: 0,
        margin: 0,
        flex: 0,
        flexGrow: 0,
        flexShrink: 0,
        overflow: 'scroll'
    },
    groupFields: {
        flex: 1,
    },
    groupView: {
        borderWidth : 1,
        borderRadius : 4,
        flex: 1,
        textAlign: 'center',
        flexDirection: 'column',
        margin: 2,
        padding : '2%'
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 5,
        borderColor: Color.Black,
        padding: 0,
        margin: 0
    },
    button: {
        flexDirection: 'row',
        padding: 10,
        borderColor: Color.Black,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    buttonPrimary: {
        backgroundColor: Color.DodgerBlue,
        color : Color.DodgerBlue
    },
    buttonError: {
        backgroundColor: Color.Red,
        color : Color.Red
    },
    buttonWarning: {
        backgroundColor: Color.Yellow,
        color : Color.Yellow
    },
    buttonWhite: {
        backgroundColor: Color.GhostWhite,
        color : Color.GhostWhite
    },
    groupFieldLabel: {
        padding: 5
    },
    errorMessage: {
        color: AppColor.errorMessageColor,
        fontWeight: 'bold'
    },
    textFieldComponent: {
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'center',
        transform: [{ 'translateX': 0 }]
    },
    textField: {
        alignSelf: 'center',
        color: 'black',
        fontSize: FontSize.large,
        flex: 1,
        display : 'flex',
        height: CalculateLineHeight(40)
    },
    defaultIcon :{
        padding: 5,
        justifyContent : 'center',
        alignItems: 'center',
        height : 30,
        width : 30
    },
    flexLeft :{
        justifyContent : 'flex-start'
    },
    flexRight :{
        justifyContent : 'flex-end'
    },
    noBorder : {
        borderWidth : 0
    }
};
