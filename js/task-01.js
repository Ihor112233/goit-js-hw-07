const CategoriesRef = document.querySelector('#categories');

const NumberCategories=CategoriesRef.querySelectorAll('li.item');   
console.log(`Number of categories: ${NumberCategories.length}`);

const AllCategories = CategoriesRef.querySelectorAll(".item");
AllCategories.forEach((item) => {
    const CategoryName = item.querySelector("h2").textContent;
    console.log(`Category: ${CategoryName}`); 
    const Elements = item.querySelectorAll('ul li').length;
    console.log(`Elements: ${Elements}`)
    });
    

