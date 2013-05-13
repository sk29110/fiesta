
(function() {
    Ext.ns('Fiesta.util');

    Fiesta.util.Format = {
        humanDate : function (date) {
            var now   = new Date(),
                tzOffset = now.getTimezoneOffset()*60,
                delta =  parseInt(Ext.Date.format(now, 'U') - Ext.Date.format(date, 'U') + tzOffset),
                result = '';

            timeArray = {
                '31104000' : 'year',
                '2592000'  : 'month',
                '86400'    : 'day',
                '3600'     : 'hour',
                '60'       : 'minute',
                '1'        : 'second'
            };

            if (delta < 1) {
                return '0 seconds';
            }

            if(delta > 5 * 86400 ) {
                return Ext.Date.format(date,'d/m/Y');
            }

            Ext.Object.each(timeArray, function (seconds, period) {
                var divided = delta / parseInt(seconds);

                if(divided >= 1) {
                    var rounded = Math.floor(divided);
                    result = rounded+' '+period+(result > 1 ? 's' : '')+' ago';
                    return false;
                }
            });

            return result;
        }
    };

}());