# silly-vue-scaffolding

[![Latest Stable Version](https://poser.pugx.org/lucatacconi/silly-vue-scaffolding/v/stable)](https://packagist.org/packages/lucatacconi/silly-vue-scaffolding)
[![Total Downloads](https://poser.pugx.org/lucatacconi/silly-vue-scaffolding/downloads)](https://packagist.org/packages/lucatacconi/silly-vue-scaffolding)
[![Latest Unstable Version](https://poser.pugx.org/lucatacconi/silly-vue-scaffolding/v/unstable)](https://packagist.org/packages/lucatacconi/silly-vue-scaffolding)
[![License](https://poser.pugx.org/lucatacconi/silly-vue-scaffolding/license)](https://packagist.org/packages/lucatacconi/silly-vue-scaffolding)

![silly-vue-scaffolding](https://user-images.githubusercontent.com/9921890/94295629-ccbbed00-ff61-11ea-93e7-3f2255c5c344.png)

Vue/Vuetify, combined with systems such as Webpack, Browserify or Vue-cli becomes an extremely easy and versatile development tool.

Compiling all Vue files in a single file, even if useful for a more rapid execution of the application, sometimes becomes a brake for debugging, analysis of functioning on production servers or last minute changes.

**Silly-vue-scaffolding** is an easy way to release modular **Vue/Vuetify** applications, thus composed of several Vue files. Vue components are loaded but not compiled and made available using the [FranckFreiburger/http-vue-loader](https://github.com/FranckFreiburger/http-vue-loader) library.

Natively **Silly-vue-scaffolding** includes an API section based on **Slim** and protected by **JWT** ([tuupola/slim-jwt-auth](https://github.com/tuupola/slim-jwt-auth)).

A login page allows users to access to application's main area whose frontend is based on **Vuetify**.

The application menu is managed dynamically created, based on a specific configuration file that identifies items and filtered them based on the user's access level. The content of the main application area is managed via **Vue Router**.

Specific configuration files make it possible to easily configure all running parameters of the application.

The custom sections can be added to the sections directory and recalled via an entry in the specific configuration file that identifies the sections that can be recalled in the main menu.

Read specific sections of this document to install and configure the application.


## System Requirements

* Web server with URL rewriting
* PHP 7.1.3 or newer
* Composer


## Installation and application setup

It's recommended that you use [Composer](https://getcomposer.org/) to install Silly-vue-scaffolding.

Access the **Document Root** folder on your **Apache Server** or one of the configured virtual hosts and run the following command:
```
bash
$ composer create-project lucatacconi/silly-vue-scaffolding
```

Configure the main application information and environment by editing /config/application.json and .env file

In any case it is possible to download the complete package from Github and proceed with the configuration of the appropriate files.


## First Login

The application is preconfigured with a single access user to verify the login procedure and access the dashboard and the main menu.

To test access use the login **admin** and password **password**


## Accounts configuration

All users enabled to access the application are configured in the configuration file /config/accounts.json.

The accounts.json configuration file has the following format:
```
[
    {
        "username":"admin",
        "name":"Admin User",
        "userType":"admin",
        "email":"admin@nomail.com",
        "password":"password",
        "active":"Y",
        "expireDate":"2020-10-10",
        "customSessionDuration":""
    },
    {
        "username":"j.doe",
        "name":"Jhon Doe",
        "userType":"user",
        "email":"j.doe@nomail.com",
        "password":"password",
        "active":"Y",
        "expireDate":"2020-10-10",
        "customSessionDuration":""
    },
    ...
]
```

Among the various information listed, the type of user is also induced, information that is then used to filter the menu items enabled for the user.

For simplicity's choice the access configurations have been inserted in a file. However, nothing prevents the implementation of user management based on database reading.

## Menu configuration

All menu items shown in the main menu are configured in the configuration file /config/navigation.json.

The navigation.json configuration file contains two configuration items: the first element configures the bootstrap page (bootstrapPage), the second element configures the map of menu items (navigationMap).

**bootstrapPage** configures the first page that will be shown following a successful login:
```
    "bootstrapPage":{
        "route": "/dashboard",
        "title": "Dashboard"
    }
```

**route** represents the route of one of the elements configured in the navigation map, **title** represents the title that will be shown in the application's NavBar:

**navigationMap** contains all the elements that are shown in the main menu. It can contain three types of elements: the main menu element, the submenu element which in turn contains menu elements and the divider that represents a graphic subdivision within the mneu represented by a line. Each individual element can then be configured with different properties that set its behavior, display and layout.

The format for the single menu element is as follows:
```
    {
        "title": "Dashboard",
        "subtitle": "App main page",
        "allowed":[],
        "visible": true,

        # if you want to point to an internal section

        "action":{
            "path": "/dashboard",
            "component": "../../app/sections/dashboard/Dashboard.vue"
        },

        # if you want to call a javascript function

        "action": "alert('Hello world 1')",

        # if you want to call an external web page

        "action":{
            "url": "https://github.com/lucatacconi/silly-vue-scaffolding",
            "target": "_blank"
        },

        "action":{
            "url": "https://github.com/lucatacconi/silly-vue-scaffolding",
            "target": "_self"
        },

        "layout":{
            "icon":"mdi-view-dashboard-variant",
            "disabled": false,
            "color": false,
            "class": false
        }
    }
```

The format for the divider element is as follows:
```
    {
        "divider": true,
        "visible": true
    }
```

The format for the submenu element is as follows. Within the subMenuItems section the elements must be inserted as shown in the previous examples.
```
    {
        "title": "App1",
        "subtitle": "Example app1"
        "allowed": ["admin"],
        "visible": true,
        "layout": {
            "icon": "mdi-menu",
            "expanded": true,
            "disabled": false,
            "color": false,
            "class": false
        },
        "subMenuItems":[
            ...
        ]
    }
```


## Credits

* [Luca Tacconi](https://github.com/lucatacconi)
* [Emanuele Marchesotti](https://github.com/flagellarmirror)


## License

Silly Vue Scaffolding is licensed under the MIT license. See [License File](LICENSE.md) for more information.
