# Créer un set avec tes nombres favoris
my_fav_numbers = {3, 7, 42}

# Ajouter deux nouveaux nombres
my_fav_numbers.add(99)
my_fav_numbers.add(12)

# Supprimer le "dernier" nombre (comme un set est non ordonné, on doit retirer un élément arbitraire)
# Supposons qu'on veut retirer le dernier ajouté (par exemple 12)
my_fav_numbers.remove(12)

# Créer un set avec les nombres favoris de ton ami(e)
friend_fav_numbers = {5, 7, 88}

# Combiner les deux sets
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Afficher le résultat
print("Mes nombres favoris :", my_fav_numbers)
print("Nombres favoris de mon ami(e) :", friend_fav_numbers)
print("Nos nombres favoris combinés :", our_fav_numbers)
