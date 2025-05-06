function makeTextBigger() {
    document.getElementById("text-area").style.fontSize = "24pt";
  }
  
  function changeStyle() {
    const textArea = document.getElementById("text-area");
  
    if (document.getElementById("fancy").checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked) {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  function mooText() {
    const textArea = document.getElementById("text-area");
    let text = textArea.value.toUpperCase();
  
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
      let words = sentences[i].trim().split(" ");
      if (words.length > 0) {
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
      }
    }
  
    textArea.value = sentences.join(". ");
  }
  