
const categoriesList = document.querySelectorAll("#categories")
console.log(`Number of categories: ${categories.children.length}`)

const categoriesItem = document.querySelectorAll("li.item")
categoriesItem.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
})
