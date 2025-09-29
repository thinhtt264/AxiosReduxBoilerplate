import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { EventMapCore } from '@react-navigation/native';

/**
 * Hook to run a task after navigation animation ends
 * @param expensiveTask - The task to run after navigation animation completes
 */
export function useEffectAfterTransition(expensiveTask: () => void): void {
  const navigation = useNavigation();

  useEffect(() => {
    let cleanupTask: () => void;
    const unsubscribe = navigation.addListener(
      'transitionEnd' as keyof EventMapCore<never>,
      () => {
        const task = expensiveTask();
        unsubscribe?.(); // execute 1 time after transitionEnd
        if (typeof task === 'function') {
          cleanupTask = task;
        }
      },
    );
    return () => {
      cleanupTask?.();
      unsubscribe?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
