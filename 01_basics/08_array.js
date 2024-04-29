//array

const myArr = [0,1,2,3,4,5]

// console.log(myArr)



const marvel_heros = ["thor", "ironman", "spiderman" ]

const dc_heros = ["superman", "flash", "batman" ]

marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const all_heros = (marvel_heros.concat dc_heros)
// console.log(marvel_heros.concat(dc_heros));
// console.log(all_heros);

////////////////////////////spread method///////////////////////

  const all_heros = [...marvel_heros, ...dc_heros]
//  console.log(all_heros );


 const  another_array = [1,2,3,[5,6,7],8,9,[7,8,[1,2]]]
 const real_another_array = another_array.flat(Infinity)

//  console.log(real_another_array );


////////////////////////////////////////////////////////

console.log(Array.isArray('nisha'));
console.log(Array.from('nisha'));
console.log(Array.from({name:'nisha'}));