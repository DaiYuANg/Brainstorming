import customtkinter
from PySide6.QtGui import QRasterWindow


class Window(QRasterWindow):
    def __init__(self):
        super().__init__()
        self.setTitle("Analog Clock")
        self.resize(200, 200)

