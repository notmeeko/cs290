import os
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Define the directory path
DATA_DIR = 'data'

# Ensure the directory exists, if not create it
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)

# Function to append text to a file
def append_to_file(text):
    with open(os.path.join(DATA_DIR, "data.txt"), "a") as file:
        file.write(text + '\n' + '=' * 50 + '\n')

# Function to read text from a file
def read_from_file():
    try:
        with open(os.path.join(DATA_DIR, "data.txt"), "r") as file:
            return file.read()
    except FileNotFoundError:
        return "No data available"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/write', methods=['POST'])
def write():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    text = f"Name: {name}\nEmail: {email}\nMessage: {message}"
    append_to_file(text)
    return jsonify({'message': 'Message written to file successfully!'})

@app.route('/read')
def read():
    text = read_from_file()
    return text

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5232)
