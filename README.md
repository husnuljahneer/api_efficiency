# NPM MINI PACKAGES

![NPM](https://camo.githubusercontent.com/7272fbb96da1c2b30e16ba3608d1cf66ba8a30c5f8aa92e288b068b340f38ac7/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6e6f64656a732f6e6f64656a732d617232312e737667)


Check the efficiency of an API

## Installation

- This package uses **moment-timezone** package.

```sh
npm i api_efficiency
```
## Documentation


```javascript
let diffTime = require("api_efficiency");

let url = "https://jsonplaceholder.typicode.com/todos/2";

diffTime = new diffTime();
diffTime.getTimeDiff(url);

```

```sh
Sample output:

API Efficiency : 442ms
```

## License

MIT

