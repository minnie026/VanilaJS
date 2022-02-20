const Selectcolors = [
    ' radial-gradient( circle farthest-corner at -0.1% 1.8%,  rgba(255,77,77,0.7) 0%, rgba(255,184,129,0.34) 100.2% )',
    ' linear-gradient( 109.6deg,  rgba(247,202,201,1) 20.6%, rgba(146,168,209,1) 85.9% )',
    ' radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,214,171,1) 0%, rgba(255,182,182,1) 90% )',
    ' radial-gradient( circle 400px at 6.8% 8.3%,  rgba(255,244,169,1) 0%, rgba(255,244,234,1) 100.2% );',
    ' linear-gradient( 359deg,  rgba(150,192,255,1) -17.7%, rgba(255,180,161,1) 101.5% )',
    ' linear-gradient( 90.5deg,  rgba(255,207,139,0.50) 1.1%, rgba(255,207,139,1) 81.3% )',
    ' radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,214,171,1) 0%, rgba(255,182,182,1) 90% )',
    'linear-gradient( 179.1deg,  rgba(247,238,238,1) -1.9%, rgba(247,202,201,1) 44.9%, rgba(145,168,208,1) 96.1% )',
    
    'linear-gradient( 123.5deg,  rgba(244,219,251,1) 29.3%, rgba(255,214,214,1) 67.1% )',
    'radial-gradient( circle 666px at 0.4% 48%,  rgba(202,204,227,1) 0%, rgba(89,89,99,1) 97.5% )',
    'linear-gradient(to right, rgb(221, 214, 243), rgb(250, 172, 168))',
    'radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,156,156,1) 0%, rgba(179,201,241,1) 90% )',
     ];
    
    
     const getUser = localStorage.getItem("USER_NAME");
     console.log(getUser);
    
    
    
     const colorValue = Math.floor(Math.random() * Selectcolors.length);
     const newColor = Selectcolors[colorValue];
     console.log(`색깔 ${colorValue} ${newColor}`);
    
     document.body.style.backgroundImage = newColor;
    