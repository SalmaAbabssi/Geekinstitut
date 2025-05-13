#exercice1
class Cat(): 
    def __init__(self, name, age):
        self.name = name
        self.age = age
    #cration 3 objet 
cat1 = Cat("Mimi", 2)
cat2 = Cat("Minaou", 3)
cat3 = Cat("Miaou", 4)  
#create function to age 
def find_old_cat(cat_a, cat_b, cat_c):
    old = cat_a
    if cat_b.age > old.age :
      old = cat_b
    if cat_c.age > old.age:
      old = cat_c
    return old
old_cat = find_old_cat(cat1, cat2, cat3)
print(f"The oldest cat is {old_cat.name} and is {old_cat.age} years old.")

#exercice2
class Dog:
    def __init__ (self,name,height):
      self.name = name
      self.height = height
    def bark(self):
        print(f"{self.name} says Woof!") 
    def jump(self):
         print(f"{self.name} jumps {self.height} cm high!") 

dab_dog = Dog ("Mia", 50)
muz_dog = Dog ("Malo", 60)
print( f"The dog name is {dab_dog.name} and the height is {dab_dog.height} cm.")
dab_dog.bark()
dab_dog.jump()
if dab_dog.height > muz_dog.height:
        print(f"{dab_dog.name} is taller than {muz_dog.name}.")
elif dab_dog.height < muz_dog.height:
        print(f"{muz_dog.name} is taller than {dab_dog.name}.")
else:
        print(f"{dab_dog.name} and {muz_dog.name} are the same height.")    

#exercice3
class Song :
    def __init__(self , lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for i in self.lyrics :
            print (i)

song1 = Song([
    'Oh my God, I feel it in the air',
    'Telephone wires above are sizzlin like a snare'
])

song1.sing_me_a_song()

#exercice4
class Zoo :
    def __init__(self , zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals :
            self.animals.append(new_animal)
    
    def get_animals(self) :
        for i in self.animals:
            print(i)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals :
            self.animals.remove(animal_sold)

    def sort_animals(self) :
        self.animals.sort() 

        grouped_animals = {}

        for animal in self.animals :
            # took the first letter
            first_ltr = animal[0]

            # if the letter doesnt exist add it to the list
            if first_ltr not in grouped_animals :
                grouped_animals[first_ltr] = []
            
            # add animal to the list
            grouped_animals[first_ltr].append(animal)
        
        return grouped_animals
    
    def get_groups(self):
        print(self.sort_animals())

myzoo = Zoo('neko Zoo')

myzoo.add_animal('neko')
myzoo.add_animal('fox')
myzoo.add_animal('lion')

# print(myzoo.name)
# print(myzoo.animals)

#! sell animals
# myzoo.get_animals()
myzoo.sell_animal('lion')

#! prints all animals
myzoo.get_animals()

#! prints the grouped animals
myzoo.get_groups()
