const inputContainer = document.getElementById("inputContainer");

const GetFloor = function() {
  
  return new Int(document.getElementById("floor").value);
  
};

const UpdateStats = function() {
  
  document.getElementById("agi").textContent = GetFloor().ToString
  
}
