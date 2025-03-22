function HeroSection(){

    return(
        <>
        
            <main className="hero">

                <div className="heroContent">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>"Jordan Shoes - More than just footwear, it's a legacy. Built for champions, designed for dreamers. Defy gravity, break barriers, and soar higher with every step. Experience the perfect blend of style, performance, and innovation. Wear the legend, own the game, and leave your mark. Greatness starts from the ground up!"</p>
                    <div className="heroBtn">
                        <button type="button" class="btn btn-success shop">Shop Now</button>
                        <button type="button" class="btn btn-danger shop">Category</button>
                    </div>
                </div>

                <div className="heroImage">
                    <img src="/images/jordanShoes.webp" alt="shoes" className="image" />
                </div>
 
            </main>
        
        </>
    )
}

export default HeroSection;