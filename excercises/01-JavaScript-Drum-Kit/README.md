# JS Drum Kit

[view html](https://nntrn.github.io/JavaScript30/excercises/01-JavaScript-Drum-Kit/)


## modifications

### html

added `<meta name="viewport" content="width=device-width, initial-scale=1">` to the `<head>`

### CSS:

```css
body {
    min-height: 100vh;
    overflow: hidden;
}

.keys {
    flex-wrap: wrap;
    margin-top: 20vh;
    min-height: unset;
}

.key {
    width: 7rem;
    height: 7rem;
    padding: unset;
}

.key:hover {
    background: rgba(0,0,0,.8);
}
```


## notes

### transitionend Event
Do something to `keys` element when a CSS transition has ended:

```js
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
```
[source](https://www.w3schools.com/jsref/event_transitionend.asp)

----
* [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

