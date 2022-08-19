"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

#Create Flask app
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

#create token for login
@api.route('/token', methods=['POST'])
def create_token():
    request_body = request.get_json()                     #expected request body: {username: string, password: string}
    query = User.query.filter_by(username = request_body['username'], password = request_body['password']).first()
    user = query.serialize()
    access_token = create_access_token(identity=user['username'])
    return jsonify(access_token=access_token), 200
 
#register new user
@api.route('/signup', methods=['POST'])
def sign_up():
    request_body = request.get_json()                                                           #expected request body: {username: string, password: string}
    new_user = User(username = request_body['username'], password = request_body['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify('User created'), 200

