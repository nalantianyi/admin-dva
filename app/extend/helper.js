/**
 * Created by nalantianyi on 2017/3/8.
 */
const moment=require('moment');
exports.relativeTime=time=>moment(new Date(time*1000)).fromNow();
