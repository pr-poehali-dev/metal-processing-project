import { useState } from "react";
import Icon from "@/components/ui/icon";

const SERVICES = [
  {
    icon: "Building2",
    title: "Металлоконструкции",
    desc: "Проектирование и производство несущих каркасов, ферм и балок для промышленных и гражданских объектов.",
    badge: "Под заказ",
  },
  {
    icon: "Factory",
    title: "Ангары и склады",
    desc: "Быстровозводимые стальные конструкции для хранения, производства и логистики. Сроки от 30 дней.",
    badge: "Популярно",
  },
  {
    icon: "Wrench",
    title: "Лестницы и ограждения",
    desc: "Металлические лестницы, перила, решётки и заграждения. Индивидуальный дизайн и типовые решения.",
    badge: "",
  },
  {
    icon: "Truck",
    title: "Монтаж и доставка",
    desc: "Собственная бригада монтажников. Доставка конструкций любого габарита по России.",
    badge: "",
  },
  {
    icon: "ShieldCheck",
    title: "Антикоррозийная защита",
    desc: "Порошковая окраска, горячее цинкование, грунтование. Гарантия до 25 лет на покрытие.",
    badge: "",
  },
  {
    icon: "Pencil",
    title: "Проектирование",
    desc: "Разработка рабочей документации, расчёт нагрузок, согласование с контролирующими органами.",
    badge: "Бесплатно",
  },
];

const GALLERY = [
  {
    img: "https://cdn.poehali.dev/projects/2a937fca-087a-4404-87c2-33f69e91bae5/files/f7711dec-a1f6-4448-963c-f7fcf150fda8.jpg",
    title: "Производственный цех",
    tag: "Промышленность",
  },
  {
    img: "https://cdn.poehali.dev/projects/2a937fca-087a-4404-87c2-33f69e91bae5/files/4eaabe4b-cbdf-4de7-abc3-d20634ddd1fd.jpg",
    title: "Мостовые конструкции",
    tag: "Инфраструктура",
  },
  {
    img: "https://cdn.poehali.dev/projects/2a937fca-087a-4404-87c2-33f69e91bae5/files/5bc025ca-a724-49ca-9a44-4b626ec53a0e.jpg",
    title: "Складской комплекс",
    tag: "Коммерция",
  },
  {
    img: "https://cdn.poehali.dev/projects/2a937fca-087a-4404-87c2-33f69e91bae5/files/f7711dec-a1f6-4448-963c-f7fcf150fda8.jpg",
    title: "Заводской корпус",
    tag: "Промышленность",
  },
  {
    img: "https://cdn.poehali.dev/projects/2a937fca-087a-4404-87c2-33f69e91bae5/files/4eaabe4b-cbdf-4de7-abc3-d20634ddd1fd.jpg",
    title: "Пролётная ферма",
    tag: "Строительство",
  },
  {
    img: "https://cdn.poehali.dev/projects/2a937fca-087a-4404-87c2-33f69e91bae5/files/5bc025ca-a724-49ca-9a44-4b626ec53a0e.jpg",
    title: "Торговый павильон",
    tag: "Коммерция",
  },
];

const STATS = [
  { value: "1200+", label: "Выполненных проектов" },
  { value: "18", label: "Лет на рынке" },
  { value: "47", label: "Регионов России" },
  { value: "98%", label: "Клиентов возвращаются" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Все");

  const filters = ["Все", "Промышленность", "Инфраструктура", "Коммерция", "Строительство"];

  const filteredGallery =
    activeFilter === "Все"
      ? GALLERY
      : GALLERY.filter((g) => g.tag === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-widest uppercase text-foreground" style={{ fontFamily: "Oswald, sans-serif" }}>
              Металл<span className="text-primary">Пром</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Услуги", "Галерея", "О нас", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-muted-foreground hover:text-foreground text-sm font-medium transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors">
            <Icon name="Phone" size={14} />
            Позвонить
          </button>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card px-6 py-4 flex flex-col gap-4">
            {["Услуги", "Галерея", "О нас", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 text-sm font-medium w-fit">
              <Icon name="Phone" size={14} />
              Позвонить
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center grid-bg pt-16"
        style={{
          background: "linear-gradient(135deg, #0a0c10 0%, #111520 50%, #0d0f14 100%)",
        }}
      >
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(255,122,0,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary text-xs px-4 py-1.5 mb-8 tracking-widest uppercase animate-fade-up">
              <Icon name="Award" size={12} />
              Производство с 2006 года
            </div>

            <h1
              className="text-5xl md:text-7xl font-bold uppercase leading-[1.0] mb-6 animate-fade-up delay-100"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Металло
              <br />
              <span className="text-gradient">конструкции</span>
              <br />
              под ключ
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up delay-200">
              От проекта до монтажа — производим и устанавливаем стальные
              конструкции любой сложности по всей России
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <button className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-medium tracking-wide hover:bg-primary/90 transition-all hover:gap-4">
                Получить расчёт
                <Icon name="ArrowRight" size={16} />
              </button>
              <button className="flex items-center gap-3 border border-border text-foreground px-8 py-4 font-medium tracking-wide hover:border-primary/50 hover:bg-primary/5 transition-all">
                <Icon name="Play" size={16} />
                Смотреть проекты
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-card/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="py-6 px-4 border-r border-border last:border-r-0 text-center md:text-left"
                >
                  <div
                    className="text-3xl font-bold text-primary mb-1"
                    style={{ fontFamily: "Oswald, sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-muted-foreground text-xs tracking-wide uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="услуги" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-primary text-xs tracking-widest uppercase mb-3 font-medium">
                — Что мы делаем
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold uppercase text-foreground"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Наши услуги
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Полный цикл: от технического задания до сдачи объекта. Работаем с
              частными заказчиками и крупными предприятиями.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="service-card card-hover bg-card p-8 flex flex-col gap-4 cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 border border-border group-hover:border-primary/50 flex items-center justify-center transition-colors">
                    <Icon name={s.icon} size={22} className="text-primary" />
                  </div>
                  {s.badge && (
                    <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-1 tracking-wide">
                      {s.badge}
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl font-semibold uppercase text-foreground group-hover:text-primary transition-colors"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {s.desc}
                </p>

                <div className="flex items-center gap-2 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity tracking-wide">
                  Подробнее
                  <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="галерея" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-primary text-xs tracking-widest uppercase mb-3 font-medium">
                — Наши работы
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold uppercase text-foreground"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Галерея проектов
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 text-xs tracking-wide border transition-all ${
                    activeFilter === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGallery.map((item, i) => (
              <div key={i} className="gallery-item aspect-[4/3] cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="gallery-overlay">
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs text-primary tracking-widest uppercase block mb-1">
                      {item.tag}
                    </span>
                    <h3
                      className="text-white text-lg font-semibold uppercase"
                      style={{ fontFamily: "Oswald, sans-serif" }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="border border-border text-muted-foreground hover:border-primary hover:text-primary px-8 py-3 text-sm tracking-wide transition-all">
              Показать все проекты
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ff7a00 0%, #e55d00 50%, #cc4400 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2
            className="text-4xl md:text-6xl font-bold uppercase text-white mb-4"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Готовы обсудить проект?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Оставьте заявку и наш инженер свяжется с вами в течение 30 минут
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-3 bg-white text-[#cc4400] px-8 py-4 font-semibold tracking-wide hover:bg-white/90 transition-all">
              <Icon name="MessageSquare" size={18} />
              Написать нам
            </button>
            <button className="flex items-center gap-3 border-2 border-white text-white px-8 py-4 font-semibold tracking-wide hover:bg-white/10 transition-all">
              <Icon name="Phone" size={18} />
              Позвонить
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="контакты" className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Icon name="Zap" size={16} className="text-primary-foreground" />
                </div>
                <span
                  className="text-lg font-bold tracking-widest uppercase"
                  style={{ fontFamily: "Oswald, sans-serif" }}
                >
                  Металл<span className="text-primary">Пром</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Производство и монтаж металлоконструкций любой сложности. Работаем с 2006 года по всей России.
              </p>
            </div>

            <div>
              <h4
                className="text-xs tracking-widest uppercase text-muted-foreground mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Услуги
              </h4>
              <ul className="flex flex-col gap-2">
                {["Металлоконструкции", "Ангары", "Лестницы", "Монтаж"].map((item) => (
                  <li key={item}>
                    <a href="#услуги" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-xs tracking-widest uppercase text-muted-foreground mb-4"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Контакты
              </h4>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Phone" size={14} className="text-primary" />
                  +7 (800) 000-00-00
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Mail" size={14} className="text-primary" />
                  info@metallprom.ru
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={14} className="text-primary" />
                  Москва, ул. Промышленная, 12
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs">
              © 2024 МеталлПром. Все права защищены.
            </p>
            <p className="text-muted-foreground text-xs">
              ИНН 7700000000 · ОГРН 1060000000000
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}