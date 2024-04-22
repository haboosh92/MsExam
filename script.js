document.getElementById('boldBtn').addEventListener('click', function() {
    document.execCommand('bold');
  });
  
  document.getElementById('italicBtn').addEventListener('click', function() {
    document.execCommand('italic');
  });
  
  document.getElementById('underlineBtn').addEventListener('click', function() {
    document.execCommand('underline');
  });
  
  document.getElementById('fontSizeSelect').addEventListener('change', function() {
    var fontSize = this.value;
    document.execCommand('fontSize', false, fontSize);
  });
  
  document.getElementById('fontFamilySelect').addEventListener('change', function() {
    var fontFamily = this.value;
    document.execCommand('fontName', false, fontFamily);
  });
  