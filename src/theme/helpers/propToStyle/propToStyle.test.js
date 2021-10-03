import propToStyle from './index';

describe('propToStyle()', () => {
  describe('when a simple argument is received', () => {
    test('and it is a string', () => {
      const propToStyleResult = propToStyle('textAlign');
      const componentProps = { textAlign: 'center' }; // string
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ textAlign: 'center' });
    });

    test('and it is a number', () => {
      const propToStyleResult = propToStyle('flex');
      const componentProps = { flex: 1 }; // number
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toEqual({ flex: 1 });
    });
  });

  describe('when an argument with breakpoints is received', () => {
    test('renders only one breakpoint resolution', () => {
      const propToStyleResult = propToStyle('textAlign');
      const componentProps = { textAlign: { xs: 'center'} };
      const styleResult = propToStyleResult(componentProps);
      expect(styleResult).toMatchSnapshot();
    });

    test('renders two or more breakpoint resolutions', () => {
        const propToStyleResult = propToStyle('textAlign');
        const componentProps = { textAlign: { xs: 'center', md: 'right' } };
        const styleResult = propToStyleResult(componentProps);
        expect(styleResult).toMatchSnapshot();
      });
  });
});
