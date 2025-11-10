import MapaCartografico from '../../Domain/MapaCartografico.js';
import Categoria from '../../Domain/Categoria.js';
import Region from '../../Domain/Region.js';
import Creador from '../../Domain/Creador.js';
import Nota from '../../Domain/Nota.js';

describe('MapaCartografico', () => {
  test('debería crear un mapa cartográfico válido', () => {
    const categoria = new Categoria('Topográfico');
    const region = new Region('Patagonia');
    const creador = new Creador('alexis', 'perfil.png', 'alexis@mail.com', '@alexis', '@alexis.ig');

    const mapa = new MapaCartografico({
      nombre: 'Mapa de la Patagonia',
      descripcion: 'Mapa físico y político de la Patagonia Argentina',
      imagen: 'patagonia.jpg',
      categoria,
      region,
      creador,
      fechaInicio: new Date('2024-01-01'),
      fechaFin: new Date('2024-12-31')
    });

    expect(mapa.nombre).toBe('Mapa de la Patagonia');
    expect(mapa.categoria.descripcion).toBe('Topográfico');
    expect(mapa.region.nombre).toBe('Patagonia');
  });

  test('debería lanzar error si el nombre está vacío', () => {
    expect(() => new MapaCartografico({ nombre: '', descripcion: 'desc' }))
      .toThrow('El nombre del mapa es obligatorio');
  });

  test('debería permitir agregar una nota al mapa', () => {
    const mapa = new MapaCartografico({ nombre: 'Mapa A', descripcion: 'desc' });
    const nota = new Nota('Este mapa fue actualizado en 2024');

    mapa.agregarNota(nota);

    expect(mapa.notas.length).toBe(1);
    expect(mapa.notas[0].contenido).toContain('actualizado');
  });

  test('debería lanzar error si la fecha de fin es anterior a la de inicio', () => {
    expect(() => new MapaCartografico({
      nombre: 'Mapa A',
      descripcion: 'desc',
      fechaInicio: new Date('2024-12-01'),
      fechaFin: new Date('2024-01-01')
    })).toThrow('La fecha de fin no puede ser anterior a la fecha de inicio');
  });
});
