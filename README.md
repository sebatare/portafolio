# Ecopura

---

¡Bienvenido a **Ecopura**! Este proyecto es un **e-commerce diseñado para una empresa de distribución de agua potable**, donde los clientes pueden solicitar bidones de agua a domicilio y adquirir otros productos relacionados.

## Tecnologías Utilizadas

* **Backend y Administración**: Desarrollado con **Django** (Python).
* **Frontend**: Construido con **React** y estilizado con **Tailwind CSS**.

---

## ¿Cómo Ejecutar Localmente?

Sigue estos pasos para poner en marcha Ecopura en tu máquina:

### 1. Clonar el Repositorio

Primero, descarga el código fuente a tu computadora:

```bash
git clone [https://github.com/tu-usuario/ecopura.git](https://github.com/tu-usuario/ecopura.git) # Reemplaza con la URL de tu repositorio
cd ecopura
```

### 2. Configurar el Backend (Django)

Dentro de la carpeta raíz del proyecto, crea y activa un entorno virtual para las dependencias de Python. Esto asegura que las librerías del proyecto no interfieran con otras instalaciones de Python en tu sistema.

```bash
python -m venv venv
# En Windows:
.\venv\Scripts\activate
# En macOS/Linux:
source venv/bin/activate
```

Una vez activado el entorno virtual, instala las dependencias de Django listadas en requirements.txt:

```bash
pip install -r requirements.txt
```

### 3. Configurar el Frontend (React)

Ahora, instala las dependencias de Node.js para el frontend usando npm:

```bash
npm install
```

### 4. Ejecutar el Proyecto

Con todas las dependencias instaladas, puedes iniciar el servidor de desarrollo de Django (para el backend) y el servidor de desarrollo de React (para el frontend) de forma simultánea.

```bash
python manage.py runserver
```

Para el Frontend (React), en otra terminal:

```bash
npm start
```

¡Listo! Ecopura debería estar funcionando en tu navegador. Normalmente, el frontend se ejecutará en http://localhost:3000 y el backend en http://localhost:8000.

---

¡Esperamos que disfrutes explorando Ecopura! Si tienes alguna pregunta o encuentras algún problema, no dudes en abrir un issue en este repositorio.
