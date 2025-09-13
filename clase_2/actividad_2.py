numero_1 = 5
numero_2 = 12


print(numero_1 + numero_2)
print(numero_1 - numero_2)
print(numero_1 * numero_2)
print(numero_1 / numero_2)
print(numero_1 // numero_2)
print(numero_1 % numero_2)
print(numero_1  ** numero_2)
print(numero_1  ** numero_2)
print(numero_1  ** 0.5)


                                                                     #operadodes logicos
print( )

print(numero_1 > numero_2)
print(numero_1 < numero_2)
print(numero_1 >= numero_2)
print(numero_1 <= numero_2)
print(numero_1 == numero_2)
print(numero_1 != numero_2)
print( )

                                                                     #caso

edad = 19

print(edad > 18 and edad < 30)
print(edad > 18 and edad > 30)

print(edad < 18 or edad < 30)

print(not edad > 18)
print()

                                                                     #condicionales
numer_1 = 15

if numer_1 > 0:
    print("el numero es positivo")
    if numer_1  !=15:
        print("el numero no es 15")   
    else:
        print("el numero es mayor a 0")

elif numer_1 < 0:  
    print("el numero es negativo")

else:
    print("el numero es cero")


print()
                                                                     #input

#nombre = input("ingrese su nombre: ")
#print("hola " + nombre)

#numero= int(input("ingrese un numero: "))

#print("el numero es: " + str(numero))
#print()


                                                                     #prueba





edad = int(input("ingrese su edad: "))
if edad < 18:
    print("es menor de edad")
elif edad >= 18 and edad < 25:
    print("es un adulto joven")
else:
    print("es un adulto ")
print()