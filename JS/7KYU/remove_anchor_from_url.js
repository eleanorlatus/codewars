function removeUrlAnchor(url){
  const i = url.indexOf('#')
  return i > 0 ? url.slice(0,i) : url
}

// OR

function removeUrlAnchor(url){
  return url.split('#')[0];
}
