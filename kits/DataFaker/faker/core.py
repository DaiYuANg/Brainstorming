import locale

from faker import Faker


class FakerCore:
    def __init__(self):
        self.fake = Faker(locale=locale.getdefaultlocale()[0])
        print(self.fake.name())
