import FORM from './form.model';

export default class Groups {
    groupHeader?: {
        groupName?: string;
        headerClass?: string;
    };
    groupType?: Array<FORM> ;
    groupClass?: string;
    groupAction?: {
        action?: string;
        groupElementName?: string;
    }
}