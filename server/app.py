#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Hotel


# Views go here!
class AllHotels(Resource):

    def get(self):
        response_body = [hotel.to_dict() for hotel in Hotel.query.all()]
        return make_response(response_body, 200)
    
    def post(self):
        new_hotel = Hotel(name=request.json.get('name'))
        db.session.add(new_hotel)
        db.session.commit()
        response_body = new_hotel.to_dict()
        return make_response(response_body, 201)

api.add_resource(AllHotels, "/hotels")

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

