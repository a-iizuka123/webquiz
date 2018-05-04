// Whole-script strict mode syntax
"use strict";

function getUrlParams() {
  let arg = new Object;
  let pair=location.search.substring(1).split('&');
  for(let i=0;pair[i];i++) {
      let kv = pair[i].split('=');
      arg[kv[0]]=kv[1];
}

$(document).ready(function(){

});
