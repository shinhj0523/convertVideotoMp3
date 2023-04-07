from flask import Flask, request, render_template, redirect, url_for
import os

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/success', methods=['GET'])
def success():
    if 'file' not in request.files:
        return redirect(url_for('index'))
    
    file = request.files['file_input']
    if file.filename == '':
        return redirect(url_for('index'))

    file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
    return render_template('success.html')

if __name__ == '__main__':
    app.run(debug=True)

