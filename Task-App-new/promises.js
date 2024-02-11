const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([3,7,4])
        reject('Things went wrong!!')
    }, 2000)
})

doWorkPromise.then((result) => {
   console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})


//if resolve is there , then 'then' method will be called!!
//if reject is there, then 'catch' method will be called!!