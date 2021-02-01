import chunk from 'lodash.chunk'

export const splitArrayIntoChunks=(array,numberOfChunks)=>{
return chunk(array,numberOfChunks);
}