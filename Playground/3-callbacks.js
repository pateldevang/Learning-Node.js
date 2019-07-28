// setTimeout(() => {
//   console.log('Two second are up!');
// }, 2000)
//
//
// const names = ['Andrew','Johnny','Jess']
// const shortName = names.filter((names) => {
//   return names.length <= 4
// })
//
//
// const geocode = (address,callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: '0',
//       longitude: '0'
//     }
//       callback(data)
//   }, 2000)
// }
//
// geocode('Vellore', (data1) => {
//   console.log(data1);
// })


const add = (a,b,callback) => {
  setTimeout(() => {
    c = a + b
    callback(c)
  }, 2000)
}



add(1,4, (sum) => {
  console.log(sum);
})
