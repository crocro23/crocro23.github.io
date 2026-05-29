def addition(x):
    return x + 2

#pip install pytest
import pytest

#test_addition
resultat = addition(2)
assert resultat == 4, "résultat != 4"
resultat = addition(3)
#assert resultat == 4, "résultat != 4"
"------------------------------------"

class Person:
    name = []

    def set_name(self, user_name):
        self.name.append(user_name)
        return len(self.name) - 1

    def get_name(self, user_id):
        if user_id >= len(self.name):
            return 'There is no such user'
        else:
            return self.name[user_id]

if __name__ == '__main__':
    person = Person()
    print('User Abbas has been added with id ', person.set_name('Abbas'))
    print('User associated with id 0 is ', person.get_name(0))

print()

import doctest
doctest.testfile("7_tests_addition.py")
print()