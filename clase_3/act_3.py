"""                                              WHILE
numero= 5 

while numero >0:
   print(numero)
   numero -= 1

                                             FOR

nombres = ["juan", "stiven", "jean" , "carlos" , "gabriel"]

for nombre in nombres:
   print(nombre)
   if nombre == "jean":
       break

                                             

i= 0

while i <=10:
   print(f"9x {i} = {9 * i}")
   i += 1

                                             


def sumarNumeros(n1, n2):
   return n1 + n2

print(sumarNumeros(5, 3))
print(sumarNumeros(10, 30))

def sumarNumeros(n1, n2):
   suma= n1 + n2

   if suma > 18: 
       return "es mayor a 18"
   elif suma == 18:
       return "es igual a 18"
   else:
       return "es menor a 18"



                                             



def restaNumeros(n1, n2):
   resta= n1 - n2    
   if resta > 18: 
       return "es mayor a 18"
   elif resta == 18:
       return "es igual a 18"
   else:
       return "es menor a 18"

print(restaNumeros(5, 3))
print(restaNumeros(30, 10))
print(restaNumeros(30, 12))



                                             Funciones integradas """


numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
longitud = len(numeros)
print("la longitud de la lista es: ",longitud)


numeros.append(10)
print("la lista despues de agregar un elemento: ", numeros)


numeros.remove(5)
print("la lista despues de eliminar un elemento: ", numeros)


numeros.reverse()
print("la lista despues de invertir el orden: ", numeros)


numeros.pop()
print("la lista despues de eliminar el ultimo elemento: ", numeros)


numeros.count(3)
print("el numero 3 se encuentra en la lista: ", numeros.count(3), "veces")


numeros.index(4)
print("el numero 4 se encuentra en la posicion: ", numeros.index(4))


numeros.sort()
print("la lista ordenada de menor a mayor: ", numeros)

numeros.insert(4, 34)
print("la lista despues de insertar un elemento en una posicion especifica: ", numeros)

numeros.extend([11, 12, 13])
print("la lista despues de agregar varios elementos: ", numeros)
