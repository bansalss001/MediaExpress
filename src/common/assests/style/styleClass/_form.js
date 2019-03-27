import { FontForWeight, CalculateFontSize, CalculateLineHeight, AppColor } from '../index';
import { Color, FontSize } from '../../constants';

export default FormStyle = {
    formComponent: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'stretch'
    },
    formMain: {
        flexDirection: 'column',
        padding: 0,
        margin:0,
        flex: 0,
        flexGrow : 0,
        flexShrink : 0,
        overflow: 'scroll'
    },
    groupFields:{
        flex:1,
    },
    groupView : {
        flex:1,
        textAlign: 'center',
        flexDirection: 'column',
        padding : '2%'
    },
    buttonGroup : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'stretch',
        borderRadius : 5,
        borderColor : Color.Black,
        padding : 0,
        margin : 0
    },
    button :{
        padding : 10,
        borderColor : Color.Black,
        justifyContent : 'center'
    },
    groupFieldLabel : {
        padding : 5
    },
    errorMessage : {
        color : AppColor.errorMessageColor,
        fontWeight: 'bold'
    }
};
