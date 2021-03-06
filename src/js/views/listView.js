//This is the file/code for the Shopping Cart View/User Interface
//The user has the option to select all the ingredients of a particular 
//recipe and place into a shopping cart 
//The user can also manipulate the shopping cart to his or her needs!
//All of this will appear on the screen

//Importing all the DOM elements 
import {elements} from'./base';

//this method will actually render the item
export const renderItem = item =>{
    const  markup= `<li class="shopping__item" data-itemid=${item.id}>
    <div class="shopping__count">
        <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
        <p>${item.unit}</p>
    </div>
    <p class="shopping__description">${item.ingredient}</p>
    <button class="shopping__delete btn-tiny">
        <svg>
            <use href="img/icons.svg#icon-circle-with-cross"></use>
        </svg>
    </button>
</li>

`;

//adding this new element to our shopping list
elements.shopping.insertAdjacentHTML('beforeend',markup);

}; 
//this method will actually delete the item we are talking about
export const deleteItem=id =>{
    const item= document.querySelector(`[data-itemid="${id}"]`);

    if (item) item.parentElement.removeChild(item);

};