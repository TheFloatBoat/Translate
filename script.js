function translateText() {
    const inputText = document.getElementById('textInput').value;

    // Replace 'YOUR_API_KEY' with your actual Google Cloud Translate API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: inputText,
            source: 'auto',
            target: 'en',
        }),
    })
    .then(response => response.json())
    .then(data => {
        const translations = data.data.translations;
        displayTranslations(translations);
    })
    .catch(error => console.error('Error:', error));
}

function displayTranslations(translations) {
    const translationsList = document.getElementById('translationsList');
    translationsList.innerHTML = '';

    translations.forEach((translation, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Translation ${index + 1}: ${translation.translatedText}`;
        translationsList.appendChild(listItem);
    });
}
