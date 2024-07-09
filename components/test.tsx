import { useTranslations } from "next-intl"

const Test = () => {
    const t = useTranslations('Navigation')
  return (
    <h1>{t('mission')}</h1>
  )
}

export default Test




