from googletrans import Translator

def translate_to_english(text):
    translator = Translator()
    translations = translator.translate(text, dest='en')

    english_translations = [translation.text for translation in translations]

    return english_translations

if __name__ == "__main__":
    user_input = input("Enter text to translate: ")
    english_translations = translate_to_english(user_input)

    print("English Translations:")
    for i, translation in enumerate(english_translations, start=1):
        print(f"{i}. {translation}")
