const inputContainer = document.getElementById("inputContainer");

const GetFloor = function() {
  
  return new Int(document.getElementById("floor").value);
  
};

function updateStats() {
  
  const floor = document.getElementById("floor").value;
  
  document.getElementById("agi").textContent = floor.ToString;
  
}

function updateMobs() {}
