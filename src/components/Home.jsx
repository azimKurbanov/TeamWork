import React, { useEffect, useRef, useState } from 'react'
import reference from '../../Home-referense.png'

const links = [['О БРЕНДЕ', 'about'], ['ПРОДУКЦИИ', 'products'], ['ПРЕИМУЩЕСТВА', 'advantages'], ['ОТКРЫТЬ КЛУБ', 'club'], ['КОНТАКТЫ', 'contacts']]
const products = ['КАРДИО ТРЕНАЖЕРЫ', 'СИЛОВЫЕ ТРЕНАЖЕРЫ', 'ФУНКЦИОНАЛЬНЫЙ ТРЕНИНГ', 'СВОБОДНЫЕ ВЕСА', 'РЕШЕНИЯ ДЛЯ КЛУБОВ']
const photos = ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85', 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85']
const descriptions = ['Беговые дорожки, эллиптические и велотренажеры для движения к новым результатам.', 'Продуманная биомеханика и плавная нагрузка для эффективных силовых тренировок.', 'Универсальное оборудование для персональных занятий и групповых тренировок.', 'Гантели, скамьи и стойки для полноценной силовой зоны.', 'Подбор оборудования под площадь, задачи и концепцию вашего клуба.']
const button = 'inline-flex min-h-11 items-center justify-center gap-3 bg-[#00afe1] px-6! py-3! text-xs font-bold uppercase text-white transition hover:bg-[#0098c5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00afe1]'

function Logo() {
  return <span className="flex items-center gap-4 sm:gap-7"><svg viewBox="0 0 84 80" className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-[84px]" aria-hidden="true"><path fill="#00afe1" d="M83 0v29L39 45zM83 35v45H0l23-21z" /></svg><span className="text-[46px] leading-none font-extrabold tracking-[.13em] text-[#373737] sm:text-[64px] lg:text-[100px]">TRUE<sup className="relative -top-6 text-xs tracking-normal sm:-top-8 lg:-top-12">®</sup></span></span>
}

function Header({ onRequest = () => {} }) {
  const [menu, setMenu] = useState(false)
  return <header id="home" className="relative z-20 bg-white"><div className="mx-auto! max-w-[1000px] px-5! xl:px-0!">
    <div className="relative flex min-h-24 items-center justify-between gap-4 py-4! md:min-h-[112px] lg:justify-end">
      <a href="#home" aria-label="TRUE Fitness — главная" className="lg:absolute lg:left-1/2 lg:-translate-x-1/2"><Logo /></a>
      <div className="hidden w-[190px] shrink-0 sm:block"><div className="mb-5! flex items-center justify-between text-[10px] text-neutral-600"><span title="Русский язык">🇷🇺 RU</span><a href="tel:+998906066666" className="hover:text-[#00afe1]">+998 (90)-606-66-66</a></div><button onClick={() => onRequest('Оставить заявку')} className={`${button} min-h-8 w-full py-2!`}>ОСТАВИТЬ ЗАЯВКУ</button></div>
      <button onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="main-nav" aria-label={menu ? 'Закрыть меню' : 'Открыть меню'} className="p-3! text-2xl md:hidden">{menu ? '×' : '☰'}</button>
    </div>
    <nav id="main-nav" aria-label="Основная навигация" className={`${menu ? 'flex' : 'hidden'} flex-col border-t border-neutral-700 md:flex md:h-[38px] md:flex-row md:items-center md:justify-around`}>{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={event => { setMenu(false); if (id === 'club' || id === 'contacts') { event.preventDefault(); onRequest(id === 'club' ? 'Открыть фитнес-клуб' : 'Связаться с нами') } }} className="px-3! py-3! text-xs font-bold transition hover:text-[#00afe1] md:py-2!">{label}</a>)}</nav>
  </div></header>
}

function Hero() {
  const video = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState('')
  async function toggle() {
    const player = video.current
    if (!player) return
    if (!player.paused) player.pause()
    else { try { await player.play(); setError('') } catch { setError('Видео недоступно. Попробуйте позже.') } }
  }
  return <section aria-label="Знакомство с TRUE Fitness" className="relative h-[470px] overflow-hidden bg-neutral-800 md:h-[538px]">
    <video ref={video} playsInline muted loop preload="metadata" poster={photos[0]} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setError('Видео недоступно. Попробуйте позже.')} className="absolute inset-0 h-full w-full object-cover"><source src="/video/gym.mp4" type="video/mp4" /></video>
    <div className="pointer-events-none absolute inset-0 bg-black/30" />
    <div className="relative flex h-full flex-col items-center justify-end px-5! pb-20! text-center md:pb-[102px]!">
      <button onClick={toggle} aria-label={playing ? 'Приостановить видео' : 'Воспроизвести видео'} className="mb-7! flex h-20 w-20 items-center justify-center rounded-full bg-[#00afe1] text-white transition hover:scale-105 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white">{playing ? <svg viewBox="0 0 24 24" className="h-9 w-9 fill-current" aria-hidden="true"><path d="M5 3h5v18H5zm9 0h5v18h-5z" /></svg> : <svg viewBox="0 0 24 24" className="ml-1! h-11 w-11 fill-white/80" aria-hidden="true"><path d="M5 2 23 12 5 22z" /></svg>}</button>
      <h1 className="max-w-[760px] text-[28px] leading-[1.22] font-extrabold text-white sm:text-[38px]">TRUE FITNESS - ПРЕМИУМ<br className="hidden sm:block" /> ТРЕНАЖЕРЫ ИЗ США</h1>
      {error && <p role="status" className="mt-4! text-sm text-white">{error}</p>}
    </div>
  </section>
}

function RequestDialog({ subject, onClose }) {
  const dialog = useRef(null)
  const [status, setStatus] = useState('')
  useEffect(() => {
    const previous = document.activeElement
    const modal = dialog.current
    modal.showModal()
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      modal.close()
      document.body.style.overflow = overflow
      previous?.focus()
    }
  }, [])
  function submit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (data.get('phone').replace(/\D/g, '').length < 9) { setStatus('Укажите телефон, содержащий не менее 9 цифр.'); return }
    const body = `Имя: ${data.get('name')}\nТелефон: ${data.get('phone')}\n\n${data.get('message')}`
    window.location.href = `mailto:info@truefitness.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus('Письмо подготовлено в вашем почтовом приложении. Если оно не открылось, позвоните: +998 (90) 606-66-66. Заявка через сайт не отправлялась.')
  }
  return <dialog ref={dialog} onCancel={event => { event.preventDefault(); onClose() }} onClick={event => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose() } }} aria-labelledby="request-title" className="fixed inset-0 m-auto! max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-lg overflow-y-auto border-0 bg-white p-6! text-neutral-900 shadow-2xl backdrop:bg-black/65 sm:p-10!">
    <button autoFocus onClick={onClose} aria-label="Закрыть форму" className="absolute top-2 right-3 p-2! text-3xl hover:text-[#00afe1]">×</button>
    <h2 id="request-title" className="pr-5! text-2xl font-extrabold">{subject}</h2><p className="mt-3! text-sm leading-relaxed text-neutral-500">Расскажите о проекте. Мы подготовим письмо с вашим запросом.</p>
    <form onSubmit={submit} className="mt-6! flex flex-col gap-4">
      <label className="text-sm font-semibold">Ваше имя<input required name="name" autoComplete="name" maxLength={100} className="mt-2! block w-full border border-neutral-300 p-3! font-normal outline-[#00afe1]" placeholder="Как к вам обращаться" /></label>
      <label className="text-sm font-semibold">Телефон<input required name="phone" type="tel" autoComplete="tel" maxLength={30} className="mt-2! block w-full border border-neutral-300 p-3! font-normal outline-[#00afe1]" placeholder="+998 (__) ___-__-__" /></label>
      <label className="text-sm font-semibold">О проекте<textarea name="message" rows={3} maxLength={2000} defaultValue={subject === 'Оставить заявку' ? '' : subject} className="mt-2! block w-full resize-y border border-neutral-300 p-3! font-normal outline-[#00afe1]" /></label>
      <label className="flex items-start gap-2 text-xs leading-relaxed text-neutral-600"><input type="checkbox" required className="mt-1! accent-[#00afe1]" />Разрешаю использовать указанные контакты для ответа на мой запрос.</label>
      <button type="submit" className={button}>Подготовить письмо ↗</button>{status && <p role="status" className="text-sm leading-relaxed text-neutral-600">{status}</p>}
    </form>
  </dialog>
}

function ReferenceCrop({ viewBox, label, className = '' }) {
  return <svg viewBox={viewBox} preserveAspectRatio="xMidYMid slice" role="img" aria-label={label} className={className}><image href={reference} width="1151" height="2048" /></svg>
}

function Advantage({ title, children, photo }) {
  return <article className={`relative flex flex-col justify-end overflow-hidden px-10! py-5! text-white ${photo ? 'min-h-[340px] flex-1 bg-neutral-700' : 'bg-[#00afe1]'}`}>
    {photo && <><ReferenceCrop viewBox={photo} label="Тренировки на оборудовании TRUE" className="absolute inset-0 h-full w-full" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" /></>}
    <div className="relative"><h3 className="max-w-[380px] text-[24px] leading-tight font-bold">{title}</h3><div className={`${photo ? 'my-7!' : 'my-4!'} h-0.5 w-[195px] bg-[#f4f600]`} /><p className="text-sm leading-tight text-white/90">{children}</p></div>
  </article>
}

function Home() {
  const [slide, setSlide] = useState(0)
  const [subject, setSubject] = useState(null)
  const select = index => setSlide((index + products.length) % products.length)
  return <div lang="ru" className="min-h-screen bg-white text-black selection:bg-[#00afe1] selection:text-white [&_button]:cursor-pointer [&_a]:focus-visible:outline-2 [&_a]:focus-visible:outline-[#00afe1]">
    <Header onRequest={setSubject} /><main><Hero />
      <section id="about" className="scroll-mt-4 bg-gradient-to-r from-[#42c2e6] via-[#00afe1] to-[#42c2e6] px-5! py-9! text-center text-white"><div className="mx-auto! mb-4! h-px w-[184px] bg-[#f4f600]" /><h2 className="mx-auto! max-w-[760px] text-xl leading-[1.22] font-bold sm:text-[29px]">TRUE - ВЕДУЩИЙ МИРОВОЙ<br className="hidden sm:block" /> ПРОИЗВОДИТЕЛЬ ПРЕМИАЛЬНОГО ФИТНЕС ОБОРУДОВАНИЯ</h2><div className="mx-auto! mt-6! h-px w-[184px] bg-[#f4f600]" /></section>
      <section id="products" aria-label="Категории оборудования" aria-roledescription="карусель" className="relative mx-auto! grid max-w-[1000px] scroll-mt-5 gap-6 px-5! py-12! md:min-h-[520px] md:grid-cols-[1fr_1.05fr] md:gap-0 xl:px-0!">
        <div className="relative z-10"><h2 className="text-[44px] leading-[1.3] font-extrabold">TRUE<br /><span className="text-[#00afe1]">FITNESS</span></h2><div className="mt-9! mb-5! h-1 w-[84px] bg-[#f4f600]" /><p className="max-w-[330px] text-[23px] leading-[1.3] font-bold">СОВРЕМЕННОЕ И НАДЕЖНОЕ ОБОРУДОВАНИЕ ДЛЯ ФИТНЕС-КЛУБОВ</p><button onClick={() => setSubject(products[slide])} className="mt-5! flex max-w-[360px] items-center gap-5 text-left text-[23px] leading-[1.3] font-bold text-[#00afe1] hover:text-[#0085ac]"><span>{products[slide]}</span><span aria-hidden="true" className="text-5xl">⟶</span></button></div>
        <div className="relative flex min-h-[310px] items-center overflow-hidden md:min-h-[420px]" aria-live="polite" aria-atomic="true">{slide === 0 ? <ReferenceCrop viewBox="635 940 440 432" label="Кардиотренажер TRUE — беговая дорожка" className="max-h-[432px] w-full" /> : <div className="relative h-full min-h-[310px] w-full bg-[#00afe1]"><img src={photos[(slide - 1) % photos.length]} alt={products[slide]} className="absolute inset-0 h-full w-full object-cover" /><div className="relative flex min-h-[310px] flex-col justify-end bg-gradient-to-t from-black/85 to-transparent p-7! text-white md:min-h-[420px]"><p className="text-xl font-bold">{products[slide]}</p><p className="mt-3! text-sm leading-relaxed">{descriptions[slide]}</p></div></div>}</div>
        <div className="flex items-center justify-center gap-2 md:absolute md:bottom-[74px] md:left-[39%] md:z-10" aria-label="Переключение оборудования"><button onClick={() => select(slide - 1)} aria-label="Предыдущая категория" className="h-9 w-7 text-xl text-neutral-500 hover:text-[#00afe1]">‹</button>{products.map((name, index) => <button key={name} onClick={() => select(index)} aria-label={name} aria-pressed={slide === index} className="flex h-8 w-5 items-center justify-center"><span className={`h-[18px] w-[18px] rounded-full transition ${slide === index ? 'bg-[#f2ed00]' : 'bg-[#ccc] hover:bg-[#00afe1]'}`} /></button>)}<button onClick={() => select(slide + 1)} aria-label="Следующая категория" className="h-9 w-7 text-xl text-neutral-500 hover:text-[#00afe1]">›</button></div>
      </section>
      <section id="advantages" aria-label="Преимущества TRUE" className="scroll-mt-4 bg-[#f5f5f5] px-5! py-[70px]!"><div className="mx-auto! grid max-w-[1110px] gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-3"><Advantage title="ЛУЧШИЕ ХАРАКТЕРИСТИКИ" photo="20 1493 548 115">Наши тренажеры имеют самые современные характеристики в классе: от более мощных технических показателей до расширенных функциональных возможностей.</Advantage><Advantage title="ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ">Высокое качество тренажеров — это визитная карточка TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры.</Advantage></div>
        <div className="flex flex-col gap-3"><Advantage title="НИЗКАЯ СТОИМОСТЬ ВЛАДЕНИЯ">Надежность оборудования обеспечивает низкие затраты на сервисное обслуживание. По стоимости затрат на эксплуатацию TRUE выигрывает у конкурентов.</Advantage><Advantage title="КАЧЕСТВЕННЫЙ И ОПЕРАТИВНЫЙ СЕРВИС" photo="585 1677 545 120">Оборудование должно работать бесперебойно. Поэтому мы уделяем особое внимание наличию необходимых запчастей и оперативности технического реагирования.</Advantage></div>
      </div></section>
      <Home2 />
    </main>
    {subject && <RequestDialog subject={subject} onClose={() => setSubject(null)} />}
  </div>
}

const Home2 = () => {
    return (
        <div className="mx-auto! max-w-[1450px] px-4!">
            <div className="flex flex-col items-center justify-around gap-8 py-10! md:flex-row">
                <div>
                    <h1 className='text-4xl text-[#01AEE7] '>Мы предлагаем  <br />
                        полный комплекс услуг</h1>
                </div>
                <div>
                    <svg viewBox="0 0 200 300" className="h-[500px] w-full max-w-[350px] text-[#01AEE7]" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="130" cy="40" r="20" /><path d="m100 90 40 40 35-20M100 90l-30 60-40 10M100 90l15 90 50 80M115 180l-50 30-25 65" /></svg>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-10 py-8! md:grid-cols-2 md:gap-20">
                <div>
                    <svg viewBox="0 0 24 24" className="relative bottom-[10px] h-10 w-10 text-[#01AEE7]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 4h16v12H8l-4 4V4Zm4 4h8M8 12h5" /></svg>
                    <h1 className=''>КОНСАЛТИНГ</h1>
                    <p className='text-[10px] text-[grey]'>Помогаем в разработке <br /> концепции клуба, <br /> зонировании, оснащении и <br /> расчете финансовых показателей.</p>
                </div>
                <div>
                    <svg viewBox="0 0 24 24" className="relative bottom-[10px] h-10 w-10 text-[#01AEE7]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m4 4 16 0 0 16 -16 0Z M10 8l6 4-6 4Z" /></svg>
                    <h1 className=''>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h1>
                    <p className='text-[10px] text-[grey]'>Полный цикл пуско-наладочных <br /> работ, а также сервисного <br /> обслуживания тренажеров</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-10 py-8! md:grid-cols-2 md:gap-20">
                <div>
                    <svg viewBox="0 0 24 24" className="relative bottom-[10px] h-10 w-10 text-[#01AEE7]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m3 7 9-5 9 5-9 5Zm0 0v10l9 5 9-5V7M12 12v10" /></svg>
                    <h1 className=''>ПОДБОР ОБОРУДОВАНИЯ <br /> И 3D ПРОЕКТ</h1>
                    <p className='text-[10px] text-[grey]'>Помогаем подобрать оборудование, <br /> сделать расстановку на плане и <br /> показать 3D визуализацию <br /> вашего будущего проекта.</p>
                </div>
                <div>
                    <svg viewBox="0 0 24 24" className="relative bottom-[10px] h-10 w-10 text-[#01AEE7]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m14 6 4-4 4 4-4 4-4-4ZM3 21l11-11M3 3l18 18M3 3l1 5 4-4Z" /></svg>
                    <h1 className=''>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h1>
                    <p className='text-[10px] text-[grey]'>Полный цикл пуско-наладочных <br /> работ, а также сервисного <br /> обслуживания тренажеров</p>
                </div>
            </div>



            <div className="grid grid-cols-1 gap-10 py-8! md:grid-cols-2 md:gap-20">
                <div>
                    <svg viewBox="0 0 24 24" className="relative bottom-[10px] h-10 w-10 text-[#01AEE7]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 8h14v13H5ZM3 8h18V4H3ZM12 4v17" /></svg>
                    <h1 className=''>ПОСТАВКА ЗАПЧАСТЕЙ</h1>
                    <p className='text-[10px] text-[grey]'>Поставка как гарантийных, так и <br /> постгарантийных запчастей.</p>
                </div>
                <div>
                    <svg viewBox="0 0 24 24" className="relative bottom-[10px] h-10 w-10 text-[#01AEE7]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M1 5h13v12H1ZM14 9h5l4 5v3h-9M7 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" /></svg>
                    <h1 className=''>Доставка по всему <br /> Узбекистану</h1>
                    <p className='text-[10px] text-[grey]'>Мы доставляем оборудование по <br />
                        всему Узбекистану.</p>
                </div>
            </div>



            <div className="mt-12! flex justify-center">
                <div className="h-[600px] w-full max-w-[1200px] bg-gradient-to-br from-neutral-900 to-[#01AEE7]" aria-hidden="true" />
            </div>
<div className="mx-auto! my-10! flex w-full max-w-[500px] flex-col items-center justify-center gap-5 bg-white p-6! text-center text-black">
                <h1 className='right-[20px] '>Получите эксклюзи3вное <br /> предложение на тренажеры <br /> TRUE FITNESS</h1>
                <p>Мы будем рады проконсультировать Вас и помочь с <br /> подбором оборудования</p>
                <input type="text" placeholder='имя' className='rounded-4xl border-4 bg-gray-100 w-[250px] h-[40px]' />
                <input type="email" aria-label="Email" placeholder='Email' className='rounded-4xl border-4 bg-gray-100 w-[250px] h-[40px]' />
                <input type="tel" aria-label="???????" placeholder='+998 (99)-999-99-99' className='rounded-4xl border-4 bg-gray-100 w-[250px] h-[40px]' />

                <button className='w-[280px] h-[50px] bg-[#01AEE7] text-white'>ОТПРАВИТЬ</button>


                <p>Нажимая на кнопку, вы даете согласие на обработку <br /> персональных данных и соглашаетесь c политикой <br /> конфиденциальности</p>
            </div>


            <div className="grid grid-cols-1 gap-10 bg-[#01AEE7] p-8! text-white md:grid-cols-2 xl:grid-cols-4">
                <div className="text-white">
                    <h1 className='text-[24px] font-bold mb-5!'>Категории тренажеров</h1>
                    <ul><li>Кардио тренажеры</li>
                    <li>Composite Strength</li>
                    <li>True Stretch</li>
                    <li>Сайклинг</li>
                    <li>Групповые тренировки</li>
                    <li>Силовые тренажеры</li>
                    <li>Консоли</li></ul>
                    <h1 className='text-[24px] text-white mt-5!'>© TRUE FITNESS</h1>
                </div>

                <div className="text-white">
                    <h1 className='text-[24px] font-bold mb-5!'>ИНФОРМАЦИЯ</h1>
                    <ul><li>О Бренде</li>
                    <li>Преимущества</li>
                    <li>открыть клуб</li>
                    <li>Сайклинг</li>
                    <li>продукции</li></ul>
                </div>


                <div className="text-white">
                    <h1 className='text-[24px] font-bold mb-5!'>Контакты</h1>
                    <ul><li>Политика конфиденциальности</li>
                    <li>Контакты</li></ul>

                </div>


                <div className="text-white">
                    <h1 className='text-[24px] font-bold mb-5!'>ПОДПИСАТЬСЯ НА НОВОСТИ И
                        <br /> АКЦИИ</h1>
              

                </div>
            </div>

        </div>
    )
}

export { Header, Hero }
export default Home
