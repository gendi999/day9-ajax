const testimonialPeomise = new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest()

    xhr.open('GET','https://api.npoint.io/655bf56990dfea4f3beb',true)

    xhr.onload = () =>{
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.response))
        }else{
            reject('error loading data!')
        }

    }
    xhr.onerror = () => {
        reject('networking error')
    }
    xhr.send()
})

async function getAllTestimonials(){
   const response = await testimonialPeomise
   console.log(response)

   let testimonialHTML = ''

   response.forEach((item) => {
    testimonialHTML +=`<div class="testimonial">
    <img src= "${item.Image}" class="profile-testimonial" />
    <p class="quote">"${item.quote}"</p>
    <p class="author">- ${item.author}</p>
    <p class="rating"> ${item.rating} <i class="fa-solid fa-star"></i></p>
   </div>`
    
   });
   document.getElementById('testimonials').innerHTML=testimonialHTML
}
getAllTestimonials()

async function filterTestimonials(rating) {
    const responsefilter = await testimonialPeomise
    testimonialtext=""

    const tesfiltered = responsefilter.filter((item) =>{
        return item.rating === rating

    })
        if(tesfiltered.length === 0){
            testimonialtext = "<h1>Data Not Found!</h1>"
        }else {
            tesfiltered.forEach((item) =>{
                testimonialtext += `<div class="testimonial">
                <img src= "${item.Image}" class="profile-testimonial" />
                <p class="quote">"${item.quote}"</p>
                <p class="author">- ${item.author}</p>
                <p class="rating"> ${item.rating} <i class="fa-solid fa-star"></i></p>
               </div>`

            })
        }

        document.getElementById('testimonials').innerHTML= testimonialtext

}