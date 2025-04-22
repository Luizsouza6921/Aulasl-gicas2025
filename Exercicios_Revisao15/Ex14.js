function converterParaCentimetros(metros) {

    const centimetros = metros * 100;
   

    return centimetros;
  }
 

  const metros = 5;  
  const centimetros = converterParaCentimetros(metros);
 
  console.log(`${metros} metros são equivalentes a ${centimetros} centímetros.`);