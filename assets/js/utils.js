var Utils = {
    createUUID: function () {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    },

    showLoadingON: function () {
        Edge.showloading = true;
    },
    showLoadingOFF: function () {
        Edge.showloading = false;
    }
};
