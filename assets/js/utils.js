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

        //If url start with http or https I'll use url to call api. Api called is external
        //If url start with /xxxx it means that api is internal
        if ( !(url.indexOf("https") == "-1" || url.indexOf("http") == "-1") ) {
            if(url.substr(0, 1) == '/'){
                url = 'index.php'+url;
            }else{
                url = 'index.php'+'/'+url;
            }
        }

        //Preparing axios api call
        var call_config = {};
        call_config.method = method;
        call_config.url = url

        // if(method == "get"){
        //     config = {method: method, url: url, params: data};
        // } else if(method == "post"){
        //     config = {method: method, url: url, data: data};
        // }

        call_config.params = parameters;

        //Security check
        call_config.headers = {};
        if(typeof apikey == "undefined"){
            call_config.headers.Authorization = "Bearer " + apikey;
        }else{
            if(localStorage.getItem("token") != '' && localStorage.getItem("token") != null && localStorage.getItem("token") != 'undefined'){
                apikey = localStorage.getItem("token");
                call_config.headers.Authorization = "Bearer " + apikey;
            }
        }

        axios(call_config).then(function (response) {
            if (typeof response !== 'undefined'){
                this.showLoadingOFF();
                return response;
            }else{
                this.showLoadingOFF();

                Swal.fire({
                    type: 'error',
                    title: 'Connection error',
                    text: 'Check your internet connection and try again',
                }).then((result) => {
                    this.doLogoutAndGoHome();
                }).catch(swal.noop);
            }

        }).catch(function (error) {
            this.showLoadingOFF();

            if(error.response.status == 401){
                Swal.fire({
                    type: 'error',
                    title: 'Account error',
                    text: "Login error or session expired",
                }).then((result) => {
                    this.doLogoutAndGoHome();
                });
            }else{
                Swal.fire({
                    type: 'error',
                    title: 'Engine error',
                    text: error.response,
                }).then((result) => {

                }).catch(swal.noop);
            }
        })
    },

    showLoadingON: function () {
        Edge.showloading = true;
    },
    showLoadingOFF: function () {
        Edge.showloading = false;
    }
};
