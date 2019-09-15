export function notus(doc) {
  if(doc === null) {
    return '';
  }

  doc = JSON.parse(doc)
  let html = doc.map((e, i) => {
    if(e.insert.match(/^\n$/)) {
      if(
	e.attributes &&
	  e.attributes.block && (
	    e.attributes.block === 'ul' ||
	      e.attributes.block === 'ol'
	  )
      ) {
	return '';
      }
      return '<br/>';
    }
    
    let attrs = e.attributes;
    if(!attrs) {
      if (doc[i + 1] && doc[i + 1].insert.match(/^\n$/)) {
	return _render(e.insert, doc[i + 1].attributes);
      }
      
      return `<p>${e.insert}</p>`;
    }
    
    let text = _render(e.insert, attrs);
    return text;
  })

  return html.join('');
}

function _render(text, attrs) {
  const url = 'http://pxddtegnl.bkt.clouddn.com/';
  
  if(attrs.heading) {
    text = `<h${attrs.heading}>${text}</h${attrs.heading}>`
  }

  if(attrs.b) {
    text = `<b>${text}</b>`
  }

  if(attrs.i) {
    text = `<i>${text}</i>`
  }

  if(attrs.a) {
    text = `<a src=${attrs.a}>${text}</a>`
  }

  if(attrs.block) {
    text = `<${attrs.block}>${text}</${attrs.block}>`
  }
  
  if(attrs.embed) {
    if (attrs.embed.type === 'image') {
      return `<img src=${url + attrs.embed.source} /><br/><br/>`
    }

    if (attrs.embed.type === 'hr') {
      return '<hr/>';
    }
    
    return '';
  }


  return text;
}
