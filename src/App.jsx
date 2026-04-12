import './App.css';

export default function TeamPracticePresentation() {
  const technologies = [
    {
      title: 'JavaScript',
      description:
        'Використовувався для реалізації клієнтської частини у вигляді Chrome Extension та взаємодії з браузерними API.',
    },
    {
      title: 'Node.js',
      description:
        'Застосовувався для створення серверної частини, обробки HTTP-запитів і координації взаємодії між клієнтом та модулем транскрипції.',
    },
    {
      title: 'Python',
      description:
        'Використовувався для реалізації модуля транскрипції аудіо та обробки результатів розпізнавання мовлення.',
    },
    {
      title: 'Faster-Whisper',
      description:
        'Модель для автоматичного розпізнавання мовлення, яка забезпечує якісну транскрипцію аудіозаписів.',
    },
    {
      title: 'pyannote.audio',
      description:
        'Бібліотека для діаризації, що дозволяє розділяти мовців у межах одного аудіозапису.',
    },
    {
      title: 'Google APIs / OAuth 2.0',
      description:
        'Використовувалися для авторизації користувача та завантаження аудіофайлів і результатів транскрипції в Google Drive.',
    },
  ];

  const stages = [
    'Аналіз поставленого завдання та формування загальної архітектури системи.',
    'Розробка клієнтської частини у вигляді Chrome Extension для запису аудіо з Google Meet та передачі запису на сервер.',
    'Створення серверної частини для прийому аудіоданих, їх обробки, транскрипції та подальшого збереження результатів.',
    'Інтеграція Faster-Whisper для розпізнавання мовлення та pyannote.audio для розділення мовців.',
    'Реалізація завантаження результатів у Google Drive та тестування повного циклу роботи сервісу.',
  ];

  const team = [
    {
      name: 'Анастасія Будзак',
      role: 'Клієнтська частина',
      details:
        'Відповідала за розробку клієнтської частини у вигляді Chrome Extension для запису аудіо під час роботи з Google Meet, організацію взаємодії з браузерними API та передачу аудіоданих на сервер.',
    },
    {
      name: 'Віталій Павлюк',
      role: 'Серверна частина',
      details:
        'Відповідав за реалізацію серверної логіки, прийом і обробку аудіофайлів, інтеграцію модуля транскрипції, діаризацію мовців та завантаження результатів у Google Drive.',
    },
  ];

  const results = [
    'Автоматичний запис аудіо під час онлайн-зустрічі.',
    'Передача отриманого запису на сервер для подальшої обробки.',
    'Транскрипція мовлення з використанням Faster-Whisper.',
    'Розділення мовців за допомогою pyannote.audio.',
    'Збереження результатів у Google Drive.',
  ];

  return (
    <div className="page">
      <header className="hero">
        <div className="container">
          
          <h1>Внутрішній сервіс транскрибації дзвінків</h1>
          <p className="hero-text">
            Командний проєкт, спрямований на запис аудіо з Google Meet, автоматичну
            транскрипцію мовлення, розділення мовців та збереження результатів у Google Drive.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container two-columns">
          <div className="card">
            <h2>Опис проєкту</h2>
            <p>
              У межах проходження практики було розроблено внутрішній сервіс для запису та
              транскрипції дзвінків. Основною ідеєю проєкту є автоматизація процесу отримання
              текстового представлення розмови під час онлайн-зустрічей із подальшим
              збереженням аудіозапису та результатів транскрипції.
            </p>
            <p>
              Система побудована за клієнт-серверним принципом. Клієнтська частина відповідає
              за запис аудіо під час онлайн-зустрічі та передачу даних на сервер, а серверна —
              за прийом файлів, координацію транскрипції, діаризацію та збереження результатів.
            </p>
          </div>

          <div className="card">
            <h2>Мета роботи</h2>
            <p>
              Розробити сервіс, який дає змогу автоматично записувати аудіо під час дзвінків,
              розпізнавати мовлення, виділяти окремих мовців та зберігати готові результати для
              подальшого використання.
            </p>
            <div className="mini-grid">
              <div className="mini-card">
                <span>Формат</span>
                <strong>Командний проєкт</strong>
              </div>
              <div className="mini-card">
                <span>Тип системи</span>
                <strong>Chrome + Server</strong>
              </div>
              <div className="mini-card">
                <span>Результат</span>
                <strong>Аудіо + Текст</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="section-header">
            <h2>Використані технології</h2>
            <p>
              Для реалізації проєкту використано клієнтські, серверні та ML-інструменти, які
              забезпечують повний цикл обробки аудіоданих.
            </p>
          </div>
          <div className="grid three-columns">
            {technologies.map((item) => (
              <div className="tech-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div className="card">
            <h2>Етапи виконання роботи</h2>
            <div className="timeline">
              {stages.map((stage, index) => (
                <div className="timeline-item" key={stage}>
                  <div className="timeline-number">{index + 1}</div>
                  <p>{stage}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card dark-card">
            <h2>Практичний результат</h2>
            <p>
              У результаті виконаної роботи створено систему, яка поєднує запис аудіо,
              транскрипцію мовлення, діаризацію та подальше збереження матеріалів у хмарному
              середовищі. Це дозволяє автоматизувати обробку дзвінків та спростити доступ до
              змісту розмови.
            </p>
            <div className="result-list">
              {results.map((item) => (
                <div className="result-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="section-header">
            <h2>Команда та внесок учасників</h2>
            <p>
              Робота над проєктом виконувалася в команді з розподілом ролей між основними
              підсистемами.
            </p>
          </div>
          <div className="grid two-equal-columns">
            {team.map((member) => (
              <div className="member-card" key={member.name}>
                <div className="member-role">{member.role}</div>
                <h3>{member.name}</h3>
                <p>{member.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            <section className="section">
        <div className="container">
          <div className="video-section">
            <div className="section-header left">
              <h2>Відеоогляд проєкту</h2>
              <p>
                У цей блок вставлено демонстрацію роботи системи: від запуску
                розширення до отримання готової транскрипції та збереження результату.
              </p>
            </div>

            <div className="video-placeholder">
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/watch?v=wBCOgQDPTrQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          Сайт-презентація командного проєкту, виконаного під час проходження практики.
        </div>
      </footer>
    </div>
  );
}
