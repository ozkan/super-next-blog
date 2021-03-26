import PageTransition from '@components/page-transition'

function HomePage() {
  return (
    <PageTransition>
      <div className="site-w">
        <div className="space-y-6">
          <h1 className="text-xl font-bold">
            Ben Adem ilter. İstanbul'da yaşayan Dijital Ürün Tasarımcısıyım.
          </h1>

          <p>
            Tasarım araçları, front-end teknolojileri, sokak fotoğrafçılığı ve
            tipografi gibi konularla yakından ilgileniyorum.
          </p>

          <p>
            Youtube kanalımda sektördeki eski teknoloji ve alışkanlıkları
            yenilerle değiştirmek için modern türkçe içerikler üretiyorum.
          </p>
        </div>
      </div>
    </PageTransition>
  )
}

export default HomePage
