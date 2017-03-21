/**
 * Created by nalantianyi on 2017/3/9.
 */
module.exports = {
    get isIOS() {
        const iosReg = /iphone|ipad|ipod/i;
        return iosReg.test(this.get('user-agent'));
    },
};