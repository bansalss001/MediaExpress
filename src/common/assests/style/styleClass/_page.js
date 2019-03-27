import { FontForWeight, CalculateFontSize, CalculateLineHeight, AppColor} from '../index';
import { Color, FontSize } from '../../constants';

export default PageStyle = {
    auth : {
        backgroundColor : AppColor.appcolor,
        flex: 1
    },
    hidden : {
        display: 'none'
    },
    center : {
        justifyContent : 'center',
        alignItems : 'center',
        textAlign: 'center'
    },
    right : {
        justifyContent : 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right'
    },
    left : {
        justifyContent : 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left'
    },
    authIcon: {
        width: 140,
        height: 140,
    }

}