const HeaderHero = () => {
  return (
    <section className='mt-8'>
        <div className='w-full py-4 px-10'>
            <p className='text-gray-500 italic'>The quickest way to split your dinner tab.</p>
        </div>
        <div className='w-full flex items-center justify-between px-10'>
            <div className='w-48% h-full'>
                <h1 className='text-gray-300 text-5xl'>Fast, Simple, Social.</h1>
                <p className='w-[48%] mt-6 text-gray-400 text-sm'>
                Take the hassle out of splitting bills, SplitMe makes it a breeze to split costs accurately and fairly. 
                Simply snap a photo of your receipt using your smartphone&apos;s camera, 
                and let our advanced OCR technology work its magic.
                </p>
            </div>
            <div className='w-48% h-full flex items-center jusitfy-center'>

            </div>
        </div>
    </section>
  )
}

export default HeaderHero;
