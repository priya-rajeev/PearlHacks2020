// this contains the frontend javascript code that runs in your browser
// it calls the backend nodejs server
import _ from 'lodash';

function render() {
  const element = document.createElement('div');
  var list = [];

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // const textbar = document.createElement('input');
  // textbar.setAttribute("type", "text");
  // textbar.setAttribute("placeholder", "+191955512142");
  // // TODO validate its a real phone number in the proper format
  //
  // const button = document.createElement('input');
  // button.setAttribute("id", "button")
  // button.setAttribute("type", "button");
  // button.setAttribute("value", "Send a Text!");
  // button.onclick = sendText(textbar);

    const name = document.getElementById('name');
    const number = document.getElementById('number')
    // // TODO validate its a real phone number in the proper format
    const button = document.getElementById('button');
    const state = document.getElementById('state');
    const keyword = document.getElementById('keyword');
    button.onclick = sendText(number, keyword);
    // button.onclick = pushData(keyword);


  document.body.appendChild(element);
  document.body.appendChild(name);
  document.body.appendChild(state);
  document.body.appendChild(keyword);
  document.body.appendChild(number);
  document.body.appendChild(button);

}
// function pushData(name, state, keyword, number) {
//     // var entry = [];
//     //
//     // var name = document.getElementById('name').value;
//     // entry.push(name);
//     //
//     // var state = document.getElementById('state').value;
//     // entry.push(state);
//     //
//     // var keyword = document.getElementById('keyword').value;
//     // entry.push(keyword);
//     //
//     // var number = document.getElementById('number').value;
//     // entry.push(number);
//     //
//     // list.push(entry);
//
//     httpGet("http://localhost:8080/pushData?to=" + encodeURIComponent(name.value) + encodeURIComponent(name.value));
//
//
// }

// function clicked(number, key) {
//     httpGet("http://localhost:8080/clicked/" + encodeURIComponent(number.value) + "/" +encodeURIComponent(key.value) );
// }

function sendText(number) {
  return function () {
    httpGet("http://localhost:8080/sendText?to=" + encodeURIComponent(number.value));
  }
}
//
// function pushData(key) {
//     return function() {
//         httpGet("http://localhost:8080/pushingData?about=" + encodeURIComponent(key.value));
//     }
// }


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

render();
