import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setChildError, setCountOfQuests } from '../../../redux/booking/bookingSlice';

export function useHideQuestsCounter(refCounter, initialState = false) {
  const [showQuestSelector, setShowQuestSelector] = useState(initialState);

  const dispatch = useDispatch();

  const setQuests = () => {
    if (showQuestSelector) {
      setShowQuestSelector(false);
      dispatch(setCountOfQuests());
      dispatch(setChildError());
    }
  };

  useEffect(() => {
    if (!refCounter.current) {
      return;
    }

    const hideOnClickOutside = (e) => {
      if (refCounter.current && !e.composedPath().includes(refCounter.current)) {
        setQuests();
      }
    };
    const hideOnEscape = (e) => {
      if (e.key === 'Escape') {
        setQuests();
      }
    };
    document.addEventListener('keyup', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
    return () => {
      document.removeEventListener('keyup', hideOnEscape, true);
      document.removeEventListener('click', hideOnClickOutside, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showQuestSelector]);

  return [showQuestSelector, setShowQuestSelector, setQuests];
}
