# Redux Exercise

In this exercise, you will build a mood changer app that uses redux to alter the mood of a text emoji, as shown below:

[<img src="moodchanger.gif" width="350"/>](demo)

You can use whatever ASCII faces you want. You can find a complete list of options [here](https://www.jemoticons.com/en/). Note that the app starts with a default ASCII face that doesn’t correspond do any of the moods.

Remember that since you are using Redux, **your reducer must be a pure function**. Your actions should include a **payload** with the new face.

For DOM manipulation you can use raw JavaScript or JQuery. Redux has been provided for you in a script tag within the starter code.

**Do not build this application using React - this should strictly be done with Redux**

Further Study

- Research what the subscribe method on a redux store does. How could you use a **subscribe** to help refactor your mood app?
- Add a background color that corresponds to each mood.
- Add a random mood button
