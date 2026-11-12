import React from 'react'
import bigone from '../assets/bigone.png'
import one from '../assets/one.png'
import two from '../assets/two.svg'
import three from '../assets/three.svg'
import foure from '../assets/foure.svg'
import five from '../assets/five.svg'
import fivee from '../assets/fivee.png'
import seven from '../assets/seven.png'
import logobosket from '../assets/logobosket.png'
import gift from '../assets/gift.svg'
const Header = () => {
  return (
    <div>
       <nav className="flex justify-between items-center pt-10 pl-10 pr-10">
        <div className='flex justify-center items-center gap-5'>
            <img src={logobosket} alt=""  className='h-10 w-10'/>
            <h1 className="text-2xl font-bold">1С-Товары</h1>
        </div>
        <div>
            <ul className='flex justify-center items-center gap-8'>
                <li className='text-gray-600 hover:text-green-500'>Как это работает</li>
                <li className='text-gray-600 hover:text-green-500'>Инструкции</li>
                <li className='text-gray-600 hover:text-green-500'>Продукты</li>
                <li className='text-gray-600 hover:text-green-500'>База знаний </li>
                <li className='text-gray-600 hover:text-green-500'>О нас</li>
                <button className=' h-10 w-20 rounded-3xl bg-green-500 text-white'>Вход</button>
            </ul>
        </div>
       </nav>

       <div className="mt-20 flex justify-center items-center gap-60">
             <div>
                <h1 className="text-5xl  pb-10">Управление запасами <br /> розничного магазина</h1>
                   <p>Использование сервиса 1С-Товары позволяет значительно <br />
                    упростить работу по формированию заявок поставщику.</p>
                    <button className="bg-green-600 h-10 w-60 text-white rounded-3xl mt-10">Заказать демонстрацию</button>
             </div>
             <div>
                <img src={bigone} alt=""  className='h-130 w-130'/>
             </div>
       </div>

       <div className='mt-30'>
        <div className="flex justify-center items-center gap-10 mb-5">
            <div className="h-65 w-155 rounded-4xl shadow-xl shadow-gray-200  pl-10">
                <div className="flex justify-start gap-5 items-center">
                <img src={one} alt="" />
                <h1 className="font-bold pb-5 mt-10">Управление запасами</h1>
                </div>
                  <p className='text-gray-500 mb-7'>Сервис 1С-Товары позволяет рассчитать необходимое количество <br />
                 товаров на полках (уровень запасов), помогает организовать систему <br />
                 контроля за остатками товаров, а также вовремя и в нужном количестве <br />
                 закупать у поставщиков.
                 </p>
                 <button className=' text-green-400 hover:text-white text-sm h-8 w-30 rounded-2xl border-2 border-green-400 hover:bg-green-600 '>Подробнее</button>
            </div>
            <div className="h-65 w-155 rounded-4xl shadow-xl shadow-gray-200  pl-10">
                 <div className="flex justify-start gap-5 items-center">
                <img src={two} alt="" />
                <h1 className="font-bold pb-5 mt-10">Управление запасами</h1>
                </div>
                  <p className='text-gray-500 mb-7'>Сервис 1С-Товары позволяет рассчитать необходимое количество <br />
                 товаров на полках (уровень запасов), помогает организовать систему <br />
                 контроля за остатками товаров, а также вовремя и в нужном количестве <br />
                 закупать у поставщиков.
                 </p>
                 <button className='text-green-400 hover:text-white text-sm h-8 w-30 rounded-2xl border-2 border-green-400 hover:bg-green-600 '>Подробнее</button>
            </div>
        </div>
        <div className="flex justify-center items-center gap-10">
             <div className="h-85 w-100 rounded-4xl shadow-2xl shadow-gray-200  pl-5">
               <div className="flex justify-start gap-5 items-center">
                <img src={three} alt="" />
                <h1 className="font-bold pb-5 mt-10">Управление запасами</h1>
                </div>
                  <p className='text-gray-500 mb-7'>Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.
                 </p>
                 <button className=' text-green-400 hover:text-white text-sm h-8 w-30 rounded-2xl border-2 border-green-400 hover:bg-green-600 '>Подробнее</button>
            </div>
            <div className="h-85 w-100 rounded-4xl shadow-2xl shadow-gray-200  pl-5">
                 <div className="flex justify-start gap-5 items-center">
                <img src={foure} alt="" />
                <h1 className="font-bold pb-5 mt-10">Управление запасами</h1>
                </div>
                  <p className='text-gray-500 mb-7'>Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.
                 </p>
                 <button className=' text-green-400 hover:text-white text-sm h-8 w-30 rounded-2xl border-2 border-green-400 hover:bg-green-600 '>Подробнее</button>
            </div>
            <div className="h-85 w-100 rounded-4xl shadow-2xl shadow-gray-200  pl-5">
                 <div className="flex justify-start gap-5 items-center">
                <img src={five} alt="" />
                <h1 className="font-bold pb-5 mt-10">Управление запасами</h1>
                </div>
                  <p className='text-gray-500 mb-7'>Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.
                 </p>
                 <button className=' text-green-400 hover:text-white text-sm h-8 w-30 rounded-2xl border-2 border-green-400 hover:bg-green-600 '>Подробнее</button>
            </div>
        </div>
         <div className="flex justify-center items-center gap-10 mb-5">
            <div className="h-65 w-155 rounded-4xl shadow-xl shadow-gray-200  pl-10">
                 <div className="flex justify-start gap-5 items-center">
                <img src={fivee} alt=""  className='h-10 w-10'/>
                <h1 className="font-bold pb-5 mt-10">Управление запасами</h1>
                </div>
                  <p className='text-gray-500 mb-7'>Сервис 1С-Товары позволяет рассчитать необходимое количество <br />
                 товаров на полках (уровень запасов), помогает организовать систему <br />
                 контроля за остатками товаров, а также вовремя и в нужном количестве <br />
                 закупать у поставщиков.
                 </p>
                 <button className=' text-green-400 hover:text-white text-sm h-8 w-30 rounded-2xl border-2 border-green-400 hover:bg-green-600 '>Подробнее</button>
            </div>
            <div className="h-65 w-155 rounded-4xl shadow-xl shadow-gray-200  pl-10">
                 <div className="flex justify-start gap-5 items-center">
                <img src={seven} alt=""  className='h-10 w-10'/>
                <h1 className="font-bold pb-5 mt-10">Управление запасами</h1>
                </div>
                  <p className='text-gray-500 mb-7'>Сервис 1С-Товары позволяет рассчитать необходимое количество <br />
                 товаров на полках (уровень запасов), помогает организовать систему <br />
                 контроля за остатками товаров, а также вовремя и в нужном количестве <br />
                 закупать у поставщиков.
                 </p>
                 <button className=' text-green-400 hover:text-white text-sm h-8 w-30 rounded-2xl border-2 border-green-400 hover:bg-green-600 '>Подробнее</button>
            </div>
        </div>
       </div>

       <div className="h-20 w-320 rounded-4xl bg-emerald-50 ml-27 mt-20 mb-30 flex justify-between items-center p-10">
        <div className="flex justify-center items-center gap-5">
        <img src={gift} alt="" />
        <h1 className="  text-green-400">Подключи любой продукт на 1 месяц бесплатно и оцени наши приемущества</h1>
        </div>
        <button className='bg-green-600 text-white h-8 w-40 rounded-2xl text-sm'>Подключить сейчас</button>
       </div>
      
    </div>
  )
}

export default Header
