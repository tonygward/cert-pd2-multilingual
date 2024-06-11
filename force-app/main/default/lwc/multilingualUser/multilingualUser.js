import { LightningElement } from 'lwc';

import LOCALE from "@salesforce/i18n/locale";
import CURRENCY from "@salesforce/i18n/currency";

export default class MultilingualUser extends LightningElement {
    currentLocale = LOCALE;
    currentCurrency = CURRENCY;
    
    get localDate() {
        let date = new Date(2024, 1, 14);
        let helper = new Intl.DateTimeFormat(LOCALE);
        return helper.format(date);
    }

    get price() {
        let helper = Intl.NumberFormat(LOCALE, 
            { 
                style: 'currency',
                currency: CURRENCY
            }
        );
        return helper.format(11.99);
    }
}