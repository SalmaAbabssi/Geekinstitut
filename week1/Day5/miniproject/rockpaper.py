# game.py
import random

class Game:
    def get_user_item(self):
        valid_choices = ["rock", "paper", "scissors"]
        while True:
            choice = input("Choose rock, paper or scissors: ").lower()
            if choice in valid_choices:
                return choice
            print("Invalid choice. Please try again.")

    def get_computer_item(self):
        return random.choice(["rock", "paper", "scissors"])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (
            (user_item == "rock" and computer_item == "scissors") or
            (user_item == "paper" and computer_item == "rock") or
            (user_item == "scissors" and computer_item == "paper")
        ):
            return "win"
        else:
            return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"You selected {user_item}. The computer selected {computer_item}.")
        if result == "win":
            print("You win!")
        elif result == "loss":
            print("You lose!")
        else:
            print("It's a draw!")

        return result


# rock-paper-scissors.py
from rockpaper import Game

def get_user_menu_choice():
    print("\n Menu:")
    print("(p) Play a new game")
    print("(s) Show scores")
    print("(q) Quit")
    choice = input("Enter your choice: ").lower()
    while choice not in ['p', 's', 'q']:
        choice = input("Invalid input. Enter 'p', 's' or 'q': ").lower()
    return choice

def print_results(results):
    print("\nGame Summary:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("Thanks for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    while True:
        choice = get_user_menu_choice()
        if choice == 'p':
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == 's':
            print_results(results)
        elif choice == 'q':
            print_results(results)
            break

if __name__ == "__main__":
    main()
