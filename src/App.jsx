import React, { useState } from 'react'

const Header = () => {
  const [openIndex, setOpenIndex] = useState(1)

  const questions = [
    {
      title: "С чего начать работу с 1С-Товары?",
      answer: "Для начала работы с 1С-Товары необходимо подключить сервис и настроить программу."
    },
    {
      title: "Как подключить 1С-Ритейл Чекер* и 1С-Товары?",
      answer: `Для этого подключите бесплатный новый тариф «1С-Ритейл Чекер».

Каждую неделю вам на почту будет приходить письмо с рекомендациями:
• какие товары необходимо срочно купить, чтобы избежать упущенной прибыли из-за пустых полок;
• какие товары у вас в избытке, а какие следует отнести к неликвидам;
• какие товары стоит пересчитать, чтобы быть уверенным в правильности учета.`
    },
    {
      title: "Средний чек, о чем нам может рассказать?",
      answer: "Средний чек показывает среднюю сумму покупки одного клиента."
    },
    {
      title: "Сценарии автозаказа сервиса 1С-Товары",
      answer: "Сервис 1С-Товары помогает автоматически формировать заказы товаров."
    },
    {
      title: "Как подключить 1С-Ритейл Чекер* и 1С-Товары?",
      answer: "Подключите тариф 1С-Ритейл Чекер и настройте интеграцию с 1С-Товары."
    },
    {
      title: "Методы и формулы расчета торговой наценки",
      answer: "Торговая наценка рассчитывается как разница между ценой продажи и себестоимостью товара."
    }
  ]

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <h1 className="text-[30px] relative top-[30px] font-semibold">
        Ответы на вопросы
      </h1>

      <div className="flex flex-col gap-[15px] relative top-[60px]">
        {questions.map((item, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-[30px] shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] overflow-hidden"
          >
            <button
              onClick={() => handleClick(index)}
              className="w-full min-h-[60px] px-[28px] flex items-center justify-between text-left"
            >
              <span className="font-medium text-[16px] text-[#454B49]">
                {item.title}
              </span>

              <span className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180 text-[#555]" : "text-[#35A853]"
              }`}>
                {openIndex === index ? "⌃" : "⌄"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-[28px] pb-[20px] text-[13px] text-[#929A97] whitespace-pre-line leading-[1.6]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header