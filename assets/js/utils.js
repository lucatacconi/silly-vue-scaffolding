var Utils = {
    // request: function (method, uri, data) {
    //     if (!method) {
    //         console.error('Function request missing argument (1)');
    //         return;
    //     }

    //     if (!uri) {
    //         console.error('Function request missing argument (2)');
    //         return;
    //     }

    //     if(typeof data == "undefined"){ data = null; }

    //     var url = uri;
    //     if (uri.indexOf("http") == "-1") {
    //         if(typeof appJson != "undefined"){
    //             var lastchar = "";
    //             if(appJson.webpath_root.substr(appJson.webpath_root.length - 1) != "/"){ lastchar = "/"; }
    //             url = appJson.webpath_root + lastchar + uri;
    //         } else {
    //             url = uri;
    //         }
    //     }

    //     var config = {};
    //     if(method == "get"){
    //         config = {method: method, url: url, params: data};
    //     } else if(method == "post"){
    //         config = {method: method, url: url, data: data};
    //     }

    //     return axios(config)
    //     .catch(function (error) {
    //         App.loading = false;
    //         swal({
    //             type: 'error',
    //             title: "Errore generico",
    //             //html: '<pre style="text-align:left;font-size:60%">'+JSON.stringify(error, undefined, 4)+'</pre>',
    //             html: 'Si &egrave; verificato un errore. Si prega di riprovare pi&ugrave; tardi',
    //             showCancelButton: false,
    //             confirmButtonColor: '#0073b7',
    //             confirmButtonText: 'Ritorna alla Home'
    //         }).then(function (result) {
    //             if (result) {
    //                 window.location.href = "./index.php";
    //             }
    //         }).catch(swal.noop);
    //     });
    // },
    // getLang: function (lang, code) {
    //     if (!lang) {
    //         console.error('Function getLang missing argument (1)');
    //         App.loading = false;
    //         return;
    //     }

    //     if (!code) {
    //         console.error('Function getLang missing argument (2)');
    //         App.loading = false;
    //         return;
    //     }



    //     return Util.request("post", '/index.php/util/dictionary', {
    //         p_lang: lang,
    //         p_code: code,
    //         p_cfg_ente: App.$store.getters.getConfigDolObject
    //     })
    //     .catch(function (error) {
    //         App.loading = false;
    //         swal({
    //             type: 'error',
    //             title: "Dettaglio errore (fn getLang)",
    //             html: '<pre style="text-align:left;font-size:60%">'+JSON.stringify(error, undefined, 4)+'</pre>'
    //         }).catch(swal.noop);
    //     });

    // },
    // loadContainerTemplate: function (container, mainParams, path) {
    //     if (!container) {
    //         console.error('Function loadContainerTemplate missing argument (1)');
    //         App.loading = false;
    //         return;
    //     }
    //     if(typeof mainParams == "undefined"){ mainParams = null; }
    //     if(typeof path == "undefined"){ path = './index.php/load-container'; }

    //     Util.request("get", path,  {
    //         p_code: container
    //     })
    //     .then(function (response) {
    //         var rs = response.data;
    //         if(rs.status == "KO"){
    //             App.loading = false;
    //             swal({
    //                 type: 'error',
    //                 title: "Errore generico",
    //                 html: '<strong>fn loadContainerTemplate: </strong>'+rs.error
    //             }).catch(swal.noop);
    //             return;
    //         }

    //         if (rs.data) {
    //             $("#"+rs.data.el).html(rs.data.content);
    //             if(typeof mainParams  === 'object'){
    //                 App.$store.commit("paramsMainObject", mainParams );
    //             }
    //             App.pageView = "Default";
    //             App.containerView = "Default";
    //             App.containerView = container;
    //         }
    //     })
    //     .catch(function (error) {
    //         App.loading = false;
    //         swal({
    //             type: 'error',
    //             title: "Errore generico",
    //             html: '<strong>fn loadContainerTemplate: </strong>'+error.toString()
    //         }).catch(swal.noop);
    //     });
    // },
    loadPageTemplate: function (page, pageParams, folder, path) {
        if (!page) {
            console.error('Function loadPageTemplate missing argument (1)');
            App.loading = false;
            return;
        }
        if(typeof pageParams == "undefined"){ pageParams = null; }
        if(typeof folder == "undefined"){ folder = page.toLowerCase(); }
        if(typeof path == "undefined"){
            path = '/index.php/load-page';
            if(typeof appJson != "undefined"){
                path = appJson.webpath_root + '/index.php/load-page';
            }
        }

        Util.request("get", path, {
            p_code: page,
            p_folder: folder
        })
        .then(function (response) {
            var rs = response.data;
            if(rs.status == "KO"){
                App.loading = false;
                swal({
                    type: 'error',
                    title: "Errore generico",
                    html: '<strong>fn loadPageTemplate: </strong>'+rs.error
                }).catch(swal.noop);
                return;
            }

            if (rs.data) {
                $("#"+rs.data.el).html(rs.data.content);
                if(typeof pageParams  === 'object'){
                    App.$store.commit("paramsPageObject", pageParams );
                }
                App.pageView = "Default";
                App.pageView = page;
            }
        })
        .catch(function (error, a, b) {
            App.loading = false;
            swal({
                type: 'error',
                title: "Errore generico",
                html: '<strong>fn loadPageTemplate: </strong>'+error.toString()
            }).catch(swal.noop);
        });
    },
    // loadPageData: function (self, oRs) {
    //     var consolidata = (typeof oRs.data.consolidata != "undefined")?oRs.data.consolidata:'';
    //     var aFormData = oRs.data.aFormData;
    //     var aLOVs = oRs.data.aLOVs;

    //     // LOV
    //     for (var property2 in aLOVs) {
    //         self.$set(self.lovs, property2, aLOVs[property2]);
    //     }

    //     // Formdata
    //     if(Object.keys(aFormData).length > 0) {

    //         for (var property in aFormData) {
    //             var prop = property, val = aFormData[property];
    //             if(prop.charAt(0) == "@") {
    //                 val = Util.formatDate(aFormData[property]);
    //                 prop = property.replace("@", "");
    //             }
    //             self.$set(self.form, prop, val);
    //         }
    //     }

    //     // Confdata
    //     if(typeof oRs.data.aConfData != "undefined") {
    //         var aConfData = oRs.data.aConfData;
    //         if(Object.keys(aConfData).length > 0) {

    //             for (var property in aConfData) {
    //                 var prop = property, val = aConfData[property];
    //                 self.$set(self.confpage, prop, val);
    //             }
    //         }
    //     }

    //     // consolidata
    //     if(consolidata == "S" && self.$store.getters.getAppObject.level == "DOL" && (self.codpage != "RIEPILOGO" && self.codpage != "RIEPILOGO_STAMPA") ){
    //         if(self.codpage == "PREFERENZA_ALLOGGIO") self.consolidato = true;
    //         if(self.codpage == "SERVIZI_RICHIESTI"){
    //             // Solo per la pagina servizi
    //             Vue.nextTick(function () {
    //                 $(".dati-pagina .dati-pratica:checkbox:checked").attr("disabled", true);
    //             });
    //         } else {
    //             Vue.nextTick(function () {
    //                 $(".dati-pagina :input").attr("disabled", true);
    //                 $("button[data-toggle='collapse']").attr("disabled", false);
    //             });
    //         }
    //     }
    // },
    // getParamByName: function (param) {
    //     param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    //     var regex = new RegExp("[\\?&]" + param + "=([^&#]*)"),
    //         results = regex.exec(location.search);
    //     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    // },
    // formatDate: function (value, strFormat) {
    //     if (value && value != null) {
    //         strFormat = strFormat || 'DD/MM/YYYY';
    //         return moment(String(value)).format(strFormat);
    //     }
    // },
    createUUID: function () {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }
};
