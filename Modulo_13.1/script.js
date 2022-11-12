//FUNCTIONS

function add(x, y){
    console.log(x + y)
  }
  
  add(1,1);
  add(300,200);
  
  function add_dos(x,y){
    return x + y
  }
  
  const result = add_dos(10,5);
  console.log(result);
  
  function studentPresentation(name, lastName, age, city) {
    const completeName = name + " " + lastName;
    const cityStatement = "Vivo en " + city;
    const days = age * 365;
    console.log("Hola, mi nombre es " + completeName + " y " + cityStatement + " y tengo " + days + " dias en la Tierra." );
  }
  
  
  studentPresentation("Victor", "Martinez", 39, "Sahagun" );
  