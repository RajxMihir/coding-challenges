const pricesInUSD = {
    item1: 10,
    item2: 20,
    item3: 30,
    item4: 40,
    item5: 50,
  };
  
  const pricesInINR = Object.entries(pricesInUSD).map(([item, price]) => {
    return [item, price * 80];
  });
  
  const pricesObjectInINR = Object.fromEntries(pricesInINR);
  
  console.log(pricesObjectInINR);
  