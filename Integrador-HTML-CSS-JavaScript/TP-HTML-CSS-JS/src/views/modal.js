/*=====POPUP=====*/

import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";


const buttonCancel = document.getElementById("cancelButton");

buttonCancel.addEventListener("click", ()=>{
    closeModal();
})

//FUNCIONES ABRIR CERRAR MODAL
export const openModal = () => {
     const modal = document.getElementById("modalPopUp");
     modal.style.display = "flex";
     const buttonDelete = document.getElementById("deleteButton")

    if(productoActivo){
        buttonDelete.style.display = "block"
    }else{
        buttonDelete.style.display = "none"
    }

     if(productoActivo){
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("categoria");

        nombre.value = productoActivo.nombre
        imagen.value = productoActivo.imagen
        precio.value = productoActivo.precio
        categories.value = productoActivo.categories
     }
}

export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setProductoActivo(null)
    resetModal();
}

const resetModal = () => {
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");

    nombre.value = ""
    imagen.value = ""
    precio.value = 0
    categories.value = "Seleccione una categoría"
}

const deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener("click", () => {
    handleButtonDelete()
})

const handleButtonDelete = () => {
    handleDeleteProduct()
}