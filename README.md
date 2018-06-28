# About

'smooth-transition' is a small tool intended to make it easier to create performant interfaces in [React Native](https://facebook.github.io/react-native/). You can read more about this in the [blog post introducing it](https://corbt.com/posts/2015/12/22/breaking-up-heavy-processing-in-react-native.html).
`smooth-transition` can help you when you have to do heavy work in certain components before they are about to mount and do not want to delay UI transitions.
Twitter used a similar technique when they first transferred their app to mobile.

# Getting Started

This quick start assumes that you're already familiar with the `async` and `await` keywords, which you can read up on [here](https://medium.com/the-exponent-log/react-native-meets-async-functions-3e6f81111173#.6yek596lu). Async and await are enabled by default in current versions of React Native, so this pattern works in RN, right out of the box.

```javascript
import smoothTransition from 'smooth-transition';

const response = await fetch("https://someWebsite/api/data");
const responseJSON = await response.json();

forEach (item in responseJSON.list) {
  // stops js until next animation frame is available
  await smoothTransition();
  someFunction(item);
}

or before your going to mount a heavy component - example below

changeSceneFunction(index){
  // specify true to enable scene delay. Under the hood it waits for 2 frames
  // assuming your new component is going to mount
  this.setState({tabIndex:index}, () => smoothTransition(true));
}

```

# Uses

This project was made and tested with React Native. This should work across all browsers.

# License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
