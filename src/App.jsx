import './App.css'
import { HeaderCard } from './components/headerCard'
import { UlCard } from './components/ulCard'
import { ColumnList } from './components/columnList'
import { Helper } from './components/helper'

const progLangList = [
  {title: 'Python', description: 'Высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью', status: "none"},
  {title: 'Java', description: 'Строго типизированный объектно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems', status: "finished"},
  {title: 'Go', description: 'Компилируемый многопоточный язык программирования, разработанный внутри компании Google', status: "in_progress"},
]

const frameworksList = [
  {title: 'Django', description: 'Cвободный фреймворк для веб-приложений на языке Python, использующий шаблон проектирования MVC', status: "none"},
  {title: 'Spring', description: 'Универсальный фреймворк с открытым исходным кодом для Java-платформы', status: "in_progress"},
  {title: 'Gin', description: 'Производительный веб-фреймворк, написанный на Golang', status: "none"},
]

const dbList = [
  {title: 'PostgreSQL', description: 'Свободная объектно-реляционная система управления базами данных', status: "finished"},
  {title: 'MySQL', description: 'Cвободная реляционная система управления базами данных', status: "in_progress"},
  {title: 'MongoDB', description: 'Документоориентированная система управления базами данных, не требующая описания схемы таблиц', status: "in_progress"},
]

const keysProg = ['ООП', 'Алгоритмы', 'Clean code', 'SOLID']
const keysFrame = ['Сервер и клиент', 'MVC, MVP, MVVM', 'REST и SOAP']
const keysDb = ['Отношения', 'Транзакции', 'ACID']

function App() {
  return (  
    <div id='root'>
        <Helper text='Для изменения статуса навыка, нажмите по нему правой кнопкой мыши'></Helper>
        <HeaderCard title={'Дорожная карта Backend developer'}></HeaderCard>
        <div className='skills'>
          <ColumnList header={'Языки программирования'} array={progLangList}></ColumnList>
          <ColumnList header={'Фреймворки'} array={frameworksList}></ColumnList>
          <ColumnList header={'Базы данных'} array={dbList}></ColumnList>
        </div>
        <span className='keys-header'>Важные понятия</span>
        <div className='keys'>
          <UlCard array={keysProg}></UlCard>
          <UlCard array={keysFrame}></UlCard>
          <UlCard array={keysDb}></UlCard>
        </div>
      </div>
  )
}

export default App
