import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function LessonCard(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isLessonActive = slug === props.slug

  return (
    <Link
      to={`/event/lesson/${props.slug}`}
      className={classNames('group', {
        'pointer-events-none': !isLessonAvailable
      })}
    >
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isLessonActive
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames('text-sm font-medium flex items-center gap-2', {
              'text-blue-500': !isLessonActive,
              'text-white': isLessonActive
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={classNames('text-xs rounded py-[0.125rem] px-2 border font-bold', {
            'border-green-300 text-green-300': !isLessonActive,
            'border-white text-white': isLessonActive
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames('mt-4 block', {
          'text-gray-200': !isLessonActive,
          'text-white': isLessonActive
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}