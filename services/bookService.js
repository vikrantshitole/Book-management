const Book = require('../models/book');
const { ObjectId } = require("mongoose").Types;

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
const updateBook = (reqData) => {
    return new Promise(async(resolve,reject)=>{
        try{
            let book = await Book.findOne({_id:reqData._id})
            if (!book) {
                reject({message: 'Book does not exists.'})
            }
            
            await Book.updateOne({_id:ObjectId(reqData._id)},reqData,{})
            resolve({message: 'Book updated Successfully'})
        }catch(err){
            console.error(err);
            reject({message: 'Error updating Book'})
        }
    })
}
module.exports = {createBook,updateBook}