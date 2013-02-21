(function (){
  var newcss = '';
  var tags = [['H1','#f00'],['H2','#0a0'],['H3','#00f'],['H4','#f0f'],['H5','#0ff'],['H6','#0ff'],['P','#0aa'],['LI','#aa0'],['A','#000']];
  var createMarker = function(tag, bg){
    return tag + ':before {padding: 0 4px; margin-right: 4px; color: #fff;content: "' + tag + '";background: ' + bg + ';} ';
  };
  for (var i = 0; i < tags.length; i++) {
    newcss += createMarker(tags[i][0], tags[i][1]);
  }
  if ('\v'=='v') /* ie only */ {
      document.createStyleSheet().cssText = newcss;
  } else {
    var tag = document.createElement('style'); tag.type = 'text/css'; document.getElementsByTagName('head')[0].appendChild(tag); 
    tag[ (typeof document.body.style.WebkitAppearance=='string') /* webkit only */ ? 'innerText' : 'innerHTML'] = newcss;    
  }
})();