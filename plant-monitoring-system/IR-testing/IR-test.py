#this all works - thanks Electrofun from youtube!

from smbus2 import SMBus
from mlx90614 import MLX90614


bus = SMBus(2)

sensor = MLX90614(bus, address=0x5a)

print(sensor.get_ambient())
print(sensor.get_object_1())

bus.close()
