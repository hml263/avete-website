import Image from "next/image"
import Link from "next/link"

const BlogDetailPage = () => {
  return (
    <section className='container py-[150px]' >

<Link href='/#blog'  ><h1 className="pb-4">Back to Home Page</h1></Link> 
        <div className=' '>
        <h1 className="font-bold pb-4 text-[20px] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>

             <Image src='/mission-pic.png' width={400} height={200} alt='image' className="rounded-xl mb-4  block mx-auto" />
             <div className=" ">
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reprehenderit itaque minima labore, id nesciunt eos iste, debitis eligendi optio, modi cupiditate? Iure fugit provident necessitatibus possimus dolorum! Laudantium, eum.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reprehenderit itaque minima labore, id nesciunt eos iste, debitis eligendi optio, modi cupiditate? Iure fugit provident necessitatibus possimus dolorum! Laudantium, eum.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reprehenderit itaque minima labore, id nesciunt eos iste, debitis eligendi optio, modi cupiditate? Iure fugit provident necessitatibus possimus dolorum! Laudantium, eum.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reprehenderit itaque minima labore, id nesciunt eos iste, debitis eligendi optio, modi cupiditate? Iure fugit provident necessitatibus possimus dolorum! Laudantium, eum.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reprehenderit itaque minima labore, id nesciunt eos iste, debitis eligendi optio, modi cupiditate? Iure fugit provident necessitatibus possimus dolorum! Laudantium, eum.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reprehenderit itaque minima labore, id nesciunt eos iste, debitis eligendi optio, modi cupiditate? Iure fugit provident necessitatibus possimus dolorum! Laudantium, eum.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reprehenderit itaque minima labore, id nesciunt eos iste, debitis eligendi optio, modi cupiditate? Iure fugit provident necessitatibus possimus dolorum! Laudantium, eum.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reprehenderit itaque minima labore, id nesciunt eos iste, debitis eligendi optio, modi cupiditate? Iure fugit provident necessitatibus possimus dolorum! Laudantium, eum.</p>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit reprehenderit itaque minima labore, id nesciunt eos iste, debitis eligendi optio, modi cupiditate? Iure fugit provident necessitatibus possimus dolorum! Laudantium, eum.</p>
            
             </div>
        </div>



    </section>
  )
}

export default BlogDetailPage