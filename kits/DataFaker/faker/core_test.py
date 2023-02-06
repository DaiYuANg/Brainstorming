import unittest

from kits.DataFaker.faker.core import FakerCore


class MyTestCase(unittest.TestCase):
    def test_something(self):
        FakerCore()
        self.assertEqual(True, False)  # add assertion here


if __name__ == '__main__':
    unittest.main()
