# tns-i18n
This is a Nativescript plugin that implements i18n easily.

It adds `_L` function to global variable and XML files so you can use it anywhere in the app. The module detects the preferred user language and displays text in this language if it is handled by the app, if not, it will load the text in the default language you chose.

# Installation
```
tns plugin add https://github.com/guaricema/tns-i18n
```

# Usage

## Import

Import the module in **app.js** before anything else:

> You have to mention the default language code

```javascript
require("tns-i18n")("en");
require("./bundle-config");

var application = require("application");
application.setResources({ _L: _L });

application.start({ moduleName: "home/home-page" });
```

## Creating locales
Now, create a **i18n** folder in **app** folder.

```
app
|___ i18n
    |___ en.js
    |___ ru.js
```

### Must export in files
The files containing the strings, must export an object of the strings.

Eg: **en.js**
```javascript
module.exports = {
    greetings: 'Hello %s',
    bye: 'Nice to meet you %s, see you in %s days'
};
```

## Load strings

### XML
In XML files:
```xml
<Label text="{{ _L('greetings') }}"></Label>
```

### JS
```javascript
_L("greetings")
```

## Replacements
The module supports replacements of `%s`.

Eg:
```xml
<Label text="{{ _L('greetings', 'My friend') }}"></Label>
<!-- Will give: Hello My friend -->
```

### Multiple replacements
For multiple replacements, you can use an array, separate arguments or even both.

Eg:
```xml
<Label text="{{_L('bye', 'My friend', '5')}}"></Label>
<!-- Will give: Nice to meet you My friend, see you in 5 days -->
```
**_Or:_**
```xml
<Label text="{{_L('bye', ['My friend', '5'])}}"></Label>
<!-- Will give: Nice to meet you My friend, see you in 5 days -->
```
