import { useNavigate } from '@/router';
import { Button } from '@/components/ui/ButtonComponent';
import PageWrapper from '@/components/app/PageWrapper';
import useAppTranslation from '@/i18n/useAppTranslation';

const NotFoundPage = () => {
  const { t } = useAppTranslation();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <PageWrapper>
      <h1>{t('NotFoundPage.notFound')}</h1>
      <p>{t('NotFoundPage.pleaseTryADifferentRoute')}</p>
      <Button onClick={handleOnClick}>{t('NotFoundPage.home')}</Button>
    </PageWrapper>
  );
};

export default NotFoundPage;
