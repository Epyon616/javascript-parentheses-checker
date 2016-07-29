(function () {
  'use strict';

  describe('It should match parentheses', function () {
    it('should match curly braces', function () {
      expect(parenthesesAreBalanced("{}{}{}")).toBe(true);
      expect(parenthesesAreBalanced("{{{}}}")).toBe(true);
      expect(parenthesesAreBalanced("}{}{}{")).toBe(false)
    });

    it('should match square braces', function () {
      expect(parenthesesAreBalanced("[][][]")).toBe(true);
      expect(parenthesesAreBalanced("[[[]]]")).toBe(true);
      expect(parenthesesAreBalanced("][][][")).toBe(false)
    });

    it('should match round braces', function () {
      expect(parenthesesAreBalanced("()()()")).toBe(true);
      expect(parenthesesAreBalanced("((()))")).toBe(true);
      expect(parenthesesAreBalanced(")()()(")).toBe(false)
    });
  });
})();
