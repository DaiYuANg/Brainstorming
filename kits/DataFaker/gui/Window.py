import customtkinter


class Window:
    def __init__(self):
        self.app = customtkinter.CTk()
        self.app.geometry("400x240")
        self.app.title("DataFaker")

    def run(self):
        self.app.mainloop()
