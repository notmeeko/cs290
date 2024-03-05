from flask import Flask, render_template, request

app = Flask(__name__)

# Function to write text to a file
def write_to_file(text):
    with open("data.txt", "w") as file:
        file.write(text)

# Function to read text from a file
def read_from_file():
    try:
        with open("data.txt", "r") as file:
            return file.read()
    except FileNotFoundError:
        return "No data available"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/write', methods=['POST'])
def write():
    text = request.form['text']
    write_to_file(text)
    return 'Text written to file successfully!'

@app.route('/read')
def read():
    text = read_from_file()
    return text

if __name__ == '__main__':
    app.run(debug=True)
