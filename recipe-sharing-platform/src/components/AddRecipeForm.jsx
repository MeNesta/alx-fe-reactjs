import React, { useState } from 'react'

function AddRecipeForm() {
    const [title,setTitle] = useState("")
    const [ingredients,setIngridients] = useState("")
    const [preparationSteps,setpreparationSteps] = useState("")

  return (
    <div>
        <form>
             <div>
            <p>Title</p>
            <input className='border rounded-sm py-2 px-4' value={title} onChange={e => setTitle(e.target.value)} type="text" />
             </div>
             <br />
             <div>
                <p>Ingredient</p>
                <textarea className='border rounded-sm' name='postcontent' rows={4} cols={40}/>
             </div>
             <br />
             <div>
             <div class="absolute top-0 right-0 size-14"></div>
                <p>preparationSteps</p>
                <textarea className='border rounded-sm' name='postContent' rows={4} cols={50}/>
             </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
            </button>
        </form>
    </div>
  )
}

export default AddRecipeForm