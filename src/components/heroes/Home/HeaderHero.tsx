// import { useId, useRef, useState } from 'react'
// import Image from 'next/image'
// import clsx from 'clsx'
// import { motion, useInView, useMotionValue } from 'framer-motion'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'

import Container from '~/components/theme/Container'
import Button from '~/components/theme/Button'
import BackgroundIllustration from './BackgroundIllustration'
import PhoneHero from './PhoneHero'

const HeaderHero = () => {
  return (
  <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
    <Container>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
        <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-0 lg:mt-[-2rem] xl:col-span-6">
          <div className='w-full py-4'>
              <p className='text-gray-500 italic'>The quickest way to split your dinner tab.</p>
          </div>
          <h1 className="IntroAnimation IntroAnimation-Title text-4xl font-medium tracking-tight">
            Fast, Simple, Social.
          </h1>
          <p className="IntroAnimation IntroAnimation-Paragraph mt-6 text-lg text-gray-400">
                Take the hassle out of splitting bills, SplitMe makes it a breeze to split costs accurately and 
                fairly. Simply snap a photo of your receipt using your smartphone&apos;s camera, 
                and let our advanced OCR technology work its magic.
          </p>
          <div className="IntroAnimation IntroAnimation-Buttons mt-8 flex flex-wrap gap-x-6 gap-y-4">
            <Button
              href="#join"
              variant="outline"
              className="flex items-center gap-x-2 bg-[#eae8ed] text-[#1d1d1f] transition ease-in hover:border hover:border-green-500 hover:scale-[0.99]">
              <span>Get Updated</span>
              <span className='ml-2'>
                <AiOutlinePlus />
              </span>
            </Button>
            <Button
              href="#secondary-features"
              variant="solid"
              className="flex items-center gap-x-2 bg-[#0d0d12] border border-[#d4d4d475] transition-all ease-in hover:scale-[0.99]">
              <span>Sign In</span>
              <span className='ml-2'>
                <BsBoxArrowInUpRight />
              </span>
            </Button>
          </div>
        </div>
        <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
          <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
          <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
            <PhoneHero className="mx-auto max-w-[366px]" priority props={{}}>
              {/* <AppDemo /> */}
            </PhoneHero>
          </div>
        </div>
        <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
          <div className="text-center text-sm font-semibold text-gray-900 lg:text-left">
            <p className='sr-only'>
            SplitMe is the quickest way to split your dinner tab.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start">
            <li className='text-transparent'>SomeCompany</li>
          </ul>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default HeaderHero;
