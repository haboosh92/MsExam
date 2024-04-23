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
  
  document.getElementById('fontColorPicker').addEventListener('change', function() {
    var fontColor = this.value;
    document.execCommand('foreColor', false, fontColor);
  });
  
  document.getElementById('paragraphStyleBtn').addEventListener('click', function() {
    // Implement paragraph style functionality
    alert("Paragraph style feature is not implemented yet.");
  });
  
  document.getElementById('clipboardBtn').addEventListener('click', function() {
    // Implement clipboard functionality
    alert("Clipboard feature is not implemented yet.");
  });
  
//   document.getElementById('findReplaceBtn').addEventListener('click', function() {
//     // Implement find & replace functionality
//     alert("Find & Replace feature is not implemented yet.");
//   });
  
document.getElementById('findReplaceBtn').addEventListener('click', function() {
    var findText = document.getElementById('findInput').value;
    var replaceText = document.getElementById('replaceInput').value;
    var content = document.getElementById('editor').innerText;
    var replacedContent = content.replace(new RegExp(findText, 'g'), replaceText);
    document.getElementById('editor').innerText = replacedContent;
    closeModal();
  });
  
  // Open the modal
  document.getElementById('findReplaceBtn').addEventListener('click', function() {
    document.getElementById('findReplaceModal').style.display = "block";
  });
  
  // Close the modal when the user clicks the close button (X)
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    closeModal();
  });
  
  // Close the modal when the user clicks anywhere outside of the modal content
  window.onclick = function(event) {
    var modal = document.getElementById('findReplaceModal');
    if (event.target == modal) {
      closeModal();
    }
  }
  
  function closeModal() {
    document.getElementById('findReplaceModal').style.display = "none";
  }
  