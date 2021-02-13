from flask import Flask, render_template, request
import os

app = Flask(__name__)

# for local testing purposes
test = False 

# if working on an update
incoming = False 

# handling 404 
@app.errorhandler(404)
def not_found(e):
  return render_template('404.html',
          other=True)

@app.route('/1')
def f_1():
    x = 1
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            script_js=script_js)

@app.route('/2')
def f_2():
    x = 2
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/3')
def f_3():
    x = 3
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/4')
def f_4():
    x = 4
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/5')
def f_5():
    x = 5
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/6')
def f_6():
    x = 6
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/7')
def f_7():
    x = 7
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/8')
def f_8():
    x = 8
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/9')
def f_9():
    x = 9
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/10')
def f_10():
    x = 10
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/11')
def f_11():
    x = 11
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            prev="/{}".format(x+1),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/12')
def f_12():
    x = 12
    script_js = "../static/js/canvas/{}.js".format(x)
    with open("templates/canvas/{}.html".format(x), "w") as f:
        f.write("{% extends 'base.html' %}")
        f.close()
    return render_template("canvas/{}.html".format(x),
            next="/{}".format(x-1),
            script_js=script_js)

@app.route('/')
def index():
    if incoming: 
        script_js = "../static/js/canvas/1.js"
        return render_template("incoming.html",
                script_js=script_js,
                incoming=incoming)
    else:
        x = 12
        script_js = "../static/js/canvas/{}.js".format(x)
        with open("templates/canvas/{}.html".format(x), "w") as f:
            f.write("{% extends 'base.html' %}")
            f.close()
        return render_template("canvas/{}.html".format(x),
            next="/{}".format(x-1),
            script_js=script_js)
           
@app.route('/about')
def about():
    return render_template('about.html',
            other=True)

if __name__ == '__main__':
    if test: 
        app.run(host='0.0.0.0', port=5001, debug=True)
    else:
        app.run(debug=False)
