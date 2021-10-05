export FLASK_APP=delivery_app.app
export FLASK_ENV=production
export DB_USER=[]
export DB_PASSWORD=[]
export DB_NAME=[]
# python -c "import os; print(os.urandom(16))"
export SECRET_KEY=[]

flask db init
flask db migrate
flask db upgrade
nohup uwsgi --socket 0.0.0.0:5000 --protocol=http -w delivery_app.app --master --processes=4 --threads=4 &