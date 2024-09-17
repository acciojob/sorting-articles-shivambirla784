//your JS code here. If required.
// The list of bands
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Function to strip articles "A", "An", "The" for sorting
function stripArticles(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands ignoring the articles
const sortedBands = bands.sort((a, b) => (stripArticles(a) > stripArticles(b)) ? 1 : -1);

// Add the sorted list to the HTML
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});
