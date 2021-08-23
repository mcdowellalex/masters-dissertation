import pandas as pd
import pyodbc 
import json

username = ''
password = ''
servername = ''
db=''
conn = pyodbc.connect('Driver={SQL Server};Server='+servername+';UID='+username+';PWD='+password+';Database='+db+';Trusted_Connection=no;')


### export SQL server to csv file

# sql_query = pd.read_sql_query(''' 
#                               select * from [dbo].[Plant]
#                               '''
#                               ,conn) # here, the 'conn' is the variable that contains your database connection information from step 2

# df = pd.DataFrame(sql_query)
# df.to_csv ('export_data.csv', index = False) # place 'r' before the path name to avoid any errors in the path

# print('complete')





### export SQL server to json file

sql_query = pd.read_sql_query(''' 
                              select * from [dbo].[Plant]
                              '''
                              ,conn) # here, the 'conn' is the variable that contains your database connection information from step 2

df = pd.DataFrame(sql_query)
df.to_json ('data.json') # place 'r' before the path name to avoid any errors in the path




print('complete')