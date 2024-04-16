import { BackgroundBeams } from "@/components/ui/background-beams"
const ContactUs = () => {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative'>
        <BackgroundBeams className="absolute w-full h-full top-0 z-0"/>
        <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className='text-center md:text-7xl font-sans'>Contact us</h1>
        <p className='text-center my-4 text-1xl max-w-lg mx-auto'>
           We' re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form className='flex flex-col bg-transparent gap-4'>
            <input type="text" placeholder='Enter your email' className='py-5 px-2 font-sans md:text-lg rounded-lg border-neutral-800 text-neutral-700 outline-none'/>
            <textarea name="contactus" cols={30} rows={10} placeholder='write your query here' className='rounded-lg border-neutral-800 text-neutral-700 outline-none py-3 px-2'></textarea>
            <button type='submit' className='rounded-lg bg-green-300 w-40 py-2 px-2'>Send Query</button>
        </form>
        </div>
    </div>
  )
}

export default ContactUs
