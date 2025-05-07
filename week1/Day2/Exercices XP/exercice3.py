store = {
    "name": "Zara",
"creation_date": 1975, 
"creator_name": "Amancio Ortega Gaona", 
"type_of_clothes": [ "men", "women", "children", "home"],
"international_competitors": ["Gap", "H&M", "Benetton"],
"number_stores": 7000,
"major_color": {
    "France": "blue", 
    "Spain": "red", 
    "US":["pink", "green"]}}
# 2 change NB STORE
store["number_stores"] = 2
# 3
print(f"Zara's clients are:{','.join(store['type_of_clothes'])}")
# 4 add a new key-value pair  
store["country_creation"] = "Spain"
#5  add designal
if "international_competitors" in store:
    store["international_competitors"].append("Desigual")   
# 6 delete date_creation
del store["creation_date"]
#7 print
print ("Last international competitor:", store["international_competitors"][-1])
 #8 color of us
print("Major colors of US:", store["major_color"]["US"])   
# 9 number of paire
print("Number of key-value pairs:", len(store))
# 10 print all key-value pairs
print ("keys of brand dictionary:", store.keys())
#11 create an other dictionary
more_on_zara = {"creation_date":1975,"number_stores" :10000}
# 12 update the store dictionary with more_on_zara
store.update(more_on_zara)
# 13 print all values of the store dictionary
print("update number of stores", store["number_stores"])