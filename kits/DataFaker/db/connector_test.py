import unittest

from kits.DataFaker.db.connector import Connector


class MyTestCase(unittest.TestCase):
    def test_connector_init(self):
        Connector(host="localhost", user="root", passwd="root", database="test")
        self.assertEqual(True, False)  # add assertion here


if __name__ == '__main__':
    unittest.main()
