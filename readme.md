# Bookmarklet for debugging HTML

Based on Ben Alman's [Debugging with Less](https://github.com/cowboy/benalman.com-idea/commit/d99edd33a5000875776393e28afa412496260850) and using Paul Irish's [Bookmarklet: Inject New Css Rules](http://paulirish.com/2008/bookmarklet-inject-new-css-rules/) technique. 
 
<a href='javascript:(function(){var b="";var c=[["H1","#f00"],["H2","#0a0"],["H3","#00f"],["H4","#f0f"],["H5","#0ff"],["H6","#0ff"],["P","#0aa"],["LI","#aa0"],["A","#000"]];var e=function(f,g){return f+':before {padding: 0 4px; margin-right: 4px; color: #fff;content: "'+f+'";background: '+g+";} "};for(var d=0;d<c.length;d++){b+=e(c[d][0],c[d][1])}if("\v"=="v"){document.createStyleSheet().cssText=b}else{var a=document.createElement("style");a.type="text/css";document.getElementsByTagName("head")[0].appendChild(a);a[(typeof document.body.style.WebkitAppearance=="string")?"innerText":"innerHTML"]=b}})();'>Debug HTML with CSS</a> (drag this to your bookmarks bar or right-click and add to bookmarks)