import sqlite3

import mysql.connector


class Connector:
    def __init__(self, host: str, user: str, passwd: str, database: str):
        self.table_list = None
        self.memory = sqlite3.connect('file::memory:?cache=shared')
        self.db_conn = mysql.connector.connect(
            host=host,
            user=user,
            passwd=passwd,
            database=database
        )
        self.get_tables()
        self.get_table_schema()

    def get_tables(self):
        self.table_list = []
        cursor = self.db_conn.cursor()
        cursor.execute("SHOW TABLES")
        tables_in_database = cursor.fetchall()
        for table in tables_in_database:
            self.table_list.append(table[0])

    def get_table_schema(self):
        cursor = self.db_conn.cursor()
        for x in self.table_list:
            cursor.execute("DESC "+x)
            a = cursor.fetchall()
            print(a)
