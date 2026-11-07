import React from 'react'
import groceryShopping from '../assets/Grocery shopping-amico 1.png'
import coffeeShop from '../assets/Coffee shop-amico 1.png'

const Ismat = () => {
  const cards = [
    {
      title: 'Получайте рекомендации по управлению ассортиментом',
      content: (
        <div className="space-y-3 text-[14px] leading-[1.65] text-[#828c89]">
          <p>Для этого подключите бесплатно новый тариф «1С-Ритейл Чекер».</p>
          <p>Каждую неделю вам на почту будет приходить письмо с рекомендациями:</p>
          <ul className="space-y-1.5 pl-1">
            <li className="flex items-start gap-2">
              <span className="text-[#828c89] select-none">•</span>
              <span>какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#828c89] select-none">•</span>
              <span>какие товары у вас в избытке, а какие следует отнести к неликвидам;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#828c89] select-none">•</span>
              <span>какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.</span>
            </li>
          </ul>
        </div>
      ),
      link: {
        text: 'Подробнее о 1С-Ритейл Чекер →',
        href: '#',
      },
    },
    {
      title: 'Прогнозируйте спрос и управляйте запасами',
      content: (
        <div className="space-y-3 text-[14px] leading-[1.65] text-[#828c89]">
          <p>
            Используйте 1С-Товары для более точного прогноза спроса. 1С-Товары учитывают средние продажи,
            тренды, периоды дефицита товара (пробелы на полках), сезонность спроса, праздники, распродажи,
            акции.
          </p>
          <p>
            Ежедневно 1С-Товары автоматически проверяют минимальные остатки и своевременно отправляет
            заявку поставщику, используя результаты прогноза. Так вы избежите как дефицита, так и излишков
            товара в магазине.
          </p>
        </div>
      ),
      link: {
        text: 'Подробнее о 1С-Товары →',
        href: '#',
      },
    },
    {
      title: 'Планируйте ассортимент без ошибок',
      content: (
        <div className="text-[14px] leading-[1.65] text-[#828c89]">
          <p>
            Узнайте, какие товары приносят вам прибыль и всегда должны быть в ассортименте. И, наоборот,
            выводите из ассортимента товары с низкой наценкой и оборачиваемостью.
          </p>
        </div>
      ),
    },
    {
      title: 'Контролируйте бизнес и повышайте прибыль',
      content: (
        <div className="space-y-3 text-[14px] leading-[1.65] text-[#828c89]">
          <p>Для этого используйте блок аналитики.</p>
          <p>
            Пробуйте разные варианты повышения продаж — новые товары, изменение наценки,
            перераспределение площади. Убедиться в правильности действий помогут отчеты. Блок аналитики
            доступен через Интернет и сделан как приборная панель индикаторов деятельности, что позволяет
            быстро заметить изменения.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section className="w-full bg-[#fbfdfc] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#2d3436] tracking-tight">
            Для розничных магазинов и оптовиков
          </h2>
          <div className="h-1 w-20 bg-[#35A853] mt-3 rounded-full"></div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Illustrations */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-8">
            <div className="flex items-center justify-center p-2">
              <img
                src={groceryShopping}
                alt="Управление ассортиментом в розничном магазине"
                className="w-full max-w-[420px] h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <div className="flex items-center justify-center p-2">
              <img
                src={coffeeShop}
                alt="Автоматизация кассы и торговли"
                className="w-full max-w-[420px] h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[32px] p-7 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#edf2ee] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(53,168,83,0.1)] hover:border-[#35A853]/30"
              >
                <h3 className="text-lg sm:text-[19px] font-bold text-[#2d3436] leading-snug mb-4">
                  {card.title}
                </h3>

                {card.content}

                {card.link && (
                  <div className="mt-5">
                    <a
                      href={card.link.href}
                      className="inline-block text-[14px] font-medium text-[#35A853] hover:text-[#2d8f46] hover:underline transition-colors"
                    >
                      {card.link.text}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ismat
