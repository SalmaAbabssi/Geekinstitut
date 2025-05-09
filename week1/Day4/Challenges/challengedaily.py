import math

class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items if items is not None else []
        self.page_size = page_size
        self.current_idx = 0
        self.total_pages = math.ceil(len(self.items) / self.page_size)

    def get_visible_items(self):
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]

    def go_to_page(self, page_num):
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError("Page out of range")
        self.current_idx = page_num - 1

    def first_page(self):
        self.current_idx = 0
        return self

    def last_page(self):
        self.current_idx = self.total_pages - 1
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    def __str__(self):
        items = self.get_visible_items()
        return "\n".join(items) if items else "(Empty Page)"


# Console interactive
def pagination_console():
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)

    print("Bienvenue dans le système de pagination !")
    print("Commandes disponibles : next, prev, first, last, go [num], quit")
    print("--------------------------------------------------------------")

    while True:
        print(f"\n Page {p.current_idx + 1} sur {p.total_pages}")
        print(p)
        cmd = input("\nCommande >> ").strip().lower()

        if cmd == "next":
            p.next_page()
        elif cmd == "prev":
            p.previous_page()
        elif cmd == "first":
            p.first_page()
        elif cmd == "last":
            p.last_page()
        elif cmd.startswith("go "):
            try:
                page_number = int(cmd.split()[1])
                p.go_to_page(page_number)
            except (IndexError, ValueError):
                print(" Syntaxe invalide. Utilisez : go [numéro de page]")
            except Exception as e:
                print(f" Erreur : {e}")
        elif cmd == "quit":
            print(" Au revoir !")
            break
        else:
            print("Commande inconnue. Essayez : next, prev, go 2, etc.")

# Lancer le programme
if __name__ == "__main__":
    pagination_console()