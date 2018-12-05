# JS Drum Kit

[view html](https://nntrn.github.io/JavaScript30/excercises/01-JavaScript-Drum-Kit/)


## modifications

### html

added viewport meta tag for mobile browsers: 
`<meta name="viewport" content="width=device-width, initial-scale=1">` 

### CSS:

added after `style.css`

```css
body {min-height:100vh; overflow:hidden; }
.keys {flex-wrap:wrap; margin-top:20vh; min-height:unset; user-select: none;}
.key {width:7rem; height:7rem; padding:unset; }
.key:hover, .playing {background:rgba(0,0,0,.8); }  
```


## notes

### transitionend Event
Do something to `keys` element when a CSS transition has ended:

```js
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
```
[source](https://www.w3schools.com/jsref/event_transitionend.asp)
[further reading](https://jonsuh.com/blog/detect-the-end-of-css-animations-and-transitions-with-javascript/)

### template literal

```js
function playKeySound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  }
```
[source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

