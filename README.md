# Food Market
### Created by Juan Ignacio Vuoso - CoderHouse 2021

## Home
Al comenzar, en la pantalla principal se observan todos los productos disponibles para compra ("home" de la web app, ruta '/').

## Product details
Luego, cuando se quiera saber más informacion sobre cualquiera de los productos disponibles, debe hacerse click en 'Más información'. Aquí verá información detallada sobre el producto y podrá agregarlo al carrito en caso de que desee comprarlo posteriormente.

Una vez agregado al carrito el producto (la cantidad deseada del mismo, siempre y cuando esta cantidad sea inferior al stock disponible para este producto), puede continuarse con la compra o bien ir al carrito para ver los productos que han sigo agregados hasta el momento.

Aquí pueden quitarse los productos del carrito por separado a conveniencia, y en todo momento se verá reflejado el precio total en función de los productos que haya en ese momento en el carrito de compras.

## Categories

En todo momento del flujo de compra puede filtrarse los productos por su categoría, clickeando en el drop-down del margen superior izquierdo. Este filtro mostrará todos los productos de la categoría que haya sido seleccionada.
La cantidad de categorías es dinamica y se obtienen de firebase. 

Desde allí, puede nuevamente seleccionarse el producto requerido para ser posteriormente agregado al carrito.

## Shopping cart

En todo momento del flujo de compra (siempre y cuando haya items en el carrito), podrá observarse cuántos productos hay en el carrito, y acceder al mismo por medio de un click.
Una vez en el carrito, pueden eliminarse los productos que se deseen, finalizarse la compra, o bien seguir comprando. Recordemos que en todo momento puede clickearse <b>'Food Market'</b> para ser redirigidos a la pagina principal.

## End purchase / Check out

El formulario de finalización servirá para obtener los datos del usuario y generar la orden de compra, la cual será cargada en la base de datos de firebase.
Una vez completados los datos, se creará la orden de compra y el usuario obtendrá el ID de dicha compra, para poder acceder a la misma, si así lo desea, a través de la web de firebase.
Además, se actualiza el campo de 'stock' en la base de datos en firestore, manteniendo a la misma actualizada en funcion de la cantidad de items de cada producto que se hayan comprado.
Una vez finalizada la orden de compra, se procede a limpiar el carrito para volver a comenzar nuevamente desde cero.


