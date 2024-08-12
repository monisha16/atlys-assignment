import { useCallback, useState } from 'react';
import AtlysToast from 'src/components/AtlysToast';

const useToast = () => {
  const [notification, setNotification] = useState(null);

  let timer;

  const triggerToast = useCallback((notificationProps) => {
    clearTimeout(timer);
    setNotification(notificationProps);
    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  }, []);

  const ToastComponent = (
    <div
      className={`fixed bottom-4 left-4 transform transition-all duration-300 ease-in ${
        notification ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
      }`}
    >
      <AtlysToast {...notification} />
    </div>
  );

  return { ToastComponent, triggerToast };
};

export default useToast;
