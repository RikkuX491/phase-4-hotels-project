#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Hotel

if __name__ == '__main__':
    # fake = Faker()
    with app.app_context():
        Hotel.query.delete()

        hotel1 = Hotel(name="Marriott Resort")
        hotel2 = Hotel(name="Disney World Resort")
        hotel3 = Hotel(name="Bahamas Resort")

        db.session.add_all([hotel1, hotel2, hotel3])
        db.session.commit()
        print("Seeding complete!")
