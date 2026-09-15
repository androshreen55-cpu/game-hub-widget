const items=["Games","Web Apps","Settings","About"];
let selected=0;
const menu=document.getElementById("menu");

function render(){
  menu.innerHTML="";
  items.forEach((name,i)=>{
    const el=document.createElement("div");
    el.className="item"+(i===selected?" selected":"");
    el.textContent=(i+1)+". "+name;
    menu.appendChild(el);
  });
}
function activate(){
  const messages=[
    "Games selected",
    "Web Apps selected",
    "Settings selected",
    "Game Hub v1.0"
  ];
  alert(messages[selected]);
}
document.addEventListener("keydown",e=>{
  if(["ArrowUp","ArrowDown","Enter","1","2","3","4"].includes(e.key)) e.preventDefault();
  if(e.key==="ArrowUp") selected=(selected+items.length-1)%items.length;
  else if(e.key==="ArrowDown") selected=(selected+1)%items.length;
  else if(e.key==="Enter") activate();
  else if(/^[1-4]$/.test(e.key)) { selected=Number(e.key)-1; activate(); }
  render();
});
render();
