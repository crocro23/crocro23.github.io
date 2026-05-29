import unittest

#test_Person
class Testing(unittest.TestCase):
    def test_string(self):
        a = 'some'
        b = 'some'
        self.assertEqual(a, b)

    def test_boolean(self):
        a = True
        b = True
        self.assertEqual(a, b)

if __name__ == '__main__':
    unittest.main()

"""============================= test session starts =============================
collecting ... collected 2 items

7_tests_person.py::Testing::test_boolean PASSED                          [ 50%]
7_tests_person.py::Testing::test_string PASSED                           [100%]

============================== 2 passed in 0.02s =============================="""