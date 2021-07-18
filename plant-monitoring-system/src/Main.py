import Infrared
import SoilMoisture
import ImageAnalysis
import json
import datetime
import requests
import time
import picamera

plantID = 1

# get soil moisture, leaf temp, and leaf color data
#   return the data in a python dict format
def getData():
    soilMoisture = SoilMoisture.getMoisture()   
    leafTemp = Infrared.getLeafTemp()
    ambientTemp = Infrared.getAmbientTemp()
    with picamera.PiCamera() as camera:
        time.sleep(2) #let camera warm up
        camera.capture('p.jpg')
        imageData = ImageAnalysis.get('p.jpg')
    
    data = {
        'plantID':plantID,
        "datetimeRecorded": datetime.datetime.now(),
        "leafTemp": leafTemp,
        'ambientTemp':ambientTemp,
        "soilMoisture": soilMoisture,
        "redStrength": imageData['red'],
        "greenStrength": imageData['green'],
        "blueStrength": imageData['blue'],
        "lightnessStrength": imageData['lightness'],
        "greenMagentaStrength": imageData['greenMagenta'],
        "blueYellowStrength": imageData['blueYellow'],
        "hueStrength": imageData['hue'],
        "saturationStrength": imageData['saturation'],
        "valueStrength": imageData['value'],
    }
    return data


#main loop that gathers and stores data every hour
while True:
    data = getData()
    #write to local json file for backup
    with open('data.json', 'a', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4, default=str)
    
    #send to web server
    url = 'https://dissertation-api.azurewebsites.net/api/Plant/'

    while True:
        try:
            x = requests.post(url, params=data)
            break
        except Exception:
            time.sleep(60)
            continue
        
    print(x.text)
    
    #sleep for 2 hours
    time.sleep(7200)






    
