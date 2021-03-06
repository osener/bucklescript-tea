// Generated by BUCKLESCRIPT VERSION 4.0.1, PLEASE EDIT WITH CARE
'use strict';

var Vdom = require("./vdom.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Tea_sub = require("./tea_sub.js");
var Tea_json = require("./tea_json.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

var position = Tea_json.Decoder[/* map2 */17]((function (x, y) {
        return /* record */[
                /* x */x,
                /* y */y
              ];
      }), Tea_json.Decoder[/* field */11]("pageX", Tea_json.Decoder[/* int */3]), Tea_json.Decoder[/* field */11]("pageY", Tea_json.Decoder[/* int */3]));

function registerGlobal(name, key, tagger) {
  var enableCall = function (callbacks_base) {
    var callbacks = /* record */[/* contents */callbacks_base];
    var fn = function (ev) {
      var match = Tea_json.Decoder[/* decodeEvent */31](position, ev);
      if (match.tag) {
        return undefined;
      } else {
        return Js_primitive.some(Curry._1(tagger, match[0]));
      }
    };
    var handler = /* EventHandlerCallback */Block.__(0, [
        key,
        fn
      ]);
    var elem = document;
    var cache = Vdom.eventHandler_Register(callbacks, elem, name, handler);
    return (function () {
        Vdom.eventHandler_Unregister(elem, name, cache);
        return /* () */0;
      });
  };
  return Tea_sub.registration(key, enableCall);
}

function clicks($staropt$star, tagger) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  return registerGlobal("click", key, tagger);
}

function moves($staropt$star, tagger) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  return registerGlobal("mousemove", key, tagger);
}

function downs($staropt$star, tagger) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  return registerGlobal("mousedown", key, tagger);
}

function ups($staropt$star, tagger) {
  var key = $staropt$star !== undefined ? $staropt$star : "";
  return registerGlobal("mouseup", key, tagger);
}

exports.position = position;
exports.registerGlobal = registerGlobal;
exports.clicks = clicks;
exports.moves = moves;
exports.downs = downs;
exports.ups = ups;
/* position Not a pure module */
