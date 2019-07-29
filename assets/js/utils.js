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

    parseJwt: function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    },

    doLogoutAndGoHome: function () {
        localStorage.removeItem("token");
        localStorage.removeItem("accountData");
        window.location.href = "index.php";
        return;
    },

    apiCall: function (method, url, parameters, apikey) {
        if (!method) {
            console.error('Function apiCall missing argument (1)');
            return;
        }
        if (!url) {
            console.error('Function apiCall missing argument (2)');
            return;
        }

        if(typeof parameters == "undefined"){ parameters = null; }

        this.showLoadingON();

        //If url star with http or https I'll use url to call api. Api called is external
        //If url start with /xxxx it means that api is internal
        if ( !(url.indexOf("https") == "-1" || url.indexOf("http") == "-1") ) {

            if(url.substr(0, 1) == '/'){
                url = 'index.php'+url;
            }else{
                url = 'index.php'+'/'+url;
            }
        }

        if(typeof apikey == "undefined"){


        }







    },

    showLoadingON: function () {
        Edge.showloading = true;
    },
    showLoadingOFF: function () {
        Edge.showloading = false;
    }
};
