




  // TAB PAGES EVENTS 

  chiffrementTab.addEventListener('click', function (e) {
    e.preventDefault();
    chiffrementView.style.display = 'block';
    dechiffrementView.style.display = 'none';
    cryptanalyseview.style.display = 'none';
  });

  dechiffrementTab.addEventListener('click', function (e) {
    e.preventDefault();
    dechiffrementView.style.display = 'block';
    chiffrementView.style.display = 'none';
    cryptanalyseview.style.display = 'none';
  });

  cryptographieTab.addEventListener('click', function (e) {
    e.preventDefault();
    chiffrementView.style.display = 'none';
    dechiffrementView.style.display = 'none';
    cryptanalyseview.style.display = 'block';
  });

  ////////////////////// TAB PAGES EVENTS END /////////////////////////////

  document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const encryptButton = document.getElementById('encryptButton');
    const downloadLink = document.getElementById('downloadLink');
    const result = document.getElementById('result');
  
    // Function to perform homophonic encryption
    function homophonicCipher(input) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const homophonicMapping = {
        A: ['@', '4', 'α'],
        B: ['β', '8', 'B'],
        C: ['¢', 'C', 'ç'],
        D: ['δ', 'D', '6'],
        E: ['€', 'E', '3'],
        F: ['ƒ', 'F', 'φ'],
        G: ['9', 'G', 'Γ'],
        H: ['H', '7', 'η'],
        I: ['1', 'I', 'ί'],
        J: ['J', 'j', 'ј'],
        K: ['K', 'k', 'κ'],
        L: ['L', 'λ', '£'],
        M: ['M', 'm', 'µ'],
        N: ['η', 'π', 'N'],
        O: ['0', 'O', 'Θ'],
        P: ['ρ', 'P', 'ρ'],
        Q: ['Q', 'q', '2'],
        R: ['®', 'R', 'я'],
        S: ['$', '5', '§'],
        T: ['7', 'T', 'τ'],
        U: ['μ', 'U', 'υ'],
        V: ['ν', 'V', '♥'],
        W: ['ω', 'W', 'ψ'],
        X: ['χ', 'X', '×'],
        Y: ['¥', 'Y', 'γ'],
        Z: ['Z', '0', 'ζ'],
        // Add more mappings as needed
      };
  
      let result = '';
  
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const charUpper = char.toUpperCase();
        if (homophonicMapping[charUpper]) {
          const symbols = homophonicMapping[charUpper];
          const randomIndex = Math.floor(Math.random() * symbols.length);
          result += symbols[randomIndex];
        } else {
          result += char; // Keep non-alphabetic characters as they are.
        }
      }
  
      return result;
    }
  
    // Event listener for the encrypt button click event
    encryptButton.addEventListener('click', function () {
      if (fileInput.files.length === 0) {
        alert('Please select a file first.');
        return;
      }
  
      const selectedFile = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const fileContent = e.target.result;
  
        // Perform homophonic encryption on file content
        const encryptedText = homophonicCipher(fileContent);
  
        // Create a Blob with the encrypted text
        const encryptedBlob = new Blob([encryptedText], { type: 'text/plain' });
  
        // Set up a download link for the encrypted file
        downloadLink.href = URL.createObjectURL(encryptedBlob);
        downloadLink.download = 'encrypted_file.txt';
        downloadLink.style.display = 'block';
  
        // Display a message to the user
        result.textContent = 'File content encrypted successfully. Click the link to download.';
      };
  
      reader.readAsText(selectedFile);
    });
  });
  