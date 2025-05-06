# Demander un mot à l'utilisateur
word = input("Enter a word: ")

# Initialiser une nouvelle chaîne vide
new_word = ""

# Parcourir chaque caractère dans le mot
for i in range(len(word)):
    # Ajouter le caractère seulement s'il est différent du précédent
    if i == 0 or word[i] != word[i - 1]:
        new_word += word[i]

# Afficher le mot nettoyé
print("Cleaned word:", new_word)
