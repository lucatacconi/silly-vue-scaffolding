# silly-vue-scaffolding

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

```
bash
$ composer create-project lucatacconi/silly-vue-scaffolding
```

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
    }
]
```

Among the various information listed, the type of user is also induced, information that is then used to filter the menu items enabled for the user.

For simplicity's choice the access configurations have been inserted in a file. However, nothing prevents the implementation of user management based on database reading.

## Menu configuration


## Credits

* [Luca Tacconi](https://github.com/lucatacconi)
* [Emanuele Marchesotti](https://github.com/flagellarmirror)


## License

Silly Vue Scaffolding is licensed under the MIT license. See [License File](LICENSE.md) for more information.
