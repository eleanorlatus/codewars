function domainName(url){
if(url.includes("www")) return url.split(".")[1]
else if(url.includes("//")) return url.replace("//", ".").split(".")[1]
else return url.split(".")[0]
}

// OR

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
