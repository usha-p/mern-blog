import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border  border-rose-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about JavaScript?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with mern stack projects
            </p>
            <Button  className='rounded-tl-xl rounded-bl-none ounded px-2 py-1 bg-gradient-to-r from-red-200 via-red-500 to-orange-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400  me-2 mb-2 text-white'>
                <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                 MERN stack projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://fthmb.tqn.com/_P_IpRezcdFY2uZZNjKtLpyj2zA=/1500x1000/filters:fill(auto,1)/JavaScript-58acbb8a3df78c345bad32c2.jpg" />
        </div>
    </div>
  )
}
