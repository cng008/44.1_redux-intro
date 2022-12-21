// set up store
const store = Redux.createStore(moodReducer);

// subscribe renderFace to face changes
const face = document.getElementById('face');

// listeners for the buttons
document.getElementById('excited').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_EXCITED', payload: '୧☉□☉୨' });
});
document.getElementById('scared').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_SCARED', payload: 'ゞ◎Д◎ヾ' });
});
document.getElementById('kiss').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_KISS', payload: ' Ⴀ͡კႠ͡' });
});
document.getElementById('dog').addEventListener('click', () => {
  store.dispatch({ type: 'MOOD_DOG', payload: '•ᴥ•' });
});

function renderFace() {
  face.innerHTML = store.getState().face;
  face.style.color = store.getState().bgColor;
}

renderFace();
store.subscribe(renderFace); // event-listener for changes. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed
