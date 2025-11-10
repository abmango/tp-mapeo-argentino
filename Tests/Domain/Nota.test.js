import Nota from '../../src/Domain/Nota.js';

describe('Nota', () => {
  test('debería crear una nota válida', () => {
    const nota = new Nota({ contenido: 'Este mapa fue revisado.' });
    expect(nota.contenido).toBe('Este mapa fue revisado.');
  });

  test('debería lanzar error si el contenido está vacío', () => {
    expect(() => new Nota('')).toThrow('El contenido de la nota es obligatorio');
  });
});
