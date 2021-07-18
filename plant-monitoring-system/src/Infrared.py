from smbus2 import SMBus
from mlx90614 import MLX90614

bus = SMBus(2)

sensor = MLX90614(bus, address=0x5a)

def getLeafTemp():
    temp = 0
    count = 0
    #take 5 readings and make sure they misreadings
    for i in range(0,5):
        leafTemp = sensor.get_object_1()
        if leafTemp < 50 and leafTemp > -20:
            temp += leafTemp
            count += 1
    
    return temp/count


def getAmbientTemp():
    count = 0
    temp = 0
    for i in range(0,5):
        ambientTemp = sensor.get_ambient()
        if ambientTemp < 50 and ambientTemp > -20:
            temp += ambientTemp
            count += 1
            
    return temp/count