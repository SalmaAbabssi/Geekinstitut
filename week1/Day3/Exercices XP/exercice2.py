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