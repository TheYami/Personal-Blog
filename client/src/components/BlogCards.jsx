function BlogCard(props) {

    return (
      <div className="bg-[#F9F8F6] flex flex-col gap-4 transition-all duration-300 ease-in-out hover:scale-105">

        <a href="#" className="relative h-[212px] sm:h-[360px]">
          <img className="w-full h-full object-cover rounded-md" src={props.image} alt={props.title}/>
        </a>

        <div className="flex flex-col">

          <div className="flex">
            <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">{props.category}
            </span>
          </div>

          <a href="#" >
            <h2 className="text-start font-[Poppins] font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {props.title}
            </h2>
          </a>

          <p className="text-muted-foreground font-[Poppins] text-sm mb-4 flex-grow line-clamp-3">
             {props.description}
          </p>
          
          <div className="flex items-center text-sm pb-3">
            <img className="w-8 h-8 rounded-full mr-2" src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" alt="Tomson P." />
            <span className="text-[#43403B] font-[Poppins]">{props.author}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-[#75716B] font-[Poppins]">{props.date}</span>
          </div>
        </div>
      </div>
    );
    }
export default BlogCard    