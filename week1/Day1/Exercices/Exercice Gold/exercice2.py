for i in range(1, 21):
    print(i)
# This code prints the numbers from 1 to 20, but only the even indexed ones (0, 2, 4, ...).
numbers = list(range(1, 21))

for index in range(len(numbers)):
    if index % 2 == 0:
        print(numbers[index])
