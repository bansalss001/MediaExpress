import { Color } from '../../constants'
import { Platform } from 'react-native'

export const AppColor = {
    appcolor: Color.DodgerBlue,
    lauchScreenColor: Color.DodgerBlue,
    mainBackGroundColor: Platform.OS=='ios'? Color.White : Color.GhostWhite,
    navigationBarColor: Color.DodgerBlue,
    navigationTextColor: Color.White,
    navigationLinkTextColor: Color.Snow,
    linkTextColor: Color.SteelBlue,
    errorMessageColor : Color.Tomato
}
