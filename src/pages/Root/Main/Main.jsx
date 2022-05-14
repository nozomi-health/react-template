import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full">
      <p className="text-green-400">{t('title')}</p>
    </div>
  );
};

export default Main;
