export default function Footer(){
  return (
    <footer className="footer">
      <div className="container section" style={{paddingTop:24, paddingBottom:16}}>
        <div className="grid grid-3">
          <div>
            <div style={{fontWeight:700}}>Кухни & Корпусная мебель</div>
            <div className="text-muted">Москва и МО • Гарантия 12 мес • Премиум/Бизнес</div>
          </div>
          <div>
            <div style={{fontWeight:600}}>Контакты</div>
            <div className="text-muted">
              Тел: <a href="tel:+79958825191">+7 995 882-51-91 (Андрей)</a><br/>
              Тел: <a href="tel:+79290140325">+7 929 014-03-25 (Довлет)</a><br/>
              TG: <a href="https://t.me/kuhnyashkaf" target="_blank">@kuhnyashkaf</a><br/>
              Адрес: г. Москва, Калужское шоссе 4 с1
            </div>
          </div>
          <div>
            <div style={{fontWeight:600}}>Навигация</div>
            <div className="text-muted"><a href="/catalog">Портфолио</a> · <a href="/services">Услуги</a> · <a href="/blog">Статьи</a></div>
          </div>
        </div>
      </div>
      <div className="footer-note">© {new Date().getFullYear()} ADS</div>
    </footer>
  );
}
