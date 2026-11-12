import { useEffect, useRef, useState } from 'react'

const ARTICLES = [
  {
    id: 1,
    title: 'Как автоматизировать складской учёт с помощью 1С',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    date: '12 марта 2026',
    excerpt:
      'Разбираем, как 1С помогает навести порядок на складе: от приёмки товара до инвентаризации и аналитики остатков.',
    content: [
      'Складской учёт — одна из самых чувствительных зон бизнеса. Ошибка в остатках приводит к кассовым разрывам, задержкам отгрузок и недовольству клиентов. Решения 1С закрывают эти задачи в едином контуре.',
      'Начните с настройки номенклатуры и адресного хранения: система позволит отслеживать каждую единицу товара и автоматически формировать документы приёмки и отгрузки.',
      'Для руководителя 1С формирует понятные отчёты по остаткам, оборачиваемости и движению товаров. Это помогает вовремя закупать востребованные позиции и не замораживать деньги в неликвиде.',
    ],
  },
  {
    id: 2,
    title: '5 ошибок при выборе программы для бухгалтерии',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    date: '5 марта 2026',
    excerpt:
      'Рассказываем, на что обратить внимание, чтобы не переплатить и не столкнуться с проблемами при переходе на новый софт.',
    content: [
      'Выбор программы начинается не с цены, а с задач бизнеса. Универсальное решение может оказаться избыточным для небольшой компании или, наоборот, не закрыть отраслевую специфику.',
      'Вторая частая ошибка — экономия на внедрении. Без настройки и обучения сотрудников даже самая функциональная система работает вполовину своих возможностей.',
      'Проверьте, как решение масштабируется, какие отчёты поддерживает и насколько просто интегрируется с сайтом, складом и банком. 1С закрывает эти сценарии без дополнительных надстроек.',
    ],
  },
  {
    id: 3,
    title: '1С:Зарплата и управление персоналом: что нового',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    date: '28 февраля 2026',
    excerpt:
      'Ключевые изменения в расчёте зарплаты, кадровом учёте и отчётности, которые стоит учесть уже в этом году.',
    content: [
      'В новых версиях 1С:ЗУП усилена работа с кадровыми документами и электронным документооборотом. Больше процессов можно вести без бумаги и ручного переноса данных.',
      'Обновлённые механизмы расчёта помогают быстрее обрабатывать больничные, отпуска и премии. Система сама проверяет корректность введённых данных и подсказывает возможные ошибки.',
      'Для руководителя важны готовые аналитические отчёты: численность, фонд оплаты труда и текучесть кадров доступны в наглядном виде без выгрузок в таблицы.',
    ],
  },
  {
    id: 4,
    title: 'Как подготовить бизнес к переходу на 1С:ERP',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
    date: '20 февраля 2026',
    excerpt:
      'Пошаговый план внедрения ERP без остановки текущих процессов и лишних рисков для команды.',
    content: [
      'Переход на 1С:ERP — это не только замена программы, но и пересмотр бизнес-процессов. Начните с аудита: зафиксируйте текущие узкие места и определите, какие задачи должна решать новая система.',
      'Составьте дорожную карту внедрения по этапам. В первую очередь автоматизируйте критичные участки — финансы, закупки и производство, а затем расширяйте контур.',
      'Обучение команды стоит начать до запуска. Наши специалисты помогают провести подготовку, перенести данные и сопровождать систему после старта.',
    ],
  },
  {
    id: 5,
    title: 'Розница без хаоса: учёт товаров и продаж в 1С',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
    date: '14 февраля 2026',
    excerpt:
      'Как объединить кассу, склад и аналитику продаж в одном окне и принимать решения на основе точных данных.',
    content: [
      'Розничный бизнес выигрывает, когда касса, склад и управление ассортиментом работают синхронно. 1С:Розница связывает все точки продаж в единую систему.',
      'Автоматическое списание товаров и контроль остатков помогают избежать ситуаций, когда популярная позиция закончилась, а неликвид занимает полку.',
      'Отчёты по выручке, среднему чеку и наиболее продаваемым товарам формируются автоматически. Это основа для планирования закупок и акций.',
    ],
  },
  {
    id: 6,
    title: 'Онлайн-кассы и 1С: инструкция по подключению',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    date: '7 февраля 2026',
    excerpt:
      'Подробный гайд по настройке фискального оборудования, передаче чеков и работе с ОФД без ошибок.',
    content: [
      'Подключение онлайн-кассы начинается с проверки требований законодательства и совместимости оборудования с вашей версией 1С.',
      'После регистрации кассы в налоговой настройте обмен с ОФД и проверьте передачу чеков. 1С автоматически формирует фискальные документы при продаже и возврате.',
      'Регулярно проверяйте статус кассы и срок действия фискального накопителя. Напоминания в системе помогут не пропустить замену и избежать штрафов.',
    ],
  },
]

const INFO_LINKS = [
  { key: 'about', label: 'О компании' },
  { key: 'delivery', label: 'Доставка' },
  { key: 'payment', label: 'Оплата' },
  { key: 'contacts', label: 'Контакты' },
]

const PRODUCT_LINKS = [
  { key: 'accounting', label: '1С:Бухгалтерия' },
  { key: 'payroll', label: '1С:Зарплата и управление персоналом' },
  { key: 'trade', label: '1С:Управление торговлей' },
  { key: 'retail', label: '1С:Розница' },
]

const INFO_PAGES = {
  about: {
    title: 'О компании',
    body: [
      '1С-Товары — команда специалистов по внедрению и сопровождению программных продуктов 1С. Мы помогаем бизнесу выстроить учёт, автоматизировать продажи и принимать решения на основе точных данных.',
      'Работаем с компаниями разного масштаба: от небольших магазинов до производственных предприятий. Подбираем решение под задачи бизнеса, обучаем сотрудников и остаёмся на связи после запуска.',
    ],
  },
  delivery: {
    title: 'Доставка',
    body: [
      'Мы доставляем программные продукты и документацию по всей России. Электронные лицензии приходят на указанный email в течение рабочего дня после оплаты.',
      'Для коробочных версий доступна курьерская доставка по Москве и отправка транспортными компаниями в регионы. Стоимость и сроки зависят от выбранного способа.',
    ],
  },
  payment: {
    title: 'Оплата',
    body: [
      'Оплатить заказ можно банковской картой, по счёту для юридических лиц или через сервис электронных платежей.',
      'После оплаты мы предоставляем закрывающие документы и помогаем с активацией лицензии. Для постоянных клиентов действуют индивидуальные условия.',
    ],
  },
  contacts: {
    title: 'Контакты',
    body: [
      'Телефон: +7 (999) 123-45-67 — звонки принимаем с понедельника по пятницу, с 9:00 до 18:00.',
      'Электронная почта: info@1c-tovary.ru. Адрес офиса: г. Москва, ул. Примерная, д. 10.',
      'Нажмите «Заказать звонок», и менеджер свяжется с вами в удобное время.',
    ],
  },
  accounting: {
    title: '1С:Бухгалтерия',
    body: [
      'Готовое решение для ведения бухгалтерского и налогового учёта. Автоматизирует расчёты, банковские операции, отчётность и контроль первичных документов.',
      'Подходит для малого и среднего бизнеса. Мы поможем настроить программу, перенести данные и обучить сотрудников.',
    ],
  },
  payroll: {
    title: '1С:Зарплата и управление персоналом',
    body: [
      'Система для расчёта заработной платы, кадрового учёта и управления персоналом. Поддерживает сложные схемы мотивации, отпуска, больничные и формирование отчётности.',
      'Поможем настроить кадровые процессы и подготовить программу к работе с первого дня.',
    ],
  },
  trade: {
    title: '1С:Управление торговлей',
    body: [
      'Инструмент для управления закупками, продажами, складом и взаиморасчётами. Позволяет видеть полную картину движения товаров и контролировать прибыльность.',
      'Решение подходит для оптовой и розничной торговли, а также для компаний с несколькими складами.',
    ],
  },
  retail: {
    title: '1С:Розница',
    body: [
      'Программа для автоматизации магазинов и торговых точек: касса, склад, ассортимент и лояльность покупателей в едином контуре.',
      'Помогаем подключить оборудование, настроить обмен с бухгалтерией и обучить персонал работе на кассе.',
    ],
  },
  privacy: {
    title: 'Политика конфиденциальности',
    body: [
      'Мы обрабатываем персональные данные только для связи с вами и исполнения договоров. Данные не передаются третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом.',
      'Вы можете запросить удаление или уточнение своих данных, отправив письмо на info@1c-tovary.ru.',
    ],
  },
  terms: {
    title: 'Пользовательское соглашение',
    body: [
      'Используя сайт и отправляя заявку, вы соглашаетесь с правилами обработки информации и условиями оказания услуг.',
      'Программные продукты и лицензии предоставляются в соответствии с условиями правообладателя. Подробную информацию уточняйте у менеджеров компании.',
    ],
  },
}

const getInitialPerView = () => {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth >= 768) return 3
  return 1
}

const Aziz = () => {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(getInitialPerView)
  const [animate, setAnimate] = useState(true)
  const [isMoving, setIsMoving] = useState(false)
  const [modal, setModal] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const closeTimer = useRef(null)

  const total = ARTICLES.length
  const activeIndex = ((index % total) + total) % total
  const clones = perView
  const carouselItems = [...ARTICLES.slice(-clones), ...ARTICLES, ...ARTICLES.slice(0, clones)]

  useEffect(() => {
    const handleResize = () => {
      const nextPerView = window.innerWidth >= 768 ? 3 : 1
      setPerView(nextPerView)
      setAnimate(false)
      setIndex((current) => ((current % total) + total) % total)
      setIsMoving(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [total])

  useEffect(() => {
    if (animate) return undefined

    let inner = 0
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setAnimate(true))
    })

    return () => {
      cancelAnimationFrame(outer)
      if (inner) cancelAnimationFrame(inner)
    }
  }, [animate])

  useEffect(() => {
    if (!isMoving) return undefined

    const timer = setTimeout(() => {
      setIsMoving(false)
      if (index >= total) {
        setAnimate(false)
        setIndex(index - total)
      } else if (index < 0) {
        setAnimate(false)
        setIndex(index + total)
      }
    }, 650)

    return () => clearTimeout(timer)
  }, [index, isMoving, total])

  useEffect(() => {
    if (!modal) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModalVisible(false)
        closeTimer.current = setTimeout(() => setModal(null), 220)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [modal])

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    },
    [],
  )

  const openModal = (payload) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    if (payload.type === 'callback') {
      setSubmitted(false)
      setErrors({})
      setForm({ name: '', phone: '' })
    }
    setModal(payload)
    setModalVisible(false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setModalVisible(true))
    })
  }

  const closeModal = () => {
    setModalVisible(false)
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => {
      setModal(null)
      setSubmitted(false)
      setErrors({})
      setForm({ name: '', phone: '' })
    }, 220)
  }

  const finishMove = () => {
    setIsMoving(false)
    if (index >= total) {
      setAnimate(false)
      setIndex(index - total)
    } else if (index < 0) {
      setAnimate(false)
      setIndex(index + total)
    }
  }

  const handleTrackTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return
    finishMove()
  }

  const showNext = () => {
    if (isMoving) return
    setAnimate(true)
    setIsMoving(true)
    setIndex((current) => current + 1)
  }

  const showPrev = () => {
    if (isMoving) return
    setAnimate(true)
    setIsMoving(true)
    setIndex((current) => current - 1)
  }

  const openInfo = (key) => {
    const page = INFO_PAGES[key]
    if (!page) return
    openModal({ type: 'info', title: page.title, body: page.body })
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: '' }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (form.name.trim().length < 2) {
      nextErrors.name = 'Введите ваше имя'
    }

    const digits = form.phone.replace(/\D/g, '')
    if (digits.length < 10) {
      nextErrors.phone = 'Введите корректный номер телефона'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
    }
  }

  const modalTitle =
    modal?.type === 'article'
      ? modal.article.title
      : modal?.type === 'callback'
        ? 'Заказать звонок'
        : modal?.title || 'Информация'

  return (
    <div id="top" className="w-full bg-[#f4f6f4] font-sans text-[#1f2430]">
      <section id="articles" className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3fa535]">Блог</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1f2430] sm:text-4xl">Статьи</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#6b7280] sm:text-base">
              Полезные материалы по продуктам 1С для вашего бизнеса.
            </p>
          </div>
          <p className="text-sm font-medium text-[#8a9088]">
            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex ${
                animate ? 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]' : ''
              }`}
              style={{ transform: `translateX(-${(index + clones) * (100 / perView)}%)` }}
              onTransitionEnd={handleTrackTransitionEnd}
            >
              {carouselItems.map((article, itemIndex) => (
                <div
                  key={`${article.id}-${itemIndex}`}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / perView}%` }}
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(20,30,20,0.07)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(20,30,20,0.14)]">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8ece8]">
                      <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="line-clamp-2 min-h-[3.25rem] text-base font-semibold leading-snug text-[#1f2430] sm:text-lg">
                        {article.title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => openModal({ type: 'article', article })}
                        className="mt-5 inline-flex items-center gap-2 self-start rounded-lg bg-[#3fa535] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#348c2c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3fa535] focus-visible:ring-offset-2"
                      >
                        Читать статью
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      </button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={showPrev}
            disabled={isMoving}
            aria-label="Предыдущие статьи"
            className="absolute -left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1f2430] shadow-[0_10px_30px_rgba(0,0,0,0.16)] ring-1 ring-black/5 transition hover:bg-[#3fa535] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3fa535] disabled:cursor-wait disabled:opacity-70 sm:flex lg:-left-5 lg:h-12 lg:w-12"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={showNext}
            disabled={isMoving}
            aria-label="Следующие статьи"
            className="absolute -right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#1f2430] shadow-[0_10px_30px_rgba(0,0,0,0.16)] ring-1 ring-black/5 transition hover:bg-[#3fa535] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3fa535] disabled:cursor-wait disabled:opacity-70 sm:flex lg:-right-5 lg:h-12 lg:w-12"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={showPrev}
            disabled={isMoving}
            aria-label="Предыдущие статьи"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1f2430] shadow-md ring-1 ring-black/5 transition active:bg-[#3fa535] active:text-white disabled:cursor-wait disabled:opacity-70"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <span className="min-w-14 text-center text-sm font-semibold text-[#6b7280]">
            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={showNext}
            disabled={isMoving}
            aria-label="Следующие статьи"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1f2430] shadow-md ring-1 ring-black/5 transition active:bg-[#3fa535] active:text-white disabled:cursor-wait disabled:opacity-70"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>

      <footer className="bg-[#292831] text-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-14">
            <div>
              <a href="#top" className="inline-flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3fa535] text-base font-extrabold tracking-tight text-white shadow-[0_8px_22px_rgba(63,165,53,0.35)]">
                  1С
                </span>
                <span className="text-xl font-semibold tracking-tight">1С-Товары</span>
              </a>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
                Официальные решения 1С для учёта, торговли и управления бизнесом.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <a
                  href="tel:+79991234567"
                  className="flex items-center gap-3 text-white/80 transition hover:text-[#7ed321]"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-[#3fa535]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +7 (999) 123-45-67
                </a>
                <a
                  href="mailto:info@1c-tovary.ru"
                  className="flex items-center gap-3 text-white/80 transition hover:text-[#7ed321]"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-[#3fa535]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  info@1c-tovary.ru
                </a>
              </div>

              <button
                type="button"
                onClick={() => openModal({ type: 'callback' })}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#3fa535] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(63,165,53,0.25)] transition hover:bg-[#348c2c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3fa535] focus-visible:ring-offset-2 focus-visible:ring-offset-[#292831]"
              >
                Заказать звонок
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>
            </div>

            <div>
              <h3 className="text-base font-semibold">Информация</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {INFO_LINKS.map((link) => (
                  <li key={link.key}>
                    <button
                      type="button"
                      onClick={() => openInfo(link.key)}
                      className="text-left text-white/55 transition hover:text-[#7ed321]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-semibold">Продукты</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.key}>
                    <button
                      type="button"
                      onClick={() => openInfo(link.key)}
                      className="text-left text-white/55 transition hover:text-[#7ed321]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 1С-Товары. Все права защищены.</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <button
                type="button"
                onClick={() => openInfo('privacy')}
                className="transition hover:text-[#7ed321]"
              >
                Политика конфиденциальности
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => openInfo('terms')}
                className="transition hover:text-[#7ed321]"
              >
                Пользовательское соглашение
              </button>
            </div>
          </div>
          <p className="mt-3 text-[11px] leading-5 text-white/30">
            ИНН 7701234567 · ОГРН 1157746123456 · г. Москва, ул. Примерная, д. 10
          </p>
        </div>
      </footer>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={modalTitle}
        >
          <button
            type="button"
            aria-label="Закрыть окно"
            onClick={closeModal}
            className={`absolute inset-0 h-full w-full cursor-default bg-[#14161c]/70 backdrop-blur-sm transition-opacity duration-200 ${
              modalVisible ? 'opacity-100' : 'opacity-0'
            }`}
          />

          <div
            className={`relative w-full overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200 ${
              modal.type === 'article' ? 'max-w-3xl' : 'max-w-lg'
            } ${modalVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-[0.98] opacity-0'}`}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Закрыть"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#1f2430] shadow-lg ring-1 ring-black/5 transition hover:bg-white hover:text-[#3fa535] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3fa535]"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {modal.type === 'article' && (
              <div className="flex max-h-[90vh] flex-col">
                <div className="relative h-52 shrink-0 sm:h-64">
                  <img
                    src={modal.article.image}
                    alt={modal.article.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 pr-16 sm:p-8 sm:pr-20">
                    <p className="text-xs font-medium uppercase tracking-wider text-white/75">
                      {modal.article.date}
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">
                      {modal.article.title}
                    </h3>
                  </div>
                </div>
                <div className="overflow-y-auto p-6 sm:p-8">
                  <p className="text-base font-medium leading-7 text-[#1f2430]">
                    {modal.article.excerpt}
                  </p>
                  {modal.article.content.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-sm leading-7 text-[#5b6270]">
                      {paragraph}
                    </p>
                  ))}
                  <div className="mt-7 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => openModal({ type: 'callback' })}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#3fa535] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#348c2c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3fa535] focus-visible:ring-offset-2"
                    >
                      Заказать консультацию
                    </button>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="inline-flex items-center rounded-lg border border-[#dfe3df] px-5 py-2.5 text-sm font-semibold text-[#1f2430] transition hover:border-[#3fa535] hover:text-[#3fa535]"
                    >
                      Закрыть
                    </button>
                  </div>
                </div>
              </div>
            )}

            {modal.type === 'callback' && (
              <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3fa535]">
                  Обратный звонок
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#1f2430]">Заказать звонок</h3>
                <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                  Оставьте имя и телефон — перезвоним в течение 15 минут.
                </p>

                {submitted ? (
                  <div className="mt-6">
                    <div className="rounded-xl bg-[#f0f8ee] p-5 ring-1 ring-[#3fa535]/20">
                      <p className="font-semibold text-[#2f7d24]">Заявка отправлена!</p>
                      <p className="mt-1 text-sm leading-6 text-[#4b5563]">
                        {form.name.trim()}, спасибо! Мы свяжемся с вами в ближайшее время.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#3fa535] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#348c2c]"
                    >
                      Закрыть
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="callback-name"
                        className="mb-1.5 block text-sm font-medium text-[#1f2430]"
                      >
                        Имя
                      </label>
                      <input
                        id="callback-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleFormChange}
                        placeholder="Как к вам обращаться?"
                        aria-invalid={Boolean(errors.name)}
                        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#1f2430] outline-none transition placeholder:text-[#9aa1ac] focus:ring-2 ${
                          errors.name
                            ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                            : 'border-[#dfe3df] focus:border-[#3fa535] focus:ring-[#3fa535]/15'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="callback-phone"
                        className="mb-1.5 block text-sm font-medium text-[#1f2430]"
                      >
                        Телефон
                      </label>
                      <input
                        id="callback-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={handleFormChange}
                        placeholder="+7 (___) ___-__-__"
                        aria-invalid={Boolean(errors.phone)}
                        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-[#1f2430] outline-none transition placeholder:text-[#9aa1ac] focus:ring-2 ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                            : 'border-[#dfe3df] focus:border-[#3fa535] focus:ring-[#3fa535]/15'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-[#3fa535] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#348c2c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3fa535] focus-visible:ring-offset-2"
                    >
                      Отправить заявку
                    </button>

                    <p className="text-center text-xs leading-5 text-[#8a9088]">
                      Нажимая кнопку, вы соглашаетесь с{' '}
                      <button
                        type="button"
                        onClick={() => openInfo('privacy')}
                        className="text-[#3fa535] underline-offset-2 hover:underline"
                      >
                        политикой конфиденциальности
                      </button>
                      .
                    </p>
                  </form>
                )}
              </div>
            )}

            {modal.type === 'info' && (
              <div className="max-h-[90vh] overflow-y-auto p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3fa535]">
                  1С-Товары
                </p>
                <h3 className="mt-2 pr-10 text-2xl font-bold text-[#1f2430]">{modal.title}</h3>
                <div className="mt-4 space-y-3">
                  {modal.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-[#5b6270]">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#3fa535] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#348c2c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3fa535] focus-visible:ring-offset-2"
                >
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Aziz
