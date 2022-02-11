from flask import Flask, render_template, request, redirect, url_for, session, jsonify, json
from flask_sqlalchemy import SQLAlchemy 

import string
import random

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres[password]@localhost/Leaderboard'
db   = SQLAlchemy(app)

usn = ''
output = '' 

class Scores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    highscore = db.Column(db.String(120)) 

    def _init_(self, username, highscore):
        self.username = username 
        self.highscore = highscore 

    def _repr_(self):
        return '<User %r>' % self.username


@app.route("/", methods=['GET','POST'])
def trivia():
          
     return render_template("trivia_game.html")


@app.route("/index", methods=['GET','POST'])
def index():
     
     if request.method=='POST':
       

        usn = request.form["username"]
        highs = request.form["highscore"]

        if (usn != '' or highs != ''):           

            user = Scores.query.filter_by(username=usn).first()

            if (not user):         
                score=Scores(username=usn, highscore=highs)
                db.session.add(score)
                db.session.commit()
            else:
                #update highscore with the newest
                user.highscore = highs
                db.session.commit()
            return render_template("party.html")

     return render_template("index.html")




'''
#WIP code to tranfer variable from javascript to python

@app.route("/test", methods=['GET','POST'])
def test():
    print("Go to")
    if request.method=='POST':

        print("POST REQ:", request)
        data = request.json
        print("data", data)

        output = request.get_json()
   
        print(output) 
        print(type(output))
        result = json.loads(output) 
        print(result)
        print(type(result))
        
        for key, value in result.items():
            print(key, ' : ', value)
            highs = value
          
        score=Scores(username=usn, highscore=highs)
        db.session.add(score)
        db.session.commit()
        print("Intersting")
        
    return render_template("party.html")

'''

 
if __name__ == '__main__':
    app.run(debug=True)
    
