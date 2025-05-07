def make_shirt(size, message):
    print(f"The size of the shirt is {size} and the text is '{message}'.")

# Appel simple
make_shirt("M", "Code like a boss!")

# --- MODIFICATIONS DEMANDÉES ---

# Version 2 : avec valeurs par défaut
def make_shirt(size="L", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{message}'.")

# Appels de la fonction
make_shirt()  # par défaut : large, "I love Python"
make_shirt("M")  # medium, message par défaut
make_shirt("S", "Just Do It")  # taille et message personnalisés

# Bonus : appel avec arguments nommés (keyword arguments)
make_shirt(message="Keep calm and code on", size="XL")