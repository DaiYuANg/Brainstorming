import tkinter

import customtkinter


def button_function():
    print("button pressed")


if __name__ == "__main__":
    customtkinter.set_appearance_mode("System")  # Modes: system (default), light, dark
    customtkinter.set_default_color_theme(
        "blue"
    )  # Themes: blue (default), dark-blue, green

    app = customtkinter.CTk()  # create CTk window like you do with the Tk window
    app.geometry("400x240")
    app.title("DataFaker")
    # Use CTkButton instead of tkinter Button
    button = customtkinter.CTkButton(
        master=app, text="CTkButton", command=button_function
    )
    button.place(relx=0.5, rely=0.5, anchor=tkinter.CENTER)
    app.mainloop()
