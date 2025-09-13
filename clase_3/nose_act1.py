listaNota = []
listaEstudiante = []
i= 0
cantAlumnos = int(input("Ingrese la cantidad de alumnos: "))

while i<cantAlumnos:
    nombre = str(input("Ingrese su nombre: "))
    listaEstudiante.append(nombre)
    nota = float(input(f"Ingrese la nota de : "))
    listaNota.append(nota)
    i += 1
promedio = sum(listaNota)/len(listaNota)


if promedio >= 3.0:
    print("El curso aprobo con un promedio de: ",promedio)
else:
    print("El curso no aprobo con un promedio de: ",promedio) 

for j in range(len(listaEstudiante)):
    print(f"El estudiante {listaEstudiante[j]} tiene una nota de: {listaNota[j]}")






# def agregarEstudiante():
#     nombre = str(input("Ingrese su nombre: "))
#     listaEstudiante.append(nombre)

# def agregarNota():
#     nota = int(input("Ingrese su nota: "))
#     listaNota.append(nota)

# agregarEstudiante() 
# agregarNota()
#  