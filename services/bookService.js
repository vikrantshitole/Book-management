const Book = require('../models/book');
const { ObjectId } = require("mongoose").Types;

const createBook = (reqData) => {
    return new Promise(async(resolve,reject)=>{
        try{
            let book = await Book.findOne({name:reqData.name})
            if (book) {
               return reject({message: 'Book Already exists.'})
            }
            
            await Book.create(reqData)
            return resolve({message: 'Book Created Successfully'})
        }catch(err){
            console.error(err);
            return reject({message: 'Error Creating Book'})
        }
    })
}
const updateBook = (reqData) => {
    return new Promise(async(resolve,reject)=>{
        try{
            let book = await Book.findOne({_id:reqData._id})
            if (!book) {
               return reject({message: 'Book does not exists.'})
            }
            
            await Book.updateOne(    { _id:reqData._id },reqData,{})
            return resolve({message: 'Book updated Successfully'})
        }catch(err){
            console.error(err);
            return reject({message: 'Error updating Book'})
        }
    })
}
const getBooks = () => {
    return new Promise(async(resolve,reject)=>{
        try{
            let books = await Book.find()
            resolve({list: books})
        }catch(err){
            console.error(err);
            reject({message: 'Error finding Book'})
        }
    })
}
const getOneBook = (id) => {
    return new Promise(async(resolve,reject)=>{
        try{
            let book = await Book.findOne({_id:id})
            resolve({book: book||{}})
        }catch(err){
            console.error(err);
            reject({message: 'Error finding Book'})
        }
    })
}

module.exports = {createBook,updateBook,getBooks,getOneBook}