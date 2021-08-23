import pandas as pd
import pyodbc 
import json

username = ''
password = ''
servername = ''
db=''
conn = pyodbc.connect('Driver={SQL Server};Server='+servername+';UID='+username+';PWD='+password+';Database='+db+';Trusted_Connection=no;')


## export SQL server to csv file

# sql_query = pd.read_sql_query(''' 
#                               select * from [dbo].[Plant]
#                               '''
#                               ,conn) # here, the 'conn' is the variable that contains your database connection information from step 2

# df = pd.DataFrame(sql_query)
# df.to_csv ('export_data.csv', index = False) # place 'r' before the path name to avoid any errors in the path

# print('complete')





## export SQL server to json file

import json
import collections


cursor = conn.cursor()
cursor.execute("SELECT * FROM [dbo].[Plant]")
rows = cursor.fetchall()

objects_list = []
for row in rows:
    d = collections.OrderedDict()
    d["plantID"] = row[0]
    d["datetimeRecorded"] = row[1]
    d["leafTemp"] = row[2]
    d["ambientTemp"] = row[3]
    d["soilMoisture"] = row[4]
    d["redStrength"] = row[5]
    d["greenStrength"] = row[6]
    d["blueStrength"] = row[7]
    d["lightnessStrength"] = row[8]
    d["greenMagentaStrength"] = row[9]
    d["blueYellowStrength"] = row[10]
    d["hueStrength"] = row[11]
    d["saturationStrength"] = row[12]
    d["valueStrength"] = row[13]
    objects_list.append(d)

j = json.dumps(objects_list, indent=4,default=str)
with open("data.json", "w" ) as f:
    f.write(j)
conn.close()

print('complete')