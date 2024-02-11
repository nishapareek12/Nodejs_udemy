setTimeout(() => {
    console.log('two seconds are up')
}, 2000)

const names = ['andrew', 'jen', 'jess']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
       const data = {
        latitude: 0,
        longitude: 0
       }
       return data
}

const data  = geocode('philadelphia')
console.log(data)



