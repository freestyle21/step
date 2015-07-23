/**
 * Trade Step 支持5-7个数量自定义
 * @author baoming.qbm@alibaba-inc.com
 * @date 07/23/2015
 */


var $ = require('alpha-jquery/jquery'),
    declare = require('/js/lib/declare'),
    JsonStore = require('/js/lib/store').JsonStore,
    View = require('/js/lib/view');

var commonUtil = require('/js/onepage/util/common-util');

module.exports = declare(View, {
    template: require('./trade-step.tpl'),
    placeHolderContainer: '',
    init: function() {
        this.on('beforeRender', function() {
            var orderStatuses = this.orderStatuses;
            if(orderStatuses) {
                this.data = this.processStepData({
                    orderStatuses: orderStatuses
                });
            }
        });
        this.store = new JsonStore({
            data: commonUtil.defaultSteps,
            refine: this.processStepData
        });
    },
    processStepData: function(data) {
        var currentStatus = 0;
        for (var i = 0; i < data.orderStatuses.length; i++) {
            if(data.orderStatuses[i].status) {
                currentStatus = i;
            }
        }
        data.currentStatus = currentStatus;

        for (var i = 0; i < data.orderStatuses.length; i++) {
            data.orderStatuses[i].currentStatus = currentStatus;
            data.orderStatuses[i].currentIndex = i;
        }
        return data;
    }

});
