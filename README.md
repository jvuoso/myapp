# Food Market

## Home
Al comenzar, en la pantalla principal se observan todos los productos disponibles para compra ("home" del web site, ruta '/')

![image](./img/home.JPG)

## Product details
Luego, cuando se quiera saber más informacion sobre cualquiera de los productos disponibles, debe hacerse click en 'Más información'. Aquí verá información detallada sobre el producto y podrá agregarlo al carrito en caso de que desee comprarlo posteriormente.

<p align="center">
    <img src="./img/detail.JPG" />
<p align="center">

Una vez agregado al carrito el producto (la cantidad deseada del mismo), puede seguirse comprando o ir al carrito para ver los productos que han sigo agregados hasta el momento.

<p align="center">
    <img src="./img/detail2.JPG" />
<p align="center">

## Categories

En todo momento del flujo de compra puede filtrarse los productos por su categoría, clickeando en el drop-down del margen superior izquierdo. Este filtro mostrará todos los productos de la categoría que haya seleccionado. 

<p align="center">
    <img src="./img/categories.JPG" />
<p align="center">

Desde allí, puede nuevamente seleccionarse el producto requerido para ser posteriormente agregado al carrito.

## Shopping cart

En todo momento del flujo de compra (siempre y cuando la cantidad de productos seleccionados sea al menos uno), podrá observarse cuántos productos hay en el carrito, y acceder al mismo por medio de un click.
Una vez en el carrito pueden eliminarse los productos que se deseen, finalizar la compra, o bien seguir comprando. Recordemos que en todo momento puede clickearse 'Food Market' para ser redirigidos a la pagina principal.

<p align="center">
    <img src="./img/carrito.JPG" />
<p align="center">


## End purchase / Last Form

El formulario de finalización servirá para obtener los datos del usuario y generar la orden de compra, la cual será cargada en la base de datos de firebase.
Una vez completados los datos, se creará la orden de compra y el usuario obtendrá el codigo de dicha compra, para poder acceder a la misma, si así lo desea, a través de la web de firebase.

<p align="center">
 <img src="./img/form.JPG" />
 <img src="./img/codigo.JPG" />
<p align="center">


