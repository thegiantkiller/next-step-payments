import { createContext, useState } from 'react';

export type AppPage = 'MyCardList' | 'Alias' | 'Form' | 'Payment';

type AppContextType = {
  page: AppPage;
  changePage: (type: AppPage) => void;
  isPayment: boolean;
  setPayment: (bool: boolean) => void;
};

export const PaymentAppContext = createContext<AppContextType>({
  page: 'MyCardList',
  changePage: function (type: AppPage) {},
  isPayment: false,
  setPayment: function (bool: boolean) {},
});

interface ProviderProps {
  children: React.ReactNode;
}

export const PaymentAppContextProvider = ({ children }: ProviderProps) => {
  const [page, setPage] = useState<AppPage>('MyCardList');
  const [isPayment, setIsPayment] = useState(false);

  const changePage = (type: AppPage) => {
    setPage(type);
  };
  const setPayment = (bool: boolean) => {
    setIsPayment(bool);
  };

  const context = {
    changePage,
    page,
    isPayment,
    setPayment,
  };
  return <PaymentAppContext.Provider value={context}>{children}</PaymentAppContext.Provider>;
};
