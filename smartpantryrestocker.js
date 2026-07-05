const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment (rawData){
   let array = []
  
   outerLoop:
    for (let i = 0; i < rawData.length; i++) {
        let splitz = rawData[i].split("|");
        for (let z = 0; z < array.length; z++) {
            if (array[z].sku === splitz[0]) {
                continue outerLoop;
            }
        }
        let idx = array.length;
        array.push({});
        array[idx].sku = splitz[0];
        array[idx].name = splitz[1];
        array[idx].qty = +splitz[2];
        array[idx].expires = splitz[3];
        array[idx].zone = splitz[4] || "general";
    }
  return array
}

function planRestock(pantry, shipment){
  let array = []
  for(let test of shipment){
    if(test.qty <= 0){
      array.push(
        {
          type:"discard",
          item:test
        }
      )
    }else if(pantry.some(pantryItem => pantryItem.sku === test.sku)){
            array.push(
        {
          type:"restock",
          item:test
        }
      )
    }else{
            array.push(
        {
          type:"donate",
          item:test
        }
      )
    }
  }
  return array
}

function groupByZone(actions){
  let object = {}
  for(let b of actions){
    if(!object.hasOwnProperty(b.item.zone)){
      object[b.item.zone] = [] 
    }
    object[b.item.zone].push(b)
  }
  return object
}

function clonePantry(pantry){
  return pantry.map(item => ({ ...item }));
}

const parsedShipment = parseShipment(rawData);
const clonedPantry = clonePantry(pantry);
const actions = planRestock(clonedPantry, parsedShipment);
const groupedResult = groupByZone(actions);

console.log(groupedResult);