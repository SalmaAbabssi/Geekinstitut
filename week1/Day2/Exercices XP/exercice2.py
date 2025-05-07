family ={}
while True :
    name = ( input ("Enter a family member's name:"))
    if name.lower() == 'stop':
       break
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age 
    final_cost = 0 
for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
       price = 10    
    else :
        price=15 
        print(f"{name} has to pay ${price}")

    final_cost += price
print(f"Total cost for the family: ${final_cost}")
