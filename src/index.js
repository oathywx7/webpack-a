import _ from 'lodash'
import $ from 'jquery'
import * as wang from './wang'
import './jack.less'
import png from './1.png'

var img1 = document.createElement("img");
img1.src = png;
document.body.appendChild(img1);

function component() {
  var $div = $('<div/>')

  // Lodash, currently included via a script, is required for this line to work
  $div.html( _.join(['hello', 'webpack'], ' '))

  return $div
}

$(document.body).append(component())
