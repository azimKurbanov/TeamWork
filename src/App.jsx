import React from 'react'
import Ismat from './components/Ismat'

const App = () => {
 const features = [{
  title: 'Получайте рекомендации по управлению ассортиментом',
  description: 'Для этого подключите бесплатный модуль тарифа «1С-Ритейл Чекер». Каждую неделю вам на почту будут приходить рекомендации.',
  link: 'Подробнее о 1С-Ритейл Чекер →',

 },
 {
 title: 'Прогнозируйте спрос и управляйте запасами',
 description: 'Используйте 1С-Товары для более точного прогноза спроса. Система учитывает средние продажи, сезонность, праздники и другие факторы.',
 link: 'Подробнее о 1С-Товары →',
 },
 {
title: 'Планируйте ассортимент без ошибок',
description: 'Узнайте, какие товары приносят вам прибыль и всегда должны быть в ассортименте. Вы сможете избежать ошибок при выборе товаров.',



 },
 {
  title: 'Контролируйте бизнес и повышайте прибыль',
  description: 'Для этого используйте блок аналитики. Пробуйте разные варианты повышения доходов, изменения цен и улучшения работы магазина.',


 },


];





  return (
    <div>
      App
     <h1>Salom Muza</h1>


    <section className='mx-auto grid max-w-[1250px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-14'>
     <div className='flex flex-col gap-8'>
    <img src="" alt="Retail shop " className='h-[310px] w-full object-contain' />
    <img src="" alt="Retail shop " className='h-[310px] w-full object-contain' />


     </div >



     <div className='flex flex-col gap-4'>
    {features.map((item, index) => (
      <div key={index} className='rounded-[28px] bg-white p-7 shadow-[0_5px_15px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
        <h3 className='mb-4 text-lg font-semibold text-[#303638]'>
          {item.title}
        </h3>

           <p className="text-sm leading-relaxed text-[#92999a]">
              {item.description}
            </p>


            {item.link && (
              <a
                href="#"
                className="mt-4 inline-block text-sm font-medium text-[#58a96b] transition hover:text-green-700"
              >

                  {item.link}
              </a>
            )}
          </div>
        ))}
      </div>


    </section>

    </div>

  )
}

export default App