import { useI18n } from '@microeinhundert/radonis'
import { BaseLayout } from 'Layouts/Base'
import { HydrationRoot } from '@microeinhundert/radonis'
import SomeInteractiveIsland from 'Components/islands/SomeInteractiveIsland.island'

function Index () {
  const { formatMessage$ } = useI18n()

  const messages = {
    title: formatMessage$('home.index.title'),
  }

  return (
    <BaseLayout>
      <div className='mt-14 p-4'>
        <h1>{messages.title}</h1>
        <p>This is an empty view.</p>
        <a href='/dashboard'>
          <button>
          Dashboard
          </button>
        </a>
        <HydrationRoot>
          <SomeInteractiveIsland />
        </HydrationRoot>
      </div>
    </BaseLayout>
  )
}

export { Index }
