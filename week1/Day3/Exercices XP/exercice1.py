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
