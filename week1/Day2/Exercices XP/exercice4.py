#declar a function 
def describe_city(city, country="France"):
    print(f"{city} is in {country}.")

# Call a  function
describe_city("Ankara", "Turkey")
describe_city("Paris")  # Use value default "France"
describe_city("Rabat", "Morocco")
