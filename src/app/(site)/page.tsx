import React from 'react';
import { TitleSection } from '../../components/landing-page/title-section';
import { Button } from '../../components/ui/button';
import Image from 'next/image';
import Banner from '../../../public/appBanner.png';
import Cal from '../../../public/cal.png';
import {
  CLIENTS,
  PRICING_CARDS,
  PRICING_PLANS,
  USERS,
} from '../../lib/constants';
import { randomUUID } from 'crypto';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import CustomCard from '../../components/landing-page/custom-card';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '../../components/ui/avatar';
import { CardTitle, CardDescription } from '../../components/ui/card';
import { cn } from '@/src/lib/utils';

const HomePage = () => {
  return (
    <>
      <section
        className=' overflow-hidden
      px-4
      sm:px-6
      mt-10
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center'
      >
        <TitleSection
          pill='✨ Your Workspace, Perfected'
          title='All-In-One Collaboration and Productivity Platform'
          subheading='Cypress is THE ultimate collaboration powerhouse for remote teams, freelancers, and solo developers. Designed to elevate project management and communication strategies. Cypress is transforming the way teams work together, making remote collaboration seamless and efficient.'
        />
        <div
          className='bg-white
          p-[4px]
          mt-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
        '
        >
          <Button
            variant='btn-secondary'
            className=' w-full
            rounded-[10px]
            p-6
            text-2xl
            bg-background
          '
          >
            Get Cypress Free
          </Button>
        </div>
        <div
          className='md:mt-[-90px]
          sm:w-full
          w-[750px]
          flex
          justify-center
          items-center
          mt-[-40px]
          relative
          sm:ml-0
          ml-[-50px]
        '
        >
          <Image src={Banner} alt='Application Banner' />
          <div
            className='bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          '
          ></div>
        </div>
      </section>
      <section className='relative'>
        <div
          className='overflow-hidden flex after:content[""] after:dark:from-brand-dark  after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content[""]
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute'
        >
          {[...Array(2)].map((_, arr) => (
            <div
              key={arr}
              className='flex
                flex-nowrap
                animate-slide
          '
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=' relative
                    w-[200px]
                    m-14
                    shrink-0
                    flex
                    items-center
                  '
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={250}
                    className='object-contain max-w-none'
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className='px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative
      '
      >
        <div
          className='w-[30%]
          blur-[140px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/30
          -z-10
          top-[30%]
        '
        ></div>
        <TitleSection
          pill='Features'
          title='Keep track of your projects, tasks, team members and meetings, all in one place'
          subheading='Capture your ideas, thoughts, and meeting notes in a structured and organized manner.'
        />
        <div
          className='mt-10
          max-w-[450px]
          flex
          justify-center
          items-center
          relative
          sm:ml-0
          rounded-2xl
          border-8
          border-washed-purple-300 
          border-opacity-10
        '
        >
          <Image src={Cal} alt='Banner' className='rounded-2xl' />
        </div>
      </section>
      <section className='relative'>
        <div
          className='w-full
          blur-[140px]
          rounded-full
          h-32
          absolute
          bg-brand-primaryPurple/40
          -z-100
          top-[120%]
        '
        />
        <div
          className='mt-20
          px-4
          sm:px-6 
          flex
          flex-col
          overflow-x-hidden
          overflow-visible
        '
        >
          <TitleSection
            title='Trusted by all'
            subheading='Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs.'
            pill='Testimonials'
          />
          {[...Array(2)].map((_, index) => (
            <div
              key={randomUUID()}
              className={cn(
                'mt-10 flex flex-nowrap gap-6 self-start',
                {
                  'flex-row-reverse': index === 1,
                  'animate-slide': index === 0,
                  'animate-slide_reverse': index === 1,
                  'ml-[100vw]': index === 1,
                },
                'hover:paused'
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px] md:w-[600px] shrink-0 rounded-3 dark:bg-gradient-to-t dark:from-border dark:to-background"
                  cardHeader={
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">{testimonial.name}</CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">{testimonial.message}</p>
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
