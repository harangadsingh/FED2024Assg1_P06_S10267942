function showRecipe(recipeId)
{
    const recipeInfos = document.querySelectorAll('.recipe-info');
        recipeInfos.forEach(recipe => 
        {
            recipe.style.display = 'none';
        });

    const selectedRecipe = document.getElementById(recipeId);
    if (selectedRecipe)
    {
        selectedRecipe.style.display = 'block'; 
    
    }
}