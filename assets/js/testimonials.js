
    
  
// class Testimonial {
//         constructor(quote,image){
//         this._quote = quote
//         this._image = image
//     }    
//     get quote(){
//         return this._quote
//     }
//     get image(){
//         return this._image
//     }
    

//     get html() {
//         return `<div class="testimonial">
//             <img src= "${this.image}" class="profile-testimonial" />
//             <p class="quote">"${this.quote}"</p>
//             <p class="author">- ${this.author}</p>
//             </div>`
//     }
// }

// class AuthorTestimonial extends Testimonial {
//     constructor(author, quote, image) {
//         super( quote,image)
//         this._author = author  
//     }
//     get author() {
//         return this._author
//     }
    
// }

// class CompanyTestimonial extends Testimonial {
//     constructor(company, quote, image) {
//         super(quote, image)
//         this._company = company
//     }
//     get author(){
//         return this._company + "_Clan"
//     }
        
// }

// const testimonial1 = new AuthorTestimonial ("Gendi Telamdika", "apa iyah","https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","1")

// const testimonial2 = new AuthorTestimonial ("Gendi Telamdika", "apa iyah","https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","2")

// const testimonial3 = new CompanyTestimonial ("Gendi Telamdika", "apa iyah","https://images.unsplash.com/photo-1621478374422-35206faeddfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b25lJTIwcGllY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","1")

// let testimonialData = [testimonial1, testimonial2, testimonial3]
// let testimonialHTML = "";

// for(let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].html
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;


const testimonialData = [
    {
        author : 'God Usop',
        quote: "bagus keren banget banget",
        Image:"https://e1.pxfuel.com/desktop-wallpaper/791/896/desktop-wallpaper-god-usopp-youtube-god-usopp-thumbnail.jpg",
        rating: 5,
    },
    {
        author : 'monkey D luffy',
        quote: "keren banget",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq68RtIo7LPQ-5WYDBiXytO9DN87LwdYuXCw&usqp=CAU",
        rating: 4
    },
    {
        author : 'Roronoa Zoro',
        quote: "keren banget",
        Image:"https://images.unsplash.com/photo-1658233427270-ba4d9d03b53c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8em9yb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        rating: 4,
    },
    {
        author : 'Sanji',
        quote: "apa iyah keren banget",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxi3-WjaGatcvGAP5gWv23kVnovE5sCgnmQ&usqp=CAU",
        rating: 3
    },
    {
        author : 'Toys',
        quote: "apa iyah",
        Image:"https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hcnV0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        rating: 2
    },
]    

function alltestimonial() {
    let testimonialtext = "";

    testimonialData.forEach((item) =>{
        testimonialtext += `<div class="testimonial">
                     <img src= "${item.Image}" class="profile-testimonial" />
                     <p class="quote">"${item.quote}"</p>
                     <p class="author">- ${item.author}</p>
                     <p class="rating"> ${item.rating} <i class="fa-solid fa-star"></i></p>
                    </div>`
    })

    document.getElementById('testimonials').innerHTML = testimonialtext;
}
alltestimonial()

function filterTestimonials(rating) {
    let testimonialtext= ""
    const tesfiltered = testimonialData.filter((item) =>{
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