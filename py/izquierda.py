"""
Giro Izquierdo, Se detiene el motor izquierdo
 mientras el derecho se pone en mrcha
Gp 11: 0 |  Gp 16: 0   
Gp 15: 0 |  Gp 18: 1
"""
import RPi.GPIO as GPIO
GPIO.setup(11,GPIO.OUT)#Motor1
GPIO.setup(15,GPIO.OUT)

GPIO.setup(16,GPIO.OUT)#motor2
GPIO.setup(18,GPIO.OUT)

GPIO.output(11,True)
GPIO.output(15,True)

GPIO.output(16,False)
GPIO.output(18,True)



