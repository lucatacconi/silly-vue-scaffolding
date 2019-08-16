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


## Installation

It's recommended that you use [Composer](https://getcomposer.org/) to install Silly-vue-scaffolding.

```bash
$ composer install
```

## First Login

## System Requirements

* Web server with URL rewriting
* PHP 7.1.3 or newer
* Composer

## Credits

* [Luca Tacconi](https://github.com/lucatacconi)
* [Emanuele Marchesotti](https://github.com/flagellarmirror)


## License

Silly Vue Scaffolding is licensed under the MIT license. See [License File](LICENSE.md) for more information.
