import { FontForWeight, CalculateFontSize, CalculateLineHeight, AppColor } from '../index';
import { Color, FontSize } from '../../constants';

export default MainStyle = {
    body: {
        flex: 1,
        fontSize: CalculateFontSize(FontSize.normal),
        lineHeight: CalculateLineHeight(20),
        textAlign: 'left',
        backgroundColor: AppColor.mainBackGroundColor,
        padding : 0,
        margin : 0
    },
    container: {
        flex: 1,
        backgroundColor: AppColor.lauchScreenColor,
    },
    navbar: {
        headerStyle: {
            backgroundColor: AppColor.navigationBarColor,
        },
        headerTintColor: AppColor.navigationTextColor,
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    },
    h1:{
        fontSize: CalculateFontSize(FontSize.h1),
        fontWeight: "bold"
    },
    h2:{
        fontSize: CalculateFontSize(FontSize.h2),
        fontWeight: "bold"
    },
    h3:{
        fontSize: CalculateFontSize(FontSize.h3),
        fontWeight: "bold"
    },
    h4:{
        fontSize: CalculateFontSize(FontSize.h4),
        fontWeight: "bold"
    },
    alert: {
        position: 'relative',
        padding: 1,
        borderWidth: 0.5,
        borderRadius: 0.25
    },
    alertPrimary: {
        color: Color['RoyalBlue'],
        backgroundColor: Color['DodgerBlue'],
        borderColor: Color['SteelBlue']
    },
    alertSuccess: {
        color: Color['ForestGreen'],
        backgroundColor: Color['LightGreen'],
        borderColor: Color['YellowGreen']
    },
    alertWarning: {
        color: Color['Gold'],
        backgroundColor: Color['Moccasin'],
        borderColor: Color['LemonChiffon']
    },
    alertError: {
        color: Color['Red'],
        backgroundColor: Color['Salmon'],
        borderColor: Color['LightSalmon']
    },
    link: {
        fontWeight: 'bolder'
    },
    loaderView: {
        flex: 1,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderText: {
        fontWeight: "bold",
        color: Color.Black,
        padding: 5,
    },
    loaderImage: {
        width: 100,
        height: 100
    }
}
