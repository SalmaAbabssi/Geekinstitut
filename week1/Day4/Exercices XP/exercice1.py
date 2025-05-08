class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Step 2: List of cat instances
bengal = Bengal("Leo", 2)
chartreux = Chartreux("Shadow", 3)
siamese = Siamese("Misty", 4)
all_cats = [bengal, chartreux, siamese]

# Step 3: Create a Pets instance
sara_pets = Pets(all_cats)

# Step 4: Walk
sara_pets.walk()

