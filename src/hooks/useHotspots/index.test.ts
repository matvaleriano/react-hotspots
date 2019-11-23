import {
  renderHook,
  RenderHookResult,
  act,
} from '@testing-library/react-hooks';
import useHotspots from '.';
import { UseHotspotsResult } from './types';

describe('useHotspots', () => {
  let hook: RenderHookResult<unknown, UseHotspotsResult>;

  beforeEach(() => {
    hook = renderHook(() => useHotspots());
  });

  test('should return isClicking false', () => {
    expect(hook.result.current.state.isClicking).toBeFalsy();
  });

  test('should return an empty array of hotspots', () => {
    expect(hook.result.current.state.hotspots).toEqual([]);
  });

  test('should add a hotspot', () => {
    const hotspot = {
      description: 'description',
      id: new Date().toISOString(),
      position: {
        left: 0,
        top: 0,
      },
      title: 'title',
    };
    act(() => {
      hook.result.current.actions.saveHotspot(hotspot);
    });

    expect(hook.result.current.state.hotspots).toEqual([hotspot]);
  });

  test('should remove the hotspot by id', () => {
    const id = new Date().toISOString();
    const hotspot = {
      description: 'description',
      id,
      position: {
        left: 0,
        top: 0,
      },
      title: 'title',
    };

    act(() => {
      hook.result.current.actions.saveHotspot(hotspot);
    });

    act(() => {
      hook.result.current.actions.deleteHotspot(id);
    });

    expect(hook.result.current.state.hotspots).toEqual([]);
  });
});
