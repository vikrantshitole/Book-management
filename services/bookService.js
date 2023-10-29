const Book = require('../models/book');

const createBook = (reqData) => {
    return new Promise(async(resolve,reject)=>{
        try{
            let book = await Book.findOne({name:reqData.name})
            if (book) {
                reject({message: 'Book Already exists.'})
            }
            
            await Book.create(reqData)
            resolve({message: 'Book Created Successfully'})
        }catch(err){
            console.error(err);
            reject({message: 'Error Creating Book'})
        }
    })
}
module.exports = {createBook}