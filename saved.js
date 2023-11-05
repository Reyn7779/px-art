// ... existing JavaScript code ...

function saveArt() {
    const pixelData = [...document.querySelectorAll('.pixel')].map(pixel => pixel.style.backgroundColor);
    const name = prompt('Enter a name for your artwork:'); // Ask user for a name
    if (name) {
      let savedArtworks = JSON.parse(localStorage.getItem('savedArtworks')) || [];
      savedArtworks.push({ name, pixelData, timestamp: new Date().getTime() });
      localStorage.setItem('savedArtworks', JSON.stringify(savedArtworks));
      updateSavedList(); // Update the display list
      alert('Art saved!');
    }
  }
  
  function updateSavedList() {
    const savedList = document.getElementById('savedList');
    const savedArtworks = JSON.parse(localStorage.getItem('savedArtworks')) || [];
    savedList.innerHTML = ''; // Clear current list
    savedArtworks.forEach(art => {
      const listItem = document.createElement('li');
      listItem.textContent = art.name;
      listItem.onclick = () => loadArt(art.timestamp); // Load the clicked artwork
      savedList.appendChild(listItem);
    });
  }
  
  function loadArt(timestamp) {
    const savedArtworks = JSON.parse(localStorage.getItem('savedArtworks')) || [];
    const artToLoad = savedArtworks.find(art => art.timestamp === timestamp);
    if (artToLoad) {
      artToLoad.pixelData.forEach((color, i) => {
        document.querySelectorAll('.pixel')[i].style.backgroundColor = color;
      });
      alert('Art loaded!');
    } else {
      alert('Artwork not found.');
    }
  }
  
  // Call this function on page load to display the saved list
  updateSavedList();
  
  // ... existing JavaScript code ...
  