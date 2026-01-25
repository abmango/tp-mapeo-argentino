<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use App\Models\Categoria;
use App\Models\Region;
use App\Models\User;
use App\Models\Nota;
use App\Enums\RegionArgentina;

class MapaCartografico extends Model
{
    use HasUuids;

    protected $fillable = [
        'nombre',
        'descripcion',
        'imagen',
        'categoria_id',
        'fecha_inicio',
        'fecha_fin',
        'region',
        'creador_id',
        'url_imagen',
    ];

    protected $casts = [
        'region' => RegionArgentina::class,
    ];

    // Relaciones
    

    public function creador()
    {
        return $this->belongsTo(User::class);
    }

    public function notas()
    {
        return $this->hasMany(Nota::class);
    }

     public function categorias(){
        return $this->belongsToMany(Categoria::class, 'categoria_mapa', 'mapa_id', 'categoria_id');
     }


     public function agregarNota(Nota $nota)
     {
         return $this->notas()->save($nota);
     }


    public function agregarCategoria(Categoria $categoria)
    {
        $this->categorias()->attach($categoria);
    }

    public function quitarCategoria(Categoria $categoria)
    {
        $this->categorias()->detach($categoria);
    }
    
}
