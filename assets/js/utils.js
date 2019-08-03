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

    showLoading: function () {
        Edge.showloading = true;
    },
    hideLoading: function () {
        Edge.showloading = false;
    },

    goHome: function () {
        window.location.href = "index.php";
        return;
    },
    doLogoutAndGoHome: function () {
        localStorage.removeItem("token");
        localStorage.removeItem("accountData");
        window.location.href = "index.php";
        return;
    },

    apiCall: function (method, url, parameters, config) {

        if (!method || !url) {
            console.error('Function apiCall missing arguments');
            return;
        }

        if(typeof parameters === "undefined"){ parameters = null; }
        if(typeof config === "undefined"){ config = null; }


        if(!(config != null && typeof config.showLoading !== "undefined" && config.showLoading == false)){
            Utils.showLoading();
        }


        //If url start with http or https I'll use url to call api. Api called is external
        //If url start with /xxxx it means that api is internal
        if ( url.indexOf("https") == -1 && url.indexOf("http") == -1 ) {
            if(url.substr(0, 1) == '/'){
                url = '../routes' + url;
            }else{
                url = '../routes' + '/' + url;
            }
        }

        //Preparing axios api call
        var call_config = {};
        call_config.method = method;
        call_config.url = url
        call_config.params = parameters;

        //Security check
        call_config.headers = {};
        if(config != null && typeof config.apikey !== "undefined"){
            call_config.headers.Authorization = "Bearer " + config.apikey;
        }else{
            if(localStorage.getItem("token") != '' && localStorage.getItem("token") != null && localStorage.getItem("token") != 'undefined'){
                apikey = localStorage.getItem("token");
                call_config.headers.Authorization = "Bearer " + apikey;
            }
        }

        // call_config.transformResponse = [function (data) {
        //     Utils.hideLoading();
        //     return JSON.parse(data);
        // }];

        if(!(config != null && typeof config.hideLoading !== "undefined" && config.hideLoading == false)){
            axios.interceptors.response.use(function (response) {
                Utils.hideLoading();
                return response;
            }, function (error) {
                // Do something with response error
                return Promise.reject(error);
            });
        }

        return axios(call_config).catch(function (error) {

            if(error.response.status == 401){
                Swal.fire({
                    type: 'error',
                    title: 'Account error',
                    text: "Login error or session expired",
                }).then((result) => {
                    Utils.doLogoutAndGoHome();
                }).catch(swal.noop);
            }else{
                Swal.fire({
                    type: 'error',
                    title: error.response.data.status,
                    text: error.response.data.message,
                }).then((result) => {
                    return;
                })
                .catch(swal.noop);
            }
        });
    }
};
