const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let idx = 0;
  
  function onKeyDownHandler(e) {
    const key = e.key;
    
    key === codes[idx]
      ? idx++
      : idx = 0
      
    if (idx === codes.length) {
      idx = 0;
      alert("Well done.");
    }
  }
  
  document.body.addEventListener('keydown', onKeyDownHandler)
  // console.log(document.body)
}
