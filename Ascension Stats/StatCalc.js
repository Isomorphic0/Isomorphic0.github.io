const inputContainer = document.getElementById("inputContainer");

const statArrat = [
[1,77,20,20,208],
[2,80,21,22,220],
[3,82,21,22,229],
[4,85,22,24,241],
[5,87,23,25,250],
[6,90,23,26,262],
[7,92,24,27,272],
[8,95,25,28,284],
[9,97,25,29,293],
[10,100,26,30,305],
[11,102,27,31,315],
[12,105,28,32,328],
[13,107,28,33,338],
[14,110,29,35,351],
[15,112,30,36,361],
[16,115,31,37,374],
[17,117,31,38,383],
[18,120,32,39,397],
[19,122,33,40,407],
[20,125,34,42,420],
[21,127,34,43,430],
[22,130,35,44,444],
[23,132,36,45,454],
[24,135,37,46,468],
[25,137,38,47,478],
[26,140,39,49,492],
[27,142,39,50,502],
[28,145,40,51,516],
[29,147,41,52,526],
[30,150,42,54,541],
[31,152,42,55,551],
[32,155,43,56,566],
[33,157,44,57,576],
[34,160,45,59,591],
[35,162,46,60,601],
[36,165,47,61,616],
[37,167,47,62,626],
[38,170,48,64,641],
[39,172,49,65,652],
[40,175,50,66,667],
[41,177,51,67,678],
[42,180,52,69,693],
[43,182,53,70,704],
[44,185,54,71,719],
[45,187,54,73,730],
[46,190,55,74,745],
[47,192,56,75,756],
[48,195,57,77,772],
[49,197,58,78,783],
[50,200,59,79,798],
[51,202,60,81,810],
[52,205,61,82,825],
[53,207,62,83,836],
[54,210,63,85,852],
[55,212,63,86,864],
[56,215,64,87,879],
[57,217,65,89,891],
[58,220,66,90,907],
[59,222,67,91,918],
[60,225,68,93,934],
[61,227,69,94,946],
[62,230,70,96,962],
[63,232,71,97,974],
[64,235,72,99,990],
[65,237,73,100,1002],
[66,240,74,101,1018],
[67,242,75,103,1030],
[68,245,76,104,1046],
[69,247,76,105,1058],
[70,250,77,107,1075],
[71,252,78,108,1087],
[72,255,80,110,1103],
[73,257,80,111,1115],
[74,260,82,113,1132],
[75,262,82,114,1145],
[76,265,84,116,1161],
[77,267,84,117,1173],
[78,270,85,119,1190],
[79,272,86,120,1202],
[80,275,87,121,1219],
[81,277,88,123,1232],
[82,280,89,124,1249],
[83,282,90,126,1261],
[84,285,91,127,1278],
[85,287,92,129,1291],
[86,290,93,130,1308],
[87,292,94,132,1320],
[88,295,96,133,1338],
[89,297,96,135,1350],
[90,300,98,136,1368],
[91,302,99,138,1380],
[92,305,100,139,1398],
[93,307,100,141,1411]
];



const GetFloor = function() {
  
  return new Int(document.getElementById("floor").value);
  
};

function updateStats() {
  
  const floor = document.getElementById("floor").value;
  
  var vit="";
  var eleStat = "";
  var lock = "";
  var parry = "";
  var ini = "";

  if (floor > 100 || floor < 1) {

    eleStat = "N/A";
    lock = "N/A";
    parry = "N/A";
    ini = "N/A";

  } else {

    eleStat = String(statArrat[floor-1][4]);
    lock = String(statArrat[floor-1][3]);
    parry = String(statArrat[floor-1][2]);
    ini = String(4*statArrat[floor-1][4]);

}

  document.getElementById("vitNumber").textContent = String(Math.floor(Math.pow(Math.floor(2.5*floor)+75, 1.645))-500);
  document.getElementById("strNumber").textContent = eleStat;
  document.getElementById("intNumber").textContent = eleStat;
  document.getElementById("chaNumber").textContent = eleStat;
  document.getElementById("agiNumber").textContent = eleStat;
  document.getElementById("damNumber").textContent = String(Math.floor(3.2*(Math.floor(2.5*floor))+50))
  document.getElementById("lockNumber").textContent = lock;
  document.getElementById("apRedNumber").textContent = parry;
  document.getElementById("apParryNumber").textContent = parry;
  document.getElementById("mpRedNumber").textContent = parry;
  document.getElementById("mpParryNumber").textContent = parry;
  document.getElementById("iniNumber").textContent = ini
  
}

function updateMobs() {}
