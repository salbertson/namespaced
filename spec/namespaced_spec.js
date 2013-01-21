describe('Namespaced', function() {
  describe('.declare', function() {
    it('declares the given namespace', function() {
      Namespaced.declare('my.namespace');

      expect(my.namespace).toEqual({});
    });

    it('does not override existing namespaces', function() {
      my = {'namespace': 'original'};

      Namespaced.declare('my.namespace');

      expect(my.namespace).toEqual('original');
    });
  });
});
