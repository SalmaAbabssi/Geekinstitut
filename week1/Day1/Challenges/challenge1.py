# Demander un nombre et une longueur à l'utilisateur
number = int(input("Enter a number: "))
length = int(input("Enter the length of the list: "))

# Générer la liste des multiples
multiples = [number * i for i in range(1, length + 1)]

# Afficher le résultat
print(multiples)
