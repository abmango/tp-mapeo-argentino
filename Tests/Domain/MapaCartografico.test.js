import MapaCartografico from '../../src/Domain/MapaCartografico.js';
import Categoria from '../../src/Domain/Categoria.js';
import Region from '../../src/Domain/Region.js';
import Creador from '../../src/Domain/Creador.js';
import Nota from '../../src/Domain/Nota.js';

describe('MapaCartografico', () => {
  test('debería crear un mapa cartográfico válido', () => {
    const categoria = new Categoria({descripcion: 'Topográfico'});
    const region = new Region({nombre: 'Patagonia'});
    const creador = new Creador({username: 'alexis', imagenPerfil: 'perfil.png', mail: 'alexis@mail.com', x_twitter: '@alexis', instagram: '@alexis.ig'});

    const mapa = new MapaCartografico({
      nombre: 'Mapa de la Patagonia',
      descripcion: 'Mapa físico y político de la Patagonia Argentina',
      imagen: 'patagonia.jpg',
      categoria: categoria,
      region: region,
      creador: creador,
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
    const nota = new Nota({contenido: 'Este mapa fue actualizado en 2024'});

    mapa.agregarNota(nota);

    expect(mapa.notas.length).toBe(1);
    expect(mapa.notas[0].contenido).toContain('actualizado');
  });

  test('debería lanzar error si la fecha de inicio es posterior a la de fin', () => {
    expect(() => new MapaCartografico({
      nombre: 'Mapa A',
      descripcion: 'desc',
      fechaInicio: new Date('2024-12-01'),
      fechaFin: new Date('2024-01-01')
    })).toThrow('La fecha de inicio no puede ser posterior a la fecha de fin.');
  });
});
