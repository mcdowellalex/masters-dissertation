import requests


url = ''
obj = {"id":8, "number":16}


x = requests.post(url, params=obj)

print(x.text)
