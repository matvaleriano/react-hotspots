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

  test.each`
    isClicking   | expected
    ${undefined} | ${false}
    ${false}     | ${false}
    ${true}      | ${true}
  `('should update isClicking', ({ isClicking }) => {
    act(() => {
      hook.result.current.actions.toggleIsClicking(isClicking);
    });

    expect(hook.result.current.state.isClicking).toEqual(isClicking);
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

  describe('deleteHotspot', () => {
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

    beforeEach(() => {
      act(() => {
        hook.result.current.actions.saveHotspot(hotspot);
      });
    });

    test('should remove the hotspot by id', () => {
      act(() => {
        hook.result.current.actions.deleteHotspot(id);
      });

      expect(hook.result.current.state.hotspots).toEqual([]);
    });

    test('should not remove any hotspot, id not found', () => {
      act(() => {
        hook.result.current.actions.deleteHotspot('wrong');
      });

      expect(hook.result.current.state.hotspots).toEqual([hotspot]);
    });
  });

  describe('editHotspot', () => {
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

    beforeEach(() => {
      act(() => {
        hook.result.current.actions.saveHotspot(hotspot);
      });
    });

    test('should update hotspot', () => {
      const editedHotspot = { ...hotspot, title: 'new title' };
      act(() => {
        hook.result.current.actions.editHotspot(editedHotspot);
      });

      expect(hook.result.current.state.hotspots).toEqual([editedHotspot]);
    });

    test('should not update any hotspot', () => {
      const editedHotspot = { ...hotspot, id: 'notFoundId' };
      act(() => {
        hook.result.current.actions.editHotspot(editedHotspot);
      });
      expect(hook.result.current.state.hotspots).toEqual([hotspot]);
    });
  });
});
