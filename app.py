from flask import Flask, render_template, request

app = Flask(__name__)

# for local testing purposes
test = False 

# if working on an update
incoming = True 

# handling 404 
@app.errorhandler(404)
def not_found(e):
  return render_template('404.html',
          other=True)

@app.route('/001')
def f_001():
    script_js = "../static/js/canvas/001.js"
    return render_template("canvas/001.html",
            prev="/002",
            script_js=script_js)

@app.route('/002')
def f_002():
    script_js = "../static/js/canvas/002.js"
    return render_template("canvas/002.html",
            prev="/003",
            next="/001",
            script_js=script_js)

@app.route('/003')
def f_003():
    script_js = "../static/js/canvas/003.js"
    return render_template("canvas/003.html",
            prev="/",
            next="/002",
            script_js=script_js)

@app.route('/004')
def f_004():
    script_js = "../static/js/canvas/004.js"
    return render_template("canvas/004.html",
            next="/003",
            script_js=script_js)

@app.route('/')
def index():
    if incoming: 
        script_js = "../static/js/canvas/001.js"
        return render_template("incoming.html",
                script_js=script_js,
                incoming=incoming)
    else:
        script_js = "../static/js/canvas/004.js"
        return render_template("canvas/004.html",
                next="/003",
                script_js=script_js,
                incoming=incoming)
    
@app.route('/about')
def about():
    return render_template('about.html',
            other=True)

if __name__ == '__main__':
    if test: 
        app.run(host='0.0.0.0', port=5001, debug=True)
    else:
        app.run(host='0.0.0.0', port=5001, debug=False)
