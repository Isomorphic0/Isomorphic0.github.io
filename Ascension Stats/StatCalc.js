const inputContainer = document.getElementById("inputContainer");

const GetFloor = function() {
  
  return new Int(document.getElementById("floor").value);
  
};

function UpdateStats() {
  
  const floor = document.getElementById("floor").value;
  
  document.getElementById("agi").textContent = floor.ToString;
  
}

function UpdateMobs() {}
